(function(t){function e(e){for(var n,s,o=e[0],i=e[1],l=e[2],d=0,h=[];d<o.length;d++)s=o[d],a[s]&&h.push(a[s][0]),a[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);u&&u(e);while(h.length)h.shift()();return c.push.apply(c,l||[]),r()}function r(){for(var t,e=0;e<c.length;e++){for(var r=c[e],n=!0,o=1;o<r.length;o++){var i=r[o];0!==a[i]&&(n=!1)}n&&(c.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},a={app:0},c=[];function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=i;c.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"20b0":function(t,e,r){},3555:function(t,e,r){},3564:function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"body-wrapper"},[r("main",{staticClass:"main"},[r("div",{staticClass:"container"},[r("div",{staticClass:"main-container"},[r("div",{staticClass:"content-container"},[r("div",{staticClass:"section"},[t.gameDeck?r("div",{staticClass:"table"},[r("div",{staticClass:"playing-area"},[r("app-deck",{attrs:{gameDeck:t.gameDeck}}),r("app-stack",{attrs:{stack:t.stack}}),r("div",{staticClass:"current-color",class:{"is-active":"choose-color"===t.stack[t.stack.length-1].rule}},[r("div",{staticClass:"current-color__inner",class:["current-color--"+t.currentColor]})])],1),r("div",{staticClass:"hands"},[r("app-players",{attrs:{players:t.players,stack:t.stack,gameDeck:t.gameDeck,currentColor:t.currentColor,currentNumber:t.currentNumber,directionIsClockwise:t.directionIsClockwise,customEvents:t.customEvents},on:{addToStackEvent:t.addCardToStack,changeDirectionEvent:t.changeDirection,currentCardChangeEvent:t.changeCurrentCard,removeCardsFromGameDeckEvent:t.removeCardsFromGameDeck,chooseColorEvent:t.chooseColor}})],1)]):r("button",{staticClass:"btn btn--1",on:{click:t.dealCards}},[t._v("Deal")])])])])])])])])},c=[],s=(r("ac6a"),r("f3e2"),r("75fc")),o=r("bc3a"),i=r.n(o),l={getCards:function(t){return{getAll:function(){return i.a.get(t)}}}},u=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{staticClass:"card",class:[t.cardColorClass]},[t.card.nr?r("span",{staticClass:"card__nr card__nr--top"},[t._v(t._s(t.card.nr))]):t._e(),t.card.nr?r("span",{staticClass:"card__nr"},[t._v(t._s(t.card.nr))]):t._e(),t.card.nr?r("span",{staticClass:"card__nr card__nr--bottom"},[t._v(t._s(t.card.nr))]):t._e(),t.card.icon?r("img",{staticClass:"card__icon card__icon--top",attrs:{src:t.cardIconSrc,width:"30",height:"30",alt:t.card.icon}}):t._e(),t.card.icon?r("img",{staticClass:"card__icon",attrs:{src:t.cardIconSrc,width:"80",height:"80",alt:t.card.icon}}):t._e(),t.card.icon?r("img",{staticClass:"card__icon card__icon--bottom",attrs:{src:t.cardIconSrc,width:"30",height:"30",alt:t.card.icon}}):t._e()])},d=[],h={props:["card"],computed:{cardColorClass:function(){return"card--"+this.card.color},cardIconSrc:function(){return"reverse"===this.card.icon?"/icons/icon-reverse-direction.svg":"choose-color"===this.card.icon?"/icons/icon-choose-color.svg":"next-player-take-four"===this.card.icon?"/icons/icon-take-four-cards.svg":"next-player-skip-turn"===this.card.icon?"/icons/icon-next-player-skip-turn.svg":"next-player-take-two"===this.card.icon?"/icons/icon-next-player-take-two.svg":void 0}}},p=h,f=(r("eb5e"),r("2877")),m=Object(f["a"])(p,u,d,!1,null,null,null),v=m.exports,y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"deck-container"},[r("h3",[t._v("Deck")]),r("ul",{staticClass:"deck"},t._l(t.gameDeck,function(t){return r("app-card",{key:t.id,attrs:{card:t}})}),1)])},C=[],k={props:["gameDeck"],methods:{},components:{appCard:v}},g=k,b=(r("9c9f"),Object(f["a"])(g,y,C,!1,null,null,null)),_=b.exports,E=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"stack-container"},[r("h3",[t._v("Stack")]),r("ul",{staticClass:"stack"},t._l(t.stack,function(t){return r("app-card",{key:t.id,attrs:{card:t}})}),1)])},P=[],w={props:["stack"],components:{appCard:v}},D=w,x=(r("8b5d"),Object(f["a"])(D,E,P,!1,null,null,null)),O=x.exports,j=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"players-container"},[r("ul",{staticClass:"players"},t._l(t.players,function(e,n){return r("li",{key:e.id,staticClass:"player",class:{turn:e.turn}},[r("h3",0===n?[t._v("My cards")]:[t._v("Cards "+t._s(e.name))]),r("ul",{class:{"my-cards":0===n,"opponent-cards":n>0}},t._l(t.players[n].cards,function(e){return r("app-card",{key:e.id,class:{"is-playable":e.playable},attrs:{card:e},nativeOn:{click:function(r){return t.playCard(e,t.players[n])}}})}),1)])}),0),r("transition",{attrs:{name:"fade"}},[t.modalVisible?r("app-choose-color",{on:{chooseColorEvent:t.chooseColor}}):t._e()],1)],1)},S=[],$=(r("7f7f"),r("7514"),r("a4bb")),I=r.n($),T=(r("0cd8"),r("d25f"),r("20d6"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"modal"},[r("div",{staticClass:"modal__inner"},[r("ul",{staticClass:"colors"},t._l(t.colors,function(e){return r("li",{staticClass:"color"},[r("button",{staticClass:"card",class:["card--"+e],on:{click:function(r){return t.chooseColor(e)}}})])}),0)])])}),M=[],N={data:function(){return{colors:["red","yellow","green","blue"]}},methods:{chooseColor:function(t){this.$emit("chooseColorEvent",t)}}},A=N,V=(r("5972"),Object(f["a"])(A,T,M,!1,null,null,null)),F=V.exports,G={data:function(){return{modalVisible:!1}},props:["players","stack","gameDeck","directionIsClockwise","currentColor","currentNumber","customEvents"],components:{appCard:v,appChooseColor:F},methods:{playCard:function(t,e){var r=e.cards.findIndex(function(e){return t===e});e.cards.splice(r,1),this.$emit("addToStackEvent",t),0===e.cards.length&&this.callWinner(e),this.$emit("currentCardChangeEvent",{color:t.color,number:t.nr})},applyRules:function(t){if("next-player-skip-turn"===t.rule)this.nextPlayer(!0);else if("reverse-direction"===t.rule)this.$emit("changeDirectionEvent");else if("next-player-take-two"===t.rule)this.nextPlayer(!1,!0,!1);else if("next-player-take-four"===t.rule)this.nextPlayer(!1,!1,!0);else if("choose-color"===t.rule)if(this.currentPlayer().computerPlayer){var e={red:this.currentPlayer().cards.filter(function(t){return"red"===t.color}).length,yellow:this.currentPlayer().cards.filter(function(t){return"yellow"===t.color}).length,green:this.currentPlayer().cards.filter(function(t){return"green"===t.color}).length,blue:this.currentPlayer().cards.filter(function(t){return"blue"===t.color}).length},r=I()(e).reduce(function(t,r){return e[t]>e[r]?t:r});this.$emit("chooseColorEvent",{color:r,number:""})}else this.modalVisible=!0;t.rule||this.nextPlayer(!1)},markAllowedCards:function(t){var e=this,r=t.cards;r.forEach(function(t){t.color===e.currentColor||"black"===t.color||"black"===e.currentColor||t.nr===e.currentNumber&&""!==e.currentNumber?t.playable=!0:t.playable=!1})},nextPlayer:function(t,e,r){var n=this.players.findIndex(function(t){return t.turn});if(this.players[n].turn=!1,this.directionIsClockwise?t?n<this.players.length-2?this.players[n+2].turn=!0:n<this.players.length-1?this.players[1].turn=!0:this.players[0].turn=!0:n<this.players.length-1?this.players[n+1].turn=!0:this.players[0].turn=!0:t?0===n?this.players[this.players.length-2].turn=!0:1===n?this.players[this.players.length-1].turn=!0:this.players[n-2].turn=!0:0===n?this.players[this.players.length-1].turn=!0:this.players[n-1].turn=!0,e||r)e?this.takeCard(2):r&&this.takeCard(4);else if(this.markAllowedCards(this.currentPlayer()),this.currentPlayer().computerPlayer)this.computerPlayerPlayCard();else{var a=this.currentPlayer().cards.find(function(t){return t.playable});a||this.takeCard(1)}},currentPlayer:function(){return this.players.find(function(t){return t.turn})},computerPlayerPlayCard:function(){var t=this,e=Math.floor(500*Math.random())+3e3,r=this.currentPlayer().cards.find(function(t){return t.playable});setTimeout(function(){r?t.playCard(r,t.currentPlayer()):t.takeCard(1)},e)},takeCard:function(t){for(var e=0;e<t;e++)this.currentPlayer().cards.push(this.gameDeck[e]);this.$emit("removeCardsFromGameDeckEvent",t),this.nextPlayer(!1)},chooseColor:function(t){this.$emit("chooseColorEvent",{color:t,number:""})},callWinner:function(t){alert(t.name+"wins!!!")}},created:function(){var t=this;this.markAllowedCards(this.currentPlayer()),document.addEventListener("cardUpdated",function(){t.stack[t.stack.length-1];setTimeout(function(){var e=t.stack[t.stack.length-1];t.applyRules(e)},200)}),document.addEventListener("colorChosen",function(){setTimeout(function(){t.nextPlayer(!1),t.modalVisible&&(t.modalVisible=!1)},200)}),document.addEventListener("directionChanged",function(){setTimeout(function(){t.nextPlayer(!1)},200)})}},U=G,L=(r("bb4f"),Object(f["a"])(U,j,S,!1,null,null,null)),J=L.exports,R={name:"app",components:{appCard:v,appDeck:_,appStack:O,appPlayers:J},data:function(){return{deck:null,gameDeck:null,stack:[],players:[{id:"player-1",name:"Player 1",cards:[],turn:!0,computerPlayer:!1},{id:"player-2",name:"Player 2",cards:[],turn:!1,computerPlayer:!0},{id:"player-3",name:"Player 3",cards:[],turn:!1,computerPlayer:!0},{id:"player-4",name:"Player 4",cards:[],turn:!1,computerPlayer:!0}],directionIsClockwise:!1,currentColor:null,currentNumber:null,customEvents:{playerChangedEvent:new CustomEvent("playerChanged"),cardUpdatedEvent:new CustomEvent("cardUpdated"),directionChangedEvent:new CustomEvent("directionChanged"),colorChosenEvent:new CustomEvent("colorChosen")}}},methods:{dealCards:function(){var t=this;this.gameDeck=Object(s["a"])(this.deck),this.gameDeck=this.shuffleDeck(this.gameDeck),this.players.forEach(function(e){for(var r=0;r<7;r++){var n=t.gameDeck[r];e.cards.push(n),t.gameDeck.splice(r,1)}}),this.stack.push(this.gameDeck[0]),this.gameDeck.splice(0,1),this.currentColor=this.stack[0].color,this.currentNumber=this.stack[0].nr},shuffleDeck:function(t){var e,r,n=t.length;while(0!==n)r=Math.floor(Math.random()*n),n-=1,e=t[n],t[n]=t[r],t[r]=e;return t},addCardToStack:function(t){this.stack.push(t)},changeDirection:function(){this.directionIsClockwise=!this.directionIsClockwise,document.dispatchEvent(this.customEvents.directionChangedEvent)},changeCurrentCard:function(t){this.currentColor=t.color,this.currentNumber=t.number,document.dispatchEvent(this.customEvents.cardUpdatedEvent)},chooseColor:function(t){this.currentColor=t.color,this.currentNumber=t.number,document.dispatchEvent(this.customEvents.colorChosenEvent)},removeCardsFromGameDeck:function(t){this.gameDeck.splice(0,t)}},created:function(){var t=this;l.getCards("/data/deck.json").getAll().then(function(e){t.deck=e.data}).catch(function(t){return console.log(t)})}},W=R,q=(r("5c0b"),Object(f["a"])(W,a,c,!1,null,null,null)),z=q.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(z)}}).$mount("#app")},5972:function(t,e,r){"use strict";var n=r("3564"),a=r.n(n);a.a},"5c0b":function(t,e,r){"use strict";var n=r("5e27"),a=r.n(n);a.a},"5e27":function(t,e,r){},"8b5d":function(t,e,r){"use strict";var n=r("9321"),a=r.n(n);a.a},9321:function(t,e,r){},"9c9f":function(t,e,r){"use strict";var n=r("a68a"),a=r.n(n);a.a},a68a:function(t,e,r){},bb4f:function(t,e,r){"use strict";var n=r("3555"),a=r.n(n);a.a},eb5e:function(t,e,r){"use strict";var n=r("20b0"),a=r.n(n);a.a}});
//# sourceMappingURL=app.7ea246d4.js.map