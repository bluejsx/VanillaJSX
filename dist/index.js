var m=Object.defineProperty,v=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var s=(t,e,n)=>e in t?m(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,c=(t,e)=>{for(var n in e||(e={}))E.call(e,n)&&s(t,n,e[n]);if(l)for(var n of l(e))S.call(e,n)&&s(t,n,e[n]);return t},d=(t,e)=>v(t,x(e));var u=(t,e,n)=>(s(t,typeof e!="symbol"?e+"":e,n),n);var p=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","animation","audio","circle","clipPath","color-profile","cursor","defs","desc","discard","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","handler","hkern","image","line","linearGradient","listener","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","prefetch","radialGradient","rect","set","solidColor","stop","svg","switch","symbol","tbreak","text","textArea","textPath","tref","tspan","unknown","use","view","vkern"]),T=new Set(["class","style","for"]);var g=t=>t===0?!0:!!t,y=class{constructor(){u(this,"_vf");this._vf={}}watch(e,n){let r=this._vf[e];r?(r.push(n),g(r.value)&&n(r.value)):this._vf[e]=[n]}};Object.defineProperties(Element.prototype,{_vf:{value:{}},watch:{value:function(t,e){let n=this._vf[t];n?(n.push(e),g(n.value)&&e(n.value)):this._vf[t]=[e]}}});function A(t,e,n){var a,o;(o=(a=t._vf)[e])!=null||(a[e]=[]);let r=t._vf[e];r.value=n,Object.defineProperty(t,e,{get(){return r.value},set(i){r.value=i;for(let f=r.length;f--;)r[f](i)}}),t[e]=n}Object.defineProperty(EventTarget.prototype,"on",{value:EventTarget.prototype.addEventListener});var h=(t,e)=>{if(e instanceof Function)e(t);else if(e instanceof Array)for(let n of e)h(t,n);else t.append(e)};function _(t,e,...n){e!=null||(e={});let r=!1,a;if(typeof t=="string")p.has(t)?(a=document.createElementNS("http://www.w3.org/2000/svg",t),r=!0):a=document.createElement(t);else if(typeof t=="function")(t==null?void 0:t.prototype)instanceof Element?a=new t:(a=t(d(c({},e),{children:[...n]})),n.length=0);else throw new Error("Invalid Component");if(e)for(let o in e){let i=e[o];o==="ref"?i[0][i[1]]=a:r||T.has(o)||o.includes("-")?a.setAttribute(o,i):a[o]=i}return h(a,n),a}var P={r:_,Fragment:({children:t})=>t},j=P;export{y as AttrHolder,j as default,A as useAttr};
