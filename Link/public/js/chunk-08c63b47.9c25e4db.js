(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-08c63b47"],{2762:function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{type:"text"},domProps:{value:t.text},on:{input:function(n){n.target.composing||(t.text=n.target.value)}}}),e("button",{staticClass:"btn",on:{click:t.msg}},[t._v("btn")]),e("div",[t._v(t._s(t.gettext))])])},i=[],s=(e("9911"),{name:"test",data:function(){return{text:"",ws:void 0,gettext:""}},methods:{link:function(){if(this.ws){var t=this.ws;t.onopen=function(n){t.send("game1")},t.onclose=function(t){},t.onerror=function(){}}},msg:function(){this.ws.send(this.text)}},mounted:function(){var t=this;window.WebSocket&&(this.ws=new WebSocket("ws://127.0.0.1:8001"),this.link(),this.ws.onmessage=function(n){t.gettext=n.data})}}),r=s,a=e("2877"),u=Object(a["a"])(r,o,i,!1,null,"0c539586",null);n["default"]=u.exports},"857a":function(t,n,e){var o=e("1d80"),i=/"/g;t.exports=function(t,n,e,s){var r=String(o(t)),a="<"+n;return""!==e&&(a+=" "+e+'="'+String(s).replace(i,"&quot;")+'"'),a+">"+r+"</"+n+">"}},9911:function(t,n,e){"use strict";var o=e("23e7"),i=e("857a"),s=e("af03");o({target:"String",proto:!0,forced:s("link")},{link:function(t){return i(this,"a","href",t)}})},af03:function(t,n,e){var o=e("d039");t.exports=function(t){return o((function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}))}}}]);
//# sourceMappingURL=chunk-08c63b47.9c25e4db.js.map