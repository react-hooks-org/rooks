/*! For license information please see 4c83b33b.ce5c7b90.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{126:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(6),o=(n(270),n(269)),l={id:"use-time-ago",title:"use-time-ago",sidebar_label:"use-time-ago"},u={unversionedId:"use-time-ago",id:"use-time-ago",isDocsHomePage:!1,title:"use-time-ago",description:"@rooks/use-time-ago",source:"@site/../docs/use-time-ago.md",slug:"/use-time-ago",permalink:"/docs/next/use-time-ago",version:"current",lastUpdatedBy:"Bhargav Ponnapalli",lastUpdatedAt:1576607571,sidebar_label:"use-time-ago",sidebar:"docs",previous:{title:"use-throttle",permalink:"/docs/next/use-throttle"},next:{title:"use-timeout",permalink:"/docs/next/use-timeout"}},c=[{value:"A React Hook to get time ago for timestamp millisecond value.",id:"a-react-hook-to-get-time-ago-for-timestamp-millisecond-value",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Importing the hook",id:"importing-the-hook",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Arguments",id:"arguments",children:[]},{value:"Returned Value",id:"returned-value",children:[]}],i={rightToc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"rooksuse-time-ago"},"@rooks/use-time-ago"),Object(o.b)("h3",{id:"a-react-hook-to-get-time-ago-for-timestamp-millisecond-value"},"A React Hook to get time ago for timestamp millisecond value."),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://github.com/imbhargav5/rooks/workflows/Node%20CI/badge.svg",alt:"Build Status"})),Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/npm/v/@rooks/use-time-ago/latest.svg",alt:null}))," ",Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/npm/l/@rooks/use-time-ago.svg",alt:null}))," ",Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/npm/dt/@rooks/use-time-ago.svg",alt:null}))," ",Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/david/imbhargav5/rooks.svg?path=packages%2Ftime-ago",alt:null}))),Object(o.b)("a",{href:"https://spectrum.chat/rooks"},Object(o.b)("img",{src:"https://withspectrum.github.io/badge/badge.svg",alt:"Join the community on Spectrum"})),Object(o.b)("h3",{id:"installation"},"Installation"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"npm install --save @rooks/use-time-ago\n")),Object(o.b)("h3",{id:"importing-the-hook"},"Importing the hook"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'import useTimeAgo from "@rooks/use-time-ago"\n')),Object(o.b)("h3",{id:"usage"},"Usage"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'function Demo() {\n  const [date, setDate] = useState(new Date());\n  const timeAgo = useTimeAgo(date.getTime() - 1000 * 12, {\n    locale: "zh_CN"\n  });\n  const timeAgo2 = useTimeAgo(date.getTime() - 1000 * 12);\n  return (\n    <>\n      <p>{timeAgo}</p>\n      <p>{timeAgo2}</p>\n    </>\n  );\n}\n\nrender(<Demo/>)\n')),Object(o.b)("h3",{id:"arguments"},"Arguments"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Argument"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default value"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"input"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Date"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Timestamp"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"etc")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"options"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Object"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Options object"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"{   intervalMs:0 }")))),Object(o.b)("h4",{id:"options"},"Options"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Options"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default value"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"intervalMs"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"milliseconds"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Duration after which time-ago has to be calculated"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1000")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"locale"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"String"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Locale in which value is expected"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"undefined")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"relativeDate"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Date"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Relative date object with respect to which time-ago is to be calcuated"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Current Time")))),Object(o.b)("h3",{id:"returned-value"},"Returned Value"),Object(o.b)("p",null,"Timeago string is returned."))}s.isMDXComponent=!0},269:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),s=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),p=s(n),f=r,m=p["".concat(l,".").concat(f)]||p[f]||b[f]||o;return n?a.a.createElement(m,u(u({ref:t},i),{},{components:n})):a.a.createElement(m,u({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=f;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:r,l[1]=u;for(var i=2;i<o;i++)l[i]=n[i];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},270:function(e,t,n){"use strict";e.exports=n(271)},271:function(e,t,n){"use strict";var r=n(272),a="function"==typeof Symbol&&Symbol.for,o=a?Symbol.for("react.element"):60103,l=a?Symbol.for("react.portal"):60106,u=a?Symbol.for("react.fragment"):60107,c=a?Symbol.for("react.strict_mode"):60108,i=a?Symbol.for("react.profiler"):60114,s=a?Symbol.for("react.provider"):60109,p=a?Symbol.for("react.context"):60110,b=a?Symbol.for("react.forward_ref"):60112,f=a?Symbol.for("react.suspense"):60113,m=a?Symbol.for("react.suspense_list"):60120,d=a?Symbol.for("react.memo"):60115,g=a?Symbol.for("react.lazy"):60116;a&&Symbol.for("react.fundamental"),a&&Symbol.for("react.responder");var O="function"==typeof Symbol&&Symbol.iterator;function j(e){for(var t=e.message,n="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r]);return e.message="Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function v(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||y}function N(){}function w(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||y}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw j(Error(85));this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},N.prototype=v.prototype;var k=w.prototype=new N;k.constructor=w,r(k,v.prototype),k.isPureReactComponent=!0;var S={current:null},_={suspense:null},x={current:null},P=Object.prototype.hasOwnProperty,E={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,n){var r=void 0,a={},l=null,u=null;if(null!=t)for(r in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(l=""+t.key),t)P.call(t,r)&&!E.hasOwnProperty(r)&&(a[r]=t[r]);var c=arguments.length-2;if(1===c)a.children=n;else if(1<c){for(var i=Array(c),s=0;s<c;s++)i[s]=arguments[s+2];a.children=i}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===a[r]&&(a[r]=c[r]);return{$$typeof:o,type:e,key:l,ref:u,props:a,_owner:x.current}}function R(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var D=/\/+/g,T=[];function A(e,t,n,r){if(T.length){var a=T.pop();return a.result=e,a.keyPrefix=t,a.func=n,a.context=r,a.count=0,a}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function $(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>T.length&&T.push(e)}function I(e,t,n,r){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var u=!1;if(null===e)u=!0;else switch(a){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case o:case l:u=!0}}if(u)return n(r,e,""===t?"."+U(e,0):t),1;if(u=0,t=""===t?".":t+":",Array.isArray(e))for(var c=0;c<e.length;c++){var i=t+U(a=e[c],c);u+=I(a,i,n,r)}else if(null===e||"object"!=typeof e?i=null:i="function"==typeof(i=O&&e[O]||e["@@iterator"])?i:null,"function"==typeof i)for(e=i.call(e),c=0;!(a=e.next()).done;)u+=I(a=a.value,i=t+U(a,c++),n,r);else if("object"===a)throw n=""+e,j(Error(31),"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n,"");return u}function M(e,t,n){return null==e?0:I(e,"",t,n)}function U(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function L(e,t){e.func.call(e.context,t,e.count++)}function q(e,t,n){var r=e.result,a=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?F(e,r,n,(function(e){return e})):null!=e&&(R(e)&&(e=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(D,"$&/")+"/")+n)),r.push(e))}function F(e,t,n,r,a){var o="";null!=n&&(o=(""+n).replace(D,"$&/")+"/"),M(e,q,t=A(t,o,r,a)),$(t)}function B(){var e=S.current;if(null===e)throw j(Error(321));return e}var V={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return F(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;M(e,L,t=A(null,null,t,n)),$(t)},count:function(e){return M(e,(function(){return null}),null)},toArray:function(e){var t=[];return F(e,t,null,(function(e){return e})),t},only:function(e){if(!R(e))throw j(Error(143));return e}},createRef:function(){return{current:null}},Component:v,PureComponent:w,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:b,render:e}},lazy:function(e){return{$$typeof:g,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return B().useCallback(e,t)},useContext:function(e,t){return B().useContext(e,t)},useEffect:function(e,t){return B().useEffect(e,t)},useImperativeHandle:function(e,t,n){return B().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return B().useLayoutEffect(e,t)},useMemo:function(e,t){return B().useMemo(e,t)},useReducer:function(e,t,n){return B().useReducer(e,t,n)},useRef:function(e){return B().useRef(e)},useState:function(e){return B().useState(e)},Fragment:u,Profiler:i,StrictMode:c,Suspense:f,unstable_SuspenseList:m,createElement:C,cloneElement:function(e,t,n){if(null==e)throw j(Error(267),e);var a=void 0,l=r({},e.props),u=e.key,c=e.ref,i=e._owner;if(null!=t){void 0!==t.ref&&(c=t.ref,i=x.current),void 0!==t.key&&(u=""+t.key);var s=void 0;for(a in e.type&&e.type.defaultProps&&(s=e.type.defaultProps),t)P.call(t,a)&&!E.hasOwnProperty(a)&&(l[a]=void 0===t[a]&&void 0!==s?s[a]:t[a])}if(1===(a=arguments.length-2))l.children=n;else if(1<a){s=Array(a);for(var p=0;p<a;p++)s[p]=arguments[p+2];l.children=s}return{$$typeof:o,type:e.type,key:u,ref:c,props:l,_owner:i}},createFactory:function(e){var t=C.bind(null,e);return t.type=e,t},isValidElement:R,version:"16.9.0",unstable_withSuspenseConfig:function(e,t){var n=_.suspense;_.suspense=void 0===t?null:t;try{e()}finally{_.suspense=n}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:S,ReactCurrentBatchConfig:_,ReactCurrentOwner:x,IsSomeRendererActing:{current:!1},assign:r}},H={default:V},z=H&&V||H;e.exports=z.default||z},272:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function l(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var n,u,c=l(e),i=1;i<arguments.length;i++){for(var s in n=Object(arguments[i]))a.call(n,s)&&(c[s]=n[s]);if(r){u=r(n);for(var p=0;p<u.length;p++)o.call(n,u[p])&&(c[u[p]]=n[u[p]])}}return c}}}]);