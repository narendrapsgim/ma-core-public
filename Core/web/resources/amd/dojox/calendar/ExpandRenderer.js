//>>built
require({cache:{"url:dojox/calendar/templates/ExpandRenderer.html":'\x3cdiv class\x3d"dojoxCalendarExpand" onselectstart\x3d"return false;" data-dojo-attach-event\x3d"click:_onClick,touchstart:_onMouseDown,touchend:_onClick,mousedown:_onMouseDown,mouseup:_onMouseUp,mouseover:_onMouseOver,mouseout:_onMouseOut"\x3e\n\t\x3cdiv class\x3d"bg"\x3e\x3cspan data-dojo-attach-point\x3d"expand"\x3e\u25bc\x3c/span\x3e\x3cspan style\x3d"display:none" data-dojo-attach-point\x3d"collapse"\x3e\u25b2\x3c/span\x3e\x3c/div\x3e\t\n\x3c/div\x3e\n'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/event dojo/_base/window dojo/on dojo/dom-class dojo/dom-style dijit/_WidgetBase dijit/_TemplatedMixin dojo/text!./templates/ExpandRenderer.html".split(" "),function(d,m,e,f,n,g,c,h,k,l){return d("dojox.calendar.ExpandRenderer",[h,k],{templateString:l,baseClass:"dojoxCalendarExpand",owner:null,focused:!1,up:!1,down:!1,date:null,items:null,rowIndex:-1,columnIndex:-1,_setExpandedAttr:function(a){c.set(this.expand,"display",a?"none":"inline-block");
c.set(this.collapse,"display",a?"inline-block":"none");this._set("expanded",a)},_setDownAttr:function(a){this._setState("down",a,"Down")},_setUpAttr:function(a){this._setState("up",a,"Up")},_setFocusedAttr:function(a){this._setState("focused",a,"Focused")},_setState:function(a,b,c){this[a]!=b&&(g[b?"add":"remove"](this.stateNode||this.domNode,c),this._set(a,b))},_onClick:function(a){this.owner&&this.owner.expandRendererClickHandler&&this.owner.expandRendererClickHandler(a,this)},_onMouseDown:function(a){e.stop(a);
this.set("down",!0)},_onMouseUp:function(a){this.set("down",!1)},_onMouseOver:function(a){this.up||(a=1==a.button,this.set("up",!a),this.set("down",a))},_onMouseOut:function(a){for(var b=a.relatedTarget;b!=a.currentTarget&&b!=f.doc.body&&null!=b;)b=b.parentNode;b!=a.currentTarget&&(this.set("up",!1),this.set("down",!1))}})});
//# sourceMappingURL=ExpandRenderer.js.map