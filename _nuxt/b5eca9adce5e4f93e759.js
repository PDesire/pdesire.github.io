(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{222:function(o,t,n){"use strict";n.r(t),n.d(t,"ion_button",(function(){return h})),n.d(t,"ion_icon",(function(){return w}));var r=n(33),e=n(74),c=n(299),l=n(287),d=n(286);const h=class{constructor(o){Object(r.l)(this,o),this.inItem=!1,this.inListHeader=!1,this.inToolbar=!1,this.buttonType="button",this.disabled=!1,this.routerDirection="forward",this.strong=!1,this.type="button",this.handleClick=o=>{if("button"===this.type)Object(d.d)(this.href,o,this.routerDirection);else if(Object(l.g)(this.el)){const form=this.el.closest("form");if(form){o.preventDefault();const t=document.createElement("button");t.type=this.type,t.style.display="none",form.appendChild(t),t.click(),t.remove()}}},this.onFocus=()=>{this.ionFocus.emit()},this.onBlur=()=>{this.ionBlur.emit()},this.ionFocus=Object(r.f)(this,"ionFocus",7),this.ionBlur=Object(r.f)(this,"ionBlur",7)}componentWillLoad(){this.inToolbar=!!this.el.closest("ion-buttons"),this.inListHeader=!!this.el.closest("ion-list-header"),this.inItem=!!this.el.closest("ion-item")||!!this.el.closest("ion-item-divider")}get hasIconOnly(){return!!this.el.querySelector('ion-icon[slot="icon-only"]')}get rippleType(){return(void 0===this.fill||"clear"===this.fill)&&this.hasIconOnly&&this.inToolbar?"unbounded":"bounded"}render(){const o=Object(e.b)(this),{buttonType:t,type:n,disabled:c,rel:l,target:h,size:f,href:m,color:v,expand:k,hasIconOnly:w,shape:y,strong:strong}=this,x=void 0===f&&this.inItem?"small":f,j=void 0===m?"button":"a",z="button"===j?{type:n}:{download:this.download,href:m,rel:l,target:h};let O=this.fill;return void 0===O&&(O=this.inToolbar||this.inListHeader?"clear":"solid"),Object(r.j)(r.b,{onClick:this.handleClick,"aria-disabled":c?"true":null,class:Object.assign(Object.assign({},Object(d.a)(v)),{[o]:!0,[t]:!0,[`${t}-${k}`]:void 0!==k,[`${t}-${x}`]:void 0!==x,[`${t}-${y}`]:void 0!==y,[`${t}-${O}`]:!0,[t+"-strong"]:strong,"in-toolbar":Object(d.c)("ion-toolbar",this.el),"in-toolbar-color":Object(d.c)("ion-toolbar[color]",this.el),"button-has-icon-only":w,"button-disabled":c,"ion-activatable":!0,"ion-focusable":!0})},Object(r.j)(j,Object.assign({},z,{class:"button-native",disabled:c,onFocus:this.onFocus,onBlur:this.onBlur,part:"button"}),Object(r.j)("span",{class:"button-inner",part:"button-inner"},Object(r.j)("slot",{name:"icon-only"}),Object(r.j)("slot",{name:"start"}),Object(r.j)("slot",null),Object(r.j)("slot",{name:"end"})),"md"===o&&Object(r.j)("ion-ripple-effect",{type:this.rippleType})))}get el(){return Object(r.g)(this)}};h.style={ios:':host{--overflow:hidden;--ripple-color:currentColor;--border-width:initial;--border-color:initial;--border-style:initial;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--box-shadow:none;display:inline-block;width:auto;color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;pointer-events:auto;-webkit-font-kerning:none;font-kerning:none}:host(.button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.button-solid){--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff)}:host(.button-outline){--border-color:var(--ion-color-primary, #3880ff);--background:transparent;--color:var(--ion-color-primary, #3880ff)}:host(.button-clear){--border-width:0;--background:transparent;--color:var(--ion-color-primary, #3880ff)}:host(.button-block){display:block}:host(.button-block) .button-native{margin-left:0;margin-right:0;display:block;width:100%;clear:both;contain:content}:host(.button-block) .button-native::after{clear:both}:host(.button-full){display:block}:host(.button-full) .button-native{margin-left:0;margin-right:0;display:block;width:100%;contain:content}:host(.button-full:not(.button-round)) .button-native{border-radius:0;border-right-width:0;border-left-width:0}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);line-height:1;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:layout style;cursor:pointer;opacity:var(--opacity);overflow:var(--overflow);z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-native::-moz-focus-inner{border:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}::slotted(ion-icon){font-size:1.4em;pointer-events:none}::slotted(ion-icon[slot=start]){margin-left:-0.3em;margin-right:0.3em;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:-0.3em;margin-inline-start:-0.3em;-webkit-margin-end:0.3em;margin-inline-end:0.3em}}::slotted(ion-icon[slot=end]){margin-left:0.3em;margin-right:-0.2em;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:0.3em;margin-inline-start:0.3em;-webkit-margin-end:-0.2em;margin-inline-end:-0.2em}}::slotted(ion-icon[slot=icon-only]){font-size:1.8em}ion-ripple-effect{color:var(--ripple-color)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}:host(.ion-activated){color:var(--color-activated)}:host(.ion-activated) .button-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){:host(:hover){color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.button-solid.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.button-outline.ion-color) .button-native{border-color:var(--ion-color-base);background:transparent;color:var(--ion-color-base)}:host(.button-clear.ion-color) .button-native{background:transparent;color:var(--ion-color-base)}:host(.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{color:var(--ion-toolbar-color, var(--color))}:host(.button-outline.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{border-color:var(--ion-toolbar-color, var(--color, var(--border-color)))}:host(.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-color, var(--background));color:var(--ion-toolbar-background, var(--color))}:host{--border-radius:10px;--padding-top:0;--padding-bottom:0;--padding-start:1em;--padding-end:1em;--transition:background-color, opacity 100ms linear;margin-left:2px;margin-right:2px;margin-top:4px;margin-bottom:4px;height:2.8em;font-size:16px;font-weight:500;letter-spacing:-0.03em}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}:host(.button-solid){--background-activated:var(--ion-color-primary-shade, #3171e0);--background-focused:var(--ion-color-primary-shade, #3171e0);--background-hover:var(--ion-color-primary-tint, #4c8dff);--background-activated-opacity:1;--background-focused-opacity:1;--background-hover-opacity:1}:host(.button-outline){--border-radius:10px;--border-width:1px;--border-style:solid;--background-activated:var(--ion-color-primary, #3880ff);--background-focused:var(--ion-color-primary, #3880ff);--background-hover:transparent;--background-focused-opacity:.1;--color-activated:var(--ion-color-primary-contrast, #fff)}:host(.button-clear){--background-activated:transparent;--background-focused:var(--ion-color-primary, #3880ff);--background-hover:transparent;--background-focused-opacity:.1;font-size:17px;font-weight:normal;letter-spacing:0}:host(.button-large){--border-radius:12px;--padding-top:0;--padding-start:1em;--padding-end:1em;--padding-bottom:0;height:2.8em;font-size:20px}:host(.button-small){--border-radius:6px;--padding-top:0;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:0;height:2.1em;font-size:13px}:host(.button-round){--border-radius:64px;--padding-top:0;--padding-start:26px;--padding-end:26px;--padding-bottom:0}:host(.button-strong){font-weight:600}:host(.button-clear.ion-activated){opacity:0.4}:host(.button-outline.ion-activated.ion-color) .button-native{color:var(--ion-color-contrast)}:host(.button-outline.ion-activated.ion-color) .button-native::after{background:var(--ion-color-base)}:host(.button-solid.ion-color.ion-activated) .button-native::after{background:var(--ion-color-shade)}:host(.button-outline.ion-focused.ion-color) .button-native,:host(.button-clear.ion-focused.ion-color) .button-native{color:var(--ion-color-base)}:host(.button-outline.ion-focused.ion-color) .button-native::after,:host(.button-clear.ion-focused.ion-color) .button-native::after{background:var(--ion-color-base)}:host(.button-solid.ion-color.ion-focused) .button-native::after{background:var(--ion-color-shade)}@media (any-hover: hover){:host(.button-clear:hover),:host(.button-outline:hover){opacity:0.6}:host(.button-clear.ion-color:hover) .button-native,:host(.button-outline.ion-color:hover) .button-native{color:var(--ion-color-base)}:host(.button-clear.ion-color:hover) .button-native::after,:host(.button-outline.ion-color:hover) .button-native::after{background:transparent}:host(.button-solid.ion-color:hover) .button-native::after{background:var(--ion-color-tint)}:host(:hover.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native::after{background:#fff;opacity:0.1}}',md:':host{--overflow:hidden;--ripple-color:currentColor;--border-width:initial;--border-color:initial;--border-style:initial;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--box-shadow:none;display:inline-block;width:auto;color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;pointer-events:auto;-webkit-font-kerning:none;font-kerning:none}:host(.button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.button-solid){--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff)}:host(.button-outline){--border-color:var(--ion-color-primary, #3880ff);--background:transparent;--color:var(--ion-color-primary, #3880ff)}:host(.button-clear){--border-width:0;--background:transparent;--color:var(--ion-color-primary, #3880ff)}:host(.button-block){display:block}:host(.button-block) .button-native{margin-left:0;margin-right:0;display:block;width:100%;clear:both;contain:content}:host(.button-block) .button-native::after{clear:both}:host(.button-full){display:block}:host(.button-full) .button-native{margin-left:0;margin-right:0;display:block;width:100%;contain:content}:host(.button-full:not(.button-round)) .button-native{border-radius:0;border-right-width:0;border-left-width:0}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);line-height:1;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:layout style;cursor:pointer;opacity:var(--opacity);overflow:var(--overflow);z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-native::-moz-focus-inner{border:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}::slotted(ion-icon){font-size:1.4em;pointer-events:none}::slotted(ion-icon[slot=start]){margin-left:-0.3em;margin-right:0.3em;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:-0.3em;margin-inline-start:-0.3em;-webkit-margin-end:0.3em;margin-inline-end:0.3em}}::slotted(ion-icon[slot=end]){margin-left:0.3em;margin-right:-0.2em;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:0.3em;margin-inline-start:0.3em;-webkit-margin-end:-0.2em;margin-inline-end:-0.2em}}::slotted(ion-icon[slot=icon-only]){font-size:1.8em}ion-ripple-effect{color:var(--ripple-color)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}:host(.ion-activated){color:var(--color-activated)}:host(.ion-activated) .button-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){:host(:hover){color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.button-solid.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.button-outline.ion-color) .button-native{border-color:var(--ion-color-base);background:transparent;color:var(--ion-color-base)}:host(.button-clear.ion-color) .button-native{background:transparent;color:var(--ion-color-base)}:host(.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{color:var(--ion-toolbar-color, var(--color))}:host(.button-outline.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{border-color:var(--ion-toolbar-color, var(--color, var(--border-color)))}:host(.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-color, var(--background));color:var(--ion-toolbar-background, var(--color))}:host{--border-radius:4px;--padding-top:0;--padding-bottom:0;--padding-start:1.1em;--padding-end:1.1em;--transition:box-shadow 280ms cubic-bezier(.4, 0, .2, 1),\n                background-color 15ms linear,\n                color 15ms linear;margin-left:2px;margin-right:2px;margin-top:4px;margin-bottom:4px;height:36px;font-size:14px;font-weight:500;letter-spacing:0.06em;text-transform:uppercase}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}:host(.button-solid){--background-activated:transparent;--background-hover:var(--ion-color-primary-contrast, #fff);--background-focused:var(--ion-color-primary-contrast, #fff);--background-activated-opacity:0;--background-focused-opacity:.24;--background-hover-opacity:.08;--box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)}:host(.button-solid.ion-activated){--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12)}:host(.button-outline){--border-width:2px;--border-style:solid;--box-shadow:none;--background-activated:transparent;--background-focused:var(--ion-color-primary, #3880ff);--background-hover:var(--ion-color-primary, #3880ff);--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04}:host(.button-outline.ion-activated.ion-color) .button-native{background:transparent}:host(.button-clear){--background-activated:transparent;--background-focused:var(--ion-color-primary, #3880ff);--background-hover:var(--ion-color-primary, #3880ff);--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04}:host(.button-round){--border-radius:64px;--padding-top:0;--padding-start:26px;--padding-end:26px;--padding-bottom:0}:host(.button-large){--padding-top:0;--padding-start:1em;--padding-end:1em;--padding-bottom:0;height:2.8em;font-size:20px}:host(.button-small){--padding-top:0;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:0;height:2.1em;font-size:13px}:host(.button-strong){font-weight:bold}::slotted(ion-icon[slot=icon-only]){padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}:host(.button-solid.ion-color.ion-focused) .button-native::after{background:var(--ion-color-contrast);opacity:0.24}:host(.button-clear.ion-color.ion-focused) .button-native::after,:host(.button-outline.ion-color.ion-focused) .button-native::after{background:var(--ion-color-base);opacity:0.12}@media (any-hover: hover){:host(.button-solid.ion-color:hover) .button-native::after{background:var(--ion-color-contrast);opacity:0.08}:host(.button-clear.ion-color:hover) .button-native::after,:host(.button-outline.ion-color:hover) .button-native::after{background:var(--ion-color-base);opacity:0.04}}'};const f=o=>{if(1===o.nodeType){if("script"===o.nodeName.toLowerCase())return!1;for(let i=0;i<o.attributes.length;i++){const t=o.attributes[i].value;if(Object(c.c)(t)&&0===t.toLowerCase().indexOf("on"))return!1}for(let i=0;i<o.childNodes.length;i++)if(!f(o.childNodes[i]))return!1}return!0},m=new Map,v=new Map,k=o=>{let t=v.get(o);if(!t){if("undefined"==typeof fetch)return m.set(o,""),Promise.resolve();t=fetch(o).then(t=>{if(t.ok)return t.text().then(t=>{m.set(o,(o=>{if(o&&"undefined"!=typeof document){const div=document.createElement("div");div.innerHTML=o;for(let i=div.childNodes.length-1;i>=0;i--)"svg"!==div.childNodes[i].nodeName.toLowerCase()&&div.removeChild(div.childNodes[i]);const t=div.firstElementChild;if(t&&"svg"===t.nodeName.toLowerCase()){const o=t.getAttribute("class")||"";if(t.setAttribute("class",(o+" s-ion-icon").trim()),f(t))return div.innerHTML}}return""})(t))});m.set(o,"")}),v.set(o,t)}return t},w=class{constructor(o){Object(r.l)(this,o),this.isVisible=!1,this.mode=y(),this.lazy=!1}connectedCallback(){this.waitUntilVisible(this.el,"50px",()=>{this.isVisible=!0,this.loadIcon()})}disconnectedCallback(){this.io&&(this.io.disconnect(),this.io=void 0)}waitUntilVisible(o,t,n){if(this.lazy&&"undefined"!=typeof window&&window.IntersectionObserver){const r=this.io=new window.IntersectionObserver(data=>{data[0].isIntersecting&&(r.disconnect(),this.io=void 0,n())},{rootMargin:t});r.observe(o)}else n()}loadIcon(){if(this.isVisible){const o=Object(c.b)(this);o&&(m.has(o)?this.svgContent=m.get(o):k(o).then(()=>this.svgContent=m.get(o)))}if(!this.ariaLabel){const label=Object(c.a)(this.name,this.icon,this.mode,this.ios,this.md);label&&(this.ariaLabel=label.replace(/\-/g," "))}}render(){const o=this.mode||"md",t=this.flipRtl||this.ariaLabel&&(this.ariaLabel.indexOf("arrow")>-1||this.ariaLabel.indexOf("chevron")>-1)&&!1!==this.flipRtl;return Object(r.j)(r.b,{role:"img",class:Object.assign(Object.assign({[o]:!0},x(this.color)),{["icon-"+this.size]:!!this.size,"flip-rtl":!!t&&"rtl"===this.el.ownerDocument.dir})},this.svgContent?Object(r.j)("div",{class:"icon-inner",innerHTML:this.svgContent}):Object(r.j)("div",{class:"icon-inner"}))}static get assetsDirs(){return["svg"]}get el(){return Object(r.g)(this)}static get watchers(){return{name:["loadIcon"],src:["loadIcon"],icon:["loadIcon"]}}},y=()=>"undefined"!=typeof document&&document.documentElement.getAttribute("mode")||"md",x=o=>o?{"ion-color":!0,["ion-color-"+o]:!0}:null;w.style=":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width, 32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}:host(.flip-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.icon-small){font-size:18px !important}:host(.icon-large){font-size:32px !important}:host(.ion-color){color:var(--ion-color-base) !important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}"},286:function(o,t,n){"use strict";n.d(t,"a",(function(){return e})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return d}));const r=(o,t)=>null!==t.closest(o),e=o=>"string"==typeof o&&o.length>0?{"ion-color":!0,["ion-color-"+o]:!0}:void 0,c=o=>{const map={};return(o=>{if(void 0!==o){return(Array.isArray(o)?o:o.split(" ")).filter(o=>null!=o).map(o=>o.trim()).filter(o=>""!==o)}return[]})(o).forEach(o=>map[o]=!0),map},l=/^[a-z][a-z0-9+\-.]*:/,d=async(o,t,n)=>{if(null!=o&&"#"!==o[0]&&!l.test(o)){const r=document.querySelector("ion-router");if(r)return null!=t&&t.preventDefault(),r.push(o,n)}return!1}},287:function(o,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return h})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return k})),n.d(t,"e",(function(){return w})),n.d(t,"f",(function(){return c})),n.d(t,"g",(function(){return e})),n.d(t,"h",(function(){return v})),n.d(t,"i",(function(){return f})),n.d(t,"j",(function(){return m})),n.d(t,"k",(function(){return r}));const r=o=>"function"==typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(o):"function"==typeof requestAnimationFrame?requestAnimationFrame(o):setTimeout(o),e=o=>!!o.shadowRoot&&!!o.attachShadow,c=o=>{const t=o.closest("ion-item");return t?t.querySelector("ion-label"):null},l=(o,t,n,r,c)=>{if(o||e(t)){let input=t.querySelector("input.aux-input");input||(input=t.ownerDocument.createElement("input"),input.type="hidden",input.classList.add("aux-input"),t.appendChild(input)),input.disabled=c,input.name=n,input.value=r||""}},d=(o,t,n)=>Math.max(o,Math.min(t,n)),h=(o,t)=>{if(!o){const o="ASSERT: "+t;throw console.error(o),new Error(o)}},f=o=>o.timeStamp||Date.now(),m=o=>{if(o){const t=o.changedTouches;if(t&&t.length>0){const o=t[0];return{x:o.clientX,y:o.clientY}}if(void 0!==o.pageX)return{x:o.pageX,y:o.pageY}}return{x:0,y:0}},v=o=>{const t="rtl"===document.dir;switch(o){case"start":return t;case"end":return!t;default:throw new Error(`"${o}" is not a valid value for [side]. Use "start" or "end" instead.`)}},k=(o,t)=>{const n=o._original||o;return{_original:o,emit:w(n.emit.bind(n),t)}},w=(o,t=0)=>{let n;return(...r)=>{clearTimeout(n),n=setTimeout(o,t,...r)}}},299:function(o,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return m}));var r=n(33);let e;const c=i=>{let o=h(i.src);if(o)return o;if(o=d(i.name,i.icon,i.mode,i.ios,i.md),o)return l(o);if(i.icon){if(o=h(i.icon),o)return o;if(o=h(i.icon[i.mode]),o)return o}return null},l=o=>{const t=(()=>{if("undefined"==typeof window)return new Map;if(!e){const o=window;o.Ionicons=o.Ionicons||{},e=o.Ionicons.map=o.Ionicons.map||new Map}return e})().get(o);return t||Object(r.e)(`svg/${o}.svg`)},d=(o,t,n,r,e)=>{if(n="ios"===(n&&v(n))?"ios":"md",r&&"ios"===n?o=v(r):e&&"md"===n?o=v(e):(o||!t||f(t)||(o=t),m(o)&&(o=v(o))),!m(o)||""===o.trim())return null;return""!==o.replace(/[a-z]|-|\d/gi,"")?null:o},h=o=>m(o)&&(o=o.trim(),f(o))?o:null,f=o=>o.length>0&&/(\/|\.)/.test(o),m=o=>"string"==typeof o,v=o=>o.toLowerCase()}}]);