(function(n){function e(e){for(var c,a,o=e[0],f=e[1],h=e[2],d=0,i=[];d<o.length;d++)a=o[d],Object.prototype.hasOwnProperty.call(u,a)&&u[a]&&i.push(u[a][0]),u[a]=0;for(c in f)Object.prototype.hasOwnProperty.call(f,c)&&(n[c]=f[c]);s&&s(e);while(i.length)i.shift()();return r.push.apply(r,h||[]),t()}function t(){for(var n,e=0;e<r.length;e++){for(var t=r[e],c=!0,a=1;a<t.length;a++){var o=t[a];0!==u[o]&&(c=!1)}c&&(r.splice(e--,1),n=f(f.s=t[0]))}return n}var c={},a={app:0},u={app:0},r=[];function o(n){return f.p+"js/"+({}[n]||n)+"."+{"chunk-02fcfeeb":"607a6460","chunk-08c63b47":"9c25e4db","chunk-232ade9a":"abf73824","chunk-51fdd242":"3c49253f","chunk-6fdc0204":"5194fce4","chunk-7c471aeb":"c6265e43","chunk-7c84edb4":"86e21708","chunk-7d0a97a7":"5eb65f76","chunk-9b09813e":"f42639cc","chunk-ab50d0f2":"0244efc7","chunk-bb14ff7a":"bcb593c8","chunk-de6a5f38":"dafd397b","chunk-38a744f8":"b4b70657","chunk-6b7933b4":"b0312131","chunk-7b4d876d":"5385cf90","chunk-682eac7a":"c1786c87","chunk-2d0aadb6":"0798bca1","chunk-6cc75495":"7af4de17","chunk-708c84b9":"bfb7134e","chunk-c0a85a0a":"f2f60d9c","chunk-de68cd38":"878bc56a","chunk-3d61cbd5":"330452c1","chunk-621ee8f6":"3795cf1d","chunk-b4020756":"55affd3d","chunk-3fab2188":"1d7296aa","chunk-587aa705":"1fb45b1d","chunk-a8025486":"f4764c79","chunk-4b1acfec":"41f18097"}[n]+".js"}function f(e){if(c[e])return c[e].exports;var t=c[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,f),t.l=!0,t.exports}f.e=function(n){var e=[],t={"chunk-02fcfeeb":1,"chunk-232ade9a":1,"chunk-51fdd242":1,"chunk-6fdc0204":1,"chunk-7c471aeb":1,"chunk-7c84edb4":1,"chunk-7d0a97a7":1,"chunk-9b09813e":1,"chunk-ab50d0f2":1,"chunk-bb14ff7a":1,"chunk-de6a5f38":1,"chunk-6b7933b4":1,"chunk-7b4d876d":1,"chunk-682eac7a":1,"chunk-6cc75495":1,"chunk-708c84b9":1,"chunk-c0a85a0a":1,"chunk-de68cd38":1,"chunk-3d61cbd5":1,"chunk-621ee8f6":1,"chunk-b4020756":1,"chunk-3fab2188":1,"chunk-587aa705":1,"chunk-a8025486":1,"chunk-4b1acfec":1};a[n]?e.push(a[n]):0!==a[n]&&t[n]&&e.push(a[n]=new Promise((function(e,t){for(var c="css/"+({}[n]||n)+"."+{"chunk-02fcfeeb":"4938d8b0","chunk-08c63b47":"31d6cfe0","chunk-232ade9a":"9bd70912","chunk-51fdd242":"4591143d","chunk-6fdc0204":"17556a14","chunk-7c471aeb":"cf2eca7f","chunk-7c84edb4":"4e207b80","chunk-7d0a97a7":"b3f70a6a","chunk-9b09813e":"c432dbec","chunk-ab50d0f2":"8344efe2","chunk-bb14ff7a":"afab2274","chunk-de6a5f38":"64af21cd","chunk-38a744f8":"31d6cfe0","chunk-6b7933b4":"008cda83","chunk-7b4d876d":"a93fb456","chunk-682eac7a":"bea628a7","chunk-2d0aadb6":"31d6cfe0","chunk-6cc75495":"5a03bcad","chunk-708c84b9":"ba4a11ed","chunk-c0a85a0a":"f4a33a0b","chunk-de68cd38":"7b93a76a","chunk-3d61cbd5":"b59480e5","chunk-621ee8f6":"e505b690","chunk-b4020756":"67434345","chunk-3fab2188":"a1feab12","chunk-587aa705":"fb84dd09","chunk-a8025486":"a360444d","chunk-4b1acfec":"f743e295"}[n]+".css",u=f.p+c,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var h=r[o],d=h.getAttribute("data-href")||h.getAttribute("href");if("stylesheet"===h.rel&&(d===c||d===u))return e()}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){h=i[o],d=h.getAttribute("data-href");if(d===c||d===u)return e()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=e,s.onerror=function(e){var c=e&&e.target&&e.target.src||u,r=new Error("Loading CSS chunk "+n+" failed.\n("+c+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=c,delete a[n],s.parentNode.removeChild(s),t(r)},s.href=u;var l=document.getElementsByTagName("head")[0];l.appendChild(s)})).then((function(){a[n]=0})));var c=u[n];if(0!==c)if(c)e.push(c[2]);else{var r=new Promise((function(e,t){c=u[n]=[e,t]}));e.push(c[2]=r);var h,d=document.createElement("script");d.charset="utf-8",d.timeout=120,f.nc&&d.setAttribute("nonce",f.nc),d.src=o(n);var i=new Error;h=function(e){d.onerror=d.onload=null,clearTimeout(s);var t=u[n];if(0!==t){if(t){var c=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;i.message="Loading chunk "+n+" failed.\n("+c+": "+a+")",i.name="ChunkLoadError",i.type=c,i.request=a,t[1](i)}u[n]=void 0}};var s=setTimeout((function(){h({type:"timeout",target:d})}),12e4);d.onerror=d.onload=h,document.head.appendChild(d)}return Promise.all(e)},f.m=n,f.c=c,f.d=function(n,e,t){f.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},f.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},f.t=function(n,e){if(1&e&&(n=f(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(f.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var c in n)f.d(t,c,function(e){return n[e]}.bind(null,c));return t},f.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return f.d(e,"a",e),e},f.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},f.p="",f.oe=function(n){throw console.error(n),n};var h=window["webpackJsonp"]=window["webpackJsonp"]||[],d=h.push.bind(h);h.push=e,h=h.slice();for(var i=0;i<h.length;i++)e(h[i]);var s=d;r.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("56d7")},"034f":function(n,e,t){"use strict";var c=t("85ec"),a=t.n(c);a.a},"56d7":function(n,e,t){"use strict";t.r(e);t("fb6a"),t("e260"),t("e6cf"),t("cca6"),t("a79d");var c=t("2b0e"),a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},u=[],r={name:"app",components:{}},o=r,f=(t("034f"),t("2877")),h=Object(f["a"])(o,a,u,!1,null,null,null),d=h.exports,i=t("8c4f"),s=[{path:"/Signin",name:"Signin",component:function(n){return t.e("chunk-7d0a97a7").then(function(){var e=[t("4a33")];n.apply(null,e)}.bind(this)).catch(t.oe)}},{path:"/register",name:"Register",component:function(n){return t.e("chunk-02fcfeeb").then(function(){var e=[t("73cf")];n.apply(null,e)}.bind(this)).catch(t.oe)}},{path:"/forgetPassword",name:"forgetPassword",component:function(n){return t.e("chunk-ab50d0f2").then(function(){var e=[t("409e")];n.apply(null,e)}.bind(this)).catch(t.oe)}},{path:"/setPasword",name:"setPasword",component:function(n){return t.e("chunk-9b09813e").then(function(){var e=[t("853a")];n.apply(null,e)}.bind(this)).catch(t.oe)}},{path:"/home",name:"Home",component:function(n){return t.e("chunk-de6a5f38").then(function(){var e=[t("bb51")];n.apply(null,e)}.bind(this)).catch(t.oe)},children:[{path:"world",name:"World",component:function(n){return t.e("chunk-7c471aeb").then(function(){var e=[t("36c9")];n.apply(null,e)}.bind(this)).catch(t.oe)}},{path:"myInfo",name:"myInfo",component:function(n){return t.e("chunk-bb14ff7a").then(function(){var e=[t("75ea")];n.apply(null,e)}.bind(this)).catch(t.oe)}},{path:"myUpload",name:"myUpload",component:function(n){return t.e("chunk-7c84edb4").then(function(){var e=[t("67f4")];n.apply(null,e)}.bind(this)).catch(t.oe)}},{path:"musicUpload",name:"musicUpload",component:function(n){return t.e("chunk-232ade9a").then(function(){var e=[t("7366")];n.apply(null,e)}.bind(this)).catch(t.oe)}},{path:"journalUp",name:"journalUp",component:function(n){return t.e("chunk-6fdc0204").then(function(){var e=[t("0965")];n.apply(null,e)}.bind(this)).catch(t.oe)}},{path:"videoUp",name:"videoUp",component:function(n){return t.e("chunk-51fdd242").then(function(){var e=[t("3e56")];n.apply(null,e)}.bind(this)).catch(t.oe)}}]},{path:"/test",name:"test",component:function(n){return t.e("chunk-08c63b47").then(function(){var e=[t("2762")];n.apply(null,e)}.bind(this)).catch(t.oe)}},{path:"*",redirect:{name:"Signin"}}];c["a"].use(i["a"]);var l=new i["a"]({routes:s}),p=l,b=t("2f62");c["a"].use(b["a"]);var k=new b["a"].Store({state:{useEmail:"",barSeen:!0,bottomSeen:!0,dataUpsequence:!1,myIndex:null,myIndexInf:null,info:{},worldSheen:!1,ws:null,target:{id:"wrold",nickname:"world",userImg:"world"},chatSheen:!1,storageMsg:[]},mutations:{setstorageMsg:function(n,e){n.storageMsg.push(e)},setUseEmail:function(n,e){n.useEmail=e},setBarSeen:function(n,e){n.barSeen=e},setBottomSeen:function(n,e){n.bottomSeen=e},setDataUpsequence:function(n,e){n.dataUpsequence=e},setChatSheen:function(n,e){n.chatSheen=e},setMyIndex:function(n,e){n.myIndex=e},steMyIndexInf:function(n,e){n.myIndexInf=e},setInfo:function(n,e){n.info=e},setWs:function(n,e){n.ws=e},setWorldSheen:function(n,e){n.wroldSheen=e},setTarget:function(n,e){n.target=e}},actions:{},modules:{}}),m=t("b970");t("157a");c["a"].use(m["a"]);var v=t("bc3a"),y=t.n(v),g=t("a7fe"),w=t.n(g),S=t("2b27"),x=t.n(S);c["a"].config.productionTip=!1,c["a"].use(w.a,y.a),c["a"].use(x.a),y.a.defaults.baseURL="http://112.74.50.101:9060",y.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",y.a.dataType=!0,y.a.interceptors.request.use((function(n){if(y.a.dataType&&"post"==n.method){var e="";for(var t in n.data)e+=t+"="+n.data[t]+"&";e=e.slice(0,-1),n.data=e}return n})),new c["a"]({router:p,store:k,render:function(n){return n(d)}}).$mount("#app")},"85ec":function(n,e,t){}});
//# sourceMappingURL=app.c94f9dec.js.map