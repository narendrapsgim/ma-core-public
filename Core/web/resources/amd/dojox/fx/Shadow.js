//>>built
define("dojo/_base/kernel dojo/_base/query dojo/_base/lang dojo/_base/declare dojo/_base/sniff dojo/dom-construct dojo/dom-class dojo/dom-geometry dojo/_base/fx dojo/fx dijit/_Widget dojo/NodeList-fx".split(" "),function(f,n,p,q,g,h,s,t,u,v,w,y){f.experimental("dojox.fx.Shadow");return q("dojox.fx.Shadow",w,{shadowPng:f.moduleUrl("dojox.fx","resources/shadow"),shadowThickness:7,shadowOffset:3,opacity:0.75,animate:!1,node:null,startup:function(){this.inherited(arguments);this.node.style.position="relative";
this.pieces={};var a=-1*this.shadowThickness,c=this.shadowOffset,d=this.shadowOffset+this.shadowThickness;this._makePiece("tl","top",c,"left",a);this._makePiece("l","top",d,"left",a,"scale");this._makePiece("tr","top",c,"left",0);this._makePiece("r","top",d,"left",0,"scale");this._makePiece("bl","top",0,"left",a);this._makePiece("b","top",0,"left",0,"crop");this._makePiece("br","top",0,"left",0);this.nodeList=n(".shadowPiece",this.node);this.setOpacity(this.opacity);this.resize()},_makePiece:function(a,
c,d,x,f,k){var e,m=this.shadowPng+a.toUpperCase()+".png";7>g("ie")?(e=h.create("div"),e.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src\x3d'"+m+"'"+(k?", sizingMethod\x3d'"+k+"'":"")+")"):e=h.create("img",{src:m});e.style.position="absolute";e.style[c]=d+"px";e.style[x]=f+"px";e.style.width=this.shadowThickness+"px";e.style.height=this.shadowThickness+"px";s.add(e,"shadowPiece");this.pieces[a]=e;this.node.appendChild(e)},setOpacity:function(a,c){if(!g("ie"))if(c||(c={}),this.animate){var d=
[];this.nodeList.forEach(function(f){d.push(u._fade(p.mixin(c,{node:f,end:a})))});v.combine(d).play()}else this.nodeList.style("opacity",a)},setDisabled:function(a){a?this.disabled||(this.animate?this.nodeList.fadeOut().play():this.nodeList.style("visibility","hidden"),this.disabled=!0):this.disabled&&(this.animate?this.nodeList.fadeIn().play():this.nodeList.style("visibility","visible"),this.disabled=!1)},resize:function(a){var c;a?(c=a.x,a=a.y):(a=t.position(this.node),c=a.w,a=a.h);var d=a-(this.shadowOffset+
this.shadowThickness);0>d&&(d=0);1>a&&(a=1);1>c&&(c=1);with(this.pieces)l.style.height=d+"px",r.style.height=d+"px",b.style.width=c+"px",bl.style.top=a+"px",b.style.top=a+"px",br.style.top=a+"px",tr.style.left=c+"px",r.style.left=c+"px",br.style.left=c+"px"}})});
//# sourceMappingURL=Shadow.js.map