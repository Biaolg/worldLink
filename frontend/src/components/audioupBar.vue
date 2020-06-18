<template>
  <div class="audioupBar">
    <h3>音乐上传</h3>
    <div class="musicBur">
      <input id="upFile" type="file" accept=".mp3" v-show="false" @change="inputGet" />
      <label for="upFile">
        <div class="upIco" :style="upBtnSeen&&{backgroundColor:'#cf1a34'}" @click="zhuanClick">
          <div :class="{upDivZhuan:upBtnSeen}">
            <van-icon name="add-o" />
          </div>
        </div>
      </label>
      <div class="canvsa">
        <canvas class="can" width="3000" height="500"></canvas>
      </div>
    </div>
    <!-- 可视化组件底部进度条 -->
    <div class="seenContr">
      <van-slider v-model="timer" min="0" max="100" active-color="#cf1a34">
        <template #button>
          <div></div>
        </template>
      </van-slider>
    </div>
    <!-- 控制器 -->
    <div class="controller" :style="!upBtnSeen&&{height:'0px'}">
      <!-- 进度条 -->
      <div class="timer" :class="{conSeen:timerSeen}" @click="seenControl('timer')">
        <van-icon name="clock-o" v-if="!timerSeen" />
        <van-slider v-model="timer" v-else active-color="#1acf34" min="0" max="100">
          <template #button>
            <div
              class="neibtn"
              @touchstart="mouDown"
              @touchend="mouUp"
              @touchcancel="touchend = true"
            >
              <van-icon name="clock-o" />
            </div>
          </template>
        </van-slider>
      </div>
      <!-- 播放/暂停按钮 -->
      <div class="conBtn">
        <div @click="musicPlatyon">
          <van-icon v-if="!musicPlay" name="play-circle-o" />
          <van-icon v-else name="pause-circle-o" />
        </div>
      </div>
      <!-- 音量 -->
      <div class="volume" :class="{conSeen:volmeSeen}" @click="seenControl('volume')">
        <van-icon name="volume-o" v-if="!volmeSeen" />
        <van-slider v-model="volume" v-else active-color="#1acf34" min="0" max="100">
          <template #button>
            <div class="neibtn">
              <van-icon name="volume-o" />
            </div>
          </template>
        </van-slider>
      </div>
    </div>
    <!-- audio -->
    <audio :src="file"></audio>
  </div>
</template>

<script>
import audioContext from "../audioContext/audio";
export default {
  name: "audioupBar",
  data() {
    return {
      file: null,
      timer: 0,
      volume: 100,
      //音乐开关
      musicPlay: false,
      //控制进度条显示
      timerSeen: false,
      //音量控制条
      volmeSeen: false,
      timerconl: true
    };
  },
  computed: {
    upBtnSeen() {
      return this.file ? true : false;
    }
  },
  methods: {
    //动画
    animation(data, ctx) {
      //
      ctx.clearRect(0, 0, 3000, 500);

      ctx.lineWidth = 50;
      let my_gradient = ctx.createLinearGradient(0, 0, 3000, 0);
      my_gradient.addColorStop(0, "pink");
      my_gradient.addColorStop(0.5, "skyblue");
      my_gradient.addColorStop(1, "pink");
      ctx.strokeStyle = my_gradient;
      ctx.lineCap = "round";

      //左
      for (let i = 0; i < 25; i++) {
        let index = 30 + i;
        let x = 3000 / 2 - i * 60;
        let height = 500 - data[index] * 2 + i * 10;

        //
        ctx.beginPath();
        ctx.moveTo(x, 500);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      //右
      for (let i = 0; i < 25; i++) {
        let index = 30 + i;
        let x = 3000 / 2 + i * 60;
        let height = 500 - data[index] * 2 + i * 10;

        ctx.beginPath();
        ctx.moveTo(x, 500);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
    },
    zhuanClick() {
      this.file && (this.file = null);
    },
    //input文件获取
    inputGet(value) {
      this.file = null;

      this.$emit("toMusicePath", "");

      if (value === undefined || value.target.files.length === 0) {
        return;
      }
      this.file = window.URL.createObjectURL(value.target.files[0]);

      let formData = new FormData();
      formData.append("file", value.target.files[0]);

      this.axios.dataType = false;

      this.axios
        .post("/upfile", formData)
        .then(requers => {
          this.$emit("toMusicePath", requers.data.filePath);

          this.axios.dataType = true;
        })
        .catch(err => {
          this.axios.dataType = true;
        });
    },
    //控件显示
    seenControl(type) {
      if (type == "timer") {
        this.timerSeen = true;
        this.volmeSeen = false;
        return;
      }
      this.volmeSeen = true;
      this.timerSeen = false;
    },
    //收起控件
    Putitaway() {
      this.timerSeen = false;
      this.volmeSeen = false;
    },
    // 音乐控制
    musicPlatyon() {
      this.musicPlay = !this.musicPlay;
      let audio = document.querySelector("audio");
      if (!this.musicPlay) {
        this.Putitaway();
        audio.pause();
        return;
      }
      audio.play();
      audio.ontimeupdate = () => {
        if (this.timerconl) {
          this.timer = Math.floor((audio.currentTime / audio.duration) * 100);
        }
      };
    },
    //控制条优化
    mouDown() {
      this.timerconl = false;
    },
    mouUp() {
      this.timerconl = true;
      let audio = document.querySelector("audio");
      audio.play();
    }
  },
  watch: {
    upBtnSeen() {
      this.timer = 0;
      if (!this.upBtnSeen) {
        this.musicPlay = false;
        this.Putitaway();
      }
    },
    file() {
      if (this.file == null) {
        document.querySelector("audio").pause();
      }
    },
    //进度条
    timer() {
      //

      if (!this.timerconl) {
        let audio = document.querySelector("audio");
        audio.pause();
        audio.currentTime = (this.timer / 100) * audio.duration;
      }
    },
    //音量
    volume() {
      let audio = document.querySelector("audio");
      audio.volume = this.volume / 100;
    }
  },
  mounted() {
    let audio = document.querySelector("audio");
    let canvas = document.querySelector("canvas");

    //
    let aoCon = new audioContext(audio, canvas, this.animation);
    aoCon.openPlay();
  }
};
</script>

<style lang="less" scoped>
.canvsa {
  width: 100%;
  //   height: 50px;
  .can {
    width: 100%;
    // height: 100%;
    display: block;
  }
}

.musicBur {
  display: flex;
  .upIco {
    > div {
      height: 35px;
      transform: rotate(0deg);
      transition: all 0.3s;
    }
    .upDivZhuan {
      transform: rotate(-135deg);
    }
    width: 55px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 35px;
    background-color: #1acf34;
    color: white;
    transition: all 0.3s;
  }
}

h3 {
  text-align: center;
}

.seenContr {
  pointer-events: none;
  .van-slider__button {
    width: 0px;
    height: 0px;
  }
}

.controller {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  transition: height 0.3s;
  overflow: hidden;
  .timer {
    width: 50px;
  }
  .volume {
    width: 50px;
  }
  .conSeen {
    width: 100%;
    margin-right: 5%;
    margin-left: 5%;
  }
  > div {
    width: 50px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 35px;
    transition: all 0.3s;
    > div {
      height: 35px;
    }
  }
  .neibtn {
    height: 35px;
    width: 35px;
    background-color: #fff;
    border-radius: 50%;
    font-size: 30px;
    display: flex;
    transform: translateY(1px);
    justify-content: center;
    align-items: center;
    // background-color: #1acf34;
  }
}
</style>