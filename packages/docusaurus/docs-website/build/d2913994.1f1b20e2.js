(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{233:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(2),a=r(6),i=(r(0),r(269)),c={id:"use-fork-ref",title:"use-fork-ref",sidebar_label:"use-fork-ref",original_id:"use-fork-ref"},o={unversionedId:"use-fork-ref",id:"version-v3.6.0/use-fork-ref",isDocsHomePage:!1,title:"use-fork-ref",description:"@rooks/use-fork-ref",source:"@site/versioned_docs/version-v3.6.0/use-fork-ref.md",slug:"/use-fork-ref",permalink:"/docs/v3.6.0/use-fork-ref",version:"v3.6.0",sidebar_label:"use-fork-ref",sidebar:"version-v3.6.0/docs",previous:{title:"use-fullscreen",permalink:"/docs/v3.6.0/use-fullscreen"},next:{title:"use-geolocation",permalink:"/docs/v3.6.0/use-geolocation"}},l=[{value:"A hook that can combine two refs(mutable or callbackRefs) into a single callbackRef",id:"a-hook-that-can-combine-two-refsmutable-or-callbackrefs-into-a-single-callbackref",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Importing the hook",id:"importing-the-hook",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Arguments",id:"arguments",children:[]},{value:"Returns",id:"returns",children:[]}],b={rightToc:l};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"rooksuse-fork-ref"},"@rooks/use-fork-ref"),Object(i.b)("h3",{id:"a-hook-that-can-combine-two-refsmutable-or-callbackrefs-into-a-single-callbackref"},"A hook that can combine two refs(mutable or callbackRefs) into a single callbackRef"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Note"),": Credit of this hook goes to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mui-org/material-ui/"}),"material-ui")),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://github.com/imbhargav5/rooks/workflows/Node%20CI/badge.svg",alt:"Build Status"}))," ",Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/npm/v/@rooks/use-fork-ref/latest.svg",alt:null}))," ",Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/npm/l/@rooks/use-fork-ref.svg",alt:null}))," ",Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/bundlephobia/min/@rooks/use-fork-ref.svg",alt:null}))," ",Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/david/imbhargav5/rooks.svg?path=packages%2Ffork-ref",alt:null}))),Object(i.b)("a",{href:"https://spectrum.chat/rooks"},Object(i.b)("img",{src:"https://withspectrum.github.io/badge/badge.svg",alt:"Join the community on Spectrum"})),Object(i.b)("h3",{id:"installation"},"Installation"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"npm install --save @rooks/use-fork-ref\n")),Object(i.b)("h3",{id:"importing-the-hook"},"Importing the hook"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'import useForkRef from "@rooks/use-fork-ref"\n')),Object(i.b)("h3",{id:"usage"},"Usage"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'function Demo() {\n  const [isVisible, setIsVisible] = useState(false);\n  const callback = entries => {\n    if (entries && entries[0]) {\n      setIsVisible(entries[0].isIntersecting);\n    }\n  };\n  const [myIntersectionObserverRef] = useIntersectionObserverRef(callback);\n  const [\n    myBoundingclientrectRef,\n    boundingclientrect\n  ] = useBoundingclientrectRef();\n  const myRef = useForkRef(myIntersectionObserverRef, myBoundingclientrectRef);\n  const displayString = JSON.stringify(boundingclientrect, null, 2);\n  return (\n    <>\n      <div\n        style={{\n          position: "fixed",\n          top: 0,\n          right: 0\n        }}\n      >\n        <h1>Is rectangle visible - {String(isVisible)}</h1>\n      </div>\n      <div style={{ height: 2000 }}></div>\n      <div ref={myRef} style={{ height: 300, background: "lightblue" }}>\n        <p>Boundingclientrect</p>\n        <pre>{displayString}</pre>\n      </div>\n      <div style={{ height: 2000 }}></div>\n    </>\n  );\n}\n\nrender(<Demo/>)\n')),Object(i.b)("h3",{id:"arguments"},"Arguments"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Argument value"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ref2"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Callback/Mutable ref"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"First ref")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ref1"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Callback/Mutable ref"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Second ref")))),Object(i.b)("h3",{id:"returns"},"Returns"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Return value"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default value"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ref"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Callback ref"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A callback ref function that can internally combines both the refs from the arguments"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"() => null")))),Object(i.b)("h4",{id:"original-source"},"Original source"),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/utils/useForkRef.js"}),"Source"),"\n"))}s.isMDXComponent=!0},269:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=s(r),f=n,m=u["".concat(c,".").concat(f)]||u[f]||p[f]||i;return r?a.a.createElement(m,o(o({ref:t},b),{},{components:r})):a.a.createElement(m,o({ref:t},b))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var b=2;b<i;b++)c[b]=r[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);