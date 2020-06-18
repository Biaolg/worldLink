import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/vant.js'

import axios from 'axios'
import VueAxios from 'vue-axios'

import VueCookies from 'vue-cookies'

Vue.config.productionTip = false

Vue.use(VueAxios, axios);

Vue.use(VueCookies);

//基础路径
axios.defaults.baseURL = "http://112.74.50.101:9060"
// axios.defaults.baseURL = "http://127.0.0.1:9060"


//设置post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

//是否序列化  默认是
axios.dataType = true;

//添加axios请求拦截器, 该方法在请求之前触发
axios.interceptors.request.use(params => {


  //对于post请求,需要将参数进行序列化
  if (axios.dataType && params.method == 'post') {
    let str = '';
    for (let key in params.data) {
      str += key + '=' + params.data[key] + '&'
    }
    str = str.slice(0, -1);
    // 

    params.data = str;
  }
  return params;
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
