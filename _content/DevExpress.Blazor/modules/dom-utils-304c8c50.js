import{b as t,d as e}from"./dom-25ebd160.js";import{C as n}from"./css-classes-f3f8ed66.js";let o=-1;function i(){return function(){if(o>-1)return o;const t=document.createElement("DIV");t.style.cssText="position: absolute; top: 0px; left: 0px; visibility: hidden; width: 200px; height: 150px; overflow: hidden; box-sizing: content-box",document.body.appendChild(t);const e=document.createElement("P");t.appendChild(e),e.style.cssText="width: 100%; height: 200px;";const n=e.offsetWidth;t.style.overflow="scroll";let i=e.offsetWidth;return n===i&&(i=t.clientWidth),o=(n-i)*window.devicePixelRatio,document.body.removeChild(t),o}()/window.devicePixelRatio}function r(e){return t.Browser.IE?function(e){return null==e||t.Browser.IE&&null==e.parentNode?0:e.getBoundingClientRect().left+mt()}(e):t.Browser.Firefox&&t.Browser.Version>=3||t.Browser.WebKitFamily||t.Browser.Edge?s(e):window.getAbsolutePositionX_Other(e)}function s(t){if(null==t)return 0;return t.getBoundingClientRect().left+mt()}function l(e){return t.Browser.IE?function(e){return null==e||t.Browser.IE&&null==e.parentNode?0:e.getBoundingClientRect().top+ht()}(e):t.Browser.Firefox&&t.Browser.Version>=3||t.Browser.WebKitFamily||t.Browser.Edge?u(e):window.getAbsolutePositionY_Other(e)}function u(t){if(null==t)return 0;return t.getBoundingClientRect().top+ht()}function c(t,e,n){return t-=f(e,n)}function a(t,n){const o=function(t){const n=document.createElement("DIV");return n.style.top="0px",n.style.left="0px",n.visibility="hidden",n.style.position=e.DomUtils.getCurrentStyle(t).position,n}(t);"static"===o.style.position&&(o.style.position="absolute"),t.parentNode.appendChild(o);const i=n?r(o):function(t){return l(t)}(o);return t.parentNode.removeChild(o),i}function f(t,e){return a(t,e)}function d(t,e){try{let n;const o=m(t);if(!o){const e=h(t);if(!e)return!1;n=e.split(" ")}const i=e.split(" ");for(let t=i.length-1;t>=0;t--)if(o){if(-1===o.indexOf(i[t]))return!1}else if(n.indexOf(i[t])<0)return!1;return!0}catch(t){return!1}}function m(t){return t.classList?[].slice.call(t.classList):h(t).replace(/^\s+|\s+$/g,"").split(/\s+/)}function h(t){return"svg"===t.tagName?t.className.baseVal:t.className}function g(t,e){return e||(e=0),null!=t&&t.length>e?t[e]:null}function p(e,n,o){if(null!=e){const i=function(e,n){const o=n.toUpperCase();let i=null;return e&&(e.getElementsByTagName?(i=e.getElementsByTagName(o),0===i.length&&(i=e.getElementsByTagName(n))):e.all&&void 0!==e.all.tags&&(i=t.Browser.Netscape?e.all.tags[o]:e.all.tags(o))),i}(e,n);return g(i,o)}return null}let y=null;function w(){return y||(y=function(t){if(!t.createStyleSheet){const e=t.createElement("STYLE");return p(t,"HEAD",0).appendChild(e),e.sheet}try{return t.createStyleSheet()}catch(t){throw new Error("The CSS link limit (31) has been exceeded. Please enable CSS merging or reduce the number of CSS files on the page. For details, see http://www.devexpress.com/Support/Center/p/K18487.aspx.")}}(document)),y}function b(t,e,n){for(;null!=t;){if("BODY"===t.tagName||"#document"===t.nodeName)return null;if(n(t,e))return t;t=t.parentNode}return null}function S(t,e,n){return b(t,e,n)}function C(t,e){return b(t,e,d)}function E(t,e){const n=[];for(let o=0;o<t.length;o++){const i=t[o];e&&!e(i)||n.push(i)}return n}function I(t){"string"==typeof t&&(t=document.querySelector(t)),t&&t.focus()}function B(t,e,n){t&&(t[e]=n)}function N(t,e){t&&(t.indeterminate=e)}function O(){document.getSelection().removeAllRanges()}function T(t){if(!t)return null;let e=null;if("string"==typeof t){const n=document.querySelector("#"+t);if(n)t=n;else try{const n=JSON.parse(t);n&&n.__internalId&&(e=n.__internalId)}catch(t){}}if(!e&&t.__internalId&&(e=t.__internalId),e){t=document.querySelector("["+("_bl_"+e)+"]")}return t&&t.tagName&&null!==t.parentNode||(t=null),t}function x(t,e,n){(t=T(t))&&B(t,e,n)}function D(t,e){t.dataset.tempUniqueId="tempUniqueId";try{e("[data-temp-unique-id]")}catch(t){}finally{delete t.dataset.tempUniqueId}}function P(t,e){t.removeAttribute?t.removeAttribute(e):t.removeProperty&&t.removeProperty(e)}function F(t,e,n){n?B(t,e,n):P(t,e)}function v(t,n){const o=n||e.DomUtils.getCurrentStyle(t);return e.DomUtils.pxToInt(o.marginLeft)+e.DomUtils.pxToInt(o.marginRight)}function _(t,e){return A(t,e)+L(t,e)}function W(t,e){return R(t,e)+U(t,e)}function A(t,n){const o=n||e.DomUtils.getCurrentStyle(t);return parseInt(o.paddingLeft)+parseInt(o.paddingRight)}function R(t,n){const o=n||e.DomUtils.getCurrentStyle(t);return parseInt(o.paddingTop)+parseInt(o.paddingBottom)}function U(n,o){o||(o=t.Browser.IE&&9!==t.Browser.MajorVersion&&window.getComputedStyle?window.getComputedStyle(n):e.DomUtils.getCurrentStyle(n));let i=0;return"none"!==o.borderTopStyle&&(i+=parseFloat(o.borderTopWidth)),"none"!==o.borderBottomStyle&&(i+=parseFloat(o.borderBottomWidth)),i}function L(n,o){o||(o=t.Browser.IE&&window.getComputedStyle?window.getComputedStyle(n):e.DomUtils.getCurrentStyle(n));let i=0;return"none"!==o.borderLeftStyle&&(i+=parseFloat(o.borderLeftWidth)),"none"!==o.borderRightStyle&&(i+=parseFloat(o.borderRightWidth)),i}const H=window.requestAnimationFrame||function(t){t()},q=window.cancelAnimationFrame||function(t){};function M(t){return H(t)}const V=function(t){this.requestFrame=t,this.cache=[[]],this.isInFrame=!1,this.frameTimestamp=null,this.isWaiting=!1,this.getBuffer=function(t){return t||(t=0),this.cache.length<=t&&(this.cache[t]=[]),this.cache[t]},this.execute=function(t,e){if(!this.isInFrame)return!1;let n=this.cache[e||0];return null===n?t(j,this.frameTimestamp):(n=this.getBuffer(e)).push(t),!0},this.runAll=function(t){this.isWaiting=!1,this.isInFrame=!0,this.frameTimestamp=t;for(let t=0;t<this.cache.length;t++){const e=this.cache[t];if(e)for(this.cache[t]=null;e.length;)e.shift()(j,this.frameTimestamp)}this.waitNextFrame()},this.waitNextFrame=function(){this.cache=[[]],this.isInFrame=!1,this.isWaiting=!1},this.requestExecution=function(t,e){const n=this;return new Promise((function(o){function i(e,n){o(t(e,n))}n.execute(i,e)||(n.getBuffer(e).push(i),!1===n.isWaiting&&(n.isWaiting=!0,n.requestFrame(n.runAll.bind(n))))}))}};let j=null;function K(t){const e=new V(t);return e.requestExecution.bind(e)}const Y=K((function(t){return j=M(t)})),z=K((function(t){return Y((function(){setTimeout(t)}))}));function k(t){return Y(t)}function X(t){return z(t)}let J=[];const G=50;function $(t){J.splice(J.indexOf(t),1)}function Q(t,n,o){const i=function(t,n,o,i){return function(){if(t.compareDocumentPosition(document.body)&window.Node.DOCUMENT_POSITION_DISCONNECTED)return!1;const r=e.DomUtils.getCurrentStyle(t);if("auto"===r.width)return!0;const s=parseInt(r.width)-_(t);return o!==s&&n(o=s,i&&i.clientHeight),!0}}(t,n,-1,o);return ot(i),i}function Z(t,n){const o=function(t,n,o){return function(){if(t.compareDocumentPosition(document.body)&window.Node.DOCUMENT_POSITION_DISCONNECTED)return!1;const i=e.DomUtils.getCurrentStyle(t);if("auto"===i.width)return!0;const r=Math.ceil(parseFloat(i.width))-_(t),s=Math.ceil(parseFloat(i.height))-W(t);return o.width===r&&o.height===s||(o.width=r,o.height=s,n(o)),!0}}(t,n,{width:-1,height:-1});return ot(o),o}function tt(t,e){const n=function(t,e){let n=t.scrollHeight>t.clientHeight;return function(){if(t.compareDocumentPosition(document.body)&window.Node.DOCUMENT_POSITION_DISCONNECTED)return!1;const o=t.scrollHeight>t.clientHeight;return o!==n&&(e(o),n=o),!0}}(t,e);return ot(n),n}function et(t){const e=function(t){let e=-1;return function(){const n=i();return e!==n&&(t(n),e=n),!0}}(t);return ot(e),e}function nt(t,e){ot(function(t,e){return function(){return!(t.compareDocumentPosition(document.body)&window.Node.DOCUMENT_POSITION_DISCONNECTED&&(e(),1))}}(t,e))}function ot(t){0===J.length?(J.push(t),X(it)):J.push(t)}function it(){J=J.filter((function(t){return t()})),J.length>0&&setTimeout((function(){X(it)}),G)}function rt(t,e){const n=[];for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.push({attr:t,value:e[t]});if(1===n.length)t.style[n[0].attr]=n[0].value;else{let o="";if(t.style.cssText){const n=t.style.cssText.split(";").map((function(t){return t.trim().split(":")}));for(let t=0;t<n.length;t++){const i=n[t];2===i.length&&void 0===e[i[0]]&&(o+=i[0]+":"+i[1].trim()+";")}}for(let t=0;t<n.length;t++){const e=n[t];""!==e.value&&(o+=e.attr+":"+e.value+";")}F(t,"style",o)}}function st(t){return{inlineStyles:{},cssClassToggleInfo:{},className:h(t),attributes:{}}}function lt(t,e){if(void 0!==t.length){for(let n=0;n<t.length;n++)lt(t[n],e);return}const n=t;n._dxCurrentFrameElementStateInfo?e(n._dxCurrentFrameElementStateInfo):(e(n._dxCurrentFrameElementStateInfo=st(n)),k((function(){!function(t,e){null===e.inlineStyles?P(t,"style"):rt(t,e.inlineStyles);for(const n in e.attributes)Object.prototype.hasOwnProperty.call(e,n)&&F(t,n,e.attributes[n]);const n=m(e);if(n){const o=e.cssClassToggleInfo,i=n.filter((function(t){return!1!==o[t]}));for(const t in o)Object.prototype.hasOwnProperty.call(o,t)&&o[t]&&-1===i.indexOf(t)&&i.push(t);const r=i.join(" ");r?function(t,e){"svg"===t.tagName?t.className.baseVal=e.trim():t.className=e.trim()}(t,r):P(t,"class")}}(n,n._dxCurrentFrameElementStateInfo),n._dxCurrentFrameElementStateInfo=null})))}function ut(t,e){lt(t,(function(t){if(null===t.inlineStyles)t.inlineStyles=e;else for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t.inlineStyles[n]=e[n])}))}function ct(t){lt(t,(function(t){t.inlineStyles=null,t.cssClassToggleInfo[n.InvisibleOffScreen]=!1}))}function at(t,e,n){lt(t,(function(t){t.cssClassToggleInfo[e]=n}))}function ft(t){return document.body.contains(t)}function dt(t,e){if(!t)return null;if(t.closest)return t.closest(e);do{if((t.matches||t.msMatchesSelector).call(t,e))return t;t=t.parentElement||t.parentNode}while(t&&"BODY"!==t.tagName);return null}function mt(){return t.Browser.Edge?document.body?document.body.scrollLeft:document.documentElement.scrollLeft:t.Browser.WebKitFamily?document.documentElement.scrollLeft||document.body.scrollLeft:document.documentElement.scrollLeft}function ht(){return t.Browser.WebKitFamily||t.Browser.Edge?t.Browser.MacOSMobilePlatform?window.pageYOffset:t.Browser.WebKitFamily&&document.documentElement.scrollTop||document.body.scrollTop:document.documentElement.scrollTop}function gt(t){if(t.attributes)for(let e=0;e<t.attributes.length;e++){const n=t.attributes[e].name;(n.startsWith("_bl_")||n.startsWith("id"))&&t.removeAttribute(n)}t.childNodes.forEach((t=>{gt(t)}))}function pt(t){return t+"px"}function yt(t){return Boolean(t.compareDocumentPosition(document.body)&window.Node.DOCUMENT_POSITION_DISCONNECTED)}function wt(t){if(!t.style)return!1;return function(t){return"static"!==t.position||function(t){return!("none"===t.transform&&!t["will-change"].includes("transform"))||(!("none"===t.perspective&&!t["will-change"].includes("perspective"))||(!("none"===t.filter&&!t["will-change"].includes("filter"))||!!t.contain?.includes("paint")))}(t)}(window.getComputedStyle(t))}function bt(t){return"svg"===t.tagName?t.getBoundingClientRect().width:t.offsetWidth}const St=Object.freeze({__proto__:null,getDocumentClientWidth:function(){return 0===document.documentElement.clientWidth?document.body.clientWidth:document.documentElement.clientWidth},getDocumentClientHeight:function(){return t.Browser.Firefox&&window.innerHeight-document.documentElement.clientHeight>i()?window.innerHeight:t.Browser.Opera&&t.Browser.Version<9.6||0===document.documentElement.clientHeight?document.body.clientHeight:document.documentElement.clientHeight},setAbsoluteX:function(t,e){t.style.left=c(e,t,!0)+"px"},setAbsoluteY:function(t,e){t.style.top=c(e,t,!1)+"px"},getAbsolutePositionX:r,getAbsolutePositionY:l,prepareClientPosForElement:c,getPositionElementOffset:f,elementHasCssClass:d,getItemByIndex:g,getCurrentStyleSheet:w,getParentByPredicate:S,getParentByClassName:C,retrieveByPredicate:E,focusElement:I,setAttribute:B,setCheckInputIndeterminate:N,removeSelection:O,log:function(t){},ensureElement:T,setInputAttribute:x,querySelectorFromRoot:D,setOrRemoveAttribute:F,getLeftRightMargins:v,getLeftRightBordersAndPaddingsSummaryValue:_,getTopBottomBordersAndPaddingsSummaryValue:W,getLeftRightPaddings:A,getTopBottomPaddings:R,getVerticalBordersWidth:U,getHorizontalBordersWidth:L,CancelAnimationFrame:function(t){q(t)},RequestAnimationFrame:M,changeDom:k,calculateStyles:X,unsubscribeElement:$,subscribeElementContentWidth:Q,subscribeElementContentSize:Z,subscribeElementVerticalScrollBarVisibility:tt,subscribeElementVerticalScrollBarWidth:et,subscribeElementDisconnected:nt,applyStyles:rt,createElementState:st,setStyles:ut,clearStyles:ct,toggleCssClass:at,setCssClassName:function(t,e){lt(t,(function(t){t.cssClassToggleInfo={},t.className=e}))},elementIsInDOM:ft,findParentBySelector:dt,getDocumentScrollLeft:mt,getDocumentScrollTop:ht,eraseBlazorIdentificators:gt,toPx:pt,isRemovedFromDOM:yt,isContainingBlockForAbsolutelyPositionedElement:wt,getElementOffsetWidth:bt,default:{focusElement:I,setInputAttribute:x,setCheckInputIndeterminate:N}});export{gt as A,Q as B,E as C,S as D,X as E,bt as F,v as G,c as H,g as I,L as J,F as K,d as L,St as M,M as R,ct as a,i as b,k as c,C as d,T as e,Z as f,w as g,ft as h,wt as i,B as j,yt as k,dt as l,ht as m,mt as n,_ as o,W as p,D as q,O as r,ut as s,at as t,$ as u,tt as v,et as w,nt as x,A as y,pt as z};
