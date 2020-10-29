/*! For license information please see 01824c6a.0f6b5175.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{269:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},f=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=s(n),b=r,d=f["".concat(c,".").concat(b)]||f[b]||p[b]||a;return n?o.a.createElement(d,u(u({ref:t},l),{},{components:n})):o.a.createElement(d,u({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:r,c[1]=u;for(var l=2;l<a;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},270:function(e,t,n){"use strict";e.exports=n(271)},271:function(e,t,n){"use strict";var r=n(272),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,u=o?Symbol.for("react.fragment"):60107,i=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,b=o?Symbol.for("react.suspense"):60113,d=o?Symbol.for("react.suspense_list"):60120,m=o?Symbol.for("react.memo"):60115,y=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder");var h="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var t=e.message,n="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r]);return e.message="Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function j(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||O}function k(){}function w(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||O}j.prototype.isReactComponent={},j.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw g(Error(85));this.updater.enqueueSetState(this,e,t,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=j.prototype;var S=w.prototype=new k;S.constructor=w,r(S,j.prototype),S.isPureReactComponent=!0;var N={current:null},x={suspense:null},C={current:null},_=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function R(e,t,n){var r=void 0,o={},c=null,u=null;if(null!=t)for(r in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(c=""+t.key),t)_.call(t,r)&&!P.hasOwnProperty(r)&&(o[r]=t[r]);var i=arguments.length-2;if(1===i)o.children=n;else if(1<i){for(var l=Array(i),s=0;s<i;s++)l[s]=arguments[s+2];o.children=l}if(e&&e.defaultProps)for(r in i=e.defaultProps)void 0===o[r]&&(o[r]=i[r]);return{$$typeof:a,type:e,key:c,ref:u,props:o,_owner:C.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var $=/\/+/g,D=[];function A(e,t,n,r){if(D.length){var o=D.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function I(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>D.length&&D.push(e)}function T(e,t,n,r){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var u=!1;if(null===e)u=!0;else switch(o){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case a:case c:u=!0}}if(u)return n(r,e,""===t?"."+U(e,0):t),1;if(u=0,t=""===t?".":t+":",Array.isArray(e))for(var i=0;i<e.length;i++){var l=t+U(o=e[i],i);u+=T(o,l,n,r)}else if(null===e||"object"!=typeof e?l=null:l="function"==typeof(l=h&&e[h]||e["@@iterator"])?l:null,"function"==typeof l)for(e=l.call(e),i=0;!(o=e.next()).done;)u+=T(o=o.value,l=t+U(o,i++),n,r);else if("object"===o)throw n=""+e,g(Error(31),"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n,"");return u}function M(e,t,n){return null==e?0:T(e,"",t,n)}function U(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function X(e,t){e.func.call(e.context,t,e.count++)}function B(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?F(e,r,n,(function(e){return e})):null!=e&&(E(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace($,"$&/")+"/")+n)),r.push(e))}function F(e,t,n,r,o){var a="";null!=n&&(a=(""+n).replace($,"$&/")+"/"),M(e,B,t=A(t,a,r,o)),I(t)}function L(){var e=N.current;if(null===e)throw g(Error(321));return e}var Y={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return F(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;M(e,X,t=A(null,null,t,n)),I(t)},count:function(e){return M(e,(function(){return null}),null)},toArray:function(e){var t=[];return F(e,t,null,(function(e){return e})),t},only:function(e){if(!E(e))throw g(Error(143));return e}},createRef:function(){return{current:null}},Component:j,PureComponent:w,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:p,render:e}},lazy:function(e){return{$$typeof:y,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return L().useCallback(e,t)},useContext:function(e,t){return L().useContext(e,t)},useEffect:function(e,t){return L().useEffect(e,t)},useImperativeHandle:function(e,t,n){return L().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return L().useLayoutEffect(e,t)},useMemo:function(e,t){return L().useMemo(e,t)},useReducer:function(e,t,n){return L().useReducer(e,t,n)},useRef:function(e){return L().useRef(e)},useState:function(e){return L().useState(e)},Fragment:u,Profiler:l,StrictMode:i,Suspense:b,unstable_SuspenseList:d,createElement:R,cloneElement:function(e,t,n){if(null==e)throw g(Error(267),e);var o=void 0,c=r({},e.props),u=e.key,i=e.ref,l=e._owner;if(null!=t){void 0!==t.ref&&(i=t.ref,l=C.current),void 0!==t.key&&(u=""+t.key);var s=void 0;for(o in e.type&&e.type.defaultProps&&(s=e.type.defaultProps),t)_.call(t,o)&&!P.hasOwnProperty(o)&&(c[o]=void 0===t[o]&&void 0!==s?s[o]:t[o])}if(1===(o=arguments.length-2))c.children=n;else if(1<o){s=Array(o);for(var f=0;f<o;f++)s[f]=arguments[f+2];c.children=s}return{$$typeof:a,type:e.type,key:u,ref:i,props:c,_owner:l}},createFactory:function(e){var t=R.bind(null,e);return t.type=e,t},isValidElement:E,version:"16.9.0",unstable_withSuspenseConfig:function(e,t){var n=x.suspense;x.suspense=void 0===t?null:t;try{e()}finally{x.suspense=n}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:N,ReactCurrentBatchConfig:x,ReactCurrentOwner:C,IsSomeRendererActing:{current:!1},assign:r}},q={default:Y},z=q&&Y||q;e.exports=z.default||z},272:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,u,i=c(e),l=1;l<arguments.length;l++){for(var s in n=Object(arguments[l]))o.call(n,s)&&(i[s]=n[s]);if(r){u=r(n);for(var f=0;f<u.length;f++)a.call(n,u[f])&&(i[u[f]]=n[u[f]])}}return i}},53:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return s}));var r=n(2),o=n(6),a=(n(270),n(269)),c={id:"use-boundingclientrect-ref",title:"use-boundingclientrect-ref",sidebar_label:"use-boundingclientrect-ref"},u={unversionedId:"use-boundingclientrect-ref",id:"use-boundingclientrect-ref",isDocsHomePage:!1,title:"use-boundingclientrect-ref",description:"@rooks/use-boundingclientrect-ref",source:"@site/../docs/use-boundingclientrect-ref.md",slug:"/use-boundingclientrect-ref",permalink:"/docs/next/use-boundingclientrect-ref",version:"current",lastUpdatedBy:"Bhargav Ponnapalli",lastUpdatedAt:1577262604,sidebar_label:"use-boundingclientrect-ref",sidebar:"docs",previous:{title:"use-boundingclientrect",permalink:"/docs/next/use-boundingclientrect"},next:{title:"use-countdown",permalink:"/docs/next/use-countdown"}},i=[{value:"A hook that tracks the boundingclientrect of an element. It returns a callbackRef so that the element node if changed is easily tracked.",id:"a-hook-that-tracks-the-boundingclientrect-of-an-element-it-returns-a-callbackref-so-that-the-element-node-if-changed-is-easily-tracked",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Importing the hook",id:"importing-the-hook",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Arguments",id:"arguments",children:[]},{value:"Returns an array of 3 values",id:"returns-an-array-of-3-values",children:[]}],l={rightToc:i};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"rooksuse-boundingclientrect-ref"},"@rooks/use-boundingclientrect-ref"),Object(a.b)("h3",{id:"a-hook-that-tracks-the-boundingclientrect-of-an-element-it-returns-a-callbackref-so-that-the-element-node-if-changed-is-easily-tracked"},"A hook that tracks the boundingclientrect of an element. It returns a callbackRef so that the element node if changed is easily tracked."),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"https://github.com/imbhargav5/rooks/workflows/Node%20CI/badge.svg",alt:"Build Status"}))," ",Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/npm/v/@rooks/use-boundingclientrect-ref/latest.svg",alt:null}))," ",Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/npm/l/@rooks/use-boundingclientrect-ref.svg",alt:null}))," ",Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/bundlephobia/min/@rooks/use-boundingclientrect-ref.svg",alt:null}))," ",Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/david/imbhargav5/rooks.svg?path=packages%2Fboundingclientrect-ref",alt:null}))),Object(a.b)("a",{href:"https://spectrum.chat/rooks"},Object(a.b)("img",{src:"https://withspectrum.github.io/badge/badge.svg",alt:"Join the community on Spectrum"})),Object(a.b)("h3",{id:"installation"},"Installation"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"npm install --save @rooks/use-boundingclientrect-ref\n")),Object(a.b)("h3",{id:"importing-the-hook"},"Importing the hook"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'import useBoundingclientrectRef from "@rooks/use-boundingclientrect-ref"\n')),Object(a.b)("h3",{id:"usage"},"Usage"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'function Demo() {\n  const [myRef, boundingClientRect] = useBoundingclientrectRef();\n  const [XOffset, setXOffset] = useState(0);\n  const [YOffset, setYOffset] = useState(300);\n  const displayString = JSON.stringify(boundingClientRect, null, 2);\n  return (\n    <>\n      <div\n        style={{\n          width: 300,\n          background: "lightblue",\n          padding: "10px",\n          position: "absolute",\n          left: XOffset,\n          top: YOffset\n        }}\n        ref={myRef}\n      >\n        <div\n          style={{\n            resize: "both",\n            overflow: "auto",\n            background: "white",\n            color: "blue",\n            maxWidth: "100%"\n          }}\n        >\n          <p>\n            Resize this div as you see fit. To demonstrate that it also updates\n            on child dom nodes resize\n          </p>\n        </div>\n        <h2>Bounds</h2>\n        <p>\n          <button onClick={() => setXOffset(XOffset - 5)}> Move Left </button>\n          <button onClick={() => setXOffset(XOffset + 5)}> Move Right </button>\n        </p>\n        <p>\n          <button onClick={() => setYOffset(YOffset - 5)}> Move Up </button>\n          <button onClick={() => setYOffset(YOffset + 5)}> Move Down </button>\n        </p>\n      </div>\n      <div style={{ height: 500 }}>\n        <pre>{displayString}</pre>\n      </div>\n    </>\n  );\n}\n\nrender(<Demo/>)\n')),Object(a.b)("h3",{id:"arguments"},"Arguments"),Object(a.b)("p",null,"N/A"),Object(a.b)("h3",{id:"returns-an-array-of-3-values"},"Returns an array of 3 values"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Return value"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default value"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"ref"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Callback ref"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"A callback ref function to use as a ref for the component that needs to be tracked"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"() => null")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"value"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"DOMRect"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"DOMRect Object containing x,y, width, height, left,right,top and bottom keys"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"null")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"update"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Function"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Function that can be called at any time to force a recalculation of the clientrect"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"null")))))}s.isMDXComponent=!0}}]);