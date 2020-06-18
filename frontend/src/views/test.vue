<template>
  <div>
    <input v-model="text" type="text" />
    <button class="btn" @click="msg">btn</button>
    <div>{{gettext}}</div>
  </div>
</template>

<script>
export default {
  name: "test",
  data() {
    return {
      text: "",
      ws: undefined,
      gettext: ""
    };
  },
  methods: {
    link() {
      if (!this.ws) {
        
        return;
      }
      let ws = this.ws;
      ws.onopen = e => {
        
        ws.send("game1");
      };
      ws.onclose = function(e) {
        
      };
      ws.onerror = function() {
        
      };
    },
    msg() {
      this.ws.send(this.text);
    }
  },
  mounted() {
    if (window.WebSocket) {
      this.ws = new WebSocket("ws://127.0.0.1:8001");
      this.link();
      this.ws.onmessage = e => {
        this.gettext = e.data;
      };
    }
  }
};
</script>

<style lang="less" scoped>
</style>