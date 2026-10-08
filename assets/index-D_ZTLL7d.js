const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Dashboard-BGIakdij.js","assets/mseeageStore-CBOXOrhJ.js","assets/AdminProducts-8_M2aVlU.js","assets/DeleteModal-8_gJcmD-.js","assets/AdminCoupons-BsUnfkrl.js","assets/AdminOrders-DTsQIP74.js"])))=>i.map(i=>d[i]);
var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},c=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},l=(n,r,o)=>(o=n==null?{}:e(i(n)),c(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var u=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,ee||(ee=!0,T());else{var t=n(l);t!==null&&D(x,t.startTime-e)}}}var ee=!1,S=-1,C=5,w=-1;function te(){return g?!0:!(e.unstable_now()-w<C)}function ne(){if(g=!1,ee){var t=e.unstable_now();w=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(S),S=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&te());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&D(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}}}finally{i?T():ee=!1}}}var T;if(typeof y==`function`)T=function(){y(ne)};else if(typeof MessageChannel<`u`){var re=new MessageChannel,E=re.port2;re.port1.onmessage=ne,T=function(){E.postMessage(null)}}else T=function(){_(ne,0)};function D(t,n){S=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):C=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(S),S=-1):h=!0,D(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee||(ee=!0,T()))),r},e.unstable_shouldYield=te,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),d=o(((e,t)=>{t.exports=u()})),f=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var ee=Array.isArray;function S(){}var C={H:null,A:null,T:null,S:null},w=Object.prototype.hasOwnProperty;function te(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ne(e,t){return te(e.type,t,e.props)}function T(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function re(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var E=/\/+/g;function D(e,t){return typeof e==`object`&&e&&e.key!=null?re(``+e.key):t.toString(36)}function O(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(S,S):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ie(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ie(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+D(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(E,`$&/`)+`/`),ie(o,r,i,``,function(e){return e})):o!=null&&(T(o)&&(o=ne(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(E,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+D(a,u),c+=ie(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+D(a,u++),c+=ie(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ie(O(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ae(e,t,n){if(e==null)return e;var r=[],i=0;return ie(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function oe(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var k=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},A={map:ae,forEach:function(e,t,n){ae(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ae(e,function(){t++}),t},toArray:function(e){return ae(e,function(e){return e})||[]},only:function(e){if(!T(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=A,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return C.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!w.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return te(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)w.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return te(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=T,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:oe}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=C.T,n={};C.T=n;try{var r=e(),i=C.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(S,k)}catch(e){k(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),C.T=t}},e.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},e.use=function(e){return C.H.use(e)},e.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},e.useCallback=function(e,t){return C.H.useCallback(e,t)},e.useContext=function(e){return C.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return C.H.useEffect(e,t)},e.useEffectEvent=function(e){return C.H.useEffectEvent(e)},e.useId=function(){return C.H.useId()},e.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return C.H.useMemo(e,t)},e.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},e.useRef=function(e){return C.H.useRef(e)},e.useState=function(e){return C.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return C.H.useTransition()},e.version=`19.2.8`})),p=o(((e,t)=>{t.exports=f()})),m=o((e=>{var t=p();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.8`})),h=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=m()})),g=o((e=>{var t=d(),n=p(),r=h();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function u(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function f(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=f(e),t!==null)return t;e=e.sibling}return null}var m=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),ee=Symbol.for(`react.consumer`),S=Symbol.for(`react.context`),C=Symbol.for(`react.forward_ref`),w=Symbol.for(`react.suspense`),te=Symbol.for(`react.suspense_list`),ne=Symbol.for(`react.memo`),T=Symbol.for(`react.lazy`),re=Symbol.for(`react.activity`),E=Symbol.for(`react.memo_cache_sentinel`),D=Symbol.iterator;function O(e){return typeof e!=`object`||!e?null:(e=D&&e[D]||e[`@@iterator`],typeof e==`function`?e:null)}var ie=Symbol.for(`react.client.reference`);function ae(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ie?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case w:return`Suspense`;case te:return`SuspenseList`;case re:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case S:return e.displayName||`Context`;case ee:return(e._context.displayName||`Context`)+`.Consumer`;case C:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ne:return t=e.displayName||null,t===null?ae(e.type)||`Memo`:t;case T:t=e._payload,e=e._init;try{return ae(e(t))}catch{}}return null}var oe=Array.isArray,k=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,se={pending:!1,data:null,method:null,action:null},ce=[],le=-1;function ue(e){return{current:e}}function j(e){0>le||(e.current=ce[le],ce[le]=null,le--)}function M(e,t){le++,ce[le]=e.current,e.current=t}var de=ue(null),fe=ue(null),pe=ue(null),me=ue(null);function he(e,t){switch(M(pe,t),M(fe,e),M(de,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}j(de),M(de,e)}function ge(){j(de),j(fe),j(pe)}function _e(e){e.memoizedState!==null&&M(me,e);var t=de.current,n=Hd(t,e.type);t!==n&&(M(fe,e),M(de,n))}function ve(e){fe.current===e&&(j(de),j(fe)),me.current===e&&(j(me),Qf._currentValue=se)}var ye,be;function xe(e){if(ye===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);ye=t&&t[1]||``,be=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+ye+e+be}var Se=!1;function Ce(e,t){if(!e||Se)return``;Se=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Se=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?xe(n):``}function we(e,t){switch(e.tag){case 26:case 27:case 5:return xe(e.type);case 16:return xe(`Lazy`);case 13:return e.child!==t&&t!==null?xe(`Suspense Fallback`):xe(`Suspense`);case 19:return xe(`SuspenseList`);case 0:case 15:return Ce(e.type,!1);case 11:return Ce(e.type.render,!1);case 1:return Ce(e.type,!0);case 31:return xe(`Activity`);default:return``}}function Te(e){try{var t=``,n=null;do t+=we(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Ee=Object.prototype.hasOwnProperty,De=t.unstable_scheduleCallback,Oe=t.unstable_cancelCallback,ke=t.unstable_shouldYield,Ae=t.unstable_requestPaint,je=t.unstable_now,Me=t.unstable_getCurrentPriorityLevel,Ne=t.unstable_ImmediatePriority,Pe=t.unstable_UserBlockingPriority,Fe=t.unstable_NormalPriority,Ie=t.unstable_LowPriority,Le=t.unstable_IdlePriority,Re=t.log,ze=t.unstable_setDisableYieldValue,Be=null,Ve=null;function He(e){if(typeof Re==`function`&&ze(e),Ve&&typeof Ve.setStrictMode==`function`)try{Ve.setStrictMode(Be,e)}catch{}}var Ue=Math.clz32?Math.clz32:Ke,We=Math.log,Ge=Math.LN2;function Ke(e){return e>>>=0,e===0?32:31-(We(e)/Ge|0)|0}var qe=256,Je=262144,Ye=4194304;function Xe(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ze(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Xe(n))):i=Xe(o):i=Xe(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Xe(n))):i=Xe(o)):i=Xe(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function Qe(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function $e(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function et(){var e=Ye;return Ye<<=1,!(Ye&62914560)&&(Ye=4194304),e}function tt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function nt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function rt(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ue(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&it(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function it(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ue(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function at(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ue(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function ot(e,t){var n=t&-t;return n=n&42?1:st(n),(n&(e.suspendedLanes|t))===0?n:0}function st(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ct(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function lt(){var e=A.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function ut(e,t){var n=A.p;try{return A.p=e,t()}finally{A.p=n}}var dt=Math.random().toString(36).slice(2),ft=`__reactFiber$`+dt,pt=`__reactProps$`+dt,mt=`__reactContainer$`+dt,ht=`__reactEvents$`+dt,gt=`__reactListeners$`+dt,_t=`__reactHandles$`+dt,vt=`__reactResources$`+dt,yt=`__reactMarker$`+dt;function bt(e){delete e[ft],delete e[pt],delete e[ht],delete e[gt],delete e[_t]}function xt(e){var t=e[ft];if(t)return t;for(var n=e.parentNode;n;){if(t=n[mt]||n[ft]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[ft])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function St(e){if(e=e[ft]||e[mt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ct(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function wt(e){var t=e[vt];return t||=e[vt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Tt(e){e[yt]=!0}var Et=new Set,Dt={};function Ot(e,t){kt(e,t),kt(e+`Capture`,t)}function kt(e,t){for(Dt[e]=t,e=0;e<t.length;e++)Et.add(t[e])}var At=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),jt={},Mt={};function Nt(e){return Ee.call(Mt,e)?!0:Ee.call(jt,e)?!1:At.test(e)?Mt[e]=!0:(jt[e]=!0,!1)}function Pt(e,t,n){if(Nt(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}}function Ft(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function It(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Lt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Rt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function zt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Bt(e){if(!e._valueTracker){var t=Rt(e)?`checked`:`value`;e._valueTracker=zt(e,t,``+e[t])}}function Vt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Rt(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function Ht(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Ut=/[\n"\\]/g;function Wt(e){return e.replace(Ut,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Gt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Lt(t)):e.value!==``+Lt(t)&&(e.value=``+Lt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):qt(e,o,Lt(n)):qt(e,o,Lt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Lt(s):e.removeAttribute(`name`)}function Kt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Bt(e);return}n=n==null?``:``+Lt(n),t=t==null?n:``+Lt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Bt(e)}function qt(e,t,n){t===`number`&&Ht(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Jt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Lt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Yt(e,t,n){if(t!=null&&(t=``+Lt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Lt(n)}function Xt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(oe(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Lt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Bt(e)}function Zt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Qt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function $t(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Qt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function en(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&$t(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&$t(e,o,t[o])}function tn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var nn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),rn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function an(e){return rn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function on(){}var sn=null;function cn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ln=null,un=null;function dn(e){var t=St(e);if(t&&(e=t.stateNode)){var n=e[pt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Gt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Wt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[pt]||null;if(!a)throw Error(i(90));Gt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Vt(r)}break a;case`textarea`:Yt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Jt(e,!!n.multiple,t,!1)}}}var fn=!1;function pn(e,t,n){if(fn)return e(t,n);fn=!0;try{return e(t)}finally{if(fn=!1,(ln!==null||un!==null)&&(Cu(),ln&&(t=ln,e=un,un=ln=null,dn(t),e)))for(t=0;t<e.length;t++)dn(e[t])}}function mn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[pt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var hn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),gn=!1;if(hn)try{var _n={};Object.defineProperty(_n,"passive",{get:function(){gn=!0}}),window.addEventListener(`test`,_n,_n),window.removeEventListener(`test`,_n,_n)}catch{gn=!1}var vn=null,yn=null,bn=null;function xn(){if(bn)return bn;var e,t=yn,n=t.length,r,i=`value`in vn?vn.value:vn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return bn=i.slice(e,1<r?1-r:void 0)}function Sn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Cn(){return!0}function wn(){return!1}function Tn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Cn:wn,this.isPropagationStopped=wn,this}return m(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Cn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Cn)},persist:function(){},isPersistent:Cn}),t}var En={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dn=Tn(En),On=m({},En,{view:0,detail:0}),kn=Tn(On),An,jn,Mn,Nn=m({},On,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Mn&&(Mn&&e.type===`mousemove`?(An=e.screenX-Mn.screenX,jn=e.screenY-Mn.screenY):jn=An=0,Mn=e),An)},movementY:function(e){return`movementY`in e?e.movementY:jn}}),Pn=Tn(Nn),Fn=Tn(m({},Nn,{dataTransfer:0})),In=Tn(m({},On,{relatedTarget:0})),Ln=Tn(m({},En,{animationName:0,elapsedTime:0,pseudoElement:0})),Rn=Tn(m({},En,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),zn=Tn(m({},En,{data:0})),Bn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Vn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Hn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Un(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Hn[e])?!!t[e]:!1}function Wn(){return Un}var Gn=Tn(m({},On,{key:function(e){if(e.key){var t=Bn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Sn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Vn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wn,charCode:function(e){return e.type===`keypress`?Sn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Sn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Kn=Tn(m({},Nn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),N=Tn(m({},On,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wn})),qn=Tn(m({},En,{propertyName:0,elapsedTime:0,pseudoElement:0})),Jn=Tn(m({},Nn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Yn=Tn(m({},En,{newState:0,oldState:0})),Xn=[9,13,27,32],Zn=hn&&`CompositionEvent`in window,Qn=null;hn&&`documentMode`in document&&(Qn=document.documentMode);var $n=hn&&`TextEvent`in window&&!Qn,er=hn&&(!Zn||Qn&&8<Qn&&11>=Qn),tr=` `,nr=!1;function rr(e,t){switch(e){case`keyup`:return Xn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function ir(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var ar=!1;function or(e,t){switch(e){case`compositionend`:return ir(t);case`keypress`:return t.which===32?(nr=!0,tr):null;case`textInput`:return e=t.data,e===tr&&nr?null:e;default:return null}}function sr(e,t){if(ar)return e===`compositionend`||!Zn&&rr(e,t)?(e=xn(),bn=yn=vn=null,ar=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return er&&t.locale!==`ko`?null:t.data;default:return null}}var cr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!cr[e.type]:t===`textarea`}function ur(e,t,n,r){ln?un?un.push(r):un=[r]:ln=r,t=Ed(t,`onChange`),0<t.length&&(n=new Dn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var dr=null,P=null;function fr(e){yd(e,0)}function pr(e){if(Vt(Ct(e)))return e}function mr(e,t){if(e===`change`)return t}var hr=!1;if(hn){var gr;if(hn){var _r=`oninput`in document;if(!_r){var vr=document.createElement(`div`);vr.setAttribute(`oninput`,`return;`),_r=typeof vr.oninput==`function`}gr=_r}else gr=!1;hr=gr&&(!document.documentMode||9<document.documentMode)}function yr(){dr&&(dr.detachEvent(`onpropertychange`,br),P=dr=null)}function br(e){if(e.propertyName===`value`&&pr(P)){var t=[];ur(t,P,e,cn(e)),pn(fr,t)}}function xr(e,t,n){e===`focusin`?(yr(),dr=t,P=n,dr.attachEvent(`onpropertychange`,br)):e===`focusout`&&yr()}function Sr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return pr(P)}function Cr(e,t){if(e===`click`)return pr(t)}function wr(e,t){if(e===`input`||e===`change`)return pr(t)}function Tr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Er=typeof Object.is==`function`?Object.is:Tr;function Dr(e,t){if(Er(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ee.call(t,i)||!Er(e[i],t[i]))return!1}return!0}function Or(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function kr(e,t){var n=Or(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Or(n)}}function Ar(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ar(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function jr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ht(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ht(e.document)}return t}function Mr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Nr=hn&&`documentMode`in document&&11>=document.documentMode,Pr=null,F=null,Fr=null,Ir=!1;function Lr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ir||Pr==null||Pr!==Ht(r)||(r=Pr,`selectionStart`in r&&Mr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Fr&&Dr(Fr,r)||(Fr=r,r=Ed(F,`onSelect`),0<r.length&&(t=new Dn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Pr)))}function Rr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var zr={animationend:Rr(`Animation`,`AnimationEnd`),animationiteration:Rr(`Animation`,`AnimationIteration`),animationstart:Rr(`Animation`,`AnimationStart`),transitionrun:Rr(`Transition`,`TransitionRun`),transitionstart:Rr(`Transition`,`TransitionStart`),transitioncancel:Rr(`Transition`,`TransitionCancel`),transitionend:Rr(`Transition`,`TransitionEnd`)},Br={},Vr={};hn&&(Vr=document.createElement(`div`).style,`AnimationEvent`in window||(delete zr.animationend.animation,delete zr.animationiteration.animation,delete zr.animationstart.animation),`TransitionEvent`in window||delete zr.transitionend.transition);function Hr(e){if(Br[e])return Br[e];if(!zr[e])return e;var t=zr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Vr)return Br[e]=t[n];return e}var Ur=Hr(`animationend`),Wr=Hr(`animationiteration`),Gr=Hr(`animationstart`),Kr=Hr(`transitionrun`),qr=Hr(`transitionstart`),Jr=Hr(`transitioncancel`),Yr=Hr(`transitionend`),Xr=new Map,Zr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Zr.push(`scrollEnd`);function Qr(e,t){Xr.set(e,t),Ot(t,[e])}var $r=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ei=[],ti=0,ni=0;function ri(){for(var e=ti,t=ni=ti=0;t<e;){var n=ei[t];ei[t++]=null;var r=ei[t];ei[t++]=null;var i=ei[t];ei[t++]=null;var a=ei[t];if(ei[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&si(n,i,a)}}function ii(e,t,n,r){ei[ti++]=e,ei[ti++]=t,ei[ti++]=n,ei[ti++]=r,ni|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ai(e,t,n,r){return ii(e,t,n,r),ci(e)}function oi(e,t){return ii(e,null,null,t),ci(e)}function si(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ue(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function ci(e){if(50<mu)throw mu=0,hu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var li={};function ui(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function di(e,t,n,r){return new ui(e,t,n,r)}function fi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function pi(e,t){var n=e.alternate;return n===null?(n=di(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function mi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function hi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)fi(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,de.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case re:return e=di(31,n,t,a),e.elementType=re,e.lanes=o,e;case y:return gi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=di(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case w:return e=di(13,n,t,a),e.elementType=w,e.lanes=o,e;case te:return e=di(19,n,t,a),e.elementType=te,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case S:s=10;break a;case ee:s=9;break a;case C:s=11;break a;case ne:s=14;break a;case T:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=di(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function gi(e,t,n,r){return e=di(7,e,r,t),e.lanes=n,e}function _i(e,t,n){return e=di(6,e,null,t),e.lanes=n,e}function vi(e){var t=di(18,null,null,0);return t.stateNode=e,t}function yi(e,t,n){return t=di(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var bi=new WeakMap;function xi(e,t){if(typeof e==`object`&&e){var n=bi.get(e);return n===void 0?(t={value:e,source:t,stack:Te(t)},bi.set(e,t),t):n}return{value:e,source:t,stack:Te(t)}}var Si=[],Ci=0,wi=null,Ti=0,Ei=[],Di=0,Oi=null,ki=1,Ai=``;function ji(e,t){Si[Ci++]=Ti,Si[Ci++]=wi,wi=e,Ti=t}function Mi(e,t,n){Ei[Di++]=ki,Ei[Di++]=Ai,Ei[Di++]=Oi,Oi=e;var r=ki;e=Ai;var i=32-Ue(r)-1;r&=~(1<<i),n+=1;var a=32-Ue(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ki=1<<32-Ue(t)+i|n<<i|r,Ai=a+e}else ki=1<<a|n<<i|r,Ai=e}function Ni(e){e.return!==null&&(ji(e,1),Mi(e,1,0))}function Pi(e){for(;e===wi;)wi=Si[--Ci],Si[Ci]=null,Ti=Si[--Ci],Si[Ci]=null;for(;e===Oi;)Oi=Ei[--Di],Ei[Di]=null,Ai=Ei[--Di],Ei[Di]=null,ki=Ei[--Di],Ei[Di]=null}function Fi(e,t){Ei[Di++]=ki,Ei[Di++]=Ai,Ei[Di++]=Oi,ki=t.id,Ai=t.overflow,Oi=e}var Ii=null,Li=null,I=!1,Ri=null,zi=!1,Bi=Error(i(519));function Vi(e){throw qi(xi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Bi}function Hi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[ft]=e,t[pt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Kt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Xt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=on),t=!0):t=!1,t||Vi(e,!0)}function Ui(e){for(Ii=e.return;Ii;)switch(Ii.tag){case 5:case 31:case 13:zi=!1;return;case 27:case 3:zi=!0;return;default:Ii=Ii.return}}function Wi(e){if(e!==Ii)return!1;if(!I)return Ui(e),I=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||Ud(e.type,e.memoizedProps)),n=!n),n&&Li&&Vi(e),Ui(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Li=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Li=uf(e)}else t===27?(t=Li,Zd(e.type)?(e=lf,lf=null,Li=e):Li=t):Li=Ii?cf(e.stateNode.nextSibling):null;return!0}function Gi(){Li=Ii=null,I=!1}function Ki(){var e=Ri;return e!==null&&(eu===null?eu=e:eu.push.apply(eu,e),Ri=null),e}function qi(e){Ri===null?Ri=[e]:Ri.push(e)}var Ji=ue(null),Yi=null,Xi=null;function Zi(e,t,n){M(Ji,t._currentValue),t._currentValue=n}function Qi(e){e._currentValue=Ji.current,j(Ji)}function $i(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ea(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),$i(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),$i(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function ta(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Er(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===me.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&ea(t,e,n,r),t.flags|=262144}function na(e){for(e=e.firstContext;e!==null;){if(!Er(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ra(e){Yi=e,Xi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ia(e){return oa(Yi,e)}function aa(e,t){return Yi===null&&ra(e),oa(e,t)}function oa(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Xi===null){if(e===null)throw Error(i(308));Xi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Xi=Xi.next=t;return n}var sa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ca=t.unstable_scheduleCallback,la=t.unstable_NormalPriority,ua={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function da(){return{controller:new sa,data:new Map,refCount:0}}function fa(e){e.refCount--,e.refCount===0&&ca(la,function(){e.controller.abort()})}var pa=null,ma=0,ha=0,ga=null;function _a(e,t){if(pa===null){var n=pa=[];ma=0,ha=dd(),ga={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ma++,t.then(va,va),t}function va(){if(--ma===0&&pa!==null){ga!==null&&(ga.status=`fulfilled`);var e=pa;pa=null,ha=0,ga=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ya(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var ba=k.S;k.S=function(e,t){ru=je(),typeof t==`object`&&t&&typeof t.then==`function`&&_a(e,t),ba!==null&&ba(e,t)};var xa=ue(null);function Sa(){var e=xa.current;return e===null?W.pooledCache:e}function Ca(e,t){t===null?M(xa,xa.current):M(xa,t.pool)}function wa(){var e=Sa();return e===null?null:{parent:ua._currentValue,pool:e}}var Ta=Error(i(460)),Ea=Error(i(474)),Da=Error(i(542)),L={then:function(){}};function Oa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function ka(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(on,on),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Na(e),e;default:if(typeof t.status==`string`)t.then(on,on);else{if(e=W,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Na(e),e}throw ja=t,Ta}}function Aa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(ja=e,Ta):e}}var ja=null;function Ma(){if(ja===null)throw Error(i(459));var e=ja;return ja=null,e}function Na(e){if(e===Ta||e===Da)throw Error(i(483))}var Pa=null,Fa=0;function Ia(e){var t=Fa;return Fa+=1,Pa===null&&(Pa=[]),ka(Pa,e,t)}function La(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ra(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function za(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=pi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=_i(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===T&&Aa(i)===t.type)?(t=a(t,n.props),La(t,n),t.return=e,t):(t=hi(n.type,n.key,n.props,null,e.mode,r),La(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=yi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=gi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=_i(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=hi(t.type,t.key,t.props,null,e.mode,n),La(n,t),n.return=e,n;case v:return t=yi(t,e.mode,n),t.return=e,t;case T:return t=Aa(t),f(e,t,n)}if(oe(t)||O(t))return t=gi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ia(t),n);if(t.$$typeof===S)return f(e,aa(e,t),n);Ra(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case T:return n=Aa(n),p(e,t,n,r)}if(oe(n)||O(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ia(n),r);if(n.$$typeof===S)return p(e,t,aa(e,n),r);Ra(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case T:return r=Aa(r),m(e,t,n,r,i)}if(oe(r)||O(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Ia(r),i);if(r.$$typeof===S)return m(e,t,n,aa(t,r),i);Ra(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),I&&ji(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return I&&ji(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),I&&ji(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),I&&ji(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return I&&ji(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),I&&ji(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===T&&Aa(l)===r.type){n(e,r.sibling),c=a(r,o.props),La(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===y?(c=gi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=hi(o.type,o.key,o.props,null,e.mode,c),La(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=yi(o,e.mode,c),c.return=e,e=c}return s(e);case T:return o=Aa(o),b(e,r,o,c)}if(oe(o))return h(e,r,o,c);if(O(o)){if(l=O(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Ia(o),c);if(o.$$typeof===S)return b(e,r,aa(e,o),c);Ra(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=_i(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Fa=0;var i=b(e,t,n,r);return Pa=null,i}catch(t){if(t===Ta||t===Da)throw t;var a=di(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ba=za(!0),Va=za(!1),Ha=!1;function Ua(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ga(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ka(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=ci(e),si(e,null,n),t}return ii(e,r,t,n),ci(e)}function qa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,at(e,n)}}function Ja(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ya=!1;function Xa(){if(Ya){var e=ga;if(e!==null)throw e}}function Za(e,t,n,r){Ya=!1;var i=e.updateQueue;Ha=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(K&f)===f:(r&f)===f){f!==0&&f===ha&&(Ya=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var h=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(h=g.payload,typeof h==`function`){d=h.call(_,d,f);break a}d=h;break a;case 3:h.flags=h.flags&-65537|128;case 0:if(h=g.payload,f=typeof h==`function`?h.call(_,d,f):h,f==null)break a;d=m({},d,f);break a;case 2:Ha=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Jl|=o,e.lanes=o,e.memoizedState=d}}function Qa(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function $a(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Qa(n[e],t)}var eo=ue(null),R=ue(0);function to(e,t){e=Kl,M(R,e),M(eo,t),Kl=e|t.baseLanes}function no(){M(R,Kl),M(eo,eo.current)}function ro(){Kl=R.current,j(eo),j(R)}var io=ue(null),ao=null;function oo(e){var t=e.alternate;M(fo,fo.current&1),M(io,e),ao===null&&(t===null||eo.current!==null||t.memoizedState!==null)&&(ao=e)}function so(e){M(fo,fo.current),M(io,e),ao===null&&(ao=e)}function co(e){e.tag===22?(M(fo,fo.current),M(io,e),ao===null&&(ao=e)):lo(e)}function lo(){M(fo,fo.current),M(io,io.current)}function uo(e){j(io),ao===e&&(ao=null),j(fo)}var fo=ue(0);function po(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var mo=0,z=null,B=null,ho=null,go=!1,_o=!1,vo=!1,yo=0,bo=0,xo=null,So=0;function Co(){throw Error(i(321))}function wo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Er(e[n],t[n]))return!1;return!0}function To(e,t,n,r,i,a){return mo=a,z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,k.H=e===null||e.memoizedState===null?Hs:Us,vo=!1,a=n(r,i),vo=!1,_o&&(a=Do(t,n,r,i)),Eo(e),a}function Eo(e){k.H=Vs;var t=B!==null&&B.next!==null;if(mo=0,ho=B=z=null,go=!1,bo=0,xo=null,t)throw Error(i(300));e===null||oc||(e=e.dependencies,e!==null&&na(e)&&(oc=!0))}function Do(e,t,n,r){z=e;var a=0;do{if(_o&&(xo=null),bo=0,_o=!1,25<=a)throw Error(i(301));if(a+=1,ho=B=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}k.H=Ws,o=t(n,r)}while(_o);return o}function Oo(){var e=k.H,t=e.useState()[0];return t=typeof t.then==`function`?Fo(t):t,e=e.useState()[0],(B===null?null:B.memoizedState)!==e&&(z.flags|=1024),t}function ko(){var e=yo!==0;return yo=0,e}function Ao(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function jo(e){if(go){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}go=!1}mo=0,ho=B=z=null,_o=!1,bo=yo=0,xo=null}function Mo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ho===null?z.memoizedState=ho=e:ho=ho.next=e,ho}function No(){if(B===null){var e=z.alternate;e=e===null?null:e.memoizedState}else e=B.next;var t=ho===null?z.memoizedState:ho.next;if(t!==null)ho=t,B=e;else{if(e===null)throw z.alternate===null?Error(i(467)):Error(i(310));B=e,e={memoizedState:B.memoizedState,baseState:B.baseState,baseQueue:B.baseQueue,queue:B.queue,next:null},ho===null?z.memoizedState=ho=e:ho=ho.next=e}return ho}function Po(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fo(e){var t=bo;return bo+=1,xo===null&&(xo=[]),e=ka(xo,e,t),t=z,(ho===null?t.memoizedState:ho.next)===null&&(t=t.alternate,k.H=t===null||t.memoizedState===null?Hs:Us),e}function Io(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Fo(e);if(e.$$typeof===S)return ia(e)}throw Error(i(438,String(e)))}function Lo(e){var t=null,n=z.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=z.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Po(),z.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=E;return t.index++,n}function Ro(e,t){return typeof t==`function`?t(e):t}function zo(e){return Bo(No(),B,e)}function Bo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(mo&f)===f:(K&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ha&&(d=!0);else if((mo&p)===p){u=u.next,p===ha&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,z.lanes|=p,Jl|=p;f=u.action,vo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,z.lanes|=f,Jl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Er(o,e.memoizedState)&&(oc=!0,d&&(n=ga,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Vo(e){var t=No(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Er(o,t.memoizedState)||(oc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Ho(e,t,n){var r=z,a=No(),o=I;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Er((B||a).memoizedState,n);if(s&&(a.memoizedState=n,oc=!0),a=a.queue,ps(Go.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||ho!==null&&ho.memoizedState.tag&1){if(r.flags|=2048,cs(9,{destroy:void 0},Wo.bind(null,r,a,n,t),null),W===null)throw Error(i(349));o||mo&127||Uo(r,t,n)}return n}function Uo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=z.updateQueue,t===null?(t=Po(),z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Wo(e,t,n,r){t.value=n,t.getSnapshot=r,Ko(t)&&qo(e)}function Go(e,t,n){return n(function(){Ko(t)&&qo(e)})}function Ko(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Er(e,n)}catch{return!0}}function qo(e){var t=oi(e,2);t!==null&&vu(t,e,2)}function Jo(e){var t=Mo();if(typeof e==`function`){var n=e;if(e=n(),vo){He(!0);try{n()}finally{He(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:e},t}function Yo(e,t,n,r){return e.baseState=n,Bo(e,B,typeof r==`function`?r:Ro)}function Xo(e,t,n,r,a){if(Rs(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};k.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Zo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Zo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=k.T,o={};k.T=o;try{var s=n(i,r),c=k.S;c!==null&&c(o,s),Qo(e,t,s)}catch(n){es(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),k.T=a}}else try{a=n(i,r),Qo(e,t,a)}catch(n){es(e,t,n)}}function Qo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){$o(e,t,n)},function(n){return es(e,t,n)}):$o(e,t,n)}function $o(e,t,n){t.status=`fulfilled`,t.value=n,ts(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Zo(e,n)))}function es(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,ts(t),t=t.next;while(t!==r)}e.action=null}function ts(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ns(e,t){return t}function rs(e,t){if(I){var n=W.formState;if(n!==null){a:{var r=z;if(I){if(Li){b:{for(var i=Li,a=zi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){Li=cf(i.nextSibling),r=i.data===`F!`;break a}}Vi(r)}r=!1}r&&(t=n[0])}}return n=Mo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ns,lastRenderedState:t},n.queue=r,n=Fs.bind(null,z,r),r.dispatch=n,r=Jo(!1),a=Ls.bind(null,z,!1,r.queue),r=Mo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Xo.bind(null,z,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function is(e){return as(No(),B,e)}function as(e,t,n){if(t=Bo(e,t,ns)[0],e=zo(Ro)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Fo(t)}catch(e){throw e===Ta?Da:e}else r=t;t=No();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(z.flags|=2048,cs(9,{destroy:void 0},os.bind(null,i,n),null)),[r,a,e]}function os(e,t){e.action=t}function ss(e){var t=No(),n=B;if(n!==null)return as(t,n,e);No(),t=t.memoizedState,n=No();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function cs(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=z.updateQueue,t===null&&(t=Po(),z.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ls(){return No().memoizedState}function us(e,t,n,r){var i=Mo();z.flags|=e,i.memoizedState=cs(1|t,{destroy:void 0},n,r===void 0?null:r)}function ds(e,t,n,r){var i=No();r=r===void 0?null:r;var a=i.memoizedState.inst;B!==null&&r!==null&&wo(r,B.memoizedState.deps)?i.memoizedState=cs(t,a,n,r):(z.flags|=e,i.memoizedState=cs(1|t,a,n,r))}function fs(e,t){us(8390656,8,e,t)}function ps(e,t){ds(2048,8,e,t)}function ms(e){z.flags|=4;var t=z.updateQueue;if(t===null)t=Po(),z.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function hs(e){var t=No().memoizedState;return ms({ref:t,nextImpl:e}),function(){if(U&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function gs(e,t){return ds(4,2,e,t)}function _s(e,t){return ds(4,4,e,t)}function vs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ys(e,t,n){n=n==null?null:n.concat([e]),ds(4,4,vs.bind(null,t,e),n)}function bs(){}function xs(e,t){var n=No();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&wo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ss(e,t){var n=No();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&wo(t,r[1]))return r[0];if(r=e(),vo){He(!0);try{e()}finally{He(!1)}}return n.memoizedState=[r,t],r}function Cs(e,t,n){return n===void 0||mo&1073741824&&!(K&261930)?e.memoizedState=t:(e.memoizedState=n,e=_u(),z.lanes|=e,Jl|=e,n)}function ws(e,t,n,r){return Er(n,t)?n:eo.current===null?!(mo&42)||mo&1073741824&&!(K&261930)?(oc=!0,e.memoizedState=n):(e=_u(),z.lanes|=e,Jl|=e,t):(e=Cs(e,n,r),Er(e,t)||(oc=!0),e)}function Ts(e,t,n,r,i){var a=A.p;A.p=a!==0&&8>a?a:8;var o=k.T,s={};k.T=s,Ls(e,!1,t,n);try{var c=i(),l=k.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Is(e,t,ya(c,r),gu(e)):Is(e,t,r,gu(e))}catch(n){Is(e,t,{then:function(){},status:`rejected`,reason:n},gu())}finally{A.p=a,o!==null&&s.types!==null&&(o.types=s.types),k.T=o}}function Es(){}function Ds(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Os(e).queue;Ts(e,a,t,se,n===null?Es:function(){return ks(e),n(r)})}function Os(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:se,baseState:se,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:se},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ks(e){var t=Os(e);t.next===null&&(t=e.alternate.memoizedState),Is(e,t.next.queue,{},gu())}function As(){return ia(Qf)}function js(){return No().memoizedState}function Ms(){return No().memoizedState}function Ns(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=gu();e=Ga(n);var r=Ka(t,e,n);r!==null&&(vu(r,t,n),qa(r,t,n)),t={cache:da()},e.payload=t;return}t=t.return}}function Ps(e,t,n){var r=gu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Rs(e)?zs(t,n):(n=ai(e,t,n,r),n!==null&&(vu(n,e,r),Bs(n,t,r)))}function Fs(e,t,n){Is(e,t,n,gu())}function Is(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Rs(e))zs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Er(s,o))return ii(e,t,i,0),W===null&&ri(),!1}catch{}if(n=ai(e,t,i,r),n!==null)return vu(n,e,r),Bs(n,t,r),!0}return!1}function Ls(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Rs(e)){if(t)throw Error(i(479))}else t=ai(e,n,r,2),t!==null&&vu(t,e,2)}function Rs(e){var t=e.alternate;return e===z||t!==null&&t===z}function zs(e,t){_o=go=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Bs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,at(e,n)}}var Vs={readContext:ia,use:Io,useCallback:Co,useContext:Co,useEffect:Co,useImperativeHandle:Co,useLayoutEffect:Co,useInsertionEffect:Co,useMemo:Co,useReducer:Co,useRef:Co,useState:Co,useDebugValue:Co,useDeferredValue:Co,useTransition:Co,useSyncExternalStore:Co,useId:Co,useHostTransitionStatus:Co,useFormState:Co,useActionState:Co,useOptimistic:Co,useMemoCache:Co,useCacheRefresh:Co};Vs.useEffectEvent=Co;var Hs={readContext:ia,use:Io,useCallback:function(e,t){return Mo().memoizedState=[e,t===void 0?null:t],e},useContext:ia,useEffect:fs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),us(4194308,4,vs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return us(4194308,4,e,t)},useInsertionEffect:function(e,t){us(4,2,e,t)},useMemo:function(e,t){var n=Mo();t=t===void 0?null:t;var r=e();if(vo){He(!0);try{e()}finally{He(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Mo();if(n!==void 0){var i=n(t);if(vo){He(!0);try{n(t)}finally{He(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ps.bind(null,z,e),[r.memoizedState,e]},useRef:function(e){var t=Mo();return e={current:e},t.memoizedState=e},useState:function(e){e=Jo(e);var t=e.queue,n=Fs.bind(null,z,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:bs,useDeferredValue:function(e,t){return Cs(Mo(),e,t)},useTransition:function(){var e=Jo(!1);return e=Ts.bind(null,z,e.queue,!0,!1),Mo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=z,a=Mo();if(I){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),W===null)throw Error(i(349));K&127||Uo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,fs(Go.bind(null,r,o,e),[e]),r.flags|=2048,cs(9,{destroy:void 0},Wo.bind(null,r,o,n,t),null),n},useId:function(){var e=Mo(),t=W.identifierPrefix;if(I){var n=Ai,r=ki;n=(r&~(1<<32-Ue(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=yo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=So++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:As,useFormState:rs,useActionState:rs,useOptimistic:function(e){var t=Mo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ls.bind(null,z,!0,n),n.dispatch=t,[e,t]},useMemoCache:Lo,useCacheRefresh:function(){return Mo().memoizedState=Ns.bind(null,z)},useEffectEvent:function(e){var t=Mo(),n={impl:e};return t.memoizedState=n,function(){if(U&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Us={readContext:ia,use:Io,useCallback:xs,useContext:ia,useEffect:ps,useImperativeHandle:ys,useInsertionEffect:gs,useLayoutEffect:_s,useMemo:Ss,useReducer:zo,useRef:ls,useState:function(){return zo(Ro)},useDebugValue:bs,useDeferredValue:function(e,t){return ws(No(),B.memoizedState,e,t)},useTransition:function(){var e=zo(Ro)[0],t=No().memoizedState;return[typeof e==`boolean`?e:Fo(e),t]},useSyncExternalStore:Ho,useId:js,useHostTransitionStatus:As,useFormState:is,useActionState:is,useOptimistic:function(e,t){return Yo(No(),B,e,t)},useMemoCache:Lo,useCacheRefresh:Ms};Us.useEffectEvent=hs;var Ws={readContext:ia,use:Io,useCallback:xs,useContext:ia,useEffect:ps,useImperativeHandle:ys,useInsertionEffect:gs,useLayoutEffect:_s,useMemo:Ss,useReducer:Vo,useRef:ls,useState:function(){return Vo(Ro)},useDebugValue:bs,useDeferredValue:function(e,t){var n=No();return B===null?Cs(n,e,t):ws(n,B.memoizedState,e,t)},useTransition:function(){var e=Vo(Ro)[0],t=No().memoizedState;return[typeof e==`boolean`?e:Fo(e),t]},useSyncExternalStore:Ho,useId:js,useHostTransitionStatus:As,useFormState:ss,useActionState:ss,useOptimistic:function(e,t){var n=No();return B===null?(n.baseState=e,[e,n.queue.dispatch]):Yo(n,B,e,t)},useMemoCache:Lo,useCacheRefresh:Ms};Ws.useEffectEvent=hs;function Gs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:m({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ks={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=gu(),i=Ga(r);i.payload=t,n!=null&&(i.callback=n),t=Ka(e,i,r),t!==null&&(vu(t,e,r),qa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=gu(),i=Ga(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ka(e,i,r),t!==null&&(vu(t,e,r),qa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=gu(),r=Ga(n);r.tag=2,t!=null&&(r.callback=t),t=Ka(e,r,n),t!==null&&(vu(t,e,n),qa(t,e,n))}};function qs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Dr(n,r)||!Dr(i,a):!0}function Js(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ks.enqueueReplaceState(t,t.state,null)}function Ys(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=m({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Xs(e){$r(e)}function Zs(e){console.error(e)}function Qs(e){$r(e)}function $s(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function ec(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function tc(e,t,n){return n=Ga(n),n.tag=3,n.payload={element:null},n.callback=function(){$s(e,t)},n}function nc(e){return e=Ga(e),e.tag=3,e}function rc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){ec(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){ec(t,n,r),typeof i!=`function`&&(ou===null?ou=new Set([this]):ou.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function ic(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ta(t,n,a,!0),n=io.current,n!==null){switch(n.tag){case 31:case 13:return ao===null?Au():n.alternate===null&&ql===0&&(ql=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===L?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Ju(e,r,a)),!1;case 22:return n.flags|=65536,r===L?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Ju(e,r,a)),!1}throw Error(i(435,n.tag))}return Ju(e,r,a),Au(),!1}if(I)return t=io.current,t===null?(r!==Bi&&(t=Error(i(423),{cause:r}),qi(xi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=xi(r,n),a=tc(e.stateNode,r,a),Ja(e,a),ql!==4&&(ql=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Bi&&(e=Error(i(422),{cause:r}),qi(xi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=xi(o,n),$l===null?$l=[o]:$l.push(o),ql!==4&&(ql=2),t===null)return!0;r=xi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=tc(n.stateNode,r,e),Ja(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ou===null||!ou.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=nc(a),rc(a,e,n,r),Ja(n,a),!1}n=n.return}while(n!==null);return!1}var ac=Error(i(461)),oc=!1;function sc(e,t,n,r){t.child=e===null?Va(t,null,n,r):Ba(t,e.child,n,r)}function cc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return ra(t),r=To(e,t,n,o,a,i),s=ko(),e!==null&&!oc?(Ao(e,t,i),Mc(e,t,i)):(I&&s&&Ni(t),t.flags|=1,sc(e,t,r,i),t.child)}function lc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!fi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,uc(e,t,a,r,i)):(e=hi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Nc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Dr:n,n(o,r)&&e.ref===t.ref)return Mc(e,t,i)}return t.flags|=1,e=pi(a,r),e.ref=t.ref,e.return=t,t.child=e}function uc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Dr(a,r)&&e.ref===t.ref){if(oc=!1,t.pendingProps=r=a,Nc(e,i))e.flags&131072&&(oc=!0);else return t.lanes=e.lanes,Mc(e,t,i)}}return vc(e,t,n,r,i)}function dc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return pc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ca(t,a===null?null:a.cachePool),a===null?no():to(t,a),co(t);else return r=t.lanes=536870912,pc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ca(t,null),no(),lo(t)):(Ca(t,a.cachePool),to(t,a),lo(t),t.memoizedState=null);return sc(e,t,i,n),t.child}function fc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function pc(e,t,n,r,i){var a=Sa();return a=a===null?null:{parent:ua._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ca(t,null),no(),co(t),e!==null&&ta(e,t,r,!0),t.childLanes=i,null}function mc(e,t){return t=Dc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function hc(e,t,n){return Ba(t,e.child,null,n),e=mc(t,t.pendingProps),e.flags|=2,uo(t),t.memoizedState=null,e}function gc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(I){if(r.mode===`hidden`)return e=mc(t,r),t.lanes=536870912,fc(null,e);if(so(t),(e=Li)?(e=rf(e,zi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Oi===null?null:{id:ki,overflow:Ai},retryLane:536870912,hydrationErrors:null},n=vi(e),n.return=t,t.child=n,Ii=t,Li=null)):e=null,e===null)throw Vi(t);return t.lanes=536870912,null}return mc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(so(t),a){if(t.flags&256)t.flags&=-257,t=hc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(oc||ta(e,t,n,!1),a=(n&e.childLanes)!==0,oc||a){if(r=W,r!==null&&(s=ot(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,oi(e,s),vu(r,e,s),ac;Au(),t=hc(e,t,n)}else e=o.treeContext,Li=cf(s.nextSibling),Ii=t,I=!0,Ri=null,zi=!1,e!==null&&Fi(t,e),t=mc(t,r),t.flags|=4096;return t}return e=pi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function _c(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function vc(e,t,n,r,i){return ra(t),n=To(e,t,n,r,void 0,i),r=ko(),e!==null&&!oc?(Ao(e,t,i),Mc(e,t,i)):(I&&r&&Ni(t),t.flags|=1,sc(e,t,n,i),t.child)}function yc(e,t,n,r,i,a){return ra(t),t.updateQueue=null,n=Do(t,r,n,i),Eo(e),r=ko(),e!==null&&!oc?(Ao(e,t,a),Mc(e,t,a)):(I&&r&&Ni(t),t.flags|=1,sc(e,t,n,a),t.child)}function bc(e,t,n,r,i){if(ra(t),t.stateNode===null){var a=li,o=n.contextType;typeof o==`object`&&o&&(a=ia(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ks,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ua(t),o=n.contextType,a.context=typeof o==`object`&&o?ia(o):li,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Gs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ks.enqueueReplaceState(a,a.state,null),Za(t,r,a,i),Xa(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Ys(n,s);a.props=c;var l=a.context,u=n.contextType;o=li,typeof u==`object`&&u&&(o=ia(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Js(t,a,r,o),Ha=!1;var f=t.memoizedState;a.state=f,Za(t,r,a,i),Xa(),l=t.memoizedState,s||f!==l||Ha?(typeof d==`function`&&(Gs(t,n,d,r),l=t.memoizedState),(c=Ha||qs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Wa(e,t),o=t.memoizedProps,u=Ys(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=li,typeof l==`object`&&l&&(c=ia(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Js(t,a,r,c),Ha=!1,f=t.memoizedState,a.state=f,Za(t,r,a,i),Xa();var p=t.memoizedState;o!==d||f!==p||Ha||e!==null&&e.dependencies!==null&&na(e.dependencies)?(typeof s==`function`&&(Gs(t,n,s,r),p=t.memoizedState),(u=Ha||qs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&na(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,_c(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ba(t,e.child,null,i),t.child=Ba(t,null,n,i)):sc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Mc(e,t,i),e}function xc(e,t,n,r){return Gi(),t.flags|=256,sc(e,t,n,r),t.child}var Sc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Cc(e){return{baseLanes:e,cachePool:wa()}}function wc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Zl),e}function Tc(e,t,n){var r=t.pendingProps,a=!1,o=!!(t.flags&128),s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:!!(fo.current&2)),s&&(a=!0,t.flags&=-129),s=!!(t.flags&32),t.flags&=-33,e===null){if(I){if(a?oo(t):lo(t),(e=Li)?(e=rf(e,zi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Oi===null?null:{id:ki,overflow:Ai},retryLane:536870912,hydrationErrors:null},n=vi(e),n.return=t,t.child=n,Ii=t,Li=null)):e=null,e===null)throw Vi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(lo(t),a=t.mode,c=Dc({mode:`hidden`,children:c},a),r=gi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=Cc(n),r.childLanes=wc(e,s,n),t.memoizedState=Sc,fc(null,r)):(oo(t),Ec(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(oo(t),t.flags&=-257,t=Oc(e,t,n)):t.memoizedState===null?(lo(t),c=r.fallback,a=t.mode,r=Dc({mode:`visible`,children:r.children},a),c=gi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ba(t,e.child,null,n),r=t.child,r.memoizedState=Cc(n),r.childLanes=wc(e,s,n),t.memoizedState=Sc,t=fc(null,r)):(lo(t),t.child=e.child,t.flags|=128,t=null);else if(oo(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,qi({value:r,source:null,stack:null}),t=Oc(e,t,n)}else if(oc||ta(e,t,n,!1),s=(n&e.childLanes)!==0,oc||s){if(s=W,s!==null&&(r=ot(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,oi(e,r),vu(s,e,r),ac;af(c)||Au(),t=Oc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Li=cf(c.nextSibling),Ii=t,I=!0,Ri=null,zi=!1,e!==null&&Fi(t,e),t=Ec(t,r.children),t.flags|=4096);return t}return a?(lo(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=pi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=gi(c,a,n,null),c.flags|=2):c=pi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,fc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=Cc(n):(a=c.cachePool,a===null?a=wa():(l=ua._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=wc(e,s,n),t.memoizedState=Sc,fc(e.child,r)):(oo(t),n=e.child,e=n.sibling,n=pi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Ec(e,t){return t=Dc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Dc(e,t){return e=di(22,e,null,t),e.lanes=0,e}function Oc(e,t,n){return Ba(t,e.child,null,n),e=Ec(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function kc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),$i(e.return,t,n)}function Ac(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function jc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=fo.current,s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,M(fo,o),sc(e,t,r,n),r=I?Ti:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&kc(e,n,t);else if(e.tag===19)kc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&po(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ac(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&po(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ac(t,!0,n,null,a,r);break;case`together`:Ac(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Mc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Jl|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(ta(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=pi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=pi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Nc(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&na(e)))}function Pc(e,t,n){switch(t.tag){case 3:he(t,t.stateNode.containerInfo),Zi(t,ua,e.memoizedState.cache),Gi();break;case 27:case 5:_e(t);break;case 4:he(t,t.stateNode.containerInfo);break;case 10:Zi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,so(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(oo(t),e=Mc(e,t,n),e===null?null:e.sibling):Tc(e,t,n):(oo(t),t.flags|=128,null);oo(t);break;case 19:var i=!!(e.flags&128);if(r=(n&t.childLanes)!==0,r||=(ta(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return jc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),M(fo,fo.current),r)break;return null;case 22:return t.lanes=0,dc(e,t,n,t.pendingProps);case 24:Zi(t,ua,e.memoizedState.cache)}return Mc(e,t,n)}function Fc(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)oc=!0;else{if(!Nc(e,n)&&!(t.flags&128))return oc=!1,Pc(e,t,n);oc=!!(e.flags&131072)}}else oc=!1,I&&t.flags&1048576&&Mi(t,Ti,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Aa(t.elementType),t.type=e,typeof e==`function`)fi(e)?(r=Ys(e,r),t.tag=1,t=bc(null,t,e,r,n)):(t.tag=0,t=vc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===C){t.tag=11,t=cc(null,t,e,r,n);break a}if(a===ne){t.tag=14,t=lc(null,t,e,r,n);break a}}throw t=ae(e)||e,Error(i(306,t,``))}}return t;case 0:return vc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Ys(r,t.pendingProps),bc(e,t,r,a,n);case 3:a:{if(he(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Wa(e,t),Za(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Zi(t,ua,r),r!==o.cache&&ea(t,[ua],n,!0),Xa(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=xc(e,t,r,n);break a}if(r!==a){a=xi(Error(i(424)),t),qi(a),t=xc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(Li=cf(e.firstChild),Ii=t,I=!0,Ri=null,zi=!0,n=Va(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Gi(),r===a){t=Mc(e,t,n);break a}sc(e,t,r,n)}t=t.child}return t;case 26:return _c(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:I||(n=t.type,e=t.pendingProps,r=Bd(pe.current).createElement(n),r[ft]=t,r[pt]=e,Pd(r,n,e),Tt(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return _e(t),e===null&&I&&(r=t.stateNode=ff(t.type,t.pendingProps,pe.current),Ii=t,zi=!0,a=Li,Zd(t.type)?(lf=a,Li=cf(r.firstChild)):Li=a),sc(e,t,t.pendingProps.children,n),_c(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&I&&((a=r=Li)&&(r=tf(r,t.type,t.pendingProps,zi),r===null?a=!1:(t.stateNode=r,Ii=t,Li=cf(r.firstChild),zi=!1,a=!0)),a||Vi(t)),_e(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=To(e,t,Oo,null,null,n),Qf._currentValue=a),_c(e,t),sc(e,t,r,n),t.child;case 6:return e===null&&I&&((e=n=Li)&&(n=nf(n,t.pendingProps,zi),n===null?e=!1:(t.stateNode=n,Ii=t,Li=null,e=!0)),e||Vi(t)),null;case 13:return Tc(e,t,n);case 4:return he(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ba(t,null,r,n):sc(e,t,r,n),t.child;case 11:return cc(e,t,t.type,t.pendingProps,n);case 7:return sc(e,t,t.pendingProps,n),t.child;case 8:return sc(e,t,t.pendingProps.children,n),t.child;case 12:return sc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Zi(t,t.type,r.value),sc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,ra(t),a=ia(a),r=r(a),t.flags|=1,sc(e,t,r,n),t.child;case 14:return lc(e,t,t.type,t.pendingProps,n);case 15:return uc(e,t,t.type,t.pendingProps,n);case 19:return jc(e,t,n);case 31:return gc(e,t,n);case 22:return dc(e,t,n,t.pendingProps);case 24:return ra(t),r=ia(ua),e===null?(a=Sa(),a===null&&(a=W,o=da(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ua(t),Zi(t,ua,a)):((e.lanes&n)!==0&&(Wa(e,t),Za(t,null,null,n),Xa()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Zi(t,ua,r),r!==a.cache&&ea(t,[ua],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Zi(t,ua,r))),sc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Ic(e){e.flags|=4}function Lc(e,t,n,r,i){if((t=!!(e.mode&32))&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(Du())e.flags|=8192;else throw ja=L,Ea}}else e.flags&=-16777217}function Rc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t)){if(Du())e.flags|=8192;else throw ja=L,Ea}}function zc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:et(),e.lanes|=t,Ql|=t)}function Bc(e,t){if(!I)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function V(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Vc(e,t,n){var r=t.pendingProps;switch(Pi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return V(t),null;case 1:return V(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Qi(ua),ge(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Wi(t)?Ic(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ki())),V(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Ic(t),o===null?(V(t),Lc(t,a,null,r,n)):(V(t),Rc(t,o))):o?o===e.memoizedState?(V(t),t.flags&=-16777217):(Ic(t),V(t),Rc(t,o)):(e=e.memoizedProps,e!==r&&Ic(t),V(t),Lc(t,a,e,r,n)),null;case 27:if(ve(t),n=pe.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ic(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return V(t),null}e=de.current,Wi(t)?Hi(t,e):(e=ff(a,r,n),t.stateNode=e,Ic(t))}return V(t),null;case 5:if(ve(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ic(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return V(t),null}if(o=de.current,Wi(t))Hi(t,o);else{var s=Bd(pe.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[ft]=t,o[pt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Ic(t)}}return V(t),Lc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Ic(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=pe.current,Wi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Ii,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[ft]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Vi(t,!0)}else e=Bd(e).createTextNode(r),e[ft]=t,t.stateNode=e}return V(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Wi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[ft]=t}else Gi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;V(t),e=!1}else n=Ki(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(uo(t),t):(uo(t),null);if(t.flags&128)throw Error(i(558))}return V(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Wi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[ft]=t}else Gi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;V(t),a=!1}else a=Ki(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(uo(t),t):(uo(t),null)}return uo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),zc(t,t.updateQueue),V(t),null);case 4:return ge(),e===null&&Sd(t.stateNode.containerInfo),V(t),null;case 10:return Qi(t.type),V(t),null;case 19:if(j(fo),r=t.memoizedState,r===null)return V(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)Bc(r,!1);else{if(ql!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=po(e),o!==null){for(t.flags|=128,Bc(r,!1),e=o.updateQueue,t.updateQueue=e,zc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)mi(n,e),n=n.sibling;return M(fo,fo.current&1|2),I&&ji(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&je()>iu&&(t.flags|=128,a=!0,Bc(r,!1),t.lanes=4194304)}}else{if(!a){if(e=po(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,zc(t,e),Bc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!I)return V(t),null}else 2*je()-r.renderingStartTime>iu&&n!==536870912&&(t.flags|=128,a=!0,Bc(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(V(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=je(),e.sibling=null,n=fo.current,M(fo,a?n&1|2:n&1),I&&ji(t,r.treeForkCount),e);case 22:case 23:return uo(t),ro(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(V(t),t.subtreeFlags&6&&(t.flags|=8192)):V(t),n=t.updateQueue,n!==null&&zc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&j(xa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Qi(ua),V(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Hc(e,t){switch(Pi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Qi(ua),ge(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ve(t),null;case 31:if(t.memoizedState!==null){if(uo(t),t.alternate===null)throw Error(i(340));Gi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(uo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Gi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return j(fo),null;case 4:return ge(),null;case 10:return Qi(t.type),null;case 22:case 23:return uo(t),ro(),e!==null&&j(xa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Qi(ua),null;case 25:return null;default:return null}}function Uc(e,t){switch(Pi(t),t.tag){case 3:Qi(ua),ge();break;case 26:case 27:case 5:ve(t);break;case 4:ge();break;case 31:t.memoizedState!==null&&uo(t);break;case 13:uo(t);break;case 19:j(fo);break;case 10:Qi(t.type);break;case 22:case 23:uo(t),ro(),e!==null&&j(xa);break;case 24:Qi(ua)}}function Wc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){J(t,t.return,e)}}function Gc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){J(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){J(t,t.return,e)}}function Kc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{$a(t,n)}catch(t){J(e,e.return,t)}}}function qc(e,t,n){n.props=Ys(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){J(e,t,n)}}function Jc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){J(e,t,n)}}function Yc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){J(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){J(e,t,n)}else n.current=null}}function Xc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){J(e,e.return,t)}}function Zc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[pt]=t}catch(t){J(e,e.return,t)}}function Qc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function $c(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Qc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function el(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=on));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(el(e,t,n),e=e.sibling;e!==null;)el(e,t,n),e=e.sibling}function tl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(tl(e,t,n),e=e.sibling;e!==null;)tl(e,t,n),e=e.sibling}function nl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[ft]=e,t[pt]=n}catch(t){J(e,e.return,t)}}var rl=!1,il=!1,al=!1,ol=typeof WeakSet==`function`?WeakSet:Set,sl=null;function cl(e,t){if(e=e.containerInfo,Rd=sp,e=jr(e),Mr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,sl=t;sl!==null;)if(t=sl,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,sl=e;else for(;sl!==null;){switch(t=sl,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Ys(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){J(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,sl=e;break}sl=t.return}}function ll(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Cl(e,n),r&4&&Wc(5,n);break;case 1:if(Cl(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){J(n,n.return,e)}else{var i=Ys(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){J(n,n.return,e)}}}r&64&&Kc(n),r&512&&Jc(n,n.return);break;case 3:if(Cl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{$a(e,t)}catch(e){J(n,n.return,e)}}break;case 27:t===null&&r&4&&nl(n);case 26:case 5:Cl(e,n),t===null&&r&4&&Xc(n),r&512&&Jc(n,n.return);break;case 12:Cl(e,n);break;case 31:Cl(e,n),r&4&&ml(e,n);break;case 13:Cl(e,n),r&4&&hl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Zu.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||rl,!r){t=t!==null&&t.memoizedState!==null||il,i=rl;var a=il;rl=r,(il=t)&&!a?Tl(e,n,!!(n.subtreeFlags&8772)):Cl(e,n),rl=i,il=a}break;case 30:break;default:Cl(e,n)}}function ul(e){var t=e.alternate;t!==null&&(e.alternate=null,ul(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&bt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var H=null,dl=!1;function fl(e,t,n){for(n=n.child;n!==null;)pl(e,t,n),n=n.sibling}function pl(e,t,n){if(Ve&&typeof Ve.onCommitFiberUnmount==`function`)try{Ve.onCommitFiberUnmount(Be,n)}catch{}switch(n.tag){case 26:il||Yc(n,t),fl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:il||Yc(n,t);var r=H,i=dl;Zd(n.type)&&(H=n.stateNode,dl=!1),fl(e,t,n),pf(n.stateNode),H=r,dl=i;break;case 5:il||Yc(n,t);case 6:if(r=H,i=dl,H=null,fl(e,t,n),H=r,dl=i,H!==null){if(dl)try{(H.nodeType===9?H.body:H.nodeName===`HTML`?H.ownerDocument.body:H).removeChild(n.stateNode)}catch(e){J(n,t,e)}else try{H.removeChild(n.stateNode)}catch(e){J(n,t,e)}}break;case 18:H!==null&&(dl?(e=H,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(H,n.stateNode));break;case 4:r=H,i=dl,H=n.stateNode.containerInfo,dl=!0,fl(e,t,n),H=r,dl=i;break;case 0:case 11:case 14:case 15:Gc(2,n,t),il||Gc(4,n,t),fl(e,t,n);break;case 1:il||(Yc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&qc(n,t,r)),fl(e,t,n);break;case 21:fl(e,t,n);break;case 22:il=(r=il)||n.memoizedState!==null,fl(e,t,n),il=r;break;default:fl(e,t,n)}}function ml(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){J(t,t.return,e)}}}function hl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){J(t,t.return,e)}}function gl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new ol),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new ol),t;default:throw Error(i(435,e.tag))}}function _l(e,t){var n=gl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Qu.bind(null,e,t);t.then(r,r)}})}function vl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){H=c.stateNode,dl=!1;break a}break;case 5:H=c.stateNode,dl=!1;break a;case 3:case 4:H=c.stateNode.containerInfo,dl=!0;break a}c=c.return}if(H===null)throw Error(i(160));pl(o,s,a),H=null,dl=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)bl(t,e),t=t.sibling}var yl=null;function bl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:vl(t,e),xl(e),r&4&&(Gc(3,e,e.return),Wc(3,e),Gc(5,e,e.return));break;case 1:vl(t,e),xl(e),r&512&&(il||n===null||Yc(n,n.return)),r&64&&rl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=yl;if(vl(t,e),xl(e),r&512&&(il||n===null||Yc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null){if(r===null){if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[yt]||o[ft]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[ft]=e,Tt(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[ft]=e,Tt(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode)}else e.stateNode=If(a,r,e.memoizedProps)}else o===r?r===null&&e.stateNode!==null&&Zc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:vl(t,e),xl(e),r&512&&(il||n===null||Yc(n,n.return)),n!==null&&r&4&&Zc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(vl(t,e),xl(e),r&512&&(il||n===null||Yc(n,n.return)),e.flags&32){a=e.stateNode;try{Zt(a,``)}catch(t){J(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Zc(e,a,n===null?a:n.memoizedProps)),r&1024&&(al=!0);break;case 6:if(vl(t,e),xl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){J(e,e.return,t)}}break;case 3:if(Bf=null,a=yl,yl=gf(t.containerInfo),vl(t,e),yl=a,xl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){J(e,e.return,t)}al&&(al=!1,Sl(e));break;case 4:r=yl,yl=gf(e.stateNode.containerInfo),vl(t,e),xl(e),yl=r;break;case 12:vl(t,e),xl(e);break;case 31:vl(t,e),xl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,_l(e,r)));break;case 13:vl(t,e),xl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(nu=je()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,_l(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=rl,d=il;if(rl=u||a,il=d||l,vl(t,e),il=d,rl=u,xl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||rl||il||wl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){J(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){J(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){J(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,_l(e,n))));break;case 19:vl(t,e),xl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,_l(e,r)));break;case 30:break;case 21:break;default:vl(t,e),xl(e)}}function xl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Qc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;tl(e,$c(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Zt(o,``),n.flags&=-33),tl(e,$c(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;el(e,$c(e),s);break;default:throw Error(i(161))}}catch(t){J(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Sl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Sl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Cl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ll(e,t.alternate,t),t=t.sibling}function wl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Gc(4,t,t.return),wl(t);break;case 1:Yc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&qc(t,t.return,n),wl(t);break;case 27:pf(t.stateNode);case 26:case 5:Yc(t,t.return),wl(t);break;case 22:t.memoizedState===null&&wl(t);break;case 30:wl(t);break;default:wl(t)}e=e.sibling}}function Tl(e,t,n){for(n&&=!!(t.subtreeFlags&8772),t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Tl(i,a,n),Wc(4,a);break;case 1:if(Tl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){J(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Qa(c[i],s)}catch(e){J(r,r.return,e)}}n&&o&64&&Kc(a),Jc(a,a.return);break;case 27:nl(a);case 26:case 5:Tl(i,a,n),n&&r===null&&o&4&&Xc(a),Jc(a,a.return);break;case 12:Tl(i,a,n);break;case 31:Tl(i,a,n),n&&o&4&&ml(i,a);break;case 13:Tl(i,a,n),n&&o&4&&hl(i,a);break;case 22:a.memoizedState===null&&Tl(i,a,n),Jc(a,a.return);break;case 30:break;default:Tl(i,a,n)}t=t.sibling}}function El(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&fa(n))}function Dl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&fa(e))}function Ol(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)kl(e,t,n,r),t=t.sibling}function kl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Ol(e,t,n,r),i&2048&&Wc(9,t);break;case 1:Ol(e,t,n,r);break;case 3:Ol(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&fa(e)));break;case 12:if(i&2048){Ol(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){J(t,t.return,e)}}else Ol(e,t,n,r);break;case 31:Ol(e,t,n,r);break;case 13:Ol(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Ol(e,t,n,r):(a._visibility|=2,Al(e,t,n,r,!!(t.subtreeFlags&10256)||!1)):a._visibility&2?Ol(e,t,n,r):jl(e,t),i&2048&&El(o,t);break;case 24:Ol(e,t,n,r),i&2048&&Dl(t.alternate,t);break;default:Ol(e,t,n,r)}}function Al(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Al(a,o,s,c,i),Wc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Al(a,o,s,c,i)):u._visibility&2?Al(a,o,s,c,i):jl(a,o),i&&l&2048&&El(o.alternate,o);break;case 24:Al(a,o,s,c,i),i&&l&2048&&Dl(o.alternate,o);break;default:Al(a,o,s,c,i)}t=t.sibling}}function jl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:jl(n,r),i&2048&&El(r.alternate,r);break;case 24:jl(n,r),i&2048&&Dl(r.alternate,r);break;default:jl(n,r)}t=t.sibling}}var Ml=8192;function Nl(e,t,n){if(e.subtreeFlags&Ml)for(e=e.child;e!==null;)Pl(e,t,n),e=e.sibling}function Pl(e,t,n){switch(e.tag){case 26:Nl(e,t,n),e.flags&Ml&&e.memoizedState!==null&&Gf(n,yl,e.memoizedState,e.memoizedProps);break;case 5:Nl(e,t,n);break;case 3:case 4:var r=yl;yl=gf(e.stateNode.containerInfo),Nl(e,t,n),yl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Ml,Ml=16777216,Nl(e,t,n),Ml=r):Nl(e,t,n));break;default:Nl(e,t,n)}}function Fl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Il(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];sl=r,zl(r,e)}Fl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ll(e),e=e.sibling}function Ll(e){switch(e.tag){case 0:case 11:case 15:Il(e),e.flags&2048&&Gc(9,e,e.return);break;case 3:Il(e);break;case 12:Il(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Rl(e)):Il(e);break;default:Il(e)}}function Rl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];sl=r,zl(r,e)}Fl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Gc(8,t,t.return),Rl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Rl(t));break;default:Rl(t)}e=e.sibling}}function zl(e,t){for(;sl!==null;){var n=sl;switch(n.tag){case 0:case 11:case 15:Gc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:fa(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,sl=r;else a:for(n=e;sl!==null;){r=sl;var i=r.sibling,a=r.return;if(ul(r),r===n){sl=null;break a}if(i!==null){i.return=a,sl=i;break a}sl=a}}}var Bl={getCacheForType:function(e){var t=ia(ua),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ia(ua).controller.signal}},Vl=typeof WeakMap==`function`?WeakMap:Map,U=0,W=null,G=null,K=0,q=0,Hl=null,Ul=!1,Wl=!1,Gl=!1,Kl=0,ql=0,Jl=0,Yl=0,Xl=0,Zl=0,Ql=0,$l=null,eu=null,tu=!1,nu=0,ru=0,iu=1/0,au=null,ou=null,su=0,cu=null,lu=null,uu=0,du=0,fu=null,pu=null,mu=0,hu=null;function gu(){return U&2&&K!==0?K&-K:k.T===null?lt():dd()}function _u(){if(Zl===0){if(!(K&536870912)||I){var e=Je;Je<<=1,!(Je&3932160)&&(Je=262144),Zl=e}else Zl=536870912}return e=io.current,e!==null&&(e.flags|=32),Zl}function vu(e,t,n){(e===W&&(q===2||q===9)||e.cancelPendingCommit!==null)&&(Tu(e,0),Su(e,K,Zl,!1)),nt(e,n),(!(U&2)||e!==W)&&(e===W&&(!(U&2)&&(Yl|=n),ql===4&&Su(e,K,Zl,!1)),X(e))}function yu(e,t,n){if(U&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||Qe(e,t),a=r?Nu(e,t):ju(e,t,!0),o=r;do{if(a===0){Wl&&!r&&Su(e,t,0,!1);break}if(n=e.current.alternate,o&&!xu(n)){a=ju(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=$l;var l=c.current.memoizedState.isDehydrated;if(l&&(Tu(c,s).flags|=256),s=ju(c,s,!1),s!==2){if(Gl&&!l){c.errorRecoveryDisabledLanes|=o,Yl|=o,a=4;break a}o=eu,eu=a,o!==null&&(eu===null?eu=o:eu.push.apply(eu,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Tu(e,0),Su(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:Su(r,t,Zl,!Ul);break a;case 2:eu=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=nu+300-je(),10<a)){if(Su(r,t,Zl,!Ul),Ze(r,0,!0)!==0)break a;uu=t,r.timeoutHandle=Kd(bu.bind(null,r,n,eu,au,tu,t,Zl,Yl,Ql,Ul,o,`Throttled`,-0,0),a);break a}bu(r,n,eu,au,tu,t,Zl,Yl,Ql,Ul,o,null,-0,0)}break}while(1);X(e)}function bu(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:on},Pl(t,a,d);var m=(a&62914560)===a?nu-je():(a&4194048)===a?ru-je():0;if(m=qf(d,m),m!==null){uu=a,e.cancelPendingCommit=m(Bu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),Su(e,a,o,!l);return}}Bu(e,t,a,n,r,i,o,s,c)}function xu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Er(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Su(e,t,n,r){t&=~Xl,t&=~Yl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ue(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&it(e,n,t)}function Cu(){return U&6?!0:(ad(0,!1),!1)}function wu(){if(G!==null){if(q===0)var e=G.return;else e=G,Xi=Yi=null,jo(e),Pa=null,Fa=0,e=G;for(;e!==null;)Uc(e.alternate,e),e=e.return;G=null}}function Tu(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),uu=0,wu(),W=e,G=n=pi(e.current,null),K=t,q=0,Hl=null,Ul=!1,Wl=Qe(e,t),Gl=!1,Ql=Zl=Xl=Yl=Jl=ql=0,eu=$l=null,tu=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Ue(r),a=1<<i;t|=e[i],r&=~a}return Kl=t,ri(),n}function Eu(e,t){z=null,k.H=Vs,t===Ta||t===Da?(t=Ma(),q=3):t===Ea?(t=Ma(),q=4):q=t===ac?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Hl=t,G===null&&(ql=1,$s(e,xi(t,e.current)))}function Du(){var e=io.current;return e===null?!0:(K&4194048)===K?ao===null:(K&62914560)===K||K&536870912?e===ao:!1}function Ou(){var e=k.H;return k.H=Vs,e===null?Vs:e}function ku(){var e=k.A;return k.A=Bl,e}function Au(){ql=4,Ul||(K&4194048)!==K&&io.current!==null||(Wl=!0),!(Jl&134217727)&&!(Yl&134217727)||W===null||Su(W,K,Zl,!1)}function ju(e,t,n){var r=U;U|=2;var i=Ou(),a=ku();(W!==e||K!==t)&&(au=null,Tu(e,t)),t=!1;var o=ql;a:do try{if(q!==0&&G!==null){var s=G,c=Hl;switch(q){case 8:wu(),o=6;break a;case 3:case 2:case 9:case 6:io.current===null&&(t=!0);var l=q;if(q=0,Hl=null,Lu(e,s,c,l),n&&Wl){o=0;break a}break;default:l=q,q=0,Hl=null,Lu(e,s,c,l)}}Mu(),o=ql;break}catch(t){Eu(e,t)}while(1);return t&&e.shellSuspendCounter++,Xi=Yi=null,U=r,k.H=i,k.A=a,G===null&&(W=null,K=0,ri()),o}function Mu(){for(;G!==null;)Fu(G)}function Nu(e,t){var n=U;U|=2;var r=Ou(),a=ku();W!==e||K!==t?(au=null,iu=je()+500,Tu(e,t)):Wl=Qe(e,t);a:do try{if(q!==0&&G!==null){t=G;var o=Hl;b:switch(q){case 1:q=0,Hl=null,Lu(e,t,o,1);break;case 2:case 9:if(Oa(o)){q=0,Hl=null,Iu(t);break}t=function(){q!==2&&q!==9||W!==e||(q=7),X(e)},o.then(t,t);break a;case 3:q=7;break a;case 4:q=5;break a;case 7:Oa(o)?(q=0,Hl=null,Iu(t)):(q=0,Hl=null,Lu(e,t,o,7));break;case 5:var s=null;switch(G.tag){case 26:s=G.memoizedState;case 5:case 27:var c=G;if(s?Wf(s):c.stateNode.complete){q=0,Hl=null;var l=c.sibling;if(l!==null)G=l;else{var u=c.return;u===null?G=null:(G=u,Ru(u))}break b}}q=0,Hl=null,Lu(e,t,o,5);break;case 6:q=0,Hl=null,Lu(e,t,o,6);break;case 8:wu(),ql=6;break a;default:throw Error(i(462))}}Pu();break}catch(t){Eu(e,t)}while(1);return Xi=Yi=null,k.H=r,k.A=a,U=n,G===null?(W=null,K=0,ri(),ql):0}function Pu(){for(;G!==null&&!ke();)Fu(G)}function Fu(e){var t=Fc(e.alternate,e,Kl);e.memoizedProps=e.pendingProps,t===null?Ru(e):G=t}function Iu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=yc(n,t,t.pendingProps,t.type,void 0,K);break;case 11:t=yc(n,t,t.pendingProps,t.type.render,t.ref,K);break;case 5:jo(t);default:Uc(n,t),t=G=mi(t,Kl),t=Fc(n,t,Kl)}e.memoizedProps=e.pendingProps,t===null?Ru(e):G=t}function Lu(e,t,n,r){Xi=Yi=null,jo(t),Pa=null,Fa=0;var i=t.return;try{if(ic(e,i,t,n,K)){ql=1,$s(e,xi(n,e.current)),G=null;return}}catch(t){if(i!==null)throw G=i,t;ql=1,$s(e,xi(n,e.current)),G=null;return}t.flags&32768?(I||r===1?e=!0:Wl||K&536870912?e=!1:(Ul=e=!0,(r===2||r===9||r===3||r===6)&&(r=io.current,r!==null&&r.tag===13&&(r.flags|=16384))),zu(t,e)):Ru(t)}function Ru(e){var t=e;do{if(t.flags&32768){zu(t,Ul);return}e=t.return;var n=Vc(t.alternate,t,Kl);if(n!==null){G=n;return}if(t=t.sibling,t!==null){G=t;return}G=t=e}while(t!==null);ql===0&&(ql=5)}function zu(e,t){do{var n=Hc(e.alternate,e);if(n!==null){n.flags&=32767,G=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){G=e;return}G=e=n}while(e!==null);ql=6,G=null}function Bu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Gu();while(su!==0);if(U&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=ni,rt(e,n,o,s,c,l),e===W&&(G=W=null,K=0),lu=t,cu=e,uu=n,du=o,fu=a,pu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,$u(Fe,function(){return Ku(),null})):(e.callbackNode=null,e.callbackPriority=0),r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=k.T,k.T=null,a=A.p,A.p=2,s=U,U|=4;try{cl(e,t,n)}finally{U=s,A.p=a,k.T=r}}su=1,Vu(),Hu(),Uu()}}function Vu(){if(su===1){su=0;var e=cu,t=lu,n=!!(t.flags&13878);if(t.subtreeFlags&13878||n){n=k.T,k.T=null;var r=A.p;A.p=2;var i=U;U|=4;try{bl(t,e);var a=zd,o=jr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Ar(s.ownerDocument.documentElement,s)){if(c!==null&&Mr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=kr(s,h),v=kr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{U=i,A.p=r,k.T=n}}e.current=t,su=2}}function Hu(){if(su===2){su=0;var e=cu,t=lu,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=k.T,k.T=null;var r=A.p;A.p=2;var i=U;U|=4;try{ll(e,t.alternate,t)}finally{U=i,A.p=r,k.T=n}}su=3}}function Uu(){if(su===4||su===3){su=0,Ae();var e=cu,t=lu,n=uu,r=pu;t.subtreeFlags&10256||t.flags&10256?su=5:(su=0,lu=cu=null,Wu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ou=null),ct(n),t=t.stateNode,Ve&&typeof Ve.onCommitFiberRoot==`function`)try{Ve.onCommitFiberRoot(Be,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=k.T,i=A.p,A.p=2,k.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{k.T=t,A.p=i}}uu&3&&Gu(),X(e),i=e.pendingLanes,n&261930&&i&42?e===hu?mu++:(mu=0,hu=e):mu=0,ad(0,!1)}}function Wu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,fa(t)))}function Gu(){return Vu(),Hu(),Uu(),Ku()}function Ku(){if(su!==5)return!1;var e=cu,t=du;du=0;var n=ct(uu),r=k.T,a=A.p;try{A.p=32>n?32:n,k.T=null,n=fu,fu=null;var o=cu,s=uu;if(su=0,lu=cu=null,uu=0,U&6)throw Error(i(331));var c=U;if(U|=4,Ll(o.current),kl(o,o.current,s,n),U=c,ad(0,!1),Ve&&typeof Ve.onPostCommitFiberRoot==`function`)try{Ve.onPostCommitFiberRoot(Be,o)}catch{}return!0}finally{A.p=a,k.T=r,Wu(e,t)}}function qu(e,t,n){t=xi(n,t),t=tc(e.stateNode,t,2),e=Ka(e,t,2),e!==null&&(nt(e,2),X(e))}function J(e,t,n){if(e.tag===3)qu(e,e,n);else for(;t!==null;){if(t.tag===3){qu(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ou===null||!ou.has(r))){e=xi(n,e),n=nc(2),r=Ka(t,n,2),r!==null&&(rc(n,r,t,e),nt(r,2),X(r));break}}t=t.return}}function Ju(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Vl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Gl=!0,i.add(n),e=Yu.bind(null,e,t,n),t.then(e,e))}function Yu(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,W===e&&(K&n)===n&&(ql===4||ql===3&&(K&62914560)===K&&300>je()-nu?!(U&2)&&Tu(e,0):Xl|=n,Ql===K&&(Ql=0)),X(e)}function Xu(e,t){t===0&&(t=et()),e=oi(e,t),e!==null&&(nt(e,t),X(e))}function Zu(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Xu(e,n)}function Qu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),Xu(e,n)}function $u(e,t){return De(e,t)}var ed=null,td=null,nd=!1,Y=!1,rd=!1,id=0;function X(e){e!==td&&e.next===null&&(td===null?ed=td=e:td=td.next=e),Y=!0,nd||(nd=!0,ud())}function ad(e,t){if(!rd&&Y){rd=!0;do for(var n=!1,r=ed;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ue(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=K,a=Ze(r,r===W?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||Qe(r,a)||(n=!0,ld(r,a))}r=r.next}while(n);rd=!1}}function od(){Z()}function Z(){Y=nd=!1;var e=0;id!==0&&Gd()&&(e=id);for(var t=je(),n=null,r=ed;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?ed=i:n.next=i,i===null&&(td=n)):(n=r,(e!==0||a&3)&&(Y=!0)),r=i}su!==0&&su!==5||ad(e,!1),id!==0&&(id=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ue(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=$e(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=W,n=K,n=Ze(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(q===2||q===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Oe(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Qe(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Oe(r),ct(n)){case 2:case 8:n=Pe;break;case 32:n=Fe;break;case 268435456:n=Le;break;default:n=Fe}return r=cd.bind(null,e),n=De(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Oe(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(su!==0&&su!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Gu()&&e.callbackNode!==n)return null;var r=K;return r=Ze(e,e===W?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(yu(e,r,t),sd(e,je()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Gu())return null;yu(e,t,!0)}function ud(){Yd(function(){U&6?De(Ne,od):Z()})}function dd(){if(id===0){var e=ha;e===0&&(e=qe,qe<<=1,!(qe&261888)&&(qe=256)),id=e}return id}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:an(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[pt]||null).action),o=r.submitter;o&&(t=(t=o[pt]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Dn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(id!==0){var e=o?pd(i,o):new FormData(i);Ds(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Ds(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<Zr.length;hd++){var gd=Zr[hd];Qr(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}Qr(Ur,`onAnimationEnd`),Qr(Wr,`onAnimationIteration`),Qr(Gr,`onAnimationStart`),Qr(`dblclick`,`onDoubleClick`),Qr(`focusin`,`onFocus`),Qr(`focusout`,`onBlur`),Qr(Kr,`onTransitionRun`),Qr(qr,`onTransitionStart`),Qr(Jr,`onTransitionCancel`),Qr(Yr,`onTransitionEnd`),kt(`onMouseEnter`,[`mouseout`,`mouseover`]),kt(`onMouseLeave`,[`mouseout`,`mouseover`]),kt(`onPointerEnter`,[`pointerout`,`pointerover`]),kt(`onPointerLeave`,[`pointerout`,`pointerover`]),Ot(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Ot(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Ot(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Ot(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Ot(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Ot(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){$r(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){$r(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[ht];n===void 0&&(n=t[ht]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,Et.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!gn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=xt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}pn(function(){var r=a,i=cn(n),s=[];a:{var c=Xr.get(e);if(c!==void 0){var l=Dn,u=e;switch(e){case`keypress`:if(Sn(n)===0)break a;case`keydown`:case`keyup`:l=Gn;break;case`focusin`:u=`focus`,l=In;break;case`focusout`:u=`blur`,l=In;break;case`beforeblur`:case`afterblur`:l=In;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Pn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Fn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=N;break;case Ur:case Wr:case Gr:l=Ln;break;case Yr:l=qn;break;case`scroll`:case`scrollend`:l=kn;break;case`wheel`:l=Jn;break;case`copy`:case`cut`:case`paste`:l=Rn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Kn;break;case`toggle`:case`beforetoggle`:l=Yn}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=mn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==sn&&(u=n.relatedTarget||n.fromElement)&&(xt(u)||u[mt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?xt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Pn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Kn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:Ct(l),h=u==null?c:Ct(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,xt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?Ct(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=mr;else if(lr(c)){if(hr)v=wr;else{v=Sr;var y=xr}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&tn(r.elementType)&&(v=mr):v=Cr;if(v&&=v(e,r)){ur(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&qt(c,`number`,c.value)}switch(y=r?Ct(r):window,e){case`focusin`:(lr(y)||y.contentEditable===`true`)&&(Pr=y,F=r,Fr=null);break;case`focusout`:Fr=F=Pr=null;break;case`mousedown`:Ir=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Ir=!1,Lr(s,n,i);break;case`selectionchange`:if(Nr)break;case`keydown`:case`keyup`:Lr(s,n,i)}var b;if(Zn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else ar?rr(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(er&&n.locale!==`ko`&&(ar||x!==`onCompositionStart`?x===`onCompositionEnd`&&ar&&(b=xn()):(vn=i,yn=`value`in vn?vn.value:vn.textContent,ar=!0)),y=Ed(r,x),0<y.length&&(x=new zn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=ir(n),b!==null&&(x.data=b)))),(b=$n?or(e,n):sr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new zn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=mn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=mn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=mn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=mn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Zt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Zt(e,``+r);break;case`className`:Ft(e,`class`,r);break;case`tabIndex`:Ft(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Ft(e,n,r);break;case`style`:en(e,r,o);break;case`data`:if(t!==`object`){Ft(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=an(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=an(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=on);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=an(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Pt(e,`popover`,r);break;case`xlinkActuate`:It(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:It(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:It(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:It(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:It(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:It(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:It(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:It(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:It(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Pt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=nn.get(n)||n,Pt(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:en(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Zt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Zt(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=on);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!Dt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[pt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Pt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Kt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Jt(e,!!r,n,!0):Jt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}Xt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(tn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Gt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Jt(e,!!n,n?[]:``,!1):Jt(e,!!n,t,!0)):Jt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Yt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(tn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e!==Wd&&(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[yt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body)}n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),bt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[yt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);bt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=A.d;A.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=Cu();return e||t}function yf(e){var t=St(e);t!==null&&t.tag===5&&t.type===`form`?ks(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Wt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),Tt(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Wt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Wt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Wt(n.imageSizes)+`"]`)):i+=`[href="`+Wt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=m({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),Tt(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Wt(r)+`"][href="`+Wt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=m({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),Tt(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=wt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=m({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);Tt(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=wt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=m({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Tt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=wt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=m({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Tt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=pe.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=wt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=wt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=wt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Wt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return m({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),Tt(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Wt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Wt(n.href)+`"]`);if(r)return t.instance=r,Tt(r),r;var a=m({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Tt(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,Tt(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),Tt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,Tt(a),a):(r=n,(a=mf.get(o))&&(r=m({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Tt(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[yt]||a[ft]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Tt(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),Tt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:S,Provider:null,Consumer:null,_currentValue:se,_currentValue2:se,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=tt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tt(0),this.hiddenUpdates=tt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=di(3,null,null,t),e.current=a,a.stateNode=e,t=da(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ua(a),e}function tp(e){return e?(e=li,e):li}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ga(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ka(e,r,t),n!==null&&(vu(n,e,t),qa(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=oi(e,67108864);t!==null&&vu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=gu();t=st(t);var n=oi(e,t);n!==null&&vu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=k.T;k.T=null;var a=A.p;try{A.p=2,up(e,t,n,r)}finally{A.p=a,k.T=i}}function lp(e,t,n,r){var i=k.T;k.T=null;var a=A.p;try{A.p=8,up(e,t,n,r)}finally{A.p=a,k.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=St(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Xe(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ue(o);s.entanglements[1]|=c,o&=~c}X(a),!(U&6)&&(iu=je()+500,ad(0,!1))}}break;case 31:case 13:s=oi(a,2),s!==null&&vu(s,a,2),Cu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=cn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=xt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Me()){case Ne:return 2;case Pe:return 8;case Fe:case Ie:return 32;case Le:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=St(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=xt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,ut(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,ut(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);sn=r,n.target.dispatchEvent(r),sn=null}else return t=St(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=St(n);a!==null&&(e.splice(t,3),t-=3,Ds(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[pt]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[pt]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,gu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),Cu(),t[mt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=lt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.8`)throw Error(i(527,Lp,`19.2.8`));A.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=u(t),e=e===null?null:f(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.8`,rendererPackageName:`react-dom`,currentDispatcherRef:k,reconcilerVersion:`19.2.8`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Be=zp.inject(Rp),Ve=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Xs,s=Zs,c=Qs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[mt]=t.current,Sd(e),new Fp(t)}})),_=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=g()})),v=l(p(),1),y=_(),b=`modulepreload`,x=function(e){return`/react-vite-work1/`+e},ee={},S=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=x(t,n),t=s(t),t in ee)return;ee[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:b,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},C=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,w=/^[\\/]{2}/;function te(e,t){return t+e.replace(/\\/g,`/`)}var ne=`popstate`;function T(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function re(e={}){function t(e,t){let{pathname:n=`/`,search:r=``,hash:i=``}=k(e.location.hash.substring(1));return!n.startsWith(`/`)&&!n.startsWith(`.`)&&(n=`/`+n),ae(``,{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||`default`)}function n(e,t){let n=e.document.querySelector(`base`),r=``;if(n&&n.getAttribute(`href`)){let t=e.location.href,n=t.indexOf(`#`);r=n===-1?t:t.slice(0,n)}return r+`#`+(typeof t==`string`?t:oe(t))}function r(e,t){D(e.pathname.charAt(0)===`/`,`relative pathnames are not supported in hash history.push(${JSON.stringify(t)})`)}return A(t,n,r,e)}function E(e,t){if(e===!1||e==null)throw Error(t)}function D(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function O(){return Math.random().toString(36).substring(2,10)}function ie(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function ae(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?k(t):t,state:n,key:t&&t.key||r||O(),mask:i}}function oe({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function k(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function A(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=T(e)?e:ae(h.location,e,t);n&&n(r,e),l=u()+1;let d=ie(r,l),f=h.createHref(r.mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=T(e)?e:ae(h.location,e,t);n&&n(r,e),l=u();let i=ie(r,l),d=h.createHref(r.mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return se(i,e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(ne,d),c=e,()=>{i.removeEventListener(ne,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function se(e,t,n=!1){let r=`http://localhost`;e&&(r=e.location.origin===`null`?e.location.href:e.location.origin),E(r,`No window.location.(origin|href) available to create URL`);let i=typeof t==`string`?t:oe(t);return i=i.replace(/ $/,`%20`),!n&&w.test(i)&&(i=r+i),new URL(i,r)}function ce(e,t,n=`/`){return le(e,t,n,!1)}function le(e,t,n,r,i){let a=Ee((typeof t==`string`?k(t):t).pathname||`/`,n);if(a==null)return null;let o=i??ue(e),s=null,c=Te(a);for(let e=0;s==null&&e<o.length;++e)s=xe(o[e],c,r);return s}function ue(e){let t=j(e);return de(t),t}function j(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;E(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=Pe([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(E(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),j(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:ye(l,e.index),routesMeta:u.map((e,t)=>{let[n,r]=we(e.relativePath,e.caseSensitive,t===u.length-1);return{...e,matcher:n,compiledParams:r}})})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of M(e.path))a(e,t,!0,n)}),t}function M(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=M(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function de(e){e.sort((e,t)=>e.score===t.score?be(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var fe=/^:[\w-]+$/,pe=3,me=2,he=1,ge=10,_e=-2,ve=e=>e===`*`;function ye(e,t){let n=e.split(`/`),r=n.length;return n.some(ve)&&(r+=_e),t&&(r+=me),n.filter(e=>!ve(e)).reduce((e,t)=>e+(fe.test(t)?pe:t===``?he:ge),r)}function be(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function xe(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u={path:s.relativePath,caseSensitive:s.caseSensitive,end:c},d=s.matcher&&s.compiledParams?Ce(u,l,s.matcher,s.compiledParams):Se(u,l),f=s.route;if(!d&&c&&n&&!r[r.length-1].route.index&&(d=Se({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:Pe([a,d.pathname]),pathnameBase:Ie(Pe([a,d.pathnameBase])),route:f}),d.pathnameBase!==`/`&&(a=Pe([a,d.pathnameBase]))}return o}function Se(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=we(e.path,e.caseSensitive,e.end);return Ce(e,t,n,r)}function Ce(e,t,n,r){let i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let i=s[r];return e[t]=n&&!i?void 0:(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function we(e,t=!1,n=!0){D(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function Te(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return D(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Ee(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}function De(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?k(e):e,a;return n?(n=Ne(n),a=n.startsWith(`/`)?Oe(n.substring(1),`/`):Oe(n,t)):a=t,{pathname:a,search:Le(r),hash:Re(i)}}function Oe(e,t){let n=Fe(t).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function ke(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ae(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function je(e){let t=Ae(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function Me(e,t,n,r=!1){let i;typeof e==`string`?i=k(e):(i={...e},E(!i.pathname||!i.pathname.includes(`?`),ke(`?`,`pathname`,`search`,i)),E(!i.pathname||!i.pathname.includes(`#`),ke(`#`,`pathname`,`hash`,i)),E(!i.search||!i.search.includes(`#`),ke(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=De(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var Ne=e=>e.replace(/[\\/]{2,}/g,`/`),Pe=e=>Ne(e.join(`/`)),Fe=e=>e.replace(/\/+$/,``),Ie=e=>Fe(e).replace(/^\/*/,`/`),Le=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,Re=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,ze=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Be(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function Ve(e){return Pe(e.map(e=>e.route.path).filter(Boolean))||`/`}var He=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function Ue(e,t){let n=e;if(typeof n!=`string`||!C.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(He)try{let e=new URL(window.location.href),r=w.test(n)?new URL(te(n,e.protocol)):new URL(n),a=Ee(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{D(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var We=[`POST`,`PUT`,`PATCH`,`DELETE`];new Set(We);var Ge=[`GET`,...We];new Set(Ge);var Ke=[`about:`,`blob:`,`chrome:`,`chrome-untrusted:`,`content:`,`data:`,`devtools:`,`file:`,`filesystem:`,`javascript:`];function qe(e){try{return Ke.includes(new URL(e).protocol)}catch{return!1}}var Je=v.createContext(null);Je.displayName=`DataRouter`;var Ye=v.createContext(null);Ye.displayName=`DataRouterState`;var Xe=v.createContext(!1);function Ze(){return v.useContext(Xe)}var Qe=v.createContext({isTransitioning:!1});Qe.displayName=`ViewTransition`;var $e=v.createContext(new Map);$e.displayName=`Fetchers`;var et=v.createContext(null);et.displayName=`Await`;var tt=v.createContext(null);tt.displayName=`Navigation`;var nt=v.createContext(null);nt.displayName=`Location`;var rt=v.createContext({outlet:null,matches:[],isDataRoute:!1});rt.displayName=`Route`;var it=v.createContext(null);it.displayName=`RouteError`;var at=`REACT_ROUTER_ERROR`,ot=`REDIRECT`,st=`ROUTE_ERROR_RESPONSE`;function ct(e){if(e.startsWith(`${at}:${ot}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function lt(e){if(e.startsWith(`${at}:${st}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new ze(t.status,t.statusText,t.data)}catch{}}function ut(e,{relative:t}={}){E(dt(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=v.useContext(tt),{hash:i,pathname:a,search:o}=xt(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:Pe([n,a])),r.createHref({pathname:s,search:o,hash:i})}function dt(){return v.useContext(nt)!=null}function ft(){return E(dt(),`useLocation() may be used only in the context of a <Router> component.`),v.useContext(nt).location}var pt=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function mt(e){v.useContext(tt).static||v.useLayoutEffect(e)}function ht(){let{isDataRoute:e}=v.useContext(rt);return e?Rt():gt()}function gt(){E(dt(),`useNavigate() may be used only in the context of a <Router> component.`);let e=v.useContext(Je),{basename:t,navigator:n}=v.useContext(tt),{matches:r}=v.useContext(rt),{pathname:i}=ft(),a=JSON.stringify(je(r)),o=v.useRef(!1);return mt(()=>{o.current=!0}),v.useCallback((r,s={})=>{if(D(o.current,pt),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=Me(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:Pe([t,c.pathname])),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}var _t=v.createContext(null);function vt(){return v.useContext(_t)}function yt(e){let t=v.useContext(rt).outlet;return v.useMemo(()=>t&&v.createElement(_t.Provider,{value:e},t),[t,e])}function bt(){let{matches:e}=v.useContext(rt);return e[e.length-1]?.params??{}}function xt(e,{relative:t}={}){let{matches:n}=v.useContext(rt),{pathname:r}=ft(),i=JSON.stringify(je(n));return v.useMemo(()=>Me(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function St(e,t){return Ct(e,t)}function Ct(e,t,n){E(dt(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=v.useContext(tt),{matches:i}=v.useContext(rt),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;Bt(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=ft(),d;if(t){let e=typeof t==`string`?k(t):t;E(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=n&&n.state.matches.length?n.state.matches.map(e=>Object.assign(e,{route:n.manifest[e.route.id]||e.route})):ce(e,{pathname:p});D(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),D(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=At(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:Pe([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:Pe([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?v.createElement(nt.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,mask:void 0,...d},navigationType:`POP`}},h):h}function wt(){let e=Lt(),t=Be(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=v.createElement(v.Fragment,null,v.createElement(`p`,null,`💿 Hey developer 👋`),v.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,v.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,v.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),v.createElement(v.Fragment,null,v.createElement(`h2`,null,`Unexpected Application Error!`),v.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?v.createElement(`pre`,{style:i},n):null,o)}var Tt=v.createElement(wt,null),Et=class extends v.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=lt(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:v.createElement(rt.Provider,{value:this.props.routeContext},v.createElement(it.Provider,{value:e,children:this.props.component}));return this.context?v.createElement(Ot,{error:e},t):t}};Et.contextType=Xe;var Dt=new WeakMap;function Ot({children:e,error:t}){let{basename:n}=v.useContext(tt);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=ct(t.digest);if(e){let r=Dt.get(t);if(r)throw r;let i=Ue(e.location,n),a=i.absoluteURL||i.to;if(qe(a))throw Error(`Invalid redirect location`);if(He&&!Dt.get(t)){if(i.isExternal||e.reloadDocument)window.location.href=a;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:e.replace}));throw Dt.set(t,n),n}}return v.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${a}`})}}return e}function kt({routeContext:e,match:t,children:n}){let r=v.useContext(Je);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),v.createElement(rt.Provider,{value:e},n)}function At(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);E(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},pattern:Ve(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||Tt,o&&(s<0&&c===0?(Bt(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?v.createElement(n.route.Component,null):n.route.element?n.route.element:e,v.createElement(kt,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?v.createElement(Et,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function jt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Mt(e){let t=v.useContext(Je);return E(t,jt(e)),t}function Nt(e){let t=v.useContext(Ye);return E(t,jt(e)),t}function Pt(e){let t=v.useContext(rt);return E(t,jt(e)),t}function Ft(e){let t=Pt(e),n=t.matches[t.matches.length-1];return E(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function It(){return Ft(`useRouteId`)}function Lt(){let e=v.useContext(it),t=Nt(`useRouteError`),n=Ft(`useRouteError`);return e===void 0?t.errors?.[n]:e}function Rt(){let{router:e}=Mt(`useNavigate`),t=Ft(`useNavigate`),n=v.useRef(!1);return mt(()=>{n.current=!0}),v.useCallback(async(r,i={})=>{D(n.current,pt),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var zt={};function Bt(e,t,n){!t&&!zt[e]&&(zt[e]=!0,D(!1,n))}v.memo(Vt);function Vt({routes:e,manifest:t,future:n,state:r,isStatic:i,onError:a}){return Ct(e,void 0,{manifest:t,state:r,isStatic:i,onError:a,future:n})}function Ht(e){return yt(e.context)}function Ut(e){E(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function Wt({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,useTransitions:o}){E(!dt(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=v.useMemo(()=>({basename:s,navigator:i,static:a,useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=k(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,mask:m}=n,h=v.useMemo(()=>{let e=Ee(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return D(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:v.createElement(tt.Provider,{value:c},v.createElement(nt.Provider,{children:t,value:h}))}function Gt({children:e,location:t}){return St(Kt(e),t)}v.Component;function Kt(e,t=[]){let n=[];return v.Children.forEach(e,(e,r)=>{if(!v.isValidElement(e))return;let i=[...t,r];if(e.type===v.Fragment){n.push.apply(n,Kt(e.props.children,i));return}E(e.type===Ut,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),E(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=Kt(e.props.children,i)),n.push(a)}),n}var qt=`get`,Jt=`application/x-www-form-urlencoded`;function Yt(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function Xt(e){return Yt(e)&&e.tagName.toLowerCase()===`button`}function Zt(e){return Yt(e)&&e.tagName.toLowerCase()===`form`}function Qt(e){return Yt(e)&&e.tagName.toLowerCase()===`input`}function $t(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function en(e,t){return e.button===0&&(!t||t===`_self`)&&!$t(e)}var tn=null;function nn(){if(tn===null)try{new FormData(document.createElement(`form`),0),tn=!1}catch{tn=!0}return tn}var rn=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function an(e){return e!=null&&!rn.has(e)?(D(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Jt}"`),null):e}function on(e,t){let n,r,i,a,o;if(Zt(e)){let o=e.getAttribute(`action`);r=o?Ee(o,t):null,n=e.getAttribute(`method`)||qt,i=an(e.getAttribute(`enctype`))||Jt,a=new FormData(e)}else if(Xt(e)||Qt(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?Ee(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||qt,i=an(e.getAttribute(`formenctype`))||an(o.getAttribute(`enctype`))||Jt,a=new FormData(o,e),!nn()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(Yt(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=qt,r=null,i=Jt,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);function sn(e,t){if(e===!1||e==null)throw Error(t)}function cn(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return i.pathname=n?i.pathname.endsWith(`/`)?`${i.pathname}_.${r}`:`${i.pathname}.${r}`:i.pathname===`/`?`_root.${r}`:t&&Ee(i.pathname,t)===`/`?`${Fe(t)}/_root.${r}`:`${Fe(i.pathname)}.${r}`,i}async function ln(e,t){if(e.id in t)return t[e.id];try{let n=await S(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function un(e){return e!=null&&typeof e.page==`string`}function dn(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function fn(e,t,n){return _n((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await ln(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(dn).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function pn(e,t,n,r,i,a){let o=(e,t)=>!n[t]||e.route.id!==n[t].route.id,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function mn(e,t,{includeHydrateFallback:n}={}){return hn(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function hn(e){return[...new Set(e)]}function gn(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function _n(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!un(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(gn(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function vn(){let e=v.useContext(Je);return sn(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function yn(){let e=v.useContext(Ye);return sn(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var bn=v.createContext(void 0);bn.displayName=`FrameworkContext`;function xn(){let e=v.useContext(bn);return sn(e,`You must render this element inside a <HydratedRouter> element`),e}function Sn(e,t){let n=v.useContext(bn),[r,i]=v.useState(!1),[a,o]=v.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=v.useRef(null);v.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),v.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:Cn(s,p),onBlur:Cn(c,m),onMouseEnter:Cn(l,p),onMouseLeave:Cn(u,m),onTouchStart:Cn(d,p)}]:[a,f,{}]:[!1,f,{}]}function Cn(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function wn({page:e,...t}){let n=Ze(),{nonce:r}=xn(),{router:i}=vn(),a=v.useMemo(()=>ce(i.routes,e,i.basename),[i.routes,e,i.basename]);return a?(t.nonce==null&&r&&(t={...t,nonce:r}),n?v.createElement(En,{page:e,matches:a,...t}):v.createElement(Dn,{page:e,matches:a,...t})):null}function Tn(e){let{manifest:t,routeModules:n}=xn(),[r,i]=v.useState([]);return v.useEffect(()=>{let r=!1;return fn(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function En({page:e,matches:t,...n}){let r=ft(),{future:i}=xn(),{basename:a}=vn(),o=v.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=cn(e,a,i.v8_trailingSlashAwareDataRequests,`rsc`),o=!1,s=[];for(let e of t)typeof e.route.shouldRevalidate==`function`?o=!0:s.push(e.route.id);return o&&s.length>0&&n.searchParams.set(`_routes`,s.join(`,`)),[n.pathname+n.search]},[a,i.v8_trailingSlashAwareDataRequests,e,r,t]);return v.createElement(v.Fragment,null,o.map(e=>v.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})))}function Dn({page:e,matches:t,...n}){let r=ft(),{future:i,manifest:a,routeModules:o}=xn(),{basename:s}=vn(),{loaderData:c,matches:l}=yn(),u=v.useMemo(()=>pn(e,t,l,a,r,`data`),[e,t,l,a,r]),d=v.useMemo(()=>pn(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=v.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];!t||!t.hasLoader||(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=cn(e,s,i.v8_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.v8_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=v.useMemo(()=>mn(d,a),[d,a]),m=Tn(d);return v.createElement(v.Fragment,null,f.map(e=>v.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>v.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>v.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function On(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}v.Component;var kn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{kn&&(window.__reactRouterVersion=`7.18.2`)}catch{}function An({basename:e,children:t,useTransitions:n,window:r}){let i=v.useRef();i.current??=re({window:r,v5Compat:!0});let a=i.current,[o,s]=v.useState({action:a.action,location:a.location}),c=v.useCallback(e=>{n===!1?s(e):v.startTransition(()=>s(e))},[n]);return v.useLayoutEffect(()=>a.listen(c),[a,c]),v.createElement(Wt,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,useTransitions:n})}var jn=v.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,useTransitions:_}=v.useContext(tt),y=typeof l==`string`&&C.test(l),b=Ue(l,h);l=b.to;let x=ut(l,{relative:r}),ee=ft(),S=null;if(o){let e=Me(o,[],ee.mask?ee.mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:Pe([h,e.pathname])),S=g.createHref(e)}let[w,te,ne]=Sn(n,p),T=In(l,{replace:a,mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,defaultShouldRevalidate:f,useTransitions:_});function re(t){e&&e(t),t.defaultPrevented||T(t)}let E=!(b.isExternal||i),D=v.createElement(`a`,{...p,...ne,href:(E?S:void 0)||b.absoluteURL||x,onClick:E?re:e,ref:On(m,te),target:c,"data-discover":!y&&t===`render`?`true`:void 0});return w&&!y?v.createElement(v.Fragment,null,D,v.createElement(wn,{page:x})):D});jn.displayName=`Link`;var Mn=v.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=xt(a,{relative:c.relative}),d=ft(),f=v.useContext(Ye),{navigator:p,basename:m}=v.useContext(tt),h=f!=null&&Vn(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,_=d.pathname,y=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(_=_.toLowerCase(),y=y?y.toLowerCase():null,g=g.toLowerCase()),y&&m&&(y=Ee(y,m)||y);let b=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,x=_===g||!r&&_.startsWith(g)&&_.charAt(b)===`/`,ee=y!=null&&(y===g||!r&&y.startsWith(g)&&y.charAt(g.length)===`/`),S={isActive:x,isPending:ee,isTransitioning:h},C=x?e:void 0,w;w=typeof n==`function`?n(S):[n,x?`active`:null,ee?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let te=typeof i==`function`?i(S):i;return v.createElement(jn,{...c,"aria-current":C,className:w,ref:l,style:te,to:a,viewTransition:o},typeof s==`function`?s(S):s)});Mn.displayName=`NavLink`;var Nn=v.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=qt,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m)=>{let{useTransitions:h}=v.useContext(tt),g=zn(),_=Bn(s,{relative:l}),y=o.toLowerCase()===`get`?`get`:`post`,b=typeof s==`string`&&C.test(s);return v.createElement(`form`,{ref:m,method:y,action:_,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f});h&&n!==!1?v.startTransition(()=>p()):p()},...p,"data-discover":!b&&e===`render`?`true`:void 0})});Nn.displayName=`Form`;function Pn(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Fn(e){let t=v.useContext(Je);return E(t,Pn(e)),t}function In(e,{target:t,replace:n,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c,useTransitions:l}={}){let u=ht(),d=ft(),f=xt(e,{relative:o});return v.useCallback(p=>{if(en(p,t)){p.preventDefault();let t=n===void 0?oe(d)===oe(f):n,m=()=>u(e,{replace:t,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c});l?v.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}var Ln=0,Rn=()=>`__${String(++Ln)}__`;function zn(){let{router:e}=Fn(`useSubmit`),{basename:t}=v.useContext(tt),n=It(),r=e.fetch,i=e.navigate;return v.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=on(e,t);if(a.navigate===!1){let e=a.fetcherKey||Rn();await r(e,n,a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync})}else await i(a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function Bn(e,{relative:t}={}){let{basename:n}=v.useContext(tt),r=v.useContext(rt);E(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...xt(e||`.`,{relative:t})},o=ft();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:Pe([n,a.pathname])),oe(a)}function Vn(e,{relative:t}={}){let n=v.useContext(Qe);E(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Fn(`useViewTransitionState`),i=xt(e,{relative:t});if(!n.isTransitioning)return!1;let a=Ee(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Ee(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Se(i.pathname,o)!=null||Se(i.pathname,a)!=null}function Hn(e,t){t===void 0&&(t={});var n=t.insertAt;if(e&&typeof document<`u`){var r=document.head||document.getElementsByTagName(`head`)[0],i=document.createElement(`style`);i.type=`text/css`,n===`top`&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}Hn(`.react-loading-indicator-normalize,
[class$=rli-bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
  isolation: isolate;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var Un=function(){return Un=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},Un.apply(this,arguments)};function Wn(e){return Wn=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Wn(e)}var Gn=/^\s+/,Kn=/\s+$/;function N(e,t){if(t||={},(e||=``)instanceof N)return e;if(!(this instanceof N))return new N(e,t);var n=function(e){var t={r:0,g:0,b:0},n=1,r=null,i=null,a=null,o=!1,s=!1;typeof e==`string`&&(e=function(e){e=e.replace(Gn,``).replace(Kn,``).toLowerCase();var t,n=!1;if(lr[e])e=lr[e],n=!0;else if(e==`transparent`)return{r:0,g:0,b:0,a:0,format:`name`};return(t=xr.rgb.exec(e))?{r:t[1],g:t[2],b:t[3]}:(t=xr.rgba.exec(e))?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=xr.hsl.exec(e))?{h:t[1],s:t[2],l:t[3]}:(t=xr.hsla.exec(e))?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=xr.hsv.exec(e))?{h:t[1],s:t[2],v:t[3]}:(t=xr.hsva.exec(e))?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=xr.hex8.exec(e))?{r:pr(t[1]),g:pr(t[2]),b:pr(t[3]),a:_r(t[4]),format:n?`name`:`hex8`}:(t=xr.hex6.exec(e))?{r:pr(t[1]),g:pr(t[2]),b:pr(t[3]),format:n?`name`:`hex`}:(t=xr.hex4.exec(e))?{r:pr(t[1]+``+t[1]),g:pr(t[2]+``+t[2]),b:pr(t[3]+``+t[3]),a:_r(t[4]+``+t[4]),format:n?`name`:`hex8`}:(t=xr.hex3.exec(e))?{r:pr(t[1]+``+t[1]),g:pr(t[2]+``+t[2]),b:pr(t[3]+``+t[3]),format:n?`name`:`hex`}:!1}(e)),Wn(e)==`object`&&(Sr(e.r)&&Sr(e.g)&&Sr(e.b)?(c=e.r,l=e.g,u=e.b,t={r:255*P(c,255),g:255*P(l,255),b:255*P(u,255)},o=!0,s=String(e.r).substr(-1)===`%`?`prgb`:`rgb`):Sr(e.h)&&Sr(e.s)&&Sr(e.v)?(r=hr(e.s),i=hr(e.v),t=function(e,t,n){e=6*P(e,360),t=P(t,100),n=P(n,100);var r=Math.floor(e),i=e-r,a=n*(1-t),o=n*(1-i*t),s=n*(1-(1-i)*t),c=r%6,l=[n,o,a,a,s,n][c],u=[s,n,n,o,a,a][c],d=[a,a,s,n,n,o][c];return{r:255*l,g:255*u,b:255*d}}(e.h,r,i),o=!0,s=`hsv`):Sr(e.h)&&Sr(e.s)&&Sr(e.l)&&(r=hr(e.s),a=hr(e.l),t=function(e,t,n){var r,i,a;function o(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}if(e=P(e,360),t=P(t,100),n=P(n,100),t===0)r=i=a=n;else{var s=n<.5?n*(1+t):n+t-n*t,c=2*n-s;r=o(c,s,e+1/3),i=o(c,s,e),a=o(c,s,e-1/3)}return{r:255*r,g:255*i,b:255*a}}(e.h,r,a),o=!0,s=`hsl`),e.hasOwnProperty(`a`)&&(n=e.a));var c,l,u;return n=dr(n),{ok:o,format:e.format||s,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:n}}(e);this._originalInput=e,this._r=n.r,this._g=n.g,this._b=n.b,this._a=n.a,this._roundA=Math.round(100*this._a)/100,this._format=t.format||n.format,this._gradientType=t.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=n.ok}function qn(e,t,n){e=P(e,255),t=P(t,255),n=P(n,255);var r,i,a=Math.max(e,t,n),o=Math.min(e,t,n),s=(a+o)/2;if(a==o)r=i=0;else{var c=a-o;switch(i=s>.5?c/(2-a-o):c/(a+o),a){case e:r=(t-n)/c+(t<n?6:0);break;case t:r=(n-e)/c+2;break;case n:r=(e-t)/c+4}r/=6}return{h:r,s:i,l:s}}function Jn(e,t,n){e=P(e,255),t=P(t,255),n=P(n,255);var r,i,a=Math.max(e,t,n),o=Math.min(e,t,n),s=a,c=a-o;if(i=a===0?0:c/a,a==o)r=0;else{switch(a){case e:r=(t-n)/c+(t<n?6:0);break;case t:r=(n-e)/c+2;break;case n:r=(e-t)/c+4}r/=6}return{h:r,s:i,v:s}}function Yn(e,t,n,r){var i=[mr(Math.round(e).toString(16)),mr(Math.round(t).toString(16)),mr(Math.round(n).toString(16))];return r&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0):i.join(``)}function Xn(e,t,n,r){return[mr(gr(r)),mr(Math.round(e).toString(16)),mr(Math.round(t).toString(16)),mr(Math.round(n).toString(16))].join(``)}function Zn(e,t){t=t===0?0:t||10;var n=N(e).toHsl();return n.s-=t/100,n.s=fr(n.s),N(n)}function Qn(e,t){t=t===0?0:t||10;var n=N(e).toHsl();return n.s+=t/100,n.s=fr(n.s),N(n)}function $n(e){return N(e).desaturate(100)}function er(e,t){t=t===0?0:t||10;var n=N(e).toHsl();return n.l+=t/100,n.l=fr(n.l),N(n)}function tr(e,t){t=t===0?0:t||10;var n=N(e).toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(-t/100*255))),n.g=Math.max(0,Math.min(255,n.g-Math.round(-t/100*255))),n.b=Math.max(0,Math.min(255,n.b-Math.round(-t/100*255))),N(n)}function nr(e,t){t=t===0?0:t||10;var n=N(e).toHsl();return n.l-=t/100,n.l=fr(n.l),N(n)}function rr(e,t){var n=N(e).toHsl(),r=(n.h+t)%360;return n.h=r<0?360+r:r,N(n)}function ir(e){var t=N(e).toHsl();return t.h=(t.h+180)%360,N(t)}function ar(e,t){if(isNaN(t)||t<=0)throw Error(`Argument to polyad must be a positive number`);for(var n=N(e).toHsl(),r=[N(e)],i=360/t,a=1;a<t;a++)r.push(N({h:(n.h+a*i)%360,s:n.s,l:n.l}));return r}function or(e){var t=N(e).toHsl(),n=t.h;return[N(e),N({h:(n+72)%360,s:t.s,l:t.l}),N({h:(n+216)%360,s:t.s,l:t.l})]}function sr(e,t,n){t||=6,n||=30;var r=N(e).toHsl(),i=360/n,a=[N(e)];for(r.h=(r.h-(i*t>>1)+720)%360;--t;)r.h=(r.h+i)%360,a.push(N(r));return a}function cr(e,t){t||=6;for(var n=N(e).toHsv(),r=n.h,i=n.s,a=n.v,o=[],s=1/t;t--;)o.push(N({h:r,s:i,v:a})),a=(a+s)%1;return o}N.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance:function(){var e,t,n,r=this.toRgb();return e=r.r/255,t=r.g/255,n=r.b/255,.2126*(e<=.03928?e/12.92:((e+.055)/1.055)**2.4)+.7152*(t<=.03928?t/12.92:((t+.055)/1.055)**2.4)+.0722*(n<=.03928?n/12.92:((n+.055)/1.055)**2.4)},setAlpha:function(e){return this._a=dr(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=Jn(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=Jn(this._r,this._g,this._b),t=Math.round(360*e.h),n=Math.round(100*e.s),r=Math.round(100*e.v);return this._a==1?`hsv(`+t+`, `+n+`%, `+r+`%)`:`hsva(`+t+`, `+n+`%, `+r+`%, `+this._roundA+`)`},toHsl:function(){var e=qn(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=qn(this._r,this._g,this._b),t=Math.round(360*e.h),n=Math.round(100*e.s),r=Math.round(100*e.l);return this._a==1?`hsl(`+t+`, `+n+`%, `+r+`%)`:`hsla(`+t+`, `+n+`%, `+r+`%, `+this._roundA+`)`},toHex:function(e){return Yn(this._r,this._g,this._b,e)},toHexString:function(e){return`#`+this.toHex(e)},toHex8:function(e){return function(e,t,n,r,i){var a=[mr(Math.round(e).toString(16)),mr(Math.round(t).toString(16)),mr(Math.round(n).toString(16)),mr(gr(r))];return i&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)&&a[3].charAt(0)==a[3].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0)+a[3].charAt(0):a.join(``)}(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return`#`+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?`rgb(`+Math.round(this._r)+`, `+Math.round(this._g)+`, `+Math.round(this._b)+`)`:`rgba(`+Math.round(this._r)+`, `+Math.round(this._g)+`, `+Math.round(this._b)+`, `+this._roundA+`)`},toPercentageRgb:function(){return{r:Math.round(100*P(this._r,255))+`%`,g:Math.round(100*P(this._g,255))+`%`,b:Math.round(100*P(this._b,255))+`%`,a:this._a}},toPercentageRgbString:function(){return this._a==1?`rgb(`+Math.round(100*P(this._r,255))+`%, `+Math.round(100*P(this._g,255))+`%, `+Math.round(100*P(this._b,255))+`%)`:`rgba(`+Math.round(100*P(this._r,255))+`%, `+Math.round(100*P(this._g,255))+`%, `+Math.round(100*P(this._b,255))+`%, `+this._roundA+`)`},toName:function(){return this._a===0?`transparent`:!(this._a<1)&&(ur[Yn(this._r,this._g,this._b,!0)]||!1)},toFilter:function(e){var t=`#`+Xn(this._r,this._g,this._b,this._a),n=t,r=this._gradientType?`GradientType = 1, `:``;if(e){var i=N(e);n=`#`+Xn(i._r,i._g,i._b,i._a)}return`progid:DXImageTransform.Microsoft.gradient(`+r+`startColorstr=`+t+`,endColorstr=`+n+`)`},toString:function(e){var t=!!e;e||=this._format;var n=!1,r=this._a<1&&this._a>=0;return t||!r||e!==`hex`&&e!==`hex6`&&e!==`hex3`&&e!==`hex4`&&e!==`hex8`&&e!==`name`?(e===`rgb`&&(n=this.toRgbString()),e===`prgb`&&(n=this.toPercentageRgbString()),e!==`hex`&&e!==`hex6`||(n=this.toHexString()),e===`hex3`&&(n=this.toHexString(!0)),e===`hex4`&&(n=this.toHex8String(!0)),e===`hex8`&&(n=this.toHex8String()),e===`name`&&(n=this.toName()),e===`hsl`&&(n=this.toHslString()),e===`hsv`&&(n=this.toHsvString()),n||this.toHexString()):e===`name`&&this._a===0?this.toName():this.toRgbString()},clone:function(){return N(this.toString())},_applyModification:function(e,t){var n=e.apply(null,[this].concat([].slice.call(t)));return this._r=n._r,this._g=n._g,this._b=n._b,this.setAlpha(n._a),this},lighten:function(){return this._applyModification(er,arguments)},brighten:function(){return this._applyModification(tr,arguments)},darken:function(){return this._applyModification(nr,arguments)},desaturate:function(){return this._applyModification(Zn,arguments)},saturate:function(){return this._applyModification(Qn,arguments)},greyscale:function(){return this._applyModification($n,arguments)},spin:function(){return this._applyModification(rr,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(sr,arguments)},complement:function(){return this._applyCombination(ir,arguments)},monochromatic:function(){return this._applyCombination(cr,arguments)},splitcomplement:function(){return this._applyCombination(or,arguments)},triad:function(){return this._applyCombination(ar,[3])},tetrad:function(){return this._applyCombination(ar,[4])}},N.fromRatio=function(e,t){if(Wn(e)==`object`){var n={};for(var r in e)e.hasOwnProperty(r)&&(n[r]=r===`a`?e[r]:hr(e[r]));e=n}return N(e,t)},N.equals=function(e,t){return!(!e||!t)&&N(e).toRgbString()==N(t).toRgbString()},N.random=function(){return N.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},N.mix=function(e,t,n){n=n===0?0:n||50;var r=N(e).toRgb(),i=N(t).toRgb(),a=n/100;return N({r:(i.r-r.r)*a+r.r,g:(i.g-r.g)*a+r.g,b:(i.b-r.b)*a+r.b,a:(i.a-r.a)*a+r.a})},N.readability=function(e,t){var n=N(e),r=N(t);return(Math.max(n.getLuminance(),r.getLuminance())+.05)/(Math.min(n.getLuminance(),r.getLuminance())+.05)},N.isReadable=function(e,t,n){var r,i,a=N.readability(e,t);switch(i=!1,(r=function(e){var t=((e||={level:`AA`,size:`small`}).level||`AA`).toUpperCase(),n=(e.size||`small`).toLowerCase();return t!==`AA`&&t!==`AAA`&&(t=`AA`),n!==`small`&&n!==`large`&&(n=`small`),{level:t,size:n}}(n)).level+r.size){case`AAsmall`:case`AAAlarge`:i=a>=4.5;break;case`AAlarge`:i=a>=3;break;case`AAAsmall`:i=a>=7}return i},N.mostReadable=function(e,t,n){var r,i,a,o,s=null,c=0;i=(n||={}).includeFallbackColors,a=n.level,o=n.size;for(var l=0;l<t.length;l++)(r=N.readability(e,t[l]))>c&&(c=r,s=N(t[l]));return N.isReadable(e,s,{level:a,size:o})||!i?s:(n.includeFallbackColors=!1,N.mostReadable(e,[`#fff`,`#000`],n))};var lr=N.names={aliceblue:`f0f8ff`,antiquewhite:`faebd7`,aqua:`0ff`,aquamarine:`7fffd4`,azure:`f0ffff`,beige:`f5f5dc`,bisque:`ffe4c4`,black:`000`,blanchedalmond:`ffebcd`,blue:`00f`,blueviolet:`8a2be2`,brown:`a52a2a`,burlywood:`deb887`,burntsienna:`ea7e5d`,cadetblue:`5f9ea0`,chartreuse:`7fff00`,chocolate:`d2691e`,coral:`ff7f50`,cornflowerblue:`6495ed`,cornsilk:`fff8dc`,crimson:`dc143c`,cyan:`0ff`,darkblue:`00008b`,darkcyan:`008b8b`,darkgoldenrod:`b8860b`,darkgray:`a9a9a9`,darkgreen:`006400`,darkgrey:`a9a9a9`,darkkhaki:`bdb76b`,darkmagenta:`8b008b`,darkolivegreen:`556b2f`,darkorange:`ff8c00`,darkorchid:`9932cc`,darkred:`8b0000`,darksalmon:`e9967a`,darkseagreen:`8fbc8f`,darkslateblue:`483d8b`,darkslategray:`2f4f4f`,darkslategrey:`2f4f4f`,darkturquoise:`00ced1`,darkviolet:`9400d3`,deeppink:`ff1493`,deepskyblue:`00bfff`,dimgray:`696969`,dimgrey:`696969`,dodgerblue:`1e90ff`,firebrick:`b22222`,floralwhite:`fffaf0`,forestgreen:`228b22`,fuchsia:`f0f`,gainsboro:`dcdcdc`,ghostwhite:`f8f8ff`,gold:`ffd700`,goldenrod:`daa520`,gray:`808080`,green:`008000`,greenyellow:`adff2f`,grey:`808080`,honeydew:`f0fff0`,hotpink:`ff69b4`,indianred:`cd5c5c`,indigo:`4b0082`,ivory:`fffff0`,khaki:`f0e68c`,lavender:`e6e6fa`,lavenderblush:`fff0f5`,lawngreen:`7cfc00`,lemonchiffon:`fffacd`,lightblue:`add8e6`,lightcoral:`f08080`,lightcyan:`e0ffff`,lightgoldenrodyellow:`fafad2`,lightgray:`d3d3d3`,lightgreen:`90ee90`,lightgrey:`d3d3d3`,lightpink:`ffb6c1`,lightsalmon:`ffa07a`,lightseagreen:`20b2aa`,lightskyblue:`87cefa`,lightslategray:`789`,lightslategrey:`789`,lightsteelblue:`b0c4de`,lightyellow:`ffffe0`,lime:`0f0`,limegreen:`32cd32`,linen:`faf0e6`,magenta:`f0f`,maroon:`800000`,mediumaquamarine:`66cdaa`,mediumblue:`0000cd`,mediumorchid:`ba55d3`,mediumpurple:`9370db`,mediumseagreen:`3cb371`,mediumslateblue:`7b68ee`,mediumspringgreen:`00fa9a`,mediumturquoise:`48d1cc`,mediumvioletred:`c71585`,midnightblue:`191970`,mintcream:`f5fffa`,mistyrose:`ffe4e1`,moccasin:`ffe4b5`,navajowhite:`ffdead`,navy:`000080`,oldlace:`fdf5e6`,olive:`808000`,olivedrab:`6b8e23`,orange:`ffa500`,orangered:`ff4500`,orchid:`da70d6`,palegoldenrod:`eee8aa`,palegreen:`98fb98`,paleturquoise:`afeeee`,palevioletred:`db7093`,papayawhip:`ffefd5`,peachpuff:`ffdab9`,peru:`cd853f`,pink:`ffc0cb`,plum:`dda0dd`,powderblue:`b0e0e6`,purple:`800080`,rebeccapurple:`663399`,red:`f00`,rosybrown:`bc8f8f`,royalblue:`4169e1`,saddlebrown:`8b4513`,salmon:`fa8072`,sandybrown:`f4a460`,seagreen:`2e8b57`,seashell:`fff5ee`,sienna:`a0522d`,silver:`c0c0c0`,skyblue:`87ceeb`,slateblue:`6a5acd`,slategray:`708090`,slategrey:`708090`,snow:`fffafa`,springgreen:`00ff7f`,steelblue:`4682b4`,tan:`d2b48c`,teal:`008080`,thistle:`d8bfd8`,tomato:`ff6347`,turquoise:`40e0d0`,violet:`ee82ee`,wheat:`f5deb3`,white:`fff`,whitesmoke:`f5f5f5`,yellow:`ff0`,yellowgreen:`9acd32`},ur=N.hexNames=function(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t}(lr);function dr(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function P(e,t){(function(e){return typeof e==`string`&&e.indexOf(`.`)!=-1&&parseFloat(e)===1})(e)&&(e=`100%`);var n=function(e){return typeof e==`string`&&e.indexOf(`%`)!=-1}(e);return e=Math.min(t,Math.max(0,parseFloat(e))),n&&(e=parseInt(e*t,10)/100),Math.abs(e-t)<1e-6?1:e%t/parseFloat(t)}function fr(e){return Math.min(1,Math.max(0,e))}function pr(e){return parseInt(e,16)}function mr(e){return e.length==1?`0`+e:``+e}function hr(e){return e<=1&&(e=100*e+`%`),e}function gr(e){return Math.round(255*parseFloat(e)).toString(16)}function _r(e){return pr(e)/255}var vr,yr,br,xr=(yr=`[\\s|\\(]+(`+(vr=`(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)`)+`)[,|\\s]+(`+vr+`)[,|\\s]+(`+vr+`)\\s*\\)?`,br=`[\\s|\\(]+(`+vr+`)[,|\\s]+(`+vr+`)[,|\\s]+(`+vr+`)[,|\\s]+(`+vr+`)\\s*\\)?`,{CSS_UNIT:new RegExp(vr),rgb:RegExp(`rgb`+yr),rgba:RegExp(`rgba`+br),hsl:RegExp(`hsl`+yr),hsla:RegExp(`hsla`+br),hsv:RegExp(`hsv`+yr),hsva:RegExp(`hsva`+br),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function Sr(e){return!!xr.CSS_UNIT.exec(e)}var Cr=function(e,t){var n=(typeof e==`string`?parseInt(e):e)||0;if(n>=-5&&n<=5){var r=n,i=parseFloat(t),a=i+i/5*r*-1;return(a==0||a<=2**-52)&&(a=.1),{animationPeriod:a+`s`}}return{animationPeriod:t}},wr=function(e,t){var n=e||{},r=``;switch(t){case`small`:r=`12px`;break;case`medium`:r=`16px`;break;case`large`:r=`20px`;break;default:r=void 0}var i={};if(n.fontSize){var a=n.fontSize;i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols==`function`){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(n,[`fontSize`]),r=a}return{fontSize:r,styles:i}},Tr={color:`currentColor`,mixBlendMode:`difference`,width:`unset`,display:`block`,paddingTop:`2px`},Er=function(e){var t=e.className,n=e.text,r=e.textColor,i=e.staticText,a=e.style;return n?v.createElement(`span`,{className:`rli-d-i-b rli-text-format ${t||``}`.trim(),style:Un(Un(Un({},i&&Tr),r&&{color:r,mixBlendMode:`unset`}),a&&a)},typeof n==`string`&&n.length?n:`loading`):null},Dr=`rgb(50, 205, 50)`;function Or(e,t){if(t===void 0&&(t=0),e.length===0)throw Error(`Input array cannot be empty!`);var n=[];return function e(t,r){return r===void 0&&(r=0),n.push.apply(n,t),n.length<r&&e(n,r),n.slice(0,r)}(e,t)}Hn(`.atom-rli-bounding-box {
  --atom-phase1-rgb: 50, 205, 50;
  color: rgba(var(--atom-phase1-rgb), 1);
  font-size: 16px;
  position: relative;
  text-align: unset;
  isolation: isolate;
}
.atom-rli-bounding-box .atom-indicator {
  width: 6em;
  height: 6em;
  position: relative;
  perspective: 6em;
  overflow: hidden;
  color: rgba(var(--atom-phase1-rgb), 1);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0.48em;
  height: 0.48em;
  margin: auto;
  border-radius: 50%;
  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7eg;
}
.atom-rli-bounding-box .atom-indicator::before {
  filter: drop-shadow(0px 0px 0.0625em currentColor);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit {
  color: rgba(var(--atom-phase1-rgb), 0.85);
  border: 0;
  border-left: 0.4em solid currentColor;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 4.8em;
  height: 4.8em;
  background-color: transparent;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7fj, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gy;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  color: rgba(var(--atom-phase1-rgb), 0.18);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7hv;
  border: 0.125em solid currentColor;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::before {
  content: "";
  width: 0.192em;
  height: 0.192em;
  position: absolute;
  border-radius: 50%;
  top: -0.096em;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  color: rgba(var(--atom-phase1-rgb), 1);
  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;
  background-color: currentColor;
  transform: rotateY(-70deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7ew, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {
  --orbit-vector-factor: -1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {
  --orbit-vector-factor: 1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {
  --orbit-vector-factor: 0;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --atom-phase1-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase2-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase3-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase4-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7fj {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes uxlv7ew {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes uxlv7eg {
  100%, 0% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  20% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  25% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  45% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  50% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  70% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  75% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  95% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
}
@keyframes uxlv7gg {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
}
@keyframes uxlv7gy {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
}
@keyframes uxlv7hv {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
}`);var kr=N(Dr).toRgb(),Ar=Array.from({length:4},(function(e,t){return`--atom-phase${t+1}-rgb`})),jr=function(e){var t=wr(e?.style,e?.size),n=t.styles,r=t.fontSize,i=e?.easing,a=Cr(e?.speedPlus,`1s`).animationPeriod,o=function(e){var t={};if(e instanceof Array){for(var n=Or(e,Ar.length),r=0;r<n.length&&!(r>=4);r++)try{if(!(s=N(n[r])).isValid())throw Error(`invalid color`);var i=(c=s.toRgb()).r,a=c.g,o=c.b;t[Ar[r]]=`${i}, ${a}, ${o}`}catch{i=kr.r,a=kr.g,o=kr.b,t[Ar[r]]=`${i}, ${a}, ${o}`,console.warn(`Possibly an invalid color( ${n[r]} ) passed to Atom indicator!`)}return t}try{if(typeof e!=`string`)throw Error(`Color String expected`);var s;if(!(s=N(e)).isValid())throw Error(`Invalid color`);var c;for(i=(c=s.toRgb()).r,a=c.g,o=c.b,r=0;r<Ar.length;r++)t[Ar[r]]=`${i}, ${a}, ${o}`}catch(n){for(n instanceof Error?console.warn(`[${n.message}]: Received "${typeof e}" instead with value, ${JSON.stringify(e)}`):console.warn(`${JSON.stringify(e)} received in <Atom /> indicator cannot be processed. Using default instead!`),r=0;r<Ar.length;r++)i=kr.r,a=kr.g,o=kr.b,t[Ar[r]]=`${i}, ${a}, ${o}`}return t}(e?.color??``);return v.createElement(`span`,{className:`rli-d-i-b atom-rli-bounding-box`,style:Un(Un(Un(Un(Un({},r&&{fontSize:r}),a&&{"--rli-animation-duration":a}),i&&{"--rli-animation-function":i}),o),n),role:`status`,"aria-live":`polite`,"aria-label":`Loading`},v.createElement(`span`,{className:`rli-d-i-b atom-indicator`},v.createElement(`span`,{className:`rli-d-i-b electron-orbit`}),v.createElement(`span`,{className:`rli-d-i-b electron-orbit`}),v.createElement(`span`,{className:`rli-d-i-b electron-orbit`})),v.createElement(Er,{className:`atom-text`,staticText:!0,text:e?.text,textColor:e?.textColor}))};Hn(`.commet-rli-bounding-box {
  --commet-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  width: 6.85em;
  height: 6.85em;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
}
.commet-rli-bounding-box .commet-indicator {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  width: 6em;
  height: 6em;
  color: var(--commet-phase1-color);
  display: inline-block;
  isolation: isolate;
  position: absolute;
  z-index: 0;
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite uxlv7cp;
}
.commet-rli-bounding-box .commet-indicator .commet-box {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: uxlv7bx var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {
  width: 100%;
  height: 100%;
  animation-direction: normal;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {
  width: 70%;
  height: 70%;
  animation-direction: reverse;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: currentColor;
  position: absolute;
  top: -0.125em;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border-style: solid;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.25em 0.25em 0 0;
  transform: rotateZ(-45deg);
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.25em 0 0 0.25em;
  transform: rotateZ(45deg);
}
.commet-rli-bounding-box .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--commet-phase1-color);
}

@property --commet-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7bx {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7cp {
  100%, 0% {
    color: var(--commet-phase1-color);
  }
  20% {
    color: var(--commet-phase1-color);
  }
  25% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  45% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  50% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  70% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  75% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
  95% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
}`),Array.from({length:4},(function(e,t){return`--commet-phase${t+1}-color`})),Hn(`.OP-annulus-rli-bounding-box {
  --OP-annulus-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {
  animation: uxlv7n7 calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {
  stroke-dasharray: 1, 125;
  stroke-dashoffset: 0;
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite uxlv7oa, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7p5;
  stroke-linecap: round;
}
.OP-annulus-rli-bounding-box .OP-annulus-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7n7 {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7oa {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -124px;
  }
}
@keyframes uxlv7p5 {
  100%, 0% {
    stroke: var(--OP-annulus-phase1-color);
  }
  22% {
    stroke: var(--OP-annulus-phase1-color);
  }
  25% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  42% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  50% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  72% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  75% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
  97% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
}`),Array.from({length:4},(function(e,t){return`--OP-annulus-phase${t+1}-color`}));function Mr(e){return e&&e.Math===Math&&e}Hn(`.OP-dotted-rli-bounding-box {
  --OP-dotted-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-dotted-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite uxlv7nu, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7ol;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {
  transform: rotate(0deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {
  transform: rotate(30deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {
  transform: rotate(60deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {
  transform: rotate(90deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {
  transform: rotate(120deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {
  transform: rotate(150deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {
  transform: rotate(180deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {
  transform: rotate(210deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {
  transform: rotate(240deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {
  transform: rotate(270deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {
  transform: rotate(300deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {
  transform: rotate(330deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);
}

@property --OP-dotted-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7nu {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes uxlv7ol {
  100%, 0% {
    background-color: var(--OP-dotted-phase1-color);
  }
  22% {
    background-color: var(--OP-dotted-phase1-color);
  }
  25% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  47% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  50% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  72% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  75% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
  97% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
}`),Mr(typeof window==`object`&&window)||Mr(typeof self==`object`&&self)||Mr(typeof global==`object`&&global)||function(){return this}()||Function(`return this`)(),Array.from({length:4},(function(e,t){return`--OP-dotted-phase${t+1}-color`})),Hn(`.OP-spokes-rli-bounding-box {
  --OP-spokes-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  position: relative;
  color: var(--OP-spokes-phase1-color);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator {
  width: 4.8em;
  height: 4.8em;
  display: block;
  position: relative;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {
  position: absolute;
  height: 1.2em;
  width: 0.4em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto auto 50%;
  background-color: var(--OP-spokes-phase1-color);
  border-radius: 0.24em;
  opacity: 0;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite uxlv7pw, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7qn;
  transform-origin: left center;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {
  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {
  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {
  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {
  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {
  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {
  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {
  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {
  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {
  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {
  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {
  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {
  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--OP-spokes-phase1-color);
  z-index: -2;
}

@property --OP-spokes-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7pw {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes uxlv7qn {
  100%, 0% {
    background-color: var(--OP-spokes-phase1-color);
  }
  22% {
    background-color: var(--OP-spokes-phase1-color);
  }
  25% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  42% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  50% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  72% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  75% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
  97% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
}`),Array.from({length:4},(function(e,t){return`--OP-spokes-phase${t+1}-color`})),Hn(`.OP-annulus-dual-sectors-rli-bounding-box {
  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: var(--OP-annulus-dual-sectors-phase1-color);
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.34em;
  border-style: solid;
  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;
  background-color: transparent;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite uxlv7ra, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite uxlv7sv;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-dual-sectors-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7ra {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7sv {
  100%, 0% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  20% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  25% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  45% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  50% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  70% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  75% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  95% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
}`),Array.from({length:4},(function(e,t){return`--OP-annulus-dual-sectors-phase${t+1}-color`})),Hn(`.OP-annulus-sector-track-rli-bounding-box {
  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);
  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-sector-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {
  width: 100%;
  height: 100%;
  border-width: 0.34em;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  border-color: var(--OP-annulus-track-phase1-color);
  border-top-color: var(--OP-annulus-sector-phase1-color);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7rl, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7tf;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-track-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-sector-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7rl {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7tf {
  100%, 0% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  18% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  25% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  43% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  50% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  68% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  75% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
  93% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
}`),Array.from({length:4},(function(e,t){return[`--OP-annulus-track-phase${t+1}-color`,`--OP-annulus-sector-phase${t+1}-color`]})),Hn(`.foursquare-rli-bounding-box {
  --four-square-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  color: var(--four-square-phase1-color);
  display: inline-block;
  overflow: hidden;
}
.foursquare-rli-bounding-box .foursquare-indicator {
  height: 5.3033008589em;
  width: 5.3033008589em;
  position: relative;
  display: block;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 2.5em;
  width: 2.5em;
  color: inherit;
  will-change: color, width, height;
  transform: rotate(45deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7dk, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7es;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: uxlv7dd var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {
  top: 0;
  right: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {
  bottom: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {
  bottom: 0;
  right: 0;
}

@property --four-square-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7dk {
  0% {
    width: 2.5em;
    height: 2.5em;
  }
  10% {
    width: 2.5em;
    height: 2.5em;
  }
  50% {
    width: 3.75em;
    height: 3.75em;
  }
  90% {
    width: 2.5em;
    height: 2.5em;
  }
  100% {
    width: 2.5em;
    height: 2.5em;
  }
}
@keyframes uxlv7dd {
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(90deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
@keyframes uxlv7es {
  100%, 0% {
    color: var(--four-square-phase1-color);
  }
  20% {
    color: var(--four-square-phase1-color);
  }
  25% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  45% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  50% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  70% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  75% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
  95% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
}`),Array.from({length:4},(function(e,t){return`--four-square-phase${t+1}-color`})),Hn(`.mosaic-rli-bounding-box {
  --mosaic-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  color: var(--mosaic-phase1-color);
}
.mosaic-rli-bounding-box .mosaic-indicator {
  width: 5em;
  height: 5em;
  color: currentColor;
  display: grid;
  gap: 0.125em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {
  background-color: var(--mosaic-phase1-color);
  animation-name: uxlv7i4, uxlv7is;
  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in-out);
  animation-iteration-count: infinite;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
  grid-area: a;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
  grid-area: b;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {
  grid-area: c;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {
  grid-area: d;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {
  grid-area: e;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {
  grid-area: f;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {
  grid-area: g;
  animation-delay: 0s;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {
  grid-area: h;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {
  grid-area: i;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}

@property --mosaic-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7i4 {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes uxlv7is {
  100%, 0% {
    background-color: var(--mosaic-phase1-color);
  }
  25% {
    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));
  }
  50% {
    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));
  }
  75% {
    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));
  }
}`),Array.from({length:4},(function(e,t){return`--mosaic-phase${t+1}-color`})),Hn(`.riple-rli-bounding-box {
  --riple-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--riple-phase1-color);
}
.riple-rli-bounding-box .riple-indicator {
  display: inline-block;
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
}
.riple-rli-bounding-box .riple-indicator .riple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.riple-rli-bounding-box .riple-indicator .riple {
  --border-width: 0.25em;
  position: absolute;
  border: var(--border-width) solid var(--riple-phase1-color);
  opacity: 1;
  border-radius: 50%;
  will-change: top, right, left, bottom, border-color;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7i1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7io;
}
.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);
}

@property --riple-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7i1 {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}
@keyframes uxlv7io {
  100%, 0% {
    border-color: var(--riple-phase1-color);
  }
  24.9% {
    border-color: var(--riple-phase1-color);
  }
  25% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  49.9% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  50% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  74.9% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  75% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
  99.9% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
}`),Array.from({length:4},(function(e,t){return`--riple-phase${t+1}-color`})),Hn(`.pulsate-rli-bounding-box {
  --TD-pulsate-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  color: var(--TD-pulsate-phase1-color);
}
.pulsate-rli-bounding-box .pulsate-indicator {
  width: 4.4em;
  height: 1.1em;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  background-color: var(--TD-pulsate-phase1-color);
  transform: scale(0);
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7s0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7to;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);
}
.pulsate-rli-bounding-box .pulsate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --TD-pulsate-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7s0 {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes uxlv7to {
  0%, 100% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  24.9% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  25% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  49.9% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  50% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  74.9% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  75% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
  99.9% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
}`),Array.from({length:4},(function(e,t){return`--TD-pulsate-phase${t+1}-color`})),Hn(`.brick-stack-rli-bounding-box {
  --TD-brick-stack-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-brick-stack-phase1-color);
}
.brick-stack-rli-bounding-box .brick-stack-indicator {
  width: 2.8em;
  height: 2.8em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.brick-stack-rli-bounding-box .brick-stack {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite uxlv7tu, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite uxlv7us;
}

@property --TD-brick-stack-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7tu {
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}
@keyframes uxlv7us {
  100%, 0% {
    color: var(--TD-brick-stack-phase1-color);
  }
  20% {
    color: var(--TD-brick-stack-phase1-color);
  }
  25% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  45% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  50% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  70% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  75% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
  95% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
}`),Array.from({length:4},(function(e,t){return`--TD-brick-stack-phase${t+1}-color`})),Hn(`.bob-rli-bounding-box {
  --TD-bob-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-bob-phase1-color);
}
.bob-rli-bounding-box .bob-indicator {
  width: 4.4em;
  height: 2.2em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bob-rli-bounding-box .bob-indicator .bobbing,
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  width: 1.1em;
  height: 100%;
  display: grid;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite uxlv7u0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite uxlv7vq;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  content: "";
  grid-area: 1/1;
}
.bob-rli-bounding-box .bob-indicator .bobbing {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
  transform: translateX(150%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);
  transform: translateX(300%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}

@property --TD-bob-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7u0 {
  100%, 0% {
    background-position: 50% 50%;
  }
  15% {
    background-position: 50% 10%;
  }
  30% {
    background-position: 50% 100%;
  }
  40% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 90%;
  }
  70% {
    background-position: 50% 10%;
  }
  98% {
    background-position: 50% 50%;
  }
}
@keyframes uxlv7vq {
  100%, 0% {
    color: var(--TD-bob-phase1-color);
  }
  22% {
    color: var(--TD-bob-phase1-color);
  }
  25% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  47% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  50% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  72% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  75% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
  97% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
}`),Array.from({length:4},(function(e,t){return`--TD-bob-phase${t+1}-color`})),Hn(`.bounce-rli-bounding-box {
  --TD-bounce-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--TD-bounce-phase1-color);
  display: inline-block;
  padding-bottom: 0.25125em;
}
.bounce-rli-bounding-box .wrapper {
  --dot1-delay: 0s;
  --dot1-x-offset: 0.55em;
  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);
  --dot2-x-offset: 2.2em;
  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);
  --dot3-x-offset: 3.85em;
  width: 5.5em;
  height: 3.125em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bounce-rli-bounding-box .wrapper .group {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.bounce-rli-bounding-box .wrapper .group .dot {
  width: 1.1em;
  height: 1.1em;
  position: absolute;
  border-radius: 50%;
  background-color: var(--TD-bounce-phase1-color);
  transform-origin: 50%;
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7wc, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite uxlv7x6;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .shadow {
  width: 1.1em;
  height: 0.22em;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 101%;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7ww;
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay);
}

@property --TD-bounce-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 0.5s;
}
@keyframes uxlv7wc {
  0% {
    top: 0%;
  }
  60% {
    height: 1.25em;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 100%;
    height: 0.22em;
    transform: scaleX(1.5);
    filter: blur(0.4px);
  }
}
@keyframes uxlv7ww {
  0% {
    transform: scaleX(0.2);
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    transform: scaleX(1.5);
    opacity: 0.6;
  }
}
@keyframes uxlv7x6 {
  0%, 100% {
    background-color: var(--TD-bounce-phase1-color);
  }
  20% {
    background-color: var(--TD-bounce-phase1-color);
  }
  25% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  45% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  50% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  70% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  75% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
  95% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
}`),Array.from({length:4},(function(e,t){return`--TD-bounce-phase${t+1}-color`})),Hn(`.blink-blur-rli-bounding-box {
  --shape-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--shape-phase1-color);
}
.blink-blur-rli-bounding-box .blink-blur-indicator {
  isolation: isolate;
  display: flex;
  flex-direction: row;
  -moz-column-gap: 0.4em;
       column-gap: 0.4em;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {
  --x-deg: -20deg;
  width: 1.8em;
  height: 2.25em;
  border-radius: 0.25em;
  color: inherit;
  transform: skewX(var(--x-deg));
  background-color: var(--shape-phase1-color);
  animation-name: uxlv7id, uxlv7jl;
  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in);
  animation-iteration-count: infinite;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);
}

@property --shape-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7id {
  100%, 0% {
    opacity: 0.3;
    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);
    transform: skewX(var(--x-deg)) scale(1.2, 1.45);
  }
  39% {
    opacity: 0.8;
  }
  40%, 41%, 42% {
    opacity: 0;
  }
  43% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    filter: blur(0em) drop-shadow(0 0 0em);
    transform: skewX(var(--x-deg)) scale(1, 1);
  }
}
@keyframes uxlv7jl {
  100%, 0% {
    color: var(--shape-phase1-color);
    background-color: var(--shape-phase1-color);
  }
  25% {
    color: var(--shape-phase2-color, var(--shape-phase1-color));
    background-color: var(--shape-phase2-color, var(--shape-phase1-color));
  }
  50% {
    color: var(--shape-phase3-color, var(--shape-phase1-color));
    background-color: var(--shape-phase3-color, var(--shape-phase1-color));
  }
  75% {
    color: var(--shape-phase4-color, var(--shape-phase1-color));
    background-color: var(--shape-phase4-color, var(--shape-phase1-color));
  }
}`),Array.from({length:4},(function(e,t){return`--shape-phase${t+1}-color`})),Hn(`.trophy-spin-rli-bounding-box {
  --trophySpin-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: var(--trophySpin-phase1-color);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator {
  width: 4em;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: block;
  margin: 0 auto;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: var(--trophySpin-phase1-color);
  animation: uxlv7ki var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, uxlv7l2 calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, uxlv7ly calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
}

@property --trophySpin-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2.5s;
}
@keyframes uxlv7ki {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes uxlv7l2 {
  100%, 0% {
    filter: brightness(1);
    opacity: 1;
  }
  15% {
    filter: brightness(1);
  }
  25% {
    opacity: 0.96;
  }
  30% {
    filter: brightness(0.92);
  }
  50% {
    filter: brightness(0.7);
    opacity: 1;
  }
  75% {
    filter: brightness(0.92);
    opacity: 0.96;
  }
  90% {
    filter: brightness(1);
  }
}
@keyframes uxlv7ly {
  100%, 0% {
    background-color: var(--trophySpin-phase1-color);
  }
  18% {
    background-color: var(--trophySpin-phase1-color);
  }
  25% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  43% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  50% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  68% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  75% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
  93% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
}`),Array.from({length:4},(function(e,t){return`--trophySpin-phase${t+1}-color`})),Hn(`.slab-rli-bounding-box {
  --slab-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--slab-phase1-color);
  position: relative;
}
.slab-rli-bounding-box .slab-indicator {
  position: relative;
  display: block;
  width: 7em;
  height: 4em;
  margin: 0 auto;
  overflow: hidden;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slab-phase1-color);
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 0% 0%;
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite uxlv7md, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite uxlv7n0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {
  animation-delay: 0s;
}

@property --slab-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration-unitless {
  syntax: "<number>";
  inherits: true;
  initial-value: 3;
}
@keyframes uxlv7md {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-40%) rotateX(0deg);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-400%) rotateX(0deg);
    opacity: 0;
  }
}
@keyframes uxlv7n0 {
  100%, 0% {
    background-color: var(--slab-phase1-color);
  }
  24.9% {
    background-color: var(--slab-phase1-color);
  }
  25% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  49.9% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  50% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  74.9% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  75% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
  99.9% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
}`),Array.from({length:4},(function(e,t){return`--slab-phase${t+1}-color`})),Hn(`.lifeline-rli-bounding-box {
  --life-line-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  isolation: isolate;
  color: var(--life-line-phase1-color);
}
.lifeline-rli-bounding-box .lifeline-indicator {
  position: relative;
  text-align: center;
}
.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {
  stroke-dasharray: 474.7616760254 30.3039367676;
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite uxlv7k3, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite uxlv7kg;
}
.lifeline-rli-bounding-box .lifeline-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --life-line-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2s;
}
@keyframes uxlv7k3 {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes uxlv7kg {
  100%, 0% {
    color: var(--life-line-phase1-color);
  }
  20% {
    color: var(--life-line-phase1-color);
  }
  25% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  45% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  50% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  70% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  75% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
  95% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
}`),Array.from({length:4},(function(e,t){return`--life-line-phase${t+1}-color`}));var Nr=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),Pr=o(((e,t)=>{t.exports=Nr()})),F=Pr();function Fr({isLoading:e}){return(0,F.jsx)(F.Fragment,{children:e&&(0,F.jsx)(`div`,{style:{position:`fixed`,top:0,bottom:0,left:0,right:0,backgroundColor:`rgba(255, 255, 255,0.5)`,zIndex:1e4,display:`flex`,justifyContent:`center`,alignItems:`center`,backdropFilter:`blur(3px)`},children:(0,F.jsx)(jr,{color:`#0000007b`,size:`medium`,text:``,textColor:``})})})}function Ir({cartData:e}){return(0,F.jsx)(F.Fragment,{children:(0,F.jsx)(`div`,{className:`bg-white sticky-top`,children:(0,F.jsx)(`div`,{className:`container`,children:(0,F.jsxs)(`nav`,{className:`navbar px-0 navbar-expand-lg navbar-light bg-white`,children:[(0,F.jsx)(jn,{className:`navbar-brand position-absolute`,to:`/`,style:{left:`50%`,transform:`translate(-50%, -50%)`,top:`50%`},children:`畫廊`}),(0,F.jsx)(`button`,{className:`navbar-toggler`,type:`button`,"data-bs-toggle":`collapse`,"data-bs-target":`#navbarNav`,"aria-controls":`navbarNav`,"aria-expanded":`false`,"aria-label":`Toggle navigation`,children:(0,F.jsx)(`span`,{className:`navbar-toggler-icon`})}),(0,F.jsx)(`div`,{className:`collapse navbar-collapse bg-white custom-header-md-open`,id:`navbarNav`,children:(0,F.jsx)(`ul`,{className:`navbar-nav`,children:(0,F.jsx)(`li`,{className:`nav-item active`,children:(0,F.jsx)(jn,{className:`nav-link ps-0`,to:`/products`,children:`商品`})})})}),(0,F.jsx)(`div`,{className:`d-flex`,children:(0,F.jsx)(jn,{className:`nav-link position-relative`,to:`/cart`,children:(0,F.jsx)(`i`,{className:`bi bi-bag`,children:(0,F.jsx)(`span`,{className:`position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger`,children:e?.carts?.length})})})})]})})})})}var Lr=o((e=>{var t=p();function n(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var r=typeof Object.is==`function`?Object.is:n,i=t.useSyncExternalStore,a=t.useRef,o=t.useEffect,s=t.useMemo,c=t.useDebugValue;e.useSyncExternalStoreWithSelector=function(e,t,n,l,u){var d=a(null);if(d.current===null){var f={hasValue:!1,value:null};d.current=f}else f=d.current;d=s(function(){function e(e){if(!i){if(i=!0,a=e,e=l(e),u!==void 0&&f.hasValue){var t=f.value;if(u(t,e))return o=t}return o=e}if(t=o,r(a,e))return t;var n=l(e);return u!==void 0&&u(t,n)?(a=e,t):(a=e,o=n)}var i=!1,a,o,s=n===void 0?null:n;return[function(){return e(t())},s===null?void 0:function(){return e(s())}]},[t,n,l,u]);var p=i(e,d[0],d[1]);return o(function(){f.hasValue=!0,f.value=p},[p]),c(p),p}})),Rr=o(((e,t)=>{t.exports=Lr()}))();function zr(e){e()}function Br(){let e=null,t=null;return{clear(){e=null,t=null},notify(){zr(()=>{let t=e;for(;t;)t.callback(),t=t.next})},get(){let t=[],n=e;for(;n;)t.push(n),n=n.next;return t},subscribe(n){let r=!0,i=t={callback:n,next:null,prev:t};return i.prev?i.prev.next=i:e=i,function(){!r||e===null||(r=!1,i.next?i.next.prev=i.prev:t=i.prev,i.prev?i.prev.next=i.next:e=i.next)}}}}var Vr={notify(){},get:()=>[]};function Hr(e,t){let n,r=Vr,i=0,a=!1;function o(e){u();let t=r.subscribe(e),n=!1;return()=>{n||(n=!0,t(),d())}}function s(){r.notify()}function c(){m.onStateChange&&m.onStateChange()}function l(){return a}function u(){i++,n||(n=t?t.addNestedSub(c):e.subscribe(c),r=Br())}function d(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=Vr)}function f(){a||(a=!0,u())}function p(){a&&(a=!1,d())}let m={addNestedSub:o,notifyNestedSubs:s,handleChangeWrapper:c,isSubscribed:l,trySubscribe:f,tryUnsubscribe:p,getListeners:()=>r};return m}var Ur=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,Wr=typeof navigator<`u`&&navigator.product===`ReactNative`,Gr=Ur||Wr?v.useLayoutEffect:v.useEffect,Kr=Symbol.for(`react-redux-context`),qr=typeof globalThis<`u`?globalThis:{};function Jr(){if(!v.createContext)return{};let e=qr[Kr]??=new Map,t=e.get(v.createContext);return t||(t=v.createContext(null),e.set(v.createContext,t)),t}var Yr=Jr();function Xr(e){let{children:t,context:n,serverState:r,store:i}=e,a=v.useMemo(()=>{let e=Hr(i);return{store:i,subscription:e,getServerState:r?()=>r:void 0}},[i,r]),o=v.useMemo(()=>i.getState(),[i]);Gr(()=>{let{subscription:e}=a;return e.onStateChange=e.notifyNestedSubs,e.trySubscribe(),o!==i.getState()&&e.notifyNestedSubs(),()=>{e.tryUnsubscribe(),e.onStateChange=void 0}},[a,o]);let s=n||Yr;return v.createElement(s.Provider,{value:a},t)}var Zr=Xr;function Qr(e=Yr){return function(){return v.useContext(e)}}var $r=Qr();function ei(e=Yr){let t=e===Yr?$r:Qr(e),n=()=>{let{store:e}=t();return e};return Object.assign(n,{withTypes:()=>n}),n}var ti=ei();function ni(e=Yr){let t=e===Yr?ti:ei(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var ri=ni(),ii=(e,t)=>e===t;function ai(e=Yr){let t=e===Yr?$r:Qr(e),n=(e,n={})=>{let{equalityFn:r=ii}=typeof n==`function`?{equalityFn:n}:n,{store:i,subscription:a,getServerState:o}=t();v.useRef(!0);let s=v.useCallback({[e.name](t){return e(t)}}[e.name],[e]),c=(0,Rr.useSyncExternalStoreWithSelector)(a.addNestedSub,i.getState,o||i.getState,s,r);return v.useDebugValue(c),c};return Object.assign(n,{withTypes:()=>n}),n}var oi=ai();function si(){let e=oi(e=>e.message);return(0,F.jsx)(F.Fragment,{children:(0,F.jsx)(`div`,{className:`toast-container position-fixed`,style:{top:`64px`,right:`14px`},children:e?.map(e=>(0,F.jsxs)(`div`,{className:`toast show`,role:`alert`,"aria-live":`assertive`,"aria-atomic":`true`,children:[(0,F.jsxs)(`div`,{className:`toast-header text-white bg-${e.type}`,children:[(0,F.jsx)(`strong`,{className:`me-auto`,children:e.title}),(0,F.jsx)(`button`,{type:`button`,className:`btn-close`,"data-bs-dismiss":`toast`,"aria-label":`Close`})]}),(0,F.jsx)(`div`,{className:`toast-body`,children:e.text})]},e.id))})})}function ci(e,t){return function(){return e.apply(t,arguments)}}var{toString:li}=Object.prototype,{getPrototypeOf:ui}=Object,{iterator:di,toStringTag:fi}=Symbol,pi=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),mi=e=>typeof e==`string`&&(e===`__proto__`||e===`constructor`||e===`prototype`),hi=(e,t,n)=>e===Object.prototype||!n&&t===null,gi=e=>{if(!Object.isExtensible(e))return!1;let t=Object.getOwnPropertyNames(e);return Object.getOwnPropertySymbols&&t.push(...Object.getOwnPropertySymbols(e)),t.every(t=>{if(mi(t))return!1;let n=Object.getOwnPropertyDescriptor(e,t);return!!n&&n.configurable&&n.writable===!0})},_i=(e,t)=>{let n=e,r=[];for(;n!=null;){if(r.indexOf(n)!==-1)return!1;r.push(n);let i=ui(n);if(hi(n,i,n===e))return!1;if(pi(n,t))return!0;n=i}return!1},vi=(e,t)=>e!=null&&_i(e,t)?e[t]:void 0,yi=e=>{if(e==null||typeof e!=`object`&&typeof e!=`function`)return e;let t=ui(e);if(t===null&&gi(e))return e;let n=Object.create(null),r=Object.create(null),i=[],a=e;for(;a!=null&&i.indexOf(a)===-1;){i.push(a);let o=a===e?t:ui(a);if(hi(a,o,a===e))break;let s=Object.getOwnPropertyNames(a);Object.getOwnPropertySymbols&&s.push(...Object.getOwnPropertySymbols(a));for(let t of s)mi(t)||pi(r,t)||(n[t]=e[t],r[t]=!0);a=o}return n},bi=(e=>t=>{let n=li.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),xi=e=>(e=e.toLowerCase(),t=>bi(t)===e),Si=e=>t=>typeof t===e,{isArray:Ci}=Array,wi=Si(`undefined`);function Ti(e){return e!==null&&!wi(e)&&e.constructor!==null&&!wi(e.constructor)&&ki(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}var Ei=xi(`ArrayBuffer`);function Di(e){let t;return t=typeof ArrayBuffer<`u`&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&Ei(e.buffer),t}var Oi=Si(`string`),ki=Si(`function`),Ai=Si(`number`),ji=e=>typeof e==`object`&&!!e,Mi=e=>e===!0||e===!1,Ni=e=>{if(!ji(e))return!1;let t=ui(e);return(t===null||t===Object.prototype||ui(t)===null)&&!_i(e,fi)&&!_i(e,di)},Pi=e=>{if(!ji(e)||Ti(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},Fi=xi(`Date`),Ii=xi(`File`),Li=e=>!!(e&&e.uri!==void 0),I=e=>e&&e.getParts!==void 0,Ri=xi(`Blob`),zi=xi(`FileList`),Bi=xi(`Set`),Vi=e=>ji(e)&&ki(e.pipe);function Hi(){return typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{}}var Ui=Hi(),Wi=Ui.FormData===void 0?void 0:Ui.FormData,Gi=e=>{if(!e)return!1;if(Wi&&e instanceof Wi)return!0;let t=ui(e);if(!t||t===Object.prototype||!ki(e.append))return!1;let n=bi(e);return n===`formdata`||n===`object`&&ki(e.toString)&&e.toString()===`[object FormData]`},Ki=xi(`URLSearchParams`),[qi,Ji,Yi,Xi]=[`ReadableStream`,`Request`,`Response`,`Headers`].map(xi),Zi=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,``);function Qi(e,t,{allOwnKeys:n=!1}={}){if(e==null)return;let r,i;if(typeof e!=`object`&&(e=[e]),Ci(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{if(Ti(e))return;let i=n?Object.getOwnPropertyNames(e):Object.keys(e),a=i.length,o;for(r=0;r<a;r++)o=i[r],t.call(null,e[o],o,e)}}function $i(e,t){if(Ti(e))return null;t=t.toLowerCase();let n=Object.keys(e),r=n.length,i;for(;r-->0;)if(i=n[r],t===i.toLowerCase())return i;return null}var ea=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:global,ta=e=>!wi(e)&&e!==ea;function na(...e){let{caseless:t,skipUndefined:n}=ta(this)&&this||{},r={},i=(e,i)=>{if(i===`__proto__`||i===`constructor`||i===`prototype`)return;let a=t&&typeof i==`string`&&$i(r,i)||i,o=pi(r,a)?r[a]:void 0;Ni(o)&&Ni(e)?r[a]=na(o,e):Ni(e)?r[a]=na({},e):Ci(e)?r[a]=e.slice():(!n||!wi(e))&&(r[a]=e)};for(let t=0,n=e.length;t<n;t++){let n=e[t];if(!n||Ti(n)||(Qi(n,i),typeof n!=`object`||Ci(n)))continue;let r=Object.getOwnPropertySymbols(n);for(let e=0;e<r.length;e++){let t=r[e];ma.call(n,t)&&i(n[t],t)}}return r}var ra=(e,t,n,{allOwnKeys:r}={})=>(Qi(t,(t,r)=>{n&&ki(t)?Object.defineProperty(e,r,{__proto__:null,value:ci(t,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(e,r,{__proto__:null,value:t,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:r}),e),ia=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),aa=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),Object.defineProperty(e.prototype,"constructor",{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(e,"super",{__proto__:null,value:t.prototype}),n&&Object.assign(e.prototype,n)},oa=(e,t,n,r)=>{let i,a,o,s={};if(t||={},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),a=i.length;a-->0;)o=i[a],(!r||r(o,e,t))&&!s[o]&&(t[o]=e[o],s[o]=!0);e=n!==!1&&ui(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},sa=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;let r=e.indexOf(t,n);return r!==-1&&r===n},ca=e=>{if(!e)return null;if(Ci(e))return e;let t=e.length;if(!Ai(t))return null;let n=Array(t);for(;t-->0;)n[t]=e[t];return n},la=(e=>t=>e&&t instanceof e)(typeof Uint8Array<`u`&&ui(Uint8Array)),ua=(e,t)=>{let n=(e&&e[di]).call(e),r;for(;(r=n.next())&&!r.done;){let n=r.value;t.call(e,n[0],n[1])}},da=(e,t)=>{let n,r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},fa=xi(`HTMLFormElement`),pa=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,t,n){return t.toUpperCase()+n}),{propertyIsEnumerable:ma}=Object.prototype,ha=xi(`RegExp`),ga=(e,t)=>{let n=Object.getOwnPropertyDescriptors(e),r={};Qi(n,(n,i)=>{let a;(a=t(n,i,e))!==!1&&(r[i]=a||n)}),Object.defineProperties(e,r)},_a=e=>{ga(e,(t,n)=>{if(ki(e)&&[`arguments`,`caller`,`callee`].includes(n))return!1;let r=e[n];if(ki(r)){if(t.enumerable=!1,`writable`in t){t.writable=!1;return}t.set||=()=>{throw Error(`Can not rewrite read-only method '`+n+`'`)}}})},va=(e,t)=>{let n={},r=e=>{e.forEach(e=>{n[e]=!0})};return Ci(e)?r(e):r(String(e).split(t)),n},ya=()=>{},ba=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function xa(e){return!!(e&&ki(e.append)&&e[fi]===`FormData`&&e[di])}var Sa=e=>{let t=new WeakSet,n=e=>{if(ji(e)){if(t.has(e))return;if(Ti(e))return e;if(!(`toJSON`in e)){t.add(e);let r;if(Bi(e)){r=[];for(let t of e){let e=n(t);!wi(e)&&r.push(e)}}else r=Ci(e)?[]:{},Qi(e,(e,t)=>{let i=n(e);!wi(i)&&(r[t]=i)});return t.delete(e),r}}return e};return n(e)},Ca=xi(`AsyncFunction`),wa=e=>e&&(ji(e)||ki(e))&&ki(e.then)&&ki(e.catch),Ta=((e,t)=>e?setImmediate:t?((e,t)=>(ea.addEventListener(`message`,({source:n,data:r})=>{n===ea&&r===e&&t.length&&t.shift()()},!1),n=>{t.push(n),ea.postMessage(e,`*`)}))(`axios@${Math.random()}`,[]):e=>setTimeout(e))(typeof setImmediate==`function`,ki(ea.postMessage)),Ea=typeof queueMicrotask<`u`?queueMicrotask.bind(ea):typeof process<`u`&&process.nextTick||Ta,Da=e=>e!=null&&ki(e[di]),L={isArray:Ci,isArrayBuffer:Ei,isBuffer:Ti,isFormData:Gi,isArrayBufferView:Di,isString:Oi,isNumber:Ai,isBoolean:Mi,isObject:ji,isPlainObject:Ni,isEmptyObject:Pi,isReadableStream:qi,isRequest:Ji,isResponse:Yi,isHeaders:Xi,isUndefined:wi,isDate:Fi,isFile:Ii,isReactNativeBlob:Li,isReactNative:I,isBlob:Ri,isRegExp:ha,isFunction:ki,isStream:Vi,isURLSearchParams:Ki,isTypedArray:la,isFileList:zi,forEach:Qi,merge:na,extend:ra,trim:Zi,stripBOM:ia,inherits:aa,toFlatObject:oa,kindOf:bi,kindOfTest:xi,endsWith:sa,toArray:ca,forEachEntry:ua,matchAll:da,isHTMLForm:fa,hasOwnProperty:pi,hasOwnProp:pi,hasOwnInPrototypeChain:_i,getSafeProp:vi,toSafeFlatObject:yi,reduceDescriptors:ga,freezeMethods:_a,toObjectSet:va,toCamelCase:pa,noop:ya,toFiniteNumber:ba,findKey:$i,global:ea,isContextDefined:ta,isSpecCompliantForm:xa,toJSONObject:Sa,isAsyncFn:Ca,isThenable:wa,setImmediate:Ta,asap:Ea,isIterable:Da,isSafeIterable:e=>e!=null&&_i(e,di)&&Da(e)},Oa=L.toObjectSet([`age`,`authorization`,`content-length`,`content-type`,`etag`,`expires`,`from`,`host`,`if-modified-since`,`if-unmodified-since`,`last-modified`,`location`,`max-forwards`,`proxy-authorization`,`referer`,`retry-after`,`user-agent`]),ka=e=>{let t={},n,r,i;return e&&e.split(`
`).forEach(function(e){i=e.indexOf(`:`),n=e.substring(0,i).trim().toLowerCase(),r=e.substring(i+1).trim();let a=L.hasOwnProp(t,n);!n||a&&L.hasOwnProp(Oa,n)||(n===`set-cookie`?a?t[n].push(r):t[n]=[r]:t[n]=a?t[n]+`, `+r:r)}),t};function Aa(e){let t=0,n=e.length;for(;t<n;){let n=e.charCodeAt(t);if(n!==9&&n!==32)break;t+=1}for(;n>t;){let t=e.charCodeAt(n-1);if(t!==9&&t!==32)break;--n}return t===0&&n===e.length?e:e.slice(t,n)}var ja=RegExp(`[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+`,`g`),Ma=RegExp(`[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+`,`g`);function Na(e,t){return L.isArray(e)?e.map(e=>Na(e,t)):Aa(String(e).replace(t,``))}var Pa=e=>Na(e,ja),Fa=e=>Na(e,Ma);function Ia(e){let t=Object.create(null);return L.forEach(e.toJSON(),(e,n)=>{t[n]=Fa(e)}),t}var La=Symbol(`internals`);function Ra(e){return e&&String(e).trim().toLowerCase()}function za(e){return e===!1||e==null?e:L.isArray(e)?e.map(za):Pa(String(e))}function Ba(e){let t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g,r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}var Va=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;function Ha(e){let t=0,n=e.length;for(;t<n;){let n=e.charCodeAt(t);if(n!==9&&n!==32)break;t+=1}for(;n>t;){let t=e.charCodeAt(n-1);if(t!==9&&t!==32)break;--n}return t===0&&n===e.length?e:e.slice(t,n)}function Ua(e){let t=e.length-1;if(t<1||e.charCodeAt(0)!==34||e.charCodeAt(t)!==34)return e;let n=``;for(let r=1;r<t;r++){let i=e.charCodeAt(r);if(i===34||i===92&&(r+=1,r>=t))return e;n+=e[r]}return n}function Wa(e){let t=Object.create(null),n=String(e),r=0,i=!1,a=!1;function o(e){let i=Ha(n.slice(r,e)),a=i.indexOf(`=`);if(a<1)return;let o=Ha(i.slice(0,a));if(!Va.test(o))return;let s=o.toLowerCase();if(s===`__proto__`||s===`constructor`||s===`prototype`)return;let c=Ha(i.slice(a+1));t[s]=Ua(c)}for(let e=0;e<n.length;e++){let t=n.charCodeAt(e);i?a?a=!1:t===92?a=!0:t===34&&(i=!1):t===34?i=!0:(t===44||t===59)&&(o(e),r=e+1)}return o(n.length),t}var Ga=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Ka(e,t,n,r,i){if(L.isFunction(r))return r.call(this,t,n);if(i&&(t=n),L.isString(t)){if(L.isString(r))return t.indexOf(r)!==-1;if(L.isRegExp(r))return r.test(t)}}function qa(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,n)=>t.toUpperCase()+n)}function Ja(e,t){let n=L.toCamelCase(` `+t);[`get`,`set`,`has`].forEach(r=>{Object.defineProperty(e,r+n,{__proto__:null,value:function(e,n,i){return this[r].call(this,t,e,n,i)},configurable:!0})})}var Ya=class{constructor(e){e&&this.set(e)}set(e,t,n){let r=this;function i(e,t,n){let i=Ra(t);if(!i)return;let a=L.findKey(r,i);(!a||r[a]===void 0||n===!0||n===void 0&&r[a]!==!1)&&(r[a||t]=za(e))}let a=(e,t)=>L.forEach(e,(e,n)=>i(e,n,t));if(L.isPlainObject(e)||e instanceof this.constructor)a(e,t);else if(L.isString(e)&&(e=e.trim())&&!Ga(e))a(ka(e),t);else if(L.isObject(e)&&L.isSafeIterable(e)){let n=Object.create(null),r,i;for(let t of e){if(!L.isArray(t))throw TypeError(`Object iterator must return a key-value pair`);i=t[0],L.hasOwnProp(n,i)?(r=n[i],n[i]=L.isArray(r)?[...r,t[1]]:[r,t[1]]):n[i]=t[1]}a(n,t)}else e!=null&&i(t,e,n);return this}get(e,t){if(e=Ra(e),e){let n=L.findKey(this,e);if(n){let e=this[n];if(!t)return e;if(t===!0)return Ba(e);if(L.isFunction(t))return t.call(this,e,n);if(L.isRegExp(t))return t.exec(e);throw TypeError(`parser must be boolean|regexp|function`)}}}has(e,t){if(e=Ra(e),e){let n=L.findKey(this,e);return!!(n&&this[n]!==void 0&&(!t||Ka(this,this[n],n,t)))}return!1}delete(e,t){let n=this,r=!1;function i(e){if(e=Ra(e),e){let i=L.findKey(n,e);i&&(!t||Ka(n,n[i],i,t))&&(delete n[i],r=!0)}}return L.isArray(e)?e.forEach(i):i(e),r}clear(e){let t=Object.keys(this),n=t.length,r=!1;for(;n--;){let i=t[n];(!e||Ka(this,this[i],i,e,!0))&&(delete this[i],r=!0)}return r}normalize(e){let t=this,n={};return L.forEach(this,(r,i)=>{let a=L.findKey(n,i);if(a){t[a]=za(r),delete t[i];return}let o=e?qa(i):String(i).trim();o!==i&&delete t[i],t[o]=za(r),n[o]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){let t=Object.create(null);return L.forEach(this,(n,r)=>{n!=null&&n!==!1&&(t[r]=e&&L.isArray(n)?n.join(`, `):n)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+`: `+t).join(`
`)}getSetCookie(){let e=this.get(`set-cookie`);return L.isArray(e)?e:e==null||e===!1?[]:[e]}get[Symbol.toStringTag](){return`AxiosHeaders`}static from(e){return e instanceof this?e:new this(e)}static parseParameters(e){return Wa(e)}static concat(e,...t){let n=new this(e);return t.forEach(e=>n.set(e)),n}static accessor(e){let t=(this[La]=this[La]={accessors:{}}).accessors,n=this.prototype;function r(e){let r=Ra(e);t[r]||(Ja(n,e),t[r]=!0)}return L.isArray(e)?e.forEach(r):r(e),this}};Ya.accessor([`Content-Type`,`Content-Length`,`Accept`,`Accept-Encoding`,`User-Agent`,`Authorization`]),L.reduceDescriptors(Ya.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}}),L.freezeMethods(Ya);var Xa=`[REDACTED ****]`;function Za(e){if(L.hasOwnProp(e,`toJSON`))return!0;let t=Object.getPrototypeOf(e);for(;t&&t!==Object.prototype;){if(L.hasOwnProp(t,`toJSON`))return!0;t=Object.getPrototypeOf(t)}return!1}function Qa(e,t){let n=new Set(t.map(e=>String(e).toLowerCase())),r=[],i=e=>{if(typeof e!=`object`||!e||L.isBuffer(e))return e;if(r.indexOf(e)!==-1)return;e instanceof Ya&&(e=e.toJSON()),r.push(e);let t;if(L.isArray(e))t=[],e.forEach((e,n)=>{let r=i(e);L.isUndefined(r)||(t[n]=r)});else{if(!L.isPlainObject(e)&&Za(e))return r.pop(),e;t=Object.create(null);for(let[r,a]of Object.entries(e)){let e=n.has(r.toLowerCase())?Xa:i(a);L.isUndefined(e)||(t[r]=e)}}return r.pop(),t};return i(e)}function $a(e){try{return String(e)}catch{return``}}function eo(e){return e.errors.map(e=>{try{return e&&e.message?$a(e.message):$a(e)}catch{return``}}).filter(Boolean).join(`; `)||e.name||`AggregateError`}var R=class e extends Error{static from(t,n,r,i,a,o){let s=t.message;!s&&L.isArray(t.errors)&&t.errors.length&&(s=eo(t));let c=new e(s,n||t.code,r,i,a);return Object.defineProperty(c,"cause",{__proto__:null,value:t,writable:!0,enumerable:!1,configurable:!0}),c.name=t.name,t.status!=null&&c.status==null&&(c.status=t.status),o&&Object.assign(c,o),c}constructor(e,t,n,r,i){super(e),Object.defineProperty(this,"message",{__proto__:null,value:e,enumerable:!0,writable:!0,configurable:!0}),this.name=`AxiosError`,this.isAxiosError=!0,t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i,this.status=i.status)}toJSON(){let e=this.config,t=e&&L.hasOwnProp(e,`redact`)?e.redact:void 0,n=L.isArray(t)&&t.length>0?Qa(e,t):L.toJSONObject(e);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:n,code:this.code,status:this.status}}};R.ERR_BAD_OPTION_VALUE=`ERR_BAD_OPTION_VALUE`,R.ERR_BAD_OPTION=`ERR_BAD_OPTION`,R.ECONNABORTED=`ECONNABORTED`,R.ETIMEDOUT=`ETIMEDOUT`,R.ECONNREFUSED=`ECONNREFUSED`,R.ERR_NETWORK=`ERR_NETWORK`,R.ERR_FR_TOO_MANY_REDIRECTS=`ERR_FR_TOO_MANY_REDIRECTS`,R.ERR_DEPRECATED=`ERR_DEPRECATED`,R.ERR_BAD_RESPONSE=`ERR_BAD_RESPONSE`,R.ERR_BAD_REQUEST=`ERR_BAD_REQUEST`,R.ERR_CANCELED=`ERR_CANCELED`,R.ERR_NOT_SUPPORT=`ERR_NOT_SUPPORT`,R.ERR_INVALID_URL=`ERR_INVALID_URL`,R.ERR_FORM_DATA_DEPTH_EXCEEDED=`ERR_FORM_DATA_DEPTH_EXCEEDED`;function to(e){return L.isPlainObject(e)||L.isArray(e)}function no(e){return L.endsWith(e,`[]`)?e.slice(0,-2):e}function ro(e,t,n){return e?e.concat(t).map(function(e,t){return e=no(e),!n&&t?`[`+e+`]`:e}).join(n?`.`:``):t}function io(e){return L.isArray(e)&&!e.some(to)}var ao=L.toFlatObject(L,{},null,function(e){return/^is[A-Z]/.test(e)});function oo(e,t,n){if(!L.isObject(e))throw TypeError(`target must be an object`);t||=new FormData;let r=(e,t)=>{let r=L.getSafeProp(n,e);return L.isUndefined(r)?t:r},i=r(`metaTokens`,!0),a=r(`visitor`)||h,o=r(`dots`,!1),s=r(`indexes`,!1),c=r(`Blob`)||typeof Blob<`u`&&Blob,l=r(`maxDepth`,100),u=c&&L.isSpecCompliantForm(t),d=[];if(!L.isFunction(a))throw TypeError(`visitor must be a function`);function f(e){if(e===null)return``;if(L.isDate(e))return e.toISOString();if(L.isBoolean(e))return e.toString();if(!u&&L.isBlob(e))throw new R(`Blob is not supported. Use a Buffer instead.`);if(L.isArrayBuffer(e)||L.isTypedArray(e)){if(u&&typeof c==`function`)return new c([e]);throw new R(`Blob is not supported. Use a Buffer instead.`,R.ERR_NOT_SUPPORT)}return e}function p(e){if(e>l)throw new R(`Object is too deeply nested (`+e+` levels). Max depth: `+l,R.ERR_FORM_DATA_DEPTH_EXCEEDED)}function m(e,t){if(l===1/0)return JSON.stringify(e);let n=[];return JSON.stringify(e,function(e,r){if(!L.isObject(r))return r;for(;n.length&&n[n.length-1]!==this;)n.pop();return n.push(r),p(t+n.length-1),r})}function h(e,n,r){let a=e;if(L.isReactNative(t)&&L.isReactNativeBlob(e))return t.append(ro(r,n,o),f(e)),!1;if(e&&!r&&typeof e==`object`){if(L.endsWith(n,`{}`))n=i?n:n.slice(0,-2),e=m(e,1);else if(L.isArray(e)&&io(e)||(L.isFileList(e)||L.endsWith(n,`[]`))&&(a=L.toArray(e)))return n=no(n),a.forEach(function(e,r){!(L.isUndefined(e)||e===null)&&t.append(s===!0?ro([n],r,o):s===null?n:n+`[]`,f(e))}),!1}return to(e)?!0:(t.append(ro(r,n,o),f(e)),!1)}let g=Object.assign(ao,{defaultVisitor:h,convertValue:f,isVisitable:to});function _(e,n,r=0){if(!L.isUndefined(e)){if(p(r),d.indexOf(e)!==-1)throw Error(`Circular reference detected in `+n.join(`.`));d.push(e),L.forEach(e,function(e,i){(!(L.isUndefined(e)||e===null)&&a.call(t,e,L.isString(i)?i.trim():i,n,g))===!0&&_(e,n?n.concat(i):[i],r+1)}),d.pop()}}if(!L.isObject(e))throw TypeError(`data must be an object`);return _(e),t}function so(e){let t={"!":`%21`,"'":`%27`,"(":`%28`,")":`%29`,"~":`%7E`,"%20":`+`};return encodeURIComponent(e).replace(/[!'()~]|%20/g,function(e){return t[e]})}function co(e,t){this._pairs=[],e&&oo(e,this,t)}var lo=co.prototype;lo.append=function(e,t){this._pairs.push([e,t])},lo.toString=function(e){let t=e?t=>e.call(this,t,so):so;return this._pairs.map(function(e){return t(e[0])+`=`+t(e[1])},``).join(`&`)};function uo(e){return encodeURIComponent(e).replace(/%3A/gi,`:`).replace(/%24/g,`$`).replace(/%2C/gi,`,`).replace(/%20/g,`+`)}function fo(e,t,n){if(!t)return e;e||=``;let r=L.isFunction(n)?{serialize:n}:n,i=L.getSafeProp(r,`encode`)||uo,a=L.getSafeProp(r,`serialize`),o;if(o=a?a(t,r):L.isURLSearchParams(t)?t.toString():new co(t,r).toString(i),o){let t=e.indexOf(`#`);t!==-1&&(e=e.slice(0,t)),e+=(e.indexOf(`?`)===-1?`?`:`&`)+o}return e}var po=Symbol(`internals`);function mo(e){return e?e.length:0}function z(e){if(e)for(;e.length&&e[e.length-1]===null;)e.pop()}function B(e,t){let n=e.handlers,r=mo(n);n===t.handlersRef?r!==t.handlersLength&&(r?t.handlerEntries.forEach(function(e,r){n[e.index]!==e.handler&&t.handlerEntries.delete(r)}):t.handlerEntries.clear()):(t.handlersRef=n,t.handlerEntries.clear()),t.handlersLength=r}var ho=class{constructor(){this.handlers=[],this[po]={handlersRef:this.handlers,handlersLength:this.handlers.length,handlerEntries:new Map,iterationDepth:0,nextId:0}}use(e,t,n){let r={fulfilled:e,rejected:t,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null},i=this[po];this.handlers??=[],B(this,i);let a=i.nextId++;return this.handlers.push(r),i.handlerEntries.set(a,{handler:r,index:this.handlers.length-1}),i.handlersLength=this.handlers.length,a}eject(e){let t=this[po];B(this,t);let n=t.handlerEntries.get(e);if(n){if(t.handlerEntries.delete(e),this.handlers[n.index]!==n.handler)return;this.handlers[n.index]=null,t.iterationDepth||(z(this.handlers),t.handlersLength=this.handlers.length)}}clear(){this.handlers&&(this.handlers=[],B(this,this[po]))}forEach(e){let t=this[po];B(this,t),t.iterationDepth++;try{L.forEach(this.handlers,function(t){t!==null&&e(t)})}finally{--t.iterationDepth||(B(this,t),z(this.handlers),t.handlersLength=mo(this.handlers))}}},go={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0},_o={isBrowser:!0,classes:{URLSearchParams:typeof URLSearchParams<`u`?URLSearchParams:co,FormData:typeof FormData<`u`?FormData:null,Blob:typeof Blob<`u`?Blob:null},protocols:[`http`,`https`,`file`,`blob`,`url`,`data`]},vo=s({hasBrowserEnv:()=>yo,hasStandardBrowserEnv:()=>xo,hasStandardBrowserWebWorkerEnv:()=>So,navigator:()=>bo,origin:()=>Co}),yo=typeof window<`u`&&typeof document<`u`,bo=typeof navigator==`object`&&navigator||void 0,xo=yo&&(!bo||[`ReactNative`,`NativeScript`,`NS`].indexOf(bo.product)<0),So=typeof WorkerGlobalScope<`u`&&self instanceof WorkerGlobalScope&&typeof self.importScripts==`function`,Co=yo&&window.location.href||`http://localhost`,wo={...vo,..._o};function To(e,t){return oo(e,new wo.classes.URLSearchParams,{visitor:function(e,t,n,r){return wo.isNode&&L.isBuffer(e)?(this.append(t,e.toString(`base64`)),!1):r.defaultVisitor.apply(this,arguments)},...t})}var Eo=100;function Do(e){if(e>Eo)throw new R(`FormData field is too deeply nested (`+e+` levels). Max depth: `+Eo,R.ERR_FORM_DATA_DEPTH_EXCEEDED)}function Oo(e){let t=[],n=/[^.[\]]+|\[([^.[\]]*)]/g,r;for(;(r=n.exec(e))!==null;)Do(t.length),t.push(r[0]===`[]`?``:r[1]||r[0]);return t}function ko(e){let t={},n=Object.keys(e),r,i=n.length,a;for(r=0;r<i;r++)a=n[r],t[a]=e[a];return t}function Ao(e){function t(e,n,r,i){Do(i);let a=e[i++];if(a===`__proto__`)return!0;let o=Number.isFinite(+a),s=i>=e.length;return a=!a&&L.isArray(r)?r.length:a,s?(L.hasOwnProp(r,a)?r[a]=L.isArray(r[a])?r[a].concat(n):[r[a],n]:r[a]=n,!o):((!L.hasOwnProp(r,a)||!L.isObject(r[a]))&&(r[a]=[]),t(e,n,r[a],i)&&L.isArray(r[a])&&(r[a]=ko(r[a])),!o)}if(L.isFormData(e)&&L.isFunction(e.entries)){let n={};return L.forEachEntry(e,(e,r)=>{t(Oo(e),r,n,0)}),n}return null}var jo=Object.freeze([`get`,`delete`,`head`,`options`,`post`,`put`,`patch`,`purge`,`link`,`unlink`,`query`]),Mo=(e,t)=>e!=null&&L.hasOwnProp(e,t)?e[t]:void 0;function No(e,t,n){if(L.isString(e))try{return(t||JSON.parse)(e),L.trim(e)}catch(e){if(e.name!==`SyntaxError`)throw e}return(n||JSON.stringify)(e)}var Po={transitional:go,adapter:[`xhr`,`http`,`fetch`],transformRequest:[function(e,t){let n=t.getContentType()||``,r=n.indexOf(`application/json`)>-1,i=L.isObject(e);if(i&&L.isHTMLForm(e)&&(e=new FormData(e)),L.isFormData(e))return r?JSON.stringify(Ao(e)):e;if(L.isArrayBuffer(e)||L.isBuffer(e)||L.isStream(e)||L.isFile(e)||L.isBlob(e)||L.isReadableStream(e))return e;if(L.isArrayBufferView(e))return e.buffer;if(L.isURLSearchParams(e))return t.setContentType(`application/x-www-form-urlencoded;charset=utf-8`,!1),e.toString();let a;if(i){let t=Mo(this,`formSerializer`);if(n.indexOf(`application/x-www-form-urlencoded`)>-1)return To(e,t).toString();if((a=L.isFileList(e))||n.indexOf(`multipart/form-data`)>-1){let n=Mo(this,`env`),r=n&&n.FormData;return oo(a?{"files[]":e}:e,r&&new r,t)}}return i||r?(t.setContentType(`application/json`,!1),No(e)):e}],transformResponse:[function(e){let t=Mo(this,`transitional`)||Po.transitional,n=t&&t.forcedJSONParsing,r=Mo(this,`responseType`),i=r===`json`;if(L.isResponse(e)||L.isReadableStream(e))return e;if(e&&L.isString(e)&&(n&&!r||i)){let n=!(t&&t.silentJSONParsing)&&i;try{return JSON.parse(e,Mo(this,`parseReviver`))}catch(e){if(n)throw e.name===`SyntaxError`?R.from(e,R.ERR_BAD_RESPONSE,this,null,Mo(this,`response`)):e}}return e}],timeout:0,xsrfCookieName:`XSRF-TOKEN`,xsrfHeaderName:`X-XSRF-TOKEN`,maxContentLength:-1,maxBodyLength:-1,env:{FormData:wo.classes.FormData,Blob:wo.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:`application/json, text/plain, */*`,"Content-Type":void 0}}};L.forEach(jo,e=>{Po.headers[e]={}});function Fo(e,t){let n=this||Po,r=t||n,i=Ya.from(r.headers),a=r.data;return L.forEach(e,function(e){a=e.call(n,a,i.normalize(),t?t.status:void 0)}),i.normalize(),a}function Io(e){return!!(e&&e.__CANCEL__)}var Lo=class extends R{constructor(e,t,n){super(e??`canceled`,R.ERR_CANCELED,t,n),this.name=`CanceledError`,this.__CANCEL__=!0}};function Ro(e,t,n){let r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new R(`Request failed with status code `+n.status,n.status>=400&&n.status<500?R.ERR_BAD_REQUEST:R.ERR_BAD_RESPONSE,n.config,n.request,n))}var zo=/[\t\n\r]/g;function Bo(e){if(typeof e!=`string`)return e;let t=0;for(;t<e.length&&e.charCodeAt(t)<=32;)t++;return e.slice(t).replace(zo,``)}function Vo(e){let t=/^([-+\w]{1,25}):(?:\/\/)?/.exec(e);return t&&t[1]||``}function Ho(e,t){e||=10;let n=Array(e),r=Array(e),i=0,a=0,o;return t=t===void 0?1e3:t,function(s){let c=Date.now(),l=r[a];o||=c,n[i]=s,r[i]=c;let u=a,d=0;for(;u!==i;)d+=n[u++],u%=e;if(i=(i+1)%e,i===a&&(a=(a+1)%e),c-o<t)return;let f=l&&c-l;return f?Math.round(d*1e3/f):void 0}}function Uo(e,t){let n=0,r=1e3/t,i,a,o=(t,r=Date.now())=>{n=r,i=null,a&&=(clearTimeout(a),null),e(...t)};return[(...e)=>{let t=Date.now(),s=t-n;s>=r?o(e,t):(i=e,a||=setTimeout(()=>{a=null,o(i)},r-s))},()=>i&&o(i),(...e)=>o(e)]}var Wo=(e,t,n=3)=>{let r=0,i=Ho(50,250);return Uo(n=>{if(!n||!L.isNumber(n.loaded))return;let a=n.loaded,o=n.lengthComputable?n.total:void 0,s=Math.max(0,o==null?a:Math.min(a,o)),c=Math.max(0,s-r),l=i(c);r=Math.max(r,s),e({loaded:s,total:o,progress:o?s/o:void 0,bytes:c,rate:l||void 0,estimated:l&&o?(o-s)/l:void 0,event:n,lengthComputable:o!=null,[t?`download`:`upload`]:!0})},n)},Go=(e,t)=>{let n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Ko=(e,t=L.asap)=>(...n)=>t(()=>e(...n)),qo=wo.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,wo.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(wo.origin),wo.navigator&&/(msie|trident)/i.test(wo.navigator.userAgent)):()=>!0,Jo=wo.hasStandardBrowserEnv?{write(e,t,n,r,i,a,o){if(typeof document>`u`)return;let s=[`${e}=${encodeURIComponent(t)}`];L.isNumber(n)&&s.push(`expires=${new Date(n).toUTCString()}`),L.isString(r)&&s.push(`path=${r}`),L.isString(i)&&s.push(`domain=${i}`),a===!0&&s.push(`secure`),L.isString(o)&&s.push(`SameSite=${o}`),document.cookie=s.join(`; `)},read(e){if(typeof document>`u`)return null;let t=document.cookie.split(`;`);for(let n=0;n<t.length;n++){let r=t[n].replace(/^\s+/,``),i=r.indexOf(`=`);if(i!==-1&&r.slice(0,i)===e)try{return decodeURIComponent(r.slice(i+1))}catch{return r.slice(i+1)}}return null},remove(e){this.write(e,``,Date.now()-864e5,`/`)}}:{write(){},read(){return null},remove(){}};function Yo(e){return typeof e==`string`&&/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Xo(e,t){if(!t)return e;let n=e.length;for(;n>0&&e.charCodeAt(n-1)===47;)n--;return e.slice(0,n)+`/`+t.replace(/^\/+/,``)}var Zo=/^https?:(?!\/\/)/i;function Qo(e){return e&&e.replace(/(^|&)([^=&]*=)?[^&]+/g,(e,t,n=``)=>`${t}${n}${Xa}`)}function $o(e){let t=e.replace(/^(https?:\/{0,2})[^/?#]*@/i,`$1${Xa}@`),n=t.indexOf(`#`),r=(n===-1?t:t.slice(0,n)).replace(/([?&][^=&#]*=)[^&#]*/g,`$1${Xa}`);return n===-1?r:`${r}#${Qo(t.slice(n+1))}`}function es(e,t){if(typeof e==`string`){let n=Bo(e);if(Zo.test(n))throw new R(`Invalid URL ${JSON.stringify($o(n))}: missing "//" after protocol`,R.ERR_INVALID_URL,t)}}function ts(e,t,n,r){es(t,r);let i=!Yo(t);return e&&(i||n===!1)?(es(e,r),Xo(e,t)):t}var ns=e=>e instanceof Ya?{...e}:e,rs=e=>Object.getOwnPropertySymbols&&Object.getOwnPropertyDescriptor?Object.keys(e).concat(Object.getOwnPropertySymbols(e).filter(t=>Object.getOwnPropertyDescriptor(e,t).enumerable)):Object.keys(e);function is(e,t){e||={},t||={};let n=Object.create(null);Object.defineProperty(n,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function r(e,t,n,r){return L.isPlainObject(e)&&L.isPlainObject(t)?L.merge.call({caseless:r},e,t):L.isPlainObject(t)?L.merge({},t):L.isArray(t)?t.slice():t}function i(e,t,n,i){if(!L.isUndefined(t))return r(e,t,n,i);if(!L.isUndefined(e))return r(void 0,e,n,i)}function a(e,t){if(!L.isUndefined(t))return r(void 0,t)}function o(e,t){if(!L.isUndefined(t))return r(void 0,t);if(!L.isUndefined(e))return r(void 0,e)}function s(n){let r=L.hasOwnProp(t,`transitional`)?t.transitional:void 0;if(!L.isUndefined(r)){if(L.isPlainObject(r)){if(L.hasOwnProp(r,n))return r[n]}else return}let i=L.hasOwnProp(e,`transitional`)?e.transitional:void 0;if(L.isPlainObject(i)&&L.hasOwnProp(i,n))return i[n]}function c(n,i,a){if(L.hasOwnProp(t,a))return r(n,i);if(L.hasOwnProp(e,a))return r(void 0,n)}let l={url:a,method:a,data:a,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutErrorMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,allowedSocketPaths:o,responseEncoding:o,validateStatus:c,headers:(e,t,n)=>i(ns(e),ns(t),n,!0)};return L.forEach(rs({...e,...t}),function(r){if(r===`__proto__`||r===`constructor`||r===`prototype`)return;let a=L.hasOwnProp(l,r)?l[r]:i,o=a(L.hasOwnProp(e,r)?e[r]:void 0,L.hasOwnProp(t,r)?t[r]:void 0,r);L.isUndefined(o)&&a!==c||(n[r]=o)}),L.hasOwnProp(t,`validateStatus`)&&L.isUndefined(t.validateStatus)&&s(`validateStatusUndefinedResolves`)===!1&&(L.hasOwnProp(e,`validateStatus`)?n.validateStatus=r(void 0,e.validateStatus):delete n.validateStatus),n}var as=[`content-type`,`content-length`];function os(e,t,n){if(n!==`content-only`){e.set(t);return}Object.entries(t||{}).forEach(([t,n])=>{as.includes(t.toLowerCase())&&e.set(t,n)})}var ss=e=>encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi,(e,t)=>String.fromCharCode(parseInt(t,16)));function cs(e){let t=is({},e),n=e=>L.hasOwnProp(t,e)?t[e]:void 0,r=n(`data`),i=n(`withXSRFToken`),a=n(`xsrfHeaderName`),o=n(`xsrfCookieName`),s=n(`headers`),c=n(`auth`),l=n(`baseURL`),u=n(`allowAbsoluteUrls`),d=n(`url`);if(t.headers=s=Ya.from(s),t.url=fo(ts(l,d,u,t),n(`params`),n(`paramsSerializer`)),c){let t=L.getSafeProp(c,`username`)||``,n=L.getSafeProp(c,`password`)||``;try{s.set(`Authorization`,`Basic `+btoa(t+`:`+(n?ss(n):``)))}catch(t){throw R.from(t,R.ERR_BAD_OPTION_VALUE,e)}}if(L.isFormData(r)){let e=L.getSafeProp(r,`getHeaders`);wo.hasStandardBrowserEnv||wo.hasStandardBrowserWebWorkerEnv||L.isReactNative(r)?s.setContentType(void 0):L.isFunction(e)&&os(s,e.call(r),n(`formDataHeaderPolicy`))}if(wo.hasStandardBrowserEnv&&(L.isFunction(i)&&(i=i(t)),i===!0||i==null&&qo(t.url))){let e=a&&o&&Jo.read(o);e&&s.set(a,e)}return t}var ls=typeof XMLHttpRequest<`u`&&function(e){return new Promise(function(t,n){let r=cs(e),i=r.data,a=Ya.from(r.headers).normalize(),{responseType:o,onUploadProgress:s,onDownloadProgress:c}=r,l,u,d,f,p,m;function h(){f&&f(),p&&p(),r.cancelToken&&r.cancelToken.unsubscribe(l),r.signal&&r.signal.removeEventListener(`abort`,l)}let g=new XMLHttpRequest;g.open(r.method.toUpperCase(),r.url,!0),g.timeout=r.timeout;function _(i){if(!g)return;if(g.status===0&&(Vo(Bo(r.url))||Vo(wo.origin))!==`file`&&!(g.responseURL&&g.responseURL.startsWith(`file:`))){n(new R(`Request aborted`,R.ECONNABORTED,e,g)),h(),g=null;return}try{i?m&&m(i):p&&p()}catch(e){setTimeout(()=>{throw e})}if(!g)return;let a=Ya.from(`getAllResponseHeaders`in g&&g.getAllResponseHeaders());Ro(function(e){t(e),h()},function(e){n(e),h()},{data:!o||o===`text`||o===`json`?g.responseText:g.response,status:g.status,statusText:g.statusText,headers:a,config:e,request:g}),g=null}`onloadend`in g?g.onloadend=_:g.onreadystatechange=function(){!g||g.readyState!==4||g.status===0&&!(g.responseURL&&g.responseURL.startsWith(`file:`))||setTimeout(_)},g.onabort=function(){g&&=(n(new R(`Request aborted`,R.ECONNABORTED,e,g)),h(),null)},g.onerror=function(t){let r=new R(t&&t.message?t.message:`Network Error`,R.ERR_NETWORK,e,g);r.event=t||null,n(r),h(),g=null},g.ontimeout=function(){let t=r.timeout?`timeout of `+r.timeout+`ms exceeded`:`timeout exceeded`,i=r.transitional||go;r.timeoutErrorMessage&&(t=r.timeoutErrorMessage),n(new R(t,i.clarifyTimeoutError?R.ETIMEDOUT:R.ECONNABORTED,e,g)),h(),g=null},i===void 0&&a.setContentType(null),`setRequestHeader`in g&&L.forEach(Ia(a),function(e,t){g.setRequestHeader(t,e)}),L.isUndefined(r.withCredentials)||(g.withCredentials=!!r.withCredentials),o&&o!==`json`&&(g.responseType=r.responseType),c&&([d,p,m]=Wo(c,!0),g.addEventListener(`progress`,d)),s&&g.upload&&([u,f]=Wo(s),g.upload.addEventListener(`progress`,u),g.upload.addEventListener(`loadend`,f)),(r.cancelToken||r.signal)&&(l=t=>{g&&=(n(!t||t.type?new Lo(null,e,g):t),g.abort(),h(),null)},r.cancelToken&&r.cancelToken.subscribe(l),r.signal&&(r.signal.aborted?l():r.signal.addEventListener(`abort`,l)));let v=Vo(r.url);if(v&&!wo.protocols.includes(v)){n(new R(`Unsupported protocol `+v+`:`,R.ERR_BAD_REQUEST,e)),h();return}g.send(i||null)})},us=(e,t)=>{if(e=e?e.filter(Boolean):[],!t&&!e.length)return;let n=new AbortController,r=!1,i=function(e){if(!r){r=!0,o();let t=e instanceof Error?e:this.reason;n.abort(t instanceof R?t:new Lo(t instanceof Error?t.message:t))}},a=t&&setTimeout(()=>{a=null,i(new R(`timeout of ${t}ms exceeded`,R.ETIMEDOUT))},t),o=()=>{e&&=(a&&clearTimeout(a),a=null,e.forEach(e=>{e.unsubscribe?e.unsubscribe(i):e.removeEventListener(`abort`,i)}),null)};e.forEach(e=>{if(!r){if(e.aborted){i.call(e);return}e.addEventListener(`abort`,i,{once:!0})}});let{signal:s}=n;return s.unsubscribe=()=>L.asap(o),s},ds=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,i;for(;r<n;)i=r+t,yield e.slice(r,i),r=i},fs=async function*(e,t){for await(let n of ps(e))yield*ds(n,t)},ps=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}let t=e.getReader();try{for(;;){let{done:e,value:n}=await t.read();if(e)break;yield n}}finally{await t.cancel()}},ms=(e,t,n,r)=>{let i=fs(e,t),a=0,o,s=e=>{o||(o=!0,r&&r(e))};return new ReadableStream({async pull(e){try{let{done:t,value:r}=await i.next();if(t){s(),e.close();return}let o=r.byteLength;n&&n(a+=o),e.enqueue(new Uint8Array(r))}catch(e){throw s(e),e}},cancel(e){return s(e),i.return()}},{highWaterMark:2})},hs=e=>e>=48&&e<=57||e>=65&&e<=70||e>=97&&e<=102,gs=(e,t,n)=>t+2<n&&hs(e.charCodeAt(t+1))&&hs(e.charCodeAt(t+2)),_s=e=>e<=57?e-48:(e&223)-55,vs=e=>e>=65&&e<=90||e>=97&&e<=122||e>=48&&e<=57||e===43||e===47||e===45||e===95,ys=e=>e===9||e===10||e===12||e===13||e===32,bs=e=>{let t=Math.floor(e/4),n=e%4;return t*3+(n===2?1:n===3?2:0)},xs=e=>{let t=e.length,n=0;return t>0&&e.charCodeAt(t-1)===61&&(n++,t>1&&e.charCodeAt(t-2)===61&&n++),Math.floor((t-n)*3/4)},Ss=e=>{let t=e.length,n=0,r=0,i=!1;for(let a=0;a<t;a++){let o=e.charCodeAt(a);if(o===37&&gs(e,a,t)&&(o=_s(e.charCodeAt(a+1))*16+_s(e.charCodeAt(a+2)),a+=2),!ys(o)){if(o===61){r++;continue}if(!vs(o)||r>0){i=!0;continue}n++}}return i||r>2||r>0&&(n+r)%4!=0||n%4==1?xs(e):bs(n)},Cs=(e,t)=>{if(!e||typeof e!=`string`||!e.startsWith(`data:`))return 0;let n=e.indexOf(`,`);if(n<0)return 0;let r=e.slice(5,n),i=e.slice(n+1);if(/;base64/i.test(r))return t(i);let a=0;for(let e=0,t=i.length;e<t;e++){let n=i.charCodeAt(e);if(n===37&&gs(i,e,t))a+=1,e+=2;else if(n<128)a+=1;else if(n<2048)a+=2;else if(n>=55296&&n<=56319&&e+1<t){let t=i.charCodeAt(e+1);t>=56320&&t<=57343?(a+=4,e++):a+=3}else a+=3}return a};function ws(e){let t=typeof e==`string`?e.indexOf(`#`):-1;return Cs(t===-1?e:e.slice(0,t),Ss)}var Ts=`1.20.0`,Es=65536,Ds={cache:`default`,redirect:`follow`,referrer:`about:client`,referrerPolicy:``,mode:`cors`,integrity:``,keepalive:!1,priority:`auto`,window:null},{isFunction:Os}=L,ks=e=>encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi,(e,t)=>String.fromCharCode(parseInt(t,16))),As=e=>{if(!L.isString(e))return e;try{return decodeURIComponent(e)}catch{return e}},js=(e,...t)=>{try{return!!e(...t)}catch{return!1}},Ms=e=>{let t=e.indexOf(`://`),n=e;return t!==-1&&(n=n.slice(t+3)),n.includes(`@`)||n.includes(`:`)},Ns=e=>{let t=L.global!==void 0&&L.global!==null?L.global:globalThis,{ReadableStream:n,TextEncoder:r}=t;e=L.merge.call({skipUndefined:!0},{Request:t.Request,Response:t.Response},e);let{fetch:i,Request:a,Response:o}=e,s=i?Os(i):typeof fetch==`function`,c=Os(a),l=Os(o);if(!s)return!1;let u=s&&Os(n),d=s&&(typeof r==`function`?(e=>t=>e.encode(t))(new r):async e=>new Uint8Array(await new a(e).arrayBuffer())),f=c&&u&&js(()=>{let e=!1,t=new a(wo.origin,{body:new n,method:`POST`,get duplex(){return e=!0,`half`}}),r=t.headers.has(`Content-Type`);return t.body!=null&&t.body.cancel(),e&&!r}),p=l&&u&&js(()=>L.isReadableStream(new o(``).body)),m={stream:p&&(e=>e.body)};s&&[`text`,`arrayBuffer`,`blob`,`formData`,`stream`].forEach(e=>{!m[e]&&(m[e]=(t,n)=>{let r=t&&t[e];if(r)return r.call(t);throw new R(`Response type '${e}' is not supported`,R.ERR_NOT_SUPPORT,n)})});let h=async e=>{if(e==null)return 0;if(L.isBlob(e))return e.size;if(L.isSpecCompliantForm(e))return(await new a(wo.origin,{method:`POST`,body:e}).arrayBuffer()).byteLength;if(L.isArrayBufferView(e)||L.isArrayBuffer(e))return e.byteLength;if(L.isURLSearchParams(e)&&(e+=``),L.isString(e))return(await d(e)).byteLength},g=async(e,t)=>L.toFiniteNumber(e.getContentLength())??h(t);return async e=>{let{url:t,method:n,data:s,signal:l,cancelToken:d,timeout:_,onDownloadProgress:v,onUploadProgress:y,responseType:b,headers:x,withCredentials:ee=`same-origin`,fetchOptions:S,maxContentLength:C,maxBodyLength:w,maxRedirects:te}=cs(e),ne=L.isNumber(C)&&C>-1,T=L.isNumber(w)&&w>-1,re=t=>L.hasOwnProp(e,t)?e[t]:void 0,E=i||fetch;b=b?(b+``).toLowerCase():`text`;let D=us([l,d&&d.toAbortSignal()],_),O=null,ie=D&&D.unsubscribe&&(()=>{D.unsubscribe()}),ae,oe=null,k=()=>new R(`Request body larger than maxBodyLength limit`,R.ERR_BAD_REQUEST,e,O);try{let i,l=re(`auth`);if(l&&(i={username:L.getSafeProp(l,`username`)||``,password:L.getSafeProp(l,`password`)||``}),Ms(t)){let e=new URL(t,wo.origin);!i&&(e.username||e.password)&&(i={username:As(e.username),password:As(e.password)}),(e.username||e.password)&&(e.username=``,e.password=``,t=e.href)}if(i&&(x.delete(`authorization`),x.set(`Authorization`,`Basic `+btoa(ks((i.username||``)+`:`+(i.password||``))))),ne&&typeof t==`string`&&t.startsWith(`data:`)&&ws(t)>C)throw new R(`maxContentLength size of `+C+` exceeded`,R.ERR_BAD_RESPONSE,e,O);if(T&&n!==`get`&&n!==`head`){let e=await h(s);if(typeof e==`number`&&isFinite(e)&&(ae=e,e>w))throw k()}let d=T&&(L.isReadableStream(s)||L.isStream(s)),_=(e,t,n)=>ms(e,Es,e=>{if(T&&e>w)throw oe=k();t&&t(e)},n);if(f&&n!==`get`&&n!==`head`&&(y||d)){if(ae??=await g(x,s),ae!==0||d){let e=new a(t,{method:`POST`,body:s,duplex:`half`}),n;if(L.isFormData(s)&&(n=e.headers.get(`content-type`))&&x.setContentType(n),e.body){let[t,n]=y&&Go(ae,Wo(Ko(y)))||[];s=_(e.body,t,n)}}}else if(d&&!c&&u&&n!==`get`&&n!==`head`)s=_(s);else if(d&&c&&!f&&n!==`get`&&n!==`head`)throw new R(`Stream request bodies are not supported by the current fetch implementation`,R.ERR_NOT_SUPPORT,e,O);L.isString(ee)||(ee=ee?`include`:`omit`);let A=c&&`credentials`in a.prototype;if(L.isFormData(s)){let e=x.getContentType();e&&/^multipart\/form-data/i.test(e)&&!/boundary=/i.test(e)&&x.delete(`content-type`)}x.set(`User-Agent`,`axios/`+Ts,!1);let se=S==null?S:Object.assign(Object.create(null),S);se&&(delete se.body,delete se.headers,delete se.method,delete se.signal,delete se.duplex,delete se.credentials);let ce=Object.assign(Object.create(null),se,{signal:D,method:n.toUpperCase(),headers:Ia(x.normalize()),body:s,duplex:`half`,credentials:A?ee:void 0});c&&(L.forEach(Ds,(e,t)=>{ce[t]===void 0&&(ce[t]=e)}),ce.signal===void 0&&(ce.signal=null),ce.body===void 0&&(ce.body=null)),te===0&&(ce.redirect=`manual`,se&&(se.redirect=`manual`)),O=c&&new a(t,ce);let le=await(c?E(O,se):E(t,ce)),ue=Ya.from(le.headers);if(ne){let t=L.toFiniteNumber(ue.getContentLength());if(t!=null&&t>C)throw new R(`maxContentLength size of `+C+` exceeded`,R.ERR_BAD_RESPONSE,e,O)}let j=p&&(b===`stream`||b===`response`);if(p&&le.body&&(v||ne||j&&ie)){let t={};[`status`,`statusText`,`headers`].forEach(e=>{t[e]=le[e]});let n=L.toFiniteNumber(ue.getContentLength()),[r,i]=v&&Go(n,Wo(Ko(v),!0))||[],a=0;le=new o(ms(le.body,Es,t=>{if(ne&&(a=t,a>C))throw new R(`maxContentLength size of `+C+` exceeded`,R.ERR_BAD_RESPONSE,e,O);r&&r(t)},()=>{i&&i(),ie&&ie()}),t)}b||=`text`;let M=await m[L.findKey(m,b)||`text`](le,e);if(ne&&!p&&!j){let t;if(M!=null&&(typeof M.byteLength==`number`?t=M.byteLength:typeof M.size==`number`?t=M.size:typeof M==`string`&&(t=typeof r==`function`?new r().encode(M).byteLength:M.length)),typeof t==`number`&&t>C)throw new R(`maxContentLength size of `+C+` exceeded`,R.ERR_BAD_RESPONSE,e,O)}return!j&&ie&&ie(),await new Promise((t,n)=>{Ro(t,n,{data:M,headers:Ya.from(le.headers),status:le.status,statusText:le.statusText,config:e,request:O})})}catch(t){if(ie&&ie(),D&&D.aborted&&D.reason instanceof R){let n=D.reason;throw n.config=e,O&&(n.request=O),t!==n&&Object.defineProperty(n,"cause",{__proto__:null,value:t,writable:!0,enumerable:!1,configurable:!0}),n}if(oe)throw O&&!oe.request&&(oe.request=O),oe;if(t instanceof R)throw O&&!t.request&&(t.request=O),t;if(t&&t.name===`TypeError`&&/Load failed|fetch/i.test(t.message)){let n=new R(`Network Error`,R.ERR_NETWORK,e,O,t&&t.response);throw Object.defineProperty(n,"cause",{__proto__:null,value:t.cause||t,writable:!0,enumerable:!1,configurable:!0}),n}throw R.from(t,t&&t.code,e,O,t&&t.response)}}},Ps=new Map,Fs=e=>{let t=e&&e.env||{},{fetch:n,Request:r,Response:i}=t,a=[r,i,n],o=a.length,s,c,l=Ps;for(;o--;)s=a[o],c=l.get(s),c===void 0&&l.set(s,c=o?new Map:Ns(t)),l=c;return c};Fs();var Is={http:null,xhr:ls,fetch:{get:Fs}};L.forEach(Is,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{__proto__:null,value:t})}catch{}Object.defineProperty(e,"adapterName",{__proto__:null,value:t})}});var Ls=e=>`- ${e}`,Rs=e=>L.isFunction(e)||e===null||e===!1;function zs(e,t){e=L.isArray(e)?e:[e];let{length:n}=e,r,i,a={};for(let o=0;o<n;o++){r=e[o];let n;if(i=r,!Rs(r)&&(i=Is[(n=String(r)).toLowerCase()],i===void 0))throw new R(`Unknown adapter '${n}'`);if(i&&(L.isFunction(i)||(i=i.get(t))))break;a[n||`#`+o]=i}if(!i){let e=Object.entries(a).map(([e,t])=>`adapter ${e} `+(t===!1?`is not supported by the environment`:`is not available in the build`));throw new R(`There is no suitable adapter to dispatch the request `+(n?e.length>1?`since :
`+e.map(Ls).join(`
`):` `+Ls(e[0]):`as no adapter specified`),R.ERR_NOT_SUPPORT)}return i}var Bs={getAdapter:zs,adapters:Is};function Vs(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Lo(null,e)}function Hs(e){let t=L.toSafeFlatObject(e);return Vs(t),t.headers=Ya.from(L.getSafeProp(t,`headers`)),t.data=Fo.call(t,t.transformRequest),[`post`,`put`,`patch`].indexOf(t.method)!==-1&&t.headers.setContentType(`application/x-www-form-urlencoded`,!1),Bs.getAdapter(t.adapter||Po.adapter,t)(t).then(function(e){Vs(t),t.response=e;try{e.data=Fo.call(t,t.transformResponse,e)}finally{delete t.response}return e.headers=Ya.from(e.headers),e},function(e){if(!Io(e)&&(Vs(t),e&&e.response)){t.response=e.response;try{e.response.data=Fo.call(t,t.transformResponse,e.response)}finally{delete t.response}e.response.headers=Ya.from(e.response.headers)}return Promise.reject(e)})}var Us={};[`object`,`boolean`,`number`,`function`,`string`,`symbol`].forEach((e,t)=>{Us[e]=function(n){return typeof n===e||`a`+(t<1?`n `:` `)+e}});var Ws={};Us.transitional=function(e,t,n){function r(e,t){return`[Axios v`+Ts+`] Transitional option '`+e+`'`+t+(n?`. `+n:``)}return(n,i,a)=>{if(e===!1)throw new R(r(i,` has been removed`+(t?` in `+t:``)),R.ERR_DEPRECATED);return t&&!Ws[i]&&(Ws[i]=!0,console.warn(r(i,` has been deprecated since v`+t+` and will be removed in the near future`))),!e||e(n,i,a)}},Us.spelling=function(e){return(t,n)=>(console.warn(`${n} is likely a misspelling of ${e}`),!0)};function Gs(e,t,n){if(typeof e!=`object`||!e)throw new R(`options must be an object`,R.ERR_BAD_OPTION_VALUE);let r=Object.keys(e),i=r.length;for(;i-->0;){let a=r[i],o=Object.prototype.hasOwnProperty.call(t,a)?t[a]:void 0;if(o){let t=e[a],n=t===void 0||o(t,a,e);if(n!==!0)throw new R(`option `+a+` must be `+n,R.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new R(`Unknown option `+a,R.ERR_BAD_OPTION)}}var Ks={assertOptions:Gs,validators:Us},qs=Ks.validators,Js=class{constructor(e){this.defaults=e||{},this.interceptors={request:new ho,response:new ho}}async request(e,t){try{return await this._request(e,t)}catch(e){if(e instanceof Error)try{let t={};Error.captureStackTrace?Error.captureStackTrace(t):t=Error();let n=t.stack,r=``;if(typeof n==`string`){let e=n.indexOf(`
`);r=e===-1?``:n.slice(e+1)}if(!e.stack)e.stack=r;else if(r){let t=r.indexOf(`
`),n=t===-1?-1:r.indexOf(`
`,t+1),i=n===-1?``:r.slice(n+1);String(e.stack).endsWith(i)||(e.stack+=`
`+r)}}catch{}throw e}}_request(e,t){typeof e==`string`?(t||={},t.url=e):t=e||{},t=is(this.defaults,t);let{transitional:n,paramsSerializer:r,headers:i}=t;n!==void 0&&Ks.assertOptions(n,{silentJSONParsing:qs.transitional(qs.boolean),forcedJSONParsing:qs.transitional(qs.boolean),clarifyTimeoutError:qs.transitional(qs.boolean),legacyInterceptorReqResOrdering:qs.transitional(qs.boolean),advertiseZstdAcceptEncoding:qs.transitional(qs.boolean),validateStatusUndefinedResolves:qs.transitional(qs.boolean)},!1),r!=null&&(L.isFunction(r)?t.paramsSerializer={serialize:r}:Ks.assertOptions(r,{encode:qs.function,serialize:qs.function},!0)),t.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls===void 0?t.allowAbsoluteUrls=!0:t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls),Ks.assertOptions(t,{baseUrl:qs.spelling(`baseURL`),withXsrfToken:qs.spelling(`withXSRFToken`)},!0),t.method=(L.getSafeProp(t,`method`)||L.getSafeProp(this.defaults,`method`)||`get`).toLowerCase();let a=i&&L.merge(i.common,i[t.method]);i&&L.forEach(jo.concat(`common`),e=>{delete i[e]}),t.headers=Ya.concat(a,i);let o=[],s=!0;this.interceptors.request.forEach(function(e){if(typeof e.runWhen==`function`&&e.runWhen(t)===!1)return;s&&=e.synchronous;let n=t.transitional||go;n&&n.legacyInterceptorReqResOrdering?o.unshift(e.fulfilled,e.rejected):o.push(e.fulfilled,e.rejected)});let c=[];this.interceptors.response.forEach(function(e){c.push(e.fulfilled,e.rejected)});let l,u=0,d;if(!s){let e=[Hs.bind(this),void 0];for(e.unshift(...o),e.push(...c),d=e.length,l=Promise.resolve(t);u<d;)l=l.then(e[u++],e[u++]);return l}d=o.length;let f=t;for(;u<d;){let e=o[u++],t=o[u++];try{f=e?e(f):f}catch(e){if(!t){l=Promise.reject(e);break}try{let n=t.call(this,e);L.isThenable(n)&&(l=Promise.resolve(n).then(()=>Hs.call(this,f)))}catch(e){l=Promise.reject(e)}break}}if(!l)try{l=Hs.call(this,f)}catch(e){l=Promise.reject(e)}for(u=0,d=c.length;u<d;)l=l.then(c[u++],c[u++]);return l}getUri(e){return e=is(this.defaults,e),fo(ts(e.baseURL,e.url,e.allowAbsoluteUrls,e),e.params,e.paramsSerializer)}};L.forEach([`delete`,`get`,`head`,`options`],function(e){Js.prototype[e]=function(t,n){return this.request(is(n||{},{method:e,url:t,data:n&&L.hasOwnProp(n,`data`)?n.data:void 0}))}}),L.forEach([`post`,`put`,`patch`,`query`],function(e){function t(t){return function(n,r,i){return this.request(is(i||{},{method:e,headers:t?{"Content-Type":`multipart/form-data`}:{},url:n,data:r}))}}Js.prototype[e]=t(),e!==`query`&&(Js.prototype[e+`Form`]=t(!0))});var Ys=class e{constructor(e){if(typeof e!=`function`)throw TypeError(`executor must be a function.`);let t;this.promise=new Promise(function(e){t=e});let n=this;this.promise.then(e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-->0;)n._listeners[t](e);n._listeners=null}),this.promise.then=e=>{let t,r=new Promise(e=>{n.subscribe(e),t=e}).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e(function(e,r,i){n.reason||(n.reason=new Lo(e,r,i),t(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;let t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){let e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let t;return{token:new e(function(e){t=e}),cancel:t}}};function Xs(e){return function(t){return e.apply(null,t)}}function Zs(e){return L.isObject(e)&&e.isAxiosError===!0}var Qs={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,ContentTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,UnprocessableContent:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerReturnsAnUnknownError:520,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Qs).forEach(([e,t])=>{Qs[t]===void 0&&(Qs[t]=e)});function $s(e){let t=new Js(e),n=ci(Js.prototype.request,t);return L.extend(n,Js.prototype,t,{allOwnKeys:!0}),L.extend(n,t,null,{allOwnKeys:!0}),n.create=function(t){return $s(is(e,t))},n}var ec=$s(Po);ec.Axios=Js,ec.CanceledError=Lo,ec.CancelToken=Ys,ec.isCancel=Io,ec.VERSION=Ts,ec.toFormData=oo,ec.AxiosError=R,ec.Cancel=ec.CanceledError,ec.all=function(e){return Promise.all(e)},ec.spread=Xs,ec.isAxiosError=Zs,ec.mergeConfig=is,ec.AxiosHeaders=Ya,ec.formToJSON=e=>Ao(L.isHTMLForm(e)?new FormData(e):e),ec.getAdapter=Bs.getAdapter,ec.HttpStatusCode=Qs,ec.default=ec;var{VITE_APP_API_URL:tc,VITE_APP_API_PATH:nc}={VITE_APP_API_PATH:`tonyhung`,VITE_APP_API_URL:`https://ec-course-api.hexschool.io/`},rc=()=>{let e=document.cookie.split(`; `).find(e=>e.startsWith(`hexToken=`));return e?e.slice(9):``},ic=()=>{document.cookie=`hexToken=; expires=Thu, 01 Jan 1970 00:00:00 GMT`},ac=ec.create({baseURL:`${tc}v2/api/${nc}`}),oc=ec.create({baseURL:`${tc}v2/api/${nc}/admin`});oc.interceptors.request.use(e=>(e.headers.Authorization=rc(),e));var sc=e=>e.response?.data||{success:!1,message:`網路錯誤,請稍後再試`};function cc(){let[e,t]=(0,v.useState)({}),n=async()=>{try{let e=await ac.get(`/cart`);t(e.data.data||{carts:[]})}catch{t({carts:[]})}};return(0,v.useEffect)(()=>{n()},[]),(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(Ir,{cartData:e}),(0,F.jsx)(si,{}),(0,F.jsx)(Ht,{context:{cartData:e,getCartData:n}}),(0,F.jsx)(`div`,{className:`bg-dark`,children:(0,F.jsx)(`div`,{className:`container`,children:(0,F.jsxs)(`div`,{className:`d-flex align-items-center justify-content-between text-white py-4`,children:[(0,F.jsxs)(`p`,{className:`mb-0`,children:[`© 2026 HTHOFTT All Rights Reserved. |`,` `,(0,F.jsx)(jn,{to:`/`,children:`Privacy Policy`})]}),(0,F.jsxs)(`ul`,{className:`d-flex list-unstyled mb-0 h4`,children:[(0,F.jsx)(`li`,{children:(0,F.jsx)(jn,{className:`text-white mx-3`,to:`/`,onClick:()=>window.scrollTo({top:0,behavior:`smooth`}),children:(0,F.jsx)(`i`,{className:`bi bi-facebook`})})}),(0,F.jsx)(`li`,{children:(0,F.jsx)(jn,{className:`text-white mx-3`,to:`/`,onClick:()=>window.scrollTo({top:0,behavior:`smooth`}),children:(0,F.jsx)(`i`,{className:`bi bi-instagram`})})}),(0,F.jsx)(`li`,{children:(0,F.jsx)(jn,{className:`text-white ms-3`,to:`/`,onClick:()=>window.scrollTo({top:0,behavior:`smooth`}),children:(0,F.jsx)(`i`,{className:`bi bi-line`})})})]}),(0,F.jsx)(jn,{className:`nav-link ps-0`,to:`/login`,children:`後台登入`})]})})})]})}function lc(){return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(`div`,{className:`container`,children:[(0,F.jsxs)(`div`,{className:`row flex-md-row-reverse flex-column`,children:[(0,F.jsxs)(`div`,{className:`col-md-6`,children:[(0,F.jsx)(`img`,{src:`./paint1.jpg`,className:`img-fluid`,alt:`圖片`}),(0,F.jsxs)(`div`,{className:`card-body p-0`,children:[(0,F.jsx)(`h4`,{className:`mb-0 mt-4`,children:`素描類`}),(0,F.jsx)(`div`,{className:`d-flex justify-content-between mt-3`,children:(0,F.jsx)(`p`,{className:`card-text text-muted mb-0 w-75`,children:`以線條與光影捕捉真實，展現純粹藝術美感。`})})]})]}),(0,F.jsxs)(`div`,{className:`col-md-6 d-flex flex-column justify-content-center mt-md-0 mt-3`,children:[(0,F.jsx)(`h2`,{className:`fw-bold`,children:`精選畫作 限量展售`}),(0,F.jsx)(`h5`,{className:`font-weight-normal text-muted mt-2`,children:`藝術，讓生活更有溫度。`})]})]}),(0,F.jsx)(`div`,{className:`row mt-5`,children:[{id:2,img:`./paint2.jpg`,text:`厚重色彩層疊筆觸，展現深邃情感世界。`},{id:3,img:`./paint3.jpg`,text:`透明暈染流動色彩，描繪柔和自然意境。`}].map(e=>(0,F.jsx)(`div`,{className:`col-md-6 mt-md-4`,children:(0,F.jsxs)(`div`,{className:`card border-0 mb-4 position-relative position-relative`,children:[(0,F.jsx)(`img`,{src:e.img,className:`card-img-top rounded-0`,loading:`lazy`,alt:`圖片`}),(0,F.jsxs)(`div`,{className:`card-body p-0`,children:[(0,F.jsx)(`h4`,{className:`mb-0 mt-4`,children:e.type}),(0,F.jsx)(`div`,{className:`d-flex justify-content-between mt-3`,children:(0,F.jsx)(`p`,{className:`card-text text-muted mb-0 w-75`,children:e.text})})]})]})},e.id))})]}),(0,F.jsx)(`div`,{className:`bg-light mt-7`,children:(0,F.jsx)(`div`,{className:`container`,children:(0,F.jsx)(`div`,{id:`carouselExampleControls`,className:`carousel slide`,"data-ride":`carousel`,children:(0,F.jsx)(`div`,{className:`carousel-inner`,children:(0,F.jsx)(`div`,{className:`carousel-item active`,children:(0,F.jsx)(`div`,{className:`row justify-content-center py-7`,children:(0,F.jsxs)(`div`,{className:`col-md-8 d-flex`,children:[(0,F.jsx)(`img`,{src:`https://images.unsplash.com/photo-1606228196200-1ed07169c7b1?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,alt:`圖片`,className:`rounded-circle me-5`,style:{width:`160px`,height:`160px`,objectFit:`cover`}}),(0,F.jsxs)(`div`,{className:`d-flex flex-column`,children:[(0,F.jsx)(`p`,{className:`h5`,children:`“從孤獨與浪漫中尋找靈感，以柔和筆觸描繪情感流動。相信每一幅作品都是心靈的映照，透過色彩傳遞溫暖，讓觀者在畫布中找到共鳴與慰藉。”`}),(0,F.jsx)(`p`,{className:`mt-auto text-muted`,children:`周芷柔`})]})]})})})})})})}),(0,F.jsx)(`div`,{className:`container my-7`,children:(0,F.jsx)(`div`,{className:`row`,children:[{id:1,img:`./woman1.jpg`,name:`林雅婷`,job:`藝術愛好者`,text:`這次線上畫展讓我不用出門就能欣賞到許多精彩的作品，購買流程也非常順暢，收到畫作時的質感超乎預期！`},{id:2,img:`./men.jpg`,name:`陳志豪`,job:`室內設計師`,text:`作品包裝得很仔細，完全沒有損傷。能在家裡掛上自己喜歡的原創畫作，真的讓生活空間多了藝術氛圍。`},{id:3,img:`./woman2.jpg`,name:`王美玲`,job:`收藏家`,text:`客服回覆迅速，付款安全，配送也很快。這是我第一次在線上購買藝術品，體驗非常好，之後還會再回購。`}].map(e=>(0,F.jsxs)(`div`,{className:`col-md-4`,children:[(0,F.jsx)(`img`,{src:e.img,loading:`lazy`,alt:`圖片`,style:{width:`160px`,height:`160px`,objectFit:`cover`},className:`rounded-circle`}),(0,F.jsxs)(`h4`,{className:`mt-4`,children:[e.name,` `,(0,F.jsx)(`span`,{className:`h6`,children:e.job})]}),(0,F.jsx)(`p`,{className:`text-muted`,children:e.text})]},e.id))})}),(0,F.jsx)(`div`,{className:`bg-light py-7`,children:(0,F.jsx)(`div`,{className:`container`,children:(0,F.jsx)(`div`,{className:`row justify-content-center`,children:(0,F.jsxs)(`div`,{className:`col-md-4 text-center`,children:[(0,F.jsx)(`h3`,{children:`精選畫作 限量展售`}),(0,F.jsx)(`p`,{className:`text-muted`,children:`藝術，讓生活更有溫度。`}),(0,F.jsx)(jn,{className:`btn btn-dark mt-4 rounded-0`,to:`/products`,children:`前往商品頁`})]})})})})]})}function uc({pagination:e,getProducts:t}){return(0,F.jsx)(`nav`,{"aria-label":`Page navigation example`,children:(0,F.jsxs)(`ul`,{className:`pagination`,children:[(0,F.jsx)(`li`,{className:`page-item ${e.has_pre?``:`disabled`}`,children:(0,F.jsx)(`a`,{href:`/`,"aria-label":`Previous`,className:`page-link`,onClick:n=>{n.preventDefault(),t(e.current_page-1)},children:(0,F.jsx)(`span`,{"aria-hidden":`true`,children:`«`})})}),[...Array(e.total_pages)].map((n,r)=>(0,F.jsx)(`li`,{className:`page-item ${r+1===e.current_page?`active`:``}`,children:(0,F.jsx)(`a`,{className:`page-link`,href:`/`,onClick:e=>{e.preventDefault(),t(r+1)},children:r+1})},`${r}_page`)),(0,F.jsx)(`li`,{className:`page-item ${e.has_next?``:`disabled`}`,children:(0,F.jsx)(`a`,{href:`/`,"aria-label":`Next`,className:`page-link`,onClick:n=>{n.preventDefault(),t(e.current_page+1)},children:(0,F.jsx)(`span`,{"aria-hidden":`true`,children:`»`})})})]})})}function dc(){let[e,t]=(0,v.useState)([]),[n,r]=(0,v.useState)({}),[i,a]=(0,v.useState)(!1),o=async(e=1)=>{a(!0);try{let n=await ac.get(`/products?page=${e}`);t(n.data.products),r(n.data.pagination)}finally{a(!1)}};return(0,v.useEffect)(()=>{o()},[]),(0,F.jsx)(F.Fragment,{children:(0,F.jsxs)(`div`,{className:`container mt-md-5 mt-3 mb-7`,children:[(0,F.jsx)(Fr,{isLoading:i}),(0,F.jsx)(`div`,{className:`row`,children:e.map(e=>(0,F.jsx)(`div`,{className:`col-md-3`,children:(0,F.jsxs)(`div`,{className:`card border-0 mb-4 position-relative position-relative`,children:[e.imageUrl===``?(0,F.jsx)(`div`,{style:{backgroundColor:`gray`,height:`250px`}}):(0,F.jsx)(`img`,{src:e.imageUrl,style:{height:`250px`},className:`card-img-top rounded-0 obj-cover`,alt:`商品圖片`}),(0,F.jsxs)(`div`,{className:`card-body p-0`,children:[(0,F.jsx)(`h4`,{className:`mb-0 mt-3 `,children:(0,F.jsxs)(jn,{to:`/products/${e.id}`,className:`text-warning`,children:[e.title,` `,`(${e.category})`]})}),(0,F.jsxs)(`p`,{className:`text-muted mt-3`,children:[`NT$ `,e.price]})]})]})},e.id))}),(0,F.jsx)(uc,{pagination:n,getProducts:o})]})})}function fc(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var pc=typeof Symbol==`function`&&Symbol.observable||`@@observable`,mc=()=>Math.random().toString(36).substring(7).split(``).join(`.`),hc={INIT:`@@redux/INIT${mc()}`,REPLACE:`@@redux/REPLACE${mc()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${mc()}`};function gc(e){if(typeof e!=`object`||!e)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function _c(e,t,n){if(typeof e!=`function`)throw Error(fc(2));if(typeof t==`function`&&typeof n==`function`||typeof n==`function`&&typeof arguments[3]==`function`)throw Error(fc(0));if(typeof t==`function`&&n===void 0&&(n=t,t=void 0),n!==void 0){if(typeof n!=`function`)throw Error(fc(1));return n(_c)(e,t)}let r=e,i=t,a=new Map,o=a,s=0,c=!1;function l(){o===a&&(o=new Map,a.forEach((e,t)=>{o.set(t,e)}))}function u(){if(c)throw Error(fc(3));return i}function d(e){if(typeof e!=`function`)throw Error(fc(4));if(c)throw Error(fc(5));let t=!0;l();let n=s++;return o.set(n,e),function(){if(t){if(c)throw Error(fc(6));t=!1,l(),o.delete(n),a=null}}}function f(e){if(!gc(e))throw Error(fc(7));if(e.type===void 0)throw Error(fc(8));if(typeof e.type!=`string`)throw Error(fc(17));if(c)throw Error(fc(9));try{c=!0,i=r(i,e)}finally{c=!1}return(a=o).forEach(e=>{e()}),e}function p(e){if(typeof e!=`function`)throw Error(fc(10));r=e,f({type:hc.REPLACE})}function m(){let e=d;return{subscribe(t){if(typeof t!=`object`||!t)throw Error(fc(11));function n(){let e=t;e.next&&e.next(u())}return n(),{unsubscribe:e(n)}},[pc](){return this}}}return f({type:hc.INIT}),{dispatch:f,subscribe:d,getState:u,replaceReducer:p,[pc]:m}}function vc(e){Object.keys(e).forEach(t=>{let n=e[t];if(n(void 0,{type:hc.INIT})===void 0)throw Error(fc(12));if(n(void 0,{type:hc.PROBE_UNKNOWN_ACTION()})===void 0)throw Error(fc(13))})}function yc(e){let t=Object.keys(e),n={};for(let r=0;r<t.length;r++){let i=t[r];typeof e[i]==`function`&&(n[i]=e[i])}let r=Object.keys(n),i;try{vc(n)}catch(e){i=e}return function(e={},t){if(i)throw i;let a=!1,o={};for(let i=0;i<r.length;i++){let s=r[i],c=n[s],l=e[s],u=c(l,t);if(u===void 0)throw t&&t.type,Error(fc(14));o[s]=u,a||=u!==l}return a||=r.length!==Object.keys(e).length,a?o:e}}function bc(...e){return e.length===0?e=>e:e.length===1?e[0]:e.reduce((e,t)=>(...n)=>e(t(...n)))}function xc(...e){return t=>(n,r)=>{let i=t(n,r),a=()=>{throw Error(fc(15))},o={getState:i.getState,dispatch:(e,...t)=>a(e,...t)};return a=bc(...e.map(e=>e(o)))(i.dispatch),{...i,dispatch:a}}}function Sc(e){return gc(e)&&`type`in e&&typeof e.type==`string`}var Cc=Symbol.for(`immer-nothing`),wc=Symbol.for(`immer-draftable`),Tc=Symbol.for(`immer-state`);function Ec(e,...t){throw Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var Dc=Object,Oc=Dc.getPrototypeOf,kc=`constructor`,Ac=`prototype`,jc=`configurable`,Mc=`enumerable`,Nc=`writable`,Pc=`value`,Fc=e=>!!e&&!!e[Tc];function Ic(e){return e?zc(e)||Gc(e)||!!e[wc]||!!e[kc]?.[wc]||Kc(e)||qc(e):!1}var Lc=Dc[Ac][kc].toString(),Rc=new WeakMap;function zc(e){if(!e||!Jc(e))return!1;let t=Oc(e);if(t===null||t===Dc[Ac])return!0;let n=Dc.hasOwnProperty.call(t,kc)&&t[kc];if(n===Object)return!0;if(!Yc(n))return!1;let r=Rc.get(n);return r===void 0&&(r=Function.toString.call(n),Rc.set(n,r)),r===Lc}function Bc(e,t,n=!0){V(e)===0?(n?Reflect.ownKeys(e):Dc.keys(e)).forEach(n=>{t(n,e[n],e)}):e.forEach((n,r)=>t(r,n,e))}function V(e){let t=e[Tc];return t?t.type_:Gc(e)?1:Kc(e)?2:qc(e)?3:0}var Vc=(e,t,n=V(e))=>n===2?e.has(t):Dc[Ac].hasOwnProperty.call(e,t),Hc=(e,t,n=V(e))=>n===2?e.get(t):e[t],Uc=(e,t,n,r=V(e))=>{r===2?e.set(t,n):r===3?e.add(n):e[t]=n};function Wc(e,t){return e===t?e!==0||1/e==1/t:e!==e&&t!==t}var Gc=Array.isArray,Kc=e=>e instanceof Map,qc=e=>e instanceof Set,Jc=e=>typeof e==`object`,Yc=e=>typeof e==`function`,Xc=e=>typeof e==`boolean`;function Zc(e){let t=+e;return Number.isInteger(t)&&String(t)===e}var Qc=e=>e.copy_||e.base_,$c=e=>e.modified_?e.copy_:e.base_;function el(e,t){if(Kc(e))return new Map(e);if(qc(e))return new Set(e);if(Gc(e))return Array[Ac].slice.call(e);let n=zc(e);if(t===!0||t===`class_only`&&!n){let t=Dc.getOwnPropertyDescriptors(e);delete t[Tc];let n=Reflect.ownKeys(t);for(let r=0;r<n.length;r++){let i=n[r],a=t[i];a[Nc]===!1&&(a[Nc]=!0,a[jc]=!0),(a.get||a.set)&&(t[i]={[jc]:!0,[Nc]:!0,[Mc]:a[Mc],[Pc]:e[i]})}return Dc.create(Oc(e),t)}{let t=Oc(e);if(t!==null&&n)return{...e};let r=Dc.create(t);return Dc.assign(r,e)}}function tl(e,t=!1){return il(e)||Fc(e)||!Ic(e)?e:(V(e)>1&&Dc.defineProperties(e,{set:rl,add:rl,clear:rl,delete:rl}),Dc.freeze(e),t&&Bc(e,(e,t)=>{tl(t,!0)},!1),e)}function nl(){Ec(2)}var rl={[Pc]:nl};function il(e){return e===null||!Jc(e)||Dc.isFrozen(e)}var al=`MapSet`,ol=`Patches`,sl=`ArrayMethods`,cl={};function ll(e){let t=cl[e];return t||Ec(0,e),t}var ul=e=>!!cl[e],H,dl=()=>H,fl=(e,t)=>({drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0,handledSet_:new Set,processedForPatches_:new Set,mapSetPlugin_:ul(al)?ll(al):void 0,arrayMethodsPlugin_:ul(sl)?ll(sl):void 0});function pl(e,t){t&&(e.patchPlugin_=ll(ol),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function ml(e){hl(e),e.drafts_.forEach(_l),e.drafts_=null}function hl(e){e===H&&(H=e.parent_)}var gl=e=>H=fl(H,e);function _l(e){let t=e[Tc];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function vl(e,t){t.unfinalizedDrafts_=t.drafts_.length;let n=t.drafts_[0];if(e!==void 0&&e!==n){n[Tc].modified_&&(ml(t),Ec(4)),Ic(e)&&(e=yl(t,e));let{patchPlugin_:r}=t;r&&r.generateReplacementPatches_(n[Tc].base_,e,t)}else e=yl(t,n);return bl(t,e,!0),ml(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e===Cc?void 0:e}function yl(e,t){if(il(t))return t;let n=t[Tc];if(!n)return Ol(t,e.handledSet_,e);if(!Sl(n,e))return t;if(!n.modified_)return n.base_;if(!n.finalized_){let{callbacks_:t}=n;if(t)for(;t.length>0;)t.pop()(e);El(n,e)}return n.copy_}function bl(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&tl(t,n)}function xl(e){e.finalized_=!0,e.scope_.unfinalizedDrafts_--}var Sl=(e,t)=>e.scope_===t,Cl=[];function wl(e,t,n,r){let i=Qc(e),a=e.type_;if(r!==void 0&&Hc(i,r,a)===t){Uc(i,r,n,a);return}if(!e.draftLocations_){let t=e.draftLocations_=new Map;Bc(i,(e,n)=>{if(Fc(n)){let r=t.get(n)||[];r.push(e),t.set(n,r)}})}let o=e.draftLocations_.get(t)??Cl;for(let e of o)Uc(i,e,n,a)}function Tl(e,t,n){e.callbacks_.push(function(r){let i=t;if(!i||!Sl(i,r))return;r.mapSetPlugin_?.fixSetContents(i);let a=$c(i);wl(e,i.draft_??i,a,n),El(i,r)})}function El(e,t){if(e.modified_&&!e.finalized_&&(e.type_===3||e.type_===1&&e.allIndicesReassigned_||(e.assigned_?.size??0)>0)){let{patchPlugin_:n}=t;if(n){let r=n.getPath(e);r&&n.generatePatches_(e,r,t)}xl(e)}}function Dl(e,t,n){let{scope_:r}=e;if(Fc(n)){let i=n[Tc];Sl(i,r)&&i.callbacks_.push(function(){Ll(e),wl(e,n,$c(i),t)})}else Ic(n)&&e.callbacks_.push(function(){let i=Qc(e);e.type_===3?i.has(n)&&Ol(n,r.handledSet_,r):Hc(i,t,e.type_)===n&&r.drafts_.length>1&&(e.assigned_.get(t)??!1)===!0&&e.copy_&&Ol(Hc(e.copy_,t,e.type_),r.handledSet_,r)})}function Ol(e,t,n){return!n.immer_.autoFreeze_&&n.unfinalizedDrafts_<1||Fc(e)||t.has(e)||!Ic(e)||il(e)?e:(t.add(e),Bc(e,(r,i)=>{if(Fc(i)){let t=i[Tc];Sl(t,n)&&(Uc(e,r,$c(t),e.type_),xl(t))}else Ic(i)&&Ol(i,t,n)}),e)}function kl(e,t){let n=Gc(e),r={type_:+!!n,scope_:t?t.scope_:dl(),modified_:!1,finalized_:!1,assigned_:void 0,parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1,callbacks_:void 0},i=r,a=Al;n&&(i=[r],a=jl);let{revoke:o,proxy:s}=Proxy.revocable(i,a);return r.draft_=s,r.revoke_=o,[s,r]}var Al={get(e,t){if(t===Tc)return e;let n=e.scope_.arrayMethodsPlugin_,r=e.type_===1&&typeof t==`string`;if(r&&n?.isArrayOperationMethod(t))return n.createMethodInterceptor(e,t);let i=Qc(e);if(!Vc(i,t,e.type_))return Pl(e,i,t);let a=i[t];if(e.finalized_||!Ic(a)||r&&e.operationMethod&&n?.isMutatingArrayMethod(e.operationMethod)&&Zc(t))return a;if(a===Ml(e.base_,t)||Nl(e,t,a)){Ll(e);let n=e.type_===1?+t:t,r=zl(e.scope_,a,e,n);return e.copy_[n]=r}return a},has(e,t){return t in Qc(e)},ownKeys(e){return Reflect.ownKeys(Qc(e))},set(e,t,n){let r=Fl(Qc(e),t);if(r?.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){let r=Ml(Qc(e),t),i=r?.[Tc];if(i&&i.base_===n)return e.copy_[t]=n,e.assigned_.set(t,!1),!0;if(Wc(n,r)&&(n!==void 0||Vc(e.base_,t,e.type_)))return!0;Ll(e),Il(e)}return e.copy_[t]===n&&(n!==void 0||Vc(e.copy_,t,e.type_))||Number.isNaN(n)&&Number.isNaN(e.copy_[t])?!0:(e.copy_[t]=n,e.assigned_.set(t,!0),Dl(e,t,n),!0)},deleteProperty(e,t){return Ll(e),Ml(e.base_,t)!==void 0||t in e.base_?(e.assigned_.set(t,!1),Il(e)):e.assigned_.delete(t),e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){let n=Qc(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{[Nc]:!0,[jc]:e.type_!==1||t!==`length`,[Mc]:r[Mc],[Pc]:n[t]}},defineProperty(){Ec(11)},getPrototypeOf(e){return Oc(e.base_)},setPrototypeOf(){Ec(12)}},jl={};for(let e in Al){let t=Al[e];jl[e]=function(){let e=arguments;return e[0]=e[0][0],t.apply(this,e)}}jl.deleteProperty=function(e,t){return jl.set.call(this,e,t,void 0)},jl.set=function(e,t,n){return Al.set.call(this,e[0],t,n,e[0])};function Ml(e,t){let n=e[Tc];return(n?Qc(n):e)[t]}function Nl(e,t,n){return e.type_!==1||!e.allIndicesReassigned_||e.assigned_?.get(t)||!Ic(n)||n[Tc]?!1:e.baseRefs_.has(n)}function Pl(e,t,n){let r=Fl(t,n);return r?Pc in r?r[Pc]:r.get?.call(e.draft_):void 0}function Fl(e,t){if(!(t in e))return;let n=Oc(e);for(;n;){let e=Object.getOwnPropertyDescriptor(n,t);if(e)return e;n=Oc(n)}}function Il(e){e.modified_||(e.modified_=!0,e.parent_&&Il(e.parent_))}function Ll(e){e.copy_||=(e.assigned_=new Map,el(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var Rl=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!1,this.produce=(e,t,n)=>{if(Yc(e)&&!Yc(t)){let n=t;t=e;let r=this;return function(e=n,...i){return r.produce(e,e=>t.call(this,e,...i))}}Yc(t)||Ec(6),n!==void 0&&!Yc(n)&&Ec(7);let r;if(Ic(e)){let i=gl(this),a=zl(i,e,void 0),o=!0;try{r=t(a),o=!1}finally{o?ml(i):hl(i)}return pl(i,n),vl(r,i)}if(!e||!Jc(e)){if(r=t(e),r===void 0&&(r=e),r===Cc&&(r=void 0),this.autoFreeze_&&tl(r,!0),n){let t=[],i=[];ll(ol).generateReplacementPatches_(e,r,{patches_:t,inversePatches_:i}),n(t,i)}return r}Ec(1,e)},this.produceWithPatches=(e,t)=>{if(Yc(e))return(t,...n)=>this.produceWithPatches(t,t=>e(t,...n));let n,r;return[this.produce(e,t,(e,t)=>{n=e,r=t}),n,r]},Xc(e?.autoFreeze)&&this.setAutoFreeze(e.autoFreeze),Xc(e?.useStrictShallowCopy)&&this.setUseStrictShallowCopy(e.useStrictShallowCopy),Xc(e?.useStrictIteration)&&this.setUseStrictIteration(e.useStrictIteration)}createDraft(e){Ic(e)||Ec(8),Fc(e)&&(e=Bl(e));let t=gl(this),n=zl(t,e,void 0);return n[Tc].isManual_=!0,hl(t),n}finishDraft(e,t){let n=e&&e[Tc];(!n||!n.isManual_)&&Ec(9);let{scope_:r}=n;return pl(r,t),vl(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}setUseStrictIteration(e){this.useStrictIteration_=e}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){let r=t[n];if(r.path.length===0&&r.op===`replace`){e=r.value;break}}n>-1&&(t=t.slice(n+1));let r=ll(ol).applyPatches_;return Fc(e)?r(e,t):this.produce(e,e=>r(e,t))}};function zl(e,t,n,r){let[i,a]=Kc(t)?ll(al).proxyMap_(t,n):qc(t)?ll(al).proxySet_(t,n):kl(t,n);return(n?.scope_??dl()).drafts_.push(i),a.callbacks_=n?.callbacks_??[],a.key_=r,n&&r!==void 0?Tl(n,a,r):a.callbacks_.push(function(e){e.mapSetPlugin_?.fixSetContents(a);let{patchPlugin_:t}=e;a.modified_&&t&&t.generatePatches_(a,[],e)}),i}function Bl(e){return Fc(e)||Ec(10,e),Vl(e)}function Vl(e){if(!Ic(e)||il(e))return e;let t=e[Tc],n,r=!0;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=el(e,t.scope_.immer_.useStrictShallowCopy_),r=t.scope_.immer_.shouldUseStrictIteration()}else n=el(e,!0);return Bc(n,(e,t)=>{Uc(n,e,Vl(t))},r),t&&(t.finalized_=!1),n}globalThis.Iterator?.from;var U=new Rl().produce;function W(e){return({dispatch:t,getState:n})=>r=>i=>typeof i==`function`?i(t,n,e):r(i)}var G=W(),K=W,q=typeof window<`u`&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]==`object`?bc:bc.apply(null,arguments)};typeof window<`u`&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__;var Hl=e=>e&&typeof e.match==`function`;function Ul(e,t){function n(...n){if(t){let r=t(...n);if(!r)throw Error(Pu(0));return{type:e,payload:r.payload,...`meta`in r&&{meta:r.meta},...`error`in r&&{error:r.error}}}return{type:e,payload:n[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=t=>Sc(t)&&t.type===e,n}var Wl=class e extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,e.prototype)}static get[Symbol.species](){return e}concat(...e){return super.concat.apply(this,e)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new e(...t[0].concat(this)):new e(...t.concat(this))}};function Gl(e){return Ic(e)?U(e,()=>{}):e}function Kl(e,t,n){return e.has(t)?e.get(t):e.set(t,n(t)).get(t)}function ql(e){return typeof e==`boolean`}var Jl=()=>function(e){let{thunk:t=!0,immutableCheck:n=!0,serializableCheck:r=!0,actionCreatorCheck:i=!0}=e??{},a=new Wl;return t&&(ql(t)?a.push(G):a.push(K(t.extraArgument))),a},Yl=`RTK_autoBatch`,Xl=e=>t=>{setTimeout(t,e)},Zl=(e,t)=>n=>{let r=!1,i=()=>{r||(r=!0,cancelAnimationFrame(a),clearTimeout(o),n())},a=e(i),o=setTimeout(i,t)},Ql=(e={type:`raf`})=>t=>(...n)=>{let r=t(...n),i=!0,a=!1,o=!1,s=new Set,c=e.type===`tick`?queueMicrotask:e.type===`raf`?typeof window<`u`&&window.requestAnimationFrame?Zl(window.requestAnimationFrame,100):Xl(10):e.type===`callback`?e.queueNotification:Xl(e.timeout),l=()=>{o=!1,a&&(a=!1,s.forEach(e=>e()))};return Object.assign({},r,{subscribe(e){let t=r.subscribe(()=>i&&e());return s.add(e),()=>{t(),s.delete(e)}},dispatch(e){try{return i=!e?.meta?.[Yl],a=!i,a&&(o||(o=!0,c(l))),r.dispatch(e)}finally{i=!0}}})},$l=e=>function(t){let{autoBatch:n=!0}=t??{},r=new Wl(e);return n&&r.push(Ql(typeof n==`object`?n:void 0)),r};function eu(e){let t=Jl(),{reducer:n=void 0,middleware:r,devTools:i=!0,duplicateMiddlewareCheck:a=!0,preloadedState:o=void 0,enhancers:s=void 0}=e||{},c;if(typeof n==`function`)c=n;else if(gc(n))c=yc(n);else throw Error(Pu(1));let l;l=typeof r==`function`?r(t):t();let u=bc;i&&(u=q({trace:!1,...typeof i==`object`&&i}));let d=$l(xc(...l)),f=typeof s==`function`?s(d):d(),p=u(...f);return _c(c,o,p)}function tu(e){let t={},n=[],r,i={addCase(e,n){let r=typeof e==`string`?e:e.type;if(!r)throw Error(Pu(28));if(r in t)throw Error(Pu(29));return t[r]=n,i},addAsyncThunk(e,r){return r.pending&&(t[e.pending.type]=r.pending),r.rejected&&(t[e.rejected.type]=r.rejected),r.fulfilled&&(t[e.fulfilled.type]=r.fulfilled),r.settled&&n.push({matcher:e.settled,reducer:r.settled}),i},addMatcher(e,t){return n.push({matcher:e,reducer:t}),i},addDefaultCase(e){return r=e,i}};return e(i),[t,n,r]}function nu(e){return typeof e==`function`}function ru(e,t){let[n,r,i]=tu(t),a;if(nu(e))a=()=>Gl(e());else{let t=Gl(e);a=()=>t}function o(e=a(),t){let o=[n[t.type],...r.filter(({matcher:e})=>e(t)).map(({reducer:e})=>e)];return o.filter(e=>!!e).length===0&&(o=[i]),o.reduce((e,n)=>{if(n){if(Fc(e)){let r=n(e,t);return r===void 0?e:r}if(Ic(e))return U(e,e=>n(e,t));{let r=n(e,t);if(r===void 0){if(e===null)return e;throw Error(`A case reducer on a non-draftable value must not return undefined`)}return r}}return e},e)}return o.getInitialState=a,o}var iu=(e,t)=>Hl(e)?e.match(t):e(t);function au(...e){return t=>e.some(e=>iu(e,t))}var ou=`ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW`,su=(e=21)=>{let t=``,n=e;for(;n--;)t+=ou[Math.random()*64|0];return t},cu=[`name`,`message`,`stack`,`code`],lu=class{constructor(e,t){this.payload=e,this.meta=t}payload;meta;_type},uu=class{constructor(e,t){this.payload=e,this.meta=t}payload;meta;_type},du=e=>{if(typeof e==`object`&&e){let t={};for(let n of cu)typeof e[n]==`string`&&(t[n]=e[n]);return t}return{message:String(e)}},fu=`External signal was aborted`,pu=(()=>{function e(e,t,n){let r=Ul(e+`/fulfilled`,(e,t,n,r)=>({payload:e,meta:{...r||{},arg:n,requestId:t,requestStatus:`fulfilled`}})),i=Ul(e+`/pending`,(e,t,n)=>({payload:void 0,meta:{...n||{},arg:t,requestId:e,requestStatus:`pending`}})),a=Ul(e+`/rejected`,(e,t,r,i,a)=>({payload:i,error:(n&&n.serializeError||du)(e||`Rejected`),meta:{...a||{},arg:r,requestId:t,rejectedWithValue:!!i,requestStatus:`rejected`,aborted:e?.name===`AbortError`,condition:e?.name===`ConditionError`}}));function o(e,{signal:o}={}){return(s,c,l)=>{let u=n?.idGenerator?n.idGenerator(e):su(),d=new AbortController,f,p;function m(e){p=e,d.abort()}o&&(o.aborted?m(fu):o.addEventListener(`abort`,()=>m(fu),{once:!0}));let h=(async function(){let o;try{let a=n?.condition?.(e,{getState:c,extra:l});if(hu(a)&&(a=await a),a===!1||d.signal.aborted)throw{name:`ConditionError`,message:`Aborted due to condition callback returning false.`};let h=new Promise((e,t)=>{f=()=>{t({name:`AbortError`,message:p||`Aborted`})},d.signal.addEventListener(`abort`,f,{once:!0})});s(i(u,e,n?.getPendingMeta?.({requestId:u,arg:e},{getState:c,extra:l}))),o=await Promise.race([h,Promise.resolve(t(e,{dispatch:s,getState:c,extra:l,requestId:u,signal:d.signal,abort:m,rejectWithValue:((e,t)=>new lu(e,t)),fulfillWithValue:((e,t)=>new uu(e,t))})).then(t=>{if(t instanceof lu)throw t;return t instanceof uu?r(t.payload,u,e,t.meta):r(t,u,e)})])}catch(t){o=t instanceof lu?a(null,u,e,t.payload,t.meta):a(t,u,e)}finally{f&&d.signal.removeEventListener(`abort`,f)}return n&&!n.dispatchConditionRejection&&a.match(o)&&o.meta.condition||s(o),o})();return Object.assign(h,{abort:m,requestId:u,arg:e,unwrap(){return h.then(mu)}})}}return Object.assign(o,{pending:i,rejected:a,fulfilled:r,settled:au(a,r),typePrefix:e})}return e.withTypes=()=>e,e})();function mu(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function hu(e){return typeof e==`object`&&!!e&&typeof e.then==`function`}var gu=Symbol.for(`rtk-slice-createasyncthunk`);function _u(e,t){return`${e}/${t}`}function vu({creators:e}={}){let t=e?.asyncThunk?.[gu];return function(e){let{name:n,reducerPath:r=n}=e;if(!n)throw Error(Pu(11));let i=(typeof e.reducers==`function`?e.reducers(xu()):e.reducers)||{},a=Object.keys(i),o={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},s={addCase(e,t){let n=typeof e==`string`?e:e.type;if(!n)throw Error(Pu(12));if(n in o.sliceCaseReducersByType)throw Error(Pu(13));return o.sliceCaseReducersByType[n]=t,s},addMatcher(e,t){return o.sliceMatchers.push({matcher:e,reducer:t}),s},exposeAction(e,t){return o.actionCreators[e]=t,s},exposeCaseReducer(e,t){return o.sliceCaseReducersByName[e]=t,s}};a.forEach(r=>{let a=i[r],o={reducerName:r,type:_u(n,r),createNotation:typeof e.reducers==`function`};Cu(a)?Tu(o,a,s,t):Su(o,a,s)});function c(){let[t={},n=[],r=void 0]=typeof e.extraReducers==`function`?tu(e.extraReducers):[e.extraReducers],i={...t,...o.sliceCaseReducersByType};return ru(e.initialState,e=>{for(let t in i)e.addCase(t,i[t]);for(let t of o.sliceMatchers)e.addMatcher(t.matcher,t.reducer);for(let t of n)e.addMatcher(t.matcher,t.reducer);r&&e.addDefaultCase(r)})}let l=e=>e,u=new Map,d=new WeakMap,f;function p(e,t){return f||=c(),f(e,t)}function m(){return f||=c(),f.getInitialState()}function h(t,n=!1){function r(e){let i=e[t];return i===void 0&&n&&(i=Kl(d,r,m)),i}function i(t=l){return Kl(Kl(u,n,()=>new WeakMap),t,()=>{let r={};for(let[i,a]of Object.entries(e.selectors??{}))r[i]=yu(a,t,()=>Kl(d,t,m),n);return r})}return{reducerPath:t,getSelectors:i,get selectors(){return i(r)},selectSlice:r}}let g={name:n,reducer:p,actions:o.actionCreators,caseReducers:o.sliceCaseReducersByName,getInitialState:m,...h(r),injectInto(e,{reducerPath:t,...n}={}){let i=t??r;return e.inject({reducerPath:i,reducer:p},n),{...g,...h(i,!0)}}};return g}}function yu(e,t,n,r){function i(i,...a){let o=t(i);return o===void 0&&r&&(o=n()),e(o,...a)}return i.unwrapped=e,i}var bu=vu();function xu(){function e(e,t){return{_reducerDefinitionType:`asyncThunk`,payloadCreator:e,...t}}return e.withTypes=()=>e,{reducer(e){return Object.assign({[e.name](...t){return e(...t)}}[e.name],{_reducerDefinitionType:`reducer`})},preparedReducer(e,t){return{_reducerDefinitionType:`reducerWithPrepare`,prepare:e,reducer:t}},asyncThunk:e}}function Su({type:e,reducerName:t,createNotation:n},r,i){let a,o;if(`reducer`in r){if(n&&!wu(r))throw Error(Pu(17));a=r.reducer,o=r.prepare}else a=r;i.addCase(e,a).exposeCaseReducer(t,a).exposeAction(t,o?Ul(e,o):Ul(e))}function Cu(e){return e._reducerDefinitionType===`asyncThunk`}function wu(e){return e._reducerDefinitionType===`reducerWithPrepare`}function Tu({type:e,reducerName:t},n,r,i){if(!i)throw Error(Pu(18));let{payloadCreator:a,fulfilled:o,pending:s,rejected:c,settled:l,options:u}=n,d=i(e,a,u);r.exposeAction(t,d),o&&r.addCase(d.fulfilled,o),s&&r.addCase(d.pending,s),c&&r.addCase(d.rejected,c),l&&r.addMatcher(d.settled,l),r.exposeCaseReducer(t,{fulfilled:o||Eu,pending:s||Eu,rejected:c||Eu,settled:l||Eu})}function Eu(){}var Du=`listener`,Ou=`completed`,ku=`cancelled`;`${ku}`,`${Ou}`,`${Du}${ku}`,`${Du}${Ou}`;var{assign:Au}=Object,ju=`listenerMiddleware`,Mu=Au(Ul(`${ju}/add`),{withTypes:()=>Mu});`${ju}`;var Nu=Au(Ul(`${ju}/remove`),{withTypes:()=>Nu});function Pu(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var Fu=bu({name:`message`,initialState:[],reducers:{createMessage(e,t){t.payload.success?e.push({id:t.payload.id,type:`success`,title:`成功`,text:t.payload.message}):e.push({id:t.payload.id,type:`danger`,title:`失敗`,text:Array.isArray(t.payload?.message)?t.payload?.message.join(`、`):t.payload?.message})},removeMessage(e,t){let n=e.findIndex(e=>e.id===t.payload);n!==-1&&e.splice(n,1)}}}),Iu=pu(`message/createAsyncMessage`,async function(e,{dispatch:t,requestId:n}){t(Fu.actions.createMessage({...e,id:n})),setTimeout(()=>{t(Fu.actions.removeMessage(n))},3e3)}),{createMessage:Lu}=Fu.actions,Ru=Fu.reducer;function zu(){let[e,t]=(0,v.useState)({}),[n,r]=(0,v.useState)(1),[i,a]=(0,v.useState)(!1),{id:o}=bt(),{getCartData:s}=vt(),c=ri(),l=ht();return(0,v.useEffect)(()=>{(async()=>{a(!0);try{let e=await ac.get(`/product/${o}`);t(e.data.product)}catch(e){c(Iu(sc(e)))}finally{a(!1)}})()},[o,c]),(0,F.jsxs)(`div`,{className:`container`,children:[(0,F.jsx)(Fr,{isLoading:i}),(0,F.jsx)(`div`,{style:{minHeight:`400px`,backgroundImage:e.imageUrl?`url(${e.imageUrl})`:``,backgroundPosition:`center center`}}),(0,F.jsxs)(`div`,{className:`row justify-content-between mt-4 mb-5`,children:[(0,F.jsxs)(`div`,{className:`col-md-7`,children:[(0,F.jsx)(`h2`,{className:`mb-0`,children:e.title}),(0,F.jsxs)(`p`,{className:`fw-bold`,children:[`NT$ `,e.price]}),(0,F.jsx)(`p`,{children:e.description}),(0,F.jsx)(`div`,{className:`my-4`,children:e.imageUrl&&(0,F.jsx)(`img`,{src:e.imageUrl,alt:e.title,className:`img-fluid mt-4`})})]}),(0,F.jsxs)(`div`,{className:`col-md-4`,children:[(0,F.jsxs)(`div`,{className:`input-group mb-3 border mt-3`,children:[(0,F.jsx)(`button`,{className:`btn btn-outline-dark rounded-0 border-0 py-3`,type:`button`,"aria-label":`減少數量`,onClick:()=>r(e=>Math.max(1,e-1)),disabled:n===1,children:(0,F.jsx)(`i`,{className:`bi bi-dash`})}),(0,F.jsx)(`input`,{type:`number`,className:`form-control border-0 text-center my-auto shadow-none`,"aria-label":`數量`,readOnly:!0,value:n}),(0,F.jsx)(`button`,{className:`btn btn-outline-dark rounded-0 border-0 py-3`,type:`button`,"aria-label":`增加數量`,onClick:()=>r(e=>e+1),children:(0,F.jsx)(`i`,{className:`bi bi-plus`})})]}),(0,F.jsx)(`button`,{type:`button`,className:`btn btn-dark w-100 rounded-0 py-3`,onClick:async()=>{let t={data:{product_id:e.id,qty:n}};a(!0);try{let e=await ac.post(`/cart`,t);c(Iu(e.data)),s(),l(`/products`)}catch(e){c(Iu(sc(e)))}finally{a(!1)}},disabled:i||!e.id,children:`加入購物車`})]})]}),(0,F.jsx)(jn,{className:`btn btn-dark mb-7 rounded-0`,to:`/products`,children:`前往商品頁`})]})}function Bu(){let e=ri(),{cartData:t,getCartData:n}=vt(),[r,i]=(0,v.useState)(!1),a=async t=>{try{await ac.delete(`/cart/${t}`),n()}catch(t){e(Iu(sc(t)))}},o=async()=>{try{await ac.delete(`/carts`),n()}catch(t){e(Iu(sc(t)))}},s=async(t,r)=>{let a={data:{product_id:t.product_id,qty:r}};i(!0);try{let r=await ac.put(`/cart/${t.id}`,a);n(),e(Iu(r.data))}catch(t){e(Iu(sc(t)))}finally{i(!1)}};return(0,F.jsx)(`div`,{className:`container`,children:(0,F.jsx)(`div`,{className:`row justify-content-center`,children:(0,F.jsxs)(`div`,{className:`col-md-6 bg-white py-5`,style:{minHeight:`calc(100vh - 56px - 76px)`},children:[(0,F.jsxs)(`div`,{className:`d-flex justify-content-between`,children:[(0,F.jsx)(`h2`,{className:`mt-2`,children:`購物車`}),(0,F.jsx)(`button`,{type:`button`,className:`btn`,onClick:o,children:`清空購物車`})]}),t?.carts?.map(e=>(0,F.jsxs)(`div`,{className:`d-flex mt-4 bg-light`,children:[(0,F.jsx)(`img`,{src:e.product.imageUrl,alt:``,className:`obj-cover`,style:{width:`150px`}}),(0,F.jsxs)(`div`,{className:`w-100 p-3 position-relative`,children:[(0,F.jsx)(`button`,{type:`button`,className:`position-absolute btn`,style:{top:`0px`,right:`0px`},onClick:()=>a(e.id),children:(0,F.jsx)(`i`,{className:`bi bi-x-lg`})}),(0,F.jsx)(jn,{className:`mb-0 fw-bold`,to:`/products/${e.product.id}`,children:e.product.title}),(0,F.jsx)(`p`,{className:`mb-1 text-muted`,style:{fontSize:`14px`},children:e.product.content}),(0,F.jsxs)(`div`,{className:`d-flex justify-content-between align-items-center w-100`,children:[(0,F.jsx)(`div`,{className:`input-group w-50 align-items-center`,children:(0,F.jsx)(`select`,{name:``,id:``,className:`form-select`,value:e.qty,disabled:r,onChange:t=>{s(e,t.target.value*1)},children:[...Array(10)].map((e,t)=>(0,F.jsx)(`option`,{value:t+1,children:t+1},t))})}),(0,F.jsxs)(`p`,{className:`mb-0 ms-auto`,children:[`NT$ `,e.final_total]})]})]})]},e.id)),(0,F.jsxs)(`div`,{className:`d-flex justify-content-between mt-4`,children:[(0,F.jsx)(`p`,{className:`mb-0 h4 fw-bold`,children:`總金額`}),(0,F.jsxs)(`p`,{className:`mb-0 h4 fw-bold`,children:[`NT$ `,t.final_total]})]}),(0,F.jsx)(jn,{type:`button`,className:`btn btn-dark w-100 mt-4 rounded-0 py-3`,to:Array.isArray(t.carts)&&t.carts.length>0?`/checkout`:`/products`,children:`確認購物車正確`})]})})})}var Vu=e=>e.type===`checkbox`,Hu=e=>e.type===`file`,Uu=e=>e instanceof Date,Wu=e=>e==null,Gu=e=>typeof e==`object`,Ku=e=>!Wu(e)&&!Array.isArray(e)&&Gu(e)&&!Uu(e),qu=e=>Ku(e)&&e.target?Vu(e.target)?e.target.checked:Hu(e.target)?e.target.files:e.target.value:e,J=(e,t)=>t.split(`.`).some((t,n,r)=>!isNaN(Number(t))&&e.has(r.slice(0,n).join(`.`))),Ju=typeof window<`u`&&window.HTMLElement!==void 0&&typeof document<`u`;function Yu(e){if(typeof e!=`object`||!e)return e;if(e instanceof Date)return new Date(e);let t=typeof FileList<`u`&&e instanceof FileList;if(Ju&&(e instanceof Blob||t))return e;let n=Array.isArray(e);if(!n&&e.constructor!==Object)return e;let r=n?[]:Object.create(Object.getPrototypeOf(e));for(let t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=Yu(e[t]));return r}var Xu={BLUR:`blur`,FOCUS_OUT:`focusout`,CHANGE:`change`,SUBMIT:`submit`,TRIGGER:`trigger`,VALID:`valid`},Zu={onBlur:`onBlur`,onChange:`onChange`,onSubmit:`onSubmit`,onTouched:`onTouched`,all:`all`},Qu={max:`max`,min:`min`,maxLength:`maxLength`,minLength:`minLength`,pattern:`pattern`,required:`required`,validate:`validate`},$u=`root`,ed=[`__proto__`,`constructor`,`prototype`],td=/^\w*$/,nd=e=>td.test(e),Y=e=>e===void 0,rd=/[.[\]'"]/,id=e=>e.split(rd).filter(Boolean),X=(e,t,n)=>{if(!t||!Ku(e))return n;let r=nd(t)?[t]:id(t);if(r.some(e=>ed.includes(e)))return n;let i=r.reduce((e,t)=>Wu(e)?void 0:e[t],e);return Y(i)||i===e?Y(e[t])?n:e[t]:i},ad=e=>typeof e==`boolean`,od=e=>typeof e==`function`,Z=(e,t,n)=>{let r=-1,i=nd(t)?[t]:id(t),a=i.length,o=a-1;for(;++r<a;){let t=i[r],a=n;if(r!==o){let n=e[t];a=Ku(n)||Array.isArray(n)?n:isNaN(+i[r+1])?{}:[]}if(ed.includes(t))return;e[t]=a,e=e[t]}},sd=v.createContext(null);sd.displayName=`HookFormControlContext`;var cd=(e,t,n,r=!0)=>{let i={};for(let a in e)Object.defineProperty(i,a,{get:()=>{let i=a;return t._proxyFormState[i]!==Zu.all&&(t._proxyFormState[i]=!r||Zu.all),n&&(n[i]=!0),e[i]}});return i},ld=Ju?v.useLayoutEffect:v.useEffect,ud=e=>{let t=e.constructor&&e.constructor.prototype;return Ku(t)&&t.hasOwnProperty(`isPrototypeOf`)},dd=e=>Wu(e)||!Gu(e),fd=(e,t)=>t.length===0&&!Array.isArray(e)&&!ud(e);function pd(e,t,n=new WeakMap){if(e===t)return!0;if(dd(e)||dd(t))return Object.is(e,t);if(Uu(e)&&Uu(t))return Object.is(e.getTime(),t.getTime());let r=Object.keys(e),i=Object.keys(t);if(r.length!==i.length)return!1;if(fd(e,r)||fd(t,i))return Object.is(e,t);if(!r.length&&Array.isArray(e)!==Array.isArray(t))return!1;let a=n.get(e);if(a&&a.has(t))return!0;if(a)a.add(t);else{let r=new WeakSet;r.add(t),n.set(e,r)}for(let i of r){let r=e[i];if(!(i in t))return!1;if(i!==`ref`){let e=t[i];if(Uu(r)&&Uu(e)||(Ku(r)||Array.isArray(r))&&(Ku(e)||Array.isArray(e))?!pd(r,e,n):!Object.is(r,e))return!1}}return!0}function md(){let e=v.useRef(!1),t=v.useRef(void 0);return{resyncIfNeeded:v.useCallback((n,r,i)=>{if(n&&e.current){let e=r();pd(t.current,e)||i(e)}e.current=!0},[]),snapshot:v.useCallback((e,n)=>{e&&(t.current=Yu(n()))},[])}}var hd=e=>typeof e==`string`,gd=(e,t,n,r,i)=>hd(e)?(r&&t.watch.add(e),X(n,e,i)):Array.isArray(e)?e.map(e=>(r&&t.watch.add(e),X(n,e))):(r&&(t.watchAll=!0),n),_d=e=>({isOnSubmit:!e||e===Zu.onSubmit,isOnBlur:e===Zu.onBlur,isOnChange:e===Zu.onChange,isOnAll:e===Zu.all,isOnTouch:e===Zu.onTouched}),vd=(e,t,n)=>{if(n)return!1;if(t.watchAll||t.watch.has(e))return!0;for(let n of t.watch)if(e.startsWith(n)&&e.charAt(n.length)===`.`)return!0;return!1},yd=(e,t,n,r)=>{for(let i of n||Object.keys(e)){if(i===`_f`)continue;let a=n?X(e,i):e[i];if(a){let{_f:e}=a;if(e){if(e.refs&&e.refs[0]&&t(e.refs[0],i)&&!r||e.ref&&t(e.ref,e.name)&&!r)return!0;if(yd(a,t))break}else if((Ku(a)||Array.isArray(a))&&yd(a,t))break}}},Q=(e,t,n)=>{let r=X(e,n),i=Array.isArray(r)?r:[];return Z(i,$u,t[n]),Z(e,n,i),e},bd=e=>Ku(e)&&!Object.keys(e).length,xd=e=>{if(!Ju)return!1;let t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},Sd=e=>e.type===`radio`,Cd=e=>e instanceof RegExp,wd=(e,t,n,r,i)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[r]:i||!0}}:{},Td={value:!1,isValid:!1},Ed={value:!0,isValid:!0},Dd=e=>{if(!Array.isArray(e))return Td;if(e.length>1){let t=e.filter(e=>e&&e.checked&&!e.disabled).map(e=>e.value);return{value:t,isValid:!!t.length}}let t=e[0];return!t||!t.checked||t.disabled?Td:!t.attributes||!(`value`in t.attributes)||Y(t.value)||t.value===``?Ed:{value:t.value,isValid:!0}},Od={isValid:!1,value:null},kd=e=>Array.isArray(e)?e.reduce((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e,Od):Od;function Ad(e,t,n=`validate`){if(hd(e)||Array.isArray(e)&&e.every(hd)||ad(e)&&!e)return{type:n,message:hd(e)?e:``,ref:t}}var jd=e=>Ku(e)&&!Cd(e)?e:{value:e,message:``},Md=async(e,t,n,r,i,a)=>{let{ref:o,refs:s,required:c,maxLength:l,minLength:u,min:d,max:f,pattern:p,validate:m,name:h,valueAsNumber:g,mount:_}=e._f,v=X(n,h);if(!_||t.has(h))return{};let y=s?s[0]:o,b=e=>{if(i&&y.reportValidity){let t=ad(e)?``:e||``;s?s.forEach(e=>e.setCustomValidity(t)):y.setCustomValidity(t),y.reportValidity()}},x={},ee=Sd(o),S=Vu(o),C=ee||S,w=(g||Hu(o))&&Y(o.value)&&Y(v)||xd(o)&&o.value===``||v===``||Array.isArray(v)&&!v.length,te=wd.bind(null,h,r,x),ne=(e,t,n,r=Qu.maxLength,i=Qu.minLength)=>{let a=e?t:n;x[h]={type:e?r:i,message:a,ref:o,...te(e?r:i,a)}};if(a?!Array.isArray(v)||!v.length:c&&(!C&&(w||Wu(v))||ad(v)&&!v||S&&!Dd(s).isValid||ee&&!kd(s).isValid)){let{value:e,message:t}=hd(c)?{value:!!c,message:c}:jd(c);if(e&&(x[h]={type:Qu.required,message:t,ref:y,...te(Qu.required,t)},!r))return b(t),x}if(!w&&(!Wu(d)||!Wu(f))){let e,t,n=jd(f),i=jd(d);if(!Wu(v)&&!Uu(v)&&!isNaN(v)){let r=o.valueAsNumber||v&&+v;Wu(n.value)||(e=r>n.value),Wu(i.value)||(t=r<i.value)}else{let r=o.valueAsDate||new Date(v),a=e=>new Date(new Date().toDateString()+` `+e),s=o.type==`time`,c=o.type==`week`;hd(n.value)&&v&&(e=s?a(v)>a(n.value):c?v>n.value:r>new Date(n.value)),hd(i.value)&&v&&(t=s?a(v)<a(i.value):c?v<i.value:r<new Date(i.value))}if((e||t)&&(ne(!!e,n.message,i.message,Qu.max,Qu.min),!r))return b(x[h].message),x}if((l||u)&&!w&&(hd(v)||a&&Array.isArray(v))){let e=jd(l),t=jd(u),n=!Wu(e.value)&&v.length>+e.value,i=!Wu(t.value)&&v.length<+t.value;if((n||i)&&(ne(n,e.message,t.message),!r))return b(x[h].message),x}if(p&&!w&&hd(v)){let{value:e,message:t}=jd(p);if(Cd(e)&&!v.match(e)&&(x[h]={type:Qu.pattern,message:t,ref:o,...te(Qu.pattern,t)},!r))return b(t),x}if(m){if(od(m)){let e=Ad(await m(v,n),y);if(e&&(x[h]={...e,...te(Qu.validate,e.message)},!r))return b(e.message),x}else if(Ku(m)){let e={};for(let t in m){if(!bd(e)&&!r)break;let i=Ad(await m[t](v,n),y,t);i&&(e={...i,...te(t,i.message)},b(i.message),r&&(x[h]=e))}if(!bd(e)&&(x[h]={ref:y,...e},!r))return x}}let T=x[h];return b(!T||T.message),x},$=e=>Array.isArray(e)?e:[e],Nd=e=>Array.isArray(e)?e.filter(Boolean):[];function Pd(e,t){let n=t.length-1,r=0;for(;r<n;){if(Wu(e)){e=void 0;break}e=e[t[r]],r++}return e}function Fd(e){for(let t in e)if(e.hasOwnProperty(t)&&!Y(e[t]))return!1;return!0}function Id(e,t){if(hd(t)&&Object.prototype.hasOwnProperty.call(e,t))return delete e[t],e;let n=Array.isArray(t)?t:nd(t)?[t]:id(t);if(n.some(e=>ed.includes(String(e))))return e;let r=n.length===1?e:Pd(e,n),i=n.length-1,a=n[i];return r&&delete r[a],i!==0&&(Ku(r)&&bd(r)||Array.isArray(r)&&Fd(r))&&Id(e,n.slice(0,-1)),e}var Ld=v.createContext(null);Ld.displayName=`HookFormContext`;var Rd=()=>{let e=[];return{get observers(){return e},next:t=>{for(let n of e)n.next&&n.next(t)},subscribe:t=>(e.push(t),{unsubscribe:()=>{e=e.filter(e=>e!==t)}}),unsubscribe:()=>{e=[]}}};function zd(e,t){let n={};for(let r in e)if(e.hasOwnProperty(r)){let i=e[r],a=t[r];if(i&&Ku(i)&&a){let e=zd(i,a);Ku(e)&&(n[r]=e)}else e[r]&&(n[r]=a)}return n}var Bd=(e,t)=>e!==null&&Gu(e)&&Object.prototype.hasOwnProperty.call(e,t),Vd=(e,t)=>{if(!t)return!1;let n=e;for(let r of nd(t)?[t]:id(t)){if(!Bd(n,r))return Bd(e,t);n=n[r]}return!0},Hd=e=>e.type===`select-multiple`,Ud=e=>Sd(e)||Vu(e),Wd=e=>xd(e)&&e.isConnected;function Gd(e){return Array.isArray(e)||Ku(e)}function Kd(e,t,n=``,r=[]){for(let i in e){let a=n?`${n}.${i}`:i,o=e[i];Gd(o)&&Gd(X(t,a))?Kd(o,t,a,r):r.push(a)}return r}var qd=e=>{for(let t in e)if(od(e[t]))return!0;return!1};function Jd(e){return Array.isArray(e)||Ku(e)&&!qd(e)}function Yd(e){return!!(e&&`_f`in e)}function Xd(e){return Array.isArray(e)?!e.some(e=>!Y(e)):!Object.keys(e).length}function Zd(e,t){Array.isArray(e)?e[t]=void 0:delete e[t]}function Qd(e,t={},n){for(let r in e){let i=e[r],a=n&&n[r];Jd(i)&&(!Array.isArray(i)||!Yd(a))?(t[r]=Array.isArray(i)?[]:{},Qd(i,t[r],a),Xd(t[r])&&Zd(t,r)):Y(i)||(t[r]=!0)}return t}function $d(e,t,n,r){n||=Qd(t,{},r);for(let i in e){let a=e[i],o=r&&r[i];Jd(a)&&(!Array.isArray(a)||!Yd(o))?(Y(t)||dd(n[i])?n[i]=Qd(a,Array.isArray(a)?[]:{},o):$d(a,Wu(t)?{}:t[i],n[i],o),Xd(n[i])&&Zd(n,i)):pd(a,t[i])?Zd(n,i):n[i]=!0}return n}var ef=(e,t)=>{let n=t.split(`.`),r=[],i=n[0];for(let t=1;t<n.length;i+=`.`+n[t++])!isNaN(+n[t])&&e.has(i)&&r.push(`${i}.${n[t]}`);return r},tf=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:r})=>Y(e)?e:t?e===``?NaN:e&&+e:n&&hd(e)?new Date(e):r?r(e):e;function nf(e){let t=e.ref;return Hu(t)?t.files:Sd(t)?kd(e.refs).value:Hd(t)?[...t.selectedOptions].map(({value:e})=>e):Vu(t)?Dd(e.refs).value:tf(t.value,e)}var rf=(e,t,n,r)=>{let i={};for(let n of e){let e=X(t,n);e&&Z(i,n,e._f)}return{criteriaMode:n,names:[...e],fields:i,shouldUseNativeValidation:r}},af=e=>Y(e)?e:Cd(e)?e.source:Ku(e)?Cd(e.value)?e.value.source:e.value:e,of=`AsyncFunction`,sf=e=>{if(!e||!e.validate)return!1;if(od(e.validate))return e.validate.constructor.name===of;if(Ku(e.validate)){for(let t in e.validate)if(e.validate[t].constructor.name===of)return!0}return!1},cf=e=>e.mount&&(e.required||!Y(e.required)&&e.required!==!1||!Y(e.min)||!Y(e.max)||!Y(e.maxLength)||!Y(e.minLength)||e.pattern||e.validate);function lf(e,t,n){let r=X(e,n);if(r||nd(n))return{error:r,name:n};let i=n.split(`.`);for(;i.length;){let r=i.join(`.`),a=X(t,r),o=X(e,r);if(a&&!Array.isArray(a)&&n!==r)return{name:n};if(o&&o.type)return{name:r,error:o};if(o&&o.root&&o.root.type)return{name:`${r}.root`,error:o.root};i.pop()}return{name:n}}var uf=(e,t,n,r)=>{n(e);let i=Object.keys(e).filter(e=>e!==`name`);return!i.length||r&&i.length>=Object.keys(t).length||i.find(e=>t[e]===(!r||Zu.all))},df=(e,t,n)=>!e||!t||e===t||$(e).some(e=>e&&(n?e===t||e.startsWith(t+`.`):e.startsWith(t)||t.startsWith(e))),ff=(e,t,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(t||e):(n?r.isOnBlur:i.isOnBlur)?!e:!(n?r.isOnChange:i.isOnChange)||e,pf=(e,t)=>{let n=X(e,t);!Nd(n).length&&!n?.root&&Id(e,t)},mf={mode:Zu.onSubmit,reValidateMode:Zu.onChange,shouldFocusError:!0},hf=`form`,gf=(e,t)=>{for(let n in e)n in t||delete e[n];Object.assign(e,t)},_f={submitCount:0,isDirty:!1,isReady:!1,isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{}};function vf(e={}){let t={...mf,...e},n={...Yu(_f),isLoading:od(t.defaultValues),errors:t.errors||{},disabled:t.disabled||!1},r={},i=(Ku(t.defaultValues)||Ku(t.values))&&Yu(t.defaultValues||t.values)||{},a=t.shouldUnregister?{}:Yu(i),o={action:!1,actionArrayLengths:new Map,mount:!1,watch:!1,keepIsValid:!1},s={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set,registerName:new Set},c={},l={},u=0,d=_d(t.mode),f=_d(t.reValidateMode),p={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},m={...p},h={...m},g={array:Rd(),state:Rd()},_=0,v=t.criteriaMode===Zu.all,y=(e,t)=>n=>{clearTimeout(l[e]),l[e]=setTimeout(t,n)},b=async e=>{if(!o.keepIsValid&&!t.disabled&&(m.isValid||h.isValid||e)){let e=++_,i;t.resolver?(i=bd((await D()).errors),e===_&&x()):i=await ae({fields:r,onlyCheckValid:!0,eventType:Xu.VALID}),e===_&&i!==n.isValid&&g.state.next({isValid:i})}},x=(e,r)=>{!t.disabled&&(m.isValidating||m.validatingFields||h.isValidating||h.validatingFields)&&((e||s.mount).forEach(e=>{e&&(r?Z(n.validatingFields,e,r):Id(n.validatingFields,e))}),g.state.next({validatingFields:n.validatingFields,isValidating:!bd(n.validatingFields)}))},ee=()=>{n.dirtyFields=$d(i,a,void 0,r)},S=(e,i=[],s,c,l=!0,u=!0)=>{if(c&&s&&!t.disabled){o.action=!0;let t=X(r,e);if(o.actionArrayLengths.has(e)||o.actionArrayLengths.set(e,Array.isArray(t)?t.length:0),u&&Array.isArray(t)){let n=s(t,c.argA,c.argB);l&&Z(r,e,n)}let a=X(n.errors,e);if(u&&Array.isArray(a)){let t=a.root,r=s(a,c.argA,c.argB)||a;t&&(r.root=t),l&&Z(n.errors,e,r),pf(n.errors,e)}let d=X(n.touchedFields,e);if((m.touchedFields||h.touchedFields)&&u&&Array.isArray(d)){let t=s(d,c.argA,c.argB);l&&Z(n.touchedFields,e,t)}(m.dirtyFields||h.dirtyFields)&&ee(),g.state.next({name:e,isDirty:k(e,i),dirtyFields:n.dirtyFields,errors:n.errors,isValid:n.isValid})}else Z(a,e,i)},C=(e,t)=>{Z(n.errors,e,t),n.errors={...n.errors},g.state.next({errors:n.errors})},w=e=>{n.errors=e,g.state.next({errors:n.errors,isValid:!1})},te=e=>{let t=nd(e)?[e]:id(e),n=a,r=i;for(let e=0;e<t.length-1;e++){let i=t[e];if(n=Wu(n)?n:n[i],r=Wu(r)?r:r[i],n===null&&r!==null)return!0}return!1},ne=e=>{if(!o.actionArrayLengths.size)return!1;let t=nd(e)?[e]:id(e),n=a,r=``,i=-1,s=0;for(let e=0;e<t.length;e++){if(Wu(n))return!1;let a=t[e];if(r=r?`${r}.${a}`:a,Array.isArray(n)&&+a>=n.length)return i===-1?!1:e!==i||+a<s;o.actionArrayLengths.has(r)&&(i=e+1,s=o.actionArrayLengths.get(r)),n=n[a]}return!1},T=(t,c,l,u)=>{let d=X(r,t);if(d){if(te(t)||ne(t))return;let r=Y(X(a,t)),f=X(a,t,Y(l)?X(i,t):l);Y(f)||u&&u.defaultChecked||c?Z(a,t,c?f:nf(d._f)):ce(t,f),o.mount&&!o.action&&(b(),r&&n.isDirty&&(m.isDirty||h.isDirty)&&(k()||(n.isDirty=!1,g.state.next({...n}))),e.shouldUnregister&&r&&!Y(X(a,t))&&vd(t,s)&&(o.watch=!0))}},re=(e,o,s,c,l)=>{let u=!1,d=!1,f={name:e};if(!t.disabled||c===!0){if(!s||c){let t=pd(X(i,e),o);(m.isDirty||h.isDirty)&&(d=n.isDirty,n.isDirty=f.isDirty=!t||k(),u=d!==f.isDirty),d=!!X(n.dirtyFields,e),t===n.isDirty?t?Id(n.dirtyFields,e):Z(n.dirtyFields,e,!0):gf(n.dirtyFields,$d(i,a,void 0,r)),f.dirtyFields=n.dirtyFields,u||=(m.dirtyFields||h.dirtyFields)&&d!==!t}if(s){let t=X(n.touchedFields,e);t||(Z(n.touchedFields,e,s),f.touchedFields=n.touchedFields,u||=(m.touchedFields||h.touchedFields)&&t!==s)}u&&l&&g.state.next(f)}return u?f:{}},E=(e,r,i,a)=>{let o=X(n.errors,e),s=(m.isValid||h.isValid)&&ad(r)&&n.isValid!==r;if(t.delayError&&i?(c[e]=y(e,()=>C(e,i)),c[e](t.delayError)):(clearTimeout(l[e]),delete c[e],i?Z(n.errors,e,i):Id(n.errors,e),n.errors={...n.errors}),(i?!pd(o,i):o)||!bd(a)||s){let t={...a,...s&&ad(r)?{isValid:r}:{},errors:n.errors,name:e};g.state.next(t)}},D=async e=>(x(e,!0),await t.resolver(a,t.context,rf(e||s.mount,r,t.criteriaMode,t.shouldUseNativeValidation))),O=async e=>{let{errors:t}=await D(e);if(x(e),e){for(let r of e){let e=X(t,r);e?s.array.has(r)&&Ku(e)&&!Object.keys(e).some(e=>!Number.isNaN(Number(e)))?Q(n.errors,{[r]:e},r):Z(n.errors,r,e):Id(n.errors,r)}n.errors={...n.errors}}else n.errors=t;return t},ie=async({name:t,eventType:r})=>{if(e.validate){let i=await e.validate({formValues:a,formState:n,name:t,eventType:r});if(Ku(i))for(let e in i){let t=i[e];t&&ve(`${hf}.${e}`,{message:hd(t.message)?t.message:``,type:t.type||Qu.validate})}else hd(i)||!i?ve(hf,{message:i||``,type:Qu.validate}):_e(hf);return i}return!0},ae=async({fields:r,onlyCheckValid:i,name:o,eventType:c,context:l={valid:!0,runRootValidation:!1}})=>{if(e.validate&&(l.runRootValidation=!0,!await ie({name:o,eventType:c})&&(l.valid=!1,i)))return l.valid;for(let o in r){let u=r[o];if(u){let{_f:r,...d}=u;if(r){let o=s.array.has(r.name),c=u._f&&sf(u._f),d=m.validatingFields||m.isValidating||h.validatingFields||h.isValidating;c&&d&&x([r.name],!0);let f=await Md(u,s.disabled,a,v,t.shouldUseNativeValidation&&!i,o);if(c&&d&&x([r.name]),f[r.name]&&(l.valid=!1,i)||(!i&&(X(f,r.name)?o?Q(n.errors,f,r.name):Z(n.errors,r.name,f[r.name]):Id(n.errors,r.name)),e.shouldUseNativeValidation&&f[r.name]))break}!bd(d)&&await ae({context:l,onlyCheckValid:i,fields:d,name:o,eventType:c})}}return l.valid},oe=()=>{for(let e of s.unMount){let t=X(r,e);t&&(t._f.refs?t._f.refs.every(e=>!Wd(e)):!Wd(t._f.ref))&&Se(e)}s.unMount=new Set},k=(e,t)=>(e&&t&&Z(a,e,t),!pd(o.mount?a:i,i)),A=(e,t,n)=>gd(e,s,{...o.mount?a:Y(t)||hd(e)?i:t},n,t),se=e=>Nd(X(o.mount?a:i,e,t.shouldUnregister?X(i,e,[]):[])),ce=(e,t,n={},i=!1,o=!1,s=!1)=>{let c=X(r,e),l=t;if(c){let n=c._f;n&&(!n.disabled&&Z(a,e,tf(t,n)),l=xd(n.ref)&&Wu(t)?``:t,Hd(n.ref)?[...n.ref.options].forEach(e=>e.selected=l.includes(e.value)):n.refs?Vu(n.ref)?n.refs.forEach(e=>{(!e.defaultChecked||!e.disabled)&&(e.checked=Array.isArray(l)?!!l.find(t=>t===e.value):l===e.value||!!l)}):n.refs.forEach(e=>e.checked=e.value===l):Hu(n.ref)?n.ref.value=``:(n.ref.value=l,!n.ref.type&&!o&&!s&&g.state.next({name:e,values:i?a:Yu(a)})))}(n.shouldDirty||n.shouldTouch)&&re(e,l,n.shouldTouch,n.shouldDirty,!o),n.shouldValidate&&pe(e,{delayError:n.delayError})},le=(e,t,n,i=!1,o=!1,c=!1)=>{s.array.has(e)&&g.array.next({name:e,values:i?a:Yu(a)});for(let a in t){if(!t.hasOwnProperty(a))return;let l=t[a],u=e+`.`+a,d=X(r,u);(s.array.has(e)||Ku(l)||d&&!d._f)&&!Uu(l)?le(u,l,n,i,o,c):ce(u,l,n,i,o,c)}},ue=(e,t,i,c,l=!1)=>{let u=X(r,e),d=s.array.has(e),f=c?t:Yu(t),p=pd(X(a,e),f);if(p||Z(a,e,f),d)g.array.next({name:e,values:c?a:Yu(a)}),(m.isDirty||m.dirtyFields||h.isDirty||h.dirtyFields)&&i.shouldDirty&&(ee(),l||g.state.next({name:e,dirtyFields:n.dirtyFields,isDirty:k(e,f)}));else{let t=Array.isArray(f)&&!f.length||bd(f),n=!p&&!l;!u||u._f||Wu(f)||t?ce(e,f,i,c,l,n):le(e,f,i,c,l,n)}if(!p&&!l){let t=vd(e,s),r=c?a:Yu(a);if(g.state.next({...t&&n,name:o.mount||t?e:void 0,values:r}),!d)for(let t of ef(s.array,e))g.state.next({name:t,values:r})}},j=(e,t,n={})=>ue(e,t,n,!1),M=(e,t={})=>{let r=od(e)?e(a):e;if(!pd(a,r)){a={...a,...r};for(let e of s.mount)Vd(r,e)&&ue(e,X(r,e),t,!0,!0);g.state.next({...n,name:void 0,type:void 0,...u?{values:a}:{}}),t.shouldValidate&&b()}},de=async i=>{o.mount=!0;let l=i.target,p=l.name,_=!0,y=X(r,p),ee=e=>{_=Number.isNaN(e)||Uu(e)&&isNaN(e.getTime())||pd(e,X(a,p,e))};if(y){let o,S,C=l.type?nf(y._f):qu(i),w=i.type===Xu.BLUR||i.type===Xu.FOCUS_OUT,te=!cf(y._f)&&!e.validate&&!t.resolver&&!X(n.errors,p)&&!y._f.deps,ne=te||ff(w,X(n.touchedFields,p),n.isSubmitted,f,d),T=vd(p,s,w);if(Z(a,p,C),w){if(!l||!l.readOnly){y._f.onBlur&&y._f.onBlur(i);let e=c[p];e&&e(0)}}else y._f.onChange&&y._f.onChange(i);let O=re(p,C,w),oe=!bd(O)||T;if(!w&&g.state.next({name:p,type:i.type,...u?{values:Yu(a)}:{}}),ne)return(!te||!n.isValid)&&(m.isValid||h.isValid)&&(t.mode===`onBlur`?w&&b():w||b()),oe&&g.state.next({name:p,...T?{}:O});if(!t.resolver&&e.validate&&await ie({name:p,eventType:i.type}),!w&&T&&g.state.next({...n}),t.resolver){let{errors:e}=await D([p]);if(x([p]),ee(C),!_){!bd(O)&&g.state.next(O);return}let t=lf(n.errors,r,p),i=lf(e,r,t.name||p);o=i.error,p=i.name,S=bd(e)}else x([p],!0),o=(await Md(y,s.disabled,a,v,t.shouldUseNativeValidation))[p],x([p]),ee(C),_&&(o?S=!1:(m.isValid||h.isValid)&&(S=await ae({fields:r,onlyCheckValid:!0,name:p,eventType:i.type})));_&&(y._f.deps&&(!Array.isArray(y._f.deps)||y._f.deps.length>0)&&pe(y._f.deps),E(p,S,o,O))}},fe=(e,t)=>{if(X(n.errors,t)&&e.focus)return e.focus(),1},pe=async(e,i={})=>{let a,o,u=$(e);if(t.resolver){let t=await O(Y(e)?e:u);a=bd(t),o=e?!u.some(e=>X(t,e)):a}else e?(o=(await Promise.all(u.map(async e=>{let t=X(r,e);return await ae({fields:t&&t._f?{[e]:t}:t,eventType:Xu.TRIGGER})}))).every(Boolean),!(!o&&!n.isValid)&&b()):o=a=await ae({fields:r,name:e,eventType:Xu.TRIGGER});if(i.delayError&&t.delayError&&hd(e)){let r=X(n.errors,e);r?(Id(n.errors,e),c[e]=y(e,()=>C(e,r)),c[e](t.delayError)):(clearTimeout(l[e]),delete c[e])}return g.state.next({...!hd(e)||(m.isValid||h.isValid)&&a!==n.isValid?{}:{name:e},...t.resolver||!e?{isValid:a}:{},errors:n.errors}),i.shouldFocus&&!o&&yd(r,fe,e?u:s.mount),o},me=(e,t)=>{let r={...o.mount?a:i};return t&&(r=zd(t.dirtyFields?n.dirtyFields:n.touchedFields,r)),Y(e)?r:hd(e)?X(r,e):e.map(e=>X(r,e))},he=e=>Y(e)?{...n.errors}:hd(e)?X(n.errors,e):e.map(e=>X(n.errors,e)),ge=(e,t)=>{let r=t||n,i=X(r.errors,e);return{invalid:!!i,isDirty:!!X(r.dirtyFields,e),error:i,isValidating:!!X(n.validatingFields,e),isTouched:!!X(r.touchedFields,e)}},_e=e=>{let t=e?$(e):void 0;t?.forEach(e=>Id(n.errors,e)),t?t.forEach(e=>{g.state.next({name:e,errors:n.errors})}):(n.errors={},g.state.next({errors:n.errors}))},ve=(e,t,i)=>{let a=(X(r,e,{_f:{}})._f||{}).ref,{ref:o,message:s,type:c,...l}=X(n.errors,e)||{};Z(n.errors,e,{...l,...t,ref:a}),g.state.next({name:e,errors:n.errors,isValid:!1}),i&&i.shouldFocus&&a&&a.focus&&a.focus()},ye=(e,t)=>{if(od(e)){u++;let{unsubscribe:n}=g.state.subscribe({next:n=>`values`in n&&e(n.values||A(void 0,t),n)}),r=!1;return{unsubscribe:()=>{r||(r=!0,u--,n())}}}return A(e,t,!0)},be=e=>{let t=!!e.formState?.values;t&&u++;let{unsubscribe:r}=g.state.subscribe({next:t=>{if(df(e.name,t.name,e.exact)&&uf(t,e.formState||m,Me,e.reRenderRoot)){let r={...a};e.callback({values:r,...n,...t,defaultValues:i})}}});if(!t)return r;let o=!1;return()=>{o||(o=!0,u--,r())}},xe=e=>(o.mount=!0,h={...h,...e.formState},be({...e,formState:{...p,...e.formState}})),Se=(e,o={})=>{for(let c of e?$(e):s.mount)s.mount.delete(c),s.array.delete(c),o.keepValue||(Id(r,c),Id(a,c)),!o.keepError&&Id(n.errors,c),!o.keepDirty&&Id(n.dirtyFields,c),!o.keepTouched&&Id(n.touchedFields,c),!o.keepIsValidating&&Id(n.validatingFields,c),!t.shouldUnregister&&!o.keepDefaultValue&&Id(i,c);u&&g.state.next({values:Yu(a)}),g.state.next({...n,...o.keepDirty?{}:{isDirty:k()}}),!o.keepIsValid&&b()},Ce=({disabled:e,name:t})=>{if(ad(e)&&o.mount||e||s.disabled.has(t)){let n=s.disabled.has(t)!==!!e;e?s.disabled.add(t):s.disabled.delete(t),n&&o.mount&&!o.action&&b()}},we=(e,n={})=>{let a=X(r,e),c=ad(n.disabled)||ad(t.disabled),l=!s.registerName.has(e)&&a&&a._f&&!a._f.mount;return Z(r,e,{...a||{},_f:{...a&&a._f?a._f:{ref:{name:e}},name:e,mount:!0,...n}}),s.mount.add(e),a&&!l?Ce({disabled:ad(n.disabled)?n.disabled:t.disabled,name:e}):T(e,!0,n.value),{...c?{disabled:n.disabled||t.disabled}:{},...t.progressive?{required:!!n.required,min:af(n.min),max:af(n.max),minLength:af(n.minLength),maxLength:af(n.maxLength),pattern:af(n.pattern)}:{},name:e,onChange:de,onBlur:de,ref:c=>{if(c){s.registerName.add(e),we(e,n),s.registerName.delete(e),a=X(r,e);let t=Y(c.value)&&c.querySelectorAll&&c.querySelectorAll(`input,select,textarea`)[0]||c,o=Ud(t),l=a._f.refs||[];if(o?l.find(e=>e===t):t===a._f.ref)return;let u={...a._f};o?(u.refs=[...l.filter(Wd),t,...Array.isArray(X(i,e))?[{}]:[]],u.ref={type:t.type,name:e}):(u.ref=t,delete u.refs),Z(r,e,{_f:u}),T(e,!1,void 0,t)}else a=X(r,e,{}),a._f&&(a._f.mount=!1),(t.shouldUnregister||n.shouldUnregister)&&!(J(s.array,e)&&o.action)&&s.unMount.add(e)}}},Te=()=>t.shouldFocusError&&!t.shouldUseNativeValidation&&yd(r,fe,s.mount),Ee=e=>{ad(e)&&(g.state.next({disabled:e}),yd(r,(t,n)=>{let i=X(r,n);i&&(t.disabled=i._f.disabled||e,Array.isArray(i._f.refs)&&i._f.refs.forEach(t=>{t.disabled=i._f.disabled||e}))},0,!1))},De=(e,i)=>async o=>{let c,l;o&&(o.preventDefault&&o.preventDefault(),o.persist&&o.persist());let u=Yu(a);if(g.state.next({isSubmitting:!0}),t.resolver){let{errors:e,values:t}=await D();x(),n.errors=e,u=Yu(t)}else await ae({fields:r,eventType:Xu.SUBMIT});if(s.disabled.size)for(let e of s.disabled)Id(u,e);if(Id(n.errors,$u),bd(n.errors)){g.state.next({errors:{}});try{c=await e(u,o)}catch(e){l=e}}else i&&await i({...n.errors},o),Te(),setTimeout(Te);if(g.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:bd(n.errors)&&!l,submitCount:n.submitCount+1,errors:n.errors}),l)throw l;return c},Oe=(e,t={})=>{X(r,e)&&(Y(t.defaultValue)?j(e,Yu(X(i,e))):(j(e,t.defaultValue),Z(i,e,Yu(t.defaultValue))),t.keepTouched||Id(n.touchedFields,e),t.keepDirty||(Id(n.dirtyFields,e),n.isDirty=t.defaultValue?k(e,Yu(X(i,e))):k()),t.keepError||(Id(n.errors,e),m.isValid&&b()),g.state.next({...n}))},ke=(e,c={})=>{let l=e?Yu(e):i,u=Yu(l),d=bd(e),f=u,p=r;if(c.keepDefaultValues||(i=l),!c.keepValues){if(c.keepDirtyValues){let e=new Set([...s.mount,...Kd($d(i,a,void 0,p),n.dirtyFields)]);for(let t of e){let e=X(n.dirtyFields,t),r=X(a,t),i=X(f,t);e&&!Y(r)?Z(f,t,r):!e&&!Y(i)&&j(t,i)}}else{if(Ju&&Y(e))for(let e of s.mount){let t=X(r,e);if(t&&t._f){let e=Array.isArray(t._f.refs)?t._f.refs[0]:t._f.ref;if(xd(e)){let t=e.closest(`form`);if(t){t.reset();break}}}}if(c.keepFieldsRef)for(let e of s.mount)j(e,X(f,e));else r={}}if(t.shouldUnregister){if(a=c.keepDefaultValues?Yu(i):{},c.keepFieldsRef)for(let e of s.mount)Z(a,e,X(f,e))}else a=Yu(f);g.array.next({values:{...f}}),g.state.next({name:void 0,type:void 0,values:{...f}})}s={mount:c.keepDirtyValues?s.mount:new Set,unMount:new Set,array:new Set,registerName:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:``},o.mount=!m.isValid||!!c.keepIsValid||!!c.keepDirtyValues||!t.shouldUnregister&&!bd(f),o.watch=!!t.shouldUnregister,o.keepIsValid=!!c.keepIsValid,o.action=!1,o.actionArrayLengths.clear(),c.keepErrors||(n.errors={}),g.state.next({submitCount:c.keepSubmitCount?n.submitCount:0,isDirty:d?!1:c.keepDirty?n.isDirty:c.keepValues?k():!!(c.keepDefaultValues&&!pd(e,i)),isSubmitted:c.keepIsSubmitted?n.isSubmitted:!1,dirtyFields:d?{}:c.keepDirtyValues?c.keepDefaultValues&&a?$d(i,a,void 0,p):n.dirtyFields:c.keepDefaultValues&&e?$d(i,e,void 0,p):c.keepDirty?n.dirtyFields:{},touchedFields:c.keepTouched?n.touchedFields:{},errors:c.keepErrors?n.errors:{},isSubmitSuccessful:c.keepIsSubmitSuccessful?n.isSubmitSuccessful:!1,isSubmitting:!1,defaultValues:i})},Ae=(e,n)=>ke(od(e)?e(a):e,{...t.resetOptions,...n}),je=(e,t={})=>{let n=X(r,e),i=n&&n._f;if(i){let e=i.refs?i.refs[0]:i.ref;e.focus&&setTimeout(()=>{e.focus(),t.shouldSelect&&od(e.select)&&e.select()})}},Me=e=>{let{name:t,type:r,values:i,...a}=e;n={...n,...a}};g.state.subscribe({next:Me});let Ne={control:{register:we,unregister:Se,getFieldState:ge,handleSubmit:De,setError:ve,_subscribe:be,_runSchema:D,_updateIsValidating:x,_focusError:Te,_getWatch:A,_getDirty:k,_setValid:b,_setFieldArray:S,_setDisabledField:Ce,_setErrors:w,_getFieldArray:se,_reset:ke,_resetDefaultValues:()=>od(t.defaultValues)&&t.defaultValues().then(e=>{Ae(e,t.resetOptions),g.state.next({isLoading:!1})}),_removeUnmounted:oe,_disableForm:Ee,_subjects:g,_proxyFormState:m,get _fields(){return r},get _formValues(){return a},get _state(){return o},set _state(e){o=e},get _defaultValues(){return i},get _names(){return s},set _names(e){s=e},get _formState(){return n},get _options(){return t},set _options(e){t={...t,...e},d=_d(t.mode),f=_d(t.reValidateMode)}},subscribe:xe,trigger:pe,register:we,handleSubmit:De,watch:ye,setValue:j,setValues:M,getValues:me,getErrors:he,reset:Ae,resetField:Oe,resetDefaultValues:(e,t={})=>{if(i=Yu(e),!t.keepDirty){let e=$d(i,a,void 0,r);n.dirtyFields=e,n.isDirty=!bd(e)}t.keepIsValid||b(),g.state.next({...n,defaultValues:i})},clearErrors:_e,unregister:Se,setError:ve,setFocus:je,getFieldState:ge};return{...Ne,formControl:Ne}}function yf(e={}){let t=v.useRef(void 0),n=v.useRef(void 0),r=v.useRef(e.formControl),[i,a]=v.useState(()=>({...Yu(_f),isLoading:od(e.defaultValues),errors:e.errors||{},disabled:e.disabled||!1,defaultValues:od(e.defaultValues)?void 0:e.defaultValues}));if(!t.current||e.formControl&&r.current!==e.formControl){if(r.current=e.formControl,e.formControl)t.current={...e.formControl,formState:i},e.defaultValues&&!od(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions);else{let{formControl:n,...r}=vf(e);t.current={...r,formState:i}}}let o=t.current.control;o._options=e;let{resyncIfNeeded:s,snapshot:c}=md();return ld(()=>{let e=()=>({...o._formState,defaultValues:o._defaultValues});s(!0,e,a);let t=o._subscribe({formState:o._proxyFormState,callback:()=>a({...o._formState,defaultValues:o._defaultValues}),reRenderRoot:!0});return a(e=>({...e,isReady:!0})),o._formState.isReady=!0,()=>{t(),c(!0,e)}},[o,s,c]),v.useEffect(()=>o._disableForm(e.disabled),[o,e.disabled]),v.useEffect(()=>{e.mode&&(o._options.mode=e.mode),e.reValidateMode&&(o._options.reValidateMode=e.reValidateMode)},[o,e.mode,e.reValidateMode]),v.useEffect(()=>{e.errors&&(o._setErrors(e.errors),o._focusError())},[o,e.errors]),v.useEffect(()=>{e.shouldUnregister&&o._subjects.state.next({values:o._getWatch()})},[o,e.shouldUnregister]),v.useEffect(()=>{if(o._proxyFormState.isDirty){let e=o._getDirty();e!==i.isDirty&&o._subjects.state.next({isDirty:e})}},[o,i.isDirty]),v.useEffect(()=>{e.values&&!pd(e.values,n.current)?(o._reset(e.values,{keepFieldsRef:!0,...o._options.resetOptions}),o._options.resetOptions?.keepIsValid||o._setValid(),n.current=e.values,a(e=>({...e}))):o._resetDefaultValues()},[o,e.values]),v.useEffect(()=>{o._state.mount||(o._setValid(),o._state.mount=!0),o._state.watch&&(o._state.watch=!1,o._subjects.state.next({...o._formState})),o._removeUnmounted()}),t.current.formState=v.useMemo(()=>cd(i,o),[o,i]),t.current}var bf=({id:e,labelText:t,register:n,type:r,errors:i,rules:a})=>(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(`label`,{htmlFor:e,className:`form-label`,children:t}),(0,F.jsx)(`input`,{id:e,type:r,className:`form-control ${i[e]?`is-invalid`:``}`,...n(e,a)}),i[e]&&(0,F.jsx)(`div`,{className:`invalid-feedback`,children:i[e]?.message})]});function xf(){let e=ht(),t=ri(),{cartData:n,getCartData:r}=vt(),{register:i,handleSubmit:a,formState:{errors:o,isSubmitting:s}}=yf({mode:`onTouched`});return(0,F.jsx)(`div`,{className:`bg-light pt-5 pb-7`,children:(0,F.jsx)(`div`,{className:`container`,children:(0,F.jsxs)(`div`,{className:`row justify-content-center flex-md-row flex-column-reverse`,children:[(0,F.jsxs)(`form`,{className:`col-md-6`,onSubmit:a(async n=>{let i={data:{user:{name:n.name,email:n.email,tel:n.tel,address:n.address},message:``}};try{let t=await ac.post(`/order`,i);r(),e(`/success/${t.data.orderId}`)}catch(e){t(Iu(sc(e)))}}),children:[(0,F.jsxs)(`div`,{className:`bg-white p-4`,children:[(0,F.jsx)(`h4`,{className:`fw-bold`,children:`外送資料`}),(0,F.jsx)(`div`,{className:`mb-2`,children:(0,F.jsx)(bf,{id:`email`,type:`email`,errors:o,labelText:`使用者信箱`,register:i,rules:{required:`必填`,pattern:{value:/^\S+@\S+\.\S+$/,message:`Email 格式不正確`}}})}),(0,F.jsx)(`div`,{className:`mb-2`,children:(0,F.jsx)(bf,{id:`name`,type:`text`,errors:o,labelText:`使用者名稱`,register:i,rules:{required:`必填`,maxLength:{value:10,message:`使用者名稱長度不超過 10`}}})}),(0,F.jsx)(`div`,{className:`mb-2`,children:(0,F.jsx)(bf,{id:`tel`,type:`tel`,errors:o,register:i,labelText:`連絡電話`,rules:{required:`必填`,maxLength:{value:12,message:`連絡電話長度不超過 12`},pattern:{value:/^[0-9]+$/,message:`連絡電話只能輸入數字`}}})}),(0,F.jsx)(`div`,{className:`mb-2`,children:(0,F.jsx)(bf,{id:`address`,type:`address`,errors:o,register:i,labelText:`地址`,rules:{required:`必填`,maxLength:{value:30,message:`地址長度不超過 30`}}})})]}),(0,F.jsxs)(`div`,{className:`d-flex flex-column-reverse flex-md-row mt-4 justify-content-between align-items-md-center align-items-end w-100`,children:[(0,F.jsxs)(jn,{className:`text-dark mt-md-0 mt-3`,to:`/products`,children:[(0,F.jsx)(`i`,{className:`bi bi-chevron-left me-2`}),` 繼續選購`]}),(0,F.jsx)(`button`,{type:`submit`,className:`btn btn-dark py-3 px-7 rounded-0`,disabled:s||!n?.carts?.length,children:s?`送出中...`:`送出表單`})]})]}),(0,F.jsx)(`div`,{className:`col-md-4`,children:(0,F.jsxs)(`div`,{className:`border p-4 mb-4`,children:[(0,F.jsx)(`h4`,{className:`mb-4`,children:`選購商品`}),n?.carts?.map(e=>(0,F.jsxs)(`div`,{className:`d-flex`,children:[(0,F.jsx)(`img`,{src:e.product.imageUrl,alt:``,className:`me-2`,style:{width:`48px`,height:`48px`,objectFit:`cover`}}),(0,F.jsxs)(`div`,{className:`w-100`,children:[(0,F.jsxs)(`div`,{className:`d-flex justify-content-between fw-bold`,children:[(0,F.jsx)(`p`,{className:`mb-0`,children:e.product.title}),(0,F.jsxs)(`p`,{className:`mb-0`,children:[`x`,e.qty]})]}),(0,F.jsxs)(`div`,{className:`d-flex justify-content-between`,children:[(0,F.jsx)(`p`,{className:`text-muted mb-0`,children:(0,F.jsxs)(`small`,{children:[`NT$ `,e.product.price]})}),(0,F.jsxs)(`p`,{className:`mb-0`,children:[`NT$ `,e.final_total]})]})]})]},e.id)),(0,F.jsxs)(`div`,{className:`d-flex justify-content-between mt-4`,children:[(0,F.jsx)(`p`,{className:`mb-0 h4 fw-bold`,children:`Total`}),(0,F.jsxs)(`p`,{className:`mb-0 h4 fw-bold`,children:[`NT$ `,n.final_total]})]})]})})]})})})}function Sf(){let{orderId:e}=bt(),[t,n]=(0,v.useState)({}),[r,i]=(0,v.useState)(!1);return(0,v.useEffect)(()=>{(async()=>{i(!0);try{let t=await ac.get(`/order/${e}`);n(t.data.order)}catch{n({})}finally{i(!1)}})()},[e]),(0,F.jsxs)(`div`,{className:`container`,children:[(0,F.jsx)(Fr,{isLoading:r}),(0,F.jsx)(`div`,{style:{minHeight:`400px`,backgroundImage:`URL("./success_photo.jpg")`,backgroundPosition:`center center`}}),(0,F.jsx)(`div`,{className:`mt-5 mb-7`,children:(0,F.jsxs)(`div`,{className:`row`,children:[(0,F.jsxs)(`div`,{className:`col-md-6`,children:[(0,F.jsx)(`h2`,{children:`商品選購成功`}),(0,F.jsx)(`p`,{className:`text-muted`,children:`親愛的顧客，感謝您在本平台選購。我們非常感激您對我們的信任和支持，讓我們有機會為您提供優質的服務。`}),(0,F.jsx)(`p`,{className:`text-muted`,children:`感謝您選擇本平台，祝您事事順心，生活愉快！`}),(0,F.jsx)(jn,{to:`/`,className:`btn btn-outline-dark me-2 rounded-0 mb-4`,children:`回到首頁`})]}),(0,F.jsx)(`div`,{className:`col-md-6`,children:(0,F.jsxs)(`div`,{className:`card rounded-0 py-4`,children:[(0,F.jsx)(`div`,{className:`card-header border-bottom-0 bg-white px-4 py-0`,children:(0,F.jsx)(`h2`,{children:`選購商品清單`})}),(0,F.jsx)(`div`,{className:`card-body px-4 py-0`,children:(0,F.jsxs)(`ul`,{className:`list-group list-group-flush`,children:[Object.values(t?.products||{}).map(e=>(0,F.jsx)(`li`,{className:`list-group-item px-0`,children:(0,F.jsxs)(`div`,{className:`d-flex mt-2`,children:[(0,F.jsx)(`img`,{src:e.product.imageUrl,alt:``,className:`me-2`,style:{width:`60px`,height:`60px`}}),(0,F.jsxs)(`div`,{className:`w-100 d-flex flex-column`,children:[(0,F.jsxs)(`div`,{className:`d-flex justify-content-between fw-bold`,children:[(0,F.jsx)(`h5`,{children:e.product.title}),(0,F.jsxs)(`p`,{className:`mb-0`,children:[`x`,e.qty]})]}),(0,F.jsxs)(`div`,{className:`d-flex justify-content-between mt-auto`,children:[(0,F.jsx)(`p`,{className:`text-muted mb-0`,children:(0,F.jsxs)(`small`,{children:[`NT$ `,e.product.price]})}),(0,F.jsxs)(`p`,{className:`mb-0`,children:[`NT$ `,e.final_total]})]})]})]})},e.id)),(0,F.jsx)(`li`,{className:`list-group-item px-0 pb-0`,children:(0,F.jsxs)(`div`,{className:`d-flex justify-content-between mt-2`,children:[(0,F.jsx)(`p`,{className:`mb-0 h4 fw-bold`,children:`總金額`}),(0,F.jsxs)(`p`,{className:`mb-0 h4 fw-bold`,children:[`NT$ `,t.total]})]})})]})})]})})]})})]})}var Cf=(0,v.lazy)(()=>S(()=>import(`./Login-CNg6UsSS.js`),[])),wf=(0,v.lazy)(()=>S(()=>import(`./Dashboard-BGIakdij.js`),__vite__mapDeps([0,1]))),Tf=(0,v.lazy)(()=>S(()=>import(`./AdminProducts-8_M2aVlU.js`),__vite__mapDeps([2,3,1]))),Ef=(0,v.lazy)(()=>S(()=>import(`./AdminCoupons-BsUnfkrl.js`),__vite__mapDeps([4,3,1]))),Df=(0,v.lazy)(()=>S(()=>import(`./AdminOrders-DTsQIP74.js`),__vite__mapDeps([5,3,1])));function Of(){return(0,F.jsx)(v.Suspense,{fallback:(0,F.jsx)(Fr,{isLoading:!0}),children:(0,F.jsxs)(Gt,{children:[(0,F.jsxs)(Ut,{path:`/`,element:(0,F.jsx)(cc,{}),children:[(0,F.jsx)(Ut,{path:``,element:(0,F.jsx)(lc,{})}),(0,F.jsx)(Ut,{path:`products`,element:(0,F.jsx)(dc,{})}),(0,F.jsx)(Ut,{path:`products/:id`,element:(0,F.jsx)(zu,{})}),(0,F.jsx)(Ut,{path:`cart`,element:(0,F.jsx)(Bu,{})}),(0,F.jsx)(Ut,{path:`checkout`,element:(0,F.jsx)(xf,{})}),(0,F.jsx)(Ut,{path:`success/:orderId`,element:(0,F.jsx)(Sf,{})})]}),(0,F.jsx)(Ut,{path:`/login`,element:(0,F.jsx)(Cf,{})}),(0,F.jsxs)(Ut,{path:`/admin`,element:(0,F.jsx)(wf,{}),children:[(0,F.jsx)(Ut,{path:`products`,element:(0,F.jsx)(Tf,{})}),(0,F.jsx)(Ut,{path:`coupons`,element:(0,F.jsx)(Ef,{})}),(0,F.jsx)(Ut,{path:`orders`,element:(0,F.jsx)(Df,{})})]})]})})}var kf=eu({reducer:{message:Ru}});ec.defaults.baseURL=`https://ec-course-api.hexschool.io/`,(0,y.createRoot)(document.getElementById(`root`)).render((0,F.jsx)(An,{children:(0,F.jsx)(Zr,{store:kf,children:(0,F.jsx)(Of,{})})}));export{rc as a,Pr as c,ht as d,p as f,sc as i,Mn as l,l as m,oc as n,ec as o,s as p,ic as r,Fr as s,uc as t,Ht as u};