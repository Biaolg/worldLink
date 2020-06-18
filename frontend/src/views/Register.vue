<template>
  <div id="Register" class="register">
    <!-- 路由 -->
    <div class="rout">
      <van-nav-bar title="注册" left-arrow @click-left="onClickLeftr" />
    </div>

    <!-- 表单 -->
    <van-form @submit="onSubmit" enctype="multipart/form-data" class="biaod">
      <div class="head-img">
        <span>头像上传</span>
        <div>
          <van-uploader v-model="seenFlie" :after-read="afterRead" :max-count="1" />
        </div>
      </div>
      <van-field
        v-model="inf.email"
        label="邮箱"
        name="邮箱"
        placeholder="请输入邮箱"
        :style="!validEmail&&{color:'red'}"
      />
      <van-field
        v-model="inf.nickname"
        name="昵称"
        label="昵称"
        placeholder="昵称"
        :style="!validnickname&&{color:'red'}"
      />
      <van-field
        v-model="inf.password"
        type="text"
        name="密码"
        label="密码"
        placeholder="密码"
        :style="!validPassword&&{color:'red'}"
      />
      <van-field
        v-model="inf.code"
        center
        clearable
        label="邮箱验证码"
        placeholder="邮箱验证码"
        :style="!validCode&&{color:'red'}"
      >
        <template #button>
          <van-button
            size="small"
            :disabled="sbText!=`发送验证码`"
            type="primary"
            @click="getEmalisTitle"
          >{{sbText}}</van-button>
        </template>
      </van-field>
      <div style="margin: 16px;">
        <van-button round block type="info" :disabled="!validSubmit" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      inf: {
        email: "",
        nickname: "",
        password: "",
        code: "",
        img: ""
      },
      sbText: "发送验证码",
      seenFlie: [],
      img: null
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
    //昵称
    validnickname() {
      return /^[\w\u4e00-\u9fa5]{1,10}$/.test(this.inf.nickname);
    },
    //密码
    validPassword() {
      return /^[A-Za-z]\w{5,15}$/.test(this.inf.password);
    },
    //验证码
    validCode() {
      return /^\d{6}$/.test(this.inf.code);
    },
    //提交按钮
    validSubmit() {
      return (
        this.validEmail &&
        this.validnickname &&
        this.validPassword &&
        this.validCode
      );
    }
  },
  methods: {
    //图片文件
    afterRead(file) {
      // let file = file.file;
      this.img = file.file;

      let formData = new FormData();
      formData.append("file", file.file);

      //取消序列化
      this.axios.dataType = false;

      this.axios
        .post("/upfile", formData)
        .then(requers => {
          this.inf.img = requers.data.filePath;
          this.axios.dataType = true;
        })
        .catch(err => {
          //
          this.axios.dataType = true;
        });
    },
    //注册按钮
    onSubmit() {
      this.$toast.loading({
        message: "发送中...",
        duration: 0,
        forbidClick: true
      });
      //发起注册请求
      this.axios({
        method: "POST",
        url: "/register",
        data: this.inf
      })
        .then(result => {
          if (result.data.code == 1000) {
            //成功
            this.$toast.success(result.data.msg);
            this.$router.push("Singin");
            return;
          }
          //异常
          this.$toast.fail(result.data.msg);
          // this.$router.push("Singin");
        })
        .catch(err => {
          //失败
          this.$toast.fail("网络错误");
        });
    },
    //邮箱验证码按钮
    getEmalisTitle() {
      if (!this.validEmail) {
        // this.$toast.fail("邮箱格式错误");
        return;
      }
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
.rout {
  position: fixed;
  top: 0px;
  width: 100%;
}
.register {
  height: 100%;
  display: flex;
  align-items: center;
  .biaod {
    width: 100%;
  }
  .head-img {
    display: flex;
    flex-direction: column;
    align-items: center;
    span {
      display: block;
      // text-align: center;
      width: 75px;
    }
  }
}
</style>