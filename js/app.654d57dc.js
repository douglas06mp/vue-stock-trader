(function(t){function n(n){for(var s,r,i=n[0],c=n[1],u=n[2],d=0,p=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);l&&l(n);while(p.length)p.shift()();return a.push.apply(a,u||[]),e()}function e(){for(var t,n=0;n<a.length;n++){for(var e=a[n],s=!0,i=1;i<e.length;i++){var c=e[i];0!==o[c]&&(s=!1)}s&&(a.splice(n--,1),t=r(r.s=e[0]))}return t}var s={},o={app:0},a=[];function r(n){if(s[n])return s[n].exports;var e=s[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=s,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var s in t)r.d(e,s,function(n){return t[n]}.bind(null,s));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="/vue-stock-trader/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=n,i=i.slice();for(var u=0;u<i.length;u++)n(i[u]);var l=c;a.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";var s=e("64a9"),o=e.n(s);o.a},1:function(t,n){},"56d7":function(t,n,e){"use strict";e.r(n);var s={};e.r(s),e.d(s,"loadData",(function(){return b}));e("cadf"),e("551c"),e("f751"),e("097d");var o=e("2b0e"),a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("app-header"),e("div",{staticClass:"row"},[e("transition",{attrs:{name:"slide",mode:"out-in"}},[e("router-view")],1)],1)],1)},r=[],i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light",staticStyle:{"justify-content":"space-between","margin-bottom":"30px"}},[e("ul",{staticClass:"navbar-nav"},[e("router-link",{attrs:{to:"/",tag:"li","active-class":"nav-item"}},[e("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("Stock Trader")])]),e("router-link",{attrs:{to:"/portfolio",tag:"li","active-class":"nav-item"}},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Portfolio")])]),e("router-link",{attrs:{to:"/stocks",tag:"li","active-class":"nav-item"}},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Stocks")])])],1),e("ul",{staticClass:"navbar-nav"},[e("li",{staticClass:"nav-item"},[e("span",{staticClass:"navbar-brand"},[t._v(t._s(t._f("currency")(t.funds)))])]),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:t.random}},[t._v("End Day")])]),e("li",{staticClass:"nav-item dropdown",class:{show:t.isDropdownShow},on:{click:function(n){t.isDropdownShow=!t.isDropdownShow}}},[e("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdownMenuLink",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n                Save /Load\n            ")]),e("div",{staticClass:"dropdown-menu",class:{show:t.isDropdownShow},attrs:{"aria-labelledby":"navbarDropdownMenuLink"}},[e("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:t.save}},[t._v("Save Data")]),e("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:t.load}},[t._v("Load Data")])])])])])},c=[],u={data:function(){return{isDropdownShow:!1}},computed:{funds:function(){return this.$store.getters.funds}},methods:{random:function(){this.$store.dispatch("randomizeStock")},save:function(){var t={stocks:this.$store.getters.stocks,portfolio:this.$store.getters.portfolioStocks,funds:this.$store.getters.funds};this.$http.put("data.json",t)},load:function(){this.$store.dispatch("loadData")}}},l=u,d=e("2877"),p=Object(d["a"])(l,i,c,!1,null,null,null),f=p.exports,v={components:{appHeader:f},created:function(){this.$store.dispatch("initStock")}},m=v,h=(e("034f"),Object(d["a"])(m,a,r,!1,null,null,null)),k=h.exports,y=e("2f62"),b=function(t){var n=t.commit;o["a"].http.get("data.json").then((function(t){return t.json()})).then((function(t){if(t){var e=t.stocks,s=t.portfolio,o=t.funds,a={funds:o,portfolioStock:s};n("SET_STOCKS",e),n("SET_PORTFOLIO",a)}}))},S=[{id:1,name:"Ford",price:86},{id:2,name:"Benz",price:123},{id:3,name:"BMW",price:108},{id:4,name:"SKODA",price:90},{id:5,name:"Volkswagen",price:93},{id:6,name:"Ferrari",price:118},{id:7,name:"Audi",price:107},{id:8,name:"Porshce",price:96},{id:9,name:"Lamborghini",price:132}],_={stocks:[]},g={INIT_STOCKS:function(t){t.stocks=S},RND_STOCKS:function(t){t.stocks.map((function(t){return t.price=Math.floor(t.price*(.5*Math.random()+.8))}))},SET_STOCKS:function(t,n){t.stocks=n}},w={initStock:function(t){var n=t.commit;n("INIT_STOCKS")},randomizeStock:function(t){var n=t.commit;n("RND_STOCKS")},buyStock:function(t,n){var e=t.commit;e("BUY_STOCKS",n)}},C={stocks:function(){return _.stocks}},O={state:_,mutations:g,actions:w,getters:C},x=(e("7f7f"),e("7514"),{stocks:[],funds:1e4}),q={BUY_STOCKS:function(t,n){var e=n.id,s=n.price,o=n.quantity,a=t.stocks.find((function(t){return t.id===e}));a?a.quantity+=o:t.stocks.push({id:e,quantity:o}),t.funds-=s*o},SELL_STOCKS:function(t,n){var e=n.id,s=n.price,o=n.quantity,a=t.stocks.find((function(t){return t.id===e}));a.quantity>o?a.quantity-=o:t.stocks.splice(t.stocks.indexOf(a),1),t.funds+=s*o},SET_PORTFOLIO:function(t,n){t.funds=n.funds,t.stocks=n.portfolioStock?n.portfolioStock:[]}},$={sellStock:function(t,n){var e=t.commit;e("SELL_STOCKS",n)}},j={portfolioStocks:function(t,n){return t.stocks.map((function(t){var e=n.stocks.find((function(n){return n.id==t.id}));return{id:t.id,quantity:t.quantity,price:e.price,name:e.name}}))},funds:function(){return x.funds}},T={state:x,mutations:q,actions:$,getters:j};o["a"].use(y["a"]);var D=new y["a"].Store({modules:{stocks:O,portfolio:T},actions:s}),P=e("28dd"),E=e("8c4f"),L=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h2",[t._v("Your Funds:")]),e("h4",[t._v(t._s(t._f("currency")(t.funds)))])])},K=[],M={computed:{funds:function(){return this.$store.getters.funds}}},I=M,N=Object(d["a"])(I,L,K,!1,null,null,null),z=N.exports,B=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"col col-xs-12",staticStyle:{display:"flex","flex-wrap":"wrap"}},t._l(t.stocks,(function(t){return e("app-stock",{key:t.id,attrs:{stock:t}})})),1)},F=[],R=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"col-lg-4 col-md-6"},[e("div",{staticClass:"card border-info mb-3"},[e("div",{staticClass:"card-header bg-info text-white"},[t._v("\n      "+t._s(t.stock.name)+"\n      "),e("span",{staticStyle:{"font-size":".2rem"}},[t._v("(Price: "+t._s(t.stock.price)+" | Quantity: "+t._s(t.stock.quantity)+")")])]),e("div",{staticClass:"card-body text-info",staticStyle:{display:"flex","justify-content":"space-between"}},[e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.quantity,expression:"quantity",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:t.quantity},on:{input:function(n){n.target.composing||(t.quantity=t._n(n.target.value))},blur:function(n){return t.$forceUpdate()}}}),e("button",{staticClass:"btn btn-info",attrs:{disabled:t.quantity<0||t.quantity>t.stock.quantity},on:{click:t.sell}},[t._v("Sell")])])])])},U=[],Y={props:["stock"],data:function(){return{quantity:0}},methods:{sell:function(){var t={id:this.stock.id,price:this.stock.price,quantity:this.quantity};this.$store.dispatch("sellStock",t),this.quantity=0}}},A=Y,J=Object(d["a"])(A,R,U,!1,null,null,null),H=J.exports,Q={computed:{stocks:function(){return this.$store.getters.portfolioStocks}},components:{appStock:H}},V=Q,W=Object(d["a"])(V,B,F,!1,null,null,null),G=W.exports,X=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"col col-xs-12",staticStyle:{display:"flex","flex-wrap":"wrap"}},t._l(t.stocks,(function(t){return e("app-stock",{key:t.id,attrs:{stock:t}})})),1)},Z=[],tt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"col-lg-4 col-md-6"},[e("div",{staticClass:"card border-success mb-3"},[e("div",{staticClass:"card-header bg-success text-white"},[t._v(t._s(t.stock.name)+" "),e("span",{staticStyle:{"font-size":".2rem"}},[t._v("(Price: "+t._s(t.stock.price)+")")])]),e("div",{staticClass:"card-body text-success",staticStyle:{display:"flex","justify-content":"space-between"}},[e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.quantity,expression:"quantity",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:t.quantity},on:{input:function(n){n.target.composing||(t.quantity=t._n(n.target.value))},blur:function(n){return t.$forceUpdate()}}}),e("button",{staticClass:"btn btn-success",attrs:{disabled:t.quantity<=0||t.quantity*t.stock.price>this.$store.getters.funds},on:{click:t.buy}},[t._v("Buy")])])])])},nt=[],et={props:["stock"],data:function(){return{quantity:0}},methods:{buy:function(){var t={id:this.stock.id,price:this.stock.price,quantity:this.quantity};this.$store.dispatch("buyStock",t),this.quantity=0}}},st=et,ot=Object(d["a"])(st,tt,nt,!1,null,null,null),at=ot.exports,rt={computed:{stocks:function(){return this.$store.getters.stocks}},components:{appStock:at}},it=rt,ct=Object(d["a"])(it,X,Z,!1,null,null,null),ut=ct.exports,lt=[{path:"",component:z},{path:"/portfolio",component:G},{path:"/stocks",component:ut}];e("4989"),e("ab8b");o["a"].use(P["a"]),o["a"].http.options.root="https://vue-stocktrader-25887.firebaseio.com/",o["a"].use(E["a"]);var dt=new E["a"]({routes:lt,mode:"history"});o["a"].filter("currency",(function(t){return"$"+t.toLocaleString()})),new o["a"]({el:"#app",render:function(t){return t(k)},router:dt,store:D}).$mount("#app")},"64a9":function(t,n,e){}});
//# sourceMappingURL=app.654d57dc.js.map