<template>
  <div class="imageupBar">
    <h3>封面上传</h3>
    <div>
      <input id="upImg" type="file" accept=".png, .jpg" v-show="false" @change="inputGet" />
      <label for="upImg">
        <div class="upIco">
          <div class="imgseen">
            <img class="default" v-if="file==''" src="../assets/img/add.png" alt />
            <img :src="file" v-else alt />
          </div>
        </div>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "imageupBar",
  data() {
    return {
      file: ""
    };
  },
  methods: {
    inputGet(value) {
      this.file = "";
      this.$emit("getImgpath", "");

      if (!value.target.files.length) {
        return;
      }
      this.file = window.URL.createObjectURL(value.target.files[0]);

      let formData = new FormData();
      formData.append("file", value.target.files[0]);

      this.axios.dataType = false;

      this.axios
        .post("/upfile", formData)
        .then(requers => {
          this.$emit("getImgpath", requers.data.filePath);
          
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
h3 {
  text-align: center;
}
img {
  width: 100%;
  display: block;
}
.upIco {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30%;
  overflow: hidden;
}
.default {
  width: 30%;
  height: 30%;
}
.imgseen {
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 200px;
  border: solid 1px #eee;
}
</style>