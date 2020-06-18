<template>
  <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <div class="myUpload">
      <!-- 用户上传 -->
      <div>
        <seenBar
          v-for="(item,index) in barData"
          :key="index"
          :index="index"
          :position="true"
          :toData="item"
        ></seenBar>
      </div>

      <!-- 上传按钮 -->
      <div class="upBtn">
        <div class="text" :class="{seenText:btntran}" @click="textClick">
          <van-icon name="edit" />
        </div>
        <div class="audio" :class="{seenAoudio:btntran}" @click="audioClick">
          <van-icon name="audio" />
        </div>
        <div class="sennVideo" :class="{seentheVoido:btntran}" @click="videoClick">
          <van-icon name="video" />
        </div>
        <div class="btn" @click="upBtnClick" :class="{zhuanBtn:btntran}">
          <van-icon name="plus" />
        </div>
      </div>
    </div>
  </van-pull-refresh>
</template>

<script>
// import seenBar from "../components/seenBar";
const seenBar = () => import("../components/seenBar.vue");

export default {
  name: "myUpload",
  data() {
    return {
      btntran: false,
      musicSrc: "",
      barData: null,
      isLoading: false
    };
  },
  components: {
    seenBar
  },
  methods: {
    onRefresh() {
      this.getmyupdata();
    },
    upBtnClick() {
      this.btntran = !this.btntran;
    },
    //音乐上传页跳转
    audioClick() {
      this.$router.push("/home/musicUpload");
    },
    //日志上传页跳转
    textClick() {
      this.$router.push("/home/journalUp");
    },
    //视频页跳转
    videoClick() {
      this.$router.push("/home/videoUp");
    },
    getmyupdata() {
      this.axios
        .post("/getmyuodata", { email: this.$store.state.useEmail })
        .then(requers => {
          this.isLoading = false;
          if (requers.data.code == 1090) {
            this.barData = requers.data.require;
            //会话储存
            sessionStorage.setItem(
              this.$store.state.useEmail + "myup",
              JSON.stringify(this.barData)
            );
            this.$toast.success("获取数据成功");
            return;
          }
          this.$toast.fail(requers.data.msg);
        })
        .catch(err => {
          //失败
          this.$toast.fail("网络错误");
          this.isLoading = false;
        });
    }
  },
  mounted() {
    let maUpData = sessionStorage.getItem(this.$store.state.useEmail + "myup");
    if (maUpData && maUpData != []) {
      this.barData = JSON.parse(maUpData);
      return;
    }

    this.getmyupdata();
  }
};
</script>

<style lang="less" scoped>
.myUpload {
  padding-bottom: 50px;
}
.upBtn {
  z-index: 500;
  > div {
    width: 50px;
    height: 50px;
    position: fixed;
    bottom: 50px;
    right: 10px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 35px;
    color: white;
    transition: all 0.3s;
    z-index: 501;
  }
  .btn {
    background-color: rgba(0, 150, 255);
    z-index: 501;
    transform: rotate(0deg);
  }
  .zhuanBtn {
    background-color: rgba(255, 0, 0, 0.8);
    transform: rotate(-225deg);
  }
  .text {
    background-color: orange;
  }
  .seenText {
    transform: translate(0, -110%);
  }
  .audio {
    background-color: pink;
  }
  .seenAoudio {
    transform: translate(0, -220%);
  }
  .sennVideo {
    background-color: skyblue;
  }
  .seentheVoido {
    transform: translate(0, -330%);
  }
}
</style>