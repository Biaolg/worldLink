<template>
  <div id="forgetPassword">
    <!-- 路由 -->
    <div class="rout">
      <van-nav-bar title="找回密码" left-arrow @click-left="onClickLeftr" />
    </div>
    <div class="font">
      <!-- 表单 -->
      <van-form @submit="onSubmit" class="font">
        <van-field v-model="inf.email" label="邮箱" name="邮箱" placeholder="请输入注册邮箱" />

        <van-field v-model="inf.code" center clearable label="邮箱验证码" placeholder="邮箱验证码">
          <template #button>
            <van-button
              size="small"
              :disabled="sbText!=`发送验证码`"
              type="primary"
              @click="getEmalisTitle"
            >{{sbText}}</van-button>
          </template>
        </van-field>

        <div style="margin: 30px;">
          <van-button round block type="info" native-type="submit">下一步</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
export default {
  naem: "forgetPassword",
  data() {
    return {
      inf: {
        email: "",
        code: ""
      },
      sbText: "发送验证码"
    };
  },
  computed: {
    //格式验证
    //邮箱
    validEmail() {
      return /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(
        this.inf.email
      );
    },
    //验证码
    validCode() {
      return /^\d{6}$/.test(this.inf.code);
    }
  },
  methods: {
    //下一步按钮
    onSubmit() {
      //是否为空
      if (this.inf.email === "" || this.inf.code === "") {
        this.$toast.fail("请输邮箱和验证码");
        return;
      }
      //邮箱格式
      if (!this.validEmail) {
        this.$toast.fail("邮箱格式错误");
        return;
      }
      //验证码格式
      if (!this.validCode) {
        this.$toast.fail("请输入6位数的验证码");
        return;
      }

      //申请
      this.$toast.loading({
        message: "发送中...",
        duration: 0,
        forbidClick: true
      });
      this.axios({
        method: "POST",
        url: "/forgetpassword",
        data: this.inf
      })
        .then(result => {
          
          if (result.data.code == 1040) {
            //成功
            this.$toast.success(result.data.msg);
            //当前用户邮箱
            this.$store.commit("setUseEmail", this.inf.email);
            //设置cookies用于跳转
            this.$cookies.set("_xiaozz", result.data.token, "10s");
            this.$router.push("setPasword");
            return;
          }
          //异常
          this.$toast.fail(result.data.msg);
        })
        .catch(err => {
          
          //失败
          this.$toast.fail("网络错误");
        });
    },
    //邮箱验证码按钮
    getEmalisTitle() {
      //时间控制
      let ti = 10;
      this.sbText = ti-- + "后再次发送";
      let tiemr = setInterval(() => {
        this.sbText = ti-- + "后再次发送";
        if (ti < 0) {
          this.sbText = "发送验证码";
          clearInterval(tiemr);
        }
      }, 1000);

      this.$toast.loading({
        message: "加载中...",
        duration: 0,
        forbidClick: true
      });

      //数据传输
      this.axios({
        method: "POST",
        url: "/sendmail",
        data: this.inf
      })
        .then(result => {
          
          if (result.data.code == 1010) {
            //成功
            this.$toast.success(result.data.msg);
            return;
          }
          //异常
          this.$toast.fail(result.data.msg);
        })
        .catch(err => {
          
          //失败
          this.$toast.fail("网络错误");
        });
    },
    //返回登录页
    onClickLeftr() {
      this.$router.push("Singin");
    }
  }
};
</script>

<style lang="less" scoped>
#forgetPassword {
  height: 100%;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  justify-content: center;
}
.rout {
  width: 100%;
  position: fixed;
  top: 0;
}
</style>