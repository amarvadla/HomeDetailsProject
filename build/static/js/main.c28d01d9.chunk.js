(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{192:function(e,t,a){},221:function(e,t,a){},258:function(e,t,a){},330:function(e,t,a){},344:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a(0),i=a(45),l=a.n(i),s=(a(192),a(43)),r=a(41),o=a(44),j=a(346),d=a(355),b=j.a.Header,m=j.a.Content,u=j.a.Footer;var h=Object(r.h)((function(e){return Object(n.jsx)("div",{children:Object(n.jsxs)(j.a,{className:"layout",children:[Object(n.jsxs)(b,{children:[Object(n.jsx)("div",{className:"logo"}),Object(n.jsxs)(d.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:[e.selectedKey],children:[Object(n.jsxs)(d.a.Item,{children:[Object(n.jsx)("span",{children:"Home"}),Object(n.jsx)(o.b,{to:"/home"})]},"home"),Object(n.jsxs)(d.a.Item,{children:[Object(n.jsx)("span",{children:"Details"}),Object(n.jsx)(o.b,{to:"/details"})]},"details"),Object(n.jsxs)(d.a.Item,{children:[Object(n.jsx)("span",{children:"Bills"}),Object(n.jsx)(o.b,{to:"/bills"})]},"bills"),Object(n.jsx)(d.a.Item,{style:{float:"right"},onClick:function(){localStorage.setItem("login","loggedout"),e.history.push("/login")},children:Object(n.jsx)("span",{children:"Logout"})},"logout")]})]}),Object(n.jsx)(m,{style:{padding:"0 50px",background:"#e6e6ff",minHeight:"100vh"},children:e.children}),Object(n.jsx)(u,{style:{textAlign:"center",background:"#000",color:"#fff"},children:Object(n.jsxs)("div",{style:{color:"#fff"},children:["Home Bills \xa92020 Created by Amarnath Vadla ",Object(n.jsx)("br",{})," All rights reserved"]})})]})})})),O=a(149);O.a.initializeApp({apiKey:"AIzaSyBMwC0osKzqUpq1Uh9RRt1e0PK45BBmptg",authDomain:"home-d374e.firebaseapp.com",databaseURL:"https://home-d374e.firebaseio.com",storageBucket:"home-d374e.appspot.com"});var p=O.a.database(),x=a(347),f=a(348),v=a(352),g=a(354),y=a(171),I=a(165),N=a.n(I);a(221);var w=Object(r.h)((function(e){var t=Object(c.useState)([]),a=Object(s.a)(t,2),i=a[0],l=a[1],r=Object(c.useState)(!0),o=Object(s.a)(r,2),j=o[0],d=o[1],b=Object(c.useState)(!1),m=Object(s.a)(b,2),u=m[0],O=m[1],I=Object(c.useState)(!0),w=Object(s.a)(I,2),P=w[0];w[1],Object(c.useEffect)((function(){p.ref("bills").once("value",(function(e){var t=[];e.forEach((function(e){p.ref("homedetails/"+e.val().id).on("value",(function(a){var n=a.val();t.push({key:e.key,data:e.val(),tenantName:n.name,roomName:n.roomName})}))})),t.reverse(),l(t),d(!1),console.log("useEffect")}))}),[j]);var C={height:"250px",color:"#fff",lineHeight:"160px",textAlign:"center",background:"#364d79"};return Object(n.jsx)("div",{children:Object(n.jsxs)(h,{selectedKey:"home",children:[Object(n.jsxs)(x.a,{style:{marginTop:"25px"},afterChange:function(e,t,a){console.log(e,t,a)},autoplay:!0,children:[Object(n.jsx)("div",{children:Object(n.jsx)("h1",{style:C,children:"Create Bills"})}),Object(n.jsx)("div",{children:Object(n.jsx)("h1",{style:C,children:"Generate Home Data"})}),Object(n.jsx)("div",{children:Object(n.jsx)("h1",{style:C,children:"Keep track of the bills"})}),Object(n.jsx)("div",{children:Object(n.jsx)("h1",{style:C,children:"Track the payments"})})]}),Object(n.jsx)(f.a,{orientation:"left",children:"Recent Track"}),Object(n.jsx)("div",{className:"demo-infinite-container",children:Object(n.jsx)(N.a,{initialLoad:!1,pageStart:0,loadMore:function(){O(!0)},hasMore:!u&&P,useWindow:!1,children:Object(n.jsx)(v.b,{dataSource:i,renderItem:function(e){return Object(n.jsxs)(v.b.Item,{children:[Object(n.jsx)(v.b.Item.Meta,{avatar:Object(n.jsx)(g.a,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}),title:Object(n.jsx)("a",{href:"https://ant.design",children:e.tenantName}),description:e.roomName}),Object(n.jsxs)("div",{children:[" ",Object(n.jsxs)("p",{children:["Created on : ",e.data.date]}),Object(n.jsxs)("p",{children:["Paid : ",e.data.paid.toString()]})]})]},e.key)},children:j&&P&&Object(n.jsx)("div",{className:"demo-loading-container",children:Object(n.jsx)(y.a,{})})})})})]})})})),P=a(357),C=a(130);var S=Object(r.h)((function(e){return Object(n.jsx)("div",{style:{marginTop:"80px"},children:Object(n.jsx)(P.a,{status:"404",title:"404",subTitle:"Sorry, the page you visited does not exist.",extra:Object(n.jsx)(C.a,{type:"primary",onClick:function(){e.history.push("/home")},children:"Visit Home"})})})})),F=a(59),k=a(350),B=a(353),R=a(356),q=(a(258),{labelCol:{span:8},wrapperCol:{span:16}}),D={wrapperCol:{offset:8,span:16}};var T=Object(r.h)((function(e){return Object(n.jsx)("div",{className:"form-div",children:Object(n.jsxs)(k.a,Object(F.a)(Object(F.a)({},q),{},{name:"basic",initialValues:{remember:!0},onFinish:function(t){console.log("Success:",t),localStorage.setItem("login","loggedin"),e.history.push("/home")},onFinishFailed:function(e){console.log("Failed:",e)},children:[Object(n.jsx)(k.a.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}],children:Object(n.jsx)(B.a,{})}),Object(n.jsx)(k.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}],children:Object(n.jsx)(B.a.Password,{})}),Object(n.jsx)(k.a.Item,Object(F.a)(Object(F.a)({},D),{},{name:"remember",valuePropName:"checked",children:Object(n.jsx)(R.a,{children:"Remember me"})})),Object(n.jsx)(k.a.Item,Object(F.a)(Object(F.a)({},D),{},{children:Object(n.jsx)(C.a,{type:"primary",htmlType:"submit",children:"Submit"})}))]}))})})),z=function(e){return"loggedin"===localStorage.getItem("login")?Object(n.jsx)(r.b,Object(F.a)({},e)):Object(n.jsx)(r.a,{to:"/login"})},E=function(e){return"loggedin"===localStorage.getItem("login")?Object(n.jsx)(r.a,{to:"/home"}):Object(n.jsx)(r.b,Object(F.a)({},e))},V=a(349),A=a(358),K=a(361);a(330);var H=Object(r.h)((function(){return Object(n.jsx)(h,{children:Object(n.jsx)("div",{className:"div-form",children:Object(n.jsxs)(k.a,{labelCol:{span:4},wrapperCol:{span:14},layout:"horizontal",initialValues:{remember:!0},onFinish:function(e){console.log("Success:",e)},onFinishFailed:function(e){console.log("Failed:",e)},size:"default",children:[Object(n.jsx)(k.a.Item,{label:"Name of the tenant",name:"tenantName",rules:[{required:!0,message:"Please input your name!"}],children:Object(n.jsx)(B.a,{})}),Object(n.jsx)(k.a.Item,{label:"Date submitted",name:"date",rules:[{required:!0,message:"Please input date!"}],children:Object(n.jsx)(V.a,{})}),Object(n.jsx)(k.a.Item,{label:"Rent bill",name:"rent",rules:[{required:!0,message:"Please input rent!"}],children:Object(n.jsx)(A.a,{})}),Object(n.jsx)(k.a.Item,{label:"Power bill",name:"power",children:Object(n.jsx)(A.a,{})}),Object(n.jsx)(k.a.Item,{label:"Water bill",name:"water",children:Object(n.jsx)(A.a,{})}),Object(n.jsx)(k.a.Item,{label:"Paid",name:"paid",children:Object(n.jsx)(K.a,{})}),Object(n.jsx)(k.a.Item,{label:"Button",children:Object(n.jsx)(C.a,{type:"primary",htmlType:"submit",children:"Submit"})})]})})})})),L=a(97),M=a(60),W=a(351),Y=a(360);var U=Object(r.h)((function(e){var t=Object(c.useState)([]),a=Object(s.a)(t,2),i=a[0],l=a[1],r=Object(c.useState)(!0),o=Object(s.a)(r,2),j=o[0],d=o[1];Object(c.useEffect)((function(){p.ref("homedetails").once("value",(function(e){var t=[];e.forEach((function(e){t.push({key:e.key,data:e.val()})})),l(t),d(!1)}))}),[j]);var b=Object(n.jsx)("div",{children:Object(n.jsx)(L.a,{gutter:[16,16],children:i.map((function(t){return Object(n.jsx)(M.a,{span:6,children:Object(n.jsx)("div",{className:"site-card-border-less-wrapper",children:Object(n.jsxs)(W.a,{hoverable:!0,title:t.data.roomName,onClick:function(){e.history.push("/edit/".concat(t.key))},bordered:!1,style:{width:300},children:[Object(n.jsxs)("p",{children:["Created on : ",t.data.createdDate]}),Object(n.jsxs)("p",{children:["Tenant Name : ",t.data.name]}),Object(n.jsxs)("p",{children:["Occupation : ",t.data.occupation]}),Object(n.jsxs)("p",{children:["Native place : ",t.data.nativePlace]}),Object(n.jsxs)("p",{children:["Tenant Id : ",t.key]})]})})})}))})});return Object(n.jsx)("div",{children:Object(n.jsxs)(h,{selectedKey:"details",children:[Object(n.jsx)(f.a,{orientation:"left",children:"Details"}),Object(n.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"50px"},children:Object(n.jsx)(C.a,{type:"primary",icon:Object(n.jsx)(Y.a,{}),onClick:function(){e.history.push("/addRoom")},children:"Add New Room"})}),i.length>0?Object(n.jsx)("div",{children:b}):Object(n.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"50px",height:"50%"},children:Object(n.jsx)(y.a,{tip:"Loading..."})})]})})})),J=a(109),X=a.n(J),G=a(148),Q=function(e){return new Promise(function(){var t=Object(G.a)(X.a.mark((function t(a,n){var c,i,l,s;return X.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e),c=new Date,i="".concat(c.getDate()," - ").concat(c.getMonth()+1," - ").concat(c.getFullYear()),l={name:e.inputName,roomName:e.inputRoomName,createdDate:i,occupation:e.inputOccupation,nativePlace:e.inputNativePlace,roomCode:e.inputRoomCode},t.next=6,p.ref("homedetails").push().set(l);case 6:s=t.sent,a(s),console.log(s);case 9:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}())};var Z=Object(r.h)((function(e){var t=Object(r.g)(),a=k.a.useForm(),i=Object(s.a)(a,1)[0],l=Object(c.useState)({}),o=Object(s.a)(l,2),j=o[0],d=o[1];return Object(c.useEffect)((function(){t.id&&p.ref("homedetails/"+t.id).on("value",(function(e){var t=e.val();d(t),i.setFieldsValue({inputName:j.name,inputRoomName:j.roomName,inputOccupation:j.occupation,inputNativePlace:j.nativePlace,inputRoomCode:j.roomCode})}))}),[i,j.name]),Object(n.jsx)(h,{children:Object(n.jsx)("div",{className:"div-form",children:Object(n.jsxs)(k.a,{form:i,labelCol:{span:4},wrapperCol:{span:14},layout:"horizontal",initialValues:{remember:!0,inputName:j?j.name:"",inputRoomName:j?j.roomName:"",inputOccupation:j?j.occupation:"",inputNativePlace:j?j.nativePlace:"",inputRoomCode:j?j.roomCode:"F"},onFinish:function(a){var n,c;t.id?(n=t.id,c=a,new Promise(function(){var e=Object(G.a)(X.a.mark((function e(t,a){var i,l,s,r;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=new Date,l="".concat(i.getDate()," - ").concat(i.getMonth()+1," - ").concat(i.getFullYear()),s={name:c.inputName,roomName:c.inputRoomName,createdDate:l,occupation:c.inputOccupation,nativePlace:c.inputNativePlace,roomCode:c.inputRoomCode},e.next=5,p.ref("homedetails/"+n).update(s);case 5:r=e.sent,t(r),console.log(r);case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}())):Q(a),e.history.push("/details")},onFinishFailed:function(e){console.log("Failed:",e)},size:"default",children:[Object(n.jsx)(k.a.Item,{label:"Name of the tenant",name:"name",children:Object(n.jsx)(k.a.Item,{name:"inputName",noStyle:!0,rules:[{required:!0,message:"Please input room name!"}],children:Object(n.jsx)(B.a,{})})}),Object(n.jsx)(k.a.Item,{label:"Name of the room",name:"roomName",children:Object(n.jsx)(k.a.Item,{name:"inputRoomName",noStyle:!0,rules:[{required:!0,message:"Please input room name!"}],children:Object(n.jsx)(B.a,{})})}),Object(n.jsx)(k.a.Item,{label:"occupation",name:"occupation",children:Object(n.jsx)(k.a.Item,{name:"inputOccupation",noStyle:!0,rules:[{required:!0,message:"Please input room name!"}],children:Object(n.jsx)(B.a,{})})}),Object(n.jsx)(k.a.Item,{label:"NativePlace of the tenant",name:"nativePlace",children:Object(n.jsx)(k.a.Item,{name:"inputNativePlace",noStyle:!0,rules:[{required:!0,message:"Please input tenant native place!"}],children:Object(n.jsx)(B.a,{})})}),Object(n.jsx)(k.a.Item,{label:"roomCode",name:"roomCode",children:Object(n.jsx)(k.a.Item,{name:"inputRoomCode",noStyle:!0,rules:[{required:!0,message:"Please input roomCode!"}],children:Object(n.jsx)(B.a,{})})}),Object(n.jsx)(k.a.Item,{label:"Button",children:Object(n.jsx)(C.a,{type:"primary",htmlType:"submit",children:"Submit"})})]})})})}));var $=Object(r.h)((function(e){return Object(n.jsx)(h,{children:Object(n.jsx)("div",{className:"div-form",children:Object(n.jsxs)(k.a,{labelCol:{span:4},wrapperCol:{span:14},layout:"horizontal",initialValues:{remember:!0},onFinish:function(t){Q(t),e.history.push("/details")},onFinishFailed:function(e){console.log("Failed:",e)},size:"default",children:[Object(n.jsx)(k.a.Item,{label:"Name of the tenant",name:"name",children:Object(n.jsx)(k.a.Item,{name:"inputName",noStyle:!0,rules:[{required:!0,message:"Please input room name!"}],children:Object(n.jsx)(B.a,{})})}),Object(n.jsx)(k.a.Item,{label:"Name of the room",name:"roomName",children:Object(n.jsx)(k.a.Item,{name:"inputRoomName",noStyle:!0,rules:[{required:!0,message:"Please input room name!"}],children:Object(n.jsx)(B.a,{})})}),Object(n.jsx)(k.a.Item,{label:"occupation",name:"occupation",children:Object(n.jsx)(k.a.Item,{name:"inputOccupation",noStyle:!0,rules:[{required:!0,message:"Please input room name!"}],children:Object(n.jsx)(B.a,{})})}),Object(n.jsx)(k.a.Item,{label:"NativePlace of the tenant",name:"nativePlace",children:Object(n.jsx)(k.a.Item,{name:"inputNativePlace",noStyle:!0,rules:[{required:!0,message:"Please input tenant native place!"}],children:Object(n.jsx)(B.a,{})})}),Object(n.jsx)(k.a.Item,{label:"roomCode",name:"roomCode",children:Object(n.jsx)(k.a.Item,{name:"inputRoomCode",noStyle:!0,rules:[{required:!0,message:"Please input roomCode!"}],children:Object(n.jsx)(B.a,{})})}),Object(n.jsx)(k.a.Item,{label:"Button",children:Object(n.jsx)(C.a,{type:"primary",htmlType:"submit",children:"Submit"})})]})})})})),_=a(359);var ee=Object(r.h)((function(e){var t=Object(c.useState)([]),a=Object(s.a)(t,2),i=a[0],l=a[1],r=Object(c.useState)(!0),o=Object(s.a)(r,2),j=o[0],d=o[1];Object(c.useEffect)((function(){p.ref("bills").once("value",(function(e){var t=[];e.forEach((function(e){p.ref("homedetails/"+e.val().id).on("value",(function(a){var n=a.val();t.push({key:e.key,data:e.val(),tenantName:n.name,roomName:n.roomName})}))})),l(t),d(!1),console.log(t)}))}),[j]);var b=Object(n.jsx)("div",{children:Object(n.jsx)(L.a,{gutter:[16,16],children:i&&i.map((function(t){return Object(n.jsx)(M.a,{span:6,children:Object(n.jsx)("div",{className:"site-card-border-less-wrapper",children:Object(n.jsxs)(W.a,{hoverable:!0,title:"Bill of: ".concat(t.roomName),onClick:function(){e.history.push("/editBill/".concat(t.key))},bordered:!1,style:{width:300},children:[Object(n.jsxs)("p",{children:["Created on : ",t.data.date]}),Object(n.jsxs)("p",{children:["Tenant Name : ",t.tenantName]}),Object(n.jsxs)("p",{children:["Rent : ",t.data.rent]}),Object(n.jsxs)("p",{children:["Power : ",t.data.power]}),Object(n.jsxs)("p",{children:["Water : ",t.data.water]}),Object(n.jsxs)("p",{children:["Paid : ",t.data.paid.toString()]}),Object(n.jsxs)("p",{children:["Tenant Id : ",t.data.id]}),Object(n.jsxs)("p",{children:["Bill Id : ",t.key]}),t.data.paid?Object(n.jsx)(_.a,{style:{float:"right"}}):Object(n.jsx)("div",{style:{height:"15px"}})]})})})}))})});return Object(n.jsx)("div",{children:Object(n.jsxs)(h,{selectedKey:"bills",children:[Object(n.jsx)(f.a,{orientation:"left",children:"Bills"}),Object(n.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"50px"},children:Object(n.jsx)(C.a,{type:"primary",icon:Object(n.jsx)(Y.a,{}),onClick:function(){e.history.push("/addBill")},children:"Add New Bill"})}),i&&i.length>0?Object(n.jsx)("div",{children:b}):Object(n.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"50px",height:"50%"},children:Object(n.jsx)(y.a,{tip:"Loading..."})})]})})})),te=a(108),ae=te.a.Option;var ne=Object(r.h)((function(e){var t=Object(c.useState)([]),a=Object(s.a)(t,2),i=a[0],l=a[1],r=k.a.useForm(),o=Object(s.a)(r,1)[0];return Object(c.useEffect)((function(){p.ref("homedetails").once("value",(function(e){var t=[];e.forEach((function(e){t.push({key:e.key,data:e.val()})})),l(t),console.log(i)}))}),[o]),Object(n.jsx)(h,{children:Object(n.jsx)("div",{className:"div-form",children:Object(n.jsxs)(k.a,{form:o,labelCol:{span:4},wrapperCol:{span:14},layout:"horizontal",initialValues:{remember:!0},onFinish:function(t){console.log("Success:",t);var a=new Date(t.date),n="".concat(a.getDate()," - ").concat(a.getMonth()+1," - ").concat(a.getFullYear()),c={id:t.tenantId,date:n,rent:t.rent,power:t.power,water:t.water,paid:t.paid};p.ref("bills").push().set(c);e.history.push("/bills")},onFinishFailed:function(e){console.log("Failed:",e)},size:"default",children:[Object(n.jsx)(k.a.Item,{label:"Name of the tenant",name:"tenantId",rules:[{required:!0,message:"Please input your name!"}],children:Object(n.jsx)(te.a,{placeholder:"Select a tenant",children:i.map((function(e){return Object(n.jsx)(ae,{value:e.key,children:e.data.name})}))})}),Object(n.jsx)(k.a.Item,{label:"Date submitted",name:"date",rules:[{required:!0,message:"Please input date!"}],children:Object(n.jsx)(V.a,{})}),Object(n.jsx)(k.a.Item,{label:"Rent bill",name:"rent",rules:[{required:!0,message:"Please input rent!"}],children:Object(n.jsx)(A.a,{})}),Object(n.jsx)(k.a.Item,{label:"Power bill",name:"power",children:Object(n.jsx)(A.a,{})}),Object(n.jsx)(k.a.Item,{label:"Water bill",name:"water",children:Object(n.jsx)(A.a,{})}),Object(n.jsx)(k.a.Item,{label:"Paid",name:"paid",initialValue:!1,children:Object(n.jsx)(K.a,{})}),Object(n.jsx)(k.a.Item,{label:"Button",children:Object(n.jsx)(C.a,{type:"primary",htmlType:"submit",children:"Submit"})})]})})})}));te.a.Option;var ce=Object(r.h)((function(e){var t=Object(r.g)(),a=Object(c.useState)([]),i=Object(s.a)(a,2),l=i[0],o=i[1],j=k.a.useForm(),d=Object(s.a)(j,1)[0];return Object(c.useEffect)((function(){window.scrollTo(0,0),t.id&&p.ref("bills/"+t.id).on("value",(function(e){var t=e.val();o(t),console.log(t),d.setFieldsValue({rent:l.rent,power:l.power,water:l.water,paid:l.paid})}))}),[d,l.rent]),Object(n.jsx)(h,{children:Object(n.jsx)("div",{className:"div-form",children:Object(n.jsxs)(k.a,{form:d,labelCol:{span:4},wrapperCol:{span:14},layout:"horizontal",initialValues:{remember:!0},onFinish:function(a){console.log("Success:",a);var n=new Date,c="".concat(n.getDate()," - ").concat(n.getMonth()+1," - ").concat(n.getFullYear()),i={id:l.id,date:c,rent:a.rent,power:a.power,water:a.water,paid:a.paid};p.ref("bills/"+t.id).update(i);e.history.push("/bills")},onFinishFailed:function(e){console.log("Failed:",e)},size:"default",children:[Object(n.jsx)(k.a.Item,{label:"Rent bill",name:"rent",rules:[{required:!0,message:"Please input rent!"}],children:Object(n.jsx)(A.a,{})}),Object(n.jsx)(k.a.Item,{label:"Power bill",name:"power",children:Object(n.jsx)(A.a,{})}),Object(n.jsx)(k.a.Item,{label:"Water bill",name:"water",children:Object(n.jsx)(A.a,{})}),Object(n.jsx)(k.a.Item,{label:"Paid",name:"paid",valuePropName:"checked",children:Object(n.jsx)(K.a,{})}),Object(n.jsx)(k.a.Item,{label:"Button",children:Object(n.jsx)(C.a,{type:"primary",htmlType:"submit",children:"Submit"})})]})})})}));var ie=function(){return Object(n.jsx)(o.a,{children:Object(n.jsxs)(r.d,{children:[Object(n.jsx)(E,{path:"/login",children:Object(n.jsx)(T,{})}),Object(n.jsx)(z,{path:"/home",children:Object(n.jsx)(w,{})}),Object(n.jsx)(z,{path:"/details",children:Object(n.jsx)(U,{})}),Object(n.jsx)(z,{path:"/view/:id",children:Object(n.jsx)(H,{})}),Object(n.jsx)(z,{path:"/edit/:id",children:Object(n.jsx)(Z,{})}),Object(n.jsx)(z,{path:"/editBill/:id",children:Object(n.jsx)(ce,{})}),Object(n.jsx)(z,{path:"/addRoom",children:Object(n.jsx)($,{})}),Object(n.jsx)(z,{path:"/bills",children:Object(n.jsx)(ee,{})}),Object(n.jsx)(z,{path:"/addBill",children:Object(n.jsx)(ne,{})}),Object(n.jsx)(z,{exact:!0,path:"/",children:Object(n.jsx)(w,{})}),Object(n.jsx)(z,{children:Object(n.jsx)(S,{})})]})})},le=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,362)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,l=t.getTTFB;a(e),n(e),c(e),i(e),l(e)}))};a(343);l.a.render(Object(n.jsx)(ie,{}),document.getElementById("root")),le()}},[[344,1,2]]]);
//# sourceMappingURL=main.c28d01d9.chunk.js.map