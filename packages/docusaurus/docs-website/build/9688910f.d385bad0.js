(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{186:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),o=(n(0),n(269)),c={id:"use-raf",title:"use-raf",sidebar_label:"use-raf",original_id:"use-raf"},i={unversionedId:"use-raf",id:"version-v3.7.0/use-raf",isDocsHomePage:!1,title:"use-raf",description:"@rooks/use-raf",source:"@site/versioned_docs/version-v3.7.0/use-raf.md",slug:"/use-raf",permalink:"/docs/use-raf",version:"v3.7.0",sidebar_label:"use-raf",sidebar:"version-v3.7.0/docs",previous:{title:"use-previous",permalink:"/docs/use-previous"},next:{title:"use-select",permalink:"/docs/use-select"}},s=[{value:"A continuously running requestAnimationFrame hook for React",id:"a-continuously-running-requestanimationframe-hook-for-react",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Importing the hook",id:"importing-the-hook",children:[]},{value:"Usage",id:"usage",children:[]}],l={rightToc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"rooksuse-raf"},"@rooks/use-raf"),Object(o.b)("h3",{id:"a-continuously-running-requestanimationframe-hook-for-react"},"A continuously running requestAnimationFrame hook for React"),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://github.com/imbhargav5/rooks/workflows/Node%20CI/badge.svg",alt:"Build Status"})),Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/npm/v/@rooks/use-raf/latest.svg",alt:null}))," ",Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/npm/l/@rooks/use-raf.svg",alt:null}))," ",Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/npm/dt/@rooks/use-raf.svg",alt:null}))," ",Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/david/imbhargav5/rooks.svg?path=packages%2Fraf",alt:null}))),Object(o.b)("a",{href:"https://spectrum.chat/rooks"},Object(o.b)("img",{src:"https://withspectrum.github.io/badge/badge.svg",alt:"Join the community on Spectrum"})),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://gyazo.com/8c7393678112dc0cee575cbff570096d"}),Object(o.b)("img",Object(r.a)({parentName:"a"},{src:"https://i.gyazo.com/8c7393678112dc0cee575cbff570096d.gif",alt:"Image from Gyazo"})))),Object(o.b)("h3",{id:"installation"},"Installation"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"npm install --save @rooks/use-raf\n")),Object(o.b)("h3",{id:"importing-the-hook"},"Importing the hook"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'import useRaf from "@rooks/use-raf";\n')),Object(o.b)("h3",{id:"usage"},"Usage"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'let angle = 0;\nfunction updateAngle() {\n  angle = (angle + 3) % 360;\n  return (angle * Math.PI) / 180;\n}\n\nfunction Demo() {\n  const { value: shouldRun, toggleValue: toggleShouldRun } = useToggle(true);\n  const myRef = useRef();\n  const canvasRef = useRef();\n  useRaf(() => {\n    if (canvasRef && canvasRef.current) {\n      const screenRatio = window.devicePixelRatio || 1;\n      let angle = updateAngle();\n      const canvas = canvasRef.current;\n      var ctx = canvas.getContext("2d");\n      ctx.save();\n      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);\n      ctx.scale(screenRatio, screenRatio);\n      ctx.fillStyle = "midnightblue";\n      ctx.globalAlpha = 1;\n      ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);\n      ctx.fillStyle = "yellow";\n      ctx.lineWidth = 2;\n      ctx.translate(50, 50);\n      ctx.rotate(angle);\n      ctx.fillRect(-20, -20, 40, 40);\n      ctx.restore();\n    }\n  }, shouldRun);\n\n  return (\n    <>\n      <h2>\n        Request animation frame is now {shouldRun ? "" : "in"}active. Click to\n        toggle.\n      </h2>\n      <p>\n        <button onClick={toggleShouldRun}>Toggle Raf</button>{" "}\n      </p>\n      <canvas\n        ref={canvasRef}\n        style={{ height: `100px`, width: `100%`, background: "grey" }}\n      />\n    </>\n  );\n}\n\nrender(<Demo />);\n')))}u.isMDXComponent=!0},269:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return g}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,g=p["".concat(c,".").concat(b)]||p[b]||f[b]||o;return n?a.a.createElement(g,i(i({ref:t},l),{},{components:n})):a.a.createElement(g,i({ref:t},l))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);