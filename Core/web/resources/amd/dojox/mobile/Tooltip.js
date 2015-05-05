//>>built
define("dojo/_base/array dijit/registry dojo/_base/declare dojo/_base/lang dojo/dom-class dojo/dom-construct dojo/dom-geometry dojo/dom-style dijit/place dijit/_WidgetBase dojo/has dojo/has!dojo-bidi?dojox/mobile/bidi/Tooltip".split(" "),function(h,n,k,p,f,b,l,q,r,a,m,s){a=k(m("dojo-bidi")?"dojox.mobile.NonBidiTooltip":"dojox.mobile.Tooltip",a,{baseClass:"mblTooltip mblTooltipHidden",buildRendering:function(){this.inherited(arguments);this.anchor=b.create("div",{"class":"mblTooltipAnchor"},this.domNode,
"first");this.arrow=b.create("div",{"class":"mblTooltipArrow"},this.anchor);this.innerArrow=b.create("div",{"class":"mblTooltipInnerArrow"},this.anchor);this.containerNode||(this.containerNode=this.domNode)},show:function(a,d){var c=this.domNode;f.remove(c,["mblTooltipAfter","mblTooltipBefore","mblTooltipBelow","mblTooltipAbove"]);h.forEach(n.findWidgets(c),function(a){"auto"==a.height&&"function"==typeof a.resize&&(a._parentPadBorderExtentsBottom||(a._parentPadBorderExtentsBottom=l.getPadBorderExtents(c).b),
a.resize())});d&&(d=h.map(d,function(a){return{after:"after-centered",before:"before-centered"}[a]||a}));var e=r.around(c,a,d||["below-centered","above-centered","after-centered","before-centered"],this.isLeftToRight()),b={MRM:"mblTooltipAfter",MLM:"mblTooltipBefore",BMT:"mblTooltipBelow",TMB:"mblTooltipAbove",BLT:"mblTooltipBelow",TLB:"mblTooltipAbove",BRT:"mblTooltipBelow",TRB:"mblTooltipAbove",TLT:"mblTooltipBefore",TRT:"mblTooltipAfter",BRB:"mblTooltipAfter",BLB:"mblTooltipBefore"}[e.corner+e.aroundCorner.charAt(0)]||
"";f.add(c,b);var g=l.position(a,!0);q.set(this.anchor,"mblTooltipAbove"==b||"mblTooltipBelow"==b?{top:"",left:Math.max(0,g.x-e.x+(g.w>>1)-(this.arrow.offsetWidth>>1))+"px"}:{left:"",top:Math.max(0,g.y-e.y+(g.h>>1)-(this.arrow.offsetHeight>>1))+"px"});f.replace(c,"mblTooltipVisible","mblTooltipHidden");this.resize=p.hitch(this,"show",a,d);return e},hide:function(){this.resize=void 0;f.replace(this.domNode,"mblTooltipHidden","mblTooltipVisible")},onBlur:function(a){return!0},destroy:function(){this.anchor&&
(this.anchor.removeChild(this.innerArrow),this.anchor.removeChild(this.arrow),this.domNode.removeChild(this.anchor),this.anchor=this.arrow=this.innerArrow=void 0);this.inherited(arguments)}});return m("dojo-bidi")?k("dojox.mobile.Tooltip",[a,s]):a});
//# sourceMappingURL=Tooltip.js.map