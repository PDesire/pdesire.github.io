(window.webpackJsonp=window.webpackJsonp||[]).push([[20,1],{220:function(t,e,r){"use strict";r.r(e),r.d(e,"ion_backdrop",(function(){return d}));var o=r(33),n=r(74),c=r(287),l=r(290);const d=class{constructor(t){Object(o.l)(this,t),this.lastClick=-1e4,this.blocker=l.GESTURE_CONTROLLER.createBlocker({disableScroll:!0}),this.visible=!0,this.tappable=!0,this.stopPropagation=!0,this.ionBackdropTap=Object(o.f)(this,"ionBackdropTap",7)}connectedCallback(){this.stopPropagation&&this.blocker.block()}disconnectedCallback(){this.blocker.unblock()}onTouchStart(t){this.lastClick=Object(c.i)(t),this.emitTap(t)}onMouseDown(t){this.lastClick<Object(c.i)(t)-2500&&this.emitTap(t)}emitTap(t){this.stopPropagation&&(t.preventDefault(),t.stopPropagation()),this.tappable&&this.ionBackdropTap.emit()}render(){const t=Object(n.b)(this);return Object(o.j)(o.b,{tabindex:"-1",class:{[t]:!0,"backdrop-hide":!this.visible,"backdrop-no-tappable":!this.tappable}})}};d.style={ios:":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}",md:":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}"}},287:function(t,e,r){"use strict";r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return h})),r.d(e,"c",(function(){return d})),r.d(e,"d",(function(){return S})),r.d(e,"e",(function(){return y})),r.d(e,"f",(function(){return c})),r.d(e,"g",(function(){return n})),r.d(e,"h",(function(){return v})),r.d(e,"i",(function(){return m})),r.d(e,"j",(function(){return f})),r.d(e,"k",(function(){return o}));const o=t=>"function"==typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(t):"function"==typeof requestAnimationFrame?requestAnimationFrame(t):setTimeout(t),n=t=>!!t.shadowRoot&&!!t.attachShadow,c=t=>{const e=t.closest("ion-item");return e?e.querySelector("ion-label"):null},l=(t,e,r,o,c)=>{if(t||n(e)){let input=e.querySelector("input.aux-input");input||(input=e.ownerDocument.createElement("input"),input.type="hidden",input.classList.add("aux-input"),e.appendChild(input)),input.disabled=c,input.name=r,input.value=o||""}},d=(t,e,r)=>Math.max(t,Math.min(e,r)),h=(t,e)=>{if(!t){const t="ASSERT: "+e;throw console.error(t),new Error(t)}},m=t=>t.timeStamp||Date.now(),f=t=>{if(t){const e=t.changedTouches;if(e&&e.length>0){const t=e[0];return{x:t.clientX,y:t.clientY}}if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY}}return{x:0,y:0}},v=t=>{const e="rtl"===document.dir;switch(t){case"start":return e;case"end":return!e;default:throw new Error(`"${t}" is not a valid value for [side]. Use "start" or "end" instead.`)}},S=(t,e)=>{const r=t._original||t;return{_original:t,emit:y(r.emit.bind(r),e)}},y=(t,e=0)=>{let r;return(...o)=>{clearTimeout(r),r=setTimeout(t,e,...o)}}},290:function(t,e,r){"use strict";r.r(e),r.d(e,"GESTURE_CONTROLLER",(function(){return l})),r.d(e,"createGesture",(function(){return v}));class o{constructor(t,e,r,o,n){this.id=e,this.name=r,this.disableScroll=n,this.priority=1e6*o+e,this.ctrl=t}canStart(){return!!this.ctrl&&this.ctrl.canStart(this.name)}start(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)}capture(){if(!this.ctrl)return!1;const t=this.ctrl.capture(this.name,this.id,this.priority);return t&&this.disableScroll&&this.ctrl.disableScroll(this.id),t}release(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))}destroy(){this.release(),this.ctrl=void 0}}class n{constructor(t,e,r,o){this.id=e,this.disable=r,this.disableScroll=o,this.ctrl=t}block(){if(this.ctrl){if(this.disable)for(const t of this.disable)this.ctrl.disableGesture(t,this.id);this.disableScroll&&this.ctrl.disableScroll(this.id)}}unblock(){if(this.ctrl){if(this.disable)for(const t of this.disable)this.ctrl.enableGesture(t,this.id);this.disableScroll&&this.ctrl.enableScroll(this.id)}}destroy(){this.unblock(),this.ctrl=void 0}}const c="backdrop-no-scroll",l=new class{constructor(){this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set}createGesture(t){return new o(this,this.newID(),t.name,t.priority||0,!!t.disableScroll)}createBlocker(t={}){return new n(this,this.newID(),t.disable,!!t.disableScroll)}start(t,e,r){return this.canStart(t)?(this.requestedStart.set(e,r),!0):(this.requestedStart.delete(e),!1)}capture(t,e,r){if(!this.start(t,e,r))return!1;const o=this.requestedStart;let n=-1e4;if(o.forEach(t=>{n=Math.max(n,t)}),n===r){this.capturedId=e,o.clear();const r=new CustomEvent("ionGestureCaptured",{detail:{gestureName:t}});return document.dispatchEvent(r),!0}return o.delete(e),!1}release(t){this.requestedStart.delete(t),this.capturedId===t&&(this.capturedId=void 0)}disableGesture(t,e){let r=this.disabledGestures.get(t);void 0===r&&(r=new Set,this.disabledGestures.set(t,r)),r.add(e)}enableGesture(t,e){const r=this.disabledGestures.get(t);void 0!==r&&r.delete(e)}disableScroll(t){this.disabledScroll.add(t),1===this.disabledScroll.size&&document.body.classList.add(c)}enableScroll(t){this.disabledScroll.delete(t),0===this.disabledScroll.size&&document.body.classList.remove(c)}canStart(t){return void 0===this.capturedId&&!this.isDisabled(t)}isCaptured(){return void 0!==this.capturedId}isScrollDisabled(){return this.disabledScroll.size>0}isDisabled(t){const e=this.disabledGestures.get(t);return!!(e&&e.size>0)}newID(){return this.gestureId++,this.gestureId}},d=(t,e,r,o)=>{const n=h(t)?{capture:!!o.capture,passive:!!o.passive}:!!o.capture;let c,l;return t.__zone_symbol__addEventListener?(c="__zone_symbol__addEventListener",l="__zone_symbol__removeEventListener"):(c="addEventListener",l="removeEventListener"),t[c](e,r,n),()=>{t[l](e,r,n)}},h=t=>{if(void 0===m)try{const e=Object.defineProperty({},"passive",{get:()=>{m=!0}});t.addEventListener("optsTest",()=>{},e)}catch(t){m=!1}return!!m};let m;const f=t=>t instanceof Document?t:t.ownerDocument,v=t=>{let e=!1,r=!1,o=!0,n=!1;const c=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},t),h=c.canStart,m=c.onWillStart,v=c.onStart,w=c.onEnd,_=c.notCaptured,T=c.onMove,X=c.threshold,Y={type:"pan",startX:0,startY:0,startTime:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,currentTime:0,event:void 0,data:void 0},E=((t,e,r)=>{const o=r*(Math.PI/180),n="x"===t,c=Math.cos(o),l=e*e;let d=0,h=0,m=!1,f=0;return{start(t,e){d=t,h=e,f=0,m=!0},detect(t,e){if(!m)return!1;const r=t-d,o=e-h,v=r*r+o*o;if(v<l)return!1;const S=Math.sqrt(v),y=(n?r:o)/S;return f=y>c?1:y<-c?-1:0,m=!1,!0},isGesture:()=>0!==f,getDirection:()=>f}})(c.direction,c.threshold,c.maxAngle),G=l.createGesture({name:t.gestureName,priority:t.gesturePriority,disableScroll:t.disableScroll}),D=()=>{e&&(n=!1,T&&T(Y))},x=()=>!(G&&!G.capture())&&(e=!0,o=!1,Y.startX=Y.currentX,Y.startY=Y.currentY,Y.startTime=Y.currentTime,m?m(Y).then(L):L(),!0),L=()=>{v&&v(Y),o=!0},C=()=>{e=!1,r=!1,n=!1,o=!0,G.release()},I=t=>{const r=e,n=o;C(),n&&(S(Y,t),r?w&&w(Y):_&&_(Y))},O=((t,e,r,o,n)=>{let c,l,h,m,v,S,y,k=0;const w=o=>{k=Date.now()+2e3,e(o)&&(!l&&r&&(l=d(t,"touchmove",r,n)),h||(h=d(t,"touchend",T,n)),m||(m=d(t,"touchcancel",T,n)))},_=o=>{k>Date.now()||e(o)&&(!S&&r&&(S=d(f(t),"mousemove",r,n)),y||(y=d(f(t),"mouseup",X,n)))},T=t=>{Y(),o&&o(t)},X=t=>{E(),o&&o(t)},Y=()=>{l&&l(),h&&h(),m&&m(),l=h=m=void 0},E=()=>{S&&S(),y&&y(),S=y=void 0},G=()=>{Y(),E()},D=(e=!0)=>{e?(c||(c=d(t,"touchstart",w,n)),v||(v=d(t,"mousedown",_,n))):(c&&c(),v&&v(),c=v=void 0,G())};return{enable:D,stop:G,destroy:()=>{D(!1),o=r=e=void 0}}})(c.el,t=>{const e=k(t);return!(r||!o)&&(y(t,Y),Y.startX=Y.currentX,Y.startY=Y.currentY,Y.startTime=Y.currentTime=e,Y.velocityX=Y.velocityY=Y.deltaX=Y.deltaY=0,Y.event=t,(!h||!1!==h(Y))&&(G.release(),!!G.start()&&(r=!0,0===X?x():(E.start(Y.startX,Y.startY),!0))))},t=>{e?!n&&o&&(n=!0,S(Y,t),requestAnimationFrame(D)):(S(Y,t),E.detect(Y.currentX,Y.currentY)&&(E.isGesture()&&x()||z()))},I,{capture:!1}),z=()=>{C(),O.stop(),_&&_(Y)};return{enable(t=!0){t||(e&&I(void 0),C()),O.enable(t)},destroy(){G.destroy(),O.destroy()}}},S=(t,e)=>{if(!e)return;const r=t.currentX,o=t.currentY,n=t.currentTime;y(e,t);const c=t.currentX,l=t.currentY,d=(t.currentTime=k(e))-n;if(d>0&&d<100){const e=(c-r)/d,n=(l-o)/d;t.velocityX=.7*e+.3*t.velocityX,t.velocityY=.7*n+.3*t.velocityY}t.deltaX=c-t.startX,t.deltaY=l-t.startY,t.event=e},y=(t,e)=>{let r=0,o=0;if(t){const e=t.changedTouches;if(e&&e.length>0){const t=e[0];r=t.clientX,o=t.clientY}else void 0!==t.pageX&&(r=t.pageX,o=t.pageY)}e.currentX=r,e.currentY=o},k=t=>t.timeStamp||Date.now()}}]);