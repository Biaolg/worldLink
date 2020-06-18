
<template>
  <div id="musicSeen">
    <coverSeen :toCover="toData" :index="index" :position="position"></coverSeen>
    <transition name="fade">
      <div class="info" :class="{infoSeen:sheen}" v-if="sheen">
        <audioPlay :toData="toData"></audioPlay>
      </div>
    </transition>
  </div>
</template>

<script>
const coverSeen = () => import("../components/coverSeenBar.vue");
const audioPlay = () => import("../components/audioPlay.vue");

// import coverSeen from "../components/coverSeenBar";
// import audioPlay from "../components/audioPlay";

export default {
  name: "musicSeen",
  props: ["toData", "index", "position"],
  data() {
    return {
      duration: 0
    };
  },
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
    coverSeen,
    audioPlay
  }
};
</script>

<style lang="less" scoped>
.fade-enter-active,
.fade-leave-active {
  max-height: 500px;
  height: auto;
  overflow: hidden;
  transition: max-height 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  max-height: 0px;
}
</style>