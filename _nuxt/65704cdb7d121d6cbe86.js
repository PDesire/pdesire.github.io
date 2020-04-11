(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{261:function(t,e,o){"use strict";o.r(e),o.d(e,"ion_reorder",(function(){return c})),o.d(e,"ion_reorder_group",(function(){return h}));var r=o(33),n=o(74),l=o(298);const c=class{constructor(t){Object(r.l)(this,t)}onClick(t){t.preventDefault(),t.stopImmediatePropagation()}render(){const t=Object(n.b)(this),e="ios"===t?"reorder-three-outline":"reorder-two-sharp";return Object(r.j)(r.b,{class:t},Object(r.j)("slot",null,Object(r.j)("ion-icon",{name:e,lazy:!1,class:"reorder-icon"})))}};c.style={ios:":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px}.reorder-icon{font-size:34px;opacity:0.4}",md:":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px}.reorder-icon{font-size:31px;opacity:0.3}"};const h=class{constructor(t){Object(r.l)(this,t),this.lastToIndex=-1,this.cachedHeights=[],this.scrollElTop=0,this.scrollElBottom=0,this.scrollElInitial=0,this.containerTop=0,this.containerBottom=0,this.state=0,this.disabled=!0,this.ionItemReorder=Object(r.f)(this,"ionItemReorder",7)}disabledChanged(){this.gesture&&this.gesture.enable(!this.disabled)}async connectedCallback(){const t=this.el.closest("ion-content");t&&(this.scrollEl=await t.getScrollElement()),this.gesture=(await o.e(1).then(o.bind(null,290))).createGesture({el:this.el,gestureName:"reorder",gesturePriority:110,threshold:0,direction:"y",passive:!1,canStart:t=>this.canStart(t),onStart:t=>this.onStart(t),onMove:t=>this.onMove(t),onEnd:()=>this.onEnd()}),this.disabledChanged()}disconnectedCallback(){this.onEnd(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}complete(t){return Promise.resolve(this.completeSync(t))}canStart(t){if(this.selectedItemEl||0!==this.state)return!1;const e=t.event.target.closest("ion-reorder");if(!e)return!1;const o=m(e,this.el);return!!o&&(t.data=o,!0)}onStart(t){t.event.preventDefault();const e=this.selectedItemEl=t.data,o=this.cachedHeights;o.length=0;const r=this.el,n=r.children;if(!n||0===n.length)return;let c=0;for(let i=0;i<n.length;i++){const t=n[i];c+=t.offsetHeight,o.push(c),t.$ionIndex=i}const h=r.getBoundingClientRect();if(this.containerTop=h.top,this.containerBottom=h.bottom,this.scrollEl){const t=this.scrollEl.getBoundingClientRect();this.scrollElInitial=this.scrollEl.scrollTop,this.scrollElTop=t.top+f,this.scrollElBottom=t.bottom-f}else this.scrollElInitial=0,this.scrollElTop=0,this.scrollElBottom=0;this.lastToIndex=d(e),this.selectedItemHeight=e.offsetHeight,this.state=1,e.classList.add(w),Object(l.a)()}onMove(t){const e=this.selectedItemEl;if(!e)return;const o=this.autoscroll(t.currentY),r=this.containerTop-o,n=this.containerBottom-o,c=Math.max(r,Math.min(t.currentY,n)),h=o+c-t.startY,m=c-r,f=this.itemIndexForTop(m);if(f!==this.lastToIndex){const t=d(e);this.lastToIndex=f,Object(l.b)(),this.reorderMove(t,f)}e.style.transform=`translateY(${h}px)`}onEnd(){const t=this.selectedItemEl;if(this.state=2,!t)return void(this.state=0);const e=this.lastToIndex,o=d(t);e===o?this.completeSync():this.ionItemReorder.emit({from:o,to:e,complete:this.completeSync.bind(this)}),Object(l.c)()}completeSync(t){const e=this.selectedItemEl;if(e&&2===this.state){const o=this.el.children,r=o.length,n=this.lastToIndex,l=d(e);if(n!==l&&(!t||!0===t)){const t=l<n?o[n+1]:o[n];this.el.insertBefore(e,t)}Array.isArray(t)&&(t=y(t,l,n));for(let i=0;i<r;i++)o[i].style.transform="";e.style.transition="",e.classList.remove(w),this.selectedItemEl=void 0,this.state=0}return t}itemIndexForTop(t){const e=this.cachedHeights;let i=0;for(i=0;i<e.length&&!(e[i]>t);i++);return i}reorderMove(t,e){const o=this.selectedItemHeight,r=this.el.children;for(let i=0;i<r.length;i++){const style=r[i].style;let n="";i>t&&i<=e?n=`translateY(${-o}px)`:i<t&&i>=e&&(n=`translateY(${o}px)`),style.transform=n}}autoscroll(t){if(!this.scrollEl)return 0;let e=0;return t<this.scrollElTop?e=-E:t>this.scrollElBottom&&(e=E),0!==e&&this.scrollEl.scrollBy(0,e),this.scrollEl.scrollTop-this.scrollElInitial}render(){const t=Object(n.b)(this);return Object(r.j)(r.b,{class:{[t]:!0,"reorder-enabled":!this.disabled,"reorder-list-active":0!==this.state}})}get el(){return Object(r.g)(this)}static get watchers(){return{disabled:["disabledChanged"]}}},d=element=>element.$ionIndex,m=(t,e)=>{let o;for(;t;){if(o=t.parentElement,o===e)return t;t=o}},f=60,E=10,w="reorder-selected",y=(t,e,o)=>{const element=t[e];return t.splice(e,1),t.splice(o,0,element),t.slice()};h.style=".reorder-list-active>*{-webkit-transition:-webkit-transform 300ms;transition:-webkit-transform 300ms;transition:transform 300ms;transition:transform 300ms, -webkit-transform 300ms;will-change:transform}.reorder-enabled{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.reorder-enabled ion-reorder{display:block;cursor:-webkit-grab;cursor:grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:-webkit-grabbing;cursor:grabbing}.reorder-selected{position:relative;-webkit-transition:none !important;transition:none !important;-webkit-box-shadow:0 0 10px rgba(0, 0, 0, 0.4);box-shadow:0 0 10px rgba(0, 0, 0, 0.4);opacity:0.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}"},298:function(t,e,o){"use strict";o.d(e,"a",(function(){return n})),o.d(e,"b",(function(){return l})),o.d(e,"c",(function(){return c})),o.d(e,"d",(function(){return r}));const r=()=>{const t=window.TapticEngine;t&&t.selection()},n=()=>{const t=window.TapticEngine;t&&t.gestureSelectionStart()},l=()=>{const t=window.TapticEngine;t&&t.gestureSelectionChanged()},c=()=>{const t=window.TapticEngine;t&&t.gestureSelectionEnd()}}}]);