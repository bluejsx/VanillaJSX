var __defProp=Object.defineProperty,__hasOwnProp=Object.prototype.hasOwnProperty,__getOwnPropSymbols=Object.getOwnPropertySymbols,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,t,n)=>t in e?__defProp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,__assign=(e,t)=>{for(var n in t||(t={}))__hasOwnProp.call(t,n)&&__defNormalProp(e,n,t[n]);if(__getOwnPropSymbols)for(var n of __getOwnPropSymbols(t))__propIsEnum.call(t,n)&&__defNormalProp(e,n,t[n]);return e};!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).vjsx={})}(this,(function(e){"use strict";const t=["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","animation","audio","circle","clipPath","color-profile","cursor","defs","desc","discard","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","handler","hkern","image","line","linearGradient","listener","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","prefetch","radialGradient","rect","set","solidColor","stop","svg","switch","symbol","tbreak","text","textArea","textPath","tref","tspan","unknown","use","view","vkern"];Object.defineProperties(Element.prototype,{_vf:{value:{}},watch:{value:function(e,t){const n=this._vf[e];var o;n?(n.push(t),(0===(o=n.value)||o)&&t(n.value)):this._vf[e]=[t]}}}),Object.defineProperty(EventTarget.prototype,"on",{value:EventTarget.prototype.addEventListener});let n=0;const o=(e,t)=>{if(t instanceof Function){e.append("");const o=e.childNodes[e.childNodes.length-1];n=e,Object.defineProperties(n,{innerHTML:{set(){}},innerText:{set(){}}});t((e=>{o.data=e.toString()}),e)}else if(t instanceof Array)for(const r of t)o(e,r);else e.append(t);var n};const r={r:function(e,r,...a){null!=r||(r={});let i,l=!1;if("string"==typeof e)t.includes(e)?(i=document.createElementNS("http://www.w3.org/2000/svg",e),l=!0):i=document.createElement(e);else{if("function"!=typeof e)throw new Error("using invalid thing used as element tag.");if((null==e?void 0:e.prototype)instanceof Element)try{i=new e}catch(s){customElements.define("default"===(f=e.name)?`custom-elem-${(n++).toString(36)}`:f.replace(/\B[A-Z]/g,"-$&").toLowerCase(),e),i=new e}else i=e(__assign(__assign({},r),{children:[...a]})),a.length=0}var f;if(r)for(const t in r){const e=r[t];"class"===t?i.classList.value=e:"ref"===t?e[0][e[1]]=i:l||"style"===t||t.includes("-")?i.setAttribute(t,e):i[t]=e}return o(i,a),i},Fragment:({children:e})=>e};e.default=r,e.useAttr=function(e,t,n){var o;null!=(o=e._vf)[t]||(o[t]=[]);const r=e._vf[t];r.value=n,Object.defineProperty(e,t,{get:()=>r.value,set(e){r.value=e;for(let t=r.length;t--;)r[t](e)}}),e[t]=n},Object.defineProperty(e,"__esModule",{value:!0}),e[Symbol.toStringTag]="Module"}));
