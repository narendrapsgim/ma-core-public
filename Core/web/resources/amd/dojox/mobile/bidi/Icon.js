//>>built
define(["dojo/_base/declare","dojo/dom-style","../_css3"],function(c,a,b){return c(null,{_setCustomTransform:function(){if("rtl"==(this.dir||a.get(this.domNode,"direction")))a.set(this.domNode.firstChild,b.add({direction:"ltr"},{})),a.set(this.domNode,b.add({},{transform:"scaleX(-1)"}))}})});
//# sourceMappingURL=Icon.js.map