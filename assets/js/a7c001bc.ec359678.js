"use strict";(self.webpackChunkecdx=self.webpackChunkecdx||[]).push([[776],{1896:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>o,default:()=>c,frontMatter:()=>d,metadata:()=>p,toc:()=>g});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],d={sidebar_position:2},o="NiceDagConfig",p={unversionedId:"api-ref/nice-dag-config",id:"api-ref/nice-dag-config",title:"NiceDagConfig",description:"NiceDagConfig is a configuration object of DAG diagram.",source:"@site/docs/api-ref/nice-dag-config.md",sourceDirName:"api-ref",slug:"/api-ref/nice-dag-config",permalink:"/nice-dag/docs/api-ref/nice-dag-config",editUrl:"https://github.com/eBay/nice-dag/tree/nice-dag-docusaurus/docs/api-ref/nice-dag-config.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"NiceDag",permalink:"/nice-dag/docs/api-ref/nice-dag"},next:{title:"useNiceDag",permalink:"/nice-dag/docs/api-ref/useNiceDag"}},m={},g=[{value:"Properties",id:"properties",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"getNodeSize",id:"getnodesize",level:3},{value:"Enums",id:"enums",level:2},{value:"NiceDagMode",id:"nicedagmode",level:3},{value:"NiceDagModelType",id:"nicedagmodeltype",level:3},{value:"NiceDagDirection",id:"nicedagdirection",level:3},{value:"Configurations",id:"configurations",level:2},{value:"GridConfig",id:"gridconfig",level:3},{value:"MinimapConfig",id:"minimapconfig",level:3},{value:"GraphLabel",id:"graphlabel",level:3}],u={toc:g};function c(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"nicedagconfig"},"NiceDagConfig"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"NiceDagConfig")," is a configuration object of DAG diagram."),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mode"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Type of DAG diagram. Currently, there are only 2 mode, if DAG diagram should create joint node automatically."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#nicedagmode"},"NiceDagMode")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#nicedagmode"},"NiceDagMode.DEFAULT"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"graphLabel"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"GraphLabel is the object derived from dagre"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#graphlabel"},"GraphLabel")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'{rankdir: "LR",  ranksep: 60,  edgesep: 10}'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gridConfig"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Gird ",(0,l.kt)("a",{parentName:"td",href:"#gridconfig"},"Config"),". It is only applicable when DAG view is editable."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/nice-dag/docs/dag-model/geometry#size"},"Size")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'color: "blue",  size: 40}'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"modelType"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#nicedagmodeltype"},"NiceDagModelType")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#nice-dag-model-hierarchy"},"NiceDagModelType.HIERARCHY"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"edgeConnectorType"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Default edge connector type, which deterimines the position of node edges"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/nice-dag/docs/dag-model/node#edgeconnectortype"},"EdgeConnectorType")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/nice-dag/docs/dag-model/node#edge-connector-type-center-of-border"},"EdgeConnectorType.CENTER_OF_BORDER"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"edgeConnectorType"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Default edge connector type, which deterimines the position of joint node edges"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/nice-dag/docs/dag-model/node#edgeconnectortype"},"EdgeConnectorType")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/nice-dag/docs/dag-model/node#edge-connector-type-center"},"EdgeConnectorType.CENTER"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"subViewPadding"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Padding of subview"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/nice-dag/docs/dag-model/geometry#padding"},"Padding")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"{top: 40,bottom:20,left:20,right: 20}"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"minimapConfig"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Mini-map configuration"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#minimapconfig"},"MinimapConfig")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"{top: 40,bottom:20,left:20,right: 20}"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"getNodeSize"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"The method asks users to implement"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#genodesize"},"GetNodeSize")),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"interfaces"},"Interfaces"),(0,l.kt)("h3",{id:"getnodesize"},"getNodeSize"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"(node: Node) => Size;\n")),(0,l.kt)("p",null,"The method is ",(0,l.kt)("strong",{parentName:"p"},"MANDATORY"),". The key of ",(0,l.kt)("a",{parentName:"p",href:"#nicedagnodeprops"},"input")," is the node object. You can have different renders according to the content which the node contains. "),(0,l.kt)("h2",{id:"enums"},"Enums"),(0,l.kt)("h3",{id:"nicedagmode"},"NiceDagMode"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DEFAULT"),(0,l.kt)("td",{parentName:"tr",align:null},"No joint nodes created in default")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"WITH_JOINT_NODES"),(0,l.kt)("td",{parentName:"tr",align:null},"Create joint nodes in default")))),(0,l.kt)("h3",{id:"nicedagmodeltype"},"NiceDagModelType"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{name:"nice-dag-model-hierarchy"},"HIERARCHY")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"children")," of nodes represent a node group")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FLATTEN"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"parentId")," of nodes associate nodes as a node group")))),(0,l.kt)("h3",{id:"nicedagdirection"},"NiceDagDirection"),(0,l.kt)("p",null,"It is used to define DAG diagram direction"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LR"),(0,l.kt)("td",{parentName:"tr",align:null},"From left to right")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RL"),(0,l.kt)("td",{parentName:"tr",align:null},"From right to left")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TB"),(0,l.kt)("td",{parentName:"tr",align:null},"From top to button")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BT"),(0,l.kt)("td",{parentName:"tr",align:null},"From button to top")))),(0,l.kt)("h2",{id:"configurations"},"Configurations"),(0,l.kt)("h3",{id:"gridconfig"},"GridConfig"),(0,l.kt)("p",null,"Grid configuration object is used by editable view only."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gridSize"),(0,l.kt)("td",{parentName:"tr",align:null},"width & height of the grid"),(0,l.kt)("td",{parentName:"tr",align:null},"number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"color"),(0,l.kt)("td",{parentName:"tr",align:null},"link color (hex)"),(0,l.kt)("td",{parentName:"tr",align:null},"string")))),(0,l.kt)("h3",{id:"minimapconfig"},"MinimapConfig"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"className"),(0,l.kt)("td",{parentName:"tr",align:null},"Class name of minimap container"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"viewBoxClassName"),(0,l.kt)("td",{parentName:"tr",align:null},"Class name of view box in the minimap container"),(0,l.kt)("td",{parentName:"tr",align:null},"string")))),(0,l.kt)("h3",{id:"graphlabel"},"GraphLabel"),(0,l.kt)("p",null,"The graph label type is defined by dagre. For most cases, you can focus the following fields. "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ranksep"),(0,l.kt)("td",{parentName:"tr",align:null},"Distance of two nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"60")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"edgesep"),(0,l.kt)("td",{parentName:"tr",align:null},"Distance of two edges"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"10")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rankdir"),(0,l.kt)("td",{parentName:"tr",align:null},"Direction of diagram  ",(0,l.kt)("inlineCode",{parentName:"td"},"LR")," ",(0,l.kt)("inlineCode",{parentName:"td"},"RL")," ",(0,l.kt)("inlineCode",{parentName:"td"},"TB")," ",(0,l.kt)("inlineCode",{parentName:"td"},"BT")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"LR")))),(0,l.kt)("p",null,"For others, you can check it from dagre official website."))}c.isMDXComponent=!0},3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>c});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),p=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(o.Provider,{value:e},t.children)},g={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=d(t,["components","mdxType","originalType","parentName"]),u=p(a),c=r,k=u["".concat(o,".").concat(c)]||u[c]||g[c]||l;return a?n.createElement(k,i(i({ref:e},m),{},{components:a})):n.createElement(k,i({ref:e},m))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=u;var d={};for(var o in e)hasOwnProperty.call(e,o)&&(d[o]=e[o]);d.originalType=t,d.mdxType="string"==typeof t?t:r,i[1]=d;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);