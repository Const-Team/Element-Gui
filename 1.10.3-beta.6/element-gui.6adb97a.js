/**
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version {{version}}
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */void 0!==(i="function"==typeof(n=function(){"use strict";var m=window,s={placement:"bottom",gpuAcceleration:true,offset:0,boundariesElement:"viewport",boundariesPadding:5,preventOverflowOrder:["left","right","top","bottom"],flipBehavior:"flip",arrowElement:"[x-arrow]",arrowOffset:0,modifiers:["shift","offset","preventOverflow","keepTogether","arrow","flip","applyStyle"],modifiersIgnored:[],forceAbsolute:false};function e(e,t,i){this._reference=e.jquery?e[0]:e;this.state={};var n=typeof t==="undefined"||t===null;var a=t&&Object.prototype.toString.call(t)==="[object Object]";if(n||a)this._popper=this.parse(a?t:{});else this._popper=t.jquery?t[0]:t;this._options=Object.assign({},s,i);this._options.modifiers=this._options.modifiers.map(function(e){if(this._options.modifiersIgnored.indexOf(e)!==-1)return;if(e==="applyStyle")this._popper.setAttribute("x-placement",this._options.placement);return this.modifiers[e]||e}.bind(this));this.state.position=this._getPosition(this._popper,this._reference);l(this._popper,{position:this.state.position,top:0});this.update();this._setupEventListeners();return this}function v(e){var t=e.style.display,i=e.style.visibility;e.style.display="block";e.style.visibility="hidden";var n=e.offsetWidth;var a=m.getComputedStyle(e);var s=parseFloat(a.marginTop)+parseFloat(a.marginBottom);var r=parseFloat(a.marginLeft)+parseFloat(a.marginRight);var l={width:e.offsetWidth+r,height:e.offsetHeight+s};e.style.display=t;e.style.visibility=i;return l}function c(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function g(e){var t=Object.assign({},e);t.right=t.left+t.width;t.bottom=t.top+t.height;return t}function a(e,t){var i=0,n;for(n in e){if(e[n]===t)return i;i++}return null}function i(e,t){var i=m.getComputedStyle(e,null);return i[t]}function b(e){var t=e.offsetParent;return t===m.document.body||!t?m.document.documentElement:t}function y(e){var t=e.parentNode;if(!t)return e;if(t===m.document)if(m.document.body.scrollTop||m.document.body.scrollLeft)return m.document.body;else return m.document.documentElement;if(["scroll","auto"].indexOf(i(t,"overflow"))!==-1||["scroll","auto"].indexOf(i(t,"overflow-x"))!==-1||["scroll","auto"].indexOf(i(t,"overflow-y"))!==-1)return t;return y(e.parentNode)}function r(e){if(e===m.document.body)return false;if(i(e,"position")==="fixed")return true;return e.parentNode?r(e.parentNode):e}function l(i,n){function a(e){return e!==""&&!isNaN(parseFloat(e))&&isFinite(e)}Object.keys(n).forEach(function(e){var t="";if(["width","height","top","right","bottom","left"].indexOf(e)!==-1&&a(n[e]))t="px";i.style[e]=n[e]+t})}function o(e){var t={};return e&&t.toString.call(e)==="[object Function]"}function x(e){var t={width:e.offsetWidth,height:e.offsetHeight,left:e.offsetLeft,top:e.offsetTop};t.right=t.left+t.width;t.bottom=t.top+t.height;return t}function u(e){var t=e.getBoundingClientRect();var i=navigator.userAgent.indexOf("MSIE")!=-1;var n=i&&e.tagName==="HTML"?-e.scrollTop:t.top;return{left:t.left,top:n,right:t.right,bottom:t.bottom,width:t.right-t.left,height:t.bottom-n}}function h(e,t,i){var n=u(e);var a=u(t);if(i){var s=y(t);a.top+=s.scrollTop;a.bottom+=s.scrollTop;a.left+=s.scrollLeft;a.right+=s.scrollLeft}var r={top:n.top-a.top,left:n.left-a.left,bottom:n.top-a.top+n.height,right:n.left-a.left+n.width,width:n.width,height:n.height};return r}function d(e){var t=["","ms","webkit","moz","o"];for(var i=0;i<t.length;i++){var n=t[i]?t[i]+e.charAt(0).toUpperCase()+e.slice(1):e;if(typeof m.document.body.style[n]!=="undefined")return n}return null}if(e.prototype.destroy=function(){this._popper.removeAttribute("x-placement");this._popper.style.left="";this._popper.style.position="";this._popper.style.top="";this._popper.style[d("transform")]="";this._removeEventListeners();if(this._options.removeOnDestroy)this._popper.remove();return this},e.prototype.update=function(){var e={instance:this,styles:{}};e.placement=this._options.placement;e._originalPlacement=this._options.placement;e.offsets=this._getOffsets(this._popper,this._reference,e.placement);e.boundaries=this._getBoundaries(e,this._options.boundariesPadding,this._options.boundariesElement);e=this.runModifiers(e,this._options.modifiers);if(typeof this.state.updateCallback==="function")this.state.updateCallback(e)},e.prototype.onCreate=function(e){e(this);return this},e.prototype.onUpdate=function(e){this.state.updateCallback=e;return this},e.prototype.parse=function(e){var t={tagName:"div",classNames:["popper"],attributes:[],parent:m.document.body,content:"",contentType:"text",arrowTagName:"div",arrowClassNames:["popper__arrow"],arrowAttributes:["x-arrow"]};e=Object.assign({},t,e);var i=m.document;var n=i.createElement(e.tagName);r(n,e.classNames);l(n,e.attributes);if(e.contentType==="node")n.appendChild(e.content.jquery?e.content[0]:e.content);else if(e.contentType==="html")n.innerHTML=e.content;else n.textContent=e.content;if(e.arrowTagName){var a=i.createElement(e.arrowTagName);r(a,e.arrowClassNames);l(a,e.arrowAttributes);n.appendChild(a)}var s=e.parent.jquery?e.parent[0]:e.parent;if(typeof s==="string"){s=i.querySelectorAll(e.parent);if(s.length>1)console.warn("WARNING: the given `parent` query("+e.parent+") matched more than one element, the first one will be used");if(s.length===0)throw"ERROR: the given `parent` doesn't exists!";s=s[0]}if(s.length>1&&s instanceof Element===false){console.warn("WARNING: you have passed as parent a list of elements, the first one will be used");s=s[0]}s.appendChild(n);return n;function r(t,e){e.forEach(function(e){t.classList.add(e)})}function l(t,e){e.forEach(function(e){t.setAttribute(e.split(":")[0],e.split(":")[1]||"")})}},e.prototype._getPosition=function(e,t){var i=b(t);if(this._options.forceAbsolute)return"absolute";var n=r(t,i);return n?"fixed":"absolute"},e.prototype._getOffsets=function(e,t,i){i=i.split("-")[0];var n={};n.position=this.state.position;var a=n.position==="fixed";var s=h(t,b(e),a);var r=v(e);if(["right","left"].indexOf(i)!==-1){n.top=s.top+s.height/2-r.height/2;if(i==="left")n.left=s.left-r.width;else n.left=s.right}else{n.left=s.left+s.width/2-r.width/2;if(i==="top")n.top=s.top-r.height;else n.top=s.bottom}n.width=r.width;n.height=r.height;return{popper:n,reference:s}},e.prototype._setupEventListeners=function(){this.state.updateBound=this.update.bind(this);m.addEventListener("resize",this.state.updateBound);if(this._options.boundariesElement!=="window"){var e=y(this._reference);if(e===m.document.body||e===m.document.documentElement)e=m;e.addEventListener("scroll",this.state.updateBound);this.state.scrollTarget=e}},e.prototype._removeEventListeners=function(){m.removeEventListener("resize",this.state.updateBound);if(this._options.boundariesElement!=="window"&&this.state.scrollTarget){this.state.scrollTarget.removeEventListener("scroll",this.state.updateBound);this.state.scrollTarget=null}this.state.updateBound=null},e.prototype._getBoundaries=function(e,t,i){var n={};var a,s;if(i==="window"){var r=m.document.body,l=m.document.documentElement;s=Math.max(r.scrollHeight,r.offsetHeight,l.clientHeight,l.scrollHeight,l.offsetHeight);a=Math.max(r.scrollWidth,r.offsetWidth,l.clientWidth,l.scrollWidth,l.offsetWidth);n={top:0,right:a,bottom:s,left:0}}else if(i==="viewport"){var o=b(this._popper);var c=y(this._popper);var u=x(o);var h=function(e){return e==document.body?Math.max(document.documentElement.scrollTop,document.body.scrollTop):e.scrollTop};var d=function(e){return e==document.body?Math.max(document.documentElement.scrollLeft,document.body.scrollLeft):e.scrollLeft};var p=e.offsets.popper.position==="fixed"?0:h(c);var f=e.offsets.popper.position==="fixed"?0:d(c);n={top:0-(u.top-p),right:m.document.documentElement.clientWidth-(u.left-f),bottom:m.document.documentElement.clientHeight-(u.top-p),left:0-(u.left-f)}}else if(b(this._popper)===i)n={top:0,left:0,right:i.clientWidth,bottom:i.clientHeight};else n=x(i);n.left+=t;n.right-=t;n.top=n.top+t;n.bottom=n.bottom-t;return n},e.prototype.runModifiers=function(t,e,i){var n=e.slice();if(i!==undefined)n=this._options.modifiers.slice(0,a(this._options.modifiers,i));n.forEach(function(e){if(o(e))t=e.call(this,t)}.bind(this));return t},e.prototype.isModifierRequired=function(e,t){var i=a(this._options.modifiers,e);return!!this._options.modifiers.slice(0,i).filter(function(e){return e===t}).length},(e.prototype.modifiers={}).applyStyle=function(e){var t={position:e.offsets.popper.position};var i=Math.round(e.offsets.popper.left);var n=Math.round(e.offsets.popper.top);var a;if(this._options.gpuAcceleration&&(a=d("transform"))){t[a]="translate3d("+i+"px, "+n+"px, 0)";t.top=0;t.left=0}else{t.left=i;t.top=n}Object.assign(t,e.styles);l(this._popper,t);this._popper.setAttribute("x-placement",e.placement);if(this.isModifierRequired(this.modifiers.applyStyle,this.modifiers.arrow)&&e.offsets.arrow)l(e.arrowElement,e.offsets.arrow);return e},e.prototype.modifiers.shift=function(e){var t=e.placement;var i=t.split("-")[0];var n=t.split("-")[1];if(n){var a=e.offsets.reference;var s=g(e.offsets.popper);var r={y:{start:{top:a.top},end:{top:a.top+a.height-s.height}},x:{start:{left:a.left},end:{left:a.left+a.width-s.width}}};var l=["bottom","top"].indexOf(i)!==-1?"x":"y";e.offsets.popper=Object.assign(s,r[l][n])}return e},e.prototype.modifiers.preventOverflow=function(t){var e=this._options.preventOverflowOrder;var i=g(t.offsets.popper);var n={left:function(){var e=i.left;if(i.left<t.boundaries.left)e=Math.max(i.left,t.boundaries.left);return{left:e}},right:function(){var e=i.left;if(i.right>t.boundaries.right)e=Math.min(i.left,t.boundaries.right-i.width);return{left:e}},top:function(){var e=i.top;if(i.top<t.boundaries.top)e=Math.max(i.top,t.boundaries.top);return{top:e}},bottom:function(){var e=i.top;if(i.bottom>t.boundaries.bottom)e=Math.min(i.top,t.boundaries.bottom-i.height);return{top:e}}};e.forEach(function(e){t.offsets.popper=Object.assign(i,n[e]())});return t},e.prototype.modifiers.keepTogether=function(e){var t=g(e.offsets.popper);var i=e.offsets.reference;var n=Math.floor;if(t.right<n(i.left))e.offsets.popper.left=n(i.left)-t.width;if(t.left>n(i.right))e.offsets.popper.left=n(i.right);if(t.bottom<n(i.top))e.offsets.popper.top=n(i.top)-t.height;if(t.top>n(i.bottom))e.offsets.popper.top=n(i.bottom);return e},e.prototype.modifiers.flip=function(a){if(!this.isModifierRequired(this.modifiers.flip,this.modifiers.preventOverflow)){console.warn("WARNING: preventOverflow modifier is required by flip modifier in order to work, be sure to include it before flip!");return a}if(a.flipped&&a.placement===a._originalPlacement)return a;var s=a.placement.split("-")[0];var r=c(s);var l=a.placement.split("-")[1]||"";var o=[];if(this._options.flipBehavior==="flip")o=[s,r];else o=this._options.flipBehavior;o.forEach(function(e,t){if(s!==e||o.length===t+1)return;s=a.placement.split("-")[0];r=c(s);var i=g(a.offsets.popper);var n=["right","bottom"].indexOf(s)!==-1;if(n&&Math.floor(a.offsets.reference[s])>Math.floor(i[r])||!n&&Math.floor(a.offsets.reference[s])<Math.floor(i[r])){a.flipped=true;a.placement=o[t+1];if(l)a.placement+="-"+l;a.offsets.popper=this._getOffsets(this._popper,this._reference,a.placement).popper;a=this.runModifiers(a,this._options.modifiers,this._flip)}}.bind(this));return a},e.prototype.modifiers.offset=function(e){var t=this._options.offset;var i=e.offsets.popper;if(e.placement.indexOf("left")!==-1)i.top-=t;else if(e.placement.indexOf("right")!==-1)i.top+=t;else if(e.placement.indexOf("top")!==-1)i.left-=t;else if(e.placement.indexOf("bottom")!==-1)i.left+=t;return e},e.prototype.modifiers.arrow=function(e){var t=this._options.arrowElement;var i=this._options.arrowOffset;if(typeof t==="string")t=this._popper.querySelector(t);if(!t)return e;if(!this._popper.contains(t)){console.warn("WARNING: `arrowElement` must be child of its popper element!");return e}if(!this.isModifierRequired(this.modifiers.arrow,this.modifiers.keepTogether)){console.warn("WARNING: keepTogether modifier is required by arrow modifier in order to work, be sure to include it before arrow!");return e}var n={};var a=e.placement.split("-")[0];var s=g(e.offsets.popper);var r=e.offsets.reference;var l=["left","right"].indexOf(a)!==-1;var o=l?"height":"width";var c=l?"top":"left";var u=l?"translateY":"translateX";var h=l?"left":"top";var d=l?"bottom":"right";var p=v(t)[o];if(r[d]-p<s[c])e.offsets.popper[c]-=s[c]-(r[d]-p);if(r[c]+p>s[d])e.offsets.popper[c]+=r[c]+p-s[d];var f=r[c]+(i||r[o]/2-p/2);var m=f-s[c];m=Math.max(Math.min(s[o]-p-8,m),8);n[c]=m;n[h]="";e.offsets.arrow=n;e.arrowElement=t;return e},!Object.assign)Object.defineProperty(Object,"assign",{enumerable:false,configurable:true,writable:true,value:function(e){if(e===undefined||e===null)throw new TypeError("Cannot convert first argument to object");var t=Object(e);for(var i=1;i<arguments.length;i++){var n=arguments[i];if(n===undefined||n===null)continue;n=Object(n);var a=Object.keys(n);for(var s=0,r=a.length;s<r;s++){var l=a[s];var o=Object.getOwnPropertyDescriptor(n,l);if(o!==undefined&&o.enumerable)t[l]=n[l]}}return t}});return e})?n.call(t,i,t,e):n)&&(e.exports=i)},function(e,t,i){"use strict";var n=i(42),a=i(43);function s(e){var t=0,i=0,n=0,a=0;return"detail"in e&&(i=e.detail),"wheelDelta"in e&&(i=-e.wheelDelta/120),"wheelDeltaY"in e&&(i=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=i,i=0),n=10*t,a=10*i,"deltaY"in e&&(a=e.deltaY),((n="deltaX"in e?e.deltaX:n)||a)&&e.deltaMode&&(1==e.deltaMode?(n*=40,a*=40):(n*=800,a*=800)),{spinX:t=n&&!t?n<1?-1:1:t,spinY:i=a&&!i?a<1?-1:1:i,pixelX:n,pixelY:a}}s.getEventType=function(){return n.firefox()?"DOMMouseScroll":a("wheel")?"wheel":"mousewheel"},e.exports=s},function(e,t){var a,s,r,l,o,c,u,h,d,p,f,m,v,g,b,y=!1;function i(){var e,t,i,n;y||(y=!0,e=navigator.userAgent,t=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(e),i=/(Mac OS X)|(Windows)|(Linux)/.exec(e),m=/\b(iPhone|iP[ao]d)/.exec(e),v=/\b(iP[ao]d)/.exec(e),p=/Android/i.exec(e),g=/FBAN\/\w+;/i.exec(e),b=/Mobile/i.exec(e),f=!!/Win64/.exec(e),t?((a=t[1]?parseFloat(t[1]):t[5]?parseFloat(t[5]):NaN)&&document&&document.documentMode&&(a=document.documentMode),n=/(?:Trident\/(\d+.\d+))/.exec(e),c=n?parseFloat(n[1])+4:a,s=t[2]?parseFloat(t[2]):NaN,r=t[3]?parseFloat(t[3]):NaN,l=t[4]?parseFloat(t[4]):NaN,o=l&&(t=/(?:Chrome\/(\d+\.\d+))/.exec(e))&&t[1]?parseFloat(t[1]):NaN):a=s=r=o=l=NaN,i?(u=!!i[1]&&(!(n=/(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e))||parseFloat(n[1].replace("_","."))),h=!!i[2],d=!!i[3]):u=h=d=!1)}var n={ie:function(){return i(),a},ieCompatibilityMode:function(){return i(),a<c},ie64:function(){return n.ie()&&f},firefox:function(){return i(),s},opera:function(){return i(),r},webkit:function(){return i(),l},safari:function(){return n.webkit()},chrome:function(){return i(),o},windows:function(){return i(),h},osx:function(){return i(),u},linux:function(){return i(),d},iphone:function(){return i(),m},mobile:function(){return(i(),m)||v||p||b},nativeApp:function(){return i(),g},android:function(){return i(),p},ipad:function(){return i(),v}};e.exports=n},function(e,t,i){"use strict";var a,s=i(44);s.canUseDOM&&(a=document.implementation&&document.implementation.hasFeature&&!0!==document.implementation.hasFeature("",""))
/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @param {?boolean} capture Check if the capture phase is supported.
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */,e.exports=function(e,t){var i,n;return!(!s.canUseDOM||t&&!("addEventListener"in document))&&((i=(t="on"+e)in document)||((n=document.createElement("div")).setAttribute(t,"return;"),i="function"==typeof n[t]),!i&&a&&"wheel"===e?document.implementation.hasFeature("Events.wheel","3.0"):i)}},function(e,t,i){"use strict";var n=!("undefined"==typeof window||!window.document||!window.document.createElement),n={canUseDOM:n,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:n&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:n&&!!window.screen,isInWorker:!n};e.exports=n},function(e,t){function r(e){this.i=[],this.m=e}function y(e){var t,i={type:null,target:null,addedNodes:[],removedNodes:[],previousSibling:null,nextSibling:null,attributeName:null,attributeNamespace:null,oldValue:null};for(t in e)i[t]!==_&&e[t]!==_&&(i[t]=e[t]);return i}function l(n,a){var s=o(n,a);return function(e){var t,f,m,v,i=e.length;function g(e,t,i,n,a){var s,r,l,o=e.length-1;for(a=-~((o-a)/2);l=e.pop();)s=i[l.j],r=n[l.l],m.c&&a&&Math.abs(l.j-l.l)>=o&&(f.push(y({type:"childList",target:t,addedNodes:[s],removedNodes:[s],nextSibling:s.nextSibling,previousSibling:s.previousSibling})),a--),m.b&&r.b&&x(f,s,r.b,m.f),m.a&&3===s.nodeType&&s.nodeValue!==r.a&&f.push(y({type:"characterData",target:s,oldValue:r.a})),m.g&&b(s,r)}function b(e,t){for(var i,n,a,s,r,l=e.childNodes,o=t.c,c=l.length,u=o?o.length:0,h=0,d=0,p=0;d<c||p<u;)(s=l[d])===(r=(a=o[p])&&a.node)?(m.b&&a.b&&x(f,s,a.b,m.f),m.a&&a.a!==_&&s.nodeValue!==a.a&&f.push(y({type:"characterData",target:s,oldValue:a.a})),n&&g(n,e,l,o,h),m.g&&(s.childNodes.length||a.c&&a.c.length)&&b(s,a),d++,p++):(v=!0,i||(i={},n=[]),s&&(i[a=w(s)]||(i[a]=!0,-1===(a=C(o,s,p,"node"))?m.c&&(f.push(y({type:"childList",target:e,addedNodes:[s],nextSibling:s.nextSibling,previousSibling:s.previousSibling})),h++):n.push({j:d,l:a})),d++),r&&r!==l[d]&&(i[a=w(r)]||(i[a]=!0,-1===(a=C(l,r,d))?m.c&&(f.push(y({type:"childList",target:t.node,removedNodes:[r],nextSibling:o[p+1],previousSibling:o[p-1]})),h--):n.push({j:a,l:p})),p++));n&&g(n,e,l,o,h)}a.a&&3===n.nodeType&&n.nodeValue!==s.a&&e.push(new y({type:"characterData",target:n,oldValue:s.a})),a.b&&s.b&&x(e,n,s.b,a.f),(a.c||a.g)&&(f=e,m=a,b(n,s),t=v),!t&&e.length===i||(s=o(n,a))}}function x(e,t,i,n){for(var a,s,r={},l=t.attributes,o=l.length;o--;)s=(a=l[o]).name,n&&n[s]===_||(u(t,a)!==i[s]&&e.push(y({type:"attributes",target:t,attributeName:s,oldValue:i[s],attributeNamespace:a.namespaceURI})),r[s]=!0);for(s in i)r[s]||e.push(y({target:t,type:"attributes",attributeName:s,oldValue:i[s]}))}function o(e,n){var a=!0;return function e(i){var t={node:i};return!n.a||3!==i.nodeType&&8!==i.nodeType?(n.b&&a&&1===i.nodeType&&(t.b=c(i.attributes,function(e,t){return n.f&&!n.f[t.name]||(e[t.name]=u(i,t)),e},{})),a&&(n.c||n.a||n.b&&n.g)&&(t.c=function(e,t){for(var i=[],n=0;n<e.length;n++)i[n]=t(e[n],n,e);return i}(i.childNodes,e)),a=n.g):t.a=i.nodeValue,t}(e)}function w(t){try{return t.id||(t.mo_id=t.mo_id||n++)}catch(e){try{return t.nodeValue}catch(e){return n++}}}function c(e,t,i){for(var n=0;n<e.length;n++)i=t(i,e[n],n,e);return i}function C(e,t,i,n){for(;i<e.length;i++)if((n?e[i][n]:e[i])===t)return i;return-1}var _,i,u,n;window.MutationObserver||(window.MutationObserver=(_=void 0,r._period=30,r.prototype={observe:function(e,t){for(var i,n={b:!!(t.attributes||t.attributeFilter||t.attributeOldValue),c:!!t.childList,g:!!t.subtree,a:!(!t.characterData&&!t.characterDataOldValue)},a=this.i,s=0;s<a.length;s++)a[s].s===e&&a.splice(s,1);t.attributeFilter&&(n.f=c(t.attributeFilter,function(e,t){return e[t]=!0,e},{})),a.push({s:e,o:l(e,n)}),this.h||(i=this,function e(){var t=i.takeRecords();t.length&&i.m(t,i),i.h=setTimeout(e,r._period)}())},takeRecords:function(){for(var e=[],t=this.i,i=0;i<t.length;i++)t[i].o(e);return e},disconnect:function(){this.i=[],clearTimeout(this.h),this.h=null}},(i=document.createElement("i")).style.top=0,u=(i="null"!=i.attributes.style.value)?function(e,t){return t.value}:function(e,t){return"style"!==t.name?t.value:e.style.cssText},n=1,r))}]);