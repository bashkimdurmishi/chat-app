(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{102:function(e,t,n){},103:function(e,t,n){},104:function(e,t,n){},105:function(e,t,n){},106:function(e,t,n){},107:function(e,t,n){"use strict";n.r(t);var s,c=n(0),a=n(49),i=n.n(a),r=n(22),o=n(2),j=n(12),u=(n(59),n(1)),l=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(""),i=Object(j.a)(a,2),o=i[0],l=i[1];return Object(u.jsx)("div",{className:"joinOuterContainer",children:Object(u.jsxs)("div",{className:"joinInnerContainer",children:[Object(u.jsx)("h1",{className:"heading",children:"Join"}),Object(u.jsx)("div",{children:Object(u.jsx)("input",{autoFocus:!0,placeholder:"Write Name",className:"joinInput",type:"text",onChange:function(e){return s(e.target.value)}})}),Object(u.jsx)("div",{children:Object(u.jsx)("input",{placeholder:"Write Room",className:"joinInput",type:"text",onChange:function(e){return l(e.target.value)}})}),Object(u.jsx)(r.b,{onClick:function(e){return n&&o?null:e.preventDefault()},to:"/chat?name=".concat(n,"&room=").concat(o),children:Object(u.jsx)("button",{className:"button mt-20",type:"submit",children:"Sign In"})})]})})},m=n(54),A=n(51),b=n.n(A),d=n(52),O=n.n(d),h=(n(102),function(e){var t=e.room;return Object(u.jsxs)("div",{className:"infoBar",children:[Object(u.jsxs)("div",{className:"leftInnerContainer",children:[Object(u.jsx)("img",{className:"onlineIcon",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAAXNSR0IArs4c6QAAAExJREFUCB1jbPh/le3lx5tNDIwMcQwg8J9hkTi/eh0LWJCBoRwoAAPlQDEGJrhKmDCIBupmQuYjs5lAZiILgNlAMRaQRSAz4UZCLQcAIwYaiAejKoYAAAAASUVORK5CYII=",alt:"online image"}),Object(u.jsx)("h3",{children:t})]}),Object(u.jsx)("div",{className:"rightInnerContainer",children:Object(u.jsx)("a",{href:"/",children:Object(u.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAHBJREFUGBmNkAEKwCAMA2VfGP2mrx3sOV2us6IymIXQGlNTW9zdhCqcZQm4dmelFUp+CZZa6sYpeUVIFyIixMqjCO51Wy5unQExuYSbSF5JASLqPsqRM21lOoWc89tagr3PSMgOiWlwnUeXWA/E78IfuAX270S3ydAAAAAASUVORK5CYII=",alt:"close image"})})})]})}),x=(n(103),function(e){var t=e.message,n=e.setMessage,s=e.sendMessage;return Object(u.jsxs)("form",{className:"form",id:"inputField",children:[Object(u.jsx)("input",{autoFocus:!0,className:"input",id:"inputField",type:"text",placeholder:"Write a message...",value:t,onChange:function(e){return n(e.target.value)},onKeyPress:function(e){return"Enter"===e.key?s(e):null}}),Object(u.jsx)("button",{className:"sendButton",onClick:function(e){return s(e)},children:"Send"})]})}),g=n(53),f=(n(104),function(e){var t=e.message,n=t.user,s=t.text,c=!1;return n===e.name.trim().toLowerCase()&&(c=!0),c?Object(u.jsxs)("div",{className:"messageContainer justifyEnd",children:[Object(u.jsx)("p",{className:"sentText",children:n}),Object(u.jsx)("div",{className:"messageBox backgroundBlue",children:Object(u.jsx)("p",{className:"messageText colorWhite",children:s})})]}):Object(u.jsxs)("div",{className:"messageContainer justifyStart",children:[Object(u.jsx)("div",{className:"messageBox backgroundLight",children:Object(u.jsx)("p",{className:"sentText colorDark",children:s})}),Object(u.jsx)("p",{className:"sentText",children:n})]})}),p=(n(105),function(e){var t=e.messages,n=e.name;return Object(u.jsx)(g.a,{children:t.map((function(e,t){return Object(u.jsx)("div",{children:Object(u.jsx)(f,{message:e,name:n})},t)}))})}),N=(n(106),function(e){var t=e.location,n=Object(c.useState)(""),a=Object(j.a)(n,2),i=a[0],r=a[1],o=Object(c.useState)(""),l=Object(j.a)(o,2),A=l[0],d=l[1],g=Object(c.useState)([]),f=Object(j.a)(g,2),N=f[0],v=f[1],C=Object(c.useState)(""),I=Object(j.a)(C,2),S=I[0],k=I[1],y="https://chat-app-bashkim-durmishi.herokuapp.com/";Object(c.useEffect)((function(){var e=b.a.parse(t.search),n=e.name,c=e.room;return s=O()(y,{transports:["websocket"]}),r(n),d(c),s.emit("join",{name:n,room:c}),function(){s.emit("disconnect"),s.off()}}),[y,t.search]),Object(c.useEffect)((function(){return s.on("message",(function(e){v([].concat(Object(m.a)(N),[e]))})),function(){s.off("message")}}),[N]);return Object(u.jsx)("div",{className:"outerContainer",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(h,{room:A}),Object(u.jsx)(p,{messages:N,name:i}),Object(u.jsx)(x,{message:S,setMessage:k,sendMessage:function(e){e.preventDefault(),S&&(s.emit("send-message",S),k([]))}})]})})}),v=function(){return Object(u.jsxs)(r.a,{children:[Object(u.jsx)(o.a,{path:"/",exact:!0,component:l}),Object(u.jsx)(o.a,{path:"/chat",component:N})]})};i.a.render(Object(u.jsx)(v,{}),document.querySelector("#root"))},59:function(e,t,n){}},[[107,1,2]]]);
//# sourceMappingURL=main.b5670005.chunk.js.map