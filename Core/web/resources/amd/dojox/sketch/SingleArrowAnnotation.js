//>>built
define(["dojo/_base/kernel","dojo/_base/lang","./Annotation","./Anchor"],function(b){b.getObject("sketch",!0,dojox);var e=dojox.sketch;e.SingleArrowAnnotation=function(a,c){e.Annotation.call(this,a,c);this.transform={dx:0,dy:0};this.start={x:0,y:0};this.control={x:100,y:-50};this.end={x:200,y:0};this.textPosition={x:0,y:0};this.textOffset=4;this.textYOffset=10;this.rotation=0;this.labelShape=this.arrowheadGroup=this.arrowhead=this.pathShape=null;this.anchors.start=new e.Anchor(this,"start");this.anchors.control=
new e.Anchor(this,"control");this.anchors.end=new e.Anchor(this,"end")};e.SingleArrowAnnotation.prototype=new e.Annotation;b=e.SingleArrowAnnotation.prototype;b.constructor=e.SingleArrowAnnotation;b.type=function(){return"SingleArrow"};b.getType=function(){return e.SingleArrowAnnotation};b._rot=function(){this.rotation=Math.atan2(this.control.y-this.start.y,this.control.x-this.start.x)};b._pos=function(){var a=this.textOffset,c=0,d=0,c=this.calculate.slope(this.control,this.end);this.textAlign="middle";
1<=Math.abs(c)?(c=this.end.x+this.calculate.dx(this.control,this.end,a),d=this.control.y>this.end.y?this.end.y-a:this.end.y+a+this.textYOffset):0==c?(c=this.end.x+a,d=this.end.y+this.textYOffset):(this.start.x>this.end.x?(c=this.end.x-a,this.textAlign="end"):(c=this.end.x+a,this.textAlign="start"),d=this.start.y<this.end.y?this.end.y+this.calculate.dy(this.control,this.end,a)+this.textYOffset:this.end.y+this.calculate.dy(this.control,this.end,-a));this.textPosition={x:c,y:d}};b.apply=function(a){if(a){a.documentElement&&
(a=a.documentElement);this.readCommonAttrs(a);for(var c=0;c<a.childNodes.length;c++){var d=a.childNodes[c];if("text"==d.localName)this.property("label",d.childNodes.length?d.childNodes[0].nodeValue:"");else if("path"==d.localName){var b=d.getAttribute("d").split(" "),f=b[0].split(",");this.start.x=parseFloat(f[0].substr(1),10);this.start.y=parseFloat(f[1],10);f=b[1].split(",");this.control.x=parseFloat(f[0].substr(1),10);this.control.y=parseFloat(f[1],10);f=b[2].split(",");this.end.x=parseFloat(f[0],
10);this.end.y=parseFloat(f[1],10);b=this.property("stroke");d=d.getAttribute("style");if(f=d.match(/stroke:([^;]+);/))b.color=f[1],this.property("fill",f[1]);if(f=d.match(/stroke-width:([^;]+);/))b.width=f[1];this.property("stroke",b)}}}};b.initialize=function(a){this.apply(a);this._rot();this._pos();dojox.gfx.matrix.rotate(this.rotation);this.shape=this.figure.group.createGroup();this.shape.getEventSource().setAttribute("id",this.id);this.pathShape=this.shape.createPath("M"+this.start.x+","+this.start.y+
" Q"+this.control.x+","+this.control.y+" "+this.end.x+","+this.end.y+" l0,0");this.arrowheadGroup=this.shape.createGroup();this.arrowhead=this.arrowheadGroup.createPath();this.labelShape=this.shape.createText({x:this.textPosition.x,y:this.textPosition.y,text:this.property("label"),align:this.textAlign});this.labelShape.getEventSource().setAttribute("id",this.id+"-labelShape");this.draw()};b.destroy=function(){this.shape&&(this.arrowheadGroup.remove(this.arrowhead),this.shape.remove(this.arrowheadGroup),
this.shape.remove(this.pathShape),this.shape.remove(this.labelShape),this.figure.group.remove(this.shape),this.shape=this.pathShape=this.labelShape=this.arrowheadGroup=this.arrowhead=null)};b.draw=function(a){this.apply(a);this._rot();this._pos();a=dojox.gfx.matrix.rotate(this.rotation);this.shape.setTransform(this.transform);this.pathShape.setShape("M"+this.start.x+","+this.start.y+" Q"+this.control.x+","+this.control.y+" "+this.end.x+","+this.end.y+" l0,0");this.arrowheadGroup.setTransform({dx:this.start.x,
dy:this.start.y}).applyTransform(a);this.arrowhead.setFill(this.property("fill"));this.labelShape.setShape({x:this.textPosition.x,y:this.textPosition.y,text:this.property("label"),align:this.textAlign}).setFill(this.property("fill"));this.zoom()};b.zoom=function(a){if(this.arrowhead&&(a=a||this.figure.zoomFactor,e.Annotation.prototype.zoom.call(this,a),this._curPct!==a)){this._curPct=a;var c=1<a?5:Math.floor(5/a),b=1<a?3:Math.floor(3/a);this.arrowhead.setShape("M0,0 l"+(1<a?20:Math.floor(20/a))+",-"+
c+" -"+b+","+c+" "+b+","+c+" Z")}};b.getBBox=function(){var a=Math.min(this.start.x,this.control.x,this.end.x),b=Math.min(this.start.y,this.control.y,this.end.y),d=Math.max(this.start.x,this.control.x,this.end.x)-a,e=Math.max(this.start.y,this.control.y,this.end.y)-b;return{x:a,y:b,width:d,height:e}};b.serialize=function(){var a=this.property("stroke"),b=this.rotation*(180/Math.PI),b=Math.round(b*Math.pow(10,4))/Math.pow(10,4);return"\x3cg "+this.writeCommonAttrs()+'\x3e\x3cpath style\x3d"stroke:'+
a.color+";stroke-width:"+a.width+';fill:none;" d\x3d"M'+this.start.x+","+this.start.y+" Q"+this.control.x+","+this.control.y+" "+this.end.x+","+this.end.y+'" /\x3e\x3cg transform\x3d"translate('+this.start.x+","+this.start.y+") rotate("+b+')"\x3e\x3cpath style\x3d"fill:'+a.color+';" d\x3d"M0,0 l20,-5, -3,5, 3,5 Z" /\x3e\x3c/g\x3e\x3ctext style\x3d"fill:'+a.color+";text-anchor:"+this.textAlign+'" font-weight\x3d"bold" x\x3d"'+this.textPosition.x+'" y\x3d"'+this.textPosition.y+'"\x3e'+this.property("label")+
"\x3c/text\x3e\x3c/g\x3e"};e.Annotation.register("SingleArrow");return dojox.sketch.SingleArrowAnnotation});
//# sourceMappingURL=SingleArrowAnnotation.js.map