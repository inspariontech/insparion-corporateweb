(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function nE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var vy={exports:{}},jc={},yy={exports:{}},Oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ra=Symbol.for("react.element"),iE=Symbol.for("react.portal"),rE=Symbol.for("react.fragment"),sE=Symbol.for("react.strict_mode"),oE=Symbol.for("react.profiler"),aE=Symbol.for("react.provider"),lE=Symbol.for("react.context"),cE=Symbol.for("react.forward_ref"),uE=Symbol.for("react.suspense"),fE=Symbol.for("react.memo"),dE=Symbol.for("react.lazy"),zm=Symbol.iterator;function hE(t){return t===null||typeof t!="object"?null:(t=zm&&t[zm]||t["@@iterator"],typeof t=="function"?t:null)}var _y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xy=Object.assign,Sy={};function fo(t,e,n){this.props=t,this.context=e,this.refs=Sy,this.updater=n||_y}fo.prototype.isReactComponent={};fo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};fo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function My(){}My.prototype=fo.prototype;function Wh(t,e,n){this.props=t,this.context=e,this.refs=Sy,this.updater=n||_y}var jh=Wh.prototype=new My;jh.constructor=Wh;xy(jh,fo.prototype);jh.isPureReactComponent=!0;var Vm=Array.isArray,Ey=Object.prototype.hasOwnProperty,Xh={current:null},wy={key:!0,ref:!0,__self:!0,__source:!0};function Ty(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Ey.call(e,i)&&!wy.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ra,type:t,key:s,ref:o,props:r,_owner:Xh.current}}function pE(t,e){return{$$typeof:Ra,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Yh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ra}function mE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Hm=/\/+/g;function bu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?mE(""+t.key):e.toString(36)}function Fl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ra:case iE:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+bu(o,0):i,Vm(r)?(n="",t!=null&&(n=t.replace(Hm,"$&/")+"/"),Fl(r,e,n,"",function(c){return c})):r!=null&&(Yh(r)&&(r=pE(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Hm,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Vm(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+bu(s,a);o+=Fl(s,e,n,l,r)}else if(l=hE(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+bu(s,a++),o+=Fl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ya(t,e,n){if(t==null)return t;var i=[],r=0;return Fl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function gE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var tn={current:null},Ol={transition:null},vE={ReactCurrentDispatcher:tn,ReactCurrentBatchConfig:Ol,ReactCurrentOwner:Xh};function Ay(){throw Error("act(...) is not supported in production builds of React.")}Oe.Children={map:Ya,forEach:function(t,e,n){Ya(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ya(t,function(){e++}),e},toArray:function(t){return Ya(t,function(e){return e})||[]},only:function(t){if(!Yh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Oe.Component=fo;Oe.Fragment=rE;Oe.Profiler=oE;Oe.PureComponent=Wh;Oe.StrictMode=sE;Oe.Suspense=uE;Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vE;Oe.act=Ay;Oe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=xy({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Xh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Ey.call(e,l)&&!wy.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Ra,type:t.type,key:r,ref:s,props:i,_owner:o}};Oe.createContext=function(t){return t={$$typeof:lE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:aE,_context:t},t.Consumer=t};Oe.createElement=Ty;Oe.createFactory=function(t){var e=Ty.bind(null,t);return e.type=t,e};Oe.createRef=function(){return{current:null}};Oe.forwardRef=function(t){return{$$typeof:cE,render:t}};Oe.isValidElement=Yh;Oe.lazy=function(t){return{$$typeof:dE,_payload:{_status:-1,_result:t},_init:gE}};Oe.memo=function(t,e){return{$$typeof:fE,type:t,compare:e===void 0?null:e}};Oe.startTransition=function(t){var e=Ol.transition;Ol.transition={};try{t()}finally{Ol.transition=e}};Oe.unstable_act=Ay;Oe.useCallback=function(t,e){return tn.current.useCallback(t,e)};Oe.useContext=function(t){return tn.current.useContext(t)};Oe.useDebugValue=function(){};Oe.useDeferredValue=function(t){return tn.current.useDeferredValue(t)};Oe.useEffect=function(t,e){return tn.current.useEffect(t,e)};Oe.useId=function(){return tn.current.useId()};Oe.useImperativeHandle=function(t,e,n){return tn.current.useImperativeHandle(t,e,n)};Oe.useInsertionEffect=function(t,e){return tn.current.useInsertionEffect(t,e)};Oe.useLayoutEffect=function(t,e){return tn.current.useLayoutEffect(t,e)};Oe.useMemo=function(t,e){return tn.current.useMemo(t,e)};Oe.useReducer=function(t,e,n){return tn.current.useReducer(t,e,n)};Oe.useRef=function(t){return tn.current.useRef(t)};Oe.useState=function(t){return tn.current.useState(t)};Oe.useSyncExternalStore=function(t,e,n){return tn.current.useSyncExternalStore(t,e,n)};Oe.useTransition=function(){return tn.current.useTransition()};Oe.version="18.3.1";yy.exports=Oe;var ne=yy.exports;const yE=nE(ne);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _E=ne,xE=Symbol.for("react.element"),SE=Symbol.for("react.fragment"),ME=Object.prototype.hasOwnProperty,EE=_E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,wE={key:!0,ref:!0,__self:!0,__source:!0};function Cy(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)ME.call(e,i)&&!wE.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:xE,type:t,key:s,ref:o,props:r,_owner:EE.current}}jc.Fragment=SE;jc.jsx=Cy;jc.jsxs=Cy;vy.exports=jc;var b=vy.exports,Xf={},by={exports:{}},Tn={},Ry={exports:{}},Py={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,$){var q=L.length;L.push($);e:for(;0<q;){var oe=q-1>>>1,we=L[oe];if(0<r(we,$))L[oe]=$,L[q]=we,q=oe;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var $=L[0],q=L.pop();if(q!==$){L[0]=q;e:for(var oe=0,we=L.length,Fe=we>>>1;oe<Fe;){var X=2*(oe+1)-1,ee=L[X],ce=X+1,le=L[ce];if(0>r(ee,q))ce<we&&0>r(le,ee)?(L[oe]=le,L[ce]=q,oe=ce):(L[oe]=ee,L[X]=q,oe=X);else if(ce<we&&0>r(le,q))L[oe]=le,L[ce]=q,oe=ce;else break e}}return $}function r(L,$){var q=L.sortIndex-$.sortIndex;return q!==0?q:L.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,f=null,d=3,p=!1,g=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(L){for(var $=n(c);$!==null;){if($.callback===null)i(c);else if($.startTime<=L)i(c),$.sortIndex=$.expirationTime,e(l,$);else break;$=n(c)}}function S(L){if(_=!1,y(L),!g)if(n(l)!==null)g=!0,G(C);else{var $=n(c);$!==null&&W(S,$.startTime-L)}}function C(L,$){g=!1,_&&(_=!1,h(P),P=-1),p=!0;var q=d;try{for(y($),f=n(l);f!==null&&(!(f.expirationTime>$)||L&&!E());){var oe=f.callback;if(typeof oe=="function"){f.callback=null,d=f.priorityLevel;var we=oe(f.expirationTime<=$);$=t.unstable_now(),typeof we=="function"?f.callback=we:f===n(l)&&i(l),y($)}else i(l);f=n(l)}if(f!==null)var Fe=!0;else{var X=n(c);X!==null&&W(S,X.startTime-$),Fe=!1}return Fe}finally{f=null,d=q,p=!1}}var A=!1,T=null,P=-1,V=5,x=-1;function E(){return!(t.unstable_now()-x<V)}function H(){if(T!==null){var L=t.unstable_now();x=L;var $=!0;try{$=T(!0,L)}finally{$?z():(A=!1,T=null)}}else A=!1}var z;if(typeof v=="function")z=function(){v(H)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,J=Y.port2;Y.port1.onmessage=H,z=function(){J.postMessage(null)}}else z=function(){m(H,0)};function G(L){T=L,A||(A=!0,z())}function W(L,$){P=m(function(){L(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,G(C))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(d){case 1:case 2:case 3:var $=3;break;default:$=d}var q=d;d=$;try{return L()}finally{d=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,$){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var q=d;d=L;try{return $()}finally{d=q}},t.unstable_scheduleCallback=function(L,$,q){var oe=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?oe+q:oe):q=oe,L){case 1:var we=-1;break;case 2:we=250;break;case 5:we=1073741823;break;case 4:we=1e4;break;default:we=5e3}return we=q+we,L={id:u++,callback:$,priorityLevel:L,startTime:q,expirationTime:we,sortIndex:-1},q>oe?(L.sortIndex=q,e(c,L),n(l)===null&&L===n(c)&&(_?(h(P),P=-1):_=!0,W(S,q-oe))):(L.sortIndex=we,e(l,L),g||p||(g=!0,G(C))),L},t.unstable_shouldYield=E,t.unstable_wrapCallback=function(L){var $=d;return function(){var q=d;d=$;try{return L.apply(this,arguments)}finally{d=q}}}})(Py);Ry.exports=Py;var TE=Ry.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var AE=ne,En=TE;function ie(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ly=new Set,oa={};function ns(t,e){Ks(t,e),Ks(t+"Capture",e)}function Ks(t,e){for(oa[t]=e,t=0;t<e.length;t++)Ly.add(e[t])}var Ni=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yf=Object.prototype.hasOwnProperty,CE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Gm={},Wm={};function bE(t){return Yf.call(Wm,t)?!0:Yf.call(Gm,t)?!1:CE.test(t)?Wm[t]=!0:(Gm[t]=!0,!1)}function RE(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function PE(t,e,n,i){if(e===null||typeof e>"u"||RE(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function nn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Vt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Vt[t]=new nn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Vt[e]=new nn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Vt[t]=new nn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Vt[t]=new nn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Vt[t]=new nn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Vt[t]=new nn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Vt[t]=new nn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Vt[t]=new nn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Vt[t]=new nn(t,5,!1,t.toLowerCase(),null,!1,!1)});var $h=/[\-:]([a-z])/g;function Kh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace($h,Kh);Vt[e]=new nn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace($h,Kh);Vt[e]=new nn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace($h,Kh);Vt[e]=new nn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Vt[t]=new nn(t,1,!1,t.toLowerCase(),null,!1,!1)});Vt.xlinkHref=new nn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Vt[t]=new nn(t,1,!1,t.toLowerCase(),null,!0,!0)});function qh(t,e,n,i){var r=Vt.hasOwnProperty(e)?Vt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(PE(e,n,r,i)&&(n=null),i||r===null?bE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Bi=AE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$a=Symbol.for("react.element"),Ms=Symbol.for("react.portal"),Es=Symbol.for("react.fragment"),Zh=Symbol.for("react.strict_mode"),$f=Symbol.for("react.profiler"),Dy=Symbol.for("react.provider"),Ny=Symbol.for("react.context"),Qh=Symbol.for("react.forward_ref"),Kf=Symbol.for("react.suspense"),qf=Symbol.for("react.suspense_list"),Jh=Symbol.for("react.memo"),qi=Symbol.for("react.lazy"),Iy=Symbol.for("react.offscreen"),jm=Symbol.iterator;function xo(t){return t===null||typeof t!="object"?null:(t=jm&&t[jm]||t["@@iterator"],typeof t=="function"?t:null)}var gt=Object.assign,Ru;function Uo(t){if(Ru===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ru=e&&e[1]||""}return`
`+Ru+t}var Pu=!1;function Lu(t,e){if(!t||Pu)return"";Pu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Pu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Uo(t):""}function LE(t){switch(t.tag){case 5:return Uo(t.type);case 16:return Uo("Lazy");case 13:return Uo("Suspense");case 19:return Uo("SuspenseList");case 0:case 2:case 15:return t=Lu(t.type,!1),t;case 11:return t=Lu(t.type.render,!1),t;case 1:return t=Lu(t.type,!0),t;default:return""}}function Zf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Es:return"Fragment";case Ms:return"Portal";case $f:return"Profiler";case Zh:return"StrictMode";case Kf:return"Suspense";case qf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ny:return(t.displayName||"Context")+".Consumer";case Dy:return(t._context.displayName||"Context")+".Provider";case Qh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Jh:return e=t.displayName||null,e!==null?e:Zf(t.type)||"Memo";case qi:e=t._payload,t=t._init;try{return Zf(t(e))}catch{}}return null}function DE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zf(e);case 8:return e===Zh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function hr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Uy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function NE(t){var e=Uy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ka(t){t._valueTracker||(t._valueTracker=NE(t))}function ky(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Uy(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function ac(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Qf(t,e){var n=e.checked;return gt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Xm(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=hr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Fy(t,e){e=e.checked,e!=null&&qh(t,"checked",e,!1)}function Jf(t,e){Fy(t,e);var n=hr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ed(t,e.type,n):e.hasOwnProperty("defaultValue")&&ed(t,e.type,hr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ym(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ed(t,e,n){(e!=="number"||ac(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ko=Array.isArray;function zs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+hr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function td(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return gt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function $m(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ie(92));if(ko(n)){if(1<n.length)throw Error(ie(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:hr(n)}}function Oy(t,e){var n=hr(e.value),i=hr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Km(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function By(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function nd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?By(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var qa,zy=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(qa=qa||document.createElement("div"),qa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=qa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function aa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Wo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},IE=["Webkit","ms","Moz","O"];Object.keys(Wo).forEach(function(t){IE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Wo[e]=Wo[t]})});function Vy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Wo.hasOwnProperty(t)&&Wo[t]?(""+e).trim():e+"px"}function Hy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Vy(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var UE=gt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function id(t,e){if(e){if(UE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function rd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sd=null;function ep(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var od=null,Vs=null,Hs=null;function qm(t){if(t=Da(t)){if(typeof od!="function")throw Error(ie(280));var e=t.stateNode;e&&(e=qc(e),od(t.stateNode,t.type,e))}}function Gy(t){Vs?Hs?Hs.push(t):Hs=[t]:Vs=t}function Wy(){if(Vs){var t=Vs,e=Hs;if(Hs=Vs=null,qm(t),e)for(t=0;t<e.length;t++)qm(e[t])}}function jy(t,e){return t(e)}function Xy(){}var Du=!1;function Yy(t,e,n){if(Du)return t(e,n);Du=!0;try{return jy(t,e,n)}finally{Du=!1,(Vs!==null||Hs!==null)&&(Xy(),Wy())}}function la(t,e){var n=t.stateNode;if(n===null)return null;var i=qc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ie(231,e,typeof n));return n}var ad=!1;if(Ni)try{var So={};Object.defineProperty(So,"passive",{get:function(){ad=!0}}),window.addEventListener("test",So,So),window.removeEventListener("test",So,So)}catch{ad=!1}function kE(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var jo=!1,lc=null,cc=!1,ld=null,FE={onError:function(t){jo=!0,lc=t}};function OE(t,e,n,i,r,s,o,a,l){jo=!1,lc=null,kE.apply(FE,arguments)}function BE(t,e,n,i,r,s,o,a,l){if(OE.apply(this,arguments),jo){if(jo){var c=lc;jo=!1,lc=null}else throw Error(ie(198));cc||(cc=!0,ld=c)}}function is(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function $y(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Zm(t){if(is(t)!==t)throw Error(ie(188))}function zE(t){var e=t.alternate;if(!e){if(e=is(t),e===null)throw Error(ie(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Zm(r),t;if(s===i)return Zm(r),e;s=s.sibling}throw Error(ie(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ie(189))}}if(n.alternate!==i)throw Error(ie(190))}if(n.tag!==3)throw Error(ie(188));return n.stateNode.current===n?t:e}function Ky(t){return t=zE(t),t!==null?qy(t):null}function qy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=qy(t);if(e!==null)return e;t=t.sibling}return null}var Zy=En.unstable_scheduleCallback,Qm=En.unstable_cancelCallback,VE=En.unstable_shouldYield,HE=En.unstable_requestPaint,Mt=En.unstable_now,GE=En.unstable_getCurrentPriorityLevel,tp=En.unstable_ImmediatePriority,Qy=En.unstable_UserBlockingPriority,uc=En.unstable_NormalPriority,WE=En.unstable_LowPriority,Jy=En.unstable_IdlePriority,Xc=null,ui=null;function jE(t){if(ui&&typeof ui.onCommitFiberRoot=="function")try{ui.onCommitFiberRoot(Xc,t,void 0,(t.current.flags&128)===128)}catch{}}var ei=Math.clz32?Math.clz32:$E,XE=Math.log,YE=Math.LN2;function $E(t){return t>>>=0,t===0?32:31-(XE(t)/YE|0)|0}var Za=64,Qa=4194304;function Fo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function fc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Fo(a):(s&=o,s!==0&&(i=Fo(s)))}else o=n&~r,o!==0?i=Fo(o):s!==0&&(i=Fo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ei(e),r=1<<n,i|=t[n],e&=~r;return i}function KE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qE(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ei(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=KE(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function cd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function e_(){var t=Za;return Za<<=1,!(Za&4194240)&&(Za=64),t}function Nu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Pa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ei(e),t[e]=n}function ZE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ei(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function np(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ei(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var et=0;function t_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var n_,ip,i_,r_,s_,ud=!1,Ja=[],ir=null,rr=null,sr=null,ca=new Map,ua=new Map,Qi=[],QE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Jm(t,e){switch(t){case"focusin":case"focusout":ir=null;break;case"dragenter":case"dragleave":rr=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":ca.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ua.delete(e.pointerId)}}function Mo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Da(e),e!==null&&ip(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function JE(t,e,n,i,r){switch(e){case"focusin":return ir=Mo(ir,t,e,n,i,r),!0;case"dragenter":return rr=Mo(rr,t,e,n,i,r),!0;case"mouseover":return sr=Mo(sr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ca.set(s,Mo(ca.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ua.set(s,Mo(ua.get(s)||null,t,e,n,i,r)),!0}return!1}function o_(t){var e=zr(t.target);if(e!==null){var n=is(e);if(n!==null){if(e=n.tag,e===13){if(e=$y(n),e!==null){t.blockedOn=e,s_(t.priority,function(){i_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Bl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=fd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);sd=i,n.target.dispatchEvent(i),sd=null}else return e=Da(n),e!==null&&ip(e),t.blockedOn=n,!1;e.shift()}return!0}function eg(t,e,n){Bl(t)&&n.delete(e)}function e1(){ud=!1,ir!==null&&Bl(ir)&&(ir=null),rr!==null&&Bl(rr)&&(rr=null),sr!==null&&Bl(sr)&&(sr=null),ca.forEach(eg),ua.forEach(eg)}function Eo(t,e){t.blockedOn===e&&(t.blockedOn=null,ud||(ud=!0,En.unstable_scheduleCallback(En.unstable_NormalPriority,e1)))}function fa(t){function e(r){return Eo(r,t)}if(0<Ja.length){Eo(Ja[0],t);for(var n=1;n<Ja.length;n++){var i=Ja[n];i.blockedOn===t&&(i.blockedOn=null)}}for(ir!==null&&Eo(ir,t),rr!==null&&Eo(rr,t),sr!==null&&Eo(sr,t),ca.forEach(e),ua.forEach(e),n=0;n<Qi.length;n++)i=Qi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Qi.length&&(n=Qi[0],n.blockedOn===null);)o_(n),n.blockedOn===null&&Qi.shift()}var Gs=Bi.ReactCurrentBatchConfig,dc=!0;function t1(t,e,n,i){var r=et,s=Gs.transition;Gs.transition=null;try{et=1,rp(t,e,n,i)}finally{et=r,Gs.transition=s}}function n1(t,e,n,i){var r=et,s=Gs.transition;Gs.transition=null;try{et=4,rp(t,e,n,i)}finally{et=r,Gs.transition=s}}function rp(t,e,n,i){if(dc){var r=fd(t,e,n,i);if(r===null)Gu(t,e,i,hc,n),Jm(t,i);else if(JE(r,t,e,n,i))i.stopPropagation();else if(Jm(t,i),e&4&&-1<QE.indexOf(t)){for(;r!==null;){var s=Da(r);if(s!==null&&n_(s),s=fd(t,e,n,i),s===null&&Gu(t,e,i,hc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Gu(t,e,i,null,n)}}var hc=null;function fd(t,e,n,i){if(hc=null,t=ep(i),t=zr(t),t!==null)if(e=is(t),e===null)t=null;else if(n=e.tag,n===13){if(t=$y(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return hc=t,null}function a_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(GE()){case tp:return 1;case Qy:return 4;case uc:case WE:return 16;case Jy:return 536870912;default:return 16}default:return 16}}var tr=null,sp=null,zl=null;function l_(){if(zl)return zl;var t,e=sp,n=e.length,i,r="value"in tr?tr.value:tr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return zl=r.slice(t,1<i?1-i:void 0)}function Vl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function el(){return!0}function tg(){return!1}function An(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?el:tg,this.isPropagationStopped=tg,this}return gt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=el)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=el)},persist:function(){},isPersistent:el}),e}var ho={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},op=An(ho),La=gt({},ho,{view:0,detail:0}),i1=An(La),Iu,Uu,wo,Yc=gt({},La,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ap,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==wo&&(wo&&t.type==="mousemove"?(Iu=t.screenX-wo.screenX,Uu=t.screenY-wo.screenY):Uu=Iu=0,wo=t),Iu)},movementY:function(t){return"movementY"in t?t.movementY:Uu}}),ng=An(Yc),r1=gt({},Yc,{dataTransfer:0}),s1=An(r1),o1=gt({},La,{relatedTarget:0}),ku=An(o1),a1=gt({},ho,{animationName:0,elapsedTime:0,pseudoElement:0}),l1=An(a1),c1=gt({},ho,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),u1=An(c1),f1=gt({},ho,{data:0}),ig=An(f1),d1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},h1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},p1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function m1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=p1[t])?!!e[t]:!1}function ap(){return m1}var g1=gt({},La,{key:function(t){if(t.key){var e=d1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Vl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?h1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ap,charCode:function(t){return t.type==="keypress"?Vl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Vl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),v1=An(g1),y1=gt({},Yc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rg=An(y1),_1=gt({},La,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ap}),x1=An(_1),S1=gt({},ho,{propertyName:0,elapsedTime:0,pseudoElement:0}),M1=An(S1),E1=gt({},Yc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),w1=An(E1),T1=[9,13,27,32],lp=Ni&&"CompositionEvent"in window,Xo=null;Ni&&"documentMode"in document&&(Xo=document.documentMode);var A1=Ni&&"TextEvent"in window&&!Xo,c_=Ni&&(!lp||Xo&&8<Xo&&11>=Xo),sg=" ",og=!1;function u_(t,e){switch(t){case"keyup":return T1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function f_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ws=!1;function C1(t,e){switch(t){case"compositionend":return f_(e);case"keypress":return e.which!==32?null:(og=!0,sg);case"textInput":return t=e.data,t===sg&&og?null:t;default:return null}}function b1(t,e){if(ws)return t==="compositionend"||!lp&&u_(t,e)?(t=l_(),zl=sp=tr=null,ws=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return c_&&e.locale!=="ko"?null:e.data;default:return null}}var R1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ag(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!R1[t.type]:e==="textarea"}function d_(t,e,n,i){Gy(i),e=pc(e,"onChange"),0<e.length&&(n=new op("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Yo=null,da=null;function P1(t){E_(t,0)}function $c(t){var e=Cs(t);if(ky(e))return t}function L1(t,e){if(t==="change")return e}var h_=!1;if(Ni){var Fu;if(Ni){var Ou="oninput"in document;if(!Ou){var lg=document.createElement("div");lg.setAttribute("oninput","return;"),Ou=typeof lg.oninput=="function"}Fu=Ou}else Fu=!1;h_=Fu&&(!document.documentMode||9<document.documentMode)}function cg(){Yo&&(Yo.detachEvent("onpropertychange",p_),da=Yo=null)}function p_(t){if(t.propertyName==="value"&&$c(da)){var e=[];d_(e,da,t,ep(t)),Yy(P1,e)}}function D1(t,e,n){t==="focusin"?(cg(),Yo=e,da=n,Yo.attachEvent("onpropertychange",p_)):t==="focusout"&&cg()}function N1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return $c(da)}function I1(t,e){if(t==="click")return $c(e)}function U1(t,e){if(t==="input"||t==="change")return $c(e)}function k1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ni=typeof Object.is=="function"?Object.is:k1;function ha(t,e){if(ni(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Yf.call(e,r)||!ni(t[r],e[r]))return!1}return!0}function ug(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function fg(t,e){var n=ug(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ug(n)}}function m_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?m_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function g_(){for(var t=window,e=ac();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ac(t.document)}return e}function cp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function F1(t){var e=g_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&m_(n.ownerDocument.documentElement,n)){if(i!==null&&cp(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=fg(n,s);var o=fg(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var O1=Ni&&"documentMode"in document&&11>=document.documentMode,Ts=null,dd=null,$o=null,hd=!1;function dg(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;hd||Ts==null||Ts!==ac(i)||(i=Ts,"selectionStart"in i&&cp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),$o&&ha($o,i)||($o=i,i=pc(dd,"onSelect"),0<i.length&&(e=new op("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ts)))}function tl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var As={animationend:tl("Animation","AnimationEnd"),animationiteration:tl("Animation","AnimationIteration"),animationstart:tl("Animation","AnimationStart"),transitionend:tl("Transition","TransitionEnd")},Bu={},v_={};Ni&&(v_=document.createElement("div").style,"AnimationEvent"in window||(delete As.animationend.animation,delete As.animationiteration.animation,delete As.animationstart.animation),"TransitionEvent"in window||delete As.transitionend.transition);function Kc(t){if(Bu[t])return Bu[t];if(!As[t])return t;var e=As[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in v_)return Bu[t]=e[n];return t}var y_=Kc("animationend"),__=Kc("animationiteration"),x_=Kc("animationstart"),S_=Kc("transitionend"),M_=new Map,hg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _r(t,e){M_.set(t,e),ns(e,[t])}for(var zu=0;zu<hg.length;zu++){var Vu=hg[zu],B1=Vu.toLowerCase(),z1=Vu[0].toUpperCase()+Vu.slice(1);_r(B1,"on"+z1)}_r(y_,"onAnimationEnd");_r(__,"onAnimationIteration");_r(x_,"onAnimationStart");_r("dblclick","onDoubleClick");_r("focusin","onFocus");_r("focusout","onBlur");_r(S_,"onTransitionEnd");Ks("onMouseEnter",["mouseout","mouseover"]);Ks("onMouseLeave",["mouseout","mouseover"]);Ks("onPointerEnter",["pointerout","pointerover"]);Ks("onPointerLeave",["pointerout","pointerover"]);ns("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ns("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ns("onBeforeInput",["compositionend","keypress","textInput","paste"]);ns("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ns("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ns("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),V1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Oo));function pg(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,BE(i,e,void 0,t),t.currentTarget=null}function E_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;pg(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;pg(r,a,c),s=l}}}if(cc)throw t=ld,cc=!1,ld=null,t}function lt(t,e){var n=e[yd];n===void 0&&(n=e[yd]=new Set);var i=t+"__bubble";n.has(i)||(w_(e,t,2,!1),n.add(i))}function Hu(t,e,n){var i=0;e&&(i|=4),w_(n,t,i,e)}var nl="_reactListening"+Math.random().toString(36).slice(2);function pa(t){if(!t[nl]){t[nl]=!0,Ly.forEach(function(n){n!=="selectionchange"&&(V1.has(n)||Hu(n,!1,t),Hu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[nl]||(e[nl]=!0,Hu("selectionchange",!1,e))}}function w_(t,e,n,i){switch(a_(e)){case 1:var r=t1;break;case 4:r=n1;break;default:r=rp}n=r.bind(null,e,n,t),r=void 0,!ad||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Gu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=zr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Yy(function(){var c=s,u=ep(n),f=[];e:{var d=M_.get(t);if(d!==void 0){var p=op,g=t;switch(t){case"keypress":if(Vl(n)===0)break e;case"keydown":case"keyup":p=v1;break;case"focusin":g="focus",p=ku;break;case"focusout":g="blur",p=ku;break;case"beforeblur":case"afterblur":p=ku;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=ng;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=s1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=x1;break;case y_:case __:case x_:p=l1;break;case S_:p=M1;break;case"scroll":p=i1;break;case"wheel":p=w1;break;case"copy":case"cut":case"paste":p=u1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=rg}var _=(e&4)!==0,m=!_&&t==="scroll",h=_?d!==null?d+"Capture":null:d;_=[];for(var v=c,y;v!==null;){y=v;var S=y.stateNode;if(y.tag===5&&S!==null&&(y=S,h!==null&&(S=la(v,h),S!=null&&_.push(ma(v,S,y)))),m)break;v=v.return}0<_.length&&(d=new p(d,g,null,n,u),f.push({event:d,listeners:_}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==sd&&(g=n.relatedTarget||n.fromElement)&&(zr(g)||g[Ii]))break e;if((p||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=c,g=g?zr(g):null,g!==null&&(m=is(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(_=ng,S="onMouseLeave",h="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(_=rg,S="onPointerLeave",h="onPointerEnter",v="pointer"),m=p==null?d:Cs(p),y=g==null?d:Cs(g),d=new _(S,v+"leave",p,n,u),d.target=m,d.relatedTarget=y,S=null,zr(u)===c&&(_=new _(h,v+"enter",g,n,u),_.target=y,_.relatedTarget=m,S=_),m=S,p&&g)t:{for(_=p,h=g,v=0,y=_;y;y=os(y))v++;for(y=0,S=h;S;S=os(S))y++;for(;0<v-y;)_=os(_),v--;for(;0<y-v;)h=os(h),y--;for(;v--;){if(_===h||h!==null&&_===h.alternate)break t;_=os(_),h=os(h)}_=null}else _=null;p!==null&&mg(f,d,p,_,!1),g!==null&&m!==null&&mg(f,m,g,_,!0)}}e:{if(d=c?Cs(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var C=L1;else if(ag(d))if(h_)C=U1;else{C=N1;var A=D1}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(C=I1);if(C&&(C=C(t,c))){d_(f,C,n,u);break e}A&&A(t,d,c),t==="focusout"&&(A=d._wrapperState)&&A.controlled&&d.type==="number"&&ed(d,"number",d.value)}switch(A=c?Cs(c):window,t){case"focusin":(ag(A)||A.contentEditable==="true")&&(Ts=A,dd=c,$o=null);break;case"focusout":$o=dd=Ts=null;break;case"mousedown":hd=!0;break;case"contextmenu":case"mouseup":case"dragend":hd=!1,dg(f,n,u);break;case"selectionchange":if(O1)break;case"keydown":case"keyup":dg(f,n,u)}var T;if(lp)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else ws?u_(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(c_&&n.locale!=="ko"&&(ws||P!=="onCompositionStart"?P==="onCompositionEnd"&&ws&&(T=l_()):(tr=u,sp="value"in tr?tr.value:tr.textContent,ws=!0)),A=pc(c,P),0<A.length&&(P=new ig(P,t,null,n,u),f.push({event:P,listeners:A}),T?P.data=T:(T=f_(n),T!==null&&(P.data=T)))),(T=A1?C1(t,n):b1(t,n))&&(c=pc(c,"onBeforeInput"),0<c.length&&(u=new ig("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:c}),u.data=T))}E_(f,e)})}function ma(t,e,n){return{instance:t,listener:e,currentTarget:n}}function pc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=la(t,n),s!=null&&i.unshift(ma(t,s,r)),s=la(t,e),s!=null&&i.push(ma(t,s,r))),t=t.return}return i}function os(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function mg(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=la(n,s),l!=null&&o.unshift(ma(n,l,a))):r||(l=la(n,s),l!=null&&o.push(ma(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var H1=/\r\n?/g,G1=/\u0000|\uFFFD/g;function gg(t){return(typeof t=="string"?t:""+t).replace(H1,`
`).replace(G1,"")}function il(t,e,n){if(e=gg(e),gg(t)!==e&&n)throw Error(ie(425))}function mc(){}var pd=null,md=null;function gd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var vd=typeof setTimeout=="function"?setTimeout:void 0,W1=typeof clearTimeout=="function"?clearTimeout:void 0,vg=typeof Promise=="function"?Promise:void 0,j1=typeof queueMicrotask=="function"?queueMicrotask:typeof vg<"u"?function(t){return vg.resolve(null).then(t).catch(X1)}:vd;function X1(t){setTimeout(function(){throw t})}function Wu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),fa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);fa(e)}function or(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function yg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var po=Math.random().toString(36).slice(2),li="__reactFiber$"+po,ga="__reactProps$"+po,Ii="__reactContainer$"+po,yd="__reactEvents$"+po,Y1="__reactListeners$"+po,$1="__reactHandles$"+po;function zr(t){var e=t[li];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ii]||n[li]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=yg(t);t!==null;){if(n=t[li])return n;t=yg(t)}return e}t=n,n=t.parentNode}return null}function Da(t){return t=t[li]||t[Ii],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Cs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ie(33))}function qc(t){return t[ga]||null}var _d=[],bs=-1;function xr(t){return{current:t}}function ut(t){0>bs||(t.current=_d[bs],_d[bs]=null,bs--)}function st(t,e){bs++,_d[bs]=t.current,t.current=e}var pr={},$t=xr(pr),ln=xr(!1),Kr=pr;function qs(t,e){var n=t.type.contextTypes;if(!n)return pr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function cn(t){return t=t.childContextTypes,t!=null}function gc(){ut(ln),ut($t)}function _g(t,e,n){if($t.current!==pr)throw Error(ie(168));st($t,e),st(ln,n)}function T_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,DE(t)||"Unknown",r));return gt({},n,i)}function vc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||pr,Kr=$t.current,st($t,t),st(ln,ln.current),!0}function xg(t,e,n){var i=t.stateNode;if(!i)throw Error(ie(169));n?(t=T_(t,e,Kr),i.__reactInternalMemoizedMergedChildContext=t,ut(ln),ut($t),st($t,t)):ut(ln),st(ln,n)}var Ai=null,Zc=!1,ju=!1;function A_(t){Ai===null?Ai=[t]:Ai.push(t)}function K1(t){Zc=!0,A_(t)}function Sr(){if(!ju&&Ai!==null){ju=!0;var t=0,e=et;try{var n=Ai;for(et=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ai=null,Zc=!1}catch(r){throw Ai!==null&&(Ai=Ai.slice(t+1)),Zy(tp,Sr),r}finally{et=e,ju=!1}}return null}var Rs=[],Ps=0,yc=null,_c=0,Ln=[],Dn=0,qr=null,bi=1,Ri="";function Dr(t,e){Rs[Ps++]=_c,Rs[Ps++]=yc,yc=t,_c=e}function C_(t,e,n){Ln[Dn++]=bi,Ln[Dn++]=Ri,Ln[Dn++]=qr,qr=t;var i=bi;t=Ri;var r=32-ei(i)-1;i&=~(1<<r),n+=1;var s=32-ei(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,bi=1<<32-ei(e)+r|n<<r|i,Ri=s+t}else bi=1<<s|n<<r|i,Ri=t}function up(t){t.return!==null&&(Dr(t,1),C_(t,1,0))}function fp(t){for(;t===yc;)yc=Rs[--Ps],Rs[Ps]=null,_c=Rs[--Ps],Rs[Ps]=null;for(;t===qr;)qr=Ln[--Dn],Ln[Dn]=null,Ri=Ln[--Dn],Ln[Dn]=null,bi=Ln[--Dn],Ln[Dn]=null}var Sn=null,xn=null,ft=!1,Kn=null;function b_(t,e){var n=In(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Sg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Sn=t,xn=or(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Sn=t,xn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=qr!==null?{id:bi,overflow:Ri}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=In(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Sn=t,xn=null,!0):!1;default:return!1}}function xd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Sd(t){if(ft){var e=xn;if(e){var n=e;if(!Sg(t,e)){if(xd(t))throw Error(ie(418));e=or(n.nextSibling);var i=Sn;e&&Sg(t,e)?b_(i,n):(t.flags=t.flags&-4097|2,ft=!1,Sn=t)}}else{if(xd(t))throw Error(ie(418));t.flags=t.flags&-4097|2,ft=!1,Sn=t}}}function Mg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Sn=t}function rl(t){if(t!==Sn)return!1;if(!ft)return Mg(t),ft=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!gd(t.type,t.memoizedProps)),e&&(e=xn)){if(xd(t))throw R_(),Error(ie(418));for(;e;)b_(t,e),e=or(e.nextSibling)}if(Mg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ie(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){xn=or(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}xn=null}}else xn=Sn?or(t.stateNode.nextSibling):null;return!0}function R_(){for(var t=xn;t;)t=or(t.nextSibling)}function Zs(){xn=Sn=null,ft=!1}function dp(t){Kn===null?Kn=[t]:Kn.push(t)}var q1=Bi.ReactCurrentBatchConfig;function To(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ie(309));var i=n.stateNode}if(!i)throw Error(ie(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ie(284));if(!n._owner)throw Error(ie(290,t))}return t}function sl(t,e){throw t=Object.prototype.toString.call(e),Error(ie(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Eg(t){var e=t._init;return e(t._payload)}function P_(t){function e(h,v){if(t){var y=h.deletions;y===null?(h.deletions=[v],h.flags|=16):y.push(v)}}function n(h,v){if(!t)return null;for(;v!==null;)e(h,v),v=v.sibling;return null}function i(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function r(h,v){return h=ur(h,v),h.index=0,h.sibling=null,h}function s(h,v,y){return h.index=y,t?(y=h.alternate,y!==null?(y=y.index,y<v?(h.flags|=2,v):y):(h.flags|=2,v)):(h.flags|=1048576,v)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,v,y,S){return v===null||v.tag!==6?(v=Qu(y,h.mode,S),v.return=h,v):(v=r(v,y),v.return=h,v)}function l(h,v,y,S){var C=y.type;return C===Es?u(h,v,y.props.children,S,y.key):v!==null&&(v.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===qi&&Eg(C)===v.type)?(S=r(v,y.props),S.ref=To(h,v,y),S.return=h,S):(S=$l(y.type,y.key,y.props,null,h.mode,S),S.ref=To(h,v,y),S.return=h,S)}function c(h,v,y,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==y.containerInfo||v.stateNode.implementation!==y.implementation?(v=Ju(y,h.mode,S),v.return=h,v):(v=r(v,y.children||[]),v.return=h,v)}function u(h,v,y,S,C){return v===null||v.tag!==7?(v=Yr(y,h.mode,S,C),v.return=h,v):(v=r(v,y),v.return=h,v)}function f(h,v,y){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Qu(""+v,h.mode,y),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case $a:return y=$l(v.type,v.key,v.props,null,h.mode,y),y.ref=To(h,null,v),y.return=h,y;case Ms:return v=Ju(v,h.mode,y),v.return=h,v;case qi:var S=v._init;return f(h,S(v._payload),y)}if(ko(v)||xo(v))return v=Yr(v,h.mode,y,null),v.return=h,v;sl(h,v)}return null}function d(h,v,y,S){var C=v!==null?v.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return C!==null?null:a(h,v,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case $a:return y.key===C?l(h,v,y,S):null;case Ms:return y.key===C?c(h,v,y,S):null;case qi:return C=y._init,d(h,v,C(y._payload),S)}if(ko(y)||xo(y))return C!==null?null:u(h,v,y,S,null);sl(h,y)}return null}function p(h,v,y,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(y)||null,a(v,h,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case $a:return h=h.get(S.key===null?y:S.key)||null,l(v,h,S,C);case Ms:return h=h.get(S.key===null?y:S.key)||null,c(v,h,S,C);case qi:var A=S._init;return p(h,v,y,A(S._payload),C)}if(ko(S)||xo(S))return h=h.get(y)||null,u(v,h,S,C,null);sl(v,S)}return null}function g(h,v,y,S){for(var C=null,A=null,T=v,P=v=0,V=null;T!==null&&P<y.length;P++){T.index>P?(V=T,T=null):V=T.sibling;var x=d(h,T,y[P],S);if(x===null){T===null&&(T=V);break}t&&T&&x.alternate===null&&e(h,T),v=s(x,v,P),A===null?C=x:A.sibling=x,A=x,T=V}if(P===y.length)return n(h,T),ft&&Dr(h,P),C;if(T===null){for(;P<y.length;P++)T=f(h,y[P],S),T!==null&&(v=s(T,v,P),A===null?C=T:A.sibling=T,A=T);return ft&&Dr(h,P),C}for(T=i(h,T);P<y.length;P++)V=p(T,h,P,y[P],S),V!==null&&(t&&V.alternate!==null&&T.delete(V.key===null?P:V.key),v=s(V,v,P),A===null?C=V:A.sibling=V,A=V);return t&&T.forEach(function(E){return e(h,E)}),ft&&Dr(h,P),C}function _(h,v,y,S){var C=xo(y);if(typeof C!="function")throw Error(ie(150));if(y=C.call(y),y==null)throw Error(ie(151));for(var A=C=null,T=v,P=v=0,V=null,x=y.next();T!==null&&!x.done;P++,x=y.next()){T.index>P?(V=T,T=null):V=T.sibling;var E=d(h,T,x.value,S);if(E===null){T===null&&(T=V);break}t&&T&&E.alternate===null&&e(h,T),v=s(E,v,P),A===null?C=E:A.sibling=E,A=E,T=V}if(x.done)return n(h,T),ft&&Dr(h,P),C;if(T===null){for(;!x.done;P++,x=y.next())x=f(h,x.value,S),x!==null&&(v=s(x,v,P),A===null?C=x:A.sibling=x,A=x);return ft&&Dr(h,P),C}for(T=i(h,T);!x.done;P++,x=y.next())x=p(T,h,P,x.value,S),x!==null&&(t&&x.alternate!==null&&T.delete(x.key===null?P:x.key),v=s(x,v,P),A===null?C=x:A.sibling=x,A=x);return t&&T.forEach(function(H){return e(h,H)}),ft&&Dr(h,P),C}function m(h,v,y,S){if(typeof y=="object"&&y!==null&&y.type===Es&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case $a:e:{for(var C=y.key,A=v;A!==null;){if(A.key===C){if(C=y.type,C===Es){if(A.tag===7){n(h,A.sibling),v=r(A,y.props.children),v.return=h,h=v;break e}}else if(A.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===qi&&Eg(C)===A.type){n(h,A.sibling),v=r(A,y.props),v.ref=To(h,A,y),v.return=h,h=v;break e}n(h,A);break}else e(h,A);A=A.sibling}y.type===Es?(v=Yr(y.props.children,h.mode,S,y.key),v.return=h,h=v):(S=$l(y.type,y.key,y.props,null,h.mode,S),S.ref=To(h,v,y),S.return=h,h=S)}return o(h);case Ms:e:{for(A=y.key;v!==null;){if(v.key===A)if(v.tag===4&&v.stateNode.containerInfo===y.containerInfo&&v.stateNode.implementation===y.implementation){n(h,v.sibling),v=r(v,y.children||[]),v.return=h,h=v;break e}else{n(h,v);break}else e(h,v);v=v.sibling}v=Ju(y,h.mode,S),v.return=h,h=v}return o(h);case qi:return A=y._init,m(h,v,A(y._payload),S)}if(ko(y))return g(h,v,y,S);if(xo(y))return _(h,v,y,S);sl(h,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,v!==null&&v.tag===6?(n(h,v.sibling),v=r(v,y),v.return=h,h=v):(n(h,v),v=Qu(y,h.mode,S),v.return=h,h=v),o(h)):n(h,v)}return m}var Qs=P_(!0),L_=P_(!1),xc=xr(null),Sc=null,Ls=null,hp=null;function pp(){hp=Ls=Sc=null}function mp(t){var e=xc.current;ut(xc),t._currentValue=e}function Md(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ws(t,e){Sc=t,hp=Ls=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(an=!0),t.firstContext=null)}function On(t){var e=t._currentValue;if(hp!==t)if(t={context:t,memoizedValue:e,next:null},Ls===null){if(Sc===null)throw Error(ie(308));Ls=t,Sc.dependencies={lanes:0,firstContext:t}}else Ls=Ls.next=t;return e}var Vr=null;function gp(t){Vr===null?Vr=[t]:Vr.push(t)}function D_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,gp(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ui(t,i)}function Ui(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Zi=!1;function vp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function N_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Di(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ar(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,We&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ui(t,n)}return r=i.interleaved,r===null?(e.next=e,gp(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ui(t,n)}function Hl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,np(t,n)}}function wg(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Mc(t,e,n,i){var r=t.updateQueue;Zi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,u=c=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,_=a;switch(d=e,p=n,_.tag){case 1:if(g=_.payload,typeof g=="function"){f=g.call(p,f,d);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=_.payload,d=typeof g=="function"?g.call(p,f,d):g,d==null)break e;f=gt({},f,d);break e;case 2:Zi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=f):u=u.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(u===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Qr|=o,t.lanes=o,t.memoizedState=f}}function Tg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var Na={},fi=xr(Na),va=xr(Na),ya=xr(Na);function Hr(t){if(t===Na)throw Error(ie(174));return t}function yp(t,e){switch(st(ya,e),st(va,t),st(fi,Na),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:nd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=nd(e,t)}ut(fi),st(fi,e)}function Js(){ut(fi),ut(va),ut(ya)}function I_(t){Hr(ya.current);var e=Hr(fi.current),n=nd(e,t.type);e!==n&&(st(va,t),st(fi,n))}function _p(t){va.current===t&&(ut(fi),ut(va))}var ht=xr(0);function Ec(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Xu=[];function xp(){for(var t=0;t<Xu.length;t++)Xu[t]._workInProgressVersionPrimary=null;Xu.length=0}var Gl=Bi.ReactCurrentDispatcher,Yu=Bi.ReactCurrentBatchConfig,Zr=0,mt=null,Lt=null,kt=null,wc=!1,Ko=!1,_a=0,Z1=0;function Ht(){throw Error(ie(321))}function Sp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ni(t[n],e[n]))return!1;return!0}function Mp(t,e,n,i,r,s){if(Zr=s,mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Gl.current=t===null||t.memoizedState===null?tw:nw,t=n(i,r),Ko){s=0;do{if(Ko=!1,_a=0,25<=s)throw Error(ie(301));s+=1,kt=Lt=null,e.updateQueue=null,Gl.current=iw,t=n(i,r)}while(Ko)}if(Gl.current=Tc,e=Lt!==null&&Lt.next!==null,Zr=0,kt=Lt=mt=null,wc=!1,e)throw Error(ie(300));return t}function Ep(){var t=_a!==0;return _a=0,t}function si(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return kt===null?mt.memoizedState=kt=t:kt=kt.next=t,kt}function Bn(){if(Lt===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=Lt.next;var e=kt===null?mt.memoizedState:kt.next;if(e!==null)kt=e,Lt=t;else{if(t===null)throw Error(ie(310));Lt=t,t={memoizedState:Lt.memoizedState,baseState:Lt.baseState,baseQueue:Lt.baseQueue,queue:Lt.queue,next:null},kt===null?mt.memoizedState=kt=t:kt=kt.next=t}return kt}function xa(t,e){return typeof e=="function"?e(t):e}function $u(t){var e=Bn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=Lt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Zr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,mt.lanes|=u,Qr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,ni(i,e.memoizedState)||(an=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,mt.lanes|=s,Qr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ku(t){var e=Bn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ni(s,e.memoizedState)||(an=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function U_(){}function k_(t,e){var n=mt,i=Bn(),r=e(),s=!ni(i.memoizedState,r);if(s&&(i.memoizedState=r,an=!0),i=i.queue,wp(B_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||kt!==null&&kt.memoizedState.tag&1){if(n.flags|=2048,Sa(9,O_.bind(null,n,i,r,e),void 0,null),Ft===null)throw Error(ie(349));Zr&30||F_(n,e,r)}return r}function F_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function O_(t,e,n,i){e.value=n,e.getSnapshot=i,z_(e)&&V_(t)}function B_(t,e,n){return n(function(){z_(e)&&V_(t)})}function z_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ni(t,n)}catch{return!0}}function V_(t){var e=Ui(t,1);e!==null&&ti(e,t,1,-1)}function Ag(t){var e=si();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:t},e.queue=t,t=t.dispatch=ew.bind(null,mt,t),[e.memoizedState,t]}function Sa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function H_(){return Bn().memoizedState}function Wl(t,e,n,i){var r=si();mt.flags|=t,r.memoizedState=Sa(1|e,n,void 0,i===void 0?null:i)}function Qc(t,e,n,i){var r=Bn();i=i===void 0?null:i;var s=void 0;if(Lt!==null){var o=Lt.memoizedState;if(s=o.destroy,i!==null&&Sp(i,o.deps)){r.memoizedState=Sa(e,n,s,i);return}}mt.flags|=t,r.memoizedState=Sa(1|e,n,s,i)}function Cg(t,e){return Wl(8390656,8,t,e)}function wp(t,e){return Qc(2048,8,t,e)}function G_(t,e){return Qc(4,2,t,e)}function W_(t,e){return Qc(4,4,t,e)}function j_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function X_(t,e,n){return n=n!=null?n.concat([t]):null,Qc(4,4,j_.bind(null,e,t),n)}function Tp(){}function Y_(t,e){var n=Bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Sp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function $_(t,e){var n=Bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Sp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function K_(t,e,n){return Zr&21?(ni(n,e)||(n=e_(),mt.lanes|=n,Qr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,an=!0),t.memoizedState=n)}function Q1(t,e){var n=et;et=n!==0&&4>n?n:4,t(!0);var i=Yu.transition;Yu.transition={};try{t(!1),e()}finally{et=n,Yu.transition=i}}function q_(){return Bn().memoizedState}function J1(t,e,n){var i=cr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Z_(t))Q_(e,n);else if(n=D_(t,e,n,i),n!==null){var r=Jt();ti(n,t,i,r),J_(n,e,i)}}function ew(t,e,n){var i=cr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Z_(t))Q_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ni(a,o)){var l=e.interleaved;l===null?(r.next=r,gp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=D_(t,e,r,i),n!==null&&(r=Jt(),ti(n,t,i,r),J_(n,e,i))}}function Z_(t){var e=t.alternate;return t===mt||e!==null&&e===mt}function Q_(t,e){Ko=wc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function J_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,np(t,n)}}var Tc={readContext:On,useCallback:Ht,useContext:Ht,useEffect:Ht,useImperativeHandle:Ht,useInsertionEffect:Ht,useLayoutEffect:Ht,useMemo:Ht,useReducer:Ht,useRef:Ht,useState:Ht,useDebugValue:Ht,useDeferredValue:Ht,useTransition:Ht,useMutableSource:Ht,useSyncExternalStore:Ht,useId:Ht,unstable_isNewReconciler:!1},tw={readContext:On,useCallback:function(t,e){return si().memoizedState=[t,e===void 0?null:e],t},useContext:On,useEffect:Cg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Wl(4194308,4,j_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Wl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Wl(4,2,t,e)},useMemo:function(t,e){var n=si();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=si();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=J1.bind(null,mt,t),[i.memoizedState,t]},useRef:function(t){var e=si();return t={current:t},e.memoizedState=t},useState:Ag,useDebugValue:Tp,useDeferredValue:function(t){return si().memoizedState=t},useTransition:function(){var t=Ag(!1),e=t[0];return t=Q1.bind(null,t[1]),si().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=mt,r=si();if(ft){if(n===void 0)throw Error(ie(407));n=n()}else{if(n=e(),Ft===null)throw Error(ie(349));Zr&30||F_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Cg(B_.bind(null,i,s,t),[t]),i.flags|=2048,Sa(9,O_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=si(),e=Ft.identifierPrefix;if(ft){var n=Ri,i=bi;n=(i&~(1<<32-ei(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=_a++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Z1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},nw={readContext:On,useCallback:Y_,useContext:On,useEffect:wp,useImperativeHandle:X_,useInsertionEffect:G_,useLayoutEffect:W_,useMemo:$_,useReducer:$u,useRef:H_,useState:function(){return $u(xa)},useDebugValue:Tp,useDeferredValue:function(t){var e=Bn();return K_(e,Lt.memoizedState,t)},useTransition:function(){var t=$u(xa)[0],e=Bn().memoizedState;return[t,e]},useMutableSource:U_,useSyncExternalStore:k_,useId:q_,unstable_isNewReconciler:!1},iw={readContext:On,useCallback:Y_,useContext:On,useEffect:wp,useImperativeHandle:X_,useInsertionEffect:G_,useLayoutEffect:W_,useMemo:$_,useReducer:Ku,useRef:H_,useState:function(){return Ku(xa)},useDebugValue:Tp,useDeferredValue:function(t){var e=Bn();return Lt===null?e.memoizedState=t:K_(e,Lt.memoizedState,t)},useTransition:function(){var t=Ku(xa)[0],e=Bn().memoizedState;return[t,e]},useMutableSource:U_,useSyncExternalStore:k_,useId:q_,unstable_isNewReconciler:!1};function Yn(t,e){if(t&&t.defaultProps){e=gt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ed(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:gt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Jc={isMounted:function(t){return(t=t._reactInternals)?is(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Jt(),r=cr(t),s=Di(i,r);s.payload=e,n!=null&&(s.callback=n),e=ar(t,s,r),e!==null&&(ti(e,t,r,i),Hl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Jt(),r=cr(t),s=Di(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ar(t,s,r),e!==null&&(ti(e,t,r,i),Hl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Jt(),i=cr(t),r=Di(n,i);r.tag=2,e!=null&&(r.callback=e),e=ar(t,r,i),e!==null&&(ti(e,t,i,n),Hl(e,t,i))}};function bg(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ha(n,i)||!ha(r,s):!0}function ex(t,e,n){var i=!1,r=pr,s=e.contextType;return typeof s=="object"&&s!==null?s=On(s):(r=cn(e)?Kr:$t.current,i=e.contextTypes,s=(i=i!=null)?qs(t,r):pr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Jc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Rg(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Jc.enqueueReplaceState(e,e.state,null)}function wd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},vp(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=On(s):(s=cn(e)?Kr:$t.current,r.context=qs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ed(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Jc.enqueueReplaceState(r,r.state,null),Mc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function eo(t,e){try{var n="",i=e;do n+=LE(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function qu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Td(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var rw=typeof WeakMap=="function"?WeakMap:Map;function tx(t,e,n){n=Di(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Cc||(Cc=!0,Ud=i),Td(t,e)},n}function nx(t,e,n){n=Di(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Td(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Td(t,e),typeof i!="function"&&(lr===null?lr=new Set([this]):lr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Pg(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new rw;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=yw.bind(null,t,e,n),e.then(t,t))}function Lg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Dg(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Di(-1,1),e.tag=2,ar(n,e,1))),n.lanes|=1),t)}var sw=Bi.ReactCurrentOwner,an=!1;function Zt(t,e,n,i){e.child=t===null?L_(e,null,n,i):Qs(e,t.child,n,i)}function Ng(t,e,n,i,r){n=n.render;var s=e.ref;return Ws(e,r),i=Mp(t,e,n,i,s,r),n=Ep(),t!==null&&!an?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ki(t,e,r)):(ft&&n&&up(e),e.flags|=1,Zt(t,e,i,r),e.child)}function Ig(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Np(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,ix(t,e,s,i,r)):(t=$l(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ha,n(o,i)&&t.ref===e.ref)return ki(t,e,r)}return e.flags|=1,t=ur(s,i),t.ref=e.ref,t.return=e,e.child=t}function ix(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ha(s,i)&&t.ref===e.ref)if(an=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(an=!0);else return e.lanes=t.lanes,ki(t,e,r)}return Ad(t,e,n,i,r)}function rx(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},st(Ns,_n),_n|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,st(Ns,_n),_n|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,st(Ns,_n),_n|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,st(Ns,_n),_n|=i;return Zt(t,e,r,n),e.child}function sx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ad(t,e,n,i,r){var s=cn(n)?Kr:$t.current;return s=qs(e,s),Ws(e,r),n=Mp(t,e,n,i,s,r),i=Ep(),t!==null&&!an?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ki(t,e,r)):(ft&&i&&up(e),e.flags|=1,Zt(t,e,n,r),e.child)}function Ug(t,e,n,i,r){if(cn(n)){var s=!0;vc(e)}else s=!1;if(Ws(e,r),e.stateNode===null)jl(t,e),ex(e,n,i),wd(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=On(c):(c=cn(n)?Kr:$t.current,c=qs(e,c));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Rg(e,o,i,c),Zi=!1;var d=e.memoizedState;o.state=d,Mc(e,i,o,r),l=e.memoizedState,a!==i||d!==l||ln.current||Zi?(typeof u=="function"&&(Ed(e,n,u,i),l=e.memoizedState),(a=Zi||bg(e,n,a,i,d,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,N_(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Yn(e.type,a),o.props=c,f=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=On(l):(l=cn(n)?Kr:$t.current,l=qs(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&Rg(e,o,i,l),Zi=!1,d=e.memoizedState,o.state=d,Mc(e,i,o,r);var g=e.memoizedState;a!==f||d!==g||ln.current||Zi?(typeof p=="function"&&(Ed(e,n,p,i),g=e.memoizedState),(c=Zi||bg(e,n,c,i,d,g,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Cd(t,e,n,i,s,r)}function Cd(t,e,n,i,r,s){sx(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&xg(e,n,!1),ki(t,e,s);i=e.stateNode,sw.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Qs(e,t.child,null,s),e.child=Qs(e,null,a,s)):Zt(t,e,a,s),e.memoizedState=i.state,r&&xg(e,n,!0),e.child}function ox(t){var e=t.stateNode;e.pendingContext?_g(t,e.pendingContext,e.pendingContext!==e.context):e.context&&_g(t,e.context,!1),yp(t,e.containerInfo)}function kg(t,e,n,i,r){return Zs(),dp(r),e.flags|=256,Zt(t,e,n,i),e.child}var bd={dehydrated:null,treeContext:null,retryLane:0};function Rd(t){return{baseLanes:t,cachePool:null,transitions:null}}function ax(t,e,n){var i=e.pendingProps,r=ht.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),st(ht,r&1),t===null)return Sd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=nu(o,i,0,null),t=Yr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Rd(n),e.memoizedState=bd,t):Ap(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return ow(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ur(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=ur(a,s):(s=Yr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Rd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=bd,i}return s=t.child,t=s.sibling,i=ur(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Ap(t,e){return e=nu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ol(t,e,n,i){return i!==null&&dp(i),Qs(e,t.child,null,n),t=Ap(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ow(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=qu(Error(ie(422))),ol(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=nu({mode:"visible",children:i.children},r,0,null),s=Yr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Qs(e,t.child,null,o),e.child.memoizedState=Rd(o),e.memoizedState=bd,s);if(!(e.mode&1))return ol(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ie(419)),i=qu(s,i,void 0),ol(t,e,o,i)}if(a=(o&t.childLanes)!==0,an||a){if(i=Ft,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ui(t,r),ti(i,t,r,-1))}return Dp(),i=qu(Error(ie(421))),ol(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=_w.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,xn=or(r.nextSibling),Sn=e,ft=!0,Kn=null,t!==null&&(Ln[Dn++]=bi,Ln[Dn++]=Ri,Ln[Dn++]=qr,bi=t.id,Ri=t.overflow,qr=e),e=Ap(e,i.children),e.flags|=4096,e)}function Fg(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Md(t.return,e,n)}function Zu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function lx(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Zt(t,e,i.children,n),i=ht.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Fg(t,n,e);else if(t.tag===19)Fg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(st(ht,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Ec(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Zu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Ec(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Zu(e,!0,n,null,s);break;case"together":Zu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function jl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ki(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Qr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ie(153));if(e.child!==null){for(t=e.child,n=ur(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ur(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function aw(t,e,n){switch(e.tag){case 3:ox(e),Zs();break;case 5:I_(e);break;case 1:cn(e.type)&&vc(e);break;case 4:yp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;st(xc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(st(ht,ht.current&1),e.flags|=128,null):n&e.child.childLanes?ax(t,e,n):(st(ht,ht.current&1),t=ki(t,e,n),t!==null?t.sibling:null);st(ht,ht.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return lx(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),st(ht,ht.current),i)break;return null;case 22:case 23:return e.lanes=0,rx(t,e,n)}return ki(t,e,n)}var cx,Pd,ux,fx;cx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Pd=function(){};ux=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Hr(fi.current);var s=null;switch(n){case"input":r=Qf(t,r),i=Qf(t,i),s=[];break;case"select":r=gt({},r,{value:void 0}),i=gt({},i,{value:void 0}),s=[];break;case"textarea":r=td(t,r),i=td(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=mc)}id(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(oa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(oa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&lt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};fx=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ao(t,e){if(!ft)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Gt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function lw(t,e,n){var i=e.pendingProps;switch(fp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Gt(e),null;case 1:return cn(e.type)&&gc(),Gt(e),null;case 3:return i=e.stateNode,Js(),ut(ln),ut($t),xp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(rl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Kn!==null&&(Od(Kn),Kn=null))),Pd(t,e),Gt(e),null;case 5:_p(e);var r=Hr(ya.current);if(n=e.type,t!==null&&e.stateNode!=null)ux(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return Gt(e),null}if(t=Hr(fi.current),rl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[li]=e,i[ga]=s,t=(e.mode&1)!==0,n){case"dialog":lt("cancel",i),lt("close",i);break;case"iframe":case"object":case"embed":lt("load",i);break;case"video":case"audio":for(r=0;r<Oo.length;r++)lt(Oo[r],i);break;case"source":lt("error",i);break;case"img":case"image":case"link":lt("error",i),lt("load",i);break;case"details":lt("toggle",i);break;case"input":Xm(i,s),lt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},lt("invalid",i);break;case"textarea":$m(i,s),lt("invalid",i)}id(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&il(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&il(i.textContent,a,t),r=["children",""+a]):oa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&lt("scroll",i)}switch(n){case"input":Ka(i),Ym(i,s,!0);break;case"textarea":Ka(i),Km(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=mc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=By(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[li]=e,t[ga]=i,cx(t,e,!1,!1),e.stateNode=t;e:{switch(o=rd(n,i),n){case"dialog":lt("cancel",t),lt("close",t),r=i;break;case"iframe":case"object":case"embed":lt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Oo.length;r++)lt(Oo[r],t);r=i;break;case"source":lt("error",t),r=i;break;case"img":case"image":case"link":lt("error",t),lt("load",t),r=i;break;case"details":lt("toggle",t),r=i;break;case"input":Xm(t,i),r=Qf(t,i),lt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=gt({},i,{value:void 0}),lt("invalid",t);break;case"textarea":$m(t,i),r=td(t,i),lt("invalid",t);break;default:r=i}id(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Hy(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&zy(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&aa(t,l):typeof l=="number"&&aa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(oa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&lt("scroll",t):l!=null&&qh(t,s,l,o))}switch(n){case"input":Ka(t),Ym(t,i,!1);break;case"textarea":Ka(t),Km(t);break;case"option":i.value!=null&&t.setAttribute("value",""+hr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?zs(t,!!i.multiple,s,!1):i.defaultValue!=null&&zs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=mc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Gt(e),null;case 6:if(t&&e.stateNode!=null)fx(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(n=Hr(ya.current),Hr(fi.current),rl(e)){if(i=e.stateNode,n=e.memoizedProps,i[li]=e,(s=i.nodeValue!==n)&&(t=Sn,t!==null))switch(t.tag){case 3:il(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&il(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[li]=e,e.stateNode=i}return Gt(e),null;case 13:if(ut(ht),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ft&&xn!==null&&e.mode&1&&!(e.flags&128))R_(),Zs(),e.flags|=98560,s=!1;else if(s=rl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ie(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ie(317));s[li]=e}else Zs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Gt(e),s=!1}else Kn!==null&&(Od(Kn),Kn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ht.current&1?Dt===0&&(Dt=3):Dp())),e.updateQueue!==null&&(e.flags|=4),Gt(e),null);case 4:return Js(),Pd(t,e),t===null&&pa(e.stateNode.containerInfo),Gt(e),null;case 10:return mp(e.type._context),Gt(e),null;case 17:return cn(e.type)&&gc(),Gt(e),null;case 19:if(ut(ht),s=e.memoizedState,s===null)return Gt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ao(s,!1);else{if(Dt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ec(t),o!==null){for(e.flags|=128,Ao(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return st(ht,ht.current&1|2),e.child}t=t.sibling}s.tail!==null&&Mt()>to&&(e.flags|=128,i=!0,Ao(s,!1),e.lanes=4194304)}else{if(!i)if(t=Ec(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ao(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ft)return Gt(e),null}else 2*Mt()-s.renderingStartTime>to&&n!==1073741824&&(e.flags|=128,i=!0,Ao(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Mt(),e.sibling=null,n=ht.current,st(ht,i?n&1|2:n&1),e):(Gt(e),null);case 22:case 23:return Lp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?_n&1073741824&&(Gt(e),e.subtreeFlags&6&&(e.flags|=8192)):Gt(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function cw(t,e){switch(fp(e),e.tag){case 1:return cn(e.type)&&gc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Js(),ut(ln),ut($t),xp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return _p(e),null;case 13:if(ut(ht),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));Zs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ut(ht),null;case 4:return Js(),null;case 10:return mp(e.type._context),null;case 22:case 23:return Lp(),null;case 24:return null;default:return null}}var al=!1,Yt=!1,uw=typeof WeakSet=="function"?WeakSet:Set,me=null;function Ds(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){xt(t,e,i)}else n.current=null}function Ld(t,e,n){try{n()}catch(i){xt(t,e,i)}}var Og=!1;function fw(t,e){if(pd=dc,t=g_(),cp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,f=t,d=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===t)break t;if(d===n&&++c===r&&(a=o),d===s&&++u===i&&(l=o),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(md={focusedElem:t,selectionRange:n},dc=!1,me=e;me!==null;)if(e=me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,me=t;else for(;me!==null;){e=me;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var _=g.memoizedProps,m=g.memoizedState,h=e.stateNode,v=h.getSnapshotBeforeUpdate(e.elementType===e.type?_:Yn(e.type,_),m);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(S){xt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,me=t;break}me=e.return}return g=Og,Og=!1,g}function qo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Ld(e,n,s)}r=r.next}while(r!==i)}}function eu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Dd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function dx(t){var e=t.alternate;e!==null&&(t.alternate=null,dx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[li],delete e[ga],delete e[yd],delete e[Y1],delete e[$1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function hx(t){return t.tag===5||t.tag===3||t.tag===4}function Bg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||hx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Nd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=mc));else if(i!==4&&(t=t.child,t!==null))for(Nd(t,e,n),t=t.sibling;t!==null;)Nd(t,e,n),t=t.sibling}function Id(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Id(t,e,n),t=t.sibling;t!==null;)Id(t,e,n),t=t.sibling}var Bt=null,$n=!1;function Vi(t,e,n){for(n=n.child;n!==null;)px(t,e,n),n=n.sibling}function px(t,e,n){if(ui&&typeof ui.onCommitFiberUnmount=="function")try{ui.onCommitFiberUnmount(Xc,n)}catch{}switch(n.tag){case 5:Yt||Ds(n,e);case 6:var i=Bt,r=$n;Bt=null,Vi(t,e,n),Bt=i,$n=r,Bt!==null&&($n?(t=Bt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Bt.removeChild(n.stateNode));break;case 18:Bt!==null&&($n?(t=Bt,n=n.stateNode,t.nodeType===8?Wu(t.parentNode,n):t.nodeType===1&&Wu(t,n),fa(t)):Wu(Bt,n.stateNode));break;case 4:i=Bt,r=$n,Bt=n.stateNode.containerInfo,$n=!0,Vi(t,e,n),Bt=i,$n=r;break;case 0:case 11:case 14:case 15:if(!Yt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ld(n,e,o),r=r.next}while(r!==i)}Vi(t,e,n);break;case 1:if(!Yt&&(Ds(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){xt(n,e,a)}Vi(t,e,n);break;case 21:Vi(t,e,n);break;case 22:n.mode&1?(Yt=(i=Yt)||n.memoizedState!==null,Vi(t,e,n),Yt=i):Vi(t,e,n);break;default:Vi(t,e,n)}}function zg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new uw),e.forEach(function(i){var r=xw.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Hn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Bt=a.stateNode,$n=!1;break e;case 3:Bt=a.stateNode.containerInfo,$n=!0;break e;case 4:Bt=a.stateNode.containerInfo,$n=!0;break e}a=a.return}if(Bt===null)throw Error(ie(160));px(s,o,r),Bt=null,$n=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){xt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)mx(e,t),e=e.sibling}function mx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Hn(e,t),ri(t),i&4){try{qo(3,t,t.return),eu(3,t)}catch(_){xt(t,t.return,_)}try{qo(5,t,t.return)}catch(_){xt(t,t.return,_)}}break;case 1:Hn(e,t),ri(t),i&512&&n!==null&&Ds(n,n.return);break;case 5:if(Hn(e,t),ri(t),i&512&&n!==null&&Ds(n,n.return),t.flags&32){var r=t.stateNode;try{aa(r,"")}catch(_){xt(t,t.return,_)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Fy(r,s),rd(a,o);var c=rd(a,s);for(o=0;o<l.length;o+=2){var u=l[o],f=l[o+1];u==="style"?Hy(r,f):u==="dangerouslySetInnerHTML"?zy(r,f):u==="children"?aa(r,f):qh(r,u,f,c)}switch(a){case"input":Jf(r,s);break;case"textarea":Oy(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?zs(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?zs(r,!!s.multiple,s.defaultValue,!0):zs(r,!!s.multiple,s.multiple?[]:"",!1))}r[ga]=s}catch(_){xt(t,t.return,_)}}break;case 6:if(Hn(e,t),ri(t),i&4){if(t.stateNode===null)throw Error(ie(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(_){xt(t,t.return,_)}}break;case 3:if(Hn(e,t),ri(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{fa(e.containerInfo)}catch(_){xt(t,t.return,_)}break;case 4:Hn(e,t),ri(t);break;case 13:Hn(e,t),ri(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Rp=Mt())),i&4&&zg(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Yt=(c=Yt)||u,Hn(e,t),Yt=c):Hn(e,t),ri(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(me=t,u=t.child;u!==null;){for(f=me=u;me!==null;){switch(d=me,p=d.child,d.tag){case 0:case 11:case 14:case 15:qo(4,d,d.return);break;case 1:Ds(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(_){xt(i,n,_)}}break;case 5:Ds(d,d.return);break;case 22:if(d.memoizedState!==null){Hg(f);continue}}p!==null?(p.return=d,me=p):Hg(f)}u=u.sibling}e:for(u=null,f=t;;){if(f.tag===5){if(u===null){u=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Vy("display",o))}catch(_){xt(t,t.return,_)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(_){xt(t,t.return,_)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Hn(e,t),ri(t),i&4&&zg(t);break;case 21:break;default:Hn(e,t),ri(t)}}function ri(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(hx(n)){var i=n;break e}n=n.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(aa(r,""),i.flags&=-33);var s=Bg(t);Id(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Bg(t);Nd(t,a,o);break;default:throw Error(ie(161))}}catch(l){xt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function dw(t,e,n){me=t,gx(t)}function gx(t,e,n){for(var i=(t.mode&1)!==0;me!==null;){var r=me,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||al;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Yt;a=al;var c=Yt;if(al=o,(Yt=l)&&!c)for(me=r;me!==null;)o=me,l=o.child,o.tag===22&&o.memoizedState!==null?Gg(r):l!==null?(l.return=o,me=l):Gg(r);for(;s!==null;)me=s,gx(s),s=s.sibling;me=r,al=a,Yt=c}Vg(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,me=s):Vg(t)}}function Vg(t){for(;me!==null;){var e=me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Yt||eu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Yt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Yn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Tg(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Tg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&fa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}Yt||e.flags&512&&Dd(e)}catch(d){xt(e,e.return,d)}}if(e===t){me=null;break}if(n=e.sibling,n!==null){n.return=e.return,me=n;break}me=e.return}}function Hg(t){for(;me!==null;){var e=me;if(e===t){me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,me=n;break}me=e.return}}function Gg(t){for(;me!==null;){var e=me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{eu(4,e)}catch(l){xt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){xt(e,r,l)}}var s=e.return;try{Dd(e)}catch(l){xt(e,s,l)}break;case 5:var o=e.return;try{Dd(e)}catch(l){xt(e,o,l)}}}catch(l){xt(e,e.return,l)}if(e===t){me=null;break}var a=e.sibling;if(a!==null){a.return=e.return,me=a;break}me=e.return}}var hw=Math.ceil,Ac=Bi.ReactCurrentDispatcher,Cp=Bi.ReactCurrentOwner,kn=Bi.ReactCurrentBatchConfig,We=0,Ft=null,bt=null,zt=0,_n=0,Ns=xr(0),Dt=0,Ma=null,Qr=0,tu=0,bp=0,Zo=null,on=null,Rp=0,to=1/0,Ti=null,Cc=!1,Ud=null,lr=null,ll=!1,nr=null,bc=0,Qo=0,kd=null,Xl=-1,Yl=0;function Jt(){return We&6?Mt():Xl!==-1?Xl:Xl=Mt()}function cr(t){return t.mode&1?We&2&&zt!==0?zt&-zt:q1.transition!==null?(Yl===0&&(Yl=e_()),Yl):(t=et,t!==0||(t=window.event,t=t===void 0?16:a_(t.type)),t):1}function ti(t,e,n,i){if(50<Qo)throw Qo=0,kd=null,Error(ie(185));Pa(t,n,i),(!(We&2)||t!==Ft)&&(t===Ft&&(!(We&2)&&(tu|=n),Dt===4&&Ji(t,zt)),un(t,i),n===1&&We===0&&!(e.mode&1)&&(to=Mt()+500,Zc&&Sr()))}function un(t,e){var n=t.callbackNode;qE(t,e);var i=fc(t,t===Ft?zt:0);if(i===0)n!==null&&Qm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Qm(n),e===1)t.tag===0?K1(Wg.bind(null,t)):A_(Wg.bind(null,t)),j1(function(){!(We&6)&&Sr()}),n=null;else{switch(t_(i)){case 1:n=tp;break;case 4:n=Qy;break;case 16:n=uc;break;case 536870912:n=Jy;break;default:n=uc}n=wx(n,vx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function vx(t,e){if(Xl=-1,Yl=0,We&6)throw Error(ie(327));var n=t.callbackNode;if(js()&&t.callbackNode!==n)return null;var i=fc(t,t===Ft?zt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Rc(t,i);else{e=i;var r=We;We|=2;var s=_x();(Ft!==t||zt!==e)&&(Ti=null,to=Mt()+500,Xr(t,e));do try{gw();break}catch(a){yx(t,a)}while(!0);pp(),Ac.current=s,We=r,bt!==null?e=0:(Ft=null,zt=0,e=Dt)}if(e!==0){if(e===2&&(r=cd(t),r!==0&&(i=r,e=Fd(t,r))),e===1)throw n=Ma,Xr(t,0),Ji(t,i),un(t,Mt()),n;if(e===6)Ji(t,i);else{if(r=t.current.alternate,!(i&30)&&!pw(r)&&(e=Rc(t,i),e===2&&(s=cd(t),s!==0&&(i=s,e=Fd(t,s))),e===1))throw n=Ma,Xr(t,0),Ji(t,i),un(t,Mt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:Nr(t,on,Ti);break;case 3:if(Ji(t,i),(i&130023424)===i&&(e=Rp+500-Mt(),10<e)){if(fc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Jt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=vd(Nr.bind(null,t,on,Ti),e);break}Nr(t,on,Ti);break;case 4:if(Ji(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ei(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Mt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*hw(i/1960))-i,10<i){t.timeoutHandle=vd(Nr.bind(null,t,on,Ti),i);break}Nr(t,on,Ti);break;case 5:Nr(t,on,Ti);break;default:throw Error(ie(329))}}}return un(t,Mt()),t.callbackNode===n?vx.bind(null,t):null}function Fd(t,e){var n=Zo;return t.current.memoizedState.isDehydrated&&(Xr(t,e).flags|=256),t=Rc(t,e),t!==2&&(e=on,on=n,e!==null&&Od(e)),t}function Od(t){on===null?on=t:on.push.apply(on,t)}function pw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ni(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ji(t,e){for(e&=~bp,e&=~tu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ei(e),i=1<<n;t[n]=-1,e&=~i}}function Wg(t){if(We&6)throw Error(ie(327));js();var e=fc(t,0);if(!(e&1))return un(t,Mt()),null;var n=Rc(t,e);if(t.tag!==0&&n===2){var i=cd(t);i!==0&&(e=i,n=Fd(t,i))}if(n===1)throw n=Ma,Xr(t,0),Ji(t,e),un(t,Mt()),n;if(n===6)throw Error(ie(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Nr(t,on,Ti),un(t,Mt()),null}function Pp(t,e){var n=We;We|=1;try{return t(e)}finally{We=n,We===0&&(to=Mt()+500,Zc&&Sr())}}function Jr(t){nr!==null&&nr.tag===0&&!(We&6)&&js();var e=We;We|=1;var n=kn.transition,i=et;try{if(kn.transition=null,et=1,t)return t()}finally{et=i,kn.transition=n,We=e,!(We&6)&&Sr()}}function Lp(){_n=Ns.current,ut(Ns)}function Xr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,W1(n)),bt!==null)for(n=bt.return;n!==null;){var i=n;switch(fp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&gc();break;case 3:Js(),ut(ln),ut($t),xp();break;case 5:_p(i);break;case 4:Js();break;case 13:ut(ht);break;case 19:ut(ht);break;case 10:mp(i.type._context);break;case 22:case 23:Lp()}n=n.return}if(Ft=t,bt=t=ur(t.current,null),zt=_n=e,Dt=0,Ma=null,bp=tu=Qr=0,on=Zo=null,Vr!==null){for(e=0;e<Vr.length;e++)if(n=Vr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Vr=null}return t}function yx(t,e){do{var n=bt;try{if(pp(),Gl.current=Tc,wc){for(var i=mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}wc=!1}if(Zr=0,kt=Lt=mt=null,Ko=!1,_a=0,Cp.current=null,n===null||n.return===null){Dt=1,Ma=e,bt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=zt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Lg(o);if(p!==null){p.flags&=-257,Dg(p,o,a,s,e),p.mode&1&&Pg(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var _=new Set;_.add(l),e.updateQueue=_}else g.add(l);break e}else{if(!(e&1)){Pg(s,c,e),Dp();break e}l=Error(ie(426))}}else if(ft&&a.mode&1){var m=Lg(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Dg(m,o,a,s,e),dp(eo(l,a));break e}}s=l=eo(l,a),Dt!==4&&(Dt=2),Zo===null?Zo=[s]:Zo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=tx(s,l,e);wg(s,h);break e;case 1:a=l;var v=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(lr===null||!lr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=nx(s,a,e);wg(s,S);break e}}s=s.return}while(s!==null)}Sx(n)}catch(C){e=C,bt===n&&n!==null&&(bt=n=n.return);continue}break}while(!0)}function _x(){var t=Ac.current;return Ac.current=Tc,t===null?Tc:t}function Dp(){(Dt===0||Dt===3||Dt===2)&&(Dt=4),Ft===null||!(Qr&268435455)&&!(tu&268435455)||Ji(Ft,zt)}function Rc(t,e){var n=We;We|=2;var i=_x();(Ft!==t||zt!==e)&&(Ti=null,Xr(t,e));do try{mw();break}catch(r){yx(t,r)}while(!0);if(pp(),We=n,Ac.current=i,bt!==null)throw Error(ie(261));return Ft=null,zt=0,Dt}function mw(){for(;bt!==null;)xx(bt)}function gw(){for(;bt!==null&&!VE();)xx(bt)}function xx(t){var e=Ex(t.alternate,t,_n);t.memoizedProps=t.pendingProps,e===null?Sx(t):bt=e,Cp.current=null}function Sx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=cw(n,e),n!==null){n.flags&=32767,bt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Dt=6,bt=null;return}}else if(n=lw(n,e,_n),n!==null){bt=n;return}if(e=e.sibling,e!==null){bt=e;return}bt=e=t}while(e!==null);Dt===0&&(Dt=5)}function Nr(t,e,n){var i=et,r=kn.transition;try{kn.transition=null,et=1,vw(t,e,n,i)}finally{kn.transition=r,et=i}return null}function vw(t,e,n,i){do js();while(nr!==null);if(We&6)throw Error(ie(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ie(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(ZE(t,s),t===Ft&&(bt=Ft=null,zt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ll||(ll=!0,wx(uc,function(){return js(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=kn.transition,kn.transition=null;var o=et;et=1;var a=We;We|=4,Cp.current=null,fw(t,n),mx(n,t),F1(md),dc=!!pd,md=pd=null,t.current=n,dw(n),HE(),We=a,et=o,kn.transition=s}else t.current=n;if(ll&&(ll=!1,nr=t,bc=r),s=t.pendingLanes,s===0&&(lr=null),jE(n.stateNode),un(t,Mt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Cc)throw Cc=!1,t=Ud,Ud=null,t;return bc&1&&t.tag!==0&&js(),s=t.pendingLanes,s&1?t===kd?Qo++:(Qo=0,kd=t):Qo=0,Sr(),null}function js(){if(nr!==null){var t=t_(bc),e=kn.transition,n=et;try{if(kn.transition=null,et=16>t?16:t,nr===null)var i=!1;else{if(t=nr,nr=null,bc=0,We&6)throw Error(ie(331));var r=We;for(We|=4,me=t.current;me!==null;){var s=me,o=s.child;if(me.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(me=c;me!==null;){var u=me;switch(u.tag){case 0:case 11:case 15:qo(8,u,s)}var f=u.child;if(f!==null)f.return=u,me=f;else for(;me!==null;){u=me;var d=u.sibling,p=u.return;if(dx(u),u===c){me=null;break}if(d!==null){d.return=p,me=d;break}me=p}}}var g=s.alternate;if(g!==null){var _=g.child;if(_!==null){g.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}me=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,me=o;else e:for(;me!==null;){if(s=me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:qo(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,me=h;break e}me=s.return}}var v=t.current;for(me=v;me!==null;){o=me;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,me=y;else e:for(o=v;me!==null;){if(a=me,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:eu(9,a)}}catch(C){xt(a,a.return,C)}if(a===o){me=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,me=S;break e}me=a.return}}if(We=r,Sr(),ui&&typeof ui.onPostCommitFiberRoot=="function")try{ui.onPostCommitFiberRoot(Xc,t)}catch{}i=!0}return i}finally{et=n,kn.transition=e}}return!1}function jg(t,e,n){e=eo(n,e),e=tx(t,e,1),t=ar(t,e,1),e=Jt(),t!==null&&(Pa(t,1,e),un(t,e))}function xt(t,e,n){if(t.tag===3)jg(t,t,n);else for(;e!==null;){if(e.tag===3){jg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(lr===null||!lr.has(i))){t=eo(n,t),t=nx(e,t,1),e=ar(e,t,1),t=Jt(),e!==null&&(Pa(e,1,t),un(e,t));break}}e=e.return}}function yw(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Jt(),t.pingedLanes|=t.suspendedLanes&n,Ft===t&&(zt&n)===n&&(Dt===4||Dt===3&&(zt&130023424)===zt&&500>Mt()-Rp?Xr(t,0):bp|=n),un(t,e)}function Mx(t,e){e===0&&(t.mode&1?(e=Qa,Qa<<=1,!(Qa&130023424)&&(Qa=4194304)):e=1);var n=Jt();t=Ui(t,e),t!==null&&(Pa(t,e,n),un(t,n))}function _w(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Mx(t,n)}function xw(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),Mx(t,n)}var Ex;Ex=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ln.current)an=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return an=!1,aw(t,e,n);an=!!(t.flags&131072)}else an=!1,ft&&e.flags&1048576&&C_(e,_c,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;jl(t,e),t=e.pendingProps;var r=qs(e,$t.current);Ws(e,n),r=Mp(null,e,i,t,r,n);var s=Ep();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,cn(i)?(s=!0,vc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,vp(e),r.updater=Jc,e.stateNode=r,r._reactInternals=e,wd(e,i,t,n),e=Cd(null,e,i,!0,s,n)):(e.tag=0,ft&&s&&up(e),Zt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(jl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Mw(i),t=Yn(i,t),r){case 0:e=Ad(null,e,i,t,n);break e;case 1:e=Ug(null,e,i,t,n);break e;case 11:e=Ng(null,e,i,t,n);break e;case 14:e=Ig(null,e,i,Yn(i.type,t),n);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),Ad(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),Ug(t,e,i,r,n);case 3:e:{if(ox(e),t===null)throw Error(ie(387));i=e.pendingProps,s=e.memoizedState,r=s.element,N_(t,e),Mc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=eo(Error(ie(423)),e),e=kg(t,e,i,n,r);break e}else if(i!==r){r=eo(Error(ie(424)),e),e=kg(t,e,i,n,r);break e}else for(xn=or(e.stateNode.containerInfo.firstChild),Sn=e,ft=!0,Kn=null,n=L_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Zs(),i===r){e=ki(t,e,n);break e}Zt(t,e,i,n)}e=e.child}return e;case 5:return I_(e),t===null&&Sd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,gd(i,r)?o=null:s!==null&&gd(i,s)&&(e.flags|=32),sx(t,e),Zt(t,e,o,n),e.child;case 6:return t===null&&Sd(e),null;case 13:return ax(t,e,n);case 4:return yp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Qs(e,null,i,n):Zt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),Ng(t,e,i,r,n);case 7:return Zt(t,e,e.pendingProps,n),e.child;case 8:return Zt(t,e,e.pendingProps.children,n),e.child;case 12:return Zt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,st(xc,i._currentValue),i._currentValue=o,s!==null)if(ni(s.value,o)){if(s.children===r.children&&!ln.current){e=ki(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Di(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Md(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ie(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Md(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Zt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ws(e,n),r=On(r),i=i(r),e.flags|=1,Zt(t,e,i,n),e.child;case 14:return i=e.type,r=Yn(i,e.pendingProps),r=Yn(i.type,r),Ig(t,e,i,r,n);case 15:return ix(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),jl(t,e),e.tag=1,cn(i)?(t=!0,vc(e)):t=!1,Ws(e,n),ex(e,i,r),wd(e,i,r,n),Cd(null,e,i,!0,t,n);case 19:return lx(t,e,n);case 22:return rx(t,e,n)}throw Error(ie(156,e.tag))};function wx(t,e){return Zy(t,e)}function Sw(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function In(t,e,n,i){return new Sw(t,e,n,i)}function Np(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Mw(t){if(typeof t=="function")return Np(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Qh)return 11;if(t===Jh)return 14}return 2}function ur(t,e){var n=t.alternate;return n===null?(n=In(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function $l(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Np(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Es:return Yr(n.children,r,s,e);case Zh:o=8,r|=8;break;case $f:return t=In(12,n,e,r|2),t.elementType=$f,t.lanes=s,t;case Kf:return t=In(13,n,e,r),t.elementType=Kf,t.lanes=s,t;case qf:return t=In(19,n,e,r),t.elementType=qf,t.lanes=s,t;case Iy:return nu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Dy:o=10;break e;case Ny:o=9;break e;case Qh:o=11;break e;case Jh:o=14;break e;case qi:o=16,i=null;break e}throw Error(ie(130,t==null?t:typeof t,""))}return e=In(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Yr(t,e,n,i){return t=In(7,t,i,e),t.lanes=n,t}function nu(t,e,n,i){return t=In(22,t,i,e),t.elementType=Iy,t.lanes=n,t.stateNode={isHidden:!1},t}function Qu(t,e,n){return t=In(6,t,null,e),t.lanes=n,t}function Ju(t,e,n){return e=In(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ew(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Nu(0),this.expirationTimes=Nu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Ip(t,e,n,i,r,s,o,a,l){return t=new Ew(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=In(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},vp(s),t}function ww(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ms,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Tx(t){if(!t)return pr;t=t._reactInternals;e:{if(is(t)!==t||t.tag!==1)throw Error(ie(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(cn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(t.tag===1){var n=t.type;if(cn(n))return T_(t,n,e)}return e}function Ax(t,e,n,i,r,s,o,a,l){return t=Ip(n,i,!0,t,r,s,o,a,l),t.context=Tx(null),n=t.current,i=Jt(),r=cr(n),s=Di(i,r),s.callback=e??null,ar(n,s,r),t.current.lanes=r,Pa(t,r,i),un(t,i),t}function iu(t,e,n,i){var r=e.current,s=Jt(),o=cr(r);return n=Tx(n),e.context===null?e.context=n:e.pendingContext=n,e=Di(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ar(r,e,o),t!==null&&(ti(t,r,o,s),Hl(t,r,o)),o}function Pc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Xg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Up(t,e){Xg(t,e),(t=t.alternate)&&Xg(t,e)}function Tw(){return null}var Cx=typeof reportError=="function"?reportError:function(t){console.error(t)};function kp(t){this._internalRoot=t}ru.prototype.render=kp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ie(409));iu(t,e,null,null)};ru.prototype.unmount=kp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Jr(function(){iu(null,t,null,null)}),e[Ii]=null}};function ru(t){this._internalRoot=t}ru.prototype.unstable_scheduleHydration=function(t){if(t){var e=r_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Qi.length&&e!==0&&e<Qi[n].priority;n++);Qi.splice(n,0,t),n===0&&o_(t)}};function Fp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function su(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Yg(){}function Aw(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Pc(o);s.call(c)}}var o=Ax(e,i,t,0,null,!1,!1,"",Yg);return t._reactRootContainer=o,t[Ii]=o.current,pa(t.nodeType===8?t.parentNode:t),Jr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Pc(l);a.call(c)}}var l=Ip(t,0,!1,null,null,!1,!1,"",Yg);return t._reactRootContainer=l,t[Ii]=l.current,pa(t.nodeType===8?t.parentNode:t),Jr(function(){iu(e,l,n,i)}),l}function ou(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Pc(o);a.call(l)}}iu(e,o,t,r)}else o=Aw(n,e,t,r,i);return Pc(o)}n_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Fo(e.pendingLanes);n!==0&&(np(e,n|1),un(e,Mt()),!(We&6)&&(to=Mt()+500,Sr()))}break;case 13:Jr(function(){var i=Ui(t,1);if(i!==null){var r=Jt();ti(i,t,1,r)}}),Up(t,1)}};ip=function(t){if(t.tag===13){var e=Ui(t,134217728);if(e!==null){var n=Jt();ti(e,t,134217728,n)}Up(t,134217728)}};i_=function(t){if(t.tag===13){var e=cr(t),n=Ui(t,e);if(n!==null){var i=Jt();ti(n,t,e,i)}Up(t,e)}};r_=function(){return et};s_=function(t,e){var n=et;try{return et=t,e()}finally{et=n}};od=function(t,e,n){switch(e){case"input":if(Jf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=qc(i);if(!r)throw Error(ie(90));ky(i),Jf(i,r)}}}break;case"textarea":Oy(t,n);break;case"select":e=n.value,e!=null&&zs(t,!!n.multiple,e,!1)}};jy=Pp;Xy=Jr;var Cw={usingClientEntryPoint:!1,Events:[Da,Cs,qc,Gy,Wy,Pp]},Co={findFiberByHostInstance:zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},bw={bundleType:Co.bundleType,version:Co.version,rendererPackageName:Co.rendererPackageName,rendererConfig:Co.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Bi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ky(t),t===null?null:t.stateNode},findFiberByHostInstance:Co.findFiberByHostInstance||Tw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cl.isDisabled&&cl.supportsFiber)try{Xc=cl.inject(bw),ui=cl}catch{}}Tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cw;Tn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fp(e))throw Error(ie(200));return ww(t,e,null,n)};Tn.createRoot=function(t,e){if(!Fp(t))throw Error(ie(299));var n=!1,i="",r=Cx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Ip(t,1,!1,null,null,n,!1,i,r),t[Ii]=e.current,pa(t.nodeType===8?t.parentNode:t),new kp(e)};Tn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ie(188)):(t=Object.keys(t).join(","),Error(ie(268,t)));return t=Ky(e),t=t===null?null:t.stateNode,t};Tn.flushSync=function(t){return Jr(t)};Tn.hydrate=function(t,e,n){if(!su(e))throw Error(ie(200));return ou(null,t,e,!0,n)};Tn.hydrateRoot=function(t,e,n){if(!Fp(t))throw Error(ie(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Cx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Ax(e,null,t,1,n??null,r,!1,s,o),t[Ii]=e.current,pa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new ru(e)};Tn.render=function(t,e,n){if(!su(e))throw Error(ie(200));return ou(null,t,e,!1,n)};Tn.unmountComponentAtNode=function(t){if(!su(t))throw Error(ie(40));return t._reactRootContainer?(Jr(function(){ou(null,null,t,!1,function(){t._reactRootContainer=null,t[Ii]=null})}),!0):!1};Tn.unstable_batchedUpdates=Pp;Tn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!su(n))throw Error(ie(200));if(t==null||t._reactInternals===void 0)throw Error(ie(38));return ou(t,e,n,!1,i)};Tn.version="18.3.1-next-f1338f8080-20240426";function bx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bx)}catch(t){console.error(t)}}bx(),by.exports=Tn;var Rw=by.exports,$g=Rw;Xf.createRoot=$g.createRoot,Xf.hydrateRoot=$g.hydrateRoot;const Op=ne.createContext({});function Ia(t){const e=ne.useRef(null);return e.current===null&&(e.current=t()),e.current}const au=ne.createContext(null),Ua=ne.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});class Pw extends ne.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(n&&e.isPresent&&!this.props.isPresent){const i=this.props.sizeRef.current;i.height=n.offsetHeight||0,i.width=n.offsetWidth||0,i.top=n.offsetTop,i.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function Lw({children:t,isPresent:e}){const n=ne.useId(),i=ne.useRef(null),r=ne.useRef({width:0,height:0,top:0,left:0}),{nonce:s}=ne.useContext(Ua);return ne.useInsertionEffect(()=>{const{width:o,height:a,top:l,left:c}=r.current;if(e||!i.current||!o||!a)return;i.current.dataset.motionPopId=n;const u=document.createElement("style");return s&&(u.nonce=s),document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[e]),b.jsx(Pw,{isPresent:e,childRef:i,sizeRef:r,children:ne.cloneElement(t,{ref:i})})}const Dw=({children:t,initial:e,isPresent:n,onExitComplete:i,custom:r,presenceAffectsLayout:s,mode:o})=>{const a=Ia(Nw),l=ne.useId(),c=ne.useCallback(f=>{a.set(f,!0);for(const d of a.values())if(!d)return;i&&i()},[a,i]),u=ne.useMemo(()=>({id:l,initial:e,isPresent:n,custom:r,onExitComplete:c,register:f=>(a.set(f,!1),()=>a.delete(f))}),s?[Math.random(),c]:[n,c]);return ne.useMemo(()=>{a.forEach((f,d)=>a.set(d,!1))},[n]),ne.useEffect(()=>{!n&&!a.size&&i&&i()},[n]),o==="popLayout"&&(t=b.jsx(Lw,{isPresent:n,children:t})),b.jsx(au.Provider,{value:u,children:t})};function Nw(){return new Map}function Rx(t=!0){const e=ne.useContext(au);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:i,register:r}=e,s=ne.useId();ne.useEffect(()=>{t&&r(s)},[t]);const o=ne.useCallback(()=>t&&i&&i(s),[s,i,t]);return!n&&i?[!1,o]:[!0]}const ul=t=>t.key||"";function Kg(t){const e=[];return ne.Children.forEach(t,n=>{ne.isValidElement(n)&&e.push(n)}),e}const Bp=typeof window<"u",lu=Bp?ne.useLayoutEffect:ne.useEffect,Iw=({children:t,custom:e,initial:n=!0,onExitComplete:i,presenceAffectsLayout:r=!0,mode:s="sync",propagate:o=!1})=>{const[a,l]=Rx(o),c=ne.useMemo(()=>Kg(t),[t]),u=o&&!a?[]:c.map(ul),f=ne.useRef(!0),d=ne.useRef(c),p=Ia(()=>new Map),[g,_]=ne.useState(c),[m,h]=ne.useState(c);lu(()=>{f.current=!1,d.current=c;for(let S=0;S<m.length;S++){const C=ul(m[S]);u.includes(C)?p.delete(C):p.get(C)!==!0&&p.set(C,!1)}},[m,u.length,u.join("-")]);const v=[];if(c!==g){let S=[...c];for(let C=0;C<m.length;C++){const A=m[C],T=ul(A);u.includes(T)||(S.splice(C,0,A),v.push(A))}s==="wait"&&v.length&&(S=v),h(Kg(S)),_(c);return}const{forceRender:y}=ne.useContext(Op);return b.jsx(b.Fragment,{children:m.map(S=>{const C=ul(S),A=o&&!a?!1:c===m||u.includes(C),T=()=>{if(p.has(C))p.set(C,!0);else return;let P=!0;p.forEach(V=>{V||(P=!1)}),P&&(y==null||y(),h(d.current),o&&(l==null||l()),i&&i())};return b.jsx(Dw,{isPresent:A,initial:!f.current||n?void 0:!1,custom:A?void 0:e,presenceAffectsLayout:r,mode:s,onExitComplete:A?void 0:T,children:S},C)})})},en=t=>t;let Uw=en,Px=en;function zp(t){let e;return()=>(e===void 0&&(e=t()),e)}const mr=(t,e,n)=>{const i=e-t;return i===0?1:(n-t)/i},di=t=>t*1e3,hi=t=>t/1e3,kw={useManualTiming:!1};function Fw(t){let e=new Set,n=new Set,i=!1,r=!1;const s=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function a(c){s.has(c)&&(l.schedule(c),t()),c(o)}const l={schedule:(c,u=!1,f=!1)=>{const p=f&&i?e:n;return u&&s.add(c),p.has(c)||p.add(c),c},cancel:c=>{n.delete(c),s.delete(c)},process:c=>{if(o=c,i){r=!0;return}i=!0,[e,n]=[n,e],e.forEach(a),e.clear(),i=!1,r&&(r=!1,l.process(c))}};return l}const fl=["read","resolveKeyframes","update","preRender","render","postRender"],Ow=40;function Lx(t,e){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=fl.reduce((h,v)=>(h[v]=Fw(s),h),{}),{read:a,resolveKeyframes:l,update:c,preRender:u,render:f,postRender:d}=o,p=()=>{const h=performance.now();n=!1,r.delta=i?1e3/60:Math.max(Math.min(h-r.timestamp,Ow),1),r.timestamp=h,r.isProcessing=!0,a.process(r),l.process(r),c.process(r),u.process(r),f.process(r),d.process(r),r.isProcessing=!1,n&&e&&(i=!1,t(p))},g=()=>{n=!0,i=!0,r.isProcessing||t(p)};return{schedule:fl.reduce((h,v)=>{const y=o[v];return h[v]=(S,C=!1,A=!1)=>(n||g(),y.schedule(S,C,A)),h},{}),cancel:h=>{for(let v=0;v<fl.length;v++)o[fl[v]].cancel(h)},state:r,steps:o}}const{schedule:Ke,cancel:gi,state:Pt,steps:ef}=Lx(typeof requestAnimationFrame<"u"?requestAnimationFrame:en,!0),Dx=ne.createContext({strict:!1}),qg={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},no={};for(const t in qg)no[t]={isEnabled:e=>qg[t].some(n=>!!e[n])};function Bw(t){for(const e in t)no[e]={...no[e],...t[e]}}const zw=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Lc(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||zw.has(t)}let Nx=t=>!Lc(t);function Vw(t){t&&(Nx=e=>e.startsWith("on")?!Lc(e):t(e))}try{Vw(require("@emotion/is-prop-valid").default)}catch{}function Hw(t,e,n){const i={};for(const r in t)r==="values"&&typeof t.values=="object"||(Nx(r)||n===!0&&Lc(r)||!e&&!Lc(r)||t.draggable&&r.startsWith("onDrag"))&&(i[r]=t[r]);return i}function Gw(t){if(typeof Proxy>"u")return t;const e=new Map,n=(...i)=>t(...i);return new Proxy(n,{get:(i,r)=>r==="create"?t:(e.has(r)||e.set(r,t(r)),e.get(r))})}const cu=ne.createContext({});function Ea(t){return typeof t=="string"||Array.isArray(t)}function uu(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const Vp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Hp=["initial",...Vp];function fu(t){return uu(t.animate)||Hp.some(e=>Ea(t[e]))}function Ix(t){return!!(fu(t)||t.variants)}function Ww(t,e){if(fu(t)){const{initial:n,animate:i}=t;return{initial:n===!1||Ea(n)?n:void 0,animate:Ea(i)?i:void 0}}return t.inherit!==!1?e:{}}function jw(t){const{initial:e,animate:n}=Ww(t,ne.useContext(cu));return ne.useMemo(()=>({initial:e,animate:n}),[Zg(e),Zg(n)])}function Zg(t){return Array.isArray(t)?t.join(" "):t}const Xw=Symbol.for("motionComponentSymbol");function Is(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function Yw(t,e,n){return ne.useCallback(i=>{i&&t.onMount&&t.onMount(i),e&&(i?e.mount(i):e.unmount()),n&&(typeof n=="function"?n(i):Is(n)&&(n.current=i))},[e])}const Gp=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),$w="framerAppearId",Ux="data-"+Gp($w),{schedule:Wp}=Lx(queueMicrotask,!1),kx=ne.createContext({});function Kw(t,e,n,i,r){var s,o;const{visualElement:a}=ne.useContext(cu),l=ne.useContext(Dx),c=ne.useContext(au),u=ne.useContext(Ua).reducedMotion,f=ne.useRef(null);i=i||l.renderer,!f.current&&i&&(f.current=i(t,{visualState:e,parent:a,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u}));const d=f.current,p=ne.useContext(kx);d&&!d.projection&&r&&(d.type==="html"||d.type==="svg")&&qw(f.current,n,r,p);const g=ne.useRef(!1);ne.useInsertionEffect(()=>{d&&g.current&&d.update(n,c)});const _=n[Ux],m=ne.useRef(!!_&&!(!((s=window.MotionHandoffIsComplete)===null||s===void 0)&&s.call(window,_))&&((o=window.MotionHasOptimisedAnimation)===null||o===void 0?void 0:o.call(window,_)));return lu(()=>{d&&(g.current=!0,window.MotionIsMounted=!0,d.updateFeatures(),Wp.render(d.render),m.current&&d.animationState&&d.animationState.animateChanges())}),ne.useEffect(()=>{d&&(!m.current&&d.animationState&&d.animationState.animateChanges(),m.current&&(queueMicrotask(()=>{var h;(h=window.MotionHandoffMarkAsComplete)===null||h===void 0||h.call(window,_)}),m.current=!1))}),d}function qw(t,e,n,i){const{layoutId:r,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:c}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:Fx(t.parent)),t.projection.setOptions({layoutId:r,layout:s,alwaysMeasureLayout:!!o||a&&Is(a),visualElement:t,animationType:typeof s=="string"?s:"both",initialPromotionConfig:i,layoutScroll:l,layoutRoot:c})}function Fx(t){if(t)return t.options.allowProjection!==!1?t.projection:Fx(t.parent)}function Zw({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:i,Component:r}){var s,o;t&&Bw(t);function a(c,u){let f;const d={...ne.useContext(Ua),...c,layoutId:Qw(c)},{isStatic:p}=d,g=jw(c),_=i(c,p);if(!p&&Bp){Jw();const m=eT(d);f=m.MeasureLayout,g.visualElement=Kw(r,_,d,e,m.ProjectionNode)}return b.jsxs(cu.Provider,{value:g,children:[f&&g.visualElement?b.jsx(f,{visualElement:g.visualElement,...d}):null,n(r,c,Yw(_,g.visualElement,u),_,p,g.visualElement)]})}a.displayName=`motion.${typeof r=="string"?r:`create(${(o=(s=r.displayName)!==null&&s!==void 0?s:r.name)!==null&&o!==void 0?o:""})`}`;const l=ne.forwardRef(a);return l[Xw]=r,l}function Qw({layoutId:t}){const e=ne.useContext(Op).id;return e&&t!==void 0?e+"-"+t:t}function Jw(t,e){ne.useContext(Dx).strict}function eT(t){const{drag:e,layout:n}=no;if(!e&&!n)return{};const i={...e,...n};return{MeasureLayout:e!=null&&e.isEnabled(t)||n!=null&&n.isEnabled(t)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}const tT=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function jp(t){return typeof t!="string"||t.includes("-")?!1:!!(tT.indexOf(t)>-1||/[A-Z]/u.test(t))}function Qg(t){const e=[{},{}];return t==null||t.values.forEach((n,i)=>{e[0][i]=n.get(),e[1][i]=n.getVelocity()}),e}function Xp(t,e,n,i){if(typeof e=="function"){const[r,s]=Qg(i);e=e(n!==void 0?n:t.custom,r,s)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[r,s]=Qg(i);e=e(n!==void 0?n:t.custom,r,s)}return e}const Bd=t=>Array.isArray(t),nT=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),iT=t=>Bd(t)?t[t.length-1]||0:t,Rt=t=>!!(t&&t.getVelocity);function Kl(t){const e=Rt(t)?t.get():t;return nT(e)?e.toValue():e}function rT({scrapeMotionValuesFromProps:t,createRenderState:e,onUpdate:n},i,r,s){const o={latestValues:sT(i,r,s,t),renderState:e()};return n&&(o.onMount=a=>n({props:i,current:a,...o}),o.onUpdate=a=>n(a)),o}const Ox=t=>(e,n)=>{const i=ne.useContext(cu),r=ne.useContext(au),s=()=>rT(t,e,i,r);return n?s():Ia(s)};function sT(t,e,n,i){const r={},s=i(t,{});for(const d in s)r[d]=Kl(s[d]);let{initial:o,animate:a}=t;const l=fu(t),c=Ix(t);e&&c&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let u=n?n.initial===!1:!1;u=u||o===!1;const f=u?a:o;if(f&&typeof f!="boolean"&&!uu(f)){const d=Array.isArray(f)?f:[f];for(let p=0;p<d.length;p++){const g=Xp(t,d[p]);if(g){const{transitionEnd:_,transition:m,...h}=g;for(const v in h){let y=h[v];if(Array.isArray(y)){const S=u?y.length-1:0;y=y[S]}y!==null&&(r[v]=y)}for(const v in _)r[v]=_[v]}}}return r}const mo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],rs=new Set(mo),Bx=t=>e=>typeof e=="string"&&e.startsWith(t),zx=Bx("--"),oT=Bx("var(--"),Yp=t=>oT(t)?aT.test(t.split("/*")[0].trim()):!1,aT=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Vx=(t,e)=>e&&typeof t=="number"?e.transform(t):t,vi=(t,e,n)=>n>e?e:n<t?t:n,go={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},wa={...go,transform:t=>vi(0,1,t)},dl={...go,default:1},ka=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),$i=ka("deg"),pi=ka("%"),Ae=ka("px"),lT=ka("vh"),cT=ka("vw"),Jg={...pi,parse:t=>pi.parse(t)/100,transform:t=>pi.transform(t*100)},uT={borderWidth:Ae,borderTopWidth:Ae,borderRightWidth:Ae,borderBottomWidth:Ae,borderLeftWidth:Ae,borderRadius:Ae,radius:Ae,borderTopLeftRadius:Ae,borderTopRightRadius:Ae,borderBottomRightRadius:Ae,borderBottomLeftRadius:Ae,width:Ae,maxWidth:Ae,height:Ae,maxHeight:Ae,top:Ae,right:Ae,bottom:Ae,left:Ae,padding:Ae,paddingTop:Ae,paddingRight:Ae,paddingBottom:Ae,paddingLeft:Ae,margin:Ae,marginTop:Ae,marginRight:Ae,marginBottom:Ae,marginLeft:Ae,backgroundPositionX:Ae,backgroundPositionY:Ae},fT={rotate:$i,rotateX:$i,rotateY:$i,rotateZ:$i,scale:dl,scaleX:dl,scaleY:dl,scaleZ:dl,skew:$i,skewX:$i,skewY:$i,distance:Ae,translateX:Ae,translateY:Ae,translateZ:Ae,x:Ae,y:Ae,z:Ae,perspective:Ae,transformPerspective:Ae,opacity:wa,originX:Jg,originY:Jg,originZ:Ae},ev={...go,transform:Math.round},$p={...uT,...fT,zIndex:ev,size:Ae,fillOpacity:wa,strokeOpacity:wa,numOctaves:ev},dT={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},hT=mo.length;function pT(t,e,n){let i="",r=!0;for(let s=0;s<hT;s++){const o=mo[s],a=t[o];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(o.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||n){const c=Vx(a,$p[o]);if(!l){r=!1;const u=dT[o]||o;i+=`${u}(${c}) `}n&&(e[o]=c)}}return i=i.trim(),n?i=n(e,r?"":i):r&&(i="none"),i}function Kp(t,e,n){const{style:i,vars:r,transformOrigin:s}=t;let o=!1,a=!1;for(const l in e){const c=e[l];if(rs.has(l)){o=!0;continue}else if(zx(l)){r[l]=c;continue}else{const u=Vx(c,$p[l]);l.startsWith("origin")?(a=!0,s[l]=u):i[l]=u}}if(e.transform||(o||n?i.transform=pT(e,t.transform,n):i.transform&&(i.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:u=0}=s;i.transformOrigin=`${l} ${c} ${u}`}}const mT={offset:"stroke-dashoffset",array:"stroke-dasharray"},gT={offset:"strokeDashoffset",array:"strokeDasharray"};function vT(t,e,n=1,i=0,r=!0){t.pathLength=1;const s=r?mT:gT;t[s.offset]=Ae.transform(-i);const o=Ae.transform(e),a=Ae.transform(n);t[s.array]=`${o} ${a}`}function tv(t,e,n){return typeof t=="string"?t:Ae.transform(e+n*t)}function yT(t,e,n){const i=tv(e,t.x,t.width),r=tv(n,t.y,t.height);return`${i} ${r}`}function qp(t,{attrX:e,attrY:n,attrScale:i,originX:r,originY:s,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...c},u,f){if(Kp(t,c,f),u){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:d,style:p,dimensions:g}=t;d.transform&&(g&&(p.transform=d.transform),delete d.transform),g&&(r!==void 0||s!==void 0||p.transform)&&(p.transformOrigin=yT(g,r!==void 0?r:.5,s!==void 0?s:.5)),e!==void 0&&(d.x=e),n!==void 0&&(d.y=n),i!==void 0&&(d.scale=i),o!==void 0&&vT(d,o,a,l,!1)}const Zp=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),Hx=()=>({...Zp(),attrs:{}}),Qp=t=>typeof t=="string"&&t.toLowerCase()==="svg";function Gx(t,{style:e,vars:n},i,r){Object.assign(t.style,e,r&&r.getProjectionStyles(i));for(const s in n)t.style.setProperty(s,n[s])}const Wx=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function jx(t,e,n,i){Gx(t,e,void 0,i);for(const r in e.attrs)t.setAttribute(Wx.has(r)?r:Gp(r),e.attrs[r])}const Dc={};function _T(t){Object.assign(Dc,t)}function Xx(t,{layout:e,layoutId:n}){return rs.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!Dc[t]||t==="opacity")}function Jp(t,e,n){var i;const{style:r}=t,s={};for(const o in r)(Rt(r[o])||e.style&&Rt(e.style[o])||Xx(o,t)||((i=n==null?void 0:n.getValue(o))===null||i===void 0?void 0:i.liveStyle)!==void 0)&&(s[o]=r[o]);return s}function Yx(t,e,n){const i=Jp(t,e,n);for(const r in t)if(Rt(t[r])||Rt(e[r])){const s=mo.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;i[s]=t[r]}return i}function xT(t,e){try{e.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{e.dimensions={x:0,y:0,width:0,height:0}}}const nv=["x","y","width","height","cx","cy","r"],ST={useVisualState:Ox({scrapeMotionValuesFromProps:Yx,createRenderState:Hx,onUpdate:({props:t,prevProps:e,current:n,renderState:i,latestValues:r})=>{if(!n)return;let s=!!t.drag;if(!s){for(const a in r)if(rs.has(a)){s=!0;break}}if(!s)return;let o=!e;if(e)for(let a=0;a<nv.length;a++){const l=nv[a];t[l]!==e[l]&&(o=!0)}o&&Ke.read(()=>{xT(n,i),Ke.render(()=>{qp(i,r,Qp(n.tagName),t.transformTemplate),jx(n,i)})})}})},MT={useVisualState:Ox({scrapeMotionValuesFromProps:Jp,createRenderState:Zp})};function $x(t,e,n){for(const i in e)!Rt(e[i])&&!Xx(i,n)&&(t[i]=e[i])}function ET({transformTemplate:t},e){return ne.useMemo(()=>{const n=Zp();return Kp(n,e,t),Object.assign({},n.vars,n.style)},[e])}function wT(t,e){const n=t.style||{},i={};return $x(i,n,t),Object.assign(i,ET(t,e)),i}function TT(t,e){const n={},i=wT(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=i,n}function AT(t,e,n,i){const r=ne.useMemo(()=>{const s=Hx();return qp(s,e,Qp(i),t.transformTemplate),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};$x(s,t.style,t),r.style={...s,...r.style}}return r}function CT(t=!1){return(n,i,r,{latestValues:s},o)=>{const l=(jp(n)?AT:TT)(i,s,o,n),c=Hw(i,typeof n=="string",t),u=n!==ne.Fragment?{...c,...l,ref:r}:{},{children:f}=i,d=ne.useMemo(()=>Rt(f)?f.get():f,[f]);return ne.createElement(n,{...u,children:d})}}function bT(t,e){return function(i,{forwardMotionProps:r}={forwardMotionProps:!1}){const o={...jp(i)?ST:MT,preloadedFeatures:t,useRender:CT(r),createVisualElement:e,Component:i};return Zw(o)}}function Kx(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}function du(t,e,n){const i=t.getProps();return Xp(i,e,n!==void 0?n:i.custom,t)}const qx=zp(()=>window.ScrollTimeline!==void 0);class RT{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>"finished"in e?e.finished:e))}getAll(e){return this.animations[0][e]}setAll(e,n){for(let i=0;i<this.animations.length;i++)this.animations[i][e]=n}attachTimeline(e,n){const i=this.animations.map(r=>{if(qx()&&r.attachTimeline)return r.attachTimeline(e);if(typeof n=="function")return n(r)});return()=>{i.forEach((r,s)=>{r&&r(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let n=0;n<this.animations.length;n++)e=Math.max(e,this.animations[n].duration);return e}runAll(e){this.animations.forEach(n=>n[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class Zx extends RT{then(e,n){return Promise.all(this.animations).then(e).catch(n)}}function em(t,e){return t?t[e]||t.default||t:void 0}const Nc=2e4;function tm(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<Nc;)e+=n,i=t.next(e);return e>=Nc?1/0:e}function PT(t,e=100,n){const i=n({...t,keyframes:[0,e]}),r=Math.min(tm(i),Nc);return{type:"keyframes",ease:s=>i.next(r*s).value/e,duration:hi(r)}}function hu(t){return typeof t=="function"}function iv(t,e){t.timeline=e,t.onfinish=null}const nm=t=>Array.isArray(t)&&typeof t[0]=="number",LT={linearEasing:void 0};function DT(t,e){const n=zp(t);return()=>{var i;return(i=LT[e])!==null&&i!==void 0?i:n()}}const Ic=DT(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Qx=(t,e,n=10)=>{let i="";const r=Math.max(Math.round(e/n),2);for(let s=0;s<r;s++)i+=t(mr(0,r-1,s))+", ";return`linear(${i.substring(0,i.length-2)})`};function Jx(t){return!!(typeof t=="function"&&Ic()||!t||typeof t=="string"&&(t in zd||Ic())||nm(t)||Array.isArray(t)&&t.every(Jx))}const Bo=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,zd={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Bo([0,.65,.55,1]),circOut:Bo([.55,0,1,.45]),backIn:Bo([.31,.01,.66,-.59]),backOut:Bo([.33,1.53,.69,.99])};function eS(t,e){if(t)return typeof t=="function"&&Ic()?Qx(t,e):nm(t)?Bo(t):Array.isArray(t)?t.map(n=>eS(n,e)||zd.easeOut):zd[t]}const Xn={x:!1,y:!1};function tS(){return Xn.x||Xn.y}function pu(t,e,n){var i;if(t instanceof Element)return[t];if(typeof t=="string"){let r=document;const s=(i=n==null?void 0:n[t])!==null&&i!==void 0?i:r.querySelectorAll(t);return s?Array.from(s):[]}return Array.from(t)}function nS(t,e){const n=pu(t),i=new AbortController,r={passive:!0,...e,signal:i.signal};return[n,r,()=>i.abort()]}function rv(t){return e=>{e.pointerType==="touch"||tS()||t(e)}}function NT(t,e,n={}){const[i,r,s]=nS(t,n),o=rv(a=>{const{target:l}=a,c=e(a);if(typeof c!="function"||!l)return;const u=rv(f=>{c(f),l.removeEventListener("pointerleave",u)});l.addEventListener("pointerleave",u,r)});return i.forEach(a=>{a.addEventListener("pointerenter",o,r)}),s}const iS=(t,e)=>e?t===e?!0:iS(t,e.parentElement):!1,im=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,IT=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function UT(t){return IT.has(t.tagName)||t.tabIndex!==-1}const zo=new WeakSet;function sv(t){return e=>{e.key==="Enter"&&t(e)}}function tf(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const kT=(t,e)=>{const n=t.currentTarget;if(!n)return;const i=sv(()=>{if(zo.has(n))return;tf(n,"down");const r=sv(()=>{tf(n,"up")}),s=()=>tf(n,"cancel");n.addEventListener("keyup",r,e),n.addEventListener("blur",s,e)});n.addEventListener("keydown",i,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",i),e)};function ov(t){return im(t)&&!tS()}function FT(t,e,n={}){const[i,r,s]=nS(t,n),o=a=>{const l=a.currentTarget;if(!ov(a)||zo.has(l))return;zo.add(l);const c=e(a),u=(p,g)=>{window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",d),!(!ov(p)||!zo.has(l))&&(zo.delete(l),typeof c=="function"&&c(p,{success:g}))},f=p=>{u(p,n.useGlobalTarget||iS(l,p.target))},d=p=>{u(p,!1)};window.addEventListener("pointerup",f,r),window.addEventListener("pointercancel",d,r)};return i.forEach(a=>{!UT(a)&&a.getAttribute("tabindex")===null&&(a.tabIndex=0),(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,r),a.addEventListener("focus",c=>kT(c,r),r)}),s}function OT(t){return t==="x"||t==="y"?Xn[t]?null:(Xn[t]=!0,()=>{Xn[t]=!1}):Xn.x||Xn.y?null:(Xn.x=Xn.y=!0,()=>{Xn.x=Xn.y=!1})}const rS=new Set(["width","height","top","left","right","bottom",...mo]);let ql;function BT(){ql=void 0}const mi={now:()=>(ql===void 0&&mi.set(Pt.isProcessing||kw.useManualTiming?Pt.timestamp:performance.now()),ql),set:t=>{ql=t,queueMicrotask(BT)}};function rm(t,e){t.indexOf(e)===-1&&t.push(e)}function mu(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class sm{constructor(){this.subscriptions=[]}add(e){return rm(this.subscriptions,e),()=>mu(this.subscriptions,e)}notify(e,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,i);else for(let s=0;s<r;s++){const o=this.subscriptions[s];o&&o(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function om(t,e){return e?t*(1e3/e):0}const av=30,zT=t=>!isNaN(parseFloat(t));class VT{constructor(e,n={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(i,r=!0)=>{const s=mi.now();this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),r&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=mi.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=zT(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new sm);const i=this.events[e].add(n);return e==="change"?()=>{i(),Ke.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=mi.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>av)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,av);return om(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ci(t,e){return new VT(t,e)}function HT(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,ci(n))}function GT(t,e){const n=du(t,e);let{transitionEnd:i={},transition:r={},...s}=n||{};s={...s,...i};for(const o in s){const a=iT(s[o]);HT(t,o,a)}}function WT(t){return!!(Rt(t)&&t.add)}function Vd(t,e){const n=t.getValue("willChange");if(WT(n))return n.add(e)}function sS(t){return t.props[Ux]}const oS=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,jT=1e-7,XT=12;function YT(t,e,n,i,r){let s,o,a=0;do o=e+(n-e)/2,s=oS(o,i,r)-t,s>0?n=o:e=o;while(Math.abs(s)>jT&&++a<XT);return o}function Fa(t,e,n,i){if(t===e&&n===i)return en;const r=s=>YT(s,0,1,t,n);return s=>s===0||s===1?s:oS(r(s),e,i)}const aS=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,lS=t=>e=>1-t(1-e),cS=Fa(.33,1.53,.69,.99),am=lS(cS),uS=aS(am),fS=t=>(t*=2)<1?.5*am(t):.5*(2-Math.pow(2,-10*(t-1))),lm=t=>1-Math.sin(Math.acos(t)),dS=lS(lm),hS=aS(lm),pS=t=>/^0[^.\s]+$/u.test(t);function $T(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||pS(t):!0}const Jo=t=>Math.round(t*1e5)/1e5,cm=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function KT(t){return t==null}const qT=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,um=(t,e)=>n=>!!(typeof n=="string"&&qT.test(n)&&n.startsWith(t)||e&&!KT(n)&&Object.prototype.hasOwnProperty.call(n,e)),mS=(t,e,n)=>i=>{if(typeof i!="string")return i;const[r,s,o,a]=i.match(cm);return{[t]:parseFloat(r),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},ZT=t=>vi(0,255,t),nf={...go,transform:t=>Math.round(ZT(t))},Gr={test:um("rgb","red"),parse:mS("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+nf.transform(t)+", "+nf.transform(e)+", "+nf.transform(n)+", "+Jo(wa.transform(i))+")"};function QT(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const Hd={test:um("#"),parse:QT,transform:Gr.transform},Us={test:um("hsl","hue"),parse:mS("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+pi.transform(Jo(e))+", "+pi.transform(Jo(n))+", "+Jo(wa.transform(i))+")"},Xt={test:t=>Gr.test(t)||Hd.test(t)||Us.test(t),parse:t=>Gr.test(t)?Gr.parse(t):Us.test(t)?Us.parse(t):Hd.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?Gr.transform(t):Us.transform(t)},JT=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function eA(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(cm))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(JT))===null||n===void 0?void 0:n.length)||0)>0}const gS="number",vS="color",tA="var",nA="var(",lv="${}",iA=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ta(t){const e=t.toString(),n=[],i={color:[],number:[],var:[]},r=[];let s=0;const a=e.replace(iA,l=>(Xt.test(l)?(i.color.push(s),r.push(vS),n.push(Xt.parse(l))):l.startsWith(nA)?(i.var.push(s),r.push(tA),n.push(l)):(i.number.push(s),r.push(gS),n.push(parseFloat(l))),++s,lv)).split(lv);return{values:n,split:a,indexes:i,types:r}}function yS(t){return Ta(t).values}function _S(t){const{split:e,types:n}=Ta(t),i=e.length;return r=>{let s="";for(let o=0;o<i;o++)if(s+=e[o],r[o]!==void 0){const a=n[o];a===gS?s+=Jo(r[o]):a===vS?s+=Xt.transform(r[o]):s+=r[o]}return s}}const rA=t=>typeof t=="number"?0:t;function sA(t){const e=yS(t);return _S(t)(e.map(rA))}const gr={test:eA,parse:yS,createTransformer:_S,getAnimatableNone:sA},oA=new Set(["brightness","contrast","saturate","opacity"]);function aA(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(cm)||[];if(!i)return t;const r=n.replace(i,"");let s=oA.has(e)?1:0;return i!==n&&(s*=100),e+"("+s+r+")"}const lA=/\b([a-z-]*)\(.*?\)/gu,Gd={...gr,getAnimatableNone:t=>{const e=t.match(lA);return e?e.map(aA).join(" "):t}},cA={...$p,color:Xt,backgroundColor:Xt,outlineColor:Xt,fill:Xt,stroke:Xt,borderColor:Xt,borderTopColor:Xt,borderRightColor:Xt,borderBottomColor:Xt,borderLeftColor:Xt,filter:Gd,WebkitFilter:Gd},fm=t=>cA[t];function xS(t,e){let n=fm(t);return n!==Gd&&(n=gr),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const uA=new Set(["auto","none","0"]);function fA(t,e,n){let i=0,r;for(;i<t.length&&!r;){const s=t[i];typeof s=="string"&&!uA.has(s)&&Ta(s).values.length&&(r=t[i]),i++}if(r&&n)for(const s of e)t[s]=xS(n,r)}const cv=t=>t===go||t===Ae,uv=(t,e)=>parseFloat(t.split(", ")[e]),fv=(t,e)=>(n,{transform:i})=>{if(i==="none"||!i)return 0;const r=i.match(/^matrix3d\((.+)\)$/u);if(r)return uv(r[1],e);{const s=i.match(/^matrix\((.+)\)$/u);return s?uv(s[1],t):0}},dA=new Set(["x","y","z"]),hA=mo.filter(t=>!dA.has(t));function pA(t){const e=[];return hA.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e}const io={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:fv(4,13),y:fv(5,14)};io.translateX=io.x;io.translateY=io.y;const $r=new Set;let Wd=!1,jd=!1;function SS(){if(jd){const t=Array.from($r).filter(i=>i.needsMeasurement),e=new Set(t.map(i=>i.element)),n=new Map;e.forEach(i=>{const r=pA(i);r.length&&(n.set(i,r),i.render())}),t.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const r=n.get(i);r&&r.forEach(([s,o])=>{var a;(a=i.getValue(s))===null||a===void 0||a.set(o)})}),t.forEach(i=>i.measureEndState()),t.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}jd=!1,Wd=!1,$r.forEach(t=>t.complete()),$r.clear()}function MS(){$r.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(jd=!0)})}function mA(){MS(),SS()}class dm{constructor(e,n,i,r,s,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=i,this.motionValue=r,this.element=s,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?($r.add(this),Wd||(Wd=!0,Ke.read(MS),Ke.resolveKeyframes(SS))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:i,motionValue:r}=this;for(let s=0;s<e.length;s++)if(e[s]===null)if(s===0){const o=r==null?void 0:r.get(),a=e[e.length-1];if(o!==void 0)e[0]=o;else if(i&&n){const l=i.readValue(n,a);l!=null&&(e[0]=l)}e[0]===void 0&&(e[0]=a),r&&o===void 0&&r.set(e[0])}else e[s]=e[s-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),$r.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,$r.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const ES=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),gA=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function vA(t){const e=gA.exec(t);if(!e)return[,];const[,n,i,r]=e;return[`--${n??i}`,r]}function wS(t,e,n=1){const[i,r]=vA(t);if(!i)return;const s=window.getComputedStyle(e).getPropertyValue(i);if(s){const o=s.trim();return ES(o)?parseFloat(o):o}return Yp(r)?wS(r,e,n+1):r}const TS=t=>e=>e.test(t),yA={test:t=>t==="auto",parse:t=>t},AS=[go,Ae,pi,$i,cT,lT,yA],dv=t=>AS.find(TS(t));class CS extends dm{constructor(e,n,i,r,s){super(e,n,i,r,s,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:i}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<e.length;l++){let c=e[l];if(typeof c=="string"&&(c=c.trim(),Yp(c))){const u=wS(c,n.current);u!==void 0&&(e[l]=u),l===e.length-1&&(this.finalKeyframe=c)}}if(this.resolveNoneKeyframes(),!rS.has(i)||e.length!==2)return;const[r,s]=e,o=dv(r),a=dv(s);if(o!==a)if(cv(o)&&cv(a))for(let l=0;l<e.length;l++){const c=e[l];typeof c=="string"&&(e[l]=parseFloat(c))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,i=[];for(let r=0;r<e.length;r++)$T(e[r])&&i.push(r);i.length&&fA(e,i,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=io[i](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const r=n[n.length-1];r!==void 0&&e.getValue(i,r).jump(r,!1)}measureEndState(){var e;const{element:n,name:i,unresolvedKeyframes:r}=this;if(!n||!n.current)return;const s=n.getValue(i);s&&s.jump(this.measuredOrigin,!1);const o=r.length-1,a=r[o];r[o]=io[i](n.measureViewportBox(),window.getComputedStyle(n.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([l,c])=>{n.getValue(l).set(c)}),this.resolveNoneKeyframes()}}const hv=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(gr.test(t)||t==="0")&&!t.startsWith("url("));function _A(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function xA(t,e,n,i){const r=t[0];if(r===null)return!1;if(e==="display"||e==="visibility")return!0;const s=t[t.length-1],o=hv(r,e),a=hv(s,e);return!o||!a?!1:_A(t)||(n==="spring"||hu(n))&&i}const SA=t=>t!==null;function gu(t,{repeat:e,repeatType:n="loop"},i){const r=t.filter(SA),s=e&&n!=="loop"&&e%2===1?0:r.length-1;return!s||i===void 0?r[s]:i}const MA=40;class bS{constructor({autoplay:e=!0,delay:n=0,type:i="keyframes",repeat:r=0,repeatDelay:s=0,repeatType:o="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=mi.now(),this.options={autoplay:e,delay:n,type:i,repeat:r,repeatDelay:s,repeatType:o,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>MA?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&mA(),this._resolved}onKeyframesResolved(e,n){this.resolvedAt=mi.now(),this.hasAttemptedResolve=!0;const{name:i,type:r,velocity:s,delay:o,onComplete:a,onUpdate:l,isGenerator:c}=this.options;if(!c&&!xA(e,i,r,s))if(o)this.options.duration=0;else{l&&l(gu(e,this.options,n)),a&&a(),this.resolveFinishedPromise();return}const u=this.initPlayback(e,n);u!==!1&&(this._resolved={keyframes:e,finalKeyframe:n,...u},this.onPostResolved())}onPostResolved(){}then(e,n){return this.currentFinishedPromise.then(e,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}const dt=(t,e,n)=>t+(e-t)*n;function rf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function EA({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let r=0,s=0,o=0;if(!e)r=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;r=rf(l,a,t+1/3),s=rf(l,a,t),o=rf(l,a,t-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:i}}function Uc(t,e){return n=>n>0?e:t}const sf=(t,e,n)=>{const i=t*t,r=n*(e*e-i)+i;return r<0?0:Math.sqrt(r)},wA=[Hd,Gr,Us],TA=t=>wA.find(e=>e.test(t));function pv(t){const e=TA(t);if(!e)return!1;let n=e.parse(t);return e===Us&&(n=EA(n)),n}const mv=(t,e)=>{const n=pv(t),i=pv(e);if(!n||!i)return Uc(t,e);const r={...n};return s=>(r.red=sf(n.red,i.red,s),r.green=sf(n.green,i.green,s),r.blue=sf(n.blue,i.blue,s),r.alpha=dt(n.alpha,i.alpha,s),Gr.transform(r))},AA=(t,e)=>n=>e(t(n)),Oa=(...t)=>t.reduce(AA),Xd=new Set(["none","hidden"]);function CA(t,e){return Xd.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function bA(t,e){return n=>dt(t,e,n)}function hm(t){return typeof t=="number"?bA:typeof t=="string"?Yp(t)?Uc:Xt.test(t)?mv:LA:Array.isArray(t)?RS:typeof t=="object"?Xt.test(t)?mv:RA:Uc}function RS(t,e){const n=[...t],i=n.length,r=t.map((s,o)=>hm(s)(s,e[o]));return s=>{for(let o=0;o<i;o++)n[o]=r[o](s);return n}}function RA(t,e){const n={...t,...e},i={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(i[r]=hm(t[r])(t[r],e[r]));return r=>{for(const s in i)n[s]=i[s](r);return n}}function PA(t,e){var n;const i=[],r={color:0,var:0,number:0};for(let s=0;s<e.values.length;s++){const o=e.types[s],a=t.indexes[o][r[o]],l=(n=t.values[a])!==null&&n!==void 0?n:0;i[s]=l,r[o]++}return i}const LA=(t,e)=>{const n=gr.createTransformer(e),i=Ta(t),r=Ta(e);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?Xd.has(t)&&!r.values.length||Xd.has(e)&&!i.values.length?CA(t,e):Oa(RS(PA(i,r),r.values),n):Uc(t,e)};function PS(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?dt(t,e,n):hm(t)(t,e)}const DA=5;function LS(t,e,n){const i=Math.max(e-DA,0);return om(n-t(i),e-i)}const _t={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},of=.001;function NA({duration:t=_t.duration,bounce:e=_t.bounce,velocity:n=_t.velocity,mass:i=_t.mass}){let r,s,o=1-e;o=vi(_t.minDamping,_t.maxDamping,o),t=vi(_t.minDuration,_t.maxDuration,hi(t)),o<1?(r=c=>{const u=c*o,f=u*t,d=u-n,p=Yd(c,o),g=Math.exp(-f);return of-d/p*g},s=c=>{const f=c*o*t,d=f*n+n,p=Math.pow(o,2)*Math.pow(c,2)*t,g=Math.exp(-f),_=Yd(Math.pow(c,2),o);return(-r(c)+of>0?-1:1)*((d-p)*g)/_}):(r=c=>{const u=Math.exp(-c*t),f=(c-n)*t+1;return-of+u*f},s=c=>{const u=Math.exp(-c*t),f=(n-c)*(t*t);return u*f});const a=5/t,l=UA(r,s,a);if(t=di(t),isNaN(l))return{stiffness:_t.stiffness,damping:_t.damping,duration:t};{const c=Math.pow(l,2)*i;return{stiffness:c,damping:o*2*Math.sqrt(i*c),duration:t}}}const IA=12;function UA(t,e,n){let i=n;for(let r=1;r<IA;r++)i=i-t(i)/e(i);return i}function Yd(t,e){return t*Math.sqrt(1-e*e)}const kA=["duration","bounce"],FA=["stiffness","damping","mass"];function gv(t,e){return e.some(n=>t[n]!==void 0)}function OA(t){let e={velocity:_t.velocity,stiffness:_t.stiffness,damping:_t.damping,mass:_t.mass,isResolvedFromDuration:!1,...t};if(!gv(t,FA)&&gv(t,kA))if(t.visualDuration){const n=t.visualDuration,i=2*Math.PI/(n*1.2),r=i*i,s=2*vi(.05,1,1-(t.bounce||0))*Math.sqrt(r);e={...e,mass:_t.mass,stiffness:r,damping:s}}else{const n=NA(t);e={...e,...n,mass:_t.mass},e.isResolvedFromDuration=!0}return e}function pm(t=_t.visualDuration,e=_t.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:i,restDelta:r}=n;const s=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],a={done:!1,value:s},{stiffness:l,damping:c,mass:u,duration:f,velocity:d,isResolvedFromDuration:p}=OA({...n,velocity:-hi(n.velocity||0)}),g=d||0,_=c/(2*Math.sqrt(l*u)),m=o-s,h=hi(Math.sqrt(l/u)),v=Math.abs(m)<5;i||(i=v?_t.restSpeed.granular:_t.restSpeed.default),r||(r=v?_t.restDelta.granular:_t.restDelta.default);let y;if(_<1){const C=Yd(h,_);y=A=>{const T=Math.exp(-_*h*A);return o-T*((g+_*h*m)/C*Math.sin(C*A)+m*Math.cos(C*A))}}else if(_===1)y=C=>o-Math.exp(-h*C)*(m+(g+h*m)*C);else{const C=h*Math.sqrt(_*_-1);y=A=>{const T=Math.exp(-_*h*A),P=Math.min(C*A,300);return o-T*((g+_*h*m)*Math.sinh(P)+C*m*Math.cosh(P))/C}}const S={calculatedDuration:p&&f||null,next:C=>{const A=y(C);if(p)a.done=C>=f;else{let T=0;_<1&&(T=C===0?di(g):LS(y,C,A));const P=Math.abs(T)<=i,V=Math.abs(o-A)<=r;a.done=P&&V}return a.value=a.done?o:A,a},toString:()=>{const C=Math.min(tm(S),Nc),A=Qx(T=>S.next(C*T).value,C,30);return C+"ms "+A}};return S}function vv({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:u}){const f=t[0],d={done:!1,value:f},p=P=>a!==void 0&&P<a||l!==void 0&&P>l,g=P=>a===void 0?l:l===void 0||Math.abs(a-P)<Math.abs(l-P)?a:l;let _=n*e;const m=f+_,h=o===void 0?m:o(m);h!==m&&(_=h-f);const v=P=>-_*Math.exp(-P/i),y=P=>h+v(P),S=P=>{const V=v(P),x=y(P);d.done=Math.abs(V)<=c,d.value=d.done?h:x};let C,A;const T=P=>{p(d.value)&&(C=P,A=pm({keyframes:[d.value,g(d.value)],velocity:LS(y,P,d.value),damping:r,stiffness:s,restDelta:c,restSpeed:u}))};return T(0),{calculatedDuration:null,next:P=>{let V=!1;return!A&&C===void 0&&(V=!0,S(P),T(P)),C!==void 0&&P>=C?A.next(P-C):(!V&&S(P),d)}}}const BA=Fa(.42,0,1,1),zA=Fa(0,0,.58,1),DS=Fa(.42,0,.58,1),NS=t=>Array.isArray(t)&&typeof t[0]!="number",VA={linear:en,easeIn:BA,easeInOut:DS,easeOut:zA,circIn:lm,circInOut:hS,circOut:dS,backIn:am,backInOut:uS,backOut:cS,anticipate:fS},yv=t=>{if(nm(t)){Px(t.length===4);const[e,n,i,r]=t;return Fa(e,n,i,r)}else if(typeof t=="string")return VA[t];return t};function HA(t,e,n){const i=[],r=n||PS,s=t.length-1;for(let o=0;o<s;o++){let a=r(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||en:e;a=Oa(l,a)}i.push(a)}return i}function IS(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const s=t.length;if(Px(s===e.length),s===1)return()=>e[0];if(s===2&&e[0]===e[1])return()=>e[1];const o=t[0]===t[1];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const a=HA(e,i,r),l=a.length,c=u=>{if(o&&u<t[0])return e[0];let f=0;if(l>1)for(;f<t.length-2&&!(u<t[f+1]);f++);const d=mr(t[f],t[f+1],u);return a[f](d)};return n?u=>c(vi(t[0],t[s-1],u)):c}function US(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=mr(0,e,i);t.push(dt(n,1,r))}}function mm(t){const e=[0];return US(e,t.length-1),e}function GA(t,e){return t.map(n=>n*e)}function WA(t,e){return t.map(()=>e||DS).splice(0,t.length-1)}function kc({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const r=NS(i)?i.map(yv):yv(i),s={done:!1,value:e[0]},o=GA(n&&n.length===e.length?n:mm(e),t),a=IS(o,e,{ease:Array.isArray(r)?r:WA(e,r)});return{calculatedDuration:t,next:l=>(s.value=a(l),s.done=l>=t,s)}}const jA=t=>{const e=({timestamp:n})=>t(n);return{start:()=>Ke.update(e,!0),stop:()=>gi(e),now:()=>Pt.isProcessing?Pt.timestamp:mi.now()}},XA={decay:vv,inertia:vv,tween:kc,keyframes:kc,spring:pm},YA=t=>t/100;class vu extends bS{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:i,element:r,keyframes:s}=this.options,o=(r==null?void 0:r.KeyframeResolver)||dm,a=(l,c)=>this.onKeyframesResolved(l,c);this.resolver=new o(s,a,n,i,r),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:n="keyframes",repeat:i=0,repeatDelay:r=0,repeatType:s,velocity:o=0}=this.options,a=hu(n)?n:XA[n]||kc;let l,c;a!==kc&&typeof e[0]!="number"&&(l=Oa(YA,PS(e[0],e[1])),e=[0,100]);const u=a({...this.options,keyframes:e});s==="mirror"&&(c=a({...this.options,keyframes:[...e].reverse(),velocity:-o})),u.calculatedDuration===null&&(u.calculatedDuration=tm(u));const{calculatedDuration:f}=u,d=f+r,p=d*(i+1)-r;return{generator:u,mirroredGenerator:c,mapPercentToKeyframes:l,calculatedDuration:f,resolvedDuration:d,totalDuration:p}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,n=!1){const{resolved:i}=this;if(!i){const{keyframes:P}=this.options;return{done:!0,value:P[P.length-1]}}const{finalKeyframe:r,generator:s,mirroredGenerator:o,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:c,totalDuration:u,resolvedDuration:f}=i;if(this.startTime===null)return s.next(0);const{delay:d,repeat:p,repeatType:g,repeatDelay:_,onUpdate:m}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-u/this.speed,this.startTime)),n?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const h=this.currentTime-d*(this.speed>=0?1:-1),v=this.speed>=0?h<0:h>u;this.currentTime=Math.max(h,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=u);let y=this.currentTime,S=s;if(p){const P=Math.min(this.currentTime,u)/f;let V=Math.floor(P),x=P%1;!x&&P>=1&&(x=1),x===1&&V--,V=Math.min(V,p+1),!!(V%2)&&(g==="reverse"?(x=1-x,_&&(x-=_/f)):g==="mirror"&&(S=o)),y=vi(0,1,x)*f}const C=v?{done:!1,value:l[0]}:S.next(y);a&&(C.value=a(C.value));let{done:A}=C;!v&&c!==null&&(A=this.speed>=0?this.currentTime>=u:this.currentTime<=0);const T=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&A);return T&&r!==void 0&&(C.value=gu(l,this.options,r)),m&&m(C.value),T&&this.finish(),C}get duration(){const{resolved:e}=this;return e?hi(e.calculatedDuration):0}get time(){return hi(this.currentTime)}set time(e){e=di(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const n=this.playbackSpeed!==e;this.playbackSpeed=e,n&&(this.time=hi(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=jA,onPlay:n,startTime:i}=this.options;this.driver||(this.driver=e(s=>this.tick(s))),n&&n();const r=this.driver.now();this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=r):this.startTime=i??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}function $A(t){return new vu(t)}const KA=new Set(["opacity","clipPath","filter","transform"]);function qA(t,e,n,{delay:i=0,duration:r=300,repeat:s=0,repeatType:o="loop",ease:a="easeInOut",times:l}={}){const c={[e]:n};l&&(c.offset=l);const u=eS(a,r);return Array.isArray(u)&&(c.easing=u),t.animate(c,{delay:i,duration:r,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}const ZA=zp(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Fc=10,QA=2e4;function JA(t){return hu(t.type)||t.type==="spring"||!Jx(t.ease)}function eC(t,e){const n=new vu({...e,keyframes:t,repeat:0,delay:0,isGenerator:!0});let i={done:!1,value:t[0]};const r=[];let s=0;for(;!i.done&&s<QA;)i=n.sample(s),r.push(i.value),s+=Fc;return{times:void 0,keyframes:r,duration:s-Fc,ease:"linear"}}const kS={anticipate:fS,backInOut:uS,circInOut:hS};function tC(t){return t in kS}class _v extends bS{constructor(e){super(e);const{name:n,motionValue:i,element:r,keyframes:s}=this.options;this.resolver=new CS(s,(o,a)=>this.onKeyframesResolved(o,a),n,i,r),this.resolver.scheduleResolve()}initPlayback(e,n){let{duration:i=300,times:r,ease:s,type:o,motionValue:a,name:l,startTime:c}=this.options;if(!a.owner||!a.owner.current)return!1;if(typeof s=="string"&&Ic()&&tC(s)&&(s=kS[s]),JA(this.options)){const{onComplete:f,onUpdate:d,motionValue:p,element:g,..._}=this.options,m=eC(e,_);e=m.keyframes,e.length===1&&(e[1]=e[0]),i=m.duration,r=m.times,s=m.ease,o="keyframes"}const u=qA(a.owner.current,l,e,{...this.options,duration:i,times:r,ease:s});return u.startTime=c??this.calcStartTime(),this.pendingTimeline?(iv(u,this.pendingTimeline),this.pendingTimeline=void 0):u.onfinish=()=>{const{onComplete:f}=this.options;a.set(gu(e,this.options,n)),f&&f(),this.cancel(),this.resolveFinishedPromise()},{animation:u,duration:i,times:r,type:o,ease:s,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:n}=e;return hi(n)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:n}=e;return hi(n.currentTime||0)}set time(e){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.currentTime=di(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:n}=e;return n.playbackRate}set speed(e){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:n}=e;return n.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:n}=e;return n.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:n}=this;if(!n)return en;const{animation:i}=n;iv(i,e)}return en}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:n,keyframes:i,duration:r,type:s,ease:o,times:a}=e;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:c,onUpdate:u,onComplete:f,element:d,...p}=this.options,g=new vu({...p,keyframes:i,duration:r,type:s,ease:o,times:a,isGenerator:!0}),_=di(this.time);c.setWithVelocity(g.sample(_-Fc).value,g.sample(_).value,Fc)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:n,name:i,repeatDelay:r,repeatType:s,damping:o,type:a}=e;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:c}=n.owner.getProps();return ZA()&&i&&KA.has(i)&&!l&&!c&&!r&&s!=="mirror"&&o!==0&&a!=="inertia"}}const nC={type:"spring",stiffness:500,damping:25,restSpeed:10},iC=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),rC={type:"keyframes",duration:.8},sC={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},oC=(t,{keyframes:e})=>e.length>2?rC:rs.has(t)?t.startsWith("scale")?iC(e[1]):nC:sC;function aC({when:t,delay:e,delayChildren:n,staggerChildren:i,staggerDirection:r,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:c,...u}){return!!Object.keys(u).length}const gm=(t,e,n,i={},r,s)=>o=>{const a=em(i,t)||{},l=a.delay||i.delay||0;let{elapsed:c=0}=i;c=c-di(l);let u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-c,onUpdate:d=>{e.set(d),a.onUpdate&&a.onUpdate(d)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:s?void 0:r};aC(a)||(u={...u,...oC(t,u)}),u.duration&&(u.duration=di(u.duration)),u.repeatDelay&&(u.repeatDelay=di(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let f=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(u.duration=0,u.delay===0&&(f=!0)),f&&!s&&e.get()!==void 0){const d=gu(u.keyframes,a);if(d!==void 0)return Ke.update(()=>{u.onUpdate(d),u.onComplete()}),new Zx([])}return!s&&_v.supports(u)?new _v(u):new vu(u)};function lC({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function vm(t,e,{delay:n=0,transitionOverride:i,type:r}={}){var s;let{transition:o=t.getDefaultTransition(),transitionEnd:a,...l}=e;i&&(o=i);const c=[],u=r&&t.animationState&&t.animationState.getState()[r];for(const f in l){const d=t.getValue(f,(s=t.latestValues[f])!==null&&s!==void 0?s:null),p=l[f];if(p===void 0||u&&lC(u,f))continue;const g={delay:n,...em(o||{},f)};let _=!1;if(window.MotionHandoffAnimation){const h=sS(t);if(h){const v=window.MotionHandoffAnimation(h,f,Ke);v!==null&&(g.startTime=v,_=!0)}}Vd(t,f),d.start(gm(f,d,p,t.shouldReduceMotion&&rS.has(f)?{type:!1}:g,t,_));const m=d.animation;m&&c.push(m)}return a&&Promise.all(c).then(()=>{Ke.update(()=>{a&&GT(t,a)})}),c}function $d(t,e,n={}){var i;const r=du(t,e,n.type==="exit"?(i=t.presenceContext)===null||i===void 0?void 0:i.custom:void 0);let{transition:s=t.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(s=n.transitionOverride);const o=r?()=>Promise.all(vm(t,r,n)):()=>Promise.resolve(),a=t.variantChildren&&t.variantChildren.size?(c=0)=>{const{delayChildren:u=0,staggerChildren:f,staggerDirection:d}=s;return cC(t,e,u+c,f,d,n)}:()=>Promise.resolve(),{when:l}=s;if(l){const[c,u]=l==="beforeChildren"?[o,a]:[a,o];return c().then(()=>u())}else return Promise.all([o(),a(n.delay)])}function cC(t,e,n=0,i=0,r=1,s){const o=[],a=(t.variantChildren.size-1)*i,l=r===1?(c=0)=>c*i:(c=0)=>a-c*i;return Array.from(t.variantChildren).sort(uC).forEach((c,u)=>{c.notify("AnimationStart",e),o.push($d(c,e,{...s,delay:n+l(u)}).then(()=>c.notify("AnimationComplete",e)))}),Promise.all(o)}function uC(t,e){return t.sortNodePosition(e)}function fC(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const r=e.map(s=>$d(t,s,n));i=Promise.all(r)}else if(typeof e=="string")i=$d(t,e,n);else{const r=typeof e=="function"?du(t,e,n.custom):e;i=Promise.all(vm(t,r,n))}return i.then(()=>{t.notify("AnimationComplete",e)})}const dC=Hp.length;function FS(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?FS(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<dC;n++){const i=Hp[n],r=t.props[i];(Ea(r)||r===!1)&&(e[i]=r)}return e}const hC=[...Vp].reverse(),pC=Vp.length;function mC(t){return e=>Promise.all(e.map(({animation:n,options:i})=>fC(t,n,i)))}function gC(t){let e=mC(t),n=xv(),i=!0;const r=l=>(c,u)=>{var f;const d=du(t,u,l==="exit"?(f=t.presenceContext)===null||f===void 0?void 0:f.custom:void 0);if(d){const{transition:p,transitionEnd:g,..._}=d;c={...c,..._,...g}}return c};function s(l){e=l(t)}function o(l){const{props:c}=t,u=FS(t.parent)||{},f=[],d=new Set;let p={},g=1/0;for(let m=0;m<pC;m++){const h=hC[m],v=n[h],y=c[h]!==void 0?c[h]:u[h],S=Ea(y),C=h===l?v.isActive:null;C===!1&&(g=m);let A=y===u[h]&&y!==c[h]&&S;if(A&&i&&t.manuallyAnimateOnMount&&(A=!1),v.protectedKeys={...p},!v.isActive&&C===null||!y&&!v.prevProp||uu(y)||typeof y=="boolean")continue;const T=vC(v.prevProp,y);let P=T||h===l&&v.isActive&&!A&&S||m>g&&S,V=!1;const x=Array.isArray(y)?y:[y];let E=x.reduce(r(h),{});C===!1&&(E={});const{prevResolvedValues:H={}}=v,z={...H,...E},Y=W=>{P=!0,d.has(W)&&(V=!0,d.delete(W)),v.needsAnimating[W]=!0;const L=t.getValue(W);L&&(L.liveStyle=!1)};for(const W in z){const L=E[W],$=H[W];if(p.hasOwnProperty(W))continue;let q=!1;Bd(L)&&Bd($)?q=!Kx(L,$):q=L!==$,q?L!=null?Y(W):d.add(W):L!==void 0&&d.has(W)?Y(W):v.protectedKeys[W]=!0}v.prevProp=y,v.prevResolvedValues=E,v.isActive&&(p={...p,...E}),i&&t.blockInitialAnimation&&(P=!1),P&&(!(A&&T)||V)&&f.push(...x.map(W=>({animation:W,options:{type:h}})))}if(d.size){const m={};d.forEach(h=>{const v=t.getBaseTarget(h),y=t.getValue(h);y&&(y.liveStyle=!0),m[h]=v??null}),f.push({animation:m})}let _=!!f.length;return i&&(c.initial===!1||c.initial===c.animate)&&!t.manuallyAnimateOnMount&&(_=!1),i=!1,_?e(f):Promise.resolve()}function a(l,c){var u;if(n[l].isActive===c)return Promise.resolve();(u=t.variantChildren)===null||u===void 0||u.forEach(d=>{var p;return(p=d.animationState)===null||p===void 0?void 0:p.setActive(l,c)}),n[l].isActive=c;const f=o(l);for(const d in n)n[d].protectedKeys={};return f}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n,reset:()=>{n=xv(),i=!0}}}function vC(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!Kx(e,t):!1}function Tr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function xv(){return{animate:Tr(!0),whileInView:Tr(),whileHover:Tr(),whileTap:Tr(),whileDrag:Tr(),whileFocus:Tr(),exit:Tr()}}class Mr{constructor(e){this.isMounted=!1,this.node=e}update(){}}class yC extends Mr{constructor(e){super(e),e.animationState||(e.animationState=gC(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();uu(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let _C=0;class xC extends Mr{constructor(){super(...arguments),this.id=_C++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;const r=this.node.animationState.setActive("exit",!e);n&&!e&&r.then(()=>n(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const SC={animation:{Feature:yC},exit:{Feature:xC}};function Aa(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}function Ba(t){return{point:{x:t.pageX,y:t.pageY}}}const MC=t=>e=>im(e)&&t(e,Ba(e));function ea(t,e,n,i){return Aa(t,e,MC(n),i)}const Sv=(t,e)=>Math.abs(t-e);function EC(t,e){const n=Sv(t.x,e.x),i=Sv(t.y,e.y);return Math.sqrt(n**2+i**2)}class OS{constructor(e,n,{transformPagePoint:i,contextWindow:r,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=lf(this.lastMoveEventInfo,this.history),d=this.startEvent!==null,p=EC(f.offset,{x:0,y:0})>=3;if(!d&&!p)return;const{point:g}=f,{timestamp:_}=Pt;this.history.push({...g,timestamp:_});const{onStart:m,onMove:h}=this.handlers;d||(m&&m(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),h&&h(this.lastMoveEvent,f)},this.handlePointerMove=(f,d)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=af(d,this.transformPagePoint),Ke.update(this.updatePoint,!0)},this.handlePointerUp=(f,d)=>{this.end();const{onEnd:p,onSessionEnd:g,resumeAnimation:_}=this.handlers;if(this.dragSnapToOrigin&&_&&_(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const m=lf(f.type==="pointercancel"?this.lastMoveEventInfo:af(d,this.transformPagePoint),this.history);this.startEvent&&p&&p(f,m),g&&g(f,m)},!im(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=i,this.contextWindow=r||window;const o=Ba(e),a=af(o,this.transformPagePoint),{point:l}=a,{timestamp:c}=Pt;this.history=[{...l,timestamp:c}];const{onSessionStart:u}=n;u&&u(e,lf(a,this.history)),this.removeListeners=Oa(ea(this.contextWindow,"pointermove",this.handlePointerMove),ea(this.contextWindow,"pointerup",this.handlePointerUp),ea(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),gi(this.updatePoint)}}function af(t,e){return e?{point:e(t.point)}:t}function Mv(t,e){return{x:t.x-e.x,y:t.y-e.y}}function lf({point:t},e){return{point:t,delta:Mv(t,BS(e)),offset:Mv(t,wC(e)),velocity:TC(e,.1)}}function wC(t){return t[0]}function BS(t){return t[t.length-1]}function TC(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const r=BS(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>di(e)));)n--;if(!i)return{x:0,y:0};const s=hi(r.timestamp-i.timestamp);if(s===0)return{x:0,y:0};const o={x:(r.x-i.x)/s,y:(r.y-i.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}const zS=1e-4,AC=1-zS,CC=1+zS,VS=.01,bC=0-VS,RC=0+VS;function wn(t){return t.max-t.min}function PC(t,e,n){return Math.abs(t-e)<=n}function Ev(t,e,n,i=.5){t.origin=i,t.originPoint=dt(e.min,e.max,t.origin),t.scale=wn(n)/wn(e),t.translate=dt(n.min,n.max,t.origin)-t.originPoint,(t.scale>=AC&&t.scale<=CC||isNaN(t.scale))&&(t.scale=1),(t.translate>=bC&&t.translate<=RC||isNaN(t.translate))&&(t.translate=0)}function ta(t,e,n,i){Ev(t.x,e.x,n.x,i?i.originX:void 0),Ev(t.y,e.y,n.y,i?i.originY:void 0)}function wv(t,e,n){t.min=n.min+e.min,t.max=t.min+wn(e)}function LC(t,e,n){wv(t.x,e.x,n.x),wv(t.y,e.y,n.y)}function Tv(t,e,n){t.min=e.min-n.min,t.max=t.min+wn(e)}function na(t,e,n){Tv(t.x,e.x,n.x),Tv(t.y,e.y,n.y)}function DC(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?dt(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?dt(n,t,i.max):Math.min(t,n)),t}function Av(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function NC(t,{top:e,left:n,bottom:i,right:r}){return{x:Av(t.x,n,r),y:Av(t.y,e,i)}}function Cv(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function IC(t,e){return{x:Cv(t.x,e.x),y:Cv(t.y,e.y)}}function UC(t,e){let n=.5;const i=wn(t),r=wn(e);return r>i?n=mr(e.min,e.max-i,t.min):i>r&&(n=mr(t.min,t.max-r,e.min)),vi(0,1,n)}function kC(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const Kd=.35;function FC(t=Kd){return t===!1?t=0:t===!0&&(t=Kd),{x:bv(t,"left","right"),y:bv(t,"top","bottom")}}function bv(t,e,n){return{min:Rv(t,e),max:Rv(t,n)}}function Rv(t,e){return typeof t=="number"?t:t[e]||0}const Pv=()=>({translate:0,scale:1,origin:0,originPoint:0}),ks=()=>({x:Pv(),y:Pv()}),Lv=()=>({min:0,max:0}),yt=()=>({x:Lv(),y:Lv()});function Pn(t){return[t("x"),t("y")]}function HS({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function OC({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function BC(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function cf(t){return t===void 0||t===1}function qd({scale:t,scaleX:e,scaleY:n}){return!cf(t)||!cf(e)||!cf(n)}function Ir(t){return qd(t)||GS(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function GS(t){return Dv(t.x)||Dv(t.y)}function Dv(t){return t&&t!=="0%"}function Oc(t,e,n){const i=t-n,r=e*i;return n+r}function Nv(t,e,n,i,r){return r!==void 0&&(t=Oc(t,r,i)),Oc(t,n,i)+e}function Zd(t,e=0,n=1,i,r){t.min=Nv(t.min,e,n,i,r),t.max=Nv(t.max,e,n,i,r)}function WS(t,{x:e,y:n}){Zd(t.x,e.translate,e.scale,e.originPoint),Zd(t.y,n.translate,n.scale,n.originPoint)}const Iv=.999999999999,Uv=1.0000000000001;function zC(t,e,n,i=!1){const r=n.length;if(!r)return;e.x=e.y=1;let s,o;for(let a=0;a<r;a++){s=n[a],o=s.projectionDelta;const{visualElement:l}=s.options;l&&l.props.style&&l.props.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Os(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,WS(t,o)),i&&Ir(s.latestValues)&&Os(t,s.latestValues))}e.x<Uv&&e.x>Iv&&(e.x=1),e.y<Uv&&e.y>Iv&&(e.y=1)}function Fs(t,e){t.min=t.min+e,t.max=t.max+e}function kv(t,e,n,i,r=.5){const s=dt(t.min,t.max,r);Zd(t,e,n,s,i)}function Os(t,e){kv(t.x,e.x,e.scaleX,e.scale,e.originX),kv(t.y,e.y,e.scaleY,e.scale,e.originY)}function jS(t,e){return HS(BC(t.getBoundingClientRect(),e))}function VC(t,e,n){const i=jS(t,n),{scroll:r}=e;return r&&(Fs(i.x,r.offset.x),Fs(i.y,r.offset.y)),i}const XS=({current:t})=>t?t.ownerDocument.defaultView:null,HC=new WeakMap;class GC{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=yt(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const r=u=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Ba(u).point)},s=(u,f)=>{const{drag:d,dragPropagation:p,onDragStart:g}=this.getProps();if(d&&!p&&(this.openDragLock&&this.openDragLock(),this.openDragLock=OT(d),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Pn(m=>{let h=this.getAxisMotionValue(m).get()||0;if(pi.test(h)){const{projection:v}=this.visualElement;if(v&&v.layout){const y=v.layout.layoutBox[m];y&&(h=wn(y)*(parseFloat(h)/100))}}this.originPoint[m]=h}),g&&Ke.postRender(()=>g(u,f)),Vd(this.visualElement,"transform");const{animationState:_}=this.visualElement;_&&_.setActive("whileDrag",!0)},o=(u,f)=>{const{dragPropagation:d,dragDirectionLock:p,onDirectionLock:g,onDrag:_}=this.getProps();if(!d&&!this.openDragLock)return;const{offset:m}=f;if(p&&this.currentDirection===null){this.currentDirection=WC(m),this.currentDirection!==null&&g&&g(this.currentDirection);return}this.updateAxis("x",f.point,m),this.updateAxis("y",f.point,m),this.visualElement.render(),_&&_(u,f)},a=(u,f)=>this.stop(u,f),l=()=>Pn(u=>{var f;return this.getAnimationState(u)==="paused"&&((f=this.getAxisMotionValue(u).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new OS(e,{onSessionStart:r,onStart:s,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:XS(this.visualElement)})}stop(e,n){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:r}=n;this.startAnimation(r);const{onDragEnd:s}=this.getProps();s&&Ke.postRender(()=>s(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,i){const{drag:r}=this.getProps();if(!i||!hl(e,r,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=DC(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var e;const{dragConstraints:n,dragElastic:i}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,s=this.constraints;n&&Is(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&r?this.constraints=NC(r.layoutBox,n):this.constraints=!1,this.elastic=FC(i),s!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&Pn(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=kC(r.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!Is(e))return!1;const i=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const s=VC(i,r.root,this.visualElement.getTransformPagePoint());let o=IC(r.layout.layoutBox,s);if(n){const a=n(OC(o));this.hasMutatedConstraints=!!a,a&&(o=HS(a))}return o}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=Pn(u=>{if(!hl(u,n,this.currentDirection))return;let f=l&&l[u]||{};o&&(f={min:0,max:0});const d=r?200:1e6,p=r?40:1e7,g={type:"inertia",velocity:i?e[u]:0,bounceStiffness:d,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...s,...f};return this.startAxisValueAnimation(u,g)});return Promise.all(c).then(a)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return Vd(this.visualElement,e),i.start(gm(e,i,0,n,this.visualElement,!1))}stopAnimation(){Pn(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){Pn(e=>{var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,i=this.visualElement.getProps(),r=i[n];return r||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){Pn(n=>{const{drag:i}=this.getProps();if(!hl(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(n);if(r&&r.layout){const{min:o,max:a}=r.layout.layoutBox[n];s.set(e[n]-dt(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!Is(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};Pn(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();r[o]=UC({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),Pn(o=>{if(!hl(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(dt(l,c,r[o]))})}addListeners(){if(!this.visualElement.current)return;HC.set(this.visualElement,this);const e=this.visualElement.current,n=ea(e,"pointerdown",l=>{const{drag:c,dragListener:u=!0}=this.getProps();c&&u&&this.start(l)}),i=()=>{const{dragConstraints:l}=this.getProps();Is(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,s=r.addEventListener("measure",i);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),Ke.read(i);const o=Aa(window,"resize",()=>this.scalePositionWithinConstraints()),a=r.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(Pn(u=>{const f=this.getAxisMotionValue(u);f&&(this.originPoint[u]+=l[u].translate,f.set(f.get()+l[u].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:o=Kd,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function hl(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function WC(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class jC extends Mr{constructor(e){super(e),this.removeGroupControls=en,this.removeListeners=en,this.controls=new GC(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||en}unmount(){this.removeGroupControls(),this.removeListeners()}}const Fv=t=>(e,n)=>{t&&Ke.postRender(()=>t(e,n))};class XC extends Mr{constructor(){super(...arguments),this.removePointerDownListener=en}onPointerDown(e){this.session=new OS(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:XS(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:Fv(e),onStart:Fv(n),onMove:i,onEnd:(s,o)=>{delete this.session,r&&Ke.postRender(()=>r(s,o))}}}mount(){this.removePointerDownListener=ea(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Zl={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Ov(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const bo={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(Ae.test(t))t=parseFloat(t);else return t;const n=Ov(t,e.target.x),i=Ov(t,e.target.y);return`${n}% ${i}%`}},YC={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,r=gr.parse(t);if(r.length>5)return i;const s=gr.createTransformer(t),o=typeof r[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;r[0+o]/=a,r[1+o]/=l;const c=dt(a,l,.5);return typeof r[2+o]=="number"&&(r[2+o]/=c),typeof r[3+o]=="number"&&(r[3+o]/=c),s(r)}};class $C extends ne.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:s}=e;_T(KC),s&&(n.group&&n.group.add(s),i&&i.register&&r&&i.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),Zl.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:r,isPresent:s}=this.props,o=i.projection;return o&&(o.isPresent=s,r||e.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||Ke.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),Wp.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function YS(t){const[e,n]=Rx(),i=ne.useContext(Op);return b.jsx($C,{...t,layoutGroup:i,switchLayoutGroup:ne.useContext(kx),isPresent:e,safeToRemove:n})}const KC={borderRadius:{...bo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:bo,borderTopRightRadius:bo,borderBottomLeftRadius:bo,borderBottomRightRadius:bo,boxShadow:YC};function $S(t,e,n){const i=Rt(t)?t:ci(t);return i.start(gm("",i,e,n)),i.animation}function KS(t){return t instanceof SVGElement&&t.tagName!=="svg"}const qC=(t,e)=>t.depth-e.depth;class ZC{constructor(){this.children=[],this.isDirty=!1}add(e){rm(this.children,e),this.isDirty=!0}remove(e){mu(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(qC),this.isDirty=!1,this.children.forEach(e)}}function QC(t,e){const n=mi.now(),i=({timestamp:r})=>{const s=r-n;s>=e&&(gi(i),t(s-e))};return Ke.read(i,!0),()=>gi(i)}const qS=["TopLeft","TopRight","BottomLeft","BottomRight"],JC=qS.length,Bv=t=>typeof t=="string"?parseFloat(t):t,zv=t=>typeof t=="number"||Ae.test(t);function eb(t,e,n,i,r,s){r?(t.opacity=dt(0,n.opacity!==void 0?n.opacity:1,tb(i)),t.opacityExit=dt(e.opacity!==void 0?e.opacity:1,0,nb(i))):s&&(t.opacity=dt(e.opacity!==void 0?e.opacity:1,n.opacity!==void 0?n.opacity:1,i));for(let o=0;o<JC;o++){const a=`border${qS[o]}Radius`;let l=Vv(e,a),c=Vv(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||zv(l)===zv(c)?(t[a]=Math.max(dt(Bv(l),Bv(c),i),0),(pi.test(c)||pi.test(l))&&(t[a]+="%")):t[a]=c}(e.rotate||n.rotate)&&(t.rotate=dt(e.rotate||0,n.rotate||0,i))}function Vv(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const tb=ZS(0,.5,dS),nb=ZS(.5,.95,en);function ZS(t,e,n){return i=>i<t?0:i>e?1:n(mr(t,e,i))}function Hv(t,e){t.min=e.min,t.max=e.max}function bn(t,e){Hv(t.x,e.x),Hv(t.y,e.y)}function Gv(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}function Wv(t,e,n,i,r){return t-=e,t=Oc(t,1/n,i),r!==void 0&&(t=Oc(t,1/r,i)),t}function ib(t,e=0,n=1,i=.5,r,s=t,o=t){if(pi.test(e)&&(e=parseFloat(e),e=dt(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=dt(s.min,s.max,i);t===s&&(a-=e),t.min=Wv(t.min,e,n,a,r),t.max=Wv(t.max,e,n,a,r)}function jv(t,e,[n,i,r],s,o){ib(t,e[n],e[i],e[r],e.scale,s,o)}const rb=["x","scaleX","originX"],sb=["y","scaleY","originY"];function Xv(t,e,n,i){jv(t.x,e,rb,n?n.x:void 0,i?i.x:void 0),jv(t.y,e,sb,n?n.y:void 0,i?i.y:void 0)}function Yv(t){return t.translate===0&&t.scale===1}function QS(t){return Yv(t.x)&&Yv(t.y)}function $v(t,e){return t.min===e.min&&t.max===e.max}function ob(t,e){return $v(t.x,e.x)&&$v(t.y,e.y)}function Kv(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function JS(t,e){return Kv(t.x,e.x)&&Kv(t.y,e.y)}function qv(t){return wn(t.x)/wn(t.y)}function Zv(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}class ab{constructor(){this.members=[]}add(e){rm(this.members,e),e.scheduleRender()}remove(e){if(mu(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(r=>e===r);if(n===0)return!1;let i;for(let r=n;r>=0;r--){const s=this.members[r];if(s.isPresent!==!1){i=s;break}}return i?(this.promote(i),!0):!1}promote(e,n){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,n&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;r===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:i}=e;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function lb(t,e,n){let i="";const r=t.x.translate/e.x,s=t.y.translate/e.y,o=(n==null?void 0:n.z)||0;if((r||s||o)&&(i=`translate3d(${r}px, ${s}px, ${o}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:c,rotate:u,rotateX:f,rotateY:d,skewX:p,skewY:g}=n;c&&(i=`perspective(${c}px) ${i}`),u&&(i+=`rotate(${u}deg) `),f&&(i+=`rotateX(${f}deg) `),d&&(i+=`rotateY(${d}deg) `),p&&(i+=`skewX(${p}deg) `),g&&(i+=`skewY(${g}deg) `)}const a=t.x.scale*e.x,l=t.y.scale*e.y;return(a!==1||l!==1)&&(i+=`scale(${a}, ${l})`),i||"none"}const Ur={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Vo=typeof window<"u"&&window.MotionDebug!==void 0,uf=["","X","Y","Z"],cb={visibility:"hidden"},Qv=1e3;let ub=0;function ff(t,e,n,i){const{latestValues:r}=e;r[t]&&(n[t]=r[t],e.setStaticValue(t,0),i&&(i[t]=0))}function eM(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=sS(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:r,layoutId:s}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",Ke,!(r||s))}const{parent:i}=t;i&&!i.hasCheckedOptimisedAppear&&eM(i)}function tM({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(o={},a=e==null?void 0:e()){this.id=ub++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Vo&&(Ur.totalNodes=Ur.resolvedTargetDeltas=Ur.recalculatedProjection=0),this.nodes.forEach(hb),this.nodes.forEach(yb),this.nodes.forEach(_b),this.nodes.forEach(pb),Vo&&window.MotionDebug.record(Ur)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new ZC)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new sm),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=KS(o),this.instance=o;const{layoutId:l,layout:c,visualElement:u}=this.options;if(u&&!u.current&&u.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(c||l)&&(this.isLayoutDirty=!0),t){let f;const d=()=>this.root.updateBlockedByResize=!1;t(o,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=QC(d,250),Zl.hasAnimatedSinceResize&&(Zl.hasAnimatedSinceResize=!1,this.nodes.forEach(e0))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&u&&(l||c)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:d,hasRelativeTargetChanged:p,layout:g})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const _=this.options.transition||u.getDefaultTransition()||wb,{onLayoutAnimationStart:m,onLayoutAnimationComplete:h}=u.getProps(),v=!this.targetLayout||!JS(this.targetLayout,g)||p,y=!d&&p;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||y||d&&(v||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,y);const S={...em(_,"layout"),onPlay:m,onComplete:h};(u.shouldReduceMotion||this.options.layoutRoot)&&(S.delay=0,S.type=!1),this.startAnimation(S)}else d||e0(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=g})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,gi(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(xb),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&eM(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const f=this.path[u];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Jv);return}this.isUpdating||this.nodes.forEach(gb),this.isUpdating=!1,this.nodes.forEach(vb),this.nodes.forEach(fb),this.nodes.forEach(db),this.clearAllSnapshots();const a=mi.now();Pt.delta=vi(0,1e3/60,a-Pt.timestamp),Pt.timestamp=a,Pt.isProcessing=!0,ef.update.process(Pt),ef.preRender.process(Pt),ef.render.process(Pt),Pt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Wp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(mb),this.sharedNodes.forEach(Sb)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ke.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ke.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=yt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a){const l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!r)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!QS(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;o&&(a||Ir(this.latestValues)||u)&&(r(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),Tb(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var o;const{visualElement:a}=this.options;if(!a)return yt();const l=a.measureViewportBox();if(!(((o=this.scroll)===null||o===void 0?void 0:o.wasRoot)||this.path.some(Ab))){const{scroll:u}=this.root;u&&(Fs(l.x,u.offset.x),Fs(l.y,u.offset.y))}return l}removeElementScroll(o){var a;const l=yt();if(bn(l,o),!((a=this.scroll)===null||a===void 0)&&a.wasRoot)return l;for(let c=0;c<this.path.length;c++){const u=this.path[c],{scroll:f,options:d}=u;u!==this.root&&f&&d.layoutScroll&&(f.wasRoot&&bn(l,o),Fs(l.x,f.offset.x),Fs(l.y,f.offset.y))}return l}applyTransform(o,a=!1){const l=yt();bn(l,o);for(let c=0;c<this.path.length;c++){const u=this.path[c];!a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&Os(l,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),Ir(u.latestValues)&&Os(l,u.latestValues)}return Ir(this.latestValues)&&Os(l,this.latestValues),l}removeTransform(o){const a=yt();bn(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!Ir(c.latestValues))continue;qd(c.latestValues)&&c.updateSnapshot();const u=yt(),f=c.measurePageBox();bn(u,f),Xv(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,u)}return Ir(this.latestValues)&&Xv(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Pt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(o||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:f,layoutId:d}=this.options;if(!(!this.layout||!(f||d))){if(this.resolvedRelativeTargetAt=Pt.timestamp,!this.targetDelta&&!this.relativeTarget){const p=this.getClosestProjectingParent();p&&p.layout&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=yt(),this.relativeTargetOrigin=yt(),na(this.relativeTargetOrigin,this.layout.layoutBox,p.layout.layoutBox),bn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=yt(),this.targetWithTransforms=yt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),LC(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):bn(this.target,this.layout.layoutBox),WS(this.target,this.targetDelta)):bn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const p=this.getClosestProjectingParent();p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=yt(),this.relativeTargetOrigin=yt(),na(this.relativeTargetOrigin,this.target,p.target),bn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Vo&&Ur.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||qd(this.parent.latestValues)||GS(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===Pt.timestamp&&(c=!1),c)return;const{layout:u,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||f))return;bn(this.layoutCorrected,this.layout.layoutBox);const d=this.treeScale.x,p=this.treeScale.y;zC(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=yt());const{target:g}=a;if(!g){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Gv(this.prevProjectionDelta.x,this.projectionDelta.x),Gv(this.prevProjectionDelta.y,this.projectionDelta.y)),ta(this.projectionDelta,this.layoutCorrected,g,this.latestValues),(this.treeScale.x!==d||this.treeScale.y!==p||!Zv(this.projectionDelta.x,this.prevProjectionDelta.x)||!Zv(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",g)),Vo&&Ur.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)===null||a===void 0||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=ks(),this.projectionDelta=ks(),this.projectionDeltaWithTransform=ks()}setAnimationOrigin(o,a=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},f=ks();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const d=yt(),p=l?l.source:void 0,g=this.layout?this.layout.source:void 0,_=p!==g,m=this.getStack(),h=!m||m.members.length<=1,v=!!(_&&!h&&this.options.crossfade===!0&&!this.path.some(Eb));this.animationProgress=0;let y;this.mixTargetDelta=S=>{const C=S/1e3;t0(f.x,o.x,C),t0(f.y,o.y,C),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(na(d,this.layout.layoutBox,this.relativeParent.layout.layoutBox),Mb(this.relativeTarget,this.relativeTargetOrigin,d,C),y&&ob(this.relativeTarget,y)&&(this.isProjectionDirty=!1),y||(y=yt()),bn(y,this.relativeTarget)),_&&(this.animationValues=u,eb(u,c,this.latestValues,C,v,h)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=C},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(gi(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ke.update(()=>{Zl.hasAnimatedSinceResize=!0,this.currentAnimation=$S(0,Qv,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Qv),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:u}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&nM(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||yt();const f=wn(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+f;const d=wn(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+d}bn(a,l),Os(a,u),ta(this.projectionDeltaWithTransform,this.layoutCorrected,a,u)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new ab),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&ff("z",o,c,this.animationValues);for(let u=0;u<uf.length;u++)ff(`rotate${uf[u]}`,o,c,this.animationValues),ff(`skew${uf[u]}`,o,c,this.animationValues);o.render();for(const u in c)o.setStaticValue(u,c[u]),this.animationValues&&(this.animationValues[u]=c[u]);o.scheduleRender()}getProjectionStyles(o){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return cb;const c={visibility:""},u=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=Kl(o==null?void 0:o.pointerEvents)||"",c.transform=u?u(this.latestValues,""):"none",c;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const _={};return this.options.layoutId&&(_.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,_.pointerEvents=Kl(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!Ir(this.latestValues)&&(_.transform=u?u({},""):"none",this.hasProjected=!1),_}const d=f.animationValues||f.latestValues;this.applyTransformsToTarget(),c.transform=lb(this.projectionDeltaWithTransform,this.treeScale,d),u&&(c.transform=u(d,c.transform));const{x:p,y:g}=this.projectionDelta;c.transformOrigin=`${p.origin*100}% ${g.origin*100}% 0`,f.animationValues?c.opacity=f===this?(l=(a=d.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:d.opacityExit:c.opacity=f===this?d.opacity!==void 0?d.opacity:"":d.opacityExit!==void 0?d.opacityExit:0;for(const _ in Dc){if(d[_]===void 0)continue;const{correct:m,applyTo:h}=Dc[_],v=c.transform==="none"?d[_]:m(d[_],f);if(h){const y=h.length;for(let S=0;S<y;S++)c[h[S]]=v}else c[_]=v}return this.options.layoutId&&(c.pointerEvents=f===this?Kl(o==null?void 0:o.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(Jv),this.root.sharedNodes.clear()}}}function fb(t){t.updateLayout()}function db(t){var e;const n=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=t.layout,{animationType:s}=t.options,o=n.source!==t.layout.source;s==="size"?Pn(f=>{const d=o?n.measuredBox[f]:n.layoutBox[f],p=wn(d);d.min=i[f].min,d.max=d.min+p}):nM(s,n.layoutBox,i)&&Pn(f=>{const d=o?n.measuredBox[f]:n.layoutBox[f],p=wn(i[f]);d.max=d.min+p,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[f].max=t.relativeTarget[f].min+p)});const a=ks();ta(a,i,n.layoutBox);const l=ks();o?ta(l,t.applyTransform(r,!0),n.measuredBox):ta(l,i,n.layoutBox);const c=!QS(a);let u=!1;if(!t.resumeFrom){const f=t.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:d,layout:p}=f;if(d&&p){const g=yt();na(g,n.layoutBox,d.layoutBox);const _=yt();na(_,i,p.layoutBox),JS(g,_)||(u=!0),f.options.layoutRoot&&(t.relativeTarget=_,t.relativeTargetOrigin=g,t.relativeParent=f)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeTargetChanged:u})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function hb(t){Vo&&Ur.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function pb(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function mb(t){t.clearSnapshot()}function Jv(t){t.clearMeasurements()}function gb(t){t.isLayoutDirty=!1}function vb(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function e0(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function yb(t){t.resolveTargetDelta()}function _b(t){t.calcProjection()}function xb(t){t.resetSkewAndRotation()}function Sb(t){t.removeLeadSnapshot()}function t0(t,e,n){t.translate=dt(e.translate,0,n),t.scale=dt(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function n0(t,e,n,i){t.min=dt(e.min,n.min,i),t.max=dt(e.max,n.max,i)}function Mb(t,e,n,i){n0(t.x,e.x,n.x,i),n0(t.y,e.y,n.y,i)}function Eb(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const wb={duration:.45,ease:[.4,0,.1,1]},i0=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),r0=i0("applewebkit/")&&!i0("chrome/")?Math.round:en;function s0(t){t.min=r0(t.min),t.max=r0(t.max)}function Tb(t){s0(t.x),s0(t.y)}function nM(t,e,n){return t==="position"||t==="preserve-aspect"&&!PC(qv(e),qv(n),.2)}function Ab(t){var e;return t!==t.root&&((e=t.scroll)===null||e===void 0?void 0:e.wasRoot)}const Cb=tM({attachResizeListener:(t,e)=>Aa(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),df={current:void 0},iM=tM({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!df.current){const t=new Cb({});t.mount(window),t.setOptions({layoutScroll:!0}),df.current=t}return df.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),bb={pan:{Feature:XC},drag:{Feature:jC,ProjectionNode:iM,MeasureLayout:YS}};function o0(t,e,n){const{props:i}=t;t.animationState&&i.whileHover&&t.animationState.setActive("whileHover",n==="Start");const r="onHover"+n,s=i[r];s&&Ke.postRender(()=>s(e,Ba(e)))}class Rb extends Mr{mount(){const{current:e}=this.node;e&&(this.unmount=NT(e,n=>(o0(this.node,n,"Start"),i=>o0(this.node,i,"End"))))}unmount(){}}class Pb extends Mr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Oa(Aa(this.node.current,"focus",()=>this.onFocus()),Aa(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function a0(t,e,n){const{props:i}=t;t.animationState&&i.whileTap&&t.animationState.setActive("whileTap",n==="Start");const r="onTap"+(n==="End"?"":n),s=i[r];s&&Ke.postRender(()=>s(e,Ba(e)))}class Lb extends Mr{mount(){const{current:e}=this.node;e&&(this.unmount=FT(e,n=>(a0(this.node,n,"Start"),(i,{success:r})=>a0(this.node,i,r?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Qd=new WeakMap,hf=new WeakMap,Db=t=>{const e=Qd.get(t.target);e&&e(t)},Nb=t=>{t.forEach(Db)};function Ib({root:t,...e}){const n=t||document;hf.has(n)||hf.set(n,{});const i=hf.get(n),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(Nb,{root:t,...e})),i[r]}function Ub(t,e,n){const i=Ib(e);return Qd.set(t,n),i.observe(t),()=>{Qd.delete(t),i.unobserve(t)}}const kb={some:0,all:1};class Fb extends Mr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:kb[r]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,s&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:u,onViewportLeave:f}=this.node.getProps(),d=c?u:f;d&&d(l)};return Ub(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(Ob(e,n))&&this.startObserver()}unmount(){}}function Ob({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const Bb={inView:{Feature:Fb},tap:{Feature:Lb},focus:{Feature:Pb},hover:{Feature:Rb}},zb={layout:{ProjectionNode:iM,MeasureLayout:YS}},Jd={current:null},rM={current:!1};function Vb(){if(rM.current=!0,!!Bp)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>Jd.current=t.matches;t.addListener(e),e()}else Jd.current=!1}const Hb=[...AS,Xt,gr],Gb=t=>Hb.find(TS(t)),ro=new WeakMap;function Wb(t,e,n){for(const i in e){const r=e[i],s=n[i];if(Rt(r))t.addValue(i,r);else if(Rt(s))t.addValue(i,ci(r,{owner:t}));else if(s!==r)if(t.hasValue(i)){const o=t.getValue(i);o.liveStyle===!0?o.jump(r):o.hasAnimated||o.set(r)}else{const o=t.getStaticValue(i);t.addValue(i,ci(o!==void 0?o:r,{owner:t}))}}for(const i in n)e[i]===void 0&&t.removeValue(i);return e}const l0=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class sM{scrapeMotionValuesFromProps(e,n,i){return{}}constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:r,blockInitialAnimation:s,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=dm,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const p=mi.now();this.renderScheduledAt<p&&(this.renderScheduledAt=p,Ke.render(this.render,!1,!0))};const{latestValues:l,renderState:c,onUpdate:u}=o;this.onUpdate=u,this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=c,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=a,this.blockInitialAnimation=!!s,this.isControllingVariants=fu(n),this.isVariantNode=Ix(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:f,...d}=this.scrapeMotionValuesFromProps(n,{},this);for(const p in d){const g=d[p];l[p]!==void 0&&Rt(g)&&g.set(l[p],!1)}}mount(e){this.current=e,ro.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,i)=>this.bindToMotionValue(i,n)),rM.current||Vb(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Jd.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){ro.delete(this.current),this.projection&&this.projection.unmount(),gi(this.notifyUpdate),gi(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const n=this.features[e];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(e,n){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const i=rs.has(e),r=n.on("change",a=>{this.latestValues[e]=a,this.props.onUpdate&&Ke.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{r(),s(),o&&o(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in no){const n=no[e];if(!n)continue;const{isEnabled:i,Feature:r}=n;if(!this.features[e]&&r&&i(this.props)&&(this.features[e]=new r(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):yt()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<l0.length;i++){const r=l0[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s="on"+r,o=e[s];o&&(this.propEventSubscriptions[r]=this.on(r,o))}this.prevMotionValues=Wb(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const i=this.values.get(e);n!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=ci(n===null?void 0:n,{owner:this}),this.addValue(e,i)),i}readValue(e,n){var i;let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(i=this.getBaseTargetFromProps(this.props,e))!==null&&i!==void 0?i:this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&(ES(r)||pS(r))?r=parseFloat(r):!Gb(r)&&gr.test(n)&&(r=xS(e,n)),this.setBaseTarget(e,Rt(r)?r.get():r)),Rt(r)?r.get():r}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var n;const{initial:i}=this.props;let r;if(typeof i=="string"||typeof i=="object"){const o=Xp(this.props,i,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);o&&(r=o[e])}if(i&&r!==void 0)return r;const s=this.getBaseTargetFromProps(this.props,e);return s!==void 0&&!Rt(s)?s:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new sm),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class oM extends sM{constructor(){super(...arguments),this.KeyframeResolver=CS}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Rt(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function jb(t){return window.getComputedStyle(t)}class aM extends oM{constructor(){super(...arguments),this.type="html",this.renderInstance=Gx}readValueFromInstance(e,n){if(rs.has(n)){const i=fm(n);return i&&i.default||0}else{const i=jb(e),r=(zx(n)?i.getPropertyValue(n):i[n])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:n}){return jS(e,n)}build(e,n,i){Kp(e,n,i.transformTemplate)}scrapeMotionValuesFromProps(e,n,i){return Jp(e,n,i)}}class lM extends oM{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=yt}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(rs.has(n)){const i=fm(n);return i&&i.default||0}return n=Wx.has(n)?n:Gp(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,i){return Yx(e,n,i)}build(e,n,i){qp(e,n,this.isSVGTag,i.transformTemplate)}renderInstance(e,n,i,r){jx(e,n,i,r)}mount(e){this.isSVGTag=Qp(e.tagName),super.mount(e)}}const Xb=(t,e)=>jp(t)?new lM(e):new aM(e,{allowProjection:t!==ne.Fragment}),Yb=bT({...SC,...Bb,...bb,...zb},Xb),Et=Gw(Yb);function cM(t,e){let n;const i=()=>{const{currentTime:r}=e,o=(r===null?0:r.value)/100;n!==o&&t(o),n=o};return Ke.update(i,!0),()=>gi(i)}const Ql=new WeakMap;let Ki;function $b(t,e){if(e){const{inlineSize:n,blockSize:i}=e[0];return{width:n,height:i}}else return t instanceof SVGElement&&"getBBox"in t?t.getBBox():{width:t.offsetWidth,height:t.offsetHeight}}function Kb({target:t,contentRect:e,borderBoxSize:n}){var i;(i=Ql.get(t))===null||i===void 0||i.forEach(r=>{r({target:t,contentSize:e,get size(){return $b(t,n)}})})}function qb(t){t.forEach(Kb)}function Zb(){typeof ResizeObserver>"u"||(Ki=new ResizeObserver(qb))}function Qb(t,e){Ki||Zb();const n=pu(t);return n.forEach(i=>{let r=Ql.get(i);r||(r=new Set,Ql.set(i,r)),r.add(e),Ki==null||Ki.observe(i)}),()=>{n.forEach(i=>{const r=Ql.get(i);r==null||r.delete(e),r!=null&&r.size||Ki==null||Ki.unobserve(i)})}}const Jl=new Set;let ia;function Jb(){ia=()=>{const t={width:window.innerWidth,height:window.innerHeight},e={target:window,size:t,contentSize:t};Jl.forEach(n=>n(e))},window.addEventListener("resize",ia)}function eR(t){return Jl.add(t),ia||Jb(),()=>{Jl.delete(t),!Jl.size&&ia&&(ia=void 0)}}function tR(t,e){return typeof t=="function"?eR(t):Qb(t,e)}const nR=50,c0=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),iR=()=>({time:0,x:c0(),y:c0()}),rR={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function u0(t,e,n,i){const r=n[e],{length:s,position:o}=rR[e],a=r.current,l=n.time;r.current=t[`scroll${o}`],r.scrollLength=t[`scroll${s}`]-t[`client${s}`],r.offset.length=0,r.offset[0]=0,r.offset[1]=r.scrollLength,r.progress=mr(0,r.scrollLength,r.current);const c=i-l;r.velocity=c>nR?0:om(r.current-a,c)}function sR(t,e,n){u0(t,"x",e,n),u0(t,"y",e,n),e.time=n}function oR(t,e){const n={x:0,y:0};let i=t;for(;i&&i!==e;)if(i instanceof HTMLElement)n.x+=i.offsetLeft,n.y+=i.offsetTop,i=i.offsetParent;else if(i.tagName==="svg"){const r=i.getBoundingClientRect();i=i.parentElement;const s=i.getBoundingClientRect();n.x+=r.left-s.left,n.y+=r.top-s.top}else if(i instanceof SVGGraphicsElement){const{x:r,y:s}=i.getBBox();n.x+=r,n.y+=s;let o=null,a=i.parentNode;for(;!o;)a.tagName==="svg"&&(o=a),a=i.parentNode;i=o}else break;return n}const eh={start:0,center:.5,end:1};function f0(t,e,n=0){let i=0;if(t in eh&&(t=eh[t]),typeof t=="string"){const r=parseFloat(t);t.endsWith("px")?i=r:t.endsWith("%")?t=r/100:t.endsWith("vw")?i=r/100*document.documentElement.clientWidth:t.endsWith("vh")?i=r/100*document.documentElement.clientHeight:t=r}return typeof t=="number"&&(i=e*t),n+i}const aR=[0,0];function lR(t,e,n,i){let r=Array.isArray(t)?t:aR,s=0,o=0;return typeof t=="number"?r=[t,t]:typeof t=="string"&&(t=t.trim(),t.includes(" ")?r=t.split(" "):r=[t,eh[t]?t:"0"]),s=f0(r[0],n,i),o=f0(r[1],e),s-o}const cR={All:[[0,0],[1,1]]},uR={x:0,y:0};function fR(t){return"getBBox"in t&&t.tagName!=="svg"?t.getBBox():{width:t.clientWidth,height:t.clientHeight}}function dR(t,e,n){const{offset:i=cR.All}=n,{target:r=t,axis:s="y"}=n,o=s==="y"?"height":"width",a=r!==t?oR(r,t):uR,l=r===t?{width:t.scrollWidth,height:t.scrollHeight}:fR(r),c={width:t.clientWidth,height:t.clientHeight};e[s].offset.length=0;let u=!e[s].interpolate;const f=i.length;for(let d=0;d<f;d++){const p=lR(i[d],c[o],l[o],a[s]);!u&&p!==e[s].interpolatorOffsets[d]&&(u=!0),e[s].offset[d]=p}u&&(e[s].interpolate=IS(e[s].offset,mm(i),{clamp:!1}),e[s].interpolatorOffsets=[...e[s].offset]),e[s].progress=vi(0,1,e[s].interpolate(e[s].current))}function hR(t,e=t,n){if(n.x.targetOffset=0,n.y.targetOffset=0,e!==t){let i=e;for(;i&&i!==t;)n.x.targetOffset+=i.offsetLeft,n.y.targetOffset+=i.offsetTop,i=i.offsetParent}n.x.targetLength=e===t?e.scrollWidth:e.clientWidth,n.y.targetLength=e===t?e.scrollHeight:e.clientHeight,n.x.containerLength=t.clientWidth,n.y.containerLength=t.clientHeight}function pR(t,e,n,i={}){return{measure:()=>hR(t,i.target,n),update:r=>{sR(t,n,r),(i.offset||i.target)&&dR(t,n,i)},notify:()=>e(n)}}const Ro=new WeakMap,d0=new WeakMap,pf=new WeakMap,h0=t=>t===document.documentElement?window:t;function ym(t,{container:e=document.documentElement,...n}={}){let i=pf.get(e);i||(i=new Set,pf.set(e,i));const r=iR(),s=pR(e,t,r,n);if(i.add(s),!Ro.has(e)){const a=()=>{for(const d of i)d.measure()},l=()=>{for(const d of i)d.update(Pt.timestamp)},c=()=>{for(const d of i)d.notify()},u=()=>{Ke.read(a,!1,!0),Ke.read(l,!1,!0),Ke.update(c,!1,!0)};Ro.set(e,u);const f=h0(e);window.addEventListener("resize",u,{passive:!0}),e!==document.documentElement&&d0.set(e,tR(e,u)),f.addEventListener("scroll",u,{passive:!0})}const o=Ro.get(e);return Ke.read(o,!1,!0),()=>{var a;gi(o);const l=pf.get(e);if(!l||(l.delete(s),l.size))return;const c=Ro.get(e);Ro.delete(e),c&&(h0(e).removeEventListener("scroll",c),(a=d0.get(e))===null||a===void 0||a(),window.removeEventListener("resize",c))}}function mR({source:t,container:e,axis:n="y"}){t&&(e=t);const i={value:0},r=ym(s=>{i.value=s[n].progress*100},{container:e,axis:n});return{currentTime:i,cancel:r}}const mf=new Map;function uM({source:t,container:e=document.documentElement,axis:n="y"}={}){t&&(e=t),mf.has(e)||mf.set(e,{});const i=mf.get(e);return i[n]||(i[n]=qx()?new ScrollTimeline({source:e,axis:n}):mR({source:e,axis:n})),i[n]}function gR(t){return t.length===2}function fM(t){return t&&(t.target||t.offset)}function vR(t,e){return gR(t)||fM(e)?ym(n=>{t(n[e.axis].progress,n)},e):cM(t,uM(e))}function yR(t,e){if(t.flatten(),fM(e))return t.pause(),ym(n=>{t.time=t.duration*n[e.axis].progress},e);{const n=uM(e);return t.attachTimeline?t.attachTimeline(n,i=>(i.pause(),cM(r=>{i.time=i.duration*r},n))):en}}function _R(t,{axis:e="y",...n}={}){const i={axis:e,...n};return typeof t=="function"?vR(t,i):yR(t,i)}function p0(t,e){Uw(!!(!e||e.current))}const xR=()=>({scrollX:ci(0),scrollY:ci(0),scrollXProgress:ci(0),scrollYProgress:ci(0)});function SR({container:t,target:e,layoutEffect:n=!0,...i}={}){const r=Ia(xR);return(n?lu:ne.useEffect)(()=>(p0("target",e),p0("container",t),_R((o,{x:a,y:l})=>{r.scrollX.set(a.current),r.scrollXProgress.set(a.progress),r.scrollY.set(l.current),r.scrollYProgress.set(l.progress)},{...i,container:(t==null?void 0:t.current)||void 0,target:(e==null?void 0:e.current)||void 0})),[t,e,JSON.stringify(i.offset)]),r}function MR(t){const e=Ia(()=>ci(t)),{isStatic:n}=ne.useContext(Ua);if(n){const[,i]=ne.useState(t);ne.useEffect(()=>e.on("change",i),[])}return e}function m0(t){return typeof t=="number"?t:parseFloat(t)}function ER(t,e={}){const{isStatic:n}=ne.useContext(Ua),i=ne.useRef(null),r=MR(Rt(t)?m0(t.get()):t),s=ne.useRef(r.get()),o=ne.useRef(()=>{}),a=()=>{const c=i.current;c&&c.time===0&&c.sample(Pt.delta),l(),i.current=$A({keyframes:[r.get(),s.current],velocity:r.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...e,onUpdate:o.current})},l=()=>{i.current&&i.current.stop()};return ne.useInsertionEffect(()=>r.attach((c,u)=>n?u(c):(s.current=c,o.current=u,Ke.update(a),r.get()),l),[JSON.stringify(e)]),lu(()=>{if(Rt(t))return t.on("change",c=>r.set(m0(c)))},[r]),r}const wR=(t,e,n)=>{const i=e-t;return((n-t)%i+i)%i+t};function dM(t,e){return NS(t)?t[wR(0,t.length,e)]:t}function _m(t){return typeof t=="object"&&!Array.isArray(t)}function hM(t,e,n,i){return typeof t=="string"&&_m(e)?pu(t,n,i):t instanceof NodeList?Array.from(t):Array.isArray(t)?t:[t]}function TR(t,e,n){return t*(e+1)}function g0(t,e,n,i){var r;return typeof e=="number"?e:e.startsWith("-")||e.startsWith("+")?Math.max(0,t+parseFloat(e)):e==="<"?n:(r=i.get(e))!==null&&r!==void 0?r:t}function AR(t,e,n){for(let i=0;i<t.length;i++){const r=t[i];r.at>e&&r.at<n&&(mu(t,r),i--)}}function CR(t,e,n,i,r,s){AR(t,r,s);for(let o=0;o<e.length;o++)t.push({value:e[o],at:dt(r,s,i[o]),easing:dM(n,o)})}function bR(t,e){for(let n=0;n<t.length;n++)t[n]=t[n]/(e+1)}function RR(t,e){return t.at===e.at?t.value===null?1:e.value===null?-1:0:t.at-e.at}const PR="easeInOut";function LR(t,{defaultTransition:e={},...n}={},i,r){const s=e.duration||.3,o=new Map,a=new Map,l={},c=new Map;let u=0,f=0,d=0;for(let p=0;p<t.length;p++){const g=t[p];if(typeof g=="string"){c.set(g,f);continue}else if(!Array.isArray(g)){c.set(g.name,g0(f,g.at,u,c));continue}let[_,m,h={}]=g;h.at!==void 0&&(f=g0(f,h.at,u,c));let v=0;const y=(S,C,A,T=0,P=0)=>{const V=DR(S),{delay:x=0,times:E=mm(V),type:H="keyframes",repeat:z,repeatType:Y,repeatDelay:J=0,...G}=C;let{ease:W=e.ease||"easeOut",duration:L}=C;const $=typeof x=="function"?x(T,P):x,q=V.length,oe=hu(H)?H:r==null?void 0:r[H];if(q<=2&&oe){let ee=100;if(q===2&&UR(V)){const Ce=V[1]-V[0];ee=Math.abs(Ce)}const ce={...G};L!==void 0&&(ce.duration=di(L));const le=PT(ce,ee,oe);W=le.ease,L=le.duration}L??(L=s);const we=f+$;E.length===1&&E[0]===0&&(E[1]=1);const Fe=E.length-V.length;if(Fe>0&&US(E,Fe),V.length===1&&V.unshift(null),z){L=TR(L,z);const ee=[...V],ce=[...E];W=Array.isArray(W)?[...W]:[W];const le=[...W];for(let Ce=0;Ce<z;Ce++){V.push(...ee);for(let Te=0;Te<ee.length;Te++)E.push(ce[Te]+(Ce+1)),W.push(Te===0?"linear":dM(le,Te-1))}bR(E,z)}const X=we+L;CR(A,V,W,E,we,X),v=Math.max($+L,v),d=Math.max(X,d)};if(Rt(_)){const S=v0(_,a);y(m,h,y0("default",S))}else{const S=hM(_,m,i,l),C=S.length;for(let A=0;A<C;A++){m=m,h=h;const T=S[A],P=v0(T,a);for(const V in m)y(m[V],NR(h,V),y0(V,P),A,C)}}u=f,f+=v}return a.forEach((p,g)=>{for(const _ in p){const m=p[_];m.sort(RR);const h=[],v=[],y=[];for(let C=0;C<m.length;C++){const{at:A,value:T,easing:P}=m[C];h.push(T),v.push(mr(0,d,A)),y.push(P||"easeOut")}v[0]!==0&&(v.unshift(0),h.unshift(h[0]),y.unshift(PR)),v[v.length-1]!==1&&(v.push(1),h.push(null)),o.has(g)||o.set(g,{keyframes:{},transition:{}});const S=o.get(g);S.keyframes[_]=h,S.transition[_]={...e,duration:d,ease:y,times:v,...n}}}),o}function v0(t,e){return!e.has(t)&&e.set(t,{}),e.get(t)}function y0(t,e){return e[t]||(e[t]=[]),e[t]}function DR(t){return Array.isArray(t)?t:[t]}function NR(t,e){return t&&t[e]?{...t,...t[e]}:{...t}}const IR=t=>typeof t=="number",UR=t=>t.every(IR);function kR(t,e){return t in e}class FR extends sM{constructor(){super(...arguments),this.type="object"}readValueFromInstance(e,n){if(kR(n,e)){const i=e[n];if(typeof i=="string"||typeof i=="number")return i}}getBaseTargetFromProps(){}removeValueFromRenderState(e,n){delete n.output[e]}measureInstanceViewportBox(){return yt()}build(e,n){Object.assign(e.output,n)}renderInstance(e,{output:n}){Object.assign(e,n)}sortInstanceNodePosition(){return 0}}function OR(t){const e={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},n=KS(t)?new lM(e):new aM(e);n.mount(t),ro.set(t,n)}function BR(t){const e={presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}},n=new FR(e);n.mount(t),ro.set(t,n)}function zR(t,e){return Rt(t)||typeof t=="number"||typeof t=="string"&&!_m(e)}function pM(t,e,n,i){const r=[];if(zR(t,e))r.push($S(t,_m(e)&&e.default||e,n&&(n.default||n)));else{const s=hM(t,e,i),o=s.length;for(let a=0;a<o;a++){const l=s[a],c=l instanceof Element?OR:BR;ro.has(l)||c(l);const u=ro.get(l),f={...n};"delay"in f&&typeof f.delay=="function"&&(f.delay=f.delay(a,o)),r.push(...vm(u,{...e,transition:f},{}))}}return r}function VR(t,e,n){const i=[];return LR(t,e,n,{spring:pm}).forEach(({keyframes:s,transition:o},a)=>{i.push(...pM(a,s,o))}),i}function HR(t){return Array.isArray(t)&&t.some(Array.isArray)}function GR(t){function e(n,i,r){let s=[];return HR(n)?s=VR(n,i,t):s=pM(n,i,r,t),new Zx(s)}return e}const WR=GR(),jR={some:0,all:1};function XR(t,e,{root:n,margin:i,amount:r="some"}={}){const s=pu(t),o=new WeakMap,a=c=>{c.forEach(u=>{const f=o.get(u.target);if(u.isIntersecting!==!!f)if(u.isIntersecting){const d=e(u);typeof d=="function"?o.set(u.target,d):l.unobserve(u.target)}else typeof f=="function"&&(f(u),o.delete(u.target))})},l=new IntersectionObserver(a,{root:n,rootMargin:i,threshold:typeof r=="number"?r:jR[r]});return s.forEach(c=>l.observe(c)),()=>l.disconnect()}function YR(t,{root:e,margin:n,amount:i,once:r=!1}={}){const[s,o]=ne.useState(!1);return ne.useEffect(()=>{if(!t.current||r&&s)return;const a=()=>(o(!0),r?void 0:()=>o(!1)),l={root:e&&e.current||void 0,margin:n,amount:i};return XR(t.current,a,l)},[e,t,n,r,i]),s}const $R={tr:{nav:{links:[{label:"Hakkımızda",href:"#about"},{label:"Hizmetler",href:"#services"},{label:"Yaklaşım",href:"#approach"},{label:"Yaşam Döngüsü",href:"#lifecycle"},{label:"İletişim",href:"#contact"}],cta:"Bizimle çalışın",menuOpen:"Menüyü aç",menuClose:"Menüyü kapat",switchTo:"EN"},hero:{eyebrow:"Uçtan Uca Dijital Ürün ve Dönüşüm Ortağı",line1:"Ölçeklenmek için tasarlanmış",shiny:"dijital işler",line3:"kuruyoruz.",stat:"Fikirden ölçeğe",statSub:"tek ekip, tek sorumluluk.",ctaPrimary:"Projenizi konuşalım",ctaSecondary:"Hizmetlerimizi keşfedin",scroll:"Keşfetmek için kaydırın"},marquee:["Ürün Stratejisi","UX / UI","Yazılım Mühendisliği","Yapay Zekâ","DevOps & Güvenlik","Veri & Analitik","Büyüme","Kreatif & Medya"],about:{eyebrow:"Yazılım geliştirmenin ötesinde",title:"Teknolojiyi kalıcı bir iş avantajına dönüştürüyoruz.",body:"Strateji, tasarım, mühendislik ve operasyonu uçtan uca tek bir modelde birleştiriyoruz. İlk günden değer üreten ve ölçeklendikçe güçlenen platformlar kuruyoruz.",pillars:[{title:"Bütünleşik çalışma modeli",text:"Strateji, tasarım, mühendislik ve operasyon — dağınık tedarikçiler yerine tek bir bütün."},{title:"Tek sorumlu ekip",text:"Danışman, tasarımcı ve ajanslar arasında bölünmek yerine tek ve sorumlu bir ekip."},{title:"Ölçülebilir etki",text:"Sadece ürün değil; gelir, büyüme ve yatırıma hazırlık dahil ölçülebilir sonuçlar."},{title:"Uçtan uca sahiplik",text:"Fırsatı tanımlar, ürünü geliştirir ve lansman sonrası büyümeyi yönetiriz."}],imageCaption:"Fikirden ölçeklenmeye — tek ekip, kesintisiz süreç."},stats:[{value:12,prefix:"",suffix:"",label:"Uçtan uca uzmanlık alanı"},{value:100,prefix:"",suffix:"%",label:"Tek elden yönetim"},{value:360,prefix:"",suffix:"°",label:"Ürün yaşam döngüsü kapsamı"},{value:1,prefix:"#",suffix:"",label:"Tek ekip, tek sorumluluk"}],manifesto:{quotePre:"“Dağınık tedarikçiler değil; stratejiden koda, tasarımdan büyümeye",quoteAccent:"tek bir ekip.”",sub:"Fikirden küresel ölçeklenmeye kadar her adımı tek bir sorumlulukla yürütürüz."},services:{eyebrow:"Hizmetlerimiz",titlePre:"Bir ürünün ihtiyaç duyduğu",titleAccent:"her yetkinlik",subtitle:"Stratejiden koda, tasarımdan büyümeye 12 disiplin — birbirine entegre çalışan tek bir ekip içinde.",items:[{title:"Ürün Keşfi & Strateji",summary:"Doğru ürün vizyonunu ve büyüme rotasını veriyle kurguluyoruz.",items:["Pazar, rekabet ve kullanıcı araştırması","Ürün stratejisi ve yol haritası","Gelir modeli ve pazara giriş"]},{title:"Tasarım & Kullanıcı Deneyimi",summary:"Anlaşılır, güvenilir ve dönüşüm odaklı deneyimler tasarlıyoruz.",items:["UX araştırması ve UX/UI tasarımı","Tasarım sistemi ve prototipleme","Kullanılabilirlik ve dönüşüm optimizasyonu"]},{title:"Teknoloji & Yazılım Mühendisliği",summary:"Güvenli ve ölçeklenebilir mobil, web ve platform ürünleri geliştiriyoruz.",items:["Mobil, web ve platform geliştirme","API, veritabanı ve entegrasyonlar","Test, kalite güvence ve sürüm yönetimi"]},{title:"Altyapı, DevOps & Güvenlik",summary:"Kesintisiz ve güvenli operasyon için bulut altyapısı ve DevOps.",items:["Bulut altyapısı ve CI/CD","Siber güvenlik ve penetrasyon testleri","KVKK ve iş sürekliliği"]},{title:"Veri, Analitik & Yapay Zekâ",summary:"Veriyi ve yapay zekâyı operasyonel zekâya dönüştürüyoruz.",items:["İş zekâsı ve gösterge paneli tasarımı","Öneri, eşleştirme ve puanlama","Tahminleme ve yapay zekâ uygulamaları"]},{title:"Operasyon & İş Süreçleri",summary:"Süreçleri uçtan uca tasarlayıp operasyonel verimliliği artırıyoruz.",items:["Operasyon ve süreç tasarımı","Müşteri hizmetleri ve kalite yönetimi","Raporlama ve performans yönetimi"]},{title:"Pazaryeri & Ekosistem Yönetimi",summary:"Çok taraflı pazaryerleri için partner ve gelir paylaşımı yönetimi.",items:["Partner ve üye işyeri yönetimi","Satıcı kaydı ve mutabakat süreçleri","Hakediş ve komisyon modelleri"]},{title:"Pazarlama & Büyüme",summary:"Marka stratejisinden performans pazarlamasına sürdürülebilir büyüme.",items:["Marka ve dijital pazarlama stratejisi","SEO / ASO ve performans pazarlaması","CRM, sadakat ve topluluk yönetimi"]},{title:"Kreatif, Medya & İletişim",summary:"Markayı her temas noktasında güçlendiren içerik ve prodüksiyon.",items:["Kurumsal kimlik ve grafik tasarım","Video, fotoğraf ve hareketli tasarım","İçerik, medya planlama ve halkla ilişkiler"]},{title:"İş Geliştirme & Kurumsal Gelişim",summary:"Stratejik ortaklıklar ve yeni gelir modelleri geliştiriyoruz.",items:["Stratejik ortaklıklar","Ticari iş birlikleri","Kurumsal satış ve gelir modelleri"]},{title:"Fikri Mülkiyet & Hak Yönetimi",summary:"Üretilen değeri patent, marka ve lisans süreçleriyle koruyoruz.",items:["Patent ve marka tescili","Telif ve lisans yönetimi","Kaynak kod ve fikri mülkiyet koruması"]},{title:"Uçtan Uca Ürün Yaşam Döngüsü",summary:"Fikirden ölçeklenmeye tüm yaşam döngüsünü tek elden yönetiyoruz.",items:["Keşif, tasarım ve geliştirme","Canlıya alma ve operasyon","Büyüme ve uluslararası ölçeklenme"]}]},approach:{eyebrow:"Yaklaşımımız",titlePre:"Net bir süreç,",titleAccent:"öngörülebilir sonuç",note:"Her aşamada şeffaf iletişim ve ölçülebilir çıktılar — keşiften büyümeye kesintisiz bir akış.",steps:[{title:"Keşfet",text:"Gerçek fırsatı ortaya çıkarır; pazarı ve ürün vizyonunu netleştiririz."},{title:"Tasarla",text:"Çözümü somutlaştırır; deneyimi ve tasarım sistemini kurgularız."},{title:"Geliştir",text:"Ürünü, performans ve ölçeği gözeterek güvenli biçimde geliştiririz."},{title:"Büyüt",text:"Ürünü işletir; veri ve pazarlamayla sürdürülebilir büyümeyi sağlarız."}]},lifecycle:{eyebrow:"Uçtan Uca Yaşam Döngüsü",titlePre:"Fikirden",titleAccent:"ölçeklenebilir işe",titlePost:" kadar yanınızdayız.",body:"Keşiften operasyona, büyümeden yatırıma hazırlığa kadar ürünün her aşamasını tek bir ekip yürütür, yönetir ve koordine eder.",phases:[{label:"Keşfet",desc:"Gerçek fırsatı ortaya çıkarırız."},{label:"Tanımla",desc:"İleriye giden yolu belirleriz."},{label:"Tasarla",desc:"Çözümü somut hale getiririz."},{label:"Geliştir",desc:"Performans ve ölçek için mühendislik yaparız."},{label:"İşlet",desc:"Ürünü gerçek dünyada çalışır kılarız."},{label:"Büyüt",desc:"Lansman sonrası işi ileriye taşırız."}]},contact:{eyebrow:"İletişim",titlePre:"Bir sonraki ürününüzü",titleAccent:"birlikte geliştirelim.",body:"Fikrinizi, mevcut ürününüzü ya da büyüme hedefinizi anlatın; en uygun ekiple yola çıkalım.",emailLabel:"E-posta",locationLabel:"Lokasyon",location:"Türkiye · Global ölçekte hizmet",form:{name:"Ad Soyad",namePh:"Adınız",email:"E-posta",emailPh:"ornek@sirket.com",company:"Şirket",companyPh:"Şirketiniz",project:"Projeniz",projectPh:"Kısaca anlatın...",submit:"Mesaj gönder",sent:"Teşekkürler! En kısa sürede dönüş yapacağız.",sentNote:"İletiniz alındı."}},footer:{tagline:"Dijital işleri kurmak, dönüştürmek ve ölçeklendirmek için uçtan uca teknoloji ortağı.",slogan:"Fikirden teknolojiye, teknolojiden değere.",cols:[{title:"Hizmetler",links:["Ürün Keşfi & Strateji","Tasarım & UX","Yazılım Mühendisliği","Veri & Yapay Zekâ","Pazarlama & Büyüme"]},{title:"Şirket",links:["Hakkımızda","Yaklaşımımız","Yaşam Döngüsü","İletişim"]}],rights:"Tüm hakları saklıdır.",legal:["Gizlilik","KVKK","Şartlar"]}},en:{nav:{links:[{label:"About",href:"#about"},{label:"Services",href:"#services"},{label:"Approach",href:"#approach"},{label:"Lifecycle",href:"#lifecycle"},{label:"Contact",href:"#contact"}],cta:"Work with us",menuOpen:"Open menu",menuClose:"Close menu",switchTo:"TR"},hero:{eyebrow:"Your End-to-End Digital Product & Transformation Partner",line1:"We build digital businesses",shiny:"designed to",line3:"scale.",stat:"From idea to scale",statSub:"one team, one accountability.",ctaPrimary:"Start a conversation",ctaSecondary:"Explore our capabilities",scroll:"Scroll to explore"},marquee:["Product Strategy","UX / UI","Software Engineering","Artificial Intelligence","DevOps & Security","Data & Analytics","Growth","Creative & Media"],about:{eyebrow:"Beyond software delivery",title:"We turn technology into lasting business advantage.",body:"We unite strategy, design, engineering and operations in one delivery model — building platforms that create value from day one and grow stronger as they scale.",pillars:[{title:"Connected delivery model",text:"Strategy, design, engineering and operations — one flow, not fragmented vendors."},{title:"One accountable team",text:"A single accountable team instead of scattered consultants and agencies."},{title:"Measurable impact",text:"Not just a product — measurable outcomes across revenue, growth and investment readiness."},{title:"End-to-end ownership",text:"We define the opportunity, build the product and drive post-launch growth."}],imageCaption:"From idea to scale — one team, one continuous process."},stats:[{value:12,prefix:"",suffix:"",label:"End-to-end service disciplines"},{value:100,prefix:"",suffix:"%",label:"Single-hand ownership"},{value:360,prefix:"",suffix:"°",label:"Product lifecycle coverage"},{value:1,prefix:"#",suffix:"",label:"One team, one accountability"}],manifesto:{quotePre:"“Not fragmented vendors — from strategy to code, from design to growth,",quoteAccent:"one single team.”",sub:"From idea to global scale, we run every step with a single accountability."},services:{eyebrow:"Our Services",titlePre:"Every capability",titleAccent:"a product needs",subtitle:"From strategy to code, from design to growth — 12 disciplines within one integrated team.",items:[{title:"Product Discovery & Strategy",summary:"We shape the right product vision and growth path with data.",items:["Market, competitor & user research","Product strategy & roadmap","Revenue model & go-to-market"]},{title:"Design & User Experience",summary:"We design clear, trusted, conversion-focused experiences.",items:["UX research & UX/UI design","Design System & prototyping","Usability & conversion optimization"]},{title:"Technology & Software Engineering",summary:"We engineer secure, scalable mobile, web and platform products.",items:["Mobile, web & platform development","APIs, databases & integrations","Testing, QA & release management"]},{title:"Infrastructure, DevOps & Security",summary:"Cloud infrastructure and DevOps for secure, uninterrupted operations.",items:["Cloud infrastructure & CI/CD","Cybersecurity & penetration testing","GDPR/KVKK & business continuity"]},{title:"Data, Analytics & AI",summary:"We turn data and AI into operational intelligence.",items:["BI & dashboard design","Recommendation, matching & scoring","Forecasting & AI applications"]},{title:"Operations & Business Processes",summary:"We design processes end to end to raise operational efficiency.",items:["Operation & process design","Customer service & quality management","Reporting & performance management"]},{title:"Marketplace & Ecosystem Management",summary:"Partner and revenue-share management for multi-sided marketplaces.",items:["Partner & merchant management","Onboarding & reconciliation","Settlement & commission models"]},{title:"Marketing & Growth",summary:"Sustainable growth from brand strategy to performance marketing.",items:["Brand & digital marketing strategy","SEO / ASO & performance marketing","CRM, loyalty & community"]},{title:"Creative, Media & Communication",summary:"Content and production that strengthen the brand at every touchpoint.",items:["Corporate identity & graphic design","Video, photography & motion design","Content, media planning & PR"]},{title:"Business Development & Corporate Growth",summary:"We build strategic partnerships and new revenue models.",items:["Strategic partnerships","Commercial collaborations","Corporate sales & revenue models"]},{title:"Intellectual Property & Rights Management",summary:"We protect created value through patent, trademark and license processes.",items:["Patent & trademark registration","Copyright & license management","Source code & IP protection"]},{title:"End-to-End Product Lifecycle",summary:"We manage the entire lifecycle from idea to scale, from a single hand.",items:["Discovery, design & development","Go-live & operations","Growth & international scaling"]}]},approach:{eyebrow:"Our Approach",titlePre:"A clear process,",titleAccent:"predictable outcomes",note:"Transparent communication and measurable outputs at every stage — an uninterrupted flow from discovery to growth.",steps:[{title:"Discover",text:"We uncover the real opportunity and clarify the market and product vision."},{title:"Design",text:"We make the solution tangible — shaping the experience and design system."},{title:"Engineer",text:"We build the product securely, engineered for performance and scale."},{title:"Grow",text:"We run the product and drive sustainable growth with data and marketing."}]},lifecycle:{eyebrow:"End-to-End Lifecycle",titlePre:"From ambition to measurable",titleAccent:"impact",titlePost:" — we are with you all the way.",body:"From discovery and operations to growth and investment readiness, one team runs, manages and coordinates every stage of the product.",phases:[{label:"Discover",desc:"We uncover the real opportunity."},{label:"Define",desc:"We establish the path forward."},{label:"Design",desc:"We make the solution tangible."},{label:"Engineer",desc:"We engineer for performance and scale."},{label:"Operate",desc:"We make the product work in the real world."},{label:"Grow",desc:"We improve what happens after launch."}]},contact:{eyebrow:"Contact",titlePre:"Let's build your next product",titleAccent:"together.",body:"Tell us about your idea, your current product or your growth goal — and we will set off with the right team.",emailLabel:"Email",locationLabel:"Location",location:"Türkiye · Serving at global scale",form:{name:"Full Name",namePh:"Your name",email:"Email",emailPh:"you@company.com",company:"Company",companyPh:"Your company",project:"Your project",projectPh:"Tell us briefly...",submit:"Send message",sent:"Thank you! We'll get back to you shortly.",sentNote:"Your message has been received."}},footer:{tagline:"An end-to-end technology partner for building, transforming and scaling digital businesses.",slogan:"From ambition to technology. From technology to impact.",cols:[{title:"Services",links:["Product Discovery & Strategy","Design & UX","Software Engineering","Data & AI","Marketing & Growth"]},{title:"Company",links:["About","Approach","Lifecycle","Contact"]}],rights:"All rights reserved.",legal:["Privacy","KVKK","Terms"]}}},mM=ne.createContext(null);function KR({children:t}){const[e,n]=ne.useState(()=>typeof window>"u"?"en":localStorage.getItem("lang")||"en");ne.useEffect(()=>{localStorage.setItem("lang",e),document.documentElement.lang=e},[e]);const i={lang:e,setLang:n,toggle:()=>n(e==="tr"?"en":"tr"),c:$R[e]};return b.jsx(mM.Provider,{value:i,children:t})}function zn(){const t=ne.useContext(mM);if(!t)throw new Error("useI18n must be used within LanguageProvider");return t}/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qR=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),gM=(...t)=>t.filter((e,n,i)=>!!e&&i.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ZR={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QR=ne.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...a},l)=>ne.createElement("svg",{ref:l,...ZR,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:gM("lucide",r),...a},[...o.map(([c,u])=>ne.createElement(c,u)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nt=(t,e)=>{const n=ne.forwardRef(({className:i,...r},s)=>ne.createElement(QR,{ref:s,iconNode:e,className:gM(`lucide-${qR(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th=nt("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=nt("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JR=nt("BrainCircuit",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M9 13a4.5 4.5 0 0 0 3-4",key:"10igwf"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M12 13h4",key:"1ku699"}],["path",{d:"M12 18h6a2 2 0 0 1 2 2v1",key:"105ag5"}],["path",{d:"M12 8h8",key:"1lhi5i"}],["path",{d:"M16 8V5a2 2 0 0 1 2-2",key:"u6izg6"}],["circle",{cx:"16",cy:"13",r:".5",key:"ry7gng"}],["circle",{cx:"18",cy:"3",r:".5",key:"1aiba7"}],["circle",{cx:"20",cy:"21",r:".5",key:"yhc1fs"}],["circle",{cx:"20",cy:"8",r:".5",key:"1e43v0"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eP=nt("ChartLine",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tP=nt("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vM=nt("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nP=nt("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iP=nt("Handshake",[["path",{d:"m11 17 2 2a1 1 0 1 0 3-3",key:"efffak"}],["path",{d:"m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4",key:"9pr0kb"}],["path",{d:"m21 3 1 11h-2",key:"1tisrp"}],["path",{d:"M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3",key:"1uvwmv"}],["path",{d:"M3 4h8",key:"1ep09j"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rP=nt("Infinity",[["path",{d:"M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z",key:"1z0uae"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sP=nt("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oP=nt("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aP=nt("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lP=nt("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cP=nt("Network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yM=nt("PenTool",[["path",{d:"M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z",key:"nt11vn"}],["path",{d:"m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18",key:"15qc1e"}],["path",{d:"m2.3 2.3 7.286 7.286",key:"1wuzzi"}],["circle",{cx:"11",cy:"11",r:"2",key:"xmgehs"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uP=nt("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fP=nt("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dP=nt("Scale",[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hP=nt("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pP=nt("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mP=nt("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gP=nt("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vP=nt("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yP=nt("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _P=nt("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xP=nt("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SP=nt("Workflow",[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]]);/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MP=nt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function yu({variant:t="color",className:e=""}){const n=t==="white"?"/insparion-logo.png":"/insparion-logo-siyah.png";return b.jsx("img",{src:n,alt:"INSPARION",draggable:!1,className:`select-none ${e}`})}function _0({className:t=""}){const{lang:e,setLang:n}=zn();return b.jsx("div",{className:`flex items-center rounded-full border border-white/10 bg-white/[0.04] p-0.5 text-xs font-semibold ${t}`,children:["tr","en"].map(i=>b.jsx("button",{onClick:()=>n(i),className:`rounded-full px-2.5 py-1 uppercase transition-colors ${e===i?"bg-white text-ink-900":"text-white/60 hover:text-white"}`,"aria-pressed":e===i,children:i},i))})}function EP(){const{c:t}=zn(),[e,n]=ne.useState(!1),[i,r]=ne.useState(!1);return ne.useEffect(()=>{const s=()=>n(window.scrollY>24);return s(),window.addEventListener("scroll",s,{passive:!0}),()=>window.removeEventListener("scroll",s)},[]),b.jsxs(Et.header,{initial:{y:-80,opacity:0},animate:{y:0,opacity:1},transition:{duration:.7,ease:[.22,1,.36,1]},className:"fixed inset-x-0 top-0 z-50",children:[b.jsx("div",{className:`transition-all duration-500 ${e?"border-b border-white/10 bg-ink-900/70 backdrop-blur-xl":"border-b border-transparent bg-transparent"}`,children:b.jsxs("nav",{className:"container-x flex items-center justify-between py-3.5",children:[b.jsx("a",{href:"#top",className:"flex items-center","aria-label":"INSPARION",children:b.jsx(yu,{variant:"white",className:`w-auto transition-[height] duration-300 ease-out ${e?"h-16 sm:h-20":"h-20 sm:h-24"}`})}),b.jsx("div",{className:"hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] px-2 py-1.5 backdrop-blur-xl lg:flex",children:t.nav.links.map(s=>b.jsx("a",{href:s.href,className:"rounded-full px-4 py-2 text-sm text-white/75 transition-colors hover:bg-white/10 hover:text-white",children:s.label},s.href))}),b.jsxs("div",{className:"flex items-center gap-3",children:[b.jsx(_0,{className:"hidden sm:flex"}),b.jsxs("a",{href:"#contact",className:"group hidden items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink-900 transition-colors hover:bg-white/90 md:inline-flex",children:[t.nav.cta,b.jsx(nh,{className:"h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"})]}),b.jsx("button",{onClick:()=>r(s=>!s),className:"inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white lg:hidden","aria-label":i?t.nav.menuClose:t.nav.menuOpen,children:i?b.jsx(MP,{className:"h-5 w-5"}):b.jsx(lP,{className:"h-5 w-5"})})]})]})}),b.jsx(Iw,{children:i&&b.jsx(Et.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.3},className:"overflow-hidden border-b border-white/10 bg-ink-900/95 backdrop-blur-xl lg:hidden",children:b.jsxs("div",{className:"container-x flex flex-col gap-1 py-4",children:[t.nav.links.map(s=>b.jsx("a",{href:s.href,onClick:()=>r(!1),className:"rounded-xl px-4 py-3 text-base text-white/80 transition-colors hover:bg-white/5 hover:text-white",children:s.label},s.href)),b.jsxs("div",{className:"flex items-center justify-between gap-3 px-2 pt-3",children:[b.jsxs("a",{href:"#contact",onClick:()=>r(!1),className:"inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink-900",children:[t.nav.cta," ",b.jsx(nh,{className:"h-4 w-4"})]}),b.jsx(_0,{})]})]})})})]})}function wP({text:t,className:e="",speed:n=3}){return b.jsx(Et.span,{className:e,style:{backgroundImage:"linear-gradient(100deg, #64CEFB 0%, #64CEFB 38%, #ffffff 50%, #64CEFB 62%, #64CEFB 100%)",backgroundSize:"220% 100%",WebkitBackgroundClip:"text",backgroundClip:"text",WebkitTextFillColor:"transparent",color:"transparent"},initial:{backgroundPosition:"200% 50%"},animate:{backgroundPosition:"-20% 50%"},transition:{duration:n,repeat:1/0,ease:"linear"},children:t})}const TP="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_105406_16f4600d-7a92-4292-b96e-b19156c7830a.mp4";function AP(){const{c:t}=zn();return b.jsxs("section",{id:"top",className:"relative h-screen min-h-[680px] w-full overflow-hidden bg-black",children:[b.jsx("video",{className:"absolute inset-0 h-full w-full object-cover",autoPlay:!0,loop:!0,muted:!0,playsInline:!0,poster:"/images/abstract.jpg",children:b.jsx("source",{src:TP,type:"video/mp4"})}),b.jsx("div",{className:"absolute inset-0 bg-black/45"}),b.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-ink-900/70 via-transparent to-ink-900"}),b.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-ink-900/60 via-transparent to-transparent"}),b.jsxs("div",{className:"relative z-10 flex h-full flex-col",children:[b.jsxs("div",{className:"container-x flex flex-1 flex-col justify-center pt-32 sm:pt-36",children:[b.jsxs(Et.span,{initial:{opacity:0,y:14},animate:{opacity:1,y:0},transition:{duration:.7,delay:.35},className:"mb-7 inline-flex w-fit items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/70 md:text-sm",children:[b.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-brand-sky"}),t.hero.eyebrow]}),b.jsxs(Et.h1,{initial:{opacity:0,y:24},animate:{opacity:1,y:0},transition:{duration:.9,delay:.45,ease:[.22,1,.36,1]},className:"font-display text-4xl font-medium leading-[1.32] tracking-tightest text-white sm:text-5xl md:text-6xl lg:text-7xl",children:[t.hero.line1,b.jsx("br",{}),b.jsx(wP,{text:t.hero.shiny}),b.jsx("br",{}),b.jsx("span",{className:"text-white",children:t.hero.line3})]}),b.jsxs(Et.div,{initial:{opacity:0,y:16},animate:{opacity:1,y:0},transition:{duration:.7,delay:.55},className:"mt-10 flex items-center gap-3.5",children:[b.jsx("span",{className:"h-9 w-[3px] flex-none rounded-full bg-gradient-to-b from-brand-sky to-brand-fuchsia"}),b.jsxs("p",{className:"text-sm text-white/75 md:text-base",children:[b.jsx("span",{className:"gradient-text font-semibold",children:t.hero.stat}),b.jsx("span",{className:"text-white/35",children:" — "}),t.hero.statSub]})]}),b.jsxs(Et.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.65},className:"mt-11 flex flex-col items-start gap-4 sm:flex-row sm:items-center",children:[b.jsxs("a",{href:"#contact",className:"group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ink-900 transition-all duration-300 hover:bg-white/90 md:px-8 md:py-4",children:[t.hero.ctaPrimary,b.jsx(th,{className:"h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"})]}),b.jsxs("a",{href:"#services",className:"group inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/10 md:px-8 md:py-4",children:[t.hero.ctaSecondary,b.jsx(th,{className:"h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"})]})]})]}),b.jsx(Et.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:1.2},className:"container-x pb-8",children:b.jsxs("div",{className:"flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/50",children:[b.jsx("span",{className:"relative flex h-9 w-5 items-start justify-center rounded-full border border-white/30 p-1",children:b.jsx(Et.span,{className:"h-1.5 w-1.5 rounded-full bg-white",animate:{y:[0,12,0]},transition:{duration:1.8,repeat:1/0,ease:"easeInOut"}})}),t.hero.scroll]})})]})]})}function CP(){const{c:t}=zn(),e=[...t.marquee,...t.marquee];return b.jsxs("div",{className:"relative border-y border-white/10 bg-ink-800/50 py-5",children:[b.jsx("div",{className:"pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink-900 to-transparent"}),b.jsx("div",{className:"pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink-900 to-transparent"}),b.jsx("div",{className:"flex w-max animate-marquee items-center gap-10 px-5",children:e.map((n,i)=>b.jsxs("div",{className:"flex items-center gap-10",children:[b.jsx("span",{className:"whitespace-nowrap text-lg font-medium text-white/55",children:n}),b.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-gradient-to-r from-brand-sky to-brand-fuchsia"})]},i))})]})}const bP=(t,e)=>({hidden:{opacity:0,y:t},show:{opacity:1,y:0,transition:{duration:.7,delay:e,ease:[.22,1,.36,1]}}});function pt({children:t,delay:e=0,y:n=28,className:i,once:r=!0}){return b.jsx(Et.div,{className:i,variants:bP(n,e),initial:"hidden",whileInView:"show",viewport:{once:r,amount:.25},children:t})}const RP={hidden:{},show:{transition:{staggerChildren:.09,delayChildren:.05}}},PP={hidden:{opacity:0,y:26},show:{opacity:1,y:0,transition:{duration:.6,ease:[.22,1,.36,1]}}},LP=[sP,xP,fP,uP];function DP(){const{c:t}=zn();return b.jsxs("section",{id:"about",className:"relative overflow-hidden py-24 sm:py-32",children:[b.jsx("div",{className:"absolute -left-40 top-20 h-96 w-96 rounded-full bg-brand-blue/15 blur-[120px]"}),b.jsx("div",{className:"absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-brand-purple/15 blur-[120px]"}),b.jsx("div",{className:"container-x relative",children:b.jsxs("div",{className:"grid gap-14 lg:grid-cols-2 lg:gap-20",children:[b.jsxs("div",{children:[b.jsx(pt,{children:b.jsx("span",{className:"text-sm font-semibold uppercase tracking-[0.2em] text-brand-sky",children:t.about.eyebrow})}),b.jsx(pt,{delay:.05,children:b.jsx("h2",{className:"mt-5 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl",children:t.about.title})}),b.jsx(pt,{delay:.1,children:b.jsx("p",{className:"mt-6 max-w-xl text-lg leading-relaxed text-white/65",children:t.about.body})}),b.jsx(pt,{delay:.15,children:b.jsxs("div",{className:"group relative mt-10 overflow-hidden rounded-3xl border border-white/10",children:[b.jsx(Et.img,{src:"/images/about-dev.jpg",alt:"INSPARION — ürün geliştirme",className:"h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-80",loading:"lazy"}),b.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/20 to-transparent"}),b.jsx("div",{className:"absolute bottom-5 left-5 right-5 flex items-end justify-between",children:b.jsx("p",{className:"max-w-xs text-sm text-white/85",children:t.about.imageCaption})})]})})]}),b.jsx("div",{className:"grid gap-5 sm:grid-cols-2 lg:content-center",children:t.about.pillars.map((e,n)=>{const i=LP[n];return b.jsx(pt,{delay:n*.08,className:"h-full",children:b.jsxs("div",{className:"group h-full rounded-2xl glass p-6 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.07]",children:[b.jsx("div",{className:"flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue/25 to-brand-purple/25 text-brand-sky ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-110",children:b.jsx(i,{className:"h-6 w-6"})}),b.jsx("h3",{className:"mt-5 text-lg font-semibold text-white",children:e.title}),b.jsx("p",{className:"mt-2 text-sm leading-relaxed text-white/60",children:e.text})]})},e.title)})})]})})]})}function NP({value:t,prefix:e="",suffix:n=""}){const i=ne.useRef(null),r=YR(i,{once:!0,amount:.5}),[s,o]=ne.useState(0);return ne.useEffect(()=>{if(!r)return;const a=WR(0,t,{duration:1.6,ease:[.22,1,.36,1],onUpdate:l=>o(Math.round(l))});return()=>a.stop()},[r,t]),b.jsxs("span",{ref:i,children:[e,s,n]})}function IP(){const{c:t}=zn();return b.jsx("section",{className:"relative py-20",children:b.jsx("div",{className:"container-x",children:b.jsx("div",{className:"grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] lg:grid-cols-4",children:t.stats.map((e,n)=>b.jsxs(Et.div,{initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.4},transition:{duration:.6,delay:n*.1},className:"bg-ink-900/40 p-8 text-center sm:p-10",children:[b.jsx("div",{className:"font-display text-5xl font-bold tracking-tight gradient-text sm:text-6xl",children:b.jsx(NP,{value:e.value,prefix:e.prefix,suffix:e.suffix})}),b.jsx("p",{className:"mt-3 text-sm text-white/60",children:e.label})]},e.label))})})})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xm="169",UP=0,x0=1,kP=2,_M=1,FP=2,wi=3,vr=0,fn=1,Ci=2,fr=0,Xs=1,S0=2,M0=3,E0=4,OP=5,Or=100,BP=101,zP=102,VP=103,HP=104,GP=200,WP=201,jP=202,XP=203,ih=204,rh=205,YP=206,$P=207,KP=208,qP=209,ZP=210,QP=211,JP=212,e2=213,t2=214,sh=0,oh=1,ah=2,so=3,lh=4,ch=5,uh=6,fh=7,xM=0,n2=1,i2=2,dr=0,r2=1,s2=2,o2=3,a2=4,l2=5,c2=6,u2=7,SM=300,oo=301,ao=302,dh=303,hh=304,_u=306,ph=1e3,Wr=1001,mh=1002,Un=1003,f2=1004,pl=1005,qn=1006,gf=1007,jr=1008,Fi=1009,MM=1010,EM=1011,Ca=1012,Sm=1013,es=1014,Pi=1015,za=1016,Mm=1017,Em=1018,lo=1020,wM=35902,TM=1021,AM=1022,Qn=1023,CM=1024,bM=1025,Ys=1026,co=1027,RM=1028,wm=1029,PM=1030,Tm=1031,Am=1033,ec=33776,tc=33777,nc=33778,ic=33779,gh=35840,vh=35841,yh=35842,_h=35843,xh=36196,Sh=37492,Mh=37496,Eh=37808,wh=37809,Th=37810,Ah=37811,Ch=37812,bh=37813,Rh=37814,Ph=37815,Lh=37816,Dh=37817,Nh=37818,Ih=37819,Uh=37820,kh=37821,rc=36492,Fh=36494,Oh=36495,LM=36283,Bh=36284,zh=36285,Vh=36286,d2=3200,h2=3201,p2=0,m2=1,er="",oi="srgb",Er="srgb-linear",Cm="display-p3",xu="display-p3-linear",Bc="linear",ct="srgb",zc="rec709",Vc="p3",as=7680,w0=519,g2=512,v2=513,y2=514,DM=515,_2=516,x2=517,S2=518,M2=519,T0=35044,A0="300 es",Li=2e3,Hc=2001;class vo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let C0=1234567;const ra=Math.PI/180,ba=180/Math.PI;function yo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wt[t&255]+Wt[t>>8&255]+Wt[t>>16&255]+Wt[t>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[n&63|128]+Wt[n>>8&255]+"-"+Wt[n>>16&255]+Wt[n>>24&255]+Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]).toLowerCase()}function Qt(t,e,n){return Math.max(e,Math.min(n,t))}function bm(t,e){return(t%e+e)%e}function E2(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function w2(t,e,n){return t!==e?(n-t)/(e-t):0}function sa(t,e,n){return(1-n)*t+n*e}function T2(t,e,n,i){return sa(t,e,1-Math.exp(-n*i))}function A2(t,e=1){return e-Math.abs(bm(t,e*2)-e)}function C2(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function b2(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function R2(t,e){return t+Math.floor(Math.random()*(e-t+1))}function P2(t,e){return t+Math.random()*(e-t)}function L2(t){return t*(.5-Math.random())}function D2(t){t!==void 0&&(C0=t);let e=C0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function N2(t){return t*ra}function I2(t){return t*ba}function U2(t){return(t&t-1)===0&&t!==0}function k2(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function F2(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function O2(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),u=o((e+i)/2),f=s((e-i)/2),d=o((e-i)/2),p=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":t.set(a*u,l*f,l*d,a*c);break;case"YZY":t.set(l*d,a*u,l*f,a*c);break;case"ZXZ":t.set(l*f,l*d,a*u,a*c);break;case"XZX":t.set(a*u,l*g,l*p,a*c);break;case"YXY":t.set(l*p,a*u,l*g,a*c);break;case"ZYZ":t.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ss(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Kt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const B2={DEG2RAD:ra,RAD2DEG:ba,generateUUID:yo,clamp:Qt,euclideanModulo:bm,mapLinear:E2,inverseLerp:w2,lerp:sa,damp:T2,pingpong:A2,smoothstep:C2,smootherstep:b2,randInt:R2,randFloat:P2,randFloatSpread:L2,seededRandom:D2,degToRad:N2,radToDeg:I2,isPowerOfTwo:U2,ceilPowerOfTwo:k2,floorPowerOfTwo:F2,setQuaternionFromProperEuler:O2,normalize:Kt,denormalize:Ss};class it{constructor(e=0,n=0){it.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,n,i,r,s,o,a,l,c){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],g=i[8],_=r[0],m=r[3],h=r[6],v=r[1],y=r[4],S=r[7],C=r[2],A=r[5],T=r[8];return s[0]=o*_+a*v+l*C,s[3]=o*m+a*y+l*A,s[6]=o*h+a*S+l*T,s[1]=c*_+u*v+f*C,s[4]=c*m+u*y+f*A,s[7]=c*h+u*S+f*T,s[2]=d*_+p*v+g*C,s[5]=d*m+p*y+g*A,s[8]=d*h+p*S+g*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,p=c*s-o*l,g=n*f+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=d*_,e[4]=(u*n-r*l)*_,e[5]=(r*s-a*n)*_,e[6]=p*_,e[7]=(i*l-c*n)*_,e[8]=(o*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(vf.makeScale(e,n)),this}rotate(e){return this.premultiply(vf.makeRotation(-e)),this}translate(e,n){return this.premultiply(vf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const vf=new ke;function NM(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Gc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function z2(){const t=Gc("canvas");return t.style.display="block",t}const b0={};function sc(t){t in b0||(b0[t]=!0,console.warn(t))}function V2(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function H2(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function G2(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const R0=new ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),P0=new ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Po={[Er]:{transfer:Bc,primaries:zc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[oi]:{transfer:ct,primaries:zc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[xu]:{transfer:Bc,primaries:Vc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(P0),fromReference:t=>t.applyMatrix3(R0)},[Cm]:{transfer:ct,primaries:Vc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(P0),fromReference:t=>t.applyMatrix3(R0).convertLinearToSRGB()}},W2=new Set([Er,xu]),Qe={enabled:!0,_workingColorSpace:Er,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!W2.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Po[e].toReference,r=Po[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Po[t].primaries},getTransfer:function(t){return t===er?Bc:Po[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Po[e].luminanceCoefficients)}};function $s(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function yf(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ls;class j2{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ls===void 0&&(ls=Gc("canvas")),ls.width=e.width,ls.height=e.height;const i=ls.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ls}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Gc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=$s(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor($s(n[i]/255)*255):n[i]=$s(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let X2=0;class IM{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:X2++}),this.uuid=yo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(_f(r[o].image)):s.push(_f(r[o]))}else s=_f(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function _f(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?j2.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Y2=0;class dn extends vo{constructor(e=dn.DEFAULT_IMAGE,n=dn.DEFAULT_MAPPING,i=Wr,r=Wr,s=qn,o=jr,a=Qn,l=Fi,c=dn.DEFAULT_ANISOTROPY,u=er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Y2++}),this.uuid=yo(),this.name="",this.source=new IM(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==SM)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ph:e.x=e.x-Math.floor(e.x);break;case Wr:e.x=e.x<0?0:1;break;case mh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ph:e.y=e.y-Math.floor(e.y);break;case Wr:e.y=e.y<0?0:1;break;case mh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=SM;dn.DEFAULT_ANISOTROPY=1;class wt{constructor(e=0,n=0,i=0,r=1){wt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,S=(p+1)/2,C=(h+1)/2,A=(u+d)/4,T=(f+_)/4,P=(g+m)/4;return y>S&&y>C?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=A/i,s=T/i):S>C?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=A/r,s=P/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=T/s,r=P/s),this.set(i,r,s,n),this}let v=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(f-_)/v,this.z=(d-u)/v,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $2 extends vo{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new wt(0,0,e,n),this.scissorTest=!1,this.viewport=new wt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new dn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new IM(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ts extends $2{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class UM extends dn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Un,this.minFilter=Un,this.wrapR=Wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class K2 extends dn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Un,this.minFilter=Un,this.wrapR=Wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Va{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=g,e[n+3]=_;return}if(f!==_||l!==d||c!==p||u!==g){let m=1-a;const h=l*d+c*p+u*g+f*_,v=h>=0?1:-1,y=1-h*h;if(y>Number.EPSILON){const C=Math.sqrt(y),A=Math.atan2(C,h*v);m=Math.sin(m*A)/C,a=Math.sin(a*A)/C}const S=a*v;if(l=l*m+d*S,c=c*m+p*S,u=u*m+g*S,f=f*m+_*S,m===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=C,c*=C,u*=C,f*=C}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+u*f+l*p-c*d,e[n+1]=l*g+u*d+c*f-a*p,e[n+2]=c*g+u*p+a*d-l*f,e[n+3]=u*g-a*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f-d*p*g;break;case"YXZ":this._x=d*u*f+c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f+d*p*g;break;case"ZXY":this._x=d*u*f-c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f-d*p*g;break;case"ZYX":this._x=d*u*f-c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f+d*p*g;break;case"YZX":this._x=d*u*f+c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f-d*p*g;break;case"XZY":this._x=d*u*f-c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,n=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(L0.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(L0.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return xf.copy(this).projectOnVector(e),this.sub(xf)}reflect(e){return this.sub(xf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xf=new O,L0=new Va;class Ha{constructor(e=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Gn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Gn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Gn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Gn):Gn.fromBufferAttribute(s,o),Gn.applyMatrix4(e.matrixWorld),this.expandByPoint(Gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ml.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ml.copy(i.boundingBox)),ml.applyMatrix4(e.matrixWorld),this.union(ml)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Lo),gl.subVectors(this.max,Lo),cs.subVectors(e.a,Lo),us.subVectors(e.b,Lo),fs.subVectors(e.c,Lo),Hi.subVectors(us,cs),Gi.subVectors(fs,us),Ar.subVectors(cs,fs);let n=[0,-Hi.z,Hi.y,0,-Gi.z,Gi.y,0,-Ar.z,Ar.y,Hi.z,0,-Hi.x,Gi.z,0,-Gi.x,Ar.z,0,-Ar.x,-Hi.y,Hi.x,0,-Gi.y,Gi.x,0,-Ar.y,Ar.x,0];return!Sf(n,cs,us,fs,gl)||(n=[1,0,0,0,1,0,0,0,1],!Sf(n,cs,us,fs,gl))?!1:(vl.crossVectors(Hi,Gi),n=[vl.x,vl.y,vl.z],Sf(n,cs,us,fs,gl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const _i=[new O,new O,new O,new O,new O,new O,new O,new O],Gn=new O,ml=new Ha,cs=new O,us=new O,fs=new O,Hi=new O,Gi=new O,Ar=new O,Lo=new O,gl=new O,vl=new O,Cr=new O;function Sf(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Cr.fromArray(t,s);const a=r.x*Math.abs(Cr.x)+r.y*Math.abs(Cr.y)+r.z*Math.abs(Cr.z),l=e.dot(Cr),c=n.dot(Cr),u=i.dot(Cr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const q2=new Ha,Do=new O,Mf=new O;class Su{constructor(e=new O,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):q2.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Do.subVectors(e,this.center);const n=Do.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Do,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Do.copy(e.center).add(Mf)),this.expandByPoint(Do.copy(e.center).sub(Mf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xi=new O,Ef=new O,yl=new O,Wi=new O,wf=new O,_l=new O,Tf=new O;class kM{constructor(e=new O,n=new O(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=xi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(xi.copy(this.origin).addScaledVector(this.direction,n),xi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Ef.copy(e).add(n).multiplyScalar(.5),yl.copy(n).sub(e).normalize(),Wi.copy(this.origin).sub(Ef);const s=e.distanceTo(n)*.5,o=-this.direction.dot(yl),a=Wi.dot(this.direction),l=-Wi.dot(yl),c=Wi.lengthSq(),u=Math.abs(1-o*o);let f,d,p,g;if(u>0)if(f=o*l-a,d=o*a-l,g=s*u,f>=0)if(d>=-g)if(d<=g){const _=1/u;f*=_,d*=_,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ef).addScaledVector(yl,d),p}intersectSphere(e,n){xi.subVectors(e.center,this.origin);const i=xi.dot(this.direction),r=xi.dot(xi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,xi)!==null}intersectTriangle(e,n,i,r,s){wf.subVectors(n,e),_l.subVectors(i,e),Tf.crossVectors(wf,_l);let o=this.direction.dot(Tf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Wi.subVectors(this.origin,e);const l=a*this.direction.dot(_l.crossVectors(Wi,_l));if(l<0)return null;const c=a*this.direction.dot(wf.cross(Wi));if(c<0||l+c>o)return null;const u=-a*Wi.dot(Tf);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tt{constructor(e,n,i,r,s,o,a,l,c,u,f,d,p,g,_,m){Tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,d,p,g,_,m)}set(e,n,i,r,s,o,a,l,c,u,f,d,p,g,_,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=g,h[11]=_,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/ds.setFromMatrixColumn(e,0).length(),s=1/ds.setFromMatrixColumn(e,1).length(),o=1/ds.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,p=o*f,g=a*u,_=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+g*c,n[5]=d-_*c,n[9]=-a*l,n[2]=_-d*c,n[6]=g+p*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,g=c*u,_=c*f;n[0]=d+_*a,n[4]=g*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=p*a-g,n[6]=_+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,g=c*u,_=c*f;n[0]=d-_*a,n[4]=-o*f,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*u,n[9]=_-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*f,g=a*u,_=a*f;n[0]=l*u,n[4]=g*c-p,n[8]=d*c+_,n[1]=l*f,n[5]=_*c+d,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,g=a*l,_=a*c;n[0]=l*u,n[4]=_-d*f,n[8]=g*f+p,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*f+g,n[10]=d-_*f}else if(e.order==="XZY"){const d=o*l,p=o*c,g=a*l,_=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+_,n[5]=o*u,n[9]=p*f-g,n[2]=g*f-p,n[6]=a*u,n[10]=_*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Z2,e,Q2)}lookAt(e,n,i){const r=this.elements;return vn.subVectors(e,n),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),ji.crossVectors(i,vn),ji.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),ji.crossVectors(i,vn)),ji.normalize(),xl.crossVectors(vn,ji),r[0]=ji.x,r[4]=xl.x,r[8]=vn.x,r[1]=ji.y,r[5]=xl.y,r[9]=vn.y,r[2]=ji.z,r[6]=xl.z,r[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],g=i[2],_=i[6],m=i[10],h=i[14],v=i[3],y=i[7],S=i[11],C=i[15],A=r[0],T=r[4],P=r[8],V=r[12],x=r[1],E=r[5],H=r[9],z=r[13],Y=r[2],J=r[6],G=r[10],W=r[14],L=r[3],$=r[7],q=r[11],oe=r[15];return s[0]=o*A+a*x+l*Y+c*L,s[4]=o*T+a*E+l*J+c*$,s[8]=o*P+a*H+l*G+c*q,s[12]=o*V+a*z+l*W+c*oe,s[1]=u*A+f*x+d*Y+p*L,s[5]=u*T+f*E+d*J+p*$,s[9]=u*P+f*H+d*G+p*q,s[13]=u*V+f*z+d*W+p*oe,s[2]=g*A+_*x+m*Y+h*L,s[6]=g*T+_*E+m*J+h*$,s[10]=g*P+_*H+m*G+h*q,s[14]=g*V+_*z+m*W+h*oe,s[3]=v*A+y*x+S*Y+C*L,s[7]=v*T+y*E+S*J+C*$,s[11]=v*P+y*H+S*G+C*q,s[15]=v*V+y*z+S*W+C*oe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],h=e[15];return g*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*p-i*l*p)+_*(+n*l*p-n*c*d+s*o*d-r*o*p+r*c*u-s*l*u)+m*(+n*c*f-n*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+h*(-r*a*u-n*l*f+n*a*d+r*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],h=e[15],v=f*m*c-_*d*c+_*l*p-a*m*p-f*l*h+a*d*h,y=g*d*c-u*m*c-g*l*p+o*m*p+u*l*h-o*d*h,S=u*_*c-g*f*c+g*a*p-o*_*p-u*a*h+o*f*h,C=g*f*l-u*_*l-g*a*d+o*_*d+u*a*m-o*f*m,A=n*v+i*y+r*S+s*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=v*T,e[1]=(_*d*s-f*m*s-_*r*p+i*m*p+f*r*h-i*d*h)*T,e[2]=(a*m*s-_*l*s+_*r*c-i*m*c-a*r*h+i*l*h)*T,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*p-i*l*p)*T,e[4]=y*T,e[5]=(u*m*s-g*d*s+g*r*p-n*m*p-u*r*h+n*d*h)*T,e[6]=(g*l*s-o*m*s-g*r*c+n*m*c+o*r*h-n*l*h)*T,e[7]=(o*d*s-u*l*s+u*r*c-n*d*c-o*r*p+n*l*p)*T,e[8]=S*T,e[9]=(g*f*s-u*_*s-g*i*p+n*_*p+u*i*h-n*f*h)*T,e[10]=(o*_*s-g*a*s+g*i*c-n*_*c-o*i*h+n*a*h)*T,e[11]=(u*a*s-o*f*s-u*i*c+n*f*c+o*i*p-n*a*p)*T,e[12]=C*T,e[13]=(u*_*r-g*f*r+g*i*d-n*_*d-u*i*m+n*f*m)*T,e[14]=(g*a*r-o*_*r-g*i*l+n*_*l+o*i*m-n*a*m)*T,e[15]=(o*f*r-u*a*r+u*i*l-n*f*l-o*i*d+n*a*d)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,d=s*c,p=s*u,g=s*f,_=o*u,m=o*f,h=a*f,v=l*c,y=l*u,S=l*f,C=i.x,A=i.y,T=i.z;return r[0]=(1-(_+h))*C,r[1]=(p+S)*C,r[2]=(g-y)*C,r[3]=0,r[4]=(p-S)*A,r[5]=(1-(d+h))*A,r[6]=(m+v)*A,r[7]=0,r[8]=(g+y)*T,r[9]=(m-v)*T,r[10]=(1-(d+_))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=ds.set(r[0],r[1],r[2]).length();const o=ds.set(r[4],r[5],r[6]).length(),a=ds.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Wn.copy(this);const c=1/s,u=1/o,f=1/a;return Wn.elements[0]*=c,Wn.elements[1]*=c,Wn.elements[2]*=c,Wn.elements[4]*=u,Wn.elements[5]*=u,Wn.elements[6]*=u,Wn.elements[8]*=f,Wn.elements[9]*=f,Wn.elements[10]*=f,n.setFromRotationMatrix(Wn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Li){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r);let p,g;if(a===Li)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Hc)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Li){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(o-s),d=(n+e)*c,p=(i+r)*u;let g,_;if(a===Li)g=(o+s)*f,_=-2*f;else if(a===Hc)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ds=new O,Wn=new Tt,Z2=new O(0,0,0),Q2=new O(1,1,1),ji=new O,xl=new O,vn=new O,D0=new Tt,N0=new Va;class Oi{constructor(e=0,n=0,i=0,r=Oi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return D0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(D0,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return N0.setFromEuler(this),this.setFromQuaternion(N0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Oi.DEFAULT_ORDER="XYZ";class FM{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let J2=0;const I0=new O,hs=new Va,Si=new Tt,Sl=new O,No=new O,eL=new O,tL=new Va,U0=new O(1,0,0),k0=new O(0,1,0),F0=new O(0,0,1),O0={type:"added"},nL={type:"removed"},ps={type:"childadded",child:null},Af={type:"childremoved",child:null};class hn extends vo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:J2++}),this.uuid=yo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=hn.DEFAULT_UP.clone();const e=new O,n=new Oi,i=new Va,r=new O(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Tt},normalMatrix:{value:new ke}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new FM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return hs.setFromAxisAngle(e,n),this.quaternion.multiply(hs),this}rotateOnWorldAxis(e,n){return hs.setFromAxisAngle(e,n),this.quaternion.premultiply(hs),this}rotateX(e){return this.rotateOnAxis(U0,e)}rotateY(e){return this.rotateOnAxis(k0,e)}rotateZ(e){return this.rotateOnAxis(F0,e)}translateOnAxis(e,n){return I0.copy(e).applyQuaternion(this.quaternion),this.position.add(I0.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(U0,e)}translateY(e){return this.translateOnAxis(k0,e)}translateZ(e){return this.translateOnAxis(F0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Sl.copy(e):Sl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),No.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(No,Sl,this.up):Si.lookAt(Sl,No,this.up),this.quaternion.setFromRotationMatrix(Si),r&&(Si.extractRotation(r.matrixWorld),hs.setFromRotationMatrix(Si),this.quaternion.premultiply(hs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(O0),ps.child=e,this.dispatchEvent(ps),ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(nL),Af.child=e,this.dispatchEvent(Af),Af.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Si.multiply(e.parent.matrixWorld)),e.applyMatrix4(Si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(O0),ps.child=e,this.dispatchEvent(ps),ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,e,eL),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,tL,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}hn.DEFAULT_UP=new O(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const jn=new O,Mi=new O,Cf=new O,Ei=new O,ms=new O,gs=new O,B0=new O,bf=new O,Rf=new O,Pf=new O,Lf=new wt,Df=new wt,Nf=new wt;class Zn{constructor(e=new O,n=new O,i=new O){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),jn.subVectors(e,n),r.cross(jn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){jn.subVectors(r,n),Mi.subVectors(i,n),Cf.subVectors(e,n);const o=jn.dot(jn),a=jn.dot(Mi),l=jn.dot(Cf),c=Mi.dot(Mi),u=Mi.dot(Cf),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ei.x),l.addScaledVector(o,Ei.y),l.addScaledVector(a,Ei.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Lf.setScalar(0),Df.setScalar(0),Nf.setScalar(0),Lf.fromBufferAttribute(e,n),Df.fromBufferAttribute(e,i),Nf.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Lf,s.x),o.addScaledVector(Df,s.y),o.addScaledVector(Nf,s.z),o}static isFrontFacing(e,n,i,r){return jn.subVectors(i,n),Mi.subVectors(e,n),jn.cross(Mi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jn.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),jn.cross(Mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Zn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Zn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;ms.subVectors(r,i),gs.subVectors(s,i),bf.subVectors(e,i);const l=ms.dot(bf),c=gs.dot(bf);if(l<=0&&c<=0)return n.copy(i);Rf.subVectors(e,r);const u=ms.dot(Rf),f=gs.dot(Rf);if(u>=0&&f<=u)return n.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(ms,o);Pf.subVectors(e,s);const p=ms.dot(Pf),g=gs.dot(Pf);if(g>=0&&p<=g)return n.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(gs,a);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return B0.subVectors(s,r),a=(f-u)/(f-u+(p-g)),n.copy(r).addScaledVector(B0,a);const h=1/(m+_+d);return o=_*h,a=d*h,n.copy(i).addScaledVector(ms,o).addScaledVector(gs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const OM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},Ml={h:0,s:0,l:0};function If(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ye{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=oi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Qe.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Qe.workingColorSpace){if(e=bm(e,1),n=Qt(n,0,1),i=Qt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=If(o,s,e+1/3),this.g=If(o,s,e),this.b=If(o,s,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,n=oi){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=oi){const i=OM[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$s(e.r),this.g=$s(e.g),this.b=$s(e.b),this}copyLinearToSRGB(e){return this.r=yf(e.r),this.g=yf(e.g),this.b=yf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=oi){return Qe.fromWorkingColorSpace(jt.copy(this),e),Math.round(Qt(jt.r*255,0,255))*65536+Math.round(Qt(jt.g*255,0,255))*256+Math.round(Qt(jt.b*255,0,255))}getHexString(e=oi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Qe.workingColorSpace){Qe.fromWorkingColorSpace(jt.copy(this),n);const i=jt.r,r=jt.g,s=jt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(jt.copy(this),n),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=oi){Qe.fromWorkingColorSpace(jt.copy(this),e);const n=jt.r,i=jt.g,r=jt.b;return e!==oi?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Xi),this.setHSL(Xi.h+e,Xi.s+n,Xi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Xi),e.getHSL(Ml);const i=sa(Xi.h,Ml.h,n),r=sa(Xi.s,Ml.s,n),s=sa(Xi.l,Ml.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new Ye;Ye.NAMES=OM;let iL=0;class Ga extends vo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:iL++}),this.uuid=yo(),this.name="",this.type="Material",this.blending=Xs,this.side=vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ih,this.blendDst=rh,this.blendEquation=Or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=so,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=w0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=as,this.stencilZFail=as,this.stencilZPass=as,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Xs&&(i.blending=this.blending),this.side!==vr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ih&&(i.blendSrc=this.blendSrc),this.blendDst!==rh&&(i.blendDst=this.blendDst),this.blendEquation!==Or&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==so&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==w0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==as&&(i.stencilFail=this.stencilFail),this.stencilZFail!==as&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==as&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Wc extends Ga{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.combine=xM,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new O,El=new it;class Fn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=T0,this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)El.fromBufferAttribute(this,n),El.applyMatrix3(e),this.setXY(n,El.x,El.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyMatrix3(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyMatrix4(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyNormalMatrix(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.transformDirection(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ss(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Kt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ss(n,this.array)),n}setX(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ss(n,this.array)),n}setY(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ss(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ss(n,this.array)),n}setW(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Kt(n,this.array),i=Kt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Kt(n,this.array),i=Kt(i,this.array),r=Kt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Kt(n,this.array),i=Kt(i,this.array),r=Kt(r,this.array),s=Kt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==T0&&(e.usage=this.usage),e}}class BM extends Fn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class zM extends Fn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Mn extends Fn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let rL=0;const Rn=new Tt,Uf=new hn,vs=new O,yn=new Ha,Io=new Ha,Ut=new O;class ii extends vo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rL++}),this.uuid=yo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(NM(e)?zM:BM)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,n,i){return Rn.makeTranslation(e,n,i),this.applyMatrix4(Rn),this}scale(e,n,i){return Rn.makeScale(e,n,i),this.applyMatrix4(Rn),this}lookAt(e){return Uf.lookAt(e),Uf.updateMatrix(),this.applyMatrix4(Uf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Mn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ha);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];yn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Su);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Io.setFromBufferAttribute(a),this.morphTargetsRelative?(Ut.addVectors(yn.min,Io.min),yn.expandByPoint(Ut),Ut.addVectors(yn.max,Io.max),yn.expandByPoint(Ut)):(yn.expandByPoint(Io.min),yn.expandByPoint(Io.max))}yn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ut.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ut));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ut.fromBufferAttribute(a,c),l&&(vs.fromBufferAttribute(e,c),Ut.add(vs)),r=Math.max(r,i.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new O,l[P]=new O;const c=new O,u=new O,f=new O,d=new it,p=new it,g=new it,_=new O,m=new O;function h(P,V,x){c.fromBufferAttribute(i,P),u.fromBufferAttribute(i,V),f.fromBufferAttribute(i,x),d.fromBufferAttribute(s,P),p.fromBufferAttribute(s,V),g.fromBufferAttribute(s,x),u.sub(c),f.sub(c),p.sub(d),g.sub(d);const E=1/(p.x*g.y-g.x*p.y);isFinite(E)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(E),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(E),a[P].add(_),a[V].add(_),a[x].add(_),l[P].add(m),l[V].add(m),l[x].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let P=0,V=v.length;P<V;++P){const x=v[P],E=x.start,H=x.count;for(let z=E,Y=E+H;z<Y;z+=3)h(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const y=new O,S=new O,C=new O,A=new O;function T(P){C.fromBufferAttribute(r,P),A.copy(C);const V=a[P];y.copy(V),y.sub(C.multiplyScalar(C.dot(V))).normalize(),S.crossVectors(A,V);const E=S.dot(l[P])<0?-1:1;o.setXYZW(P,y.x,y.y,y.z,E)}for(let P=0,V=v.length;P<V;++P){const x=v[P],E=x.start,H=x.count;for(let z=E,Y=E+H;z<Y;z+=3)T(e.getX(z+0)),T(e.getX(z+1)),T(e.getX(z+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Fn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new O,s=new O,o=new O,a=new O,l=new O,c=new O,u=new O,f=new O;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,_),o.fromBufferAttribute(n,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ut.fromBufferAttribute(e,n),Ut.normalize(),e.setXYZ(n,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let h=0;h<u;h++)d[g++]=c[p++]}return new Fn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ii,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const z0=new Tt,br=new kM,wl=new Su,V0=new O,Tl=new O,Al=new O,Cl=new O,kf=new O,bl=new O,H0=new O,Rl=new O;class Jn extends hn{constructor(e=new ii,n=new Wc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){bl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(kf.fromBufferAttribute(f,e),o?bl.addScaledVector(kf,u):bl.addScaledVector(kf.sub(n),u))}n.add(bl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),wl.copy(i.boundingSphere),wl.applyMatrix4(s),br.copy(e.ray).recast(e.near),!(wl.containsPoint(br.origin)===!1&&(br.intersectSphere(wl,V0)===null||br.origin.distanceToSquared(V0)>(e.far-e.near)**2))&&(z0.copy(s).invert(),br.copy(e.ray).applyMatrix4(z0),!(i.boundingBox!==null&&br.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,br)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],h=o[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,C=y;S<C;S+=3){const A=a.getX(S),T=a.getX(S+1),P=a.getX(S+2);r=Pl(this,h,e,i,c,u,f,A,T,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){const v=a.getX(m),y=a.getX(m+1),S=a.getX(m+2);r=Pl(this,o,e,i,c,u,f,v,y,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],h=o[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,C=y;S<C;S+=3){const A=S,T=S+1,P=S+2;r=Pl(this,h,e,i,c,u,f,A,T,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){const v=m,y=m+1,S=m+2;r=Pl(this,o,e,i,c,u,f,v,y,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function sL(t,e,n,i,r,s,o,a){let l;if(e.side===fn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===vr,a),l===null)return null;Rl.copy(a),Rl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Rl);return c<n.near||c>n.far?null:{distance:c,point:Rl.clone(),object:t}}function Pl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Tl),t.getVertexPosition(l,Al),t.getVertexPosition(c,Cl);const u=sL(t,e,n,i,Tl,Al,Cl,H0);if(u){const f=new O;Zn.getBarycoord(H0,Tl,Al,Cl,f),r&&(u.uv=Zn.getInterpolatedAttribute(r,a,l,c,f,new it)),s&&(u.uv1=Zn.getInterpolatedAttribute(s,a,l,c,f,new it)),o&&(u.normal=Zn.getInterpolatedAttribute(o,a,l,c,f,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new O,materialIndex:0};Zn.getNormal(Tl,Al,Cl,d.normal),u.face=d,u.barycoord=f}return u}class Wa extends ii{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Mn(c,3)),this.setAttribute("normal",new Mn(u,3)),this.setAttribute("uv",new Mn(f,2));function g(_,m,h,v,y,S,C,A,T,P,V){const x=S/T,E=C/P,H=S/2,z=C/2,Y=A/2,J=T+1,G=P+1;let W=0,L=0;const $=new O;for(let q=0;q<G;q++){const oe=q*E-z;for(let we=0;we<J;we++){const Fe=we*x-H;$[_]=Fe*v,$[m]=oe*y,$[h]=Y,c.push($.x,$.y,$.z),$[_]=0,$[m]=0,$[h]=A>0?1:-1,u.push($.x,$.y,$.z),f.push(we/T),f.push(1-q/P),W+=1}}for(let q=0;q<P;q++)for(let oe=0;oe<T;oe++){const we=d+oe+J*q,Fe=d+oe+J*(q+1),X=d+(oe+1)+J*(q+1),ee=d+(oe+1)+J*q;l.push(we,Fe,ee),l.push(Fe,X,ee),L+=6}a.addGroup(p,L,V),p+=L,d+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function uo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function qt(t){const e={};for(let n=0;n<t.length;n++){const i=uo(t[n]);for(const r in i)e[r]=i[r]}return e}function oL(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function VM(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const aL={clone:uo,merge:qt};var lL=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cL=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yr extends Ga{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lL,this.fragmentShader=cL,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=uo(e.uniforms),this.uniformsGroups=oL(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class HM extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=Li}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yi=new O,G0=new it,W0=new it;class Nn extends HM{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ba*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ra*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ba*2*Math.atan(Math.tan(ra*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z)}getViewSize(e,n){return this.getViewBounds(e,G0,W0),n.subVectors(W0,G0)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ra*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ys=-90,_s=1;class uL extends hn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Nn(ys,_s,e,n);r.layers=this.layers,this.add(r);const s=new Nn(ys,_s,e,n);s.layers=this.layers,this.add(s);const o=new Nn(ys,_s,e,n);o.layers=this.layers,this.add(o);const a=new Nn(ys,_s,e,n);a.layers=this.layers,this.add(a);const l=new Nn(ys,_s,e,n);l.layers=this.layers,this.add(l);const c=new Nn(ys,_s,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Li)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Hc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class GM extends dn{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:oo,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class fL extends ts{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new GM(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:qn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Wa(5,5,5),s=new yr({name:"CubemapFromEquirect",uniforms:uo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:fn,blending:fr});s.uniforms.tEquirect.value=n;const o=new Jn(r,s),a=n.minFilter;return n.minFilter===jr&&(n.minFilter=qn),new uL(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Ff=new O,dL=new O,hL=new ke;class kr{constructor(e=new O(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Ff.subVectors(i,n).cross(dL.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Ff),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||hL.getNormalMatrix(e),r=this.coplanarPoint(Ff).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rr=new Su,Ll=new O;class WM{constructor(e=new kr,n=new kr,i=new kr,r=new kr,s=new kr,o=new kr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Li){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],p=r[8],g=r[9],_=r[10],m=r[11],h=r[12],v=r[13],y=r[14],S=r[15];if(i[0].setComponents(l-s,d-c,m-p,S-h).normalize(),i[1].setComponents(l+s,d+c,m+p,S+h).normalize(),i[2].setComponents(l+o,d+u,m+g,S+v).normalize(),i[3].setComponents(l-o,d-u,m-g,S-v).normalize(),i[4].setComponents(l-a,d-f,m-_,S-y).normalize(),n===Li)i[5].setComponents(l+a,d+f,m+_,S+y).normalize();else if(n===Hc)i[5].setComponents(a,f,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Rr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rr)}intersectsSprite(e){return Rr.center.set(0,0,0),Rr.radius=.7071067811865476,Rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ll.x=r.normal.x>0?e.max.x:e.min.x,Ll.y=r.normal.y>0?e.max.y:e.min.y,Ll.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ll)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function jM(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function pL(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<f.length;p++){const g=f[d],_=f[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,f[d]=_)}f.length=d+1;for(let p=0,g=f.length;p<g;p++){const _=f[p];t.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Mu extends ii{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=n/l,p=[],g=[],_=[],m=[];for(let h=0;h<u;h++){const v=h*d-o;for(let y=0;y<c;y++){const S=y*f-s;g.push(S,-v,0),_.push(0,0,1),m.push(y/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<a;v++){const y=v+c*h,S=v+c*(h+1),C=v+1+c*(h+1),A=v+1+c*h;p.push(y,S,A),p.push(S,C,A)}this.setIndex(p),this.setAttribute("position",new Mn(g,3)),this.setAttribute("normal",new Mn(_,3)),this.setAttribute("uv",new Mn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mu(e.width,e.height,e.widthSegments,e.heightSegments)}}var mL=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gL=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,vL=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yL=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_L=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xL=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,SL=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ML=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,EL=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,wL=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,TL=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,AL=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,CL=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,bL=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,RL=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,PL=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,LL=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,DL=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,NL=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,IL=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,UL=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kL=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,FL=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,OL=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,BL=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,zL=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,VL=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,HL=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,GL=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,WL=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jL="gl_FragColor = linearToOutputTexel( gl_FragColor );",XL=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,YL=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,$L=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,KL=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,qL=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ZL=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,QL=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,JL=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,eD=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tD=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nD=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,iD=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rD=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sD=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,oD=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,aD=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,lD=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cD=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uD=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fD=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dD=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,hD=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,pD=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,mD=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,gD=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vD=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yD=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_D=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xD=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,SD=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,MD=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ED=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,wD=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,TD=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,AD=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,CD=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bD=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,RD=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,PD=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,LD=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DD=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ND=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ID=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kD=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,FD=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,OD=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,BD=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zD=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,VD=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,HD=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,GD=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,WD=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jD=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,XD=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,YD=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$D=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,KD=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qD=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ZD=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,QD=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,JD=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,e3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,t3=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,n3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,i3=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,r3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,s3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,o3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,a3=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,l3=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,c3=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,u3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,f3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,d3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,h3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const p3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,m3=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v3=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,S3=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,M3=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,E3=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,w3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,T3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A3=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,C3=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,b3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,R3=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P3=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,L3=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D3=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,N3=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I3=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,U3=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,k3=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,F3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,B3=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z3=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,V3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,G3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,W3=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,j3=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,X3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Y3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ue={alphahash_fragment:mL,alphahash_pars_fragment:gL,alphamap_fragment:vL,alphamap_pars_fragment:yL,alphatest_fragment:_L,alphatest_pars_fragment:xL,aomap_fragment:SL,aomap_pars_fragment:ML,batching_pars_vertex:EL,batching_vertex:wL,begin_vertex:TL,beginnormal_vertex:AL,bsdfs:CL,iridescence_fragment:bL,bumpmap_pars_fragment:RL,clipping_planes_fragment:PL,clipping_planes_pars_fragment:LL,clipping_planes_pars_vertex:DL,clipping_planes_vertex:NL,color_fragment:IL,color_pars_fragment:UL,color_pars_vertex:kL,color_vertex:FL,common:OL,cube_uv_reflection_fragment:BL,defaultnormal_vertex:zL,displacementmap_pars_vertex:VL,displacementmap_vertex:HL,emissivemap_fragment:GL,emissivemap_pars_fragment:WL,colorspace_fragment:jL,colorspace_pars_fragment:XL,envmap_fragment:YL,envmap_common_pars_fragment:$L,envmap_pars_fragment:KL,envmap_pars_vertex:qL,envmap_physical_pars_fragment:aD,envmap_vertex:ZL,fog_vertex:QL,fog_pars_vertex:JL,fog_fragment:eD,fog_pars_fragment:tD,gradientmap_pars_fragment:nD,lightmap_pars_fragment:iD,lights_lambert_fragment:rD,lights_lambert_pars_fragment:sD,lights_pars_begin:oD,lights_toon_fragment:lD,lights_toon_pars_fragment:cD,lights_phong_fragment:uD,lights_phong_pars_fragment:fD,lights_physical_fragment:dD,lights_physical_pars_fragment:hD,lights_fragment_begin:pD,lights_fragment_maps:mD,lights_fragment_end:gD,logdepthbuf_fragment:vD,logdepthbuf_pars_fragment:yD,logdepthbuf_pars_vertex:_D,logdepthbuf_vertex:xD,map_fragment:SD,map_pars_fragment:MD,map_particle_fragment:ED,map_particle_pars_fragment:wD,metalnessmap_fragment:TD,metalnessmap_pars_fragment:AD,morphinstance_vertex:CD,morphcolor_vertex:bD,morphnormal_vertex:RD,morphtarget_pars_vertex:PD,morphtarget_vertex:LD,normal_fragment_begin:DD,normal_fragment_maps:ND,normal_pars_fragment:ID,normal_pars_vertex:UD,normal_vertex:kD,normalmap_pars_fragment:FD,clearcoat_normal_fragment_begin:OD,clearcoat_normal_fragment_maps:BD,clearcoat_pars_fragment:zD,iridescence_pars_fragment:VD,opaque_fragment:HD,packing:GD,premultiplied_alpha_fragment:WD,project_vertex:jD,dithering_fragment:XD,dithering_pars_fragment:YD,roughnessmap_fragment:$D,roughnessmap_pars_fragment:KD,shadowmap_pars_fragment:qD,shadowmap_pars_vertex:ZD,shadowmap_vertex:QD,shadowmask_pars_fragment:JD,skinbase_vertex:e3,skinning_pars_vertex:t3,skinning_vertex:n3,skinnormal_vertex:i3,specularmap_fragment:r3,specularmap_pars_fragment:s3,tonemapping_fragment:o3,tonemapping_pars_fragment:a3,transmission_fragment:l3,transmission_pars_fragment:c3,uv_pars_fragment:u3,uv_pars_vertex:f3,uv_vertex:d3,worldpos_vertex:h3,background_vert:p3,background_frag:m3,backgroundCube_vert:g3,backgroundCube_frag:v3,cube_vert:y3,cube_frag:_3,depth_vert:x3,depth_frag:S3,distanceRGBA_vert:M3,distanceRGBA_frag:E3,equirect_vert:w3,equirect_frag:T3,linedashed_vert:A3,linedashed_frag:C3,meshbasic_vert:b3,meshbasic_frag:R3,meshlambert_vert:P3,meshlambert_frag:L3,meshmatcap_vert:D3,meshmatcap_frag:N3,meshnormal_vert:I3,meshnormal_frag:U3,meshphong_vert:k3,meshphong_frag:F3,meshphysical_vert:O3,meshphysical_frag:B3,meshtoon_vert:z3,meshtoon_frag:V3,points_vert:H3,points_frag:G3,shadow_vert:W3,shadow_frag:j3,sprite_vert:X3,sprite_frag:Y3},ae={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},ai={basic:{uniforms:qt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:qt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:qt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:qt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:qt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:qt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:qt([ae.points,ae.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:qt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:qt([ae.common,ae.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:qt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:qt([ae.sprite,ae.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:qt([ae.common,ae.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:qt([ae.lights,ae.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};ai.physical={uniforms:qt([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const Dl={r:0,b:0,g:0},Pr=new Oi,$3=new Tt;function K3(t,e,n,i,r,s,o){const a=new Ye(0);let l=s===!0?0:1,c,u,f=null,d=0,p=null;function g(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?n:e).get(y)),y}function _(v){let y=!1;const S=g(v);S===null?h(a,l):S&&S.isColor&&(h(S,1),y=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(v,y){const S=g(y);S&&(S.isCubeTexture||S.mapping===_u)?(u===void 0&&(u=new Jn(new Wa(1,1,1),new yr({name:"BackgroundCubeMaterial",uniforms:uo(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Pr.copy(y.backgroundRotation),Pr.x*=-1,Pr.y*=-1,Pr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Pr.y*=-1,Pr.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4($3.makeRotationFromEuler(Pr)),u.material.toneMapped=Qe.getTransfer(S.colorSpace)!==ct,(f!==S||d!==S.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=S,d=S.version,p=t.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Jn(new Mu(2,2),new yr({name:"BackgroundMaterial",uniforms:uo(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:vr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(S.colorSpace)!==ct,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||d!==S.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=S,d=S.version,p=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function h(v,y){v.getRGB(Dl,VM(t)),i.buffers.color.setClear(Dl.r,Dl.g,Dl.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),l=y,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,h(a,l)},render:_,addToRenderList:m}}function q3(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(x,E,H,z,Y){let J=!1;const G=f(z,H,E);s!==G&&(s=G,c(s.object)),J=p(x,z,H,Y),J&&g(x,z,H,Y),Y!==null&&e.update(Y,t.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,S(x,E,H,z),Y!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return t.createVertexArray()}function c(x){return t.bindVertexArray(x)}function u(x){return t.deleteVertexArray(x)}function f(x,E,H){const z=H.wireframe===!0;let Y=i[x.id];Y===void 0&&(Y={},i[x.id]=Y);let J=Y[E.id];J===void 0&&(J={},Y[E.id]=J);let G=J[z];return G===void 0&&(G=d(l()),J[z]=G),G}function d(x){const E=[],H=[],z=[];for(let Y=0;Y<n;Y++)E[Y]=0,H[Y]=0,z[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:H,attributeDivisors:z,object:x,attributes:{},index:null}}function p(x,E,H,z){const Y=s.attributes,J=E.attributes;let G=0;const W=H.getAttributes();for(const L in W)if(W[L].location>=0){const q=Y[L];let oe=J[L];if(oe===void 0&&(L==="instanceMatrix"&&x.instanceMatrix&&(oe=x.instanceMatrix),L==="instanceColor"&&x.instanceColor&&(oe=x.instanceColor)),q===void 0||q.attribute!==oe||oe&&q.data!==oe.data)return!0;G++}return s.attributesNum!==G||s.index!==z}function g(x,E,H,z){const Y={},J=E.attributes;let G=0;const W=H.getAttributes();for(const L in W)if(W[L].location>=0){let q=J[L];q===void 0&&(L==="instanceMatrix"&&x.instanceMatrix&&(q=x.instanceMatrix),L==="instanceColor"&&x.instanceColor&&(q=x.instanceColor));const oe={};oe.attribute=q,q&&q.data&&(oe.data=q.data),Y[L]=oe,G++}s.attributes=Y,s.attributesNum=G,s.index=z}function _(){const x=s.newAttributes;for(let E=0,H=x.length;E<H;E++)x[E]=0}function m(x){h(x,0)}function h(x,E){const H=s.newAttributes,z=s.enabledAttributes,Y=s.attributeDivisors;H[x]=1,z[x]===0&&(t.enableVertexAttribArray(x),z[x]=1),Y[x]!==E&&(t.vertexAttribDivisor(x,E),Y[x]=E)}function v(){const x=s.newAttributes,E=s.enabledAttributes;for(let H=0,z=E.length;H<z;H++)E[H]!==x[H]&&(t.disableVertexAttribArray(H),E[H]=0)}function y(x,E,H,z,Y,J,G){G===!0?t.vertexAttribIPointer(x,E,H,Y,J):t.vertexAttribPointer(x,E,H,z,Y,J)}function S(x,E,H,z){_();const Y=z.attributes,J=H.getAttributes(),G=E.defaultAttributeValues;for(const W in J){const L=J[W];if(L.location>=0){let $=Y[W];if($===void 0&&(W==="instanceMatrix"&&x.instanceMatrix&&($=x.instanceMatrix),W==="instanceColor"&&x.instanceColor&&($=x.instanceColor)),$!==void 0){const q=$.normalized,oe=$.itemSize,we=e.get($);if(we===void 0)continue;const Fe=we.buffer,X=we.type,ee=we.bytesPerElement,ce=X===t.INT||X===t.UNSIGNED_INT||$.gpuType===Sm;if($.isInterleavedBufferAttribute){const le=$.data,Ce=le.stride,Te=$.offset;if(le.isInstancedInterleavedBuffer){for(let Ve=0;Ve<L.locationSize;Ve++)h(L.location+Ve,le.meshPerAttribute);x.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ve=0;Ve<L.locationSize;Ve++)m(L.location+Ve);t.bindBuffer(t.ARRAY_BUFFER,Fe);for(let Ve=0;Ve<L.locationSize;Ve++)y(L.location+Ve,oe/L.locationSize,X,q,Ce*ee,(Te+oe/L.locationSize*Ve)*ee,ce)}else{if($.isInstancedBufferAttribute){for(let le=0;le<L.locationSize;le++)h(L.location+le,$.meshPerAttribute);x.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let le=0;le<L.locationSize;le++)m(L.location+le);t.bindBuffer(t.ARRAY_BUFFER,Fe);for(let le=0;le<L.locationSize;le++)y(L.location+le,oe/L.locationSize,X,q,oe*ee,oe/L.locationSize*le*ee,ce)}}else if(G!==void 0){const q=G[W];if(q!==void 0)switch(q.length){case 2:t.vertexAttrib2fv(L.location,q);break;case 3:t.vertexAttrib3fv(L.location,q);break;case 4:t.vertexAttrib4fv(L.location,q);break;default:t.vertexAttrib1fv(L.location,q)}}}}v()}function C(){P();for(const x in i){const E=i[x];for(const H in E){const z=E[H];for(const Y in z)u(z[Y].object),delete z[Y];delete E[H]}delete i[x]}}function A(x){if(i[x.id]===void 0)return;const E=i[x.id];for(const H in E){const z=E[H];for(const Y in z)u(z[Y].object),delete z[Y];delete E[H]}delete i[x.id]}function T(x){for(const E in i){const H=i[E];if(H[x.id]===void 0)continue;const z=H[x.id];for(const Y in z)u(z[Y].object),delete z[Y];delete H[x.id]}}function P(){V(),o=!0,s!==r&&(s=r,c(s.object))}function V(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:V,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function Z3(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let g=0;g<f;g++)p+=u[g];n.update(p,i,1)}function l(c,u,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_];for(let _=0;_<d.length;_++)n.update(g,i,d[_])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Q3(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==Qn&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const P=T===za&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Fi&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Pi&&!P)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,d=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const T=e.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,A=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:S,vertexTextures:C,maxSamples:A}}function J3(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new kr,a=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,p){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,h=t.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const v=s?0:i,y=v*4;let S=h.clippingState||null;l.value=S,S=u(g,d,y,p);for(let C=0;C!==y;++C)S[C]=n[C];h.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const h=p+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<h)&&(m=new Float32Array(h));for(let y=0,S=p;y!==_;++y,S+=4)o.copy(f[y]).applyMatrix4(v,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function eN(t){let e=new WeakMap;function n(o,a){return a===dh?o.mapping=oo:a===hh&&(o.mapping=ao),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===dh||a===hh)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new fL(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class tN extends HM{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Bs=4,j0=[.125,.215,.35,.446,.526,.582],Br=20,Of=new tN,X0=new Ye;let Bf=null,zf=0,Vf=0,Hf=!1;const Fr=(1+Math.sqrt(5))/2,xs=1/Fr,Y0=[new O(-Fr,xs,0),new O(Fr,xs,0),new O(-xs,0,Fr),new O(xs,0,Fr),new O(0,Fr,-xs),new O(0,Fr,xs),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class $0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Bf=this._renderer.getRenderTarget(),zf=this._renderer.getActiveCubeFace(),Vf=this._renderer.getActiveMipmapLevel(),Hf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Z0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=q0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Bf,zf,Vf),this._renderer.xr.enabled=Hf,e.scissorTest=!1,Nl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===oo||e.mapping===ao?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bf=this._renderer.getRenderTarget(),zf=this._renderer.getActiveCubeFace(),Vf=this._renderer.getActiveMipmapLevel(),Hf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:qn,minFilter:qn,generateMipmaps:!1,type:za,format:Qn,colorSpace:Er,depthBuffer:!1},r=K0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=K0(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nN(s)),this._blurMaterial=iN(s,e,n)}return r}_compileMaterial(e){const n=new Jn(this._lodPlanes[0],e);this._renderer.compile(n,Of)}_sceneToCubeUV(e,n,i,r){const a=new Nn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(X0),u.toneMapping=dr,u.autoClear=!1;const p=new Wc({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}),g=new Jn(new Wa,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(X0),_=!0);for(let h=0;h<6;h++){const v=h%3;v===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):v===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const y=this._cubeSize;Nl(r,v*y,h>2?y:0,y,y),u.setRenderTarget(r),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===oo||e.mapping===ao;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Z0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=q0());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Jn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Nl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Of)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Y0[(r-s-1)%Y0.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Jn(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Br-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Br;m>Br&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Br}`);const h=[];let v=0;for(let T=0;T<Br;++T){const P=T/_,V=Math.exp(-P*P/2);h.push(V),T===0?v+=V:T<m&&(v+=2*V)}for(let T=0;T<h.length;T++)h[T]=h[T]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-i;const S=this._sizeLods[r],C=3*S*(r>y-Bs?r-y+Bs:0),A=4*(this._cubeSize-S);Nl(n,C,A,3*S,2*S),l.setRenderTarget(n),l.render(f,Of)}}function nN(t){const e=[],n=[],i=[];let r=t;const s=t-Bs+1+j0.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Bs?l=j0[o-t+Bs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,_=3,m=2,h=1,v=new Float32Array(_*g*p),y=new Float32Array(m*g*p),S=new Float32Array(h*g*p);for(let A=0;A<p;A++){const T=A%3*2/3-1,P=A>2?0:-1,V=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];v.set(V,_*g*A),y.set(d,m*g*A);const x=[A,A,A,A,A,A];S.set(x,h*g*A)}const C=new ii;C.setAttribute("position",new Fn(v,_)),C.setAttribute("uv",new Fn(y,m)),C.setAttribute("faceIndex",new Fn(S,h)),e.push(C),r>Bs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function K0(t,e,n){const i=new ts(t,e,n);return i.texture.mapping=_u,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Nl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function iN(t,e,n){const i=new Float32Array(Br),r=new O(0,1,0);return new yr({name:"SphericalGaussianBlur",defines:{n:Br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Rm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:fr,depthTest:!1,depthWrite:!1})}function q0(){return new yr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:fr,depthTest:!1,depthWrite:!1})}function Z0(){return new yr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fr,depthTest:!1,depthWrite:!1})}function Rm(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function rN(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===dh||l===hh,u=l===oo||l===ao;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new $0(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new $0(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function sN(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&sc("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function oN(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,h=_.length;m<h;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)e.update(d[g],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const _=p[g];for(let m=0,h=_.length;m<h;m++)e.update(_[m],t.ARRAY_BUFFER)}}function c(f){const d=[],p=f.index,g=f.attributes.position;let _=0;if(p!==null){const v=p.array;_=p.version;for(let y=0,S=v.length;y<S;y+=3){const C=v[y+0],A=v[y+1],T=v[y+2];d.push(C,A,A,T,T,C)}}else if(g!==void 0){const v=g.array;_=g.version;for(let y=0,S=v.length/3-1;y<S;y+=3){const C=y+0,A=y+1,T=y+2;d.push(C,A,A,T,T,C)}}else return;const m=new(NM(d)?zM:BM)(d,1);m.version=_;const h=s.get(f);h&&e.remove(h),s.set(f,m)}function u(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function aN(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){t.drawElements(i,p,s,d*o),n.update(p,i,1)}function c(d,p,g){g!==0&&(t.drawElementsInstanced(i,p,s,d*o,g),n.update(p,i,g))}function u(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];n.update(m,i,1)}function f(d,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)c(d[h]/o,p[h],_[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,_,0,g);let h=0;for(let v=0;v<g;v++)h+=p[v];for(let v=0;v<_.length;v++)n.update(h,i,_[v])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function lN(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function cN(t,e,n){const i=new WeakMap,r=new wt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let x=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var p=x;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),_===!0&&(S=2),m===!0&&(S=3);let C=a.attributes.position.count*S,A=1;C>e.maxTextureSize&&(A=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const T=new Float32Array(C*A*4*f),P=new UM(T,C,A,f);P.type=Pi,P.needsUpdate=!0;const V=S*4;for(let E=0;E<f;E++){const H=h[E],z=v[E],Y=y[E],J=C*A*4*E;for(let G=0;G<H.count;G++){const W=G*V;g===!0&&(r.fromBufferAttribute(H,G),T[J+W+0]=r.x,T[J+W+1]=r.y,T[J+W+2]=r.z,T[J+W+3]=0),_===!0&&(r.fromBufferAttribute(z,G),T[J+W+4]=r.x,T[J+W+5]=r.y,T[J+W+6]=r.z,T[J+W+7]=0),m===!0&&(r.fromBufferAttribute(Y,G),T[J+W+8]=r.x,T[J+W+9]=r.y,T[J+W+10]=r.z,T[J+W+11]=Y.itemSize===4?r.w:1)}}d={count:f,texture:P,size:new it(C,A)},i.set(a,d),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function uN(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class XM extends dn{constructor(e,n,i,r,s,o,a,l,c,u=Ys){if(u!==Ys&&u!==co)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ys&&(i=es),i===void 0&&u===co&&(i=lo),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Un,this.minFilter=l!==void 0?l:Un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const YM=new dn,Q0=new XM(1,1),$M=new UM,KM=new K2,qM=new GM,J0=[],ey=[],ty=new Float32Array(16),ny=new Float32Array(9),iy=new Float32Array(4);function _o(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=J0[r];if(s===void 0&&(s=new Float32Array(r),J0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Nt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function It(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Eu(t,e){let n=ey[e];n===void 0&&(n=new Int32Array(e),ey[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function fN(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function dN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2fv(this.addr,e),It(n,e)}}function hN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Nt(n,e))return;t.uniform3fv(this.addr,e),It(n,e)}}function pN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4fv(this.addr,e),It(n,e)}}function mN(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),It(n,e)}else{if(Nt(n,i))return;iy.set(i),t.uniformMatrix2fv(this.addr,!1,iy),It(n,i)}}function gN(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),It(n,e)}else{if(Nt(n,i))return;ny.set(i),t.uniformMatrix3fv(this.addr,!1,ny),It(n,i)}}function vN(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),It(n,e)}else{if(Nt(n,i))return;ty.set(i),t.uniformMatrix4fv(this.addr,!1,ty),It(n,i)}}function yN(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function _N(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2iv(this.addr,e),It(n,e)}}function xN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Nt(n,e))return;t.uniform3iv(this.addr,e),It(n,e)}}function SN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4iv(this.addr,e),It(n,e)}}function MN(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function EN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2uiv(this.addr,e),It(n,e)}}function wN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Nt(n,e))return;t.uniform3uiv(this.addr,e),It(n,e)}}function TN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4uiv(this.addr,e),It(n,e)}}function AN(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Q0.compareFunction=DM,s=Q0):s=YM,n.setTexture2D(e||s,r)}function CN(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||KM,r)}function bN(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||qM,r)}function RN(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||$M,r)}function PN(t){switch(t){case 5126:return fN;case 35664:return dN;case 35665:return hN;case 35666:return pN;case 35674:return mN;case 35675:return gN;case 35676:return vN;case 5124:case 35670:return yN;case 35667:case 35671:return _N;case 35668:case 35672:return xN;case 35669:case 35673:return SN;case 5125:return MN;case 36294:return EN;case 36295:return wN;case 36296:return TN;case 35678:case 36198:case 36298:case 36306:case 35682:return AN;case 35679:case 36299:case 36307:return CN;case 35680:case 36300:case 36308:case 36293:return bN;case 36289:case 36303:case 36311:case 36292:return RN}}function LN(t,e){t.uniform1fv(this.addr,e)}function DN(t,e){const n=_o(e,this.size,2);t.uniform2fv(this.addr,n)}function NN(t,e){const n=_o(e,this.size,3);t.uniform3fv(this.addr,n)}function IN(t,e){const n=_o(e,this.size,4);t.uniform4fv(this.addr,n)}function UN(t,e){const n=_o(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function kN(t,e){const n=_o(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function FN(t,e){const n=_o(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function ON(t,e){t.uniform1iv(this.addr,e)}function BN(t,e){t.uniform2iv(this.addr,e)}function zN(t,e){t.uniform3iv(this.addr,e)}function VN(t,e){t.uniform4iv(this.addr,e)}function HN(t,e){t.uniform1uiv(this.addr,e)}function GN(t,e){t.uniform2uiv(this.addr,e)}function WN(t,e){t.uniform3uiv(this.addr,e)}function jN(t,e){t.uniform4uiv(this.addr,e)}function XN(t,e,n){const i=this.cache,r=e.length,s=Eu(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||YM,s[o])}function YN(t,e,n){const i=this.cache,r=e.length,s=Eu(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||KM,s[o])}function $N(t,e,n){const i=this.cache,r=e.length,s=Eu(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||qM,s[o])}function KN(t,e,n){const i=this.cache,r=e.length,s=Eu(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||$M,s[o])}function qN(t){switch(t){case 5126:return LN;case 35664:return DN;case 35665:return NN;case 35666:return IN;case 35674:return UN;case 35675:return kN;case 35676:return FN;case 5124:case 35670:return ON;case 35667:case 35671:return BN;case 35668:case 35672:return zN;case 35669:case 35673:return VN;case 5125:return HN;case 36294:return GN;case 36295:return WN;case 36296:return jN;case 35678:case 36198:case 36298:case 36306:case 35682:return XN;case 35679:case 36299:case 36307:return YN;case 35680:case 36300:case 36308:case 36293:return $N;case 36289:case 36303:case 36311:case 36292:return KN}}class ZN{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=PN(n.type)}}class QN{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=qN(n.type)}}class JN{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Gf=/(\w+)(\])?(\[|\.)?/g;function ry(t,e){t.seq.push(e),t.map[e.id]=e}function eI(t,e,n){const i=t.name,r=i.length;for(Gf.lastIndex=0;;){const s=Gf.exec(i),o=Gf.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){ry(n,c===void 0?new ZN(a,t,e):new QN(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new JN(a),ry(n,f)),n=f}}}class oc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);eI(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function sy(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const tI=37297;let nI=0;function iI(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function rI(t){const e=Qe.getPrimaries(Qe.workingColorSpace),n=Qe.getPrimaries(t);let i;switch(e===n?i="":e===Vc&&n===zc?i="LinearDisplayP3ToLinearSRGB":e===zc&&n===Vc&&(i="LinearSRGBToLinearDisplayP3"),t){case Er:case xu:return[i,"LinearTransferOETF"];case oi:case Cm:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function oy(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+iI(t.getShaderSource(e),o)}else return r}function sI(t,e){const n=rI(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function oI(t,e){let n;switch(e){case r2:n="Linear";break;case s2:n="Reinhard";break;case o2:n="Cineon";break;case a2:n="ACESFilmic";break;case c2:n="AgX";break;case u2:n="Neutral";break;case l2:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Il=new O;function aI(){Qe.getLuminanceCoefficients(Il);const t=Il.x.toFixed(4),e=Il.y.toFixed(4),n=Il.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lI(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ho).join(`
`)}function cI(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function uI(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ho(t){return t!==""}function ay(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ly(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const fI=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hh(t){return t.replace(fI,hI)}const dI=new Map;function hI(t,e){let n=Ue[e];if(n===void 0){const i=dI.get(e);if(i!==void 0)n=Ue[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Hh(n)}const pI=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cy(t){return t.replace(pI,mI)}function mI(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function uy(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function gI(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===_M?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===FP?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===wi&&(e="SHADOWMAP_TYPE_VSM"),e}function vI(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case oo:case ao:e="ENVMAP_TYPE_CUBE";break;case _u:e="ENVMAP_TYPE_CUBE_UV";break}return e}function yI(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ao:e="ENVMAP_MODE_REFRACTION";break}return e}function _I(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case xM:e="ENVMAP_BLENDING_MULTIPLY";break;case n2:e="ENVMAP_BLENDING_MIX";break;case i2:e="ENVMAP_BLENDING_ADD";break}return e}function xI(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function SI(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=gI(n),c=vI(n),u=yI(n),f=_I(n),d=xI(n),p=lI(n),g=cI(s),_=r.createProgram();let m,h,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Ho).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Ho).join(`
`),h.length>0&&(h+=`
`)):(m=[uy(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ho).join(`
`),h=[uy(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==dr?"#define TONE_MAPPING":"",n.toneMapping!==dr?Ue.tonemapping_pars_fragment:"",n.toneMapping!==dr?oI("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,sI("linearToOutputTexel",n.outputColorSpace),aI(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ho).join(`
`)),o=Hh(o),o=ay(o,n),o=ly(o,n),a=Hh(a),a=ay(a,n),a=ly(a,n),o=cy(o),a=cy(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===A0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===A0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const y=v+m+o,S=v+h+a,C=sy(r,r.VERTEX_SHADER,y),A=sy(r,r.FRAGMENT_SHADER,S);r.attachShader(_,C),r.attachShader(_,A),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function T(E){if(t.debug.checkShaderErrors){const H=r.getProgramInfoLog(_).trim(),z=r.getShaderInfoLog(C).trim(),Y=r.getShaderInfoLog(A).trim();let J=!0,G=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(J=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,C,A);else{const W=oy(r,C,"vertex"),L=oy(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+H+`
`+W+`
`+L)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(z===""||Y==="")&&(G=!1);G&&(E.diagnostics={runnable:J,programLog:H,vertexShader:{log:z,prefix:m},fragmentShader:{log:Y,prefix:h}})}r.deleteShader(C),r.deleteShader(A),P=new oc(r,_),V=uI(r,_)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let V;this.getAttributes=function(){return V===void 0&&T(this),V};let x=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(_,tI)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=nI++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=A,this}let MI=0;class EI{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new wI(e),n.set(e,i)),i}}class wI{constructor(e){this.id=MI++,this.code=e,this.usedTimes=0}}function TI(t,e,n,i,r,s,o){const a=new FM,l=new EI,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.reverseDepthBuffer,p=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return c.add(x),x===0?"uv":`uv${x}`}function h(x,E,H,z,Y){const J=z.fog,G=Y.geometry,W=x.isMeshStandardMaterial?z.environment:null,L=(x.isMeshStandardMaterial?n:e).get(x.envMap||W),$=L&&L.mapping===_u?L.image.height:null,q=_[x.type];x.precision!==null&&(g=r.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const oe=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,we=oe!==void 0?oe.length:0;let Fe=0;G.morphAttributes.position!==void 0&&(Fe=1),G.morphAttributes.normal!==void 0&&(Fe=2),G.morphAttributes.color!==void 0&&(Fe=3);let X,ee,ce,le;if(q){const sn=ai[q];X=sn.vertexShader,ee=sn.fragmentShader}else X=x.vertexShader,ee=x.fragmentShader,l.update(x),ce=l.getVertexShaderID(x),le=l.getFragmentShaderID(x);const Ce=t.getRenderTarget(),Te=Y.isInstancedMesh===!0,Ve=Y.isBatchedMesh===!0,tt=!!x.map,He=!!x.matcap,D=!!L,pn=!!x.aoMap,Be=!!x.lightMap,je=!!x.bumpMap,Pe=!!x.normalMap,ot=!!x.displacementMap,Ne=!!x.emissiveMap,R=!!x.metalnessMap,M=!!x.roughnessMap,k=x.anisotropy>0,Z=x.clearcoat>0,te=x.dispersion>0,K=x.iridescence>0,Se=x.sheen>0,ue=x.transmission>0,ge=k&&!!x.anisotropyMap,Xe=Z&&!!x.clearcoatMap,re=Z&&!!x.clearcoatNormalMap,ve=Z&&!!x.clearcoatRoughnessMap,Le=K&&!!x.iridescenceMap,De=K&&!!x.iridescenceThicknessMap,ye=Se&&!!x.sheenColorMap,ze=Se&&!!x.sheenRoughnessMap,Ie=!!x.specularMap,rt=!!x.specularColorMap,N=!!x.specularIntensityMap,he=ue&&!!x.transmissionMap,j=ue&&!!x.thicknessMap,Q=!!x.gradientMap,fe=!!x.alphaMap,pe=x.alphaTest>0,Ge=!!x.alphaHash,At=!!x.extensions;let rn=dr;x.toneMapped&&(Ce===null||Ce.isXRRenderTarget===!0)&&(rn=t.toneMapping);const $e={shaderID:q,shaderType:x.type,shaderName:x.name,vertexShader:X,fragmentShader:ee,defines:x.defines,customVertexShaderID:ce,customFragmentShaderID:le,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:Ve,batchingColor:Ve&&Y._colorsTexture!==null,instancing:Te,instancingColor:Te&&Y.instanceColor!==null,instancingMorph:Te&&Y.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Ce===null?t.outputColorSpace:Ce.isXRRenderTarget===!0?Ce.texture.colorSpace:Er,alphaToCoverage:!!x.alphaToCoverage,map:tt,matcap:He,envMap:D,envMapMode:D&&L.mapping,envMapCubeUVHeight:$,aoMap:pn,lightMap:Be,bumpMap:je,normalMap:Pe,displacementMap:p&&ot,emissiveMap:Ne,normalMapObjectSpace:Pe&&x.normalMapType===m2,normalMapTangentSpace:Pe&&x.normalMapType===p2,metalnessMap:R,roughnessMap:M,anisotropy:k,anisotropyMap:ge,clearcoat:Z,clearcoatMap:Xe,clearcoatNormalMap:re,clearcoatRoughnessMap:ve,dispersion:te,iridescence:K,iridescenceMap:Le,iridescenceThicknessMap:De,sheen:Se,sheenColorMap:ye,sheenRoughnessMap:ze,specularMap:Ie,specularColorMap:rt,specularIntensityMap:N,transmission:ue,transmissionMap:he,thicknessMap:j,gradientMap:Q,opaque:x.transparent===!1&&x.blending===Xs&&x.alphaToCoverage===!1,alphaMap:fe,alphaTest:pe,alphaHash:Ge,combine:x.combine,mapUv:tt&&m(x.map.channel),aoMapUv:pn&&m(x.aoMap.channel),lightMapUv:Be&&m(x.lightMap.channel),bumpMapUv:je&&m(x.bumpMap.channel),normalMapUv:Pe&&m(x.normalMap.channel),displacementMapUv:ot&&m(x.displacementMap.channel),emissiveMapUv:Ne&&m(x.emissiveMap.channel),metalnessMapUv:R&&m(x.metalnessMap.channel),roughnessMapUv:M&&m(x.roughnessMap.channel),anisotropyMapUv:ge&&m(x.anisotropyMap.channel),clearcoatMapUv:Xe&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:re&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:De&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:ze&&m(x.sheenRoughnessMap.channel),specularMapUv:Ie&&m(x.specularMap.channel),specularColorMapUv:rt&&m(x.specularColorMap.channel),specularIntensityMapUv:N&&m(x.specularIntensityMap.channel),transmissionMapUv:he&&m(x.transmissionMap.channel),thicknessMapUv:j&&m(x.thicknessMap.channel),alphaMapUv:fe&&m(x.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Pe||k),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!G.attributes.uv&&(tt||fe),fog:!!J,useFog:x.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:d,skinning:Y.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:Fe,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&H.length>0,shadowMapType:t.shadowMap.type,toneMapping:rn,decodeVideoTexture:tt&&x.map.isVideoTexture===!0&&Qe.getTransfer(x.map.colorSpace)===ct,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ci,flipSided:x.side===fn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:At&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(At&&x.extensions.multiDraw===!0||Ve)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return $e.vertexUv1s=c.has(1),$e.vertexUv2s=c.has(2),$e.vertexUv3s=c.has(3),c.clear(),$e}function v(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const H in x.defines)E.push(H),E.push(x.defines[H]);return x.isRawShaderMaterial===!1&&(y(E,x),S(E,x),E.push(t.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function y(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function S(x,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),x.push(a.mask)}function C(x){const E=_[x.type];let H;if(E){const z=ai[E];H=aL.clone(z.uniforms)}else H=x.uniforms;return H}function A(x,E){let H;for(let z=0,Y=u.length;z<Y;z++){const J=u[z];if(J.cacheKey===E){H=J,++H.usedTimes;break}}return H===void 0&&(H=new SI(t,E,x,s),u.push(H)),H}function T(x){if(--x.usedTimes===0){const E=u.indexOf(x);u[E]=u[u.length-1],u.pop(),x.destroy()}}function P(x){l.remove(x)}function V(){l.dispose()}return{getParameters:h,getProgramCacheKey:v,getUniforms:C,acquireProgram:A,releaseProgram:T,releaseShaderCache:P,programs:u,dispose:V}}function AI(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function CI(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function fy(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function dy(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,p,g,_,m){let h=t[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},t[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=_,h.group=m),e++,h}function a(f,d,p,g,_,m){const h=o(f,d,p,g,_,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(f,d,p,g,_,m){const h=o(f,d,p,g,_,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function c(f,d){n.length>1&&n.sort(f||CI),i.length>1&&i.sort(d||fy),r.length>1&&r.sort(d||fy)}function u(){for(let f=e,d=t.length;f<d;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function bI(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new dy,t.set(i,[o])):r>=s.length?(o=new dy,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function RI(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new O,color:new Ye};break;case"SpotLight":n={position:new O,direction:new O,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":n={color:new Ye,position:new O,halfWidth:new O,halfHeight:new O};break}return t[e.id]=n,n}}}function PI(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let LI=0;function DI(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function NI(t){const e=new RI,n=PI(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);const r=new O,s=new Tt,o=new Tt;function a(c){let u=0,f=0,d=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let p=0,g=0,_=0,m=0,h=0,v=0,y=0,S=0,C=0,A=0,T=0;c.sort(DI);for(let V=0,x=c.length;V<x;V++){const E=c[V],H=E.color,z=E.intensity,Y=E.distance,J=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)u+=H.r*z,f+=H.g*z,d+=H.b*z;else if(E.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(E.sh.coefficients[G],z);T++}else if(E.isDirectionalLight){const G=e.get(E);if(G.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const W=E.shadow,L=n.get(E);L.shadowIntensity=W.intensity,L.shadowBias=W.bias,L.shadowNormalBias=W.normalBias,L.shadowRadius=W.radius,L.shadowMapSize=W.mapSize,i.directionalShadow[p]=L,i.directionalShadowMap[p]=J,i.directionalShadowMatrix[p]=E.shadow.matrix,v++}i.directional[p]=G,p++}else if(E.isSpotLight){const G=e.get(E);G.position.setFromMatrixPosition(E.matrixWorld),G.color.copy(H).multiplyScalar(z),G.distance=Y,G.coneCos=Math.cos(E.angle),G.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),G.decay=E.decay,i.spot[_]=G;const W=E.shadow;if(E.map&&(i.spotLightMap[C]=E.map,C++,W.updateMatrices(E),E.castShadow&&A++),i.spotLightMatrix[_]=W.matrix,E.castShadow){const L=n.get(E);L.shadowIntensity=W.intensity,L.shadowBias=W.bias,L.shadowNormalBias=W.normalBias,L.shadowRadius=W.radius,L.shadowMapSize=W.mapSize,i.spotShadow[_]=L,i.spotShadowMap[_]=J,S++}_++}else if(E.isRectAreaLight){const G=e.get(E);G.color.copy(H).multiplyScalar(z),G.halfWidth.set(E.width*.5,0,0),G.halfHeight.set(0,E.height*.5,0),i.rectArea[m]=G,m++}else if(E.isPointLight){const G=e.get(E);if(G.color.copy(E.color).multiplyScalar(E.intensity),G.distance=E.distance,G.decay=E.decay,E.castShadow){const W=E.shadow,L=n.get(E);L.shadowIntensity=W.intensity,L.shadowBias=W.bias,L.shadowNormalBias=W.normalBias,L.shadowRadius=W.radius,L.shadowMapSize=W.mapSize,L.shadowCameraNear=W.camera.near,L.shadowCameraFar=W.camera.far,i.pointShadow[g]=L,i.pointShadowMap[g]=J,i.pointShadowMatrix[g]=E.shadow.matrix,y++}i.point[g]=G,g++}else if(E.isHemisphereLight){const G=e.get(E);G.skyColor.copy(E.color).multiplyScalar(z),G.groundColor.copy(E.groundColor).multiplyScalar(z),i.hemi[h]=G,h++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const P=i.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==h||P.numDirectionalShadows!==v||P.numPointShadows!==y||P.numSpotShadows!==S||P.numSpotMaps!==C||P.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=S+C-A,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=T,P.directionalLength=p,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=h,P.numDirectionalShadows=v,P.numPointShadows=y,P.numSpotShadows=S,P.numSpotMaps=C,P.numLightProbes=T,i.version=LI++)}function l(c,u){let f=0,d=0,p=0,g=0,_=0;const m=u.matrixWorldInverse;for(let h=0,v=c.length;h<v;h++){const y=c[h];if(y.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(y.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function hy(t){const e=new NI(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function II(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new hy(t),e.set(r,[a])):s>=o.length?(a=new hy(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class UI extends Ga{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=d2,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kI extends Ga{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const FI=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,OI=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function BI(t,e,n){let i=new WM;const r=new it,s=new it,o=new wt,a=new UI({depthPacking:h2}),l=new kI,c={},u=n.maxTextureSize,f={[vr]:fn,[fn]:vr,[Ci]:Ci},d=new yr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:FI,fragmentShader:OI}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new ii;g.setAttribute("position",new Fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Jn(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_M;let h=this.type;this.render=function(A,T,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const V=t.getRenderTarget(),x=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),H=t.state;H.setBlending(fr),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const z=h!==wi&&this.type===wi,Y=h===wi&&this.type!==wi;for(let J=0,G=A.length;J<G;J++){const W=A[J],L=W.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const $=L.getFrameExtents();if(r.multiply($),s.copy(L.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/$.x),r.x=s.x*$.x,L.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/$.y),r.y=s.y*$.y,L.mapSize.y=s.y)),L.map===null||z===!0||Y===!0){const oe=this.type!==wi?{minFilter:Un,magFilter:Un}:{};L.map!==null&&L.map.dispose(),L.map=new ts(r.x,r.y,oe),L.map.texture.name=W.name+".shadowMap",L.camera.updateProjectionMatrix()}t.setRenderTarget(L.map),t.clear();const q=L.getViewportCount();for(let oe=0;oe<q;oe++){const we=L.getViewport(oe);o.set(s.x*we.x,s.y*we.y,s.x*we.z,s.y*we.w),H.viewport(o),L.updateMatrices(W,oe),i=L.getFrustum(),S(T,P,L.camera,W,this.type)}L.isPointLightShadow!==!0&&this.type===wi&&v(L,P),L.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(V,x,E)};function v(A,T){const P=e.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ts(r.x,r.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(T,null,P,d,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(T,null,P,p,_,null)}function y(A,T,P,V){let x=null;const E=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(E!==void 0)x=E;else if(x=P.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const H=x.uuid,z=T.uuid;let Y=c[H];Y===void 0&&(Y={},c[H]=Y);let J=Y[z];J===void 0&&(J=x.clone(),Y[z]=J,T.addEventListener("dispose",C)),x=J}if(x.visible=T.visible,x.wireframe=T.wireframe,V===wi?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:f[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const H=t.properties.get(x);H.light=P}return x}function S(A,T,P,V,x){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&x===wi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const z=e.update(A),Y=A.material;if(Array.isArray(Y)){const J=z.groups;for(let G=0,W=J.length;G<W;G++){const L=J[G],$=Y[L.materialIndex];if($&&$.visible){const q=y(A,$,V,x);A.onBeforeShadow(t,A,T,P,z,q,L),t.renderBufferDirect(P,null,z,q,A,L),A.onAfterShadow(t,A,T,P,z,q,L)}}}else if(Y.visible){const J=y(A,Y,V,x);A.onBeforeShadow(t,A,T,P,z,J,null),t.renderBufferDirect(P,null,z,J,A,null),A.onAfterShadow(t,A,T,P,z,J,null)}}const H=A.children;for(let z=0,Y=H.length;z<Y;z++)S(H[z],T,P,V,x)}function C(A){A.target.removeEventListener("dispose",C);for(const P in c){const V=c[P],x=A.target.uuid;x in V&&(V[x].dispose(),delete V[x])}}}const zI={[sh]:oh,[ah]:uh,[lh]:fh,[so]:ch,[oh]:sh,[uh]:ah,[fh]:lh,[ch]:so};function VI(t){function e(){let N=!1;const he=new wt;let j=null;const Q=new wt(0,0,0,0);return{setMask:function(fe){j!==fe&&!N&&(t.colorMask(fe,fe,fe,fe),j=fe)},setLocked:function(fe){N=fe},setClear:function(fe,pe,Ge,At,rn){rn===!0&&(fe*=At,pe*=At,Ge*=At),he.set(fe,pe,Ge,At),Q.equals(he)===!1&&(t.clearColor(fe,pe,Ge,At),Q.copy(he))},reset:function(){N=!1,j=null,Q.set(-1,0,0,0)}}}function n(){let N=!1,he=!1,j=null,Q=null,fe=null;return{setReversed:function(pe){he=pe},setTest:function(pe){pe?ce(t.DEPTH_TEST):le(t.DEPTH_TEST)},setMask:function(pe){j!==pe&&!N&&(t.depthMask(pe),j=pe)},setFunc:function(pe){if(he&&(pe=zI[pe]),Q!==pe){switch(pe){case sh:t.depthFunc(t.NEVER);break;case oh:t.depthFunc(t.ALWAYS);break;case ah:t.depthFunc(t.LESS);break;case so:t.depthFunc(t.LEQUAL);break;case lh:t.depthFunc(t.EQUAL);break;case ch:t.depthFunc(t.GEQUAL);break;case uh:t.depthFunc(t.GREATER);break;case fh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Q=pe}},setLocked:function(pe){N=pe},setClear:function(pe){fe!==pe&&(t.clearDepth(pe),fe=pe)},reset:function(){N=!1,j=null,Q=null,fe=null}}}function i(){let N=!1,he=null,j=null,Q=null,fe=null,pe=null,Ge=null,At=null,rn=null;return{setTest:function($e){N||($e?ce(t.STENCIL_TEST):le(t.STENCIL_TEST))},setMask:function($e){he!==$e&&!N&&(t.stencilMask($e),he=$e)},setFunc:function($e,sn,yi){(j!==$e||Q!==sn||fe!==yi)&&(t.stencilFunc($e,sn,yi),j=$e,Q=sn,fe=yi)},setOp:function($e,sn,yi){(pe!==$e||Ge!==sn||At!==yi)&&(t.stencilOp($e,sn,yi),pe=$e,Ge=sn,At=yi)},setLocked:function($e){N=$e},setClear:function($e){rn!==$e&&(t.clearStencil($e),rn=$e)},reset:function(){N=!1,he=null,j=null,Q=null,fe=null,pe=null,Ge=null,At=null,rn=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,d=[],p=null,g=!1,_=null,m=null,h=null,v=null,y=null,S=null,C=null,A=new Ye(0,0,0),T=0,P=!1,V=null,x=null,E=null,H=null,z=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,G=0;const W=t.getParameter(t.VERSION);W.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(W)[1]),J=G>=1):W.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),J=G>=2);let L=null,$={};const q=t.getParameter(t.SCISSOR_BOX),oe=t.getParameter(t.VIEWPORT),we=new wt().fromArray(q),Fe=new wt().fromArray(oe);function X(N,he,j,Q){const fe=new Uint8Array(4),pe=t.createTexture();t.bindTexture(N,pe),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ge=0;Ge<j;Ge++)N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY?t.texImage3D(he,0,t.RGBA,1,1,Q,0,t.RGBA,t.UNSIGNED_BYTE,fe):t.texImage2D(he+Ge,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,fe);return pe}const ee={};ee[t.TEXTURE_2D]=X(t.TEXTURE_2D,t.TEXTURE_2D,1),ee[t.TEXTURE_CUBE_MAP]=X(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[t.TEXTURE_2D_ARRAY]=X(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ee[t.TEXTURE_3D]=X(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ce(t.DEPTH_TEST),s.setFunc(so),Be(!1),je(x0),ce(t.CULL_FACE),D(fr);function ce(N){c[N]!==!0&&(t.enable(N),c[N]=!0)}function le(N){c[N]!==!1&&(t.disable(N),c[N]=!1)}function Ce(N,he){return u[N]!==he?(t.bindFramebuffer(N,he),u[N]=he,N===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=he),N===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=he),!0):!1}function Te(N,he){let j=d,Q=!1;if(N){j=f.get(he),j===void 0&&(j=[],f.set(he,j));const fe=N.textures;if(j.length!==fe.length||j[0]!==t.COLOR_ATTACHMENT0){for(let pe=0,Ge=fe.length;pe<Ge;pe++)j[pe]=t.COLOR_ATTACHMENT0+pe;j.length=fe.length,Q=!0}}else j[0]!==t.BACK&&(j[0]=t.BACK,Q=!0);Q&&t.drawBuffers(j)}function Ve(N){return p!==N?(t.useProgram(N),p=N,!0):!1}const tt={[Or]:t.FUNC_ADD,[BP]:t.FUNC_SUBTRACT,[zP]:t.FUNC_REVERSE_SUBTRACT};tt[VP]=t.MIN,tt[HP]=t.MAX;const He={[GP]:t.ZERO,[WP]:t.ONE,[jP]:t.SRC_COLOR,[ih]:t.SRC_ALPHA,[ZP]:t.SRC_ALPHA_SATURATE,[KP]:t.DST_COLOR,[YP]:t.DST_ALPHA,[XP]:t.ONE_MINUS_SRC_COLOR,[rh]:t.ONE_MINUS_SRC_ALPHA,[qP]:t.ONE_MINUS_DST_COLOR,[$P]:t.ONE_MINUS_DST_ALPHA,[QP]:t.CONSTANT_COLOR,[JP]:t.ONE_MINUS_CONSTANT_COLOR,[e2]:t.CONSTANT_ALPHA,[t2]:t.ONE_MINUS_CONSTANT_ALPHA};function D(N,he,j,Q,fe,pe,Ge,At,rn,$e){if(N===fr){g===!0&&(le(t.BLEND),g=!1);return}if(g===!1&&(ce(t.BLEND),g=!0),N!==OP){if(N!==_||$e!==P){if((m!==Or||y!==Or)&&(t.blendEquation(t.FUNC_ADD),m=Or,y=Or),$e)switch(N){case Xs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case S0:t.blendFunc(t.ONE,t.ONE);break;case M0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case E0:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Xs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case S0:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case M0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case E0:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}h=null,v=null,S=null,C=null,A.set(0,0,0),T=0,_=N,P=$e}return}fe=fe||he,pe=pe||j,Ge=Ge||Q,(he!==m||fe!==y)&&(t.blendEquationSeparate(tt[he],tt[fe]),m=he,y=fe),(j!==h||Q!==v||pe!==S||Ge!==C)&&(t.blendFuncSeparate(He[j],He[Q],He[pe],He[Ge]),h=j,v=Q,S=pe,C=Ge),(At.equals(A)===!1||rn!==T)&&(t.blendColor(At.r,At.g,At.b,rn),A.copy(At),T=rn),_=N,P=!1}function pn(N,he){N.side===Ci?le(t.CULL_FACE):ce(t.CULL_FACE);let j=N.side===fn;he&&(j=!j),Be(j),N.blending===Xs&&N.transparent===!1?D(fr):D(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),s.setFunc(N.depthFunc),s.setTest(N.depthTest),s.setMask(N.depthWrite),r.setMask(N.colorWrite);const Q=N.stencilWrite;o.setTest(Q),Q&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ot(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ce(t.SAMPLE_ALPHA_TO_COVERAGE):le(t.SAMPLE_ALPHA_TO_COVERAGE)}function Be(N){V!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),V=N)}function je(N){N!==UP?(ce(t.CULL_FACE),N!==x&&(N===x0?t.cullFace(t.BACK):N===kP?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):le(t.CULL_FACE),x=N}function Pe(N){N!==E&&(J&&t.lineWidth(N),E=N)}function ot(N,he,j){N?(ce(t.POLYGON_OFFSET_FILL),(H!==he||z!==j)&&(t.polygonOffset(he,j),H=he,z=j)):le(t.POLYGON_OFFSET_FILL)}function Ne(N){N?ce(t.SCISSOR_TEST):le(t.SCISSOR_TEST)}function R(N){N===void 0&&(N=t.TEXTURE0+Y-1),L!==N&&(t.activeTexture(N),L=N)}function M(N,he,j){j===void 0&&(L===null?j=t.TEXTURE0+Y-1:j=L);let Q=$[j];Q===void 0&&(Q={type:void 0,texture:void 0},$[j]=Q),(Q.type!==N||Q.texture!==he)&&(L!==j&&(t.activeTexture(j),L=j),t.bindTexture(N,he||ee[N]),Q.type=N,Q.texture=he)}function k(){const N=$[L];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Z(){try{t.compressedTexImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function te(){try{t.compressedTexImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function K(){try{t.texSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Se(){try{t.texSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ue(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ge(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Xe(){try{t.texStorage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function re(){try{t.texStorage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ve(){try{t.texImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Le(){try{t.texImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function De(N){we.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),we.copy(N))}function ye(N){Fe.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),Fe.copy(N))}function ze(N,he){let j=l.get(he);j===void 0&&(j=new WeakMap,l.set(he,j));let Q=j.get(N);Q===void 0&&(Q=t.getUniformBlockIndex(he,N.name),j.set(N,Q))}function Ie(N,he){const Q=l.get(he).get(N);a.get(he)!==Q&&(t.uniformBlockBinding(he,Q,N.__bindingPointIndex),a.set(he,Q))}function rt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},L=null,$={},u={},f=new WeakMap,d=[],p=null,g=!1,_=null,m=null,h=null,v=null,y=null,S=null,C=null,A=new Ye(0,0,0),T=0,P=!1,V=null,x=null,E=null,H=null,z=null,we.set(0,0,t.canvas.width,t.canvas.height),Fe.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ce,disable:le,bindFramebuffer:Ce,drawBuffers:Te,useProgram:Ve,setBlending:D,setMaterial:pn,setFlipSided:Be,setCullFace:je,setLineWidth:Pe,setPolygonOffset:ot,setScissorTest:Ne,activeTexture:R,bindTexture:M,unbindTexture:k,compressedTexImage2D:Z,compressedTexImage3D:te,texImage2D:ve,texImage3D:Le,updateUBOMapping:ze,uniformBlockBinding:Ie,texStorage2D:Xe,texStorage3D:re,texSubImage2D:K,texSubImage3D:Se,compressedTexSubImage2D:ue,compressedTexSubImage3D:ge,scissor:De,viewport:ye,reset:rt}}function py(t,e,n,i){const r=HI(i);switch(n){case TM:return t*e;case CM:return t*e;case bM:return t*e*2;case RM:return t*e/r.components*r.byteLength;case wm:return t*e/r.components*r.byteLength;case PM:return t*e*2/r.components*r.byteLength;case Tm:return t*e*2/r.components*r.byteLength;case AM:return t*e*3/r.components*r.byteLength;case Qn:return t*e*4/r.components*r.byteLength;case Am:return t*e*4/r.components*r.byteLength;case ec:case tc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case nc:case ic:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case vh:case _h:return Math.max(t,16)*Math.max(e,8)/4;case gh:case yh:return Math.max(t,8)*Math.max(e,8)/2;case xh:case Sh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Mh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Eh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case wh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Th:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Ah:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Ch:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case bh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Rh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Ph:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Lh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Dh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Nh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Ih:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Uh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case kh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case rc:case Fh:case Oh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case LM:case Bh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case zh:case Vh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function HI(t){switch(t){case Fi:case MM:return{byteLength:1,components:1};case Ca:case EM:case za:return{byteLength:2,components:1};case Mm:case Em:return{byteLength:2,components:4};case es:case Sm:case Pi:return{byteLength:4,components:1};case wM:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function GI(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new it,u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,M){return p?new OffscreenCanvas(R,M):Gc("canvas")}function _(R,M,k){let Z=1;const te=Ne(R);if((te.width>k||te.height>k)&&(Z=k/Math.max(te.width,te.height)),Z<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const K=Math.floor(Z*te.width),Se=Math.floor(Z*te.height);f===void 0&&(f=g(K,Se));const ue=M?g(K,Se):f;return ue.width=K,ue.height=Se,ue.getContext("2d").drawImage(R,0,0,K,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+K+"x"+Se+")."),ue}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),R;return R}function m(R){return R.generateMipmaps&&R.minFilter!==Un&&R.minFilter!==qn}function h(R){t.generateMipmap(R)}function v(R,M,k,Z,te=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let K=M;if(M===t.RED&&(k===t.FLOAT&&(K=t.R32F),k===t.HALF_FLOAT&&(K=t.R16F),k===t.UNSIGNED_BYTE&&(K=t.R8)),M===t.RED_INTEGER&&(k===t.UNSIGNED_BYTE&&(K=t.R8UI),k===t.UNSIGNED_SHORT&&(K=t.R16UI),k===t.UNSIGNED_INT&&(K=t.R32UI),k===t.BYTE&&(K=t.R8I),k===t.SHORT&&(K=t.R16I),k===t.INT&&(K=t.R32I)),M===t.RG&&(k===t.FLOAT&&(K=t.RG32F),k===t.HALF_FLOAT&&(K=t.RG16F),k===t.UNSIGNED_BYTE&&(K=t.RG8)),M===t.RG_INTEGER&&(k===t.UNSIGNED_BYTE&&(K=t.RG8UI),k===t.UNSIGNED_SHORT&&(K=t.RG16UI),k===t.UNSIGNED_INT&&(K=t.RG32UI),k===t.BYTE&&(K=t.RG8I),k===t.SHORT&&(K=t.RG16I),k===t.INT&&(K=t.RG32I)),M===t.RGB_INTEGER&&(k===t.UNSIGNED_BYTE&&(K=t.RGB8UI),k===t.UNSIGNED_SHORT&&(K=t.RGB16UI),k===t.UNSIGNED_INT&&(K=t.RGB32UI),k===t.BYTE&&(K=t.RGB8I),k===t.SHORT&&(K=t.RGB16I),k===t.INT&&(K=t.RGB32I)),M===t.RGBA_INTEGER&&(k===t.UNSIGNED_BYTE&&(K=t.RGBA8UI),k===t.UNSIGNED_SHORT&&(K=t.RGBA16UI),k===t.UNSIGNED_INT&&(K=t.RGBA32UI),k===t.BYTE&&(K=t.RGBA8I),k===t.SHORT&&(K=t.RGBA16I),k===t.INT&&(K=t.RGBA32I)),M===t.RGB&&k===t.UNSIGNED_INT_5_9_9_9_REV&&(K=t.RGB9_E5),M===t.RGBA){const Se=te?Bc:Qe.getTransfer(Z);k===t.FLOAT&&(K=t.RGBA32F),k===t.HALF_FLOAT&&(K=t.RGBA16F),k===t.UNSIGNED_BYTE&&(K=Se===ct?t.SRGB8_ALPHA8:t.RGBA8),k===t.UNSIGNED_SHORT_4_4_4_4&&(K=t.RGBA4),k===t.UNSIGNED_SHORT_5_5_5_1&&(K=t.RGB5_A1)}return(K===t.R16F||K===t.R32F||K===t.RG16F||K===t.RG32F||K===t.RGBA16F||K===t.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function y(R,M){let k;return R?M===null||M===es||M===lo?k=t.DEPTH24_STENCIL8:M===Pi?k=t.DEPTH32F_STENCIL8:M===Ca&&(k=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===es||M===lo?k=t.DEPTH_COMPONENT24:M===Pi?k=t.DEPTH_COMPONENT32F:M===Ca&&(k=t.DEPTH_COMPONENT16),k}function S(R,M){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Un&&R.minFilter!==qn?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function C(R){const M=R.target;M.removeEventListener("dispose",C),T(M),M.isVideoTexture&&u.delete(M)}function A(R){const M=R.target;M.removeEventListener("dispose",A),V(M)}function T(R){const M=i.get(R);if(M.__webglInit===void 0)return;const k=R.source,Z=d.get(k);if(Z){const te=Z[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&P(R),Object.keys(Z).length===0&&d.delete(k)}i.remove(R)}function P(R){const M=i.get(R);t.deleteTexture(M.__webglTexture);const k=R.source,Z=d.get(k);delete Z[M.__cacheKey],o.memory.textures--}function V(R){const M=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(M.__webglFramebuffer[Z]))for(let te=0;te<M.__webglFramebuffer[Z].length;te++)t.deleteFramebuffer(M.__webglFramebuffer[Z][te]);else t.deleteFramebuffer(M.__webglFramebuffer[Z]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[Z])}else{if(Array.isArray(M.__webglFramebuffer))for(let Z=0;Z<M.__webglFramebuffer.length;Z++)t.deleteFramebuffer(M.__webglFramebuffer[Z]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Z=0;Z<M.__webglColorRenderbuffer.length;Z++)M.__webglColorRenderbuffer[Z]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[Z]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const k=R.textures;for(let Z=0,te=k.length;Z<te;Z++){const K=i.get(k[Z]);K.__webglTexture&&(t.deleteTexture(K.__webglTexture),o.memory.textures--),i.remove(k[Z])}i.remove(R)}let x=0;function E(){x=0}function H(){const R=x;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),x+=1,R}function z(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function Y(R,M){const k=i.get(R);if(R.isVideoTexture&&Pe(R),R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){const Z=R.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Fe(k,R,M);return}}n.bindTexture(t.TEXTURE_2D,k.__webglTexture,t.TEXTURE0+M)}function J(R,M){const k=i.get(R);if(R.version>0&&k.__version!==R.version){Fe(k,R,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,k.__webglTexture,t.TEXTURE0+M)}function G(R,M){const k=i.get(R);if(R.version>0&&k.__version!==R.version){Fe(k,R,M);return}n.bindTexture(t.TEXTURE_3D,k.__webglTexture,t.TEXTURE0+M)}function W(R,M){const k=i.get(R);if(R.version>0&&k.__version!==R.version){X(k,R,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture,t.TEXTURE0+M)}const L={[ph]:t.REPEAT,[Wr]:t.CLAMP_TO_EDGE,[mh]:t.MIRRORED_REPEAT},$={[Un]:t.NEAREST,[f2]:t.NEAREST_MIPMAP_NEAREST,[pl]:t.NEAREST_MIPMAP_LINEAR,[qn]:t.LINEAR,[gf]:t.LINEAR_MIPMAP_NEAREST,[jr]:t.LINEAR_MIPMAP_LINEAR},q={[g2]:t.NEVER,[M2]:t.ALWAYS,[v2]:t.LESS,[DM]:t.LEQUAL,[y2]:t.EQUAL,[S2]:t.GEQUAL,[_2]:t.GREATER,[x2]:t.NOTEQUAL};function oe(R,M){if(M.type===Pi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===qn||M.magFilter===gf||M.magFilter===pl||M.magFilter===jr||M.minFilter===qn||M.minFilter===gf||M.minFilter===pl||M.minFilter===jr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,L[M.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,L[M.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,L[M.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,$[M.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,$[M.minFilter]),M.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,q[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Un||M.minFilter!==pl&&M.minFilter!==jr||M.type===Pi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function we(R,M){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",C));const Z=M.source;let te=d.get(Z);te===void 0&&(te={},d.set(Z,te));const K=z(M);if(K!==R.__cacheKey){te[K]===void 0&&(te[K]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,k=!0),te[K].usedTimes++;const Se=te[R.__cacheKey];Se!==void 0&&(te[R.__cacheKey].usedTimes--,Se.usedTimes===0&&P(M)),R.__cacheKey=K,R.__webglTexture=te[K].texture}return k}function Fe(R,M,k){let Z=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Z=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Z=t.TEXTURE_3D);const te=we(R,M),K=M.source;n.bindTexture(Z,R.__webglTexture,t.TEXTURE0+k);const Se=i.get(K);if(K.version!==Se.__version||te===!0){n.activeTexture(t.TEXTURE0+k);const ue=Qe.getPrimaries(Qe.workingColorSpace),ge=M.colorSpace===er?null:Qe.getPrimaries(M.colorSpace),Xe=M.colorSpace===er||ue===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let re=_(M.image,!1,r.maxTextureSize);re=ot(M,re);const ve=s.convert(M.format,M.colorSpace),Le=s.convert(M.type);let De=v(M.internalFormat,ve,Le,M.colorSpace,M.isVideoTexture);oe(Z,M);let ye;const ze=M.mipmaps,Ie=M.isVideoTexture!==!0,rt=Se.__version===void 0||te===!0,N=K.dataReady,he=S(M,re);if(M.isDepthTexture)De=y(M.format===co,M.type),rt&&(Ie?n.texStorage2D(t.TEXTURE_2D,1,De,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,De,re.width,re.height,0,ve,Le,null));else if(M.isDataTexture)if(ze.length>0){Ie&&rt&&n.texStorage2D(t.TEXTURE_2D,he,De,ze[0].width,ze[0].height);for(let j=0,Q=ze.length;j<Q;j++)ye=ze[j],Ie?N&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,ye.width,ye.height,ve,Le,ye.data):n.texImage2D(t.TEXTURE_2D,j,De,ye.width,ye.height,0,ve,Le,ye.data);M.generateMipmaps=!1}else Ie?(rt&&n.texStorage2D(t.TEXTURE_2D,he,De,re.width,re.height),N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,re.width,re.height,ve,Le,re.data)):n.texImage2D(t.TEXTURE_2D,0,De,re.width,re.height,0,ve,Le,re.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ie&&rt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,De,ze[0].width,ze[0].height,re.depth);for(let j=0,Q=ze.length;j<Q;j++)if(ye=ze[j],M.format!==Qn)if(ve!==null)if(Ie){if(N)if(M.layerUpdates.size>0){const fe=py(ye.width,ye.height,M.format,M.type);for(const pe of M.layerUpdates){const Ge=ye.data.subarray(pe*fe/ye.data.BYTES_PER_ELEMENT,(pe+1)*fe/ye.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,pe,ye.width,ye.height,1,ve,Ge,0,0)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,0,ye.width,ye.height,re.depth,ve,ye.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,j,De,ye.width,ye.height,re.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?N&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,0,ye.width,ye.height,re.depth,ve,Le,ye.data):n.texImage3D(t.TEXTURE_2D_ARRAY,j,De,ye.width,ye.height,re.depth,0,ve,Le,ye.data)}else{Ie&&rt&&n.texStorage2D(t.TEXTURE_2D,he,De,ze[0].width,ze[0].height);for(let j=0,Q=ze.length;j<Q;j++)ye=ze[j],M.format!==Qn?ve!==null?Ie?N&&n.compressedTexSubImage2D(t.TEXTURE_2D,j,0,0,ye.width,ye.height,ve,ye.data):n.compressedTexImage2D(t.TEXTURE_2D,j,De,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?N&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,ye.width,ye.height,ve,Le,ye.data):n.texImage2D(t.TEXTURE_2D,j,De,ye.width,ye.height,0,ve,Le,ye.data)}else if(M.isDataArrayTexture)if(Ie){if(rt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,De,re.width,re.height,re.depth),N)if(M.layerUpdates.size>0){const j=py(re.width,re.height,M.format,M.type);for(const Q of M.layerUpdates){const fe=re.data.subarray(Q*j/re.data.BYTES_PER_ELEMENT,(Q+1)*j/re.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Q,re.width,re.height,1,ve,Le,fe)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ve,Le,re.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,De,re.width,re.height,re.depth,0,ve,Le,re.data);else if(M.isData3DTexture)Ie?(rt&&n.texStorage3D(t.TEXTURE_3D,he,De,re.width,re.height,re.depth),N&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ve,Le,re.data)):n.texImage3D(t.TEXTURE_3D,0,De,re.width,re.height,re.depth,0,ve,Le,re.data);else if(M.isFramebufferTexture){if(rt)if(Ie)n.texStorage2D(t.TEXTURE_2D,he,De,re.width,re.height);else{let j=re.width,Q=re.height;for(let fe=0;fe<he;fe++)n.texImage2D(t.TEXTURE_2D,fe,De,j,Q,0,ve,Le,null),j>>=1,Q>>=1}}else if(ze.length>0){if(Ie&&rt){const j=Ne(ze[0]);n.texStorage2D(t.TEXTURE_2D,he,De,j.width,j.height)}for(let j=0,Q=ze.length;j<Q;j++)ye=ze[j],Ie?N&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,ve,Le,ye):n.texImage2D(t.TEXTURE_2D,j,De,ve,Le,ye);M.generateMipmaps=!1}else if(Ie){if(rt){const j=Ne(re);n.texStorage2D(t.TEXTURE_2D,he,De,j.width,j.height)}N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ve,Le,re)}else n.texImage2D(t.TEXTURE_2D,0,De,ve,Le,re);m(M)&&h(Z),Se.__version=K.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function X(R,M,k){if(M.image.length!==6)return;const Z=we(R,M),te=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+k);const K=i.get(te);if(te.version!==K.__version||Z===!0){n.activeTexture(t.TEXTURE0+k);const Se=Qe.getPrimaries(Qe.workingColorSpace),ue=M.colorSpace===er?null:Qe.getPrimaries(M.colorSpace),ge=M.colorSpace===er||Se===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Xe=M.isCompressedTexture||M.image[0].isCompressedTexture,re=M.image[0]&&M.image[0].isDataTexture,ve=[];for(let Q=0;Q<6;Q++)!Xe&&!re?ve[Q]=_(M.image[Q],!0,r.maxCubemapSize):ve[Q]=re?M.image[Q].image:M.image[Q],ve[Q]=ot(M,ve[Q]);const Le=ve[0],De=s.convert(M.format,M.colorSpace),ye=s.convert(M.type),ze=v(M.internalFormat,De,ye,M.colorSpace),Ie=M.isVideoTexture!==!0,rt=K.__version===void 0||Z===!0,N=te.dataReady;let he=S(M,Le);oe(t.TEXTURE_CUBE_MAP,M);let j;if(Xe){Ie&&rt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,he,ze,Le.width,Le.height);for(let Q=0;Q<6;Q++){j=ve[Q].mipmaps;for(let fe=0;fe<j.length;fe++){const pe=j[fe];M.format!==Qn?De!==null?Ie?N&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,fe,0,0,pe.width,pe.height,De,pe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,fe,ze,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,fe,0,0,pe.width,pe.height,De,ye,pe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,fe,ze,pe.width,pe.height,0,De,ye,pe.data)}}}else{if(j=M.mipmaps,Ie&&rt){j.length>0&&he++;const Q=Ne(ve[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,he,ze,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(re){Ie?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ve[Q].width,ve[Q].height,De,ye,ve[Q].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ze,ve[Q].width,ve[Q].height,0,De,ye,ve[Q].data);for(let fe=0;fe<j.length;fe++){const Ge=j[fe].image[Q].image;Ie?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,fe+1,0,0,Ge.width,Ge.height,De,ye,Ge.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,fe+1,ze,Ge.width,Ge.height,0,De,ye,Ge.data)}}else{Ie?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,De,ye,ve[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ze,De,ye,ve[Q]);for(let fe=0;fe<j.length;fe++){const pe=j[fe];Ie?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,fe+1,0,0,De,ye,pe.image[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,fe+1,ze,De,ye,pe.image[Q])}}}m(M)&&h(t.TEXTURE_CUBE_MAP),K.__version=te.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function ee(R,M,k,Z,te,K){const Se=s.convert(k.format,k.colorSpace),ue=s.convert(k.type),ge=v(k.internalFormat,Se,ue,k.colorSpace);if(!i.get(M).__hasExternalTextures){const re=Math.max(1,M.width>>K),ve=Math.max(1,M.height>>K);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,K,ge,re,ve,M.depth,0,Se,ue,null):n.texImage2D(te,K,ge,re,ve,0,Se,ue,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),je(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,te,i.get(k).__webglTexture,0,Be(M)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Z,te,i.get(k).__webglTexture,K),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ce(R,M,k){if(t.bindRenderbuffer(t.RENDERBUFFER,R),M.depthBuffer){const Z=M.depthTexture,te=Z&&Z.isDepthTexture?Z.type:null,K=y(M.stencilBuffer,te),Se=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=Be(M);je(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ue,K,M.width,M.height):k?t.renderbufferStorageMultisample(t.RENDERBUFFER,ue,K,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,K,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Se,t.RENDERBUFFER,R)}else{const Z=M.textures;for(let te=0;te<Z.length;te++){const K=Z[te],Se=s.convert(K.format,K.colorSpace),ue=s.convert(K.type),ge=v(K.internalFormat,Se,ue,K.colorSpace),Xe=Be(M);k&&je(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Xe,ge,M.width,M.height):je(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Xe,ge,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ge,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function le(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Y(M.depthTexture,0);const Z=i.get(M.depthTexture).__webglTexture,te=Be(M);if(M.depthTexture.format===Ys)je(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Z,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Z,0);else if(M.depthTexture.format===co)je(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Z,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Ce(R){const M=i.get(R),k=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const Z=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Z){const te=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Z.removeEventListener("dispose",te)};Z.addEventListener("dispose",te),M.__depthDisposeCallback=te}M.__boundDepthTexture=Z}if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");le(M.__webglFramebuffer,R)}else if(k){M.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[Z]),M.__webglDepthbuffer[Z]===void 0)M.__webglDepthbuffer[Z]=t.createRenderbuffer(),ce(M.__webglDepthbuffer[Z],R,!1);else{const te=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,K=M.__webglDepthbuffer[Z];t.bindRenderbuffer(t.RENDERBUFFER,K),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,K)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),ce(M.__webglDepthbuffer,R,!1);else{const Z=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,te=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,te),t.framebufferRenderbuffer(t.FRAMEBUFFER,Z,t.RENDERBUFFER,te)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Te(R,M,k){const Z=i.get(R);M!==void 0&&ee(Z.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),k!==void 0&&Ce(R)}function Ve(R){const M=R.texture,k=i.get(R),Z=i.get(M);R.addEventListener("dispose",A);const te=R.textures,K=R.isWebGLCubeRenderTarget===!0,Se=te.length>1;if(Se||(Z.__webglTexture===void 0&&(Z.__webglTexture=t.createTexture()),Z.__version=M.version,o.memory.textures++),K){k.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[ue]=[];for(let ge=0;ge<M.mipmaps.length;ge++)k.__webglFramebuffer[ue][ge]=t.createFramebuffer()}else k.__webglFramebuffer[ue]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let ue=0;ue<M.mipmaps.length;ue++)k.__webglFramebuffer[ue]=t.createFramebuffer()}else k.__webglFramebuffer=t.createFramebuffer();if(Se)for(let ue=0,ge=te.length;ue<ge;ue++){const Xe=i.get(te[ue]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&je(R)===!1){k.__webglMultisampledFramebuffer=t.createFramebuffer(),k.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ue=0;ue<te.length;ue++){const ge=te[ue];k.__webglColorRenderbuffer[ue]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,k.__webglColorRenderbuffer[ue]);const Xe=s.convert(ge.format,ge.colorSpace),re=s.convert(ge.type),ve=v(ge.internalFormat,Xe,re,ge.colorSpace,R.isXRRenderTarget===!0),Le=Be(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Le,ve,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,k.__webglColorRenderbuffer[ue])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=t.createRenderbuffer(),ce(k.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(K){n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),oe(t.TEXTURE_CUBE_MAP,M);for(let ue=0;ue<6;ue++)if(M.mipmaps&&M.mipmaps.length>0)for(let ge=0;ge<M.mipmaps.length;ge++)ee(k.__webglFramebuffer[ue][ge],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ge);else ee(k.__webglFramebuffer[ue],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(M)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Se){for(let ue=0,ge=te.length;ue<ge;ue++){const Xe=te[ue],re=i.get(Xe);n.bindTexture(t.TEXTURE_2D,re.__webglTexture),oe(t.TEXTURE_2D,Xe),ee(k.__webglFramebuffer,R,Xe,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,0),m(Xe)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let ue=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ue=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ue,Z.__webglTexture),oe(ue,M),M.mipmaps&&M.mipmaps.length>0)for(let ge=0;ge<M.mipmaps.length;ge++)ee(k.__webglFramebuffer[ge],R,M,t.COLOR_ATTACHMENT0,ue,ge);else ee(k.__webglFramebuffer,R,M,t.COLOR_ATTACHMENT0,ue,0);m(M)&&h(ue),n.unbindTexture()}R.depthBuffer&&Ce(R)}function tt(R){const M=R.textures;for(let k=0,Z=M.length;k<Z;k++){const te=M[k];if(m(te)){const K=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Se=i.get(te).__webglTexture;n.bindTexture(K,Se),h(K),n.unbindTexture()}}}const He=[],D=[];function pn(R){if(R.samples>0){if(je(R)===!1){const M=R.textures,k=R.width,Z=R.height;let te=t.COLOR_BUFFER_BIT;const K=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Se=i.get(R),ue=M.length>1;if(ue)for(let ge=0;ge<M.length;ge++)n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let ge=0;ge<M.length;ge++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),ue){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Se.__webglColorRenderbuffer[ge]);const Xe=i.get(M[ge]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Xe,0)}t.blitFramebuffer(0,0,k,Z,0,0,k,Z,te,t.NEAREST),l===!0&&(He.length=0,D.length=0,He.push(t.COLOR_ATTACHMENT0+ge),R.depthBuffer&&R.resolveDepthBuffer===!1&&(He.push(K),D.push(K),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,D)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,He))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ue)for(let ge=0;ge<M.length;ge++){n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,Se.__webglColorRenderbuffer[ge]);const Xe=i.get(M[ge]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,Xe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function Be(R){return Math.min(r.maxSamples,R.samples)}function je(R){const M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Pe(R){const M=o.render.frame;u.get(R)!==M&&(u.set(R,M),R.update())}function ot(R,M){const k=R.colorSpace,Z=R.format,te=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==Er&&k!==er&&(Qe.getTransfer(k)===ct?(Z!==Qn||te!==Fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),M}function Ne(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=E,this.setTexture2D=Y,this.setTexture2DArray=J,this.setTexture3D=G,this.setTextureCube=W,this.rebindTextures=Te,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=pn,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=je}function WI(t,e){function n(i,r=er){let s;const o=Qe.getTransfer(r);if(i===Fi)return t.UNSIGNED_BYTE;if(i===Mm)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Em)return t.UNSIGNED_SHORT_5_5_5_1;if(i===wM)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===MM)return t.BYTE;if(i===EM)return t.SHORT;if(i===Ca)return t.UNSIGNED_SHORT;if(i===Sm)return t.INT;if(i===es)return t.UNSIGNED_INT;if(i===Pi)return t.FLOAT;if(i===za)return t.HALF_FLOAT;if(i===TM)return t.ALPHA;if(i===AM)return t.RGB;if(i===Qn)return t.RGBA;if(i===CM)return t.LUMINANCE;if(i===bM)return t.LUMINANCE_ALPHA;if(i===Ys)return t.DEPTH_COMPONENT;if(i===co)return t.DEPTH_STENCIL;if(i===RM)return t.RED;if(i===wm)return t.RED_INTEGER;if(i===PM)return t.RG;if(i===Tm)return t.RG_INTEGER;if(i===Am)return t.RGBA_INTEGER;if(i===ec||i===tc||i===nc||i===ic)if(o===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ec)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===tc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===nc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ic)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ec)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===tc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===nc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ic)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===gh||i===vh||i===yh||i===_h)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===gh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===vh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===yh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===_h)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===xh||i===Sh||i===Mh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===xh||i===Sh)return o===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Mh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Eh||i===wh||i===Th||i===Ah||i===Ch||i===bh||i===Rh||i===Ph||i===Lh||i===Dh||i===Nh||i===Ih||i===Uh||i===kh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Eh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===wh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Th)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ah)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ch)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===bh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Rh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ph)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Lh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Dh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Nh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ih)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Uh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===kh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===rc||i===Fh||i===Oh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===rc)return o===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Fh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Oh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===LM||i===Bh||i===zh||i===Vh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===rc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Bh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===zh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Vh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===lo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class jI extends Nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Go extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const XI={type:"move"};class Wf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Go,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Go,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Go,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=n.getJointPose(_,i),h=this._getHandJoint(c,_);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(XI)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Go;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const YI=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$I=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class KI{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new dn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new yr({vertexShader:YI,fragmentShader:$I,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Jn(new Mu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qI extends vo{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,g=null;const _=new KI,m=n.getContextAttributes();let h=null,v=null;const y=[],S=[],C=new it;let A=null;const T=new Nn;T.layers.enable(1),T.viewport=new wt;const P=new Nn;P.layers.enable(2),P.viewport=new wt;const V=[T,P],x=new jI;x.layers.enable(1),x.layers.enable(2);let E=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ee=y[X];return ee===void 0&&(ee=new Wf,y[X]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(X){let ee=y[X];return ee===void 0&&(ee=new Wf,y[X]=ee),ee.getGripSpace()},this.getHand=function(X){let ee=y[X];return ee===void 0&&(ee=new Wf,y[X]=ee),ee.getHandSpace()};function z(X){const ee=S.indexOf(X.inputSource);if(ee===-1)return;const ce=y[ee];ce!==void 0&&(ce.update(X.inputSource,X.frame,c||o),ce.dispatchEvent({type:X.type,data:X.inputSource}))}function Y(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",J);for(let X=0;X<y.length;X++){const ee=S[X];ee!==null&&(S[X]=null,y[X].disconnect(ee))}E=null,H=null,_.reset(),e.setRenderTarget(h),p=null,d=null,f=null,r=null,v=null,Fe.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const ee={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ee),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new ts(p.framebufferWidth,p.framebufferHeight,{format:Qn,type:Fi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ee=null,ce=null,le=null;m.depth&&(le=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ee=m.stencil?co:Ys,ce=m.stencil?lo:es);const Ce={colorFormat:n.RGBA8,depthFormat:le,scaleFactor:s};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(Ce),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new ts(d.textureWidth,d.textureHeight,{format:Qn,type:Fi,depthTexture:new XM(d.textureWidth,d.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Fe.setContext(r),Fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function J(X){for(let ee=0;ee<X.removed.length;ee++){const ce=X.removed[ee],le=S.indexOf(ce);le>=0&&(S[le]=null,y[le].disconnect(ce))}for(let ee=0;ee<X.added.length;ee++){const ce=X.added[ee];let le=S.indexOf(ce);if(le===-1){for(let Te=0;Te<y.length;Te++)if(Te>=S.length){S.push(ce),le=Te;break}else if(S[Te]===null){S[Te]=ce,le=Te;break}if(le===-1)break}const Ce=y[le];Ce&&Ce.connect(ce)}}const G=new O,W=new O;function L(X,ee,ce){G.setFromMatrixPosition(ee.matrixWorld),W.setFromMatrixPosition(ce.matrixWorld);const le=G.distanceTo(W),Ce=ee.projectionMatrix.elements,Te=ce.projectionMatrix.elements,Ve=Ce[14]/(Ce[10]-1),tt=Ce[14]/(Ce[10]+1),He=(Ce[9]+1)/Ce[5],D=(Ce[9]-1)/Ce[5],pn=(Ce[8]-1)/Ce[0],Be=(Te[8]+1)/Te[0],je=Ve*pn,Pe=Ve*Be,ot=le/(-pn+Be),Ne=ot*-pn;if(ee.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Ne),X.translateZ(ot),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Ce[10]===-1)X.projectionMatrix.copy(ee.projectionMatrix),X.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const R=Ve+ot,M=tt+ot,k=je-Ne,Z=Pe+(le-Ne),te=He*tt/M*R,K=D*tt/M*R;X.projectionMatrix.makePerspective(k,Z,te,K,R,M),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function $(X,ee){ee===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ee.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let ee=X.near,ce=X.far;_.texture!==null&&(_.depthNear>0&&(ee=_.depthNear),_.depthFar>0&&(ce=_.depthFar)),x.near=P.near=T.near=ee,x.far=P.far=T.far=ce,(E!==x.near||H!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),E=x.near,H=x.far);const le=X.parent,Ce=x.cameras;$(x,le);for(let Te=0;Te<Ce.length;Te++)$(Ce[Te],le);Ce.length===2?L(x,T,P):x.projectionMatrix.copy(T.projectionMatrix),q(X,x,le)};function q(X,ee,ce){ce===null?X.matrix.copy(ee.matrixWorld):(X.matrix.copy(ce.matrixWorld),X.matrix.invert(),X.matrix.multiply(ee.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ee.projectionMatrix),X.projectionMatrixInverse.copy(ee.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=ba*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let oe=null;function we(X,ee){if(u=ee.getViewerPose(c||o),g=ee,u!==null){const ce=u.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let le=!1;ce.length!==x.cameras.length&&(x.cameras.length=0,le=!0);for(let Te=0;Te<ce.length;Te++){const Ve=ce[Te];let tt=null;if(p!==null)tt=p.getViewport(Ve);else{const D=f.getViewSubImage(d,Ve);tt=D.viewport,Te===0&&(e.setRenderTargetTextures(v,D.colorTexture,d.ignoreDepthValues?void 0:D.depthStencilTexture),e.setRenderTarget(v))}let He=V[Te];He===void 0&&(He=new Nn,He.layers.enable(Te),He.viewport=new wt,V[Te]=He),He.matrix.fromArray(Ve.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(Ve.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(tt.x,tt.y,tt.width,tt.height),Te===0&&(x.matrix.copy(He.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),le===!0&&x.cameras.push(He)}const Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){const Te=f.getDepthInformation(ce[0]);Te&&Te.isValid&&Te.texture&&_.init(e,Te,r.renderState)}}for(let ce=0;ce<y.length;ce++){const le=S[ce],Ce=y[ce];le!==null&&Ce!==void 0&&Ce.update(le,ee,c||o)}oe&&oe(X,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),g=null}const Fe=new jM;Fe.setAnimationLoop(we),this.setAnimationLoop=function(X){oe=X},this.dispose=function(){}}}const Lr=new Oi,ZI=new Tt;function QI(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,VM(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,v,y,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,S)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),_(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,v,y):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===fn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===fn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const v=e.get(h),y=v.envMap,S=v.envMapRotation;y&&(m.envMap.value=y,Lr.copy(S),Lr.x*=-1,Lr.y*=-1,Lr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Lr.y*=-1,Lr.z*=-1),m.envMapRotation.value.setFromMatrix4(ZI.makeRotationFromEuler(Lr)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,v,y){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*v,m.scale.value=y*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,v){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===fn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function _(m,h){const v=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function JI(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){const S=y.program;i.uniformBlockBinding(v,S)}function c(v,y){let S=r[v.id];S===void 0&&(g(v),S=u(v),r[v.id]=S,v.addEventListener("dispose",m));const C=y.program;i.updateUBOMapping(v,C);const A=e.render.frame;s[v.id]!==A&&(d(v),s[v.id]=A)}function u(v){const y=f();v.__bindingPointIndex=y;const S=t.createBuffer(),C=v.__size,A=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,C,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,S),S}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const y=r[v.id],S=v.uniforms,C=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let A=0,T=S.length;A<T;A++){const P=Array.isArray(S[A])?S[A]:[S[A]];for(let V=0,x=P.length;V<x;V++){const E=P[V];if(p(E,A,V,C)===!0){const H=E.__offset,z=Array.isArray(E.value)?E.value:[E.value];let Y=0;for(let J=0;J<z.length;J++){const G=z[J],W=_(G);typeof G=="number"||typeof G=="boolean"?(E.__data[0]=G,t.bufferSubData(t.UNIFORM_BUFFER,H+Y,E.__data)):G.isMatrix3?(E.__data[0]=G.elements[0],E.__data[1]=G.elements[1],E.__data[2]=G.elements[2],E.__data[3]=0,E.__data[4]=G.elements[3],E.__data[5]=G.elements[4],E.__data[6]=G.elements[5],E.__data[7]=0,E.__data[8]=G.elements[6],E.__data[9]=G.elements[7],E.__data[10]=G.elements[8],E.__data[11]=0):(G.toArray(E.__data,Y),Y+=W.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,H,E.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,y,S,C){const A=v.value,T=y+"_"+S;if(C[T]===void 0)return typeof A=="number"||typeof A=="boolean"?C[T]=A:C[T]=A.clone(),!0;{const P=C[T];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return C[T]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function g(v){const y=v.uniforms;let S=0;const C=16;for(let T=0,P=y.length;T<P;T++){const V=Array.isArray(y[T])?y[T]:[y[T]];for(let x=0,E=V.length;x<E;x++){const H=V[x],z=Array.isArray(H.value)?H.value:[H.value];for(let Y=0,J=z.length;Y<J;Y++){const G=z[Y],W=_(G),L=S%C,$=L%W.boundary,q=L+$;S+=$,q!==0&&C-q<W.storage&&(S+=C-q),H.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=S,S+=W.storage}}}const A=S%C;return A>0&&(S+=C-A),v.__size=S,v.__cache={},this}function _(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){const y=v.target;y.removeEventListener("dispose",m);const S=o.indexOf(y.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function h(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class eU{constructor(e={}){const{canvas:n=z2(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const h=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=oi,this.toneMapping=dr,this.toneMappingExposure=1;const y=this;let S=!1,C=0,A=0,T=null,P=-1,V=null;const x=new wt,E=new wt;let H=null;const z=new Ye(0);let Y=0,J=n.width,G=n.height,W=1,L=null,$=null;const q=new wt(0,0,J,G),oe=new wt(0,0,J,G);let we=!1;const Fe=new WM;let X=!1,ee=!1;const ce=new Tt,le=new Tt,Ce=new O,Te=new wt,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function He(){return T===null?W:1}let D=i;function pn(w,I){return n.getContext(w,I)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${xm}`),n.addEventListener("webglcontextlost",Q,!1),n.addEventListener("webglcontextrestored",fe,!1),n.addEventListener("webglcontextcreationerror",pe,!1),D===null){const I="webgl2";if(D=pn(I,w),D===null)throw pn(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Be,je,Pe,ot,Ne,R,M,k,Z,te,K,Se,ue,ge,Xe,re,ve,Le,De,ye,ze,Ie,rt,N;function he(){Be=new sN(D),Be.init(),Ie=new WI(D,Be),je=new Q3(D,Be,e,Ie),Pe=new VI(D),je.reverseDepthBuffer&&Pe.buffers.depth.setReversed(!0),ot=new lN(D),Ne=new AI,R=new GI(D,Be,Pe,Ne,je,Ie,ot),M=new eN(y),k=new rN(y),Z=new pL(D),rt=new q3(D,Z),te=new oN(D,Z,ot,rt),K=new uN(D,te,Z,ot),De=new cN(D,je,R),re=new J3(Ne),Se=new TI(y,M,k,Be,je,rt,re),ue=new QI(y,Ne),ge=new bI,Xe=new II(Be),Le=new K3(y,M,k,Pe,K,d,l),ve=new BI(y,K,je),N=new JI(D,ot,je,Pe),ye=new Z3(D,Be,ot),ze=new aN(D,Be,ot),ot.programs=Se.programs,y.capabilities=je,y.extensions=Be,y.properties=Ne,y.renderLists=ge,y.shadowMap=ve,y.state=Pe,y.info=ot}he();const j=new qI(y,D);this.xr=j,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const w=Be.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Be.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(w){w!==void 0&&(W=w,this.setSize(J,G,!1))},this.getSize=function(w){return w.set(J,G)},this.setSize=function(w,I,F=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=w,G=I,n.width=Math.floor(w*W),n.height=Math.floor(I*W),F===!0&&(n.style.width=w+"px",n.style.height=I+"px"),this.setViewport(0,0,w,I)},this.getDrawingBufferSize=function(w){return w.set(J*W,G*W).floor()},this.setDrawingBufferSize=function(w,I,F){J=w,G=I,W=F,n.width=Math.floor(w*F),n.height=Math.floor(I*F),this.setViewport(0,0,w,I)},this.getCurrentViewport=function(w){return w.copy(x)},this.getViewport=function(w){return w.copy(q)},this.setViewport=function(w,I,F,B){w.isVector4?q.set(w.x,w.y,w.z,w.w):q.set(w,I,F,B),Pe.viewport(x.copy(q).multiplyScalar(W).round())},this.getScissor=function(w){return w.copy(oe)},this.setScissor=function(w,I,F,B){w.isVector4?oe.set(w.x,w.y,w.z,w.w):oe.set(w,I,F,B),Pe.scissor(E.copy(oe).multiplyScalar(W).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(w){Pe.setScissorTest(we=w)},this.setOpaqueSort=function(w){L=w},this.setTransparentSort=function(w){$=w},this.getClearColor=function(w){return w.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor.apply(Le,arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha.apply(Le,arguments)},this.clear=function(w=!0,I=!0,F=!0){let B=0;if(w){let U=!1;if(T!==null){const se=T.texture.format;U=se===Am||se===Tm||se===wm}if(U){const se=T.texture.type,de=se===Fi||se===es||se===Ca||se===lo||se===Mm||se===Em,_e=Le.getClearColor(),xe=Le.getClearAlpha(),be=_e.r,Re=_e.g,Me=_e.b;de?(p[0]=be,p[1]=Re,p[2]=Me,p[3]=xe,D.clearBufferuiv(D.COLOR,0,p)):(g[0]=be,g[1]=Re,g[2]=Me,g[3]=xe,D.clearBufferiv(D.COLOR,0,g))}else B|=D.COLOR_BUFFER_BIT}I&&(B|=D.DEPTH_BUFFER_BIT,D.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),F&&(B|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Q,!1),n.removeEventListener("webglcontextrestored",fe,!1),n.removeEventListener("webglcontextcreationerror",pe,!1),ge.dispose(),Xe.dispose(),Ne.dispose(),M.dispose(),k.dispose(),K.dispose(),rt.dispose(),N.dispose(),Se.dispose(),j.dispose(),j.removeEventListener("sessionstart",Dm),j.removeEventListener("sessionend",Nm),wr.stop()};function Q(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const w=ot.autoReset,I=ve.enabled,F=ve.autoUpdate,B=ve.needsUpdate,U=ve.type;he(),ot.autoReset=w,ve.enabled=I,ve.autoUpdate=F,ve.needsUpdate=B,ve.type=U}function pe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ge(w){const I=w.target;I.removeEventListener("dispose",Ge),At(I)}function At(w){rn(w),Ne.remove(w)}function rn(w){const I=Ne.get(w).programs;I!==void 0&&(I.forEach(function(F){Se.releaseProgram(F)}),w.isShaderMaterial&&Se.releaseShaderCache(w))}this.renderBufferDirect=function(w,I,F,B,U,se){I===null&&(I=Ve);const de=U.isMesh&&U.matrixWorld.determinant()<0,_e=QM(w,I,F,B,U);Pe.setMaterial(B,de);let xe=F.index,be=1;if(B.wireframe===!0){if(xe=te.getWireframeAttribute(F),xe===void 0)return;be=2}const Re=F.drawRange,Me=F.attributes.position;let Je=Re.start*be,at=(Re.start+Re.count)*be;se!==null&&(Je=Math.max(Je,se.start*be),at=Math.min(at,(se.start+se.count)*be)),xe!==null?(Je=Math.max(Je,0),at=Math.min(at,xe.count)):Me!=null&&(Je=Math.max(Je,0),at=Math.min(at,Me.count));const vt=at-Je;if(vt<0||vt===1/0)return;rt.setup(U,B,_e,F,xe);let mn,qe=ye;if(xe!==null&&(mn=Z.get(xe),qe=ze,qe.setIndex(mn)),U.isMesh)B.wireframe===!0?(Pe.setLineWidth(B.wireframeLinewidth*He()),qe.setMode(D.LINES)):qe.setMode(D.TRIANGLES);else if(U.isLine){let Ee=B.linewidth;Ee===void 0&&(Ee=1),Pe.setLineWidth(Ee*He()),U.isLineSegments?qe.setMode(D.LINES):U.isLineLoop?qe.setMode(D.LINE_LOOP):qe.setMode(D.LINE_STRIP)}else U.isPoints?qe.setMode(D.POINTS):U.isSprite&&qe.setMode(D.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)qe.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Be.get("WEBGL_multi_draw"))qe.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Ee=U._multiDrawStarts,Ot=U._multiDrawCounts,Ze=U._multiDrawCount,Vn=xe?Z.get(xe).bytesPerElement:1,ss=Ne.get(B).currentProgram.getUniforms();for(let gn=0;gn<Ze;gn++)ss.setValue(D,"_gl_DrawID",gn),qe.render(Ee[gn]/Vn,Ot[gn])}else if(U.isInstancedMesh)qe.renderInstances(Je,vt,U.count);else if(F.isInstancedBufferGeometry){const Ee=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,Ot=Math.min(F.instanceCount,Ee);qe.renderInstances(Je,vt,Ot)}else qe.render(Je,vt)};function $e(w,I,F){w.transparent===!0&&w.side===Ci&&w.forceSinglePass===!1?(w.side=fn,w.needsUpdate=!0,Xa(w,I,F),w.side=vr,w.needsUpdate=!0,Xa(w,I,F),w.side=Ci):Xa(w,I,F)}this.compile=function(w,I,F=null){F===null&&(F=w),m=Xe.get(F),m.init(I),v.push(m),F.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),w!==F&&w.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),m.setupLights();const B=new Set;return w.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const se=U.material;if(se)if(Array.isArray(se))for(let de=0;de<se.length;de++){const _e=se[de];$e(_e,F,U),B.add(_e)}else $e(se,F,U),B.add(se)}),v.pop(),m=null,B},this.compileAsync=function(w,I,F=null){const B=this.compile(w,I,F);return new Promise(U=>{function se(){if(B.forEach(function(de){Ne.get(de).currentProgram.isReady()&&B.delete(de)}),B.size===0){U(w);return}setTimeout(se,10)}Be.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let sn=null;function yi(w){sn&&sn(w)}function Dm(){wr.stop()}function Nm(){wr.start()}const wr=new jM;wr.setAnimationLoop(yi),typeof self<"u"&&wr.setContext(self),this.setAnimationLoop=function(w){sn=w,j.setAnimationLoop(w),w===null?wr.stop():wr.start()},j.addEventListener("sessionstart",Dm),j.addEventListener("sessionend",Nm),this.render=function(w,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(I),I=j.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,I,T),m=Xe.get(w,v.length),m.init(I),v.push(m),le.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Fe.setFromProjectionMatrix(le),ee=this.localClippingEnabled,X=re.init(this.clippingPlanes,ee),_=ge.get(w,h.length),_.init(),h.push(_),j.enabled===!0&&j.isPresenting===!0){const se=y.xr.getDepthSensingMesh();se!==null&&wu(se,I,-1/0,y.sortObjects)}wu(w,I,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(L,$),tt=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,tt&&Le.addToRenderList(_,w),this.info.render.frame++,X===!0&&re.beginShadows();const F=m.state.shadowsArray;ve.render(F,w,I),X===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=_.opaque,U=_.transmissive;if(m.setupLights(),I.isArrayCamera){const se=I.cameras;if(U.length>0)for(let de=0,_e=se.length;de<_e;de++){const xe=se[de];Um(B,U,w,xe)}tt&&Le.render(w);for(let de=0,_e=se.length;de<_e;de++){const xe=se[de];Im(_,w,xe,xe.viewport)}}else U.length>0&&Um(B,U,w,I),tt&&Le.render(w),Im(_,w,I);T!==null&&(R.updateMultisampleRenderTarget(T),R.updateRenderTargetMipmap(T)),w.isScene===!0&&w.onAfterRender(y,w,I),rt.resetDefaultState(),P=-1,V=null,v.pop(),v.length>0?(m=v[v.length-1],X===!0&&re.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,h.pop(),h.length>0?_=h[h.length-1]:_=null};function wu(w,I,F,B){if(w.visible===!1)return;if(w.layers.test(I.layers)){if(w.isGroup)F=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(I);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Fe.intersectsSprite(w)){B&&Te.setFromMatrixPosition(w.matrixWorld).applyMatrix4(le);const de=K.update(w),_e=w.material;_e.visible&&_.push(w,de,_e,F,Te.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Fe.intersectsObject(w))){const de=K.update(w),_e=w.material;if(B&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Te.copy(w.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Te.copy(de.boundingSphere.center)),Te.applyMatrix4(w.matrixWorld).applyMatrix4(le)),Array.isArray(_e)){const xe=de.groups;for(let be=0,Re=xe.length;be<Re;be++){const Me=xe[be],Je=_e[Me.materialIndex];Je&&Je.visible&&_.push(w,de,Je,F,Te.z,Me)}}else _e.visible&&_.push(w,de,_e,F,Te.z,null)}}const se=w.children;for(let de=0,_e=se.length;de<_e;de++)wu(se[de],I,F,B)}function Im(w,I,F,B){const U=w.opaque,se=w.transmissive,de=w.transparent;m.setupLightsView(F),X===!0&&re.setGlobalState(y.clippingPlanes,F),B&&Pe.viewport(x.copy(B)),U.length>0&&ja(U,I,F),se.length>0&&ja(se,I,F),de.length>0&&ja(de,I,F),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function Um(w,I,F,B){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[B.id]===void 0&&(m.state.transmissionRenderTarget[B.id]=new ts(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?za:Fi,minFilter:jr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const se=m.state.transmissionRenderTarget[B.id],de=B.viewport||x;se.setSize(de.z,de.w);const _e=y.getRenderTarget();y.setRenderTarget(se),y.getClearColor(z),Y=y.getClearAlpha(),Y<1&&y.setClearColor(16777215,.5),y.clear(),tt&&Le.render(F);const xe=y.toneMapping;y.toneMapping=dr;const be=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),m.setupLightsView(B),X===!0&&re.setGlobalState(y.clippingPlanes,B),ja(w,F,B),R.updateMultisampleRenderTarget(se),R.updateRenderTargetMipmap(se),Be.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let Me=0,Je=I.length;Me<Je;Me++){const at=I[Me],vt=at.object,mn=at.geometry,qe=at.material,Ee=at.group;if(qe.side===Ci&&vt.layers.test(B.layers)){const Ot=qe.side;qe.side=fn,qe.needsUpdate=!0,km(vt,F,B,mn,qe,Ee),qe.side=Ot,qe.needsUpdate=!0,Re=!0}}Re===!0&&(R.updateMultisampleRenderTarget(se),R.updateRenderTargetMipmap(se))}y.setRenderTarget(_e),y.setClearColor(z,Y),be!==void 0&&(B.viewport=be),y.toneMapping=xe}function ja(w,I,F){const B=I.isScene===!0?I.overrideMaterial:null;for(let U=0,se=w.length;U<se;U++){const de=w[U],_e=de.object,xe=de.geometry,be=B===null?de.material:B,Re=de.group;_e.layers.test(F.layers)&&km(_e,I,F,xe,be,Re)}}function km(w,I,F,B,U,se){w.onBeforeRender(y,I,F,B,U,se),w.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),U.onBeforeRender(y,I,F,B,w,se),U.transparent===!0&&U.side===Ci&&U.forceSinglePass===!1?(U.side=fn,U.needsUpdate=!0,y.renderBufferDirect(F,I,B,U,w,se),U.side=vr,U.needsUpdate=!0,y.renderBufferDirect(F,I,B,U,w,se),U.side=Ci):y.renderBufferDirect(F,I,B,U,w,se),w.onAfterRender(y,I,F,B,U,se)}function Xa(w,I,F){I.isScene!==!0&&(I=Ve);const B=Ne.get(w),U=m.state.lights,se=m.state.shadowsArray,de=U.state.version,_e=Se.getParameters(w,U.state,se,I,F),xe=Se.getProgramCacheKey(_e);let be=B.programs;B.environment=w.isMeshStandardMaterial?I.environment:null,B.fog=I.fog,B.envMap=(w.isMeshStandardMaterial?k:M).get(w.envMap||B.environment),B.envMapRotation=B.environment!==null&&w.envMap===null?I.environmentRotation:w.envMapRotation,be===void 0&&(w.addEventListener("dispose",Ge),be=new Map,B.programs=be);let Re=be.get(xe);if(Re!==void 0){if(B.currentProgram===Re&&B.lightsStateVersion===de)return Om(w,_e),Re}else _e.uniforms=Se.getUniforms(w),w.onBeforeCompile(_e,y),Re=Se.acquireProgram(_e,xe),be.set(xe,Re),B.uniforms=_e.uniforms;const Me=B.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Me.clippingPlanes=re.uniform),Om(w,_e),B.needsLights=eE(w),B.lightsStateVersion=de,B.needsLights&&(Me.ambientLightColor.value=U.state.ambient,Me.lightProbe.value=U.state.probe,Me.directionalLights.value=U.state.directional,Me.directionalLightShadows.value=U.state.directionalShadow,Me.spotLights.value=U.state.spot,Me.spotLightShadows.value=U.state.spotShadow,Me.rectAreaLights.value=U.state.rectArea,Me.ltc_1.value=U.state.rectAreaLTC1,Me.ltc_2.value=U.state.rectAreaLTC2,Me.pointLights.value=U.state.point,Me.pointLightShadows.value=U.state.pointShadow,Me.hemisphereLights.value=U.state.hemi,Me.directionalShadowMap.value=U.state.directionalShadowMap,Me.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Me.spotShadowMap.value=U.state.spotShadowMap,Me.spotLightMatrix.value=U.state.spotLightMatrix,Me.spotLightMap.value=U.state.spotLightMap,Me.pointShadowMap.value=U.state.pointShadowMap,Me.pointShadowMatrix.value=U.state.pointShadowMatrix),B.currentProgram=Re,B.uniformsList=null,Re}function Fm(w){if(w.uniformsList===null){const I=w.currentProgram.getUniforms();w.uniformsList=oc.seqWithValue(I.seq,w.uniforms)}return w.uniformsList}function Om(w,I){const F=Ne.get(w);F.outputColorSpace=I.outputColorSpace,F.batching=I.batching,F.batchingColor=I.batchingColor,F.instancing=I.instancing,F.instancingColor=I.instancingColor,F.instancingMorph=I.instancingMorph,F.skinning=I.skinning,F.morphTargets=I.morphTargets,F.morphNormals=I.morphNormals,F.morphColors=I.morphColors,F.morphTargetsCount=I.morphTargetsCount,F.numClippingPlanes=I.numClippingPlanes,F.numIntersection=I.numClipIntersection,F.vertexAlphas=I.vertexAlphas,F.vertexTangents=I.vertexTangents,F.toneMapping=I.toneMapping}function QM(w,I,F,B,U){I.isScene!==!0&&(I=Ve),R.resetTextureUnits();const se=I.fog,de=B.isMeshStandardMaterial?I.environment:null,_e=T===null?y.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Er,xe=(B.isMeshStandardMaterial?k:M).get(B.envMap||de),be=B.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Re=!!F.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Me=!!F.morphAttributes.position,Je=!!F.morphAttributes.normal,at=!!F.morphAttributes.color;let vt=dr;B.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(vt=y.toneMapping);const mn=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,qe=mn!==void 0?mn.length:0,Ee=Ne.get(B),Ot=m.state.lights;if(X===!0&&(ee===!0||w!==V)){const Cn=w===V&&B.id===P;re.setState(B,w,Cn)}let Ze=!1;B.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==Ot.state.version||Ee.outputColorSpace!==_e||U.isBatchedMesh&&Ee.batching===!1||!U.isBatchedMesh&&Ee.batching===!0||U.isBatchedMesh&&Ee.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Ee.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Ee.instancing===!1||!U.isInstancedMesh&&Ee.instancing===!0||U.isSkinnedMesh&&Ee.skinning===!1||!U.isSkinnedMesh&&Ee.skinning===!0||U.isInstancedMesh&&Ee.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Ee.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Ee.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Ee.instancingMorph===!1&&U.morphTexture!==null||Ee.envMap!==xe||B.fog===!0&&Ee.fog!==se||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==re.numPlanes||Ee.numIntersection!==re.numIntersection)||Ee.vertexAlphas!==be||Ee.vertexTangents!==Re||Ee.morphTargets!==Me||Ee.morphNormals!==Je||Ee.morphColors!==at||Ee.toneMapping!==vt||Ee.morphTargetsCount!==qe)&&(Ze=!0):(Ze=!0,Ee.__version=B.version);let Vn=Ee.currentProgram;Ze===!0&&(Vn=Xa(B,I,U));let ss=!1,gn=!1,Tu=!1;const St=Vn.getUniforms(),zi=Ee.uniforms;if(Pe.useProgram(Vn.program)&&(ss=!0,gn=!0,Tu=!0),B.id!==P&&(P=B.id,gn=!0),ss||V!==w){je.reverseDepthBuffer?(ce.copy(w.projectionMatrix),H2(ce),G2(ce),St.setValue(D,"projectionMatrix",ce)):St.setValue(D,"projectionMatrix",w.projectionMatrix),St.setValue(D,"viewMatrix",w.matrixWorldInverse);const Cn=St.map.cameraPosition;Cn!==void 0&&Cn.setValue(D,Ce.setFromMatrixPosition(w.matrixWorld)),je.logarithmicDepthBuffer&&St.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&St.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),V!==w&&(V=w,gn=!0,Tu=!0)}if(U.isSkinnedMesh){St.setOptional(D,U,"bindMatrix"),St.setOptional(D,U,"bindMatrixInverse");const Cn=U.skeleton;Cn&&(Cn.boneTexture===null&&Cn.computeBoneTexture(),St.setValue(D,"boneTexture",Cn.boneTexture,R))}U.isBatchedMesh&&(St.setOptional(D,U,"batchingTexture"),St.setValue(D,"batchingTexture",U._matricesTexture,R),St.setOptional(D,U,"batchingIdTexture"),St.setValue(D,"batchingIdTexture",U._indirectTexture,R),St.setOptional(D,U,"batchingColorTexture"),U._colorsTexture!==null&&St.setValue(D,"batchingColorTexture",U._colorsTexture,R));const Au=F.morphAttributes;if((Au.position!==void 0||Au.normal!==void 0||Au.color!==void 0)&&De.update(U,F,Vn),(gn||Ee.receiveShadow!==U.receiveShadow)&&(Ee.receiveShadow=U.receiveShadow,St.setValue(D,"receiveShadow",U.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(zi.envMap.value=xe,zi.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&I.environment!==null&&(zi.envMapIntensity.value=I.environmentIntensity),gn&&(St.setValue(D,"toneMappingExposure",y.toneMappingExposure),Ee.needsLights&&JM(zi,Tu),se&&B.fog===!0&&ue.refreshFogUniforms(zi,se),ue.refreshMaterialUniforms(zi,B,W,G,m.state.transmissionRenderTarget[w.id]),oc.upload(D,Fm(Ee),zi,R)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(oc.upload(D,Fm(Ee),zi,R),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&St.setValue(D,"center",U.center),St.setValue(D,"modelViewMatrix",U.modelViewMatrix),St.setValue(D,"normalMatrix",U.normalMatrix),St.setValue(D,"modelMatrix",U.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Cn=B.uniformsGroups;for(let Cu=0,tE=Cn.length;Cu<tE;Cu++){const Bm=Cn[Cu];N.update(Bm,Vn),N.bind(Bm,Vn)}}return Vn}function JM(w,I){w.ambientLightColor.needsUpdate=I,w.lightProbe.needsUpdate=I,w.directionalLights.needsUpdate=I,w.directionalLightShadows.needsUpdate=I,w.pointLights.needsUpdate=I,w.pointLightShadows.needsUpdate=I,w.spotLights.needsUpdate=I,w.spotLightShadows.needsUpdate=I,w.rectAreaLights.needsUpdate=I,w.hemisphereLights.needsUpdate=I}function eE(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(w,I,F){Ne.get(w.texture).__webglTexture=I,Ne.get(w.depthTexture).__webglTexture=F;const B=Ne.get(w);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=F===void 0,B.__autoAllocateDepthBuffer||Be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,I){const F=Ne.get(w);F.__webglFramebuffer=I,F.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(w,I=0,F=0){T=w,C=I,A=F;let B=!0,U=null,se=!1,de=!1;if(w){const xe=Ne.get(w);if(xe.__useDefaultFramebuffer!==void 0)Pe.bindFramebuffer(D.FRAMEBUFFER,null),B=!1;else if(xe.__webglFramebuffer===void 0)R.setupRenderTarget(w);else if(xe.__hasExternalTextures)R.rebindTextures(w,Ne.get(w.texture).__webglTexture,Ne.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Me=w.depthTexture;if(xe.__boundDepthTexture!==Me){if(Me!==null&&Ne.has(Me)&&(w.width!==Me.image.width||w.height!==Me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(w)}}const be=w.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(de=!0);const Re=Ne.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Re[I])?U=Re[I][F]:U=Re[I],se=!0):w.samples>0&&R.useMultisampledRTT(w)===!1?U=Ne.get(w).__webglMultisampledFramebuffer:Array.isArray(Re)?U=Re[F]:U=Re,x.copy(w.viewport),E.copy(w.scissor),H=w.scissorTest}else x.copy(q).multiplyScalar(W).floor(),E.copy(oe).multiplyScalar(W).floor(),H=we;if(Pe.bindFramebuffer(D.FRAMEBUFFER,U)&&B&&Pe.drawBuffers(w,U),Pe.viewport(x),Pe.scissor(E),Pe.setScissorTest(H),se){const xe=Ne.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+I,xe.__webglTexture,F)}else if(de){const xe=Ne.get(w.texture),be=I||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,xe.__webglTexture,F||0,be)}P=-1},this.readRenderTargetPixels=function(w,I,F,B,U,se,de){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=Ne.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&de!==void 0&&(_e=_e[de]),_e){Pe.bindFramebuffer(D.FRAMEBUFFER,_e);try{const xe=w.texture,be=xe.format,Re=xe.type;if(!je.textureFormatReadable(be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!je.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=w.width-B&&F>=0&&F<=w.height-U&&D.readPixels(I,F,B,U,Ie.convert(be),Ie.convert(Re),se)}finally{const xe=T!==null?Ne.get(T).__webglFramebuffer:null;Pe.bindFramebuffer(D.FRAMEBUFFER,xe)}}},this.readRenderTargetPixelsAsync=async function(w,I,F,B,U,se,de){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=Ne.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&de!==void 0&&(_e=_e[de]),_e){const xe=w.texture,be=xe.format,Re=xe.type;if(!je.textureFormatReadable(be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!je.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=w.width-B&&F>=0&&F<=w.height-U){Pe.bindFramebuffer(D.FRAMEBUFFER,_e);const Me=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Me),D.bufferData(D.PIXEL_PACK_BUFFER,se.byteLength,D.STREAM_READ),D.readPixels(I,F,B,U,Ie.convert(be),Ie.convert(Re),0);const Je=T!==null?Ne.get(T).__webglFramebuffer:null;Pe.bindFramebuffer(D.FRAMEBUFFER,Je);const at=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await V2(D,at,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Me),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,se),D.deleteBuffer(Me),D.deleteSync(at),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,I=null,F=0){w.isTexture!==!0&&(sc("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,w=arguments[1]);const B=Math.pow(2,-F),U=Math.floor(w.image.width*B),se=Math.floor(w.image.height*B),de=I!==null?I.x:0,_e=I!==null?I.y:0;R.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,F,0,0,de,_e,U,se),Pe.unbindTexture()},this.copyTextureToTexture=function(w,I,F=null,B=null,U=0){w.isTexture!==!0&&(sc("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,w=arguments[1],I=arguments[2],U=arguments[3]||0,F=null);let se,de,_e,xe,be,Re;F!==null?(se=F.max.x-F.min.x,de=F.max.y-F.min.y,_e=F.min.x,xe=F.min.y):(se=w.image.width,de=w.image.height,_e=0,xe=0),B!==null?(be=B.x,Re=B.y):(be=0,Re=0);const Me=Ie.convert(I.format),Je=Ie.convert(I.type);R.setTexture2D(I,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,I.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,I.unpackAlignment);const at=D.getParameter(D.UNPACK_ROW_LENGTH),vt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),mn=D.getParameter(D.UNPACK_SKIP_PIXELS),qe=D.getParameter(D.UNPACK_SKIP_ROWS),Ee=D.getParameter(D.UNPACK_SKIP_IMAGES),Ot=w.isCompressedTexture?w.mipmaps[U]:w.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Ot.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ot.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,_e),D.pixelStorei(D.UNPACK_SKIP_ROWS,xe),w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,U,be,Re,se,de,Me,Je,Ot.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,U,be,Re,Ot.width,Ot.height,Me,Ot.data):D.texSubImage2D(D.TEXTURE_2D,U,be,Re,se,de,Me,Je,Ot),D.pixelStorei(D.UNPACK_ROW_LENGTH,at),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,vt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,mn),D.pixelStorei(D.UNPACK_SKIP_ROWS,qe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ee),U===0&&I.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),Pe.unbindTexture()},this.copyTextureToTexture3D=function(w,I,F=null,B=null,U=0){w.isTexture!==!0&&(sc("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,B=arguments[1]||null,w=arguments[2],I=arguments[3],U=arguments[4]||0);let se,de,_e,xe,be,Re,Me,Je,at;const vt=w.isCompressedTexture?w.mipmaps[U]:w.image;F!==null?(se=F.max.x-F.min.x,de=F.max.y-F.min.y,_e=F.max.z-F.min.z,xe=F.min.x,be=F.min.y,Re=F.min.z):(se=vt.width,de=vt.height,_e=vt.depth,xe=0,be=0,Re=0),B!==null?(Me=B.x,Je=B.y,at=B.z):(Me=0,Je=0,at=0);const mn=Ie.convert(I.format),qe=Ie.convert(I.type);let Ee;if(I.isData3DTexture)R.setTexture3D(I,0),Ee=D.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)R.setTexture2DArray(I,0),Ee=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,I.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,I.unpackAlignment);const Ot=D.getParameter(D.UNPACK_ROW_LENGTH),Ze=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Vn=D.getParameter(D.UNPACK_SKIP_PIXELS),ss=D.getParameter(D.UNPACK_SKIP_ROWS),gn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,vt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,vt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,xe),D.pixelStorei(D.UNPACK_SKIP_ROWS,be),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Re),w.isDataTexture||w.isData3DTexture?D.texSubImage3D(Ee,U,Me,Je,at,se,de,_e,mn,qe,vt.data):I.isCompressedArrayTexture?D.compressedTexSubImage3D(Ee,U,Me,Je,at,se,de,_e,mn,vt.data):D.texSubImage3D(Ee,U,Me,Je,at,se,de,_e,mn,qe,vt),D.pixelStorei(D.UNPACK_ROW_LENGTH,Ot),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ze),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Vn),D.pixelStorei(D.UNPACK_SKIP_ROWS,ss),D.pixelStorei(D.UNPACK_SKIP_IMAGES,gn),U===0&&I.generateMipmaps&&D.generateMipmap(Ee),Pe.unbindTexture()},this.initRenderTarget=function(w){Ne.get(w).__webglFramebuffer===void 0&&R.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?R.setTextureCube(w,0):w.isData3DTexture?R.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?R.setTexture2DArray(w,0):R.setTexture2D(w,0),Pe.unbindTexture()},this.resetState=function(){C=0,A=0,T=null,Pe.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Cm?"display-p3":"srgb",n.unpackColorSpace=Qe.workingColorSpace===xu?"display-p3":"srgb"}}class tU extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oi,this.environmentIntensity=1,this.environmentRotation=new Oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class ZM extends Ga{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const my=new Tt,Gh=new kM,Ul=new Su,kl=new O;class nU extends hn{constructor(e=new ii,n=new ZM){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ul.copy(i.boundingSphere),Ul.applyMatrix4(r),Ul.radius+=s,e.ray.intersectsSphere(Ul)===!1)return;my.copy(r).invert(),Gh.copy(e.ray).applyMatrix4(my);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,_=p;g<_;g++){const m=c.getX(g);kl.fromBufferAttribute(f,m),gy(kl,m,l,r,e,n,this)}}else{const d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let g=d,_=p;g<_;g++)kl.fromBufferAttribute(f,g),gy(kl,g,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function gy(t,e,n,i,r,s,o){const a=Gh.distanceSqToPoint(t);if(a<n){const l=new O;Gh.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Pm extends ii{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new O,d=new O,p=[],g=[],_=[],m=[];for(let h=0;h<=i;h++){const v=[],y=h/i;let S=0;h===0&&o===0?S=.5/n:h===i&&l===Math.PI&&(S=-.5/n);for(let C=0;C<=n;C++){const A=C/n;f.x=-e*Math.cos(r+A*s)*Math.sin(o+y*a),f.y=e*Math.cos(o+y*a),f.z=e*Math.sin(r+A*s)*Math.sin(o+y*a),g.push(f.x,f.y,f.z),d.copy(f).normalize(),_.push(d.x,d.y,d.z),m.push(A+S,1-y),v.push(c++)}u.push(v)}for(let h=0;h<i;h++)for(let v=0;v<n;v++){const y=u[h][v+1],S=u[h][v],C=u[h+1][v],A=u[h+1][v+1];(h!==0||o>0)&&p.push(y,S,A),(h!==i-1||l<Math.PI)&&p.push(S,C,A)}this.setIndex(p),this.setAttribute("position",new Mn(g,3)),this.setAttribute("normal",new Mn(_,3)),this.setAttribute("uv",new Mn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pm(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Lm extends ii{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],u=new O,f=new O,d=new O;for(let p=0;p<=i;p++)for(let g=0;g<=r;g++){const _=g/r*s,m=p/i*Math.PI*2;f.x=(e+n*Math.cos(m))*Math.cos(_),f.y=(e+n*Math.cos(m))*Math.sin(_),f.z=n*Math.sin(m),a.push(f.x,f.y,f.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),d.subVectors(f,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=r;g++){const _=(r+1)*p+g-1,m=(r+1)*(p-1)+g-1,h=(r+1)*(p-1)+g,v=(r+1)*p+g;o.push(_,m,v),o.push(m,h,v)}this.setIndex(o),this.setAttribute("position",new Mn(a,3)),this.setAttribute("normal",new Mn(l,3)),this.setAttribute("uv",new Mn(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lm(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xm);function iU({className:t=""}){const e=ne.useRef(null);return ne.useEffect(()=>{const n=e.current;if(!n)return;const i=window.matchMedia("(prefers-reduced-motion: reduce)").matches,r=new tU,s=new Nn(45,1,.1,100);s.position.z=3.05;const o=new eU({antialias:!0,alpha:!0,powerPreference:"low-power"});o.setClearColor(0,0),o.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.appendChild(o.domElement);const a=new Go;a.rotation.z=B2.degToRad(-18),r.add(a);const l=1,c=2600,u=new Float32Array(c*3),f=new Float32Array(c*3),d=new Ye("#38BDF8"),p=new Ye("#8B5CF6"),g=new Ye("#C84DF5");for(let E=0;E<c;E++){const H=1-E/(c-1)*2,z=Math.sqrt(1-H*H),Y=E*2.399963229728653,J=Math.cos(Y)*z,G=Math.sin(Y)*z;u[E*3]=J*l,u[E*3+1]=H*l,u[E*3+2]=G*l;const W=(H+1)/2,L=W>.5?d.clone().lerp(p,(1-W)*2):p.clone().lerp(g,(.5-W)*2);f[E*3]=L.r,f[E*3+1]=L.g,f[E*3+2]=L.b}const _=new ii;_.setAttribute("position",new Fn(u,3)),_.setAttribute("color",new Fn(f,3));const m=new ZM({size:.022,vertexColors:!0,transparent:!0,opacity:.9,sizeAttenuation:!0,depthWrite:!1}),h=new nU(_,m);a.add(h);const v=new Pm(l*.992,36,24),y=new Wc({color:"#6E8BF5",wireframe:!0,transparent:!0,opacity:.08,depthWrite:!1});a.add(new Jn(v,y));const S=new Lm(l*1.18,.004,8,120),C=new Wc({color:"#A855F7",transparent:!0,opacity:.4}),A=new Jn(S,C);A.rotation.x=Math.PI/2.1,a.add(A);const T=()=>{const E=n.clientWidth,H=n.clientHeight;!E||!H||(o.setSize(E,H,!1),s.aspect=E/H,s.updateProjectionMatrix())};T();const P=new ResizeObserver(T);P.observe(n);let V=0;const x=()=>{h.rotation.y+=.0016,A.rotation.z+=8e-4,o.render(r,s),V=requestAnimationFrame(x)};return i?o.render(r,s):V=requestAnimationFrame(x),()=>{cancelAnimationFrame(V),P.disconnect(),_.dispose(),m.dispose(),v.dispose(),y.dispose(),S.dispose(),C.dispose(),o.dispose(),o.domElement.parentNode===n&&n.removeChild(o.domElement)}},[]),b.jsx("div",{ref:e,className:t,"aria-hidden":"true"})}function rU(){const{c:t}=zn();return b.jsxs("section",{className:"relative overflow-hidden bg-gradient-to-b from-slate-100 via-[#e7eaf4] to-slate-200 py-28 text-ink-900 sm:py-36",children:[b.jsx(iU,{className:"pointer-events-none absolute inset-0 opacity-95"}),b.jsx("div",{className:"pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(237,240,248,0.88),rgba(237,240,248,0.35)_55%,transparent_80%)]"}),b.jsxs("div",{className:"container-x relative z-10 text-center",children:[b.jsx(pt,{children:b.jsx(yu,{variant:"dark",className:"mx-auto h-32 w-auto sm:h-40"})}),b.jsx(pt,{delay:.08,children:b.jsxs("h2",{className:"mx-auto mt-8 max-w-4xl font-display text-3xl font-semibold leading-snug tracking-tight sm:text-4xl md:text-5xl",children:[t.manifesto.quotePre," ",b.jsx("span",{className:"gradient-text",children:t.manifesto.quoteAccent})]})}),b.jsx(pt,{delay:.16,children:b.jsx("p",{className:"mx-auto mt-6 max-w-2xl text-lg text-ink-900/65",children:t.manifesto.sub})}),b.jsx(Et.div,{initial:{width:0},whileInView:{width:"6rem"},viewport:{once:!0},transition:{duration:.9,ease:[.22,1,.36,1]},className:"mx-auto mt-10 h-1 rounded-full bg-gradient-to-r from-brand-sky to-brand-fuchsia"})]})]})}const sU=[{no:"01",icon:nP},{no:"02",icon:yM},{no:"03",icon:vM},{no:"04",icon:gP},{no:"05",icon:JR},{no:"06",icon:SP},{no:"07",icon:cP},{no:"08",icon:_P},{no:"09",icon:vP},{no:"10",icon:iP},{no:"11",icon:dP},{no:"12",icon:rP}];function oU(){const{c:t}=zn();return b.jsxs("section",{id:"services",className:"relative overflow-hidden py-24 sm:py-32",children:[b.jsx("div",{className:"bg-grid mask-fade-b pointer-events-none absolute inset-0 opacity-60"}),b.jsx("div",{className:"absolute left-1/2 top-0 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-brand-violet/10 blur-[120px]"}),b.jsxs("div",{className:"container-x relative",children:[b.jsxs("div",{className:"mx-auto max-w-2xl text-center",children:[b.jsx(pt,{children:b.jsx("span",{className:"text-sm font-semibold uppercase tracking-[0.2em] text-brand-sky",children:t.services.eyebrow})}),b.jsx(pt,{delay:.05,children:b.jsxs("h2",{className:"mt-5 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl",children:[t.services.titlePre," ",b.jsx("span",{className:"gradient-text",children:t.services.titleAccent})]})}),b.jsx(pt,{delay:.1,children:b.jsx("p",{className:"mt-5 text-lg text-white/60",children:t.services.subtitle})})]}),b.jsx(Et.div,{variants:RP,initial:"hidden",whileInView:"show",viewport:{once:!0,amount:.1},className:"mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",children:t.services.items.map((e,n)=>{const i=sU[n],r=i.icon;return b.jsxs(Et.div,{variants:PP,whileHover:{y:-6},transition:{type:"spring",stiffness:300,damping:20},className:"group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.06]",children:[b.jsx("div",{className:"pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-brand-blue/0 to-brand-purple/0 blur-2xl transition-all duration-500 group-hover:from-brand-blue/20 group-hover:to-brand-purple/20"}),b.jsxs("div",{className:"relative flex items-center justify-between",children:[b.jsx("div",{className:"flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue/20 to-brand-purple/20 text-brand-sky ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3",children:b.jsx(r,{className:"h-6 w-6"})}),b.jsx("span",{className:"font-display text-3xl font-bold text-white/10 transition-colors group-hover:text-white/20",children:i.no})]}),b.jsx("h3",{className:"relative mt-5 text-lg font-semibold text-white",children:e.title}),b.jsx("p",{className:"relative mt-2 text-sm leading-relaxed text-white/55",children:e.summary}),b.jsx("ul",{className:"relative mt-5 space-y-2 border-t border-white/10 pt-5",children:e.items.map(s=>b.jsxs("li",{className:"flex items-start gap-2.5 text-sm text-white/70",children:[b.jsx(tP,{className:"mt-0.5 h-4 w-4 flex-none text-brand-sky"}),b.jsx("span",{children:s})]},s))})]},e.title)})})]})]})}const aU=["/images/strategy.jpg","/images/ux-design.jpg","/images/engineering.jpg","/images/marketing.jpg"];function lU(){const{c:t}=zn();return b.jsx("section",{id:"approach",className:"relative py-24 sm:py-32",children:b.jsxs("div",{className:"container-x",children:[b.jsxs("div",{className:"flex flex-col gap-6 md:flex-row md:items-end md:justify-between",children:[b.jsxs("div",{className:"max-w-2xl",children:[b.jsx(pt,{children:b.jsx("span",{className:"text-sm font-semibold uppercase tracking-[0.2em] text-brand-sky",children:t.approach.eyebrow})}),b.jsx(pt,{delay:.05,children:b.jsxs("h2",{className:"mt-5 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl",children:[t.approach.titlePre," ",b.jsx("span",{className:"gradient-text",children:t.approach.titleAccent})]})})]}),b.jsx(pt,{delay:.1,children:b.jsx("p",{className:"max-w-sm text-white/60",children:t.approach.note})})]}),b.jsx("div",{className:"mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4",children:t.approach.steps.map((e,n)=>b.jsx(pt,{delay:n*.1,children:b.jsxs("div",{className:"group relative h-full overflow-hidden rounded-2xl border border-white/10",children:[b.jsx("img",{src:aU[n],alt:e.title,loading:"lazy",className:"h-64 w-full object-cover opacity-70 transition-all duration-700 group-hover:scale-105 group-hover:opacity-90"}),b.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/70 to-transparent"}),b.jsxs("div",{className:"absolute inset-x-0 bottom-0 p-6",children:[b.jsx("div",{className:"mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-sm font-bold text-white backdrop-blur",children:String(n+1).padStart(2,"0")}),b.jsx("h3",{className:"text-xl font-semibold text-white",children:e.title}),b.jsx("p",{className:"mt-2 text-sm leading-relaxed text-white/70",children:e.text})]}),b.jsx(Et.div,{className:"absolute left-0 top-0 h-1 bg-gradient-to-r from-brand-sky to-brand-fuchsia",initial:{width:0},whileInView:{width:"100%"},viewport:{once:!0},transition:{duration:1,delay:.2+n*.1}})]})},e.title))})]})})}const cU=[hP,yP,yM,vM,mP,eP];function uU(){const{c:t}=zn();return b.jsxs("section",{id:"lifecycle",className:"relative overflow-hidden py-24 sm:py-32",children:[b.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-ink-800/0 via-ink-800/40 to-ink-800/0"}),b.jsx("div",{className:"container-x relative",children:b.jsx("div",{className:"overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8 sm:p-12 lg:p-16",children:b.jsxs("div",{className:"grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]",children:[b.jsxs("div",{children:[b.jsx(pt,{children:b.jsx("span",{className:"text-sm font-semibold uppercase tracking-[0.2em] text-brand-sky",children:t.lifecycle.eyebrow})}),b.jsx(pt,{delay:.05,children:b.jsxs("h2",{className:"mt-5 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl",children:[t.lifecycle.titlePre," ",b.jsx("span",{className:"gradient-text",children:t.lifecycle.titleAccent}),t.lifecycle.titlePost]})}),b.jsx(pt,{delay:.1,children:b.jsx("p",{className:"mt-6 max-w-lg text-lg leading-relaxed text-white/65",children:t.lifecycle.body})}),b.jsx("div",{className:"mt-10 space-y-3",children:t.lifecycle.phases.map((e,n)=>{const i=cU[n];return b.jsx(pt,{delay:.1+n*.06,children:b.jsxs("div",{className:"group flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-3 pr-5 transition-colors hover:border-white/15 hover:bg-white/[0.05]",children:[b.jsx("span",{className:"flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-gradient-to-br from-brand-blue/25 to-brand-purple/25 text-brand-sky ring-1 ring-white/10",children:b.jsx(i,{className:"h-5 w-5"})}),b.jsx("span",{className:"text-sm font-medium uppercase tracking-wider text-white/45",children:String(n+1).padStart(2,"0")}),b.jsx("span",{className:"min-w-[5.5rem] text-base font-medium text-white",children:e.label}),b.jsx("span",{className:"hidden flex-1 text-sm text-white/45 sm:block",children:e.desc}),b.jsx(Et.span,{className:"ml-auto h-2 w-2 flex-none rounded-full bg-brand-sky",animate:{opacity:[.3,1,.3]},transition:{duration:2,repeat:1/0,delay:n*.25}})]})},e.label)})})]}),b.jsx(pt,{delay:.2,children:b.jsxs("div",{className:"relative mx-auto flex aspect-square w-full max-w-md items-center justify-center",children:[b.jsx("div",{className:"absolute inset-0 rounded-full bg-gradient-to-br from-brand-blue/15 to-brand-purple/15 blur-3xl"}),[0,1,2].map(e=>b.jsx(Et.div,{className:"absolute rounded-full border border-white/10",style:{inset:`${e*14}%`},animate:{rotate:e%2===0?360:-360},transition:{duration:28+e*8,repeat:1/0,ease:"linear"},children:b.jsx("span",{className:"absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-brand-sky to-brand-fuchsia shadow-[0_0_18px_rgba(56,189,248,0.7)]"})},e)),b.jsx(Et.div,{animate:{y:[0,-10,0]},transition:{duration:6,repeat:1/0,ease:"easeInOut"},className:"relative z-10 flex h-52 w-52 items-center justify-center rounded-full border border-white/10 bg-ink-900/60 backdrop-blur-xl sm:h-60 sm:w-60",children:b.jsx(yu,{variant:"white",className:"h-auto w-40 sm:w-48"})})]})})]})})})]})}function fU(){const{c:t}=zn(),e=t.contact.form,[n,i]=ne.useState(!1);return b.jsxs("section",{id:"contact",className:"relative overflow-hidden py-24 sm:py-32",children:[b.jsx("div",{className:"absolute -left-32 top-10 h-96 w-96 rounded-full bg-brand-blue/15 blur-[120px]"}),b.jsx("div",{className:"absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-brand-purple/15 blur-[120px]"}),b.jsx("div",{className:"container-x relative",children:b.jsx("div",{className:"overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02]",children:b.jsxs("div",{className:"grid lg:grid-cols-2",children:[b.jsxs("div",{className:"relative p-8 sm:p-12 lg:p-14",children:[b.jsx(pt,{children:b.jsx("span",{className:"text-sm font-semibold uppercase tracking-[0.2em] text-brand-sky",children:t.contact.eyebrow})}),b.jsx(pt,{delay:.05,children:b.jsxs("h2",{className:"mt-5 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl",children:[t.contact.titlePre," ",b.jsx("span",{className:"gradient-text",children:t.contact.titleAccent})]})}),b.jsx(pt,{delay:.1,children:b.jsx("p",{className:"mt-6 max-w-md text-lg leading-relaxed text-white/65",children:t.contact.body})}),b.jsxs("div",{className:"mt-10 space-y-4",children:[b.jsxs("a",{href:"mailto:tech@insparion.com.tr",className:"group flex items-center gap-4 text-white/80 transition-colors hover:text-white",children:[b.jsx("span",{className:"flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5",children:b.jsx(oP,{className:"h-5 w-5 text-brand-sky"})}),b.jsxs("span",{children:[b.jsx("span",{className:"block text-xs uppercase tracking-wider text-white/40",children:t.contact.emailLabel}),"tech@insparion.com.tr"]})]}),b.jsxs("div",{className:"flex items-center gap-4 text-white/80",children:[b.jsx("span",{className:"flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5",children:b.jsx(aP,{className:"h-5 w-5 text-brand-sky"})}),b.jsxs("span",{children:[b.jsx("span",{className:"block text-xs uppercase tracking-wider text-white/40",children:t.contact.locationLabel}),t.contact.location]})]})]})]}),b.jsx("div",{className:"border-t border-white/10 bg-ink-900/40 p-8 sm:p-12 lg:border-l lg:border-t-0 lg:p-14",children:b.jsxs("form",{onSubmit:r=>{r.preventDefault(),i(!0)},className:"space-y-5",children:[b.jsxs("div",{className:"grid gap-5 sm:grid-cols-2",children:[b.jsx(jf,{label:e.name,name:"name",placeholder:e.namePh}),b.jsx(jf,{label:e.email,name:"email",type:"email",placeholder:e.emailPh})]}),b.jsx(jf,{label:e.company,name:"company",placeholder:e.companyPh,required:!1}),b.jsxs("div",{children:[b.jsx("label",{className:"mb-2 block text-sm font-medium text-white/70",children:e.project}),b.jsx("textarea",{name:"message",rows:4,required:!0,placeholder:e.projectPh,className:"w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white placeholder:text-white/30 outline-none transition-colors focus:border-brand-sky/60 focus:bg-white/[0.06]"})]}),b.jsx(Et.button,{type:"submit",whileTap:{scale:.98},className:"group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ink-900 transition-colors hover:bg-white/90",children:n?e.sent:b.jsxs(b.Fragment,{children:[e.submit,b.jsx(th,{className:"h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"})]})}),n&&b.jsxs("p",{className:"flex items-center justify-center gap-2 text-sm text-brand-sky",children:[b.jsx(pP,{className:"h-4 w-4"})," ",e.sentNote]})]})})]})})})]})}function jf({label:t,name:e,type:n="text",placeholder:i,required:r=!0}){return b.jsxs("div",{children:[b.jsx("label",{className:"mb-2 block text-sm font-medium text-white/70",children:t}),b.jsx("input",{type:n,name:e,required:r,placeholder:i,className:"w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white placeholder:text-white/30 outline-none transition-colors focus:border-brand-sky/60 focus:bg-white/[0.06]"})]})}function dU(){const{c:t}=zn();return b.jsx("footer",{className:"relative overflow-hidden border-t border-white/10 bg-ink-900",children:b.jsxs("div",{className:"container-x py-16",children:[b.jsxs("div",{className:"grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]",children:[b.jsxs("div",{children:[b.jsx(yu,{variant:"white",className:"h-[7.5rem] w-auto"}),b.jsx("p",{className:"mt-6 max-w-sm text-sm leading-relaxed text-white/55",children:t.footer.tagline}),b.jsx("p",{className:"mt-4 max-w-sm text-sm font-medium gradient-text",children:t.footer.slogan}),b.jsxs("a",{href:"mailto:tech@insparion.com.tr",className:"group mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-white/80 transition-colors hover:text-white",children:["tech@insparion.com.tr",b.jsx(nh,{className:"h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"})]})]}),t.footer.cols.map(e=>b.jsxs("div",{children:[b.jsx("h4",{className:"text-sm font-semibold uppercase tracking-wider text-white/40",children:e.title}),b.jsx("ul",{className:"mt-5 space-y-3",children:e.links.map(n=>b.jsx("li",{children:b.jsx("a",{href:"#services",className:"text-sm text-white/65 transition-colors hover:text-white",children:n})},n))})]},e.title))]}),b.jsxs("div",{className:"mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row",children:[b.jsxs("p",{className:"text-sm text-white/40",children:["© ",new Date().getFullYear()," INSPARION. ",t.footer.rights]}),b.jsx("div",{className:"flex items-center gap-6 text-sm text-white/40",children:t.footer.legal.map(e=>b.jsx("a",{href:"#",className:"transition-colors hover:text-white/70",children:e},e))})]})]})})}function hU(){const{scrollYProgress:t}=SR(),e=ER(t,{stiffness:120,damping:30,restDelta:.001});return b.jsx(KR,{children:b.jsxs("div",{className:"relative min-h-screen bg-ink-900",children:[b.jsx(Et.div,{style:{scaleX:e},className:"fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-brand-sky via-brand-violet to-brand-fuchsia"}),b.jsx(EP,{}),b.jsxs("main",{children:[b.jsx(AP,{}),b.jsx(CP,{}),b.jsx(DP,{}),b.jsx(IP,{}),b.jsx(rU,{}),b.jsx(oU,{}),b.jsx(lU,{}),b.jsx(uU,{}),b.jsx(fU,{})]}),b.jsx(dU,{})]})})}Xf.createRoot(document.getElementById("root")).render(b.jsx(yE.StrictMode,{children:b.jsx(hU,{})}));
