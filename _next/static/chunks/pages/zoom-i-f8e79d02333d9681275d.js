_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[130],{"+vpJ":function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/zoom-i",function(){return e("cSaN")}])},"67po":function(n,t,e){"use strict";e.d(t,"a",(function(){return a}));var i=e("uKU/"),o=e("xx0A"),r=Object(o.b)("domain","range","reverse","clamp","interpolate","nice","round","zero");function a(n){return r(Object(i.a)(),n)}},HO86:function(n,t,e){"use strict";e.d(t,"a",(function(){return o}));var i=e("lEbO");function o(n,t){if(n){if("string"===typeof n)return Object(i.a)(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?Object(i.a)(n,t):void 0}}},"VB+g":function(n,t,e){"use strict";e.d(t,"a",(function(){return c}));var i=e("rkTo"),o=e("ZQHj");function r(){return(r=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n}).apply(this,arguments)}var a={x:0,y:0};function c(n,t){if(!n||!t)return null;var e=function(n){if(!n)return r({},a);if(Object(o.g)(n))return n.changedTouches.length>0?{x:n.changedTouches[0].clientX,y:n.changedTouches[0].clientY}:r({},a);if(Object(o.c)(n))return{x:n.clientX,y:n.clientY};var t=null==n?void 0:n.target,e=t&&"getBoundingClientRect"in t?t.getBoundingClientRect():null;return e?{x:e.x+e.width/2,y:e.y+e.height/2}:r({},a)}(t),c=Object(o.d)(n)?n.ownerSVGElement:n,s=Object(o.e)(c)?c.getScreenCTM():null;if(Object(o.f)(c)&&s){var l=c.createSVGPoint();return l.x=e.x,l.y=e.y,l=l.matrixTransform(s.inverse()),new i.a({x:l.x,y:l.y})}var u=n.getBoundingClientRect();return new i.a({x:e.x-u.left-n.clientLeft,y:e.y-u.top-n.clientTop})}},ZQHj:function(n,t,e){"use strict";function i(n){return!!n&&n instanceof Element}function o(n){return!!n&&(n instanceof SVGElement||"ownerSVGElement"in n)}function r(n){return!!n&&"createSVGPoint"in n}function a(n){return!!n&&"getScreenCTM"in n}function c(n){return!!n&&"changedTouches"in n}function s(n){return!!n&&"clientX"in n}function l(n){return!!n&&(n instanceof Event||"nativeEvent"in n&&n.nativeEvent instanceof Event)}e.d(t,"a",(function(){return i})),e.d(t,"d",(function(){return o})),e.d(t,"f",(function(){return r})),e.d(t,"e",(function(){return a})),e.d(t,"g",(function(){return c})),e.d(t,"c",(function(){return s})),e.d(t,"b",(function(){return l}))},Zbhd:function(n,t,e){"use strict";e.d(t,"a",(function(){return c}));var i=e("JKOu"),o=e("XAd9"),r=e("Cyas"),a=e("VBI3");function c(n,t,e,c){var s,l=Object(i.c)(n,t,e);switch((c=Object(o.a)(null==c?",f":c)).type){case"s":var u=Math.max(Math.abs(n),Math.abs(t));return null!=c.precision||isNaN(s=function(n,t){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(Object(r.a)(t)/3)))-Object(r.a)(Math.abs(n)))}(l,u))||(c.precision=s),Object(a.b)(c,u);case"":case"e":case"g":case"p":case"r":null!=c.precision||isNaN(s=function(n,t){return n=Math.abs(n),t=Math.abs(t)-n,Math.max(0,Object(r.a)(t)-Object(r.a)(n))+1}(l,Math.max(Math.abs(n),Math.abs(t))))||(c.precision=s-("e"===c.type));break;case"f":case"%":null!=c.precision||isNaN(s=function(n){return Math.max(0,-Object(r.a)(Math.abs(n)))}(l))||(c.precision=s-2*("%"===c.type))}return Object(a.a)(c)}},cSaN:function(n,t,e){"use strict";e.r(t);var i=e("ERkP"),o=e.n(i),r=e("6wy5"),a=e("HNTK"),c=e("lUgi"),s=o.a.createElement;t.default=function(){return s(r.a,{component:a.a,title:"Zoom I",codeSandboxDirectoryName:"visx-zoom-i",packageJson:c},'/* eslint react/jsx-handler-names: "off" */\nimport React, { useState } from \'react\';\nimport { interpolateRainbow } from \'d3-scale-chromatic\';\nimport { Zoom } from \'@visx/zoom\';\nimport { localPoint } from \'@visx/event\';\nimport { RectClipPath } from \'@visx/clip-path\';\nimport genPhyllotaxis, {\n  GenPhyllotaxisFunction,\n  PhyllotaxisPoint,\n} from \'@visx/mock-data/lib/generators/genPhyllotaxis\';\nimport { scaleLinear } from \'@visx/scale\';\n\nconst bg = \'#0a0a0a\';\nconst points = [...new Array(1000)];\n\nconst colorScale = scaleLinear<number>({ range: [0, 1], domain: [0, 1000] });\nconst sizeScale = scaleLinear<number>({ domain: [0, 600], range: [0.5, 8] });\n\nconst initialTransform = {\n  scaleX: 1.27,\n  scaleY: 1.27,\n  translateX: -211.62,\n  translateY: 162.59,\n  skewX: 0,\n  skewY: 0,\n};\n\nexport type ZoomIProps = {\n  width: number;\n  height: number;\n};\n\nexport default function ZoomI({ width, height }: ZoomIProps) {\n  const [showMiniMap, setShowMiniMap] = useState<boolean>(true);\n\n  const generator: GenPhyllotaxisFunction = genPhyllotaxis({ radius: 10, width, height });\n  const phyllotaxis: PhyllotaxisPoint[] = points.map((d, i) => generator(i));\n\n  return (\n    <>\n      <Zoom\n        width={width}\n        height={height}\n        scaleXMin={1 / 2}\n        scaleXMax={4}\n        scaleYMin={1 / 2}\n        scaleYMax={4}\n        transformMatrix={initialTransform}\n      >\n        {zoom => (\n          <div className="relative">\n            <svg\n              width={width}\n              height={height}\n              style={{ cursor: zoom.isDragging ? \'grabbing\' : \'grab\' }}\n            >\n              <RectClipPath id="zoom-clip" width={width} height={height} />\n              <rect width={width} height={height} rx={14} fill={bg} />\n              <g transform={zoom.toString()}>\n                {phyllotaxis.map(({ x, y }, i) => (\n                  <React.Fragment key={`dot-${i}`}>\n                    <circle\n                      cx={x}\n                      cy={y}\n                      r={i > 500 ? sizeScale(1000 - i) : sizeScale(i)}\n                      fill={interpolateRainbow(colorScale(i) ?? 0)}\n                    />\n                  </React.Fragment>\n                ))}\n              </g>\n              <rect\n                width={width}\n                height={height}\n                rx={14}\n                fill="transparent"\n                onTouchStart={zoom.dragStart}\n                onTouchMove={zoom.dragMove}\n                onTouchEnd={zoom.dragEnd}\n                onMouseDown={zoom.dragStart}\n                onMouseMove={zoom.dragMove}\n                onMouseUp={zoom.dragEnd}\n                onMouseLeave={() => {\n                  if (zoom.isDragging) zoom.dragEnd();\n                }}\n                onDoubleClick={event => {\n                  const point = localPoint(event) || { x: 0, y: 0 };\n                  zoom.scale({ scaleX: 1.1, scaleY: 1.1, point });\n                }}\n              />\n              {showMiniMap && (\n                <g\n                  clipPath="url(#zoom-clip)"\n                  transform={`\n                    scale(0.25)\n                    translate(${width * 4 - width - 60}, ${height * 4 - height - 60})\n                  `}\n                >\n                  <rect width={width} height={height} fill="#1a1a1a" />\n                  {phyllotaxis.map(({ x, y }, i) => (\n                    <React.Fragment key={`dot-sm-${i}`}>\n                      <circle\n                        cx={x}\n                        cy={y}\n                        r={i > 500 ? sizeScale(1000 - i) : sizeScale(i)}\n                        fill={interpolateRainbow(colorScale(i) ?? 0)}\n                      />\n                    </React.Fragment>\n                  ))}\n                  <rect\n                    width={width}\n                    height={height}\n                    fill="white"\n                    fillOpacity={0.2}\n                    stroke="white"\n                    strokeWidth={4}\n                    transform={zoom.toStringInvert()}\n                  />\n                </g>\n              )}\n            </svg>\n            <div className="controls">\n              <button\n                type="button"\n                className="btn btn-zoom"\n                onClick={() => zoom.scale({ scaleX: 1.2, scaleY: 1.2 })}\n              >\n                +\n              </button>\n              <button\n                type="button"\n                className="btn btn-zoom btn-bottom"\n                onClick={() => zoom.scale({ scaleX: 0.8, scaleY: 0.8 })}\n              >\n                -\n              </button>\n              <button type="button" className="btn btn-lg" onClick={zoom.center}>\n                Center\n              </button>\n              <button type="button" className="btn btn-lg" onClick={zoom.reset}>\n                Reset\n              </button>\n              <button type="button" className="btn btn-lg" onClick={zoom.clear}>\n                Clear\n              </button>\n            </div>\n            <div className="mini-map">\n              <button\n                type="button"\n                className="btn btn-lg"\n                onClick={() => setShowMiniMap(!showMiniMap)}\n              >\n                {showMiniMap ? \'Hide\' : \'Show\'} Mini Map\n              </button>\n            </div>\n          </div>\n        )}\n      </Zoom>\n      <div className="description">\n        Based on Mike Bostock&apos;s{\' \'}\n        <a href="https://bl.ocks.org/mbostock/4e3925cdc804db257a86fdef3a032a45">Pan & Zoom III</a>\n      </div>\n      <style jsx>{`\n        .btn {\n          margin: 0;\n          text-align: center;\n          border: none;\n          background: #2f2f2f;\n          color: #888;\n          padding: 0 4px;\n          border-top: 1px solid #0a0a0a;\n        }\n        .btn-lg {\n          font-size: 12px;\n          line-height: 1;\n          padding: 4px;\n        }\n        .btn-zoom {\n          width: 26px;\n          font-size: 22px;\n        }\n        .btn-bottom {\n          margin-bottom: 1rem;\n        }\n        .description {\n          font-size: 12px;\n          margin-right: 0.25rem;\n        }\n        .controls {\n          position: absolute;\n          top: 15px;\n          right: 15px;\n          display: flex;\n          flex-direction: column;\n          align-items: flex-end;\n        }\n        .mini-map {\n          position: absolute;\n          bottom: 25px;\n          right: 15px;\n          display: flex;\n          flex-direction: column;\n          align-items: flex-end;\n        }\n        .relative {\n          position: relative;\n        }\n      `}</style>\n    </>\n  );\n}\n')}},fGyu:function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var i=e("lEbO");var o=e("HO86");function r(n){return function(n){if(Array.isArray(n))return Object(i.a)(n)}(n)||function(n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}(n)||Object(o.a)(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},jpI8:function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var i=e("VB+g"),o=e("ZQHj");function r(n,t){if(Object(o.a)(n)&&t)return Object(i.a)(n,t);if(Object(o.b)(n)){var e=n,r=e.target;if(r)return Object(i.a)(r,e)}return null}},lEbO:function(n,t,e){"use strict";function i(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,i=new Array(t);e<t;e++)i[e]=n[e];return i}e.d(t,"a",(function(){return i}))},lUgi:function(n){n.exports=JSON.parse('{"name":"@visx/demo-zoom-i","description":"Standalone visx zoom demo.","main":"index.tsx","private":true,"dependencies":{"@babel/runtime":"^7.8.4","@types/react":"^16","@types/react-dom":"^16","@visx/clip-path":"latest","@visx/event":"latest","@visx/mock-data":"latest","@visx/responsive":"latest","@visx/scale":"latest","@visx/zoom":"latest","d3-scale-chromatic":"^1.5.0","react":"^16.8","react-dom":"^16.8","react-scripts-ts":"3.1.0","typescript":"^3"},"keywords":["visualization","d3","react","visx","zoom"]}')},rkTo:function(n,t,e){"use strict";function i(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}e.d(t,"a",(function(){return o}));var o=function(){function n(n){var t=n.x,e=void 0===t?0:t,o=n.y,r=void 0===o?0:o;i(this,"x",0),i(this,"y",0),this.x=e,this.y=r}var t=n.prototype;return t.value=function(){return{x:this.x,y:this.y}},t.toArray=function(){return[this.x,this.y]},n}()},"uKU/":function(n,t,e){"use strict";e.d(t,"b",(function(){return c})),e.d(t,"a",(function(){return s}));var i=e("JKOu"),o=e("2+fR"),r=e("W1cA"),a=e("Zbhd");function c(n){var t=n.domain;return n.ticks=function(n){var e=t();return Object(i.a)(e[0],e[e.length-1],null==n?10:n)},n.tickFormat=function(n,e){var i=t();return Object(a.a)(i[0],i[i.length-1],null==n?10:n,e)},n.nice=function(e){null==e&&(e=10);var o,r,a=t(),c=0,s=a.length-1,l=a[c],u=a[s],h=10;for(u<l&&(r=l,l=u,u=r,r=c,c=s,s=r);h-- >0;){if((r=Object(i.b)(l,u,e))===o)return a[c]=l,a[s]=u,t(a);if(r>0)l=Math.floor(l/r)*r,u=Math.ceil(u/r)*r;else{if(!(r<0))break;l=Math.ceil(l*r)/r,u=Math.floor(u*r)/r}o=r}return n},n}function s(){var n=Object(o.b)();return n.copy=function(){return Object(o.a)(n,s())},r.b.apply(n,arguments),c(n)}}},[["+vpJ",0,2,1,3,4,5,6,28]]]);