(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-281ec27d"],{1397:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"seenBar"}},["text"==t.toData.type?i("div",[i("textSeen",{attrs:{toData:t.toData,position:t.position,index:t.index}})],1):"music"==t.toData.type?i("div",[i("musicSeen",{attrs:{toData:t.toData,position:t.position,index:t.index}},[t._v(">")])],1):"video"==t.toData.type?i("div",[i("vudioSeen",{attrs:{toData:t.toData,position:t.position,index:t.index}},[t._v(">")])],1):t._e()])},o=[],s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"testSeen"}},[i("coverSeen",{attrs:{toCover:t.toData,position:t.position,index:t.index}}),i("div",{staticClass:"info",class:{infoSeen:t.sheen}},[i("div",{staticClass:"title"},[i("h4",[t._v(t._s(t.toData.coverMessage))])]),i("div",{staticClass:"content"},[t._v(t._s(t.toData.content))])])],1)},a=[],r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"coverSeen"},[t.ifSheen?i("div",{staticClass:"cover",class:{covernoSeen:t.infoSheen},style:t.sheen&&{height:"50px"},on:{click:t.setIndex}},[i("img",{class:{imgSeen:t.sheen},attrs:{src:t.toCover.coverImg,alt:""}}),i("div",{staticClass:"type",class:{typeSeen:t.sheen,homeSheen:!t.position}},["text"==t.toCover.type?i("van-icon",{attrs:{name:"edit",color:"#ffa500"}}):"video"==t.toCover.type?i("van-icon",{attrs:{name:"video",color:"#87ceeb"}}):"music"==t.toCover.type?i("van-icon",{attrs:{name:"music",color:"#ffc0cb"}}):t._e()],1),t.position?i("div",{directives:[{name:"show",rawName:"v-show",value:!t.sheen,expression:"!sheen"}],staticClass:"delete",on:{click:function(e){return e.stopPropagation(),t.upDeleta(e)}}},[i("van-icon",{attrs:{name:"delete"}})],1):t._e(),i("div",{staticClass:"title"},[i("h3",[t._v(t._s(t.toCover.coverTitle))]),i("h5",{directives:[{name:"show",rawName:"v-show",value:!t.sheen,expression:"!sheen"}]},[t._v(t._s(t.toCover.coverMessage))]),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.sheen,expression:"!sheen"}],staticClass:"updwico"},[t.posit?i("div",[t.isShare?i("van-icon",{staticClass:"down",attrs:{name:"upgrade",color:"#0299fe"},on:{click:function(e){return e.stopPropagation(),t.upShare(e)}}}):i("van-icon",{attrs:{name:"upgrade",color:"#64e6d1"},on:{click:function(e){return e.stopPropagation(),t.upShare(e)}}})],1):i("div",{staticClass:"headImg"},[i("headImg",{attrs:{userImg:t.info.userImg},on:{openInfo:t.openInfo}})],1)])])]):t._e(),i("div",{staticClass:"inof",class:{seenInfo:t.infoSheen}},[i("div",{staticClass:"fallback"},[i("van-icon",{attrs:{name:"arrow-left"},on:{click:t.suspendInfo}})],1),i("div",{staticClass:"detailed"},[i("div",{staticClass:"head"},[i("img",{attrs:{src:t.info.userImg,alt:""}})]),i("div",{staticClass:"content"},[i("div",[i("div",{staticClass:"title"},[t._v("昵称")]),t._v(" "+t._s(t.info.nickname)+" ")]),i("div",[i("div",{staticClass:"title"},[t._v("邮箱")]),t._v(" "+t._s(t.info.email)+" ")]),i("div",[i("div",{staticClass:"title"},[t._v("UID")]),t._v(" "+t._s(t.info.userId)+" ")]),i("div",{staticClass:"btn"},[i("van-button",{attrs:{type:"primary"},on:{click:t.jumpCath}},[t._v("发送消息")])],1)])])])])},c=[],u=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"headImg"},[i("div",{staticClass:"head",on:{click:function(e){return e.stopPropagation(),t.openInfo(e)}}},[i("img",{attrs:{src:t.userImg,alt:""}})])])},l=[],d={name:"headImg",props:["userImg"],methods:{openInfo:function(){this.$emit("openInfo")}}},v=d,m=(i("ed72"),i("2877")),h=Object(m["a"])(v,u,l,!1,null,"66afe30f",null),f=h.exports,p={name:"coverSeen",props:["toCover","index","position"],data:function(){return{isShare:!0,ifSheen:!0,info:{}}},components:{headImg:f},computed:{infoSheen:function(){var t=!1;return this.$store.state.myIndexInf==this.index&&(t=!0),t},sheen:function(){var t=!1;return this.$store.state.myIndex==this.index&&(t=!0),t},posit:function(){return this.toCover.email==this.$store.state.useEmail||this.position}},methods:{jumpCath:function(){this.$store.commit("setChatSheen",!0),this.$store.commit("setTarget",{nickname:this.info.nickname,id:this.info.userId,userImg:this.info.userImg})},suspendInfo:function(){this.$store.commit("steMyIndexInf",null)},openInfo:function(){this.$store.commit("steMyIndexInf",this.index)},setIndex:function(){this.sheen?this.$store.commit("setMyIndex",null):this.$store.commit("setMyIndex",this.index)},upShare:function(){var t=this,e=!this.toCover.isShare;this.$toast.loading({message:"...",duration:0,forbidClick:!0}),this.axios.post("/deleteandshare",{id:this.toCover.id,operation:1,isShare:e}).then((function(e){if(1120==e.data.code)return t.$toast.success(e.data.msg),t.isShare=!t.isShare,void(t.position||(t.ifSheen=!1));t.$toast.fail(e.data.msg)})).catch((function(e){t.$toast.fail("网络错误")}))},upDeleta:function(){var t=this,e=!this.toCover.isDelete;this.toCover.isShare&&this.upShare(),this.$toast.loading({message:"请求发送中...",duration:0,forbidClick:!0}),this.axios.post("/deleteandshare",{id:this.toCover.id,operation:0,isDelete:e}).then((function(e){if(1120==e.data.code)return t.$toast.success(e.data.msg),void(t.ifSheen=!t.ifSheen);t.$toast.fail(e.data.msg)})).catch((function(e){t.$toast.fail("网络错误")}))},getInfData:function(){var t=this;if(!this.position){var e=sessionStorage.getItem(this.toCover.email);sessionStorage.getItem(this.toCover.email)?this.info=JSON.parse(e):this.axios.post("/getmyinf",{email:this.toCover.email}).then((function(e){t.info=e.data.require[0],sessionStorage.setItem(t.toCover.email,JSON.stringify(e.data.require[0]))}))}}},created:function(){this.isShare=this.toCover.isShare,this.getInfData()}},S=p,C=(i("77f5"),Object(m["a"])(S,r,c,!1,null,"aaad30fe",null)),x=C.exports,y={name:"testSeen",props:["toData","index","position"],computed:{sheen:function(){var t=!1;return this.$store.state.myIndex==this.index&&(t=!0),t}},components:{coverSeen:x}},g=y,I=(i("2d89"),Object(m["a"])(g,s,a,!1,null,"8f2b88de",null)),_=I.exports,D=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"musicSeen"}},[i("coverSeen",{attrs:{toCover:t.toData,index:t.index,position:t.position}}),i("transition",{attrs:{name:"fade"}},[t.sheen?i("div",{staticClass:"info",class:{infoSeen:t.sheen}},[i("audioPlay",{attrs:{toData:t.toData}})],1):t._e()])],1)},b=[],$=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"audioPlay"},[i("div",{staticClass:"turntable"},[i("div",{staticClass:"picture"},[i("img",{class:{animation:!t.musicPlay},attrs:{src:t.toData.coverImg}})]),i("div",{staticClass:"bg",style:{background:"url("+t.toData.coverImg+")"}})]),i("div",{staticClass:"controller"},[i("div",{staticClass:"timer",class:{conSeen:t.timerSeen},on:{click:function(e){return t.seenControl("timer")}}},[t.timerSeen?i("van-slider",{attrs:{"active-color":"#1acf34",min:"0",max:"100"},scopedSlots:t._u([{key:"button",fn:function(){return[i("div",{staticClass:"neibtn",on:{touchstart:t.mouDown,touchend:t.mouUp,touchcancel:function(e){t.touchend=!0}}},[i("van-icon",{attrs:{name:"clock-o"}})],1)]},proxy:!0}]),model:{value:t.timer,callback:function(e){t.timer=e},expression:"timer"}}):i("van-icon",{attrs:{name:"clock-o"}})],1),i("div",{staticClass:"conBtn"},[i("div",{on:{click:t.musicPlatyon}},[t.musicPlay?i("van-icon",{attrs:{name:"pause-circle-o"}}):i("van-icon",{attrs:{name:"play-circle-o"}})],1)]),i("div",{staticClass:"volume",class:{conSeen:t.volmeSeen},on:{click:function(e){return t.seenControl("volume")}}},[t.volmeSeen?i("van-slider",{attrs:{"active-color":"#1acf34",min:"0",max:"100"},scopedSlots:t._u([{key:"button",fn:function(){return[i("div",{staticClass:"neibtn"},[i("van-icon",{attrs:{name:"volume-o"}})],1)]},proxy:!0}]),model:{value:t.volume,callback:function(e){t.volume=e},expression:"volume"}}):i("van-icon",{attrs:{name:"volume-o"}})],1)]),i("audio",{attrs:{id:"audio"+t.toData.id,src:t.toData.coverMusic}})])},k=[],w={name:"audioPlay",props:["toData"],data:function(){return{timer:0,volume:100,musicPlay:!1,timerSeen:!1,volmeSeen:!1,timerconl:!0}},methods:{seenControl:function(t){if("timer"==t)return this.timerSeen=!0,void(this.volmeSeen=!1);this.volmeSeen=!0,this.timerSeen=!1},Putitaway:function(){this.timerSeen=!1,this.volmeSeen=!1},musicPlatyon:function(){var t=this;this.musicPlay=!this.musicPlay;var e=document.querySelector("audio");if(!this.musicPlay)return this.Putitaway(),void e.pause();e.play(),e.ontimeupdate=function(){t.timerconl&&(t.timer=Math.floor(e.currentTime/e.duration*100))}},mouDown:function(){this.timerconl=!1},mouUp:function(){this.timerconl=!0;var t=document.querySelector("audio");t.play()}},watch:{timer:function(){if(!this.timerconl){var t=document.querySelector("#audio"+this.toData.id);t.pause(),t.currentTime=this.timer/100*t.duration}},volume:function(){var t=document.querySelector("#audio"+this.toData.id);t.volume=this.volume/100}},mounted:function(){var t=this,e=document.querySelector("#audio"+this.toData.id);e.onplay=function(){t.musicPlay=!0}}},P=w,j=(i("30fd"),Object(m["a"])(P,$,k,!1,null,"5053d44e",null)),O=j.exports,E={name:"musicSeen",props:["toData","index","position"],data:function(){return{duration:0}},computed:{sheen:function(){var t=!1;return this.$store.state.myIndex==this.index&&(t=!0),t}},components:{coverSeen:x,audioPlay:O}},M=E,q=(i("fad1"),Object(m["a"])(M,D,b,!1,null,"9caec5ec",null)),N=q.exports,J=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"vudioSeen"}},[i("coverSeen",{attrs:{toCover:t.toData,position:t.position,index:t.index}}),i("div",{staticClass:"info",class:{infoSeen:t.sheen}},[i("video",{attrs:{src:t.toData.coverVudio,controls:""}})])],1)},T=[],B={name:"vudioSeen",props:["toData","index","position"],computed:{sheen:function(){var t=!1;return this.$store.state.myIndex==this.index&&(t=!0),t}},components:{coverSeen:x}},U=B,V=(i("6899"),Object(m["a"])(U,J,T,!1,null,"11f3a518",null)),z=V.exports,A={name:"seenBar",props:["toData","index","position"],components:{textSeen:_,musicSeen:N,vudioSeen:z}},F=A,G=Object(m["a"])(F,n,o,!1,null,"4f700928",null);e["a"]=G.exports},"1bc5":function(t,e,i){},"2d89":function(t,e,i){"use strict";var n=i("9369"),o=i.n(n);o.a},"30fd":function(t,e,i){"use strict";var n=i("1bc5"),o=i.n(n);o.a},"3f18":function(t,e,i){},"48fb":function(t,e,i){},6899:function(t,e,i){"use strict";var n=i("48fb"),o=i.n(n);o.a},"77f5":function(t,e,i){"use strict";var n=i("ea0e"),o=i.n(n);o.a},9369:function(t,e,i){},e639:function(t,e,i){},ea0e:function(t,e,i){},ed72:function(t,e,i){"use strict";var n=i("e639"),o=i.n(n);o.a},fad1:function(t,e,i){"use strict";var n=i("3f18"),o=i.n(n);o.a}}]);
//# sourceMappingURL=chunk-281ec27d.f67202fe.js.map