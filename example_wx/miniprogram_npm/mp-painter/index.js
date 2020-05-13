module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1589370815556, function(require, module, exports) {
module.exports=function(t){var i={};function e(n){if(i[n])return i[n].exports;var r=i[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}return e.m=t,e.c=i,e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,i){if(1&i&&(t=e(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var r in t)e.d(n,r,function(i){return t[i]}.bind(null,r));return n},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},e.p="",e(e.s=0)}([function(t,i,e){e.r(i);const n="object"==typeof swan?"mp-baidu":"object"==typeof my?"mp-alipay":"mp-weixin",r=function(){if("undefined"!=typeof uni)return uni;if("undefined"!=typeof wx)return wx;throw new Error("enviroment not support")}(),o=[.296,.313,.436,.638,.586,.89,.87,.256,.334,.334,.455,.742,.241,.433,.241,.427,.586,.586,.586,.586,.586,.586,.586,.586,.586,.586,.241,.241,.742,.742,.742,.483,1.031,.704,.627,.669,.762,.55,.531,.744,.773,.294,.396,.635,.513,.977,.813,.815,.612,.815,.653,.577,.573,.747,.676,1.018,.645,.604,.62,.334,.416,.334,.742,.448,.295,.553,.639,.501,.64,.567,.347,.64,.616,.266,.267,.544,.266,.937,.616,.636,.639,.64,.382,.463,.373,.616,.525,.79,.507,.529,.492,.334,.269,.334,.742,.296];var s=function(t,i,e,n){return new(e||(e=Promise))((function(r,o){function s(t){try{l(n.next(t))}catch(t){o(t)}}function h(t){try{l(n.throw(t))}catch(t){o(t)}}function l(t){var i;t.done?r(t.value):(i=t.value,i instanceof e?i:new e((function(t){t(i)}))).then(s,h)}l((n=n.apply(t,i||[])).next())}))};class h{constructor(t,i,e){var n,r,o;this.offsetTop=0,this.offsetLeft=0,this.contentHeight=0,this.contentWidth=0,this.painter=t,this.parent=e,this.position=null!=(n=i.position)?n:"static",this.left=null!=(r=i.left)?r:0,this.top=null!=(o=i.top)?o:0}layout(){return s(this,void 0,void 0,(function*(){let t=yield this._layout();return this.contentHeight=t.height,this.contentWidth=t.width,t}))}get anchorX(){var t,i;return null!=(i=null===(t=this.parent)||void 0===t?void 0:t.elementX)?i:0}get anchorY(){var t,i;return null!=(i=null===(t=this.parent)||void 0===t?void 0:t.elementY)?i:0}get elementX(){switch(this.position){case"absolute":return this.left+this.anchorX;case"static":return this.left+this.offsetLeft+this.anchorX;default:throw new TypeError("unknown position type")}}get elementY(){switch(this.position){case"absolute":return this.top+this.anchorY;case"static":return this.top+this.offsetTop+this.anchorY;default:throw new TypeError("unknown position type")}}get offsetHeight(){return this.top+this.contentHeight}get offsetWidth(){return this.left+this.contentWidth}}class l extends h{constructor(t,i,e){var n,r,o,s,h,l,a,u,p;super(t,i,e),this.option={color:(n=i.color,null!=n?n:"#000"),align:(r=i.align,null!=r?r:"left"),fontWeight:(o=i.fontWeight,null!=o?o:"normal"),fontStyle:(s=i.fontStyle,null!=s?s:"normal"),fontFamily:(h=i.fontFamily,null!=h?h:"serial"),fontSize:(l=i.fontSize,null!=l?l:30),baseline:(a=i.baseline,null!=a?a:"top"),content:(u=i.content,null!=u?u:""),width:(p=i.width,null!=p?p:void 0)}}_layout(){var t;return{width:null!=(t=this.option.width)?t:this.painter.measureText(this.option.content,this.option.fontSize),height:this.option.fontSize}}paint(){this.painter.ctx.font=["normal"!=this.option.fontWeight&&this.option.fontWeight,"normal"!=this.option.fontStyle&&this.option.fontStyle,this.painter.upx2px(this.option.fontSize)+"px",this.option.fontFamily].filter(Boolean).join(" "),this.painter.setFillStyle(this.option.color),this.painter.ctx.setFontSize(this.painter.upx2px(this.option.fontSize)),this.painter.ctx.setTextBaseline(this.option.baseline),this.painter.ctx.setTextAlign(this.option.align),this.painter.ctx.fillText(this.option.content,this.painter.upx2px(this.elementX),this.painter.upx2px(this.elementY))}}class a{constructor(t){this.fontSize=t.fontSize,this.lineClamp=t.lineClamp||1/0,this.width=t.width,this.ctx=t.painter.ctx,this.painter=t.painter,this.content=t.content,this.lines=[],this.currentLineText="",this.position=0,this.endPostion=this.position,this.isOverflow=!1,this.isDry=!1,this.isFull=!1}split(){return this.ctx.setFontSize(this.fontSize),this.fillText(),this.lines}minCharNumberInWidth(t){return Math.ceil(t/this.fontSize)}freeSpaceInCurrentLine(){if(this.currentLineText.length){let t=this.painter.measureText(this.currentLineText,this.fontSize);return this.width-(t||0)}return this.width}adjustCharNumberInCurrentLine(t){let i=this.currentLineText.length+t,e=this.content.length;i=Math.min(i,e),this.isDry=i==e,this.currentLineText=this.content.slice(0,i)}commitLine(){this.content=this.content.slice(this.currentLineText.length),this.lines.push(this.currentLineText),this.currentLineText="",this.lines.length==this.lineClamp&&(this.isFull=!0,0==this.isDry&&(this.isOverflow=!0))}handleOverflow(){let t=this.lines.pop();t=t.substring(0,Math.max(0,t.length-1))+"...",this.lines.push(t)}fillText(){let t=this.freeSpaceInCurrentLine();if(t<=0){if(this.adjustCharNumberInCurrentLine(-1),this.commitLine(),this.isOverflow&&this.handleOverflow(),this.isFull)return;t=this.freeSpaceInCurrentLine()}else if(this.isDry)return void this.commitLine();let i=this.minCharNumberInWidth(t);this.adjustCharNumberInCurrentLine(i),this.fillText()}}var u=function(t,i,e,n){return new(e||(e=Promise))((function(r,o){function s(t){try{l(n.next(t))}catch(t){o(t)}}function h(t){try{l(n.throw(t))}catch(t){o(t)}}function l(t){var i;t.done?r(t.value):(i=t.value,i instanceof e?i:new e((function(t){t(i)}))).then(s,h)}l((n=n.apply(t,i||[])).next())}))};class p extends h{constructor(t,i,e){var n,r,o,s,h,l;super(t,i,e),this.option=Object.assign(Object.assign({},i),{width:(n=i.width,null!=n?n:100),height:(r=i.height,null!=r?r:"auto"),fontSize:(o=i.fontSize,null!=o?o:30),content:(s=i.content,null!=s?s:""),lineHeight:(h=i.lineHeight,null!=h?h:40),lineClamp:(l=i.lineClamp,null!=l?l:0)}),this.lines=[]}_layout(){return this.lines=new a({fontSize:this.option.fontSize,lineClamp:this.option.lineClamp,width:this.option.width,painter:this.painter,content:this.option.content}).split(),{width:this.option.width,height:"auto"==this.option.height?(this.lines.length-1)*this.option.lineHeight+this.option.fontSize:this.option.height}}paint(){return u(this,void 0,void 0,(function*(){this.lines.map((t,i)=>{let e=Object.assign(Object.assign({},this.option),{type:"text",top:this.elementY+i*this.option.lineHeight,left:this.elementX,position:this.position,content:t});new l(this.painter,e).paint()})}))}}var c=function(t,i,e,n){return new(e||(e=Promise))((function(r,o){function s(t){try{l(n.next(t))}catch(t){o(t)}}function h(t){try{l(n.throw(t))}catch(t){o(t)}}function l(t){var i;t.done?r(t.value):(i=t.value,i instanceof e?i:new e((function(t){t(i)}))).then(s,h)}l((n=n.apply(t,i||[])).next())}))};class d extends h{constructor(t,i,e){var n,r,o;super(t,i,e),this.option={width:(n=i.width,null!=n?n:100),height:(r=i.height,null!=r?r:100),objectFit:(o=i.objectFit,null!=o?o:"fill"),src:i.src}}_layout(){return{width:this.option.width,height:this.option.height}}paint(){return c(this,void 0,void 0,(function*(){if(!this.option.src)return;let t,i={left:0,top:0,width:this.option.width,height:this.option.height};switch(this.option.objectFit){case"contain":i=yield function(t){return c(this,void 0,void 0,(function*(){let{width:i,height:e}=yield f(t.src),n=i/e>t.width/t.height?t.width/i:t.height/e;return{left:(t.width-i*n)/2,top:(t.height-e*n)/2,width:i*n,height:e*n}}))}(this.option);break;case"cover":t=yield function(t){return c(this,void 0,void 0,(function*(){let{width:i,height:e}=yield f(t.src),n=i/e>t.width/t.height?t.height/e:t.width/i;return{left:(i-t.width/n)/2,top:(e-t.height/n)/2,width:t.width/n,height:t.height/n}}))}(this.option);break;default:case"fill":}let e=yield function(t,i){return c(this,void 0,void 0,(function*(){let e=t.platform;return/^\./.test(i.src)||/^data:image\//.test(i.src)||"mp-alipay"==e&&/^https:\/\/resource\//.test(i.src)||"mp-weixin"==e&&/^wxfile:/.test(i.src)||"mp-baidu"==e&&/^bdfile:\/\/tmp/.test(i.src)?i.src:(console.log("绘制图片: 下载图片文件:",i.src),yield(n=i.src,new Promise((t,i)=>r.downloadFile({url:n,success:i=>t(i.tempFilePath),fail:i}))).catch(t=>(console.log("下载错误: ",t),"")));var n}))}(this.painter,this.option);e&&(console.log("调用小程序drawImage，使用:",e),t?this.painter.ctx.drawImage(e,t.left,t.top,t.width,t.height,this.painter.upx2px(this.elementX+i.left),this.painter.upx2px(this.elementY+i.top),this.painter.upx2px(i.width),this.painter.upx2px(i.height)):this.painter.ctx.drawImage(e,this.painter.upx2px(this.elementX+i.left),this.painter.upx2px(this.elementY+i.top),this.painter.upx2px(i.width),this.painter.upx2px(i.height)))}))}}function f(t){return c(this,void 0,void 0,(function*(){try{let{width:e=100,height:n=100}=yield(i=uni.getImageInfo,function(t={}){return new Promise((e,n)=>{t.success=e,t.fail=n,i(t)})})({src:t});return{width:e,height:n}}catch(t){return console.log("getImageOriginSize: fail, use default size: width = 100, height = 100"),{width:100,height:100}}var i}))}class x extends h{constructor(t,i,e){var n,r,o,s,h;super(t,i,e),this.option={dx:(n=i.dx,null!=n?n:0),dy:(r=i.dy,null!=r?r:0),color:(o=i.color,null!=o?o:"#000"),dashPattern:(s=i.dashPattern,null!=s?s:[1,0]),lineWidth:(h=i.lineWidth,null!=h?h:1)}}_layout(){return{width:this.option.dx,height:this.option.dy}}paint(){let t=this.painter.upx2px(this.elementX),i=this.painter.upx2px(this.elementY),e=this.painter.upx2px(this.elementX+this.option.dx),n=this.painter.upx2px(this.elementY+this.option.dy);this.painter.ctx.beginPath(),this.painter.ctx.moveTo(t,i),this.painter.ctx.lineTo(e,n),this.painter.ctx.setLineDash(this.option.dashPattern.map(t=>this.painter.upx2px(t))),this.painter.setStrokeStyle(this.option.color),this.painter.ctx.lineWidth=this.painter.upx2px(this.option.lineWidth),this.painter.ctx.stroke()}}class m extends class{constructor(t,i){var e,n;this.element=t,this.left=null!=(e=i.left)?e:0,this.top=null!=(n=i.top)?n:0}get painter(){return this.element.painter}get pathX(){return this.element.elementX+this.left}get pathY(){return this.element.elementY+this.top}}{constructor(t,i){super(t,i),this.option=i,this.option.borderRadius&&this.assertBorderRadius()}assertBorderRadius(){this.normalizedBorderRadius.some(t=>t<0)&&(console.warn("border radius must greater than 0, got:",this.normalizedBorderRadius.join(",")),this.option.borderRadius=0)}paint(){this.reduceBorderRadius();let[t,i,e,n]=this.normalizedBorderRadius,{ctx:r,upx2px:o}=this.painter;r.beginPath(),r.moveTo(o(this.pathX),o(this.pathY+t)),this.painter.arcTo(o(this.pathX),o(this.pathY),o(this.pathX+t),o(this.pathY),o(t)),this.painter.arcTo(o(this.pathX+this.option.width),o(this.pathY),o(this.pathX+this.option.width),o(this.pathY+i),o(i)),this.painter.arcTo(o(this.pathX+this.option.width),o(this.pathY+this.option.height),o(this.pathX+this.option.width-e),o(this.pathY+this.option.height),o(e)),this.painter.arcTo(o(this.pathX),o(this.pathY+this.option.height),o(this.pathX),o(this.pathY+this.option.height-n),o(n)),r.closePath()}get normalizedBorderRadius(){return"number"==typeof this.option.borderRadius?Array.from({length:4}).fill(this.option.borderRadius):[...this.option.borderRadius]}reduceBorderRadius(){let[t,i,e,n]=this.normalizedBorderRadius,r=Math.min(this.option.width/(t+i),this.option.height/(i+e),this.option.width/(n+e),this.option.height/(t+n));r>=1||(this.option.borderRadius=this.normalizedBorderRadius.map(t=>t*r))}}function y(t,i){switch(i.type){case"rounded-rect":return new m(t,i);default:throw new Error("Unkwon option type")}}class w extends h{constructor(t,i,e){var n,r,o,s,h,l,a;super(t,i,e),this.option={width:(n=i.width,null!=n?n:100),height:(r=i.height,null!=r?r:100),borderRadius:(o=i.borderRadius,null!=o?o:0),background:(s=i.background,null!=s?s:"transparent"),borderStyle:(h=i.borderStyle,null!=h?h:"solid"),borderWidth:(l=i.borderWidth,null!=l?l:0),borderColor:(a=i.borderColor,null!=a?a:"#000")}}_layout(){return{width:this.option.width,height:this.option.height}}paint(){(this.shouldFill||this.shouldStroke)&&(this.option.borderRadius?this.paintByPath():this.paintByRect())}get shouldFill(){return"trasparent"!==this.option.background}get shouldStroke(){return this.option.borderWidth>0}applyFillStyle(){this.painter.setFillStyle(this.option.background)}applyStrokeStyle(){var t,i;this.painter.ctx.setLineDash((t=this.option.borderStyle,{dashed:[i=this.option.borderWidth,i],solid:[10,0]}[t])),this.painter.ctx.lineWidth=this.painter.upx2px(this.option.borderWidth),this.painter.setStrokeStyle(this.option.borderColor)}paintByRect(){let t=[this.painter.upx2px(this.elementX),this.painter.upx2px(this.elementY),this.painter.upx2px(this.option.width),this.painter.upx2px(this.option.height)];this.shouldFill&&(this.applyFillStyle(),this.painter.ctx.fillRect(...t)),this.shouldStroke&&(this.applyStrokeStyle(),this.painter.ctx.strokeRect(...t))}paintByPath(){y(this,{type:"rounded-rect",height:this.option.height,width:this.option.width,borderRadius:this.option.borderRadius}).paint(),this.shouldFill&&(this.painter.setFillStyle(this.option.background),this.painter.ctx.fill()),this.shouldStroke&&(this.applyStrokeStyle(),this.painter.ctx.stroke())}}var g=function(t,i,e,n){return new(e||(e=Promise))((function(r,o){function s(t){try{l(n.next(t))}catch(t){o(t)}}function h(t){try{l(n.throw(t))}catch(t){o(t)}}function l(t){var i;t.done?r(t.value):(i=t.value,i instanceof e?i:new e((function(t){t(i)}))).then(s,h)}l((n=n.apply(t,i||[])).next())}))};class v extends h{constructor(t,i,e){var n,r,o,s;super(t,i,e),this.childOffsetTop=0,this.childOffsetLeft=0,this.option={direction:(n=i.direction,null!=n?n:"vertical"),width:(r=i.width,null!=r?r:"auto"),height:(o=i.height,null!=o?o:"auto"),children:(s=i.children,null!=s?s:[])},this.children=this.option.children.map(t=>k(this.painter,t,this))}_layout(){return g(this,void 0,void 0,(function*(){return yield this.layoutChildren(),{width:this.calcContainerWidth(),height:this.calcContainerHeight()}}))}layoutChildren(){return g(this,void 0,void 0,(function*(){for(let t of this.children)yield this.layoutChild(t)}))}layoutChild(t){return g(this,void 0,void 0,(function*(){yield t.layout(),"absolute"!=t.position&&("vertical"==this.option.direction?(t.offsetTop=this.childOffsetTop,this.childOffsetTop+=t.offsetHeight):(t.offsetLeft=this.childOffsetLeft,this.childOffsetLeft+=t.offsetWidth))}))}calcContainerWidth(){if("number"==typeof this.option.width)return this.option.width;switch(this.option.direction){case"vertical":return this.childrenMaxWidth();case"horizontal":return this.childOffsetLeft;default:throw new TypeError("Unknown direction")}}calcContainerHeight(){if("number"==typeof this.option.height)return this.option.height;switch(this.option.direction){case"vertical":return this.childOffsetTop;case"horizontal":return this.childrenMaxHeight();default:throw new TypeError("Unknown direction")}}paint(){return g(this,void 0,void 0,(function*(){for(let t of this.children)yield t.paint()}))}childrenMaxWidth(){return Math.max(...this.children.map(t=>t.offsetWidth))}childrenMaxHeight(){return Math.max(...this.children.map(t=>t.offsetHeight))}}var b=function(t,i,e,n){return new(e||(e=Promise))((function(r,o){function s(t){try{l(n.next(t))}catch(t){o(t)}}function h(t){try{l(n.throw(t))}catch(t){o(t)}}function l(t){var i;t.done?r(t.value):(i=t.value,i instanceof e?i:new e((function(t){t(i)}))).then(s,h)}l((n=n.apply(t,i||[])).next())}))};class S extends h{constructor(t,i,e){super(t,i,e),this.contentElement=k(t,i.content,this),this.clipPath=y(this,i.path)}_layout(){return this.contentElement.layout()}paint(){return b(this,void 0,void 0,(function*(){this.painter.ctx.save(),yield this.clipPath.paint(),this.painter.ctx.clip(),yield this.contentElement.paint(),this.painter.ctx.restore()}))}}var T=function(t,i,e,n){return new(e||(e=Promise))((function(r,o){function s(t){try{l(n.next(t))}catch(t){o(t)}}function h(t){try{l(n.throw(t))}catch(t){o(t)}}function l(t){var i;t.done?r(t.value):(i=t.value,i instanceof e?i:new e((function(t){t(i)}))).then(s,h)}l((n=n.apply(t,i||[])).next())}))};class O extends h{constructor(t,i,e){var n,r;super(t,i,e),this.contentElement=k(t,i.content,this),this.transformOptions=null!=(n=i.transform)?n:[],this.transformOrigin=null!=(r=i.transformOrigin)?r:["center","center"]}_layout(){return this.contentElement.layout()}paint(){return T(this,void 0,void 0,(function*(){this.painter.ctx.save(),this.withTransformOrigin(()=>this.transform()),yield this.contentElement.paint(),this.painter.ctx.restore()}))}transform(){this.transformOptions.forEach(t=>this.singleTransform(t))}singleTransform(t){var i,e,n,r;switch(t.type){case"translate":return this.painter.ctx.translate(this.painter.upx2px(null!=(i=t.x)?i:0),this.painter.upx2px(null!=(e=t.y)?e:0));case"rotate":return this.painter.ctx.rotate(t.rotate/180*Math.PI);case"scale":return this.painter.ctx.scale(null!=(n=t.scaleWidth)?n:1,null!=(r=t.scaleHeight)?r:1);case"set-matrix":return this.painter.ctx.setTransform(t.scaleX,t.skewX,t.scaleY,t.scaleY,this.painter.upx2px(t.translateX),this.painter.upx2px(t.translateY));default:throw new Error("Unknown transform type.")}}withTransformOrigin(t){const i={x:this.elementX+this.contentWidth*{left:0,center:.5,right:1}[this.transformOrigin[0]],y:this.elementY+this.contentHeight*{top:0,center:.5,bottom:1}[this.transformOrigin[1]]};this.singleTransform({type:"translate",x:i.x,y:i.y}),t(),this.singleTransform({type:"translate",x:-i.x,y:-i.y})}}function k(t,i,e){switch(i.type){case"text":return new l(t,i,e);case"text-block":return new p(t,i,e);case"image":return new d(t,i,e);case"line":return new x(t,i,e);case"rect":return new w(t,i,e);case"container":return new v(t,i,e);case"clip":return new S(t,i,e);case"transform":return new O(t,i,e);default:throw new TypeError("Unkown painter element type")}}let C=function(){var t;if("function"==typeof r.upx2px)return r.upx2px;let i=(null!=(t=r.getSystemInfoSync().screenWidth)?t:375)/750;return function(t){return t*i}}();e.d(i,"default",(function(){return P}));var z=function(t,i,e,n){return new(e||(e=Promise))((function(r,o){function s(t){try{l(n.next(t))}catch(t){o(t)}}function h(t){try{l(n.throw(t))}catch(t){o(t)}}function l(t){var i;t.done?r(t.value):(i=t.value,i instanceof e?i:new e((function(t){t(i)}))).then(s,h)}l((n=n.apply(t,i||[])).next())}))};class P{constructor(t,{platform:i=n,upx2px:e}={}){this.ctx=t,this.platform=i,this.upx2px=null!=e?e:C,"mp-alipay"==i&&(this.upx2px=t=>(null!=e?e:C)(2*t))}draw(t){return z(this,void 0,void 0,(function*(){let i=yield this._drawObj(t);return yield new Promise(t=>this.ctx.draw(!0,t)),yield function(t=0){return new Promise(i=>setTimeout(i,t))}(100),i}))}_drawObj(t){return z(this,void 0,void 0,(function*(){let i=k(this,t),e=yield i.layout();return yield i.paint(),e}))}setFillStyle(t){"mp-baidu"==this.platform?this.ctx.setFillStyle(t):this.ctx.fillStyle=t}setStrokeStyle(t){"mp-baidu"==this.platform?this.ctx.setStrokeStyle(t):this.ctx.strokeStyle=t}measureText(t,i){if("mp-baidu"==this.platform){let e=this.ctx.measureText(t).width;if(e)return e/10*i}else{if("mp-alipay"==this.platform)return t.split("").reduce((t,i)=>{let e=i.charCodeAt(0);return t+(o[e-32]||1)},0)*i;{this.ctx.setFontSize(i);let e=this.ctx.measureText(t).width;if(e)return e}}return t.length*i}arcTo(t,i,e,n,r){return r<2?this.ctx.lineTo(t,i):this.ctx.arcTo(t,i,e,n,r)}}}]);
}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1589370815556);
})()
//# sourceMappingURL=index.js.map