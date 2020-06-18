<template>
  <div id="testSeen">
    <coverSeen :toCover="toData" :position="position" :index="index"></coverSeen>
    <!-- 内容 -->
    <div class="info" :class="{infoSeen:sheen}">
      <div class="title">
        <h4>{{toData.coverMessage}}</h4>
      </div>
      <div class="content">{{toData.content}}</div>
    </div>
  </div>
</template>

<script>
// import coverSeen from "../components/coverSeenBar";
const coverSeen = () => import("../components/coverSeenBar.vue");
export default {
  name: "testSeen",
  props: ["toData", "index", "position"],
  computed: {
    //展开闭合
    sheen() {
      let b = false;
      if (this.$store.state.myIndex == this.index) {
        b = true;
      }
      return b;
    }
  },
  components: {
    coverSeen
  }
};
</script>

<style lang="less" scoped>
.content {
  border: #eee 1px solid;
  margin: 10px;
  padding: 10px;
}
.info {
  max-height: 0px;
  transition: max-height 0.3s;
  overflow: hidden;
}
.infoSeen {
  max-height: 500px;
  height: auto;
}
.title {
  text-align: center;
  h2 {
    margin: 0px;
  }
  h4 {
    margin: 0px;
    padding: 10px;
    color: #ffa500;
  }
}
</style>