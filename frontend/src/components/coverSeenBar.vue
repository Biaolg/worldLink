<template>
  <div class="coverSeen">
    <div
      class="cover"
      v-if="ifSheen"
      :class="{covernoSeen:infoSheen}"
      :style="sheen&&{height:'50px'}"
      @click="setIndex"
    >
      <img :class="{imgSeen:sheen}" :src="toCover.coverImg" alt />
      <div class="type" :class="{typeSeen:sheen,homeSheen:!position}">
        <van-icon v-if="toCover.type=='text'" name="edit" color="#ffa500" />
        <van-icon v-else-if="toCover.type=='video'" name="video" color="#87ceeb" />
        <van-icon v-else-if="toCover.type=='music'" name="music" color="#ffc0cb" />
      </div>
      <!-- 删除按钮 -->
      <div class="delete" v-if="position" v-show="!sheen" @click.stop="upDeleta">
        <van-icon name="delete" />
      </div>
      <div class="title">
        <h3>{{toCover.coverTitle}}</h3>
        <h5 v-show="!sheen">{{toCover.coverMessage}}</h5>
        <div v-show="!sheen" class="updwico">
          <!-- 分享按钮 -->
          <div v-if="posit">
            <van-icon v-if="!isShare" name="upgrade" color="#64e6d1" @click.stop="upShare" />
            <van-icon class="down" v-else name="upgrade" color="#0299fe" @click.stop="upShare" />
          </div>
          <div class="headImg" v-else>
            <headImg @openInfo="openInfo" :userImg="info.userImg"></headImg>
          </div>
        </div>
      </div>
    </div>
    <div class="inof" :class="{seenInfo:infoSheen}">
      <div class="fallback">
        <van-icon name="arrow-left" @click="suspendInfo" />
      </div>
      <div class="detailed">
        <div class="head">
          <img :src="info.userImg" alt />
        </div>
        <div class="content">
          <div>
            <div class="title">昵称</div>
            {{info.nickname}}
          </div>
          <div>
            <div class="title">邮箱</div>
            {{info.email}}
          </div>
          <div>
            <div class="title">UID</div>
            {{info.userId}}
          </div>
          <div class="btn">
            <van-button @click="jumpCath" type="primary">发送消息</van-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import headImg from "../components/headImg";
const headImg = () => import("../components/headImg.vue");

export default {
  name: "coverSeen",
  props: ["toCover", "index", "position"],
  data() {
    return {
      isShare: true,
      ifSheen: true,
      info: {}
    };
  },
  components: {
    headImg
  },
  computed: {
    infoSheen() {
      let b = false;
      if (this.$store.state.myIndexInf == this.index) {
        b = true;
      }
      return b;
    },
    sheen() {
      let b = false;
      if (this.$store.state.myIndex == this.index) {
        b = true;
      }
      return b;
    },
    posit() {
      if (this.toCover.email == this.$store.state.useEmail) {
        return true;
      }
      return this.position;
    }
  },
  methods: {
    //跳转聊天
    jumpCath() {
      this.$store.commit("setChatSheen", true);
      this.$store.commit("setTarget", {
        nickname: this.info.nickname,
        id: this.info.userId,
        userImg: this.info.userImg
      });
    },
    //展开与收起用户信息
    suspendInfo() {
      this.$store.commit("steMyIndexInf", null);
    },
    openInfo() {
      this.$store.commit("steMyIndexInf", this.index);
    },
    setIndex() {
      // return;
      if (this.sheen) {
        this.$store.commit("setMyIndex", null);
        return;
      }
      this.$store.commit("setMyIndex", this.index);
    },
    //分享或下架
    upShare() {
      let isShare = !this.toCover.isShare;
      this.$toast.loading({
        message: "...",
        duration: 0,
        forbidClick: true
      });
      this.axios
        .post("/deleteandshare", {
          id: this.toCover.id,
          operation: 1,
          isShare: isShare
        })
        .then(requers => {
          if (requers.data.code == 1120) {
            this.$toast.success(requers.data.msg);
            this.isShare = !this.isShare;
            //在首页点击下架时会删除当前组件
            if (!this.position) {
              this.ifSheen = false;
            }
            return;
          }
          this.$toast.fail(requers.data.msg);
        })
        .catch(err => {
          this.$toast.fail("网络错误");
        });
    },
    //删除
    upDeleta() {
      let Delete = !this.toCover.isDelete;
      //如果已经分享则先取消分享
      if (this.toCover.isShare) {
        this.upShare();
      }
      this.$toast.loading({
        message: "请求发送中...",
        duration: 0,
        forbidClick: true
      });
      this.axios
        .post("/deleteandshare", {
          id: this.toCover.id,
          operation: 0,
          isDelete: Delete
        })
        .then(requers => {
          if (requers.data.code == 1120) {
            this.$toast.success(requers.data.msg);
            this.ifSheen = !this.ifSheen;
            return;
          }
          this.$toast.fail(requers.data.msg);
        })
        .catch(err => {
          this.$toast.fail("网络错误");
        });
    },
    //获取用户数据
    getInfData() {
      if (this.position) {
        return;
      }
      let userData = sessionStorage.getItem(this.toCover.email);
      if (sessionStorage.getItem(this.toCover.email)) {
        this.info = JSON.parse(userData);
        // 
        return;
      }
      this.axios
        .post("/getmyinf", { email: this.toCover.email })
        .then(requer => {
          this.info = requer.data.require[0];
          sessionStorage.setItem(
            this.toCover.email,
            JSON.stringify(requer.data.require[0])
          );
        });
    }
  },
  created() {
    this.isShare = this.toCover.isShare;
    this.getInfData();
  }
};
</script>

<style lang="less" scoped>
.fallback {
  font-size: 1.5em;
  width: 50px;
  height: 100%;
  display: flex;
  align-items: center;
}
.inof {
  border-top: 3px solid #fff;
  width: 0%;
  max-height: 0px;
  transition: width 0.3s;
  position: relative;
  height: 200px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  .btn {
    display: flex;
    justify-content: center;
    .van-button {
      width: 100%;
      border-radius: 50px;
      margin: 0px 1px;
    }
  }
  .detailed {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .content {
    width: 60%;
    margin: 20px;
    .title {
      // width: auto;
      padding: 1px 5px;
      background-image: linear-gradient(to right, #64e6d0, #0198ff);
      border-radius: 1px;
    }
    > div {
      padding: 1px 5px;
      margin: 2px;
    }
  }
  .head {
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 50%;
  }
  img {
    width: 200%;
    display: block;
  }
}
.seenInfo {
  width: 100%;
  max-height: 1000px;
}
.coverSeen {
  width: 100%;
  display: flex;
}
.headImg {
  z-index: 9999;
}
.down {
  transform: rotate(180deg);
}
.delete {
  position: absolute;
  color: #aaa;
  right: 10px;
  top: 10px;
  font-size: 1.5em;
  z-index: 500;
}

.type {
  .delete();
  right: 1.5em;
  transition: all 0.3s;
}
.homeSheen {
  right: 10px;
}
.typeSeen {
  top: 10px;
  right: 10px;
  font-size: 2em;
}
.updwico {
  font-size: 2em;
}
.imgSeen {
  filter: blur(10px) brightness(90%);
}
.cover {
  border-top: 3px solid #fff;
  max-width: 1000px;
  background-color: #000;
  height: 200px;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  img {
    width: 100%;
    display: block;
    filter: blur(1px) brightness(60%);
    transition: all 0.3s;
  }
  .title {
    width: 100%;
    height: 100%;
    position: absolute;
    text-align: center;
    top: 0px;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h3 {
      font-size: 2em;
      margin: 0px;
    }
  }
}
.covernoSeen {
  max-width: 0px;
}
</style>