(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{178:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return o}));var a=n(2),r=n(6),l=(n(0),n(269)),c={id:"use-select",title:"use-select",sidebar_label:"use-select",original_id:"use-select"},i={unversionedId:"use-select",id:"version-3.5.0/use-select",isDocsHomePage:!1,title:"use-select",description:"@rooks/use-select",source:"@site/versioned_docs/version-3.5.0/use-select.md",slug:"/use-select",permalink:"/docs/3.5.0/use-select",version:"3.5.0",sidebar_label:"use-select",sidebar:"version-3.5.0/docs",previous:{title:"use-raf",permalink:"/docs/3.5.0/use-raf"},next:{title:"use-sessionstorage",permalink:"/docs/3.5.0/use-sessionstorage"}},b=[{value:"Select values from a list easily. List selection hook for react.",id:"select-values-from-a-list-easily-list-selection-hook-for-react",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Importing the hook",id:"importing-the-hook",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Arguments",id:"arguments",children:[]},{value:"Returned Object",id:"returned-object",children:[]}],s={rightToc:b};function o(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"rooksuse-select"},"@rooks/use-select"),Object(l.b)("h3",{id:"select-values-from-a-list-easily-list-selection-hook-for-react"},"Select values from a list easily. List selection hook for react."),Object(l.b)("br",null),Object(l.b)("p",null,Object(l.b)("img",Object(a.a)({parentName:"p"},{src:"https://github.com/imbhargav5/rooks/workflows/Node%20CI/badge.svg",alt:"Build Status"})),Object(l.b)("img",Object(a.a)({parentName:"p"},{src:"https://img.shields.io/npm/v/@rooks/use-select/latest.svg",alt:null}))," ",Object(l.b)("img",Object(a.a)({parentName:"p"},{src:"https://img.shields.io/npm/l/@rooks/use-select.svg",alt:null}))," ",Object(l.b)("img",Object(a.a)({parentName:"p"},{src:"https://img.shields.io/npm/dt/@rooks/use-select.svg",alt:null}))," ",Object(l.b)("img",Object(a.a)({parentName:"p"},{src:"https://img.shields.io/david/imbhargav5/rooks.svg?path=packages%2Fselect",alt:null}))),Object(l.b)("a",{href:"https://spectrum.chat/rooks"},Object(l.b)("img",{src:"https://withspectrum.github.io/badge/badge.svg",alt:"Join the community on Spectrum"})),Object(l.b)("h3",{id:"installation"},"Installation"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"npm install --save @rooks/use-select\n")),Object(l.b)("h3",{id:"importing-the-hook"},"Importing the hook"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'import useSelect from "@rooks/use-select"\n')),Object(l.b)("h3",{id:"usage"},"Usage"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'\nconst list = [\n  {\n    heading: "Tab 1",\n    content: "Tab 1 Content"\n  },\n  {\n    heading: "Tab 2",\n    content: "Tab 2 Content"\n  }\n];\n\nfunction Demo() {\n  const { index, setIndex, item } = useSelect(list, 0);\n  return (\n    <div>\n      {list.map((listItem, listItemIndex) => (\n        <button\n          key={listItemIndex}\n          style={{\n            background: index === listItemIndex ? "dodgerblue" : "inherit"\n          }}\n          onClick={() => setIndex(listItemIndex)}\n        >\n          {listItem.heading}\n        </button>\n      ))}\n      <p>{item.content}</p>\n    </div>\n  );\n}\nrender(<Demo/>)\n')),Object(l.b)("h3",{id:"arguments"},"Arguments"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Argument"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default value"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"list"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Array"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"List of items for which the selection is used"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"undefined")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"initialIndex"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Initially selected index"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0")))),Object(l.b)("h3",{id:"returned-object"},"Returned Object"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Returned object attributes"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"index"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"int"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Index of currently selected index")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"item"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"any"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Currently selected item")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"setIndex"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"function"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Update selected index")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"setItem"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"function"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Update selected item")))))}o.isMDXComponent=!0},269:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),o=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=o(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),u=o(n),d=a,m=u["".concat(c,".").concat(d)]||u[d]||p[d]||l;return n?r.a.createElement(m,i(i({ref:t},s),{},{components:n})):r.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,c=new Array(l);c[0]=d;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<l;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);