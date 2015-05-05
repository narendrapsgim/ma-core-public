//>>built
define(["dojo/_base/declare","dojo/_base/Color"],function(c,b){return c("dojox.dgauges.components.DefaultPropertiesMixin",null,{minimum:0,maximum:100,snapInterval:1,majorTickInterval:NaN,minorTickInterval:NaN,minorTicksEnabled:!0,value:0,interactionArea:"gauge",interactionMode:"mouse",animationDuration:0,_setMinimumAttr:function(a){this.getElement("scale").scaler.set("minimum",a)},_setMaximumAttr:function(a){this.getElement("scale").scaler.set("maximum",a)},_setSnapIntervalAttr:function(a){this.getElement("scale").scaler.set("snapInterval",
a)},_setMajorTickIntervalAttr:function(a){this.getElement("scale").scaler.set("majorTickInterval",a)},_setMinorTickIntervalAttr:function(a){this.getElement("scale").scaler.set("minorTickInterval",a)},_setMinorTicksEnabledAttr:function(a){this.getElement("scale").scaler.set("minorTicksEnabled",a)},_setInteractionAreaAttr:function(a){this.getElement("scale").getIndicator("indicator").set("interactionArea",a)},_setInteractionModeAttr:function(a){this.getElement("scale").getIndicator("indicator").set("interactionMode",
a)},_setAnimationDurationAttr:function(a){this.getElement("scale").getIndicator("indicator").set("animationDuration",a)},_setBorderColorAttr:function(a){this.borderColor=new b(a);this.invalidateRendering()},_setFillColorAttr:function(a){this.fillColor=new b(a);this.invalidateRendering()},_setIndicatorColorAttr:function(a){this.indicatorColor=new b(a);this.invalidateRendering()}})});
//# sourceMappingURL=DefaultPropertiesMixin.js.map