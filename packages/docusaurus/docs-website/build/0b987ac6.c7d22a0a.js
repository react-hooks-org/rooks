(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{269:function(e,t,i){"use strict";i.d(t,"a",(function(){return p})),i.d(t,"b",(function(){return m}));var n=i(0),a=i.n(n);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function b(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var c=a.a.createContext({}),s=function(e){var t=a.a.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},p=function(e){var t=s(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),p=s(i),d=n,m=p["".concat(r,".").concat(d)]||p[d]||u[d]||o;return i?a.a.createElement(m,l(l({ref:t},c),{},{components:i})):a.a.createElement(m,l({ref:t},c))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,r=new Array(o);r[0]=d;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var c=2;c<o;c++)r[c]=i[c];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,i)}d.displayName="MDXCreateElement"},61:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return r})),i.d(t,"metadata",(function(){return l})),i.d(t,"rightToc",(function(){return b})),i.d(t,"default",(function(){return s}));var n=i(2),a=i(6),o=(i(0),i(269)),r={id:"use-visibility-sensor",title:"use-visibility-sensor",sidebar_label:"use-visibility-sensor",original_id:"use-visibility-sensor"},l={unversionedId:"use-visibility-sensor",id:"version-3.5.0/use-visibility-sensor",isDocsHomePage:!1,title:"use-visibility-sensor",description:"@rooks/use-visibility-sensor",source:"@site/versioned_docs/version-3.5.0/use-visibility-sensor.md",slug:"/use-visibility-sensor",permalink:"/docs/3.5.0/use-visibility-sensor",version:"3.5.0",sidebar_label:"use-visibility-sensor",sidebar:"version-3.5.0/docs",previous:{title:"use-toggle",permalink:"/docs/3.5.0/use-toggle"},next:{title:"use-will-unmount",permalink:"/docs/3.5.0/use-will-unmount"}},b=[{value:"Visibility sensor hook for React.",id:"visibility-sensor-hook-for-react",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Importing the hook",id:"importing-the-hook",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Demo",id:"demo",children:[{value:"Returned Object keys",id:"returned-object-keys",children:[]}]},{value:"Options",id:"options",children:[]},{value:"Todo",id:"todo",children:[]}],c={rightToc:b};function s(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"rooksuse-visibility-sensor"},"@rooks/use-visibility-sensor"),Object(o.b)("h3",{id:"visibility-sensor-hook-for-react"},"Visibility sensor hook for React."),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://github.com/imbhargav5/rooks/workflows/Node%20CI/badge.svg",alt:"Build Status"})),Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/npm/v/@rooks/use-visibility-sensor/latest.svg",alt:null}))," ",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/npm/l/@rooks/use-visibility-sensor.svg",alt:null}))," ",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/npm/dt/@rooks/use-visibility-sensor.svg",alt:null}))," ",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/david/imbhargav5/rooks.svg?path=packages%2Fvisibility-sensor",alt:null}))),Object(o.b)("a",{href:"https://spectrum.chat/rooks"},Object(o.b)("img",{src:"https://withspectrum.github.io/badge/badge.svg",alt:"Join the community on Spectrum"})),Object(o.b)("h3",{id:"installation"},"Installation"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"npm install --save @rooks/use-visibility-sensor\n")),Object(o.b)("h3",{id:"importing-the-hook"},"Importing the hook"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'import useVisibilitySensor from "@rooks/use-visibility-sensor"\n')),Object(o.b)("h3",{id:"usage"},"Usage"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'\nfunction Demo() {\n    const rootNode = useRef(null);\n    const { isVisible, visibilityRect } = useVisibilitySensor(rootNode, {\n        intervalCheck: false,\n        scrollCheck: true,\n        resizeCheck: true\n    });\n    return (\n        <div ref={rootNode}>\n        <p>\n            {isVisible ? "Visible" : isVisible === null ? "Null" : "Not Visible"}\n        </p>\n        </div>\n    );\n}\n\nrender(<Demo/>)\n')),Object(o.b)("p",null,"It checks whether an element has scrolled into view or not. A lot of the logic is taken from ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/joshwnj/react-visibility-sensor"}),"react-visibility-sensor")," and is rewritten for the hooks proposal."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note:")," This is using the new ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactjs.org/docs/hooks-intro.html"}),"React Hooks API Proposal"),"\nwhich is subject to change until React 16.7 final."),Object(o.b)("p",{parentName:"blockquote"},"You'll need to install ",Object(o.b)("inlineCode",{parentName:"p"},"react"),", ",Object(o.b)("inlineCode",{parentName:"p"},"react-dom"),", etc at ",Object(o.b)("inlineCode",{parentName:"p"},"^16.7.0-alpha.0"))),Object(o.b)("h2",{id:"demo"},"Demo"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://gyazo.com/98634bb2a962733670d798d1e754d63e"}),Object(o.b)("img",Object(n.a)({parentName:"a"},{src:"https://i.gyazo.com/98634bb2a962733670d798d1e754d63e.gif",alt:"Image from Gyazo"})))),Object(o.b)("h3",{id:"returned-object-keys"},"Returned Object keys"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Returned object attributes"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"isVisible"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Boolean"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Is Ref visible or not")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"visibilityRect"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Object"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"VisibilityRectangle containing coordinates of the container")))),Object(o.b)("h2",{id:"options"},"Options"),Object(o.b)("p",null,"The first argument of the ",Object(o.b)("inlineCode",{parentName:"p"},"useVisibilitySensor")," hook is a ref, the second argument is an options object. The available options are as follow:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"intervalCheck: false")," - Accepts ",Object(o.b)("inlineCode",{parentName:"p"},"int | bool"),", if an ",Object(o.b)("inlineCode",{parentName:"p"},"int")," is supplied, that will be the interval in ",Object(o.b)("inlineCode",{parentName:"p"},"ms")," and it keeps checking for visibility"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"partialVisibility: false")," - Accepts ",Object(o.b)("inlineCode",{parentName:"p"},"bool | string")," : Tells the hook if partial visibility should be considered as visibility or not. Accepts ",Object(o.b)("inlineCode",{parentName:"p"},"false")," and directions ",Object(o.b)("inlineCode",{parentName:"p"},"top"),", ",Object(o.b)("inlineCode",{parentName:"p"},"bottom"),", ",Object(o.b)("inlineCode",{parentName:"p"},"left")," and ",Object(o.b)("inlineCode",{parentName:"p"},"right")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"containment: null")," - A ",Object(o.b)("inlineCode",{parentName:"p"},"DOMNode")," element which defaults to ",Object(o.b)("inlineCode",{parentName:"p"},"window"),". The element relative to which visibility is checked against"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"scrollCheck: true")," - A ",Object(o.b)("inlineCode",{parentName:"p"},"bool")," to determine whether to check for scroll behavior or not"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"scrollDebounce: 250")," - The debounce ms for scroll"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"scrollThrottle: -1")," - The throttle ms for scroll. If throttle > -1, debounce is ignored."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"resizeCheck: false")," - A ",Object(o.b)("inlineCode",{parentName:"p"},"bool")," to determine whether to check for resize behavior or not"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"resizeDebounce: 250")," - The debounce ms for resize"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"resizeThrottle: -1")," - The throttle ms for resize. If throttle > -1, debounce is ignored."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"shouldCheckOnMount: true")," - A ",Object(o.b)("inlineCode",{parentName:"p"},"bool")," which determines whether an initial check on first render should happen or not."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"minTopValue: 0")," - An ",Object(o.b)("inlineCode",{parentName:"p"},"int")," top value to determine what amount of top visibility should be considered for ",Object(o.b)("inlineCode",{parentName:"p"},"visibility")),Object(o.b)("h2",{id:"todo"},"Todo"),Object(o.b)("ul",{className:"contains-task-list"},Object(o.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(o.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Init"),Object(o.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(o.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Scroll and Resize support"),Object(o.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(o.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Debounce and throttling"),Object(o.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(o.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Option to opt-out of initial check on mount"),Object(o.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(o.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Documentation of all options"),Object(o.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(o.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Tests ",Object(o.b)("em",{parentName:"li"}," WIP ")),Object(o.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(o.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","More examples ",Object(o.b)("em",{parentName:"li"}," WIP "))))}s.isMDXComponent=!0}}]);