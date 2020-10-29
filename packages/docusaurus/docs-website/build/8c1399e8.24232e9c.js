(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{176:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),l=(n(0),n(269)),i={id:"use-input",title:"use-input",sidebar_label:"use-input",original_id:"use-input"},b={unversionedId:"use-input",id:"version-3.5.0/use-input",isDocsHomePage:!1,title:"use-input",description:"@rooks/use-input",source:"@site/versioned_docs/version-3.5.0/use-input.md",slug:"/use-input",permalink:"/docs/3.5.0/use-input",version:"3.5.0",sidebar_label:"use-input",sidebar:"version-3.5.0/docs",previous:{title:"use-geolocation",permalink:"/docs/3.5.0/use-geolocation"},next:{title:"use-intersection-observer-ref",permalink:"/docs/3.5.0/use-intersection-observer-ref"}},c=[{value:"Input hook for React.",id:"input-hook-for-react",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Importing the hook",id:"importing-the-hook",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Arguments",id:"arguments",children:[]},{value:"Options",id:"options",children:[]},{value:"Return value",id:"return-value",children:[]}],o={rightToc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"rooksuse-input"},"@rooks/use-input"),Object(l.b)("h3",{id:"input-hook-for-react"},"Input hook for React."),Object(l.b)("br",null),Object(l.b)("p",null,Object(l.b)("img",Object(a.a)({parentName:"p"},{src:"https://github.com/imbhargav5/rooks/workflows/Node%20CI/badge.svg",alt:"Build Status"})),Object(l.b)("img",Object(a.a)({parentName:"p"},{src:"https://img.shields.io/npm/v/@rooks/use-input/latest.svg",alt:null}))," ",Object(l.b)("img",Object(a.a)({parentName:"p"},{src:"https://img.shields.io/npm/l/@rooks/use-input.svg",alt:null}))," ",Object(l.b)("img",Object(a.a)({parentName:"p"},{src:"https://img.shields.io/npm/dt/@rooks/use-input.svg",alt:null}))," ",Object(l.b)("img",Object(a.a)({parentName:"p"},{src:"https://img.shields.io/david/imbhargav5/rooks.svg?path=packages%2Finput",alt:null}))),Object(l.b)("a",{href:"https://spectrum.chat/rooks"},Object(l.b)("img",{src:"https://withspectrum.github.io/badge/badge.svg",alt:"Join the community on Spectrum"})),Object(l.b)("h3",{id:"installation"},"Installation"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"npm install --save @rooks/use-input\n")),Object(l.b)("h3",{id:"importing-the-hook"},"Importing the hook"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'import useInput from "@rooks/use-input"\n')),Object(l.b)("h3",{id:"usage"},"Usage"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Base")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'function Demo() {\n  const myInput = useInput("hello");\n  return (\n    <div>\n      <input {...myInput} />\n      <p>\n        Value is <b>{myInput.value}</b>\n      </p>\n    </div>\n  );\n}\n\nrender(<Demo/>)\n')),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"With optional validator")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'function Demo() {\n  const myInput = useInput("hello", {\n    validate: (newValue) => newValue.length < 15\n  });\n  return (\n    <div>\n      <p> Max length 15 </p>\n      <input {...myInput} />\n      <p>\n        Value is <b>{myInput.value}</b>\n      </p>\n    </div>\n  );\n}\n\nrender(<Demo/>)\n')),Object(l.b)("h3",{id:"arguments"},"Arguments"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Argument"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default value"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"initialValue"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Initial value of the string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),'""')),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"opts"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"object"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Options"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"{}")))),Object(l.b)("h3",{id:"options"},"Options"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Option key"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default value"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"validate"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"function"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Validator function which receives changed valued before update as well as current value and should return true or false"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"undefined")))),Object(l.b)("h3",{id:"return-value"},"Return value"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Return value"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"{value, onChange}"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Object"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),'Object containing {value : "String", onChange: "function that accepts an event and updates the value of the string"}')))))}u.isMDXComponent=!0},269:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),u=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),p=u(n),O=a,m=p["".concat(i,".").concat(O)]||p[O]||s[O]||l;return n?r.a.createElement(m,b(b({ref:t},o),{},{components:n})):r.a.createElement(m,b({ref:t},o))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=O;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:a,i[1]=b;for(var o=2;o<l;o++)i[o]=n[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);