(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{217:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),o=(n(0),n(269)),i={id:"use-timeout",title:"use-timeout",sidebar_label:"use-timeout",original_id:"use-timeout"},c={unversionedId:"use-timeout",id:"version-v3.6.0/use-timeout",isDocsHomePage:!1,title:"use-timeout",description:"@rooks/use-timeout",source:"@site/versioned_docs/version-v3.6.0/use-timeout.md",slug:"/use-timeout",permalink:"/docs/v3.6.0/use-timeout",version:"v3.6.0",sidebar_label:"use-timeout",sidebar:"version-v3.6.0/docs",previous:{title:"use-time-ago",permalink:"/docs/v3.6.0/use-time-ago"},next:{title:"use-toggle",permalink:"/docs/v3.6.0/use-toggle"}},b=[{value:"setTimeout hook for react.",id:"settimeout-hook-for-react",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Importing the hook",id:"importing-the-hook",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Arguments",id:"arguments",children:[]},{value:"Returned Object keys",id:"returned-object-keys",children:[]}],l={rightToc:b};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"rooksuse-timeout"},"@rooks/use-timeout"),Object(o.b)("h3",{id:"settimeout-hook-for-react"},"setTimeout hook for react."),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://github.com/imbhargav5/rooks/workflows/Node%20CI/badge.svg",alt:"Build Status"})),Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/npm/v/@rooks/use-timeout/latest.svg",alt:null}))," ",Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/npm/l/@rooks/use-timeout.svg",alt:null}))," ",Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/npm/dt/@rooks/use-timeout.svg",alt:null}))," ",Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/david/imbhargav5/rooks.svg?path=packages%2Ftimeout",alt:null}))),Object(o.b)("a",{href:"https://spectrum.chat/rooks"},Object(o.b)("img",{src:"https://withspectrum.github.io/badge/badge.svg",alt:"Join the community on Spectrum"})),Object(o.b)("h3",{id:"installation"},"Installation"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"npm install --save @rooks/use-timeout\n")),Object(o.b)("h3",{id:"importing-the-hook"},"Importing the hook"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'import useTimeout from "@rooks/use-timeout"\n')),Object(o.b)("h3",{id:"usage"},"Usage"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'function TimeoutComponent() {\n  function doAlert() {\n    window.alert("timeout expired!");\n  }\n  const { start, clear } = useTimeout(doAlert, 2000);\n  return (\n    <>\n      <button onClick={start}> Start timeout </button>\n      <button onClick={clear}> Clear timeout </button>\n    </>\n  );\n}\n\nrender(<TimeoutComponent/>)\n')),Object(o.b)("h3",{id:"arguments"},"Arguments"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Arguments"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default value"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"callback"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"function"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Function to be executed in timeout"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"undefind")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"delay"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Number"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Number in milliseconds after which callback is to be run"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"0")))),Object(o.b)("h3",{id:"returned-object-keys"},"Returned Object keys"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Returned object attributes"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"clear"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"function"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Clear the timeout")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"start"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"function"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Start the timeout")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"isActive"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"boolean"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Is the timeout active")))))}u.isMDXComponent=!0},269:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),s=u(n),p=r,O=s["".concat(i,".").concat(p)]||s[p]||m[p]||o;return n?a.a.createElement(O,c(c({ref:t},l),{},{components:n})):a.a.createElement(O,c({ref:t},l))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);