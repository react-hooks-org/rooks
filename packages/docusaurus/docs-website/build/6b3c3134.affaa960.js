(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{151:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return a})),r.d(t,"default",(function(){return l}));var o=r(2),n=r(6),i=(r(0),r(269)),c={id:"use-isomorphic-effect",title:"use-isomorphic-effect",sidebar_label:"use-isomorphic-effect",original_id:"use-isomorphic-effect"},s={unversionedId:"use-isomorphic-effect",id:"version-v3.7.0/use-isomorphic-effect",isDocsHomePage:!1,title:"use-isomorphic-effect",description:"@rooks/use-isomorphic-effect",source:"@site/versioned_docs/version-v3.7.0/use-isomorphic-effect.md",slug:"/use-isomorphic-effect",permalink:"/docs/use-isomorphic-effect",version:"v3.7.0",sidebar_label:"use-isomorphic-effect",sidebar:"version-v3.7.0/docs",previous:{title:"use-interval",permalink:"/docs/use-interval"},next:{title:"use-key",permalink:"/docs/use-key"}},a=[{value:"A hook that resolves to useEffect on the server and useLayoutEffect on the client.",id:"a-hook-that-resolves-to-useeffect-on-the-server-and-uselayouteffect-on-the-client",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Importing the hook",id:"importing-the-hook",children:[]},{value:"Usage",id:"usage",children:[]}],u={rightToc:a};function l(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"rooksuse-isomorphic-effect"},"@rooks/use-isomorphic-effect"),Object(i.b)("h3",{id:"a-hook-that-resolves-to-useeffect-on-the-server-and-uselayouteffect-on-the-client"},"A hook that resolves to useEffect on the server and useLayoutEffect on the client."),Object(i.b)("p",null,Object(i.b)("img",Object(o.a)({parentName:"p"},{src:"https://github.com/imbhargav5/rooks/workflows/Node%20CI/badge.svg",alt:"Build Status"}))," ",Object(i.b)("img",Object(o.a)({parentName:"p"},{src:"https://img.shields.io/npm/v/@rooks/use-isomorphic-effect/latest.svg",alt:null}))," ",Object(i.b)("img",Object(o.a)({parentName:"p"},{src:"https://img.shields.io/npm/l/@rooks/use-isomorphic-effect.svg",alt:null}))," ",Object(i.b)("img",Object(o.a)({parentName:"p"},{src:"https://img.shields.io/bundlephobia/min/@rooks/use-isomorphic-effect.svg",alt:null}))," ",Object(i.b)("img",Object(o.a)({parentName:"p"},{src:"https://img.shields.io/david/imbhargav5/rooks.svg?path=packages%2Fisomorphic-effect",alt:null}))),Object(i.b)("a",{href:"https://spectrum.chat/rooks"},Object(i.b)("img",{src:"https://withspectrum.github.io/badge/badge.svg",alt:"Join the community on Spectrum"})),Object(i.b)("h3",{id:"installation"},"Installation"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"npm install --save @rooks/use-isomorphic-effect\n")),Object(i.b)("h3",{id:"importing-the-hook"},"Importing the hook"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),'import useIsomorphicEffect from "@rooks/use-isomorphic-effect"\n')),Object(i.b)("h3",{id:"usage"},"Usage"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),'function Demo() {\n  useIsomorphicEffect( () => {\n    console.log("Effect")\n  } ,[]);\n  return null\n}\n\nrender(<Demo/>)\n')))}l.isMDXComponent=!0},269:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var o=r(0),n=r.n(o);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=n.a.createContext({}),l=function(e){var t=n.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=l(r),m=o,b=p["".concat(c,".").concat(m)]||p[m]||f[m]||i;return r?n.a.createElement(b,s(s({ref:t},u),{},{components:r})):n.a.createElement(b,s({ref:t},u))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=m;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var u=2;u<i;u++)c[u]=r[u];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);