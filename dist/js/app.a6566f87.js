(function(t){function r(r){for(var n,o,i=r[0],s=r[1],u=r[2],d=0,p=[];d<i.length;d++)o=i[d],a[o]&&p.push(a[o][0]),a[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);l&&l(r);while(p.length)p.shift()();return c.push.apply(c,u||[]),e()}function e(){for(var t,r=0;r<c.length;r++){for(var e=c[r],n=!0,i=1;i<e.length;i++){var s=e[i];0!==a[s]&&(n=!1)}n&&(c.splice(r--,1),t=o(o.s=e[0]))}return t}var n={},a={app:0},c=[];function o(r){if(n[r])return n[r].exports;var e=n[r]={i:r,l:!1,exports:{}};return t[r].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=n,o.d=function(t,r,e){o.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,r){if(1&r&&(t=o(t)),8&r)return t;if(4&r&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var n in t)o.d(e,n,function(r){return t[r]}.bind(null,n));return e},o.n=function(t){var r=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(r,"a",r),r},o.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=r,i=i.slice();for(var u=0;u<i.length;u++)r(i[u]);var l=s;c.push([0,"chunk-vendors"]),e()})({0:function(t,r,e){t.exports=e("56d7")},"56d7":function(t,r,e){"use strict";e.r(r);e("cadf"),e("551c"),e("f751"),e("097d");var n=e("2b0e"),a=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"body-wrapper"},[e("app-header"),e("main",{staticClass:"main"},[e("div",{staticClass:"container"},[e("div",{staticClass:"main-container"},[e("div",{staticClass:"content-container"},[e("div",{staticClass:"section"},[e("h1",[t._v("My cool new vue application")]),t._l(t.cards,function(t){return e("app-card",{key:t.card_id,attrs:{card:t}})})],2)])])])])],1)])},c=[],o=function(){var t=this,r=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("header",{staticClass:"header"},[e("div",{staticClass:"container"},[e("span",{staticClass:"header__title"},[t._v("Let’s play UNO")])])])}],s=(e("5d73"),e("2877")),u={},l=Object(s["a"])(u,o,i,!1,null,"5b2c1d21",null),d=l.exports,p=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"card",class:[t.cardColorClass]},[e("span",{staticClass:"card__nr"},[t._v(t._s(t.card.card_nr))])])},f=[],v={props:["card"],computed:{cardColorClass:function(){return"card--"+this.card.card_color}}},_=v,b=(e("8071"),Object(s["a"])(_,p,f,!1,null,"13bd9bde",null)),h=b.exports,y={name:"app",components:{appHeader:d,appCard:h},data:function(){return{cards:[{card_id:"red-1",card_nr:"1",card_color:"red"},{card_id:"red-2",card_nr:"2",card_color:"red"}]}}},m=y,C=(e("5c0b"),Object(s["a"])(m,a,c,!1,null,null,null)),O=C.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(O)}}).$mount("#app")},"5c0b":function(t,r,e){"use strict";var n=e("5e27"),a=e.n(n);a.a},"5d73":function(t,r,e){"use strict";var n=e("7192"),a=e.n(n);a.a},"5e27":function(t,r,e){},7192:function(t,r,e){},8071:function(t,r,e){"use strict";var n=e("cada"),a=e.n(n);a.a},cada:function(t,r,e){}});
//# sourceMappingURL=app.a6566f87.js.map