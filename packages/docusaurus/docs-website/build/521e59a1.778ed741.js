(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{129:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(2),o=t(6),i=(t(0),t(269)),a={id:"use-online",title:"use-online",sidebar_label:"use-online",original_id:"use-online"},s={unversionedId:"use-online",id:"version-v3.6.0/use-online",isDocsHomePage:!1,title:"use-online",description:"@rooks/use-online",source:"@site/versioned_docs/version-v3.6.0/use-online.md",slug:"/use-online",permalink:"/docs/v3.6.0/use-online",version:"v3.6.0",sidebar_label:"use-online",sidebar:"version-v3.6.0/docs",previous:{title:"use-on-window-scroll",permalink:"/docs/v3.6.0/use-on-window-scroll"},next:{title:"use-outside-click",permalink:"/docs/v3.6.0/use-outside-click"}},l=[{value:"Online status hook for React.",id:"online-status-hook-for-react",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Importing the hook",id:"importing-the-hook",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Return value",id:"return-value",children:[]}],c={rightToc:l};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"rooksuse-online"},"@rooks/use-online"),Object(i.b)("h3",{id:"online-status-hook-for-react"},"Online status hook for React."),Object(i.b)("br",null),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"https://github.com/imbhargav5/rooks/workflows/Node%20CI/badge.svg",alt:"Build Status"})),Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/npm/v/@rooks/use-online/latest.svg",alt:null}))," ",Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/npm/l/@rooks/use-online.svg",alt:null}))," ",Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/npm/dt/@rooks/use-online.svg",alt:null}))," ",Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/david/imbhargav5/rooks.svg?path=packages%2Fonline",alt:null}))),Object(i.b)("a",{href:"https://spectrum.chat/rooks"},Object(i.b)("img",{src:"https://withspectrum.github.io/badge/badge.svg",alt:"Join the community on Spectrum"})),Object(i.b)("h3",{id:"installation"},"Installation"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"npm install --save @rooks/use-online\n")),Object(i.b)("h3",{id:"importing-the-hook"},"Importing the hook"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'import useOnline from "@rooks/use-online";\n')),Object(i.b)("h3",{id:"usage"},"Usage"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"function Demo() {\n  const isOnline = useOnline();\n  return <p>Online status - {isOnline.toString()}</p>;\n}\n\nrender(<Demo />);\n")),Object(i.b)("h3",{id:"return-value"},"Return value"),Object(i.b)("p",null,"Offline status (boolean) is returned."))}u.isMDXComponent=!0},269:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=o.a.createContext({}),u=function(e){var n=o.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return o.a.createElement(c.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),d=r,m=p["".concat(a,".").concat(d)]||p[d]||b[d]||i;return t?o.a.createElement(m,s(s({ref:n},c),{},{components:t})):o.a.createElement(m,s({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);