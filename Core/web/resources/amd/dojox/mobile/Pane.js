//>>built
define(["dojo/_base/array","dojo/_base/declare","dijit/_Contained","dijit/_WidgetBase"],function(b,c,d,e){return c("dojox.mobile.Pane",[e,d],{baseClass:"mblPane",buildRendering:function(){this.inherited(arguments);this.containerNode||(this.containerNode=this.domNode)},resize:function(){b.forEach(this.getChildren(),function(a){a.resize&&a.resize()})}})});
//# sourceMappingURL=Pane.js.map