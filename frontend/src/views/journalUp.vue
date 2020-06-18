<template>
  <div class="journalUp">
    <van-nav-bar title="日志" left-arrow @click-left="routerMy" />
    <!-- 表单 -->
    <div class="form">
      <van-form @submit="onSubmit">
        <div>
          <imageupBar @getImgpath="onGetImg($event)"></imageupBar>
        </div>
        <van-field v-model="info.title" name="标题" label="标题" placeholder="标题" />
        <van-field v-model="info.briefIntroduction" name="寄语" label="寄语" placeholder="寄语" />
        <van-field
          v-model="info.content"
          rows="5"
          autosize
          label="内容"
          type="textarea"
          maxlength="250"
          placeholder="内容"
          show-word-limit
        />
        <div style="margin: 16px;">
          <van-button round block type="info" :disabled="!subOn" native-type="submit">提交</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
// import imageupBar from "../components/imageupBar.vue";
const imageupBar = () => import("../components/imageupBar.vue");

export default {
  name: "journalUp",
  data() {
    return {
      info: {
        title: "",
        briefIntroduction: "",
        imgPath: "",
        content: "",
        email: "",
        type: "text"
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
    //数据上传
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
    }
  },
  components: {
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
.journalUp {
  padding-bottom: 40px;
}
</style>