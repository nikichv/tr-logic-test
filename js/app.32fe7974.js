(function(e){function t(t){for(var r,a,c=t[0],s=t[1],u=t[2],l=0,p=[];l<c.length;l++)a=c[l],o[a]&&p.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(t);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function c(e){return s.p+"js/"+({"pages-basket":"pages-basket","pages-catalog":"pages-catalog"}[e]||e)+"."+{"pages-basket":"b1d1eac9","pages-catalog":"06e986ba"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"pages-basket":1,"pages-catalog":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var r="css/"+({"pages-basket":"pages-basket","pages-catalog":"pages-catalog"}[e]||e)+"."+{"pages-basket":"0b23b7bf","pages-catalog":"2ba6111d"}[e]+".css",o=s.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return t()}var p=document.getElementsByTagName("style");for(c=0;c<p.length;c++){u=p[c],l=u.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.request=r,delete a[e],f.parentNode.removeChild(f),n(i)},f.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(f)}).then(function(){a[e]=0}));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise(function(t,n){r=o[e]=[t,n]});t.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e),u=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");i.type=r,i.request=a,n[1](i)}o[e]=void 0}};var p=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/tr-logic-test/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("f499"),a=n.n(r),o=(n("cadf"),n("551c"),n("097d"),n("2b0e")),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("navbar"),n("router-view")],1)},c=[],s=n("cebc"),u=n("2f62"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"d-flex justify-content-end align-items-center py-3",attrs:{id:"nav"}},[n("router-link",{staticClass:"btn-link",attrs:{to:"/"}},[e._v("\n          Catalog\n        ")]),n("router-link",{staticClass:"btn btn-info ml-3",attrs:{to:"/cart"}},[e._v("\n          Cart "+e._s(e.itemsInCart||"")+"\n        ")])],1)])])])},p=[],f={name:"LayoutNavbar",computed:Object(s["a"])({},Object(u["c"])("cart",{itemsInCart:function(e){return e.items.length}}))},m=f,d=n("2877"),g=Object(d["a"])(m,l,p,!1,null,"2bad5733",null);g.options.__file="navbar.vue";var v=g.exports,b=v,h={name:"AppRoot",components:{navbar:b},methods:Object(s["a"])({},Object(u["b"])("cart",{setItems:"setItems"})),created:function(){var e=window.localStorage.getItem("cart")||"[]";this.setItems(JSON.parse(e))}},w=h,_=(n("5c0b"),Object(d["a"])(w,i,c,!1,null,null,null));_.options.__file="App.vue";var j=_.exports,y=n("8c4f"),O=function(){return n.e("pages-catalog").then(n.bind(null,"247d"))},k=function(){return n.e("pages-basket").then(n.bind(null,"b789"))};o["a"].use(y["a"]);var E,C=new y["a"]({mode:"hash",base:"/tr-logic-test/",routes:[{path:"/",name:"catalog",component:O},{path:"/cart",name:"cart",component:k}]}),A=n("bd86"),I=n("75fc"),S=(n("20d6"),{items:[]}),T="SET_ITEMS",x="ADD_ITEM",P="INCREASE_AMOUNT",N="REMOVE_ITEM",M="DECREASE_AMOUNT",R="CLEAR_CART",B={},L={setItems:function(e,t){var n=e.commit;n(T,t)},addItem:function(e,t){var n=e.commit;n(x,t)},increaseItemAmount:function(e,t){var n=e.commit,r=e.state,a=r.items.findIndex(function(e){return e===t});-1===a?n(x,t):n(P,a)},removeItem:function(e,t){var n=e.commit;n(N,t)},decreaseItemAmount:function(e,t){var n=e.commit,r=e.state,a=r.items.findIndex(function(e){return e===t});a>-1&&n(M,a)},clearCart:function(e){var t=e.commit;t(R)}},X=(E={},Object(A["a"])(E,T,function(e,t){e.items=Object(I["a"])(t)}),Object(A["a"])(E,x,function(e,t){o["a"].set(e.items,e.items.length,t)}),Object(A["a"])(E,P,function(e,t){e.items=[].concat(Object(I["a"])(e.items.slice(0,t)),Object(I["a"])(e.items[t]),Object(I["a"])(e.items.slice(t)))}),Object(A["a"])(E,N,function(e,t){e.items=e.items.filter(function(e){return e!==t})}),Object(A["a"])(E,M,function(e,t){o["a"].delete(e.items,t)}),Object(A["a"])(E,R,function(e){o["a"].set(e,"items",[])}),E),q={namespaced:!0,state:S,getters:B,actions:L,mutations:X},D=[{id:"0",name:"iPhone XS Max",image:"https://www.apple.com/v/iphone/compare/l/images/overview/compare_iphoneXSmax_spacegray_large.jpg",price:1099},{id:"1",name:"iPhone XR",image:"https://www.apple.com/v/iphone/compare/l/images/overview/compare_iphoneXR_blue_large.jpg",price:749},{id:"2",name:"iPhone 8",image:"https://www.apple.com/v/iphone/compare/l/images/overview/compare_iphone8_silver_large.jpg",price:599},{id:"3",name:"iPhone 7",image:"https://www.apple.com/v/iphone/compare/l/images/overview/compare_iphone7_black_large.jpg",price:449}],J={},$={},F={},U={namespaced:!0,state:D,getters:J,actions:$,mutations:F};o["a"].use(u["a"]);var V=new u["a"].Store({modules:{cart:q,products:U}}),z=n("9483");function G(e){return window.localStorage.setItem("cart",a()(e))}Object(z["a"])("".concat("/tr-logic-test/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),o["a"].config.productionTip=!1,V.subscribe(function(){G(V.state.cart.items)}),new o["a"]({router:C,store:V,render:function(e){return e(j)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("5e27"),a=n.n(r);a.a},"5e27":function(e,t,n){}});
//# sourceMappingURL=app.32fe7974.js.map