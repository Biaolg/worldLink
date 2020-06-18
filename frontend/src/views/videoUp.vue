<template>
  <div class="audioUp">
    <van-nav-bar title="视频栏目" left-arrow @click-left="routerMy" />

    <!-- 表单 -->
    <div class="form">
      <van-form>
        <div>
          <imageupBar @getImgpath="onGetImg($event)"></imageupBar>
        </div>
        <div>
          <videoupBar @toMusicePath="onGetVideo($event)"></videoupBar>
        </div>
        <van-field v-model="info.title" name="标题" label="标题" placeholder="标题" />
        <van-field v-model="info.briefIntroduction" name="寄语" label="寄语" placeholder="寄语" />
        <div style="margin: 16px;">
          <van-button
            round
            block
            type="info"
            :disabled="!subOn"
            native-type="submit"
            @click="onSubmit"
          >提交</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
// import imageupBar from "../components/imageupBar.vue";
// import videoupBar from "../components/videouoBar.vue";
const imageupBar = () => import("../components/imageupBar.vue");
const videoupBar = () => import("../components/videouoBar.vue");

export default {
  name: "audioUp",
  data() {
    return {
      info: {
        title: "",
        briefIntroduction: "",
        vudioPath: "",
        imgPath: "",
        email: "",
        type: "video"
      }
    };
  },
  computed: {
    subOn() {
      for (const key in this.info) {
        if (this.info[key] == "") {
          if (key == "email") continue;
          return false;
        }
      }
      return true;
    }
  },
  components: {
    imageupBar,
    videoupBar
  },
  methods: {
    routerMy() {
      this.$router.push("/home/myUpload");
    },
    onGetImg(value) {
      this.info.imgPath = value;
    },
    onGetVideo(value) {
      this.info.vudioPath = value;
    },
    //数据提交
    onSubmit() {
      this.info.email = this.$store.state.useEmail;

      for (const key in this.info) {
        if (this.info[key] == "") {
          this.$toast.fail("请补全内容");
          return;
        }
      }

      this.info.email = this.$store.state.useEmail;

      for (const key in this.info) {
        if (this.info[key] == "") {
          this.$toast.fail("请补全内容");
          return;
        }
      }

      this.$toast.loading({
        message: "发送中...",
        duration: 0,
        forbidClick: true
      });
      this.axios
        .post("/fileDataUpload", this.info)
        .then(requers => {
          if (requers.data.code == 1090) {
            this.$toast.success(requers.data.msg);
            this.routerMy();
            return;
          }
          this.$toast.fail(requers.data.msg);
        })
        .catch(err => {
          this.$toast.fail(requers.data.msg);
          
        });
    }
  }
  // beforeDestroy() {
  //   this.$store.commit("setBarSeen", true);
  // }
};
</script>

<style lang="less" scoped>
.audioUp {
  padding-bottom: 40px;
}
</style>