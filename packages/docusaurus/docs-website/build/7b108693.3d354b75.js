(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{160:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return c}));var r=n(2),a=n(6),o=(n(0),n(269)),i={id:"use-mutation-observer",title:"use-mutation-observer",sidebar_label:"use-mutation-observer",original_id:"use-mutation-observer"},s={unversionedId:"use-mutation-observer",id:"version-v3.7.0/use-mutation-observer",isDocsHomePage:!1,title:"use-mutation-observer",description:"@rooks/use-mutation-observer",source:"@site/versioned_docs/version-v3.7.0/use-mutation-observer.md",slug:"/use-mutation-observer",permalink:"/docs/use-mutation-observer",version:"v3.7.0",sidebar_label:"use-mutation-observer",sidebar:"version-v3.7.0/docs",previous:{title:"use-mouse",permalink:"/docs/use-mouse"},next:{title:"use-mutation-observer-ref",permalink:"/docs/use-mutation-observer-ref"}},u=[{value:"Mutation Observer hook for React.",id:"mutation-observer-hook-for-react",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Importing the hook",id:"importing-the-hook",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Arguments",id:"arguments",children:[]}],b={rightToc:u};function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"rooksuse-mutation-observer"},"@rooks/use-mutation-observer"),Object(o.b)("h3",{id:"mutation-observer-hook-for-react"},"Mutation Observer hook for React."),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://github.com/imbhargav5/rooks/workflows/Node%20CI/badge.svg",alt:"Build Status"})),Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/npm/v/@rooks/use-mutation-observer/latest.svg",alt:null}))," ",Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/npm/l/@rooks/use-mutation-observer.svg",alt:null}))," ",Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/npm/dt/@rooks/use-mutation-observer.svg",alt:null}))," ",Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/david/imbhargav5/rooks.svg?path=packages%2Fmutation-observer",alt:null}))),Object(o.b)("a",{href:"https://spectrum.chat/rooks"},Object(o.b)("img",{src:"https://withspectrum.github.io/badge/badge.svg",alt:"Join the community on Spectrum"})),Object(o.b)("h3",{id:"installation"},"Installation"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"npm install --save @rooks/use-mutation-observer\n")),Object(o.b)("h3",{id:"importing-the-hook"},"Importing the hook"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'import useMutationObserver from "@rooks/use-mutation-observer"\n')),Object(o.b)("h3",{id:"usage"},"Usage"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'function Demo() {\n  const myRef = useRef();\n  const [mutationCount, setMutationCount] = useState(0);\n  const incrementMutationCount = () => {\n    return setMutationCount(mutationCount + 1);\n  };\n  useMutationObserver(myRef, incrementMutationCount);\n  const [XOffset, setXOffset] = useState(0);\n  const [YOffset, setYOffset] = useState(300);\n  return (\n    <>\n      <div\n        style={{\n          width: 300,\n          background: "lightblue",\n          padding: "10px",\n          position: "absolute",\n          left: XOffset,\n          top: YOffset\n        }}\n        ref={myRef}\n      >\n        <div\n          style={{\n            resize: "both",\n            overflow: "auto",\n            background: "white",\n            color: "blue",\n            maxWidth: "100%"\n          }}\n        >\n          <p>\n            Resize this div as you see fit. To demonstrate that it also updates\n            on child dom nodes resize\n          </p>\n        </div>\n        <h2>Bounds</h2>\n        <p>\n          <button onClick={() => setXOffset(XOffset - 5)}> Move Left </button>\n          <button onClick={() => setXOffset(XOffset + 5)}> Move Right </button>\n        </p>\n        <p>\n          <button onClick={() => setYOffset(YOffset - 5)}> Move Up </button>\n          <button onClick={() => setYOffset(YOffset + 5)}> Move Down </button>\n        </p>\n      </div>\n      <div style={{ height: 500 }} onClick={incrementMutationCount}>\n        <pre>Mutation count {mutationCount}</pre>\n      </div>\n    </>\n  );\n}\n\nrender(<Demo/>)\n')),Object(o.b)("h3",{id:"arguments"},"Arguments"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Argument"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default value"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"ref"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"React ref"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Ref which should be observed for Mutations"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"undefined")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"callback"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"function"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Function which should be invoked on mutation. It is called with the ",Object(o.b)("inlineCode",{parentName:"td"},"mutationList")," and ",Object(o.b)("inlineCode",{parentName:"td"},"observer")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"undefined")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"config"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"object"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Mutation Observer configuration"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"{attributes: true,,characterData: true,,subtree: true,,childList: true}")))))}c.isMDXComponent=!0},269:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),c=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,b=u(e,["components","mdxType","originalType","parentName"]),l=c(n),p=r,d=l["".concat(i,".").concat(p)]||l[p]||m[p]||o;return n?a.a.createElement(d,s(s({ref:t},b),{},{components:n})):a.a.createElement(d,s({ref:t},b))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var b=2;b<o;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);