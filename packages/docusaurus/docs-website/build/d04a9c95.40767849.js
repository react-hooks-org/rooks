(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{228:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return b}));var n=r(2),a=r(6),o=(r(0),r(269)),l={id:"use-throttle",title:"use-throttle",sidebar_label:"use-throttle",original_id:"use-throttle"},i={unversionedId:"use-throttle",id:"version-v3.6.0/use-throttle",isDocsHomePage:!1,title:"use-throttle",description:"@rooks/use-throttle",source:"@site/versioned_docs/version-v3.6.0/use-throttle.md",slug:"/use-throttle",permalink:"/docs/v3.6.0/use-throttle",version:"v3.6.0",sidebar_label:"use-throttle",sidebar:"version-v3.6.0/docs",previous:{title:"use-sessionstorage",permalink:"/docs/v3.6.0/use-sessionstorage"},next:{title:"use-time-ago",permalink:"/docs/v3.6.0/use-time-ago"}},c=[{value:"Throttle custom hook for React",id:"throttle-custom-hook-for-react",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Importing the hook",id:"importing-the-hook",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Arguments",id:"arguments",children:[]}],u={rightToc:c};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"rooksuse-throttle"},"@rooks/use-throttle"),Object(o.b)("h3",{id:"throttle-custom-hook-for-react"},"Throttle custom hook for React"),Object(o.b)("h3",{id:"installation"},"Installation"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"npm install --save @rooks/use-throttle\n")),Object(o.b)("h3",{id:"importing-the-hook"},"Importing the hook"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'import useThrottle from "@rooks/use-throttle"\n')),Object(o.b)("h3",{id:"usage"},"Usage"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jss"}),"function ThrottleDemo() {\n  const [number, setNumber] = useState(0);\n  const addNumber = () => setNumber(number + 1);\n  const [addNumberThrottled, isReady] = useThrottle(addNumber, 1000);\n  // isReady is a boolean that tells you whether calling addNumberThrottled at that point\n  // will fire or not.\n  // Once the timeout of 1000ms finishes, isReady will become true to indicate that the next time \n  // addNumberThrottled is called it will run right away.\n  return (\n    <>\n      <h1>Number: {number}</h1>\n      <p>Click really fast.</p>\n      <button onClick={addNumber}>Add number</button>\n      <button onClick={addNumberThrottled}>Add number throttled</button>\n    </>\n  );\n}\n")),Object(o.b)("h3",{id:"arguments"},"Arguments"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Argument"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default value"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"callback (required)"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Function that needs to be throttle"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"undefined")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"timeout (optional)"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Time to throttle the callback in ms"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"300")))))}b.isMDXComponent=!0},269:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),b=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=b(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=b(r),p=n,m=s["".concat(l,".").concat(p)]||s[p]||d[p]||o;return r?a.a.createElement(m,i(i({ref:t},u),{},{components:r})):a.a.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);