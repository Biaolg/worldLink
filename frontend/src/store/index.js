import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    useEmail: '',
    //导航显隐
    barSeen: true,
    //底部导航
    bottomSeen: true,
    //文件传输时取消序列化
    dataUpsequence: false,
    //我的上传index
    myIndex: null,
    myIndexInf: null,
    //账号信息
    info: {},
    worldSheen: false,
    //实时通信件
    ws: null,
    target: {
      id: 'wrold',
      nickname: 'world',
      userImg: 'world'
    },
    //聊天组件
    chatSheen: false,
    //消息记录
    storageMsg: []
  },
  mutations: {
    //消息记录
    setstorageMsg(srate,value){
      srate.storageMsg.push(value);
    },
    setUseEmail(state, value) {
      state.useEmail = value;
    },
    setBarSeen(state, value) {
      state.barSeen = value;
    },
    setBottomSeen(state, value) {
      state.bottomSeen = value;
    },
    setDataUpsequence(state, value) {
      state.dataUpsequence = value;
    },
    //聊天组件
    setChatSheen(state, value) {
      state.chatSheen = value;
    },
    //设置index
    setMyIndex(state, value) {
      state.myIndex = value;
    },
    steMyIndexInf(state, value) {
      state.myIndexInf = value;
    },
    //设置账号信息
    setInfo(state, value) {
      state.info = value;
    },
    //通信件
    setWs(state, value) {
      state.ws = value;
    },
    setWorldSheen(state, value) {
      state.wroldSheen = value;
    },
    //设置通信目标
    setTarget(state, value) {
      state.target = value;
    }
  },
  actions: {
  },
  modules: {
  }
})
