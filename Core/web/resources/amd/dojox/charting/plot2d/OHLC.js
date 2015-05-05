//>>built
define("dojo/_base/lang dojo/_base/array dojo/_base/declare dojo/has ./CartesianBase ./_PlotEvents ./common dojox/lang/functional dojox/lang/functional/reversed dojox/lang/utils dojox/gfx/fx".split(" "),function(q,C,w,G,x,y,D,H,I,s,J){var K=I.lambda("item.purgeGroup()");return w("dojox.charting.plot2d.OHLC",[x,y],{defaultParams:{gap:2,animate:null},optionalParams:{minBarSize:1,maxBarSize:1,stroke:{},outline:{},shadow:{},fill:{},font:"",fontColor:""},constructor:function(a,b){this.opt=q.clone(this.defaultParams);
s.updateWithObject(this.opt,b);s.updateWithPattern(this.opt,b,this.optionalParams);this.animate=this.opt.animate},collectStats:function(a){for(var b=q.delegate(D.defaultStats),g=0;g<a.length;g++){var d=a[g];if(d.data.length){var c=b.vmin,t=b.vmax;(!("ymin"in d)||!("ymax"in d))&&C.forEach(d.data,function(a,c){if(null!==a){var d=a.x||c+1;b.hmin=Math.min(b.hmin,d);b.hmax=Math.max(b.hmax,d);b.vmin=Math.min(b.vmin,a.open,a.close,a.high,a.low);b.vmax=Math.max(b.vmax,a.open,a.close,a.high,a.low)}});"ymin"in
d&&(b.vmin=Math.min(c,d.ymin));"ymax"in d&&(b.vmax=Math.max(t,d.ymax))}}return b},getSeriesStats:function(){var a=this.collectStats(this.series);a.hmin-=0.5;a.hmax+=0.5;return a},render:function(a,b){if(this.zoom&&!this.isDataDirty())return this.performZoom(a,b);this.resetEvents();if(this.dirty=this.isDirty()){C.forEach(this.series,K);this._eventSeries={};this.cleanGroup();var g=this.getGroup();H.forEachRev(this.series,function(a){a.cleanGroup(g)})}var d=this.chart.theme,c,t,q=this._hScaler.scaler.getTransformerFromModel(this._hScaler),
u=this._vScaler.scaler.getTransformerFromModel(this._vScaler),s=this.events();c=D.calculateBarSize(this._hScaler.bounds.scale,this.opt);t=c.gap;c=c.size;for(var z=this.series.length-1;0<=z;--z){var e=this.series[z];if(!this.dirty&&!e.dirty)d.skip(),this._reconnectEvents(e.name);else{e.cleanGroup();for(var w=d.next("candlestick",[this.opt,e]),g=e.group,E=Array(e.data.length),m=0;m<e.data.length;++m){var f=e.data[m];if(null!==f){var n=d.addMixin(w,"candlestick",f,!0),F=q(f.x||m+0.5)+b.l+t,l=a.height-
b.b,h=u(f.open),k=u(f.close),r=u(f.high),p=u(f.low);if(p>r)var A=r,r=p,p=A;if(1<=c){var A={x1:c/2,x2:c/2,y1:l-r,y2:l-p},x={x1:0,x2:c/2+(n.series.stroke.width||1)/2,y1:l-h,y2:l-h},y={x1:c/2-(n.series.stroke.width||1)/2,x2:c,y1:l-k,y2:l-k},B=g.createGroup();B.setTransform({dx:F,dy:0});var v=B.createGroup();v.createLine(A).setStroke(n.series.stroke);v.createLine(x).setStroke(n.series.stroke);v.createLine(y).setStroke(n.series.stroke);e.dyn.stroke=n.series.stroke;s&&(f={element:"candlestick",index:m,
run:e,shape:v,x:F,y:l-Math.max(h,k),cx:c/2,cy:l-Math.max(h,k)+Math.max(h>k?h-k:k-h,1)/2,width:c,height:Math.max(h>k?h-k:k-h,1),data:f},this._connectEvents(f),E[m]=f)}this.animate&&this._animateOHLC(B,l-p,r-p)}}this._eventSeries[e.name]=E;e.dirty=!1}}this.dirty=!1;G("dojo-bidi")&&this._checkOrientation(this.group,a,b);return this},_animateOHLC:function(a,b,g){J.animateTransform(q.delegate({shape:a,duration:1200,transform:[{name:"translate",start:[0,b-b/g],end:[0,0]},{name:"scale",start:[1,1/g],end:[1,
1]},{name:"original"}]},this.animate)).play()}})});
//# sourceMappingURL=OHLC.js.map