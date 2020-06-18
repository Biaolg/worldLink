<template>
  <div class="userlist" @click="Jump">
    <div class="head">
      <img :src="info.userImg" alt />
    </div>
    <div class="massage">
      <div class="nakName">{{info.nickname}}</div>
      <div class="msg">有消息</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "userlist",
  props: ["info"],
  methods: {
    Jump() {
      //跳转聊天
      this.$store.commit("setChatSheen", true);
      this.$store.commit("setTarget", {
        nickname: this.info.nickname,
        id: this.info.userId,
        userImg: this.info.userImg
      });
    }
  }
};
</script>

<style lang="less" scoped>
.userlist {
  display: flex;
  border-bottom: 1px #eee solid;
  padding: 10px;
  //   justify-content: center;
  align-items: center;
}
.massage {
  margin-left: 10px;
  font-size: 4vw;
}
.nakName {
  margin: 1vw;
  font-weight: 700;
}
.msg {
  margin: 1vw;
  font-size: 2vw;
  color: #282828;
}
.head {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 200%;
    display: block;
  }
}
</style>