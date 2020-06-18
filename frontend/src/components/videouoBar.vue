<template>
  <div class="videouoBar">
    <h3>视频上传</h3>
    <div class="box">
      <video :src="file" controls></video>
    </div>
    <label for="upvoid">
      <div class="btn">
        <span>{{msg}}</span>
        <van-loading v-if="upok" type="spinner" color="#fff" />
      </div>
    </label>
    <input id="upvoid" type="file" v-show="false" accept=".mp4" @change="inputGet" />
  </div>
</template>

<script>
export default {
  name: "videouoBar",
  data() {
    return {
      file: null,
      upok: false,
      msg: "上传视频"
    };
  },
  methods: {
    //input文件获取
    inputGet(value) {
      this.file = null;


      if (value === undefined || value.target.files.length === 0) {
        return;
      }
      this.msg = "文件上传中";
      this.upok = true;
      this.file = window.URL.createObjectURL(value.target.files[0]);

      let formData = new FormData();
      formData.append("file", value.target.files[0]);

      //取消序列化
      this.axios.dataType = false;

      this.axios
        .post("/upfile", formData)
        .then(requers => {
          

          this.$emit("toMusicePath", requers.data.filePath);
          this.upok = false;
          this.msg = requers.data.msg;
          this.axios.dataType = true;
        })
        .catch(err => {
          
          this.axios.dataType = true;
        });
    }
  }
};
</script>

<style lang="less" scoped>
.videouoBar{
  padding-bottom: 40px;
}
h3 {
  text-align: center;
}
.box {
  width: 100%;
  video {
    width: 100%;
  }
}

.btn {
  text-align: center;
  height: 44px;
  margin: 10px 15px;
  background-color: #1989fa;
  border-radius: 50px;
  line-height: 44px;
  color: #fff;
  display: flex;
  justify-content: center;
  > span {
    margin: 0px 20px;
  }
}
</style>