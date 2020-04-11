(window.webpackJsonp=window.webpackJsonp||[]).push([[94,6],{282:function(t,e,n){"use strict";n.r(e),n.d(e,"ion_toast",(function(){return w}));var o=n(33),r=n(74),d=(n(287),n(292)),c=(n(288),n(289)),l=n(286),h=n(293);const m=(t,e)=>{const n=Object(d.a)(),o=Object(d.a)(),r=t.host||t,c=t.querySelector(".toast-wrapper");switch(o.addElement(c),e){case"top":o.fromTo("transform","translateY(-100%)","translateY(calc(10px + var(--ion-safe-area-top, 0px)))");break;case"middle":const t=Math.floor(r.clientHeight/2-c.clientHeight/2);c.style.top=t+"px",o.fromTo("opacity",.01,1);break;default:o.fromTo("transform","translateY(100%)","translateY(calc(-10px - var(--ion-safe-area-bottom, 0px)))")}return n.addElement(r).easing("cubic-bezier(.155,1.105,.295,1.12)").duration(400).addAnimation(o)},f=(t,e)=>{const n=Object(d.a)(),o=Object(d.a)(),r=t.host||t,c=t.querySelector(".toast-wrapper");switch(o.addElement(c),e){case"top":o.fromTo("transform","translateY(calc(10px + var(--ion-safe-area-top, 0px)))","translateY(-100%)");break;case"middle":o.fromTo("opacity",.99,0);break;default:o.fromTo("transform","translateY(calc(-10px - var(--ion-safe-area-bottom, 0px)))","translateY(100%)")}return n.addElement(r).easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(o)},x=(t,e)=>{const n=Object(d.a)(),o=Object(d.a)(),r=t.host||t,c=t.querySelector(".toast-wrapper");switch(o.addElement(c),e){case"top":c.style.top="calc(8px + var(--ion-safe-area-top, 0px))",o.fromTo("opacity",.01,1);break;case"middle":const t=Math.floor(r.clientHeight/2-c.clientHeight/2);c.style.top=t+"px",o.fromTo("opacity",.01,1);break;default:c.style.bottom="calc(8px + var(--ion-safe-area-bottom, 0px))",o.fromTo("opacity",.01,1)}return n.addElement(r).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation(o)},v=t=>{const e=Object(d.a)(),n=Object(d.a)(),o=t.host||t,r=t.querySelector(".toast-wrapper");return n.addElement(r).fromTo("opacity",.99,0),e.addElement(o).easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(n)},w=class{constructor(t){Object(o.l)(this,t),this.presented=!1,this.duration=0,this.keyboardClose=!1,this.position="bottom",this.translucent=!1,this.animated=!0,this.dispatchCancelHandler=t=>{const e=t.detail.role;if(Object(c.j)(e)){const t=this.getButtons().find(b=>"cancel"===b.role);this.callButtonHandler(t)}},Object(c.e)(this.el),this.didPresent=Object(o.f)(this,"ionToastDidPresent",7),this.willPresent=Object(o.f)(this,"ionToastWillPresent",7),this.willDismiss=Object(o.f)(this,"ionToastWillDismiss",7),this.didDismiss=Object(o.f)(this,"ionToastDidDismiss",7)}async present(){await Object(c.f)(this,"toastEnter",m,x,this.position),this.duration>0&&(this.durationTimeout=setTimeout(()=>this.dismiss(void 0,"timeout"),this.duration))}dismiss(data,t){return this.durationTimeout&&clearTimeout(this.durationTimeout),Object(c.g)(this,data,t,"toastLeave",f,v,this.position)}onDidDismiss(){return Object(c.h)(this.el,"ionToastDidDismiss")}onWillDismiss(){return Object(c.h)(this.el,"ionToastWillDismiss")}getButtons(){return this.buttons?this.buttons.map(b=>"string"==typeof b?{text:b}:b):[]}async buttonClick(button){const t=button.role;return Object(c.j)(t)||await this.callButtonHandler(button)?this.dismiss(void 0,t):Promise.resolve()}async callButtonHandler(button){if(button&&button.handler)try{if(!1===await Object(c.l)(button.handler))return!1}catch(t){console.error(t)}return!0}renderButtons(t,e){if(0===t.length)return;const n=Object(r.b)(this),d={"toast-button-group":!0,["toast-button-group-"+e]:!0};return Object(o.j)("div",{class:d},t.map(b=>Object(o.j)("button",{type:"button",class:y(b),tabIndex:0,onClick:()=>this.buttonClick(b),part:"button"},Object(o.j)("div",{class:"toast-button-inner"},b.icon&&Object(o.j)("ion-icon",{icon:b.icon,slot:void 0===b.text?"icon-only":void 0,class:"toast-icon"}),b.text),"md"===n&&Object(o.j)("ion-ripple-effect",{type:void 0!==b.icon&&void 0===b.text?"unbounded":"bounded"}))))}render(){const t=this.getButtons(),e=t.filter(b=>"start"===b.side),n=t.filter(b=>"start"!==b.side),d=Object(r.b)(this),c={"toast-wrapper":!0,["toast-"+this.position]:!0};return Object(o.j)(o.b,{style:{zIndex:""+(6e4+this.overlayIndex)},class:Object.assign(Object.assign(Object.assign({[d]:!0},Object(l.a)(this.color)),Object(l.b)(this.cssClass)),{"toast-translucent":this.translucent}),onIonToastWillDismiss:this.dispatchCancelHandler},Object(o.j)("div",{class:c},Object(o.j)("div",{class:"toast-container",part:"container"},this.renderButtons(e,"start"),Object(o.j)("div",{class:"toast-content"},void 0!==this.header&&Object(o.j)("div",{class:"toast-header",part:"header"},this.header),void 0!==this.message&&Object(o.j)("div",{class:"toast-message",part:"message",innerHTML:Object(h.a)(this.message)})),this.renderButtons(n,"end"))))}get el(){return Object(o.g)(this)}},y=button=>Object.assign({"toast-button":!0,"toast-button-icon-only":void 0!==button.icon&&void 0===button.text,["toast-button-"+button.role]:void 0!==button.role,"ion-focusable":!0,"ion-activatable":!0},Object(l.b)(button.cssClass));w.style={ios:":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;left:0;top:0;display:block;position:absolute;width:100%;height:100%;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);left:var(--start);right:var(--end);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}[dir=rtl] .toast-wrapper,:host-context([dir=rtl]) .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}.toast-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:auto;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-message{-ms-flex:1;flex:1;white-space:pre-wrap}.toast-button-group{display:-ms-flexbox;display:flex}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-50, #f2f2f2);--border-radius:14px;--button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-color-step-850, #262626);--max-width:700px;--start:10px;--end:10px;font-size:14px}.toast-wrapper{margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;z-index:10}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.toast-translucent) .toast-wrapper{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.toast-wrapper.toast-top{-webkit-transform:translate3d(0,  -100%,  0);transform:translate3d(0,  -100%,  0);top:0}.toast-wrapper.toast-middle{opacity:0.01}.toast-wrapper.toast-bottom{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);bottom:0}.toast-content{padding-left:15px;padding-right:15px;padding-top:15px;padding-bottom:15px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-content{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-header{margin-bottom:2px;font-weight:500}.toast-button{padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px;height:44px;-webkit-transition:background-color, opacity 100ms linear;transition:background-color, opacity 100ms linear;border:0;background-color:transparent;font-family:var(--ion-font-family);font-size:17px;font-weight:500;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-button.ion-activated{opacity:0.4}@media (any-hover: hover){.toast-button:hover{opacity:0.6}}",md:":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;left:0;top:0;display:block;position:absolute;width:100%;height:100%;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);left:var(--start);right:var(--end);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}[dir=rtl] .toast-wrapper,:host-context([dir=rtl]) .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}.toast-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:auto;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-message{-ms-flex:1;flex:1;white-space:pre-wrap}.toast-button-group{display:-ms-flexbox;display:flex}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-800, #333333);--border-radius:4px;--box-shadow:0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);--button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-color-step-50, #f2f2f2);--max-width:700px;--start:8px;--end:8px;font-size:14px}.toast-wrapper{margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;opacity:0.01;z-index:10}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.toast-content{padding-left:16px;padding-right:16px;padding-top:14px;padding-bottom:14px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-content{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.toast-header{margin-bottom:2px;font-weight:500;line-height:20px}.toast-message{line-height:20px}.toast-button-group-start{margin-left:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button-group-start{margin-left:unset;-webkit-margin-start:8px;margin-inline-start:8px}}.toast-button-group-end{margin-right:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button-group-end{margin-right:unset;-webkit-margin-end:8px;margin-inline-end:8px}}.toast-button{padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px;position:relative;background-color:transparent;font-family:var(--ion-font-family);font-size:14px;font-weight:500;letter-spacing:0.84px;text-transform:uppercase;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-button-cancel{color:var(--ion-color-step-100, #e6e6e6)}.toast-button-icon-only{border-radius:50%;padding-left:9px;padding-right:9px;padding-top:9px;padding-bottom:9px;width:36px;height:36px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button-icon-only{padding-left:unset;padding-right:unset;-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px}}@media (any-hover: hover){.toast-button:hover{background-color:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.08)}.toast-button-cancel:hover{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.08)}}"}},286:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return l}));const o=(t,e)=>null!==e.closest(t),r=t=>"string"==typeof t&&t.length>0?{"ion-color":!0,["ion-color-"+t]:!0}:void 0,d=t=>{const map={};return(t=>{if(void 0!==t){return(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t)}return[]})(t).forEach(t=>map[t]=!0),map},c=/^[a-z][a-z0-9+\-.]*:/,l=async(t,e,n)=>{if(null!=t&&"#"!==t[0]&&!c.test(t)){const o=document.querySelector("ion-router");if(o)return null!=e&&e.preventDefault(),o.push(t,n)}return!1}},287:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return h})),n.d(e,"c",(function(){return l})),n.d(e,"d",(function(){return v})),n.d(e,"e",(function(){return w})),n.d(e,"f",(function(){return d})),n.d(e,"g",(function(){return r})),n.d(e,"h",(function(){return x})),n.d(e,"i",(function(){return m})),n.d(e,"j",(function(){return f})),n.d(e,"k",(function(){return o}));const o=t=>"function"==typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(t):"function"==typeof requestAnimationFrame?requestAnimationFrame(t):setTimeout(t),r=t=>!!t.shadowRoot&&!!t.attachShadow,d=t=>{const e=t.closest("ion-item");return e?e.querySelector("ion-label"):null},c=(t,e,n,o,d)=>{if(t||r(e)){let input=e.querySelector("input.aux-input");input||(input=e.ownerDocument.createElement("input"),input.type="hidden",input.classList.add("aux-input"),e.appendChild(input)),input.disabled=d,input.name=n,input.value=o||""}},l=(t,e,n)=>Math.max(t,Math.min(e,n)),h=(t,e)=>{if(!t){const t="ASSERT: "+e;throw console.error(t),new Error(t)}},m=t=>t.timeStamp||Date.now(),f=t=>{if(t){const e=t.changedTouches;if(e&&e.length>0){const t=e[0];return{x:t.clientX,y:t.clientY}}if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY}}return{x:0,y:0}},x=t=>{const e="rtl"===document.dir;switch(t){case"start":return e;case"end":return!e;default:throw new Error(`"${t}" is not a valid value for [side]. Use "start" or "end" instead.`)}},v=(t,e)=>{const n=t._original||t;return{_original:t,emit:w(n.emit.bind(n),e)}},w=(t,e=0)=>{let n;return(...o)=>{clearTimeout(n),n=setTimeout(t,e,...o)}}},288:function(t,e,n){"use strict";n.r(e),n.d(e,"MENU_BACK_BUTTON_PRIORITY",(function(){return c})),n.d(e,"OVERLAY_BACK_BUTTON_PRIORITY",(function(){return d})),n.d(e,"startHardwareBackButton",(function(){return o}));const o=()=>{const t=document;let e=!1;t.addEventListener("backbutton",()=>{if(e)return;const n=[],o=new CustomEvent("ionBackButton",{bubbles:!1,detail:{register(t,e){n.push({priority:t,handler:e})}}});if(t.dispatchEvent(o),n.length>0){let t,o=Number.MIN_SAFE_INTEGER;n.forEach(({priority:e,handler:n})=>{e>=o&&(o=e,t=n)}),e=!0,r(t).then(()=>e=!1)}})},r=async t=>{try{if(t){const e=t();null!=e&&await e}}catch(t){console.error(t)}},d=100,c=99},289:function(t,e,n){"use strict";n.d(e,"a",(function(){return S})),n.d(e,"b",(function(){return h})),n.d(e,"c",(function(){return m})),n.d(e,"d",(function(){return x})),n.d(e,"e",(function(){return v})),n.d(e,"f",(function(){return O})),n.d(e,"g",(function(){return T})),n.d(e,"h",(function(){return _})),n.d(e,"i",(function(){return c})),n.d(e,"j",(function(){return z})),n.d(e,"k",(function(){return f})),n.d(e,"l",(function(){return L}));var o=n(74),r=n(288);let d=0;const c=new WeakMap,l=t=>({create:e=>w(t,e),dismiss:(data,e,n)=>k(document,data,e,t,n),getTop:async()=>j(document,t)}),h=l("ion-alert"),m=l("ion-action-sheet"),f=l("ion-picker"),x=l("ion-popover"),v=t=>{const e=document;y(e);const n=d++;t.overlayIndex=n,t.hasAttribute("id")||(t.id="ion-overlay-"+n)},w=(t,e)=>customElements.whenDefined(t).then(()=>{const n=document,element=n.createElement(t);return element.classList.add("overlay-hidden"),Object.assign(element,e),E(n).appendChild(element),element.componentOnReady()}),y=t=>{0===d&&(d=1,t.addEventListener("focusin",e=>{const n=j(t);if(n&&n.backdropDismiss&&!B(n,e.target)){const t=n.querySelector("input,button");t&&t.focus()}}),t.addEventListener("ionBackButton",e=>{const n=j(t);n&&n.backdropDismiss&&e.detail.register(r.OVERLAY_BACK_BUTTON_PRIORITY,()=>n.dismiss(void 0,S))}),t.addEventListener("keyup",e=>{if("Escape"===e.key){const e=j(t);e&&e.backdropDismiss&&e.dismiss(void 0,S)}}))},k=(t,data,e,n,o)=>{const r=j(t,n,o);return r?r.dismiss(data,e):Promise.reject("overlay does not exist")},j=(t,e,n)=>{const o=((t,e)=>(void 0===e&&(e="ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker,ion-popover,ion-toast"),Array.from(t.querySelectorAll(e)).filter(t=>t.overlayIndex>0)))(t,e);return void 0===n?o[o.length-1]:o.find(t=>t.id===n)},O=async(t,e,n,r,d)=>{if(t.presented)return;t.presented=!0,t.willPresent.emit();const c=Object(o.b)(t),l=t.enterAnimation?t.enterAnimation:o.c.get(e,"ios"===c?n:r);await A(t,l,t.el,d)&&t.didPresent.emit()},T=async(t,data,e,n,r,d,l)=>{if(!t.presented)return!1;t.presented=!1;try{t.willDismiss.emit({data:data,role:e});const h=Object(o.b)(t),m=t.leaveAnimation?t.leaveAnimation:o.c.get(n,"ios"===h?r:d);"gesture"!==e&&await A(t,m,t.el,l),t.didDismiss.emit({data:data,role:e}),c.delete(t)}catch(t){console.error(t)}return t.el.remove(),!0},E=t=>t.querySelector("ion-app")||t.body,A=async(t,e,n,r)=>{n.classList.remove("overlay-hidden");const d=e(n.shadowRoot||t.el,r);t.animated&&o.c.getBoolean("animated",!0)||d.duration(0),t.keyboardClose&&d.beforeAddWrite(()=>{const t=n.ownerDocument.activeElement;t&&t.matches("input, ion-input, ion-textarea")&&t.blur()});const l=c.get(t)||[];return c.set(t,[...l,d]),await d.play(),!0},_=(element,t)=>{let e;const n=new Promise(t=>e=t);return D(element,t,t=>{e(t.detail)}),n},D=(element,t,e)=>{const n=o=>{element.removeEventListener(t,n),e(o)};element.addEventListener(t,n)},z=t=>"cancel"===t||t===S,B=(t,e)=>{for(;e;){if(e===t)return!0;e=e.parentElement}return!1},C=t=>t(),L=(t,e)=>{if("function"==typeof t){return o.c.get("_zoneGate",C)(()=>{try{return t(e)}catch(t){console.error(t)}})}},S="backdrop"},293:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));const o=t=>{try{if("string"!=typeof t||""===t)return t;const e=document.createDocumentFragment(),n=document.createElement("div");e.appendChild(n),n.innerHTML=t,l.forEach(t=>{const n=e.querySelectorAll(t);for(let t=n.length-1;t>=0;t--){const element=n[t];element.parentNode?element.parentNode.removeChild(element):e.removeChild(element);const o=d(element);for(let t=0;t<o.length;t++)r(o[t])}});const o=d(e);for(let t=0;t<o.length;t++)r(o[t]);const c=document.createElement("div");c.appendChild(e);const h=c.querySelector("div");return null!==h?h.innerHTML:c.innerHTML}catch(t){return console.error(t),""}},r=element=>{if(element.nodeType&&1!==element.nodeType)return;for(let i=element.attributes.length-1;i>=0;i--){const t=element.attributes.item(i),e=t.name;if(!c.includes(e.toLowerCase())){element.removeAttribute(e);continue}const n=t.value;null!=n&&n.toLowerCase().includes("javascript:")&&element.removeAttribute(e)}const t=d(element);for(let i=0;i<t.length;i++)r(t[i])},d=t=>null!=t.children?t.children:t.childNodes,c=["class","id","href","src","name","slot"],l=["script","style","iframe","meta","link","object","embed"]}}]);