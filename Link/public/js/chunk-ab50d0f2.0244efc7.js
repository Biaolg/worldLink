(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ab50d0f2"],{"1fff":function(t,a,i){},"2cfd":function(t,a,i){"use strict";var e=i("1fff"),s=i.n(e);s.a},"409e":function(t,a,i){"use strict";i.r(a);var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{attrs:{id:"forgetPassword"}},[i("div",{staticClass:"rout"},[i("van-nav-bar",{attrs:{title:"找回密码","left-arrow":""},on:{"click-left":t.onClickLeftr}})],1),i("div",{staticClass:"font"},[i("van-form",{staticClass:"font",on:{submit:t.onSubmit}},[i("van-field",{attrs:{label:"邮箱",name:"邮箱",placeholder:"请输入注册邮箱"},model:{value:t.inf.email,callback:function(a){t.$set(t.inf,"email",a)},expression:"inf.email"}}),i("van-field",{attrs:{center:"",clearable:"",label:"邮箱验证码",placeholder:"邮箱验证码"},scopedSlots:t._u([{key:"button",fn:function(){return[i("van-button",{attrs:{size:"small",disabled:"发送验证码"!=t.sbText,type:"primary"},on:{click:t.getEmalisTitle}},[t._v(t._s(t.sbText))])]},proxy:!0}]),model:{value:t.inf.code,callback:function(a){t.$set(t.inf,"code",a)},expression:"inf.code"}}),i("div",{staticStyle:{margin:"30px"}},[i("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[t._v("下一步")])],1)],1)],1)])},s=[],n={naem:"forgetPassword",data:function(){return{inf:{email:"",code:""},sbText:"发送验证码"}},computed:{validEmail:function(){return/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(this.inf.email)},validCode:function(){return/^\d{6}$/.test(this.inf.code)}},methods:{onSubmit:function(){var t=this;""!==this.inf.email&&""!==this.inf.code?this.validEmail?this.validCode?(this.$toast.loading({message:"发送中...",duration:0,forbidClick:!0}),this.axios({method:"POST",url:"/forgetpassword",data:this.inf}).then((function(a){if(1040==a.data.code)return t.$toast.success(a.data.msg),t.$store.commit("setUseEmail",t.inf.email),t.$cookies.set("_xiaozz",a.data.token,"10s"),void t.$router.push("setPasword");t.$toast.fail(a.data.msg)})).catch((function(a){t.$toast.fail("网络错误")}))):this.$toast.fail("请输入6位数的验证码"):this.$toast.fail("邮箱格式错误"):this.$toast.fail("请输邮箱和验证码")},getEmalisTitle:function(){var t=this,a=10;this.sbText=a--+"后再次发送";var i=setInterval((function(){t.sbText=a--+"后再次发送",a<0&&(t.sbText="发送验证码",clearInterval(i))}),1e3);this.$toast.loading({message:"加载中...",duration:0,forbidClick:!0}),this.axios({method:"POST",url:"/sendmail",data:this.inf}).then((function(a){1010!=a.data.code?t.$toast.fail(a.data.msg):t.$toast.success(a.data.msg)})).catch((function(a){t.$toast.fail("网络错误")}))},onClickLeftr:function(){this.$router.push("Singin")}}},o=n,l=(i("2cfd"),i("2877")),c=Object(l["a"])(o,e,s,!1,null,"2e314399",null);a["default"]=c.exports}}]);
//# sourceMappingURL=chunk-ab50d0f2.0244efc7.js.map