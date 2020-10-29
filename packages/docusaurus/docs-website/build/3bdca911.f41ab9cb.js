(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{114:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return a})),r.d(t,"default",(function(){return l}));var n=r(2),i=r(6),o=(r(0),r(269)),c={id:"use-outside-click",title:"use-outside-click",sidebar_label:"use-outside-click",original_id:"use-outside-click"},s={unversionedId:"use-outside-click",id:"version-v3.5.1/use-outside-click",isDocsHomePage:!1,title:"use-outside-click",description:"@rooks/use-outside-click",source:"@site/versioned_docs/version-v3.5.1/use-outside-click.md",slug:"/use-outside-click",permalink:"/docs/v3.5.1/use-outside-click",version:"v3.5.1",sidebar_label:"use-outside-click",sidebar:"version-v3.5.1/docs",previous:{title:"use-online",permalink:"/docs/v3.5.1/use-online"},next:{title:"use-outside-click-ref",permalink:"/docs/v3.5.1/use-outside-click-ref"}},a=[{value:"Outside click(for a ref) event as hook for React.",id:"outside-clickfor-a-ref-event-as-hook-for-react",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Importing the hook",id:"importing-the-hook",children:[]},{value:"Usage",id:"usage",children:[]}],u={rightToc:a};function l(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"rooksuse-outside-click"},"@rooks/use-outside-click"),Object(o.b)("h3",{id:"outside-clickfor-a-ref-event-as-hook-for-react"},"Outside click(for a ref) event as hook for React."),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://github.com/imbhargav5/rooks/workflows/Node%20CI/badge.svg",alt:"Build Status"})),Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/npm/v/@rooks/use-outside-click/latest.svg",alt:null}))," ",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/npm/l/@rooks/use-outside-click.svg",alt:null}))," ",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/npm/dt/@rooks/use-outside-click.svg",alt:null}))," ",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/david/imbhargav5/rooks.svg?path=packages%2Foutside-click",alt:null}))),Object(o.b)("a",{href:"https://spectrum.chat/rooks"},Object(o.b)("img",{src:"https://withspectrum.github.io/badge/badge.svg",alt:"Join the community on Spectrum"})),Object(o.b)("h3",{id:"installation"},"Installation"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"npm install --save @rooks/use-outside-click\n")),Object(o.b)("h3",{id:"importing-the-hook"},"Importing the hook"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'import useOutsideClick from "@rooks/use-outside-click";\n')),Object(o.b)("h3",{id:"usage"},"Usage"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'function Demo() {\n  const pRef = useRef();\n  function outsidePClick() {\n    alert("Clicked outside p");\n  }\n  useOutsideClick(pRef, outsidePClick);\n  return (\n    <div>\n      <p ref={pRef}>Click outside me</p>\n    </div>\n  );\n}\n\nrender(<Demo />);\n')))}l.isMDXComponent=!0},269:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=i.a.createContext({}),l=function(e){var t=i.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=l(r),b=n,m=p["".concat(c,".").concat(b)]||p[b]||d[b]||o;return r?i.a.createElement(m,s(s({ref:t},u),{},{components:r})):i.a.createElement(m,s({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=b;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var u=2;u<o;u++)c[u]=r[u];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);