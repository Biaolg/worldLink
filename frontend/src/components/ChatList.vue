<template>
  <div>
    <div v-if="msg.code!=2071" class="ChatList" :style="who&&{'flex-direction':'row-reverse'}">
      <div class="head">
        <img :src="msg.userImg" alt />
      </div>
      <div class="sheen">
        <div class="infBox" :style="who&&{'justify-content':'flex-end'}">
          <div class="info">{{msg.nickname}}</div>
        </div>
        <div class="msg" :class="{who:who}">{{msg.msg}}</div>
      </div>
    </div>
    <div v-else class="code">对方不在线</div>
  </div>
</template>

<script>
export default {
  name: "ChatList",
  props: ["msg"],
  computed: {
    who() {
      return this.msg.myId == this.$store.state.info.userId;
    }
  }
};
</script>

<style lang="less" scoped>
.code {
  // background-color: #fff;
  text-align: center;
  color: red;
}
.ChatList {
  display: flex;
  margin: 1vh;
  font-size: 16px;
  min-height: 10vh;
}
.msg {
  background-color: #eee;
  padding: 3px;
  word-wrap: break-word;
  max-width: 50vw;
  overflow: hidden;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  // background-color: #62e4d1;
  background-color: rgba(98, 228, 209, 0.9);
}
.who {
  // background-color: #0198ff;
  background-color: rgba(1, 152, 255, 0.9);

  color: white;
}
.sheen {
  float: left;
}
.infBox {
  display: flex;
}
.info {
  font-size: 10px;
  word-break: keep-all;
  white-space: nowrap;
  text-align: center;
  color: white;
  padding: 1vw;
  border-radius: 50px;
  margin: 0px 10px;
}
.head {
  img {
    width: 200%;
    display: block;
  }
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  overflow: hidden;
}
</style>