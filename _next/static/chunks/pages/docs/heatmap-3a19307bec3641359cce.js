_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[78],{"+1NP":function(e,n,t){"use strict";n.__esModule=!0,n.default=function(e,n,t,a){return new Array(e).fill(1).reduce((function(e,i,c){return e.concat([{bin:c,bins:(0,r.default)(n,t,a)}])}),[])};var a,r=(a=t("mNV6"))&&a.__esModule?a:{default:a}},"+wNj":function(e,n,t){"use strict";function a(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}t.d(n,"a",(function(){return a}))},"201w":function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t("J4UP");function r(e){return Object(a.a)(e)}},"67po":function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a=t("uKU/"),r=t("xx0A"),i=Object(r.b)("domain","range","reverse","clamp","interpolate","nice","round","zero");function c(e){return i(Object(a.a)(),e)}},HbGN:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t("+wNj");function r(e,n){if(null==e)return{};var t,r,i=Object(a.a)(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}},IkWl:function(e){e.exports=JSON.parse('{"name":"@visx/demo-heatmap","description":"Standalone visx heatmap demo.","main":"index.tsx","private":true,"dependencies":{"@babel/runtime":"^7.8.4","@types/react":"^16","@types/react-dom":"^16","@visx/group":"latest","@visx/heatmap":"latest","@visx/mock-data":"latest","@visx/responsive":"latest","@visx/scale":"latest","react":"^16","react-dom":"^16","react-scripts-ts":"3.1.0","typescript":"^3"},"keywords":["visualization","d3","react","visx","heatmap"]}')},J4UP:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));const a=1/4294967296;function r(e=Math.random()){let n=0|(0<=e&&e<1?e/a:Math.abs(e));return()=>(n=1664525*n+1013904223|0,a*(n>>>0))}},JmwF:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var a=t("aWzz"),r=t.n(a),i=t("ERkP"),c=t.n(i),l=t("O94r"),o=t.n(l);function u(){return(u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function s(e){var n=e.top,t=void 0===n?0:n,a=e.left,r=void 0===a?0:a,i=e.transform,l=e.className,s=e.children,d=e.innerRef,p=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["top","left","transform","className","children","innerRef"]);return c.a.createElement("g",u({ref:d,className:o()("visx-group",l),transform:i||"translate("+r+", "+t+")"},p),s)}s.propTypes={top:r.a.number,left:r.a.number,transform:r.a.string,className:r.a.string,children:r.a.node,innerRef:r.a.oneOfType([r.a.string,r.a.func,r.a.object])}},Mjv1:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return d}));var a=t("ERkP"),r=t.n(a),i=t("Zydf"),c=t("i9k6"),l=t("IkWl");t.d(n,"packageJson",(function(){return l}));var o=r.a.createElement,u={background:i.a},s={color:"rgba(255,255,255,0.3)"};function d(){return o(c.a,{title:"Heatmaps",description:"<HeatmapCircle /> & <HeatmapRect />",exampleRenderer:i.b,exampleUrl:"/heatmaps",tileStyles:u,detailsStyles:s})}},Sg64:function(e,n,t){"use strict";t.r(n);var a=t("ERkP"),r=t.n(a),i=t("cxan"),c=t("HbGN"),l=t("O94r"),o=t.n(l),u=t("JmwF"),s=r.a.createElement;function d(e){var n=e.className,t=e.top,a=e.left,l=e.data,d=void 0===l?[]:l,p=e.binWidth,f=void 0===p?6:p,m=e.binHeight,h=void 0===m?6:m,y=e.x0,b=void 0===y?0:y,v=e.gap,x=void 0===v?1:v,g=e.xScale,S=e.yScale,O=e.colorScale,w=void 0===O?function(){}:O,j=e.opacityScale,N=void 0===j?function(){return 1}:j,E=e.bins,_=void 0===E?function(e){return e&&e.bins}:E,R=e.count,k=void 0===R?function(e){return e&&e.count}:R,P=e.children,C=Object(c.a)(e,["className","top","left","data","binWidth","binHeight","x0","gap","xScale","yScale","colorScale","opacityScale","bins","count","children"]),q=f-x,V=h-x,M=d.map((function(e,n){var t=g(n);return _(e).map((function(a,r){var i=k(a);return{bin:a,row:r,column:n,datum:e,width:q,height:V,gap:x,count:i,x:t+b,y:S(r)+x,color:w(i),opacity:N(i)}}))}));return P?s(r.a.Fragment,null,P(M)):s(u.a,{className:"visx-heatmap-rects",top:t,left:a},M.map((function(e){return e.map((function(e){return s("rect",Object(i.a)({key:"heatmap-tile-rect-".concat(e.row,"-").concat(e.column),className:o()("visx-heatmap-rect",n),width:e.width,height:e.height,x:e.x,y:e.y,fill:e.color,fillOpacity:e.opacity},C))}))})))}try{d.displayName="HeatmapRect",d.__docgenInfo={description:"",displayName:"HeatmapRect",props:{data:{defaultValue:{value:"[]"},description:"Array of column data (one per column desired) for the heatmap.",name:"data",required:!1,type:{name:"ColumnDatum[] | undefined"}},left:{defaultValue:null,description:"Left offset applied to heatmap wrapper g element.",name:"left",required:!1,type:{name:"number | undefined"}},top:{defaultValue:null,description:"Top offset applied to heatmap wrapper g element.",name:"top",required:!1,type:{name:"number | undefined"}},binWidth:{defaultValue:{value:6},description:"Width of a rect bin.",name:"binWidth",required:!1,type:{name:"number | undefined"}},binHeight:{defaultValue:{value:6},description:"Height of a rect bin.",name:"binHeight",required:!1,type:{name:"number | undefined"}},x0:{defaultValue:{value:0},description:"",name:"x0",required:!1,type:{name:"number | undefined"}},gap:{defaultValue:{value:1},description:"Pixel gap between heatmap rects.",name:"gap",required:!1,type:{name:"number | undefined"}},xScale:{defaultValue:null,description:"Given a column index, returns the x position of a rect cell.",name:"xScale",required:!0,type:{name:"(columnIndex: number) => number"}},yScale:{defaultValue:null,description:"Given a row index, returns the y position of a rect cell.",name:"yScale",required:!0,type:{name:"(rowIndex: number) => number"}},colorScale:{defaultValue:{value:"() => undefined"},description:"Given a count value, returns the desired rect fill color.",name:"colorScale",required:!1,type:{name:"ColorScale | undefined"}},opacityScale:{defaultValue:{value:"() => 1"},description:"Given a count value, returns the desired rect fill opacity.",name:"opacityScale",required:!1,type:{name:"OpacityScale | undefined"}},bins:{defaultValue:{value:"(d: any) => d && d.bins"},description:"Accessor that returns an array of cell BinDatums (rows) for the provided ColumnData.",name:"bins",required:!1,type:{name:"((column: ColumnDatum) => BinDatum[]) | undefined"}},count:{defaultValue:{value:"(d: any) => d && d.count"},description:"Accessor that returns the count for the provided Bin.",name:"count",required:!1,type:{name:"((bin: BinDatum) => number) | undefined"}},className:{defaultValue:null,description:"className to apply to each heatmap rect element.",name:"className",required:!1,type:{name:"string | undefined"}},children:{defaultValue:null,description:"Render function override, provided with heatmap.",name:"children",required:!1,type:{name:"((cells: RectCell<ColumnDatum, BinDatum>[][]) => ReactNode) | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../visx-heatmap/src/heatmaps/HeatmapRect.tsx#HeatmapRect"]={docgenInfo:d.__docgenInfo,name:"HeatmapRect",path:"../visx-heatmap/src/heatmaps/HeatmapRect.tsx#HeatmapRect"})}catch(x){}var p=r.a.createElement;function f(e){var n=e.className,t=e.top,a=e.left,l=e.data,s=void 0===l?[]:l,d=e.gap,f=void 0===d?1:d,m=e.radius,h=void 0===m?6:m,y=e.xScale,b=e.yScale,v=e.colorScale,x=void 0===v?function(){}:v,g=e.opacityScale,S=void 0===g?function(){return 1}:g,O=e.bins,w=void 0===O?function(e){return e&&e.bins}:O,j=e.count,N=void 0===j?function(e){return e&&e.count}:j,E=e.children,_=Object(c.a)(e,["className","top","left","data","gap","radius","xScale","yScale","colorScale","opacityScale","bins","count","children"]),R=h-f,k=s.map((function(e,n){var t=y(n);return w(e).map((function(a,r){var i=N(a);return{bin:a,row:r,column:n,datum:e,radius:h,gap:f,count:i,cx:h+t,cy:b(r)+f+h,r:R,opacity:S(i),color:x(i)}}))}));return E?p(r.a.Fragment,null,E(k)):p(u.a,{className:"visx-heatmap-circles",top:t,left:a},k.map((function(e){return e.map((function(e){return p("circle",Object(i.a)({key:"heatmap-tile-circle-".concat(e.row,"-").concat(e.column),className:o()("visx-heatmap-circle",n),r:e.r,cx:e.cx,cy:e.cy,fill:e.color,fillOpacity:e.opacity},_))}))})))}try{f.displayName="HeatmapCircle",f.__docgenInfo={description:"",displayName:"HeatmapCircle",props:{data:{defaultValue:{value:"[]"},description:"Array of column data (one per column desired) for the heatmap.",name:"data",required:!1,type:{name:"ColumnDatum[] | undefined"}},left:{defaultValue:null,description:"Left offset applied to heatmap wrapper g element.",name:"left",required:!1,type:{name:"number | undefined"}},top:{defaultValue:null,description:"Top offset applied to heatmap wrapper g element.",name:"top",required:!1,type:{name:"number | undefined"}},gap:{defaultValue:{value:1},description:"Pixel gap between heatmap circles.",name:"gap",required:!1,type:{name:"number | undefined"}},radius:{defaultValue:{value:6},description:"Pixel radius of heatmap circles.",name:"radius",required:!1,type:{name:"number | undefined"}},xScale:{defaultValue:null,description:"Given a column index, returns the x position of a circle cell.",name:"xScale",required:!0,type:{name:"(columnIndex: number) => number"}},yScale:{defaultValue:null,description:"Given a row index, returns the y position of a circle cell.",name:"yScale",required:!0,type:{name:"(rowIndex: number) => number"}},colorScale:{defaultValue:{value:"() => undefined"},description:"Given a count value, returns the desired circle fill color.",name:"colorScale",required:!1,type:{name:"ColorScale | undefined"}},opacityScale:{defaultValue:{value:"() => 1"},description:"Given a count value, returns the desired circle fill opacity.",name:"opacityScale",required:!1,type:{name:"OpacityScale | undefined"}},bins:{defaultValue:{value:"(column: any) => column && column.bins"},description:"Accessor that returns an array of cell BinDatums (rows) for the provided ColumnData.",name:"bins",required:!1,type:{name:"((column: ColumnDatum) => BinDatum[]) | undefined"}},count:{defaultValue:{value:"(cell: any) => cell && cell.count"},description:"Accessor that returns the count for the provided Bin.",name:"count",required:!1,type:{name:"((bin: BinDatum) => number) | undefined"}},className:{defaultValue:null,description:"className to apply to each heatmap circle element.",name:"className",required:!1,type:{name:"string | undefined"}},children:{defaultValue:null,description:"Render function override, provided with heatmap.",name:"children",required:!1,type:{name:"((cells: CircleCell<ColumnDatum, BinDatum>[][]) => ReactNode) | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../visx-heatmap/src/heatmaps/HeatmapCircle.tsx#HeatmapCircle"]={docgenInfo:f.__docgenInfo,name:"HeatmapCircle",path:"../visx-heatmap/src/heatmaps/HeatmapCircle.tsx#HeatmapCircle"})}catch(x){}var m=t("QnPE"),h=t("Mjv1"),y=r.a.createElement,b=[d,f],v=[h.default];n.default=function(){return y(m.a,{components:b,examples:v,readme:'# @visx/heatmap\n\n<a title="@visx/heatmap npm downloads" href="https://www.npmjs.com/package/@visx/heatmap">\n  <img src="https://img.shields.io/npm/dm/@visx/heatmap.svg?style=flat-square" />\n</a>\n\nA Heatmap is an arrangement of shapes where the data values are represented as colors.\n\n## Example\n\n<img style="display:block; width:34vw;" src="http://i.imgur.com/OzSD3X3.png">\n\n```js\n<HeatmapRect\n  data={data}\n  xScale={xScale}\n  yScale={yScale}\n  colorScale={colorScale}\n  opacityScale={opacityScale}\n  binWidth={bWidth}\n  binHeight={bWidth}\n  step={dStep}\n  gap={0}\n/>\n```\n\nHeatmaps generally require structure that has this shape:\n\n```js\n[\n  {\n    bin: 1,\n    bins: [\n      {\n        count: 20,\n        bin: 23,\n      },\n    ],\n  },\n];\n```\n\nHowever, you\'re welcome to use your own structure by defining `x`, `y`, `z` accessors such as:\n\n```js\n// Example accessors\nconst x = d => d.myBin;\nconst y = d => d.myBins;\nconst z = d => d.myCount;\n\n// Example scale with an accessors\nconst xScale = scaleLinear({\n  range: [0, xMax],\n  domain: extent(data, x),\n});\n```\n\n## Installation\n\n```\nnpm install --save @visx/heatmap\n```\n',visxPackage:"heatmap"})}},Zbhd:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var a=t("JKOu"),r=t("XAd9"),i=t("Cyas"),c=t("VBI3");function l(e,n,t,l){var o,u=Object(a.c)(e,n,t);switch((l=Object(r.a)(null==l?",f":l)).type){case"s":var s=Math.max(Math.abs(e),Math.abs(n));return null!=l.precision||isNaN(o=function(e,n){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(Object(i.a)(n)/3)))-Object(i.a)(Math.abs(e)))}(u,s))||(l.precision=o),Object(c.b)(l,s);case"":case"e":case"g":case"p":case"r":null!=l.precision||isNaN(o=function(e,n){return e=Math.abs(e),n=Math.abs(n)-e,Math.max(0,Object(i.a)(n)-Object(i.a)(e))+1}(u,Math.max(Math.abs(e),Math.abs(n))))||(l.precision=o-("e"===l.type));break;case"f":case"%":null!=l.precision||isNaN(o=function(e){return Math.max(0,-Object(i.a)(Math.abs(e)))}(u))||(l.precision=o-2*("%"===l.type))}return Object(c.a)(l)}},Zydf:function(e,n,t){"use strict";t.d(n,"a",(function(){return g}));var a=t("fGyu"),r=t("ERkP"),i=t.n(r),c=t("JmwF"),l=t("+1NP"),o=t.n(l),u=t("67po"),s=t("aWzz"),d=t.n(s),p=t("O94r"),f=t.n(p);function m(){return(m=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function h(e){var n=e.className,t=e.top,a=e.left,r=e.data,l=void 0===r?[]:r,o=e.gap,u=void 0===o?1:o,s=e.radius,d=void 0===s?6:s,p=e.xScale,h=e.yScale,y=e.colorScale,b=void 0===y?function(){}:y,v=e.opacityScale,x=void 0===v?function(){return 1}:v,g=e.bins,S=void 0===g?function(e){return e&&e.bins}:g,O=e.count,w=void 0===O?function(e){return e&&e.count}:O,j=e.children,N=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["className","top","left","data","gap","radius","xScale","yScale","colorScale","opacityScale","bins","count","children"]),E=d-u,_=l.map((function(e,n){var t=p(n);return S(e).map((function(a,r){var i=w(a);return{bin:a,row:r,column:n,datum:e,radius:d,gap:u,count:i,cx:d+t,cy:h(r)+u+d,r:E,opacity:x(i),color:b(i)}}))}));return j?i.a.createElement(i.a.Fragment,null,j(_)):i.a.createElement(c.a,{className:"visx-heatmap-circles",top:t,left:a},_.map((function(e){return e.map((function(e){return i.a.createElement("circle",m({key:"heatmap-tile-circle-"+e.row+"-"+e.column,className:f()("visx-heatmap-circle",n),r:e.r,cx:e.cx,cy:e.cy,fill:e.color,fillOpacity:e.opacity},N))}))})))}function y(){return(y=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function b(e){var n=e.className,t=e.top,a=e.left,r=e.data,l=void 0===r?[]:r,o=e.binWidth,u=void 0===o?6:o,s=e.binHeight,d=void 0===s?6:s,p=e.x0,m=void 0===p?0:p,h=e.gap,b=void 0===h?1:h,v=e.xScale,x=e.yScale,g=e.colorScale,S=void 0===g?function(){}:g,O=e.opacityScale,w=void 0===O?function(){return 1}:O,j=e.bins,N=void 0===j?function(e){return e&&e.bins}:j,E=e.count,_=void 0===E?function(e){return e&&e.count}:E,R=e.children,k=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["className","top","left","data","binWidth","binHeight","x0","gap","xScale","yScale","colorScale","opacityScale","bins","count","children"]),P=u-b,C=d-b,q=l.map((function(e,n){var t=v(n);return N(e).map((function(a,r){var i=_(a);return{bin:a,row:r,column:n,datum:e,width:P,height:C,gap:b,count:i,x:t+m,y:x(r)+b,color:S(i),opacity:w(i)}}))}));return R?i.a.createElement(i.a.Fragment,null,R(q)):i.a.createElement(c.a,{className:"visx-heatmap-rects",top:t,left:a},q.map((function(e){return e.map((function(e){return i.a.createElement("rect",y({key:"heatmap-tile-rect-"+e.row+"-"+e.column,className:f()("visx-heatmap-rect",n),width:e.width,height:e.height,x:e.x,y:e.y,fill:e.color,fillOpacity:e.opacity},k))}))})))}h.propTypes={data:d.a.array,left:d.a.number,top:d.a.number,gap:d.a.number,radius:d.a.number,xScale:d.a.func.isRequired,yScale:d.a.func.isRequired,bins:d.a.func,count:d.a.func,className:d.a.string,children:d.a.func},b.propTypes={data:d.a.array,left:d.a.number,top:d.a.number,binWidth:d.a.number,binHeight:d.a.number,x0:d.a.number,gap:d.a.number,xScale:d.a.func.isRequired,yScale:d.a.func.isRequired,bins:d.a.func,count:d.a.func,className:d.a.string,children:d.a.func};var v=t("201w"),x=i.a.createElement,g="#28272c",S=Object(v.a)(.41),O=o()(16,16,(function(e){return 150*e}),(function(e,n){return 25*(n-e)*S()}));function w(e,n){return Math.max.apply(Math,Object(a.a)(e.map(n)))}var j=function(e){return e.bins},N=function(e){return e.count},E=w(O,(function(e){return w(j(e),N)})),_=w(O,(function(e){return j(e).length})),R=Object(u.a)({domain:[0,O.length]}),k=Object(u.a)({domain:[0,_]}),P=Object(u.a)({range:["#77312f","#f33d15"],domain:[0,E]}),C=Object(u.a)({range:["#122549","#b4fbde"],domain:[0,E]}),q=Object(u.a)({range:[.1,1],domain:[0,E]}),V={top:10,left:20,right:20,bottom:110},M=function(e){var n,t,r=e.width,i=e.height,l=e.events,o=void 0!==l&&l,u=e.margin,s=void 0===u?V:u,d=e.separation,p=void 0===d?20:d,f=(r>s.left+s.right?r-s.left-s.right-p:r)/2,m=i-s.bottom-s.top,y=f/O.length,v=(n=[y,m/_],t=function(e){return e},Math.min.apply(Math,Object(a.a)(n.map(t)))/2);return R.range([0,f]),k.range([m,0]),r<10?null:x("svg",{width:r,height:i},x("rect",{x:0,y:0,width:r,height:i,rx:14,fill:g}),x(c.a,{top:s.top,left:s.left},x(h,{data:O,xScale:function(e){var n;return null!==(n=R(e))&&void 0!==n?n:0},yScale:function(e){var n;return null!==(n=k(e))&&void 0!==n?n:0},colorScale:P,opacityScale:q,radius:v,gap:2},(function(e){return e.map((function(e){return e.map((function(e){return x("circle",{key:"heatmap-circle-".concat(e.row,"-").concat(e.column),className:"visx-heatmap-circle",cx:e.cx,cy:e.cy,r:e.r,fill:e.color,fillOpacity:e.opacity,onClick:function(){if(o){var n=e.row,t=e.column;alert(JSON.stringify({row:n,column:t,bin:e.bin}))}}})}))}))}))),x(c.a,{top:s.top,left:f+s.left+p},x(b,{data:O,xScale:function(e){var n;return null!==(n=R(e))&&void 0!==n?n:0},yScale:function(e){var n;return null!==(n=k(e))&&void 0!==n?n:0},colorScale:C,opacityScale:q,binWidth:y,binHeight:y,gap:2},(function(e){return e.map((function(e){return e.map((function(e){return x("rect",{key:"heatmap-rect-".concat(e.row,"-").concat(e.column),className:"visx-heatmap-rect",width:e.width,height:e.height,x:e.x,y:e.y,fill:e.color,fillOpacity:e.opacity,onClick:function(){if(o){var n=e.row,t=e.column;alert(JSON.stringify({row:n,column:t,bin:e.bin}))}}})}))}))}))))};n.b=M;try{M.displayName="Example",M.__docgenInfo={description:"",displayName:"Example",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"{ top: number; right: number; bottom: number; left: number; } | undefined"}},separation:{defaultValue:{value:20},description:"",name:"separation",required:!1,type:{name:"number | undefined"}},events:{defaultValue:{value:!1},description:"",name:"events",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-heatmap/Example.tsx#Example"]={docgenInfo:M.__docgenInfo,name:"Example",path:"src/sandboxes/visx-heatmap/Example.tsx#Example"})}catch(T){}},cxan:function(e,n,t){"use strict";function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}t.d(n,"a",(function(){return a}))},i6Tx:function(e,n,t){"use strict";n.__esModule=!0,n.default=s;var a=o(t("aWzz")),r=o(t("RNvQ")),i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=l();if(n&&n.has(e))return n.get(e);var t={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var i=a?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(t,r,i):t[r]=e[r]}t.default=e,n&&n.set(e,t);return t}(t("ERkP")),c=o(t("LaGA"));function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function o(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function s(e){var n=e.className,t=e.children,a=e.debounceTime,l=void 0===a?300:a,o=e.ignoreDimensions,s=void 0===o?[]:o,d=e.parentSizeStyles,p=void 0===d?{width:"100%",height:"100%"}:d,f=e.enableDebounceLeadingCall,m=void 0===f||f,h=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["className","children","debounceTime","ignoreDimensions","parentSizeStyles","enableDebounceLeadingCall"]),y=(0,i.useRef)(null),b=(0,i.useRef)(0),v=(0,i.useState)({width:0,height:0,top:0,left:0}),x=v[0],g=v[1],S=(0,i.useMemo)((function(){var e=Array.isArray(s)?s:[s];return(0,r.default)((function(n){g((function(t){return Object.keys(t).filter((function(e){return t[e]!==n[e]})).every((function(n){return e.includes(n)}))?t:n}))}),l,{leading:m})}),[l,m,s]);return(0,i.useEffect)((function(){var e=new c.default((function(e){void 0===e&&(e=[]),e.forEach((function(e){var n=e.contentRect,t=n.left,a=n.top,r=n.width,i=n.height;b.current=window.requestAnimationFrame((function(){S({width:r,height:i,top:a,left:t})}))}))}));return y.current&&e.observe(y.current),function(){window.cancelAnimationFrame(b.current),e.disconnect(),S&&S.cancel&&S.cancel()}}),[S]),i.default.createElement("div",u({style:p,ref:y,className:n},h),t(u({},x,{ref:y.current,resize:S})))}s.propTypes={className:a.default.string,debounceTime:a.default.number,enableDebounceLeadingCall:a.default.bool,ignoreDimensions:a.default.oneOfType([a.default.any,a.default.arrayOf(a.default.any)]),children:a.default.func.isRequired}},i9k6:function(e,n,t){"use strict";t.d(n,"a",(function(){return m}));var a=t("zjfJ"),r=t("yFcC"),i=t.n(r),c=t("ERkP"),l=t.n(c),o=t("jvFD"),u=t.n(o),s=t("i6Tx"),d=t.n(s),p=l.a.createElement;function f(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function m(e){var n,t,r=e.description,c=e.detailsHeight,o=void 0===c?76:c,s=e.detailsStyles,m=e.exampleProps,h=e.exampleRenderer,y=e.exampleUrl,b=e.tileStyles,v=e.title;return p(l.a.Fragment,null,(n=y,t=p("div",{style:b,className:"jsx-713312509 gallery-tile"},p("div",{className:"jsx-713312509 image"},p(d.a,null,(function(e){var n=e.width,t=e.height;return l.a.createElement(h,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?f(Object(t),!0).forEach((function(n){Object(a.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({width:n,height:t+(v||r?o:0)},m))}))),(v||r)&&p("div",{style:s,className:"jsx-713312509 details"},v&&p("div",{className:"jsx-713312509 title"},v),r&&p("div",{className:"jsx-713312509 description"},p("pre",{className:"jsx-713312509"},r)))),n?p(u.a,{href:n},t):t),p(i.a,{id:"713312509"},["h3.jsx-713312509{margin-top:0;margin-left:40px;margin-bottom:0;}",".gallery-tile.jsx-713312509{background-color:white;margin:5px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:390px;-webkit-flex:1;-ms-flex:1;flex:1;min-width:300px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border-radius:14px;cursor:pointer;}",".image.jsx-713312509{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:hidden;}",".details.jsx-713312509{text-align:center;padding:15px 20px;color:#ffffff;}",".title.jsx-713312509{font-weight:900;line-height:0.9rem;}",".description.jsx-713312509{font-weight:300;font-size:14px;}","pre.jsx-713312509{margin:0;background-color:transparent;min-width:unset;}","@media (max-width:960px){.gallery-tile.jsx-713312509{min-width:45%;}}","@media (max-width:600px){.gallery-tile.jsx-713312509{min-width:100%;}}"]))}try{m.displayName="GalleryTile",m.__docgenInfo={description:"",displayName:"GalleryTile",props:{description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string | undefined"}},detailsHeight:{defaultValue:{value:76},description:"",name:"detailsHeight",required:!1,type:{name:"number | undefined"}},detailsStyles:{defaultValue:null,description:"",name:"detailsStyles",required:!1,type:{name:"CSSProperties | undefined"}},exampleRenderer:{defaultValue:null,description:"",name:"exampleRenderer",required:!0,type:{name:"ComponentClass<ExampleProps, any> | FunctionComponent<ExampleProps>"}},exampleProps:{defaultValue:null,description:"",name:"exampleProps",required:!1,type:{name:'(Pick<ExampleProps, Exclude<keyof ExampleProps, "width" | "height">> & Partial<Pick<ExampleProps, "width" | "height">>) | undefined'}},exampleUrl:{defaultValue:null,description:"",name:"exampleUrl",required:!1,type:{name:"string | undefined"}},tileStyles:{defaultValue:null,description:"",name:"tileStyles",required:!1,type:{name:"CSSProperties | undefined"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/GalleryTile.tsx#GalleryTile"]={docgenInfo:m.__docgenInfo,name:"GalleryTile",path:"src/components/GalleryTile.tsx#GalleryTile"})}catch(h){}},"l5+1":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/heatmap",function(){return t("Sg64")}])},mNV6:function(e,n,t){"use strict";n.__esModule=!0,n.default=function(e,n,t){void 0===n&&(n=r);void 0===t&&(t=a);return new Array(e).fill(1).reduce((function(a,r,i){return a.concat([{bin:n(i,e),count:t(i,e)}])}),[])};var a=function(e,n){return Math.random()*(25*(n-e))},r=function(e,n){return 150*e}},"uKU/":function(e,n,t){"use strict";t.d(n,"b",(function(){return l})),t.d(n,"a",(function(){return o}));var a=t("JKOu"),r=t("2+fR"),i=t("W1cA"),c=t("Zbhd");function l(e){var n=e.domain;return e.ticks=function(e){var t=n();return Object(a.a)(t[0],t[t.length-1],null==e?10:e)},e.tickFormat=function(e,t){var a=n();return Object(c.a)(a[0],a[a.length-1],null==e?10:e,t)},e.nice=function(t){null==t&&(t=10);var r,i,c=n(),l=0,o=c.length-1,u=c[l],s=c[o],d=10;for(s<u&&(i=u,u=s,s=i,i=l,l=o,o=i);d-- >0;){if((i=Object(a.b)(u,s,t))===r)return c[l]=u,c[o]=s,n(c);if(i>0)u=Math.floor(u/i)*i,s=Math.ceil(s/i)*i;else{if(!(i<0))break;u=Math.ceil(u*i)/i,s=Math.floor(s*i)/i}r=i}return e},e}function o(){var e=Object(r.b)();return e.copy=function(){return Object(r.a)(e,o())},i.b.apply(e,arguments),l(e)}},zjfJ:function(e,n,t){"use strict";function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.d(n,"a",(function(){return a}))}},[["l5+1",0,2,1,3,4,5,9,8,10]]]);