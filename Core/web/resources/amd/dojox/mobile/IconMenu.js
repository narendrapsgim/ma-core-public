//>>built
define("dojo/_base/declare dojo/sniff dojo/dom-class dojo/dom-construct dojo/dom-style dojo/dom-attr dijit/_Contained dijit/_Container dijit/_WidgetBase dojo/has!dojo-bidi?dojox/mobile/bidi/IconMenu ./IconMenuItem".split(" "),function(d,k,e,f,q,l,b,r,s,t){b=d(k("dojo-bidi")?"dojox.mobile.NonBidiIconMenu":"dojox.mobile.IconMenu",[s,r,b],{transition:"slide",iconBase:"",iconPos:"",cols:3,tag:"ul",selectOne:!1,baseClass:"mblIconMenu",childItemClass:"mblIconMenuItem",_createTerminator:!1,buildRendering:function(){this.domNode=
this.containerNode=this.srcNodeRef||f.create(this.tag);l.set(this.domNode,"role","menu");this.inherited(arguments);if(this._createTerminator){var a=this._terminator=f.create("br");a.className=this.childItemClass+"Terminator";this.domNode.appendChild(a)}},startup:function(){this._started||(this.refresh(),this.inherited(arguments))},refresh:function(){var a=this.getParent();a&&e.remove(a.domNode,"mblSimpleDialogDecoration");a=this.getChildren();if(this.cols){var h=Math.ceil(a.length/this.cols),b=Math.floor(100/
this.cols),d=100-b*this.cols,f=Math.floor(100/h),n=100-f*h;k("ie")&&(d--,n--)}for(var c=0;c<a.length;c++){var g=a[c];if(this.cols){var l=0===c%this.cols,p=0===(c+1)%this.cols,m=Math.floor(c/this.cols);q.set(g.domNode,{width:b+(p?d:0)+"%",height:f+(m+1===h?n:0)+"%"});e.toggle(g.domNode,this.childItemClass+"FirstColumn",l);e.toggle(g.domNode,this.childItemClass+"LastColumn",p);e.toggle(g.domNode,this.childItemClass+"FirstRow",0===m);e.toggle(g.domNode,this.childItemClass+"LastRow",m+1===h)}}},addChild:function(a,
b){this.inherited(arguments);this.refresh()},hide:function(){var a=this.getParent();a&&a.hide&&a.hide()}});return k("dojo-bidi")?d("dojox.mobile.IconMenu",[b,t]):b});
//# sourceMappingURL=IconMenu.js.map