(this["webpackJsonpserverless-chat-app"]=this["webpackJsonpserverless-chat-app"]||[]).push([[0],{47:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var s=n(0),o=n.n(s),a=n(22),c=n.n(a),r=(n(47),n(5)),i=n.n(r),u=n(9),d=n(23),p=n(24),l=n(42),m=n(41),b=(n(49),n(12)),h=n.n(b),g=n(6),f=n(39),v=n(40),k=n.n(v),w=n(4),j="hi4dwhkd84",O=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(e){var s;return Object(d.a)(this,n),(s=t.call(this,e)).closeWebSocket=function(){s.timer&&(clearInterval(s.timer),s.timer=null),s.websocket&&(s.websocket.close(),s.websocket=null)},s.connectToWebScoket=function(){var e="wss://".concat("1twejkp3k8",".execute-api.ap-northeast-2.amazonaws.com/dev?user_id=test&room_id=test");s.websocket=new WebSocket(e),s.websocket.onopen=function(){console.log("open"),s.timer=setInterval((function(){s.websocket.send(JSON.stringify({message:"ping"}))}),6e4)},s.websocket.onmessage=function(e){var t=JSON.parse(e.data);s.onMessageReceived(t)},s.websocket.onclose=function(e){console.log("onclose"),(s.timer||s.websocket)&&s.closeWebSocket()},s.websocket.onerror=function(e){console.error("WebSocket error observed:",e),(s.timer||s.websocket)&&s.closeWebSocket()}},s.componentDidMount=Object(u.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.state.data,e.next=3,h()({method:"GET",url:"https://".concat(j,".execute-api.ap-northeast-2.amazonaws.com/dev/chat"),params:{room_id:"test"}});case 3:n=e.sent,s.setState({data:t.set("messages",n.data).set("user_id",k()().valueOf())}),s.connectToWebScoket();case 7:case"end":return e.stop()}}),e)}))),s.onMessageReceived=function(){var e=Object(u.a)(i.a.mark((function e(t){var n,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t),t.timestamp&&(n=s.state.data,(o=n.get("messages")).push(t),console.log(o),s.setState({data:n.set("messages",o)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s.onSend=function(){var e=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.state.data,e.next=3,h()({method:"PUT",url:"https://".concat(j,".execute-api.ap-northeast-2.amazonaws.com/dev/chat"),data:{room_id:"test",text:t,user_id:n.get("user_id"),name:"name_test"}});case 3:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s.getMessageList=function(){var e=s.state.data,t=e.get("user_id"),n=[];return e.get("messages").forEach((function(e){n.push(Object(w.jsx)(g.c,{model:{message:e.message,sentTime:"just now",sender:"Joe",direction:t==e.user_id?"outgoing":"not"}},e.timestamp))})),n},s.state={data:Object(f.a)({messageList:[],messages:[]})},s.websocket=void 0,s.timer=void 0,s}return Object(p.a)(n,[{key:"render",value:function(){return Object(w.jsx)("div",{style:{position:"relative",height:"500px"},children:Object(w.jsx)(g.b,{children:Object(w.jsxs)(g.a,{children:[Object(w.jsx)(g.e,{children:this.getMessageList()}),Object(w.jsx)(g.d,{placeholder:"Type message here",onSend:this.onSend})]})})})}}]),n}(s.Component),x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,74)).then((function(t){var n=t.getCLS,s=t.getFID,o=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),s(e),o(e),a(e),c(e)}))};c.a.render(Object(w.jsx)(o.a.StrictMode,{children:Object(w.jsx)(O,{})}),document.getElementById("root")),x()}},[[73,1,2]]]);
//# sourceMappingURL=main.326d8c5f.chunk.js.map