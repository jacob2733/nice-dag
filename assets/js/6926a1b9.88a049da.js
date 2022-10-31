"use strict";(self.webpackChunkecdx=self.webpackChunkecdx||[]).push([[553],{3483:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),d=["components"],i={sidebar_position:6},c="Add Node to DAG",l={unversionedId:"tutorial-vue3/node-creation",id:"tutorial-vue3/node-creation",title:"Add Node to DAG",description:"In terms of editable DAG, Nice-DAG supports adding nodes to existing DAG diagram. The example extends Drag And Drop (Edge).",source:"@site/docs/tutorial-vue3/node-creation.md",sourceDirName:"tutorial-vue3",slug:"/tutorial-vue3/node-creation",permalink:"/nice-dag/docs/tutorial-vue3/node-creation",editUrl:"https://github.com/eBay/nice-dag/tree/nice-dag-docusaurus/docs/tutorial-vue3/node-creation.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Drag And Drop (Edge)",permalink:"/nice-dag/docs/tutorial-vue3/edge-drag-drop"},next:{title:"Remove a Node",permalink:"/nice-dag/docs/tutorial-vue3/node-deletion"}},p={},s=[{value:"Step 1: Add a DOM node handling node creation",id:"step-1-add-a-dom-node-handling-node-creation",level:2},{value:"Step 2: Add an event listener to create node",id:"step-2-add-an-event-listener-to-create-node",level:2}],u={toc:s};function g(e){var n=e.components,t=(0,a.Z)(e,d);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"add-node-to-dag"},"Add Node to DAG"),(0,o.kt)("p",null,"In terms of editable DAG, Nice-DAG supports adding nodes to existing DAG diagram. The example extends ",(0,o.kt)("a",{parentName:"p",href:"./edge-drag-drop"},"Drag And Drop (Edge)"),"."),(0,o.kt)("h2",{id:"step-1-add-a-dom-node-handling-node-creation"},"Step 1: Add a DOM node handling node creation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'<template>\n  <div>\n    <div><button>Add</button></div>\n    <div className="my-first-dag" ref="niceDagEl" />\n    ...\n  </div>\n</template>\n\n<script>\n...\nexport default {\n  name: "MyFirstDag",\n  ...\n};\n<\/script>\n')),(0,o.kt)("h2",{id:"step-2-add-an-event-listener-to-create-node"},"Step 2: Add an event listener to create node"),(0,o.kt)("p",null,"The node creation is realized by a ",(0,o.kt)("a",{parentName:"p",href:"/nice-dag/docs/api-ref/nice-dag"},"NiceDag")," API."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'<template>\n  <div>\n    <div><button @click="addNode">Add</button></div>\n    <div className="my-first-dag" ref="niceDagEl" />\n    <NiceDagNodes v-slot="slotProps" :niceDagReactive="niceDagReactive">\n      <SampleNode :node="slotProps.node"/>\n    </NiceDagNodes>\n  </div>\n</template>\n\n<script>\nimport { NiceDagNodes, useNiceDag } from "@ebay/nice-dag-vue3";\nimport SampleNode from \'./SampleNode\';\n\nexport default {\n  name: "MyFirstDag",\n  ...\n  setup() {\n    let nodeCtnRef = 0;  //count of node is used to generate an unique id\n    const addNode = () => {\n      niceDagReactive.use().addNode(\n        {\n          id: `new-node-${nodeCtnRef}`,\n        },\n        { \n          x: 40,  //default posistion\n          y: 40,\n        }\n      );\n      nodeCtnRef = nodeCtnRef + 1;\n    };\n    ...\n    return {\n      addNode,\n      niceDagEl,\n      niceDagReactive,\n    };\n  },\n};\n<\/script>\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Notes:"),"\nTo call the ",(0,o.kt)("a",{parentName:"p",href:"/nice-dag/docs/api-ref/nice-dag#addnode"},"addNode")," method, you need to give an unique node id."))}g.isMDXComponent=!0},3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(t),g=a,m=u["".concat(c,".").concat(g)]||u[g]||s[g]||o;return t?r.createElement(m,d(d({ref:n},p),{},{components:t})):r.createElement(m,d({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,d=new Array(o);d[0]=u;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,d[1]=i;for(var l=2;l<o;l++)d[l]=t[l];return r.createElement.apply(null,d)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);