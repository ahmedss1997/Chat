(function(e){function t(t){for(var a,r,b=t[0],j=t[1],d=t[2],f=0,l=[];f<b.length;f++)r=b[f],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&l.push(n[r][0]),n[r]=0;for(a in j)Object.prototype.hasOwnProperty.call(j,a)&&(e[a]=j[a]);o&&o(t);while(l.length)l.shift()();return c.push.apply(c,d||[]),s()}function s(){for(var e,t=0;t<c.length;t++){for(var s=c[t],a=!0,b=1;b<s.length;b++){var j=s[b];0!==n[j]&&(a=!1)}a&&(c.splice(t--,1),e=r(r.s=s[0]))}return e}var a={},n={app:0},c=[];function r(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=a,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(s,a,function(t){return e[t]}.bind(null,a));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var b=window["webpackJsonp"]=window["webpackJsonp"]||[],j=b.push.bind(b);b.push=t,b=b.slice();for(var d=0;d<b.length;d++)t(b[d]);var o=j;c.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"0910":function(e,t,s){"use strict";s("0ad6")},"0ad6":function(e,t,s){},4678:function(e,t,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=c(e);return s(t)}function c(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=c,e.exports=n,n.id="4678"},"56d7":function(e,t,s){"use strict";s.r(t);var a=s("7a23");const n=Object(a["f"])("div",{id:"main"},null,-1);function c(e,t,s,c,r,b){const j=Object(a["w"])("router-view");return Object(a["p"])(),Object(a["e"])(a["a"],null,[n,Object(a["g"])(j)],64)}var r={name:"App",components:{}},b=s("6b0d"),j=s.n(b);const d=j()(r,[["render",c]]);var o=d,f=s("6c02");const l={class:"home"};function i(e,t,s,n,c,r){const b=Object(a["w"])("Welcome");return Object(a["p"])(),Object(a["e"])("div",l,[Object(a["g"])(b)])}const u=e=>(Object(a["s"])("data-v-c6b67710"),e=e(),Object(a["q"])(),e),m={class:"welcome container"},p={class:"card"},h={class:"card-content center-align"},O=u(()=>Object(a["f"])("h2",{class:"teal-text"},"Welcome",-1)),g=u(()=>Object(a["f"])("label",{for:"name"},"Enter Your Name: ",-1)),v={key:0,class:"red-text"},y=u(()=>Object(a["f"])("button",{class:"btn teal"},"Enter Chat",-1));function k(e,t,s,n,c,r){return Object(a["p"])(),Object(a["e"])("div",m,[Object(a["f"])("div",p,[Object(a["f"])("div",h,[O,Object(a["f"])("form",{onSubmit:t[1]||(t[1]=Object(a["D"])((function(){return r.enterChat&&r.enterChat(...arguments)}),["prevent"]))},[g,Object(a["C"])(Object(a["f"])("input",{type:"text",name:"name","onUpdate:modelValue":t[0]||(t[0]=e=>c.name=e)},null,512),[[a["A"],c.name]]),c.feedback?(Object(a["p"])(),Object(a["e"])("p",v,Object(a["y"])(c.feedback),1)):Object(a["d"])("",!0),y],32)])])])}var w={name:"Welcome",data(){return{name:null,feedback:null}},methods:{enterChat(){this.name?this.$router.push({name:"Chat",params:{name:this.name}}):this.feedback="You Must Write The Name"}}};s("0910");const z=j()(w,[["render",k],["__scopeId","data-v-c6b67710"]]);var M=z,x={name:"Home",components:{Welcome:M}};const C=j()(x,[["render",i]]);var _=C;const S=e=>(Object(a["s"])("data-v-f4b4070a"),e=e(),Object(a["q"])(),e),N={class:"chat container"},I=S(()=>Object(a["f"])("h2",{class:"center teal-text"}," Ninja Chat ",-1)),D={class:"card"},E={class:"card-content"},P={class:"messages"},T={class:"teal-text"},W={class:"grey-text text-darken-3"},q={class:"grey-text time"},A={class:"card-action"};function H(e,t,s,n,c,r){const b=Object(a["w"])("NewMessage");return Object(a["p"])(),Object(a["e"])("div",N,[I,Object(a["f"])("div",D,[Object(a["f"])("div",E,[Object(a["f"])("ul",P,[(Object(a["p"])(!0),Object(a["e"])(a["a"],null,Object(a["v"])(c.messages,e=>(Object(a["p"])(),Object(a["e"])("li",{key:e.id},[Object(a["f"])("span",T,Object(a["y"])(e.name),1),Object(a["f"])("span",W,Object(a["y"])(e.content),1),Object(a["f"])("span",q,Object(a["y"])(e.timestamp),1)]))),128))])]),Object(a["f"])("div",A,[Object(a["g"])(b,{name:s.name},null,8,["name"])])])])}const U={class:"new-message"},V=Object(a["f"])("label",{for:"new-message"},"New Message (enter to add): ",-1),Y={key:0,class:"red-text"};function B(e,t,s,n,c,r){return Object(a["p"])(),Object(a["e"])("div",U,[Object(a["f"])("form",{onSubmit:t[1]||(t[1]=Object(a["D"])((function(){return r.addMessage&&r.addMessage(...arguments)}),["prevent"]))},[V,Object(a["C"])(Object(a["f"])("input",{type:"text",name:"new-message","onUpdate:modelValue":t[0]||(t[0]=e=>c.newMessage=e)},null,512),[[a["A"],c.newMessage]]),c.feedback?(Object(a["p"])(),Object(a["e"])("p",Y,Object(a["y"])(c.feedback),1)):Object(a["d"])("",!0)],32)])}var G=s("4f60");s("256a"),s("1862");const J={apiKey:"AIzaSyB91l-hqfVG0dgnlfND2WaTCRMb1lMn-hw",authDomain:"chat-bbf82.firebaseapp.com",projectId:"chat-bbf82",storageBucket:"chat-bbf82.appspot.com",messagingSenderId:"977695447617",appId:"1:977695447617:web:472fda95231b7dccc004c0",measurementId:"G-C1KHH59YVG"},K=G["a"].initializeApp(J);var F=K.firestore(),L={name:"NewMess.lage",props:["name"],data(){return{newMessage:null,feedback:null}},methods:{addMessage(){this.newMessage?(F.collection("messages").add({content:this.newMessage,name:this.name,timestamp:Date.now()}).catch(e=>{console.log(e)}),this.feedback=null,this.newMessage=null):this.feedback="You Must Enter a Message In Order To Send One"}}};const R=j()(L,[["render",B]]);var $=R,Q=s("c1df"),X=s.n(Q),Z={name:"Chat",props:["name"],components:{NewMessage:$},data(){return{messages:[]}},created(){let e=F.collection("messages").orderBy("timestamp");e.onSnapshot(e=>{e.docChanges().forEach(e=>{if("added"==e.type){let t=e.doc;this.messages.push({id:t.id,name:t.data().name,content:t.data().content,timestamp:X()(t.data().timestamp).format("lll")})}})})}};s("fb54");const ee=j()(Z,[["render",H],["__scopeId","data-v-f4b4070a"]]);var te=ee;const se=[{path:"/",name:"Home",component:_},{path:"/chat",name:"Chat",component:te,props:!0,beforeEnter:(e,t,s)=>{e.params.name?s():s({name:"Home"})}}],ae=Object(f["a"])({history:Object(f["b"])("/"),routes:se});var ne=ae,ce=s("5502"),re=Object(ce["a"])({state:{},mutations:{},actions:{},modules:{}});s("4d5c"),s("8266"),s("619b");Object(a["c"])(o).use(re).use(ne).mount("#app")},"6d07":function(e,t,s){},fb54:function(e,t,s){"use strict";s("6d07")}});
//# sourceMappingURL=app.1f717d2c.js.map