<template>
  <div class="myInfo">
    <div class="world" @click="Jump">
      <div class="ico">
        <img src="../assets/img/worldLink.png" alt />
      </div>
      <div class="title">世界群聊</div>
    </div>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div class="userList">
        <div v-for="(item,index) in infoList" :key="index">
          <UserList :info="item" v-if="item.userId != info.userId"></UserList>
        </div>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
const UserList = () => import("../components/UserList.vue");

// import UserList from "../components/UserList.vue";
export default {
  name: "myInfo",
  data() {
    return {
      infoList: [],
      isLoading: false
    };
  },
  computed: {
    //自身信息
    info() {
      //userId,email,nickname,userImg
      return this.$store.state.info;
    }
  },
  components: {
    UserList
  },
  methods: {
    Jump() {
      //跳转聊天
      this.$store.commit("setChatSheen", true);
      this.$store.commit("setTarget", {
        nickname: "world",
        id: "world",
        userImg: "world"
      });
    },
    onRefresh() {
      this.getUser();
    },
    getUser() {
      this.axios
        .post("/getuser")
        .then(requer => {
          this.infoList = requer.data.require; //会话储存
          this.isLoading = false;
          sessionStorage.setItem("User", JSON.stringify(requer.data.require));
          this.$toast.success("获取数据成功");
        })
        .catch(err => {
          //失败
          this.$toast.fail("网络错误");
          this.isLoading = false;
        });
    }
  },
  created() {
    let userData = sessionStorage.getItem("User");
    if (userData) {
      this.infoList = JSON.parse(userData);
      return;
    }
    this.getUser();
  }
};
</script>

<style lang="less" scoped>
.myInfo {
  position: absolute;
  height: calc(100% - 90px);
  width: 100%;
}
.ico {
  width: 50px;
  height: 50px;
  img {
    width: 100%;
    display: block;
  }
}
.title {
  margin-left: 10px;
  padding: 3px;
}
.world {
  text-align: center;
  background: linear-gradient(to right, #63e6d0, #0298ff);
  -webkit-background-clip: text;
  color: transparent;
  font-weight: 900;
  border-bottom: solid 1px #eee;
  display: flex;
  align-items: center;
  padding: 10px;
}
.userList {
  width: 100%;
  // height: 100%;
  margin-bottom: 40px;
}
</style>