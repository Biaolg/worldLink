(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c0a85a0a"],{"0495":function(t,e,r){},"057f":function(t,e,r){var n=r("fc6a"),i=r("241c").f,o={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return i(t)}catch(e){return s.slice()}};t.exports.f=function(t){return s&&"[object Window]"==o.call(t)?a(t):i(n(t))}},"25f0":function(t,e,r){"use strict";var n=r("6eeb"),i=r("825a"),o=r("d039"),s=r("ad6d"),a="toString",c=RegExp.prototype,f=c[a],u=o((function(){return"/a/b"!=f.call({source:"a",flags:"b"})})),l=f.name!=a;(u||l)&&n(RegExp.prototype,a,(function(){var t=i(this),e=String(t.source),r=t.flags,n=String(void 0===r&&t instanceof RegExp&&!("flags"in c)?s.call(t):r);return"/"+e+"/"+n}),{unsafe:!0})},"3ca3":function(t,e,r){"use strict";var n=r("6547").charAt,i=r("69f3"),o=r("7dd0"),s="String Iterator",a=i.set,c=i.getterFor(s);o(String,"String",(function(t){a(this,{type:s,string:String(t),index:0})}),(function(){var t,e=c(this),r=e.string,i=e.index;return i>=r.length?{value:void 0,done:!0}:(t=n(r,i),e.index+=t.length,{value:t,done:!1})}))},"4df4":function(t,e,r){"use strict";var n=r("0366"),i=r("7b0b"),o=r("9bdd"),s=r("e95a"),a=r("50c4"),c=r("8418"),f=r("35a1");t.exports=function(t){var e,r,u,l,d,g,h=i(t),v="function"==typeof this?this:Array,b=arguments.length,p=b>1?arguments[1]:void 0,m=void 0!==p,y=f(h),S=0;if(m&&(p=n(p,b>2?arguments[2]:void 0,2)),void 0==y||v==Array&&s(y))for(e=a(h.length),r=new v(e);e>S;S++)g=m?p(h[S],S):h[S],c(r,S,g);else for(l=y.call(h),d=l.next,r=new v;!(u=d.call(l)).done;S++)g=m?o(l,p,[u.value,S],!0):u.value,c(r,S,g);return r.length=S,r}},6547:function(t,e,r){var n=r("a691"),i=r("1d80"),o=function(t){return function(e,r){var o,s,a=String(i(e)),c=n(r),f=a.length;return c<0||c>=f?t?"":void 0:(o=a.charCodeAt(c),o<55296||o>56319||c+1===f||(s=a.charCodeAt(c+1))<56320||s>57343?t?a.charAt(c):o:t?a.slice(c,c+2):s-56320+(o-55296<<10)+65536)}};t.exports={codeAt:o(!1),charAt:o(!0)}},"65f0":function(t,e,r){var n=r("861d"),i=r("e8b5"),o=r("b622"),s=o("species");t.exports=function(t,e){var r;return i(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?n(r)&&(r=r[s],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},"746f":function(t,e,r){var n=r("428f"),i=r("5135"),o=r("e538"),s=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});i(e,t)||s(e,t,{value:o.f(t)})}},"84aa":function(t,e,r){"use strict";var n=r("0495"),i=r.n(n);i.a},a4d3:function(t,e,r){"use strict";var n=r("23e7"),i=r("da84"),o=r("d066"),s=r("c430"),a=r("83ab"),c=r("4930"),f=r("fdbf"),u=r("d039"),l=r("5135"),d=r("e8b5"),g=r("861d"),h=r("825a"),v=r("7b0b"),b=r("fc6a"),p=r("c04e"),m=r("5c6c"),y=r("7c73"),S=r("df75"),w=r("241c"),M=r("057f"),O=r("7418"),L=r("06cf"),A=r("9bf2"),x=r("d1e7"),C=r("9112"),I=r("6eeb"),k=r("5692"),T=r("f772"),j=r("d012"),N=r("90e3"),P=r("b622"),E=r("e538"),R=r("746f"),H=r("d44e"),$=r("69f3"),J=r("b727").forEach,V=T("hidden"),D="Symbol",F="prototype",G=P("toPrimitive"),_=$.set,q=$.getterFor(D),B=Object[F],Q=i.Symbol,U=o("JSON","stringify"),W=L.f,z=A.f,K=M.f,X=x.f,Y=k("symbols"),Z=k("op-symbols"),tt=k("string-to-symbol-registry"),et=k("symbol-to-string-registry"),rt=k("wks"),nt=i.QObject,it=!nt||!nt[F]||!nt[F].findChild,ot=a&&u((function(){return 7!=y(z({},"a",{get:function(){return z(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=W(B,e);n&&delete B[e],z(t,e,r),n&&t!==B&&z(B,e,n)}:z,st=function(t,e){var r=Y[t]=y(Q[F]);return _(r,{type:D,tag:t,description:e}),a||(r.description=e),r},at=f?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof Q},ct=function(t,e,r){t===B&&ct(Z,e,r),h(t);var n=p(e,!0);return h(r),l(Y,n)?(r.enumerable?(l(t,V)&&t[V][n]&&(t[V][n]=!1),r=y(r,{enumerable:m(0,!1)})):(l(t,V)||z(t,V,m(1,{})),t[V][n]=!0),ot(t,n,r)):z(t,n,r)},ft=function(t,e){h(t);var r=b(e),n=S(r).concat(ht(r));return J(n,(function(e){a&&!lt.call(r,e)||ct(t,e,r[e])})),t},ut=function(t,e){return void 0===e?y(t):ft(y(t),e)},lt=function(t){var e=p(t,!0),r=X.call(this,e);return!(this===B&&l(Y,e)&&!l(Z,e))&&(!(r||!l(this,e)||!l(Y,e)||l(this,V)&&this[V][e])||r)},dt=function(t,e){var r=b(t),n=p(e,!0);if(r!==B||!l(Y,n)||l(Z,n)){var i=W(r,n);return!i||!l(Y,n)||l(r,V)&&r[V][n]||(i.enumerable=!0),i}},gt=function(t){var e=K(b(t)),r=[];return J(e,(function(t){l(Y,t)||l(j,t)||r.push(t)})),r},ht=function(t){var e=t===B,r=K(e?Z:b(t)),n=[];return J(r,(function(t){!l(Y,t)||e&&!l(B,t)||n.push(Y[t])})),n};if(c||(Q=function(){if(this instanceof Q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=N(t),r=function(t){this===B&&r.call(Z,t),l(this,V)&&l(this[V],e)&&(this[V][e]=!1),ot(this,e,m(1,t))};return a&&it&&ot(B,e,{configurable:!0,set:r}),st(e,t)},I(Q[F],"toString",(function(){return q(this).tag})),I(Q,"withoutSetter",(function(t){return st(N(t),t)})),x.f=lt,A.f=ct,L.f=dt,w.f=M.f=gt,O.f=ht,E.f=function(t){return st(P(t),t)},a&&(z(Q[F],"description",{configurable:!0,get:function(){return q(this).description}}),s||I(B,"propertyIsEnumerable",lt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:Q}),J(S(rt),(function(t){R(t)})),n({target:D,stat:!0,forced:!c},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var r=Q(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!at(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),n({target:"Object",stat:!0,forced:!c,sham:!a},{create:ut,defineProperty:ct,defineProperties:ft,getOwnPropertyDescriptor:dt}),n({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:gt,getOwnPropertySymbols:ht}),n({target:"Object",stat:!0,forced:u((function(){O.f(1)}))},{getOwnPropertySymbols:function(t){return O.f(v(t))}}),U){var vt=!c||u((function(){var t=Q();return"[null]"!=U([t])||"{}"!=U({a:t})||"{}"!=U(Object(t))}));n({target:"JSON",stat:!0,forced:vt},{stringify:function(t,e,r){var n,i=[t],o=1;while(arguments.length>o)i.push(arguments[o++]);if(n=e,(g(e)||void 0!==t)&&!at(t))return d(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!at(e))return e}),i[1]=e,U.apply(null,i)}})}Q[F][G]||C(Q[F],G,Q[F].valueOf),H(Q,D),j[V]=!0},a630:function(t,e,r){var n=r("23e7"),i=r("4df4"),o=r("1c7e"),s=!o((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:s},{from:i})},ad6d:function(t,e,r){"use strict";var n=r("825a");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b0c0:function(t,e,r){var n=r("83ab"),i=r("9bf2").f,o=Function.prototype,s=o.toString,a=/^\s*function ([^ (]*)/,c="name";n&&!(c in o)&&i(o,c,{configurable:!0,get:function(){try{return s.call(this).match(a)[1]}catch(t){return""}}})},b727:function(t,e,r){var n=r("0366"),i=r("44ad"),o=r("7b0b"),s=r("50c4"),a=r("65f0"),c=[].push,f=function(t){var e=1==t,r=2==t,f=3==t,u=4==t,l=6==t,d=5==t||l;return function(g,h,v,b){for(var p,m,y=o(g),S=i(y),w=n(h,v,3),M=s(S.length),O=0,L=b||a,A=e?L(g,M):r?L(g,0):void 0;M>O;O++)if((d||O in S)&&(p=S[O],m=w(p,O,y),t))if(e)A[O]=m;else if(m)switch(t){case 3:return!0;case 5:return p;case 6:return O;case 2:c.call(A,p)}else if(u)return!1;return l?-1:f||u?u:A}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6)}},d28b:function(t,e,r){var n=r("746f");n("iterator")},ddb0:function(t,e,r){var n=r("da84"),i=r("fdbc"),o=r("e260"),s=r("9112"),a=r("b622"),c=a("iterator"),f=a("toStringTag"),u=o.values;for(var l in i){var d=n[l],g=d&&d.prototype;if(g){if(g[c]!==u)try{s(g,c,u)}catch(v){g[c]=u}if(g[f]||s(g,f,l),i[l])for(var h in o)if(g[h]!==o[h])try{s(g,h,o[h])}catch(v){g[h]=o[h]}}}},e01a:function(t,e,r){"use strict";var n=r("23e7"),i=r("83ab"),o=r("da84"),s=r("5135"),a=r("861d"),c=r("9bf2").f,f=r("e893"),u=o.Symbol;if(i&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var l={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new u(t):void 0===t?u():u(t);return""===t&&(l[e]=!0),e};f(d,u);var g=d.prototype=u.prototype;g.constructor=d;var h=g.toString,v="Symbol(test)"==String(u("test")),b=/^Symbol\((.*)\)[^)]+$/;c(g,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,e=h.call(t);if(s(l,t))return"";var r=v?e.slice(7,-1):e.replace(b,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:d})}},e538:function(t,e,r){var n=r("b622");e.f=n},e6b0:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"chat"},[r("div",{staticClass:"bg"},[r("img",{attrs:{src:t.info.userImg,alt:""}})]),r("van-nav-bar",{attrs:{title:t.target.nickname,"left-arrow":""},on:{"click-left":t.theReturn}}),r("div",{staticClass:"massage"},t._l(t.Reverse,(function(e,n){return r("ChatList",{key:n,staticClass:"msgSheen",attrs:{msg:e}},[t._v(t._s(e))])})),1),r("div",{staticClass:"tomsg"},[r("van-field",{attrs:{center:"",clearable:"",placeholder:"请输入消息"},model:{value:t.msg,callback:function(e){t.msg=e},expression:"msg"}}),r("van-button",{attrs:{type:"info"},on:{click:t.toMsg}},[t._v("发送")])],1)],1)},i=[];r("fb6a"),r("d3b7");function o(t){if(Array.isArray(t))return t}r("a4d3"),r("e01a"),r("d28b"),r("a630"),r("e260"),r("3ca3"),r("ddb0");function s(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}r("b0c0"),r("25f0");function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function c(t,e){if(t){if("string"===typeof t)return a(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(t,e):void 0}}function f(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t){return o(t)||s(t)||c(t)||f()}var l=function(){return r.e("chunk-3fab2188").then(r.bind(null,"5527"))},d={name:"chat",data:function(){return{msg:"",seenMsg:[]}},computed:{target:function(){return this.$store.state.target},info:function(){return this.$store.state.info},ws:function(){return this.$store.state.ws},Reverse:function(){var t=u(this.seenMsg),e=t.slice(0);return e.reverse()},storageMsg:function(){return this.$store.state.storageMsg}},watch:{storageMsg:function(){var t=JSON.parse(this.storageMsg[this.storageMsg.length-1]);"world"==this.target.id&&"world"==t.id&&this.dataHandle(this.storageMsg[this.storageMsg.length-1]),this.target.id==t.myId&&"world"!=t.id&&this.dataHandle(this.storageMsg[this.storageMsg.length-1]),this.info.userId==t.myId&&t.id==this.target.id&&"world"!=t.id&&this.dataHandle(this.storageMsg[this.storageMsg.length-1])}},components:{ChatList:l},methods:{theReturn:function(){this.$store.commit("setChatSheen",!1)},toMsg:function(){if(""!=this.msg){var t=this.target.id,e="world"==t?t:"msg",r={pos:e,id:t,myId:this.info.userId,nickname:this.info.nickname,userImg:this.info.userImg,msg:this.msg};r=JSON.stringify(r),this.ws.send(r),this.msg="","world"!=e&&this.$store.commit("setstorageMsg",r)}},dataHandle:function(t){var e=JSON.parse(t);this.seenMsg.push(e)}},mounted:function(){if("world"==this.target.id)for(var t=0;t<this.storageMsg.length;t++){var e=JSON.parse(this.storageMsg[t]);"world"==e.id&&this.dataHandle(this.storageMsg[t])}else for(var r=0;r<this.storageMsg.length;r++){var n=JSON.parse(this.storageMsg[r]);(n.id==this.info.userId&&n.myId==this.target.id||(n.myId=this.info.userId&&n.id==this.target.id))&&this.dataHandle(this.storageMsg[r])}}},g=d,h=(r("84aa"),r("2877")),v=Object(h["a"])(g,n,i,!1,null,"74fcd164",null);e["default"]=v.exports},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-c0a85a0a.f2f60d9c.js.map