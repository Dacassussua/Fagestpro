import{d as e}from"./dom-25ebd160.js";import{t}from"./touch-db2033c5.js";import{d as n,r as o}from"./disposable-d2c2d283.js";import"./_tslib-6e8ca86b.js";function s(n){let o=n;function s(t){o&&o.contains(t.srcElement)&&e.DomUtils.addClassName(o,"dxbs-focus-hidden")}function d(t){if(!o)return;const n=t.relatedTarget;n&&!o.contains(n)&&document.hasFocus()&&e.DomUtils.removeClassName(o,"dxbs-focus-hidden")}function i(t){o&&9===t.keyCode&&e.DomUtils.removeClassName(o,"dxbs-focus-hidden")}const u=document.documentElement;return u.addEventListener(t.TouchUtils.touchMouseDownEventName,s),o.addEventListener("keydown",i),o.addEventListener("focusout",d),()=>{u.removeEventListener(t.TouchUtils.touchMouseDownEventName,s,!0),null==o||o.removeEventListener("keydown",i,!0),null==o||o.removeEventListener("focusout",d),o=null}}function d(e){if(!e)return;n(e);const t=s(e);o(e,t)}const i={initFocusHidingEvents:d};export{s as attachEventsForFocusHiding,i as default,d as initFocusHidingEvents};
