//>>built
define(["dojo/_base/declare","dojo/_base/html","dojo/window","dijit/Dialog"],function(e,d,f,g){return e("dojox.grid.enhanced.plugins.Dialog",g,{refNode:null,_position:function(){if(this.refNode&&!this._relativePosition){var a=d.position(d.byId(this.refNode)),b=d.position(this.domNode),c=f.getBox();b.w&&b.h&&(0>a.x&&(a.x=0),a.x+a.w>c.w&&(a.w=c.w-a.x),0>a.y&&(a.y=0),a.y+a.h>c.h&&(a.h=c.h-a.y),a.x=a.x+a.w/2-b.w/2,a.y=a.y+a.h/2-b.h/2,0<=a.x&&(a.x+b.w<=c.w&&0<=a.y&&a.y+b.h<=c.h)&&(this._relativePosition=
a))}this.inherited(arguments)}})});
//# sourceMappingURL=Dialog.js.map