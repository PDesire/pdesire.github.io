(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{262:function(t,n,e){"use strict";e.r(n),e.d(n,"ion_ripple_effect",(function(){return c}));var o=e(33),r=e(74);const c=class{constructor(t){Object(o.l)(this,t),this.type="bounded"}async addRipple(t,n){return new Promise(e=>{Object(o.h)(()=>{const rect=this.el.getBoundingClientRect(),r=rect.width,c=rect.height,d=Math.sqrt(r*r+c*c),w=Math.max(c,r),h=this.unbounded?w:d+m,k=Math.floor(w*f),y=h/k;let v=t-rect.left,A=n-rect.top;this.unbounded&&(v=.5*r,A=.5*c);const O=v-.5*k,j=A-.5*k,x=.5*r-v,z=.5*c-A;Object(o.n)(()=>{const div=document.createElement("div");div.classList.add("ripple-effect");const style=div.style;style.top=j+"px",style.left=O+"px",style.width=style.height=k+"px",style.setProperty("--final-scale",""+y),style.setProperty("--translate-end",`${x}px, ${z}px`),(this.el.shadowRoot||this.el).appendChild(div),setTimeout(()=>{e(()=>{l(div)})},325)})})})}get unbounded(){return"unbounded"===this.type}render(){const t=Object(r.b)(this);return Object(o.j)(o.b,{role:"presentation",class:{[t]:!0,unbounded:this.unbounded}})}get el(){return Object(o.g)(this)}},l=t=>{t.classList.add("fade-out"),setTimeout(()=>{t.remove()},200)},m=10,f=.5;c.style=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;will-change:transform, opacity;pointer-events:none}.fade-out{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1));-webkit-animation:150ms fadeOutAnimation forwards;animation:150ms fadeOutAnimation forwards}@-webkit-keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@-webkit-keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@-webkit-keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}@keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}"}}]);