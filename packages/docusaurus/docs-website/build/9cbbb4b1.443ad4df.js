(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{190:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return c}));var r=n(2),a=n(6),o=(n(0),n(269)),i={id:"use-mutation-observer-ref",title:"use-mutation-observer-ref",sidebar_label:"use-mutation-observer-ref",original_id:"use-mutation-observer-ref"},u={unversionedId:"use-mutation-observer-ref",id:"version-v3.6.0/use-mutation-observer-ref",isDocsHomePage:!1,title:"use-mutation-observer-ref",description:"@rooks/use-mutation-observer-ref",source:"@site/versioned_docs/version-v3.6.0/use-mutation-observer-ref.md",slug:"/use-mutation-observer-ref",permalink:"/docs/v3.6.0/use-mutation-observer-ref",version:"v3.6.0",sidebar_label:"use-mutation-observer-ref",sidebar:"version-v3.6.0/docs",previous:{title:"use-mutation-observer",permalink:"/docs/v3.6.0/use-mutation-observer"},next:{title:"use-navigator-language",permalink:"/docs/v3.6.0/use-navigator-language"}},s=[{value:"A hook that tracks mutations of an element. It returns a callbackRef.",id:"a-hook-that-tracks-mutations-of-an-element-it-returns-a-callbackref",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Importing the hook",id:"importing-the-hook",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Arguments",id:"arguments",children:[]},{value:"Return value",id:"return-value",children:[]}],b={rightToc:s};function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"rooksuse-mutation-observer-ref"},"@rooks/use-mutation-observer-ref"),Object(o.b)("h3",{id:"a-hook-that-tracks-mutations-of-an-element-it-returns-a-callbackref"},"A hook that tracks mutations of an element. It returns a callbackRef."),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://github.com/imbhargav5/rooks/workflows/Node%20CI/badge.svg",alt:"Build Status"}))," ",Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/npm/v/@rooks/use-mutation-observer-ref/latest.svg",alt:null}))," ",Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/npm/l/@rooks/use-mutation-observer-ref.svg",alt:null}))," ",Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/bundlephobia/min/@rooks/use-mutation-observer-ref.svg",alt:null}))," ",Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/david/imbhargav5/rooks.svg?path=packages%2Fmutation-observer-ref",alt:null}))),Object(o.b)("a",{href:"https://spectrum.chat/rooks"},Object(o.b)("img",{src:"https://withspectrum.github.io/badge/badge.svg",alt:"Join the community on Spectrum"})),Object(o.b)("h3",{id:"installation"},"Installation"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"npm install --save @rooks/use-mutation-observer-ref\n")),Object(o.b)("h3",{id:"importing-the-hook"},"Importing the hook"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'import useMutationObserverRef from "@rooks/use-mutation-observer-ref"\n')),Object(o.b)("h3",{id:"usage"},"Usage"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'function Demo() {\n  const [mutationCount, setMutationCount] = useState(0);\n  const incrementMutationCount = () => {\n    return setMutationCount(mutationCount + 1);\n  };\n  const [myRef] = useMutationObserver(myRef, incrementMutationCount);\n  const [XOffset, setXOffset] = useState(0);\n  const [YOffset, setYOffset] = useState(300);\n  return (\n    <>\n      <div\n        style={{\n          width: 300,\n          background: "lightblue",\n          padding: "10px",\n          position: "absolute",\n          left: XOffset,\n          top: YOffset\n        }}\n        ref={myRef}\n      >\n        <div\n          style={{\n            resize: "both",\n            overflow: "auto",\n            background: "white",\n            color: "blue",\n            maxWidth: "100%"\n          }}\n        >\n          <p>\n            Resize this div as you see fit. To demonstrate that it also updates\n            on child dom nodes resize\n          </p>\n        </div>\n        <h2>Bounds</h2>\n        <p>\n          <button onClick={() => setXOffset(XOffset - 5)}> Move Left </button>\n          <button onClick={() => setXOffset(XOffset + 5)}> Move Right </button>\n        </p>\n        <p>\n          <button onClick={() => setYOffset(YOffset - 5)}> Move Up </button>\n          <button onClick={() => setYOffset(YOffset + 5)}> Move Down </button>\n        </p>\n      </div>\n      <div style={{ height: 500 }} onClick={incrementMutationCount}>\n        <pre>Mutation count {mutationCount}</pre>\n      </div>\n    </>\n  );\n}\n\nrender(<Demo/>)\n')),Object(o.b)("h3",{id:"arguments"},"Arguments"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Argument"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default value"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"callback"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"function"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Function which should be invoked on mutation. It is called with the ",Object(o.b)("inlineCode",{parentName:"td"},"mutationList")," and ",Object(o.b)("inlineCode",{parentName:"td"},"observer")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"undefined")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"config"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"object"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Mutation Observer configuration"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"{attributes: true,,characterData: true,,subtree: true,,childList: true}")))),Object(o.b)("h3",{id:"return-value"},"Return value"),Object(o.b)("p",null,"Returns an array with one element"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Argument"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"ref"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"React ref"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Ref which should be observed for Mutations")))))}c.isMDXComponent=!0},269:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),c=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},l=function(e){var t=c(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),l=c(n),p=r,d=l["".concat(i,".").concat(p)]||l[p]||m[p]||o;return n?a.a.createElement(d,u(u({ref:t},b),{},{components:n})):a.a.createElement(d,u({ref:t},b))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var b=2;b<o;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);