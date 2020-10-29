(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{187:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return a})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(2),i=r(6),c=(r(0),r(269)),o={id:"use-outside-click-ref",title:"use-outside-click-ref",sidebar_label:"use-outside-click-ref",original_id:"use-outside-click-ref"},a={unversionedId:"use-outside-click-ref",id:"version-v3.7.0/use-outside-click-ref",isDocsHomePage:!1,title:"use-outside-click-ref",description:"@rooks/use-outside-click-ref",source:"@site/versioned_docs/version-v3.7.0/use-outside-click-ref.md",slug:"/use-outside-click-ref",permalink:"/docs/use-outside-click-ref",version:"v3.7.0",sidebar_label:"use-outside-click-ref",sidebar:"version-v3.7.0/docs",previous:{title:"use-outside-click",permalink:"/docs/use-outside-click"},next:{title:"use-previous",permalink:"/docs/use-previous"}},s=[{value:"A hook that can track a click event outside a ref. Returns a callbackRef.",id:"a-hook-that-can-track-a-click-event-outside-a-ref-returns-a-callbackref",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Importing the hook",id:"importing-the-hook",children:[]},{value:"Usage",id:"usage",children:[]}],u={rightToc:s};function l(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"rooksuse-outside-click-ref"},"@rooks/use-outside-click-ref"),Object(c.b)("h3",{id:"a-hook-that-can-track-a-click-event-outside-a-ref-returns-a-callbackref"},"A hook that can track a click event outside a ref. Returns a callbackRef."),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"https://github.com/imbhargav5/rooks/workflows/Node%20CI/badge.svg",alt:"Build Status"}))," ",Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/npm/v/@rooks/use-outside-click-ref/latest.svg",alt:null}))," ",Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/npm/l/@rooks/use-outside-click-ref.svg",alt:null}))," ",Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/bundlephobia/min/@rooks/use-outside-click-ref.svg",alt:null}))," ",Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/david/imbhargav5/rooks.svg?path=packages%2Foutside-click-ref",alt:null}))),Object(c.b)("a",{href:"https://spectrum.chat/rooks"},Object(c.b)("img",{src:"https://withspectrum.github.io/badge/badge.svg",alt:"Join the community on Spectrum"})),Object(c.b)("h3",{id:"installation"},"Installation"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"npm install --save @rooks/use-outside-click-ref\n")),Object(c.b)("h3",{id:"importing-the-hook"},"Importing the hook"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'import useOutsideClickRef from "@rooks/use-outside-click-ref"\n')),Object(c.b)("h3",{id:"usage"},"Usage"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'function Demo() {\n  function outsidePClick() {\n    alert("Clicked outside p");\n  }\n  const [ref] = useOutsideClickRef(outsidePClick);\n  return (\n    <div>\n      <p ref={ref}>Click outside me</p>\n    </div>\n  );\n}\n\nrender(<Demo/>)\n')))}l.isMDXComponent=!0},269:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),i=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=i.a.createContext({}),l=function(e){var t=i.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),b=n,f=p["".concat(o,".").concat(b)]||p[b]||d[b]||c;return r?i.a.createElement(f,a(a({ref:t},u),{},{components:r})):i.a.createElement(f,a({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=b;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:n,o[1]=a;for(var u=2;u<c;u++)o[u]=r[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);