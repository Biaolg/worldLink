<template>
  <div class="world">
    <!-- 分享展示 -->
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div>
        <seenBar
          v-for="(item,index) in homeData"
          :key="index"
          :position="false"
          :index="index"
          :toData="item"
        ></seenBar>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
// import seenBar from "../components/seenBar";
const seenBar = () => import("../components/seenBar.vue");
export default {
  name: "World",
  data() {
    return {
      homeData: {},
      isLoading: false
    };
  },
  methods: {
    onRefresh() {
      this.getData();
    },
    getData() {
      this.axios
        .get("/gethomedata")
        .then(reuqers => {
          if (reuqers.data.code != 1110) {
            this.$toast.fail("获取数据失败");
            this.isLoading = false;
            return;
          }
          this.homeData = reuqers.data.require;
          //会话储存
          sessionStorage.setItem(
            "worldData",
            JSON.stringify(reuqers.data.require)
          );
          this.isLoading = false;
          this.$toast.success("获取数据成功");
        })
        .catch(err => {
          //失败
          this.$toast.fail("网络错误");
          this.isLoading = false;
        });
    }
  },
  components: {
    seenBar
  },
  mounted() {
    let homeData = sessionStorage.getItem("worldData");
    if (homeData) {
      this.homeData = JSON.parse(homeData);
      return;
    }
    this.getData();
  }
};
</script>

<style lang="less" scoped>
.world {
  padding-bottom: 40px;
}
</style>