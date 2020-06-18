
<template>
  <div id="vudioSeen">
    <coverSeen :toCover="toData" :position="position" :index="index"></coverSeen>
    <div class="info" :class="{infoSeen:sheen}">
      <video :src="toData.coverVudio" controls></video>
    </div>
  </div>
</template>

<script>
// import coverSeen from "../components/coverSeenBar";
const coverSeen = () => import("../components/coverSeenBar.vue");
export default {
  name: "vudioSeen",
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
video {
  width: 100%;
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
</style>