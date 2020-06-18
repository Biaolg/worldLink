<template>
  <div id="seenBar">
    <!-- 组件分选器 -->
    <div v-if="toData.type=='text'">
      <textSeen :toData="toData" :position='position' :index='index'></textSeen>
    </div>
    <div v-else-if="toData.type=='music'">
      <musicSeen :toData="toData" :position='position' :index='index'>></musicSeen>
    </div>
    <div v-else-if="toData.type=='video'">
      <vudioSeen :toData="toData" :position='position' :index='index'>></vudioSeen>
    </div>
  </div>
</template>

<script>

const textSeen = () => import("../components/textSeenBar.vue");
const musicSeen = () => import("../components/musicSeenBar.vue");
const vudioSeen = () => import("../components/vudioSeenBar.vue");

// import textSeen from "../components/textSeenBar";
// import musicSeen from "../components/musicSeenBar";
// import vudioSeen from "../components/vudioSeenBar";

export default {
  name: "seenBar",
  props: ["toData", "index","position"],
  components: {
    textSeen,
    musicSeen,
    vudioSeen
  }
};
</script>

<style lang="less" scoped>
</style>