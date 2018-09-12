!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["vue-sliding-button"]=e():t["vue-sliding-button"]=e()}("undefined"!=typeof self?self:this,function(){return function(t){var e={};function i(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/dist/",i(i.s=1)}([function(t,e,i){"use strict";var n=i(9),s=i(10);e.a={name:"better-slider",props:{right:{type:[Number,String],default:80},left:{type:[Number,String],default:0},deceleration:{type:Number,default:.01},momentum:{type:Boolean,default:!0},momentumTime:{type:Number,default:100},momentumLimitTime:{type:Number,default:300},momentumLimitDistance:{type:Number,default:15},bounce:{type:Boolean,default:!0},bounceTime:{type:Number,default:200},slideTime:{type:Number,default:200},closeTime:{type:Number,default:300},rightBackgroundColor:{type:String,default:"#e6454a"},leftBackgroundColor:{type:String,default:"#ccc"},trigger:{type:Boolean,default:!1}},data:function(){return{x:0,wrapperX:0,duration:0,easing:{}}},methods:{clickBackEventHandle:function(t){this.$emit("clickBackEvent",{event:t,component:this})},clickFrontEventHandle:function(t){this.$emit("clickFrontEvent",{event:t,component:this})},close:function(){this.$el.style.height=0;var t=this.$refs.wrapper.style;t.transitionDuration=this.closeTime+"ms",t.transform="translate("+-this.$refs.front.offsetWidth+"px, 0px) translateZ(0px)",this.wrapperX=-this.$refs.front.offsetWidth,this.isClosing=!0},start:function(t){var e=n.b[t.type];if(!(e!==n.a&&0!==t.button||this.initiated&&this.initiated!==e)){this.initiated=e,this.$emit("touchStartEvent",{event:t,component:this}),this.duration=this.slideTime,this.x=0,this.distX=0,this.startTime=Object(s.b)();var i=t.touches?t.touches[0]:t;this.startX=this.x,this.absStartX=this.x,this.touchX=i.pageX}},move:function(t){if(n.b[t.type]===this.initiated){this.duration=0;var e=t.touches?t.touches[0]:t,i=e.pageX-this.touchX;this.touchX=e.pageX,this.distX+=i;var r=Math.abs(this.distX),o=Object(s.b)();if(!(o-this.endTime>this.momentumLimitTime&&r<this.momentumLimitDistance)){var a=this.x+i;0===this.left&&a>this.maxScrollX||0===this.right&&a<this.minScrollX||((a<this.minScrollX||a>this.maxScrollX)&&(a=this.bounce?this.x+i/3:a<this.minScrollX?this.minScrollX:this.maxScrollX),this.x=a,o-this.startTime>this.momentumLimitTime&&(this.startTime=o,this.startX=this.x))}}},end:function(t){if(n.b[t.type]===this.initiated){this.initiated=!1,this.endTime=Object(s.b)();var e=this.endTime-this.startTime,i=Math.abs(this.x-this.startX);if(this.momentum&&e<this.momentumLimitTime&&i>this.momentumLimitDistance){var r=Object(s.a)(this.x,this.startX,e,this.minScrollX,this.maxScrollX,this.$el.offsetWidth,this.momentumTime,this.deceleration);this.duration=r.duration,this.x=r.destination,this.easing=this.ease.momentum}else this.x<1/3*this.minScrollX?(this.duration=this.slideTime,this.easing=this.ease.slide,this.x=this.minScrollX):this.x>1/3*this.maxScrollX?(this.duration=this.slideTime,this.easing=this.ease.slide,this.x=this.maxScrollX):(this.duration=this.bounceTime,this.easing=this.ease.slideTime,this.x=0)}},transitionEnd:function(t){t.target.className.indexOf("better-slider")>-1&&this.isClosing&&0===this.$el.offsetHeight?this.$emit("closeTransitionEndEvent",{event:t,component:this}):(this.isRightOpened&&this.x===this.minScrollX&&this.$emit("rightOpenedEvent",{event:t,component:this}),this.isLeftOpened&&this.x===this.maxScrollX&&this.$emit("leftOpenedEvent",{event:t,component:this}),this.resetPosition(this.bounceTime,this.ease.bounce))},resetPosition:function(t,e){this.isRightOpened?this.x=this.minScrollX:this.isLeftOpened?this.x=this.maxScrollX:this.x=0,this.duration=t,this.easing=e},computeX:function(t){if("string"==typeof t){var e=Object(s.c)(t),i=parseInt(window.getComputedStyle(this.$refs.wrapper,null).width);return"number"==typeof e?Math.ceil(e*i):0}return t}},created:function(){this.isClosing=!1,this.ease={slide:"ease-in",momentum:"ease-out"}},mounted:function(){this.minScrollX=-this.computeX(this.right),this.maxScrollX=this.computeX(this.left),this.$el.style.height=Math.ceil(this.$slots.front[0].elm.offsetHeight)+"px"},watch:{x:function(){var t=this.$el.style;0===this.x?(t.backgroundColor="",this.isLeftOpened=!1,this.isRightOpened=!1):this.x>0?(this.isLeftOpened=!0,this.isRightOpened=!1,t.backgroundColor=this.leftBackgroundColor):(this.isLeftOpened=!1,this.isRightOpened=!0,t.backgroundColor=this.rightBackgroundColor)},trigger:function(){this.initiated||(this.duration=this.slideTime,this.x=0)}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(2),s={install:function(t,e){t.component(n.a.name,n.a)}};e.default=s},function(t,e,i){"use strict";var n=i(0),s=i(11);var r=function(t){i(3)},o=i(8)(n.a,s.a,!1,r,"data-v-cbb39d58",null);e.a=o.exports},function(t,e,i){var n=i(4);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(6)("18119a26",n,!0,{})},function(t,e,i){(t.exports=i(5)(!1)).push([t.i,"\n.better-slider[data-v-cbb39d58] {\n  position: relative;\n  overflow-x: hidden;\n  width: 100%;\n  -webkit-transition: all 300ms ease-in-out;\n  transition: all 300ms ease-in-out;\n}\n.better-slider .better-slider-wrapper[data-v-cbb39d58] {\n    overflow: hidden;\n    height: 100%;\n}\n.better-slider .better-slider-wrapper .better-slider-back[data-v-cbb39d58] {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n}\n.better-slider .better-slider-front[data-v-cbb39d58] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: block;\n    width: 100%;\n    border: 0;\n    margin: 0;\n    padding: 0;\n    z-index: 10;\n}\n",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var i=function(t,e){var i=t[1]||"",n=t[3];if(!n)return i;if(e&&"function"==typeof btoa){var s=(o=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),r=n.sources.map(function(t){return"/*# sourceURL="+n.sourceRoot+t+" */"});return[i].concat(r).concat([s]).join("\n")}var o;return[i].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+i+"}":i}).join("")},e.i=function(t,i){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},s=0;s<this.length;s++){var r=this[s][0];"number"==typeof r&&(n[r]=!0)}for(s=0;s<t.length;s++){var o=t[s];"number"==typeof o[0]&&n[o[0]]||(i&&!o[2]?o[2]=i:i&&(o[2]="("+o[2]+") and ("+i+")"),e.push(o))}},e}},function(t,e,i){var n="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!n)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var s=i(7),r={},o=n&&(document.head||document.getElementsByTagName("head")[0]),a=null,u=0,c=!1,d=function(){},l=null,h="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function m(t){for(var e=0;e<t.length;e++){var i=t[e],n=r[i.id];if(n){n.refs++;for(var s=0;s<n.parts.length;s++)n.parts[s](i.parts[s]);for(;s<i.parts.length;s++)n.parts.push(v(i.parts[s]));n.parts.length>i.parts.length&&(n.parts.length=i.parts.length)}else{var o=[];for(s=0;s<i.parts.length;s++)o.push(v(i.parts[s]));r[i.id]={id:i.id,refs:1,parts:o}}}}function p(){var t=document.createElement("style");return t.type="text/css",o.appendChild(t),t}function v(t){var e,i,n=document.querySelector("style["+h+'~="'+t.id+'"]');if(n){if(c)return d;n.parentNode.removeChild(n)}if(f){var s=u++;n=a||(a=p()),e=x.bind(null,n,s,!1),i=x.bind(null,n,s,!0)}else n=p(),e=function(t,e){var i=e.css,n=e.media,s=e.sourceMap;n&&t.setAttribute("media",n);l.ssrId&&t.setAttribute(h,e.id);s&&(i+="\n/*# sourceURL="+s.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */");if(t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}.bind(null,n),i=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else i()}}t.exports=function(t,e,i,n){c=i,l=n||{};var o=s(t,e);return m(o),function(e){for(var i=[],n=0;n<o.length;n++){var a=o[n];(u=r[a.id]).refs--,i.push(u)}e?m(o=s(t,e)):o=[];for(n=0;n<i.length;n++){var u;if(0===(u=i[n]).refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete r[u.id]}}}};var b,g=(b=[],function(t,e){return b[t]=e,b.filter(Boolean).join("\n")});function x(t,e,i,n){var s=i?"":n.css;if(t.styleSheet)t.styleSheet.cssText=g(e,s);else{var r=document.createTextNode(s),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(r,o[e]):t.appendChild(r)}}},function(t,e){t.exports=function(t,e){for(var i=[],n={},s=0;s<e.length;s++){var r=e[s],o=r[0],a={id:t+":"+s,css:r[1],media:r[2],sourceMap:r[3]};n[o]?n[o].parts.push(a):i.push(n[o]={id:o,parts:[a]})}return i}},function(t,e){t.exports=function(t,e,i,n,s,r){var o,a=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(o=t,a=t.default);var c,d="function"==typeof a?a.options:a;if(e&&(d.render=e.render,d.staticRenderFns=e.staticRenderFns,d._compiled=!0),i&&(d.functional=!0),s&&(d._scopeId=s),r?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},d._ssrRegister=c):n&&(c=n),c){var l=d.functional,h=l?d.render:d.beforeCreate;l?(d._injectStyles=c,d.render=function(t,e){return c.call(e),h(t,e)}):d.beforeCreate=h?[].concat(h,c):[c]}return{esModule:o,exports:a,options:d}}},function(t,e,i){"use strict";i.d(e,"a",function(){return n}),i.d(e,"b",function(){return s});var n=1,s={touchstart:n,touchmove:n,touchend:n,mousedown:2,mousemove:2,mouseup:2,mouseleave:2}},function(t,e,i){"use strict";e.b=function(){return window.performance&&window.performance.now?window.performance.now()+window.performance.timing.navigationStart:+new Date},e.a=function(t,e,i,n,s,r,o,a){var u=t-e,c=Math.abs(u)/i,d=o,l=t+c/a*(u<0?-1:1);l<s-r?l=s-r:l>r+n&&(l=r+n);return{destination:Math.round(l),duration:d}},e.c=function(t){if("string"!=typeof t)return;var e=n.exec(t),i=e&&e[0],s=parseInt(i);return isNaN(s)?void 0:.01*s};var n=/^(\d+\.?\d*)|(\d*\.\d+)[%]$/g},function(t,e,i){"use strict";var n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"better-slider",staticStyle:{"transition-property":"height","transition-timing-function":"ease-in"},style:{"transition-duration":t.closeTime+"ms"},on:{transitionEnd:t.transitionEnd,webkitTransitionEnd:t.transitionEnd,oTransitionEnd:t.transitionEnd,MSTransitionEnd:t.transitionEnd}},[i("div",{ref:"wrapper",staticClass:"better-slider-wrapper",staticStyle:{"transition-property":"transform","transition-timing-function":"ease-in-out"}},[i("div",{ref:"front",staticClass:"better-slider-front",staticStyle:{"transition-property":"transform"},style:{"transition-timing-function":t.easing,"transition-duration":t.duration+"ms",transform:"translate("+t.x+"px, 0px) translateZ(0px)"},on:{touchstart:t.start,mousedown:t.start,touchmove:t.move,mousemove:t.move,touchend:t.end,mouseup:t.end,touchcancel:t.end,mousecancel:t.end,mouseleave:t.end,click:t.clickFrontEventHandle}},[t._t("front")],2),t._v(" "),i("div",{ref:"back",staticClass:"better-slider-back",on:{click:t.clickBackEventHandle}},[t._t("back")],2)])])},staticRenderFns:[]};e.a=n}])});
//# sourceMappingURL=vue-sliding-button.js.map