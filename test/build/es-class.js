/*! (C) Andrea Giammarchi - MIT Style License */
var Class=Class||function(e){"use strict";function m(e,t,n){for(var r,i=[],o=0;o<e.length;o++)r=e[o],c.call(r,s)&&i.push(r[s]),g(r,t,n,!1,!1);return i}function g(e,t,n,r,i){var s,o;for(s in e)b(s,i)&&c.call(e,s)&&(c.call(t,s)&&S("duplicated: "+s),w(n,t,s,e[s],r));if(l)for(o=0;o<f.length;o++)s=f[o],c.call(e,s)&&w(n,t,s,e[s],r)}function y(e,t,n,r){return p(e,t,{enumerable:r,configurable:!r,writable:!r,value:n})}function b(e,f){return e!==t&&e!==n&&e!==i&&e!==o&&e!==u&&e!==a&&e!==r&&(f||e!==s)}function w(e,t,n,r,i){if(i){if(c.call(t,n))return t}else typeof r=="function"&&d.test(r)&&(r=x(e,t,n,r,i));return y(t,n,r,i)}function E(e,t){for(var n,r,i=0;i<e.length;i++){n=e[i];for(r in n)c.call(n,r)&&!c.call(t,r)&&S(r+" is not implemented")}}function S(e){try{console.warn(e)}catch(t){}}function x(e,t,n,r,i){return function(){c.call(this,a)||y(this,a,null,i);var t=this[a],s=this[a]=e[n],o=r.apply(this,arguments);return this[a]=t,o}}var t="constructor",n="extends",r="with",i="implements",s="init",o="prototype",u="static",a="super",f=["hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],l=!{valueOf:0}[f[2]](f[5]),c=e[f[0]],h=e.create||function(e){var t=this instanceof h;return h[o]=t?null:e,t?this:new h},p=e.defineProperty,d=/create/.test(function(){h()})?/\bsuper\b/:/.*/;try{p({},"{}",{})}catch(v){p=function(e,t,n){return e[t]=n.value,e}}return function(e){var s=c.call(e,t),a=s?e[t]:function(){},f=c.call(e,n),l=f&&e[n],p=f&&typeof l=="function"?l[o]:l,d=f?w(p,h(p),t,a,!1):a[o],v,y;return c.call(e,u)&&g(e[u],a,p,!0,!0),f&&(l!==p&&g(l,a,p,!0,!0),a[o]=d),c.call(e,r)&&(v=m([].concat(e[r]),d,p),y=v.length,y&&(a=function(e){return function(){var t=0;while(t<y)v[t++].call(this);return e.apply(this,arguments)}}(a),a[o]=d)),g(e,d,p,!1,!0),c.call(e,i)&&E([].concat(e[i]),d),a}}(Object);