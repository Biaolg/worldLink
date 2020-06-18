<template>
  <div class="detailedInof">
    <div class="head">
      <img :src="info.userImg" alt />
    </div>
    <div class="inf">
      <div>昵称：{{info.nickname}}</div>
      <div>邮箱：{{info.email}}</div>
      <div>UID：{{info.userId}}</div>
    </div>
    <!-- 按钮 -->
    <div class="btn">
      <van-button @click="signOut" type="warning">退出登录</van-button>
      <van-button @click="show=true" type="danger">注销账号</van-button>
    </div>
    <van-overlay :show="show" @click="show = !show">
      <div class="wrapper">
        <div class="block" @click.stop>
          <van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码" />
          <van-button @click="onCancellation" type="danger">确认注销</van-button>
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
export default {
  name: "detailedInof",
  data() {
    return {
      show: false,
      password: ""
    };
  },
  computed: {
    info() {
      return this.$store.state.info;
    }
  },
  methods: {
    signOut() {
      this.$router.push("/Signin");
    },
    onCancellation() {
      //   this.$router.push("/Signin");
      if (this.password == "") {
        this.$toast.fail("请输入密码");
        return;
      }
      this.$toast.loading({
        message: "发送中...",
        duration: 0,
        forbidClick: true
      });
      this.axios
        .post("/cancellation", {
          password: this.password,
          email: this.$store.state.useEmail
        })
        .then(requer => {
          if (requer.data.code == 1120) {
            //成功
            this.$toast.success(requer.data.msg);
            this.$router.push("Singin");
            return;
          }
          this.$toast.fail(requer.data.msg);
        })
        .catch(err => {
          
          //失败
          this.$toast.fail("网络错误");
        });
    }
  }
};
</script>

<style lang="less" scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.btn {
  bottom: 10px;
  .van-button {
    border-radius: 50px;
    margin: 20px;
  }
}
.detailedInof {
  z-index: 1000;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.head {
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 50%;
  img {
    width: 200%;
    display: block;
  }
}
.inf {
  margin: 20px;
  font-size: 1.2em;
  > div {
    padding: 10px;
    margin: 10px;
    border: solid #fff 2px;
    border-radius: 50px;
    color: #fff;
    text-align: center;
  }
}
</style>