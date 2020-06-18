<template>
  <div class="chat">
    <div class="bg">
      <img :src="info.userImg" alt />
    </div>
    <van-nav-bar :title="target.nickname" left-arrow @click-left="theReturn" />
    <div class="massage">
      <ChatList class="msgSheen" v-for="(item,index) in Reverse" :msg="item" :key="index">{{ item }}</ChatList>
    </div>
    <div class="tomsg">
      <van-field v-model="msg" center clearable placeholder="请输入消息"></van-field>
      <van-button @click="toMsg" type="info">发送</van-button>
    </div>
  </div>
</template>

<script>
// import ChatList from "../components/ChatList.vue";
const ChatList = () => import("../components/ChatList.vue");

export default {
  name: "chat",
  data() {
    return {
      msg: "",
      seenMsg: []
    };
  },
  computed: {
    //目标信息
    target() {
      //nickname,id,userImg
      return this.$store.state.target;
    },
    //自身信息
    info() {
      //userId,email,nickname,userImg
      return this.$store.state.info;
    },
    //发送消息实例
    ws() {
      return this.$store.state.ws;
    },
    //反转
    Reverse() {
      let [...arr] = this.seenMsg;
      return arr.reverse();
    },
    //监听存储的信息
    storageMsg() {
      return this.$store.state.storageMsg;
    }
  },
  watch: {
    storageMsg() {
      let value = JSON.parse(this.storageMsg[this.storageMsg.length - 1]);

      if (this.target.id == "world" && value.id == "world") {
        this.dataHandle(this.storageMsg[this.storageMsg.length - 1]);
      }
      if (this.target.id == value.myId && value.id != "world") {
        this.dataHandle(this.storageMsg[this.storageMsg.length - 1]);
      }
      if (
        this.info.userId == value.myId &&
        value.id == this.target.id &&
        value.id != "world"
      ) {
        this.dataHandle(this.storageMsg[this.storageMsg.length - 1]);
      }
    }
  },
  components: {
    ChatList
  },
  methods: {
    theReturn() {
      this.$store.commit("setChatSheen", false);
    },
    toMsg() {
      if (this.msg == "") return;
      let id = this.target.id;

      //当目标为世界群聊时改变pos
      let pos = id == "world" ? id : "msg";

      let msg = {
        pos,
        id,
        myId: this.info.userId,
        nickname: this.info.nickname,
        userImg: this.info.userImg,
        msg: this.msg
      };
      msg = JSON.stringify(msg);
      //发送数据
      this.ws.send(msg);

      this.msg = "";
      if (pos != "world") {
        //保存自己的发送数据
        this.$store.commit("setstorageMsg", msg);
      }
    },
    //数据处理
    dataHandle(theMsg) {
      let msg = JSON.parse(theMsg);

      this.seenMsg.push(msg);
    }
  },
  mounted() {
    if (this.target.id == "world") {
      for (let i = 0; i < this.storageMsg.length; i++) {
        let json = JSON.parse(this.storageMsg[i]);
        if (json.id == "world") {
          this.dataHandle(this.storageMsg[i]);
        }
      }
    } else {
      for (let i = 0; i < this.storageMsg.length; i++) {
        let json = JSON.parse(this.storageMsg[i]);
        //接收目标的信息 json.id == this.info.userId && json.myId == this.target.id
        //发送给目标的信息 json.myId = this.info.userId && json.id == this.target.id
        if (
          (json.id == this.info.userId && json.myId == this.target.id) ||
          (json.myId = this.info.userId && json.id == this.target.id)
        ) {
          this.dataHandle(this.storageMsg[i]);
        }
      }
    }
  }
};
</script>

<style lang="less" scoped>
.bg {
  z-index: 0;
  position: absolute;
  width: 100%;
  overflow: hidden;
  filter: blur(5px) brightness(60%);
  img {
    width: 300%;
    display: block;
  }
}
.massage {
  overflow: auto;
  height: 100%;
  width: 100%;
  transform: rotate(180deg);
}
.msgSheen {
  transform: rotate(180deg);
}
.chat {
  position: absolute;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000;
  z-index: 1001;
  overflow: hidden;
}
.van-nav-bar {
  width: 100%;
  background-image: linear-gradient(to right, #64e6d0, #0198ff);
}
.tomsg {
  z-index: 100;
  background-color: #fff;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .van-button {
    height: 45px;
    width: 100px;
  }
  .van-cell--center {
    padding: 3px;
    height: 45px;
    overflow: hidden;
  }
  .van-cell {
    background-color: rgba(0, 0, 0, 0);
    border: 2px solid #1989fa;
  }
}
</style>