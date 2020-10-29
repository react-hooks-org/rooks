/*! For license information please see f9d03809.47a01b8b.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{261:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return c}));var r=t(2),o=t(6),u=(t(270),t(269)),l={id:"use-fullscreen",title:"use-fullscreen",sidebar_label:"use-fullscreen"},i={unversionedId:"use-fullscreen",id:"use-fullscreen",isDocsHomePage:!1,title:"use-fullscreen",description:"@rooks/use-fullscreen",source:"@site/../docs/use-fullscreen.md",slug:"/use-fullscreen",permalink:"/docs/next/use-fullscreen",version:"current",lastUpdatedBy:"imbhargav5",lastUpdatedAt:1577356549,sidebar_label:"use-fullscreen",sidebar:"docs",previous:{title:"use-fork-ref",permalink:"/docs/next/use-fork-ref"},next:{title:"use-geolocation",permalink:"/docs/next/use-geolocation"}},s=[{value:"Use full screen api for making beautiful and emersive experinces.",id:"use-full-screen-api-for-making-beautiful-and-emersive-experinces",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Importing the hook",id:"importing-the-hook",children:[]},{value:"Usage",id:"usage",children:[]}],a={rightToc:s};function c(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(u.b)("wrapper",Object(r.a)({},a,t,{components:n,mdxType:"MDXLayout"}),Object(u.b)("h1",{id:"rooksuse-fullscreen"},"@rooks/use-fullscreen"),Object(u.b)("h3",{id:"use-full-screen-api-for-making-beautiful-and-emersive-experinces"},"Use full screen api for making beautiful and emersive experinces."),Object(u.b)("p",null,Object(u.b)("a",Object(r.a)({parentName:"p"},{href:"https://travis-ci.org/imbhargav5/rooks"}),Object(u.b)("img",Object(r.a)({parentName:"a"},{src:"https://travis-ci.org/imbhargav5/rooks.svg?branch=master",alt:"Build Status"})))," ",Object(u.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/npm/v/@rooks/use-fullscreen/latest.svg",alt:null}))," ",Object(u.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/npm/l/@rooks/use-fullscreen.svg",alt:null}))," ",Object(u.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/bundlephobia/min/@rooks/use-fullscreen.svg",alt:null}))," ",Object(u.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/david/imbhargav5/rooks.svg?path=packages%2Ffullscreen",alt:null}))),Object(u.b)("a",{href:"https://spectrum.chat/rooks"},Object(u.b)("img",{src:"https://withspectrum.github.io/badge/badge.svg",alt:"Join the community on Spectrum"})),Object(u.b)("h3",{id:"installation"},"Installation"),Object(u.b)("pre",null,Object(u.b)("code",Object(r.a)({parentName:"pre"},{}),"npm install --save @rooks/use-fullscreen\n")),Object(u.b)("h3",{id:"importing-the-hook"},"Importing the hook"),Object(u.b)("pre",null,Object(u.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'import useFullscreen from "@rooks/use-fullscreen"\n')),Object(u.b)("h3",{id:"usage"},"Usage"),Object(u.b)("pre",null,Object(u.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'import React, { useState, useRef } from "react";\nimport ReactDOM from "react-dom";\nimport { useFullscreen } from "rooks";\n\nconst styles = {\n  html: {\n    fontFamily: "\'Helvetica Neue\', Helvetica, Arial, sans-serif",\n    padding: "30px 10px 0 0",\n    fontSize: "20px",\n    lineHeight: "1.4",\n    color: "#737373",\n    background: "#f0f0f0",\n    WebkitFontSmoothing: "antialiased"\n  },\n  hr: {\n    border: "none",\n    borderTop: "1px solid #e6e6e6",\n    margin: "20px 0"\n  },\n  a: {\n    color: "#666"\n  },\n  h1: {\n    margin: "0",\n    fontSize: "40px",\n    textAlign: "center"\n  },\n  ul: {\n    padding: "0 0 0 40px",\n    margin: "1em 0",\n    padding: "0",\n    margin: "40px 0 0 0",\n    listStyle: "none"\n  },\n  button: {\n    fontSize: "13px"\n  },\n  container: {\n    width: "500px",\n    padding: "30px 20px",\n    margin: "0 auto 50px auto",\n    background: "#fcfcfc",\n    textAlign: "center",\n    border: "1px solid #b3b3b3",\n    borderRadius: "4px",\n    boxShadow: "0 1px 10px #a7a7a7, inset 0 1px 0 #fff"\n  },\n  demo_img: {\n    cursor: "pointer"\n  },\n  header_p: {\n    fontSize: "17px"\n  }\n};\n\nfunction Demo() {\n  const container = useRef();\n  const {\n    isEnabled,\n    toggle,\n    onChange,\n    onError,\n    request,\n    exit,\n    isFullscreen,\n    element\n  } = useFullscreen();\n  const [changeCount, setChangeCount] = useState(0);\n  const [errorCount, setErrorCount] = useState(0);\n\n  onChange(() => {\n    setChangeCount(changeCount + 1);\n  });\n  onError(() => {\n    setErrorCount(errorCount + 1);\n  });\n\n  return (\n    <div id="document" style={styles.html}>\n      <section ref={container} id="container" style={styles.container}>\n        <header>\n          <h1 styles={styles.h1}>useFullscreen</h1>\n          <p style={styles.header_p}>\n            Simple react hook for cross-browser usage of the JavaScript{" "}\n            <a\n              style={styles.a}\n              href="https://developer.mozilla.org/en/DOM/Using_full-screen_mode"\n            >\n              Fullscreen API\n            </a>\n            , which lets you bring the page or any element into fullscreen.\n            Smoothens out the browser implementation differences, so you don\'t\n            have too.\n          </p>\n        </header>\n        <hr style={styles.hr} />\n        <section>\n          <p>Try out the Fullscreen API</p>\n          <button\n            style={styles.button}\n            onClick={() => {\n              request(container.current);\n            }}\n          >\n            Request\n          </button>\n          <button\n            style={styles.button}\n            onClick={() => {\n              exit();\n            }}\n          >\n            Exit\n          </button>\n          <button\n            style={styles.button}\n            onClick={() => {\n              toggle();\n            }}\n          >\n            Toggle\n          </button>\n          <button style={styles.button} onClick={() => request()}>\n            Request document\n          </button>\n        </section>\n        <section>\n          <ul style={styles.ul}>\n            <li id="supported">\n              Supported/allowed: {JSON.stringify(isEnabled)}\n            </li>\n            <li id="status">Is fullscreen: {JSON.stringify(isFullscreen)}</li>\n            <li>\n              Changed {changeCount} {changeCount !== 1 ? "times" : "time"}\n            </li>\n            <li>\n              {errorCount} {errorCount !== 1 ? "errors" : "error"}\n            </li>\n            <li id="element">\n              Element:{" "}\n              {element\n                ? `${element.tagName.toLowerCase()} ${element.id}`\n                : "null"}\n            </li>\n          </ul>\n        </section>\n        <input placeholder="Keyboard test" />\n        <hr style={styles.hr} />\n        <section>\n          <p>Click the image to make it fullscreen</p>\n          <img\n            id="demo-img"\n            src="https://sindresorhus.com/unicorn"\n            width="500"\n            style={styles.demo_img}\n            onClick={e => {\n              toggle(e.target);\n            }}\n          />\n        </section>\n      </section>\n    </div>\n  );\n}\n\n\nrender(<Demo/>)\n')))}c.isMDXComponent=!0},269:function(e,n,t){"use strict";t.d(n,"a",(function(){return f})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function u(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){u(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=o.a.createContext({}),c=function(e){var n=o.a.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},f=function(e){var n=c(e.components);return o.a.createElement(a.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,u=e.originalType,l=e.parentName,a=s(e,["components","mdxType","originalType","parentName"]),f=c(t),d=r,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||u;return t?o.a.createElement(m,i(i({ref:n},a),{},{components:t})):o.a.createElement(m,i({ref:n},a))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var u=t.length,l=new Array(u);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var a=2;a<u;a++)l[a]=t[a];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},270:function(e,n,t){"use strict";e.exports=t(271)},271:function(e,n,t){"use strict";var r=t(272),o="function"==typeof Symbol&&Symbol.for,u=o?Symbol.for("react.element"):60103,l=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,s=o?Symbol.for("react.strict_mode"):60108,a=o?Symbol.for("react.profiler"):60114,c=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,m=o?Symbol.for("react.suspense_list"):60120,b=o?Symbol.for("react.memo"):60115,y=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder");var h="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var n=e.message,t="https://reactjs.org/docs/error-decoder.html?invariant="+n,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return e.message="Minified React error #"+n+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O={};function j(e,n,t){this.props=e,this.context=n,this.refs=O,this.updater=t||v}function k(){}function x(e,n,t){this.props=e,this.context=n,this.refs=O,this.updater=t||v}j.prototype.isReactComponent={},j.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw g(Error(85));this.updater.enqueueSetState(this,e,n,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=j.prototype;var S=x.prototype=new k;S.constructor=x,r(S,j.prototype),S.isPureReactComponent=!0;var w={current:null},C={suspense:null},_={current:null},E=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function R(e,n,t){var r=void 0,o={},l=null,i=null;if(null!=n)for(r in void 0!==n.ref&&(i=n.ref),void 0!==n.key&&(l=""+n.key),n)E.call(n,r)&&!P.hasOwnProperty(r)&&(o[r]=n[r]);var s=arguments.length-2;if(1===s)o.children=t;else if(1<s){for(var a=Array(s),c=0;c<s;c++)a[c]=arguments[c+2];o.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===o[r]&&(o[r]=s[r]);return{$$typeof:u,type:e,key:l,ref:i,props:o,_owner:_.current}}function $(e){return"object"==typeof e&&null!==e&&e.$$typeof===u}var N=/\/+/g,F=[];function I(e,n,t,r){if(F.length){var o=F.pop();return o.result=e,o.keyPrefix=n,o.func=t,o.context=r,o.count=0,o}return{result:e,keyPrefix:n,func:t,context:r,count:0}}function T(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>F.length&&F.push(e)}function A(e,n,t,r){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var i=!1;if(null===e)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case u:case l:i=!0}}if(i)return t(r,e,""===n?"."+U(e,0):n),1;if(i=0,n=""===n?".":n+":",Array.isArray(e))for(var s=0;s<e.length;s++){var a=n+U(o=e[s],s);i+=A(o,a,t,r)}else if(null===e||"object"!=typeof e?a=null:a="function"==typeof(a=h&&e[h]||e["@@iterator"])?a:null,"function"==typeof a)for(e=a.call(e),s=0;!(o=e.next()).done;)i+=A(o=o.value,a=n+U(o,s++),t,r);else if("object"===o)throw t=""+e,g(Error(31),"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t,"");return i}function D(e,n,t){return null==e?0:A(e,"",n,t)}function U(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return n[e]}))}(e.key):n.toString(36)}function q(e,n){e.func.call(e.context,n,e.count++)}function M(e,n,t){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,n,e.count++),Array.isArray(e)?L(e,r,t,(function(e){return e})):null!=e&&($(e)&&(e=function(e,n){return{$$typeof:u,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||n&&n.key===e.key?"":(""+e.key).replace(N,"$&/")+"/")+t)),r.push(e))}function L(e,n,t,r,o){var u="";null!=t&&(u=(""+t).replace(N,"$&/")+"/"),D(e,M,n=I(n,u,r,o)),T(n)}function z(){var e=w.current;if(null===e)throw g(Error(321));return e}var H={Children:{map:function(e,n,t){if(null==e)return e;var r=[];return L(e,r,null,n,t),r},forEach:function(e,n,t){if(null==e)return e;D(e,q,n=I(null,null,n,t)),T(n)},count:function(e){return D(e,(function(){return null}),null)},toArray:function(e){var n=[];return L(e,n,null,(function(e){return e})),n},only:function(e){if(!$(e))throw g(Error(143));return e}},createRef:function(){return{current:null}},Component:j,PureComponent:x,createContext:function(e,n){return void 0===n&&(n=null),(e={$$typeof:f,_calculateChangedBits:n,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:p,render:e}},lazy:function(e){return{$$typeof:y,_ctor:e,_status:-1,_result:null}},memo:function(e,n){return{$$typeof:b,type:e,compare:void 0===n?null:n}},useCallback:function(e,n){return z().useCallback(e,n)},useContext:function(e,n){return z().useContext(e,n)},useEffect:function(e,n){return z().useEffect(e,n)},useImperativeHandle:function(e,n,t){return z().useImperativeHandle(e,n,t)},useDebugValue:function(){},useLayoutEffect:function(e,n){return z().useLayoutEffect(e,n)},useMemo:function(e,n){return z().useMemo(e,n)},useReducer:function(e,n,t){return z().useReducer(e,n,t)},useRef:function(e){return z().useRef(e)},useState:function(e){return z().useState(e)},Fragment:i,Profiler:a,StrictMode:s,Suspense:d,unstable_SuspenseList:m,createElement:R,cloneElement:function(e,n,t){if(null==e)throw g(Error(267),e);var o=void 0,l=r({},e.props),i=e.key,s=e.ref,a=e._owner;if(null!=n){void 0!==n.ref&&(s=n.ref,a=_.current),void 0!==n.key&&(i=""+n.key);var c=void 0;for(o in e.type&&e.type.defaultProps&&(c=e.type.defaultProps),n)E.call(n,o)&&!P.hasOwnProperty(o)&&(l[o]=void 0===n[o]&&void 0!==c?c[o]:n[o])}if(1===(o=arguments.length-2))l.children=t;else if(1<o){c=Array(o);for(var f=0;f<o;f++)c[f]=arguments[f+2];l.children=c}return{$$typeof:u,type:e.type,key:i,ref:s,props:l,_owner:a}},createFactory:function(e){var n=R.bind(null,e);return n.type=e,n},isValidElement:$,version:"16.9.0",unstable_withSuspenseConfig:function(e,n){var t=C.suspense;C.suspense=void 0===n?null:n;try{e()}finally{C.suspense=t}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:w,ReactCurrentBatchConfig:C,ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:r}},J={default:H},B=J&&H||J;e.exports=B.default||B},272:function(e,n,t){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;function l(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,n){for(var t,i,s=l(e),a=1;a<arguments.length;a++){for(var c in t=Object(arguments[a]))o.call(t,c)&&(s[c]=t[c]);if(r){i=r(t);for(var f=0;f<i.length;f++)u.call(t,i[f])&&(s[i[f]]=t[i[f]])}}return s}}}]);