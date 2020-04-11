(this.webpackJsonpdamjiro=this.webpackJsonpdamjiro||[]).push([[0],{45:function(e,t,n){e.exports=n(92)},50:function(e,t,n){},92:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),u=n(11),o=n.n(u),i=(n(50),n(5)),c=n(1),l=n.n(c),s=n(2),f=n(31),d=n(4),h=n(32),p=n(3),m=n(6),v=n(38),E=n(21),b=n.n(E),g=n(16),O=n(22),y=n.n(O),_=n(34),j=n(35),w=n.n(j),S=n(10),T=n.n(S),k=n(7),x=n.n(k),N=n(12),R=n(13),C=n(14),I=n(42),M=n(43),F=n(36),U=n(37);function A(e){var t=new T.a(e).getMidiEvents().filter((function(e){return e.subtype===x.a.EVENT_MIDI_NOTE_ON}));if(0===t.length)throw new Error("invalid midi file");return t[0]}var P=function(e){Object(M.a)(n,e);var t=Object(I.a)(n);function n(e,r){var a;return Object(N.a)(this,n),(a=t.call(this))._audioContext=e,a._pcm=r,a._playing=!1,a._currentTime=0,a._offset=0,a._epoch=null,a._onAudioProcess=a._onAudioProcess.bind(Object(C.a)(a)),a}return Object(R.a)(n,[{key:"play",value:function(){this._playing||(this._node=this._audioContext.createScriptProcessor(0,0,this._pcm.numChannels),this._node.connect(this._audioContext.destination),this._node.addEventListener("audioprocess",this._onAudioProcess),this._playing=!0,this.emit("start"))}},{key:"stop",value:function(){this._playing&&(this._node.disconnect(),this._node.removeEventListener("audioprocess",this._onAudioProcess),this._playing=!1,this._pcm=null,this.emit("end"))}},{key:"_onAudioProcess",value:function(e){for(var t=0,n=0;n<this._pcm.numChannels;n++){var r=e.outputBuffer.getChannelData(n);t=r.length;for(var a=0;a<t;a++){var u=(this._offset+a)*this._pcm.numChannels+n,o=u<this._pcm.data.length?this._pcm.data[u]/32767:0;r[a]=o}}this._offset+=t,this._epoch||(this._epoch=this._audioContext.currentTime),this._playing&&this._offset*this._pcm.numChannels>this._pcm.data.length&&this.stop()}},{key:"getCurrentTime",value:function(){return this._epoch?this._audioContext.currentTime-this._epoch:0}}]),n}(n.n(U).a);var B=function(e){var t=e.buffer,n=e.onReady,u=e.onPlay,o=e.onEnd,c=Object(r.useState)(null),f=Object(s.a)(c,2),h=f[0],p=f[1],m=Object(r.useState)(null),v=Object(s.a)(m,2),E=v[0],b=v[1],g=Object(r.useState)(!1),O=Object(s.a)(g,2),y=O[0],_=O[1],j=Object(r.useRef)(n),w=Object(r.useRef)(u),S=Object(r.useRef)(o);return Object(r.useEffect)((function(){var e=new AudioContext;return p(e),function(){e.close()}}),[]),Object(r.useEffect)((function(){function e(){return(e=Object(d.a)(l.a.mark((function e(){var n,r,a,u,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=new F.a(window.location.pathname,"\nsoundfont GeneralUserGSv1.471.sf2\n",{sampleRate:h.sampleRate,numChannels:2});case 1:if(n.isReady()){e.next=6;break}return e.next=4,new Promise((function(e){return setTimeout(e,1e3)}));case 4:e.next=1;break;case 6:return e.next=8,n.midi2wav(new Uint8Array(t));case 8:r=e.sent,a=A(t).playTime/1e3*r.sampleRate*r.numChannels,(u=Object(i.a)({},r,{data:new Int16Array(a+r.data.length)})).data.set(r.data,a),o=new P(h,u),j.current&&j.current({target:o}),o.on("start",(function(){w.current&&w.current(),_(!0)})),o.on("end",(function(){S.current&&S.current(),_(!1)})),b((function(e){return e&&e.stop(),o}));case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}h&&t&&function(){e.apply(this,arguments)}()}),[t,h]),j.current=n,w.current=u,S.current=o,a.a.createElement("div",null,E&&!y&&a.a.createElement("button",{type:"button",onClick:function(e){return E.play()}},"Play"))};var D=function(e){var t=e.onLoad;return a.a.createElement("input",{type:"file",accept:"audio/midi, audio/x-midi, audio/mid",onChange:function(e){try{var n=e.target.files[0];if(!["audio/midi","audio/x-midi","audio/mid"].includes(n.type))throw new Error("invalid mime type");var r=new FileReader;r.onload=function(e){return t(e.target.result)},r.readAsArrayBuffer(n)}catch(e){console.log(e)}}})};function G(){var e=Object(f.a)(["\n  width: 80vw;\n  height: 80vh;\n"]);return G=function(){return e},e}function V(e,t){return Math.floor(e/t)*t}function K(e,t){return function(n,r){for(var a=r-n;0!==a;){var u=Math.floor(a/2),o=n+u;t(e[o])?(a-=u+1,n=o+1):a=u}return n}(0,e.length)}function W(e,t,n){var r=new T.a(e);if(2===r.header.getFormat())throw new Error("Unsupported format of MIDI");if(0===r.header.getTracksCount())throw new Error("Not enough tracks");if(r.header.getTimeDivision()!==T.a.Header.TICKS_PER_BEAT)throw new Error("Unsupported time division");var a,u=[],o=[],i=r.getMidiEvents(),c=Object(h.a)(i);try{for(c.s();!(a=c.n()).done;){var l=a.value;if(l.channel===n)switch(l.subtype){case x.a.EVENT_MIDI_NOTE_ON:if(u.length!==o.length)break;u.push([1e3*l.playTime,l.param1]);break;case x.a.EVENT_MIDI_NOTE_OFF:if(u.length-o.length!==1||u[u.length-1][1]!==l.param1)break;o.push([1e3*l.playTime,l.param1])}}}catch(m){c.e(m)}finally{c.f()}if(u.length!==o.length)throw new Error("Invalid # of note offs");for(var s=[],f=0;f<u.length;f++){var d=u[f],p=o[f];s.push({tpos:d[0],duration:p[0]-d[0],pitch:d[1]})}return s}function J(e,t,n){var r={notes:e.map((function(e){return[Math.round(e.tpos),Math.round(e.duration),Math.round(e.pitch)]})),youtubeVideoId:t,timeOffset:n};return JSON.stringify(r)}function L(){return H.apply(this,arguments)}function H(){return(H=Object(d.a)(l.a.mark((function e(){var t,n,r,a,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new AudioContext,e.next=3,navigator.mediaDevices.getUserMedia({audio:!0,video:!1});case 3:return n=e.sent,e.next=6,new Promise((function(e){var r=w.a.pitchDetection("./model",t,n,(function(){e(r)}))}));case 6:return r=e.sent,a=function(){return new Promise((function(e,t){return r.getPitch((function(n,r){n&&t(n),r||e(null);var a=Math.round(Math.log(r/440)/Math.log(2)*12)+69;e(a)}))}))},u=function(){n.getTracks().forEach((function(e){return e.stop()})),t.close()},e.abrupt("return",[a,u]);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var q=v.a.svg(G());function Y(e){var t,n,r,u=e.curtpos,o=e.gNotes,i=e.uNotes,c=e.seconds,l=100*c,s=function(e){return 100*e/1e6},f=V(s(u),l),d=V(s(u),l)+l,h=function(e){return s(e)-f},p=function(e,t){return e.filter((function(e){return f<s(e.tpos+e.duration)&&s(e.tpos)<d})).reduce((function(e,t){if(0===e.length)return[t];var n,r,a=e[e.length-1];return a.pitch===t.pitch&&(n=a.tpos+a.duration,r=t.tpos,Math.abs(n-r)<1e-4)?(e[e.length-1]={tpos:a.tpos,duration:t.tpos+t.duration-a.tpos,pitch:a.pitch},e):e.concat(t)}),[]).map((function(e){return a.a.createElement(a.a.Fragment,{key:e.tpos},a.a.createElement("rect",{x:h(e.tpos),y:500-5*e.pitch,width:s(e.duration),height:5,rx:1,ry:1,fill:t,fillOpacity:.7}))}))};return a.a.createElement(a.a.Fragment,null,a.a.createElement("p",null,u),a.a.createElement(q,{viewBox:"0,0,"+l+",500",preserveAspectRatio:"none"},a.a.createElement("line",{x1:0,x2:l,y1:0,y2:0,strokeWidth:5,stroke:"gray"}),a.a.createElement("line",{x1:0,x2:l,y1:500,y2:500,strokeWidth:5,stroke:"gray"}),(t=0,n=l,r=100,Array.from({length:(n-t)/r+1},(function(e,n){return t+n*r}))).map((function(e){return a.a.createElement("line",{key:e,x1:e,x2:e,y1:0,y2:500,strokeWidth:1,stroke:"gray",fillOpacity:.7})})),a.a.createElement("line",{x1:h(u),x2:h(u),y1:0,y2:500,strokeWidth:1,stroke:"red"}),p(o,"gray"),p(i.filter((function(e){return e.correct})),"#FFA500"),p(i.filter((function(e){return!e.correct})),"red")))}function $(e){var t=e.dispatch,n=Object(r.useState)(""),u=Object(s.a)(n,2),o=u[0],i=u[1],c=Object(r.useState)(null),l=Object(s.a)(c,2),f=l[0],d=l[1];return a.a.createElement("div",null,a.a.createElement("textarea",{value:o,onChange:function(e){i(e.target.value);try{var n=JSON.parse(e.target.value),r=n.notes.map((function(e){return{tpos:e[0],duration:e[1],pitch:e[2]}})),a=n.youtubeVideoId,u=n.timeOffset;if(!("string"===typeof(o=a)||o instanceof String)||isNaN(u))throw new Error("Invalid JSON");t({type:"SET_GAKUFU",gakufu:{notes:r,videoId:a}}),t({type:"SET_USER_TIME_OFFSET",value:u}),d(null)}catch(e){t({type:"RESET_GAKUFU"}),d(e.message)}var o;t({type:"RESET_USER_NOTES"})}}),f)}function z(e){var t=e.timeOffset,n=e.dispatch;return a.a.createElement("div",null,a.a.createElement("input",{type:"number",value:Math.floor(t/1e3),onChange:function(e){return n({type:"SET_USER_TIME_OFFSET",value:1e3*Number(e.target.value)})},required:!0}),"ms")}function Q(e){var t=e.pitchOffset,n=e.dispatch;return a.a.createElement("div",null,a.a.createElement("input",{type:"number",value:Math.floor(t),onChange:function(e){return n({type:"SET_USER_PITCH_OFFSET",value:Number(e.target.value)})},required:!0}),"note#")}function X(e){var t=e.dispatch,n=e.gakufu,u=e.user,o=u.notes,i=u.timeOffset,c=u.pitchOffset,f=Object(r.useRef)(!1),h=Object(r.useRef)(i),p=Object(r.useRef)(c),m=Object(r.useState)(0),v=Object(s.a)(m,2),E=v[0],g=v[1],O=Object(r.useRef)(null),y=Object(r.useCallback)(Object(d.a)(l.a.mark((function e(){var r,a,u,o,i,c,d,m,v,E,b,y,_,j,w;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!f.current){e.next=2;break}return e.abrupt("return");case 2:return f.current=!0,r=setInterval((function(){return g(1e3*O.current.getCurrentTime()*1e3)}),25),e.next=6,L();case 6:a=e.sent,u=Object(s.a)(a,2),o=u[0],i=u[1],t({type:"RESET_USER_NOTES"}),d=(c=function(){return 1e6*O.current.getCurrentTime()-h.current})();case 13:if(!f.current){e.next=22;break}return e.next=16,o();case 16:m=e.sent,v=c(),m&&(E=v-d,b=m,y=!1,_=K(n.notes,(function(e){return e.tpos<d}))-1,(j=_>=0?n.notes[_]:n.notes[0])&&(b=j.pitch+p.current,(w=m-b-12*Math.floor((m-b)/12))>6&&(w-=12),b+=w,j.tpos<d&&d<j.tpos+j.duration&&0===w&&(y=!0)),t({type:"APPEND_USER_NOTE",note:{tpos:d,duration:E,pitch:b,correct:y}})),d=v,e.next=13;break;case 22:i(),clearInterval(r);case 24:case"end":return e.stop()}}),e)}))),[n.notes,t]);return h.current=i,p.current=c,a.a.createElement(a.a.Fragment,null,n.midiBuf&&a.a.createElement(B,{buffer:n.midiBuf,onReady:function(e){return O.current=e.target},onPlay:y,onEnd:function(){return f.current=!1}}),n.videoId&&a.a.createElement(b.a,{videoId:n.videoId,onReady:function(e){return O.current=e.target},onPlay:y,onPause:function(){return f.current=!1},onEnd:function(){return f.current=!1}}),n.notes&&a.a.createElement(Y,{curtpos:E,gNotes:n.notes,uNotes:o,seconds:30}))}function Z(e){var t=e.gNotes,n=e.uNotes;if(!t||!n)return a.a.createElement("div",null);var r=1.2*(100*(n.reduce((function(e,n){var r=t[K(t,(function(e){return e.tpos<n.tpos}))-1];if(!r||r.tpos+r.duration<n.tpos)return e;var a,u=Math.abs(n.pitch-r.pitch);return e+n.duration*(1-(a=u)/(1+Math.abs(a)))}),0)/t.reduce((function(e,t){return e+t.duration}),0))+0);return a.a.createElement("div",null,"Score: ",Math.round(100*r)/100)}function ee(){var e=Object(r.useState)(null),t=Object(s.a)(e,2),n=t[0],u=t[1],o=Object(r.useState)(0),i=Object(s.a)(o,2),c=i[0],l=i[1],f=Object(r.useState)(0),d=Object(s.a)(f,2),h=d[0],p=d[1],m=Object(r.useState)(0),v=Object(s.a)(m,2),E=v[0],g=v[1],O=Object(r.useState)(0),y=Object(s.a)(O,2),_=y[0],j=y[1],w=Object(r.useState)(null),S=Object(s.a)(w,2),T=S[0],k=S[1],x=Object(r.useState)(null),N=Object(s.a)(x,2),R=N[0],C=N[1],I=Object(r.useRef)(null),M=[],F=[];if(n)try{F=function(e,t,n){if(0===e.length)return e;var r=e[0].tpos;return e.map((function(e){return{tpos:e.tpos-r+t,duration:e.duration,pitch:e.pitch+n}}))}(M=W(n,0,h),1e6*E,_),I.current=null}catch(U){I.current=U.message}return Object(r.useEffect)((function(){if(0!==M.length){var e=M[0].tpos/1e6;g(e)}}),[n,c,h]),Object(r.useEffect)((function(){R&&R.seekTo(E,!0)}),[R,E]),a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement("input",{type:"file",accept:"audio/midi, audio/x-midi",onChange:function(e){u(null),l(0),p(0),g(0),j(0),k(null),C(null),I.current=null;try{var t=e.target.files[0];if("audio/midi"!==t.type&&"audio/x-midi"!==t.type)throw new Error("invalid mime type");var n=new FileReader;n.onload=function(e){return u(e.target.result)},n.readAsArrayBuffer(t)}catch(e){console.log(e)}}})),a.a.createElement("div",null,a.a.createElement("label",null,"Track No.:",a.a.createElement("input",{type:"number",onChange:function(e){return l(Number(e.target.value))},value:c})),a.a.createElement("label",null,"Channel No.:",a.a.createElement("input",{type:"number",onChange:function(e){return p(Number(e.target.value))},value:h}))),a.a.createElement("div",null,a.a.createElement("label",null,"YouTube video id:",a.a.createElement("input",{type:"text",onChange:function(e){return k(e.target.value)},value:T||""}))),a.a.createElement("div",null,a.a.createElement("label",null,"intro time (sec):",a.a.createElement("input",{type:"number",step:"any",onChange:function(e){return g(Number(e.target.value))},value:E})),a.a.createElement("label",null,"pitch offset (SMF note #):",a.a.createElement("input",{type:"number",onChange:function(e){return j(Number(e.target.value))},value:_}))),a.a.createElement("div",null,a.a.createElement("textarea",{value:n&&T?J(F,T,3e5):"",readOnly:!0})),a.a.createElement("p",null,I.current),n&&T?a.a.createElement(b.a,{videoId:T,onReady:function(e){var t=e.target;C(t),t.playVideo(),t.pauseVideo()}}):a.a.createElement("div",null),a.a.createElement(Y,{curtpos:0,gNotes:F,uNotes:[],seconds:60}))}$=Object(m.b)()($),z=Object(m.b)((function(e){return{timeOffset:e.user.timeOffset}}))(z),Q=Object(m.b)((function(e){return{pitchOffset:e.user.pitchOffset}}))(Q),X=Object(m.b)((function(e){return{gakufu:e.gakufu,user:e.user}}))(X),Z=Object(m.b)((function(e){return{gNotes:e.gakufu.notes,uNotes:e.user.notes}}))(Z);var te=Object(p.b)({gakufu:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{notes:null,videoId:null,midiBuf:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_GAKUFU":return t.gakufu;case"RESET_GAKUFU":return{notes:null,videoId:null};default:return e}},user:Object(g.a)({key:"user",storage:y.a,whitelist:["pitchOffset"]},(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{notes:[],timeOffset:3e5,pitchOffset:0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_TIME_OFFSET":return Object(i.a)({},e,{timeOffset:t.value});case"SET_USER_PITCH_OFFSET":return Object(i.a)({},e,{pitchOffset:t.value});case"RESET_USER_NOTES":return Object(i.a)({},e,{notes:[]});case"APPEND_USER_NOTE":return Object(i.a)({},e,{notes:e.notes.concat(t.note)});default:return e}}))}),ne=Object(g.a)({key:"root",storage:y.a,whitelist:["user"]},te),re=Object(p.c)(ne),ae=Object(g.b)(re);var ue=function(){return a.a.createElement(m.a,{store:re},a.a.createElement(_.a,{loading:null,persistor:ae},a.a.createElement($,null),a.a.createElement(D,{onLoad:function(e){re.dispatch({type:"SET_GAKUFU",gakufu:{notes:W(e,0,0),midiBuf:e,videoId:null}})}}),a.a.createElement(z,null),a.a.createElement(Q,null),a.a.createElement(Z,null),a.a.createElement(X,null),a.a.createElement("hr",null),a.a.createElement(ee,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(ue,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.79c2bda0.chunk.js.map