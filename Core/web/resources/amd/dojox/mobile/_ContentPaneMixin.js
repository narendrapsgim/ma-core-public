//>>built
define("dojo/_base/declare dojo/_base/Deferred dojo/_base/lang dojo/_base/window dojo/_base/xhr ./_ExecScriptMixin ./ProgressIndicator ./lazyLoadUtils".split(" "),function(d,e,c,f,g,h,k,l){return d("dojox.mobile._ContentPaneMixin",h,{href:"",lazy:!1,content:"",parseOnLoad:!0,prog:!0,executeScripts:!0,constructor:function(){this.prog&&(this._p=k.getInstance())},loadHandler:function(a){this.set("content",a)},errorHandler:function(a){this._p&&this._p.stop()},load:function(){this.lazy=!1;this.set("href",
this.href)},onLoad:function(){return!0},_setHrefAttr:function(a){if(this.lazy||!a||a===this._loaded)return this.lazy=!1,null;var b=this._p;b&&(f.body().appendChild(b.domNode),b.start());this._set("href",a);this._loaded=a;return g.get({url:a,handleAs:"text",load:c.hitch(this,"loadHandler"),error:c.hitch(this,"errorHandler")})},_setContentAttr:function(a){this.destroyDescendants();"object"===typeof a?this.containerNode.appendChild(a):(this.executeScripts&&(a=this.execScript(a)),this.containerNode.innerHTML=
a);if(this.parseOnLoad){var b=this;return e.when(l.instantiateLazyWidgets(b.containerNode),function(){b._p&&b._p.stop();return b.onLoad()})}this._p&&this._p.stop();return this.onLoad()}})});
//# sourceMappingURL=_ContentPaneMixin.js.map