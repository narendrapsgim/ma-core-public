//>>built
define(["dojo/_base/lang","dojo/dom","../Context","../dom","../_base"],function(d,e,f,b,g){b=d.getObject("render.dom",!0,g);b.Render=function(a,c){this._tpl=c;this.domNode=e.byId(a)};d.extend(b.Render,{setAttachPoint:function(a){this.domNode=a},render:function(a,c,b){if(!this.domNode)throw Error("You cannot use the Render object without specifying where you want to render it");this._tpl=c=c||this._tpl;b=b||c.getBuffer();a=a||new f;a=c.render(a,b).getParent();if(!a)throw Error("Rendered template does not have a root node");
this.domNode!==a&&(this.domNode.parentNode&&this.domNode.parentNode.replaceChild(a,this.domNode),this.domNode=a)}});return b});
//# sourceMappingURL=dom.js.map