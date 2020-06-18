<template>
  <div id="home">
    <!-- 头部 -->
    <div class="head" v-if="!chatSheen">
      <headBar @seenDetailed="detailedSeen">{{title}}</headBar>
    </div>

    <!-- 详细信息 -->
    <div class="detailed" :class="{detailedLook:!sheen}">
      <detailedInfo></detailedInfo>
      <div class="bg" :style="{'background-image':`url(${info.userImg})`}"></div>
    </div>

    <div class="box">
      <!-- 二级路由 -->
      <div class="roter" v-show="!chatSheen">
        <router-view></router-view>
      </div>
      <!-- 聊天组件 -->
      <div class="chat" v-if="chatSheen">
        <Chat></Chat>
      </div>
    </div>
    <!-- 底部路由导航 -->
    <nav class="bottom-nav" @click="routerHandle" v-if="!chatSheen">
      <div @click="topNavBard('world','动态')">
        <router-link to="/home/world">
          <van-icon name="wap-home" v-if="activation=='world'" color="#fff" />
          <van-icon name="wap-home-o" v-else color="#fff" />
        </router-link>
      </div>
      <div @click="topNavBard('myUpload','我的上传')">
        <router-link to="/home/myUpload">
          <van-icon name="graphic" v-if="activation=='myUpload'" color="#fff" />
          <van-icon name="records" v-else color="#fff" />
        </router-link>
      </div>
      <div @click="topNavBard('myInfo','消息')">
        <router-link to="/home/myInfo">
          <van-icon name="manager" v-if="activation=='myInfo'" color="#fff" />
          <van-icon name="contact" v-else color="#fff" />
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
const headBar = () => import("../components/headBar.vue");
const detailedInfo = () => import("../components/detailedInfo.vue");
const Chat = () => import("../components/Chat.vue");
// import headBar from "../components/headBar.vue";
// import detailedInfo from "../components/detailedInfo.vue";
// import Chat from "../components/Chat";

export default {
  name: "home",
  data() {
    return {
      activation: "world",
      title: "动态",
      sheen: false,
      ws: undefined
    };
  },
  components: {
    headBar,
    detailedInfo,
    Chat
  },
  computed: {
    chatSheen() {
      return this.$store.state.chatSheen;
    },
    //底部导航
    bottomSeen() {
      return this.$store.state.bottomSeen;
    },
    burSeen() {
      return this.$store.state.barSeen;
    },
    info() {
      return this.$store.state.info;
    }
  },
  methods: {
    //ws链接
    link() {
      if (!this.ws) {
        return;
      }
      let ws = this.ws;
      ws.onopen = e => {
        let info = {
          pos: "identity",
          id: this.info.userId
        };
        info = JSON.stringify(info);
        ws.send(info);
      };
      ws.onclose = function(e) {};
      ws.onerror = function() {};
      ws.onmessage = e => {
        this.$store.commit("setstorageMsg", e.data);
      };
    },
    routerHandle() {
      this.sheen = false;
      this.$store.commit("steMyIndexInf", null);
    },
    topNavBard(value, title) {
      this.title = title;
      this.activation = value;
    },
    detailedSeen() {
      this.sheen = !this.sheen;
    }
  },
  mounted() {
    //若无邮箱信息回跳登录
    if (!this.$store.state.useEmail) {
      this.$router.push("Singin");
    }
    //获取账号信息
    let inf = {
      email: this.$store.state.useEmail
    };
    this.$toast.loading({
      duration: 30,
      forbidClick: true
    });
    this.axios({
      method: "POST",
      url: "/getmyinf",
      data: { email: this.$store.state.useEmail }
    }).then(requers => {
      this.$toast.loading({
        duration: 1,
        forbidClick: true
      });
      this.$store.commit("setInfo", requers.data.require[0]);
      //链接实时通信端口
      if (window.WebSocket) {
        this.ws = new WebSocket("ws://112.74.50.101:9061");
        this.link();
        this.$store.commit("setWs", this.ws);
      }
    });
  },
  //home生命结束断开链接
  beforeDestroy() {
    let info = {
      pos: "leave",
      id: this.info.userId
    };
    info = JSON.stringify(info);
    this.ws.send(info);
  }
};
</script>

<style lang="less" scoped>
.box {
  display: flex;
  justify-content: center;
}
.chat {
  width: 100%;
}
.roter {
  max-width: 100vh;
  margin-top: 50px;
  width: 100%;
  overflow: hidden;
}
.roterRigthnone {
  position: absolute;
  left: 0px;
  max-width: 0px;
}
#home {
  height: 100%;
}
.head {
  position: fixed;
  top: 0px;
  height: 50px;
  z-index: 1000;
  width: 100%;
}
.bottom-nav {
  transition: height 0.3s;
  z-index: 1000;
  display: flex;
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 40px;
  background-image: linear-gradient(to right, #64e6d0, #0198ff);
  > div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
    a {
      display: block;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
.detailed {
  position: fixed;
  top: 50px;
  width: 100%;
  height: calc(100% - 90px);
  background-color: #000;
  z-index: 900;
  border-radius: 0%;
  opacity: 1;
  transform: translateY(0);
  transition: all 0.3s;
  .bg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    background-position: center center;
    filter: blur(10px) brightness(50%);
    z-index: -1000;
  }
}
.detailedLook {
  transform: translateY(-100%);
  border-radius: 50%;
  opacity: 0.3;
  z-index: 0;
}
</style>