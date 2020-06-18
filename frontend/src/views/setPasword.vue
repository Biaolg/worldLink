<template>
  <div id="setPassword">
    <!-- 路由 -->
    <div class="rout">
      <van-nav-bar title="修改密码" left-arrow @click-left="onClickLeftr" />
    </div>

    <div class="font">
      <!-- 表单 -->
      <van-form @submit="onSubmit" class="font">
        <van-field
          v-model="password"
          type="text"
          name="新密码"
          label="新密码"
          placeholder="新密码"
          :style="!validPassword&&{color:'red'}"
        />
        <van-field
          v-model="repassword"
          type="text"
          name="确认密码"
          label="确认密码"
          placeholder="确认密码"
          :style="!passjun&&{color:'red'}"
        />
        <div style="margin: 30px;">
          <van-button round block type="info" :disabled="!passjun" native-type="submit">提交</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "setpassword",
  data() {
    return {
      password: "",
      repassword: ""
    };
  },
  computed: {
    //确认密码
    passjun() {
      if (!this.validPassword) {
        return false;
      }
      return this.password === this.repassword;
    },
    //密码
    validPassword() {
      return /^[A-Za-z]\w{5,15}$/.test(this.password);
    }
  },
  methods: {
    //提交
    onSubmit() {
      this.$toast.loading({
        message: "加载中...",
        duration: 0,
        forbidClick: true
      });

      //数据传输
      this.axios({
        method: "POST",
        url: "/Setpassword",
        data: { password: this.password, email: this.$store.state.useEmail }
      })
        .then(result => {
          // 
          if (result.data.code == 1070) {
            //成功
            this.$toast.success(result.data.msg);
            //跳转到登录页面
            this.$router.push("Signin");
            return;
          }
          //异常
          this.$toast.fail(result.data.msg);
        })
        .catch(err => {
          
          //失败
          this.$toast.fail("网络错误");
        });

      //成功
      // this.$router.push("Signin");
    },
    //返回登录页
    onClickLeftr() {
      this.$router.push("Singin");
    }
  }
};
</script>

<style lang="less" scoped>
.rout {
  position: fixed;
  top: 0px;
  width: 100%;
}
#setPassword {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>