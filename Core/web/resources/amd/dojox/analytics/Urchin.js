//>>built
define(["dojo/_base/lang","dojo/_base/declare","dojo/_base/window","dojo/_base/config","dojo/dom-construct"],function(d,c,e,g,h){return c("dojox.analytics.Urchin",null,{acct:"",constructor:function(a){this.tracker=null;d.mixin(this,a);this.acct=this.acct||g.urchin;var c=/loaded|complete/;a="https:"==e.doc.location.protocol?"https://ssl.":"http://www.";var f=e.doc.getElementsByTagName("head")[0],b=h.create("script",{src:a+"google-analytics.com/ga.js"},f);b.onload=b.onreadystatechange=d.hitch(this,
function(a){if(a&&"load"==a.type||c.test(b.readyState))b.onload=b.onreadystatechange=null,this._gotGA(),f.removeChild(b)})},_gotGA:function(){this.tracker=_gat._getTracker(this.acct);this.GAonLoad.apply(this,arguments)},GAonLoad:function(){this.trackPageView()},trackPageView:function(a){this.tracker._trackPageview.apply(this.tracker,arguments)}})});
//# sourceMappingURL=Urchin.js.map