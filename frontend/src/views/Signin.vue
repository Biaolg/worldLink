
<template>
  <!-- 登录页 -->
  <div id="Singin">
    <div class="ioc">
      <img src="../assets/img/worldLink.png" alt />
    </div>
    <!-- 表单 -->
    <van-form @submit="onSubmit" class="font">
      <van-field v-model="inf.email" label="账号" name="邮箱" placeholder="请输入注册邮箱" />
      <van-field v-model="inf.password" type="password" name="密码" label="密码" placeholder="密码" />
      <div style="margin: 30px;">
        <van-button round block type="info" native-type="submit">登录</van-button>
      </div>
    </van-form>

    <!-- 底部 -->
    <div class="bottom">
      <span>
        <router-link to="/register">注册账号</router-link>
      </span>
      |
      <span>
        <router-link to="/forgetPassword">忘记密码</router-link>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  //forgetPassword
  name: "Singin",
  data() {
    return {
      inf: {
        email: "",
        password: ""
      }
    };
  },
  computed: {
    //由注册页转跳时自动写入账号
    useEmail() {
      return this.$store.state.useEmail;
    },

    //格式验证
    //邮箱
    validEmail() {
      return /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(
        this.inf.email
      );
    }
  },
  methods: {
    //点击登录
    onSubmit() {
      //是否为空
      if (this.inf.email === "" || this.inf.password === "") {
        this.$toast.fail("请输入账号和密码");
        return;
      }
      //格式
      if (!this.validEmail) {
        this.$toast.fail("账号格式错误");
        return;
      }

      this.$toast.loading({
        message: "登录中...",
        duration: 0,
        forbidClick: true
      });

      //发起登录请求
      this.axios({
        method: "POST",
        url: "/singin",
        data: this.inf
      })
        .then(result => {
          
          if (result.data.code == 1020) {
            //成功
            this.$toast.success(result.data.msg);
            //当前用户邮箱
            this.$store.commit("setUseEmail", this.inf.email);
            this.$cookies.set("_xiaoll", result.data.token, "5d");
            //路由跳转
            this.$router.push("/home/world");
            return;
          }
          //异常
          this.$toast.fail(result.data.msg);
        })
        .catch(err => {
          
          //失败
          this.$toast.fail("网络错误");
        });
    }
  },
  created() {}
};
</script>

<style lang="less" scoped>
#Singin {
  height: 100%;
  display: flex;
  flex-direction: column;
  // align-items: center;
  justify-content: center;
  img {
    width: 100%;
    display: block;
  }
  .ioc {
    width: 30%;
    margin: 0px auto;
    margin-bottom: 80px;
  }
  .font {
    margin-bottom: 80px;
  }
  .bottom {
    margin: 10px 0;
    text-align: center;
    width: 100%;
    position: fixed;
    bottom: 0px;
    color: #0090ff;
    a {
      color: #0090ff;
      padding: 5px;
    }
  }
}
</style>