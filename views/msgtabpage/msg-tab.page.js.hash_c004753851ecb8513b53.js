!function(t){function e(e){for(var i,r,a=e[0],l=e[1],u=e[2],d=0,p=[];d<a.length;d++)r=a[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);for(c&&c(e);p.length;)p.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,a=1;a<n.length;a++){var l=n[a];0!==o[l]&&(i=!1)}i&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},o={23:0},s=[];function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var a=window.webpackJsonp=window.webpackJsonp||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var c=l;s.push([493,1,0,2]),n()}({138:function(t,e,n){
/*!
 * Toastify js 1.7.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */
var i,o;i=this,o=function(t){var e=function(t){return new e.lib.init(t)};function n(t,e){return!(!t||"string"!=typeof e||!(t.className&&t.className.trim().split(/\s+/gi).indexOf(e)>-1))}return e.lib=e.prototype={toastify:"1.7.0",constructor:e,init:function(t){return t||(t={}),this.options={},this.toastElement=null,this.options.text=t.text||"Hi there!",this.options.duration=0===t.duration?0:t.duration||3e3,this.options.selector=t.selector,this.options.callback=t.callback||function(){},this.options.destination=t.destination,this.options.newWindow=t.newWindow||!1,this.options.close=t.close||!1,this.options.gravity="bottom"===t.gravity?"toastify-bottom":"toastify-top",this.options.positionLeft=t.positionLeft||!1,this.options.position=t.position||"",this.options.backgroundColor=t.backgroundColor,this.options.avatar=t.avatar||"",this.options.className=t.className||"",this.options.stopOnFocus=void 0===t.stopOnFocus||t.stopOnFocus,this.options.onClick=t.onClick,this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var t=document.createElement("div");if(t.className="toastify on "+this.options.className,this.options.position?t.className+=" toastify-"+this.options.position:!0===this.options.positionLeft?(t.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):t.className+=" toastify-right",t.className+=" "+this.options.gravity,this.options.backgroundColor&&(t.style.background=this.options.backgroundColor),t.innerHTML=this.options.text,""!==this.options.avatar){var e=document.createElement("img");e.src=this.options.avatar,e.className="toastify-avatar","left"==this.options.position||!0===this.options.positionLeft?t.appendChild(e):t.insertAdjacentElement("beforeend",e)}if(!0===this.options.close){var n=document.createElement("span");n.innerHTML="&#10006;",n.className="toast-close",n.addEventListener("click",function(t){t.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}.bind(this));var i=window.innerWidth>0?window.innerWidth:screen.width;("left"==this.options.position||!0===this.options.positionLeft)&&i>360?t.insertAdjacentElement("afterbegin",n):t.appendChild(n)}if(this.options.stopOnFocus&&this.options.duration>0){const e=this;t.addEventListener("mouseover",(function(e){window.clearTimeout(t.timeOutValue)})),t.addEventListener("mouseleave",(function(){t.timeOutValue=window.setTimeout((function(){e.removeElement(t)}),e.options.duration)}))}return void 0!==this.options.destination&&t.addEventListener("click",function(t){t.stopPropagation(),!0===this.options.newWindow?window.open(this.options.destination,"_blank"):window.location=this.options.destination}.bind(this)),"function"==typeof this.options.onClick&&void 0===this.options.destination&&t.addEventListener("click",function(t){t.stopPropagation(),this.options.onClick()}.bind(this)),t},showToast:function(){var t;if(this.toastElement=this.buildToast(),!(t=void 0===this.options.selector?document.body:document.getElementById(this.options.selector)))throw"Root element is not defined";return t.insertBefore(this.toastElement,t.firstChild),e.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout(function(){this.removeElement(this.toastElement)}.bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(t){t.className=t.className.replace(" on",""),window.setTimeout(function(){t.parentNode&&t.parentNode.removeChild(t),this.options.callback.call(t),e.reposition()}.bind(this),400)}},e.reposition=function(){for(var t,e={top:15,bottom:15},i={top:15,bottom:15},o={top:15,bottom:15},s=document.getElementsByClassName("toastify"),r=0;r<s.length;r++){t=!0===n(s[r],"toastify-top")?"toastify-top":"toastify-bottom";var a=s[r].offsetHeight;t=t.substr(9,t.length-1),(window.innerWidth>0?window.innerWidth:screen.width)<=360?(s[r].style[t]=o[t]+"px",o[t]+=a+15):!0===n(s[r],"toastify-left")?(s[r].style[t]=e[t]+"px",e[t]+=a+15):(s[r].style[t]=i[t]+"px",i[t]+=a+15)}return this},e.lib.init.prototype=e.lib,e},t.exports?t.exports=o():i.Toastify=o()},186:function(t,e,n){},493:function(t,e,n){n(23),t.exports=n(494)},494:function(t,e,n){"use strict";var i,o=n(18);o.initFunctions={},o.initFunctions=o.initFunctions||{},o.initFunctions.hydratePage=!0===((i=n(26))||{}).__esModule?i.default:i,o.pageConfig=function(){var t=n(498);return!0===(t||{}).__esModule?t.default:t}(),o.router=function(){var t=n(27);return!0===(t||{}).__esModule?t.default:t}(),o.renderPageToDom=function(){var t=n(28);return!0===(t||{}).__esModule?t.default:t}(),o.domRender=function(){var t=n(29);return!0===(t||{}).__esModule?t.default:t}(),function(){var t=n(30);!0===(t||{}).__esModule&&t.default}()},495:function(t,e,n){},498:function(t,e,n){"use strict";n.r(e);var i=n(1),o=n.n(i),s=n(7);"undefined"!=typeof window&&(Element.prototype.hide=function(){this.style.visibility="hidden"},Element.prototype.show=function(){this.style.visibility="inherit"},Element.prototype.getStyle=function(t){return document.defaultView.getComputedStyle(this,null).getPropertyValue(t)},Element.prototype.getPosition=function(){var t=0,e=0,n=this;do{t+=n.offsetLeft,e+=n.offsetTop}while(n=n.offsetParent);return{x:t,y:e}},Element.prototype.setTextSize=function(t,e,n,i){o.a.warning("TEXTAREA"!==this.tagName),o.a.warning(t&&e);var r=document.createElement(this.tagName);r.style.fontSize="100px",r.style.display="inline-block",r.style.whiteSpace="nowrap",r.style.position="absolute",r.style.fontFamily=this.getStyle("font-family"),r.style.letterSpacing=this.getStyle("letter-spacing"),r.style.top="-9999px",r.style.zIndex="-1",r.style.visibility="hidden";var a=this.innerHTML;if(""===a)a="y";else if(i){var l;o.a.warning(this.innerHTML===this.textContent),o.a.warning(i.constructor===Array&&i.length>0);var u=-1;document.documentElement.appendChild(r);for(var c=0;c<i.length;c++){var d=i[c];r.innerHTML=d;var p=parseInt(r.getStyle("width"),10);p>u&&(u=p,l=d)}for(o.a.warning(l),a="",c=0;c<this.textContent.length;c++)a+=l}r.innerHTML=a,document.documentElement.appendChild(r);var f=parseInt(r.getStyle("width"),10),h=parseInt(r.getStyle("height"),10),m=Math.min(e/h,t/f);if(document.documentElement.removeChild(r),n)return{width:m*f,height:m*h,fontSize:100*m};this.style.fontSize=Math.floor(100*m)+"px",o.a.warning("block"===this.getStyle("display")||"inline-block"===this.getStyle("display")||"table-cell"===this.getStyle("display"),"this.getStyle('display')=="+this.getStyle("display"),1),this.hide();var y=this.style.fontSize,g=this.getStyle("font-size");g!==y&&Object(s.d)({name:"[known][msg-tab] computed font-size !== set font-size",value:JSON.stringify({fontSize__computed:g,fontSize:y})});for(var v=100;this.getStyle("width")<t&&this.getStyle("height")<e&&--v;)this.style.fontSize=parseInt(this.style.fontSize,10)+2+"px";for(;(this.getStyle("width")>t||this.getStyle("height")>e)&&--v;)this.style.fontSize=parseInt(this.style.fontSize,10)-1+"px";o.a.warning(v>0,"max===0"),this.show()});n(495);var r=n(31),a=n(73);function l(t,e,n,i,o,s,r){try{var a=t[s](r),l=a.value}catch(t){return void n(t)}a.done?e(l):Promise.resolve(l).then(i,o)}function u(t){return function(){var e=this,n=arguments;return new Promise((function(i,o){var s=t.apply(e,n);function r(t){l(s,i,o,r,a,"next",t)}function a(t){l(s,i,o,r,a,"throw",t)}r(void 0)}))}}var c,d=function(t){var e=t.text;function n(){e.setTextSize(window.innerWidth,window.innerHeight),e.style.paddingTop="0px";var t=window.innerHeight/2-parseInt(e.getStyle("height"))/2;e.style.paddingTop=t+"px"}e.onblur=function(){l()},document.body.onload=function(){n(),l(),function(){function t(){Object(r.f)(0),requestAnimationFrame((function(){return Object(r.f)(0)}))}t(),setTimeout(t,10)}()},window.onfocus=function(){l()};var i=String.fromCharCode(160);function s(t){var e=t.charCodeAt(0);return t&&[160,32].includes(e)}var a=e.textContent;function l(){e.focus(),requestAnimationFrame((function(){e.focus()}))}function u(t){var n=window.getSelection(),i=document.createRange();i.setStart(e,t),i.setEnd(e,t),n.removeAllRanges(),n.addRange(i)}e.oninput=function(){var t=e.textContent;""===t&&(t=e.textContent=i,u(0));var r=t.slice(0,t.length-i.length);s(a)&&s(t.slice(-1))&&t.length===1+i.length&&(o.a.warning(1===r.length),t=e.textContent=r,u(1)),o.a.warning(t.length>0);var l=s(t);document.getElementById("hint").style.opacity=l?"1":"0",document.title=l?"Msg Tab":t+" - Msg Tab",f(),n(),f(),a=t},window.onresize=n};var p=!1;function f(){return h.apply(this,arguments)}function h(){return(h=u(regeneratorRuntime.mark((function t(){var e,n,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=function(t){return t.getTime()},e=function(){return n(new Date)-n(c)},(i=function(){Object(r.e)({smooth:!1})})(),requestAnimationFrame(i),c=new Date,!p){t.next=8;break}return t.abrupt("return");case 8:p=!0;case 9:if(!(e()<100)){t.next=15;break}return t.next=12,Object(a.a)({milliseconds:10});case 12:i(),t.next=9;break;case 15:return p=!1,t.abrupt("return");case 17:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var m=n(0),y=n.n(m),g=function(){return y.a.createElement(v,null,y.a.createElement(w,null,"Use Cases"),y.a.createElement(b,null,"School & Universities - Communicate to students without speaking, e.g. during examination."),y.a.createElement(b,null,"At the library - You are forbidden to talk."),y.a.createElement(b,null,"Audio not working - Video call, or presentation with large audience."),y.a.createElement(b,null,"For Fun."))};function v(t){var e=t.children;return y.a.createElement("div",{style:{textAlign:"center",padding:"30px 0"}},y.a.createElement("div",{style:{textAlign:"left",display:"inline-block"}},e))}function w(t){var e=t.children;return y.a.createElement("span",{style:{textDecoration:"underline",fontSize:"1.2em"}},e)}function b(t){var e=t.children;return y.a.createElement("div",{style:{paddingLeft:7,marginTop:5}},"• ",e)}var E=n(20);e.default=Object(E.f)({route:"/msg-tab",title:"Msg Tab",view:function(){return y.a.createElement(E.b,null,y.a.createElement(E.e,null,y.a.createElement(E.a,{id:"msg-container"},y.a.createElement("div",{id:"hint"},"Type something..."),y.a.createElement("div",{id:"text-container"},y.a.createElement("div",{id:"text",spellCheck:"false"}," "))),y.a.createElement(E.d,null,y.a.createElement(g,null))))},onPageLoad:function(t){t();var e=window.document.getElementById("text");e.setAttribute("contentEditable","true"),d({text:e})}})}});
//# sourceMappingURL=msg-tab.page.js.hash_c004753851ecb8513b53.js.map