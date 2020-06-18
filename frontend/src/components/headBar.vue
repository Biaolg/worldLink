<template>
  <div class="headBar">
    <div class="inf">
      <!-- 头像 -->
      <div class="headBg" @click="headBgClick">
        <div>
          <img :src="userImg" alt />
        </div>
      </div>
      <div class="tabName">
        <span>
          <slot></slot>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "headBar",
  data() {
    return {};
  },
  computed: {
    userImg() {
      return this.$store.state.info.userImg;
    }
  },
  methods: {
    headBgClick() {
      this.$emit("seenDetailed");
    }
  }
};
</script>

<style lang="less" scoped>
.inf {
  z-index: 1000;
  display: flex;
  align-items: center;
  filter: blur(0px) brightness(100%);
  //   background-color: #0198ff;
  background-image: linear-gradient(to right, #64e6d0, #0198ff);
  color: #ffffff;
  position: relative;
  .tabName {
    width: 100%;
    text-align: center;
    position: absolute;
  }
}
.headBg {
  margin: 1%;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  z-index: 1001;
  img {
    // position: absolute;
    width: 200%;
    display: block;
  }
}
.headBar {
  position: relative;
}
</style>