(function(t){function n(n){for(var o,a,c=n[0],s=n[1],u=n[2],l=0,d=[];l<c.length;l++)a=c[l],i[a]&&d.push(i[a][0]),i[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);f&&f(n);while(d.length)d.shift()();return r.push.apply(r,u||[]),e()}function e(){for(var t,n=0;n<r.length;n++){for(var e=r[n],o=!0,a=1;a<e.length;a++){var s=e[a];0!==i[s]&&(o=!1)}o&&(r.splice(n--,1),t=c(c.s=e[0]))}return t}var o={},i={app:0},r=[];function a(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"47564afd","chunk-2d0df805":"b7b2b553"}[t]+".js"}function c(n){if(o[n])return o[n].exports;var e=o[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.e=function(t){var n=[],e=i[t];if(0!==e)if(e)n.push(e[2]);else{var o=new Promise(function(n,o){e=i[t]=[n,o]});n.push(e[2]=o);var r,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=a(t),r=function(n){s.onerror=s.onload=null,clearTimeout(u);var e=i[t];if(0!==e){if(e){var o=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src,a=new Error("Loading chunk "+t+" failed.\n("+o+": "+r+")");a.type=o,a.request=r,e[1](a)}i[t]=void 0}};var u=setTimeout(function(){r({type:"timeout",target:s})},12e4);s.onerror=s.onload=r,document.head.appendChild(s)}return Promise.all(n)},c.m=t,c.c=o,c.d=function(t,n,e){c.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,n){if(1&n&&(t=c(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)c.d(e,o,function(n){return t[n]}.bind(null,o));return e},c.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(n,"a",n),n},c.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},c.p="/",c.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=n,s=s.slice();for(var l=0;l<s.length;l++)n(s[l]);var f=u;r.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"0a80":function(t,n,e){},"26fe":function(t,n,e){},"2e22":function(t,n,e){},"35a1":function(t,n,e){},"56d7":function(t,n,e){"use strict";e.r(n);var o={};e.r(o),e.d(o,"addCount",function(){return Ot}),e.d(o,"removeCount",function(){return It}),e.d(o,"addCollect",function(){return Lt}),e.d(o,"removeCollect",function(){return Et}),e.d(o,"addList",function(){return Pt}),e.d(o,"removeList",function(){return St});var i={};e.r(i),e.d(i,"getBanner",function(){return Nt}),e.d(i,"getHotbook",function(){return At}),e.d(i,"getListData",function(){return Bt});e("cadf"),e("551c"),e("f751"),e("097d");var r=e("2b0e"),a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},c=[],s={data:function(){return{name:"珠峰"}},created:function(){console.log(123)}},u=s,l=e("2877"),f=Object(l["a"])(u,a,c,!1,null,null,null),d=f.exports,p=e("8c4f"),m=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"home"},[e("my-title",{attrs:{til:"首页"}}),e("div",{staticClass:"swiper_box"},[e("swiper",{attrs:{list:t.banner}})],1),e("hotbook"),t._v("\n 首页\n")],1)},v=[],b=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"title"},[t._v("\n "+t._s(t.til)+"\n")])},h=[],_={props:["til"]},g=_,k=(e("bdc6"),Object(l["a"])(g,b,h,!1,null,"32088158",null)),y=k.exports,C=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"swiper-container"},[e("div",{staticClass:"swiper-wrapper"},t._l(t.list,function(t,n){return e("div",{key:n,staticClass:"swiper-slide"},[e("img",{attrs:{src:t.img,alt:""}})])}),0),e("div",{staticClass:"swiper-pagination"})])},w=[],x=e("41d6"),$={props:["list"],mounted:function(){},updated:function(){new x["a"](".swiper-container",{autoplay:!0,loop:!0,pagination:{el:".swiper-pagination"}})}},j=$,O=(e("867e"),Object(l["a"])(j,C,w,!1,null,null,null)),I=O.exports,L=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"hotbook"},[e("h2",[t._v("热门图书")]),e("ul",t._l(t.list,function(n,o){return e("li",{key:o},[e("img",{attrs:{src:n.img,alt:""}}),e("h3",[t._v(t._s(n.title))])])}),0)])},E=[],P={data:function(){return{list:[]}},created:function(){var t=this;this.$store.dispatch("getHotbook",function(n){t.list=n})}},S=P,M=(e("8510"),Object(l["a"])(S,L,E,!1,null,"111dfd32",null)),T=M.exports,N={data:function(){return{banner:[]}},created:function(){var t=this;this.$store.dispatch("getBanner",function(n){console.log(n),t.banner=n})},components:{"my-title":y,swiper:I,hotbook:T}},A=N,B=(e("8377"),Object(l["a"])(A,m,v,!1,null,"725cfe77",null)),D=B.exports,H=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"list"},[e("my-title",{attrs:{til:"列表页"}}),e("div",{staticClass:"lit_box"},t._l(t.list,function(n){return e("item",{key:n.bookId,attrs:{data:n},on:{change:t.fn,collect:t.fn2}})}),1),t._v("列表页\n")],1)},J=[],q=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"list"},[e("div",{staticClass:"left"},[e("img",{attrs:{src:t.data.bookCover,alt:""}})]),e("div",{staticClass:"right"},[e("h4",[t._v(t._s(t.data.bookName))]),e("p",{staticClass:"desc"},[t._v(t._s(t.data.bookInfo))]),e("div",{staticClass:"price"},[t._v("$"+t._s((t.data.bookPrice/100).toFixed(2)))]),e("div",{staticClass:"btn_box"},[e("button",{on:{click:function(n){return t.f(t.data)}}},[t._v("删除")]),t.button_show?e("button",{on:{click:function(n){return t.f2(t.data)}}},[t._v("收藏")]):t._e()])])])},F=[],R={props:{data:{default:function(){return{}}},button_show:{default:!0}},methods:{f:function(t){this.$emit("change",t)},f2:function(t){this.$emit("collect",t)}}},U=R,z=(e("ff47"),Object(l["a"])(U,q,F,!1,null,"7d08d2d0",null)),G=z.exports,K={data:function(){return{}},created:function(){0==this.$store.state.list.length&&this.$store.dispatch("getListData")},components:{"my-title":y,item:G},methods:{fn:function(t){console.log(t),this.$store.commit("removeList",t)},fn2:function(t){console.log(222),this.$store.commit("addCollect",t)}},computed:{list:function(){return this.$store.state.list}}},Q=K,V=(e("61a2"),Object(l["a"])(Q,H,J,!1,null,"5da66f96",null)),W=V.exports,X=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"collect"},[e("my-title",{attrs:{til:"收藏页"}}),t._l(t.data,function(n){return e("item",{key:n.bookId,attrs:{data:n,button_show:!1},on:{change:t.fn}})}),t._v("\n 收藏页\n")],2)},Y=[],Z={components:{"my-title":y,item:G},computed:{data:function(){return this.$store.state.collectList}},methods:{fn:function(t){this.$store.commit("removeCollect",t)}}},tt=Z,nt=(e("85a0"),Object(l["a"])(tt,X,Y,!1,null,"f5145544",null)),et=nt.exports,ot=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"add"},[e("my-title",{attrs:{til:"添加页"}}),e("myInput",{attrs:{text:"书的名字"},model:{value:t.name,callback:function(n){t.name=n},expression:"name"}}),e("myInput",{attrs:{text:"书的信息"},model:{value:t.info,callback:function(n){t.info=n},expression:"info"}}),e("myInput",{attrs:{text:"书的价格",type:"number"},model:{value:t.price,callback:function(n){t.price=n},expression:"price"}}),e("myInput",{attrs:{text:"书的封面"},model:{value:t.cover,callback:function(n){t.cover=n},expression:"cover"}}),e("button",{on:{click:t.add}},[t._v("添加")])],1)},it=[],rt=(e("7f7f"),function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"myInput"},[e("h3",[t._v(t._s(t.text))]),e("input",{attrs:{type:t.type||"text"},domProps:{value:t.value},on:{input:function(n){return t.$emit("input",n.target.value)}}})])}),at=[],ct={props:["value","text","type"]},st=ct,ut=(e("c398"),Object(l["a"])(st,rt,at,!1,null,"8044ad26",null)),lt=ut.exports,ft={data:function(){return{name:"",info:"",price:"",cover:""}},components:{"my-title":y,myInput:lt},methods:{add:function(){var t={bookCover:"https://img14.360buyimg.com/n1/s200x200_jfs/t3049/211/1135504925/129375/cc072102/57c6862aN329b23fd.jpg",bookId:Math.random(),bookInfo:this.info,bookName:this.name,bookPrice:this.price};this.$store.commit("addList",[t]),this.$router.push("/list")}}},dt=ft,pt=(e("d8f8"),Object(l["a"])(dt,ot,it,!1,null,"c196188e",null)),mt=pt.exports,vt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"content_box"},[e("router-view")],1),e("div",{staticClass:"footer_btn"},[e("router-link",{attrs:{to:"/home"}},[e("div",{staticClass:"iconfont icon-home"}),t._v("\n          首页\n    ")]),e("router-link",{attrs:{to:"/list"}},[e("div",{staticClass:"iconfont icon-list"}),t._v("\n         列表页\n    ")]),e("router-link",{attrs:{to:"/collect"}},[e("div",{staticClass:"iconfont icon-collect"}),t._v("\n         收藏页\n    ")]),e("router-link",{attrs:{to:"/add"}},[e("div",{staticClass:"iconfont icon-addstyle2"}),t._v("\n          添加\n    ")])],1)])},bt=[],ht={},_t=ht,gt=(e("e215"),Object(l["a"])(_t,vt,bt,!1,null,"6ee73a85",null)),kt=gt.exports;r["a"].use(p["a"]);var yt=[{path:"/",redirect:"/home",component:kt,children:[{path:"/home",component:D,meta:{til:"首页"}},{path:"/list",component:W,meta:{til:"列表页"}},{path:"/collect",component:et,meta:{til:"收藏页"}},{path:"/add",component:mt,meta:{til:"添加页"}}]},{path:"/login",component:function(){return e.e("chunk-2d0df805").then(e.bind(null,"89d2"))}},{path:"/about",name:"about",component:function(){return e.e("about").then(e.bind(null,"f820"))}},{path:"/*",redirect:"/home"}],Ct=new p["a"]({mode:"hash",linkActiveClass:"current",base:"/",routes:yt}),wt=e("2f62"),xt={count:0,collectList:[],list:[]},$t=xt,jt=e("75fc");function Ot(t,n){t.count+=n}function It(t,n){t.count-=n}function Lt(t,n){var e=t.collectList.some(function(t){return t.bookId==n.bookId});e||t.collectList.push(n)}function Et(t,n){t.collectList=t.collectList.filter(function(t){return t.bookId!==n.bookId})}function Pt(t,n){var e;(e=t.list).unshift.apply(e,Object(jt["a"])(n))}function St(t,n){t.list=t.list.filter(function(t){return t.bookId!=n.bookId})}var Mt=e("bc3a"),Tt=e.n(Mt);function Nt(t,n){t.commit;Tt.a.get("/bannerList").then(function(t){n(t.data)})}function At(t,n){t.commit;Tt.a.get("/hotbook").then(function(t){n&&n(t.data)})}function Bt(t,n){var e=t.commit;Tt.a.get("/listdata").then(function(t){e("addList",t.data)})}Tt.a.defaults.baseURL=" https://www.easy-mock.com/mock/5c6d1bcf63a457265eb11556",r["a"].use(wt["a"]);var Dt=new wt["a"].Store({state:$t,mutations:o,actions:i});e("35a1"),e("455b");r["a"].config.productionTip=!1,Ct.beforeEach(function(t,n,e){document.title=t.meta.til||"书城",e()}),new r["a"]({router:Ct,store:Dt,render:function(t){return t(d)}}).$mount("#app2")},"5b41":function(t,n,e){},"5b44":function(t,n,e){},"61a2":function(t,n,e){"use strict";var o=e("2e22"),i=e.n(o);i.a},8377:function(t,n,e){"use strict";var o=e("e60b"),i=e.n(o);i.a},"83c2":function(t,n,e){},8510:function(t,n,e){"use strict";var o=e("9924"),i=e.n(o);i.a},"85a0":function(t,n,e){"use strict";var o=e("83c2"),i=e.n(o);i.a},"867e":function(t,n,e){"use strict";var o=e("26fe"),i=e.n(o);i.a},9924:function(t,n,e){},b34c:function(t,n,e){},bdc6:function(t,n,e){"use strict";var o=e("5b44"),i=e.n(o);i.a},c398:function(t,n,e){"use strict";var o=e("b34c"),i=e.n(o);i.a},d8f8:function(t,n,e){"use strict";var o=e("0a80"),i=e.n(o);i.a},e215:function(t,n,e){"use strict";var o=e("5b41"),i=e.n(o);i.a},e60b:function(t,n,e){},ec89:function(t,n,e){},ff47:function(t,n,e){"use strict";var o=e("ec89"),i=e.n(o);i.a}});
//# sourceMappingURL=app.01d10a54.js.map