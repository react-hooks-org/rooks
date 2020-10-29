(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{200:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(2),o=n(6),a=(n(0),n(269)),s={id:"use-mouse",title:"use-mouse",sidebar_label:"use-mouse",original_id:"use-mouse"},i={unversionedId:"use-mouse",id:"version-v3.7.0/use-mouse",isDocsHomePage:!1,title:"use-mouse",description:"@rooks/use-mouse",source:"@site/versioned_docs/version-v3.7.0/use-mouse.md",slug:"/use-mouse",permalink:"/docs/use-mouse",version:"v3.7.0",sidebar_label:"use-mouse",sidebar:"version-v3.7.0/docs",previous:{title:"use-localstorage",permalink:"/docs/use-localstorage"},next:{title:"use-mutation-observer",permalink:"/docs/use-mutation-observer"}},c=[{value:"Mouse position hook for React.",id:"mouse-position-hook-for-react",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Importing the hook",id:"importing-the-hook",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Returned Object",id:"returned-object",children:[]}],u={rightToc:c};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"rooksuse-mouse"},"@rooks/use-mouse"),Object(a.b)("h3",{id:"mouse-position-hook-for-react"},"Mouse position hook for React."),Object(a.b)("br",null),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"https://github.com/imbhargav5/rooks/workflows/Node%20CI/badge.svg",alt:"Build Status"})),Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/npm/v/@rooks/use-mouse/latest.svg",alt:null}))," ",Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/npm/l/@rooks/use-mouse.svg",alt:null}))," ",Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/npm/dt/@rooks/use-mouse.svg",alt:null}))," ",Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/david/imbhargav5/rooks.svg?path=packages%2Fmouse",alt:null}))),Object(a.b)("a",{href:"https://spectrum.chat/rooks"},Object(a.b)("img",{src:"https://withspectrum.github.io/badge/badge.svg",alt:"Join the community on Spectrum"})),Object(a.b)("h3",{id:"installation"},"Installation"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"npm install --save @rooks/use-mouse\n")),Object(a.b)("h3",{id:"importing-the-hook"},"Importing the hook"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'import useMouse from "@rooks/use-mouse"\n')),Object(a.b)("h3",{id:"usage"},"Usage"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'function Demo() {\n  const { x, y } = useMouse();\n  return (\n    <>\n      <p> Move mouse here to see changes to position </p>\n      <p>X position is {x || "null"}</p>\n      <p>X position is {y || "null"}</p>\n    </>\n  );\n}\n\nrender(<Demo/>)\n')),Object(a.b)("h3",{id:"returned-object"},"Returned Object"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Returned object attributes"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"x"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"int"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"X position of mouse")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"y"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"int"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Y position of mouse")))))}l.isMDXComponent=!0},269:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=l(n),m=r,d=b["".concat(s,".").concat(m)]||b[m]||p[m]||a;return n?o.a.createElement(d,i(i({ref:t},u),{},{components:n})):o.a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var u=2;u<a;u++)s[u]=n[u];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);