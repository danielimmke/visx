_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[98],{"+fu8":function(n,t,o){"use strict";o.d(t,"b",(function(){return s})),o.d(t,"a",(function(){return f}));var e=o("aWzz"),r=o.n(e),i=o("ERkP"),a=o.n(i),u=o("O94r"),l=o.n(u);function c(){return(c=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&(n[e]=o[e])}return n}).apply(this,arguments)}var s={position:"absolute",backgroundColor:"white",color:"#666666",padding:".3rem .5rem",borderRadius:"3px",fontSize:"14px",boxShadow:"0 1px 2px rgba(33,33,33,0.2)",lineHeight:"1em",pointerEvents:"none"};function f(n){var t=n.className,o=n.top,e=n.left,r=n.offsetLeft,i=void 0===r?10:r,u=n.offsetTop,f=void 0===u?10:u,p=n.style,d=void 0===p?s:p,h=n.children,v=n.unstyled,m=void 0!==v&&v,g=n.applyPositionStyle,b=void 0!==g&&g,y=function(n,t){if(null==n)return{};var o,e,r={},i=Object.keys(n);for(e=0;e<i.length;e++)o=i[e],t.indexOf(o)>=0||(r[o]=n[o]);return r}(n,["className","top","left","offsetLeft","offsetTop","style","children","unstyled","applyPositionStyle"]);return a.a.createElement("div",c({className:l()("visx-tooltip",t),style:c({top:null==o||null==f?o:o+f,left:null==e||null==i?e:e+i},b&&{position:"absolute"},!m&&d)},y),h)}f.propTypes={children:r.a.node,className:r.a.string,left:r.a.number,offsetLeft:r.a.number,offsetTop:r.a.number,top:r.a.number,applyPositionStyle:r.a.bool,unstyled:r.a.bool}},"67po":function(n,t,o){"use strict";o.d(t,"a",(function(){return a}));var e=o("uKU/"),r=o("xx0A"),i=Object(r.b)("domain","range","reverse","clamp","interpolate","nice","round","zero");function a(n){return i(Object(e.a)(),n)}},"91Pn":function(n,t,o){"use strict";t.a=Math.random},E0Ok:function(n,t,o){"use strict";var e,r=o("ERkP"),i=o.n(r),a=o("JmwF"),u=o("XpFG"),l=o("oqwl"),c=o("67po"),s=o("uLXA"),f=o.n(s),p=o("xc3W"),d=o("+fu8"),h=o("krkd"),v=o("Tkov"),m=o("jpI8"),g=i.a.createElement,b=f()(600,.5).filter((function(n,t){return t<600})),y=function(n){return n[0]},x=function(n){return n[1]};t.a=Object(p.a)((function(n){var t=n.width,o=n.height,i=n.showControls,s=void 0===i||i,f=n.hideTooltip,p=n.showTooltip,w=n.tooltipOpen,O=n.tooltipData,M=n.tooltipLeft,T=n.tooltipTop;if(t<10)return null;var k=Object(r.useState)(s),P=k[0],E=k[1],j=Object(r.useRef)(null),R=Object(r.useMemo)((function(){return Object(c.a)({domain:[1.3,2.2],range:[0,t],clamp:!0})}),[t]),S=Object(r.useMemo)((function(){return Object(c.a)({domain:[.75,1.6],range:[o,0],clamp:!0})}),[o]),L=Object(r.useMemo)((function(){return Object(h.a)({x:function(n){var t;return null!==(t=R(y(n)))&&void 0!==t?t:0},y:function(n){var t;return null!==(t=S(x(n)))&&void 0!==t?t:0},width:t,height:o})(b)}),[t,o,R,S]),N=Object(r.useCallback)((function(n){if(e&&clearTimeout(e),j.current){var t=Object(m.a)(j.current,n);if(t){var o=L.find(t.x,t.y,100);o&&p({tooltipLeft:R(y(o.data)),tooltipTop:S(x(o.data)),tooltipData:o.data})}}}),[R,S,p,L]),_=Object(r.useCallback)((function(){e=window.setTimeout((function(){f()}),300)}),[f]);return g("div",null,g("svg",{width:t,height:o,ref:j},g(l.a,{id:"dots-pink"}),g("rect",{width:t,height:o,rx:14,fill:"url(#dots-pink)",onMouseMove:N,onMouseLeave:_,onTouchMove:N,onTouchEnd:_}),g(a.a,{pointerEvents:"none"},b.map((function(n,t){return g(u.a,{key:"point-".concat(n[0],"-").concat(t),className:"dot",cx:R(y(n)),cy:S(x(n)),r:t%3===0?2:3,fill:O===n?"white":"#f6c431"})})),P&&L.polygons().map((function(n,t){return g(v.a,{key:"polygon-".concat(t),polygon:n,fill:"white",stroke:"white",strokeWidth:1,strokeOpacity:.2,fillOpacity:O===n.data?.5:0})})))),w&&O&&null!=M&&null!=T&&g(d.a,{left:M+10,top:T+10},g("div",null,g("strong",null,"x:")," ",y(O)),g("div",null,g("strong",null,"y:")," ",x(O))),s&&g("div",null,g("label",{style:{fontSize:12}},g("input",{type:"checkbox",checked:P,onChange:function(){return E(!P)}}),"\xa0Show voronoi point map")))}));try{Example.displayName="Example",Example.__docgenInfo={description:"",displayName:"Example",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},showControls:{defaultValue:null,description:"",name:"showControls",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-dots/Example.tsx#Example"]={docgenInfo:Example.__docgenInfo,name:"Example",path:"src/sandboxes/visx-dots/Example.tsx#Example"})}catch(w){}},"G/4L":function(n,t,o){"use strict";o.r(t),o.d(t,"randomUniform",(function(){return r})),o.d(t,"randomInt",(function(){return i})),o.d(t,"randomNormal",(function(){return a.a})),o.d(t,"randomLogNormal",(function(){return u})),o.d(t,"randomBates",(function(){return c})),o.d(t,"randomIrwinHall",(function(){return l})),o.d(t,"randomExponential",(function(){return s})),o.d(t,"randomPareto",(function(){return f})),o.d(t,"randomBernoulli",(function(){return p})),o.d(t,"randomGeometric",(function(){return d})),o.d(t,"randomBinomial",(function(){return m})),o.d(t,"randomGamma",(function(){return h})),o.d(t,"randomBeta",(function(){return v})),o.d(t,"randomWeibull",(function(){return g})),o.d(t,"randomCauchy",(function(){return b})),o.d(t,"randomLogistic",(function(){return y})),o.d(t,"randomPoisson",(function(){return x})),o.d(t,"randomLcg",(function(){return w.a}));var e=o("91Pn"),r=function n(t){function o(n,o){return n=null==n?0:+n,o=null==o?1:+o,1===arguments.length?(o=n,n=0):o-=n,function(){return t()*o+n}}return o.source=n,o}(e.a),i=function n(t){function o(n,o){return arguments.length<2&&(o=n,n=0),n=Math.floor(n),o=Math.floor(o)-n,function(){return Math.floor(t()*o+n)}}return o.source=n,o}(e.a),a=o("VEyW"),u=function n(t){var o=a.a.source(t);function e(){var n=o.apply(this,arguments);return function(){return Math.exp(n())}}return e.source=n,e}(e.a),l=function n(t){function o(n){return(n=+n)<=0?()=>0:function(){for(var o=0,e=n;e>1;--e)o+=t();return o+e*t()}}return o.source=n,o}(e.a),c=function n(t){var o=l.source(t);function e(n){if(0===(n=+n))return t;var e=o(n);return function(){return e()/n}}return e.source=n,e}(e.a),s=function n(t){function o(n){return function(){return-Math.log1p(-t())/n}}return o.source=n,o}(e.a),f=function n(t){function o(n){if((n=+n)<0)throw new RangeError("invalid alpha");return n=1/-n,function(){return Math.pow(1-t(),n)}}return o.source=n,o}(e.a),p=function n(t){function o(n){if((n=+n)<0||n>1)throw new RangeError("invalid p");return function(){return Math.floor(t()+n)}}return o.source=n,o}(e.a),d=function n(t){function o(n){if((n=+n)<0||n>1)throw new RangeError("invalid p");return 0===n?()=>1/0:1===n?()=>1:(n=Math.log1p(-n),function(){return 1+Math.floor(Math.log1p(-t())/n)})}return o.source=n,o}(e.a),h=function n(t){var o=a.a.source(t)();function e(n,e){if((n=+n)<0)throw new RangeError("invalid k");if(0===n)return()=>0;if(e=null==e?1:+e,1===n)return()=>-Math.log1p(-t())*e;var r=(n<1?n+1:n)-1/3,i=1/(3*Math.sqrt(r)),a=n<1?()=>Math.pow(t(),1/n):()=>1;return function(){do{do{var n=o(),u=1+i*n}while(u<=0);u*=u*u;var l=1-t()}while(l>=1-.0331*n*n*n*n&&Math.log(l)>=.5*n*n+r*(1-u+Math.log(u)));return r*u*a()*e}}return e.source=n,e}(e.a),v=function n(t){var o=h.source(t);function e(n,t){var e=o(n),r=o(t);return function(){var n=e();return 0===n?0:n/(n+r())}}return e.source=n,e}(e.a),m=function n(t){var o=d.source(t),e=v.source(t);function r(n,t){return n=+n,(t=+t)>=1?()=>n:t<=0?()=>0:function(){for(var r=0,i=n,a=t;i*a>16&&i*(1-a)>16;){var u=Math.floor((i+1)*a),l=e(u,i-u+1)();l<=a?(r+=u,i-=u,a=(a-l)/(1-l)):(i=u-1,a/=l)}for(var c=a<.5,s=o(c?a:1-a),f=s(),p=0;f<=i;++p)f+=s();return r+(c?p:i-p)}}return r.source=n,r}(e.a),g=function n(t){function o(n,o,e){var r;return 0===(n=+n)?r=n=>-Math.log(n):(n=1/n,r=t=>Math.pow(t,n)),o=null==o?0:+o,e=null==e?1:+e,function(){return o+e*r(-Math.log1p(-t()))}}return o.source=n,o}(e.a),b=function n(t){function o(n,o){return n=null==n?0:+n,o=null==o?1:+o,function(){return n+o*Math.tan(Math.PI*t())}}return o.source=n,o}(e.a),y=function n(t){function o(n,o){return n=null==n?0:+n,o=null==o?1:+o,function(){var e=t();return n+o*Math.log(e/(1-e))}}return o.source=n,o}(e.a),x=function n(t){var o=h.source(t),e=m.source(t);function r(n){return function(){for(var r=0,i=n;i>16;){var a=Math.floor(.875*i),u=o(a)();if(u>i)return r+e(a-1,i/u)();r+=a,i-=u}for(var l=-Math.log1p(-t()),c=0;l<=i;++c)l-=Math.log1p(-t());return r+c}}return r.source=n,r}(e.a),w=o("J4UP")},JmwF:function(n,t,o){"use strict";o.d(t,"a",(function(){return s}));var e=o("aWzz"),r=o.n(e),i=o("ERkP"),a=o.n(i),u=o("O94r"),l=o.n(u);function c(){return(c=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&(n[e]=o[e])}return n}).apply(this,arguments)}function s(n){var t=n.top,o=void 0===t?0:t,e=n.left,r=void 0===e?0:e,i=n.transform,u=n.className,s=n.children,f=n.innerRef,p=function(n,t){if(null==n)return{};var o,e,r={},i=Object.keys(n);for(e=0;e<i.length;e++)o=i[e],t.indexOf(o)>=0||(r[o]=n[o]);return r}(n,["top","left","transform","className","children","innerRef"]);return a.a.createElement("g",c({ref:f,className:l()("visx-group",u),transform:i||"translate("+r+", "+o+")"},p),s)}s.propTypes={top:r.a.number,left:r.a.number,transform:r.a.string,className:r.a.string,children:r.a.node,innerRef:r.a.oneOfType([r.a.string,r.a.func,r.a.object])}},LxZ5:function(n,t,o){"use strict";o.r(t);var e=o("ERkP"),r=o.n(e),i=o("6wy5"),a=o("E0Ok"),u=o("PVmh"),l=r.a.createElement;t.default=function(){return l(i.a,{component:a.a,title:"Dots",codeSandboxDirectoryName:"visx-dots",packageJson:u},"import React, { useMemo, useState, useCallback, useRef } from 'react';\nimport { Group } from '@visx/group';\nimport { Circle } from '@visx/shape';\nimport { GradientPinkRed } from '@visx/gradient';\nimport { scaleLinear } from '@visx/scale';\nimport genRandomNormalPoints, {\n  PointsRange,\n} from '@visx/mock-data/lib/generators/genRandomNormalPoints';\nimport { withTooltip, Tooltip } from '@visx/tooltip';\nimport { WithTooltipProvidedProps } from '@visx/tooltip/lib/enhancers/withTooltip';\nimport { voronoi, VoronoiPolygon } from '@visx/voronoi';\nimport { localPoint } from '@visx/event';\n\nconst points: PointsRange[] = genRandomNormalPoints(600, /* seed= */ 0.5).filter((_, i) => i < 600);\n\nconst x = (d: PointsRange) => d[0];\nconst y = (d: PointsRange) => d[1];\n\nexport type DotsProps = {\n  width: number;\n  height: number;\n  showControls?: boolean;\n};\n\nlet tooltipTimeout: number;\n\nexport default withTooltip<DotsProps, PointsRange>(\n  ({\n    width,\n    height,\n    showControls = true,\n    hideTooltip,\n    showTooltip,\n    tooltipOpen,\n    tooltipData,\n    tooltipLeft,\n    tooltipTop,\n  }: DotsProps & WithTooltipProvidedProps<PointsRange>) => {\n    if (width < 10) return null;\n    const [showVoronoi, setShowVoronoi] = useState(showControls);\n    const svgRef = useRef<SVGSVGElement>(null);\n    const xScale = useMemo(\n      () =>\n        scaleLinear<number>({\n          domain: [1.3, 2.2],\n          range: [0, width],\n          clamp: true,\n        }),\n      [width],\n    );\n    const yScale = useMemo(\n      () =>\n        scaleLinear<number>({\n          domain: [0.75, 1.6],\n          range: [height, 0],\n          clamp: true,\n        }),\n      [height],\n    );\n    const voronoiLayout = useMemo(\n      () =>\n        voronoi<PointsRange>({\n          x: d => xScale(x(d)) ?? 0,\n          y: d => yScale(y(d)) ?? 0,\n          width,\n          height,\n        })(points),\n      [width, height, xScale, yScale],\n    );\n\n    // event handlers\n    const handleMouseMove = useCallback(\n      (event: React.MouseEvent | React.TouchEvent) => {\n        if (tooltipTimeout) clearTimeout(tooltipTimeout);\n        if (!svgRef.current) return;\n\n        // find the nearest polygon to the current mouse position\n        const point = localPoint(svgRef.current, event);\n        if (!point) return;\n        const neighborRadius = 100;\n        const closest = voronoiLayout.find(point.x, point.y, neighborRadius);\n        if (closest) {\n          showTooltip({\n            tooltipLeft: xScale(x(closest.data)),\n            tooltipTop: yScale(y(closest.data)),\n            tooltipData: closest.data,\n          });\n        }\n      },\n      [xScale, yScale, showTooltip, voronoiLayout],\n    );\n\n    const handleMouseLeave = useCallback(() => {\n      tooltipTimeout = window.setTimeout(() => {\n        hideTooltip();\n      }, 300);\n    }, [hideTooltip]);\n\n    return (\n      <div>\n        <svg width={width} height={height} ref={svgRef}>\n          <GradientPinkRed id=\"dots-pink\" />\n          {/** capture all mouse events with a rect */}\n          <rect\n            width={width}\n            height={height}\n            rx={14}\n            fill=\"url(#dots-pink)\"\n            onMouseMove={handleMouseMove}\n            onMouseLeave={handleMouseLeave}\n            onTouchMove={handleMouseMove}\n            onTouchEnd={handleMouseLeave}\n          />\n          <Group pointerEvents=\"none\">\n            {points.map((point, i) => (\n              <Circle\n                key={`point-${point[0]}-${i}`}\n                className=\"dot\"\n                cx={xScale(x(point))}\n                cy={yScale(y(point))}\n                r={i % 3 === 0 ? 2 : 3}\n                fill={tooltipData === point ? 'white' : '#f6c431'}\n              />\n            ))}\n            {showVoronoi &&\n              voronoiLayout\n                .polygons()\n                .map((polygon, i) => (\n                  <VoronoiPolygon\n                    key={`polygon-${i}`}\n                    polygon={polygon}\n                    fill=\"white\"\n                    stroke=\"white\"\n                    strokeWidth={1}\n                    strokeOpacity={0.2}\n                    fillOpacity={tooltipData === polygon.data ? 0.5 : 0}\n                  />\n                ))}\n          </Group>\n        </svg>\n        {tooltipOpen && tooltipData && tooltipLeft != null && tooltipTop != null && (\n          <Tooltip left={tooltipLeft + 10} top={tooltipTop + 10}>\n            <div>\n              <strong>x:</strong> {x(tooltipData)}\n            </div>\n            <div>\n              <strong>y:</strong> {y(tooltipData)}\n            </div>\n          </Tooltip>\n        )}\n        {showControls && (\n          <div>\n            <label style={{ fontSize: 12 }}>\n              <input\n                type=\"checkbox\"\n                checked={showVoronoi}\n                onChange={() => setShowVoronoi(!showVoronoi)}\n              />\n              &nbsp;Show voronoi point map\n            </label>\n          </div>\n        )}\n      </div>\n    );\n  },\n);\n")}},PVmh:function(n){n.exports=JSON.parse('{"name":"@visx/demo-dots","description":"Standalone visx scatterplot demo.","main":"index.tsx","private":true,"dependencies":{"@babel/runtime":"^7.8.4","@types/react":"^16","@types/react-dom":"^16","@visx/event":"latest","@visx/gradient":"latest","@visx/group":"latest","@visx/mock-data":"latest","@visx/responsive":"latest","@visx/scale":"latest","@visx/shape":"latest","@visx/tooltip":"latest","@visx/voronoi":"latest","react":"^16.8","react-dom":"^16.8","react-scripts-ts":"3.1.0","typescript":"^3"},"keywords":["visualization","d3","react","visx","visualization"]}')},QnoR:function(n,t,o){"use strict";o.d(t,"a",(function(){return i}));var e=o("ERkP");function r(){return(r=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&(n[e]=o[e])}return n}).apply(this,arguments)}function i(n){var t=Object(e.useState)(r({tooltipOpen:!1},n)),o=t[0],i=t[1],a=Object(e.useCallback)((function(n){return i("function"===typeof n?function(t){t.tooltipOpen;var o=function(n,t){if(null==n)return{};var o,e,r={},i=Object.keys(n);for(e=0;e<i.length;e++)o=i[e],t.indexOf(o)>=0||(r[o]=n[o]);return r}(t,["tooltipOpen"]);return r({},n(o),{tooltipOpen:!0})}:{tooltipOpen:!0,tooltipLeft:n.tooltipLeft,tooltipTop:n.tooltipTop,tooltipData:n.tooltipData})}),[i]),u=Object(e.useCallback)((function(){return i({tooltipOpen:!1,tooltipLeft:void 0,tooltipTop:void 0,tooltipData:void 0})}),[i]);return{tooltipOpen:o.tooltipOpen,tooltipLeft:o.tooltipLeft,tooltipTop:o.tooltipTop,tooltipData:o.tooltipData,updateTooltip:i,showTooltip:a,hideTooltip:u}}},U8e0:function(n,t,o){"use strict";t.__esModule=!0,t.default=function(n){return(0,e.randomLcg)(n)};var e=o("G/4L")},VEyW:function(n,t,o){"use strict";var e=o("91Pn");t.a=function n(t){function o(n,o){var e,r;return n=null==n?0:+n,o=null==o?1:+o,function(){var i;if(null!=e)i=e,e=null;else do{e=2*t()-1,i=2*t()-1,r=e*e+i*i}while(!r||r>1);return n+o*i*Math.sqrt(-2*Math.log(r)/r)}}return o.source=n,o}(e.a)},XpFG:function(n,t,o){"use strict";o.d(t,"a",(function(){return l}));var e=o("ERkP"),r=o.n(e),i=o("O94r"),a=o.n(i);function u(){return(u=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&(n[e]=o[e])}return n}).apply(this,arguments)}function l(n){var t=n.className,o=n.innerRef,e=function(n,t){if(null==n)return{};var o,e,r={},i=Object.keys(n);for(e=0;e<i.length;e++)o=i[e],t.indexOf(o)>=0||(r[o]=n[o]);return r}(n,["className","innerRef"]);return r.a.createElement("circle",u({ref:o,className:a()("visx-circle",t)},e))}},Zbhd:function(n,t,o){"use strict";o.d(t,"a",(function(){return u}));var e=o("JKOu"),r=o("XAd9"),i=o("Cyas"),a=o("VBI3");function u(n,t,o,u){var l,c=Object(e.c)(n,t,o);switch((u=Object(r.a)(null==u?",f":u)).type){case"s":var s=Math.max(Math.abs(n),Math.abs(t));return null!=u.precision||isNaN(l=function(n,t){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(Object(i.a)(t)/3)))-Object(i.a)(Math.abs(n)))}(c,s))||(u.precision=l),Object(a.b)(u,s);case"":case"e":case"g":case"p":case"r":null!=u.precision||isNaN(l=function(n,t){return n=Math.abs(n),t=Math.abs(t)-n,Math.max(0,Object(i.a)(t)-Object(i.a)(n))+1}(c,Math.max(Math.abs(n),Math.abs(t))))||(u.precision=l-("e"===u.type));break;case"f":case"%":null!=u.precision||isNaN(l=function(n){return Math.max(0,-Object(i.a)(Math.abs(n)))}(c))||(u.precision=l-2*("%"===u.type))}return Object(a.a)(u)}},hp7J:function(n,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dots",function(){return o("LxZ5")}])},rkTo:function(n,t,o){"use strict";function e(n,t,o){return t in n?Object.defineProperty(n,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[t]=o,n}o.d(t,"a",(function(){return r}));var r=function(){function n(n){var t=n.x,o=void 0===t?0:t,r=n.y,i=void 0===r?0:r;e(this,"x",0),e(this,"y",0),this.x=o,this.y=i}var t=n.prototype;return t.value=function(){return{x:this.x,y:this.y}},t.toArray=function(){return[this.x,this.y]},n}()},"uKU/":function(n,t,o){"use strict";o.d(t,"b",(function(){return u})),o.d(t,"a",(function(){return l}));var e=o("JKOu"),r=o("2+fR"),i=o("W1cA"),a=o("Zbhd");function u(n){var t=n.domain;return n.ticks=function(n){var o=t();return Object(e.a)(o[0],o[o.length-1],null==n?10:n)},n.tickFormat=function(n,o){var e=t();return Object(a.a)(e[0],e[e.length-1],null==n?10:n,o)},n.nice=function(o){null==o&&(o=10);var r,i,a=t(),u=0,l=a.length-1,c=a[u],s=a[l],f=10;for(s<c&&(i=c,c=s,s=i,i=u,u=l,l=i);f-- >0;){if((i=Object(e.b)(c,s,o))===r)return a[u]=c,a[l]=s,t(a);if(i>0)c=Math.floor(c/i)*i,s=Math.ceil(s/i)*i;else{if(!(i<0))break;c=Math.ceil(c*i)/i,s=Math.floor(s*i)/i}r=i}return n},n}function l(){var n=Object(r.b)();return n.copy=function(){return Object(r.a)(n,l())},i.b.apply(n,arguments),u(n)}},uLXA:function(n,t,o){"use strict";t.__esModule=!0,t.genPointsRange=u,t.default=function(n,t){void 0===n&&(n=300);void 0===t&&(t=void 0);var o=null==t?void 0:r.randomNormal.source((0,i.default)(t))(0,.2);return[].concat(u(n,[a,1,0],o),u(n,[-a,1,1],o),u(n,[0,-1,2],o))};var e,r=o("G/4L"),i=(e=o("U8e0"))&&e.__esModule?e:{default:e};var a=Math.sqrt(3);function u(n,t,o){var e=t[0],i=t[1],a=t[2];return void 0===o&&(o=(0,r.randomNormal)(0,.2)),function(n){return new Array(n).fill(1)}(n).map((function(){return[o()+e,o()+i,a]}))}},xc3W:function(n,t,o){"use strict";o.d(t,"a",(function(){return u}));var e=o("ERkP"),r=o.n(e),i=o("QnoR");function a(){return(a=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&(n[e]=o[e])}return n}).apply(this,arguments)}function u(n,t,o){void 0===t&&(t={style:{position:"relative",width:"inherit",height:"inherit"}}),void 0===o&&(o=function(n,t){return r.a.createElement("div",t,n)});return function(e){var u=Object(i.a)();return o(r.a.createElement(n,a({},u,e)),t)}}}},[["hp7J",0,2,1,3,4,5,6,22]]]);