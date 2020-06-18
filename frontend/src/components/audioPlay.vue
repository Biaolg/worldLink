<template>
  <div class="audioPlay">
    <div class="turntable">
      <div class="picture">
        <img :class="{animation:!musicPlay}" :src="toData.coverImg" />
      </div>
      <div class="bg" :style="{background:`url(${toData.coverImg})`}"></div>
    </div>
    <!-- 控制器 -->
    <div class="controller">
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
    <audio :id="'audio'+toData.id" :src="toData.coverMusic"></audio>
  </div>
</template>

<script>
export default {
  name: "audioPlay",
  props: ["toData"],
  data() {
    return {
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
  methods: {
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
    //进度条
    timer() {
      if (!this.timerconl) {
        let audio = document.querySelector("#audio" + this.toData.id);
        audio.pause();
        audio.currentTime = (this.timer / 100) * audio.duration;
      }
    },
    //音量
    volume() {
      let audio = document.querySelector("#audio" + this.toData.id);
      audio.volume = this.volume / 100;
    }
  },
  mounted() {
    let audio = document.querySelector("#audio" + this.toData.id);
    audio.onplay = () => {
      this.musicPlay = true;
    };
  }
};
</script>

<style lang="less" scoped>
.turntable {
  display: flex;
  justify-content: center;
  position: relative;
  .bg {
    background-position: center;
    position: absolute;
    width: 100%;
    height: 100%;
    filter: blur(10px) brightness(90%);
  }
  img {
    width: 200%;
    display: block;
    z-index: 100;
    animation: play 4s linear infinite;
  }
  .animation {
    animation-play-state: paused;
  }
  .picture {
    margin: 20px 0px;
    width: 200px;
    height: 200px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }
}

@keyframes play {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.controller {
  //   border: solid #eee 1px;
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