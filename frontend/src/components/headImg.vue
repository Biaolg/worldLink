<template>
  <div class="headImg">
    <div class="head" @click.stop="openInfo">
      <img :src="userImg" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "headImg",
  props: ["userImg"],
  methods: {
    openInfo() {
      this.$emit("openInfo");
    }
  }
};
</script>

<style lang="less" scoped>
.headImg {
  display: flex;
  justify-content: center;
  align-items: center;
}
.tips {
  position: absolute;
  width: 100%;
  background-color: #fff;
}
.head {
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 200%;
    display: block;
  }
}
</style>