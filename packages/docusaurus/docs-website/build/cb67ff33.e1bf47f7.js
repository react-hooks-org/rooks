(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{225:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(2),a=r(6),o=(r(0),r(269)),i={id:"use-previous",title:"use-previous",sidebar_label:"use-previous",original_id:"use-previous"},s={unversionedId:"use-previous",id:"version-v3.7.0/use-previous",isDocsHomePage:!1,title:"use-previous",description:"@rooks/use-previous",source:"@site/versioned_docs/version-v3.7.0/use-previous.md",slug:"/use-previous",permalink:"/docs/use-previous",version:"v3.7.0",sidebar_label:"use-previous",sidebar:"version-v3.7.0/docs",previous:{title:"use-outside-click-ref",permalink:"/docs/use-outside-click-ref"},next:{title:"use-raf",permalink:"/docs/use-raf"}},c=[{value:"Access the previous value of a variable with this React hook",id:"access-the-previous-value-of-a-variable-with-this-react-hook",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Importing the hook",id:"importing-the-hook",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Arguments",id:"arguments",children:[]},{value:"Gif",id:"gif",children:[]}],u={rightToc:c};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"rooksuse-previous"},"@rooks/use-previous"),Object(o.b)("h3",{id:"access-the-previous-value-of-a-variable-with-this-react-hook"},"Access the previous value of a variable with this React hook"),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://github.com/imbhargav5/rooks/workflows/Node%20CI/badge.svg",alt:"Build Status"})),Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/npm/v/@rooks/use-previous/latest.svg",alt:null}))," ",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/npm/l/@rooks/use-previous.svg",alt:null}))," ",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/npm/dt/@rooks/use-previous.svg",alt:null}))," ",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/david/imbhargav5/rooks.svg?path=packages%2Fprevious",alt:null}))),Object(o.b)("a",{href:"https://spectrum.chat/rooks"},Object(o.b)("img",{src:"https://withspectrum.github.io/badge/badge.svg",alt:"Join the community on Spectrum"})),Object(o.b)("h3",{id:"installation"},"Installation"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"npm install --save @rooks/use-previous\n")),Object(o.b)("h3",{id:"importing-the-hook"},"Importing the hook"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'import usePrevious from "@rooks/use-previous";\n')),Object(o.b)("h3",{id:"usage"},"Usage"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'function Demo() {\n  const myInput = useInput("hello world");\n  const previousValue = usePrevious(myInput.value);\n  return (\n    <div>\n      <div>\n        <input {...myInput} />\n      </div>\n      <p>\n        Current value is <b>{myInput.value}</b>\n      </p>\n      <p>\n        Previous value was <b>{previousValue || "-"}</b>\n      </p>\n    </div>\n  );\n}\n\nrender(<Demo />);\n')),Object(o.b)("h2",{id:"arguments"},"Arguments"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Argument"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"value"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"any"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The variable whose previous value should be stored")))),Object(o.b)("h2",{id:"gif"},"Gif"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://gyazo.com/9913f58e1959ed60fb590cb280639d88"}),Object(o.b)("img",Object(n.a)({parentName:"a"},{src:"https://i.gyazo.com/9913f58e1959ed60fb590cb280639d88.gif",alt:"Image from Gyazo"})))))}l.isMDXComponent=!0},269:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return v}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),m=n,v=p["".concat(i,".").concat(m)]||p[m]||b[m]||o;return r?a.a.createElement(v,s(s({ref:t},u),{},{components:r})):a.a.createElement(v,s({ref:t},u))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);