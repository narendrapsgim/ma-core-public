//>>built
define(["dojo","../../util/oo","../../manager/_registry","../../util/positioning","../Arrow"],function(h,f,k,g,l){f=f.declare(l,function(a){this.minimumSize=this.style.arrows.length;this.addShadow({size:3,mult:2})},{draws:!0,type:"dojox.drawing.tools.custom.Vector",minimumSize:30,showAngle:!0,changeAxis:function(a){a=void 0!==a?a:this.style.zAxis?0:1;if(0==a)this.style.zAxis=!1,this.data.cosphi=0;else{this.style.zAxis=!0;a=this.points;var b=this.zPoint();this.setPoints([{x:a[0].x,y:a[0].y},{x:b.x,
y:b.y}])}this.render()},_createZeroVector:function(a,b,c){b="hit"==a?this.minimumSize:this.minimumSize/6;var d="hit"==a?c.fill:null;b={cx:this.data.x1,cy:this.data.y1,rx:b,ry:b};this.remove(this[a]);this[a]=this.container.createEllipse(b).setStroke(c).setFill(d);this.util.attr(this[a],"drawingType","stencil")},_create:function(a,b,c){this.remove(this[a]);this[a]=this.container.createLine(b).setStroke(c);this._setNodeAtts(this[a])},onDrag:function(a){if(!this.created){var b=a.start.x,c=a.start.y,d=
a.x,e=a.y;this.keys.shift&&!this.style.zAxis&&(e=this.util.snapAngle(a,0.25),d=e.x,e=e.y);if(this.keys.alt)var f=d>b?(d-b)/2:(b-d)/-2,g=e>c?(e-c)/2:(c-e)/-2,b=b-f,d=d-f,c=c-g,e=e-g;this.style.zAxis&&(a=this.zPoint(a),d=a.x,e=a.y);this.setPoints([{x:b,y:c},{x:d,y:e}]);this.render()}},onTransform:function(a){if(!this._isBeingModified)this.onTransformBegin();this.setPoints(this.points);this.render()},anchorConstrain:function(a,b){if(!this.style.zAxis)return null;var c=this.style.zAngle*Math.PI/180,d=
0>a?a>-b:a<-b,e=d?a:-b/Math.tan(c),c=!d?b:-Math.tan(c)*a;return{x:e,y:c}},zPoint:function(a){if(void 0===a){if(!this.points[0])return null;a=this.pointsToData();a={start:{x:a.x1,y:a.y1},x:a.x2,y:a.y2}}var b=this.util.length(a),c=g.angle(a.start,a);0>c?c=360+c:c;c=135<c&&315>c?this.style.zAngle:this.util.oppAngle(this.style.zAngle);return this.util.pointOnCircle(a.start.x,a.start.y,b,c)},pointsToData:function(a){a=a||this.points;var b=0,c={start:{x:a[0].x,y:a[0].y},x:a[1].x,y:a[1].y};this.style.zAxis&&
this.util.length(c)>this.minimumSize&&(b=g.angle(c.start,c),0>b?b=360+b:b,b=135<b&&315>b?1:-1);return this.data={x1:a[0].x,y1:a[0].y,x2:a[1].x,y2:a[1].y,cosphi:b}},dataToPoints:function(a){a=a||this.data;if(a.radius||a.angle){var b=0,c=this.util.pointOnCircle(a.x,a.y,a.radius,a.angle);if(this.style.zAxis||a.cosphi&&0!=a.cosphi)this.style.zAxis=!0,b=135<a.angle&&315>a.angle?1:-1;this.data=a={x1:a.x,y1:a.y,x2:c.x,y2:c.y,cosphi:b}}return this.points=[{x:a.x1,y:a.y1},{x:a.x2,y:a.y2}]},render:function(){this.onBeforeRender(this);
this.getRadius()>=this.minimumSize?(this._create("hit",this.data,this.style.currentHit),this._create("shape",this.data,this.style.current)):(this.data.cosphi=0,this._createZeroVector("hit",this.data,this.style.currentHit),this._createZeroVector("shape",this.data,this.style.current))},onUp:function(a){if(!this.created&&this._downOnCanvas){this._downOnCanvas=!1;this.shape||(a.start.x=this.style.zAxis?a.start.x+100:a.start.x,a.y+=100,this.setPoints([{x:a.start.x,y:a.start.y},{x:a.x,y:a.y}]),this.render());
if(this.getRadius()<this.minimumSize){var b=this.points;this.setPoints([{x:b[0].x,y:b[0].y},{x:b[0].x,y:b[0].y}])}else b=this.points,a=this.style.zAxis?this.zPoint(a):this.util.snapAngle(a,this.angleSnap/180),this.setPoints([{x:b[0].x,y:b[0].y},{x:a.x,y:a.y}]);this.renderedOnce=!0;this.onRender(this)}}});h.setObject("dojox.drawing.tools.custom.Vector",f);f.setup={name:"dojox.drawing.tools.custom.Vector",tooltip:"Vector Tool",iconClass:"iconVector"};k.register(f.setup,"tool");return f});
//# sourceMappingURL=Vector.js.map