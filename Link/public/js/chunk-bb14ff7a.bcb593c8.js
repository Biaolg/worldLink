(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bb14ff7a"],{"10a0":function(t,e,s){},"55f4":function(t,e,s){t.exports=s.p+"img/worldLink.8bbae313.png"},"75ea":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"myInfo"},[s("div",{staticClass:"world",on:{click:t.Jump}},[t._m(0),s("div",{staticClass:"title"},[t._v("世界群聊")])]),s("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},[s("div",{staticClass:"userList"},t._l(t.infoList,(function(e,n){return s("div",{key:n},[e.userId!=t.info.userId?s("UserList",{attrs:{info:e}}):t._e()],1)})),0)])],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ico"},[n("img",{attrs:{src:s("55f4"),alt:""}})])}],o=(s("d3b7"),function(){return s.e("chunk-6cc75495").then(s.bind(null,"74b3"))}),r={name:"myInfo",data:function(){return{infoList:[],isLoading:!1}},computed:{info:function(){return this.$store.state.info}},components:{UserList:o},methods:{Jump:function(){this.$store.commit("setChatSheen",!0),this.$store.commit("setTarget",{nickname:"world",id:"world",userImg:"world"})},onRefresh:function(){this.getUser()},getUser:function(){var t=this;this.axios.post("/getuser").then((function(e){t.infoList=e.data.require,t.isLoading=!1,sessionStorage.setItem("User",JSON.stringify(e.data.require)),t.$toast.success("获取数据成功")})).catch((function(e){t.$toast.fail("网络错误"),t.isLoading=!1}))}},created:function(){var t=sessionStorage.getItem("User");t?this.infoList=JSON.parse(t):this.getUser()}},a=r,c=(s("9d69"),s("2877")),u=Object(c["a"])(a,n,i,!1,null,"17371c64",null);e["default"]=u.exports},"9d69":function(t,e,s){"use strict";var n=s("10a0"),i=s.n(n);i.a},b041:function(t,e,s){"use strict";var n=s("00ee"),i=s("f5df");t.exports=n?{}.toString:function(){return"[object "+i(this)+"]"}},d3b7:function(t,e,s){var n=s("00ee"),i=s("6eeb"),o=s("b041");n||i(Object.prototype,"toString",o,{unsafe:!0})}}]);
//# sourceMappingURL=chunk-bb14ff7a.bcb593c8.js.map