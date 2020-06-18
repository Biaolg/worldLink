<template>
  <div class="musicUpload">
    <van-nav-bar title="音乐栏目" left-arrow @click-left="routerMy" />

    <!-- 表单 -->
    <div class="form">
      <van-form @submit="onSubmit">
        <div>
          <imageupBar @getImgpath="onGetImg($event)"></imageupBar>
        </div>
        <div>
          <audioupBar @toMusicePath="onMusic($event)"></audioupBar>
        </div>
        <van-field v-model="info.title" name="标题" label="标题" placeholder="标题" />
        <van-field v-model="info.briefIntroduction" name="寄语" label="寄语" placeholder="寄语" />
        <div style="margin: 16px;">
          <van-button round block type="info" :disabled="!subOn" native-type="submit">提交</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
// import audioupBar from "../components/audioupBar.vue";
// import imageupBar from "../components/imageupBar.vue";
const audioupBar = () => import("../components/audioupBar.vue");
const imageupBar = () => import("../components/imageupBar.vue");

export default {
  name: "musicUpload",
  data() {
    return {
      info: {
        title: "",
        briefIntroduction: "",
        musicPath: "",
        imgPath: "",
        email: "",
        type: "music"
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
  methods: {
    //路由跳转
    routerMy() {
      this.$router.push("/home/myUpload");
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
    },
    onGetImg(value) {
      this.info.imgPath = value;
      // 
    },
    onMusic(value) {
      this.info.musicPath = value;
      // 
    }
  },
  components: {
    audioupBar,
    imageupBar
  }
  // beforeCreate() {
  //   this.$store.commit("setBarSeen", false);
  // },
  // beforeDestroy() {
  //   this.$store.commit("setBarSeen", true);
  // }
};
</script>

<style lang="less" scoped>
.musicUpload {
  padding-bottom: 40px;
  height: 80%;
}
.form {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>