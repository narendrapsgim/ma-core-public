//>>built
define("require dojo/when dojo/on dojo/dom-attr dojo/dom-style dojo/_base/declare dojo/_base/lang dojo/Deferred ./utils/model ./utils/constraints".split(" "),function(f,e,r,m,n,h,b,k,p,q){return h("dojox.app.ViewBase",null,{constructor:function(a){this.name=this.id="";this.children={};this.selectedChildren={};this.loadedStores={};this._started=!1;b.mixin(this,a);this.parent.views&&b.mixin(this,this.parent.views[this.name])},start:function(){if(this._started)return this;this._startDef=new k;e(this.load(),
b.hitch(this,function(){this._createDataStore(this);this._setupModel()}));return this._startDef},load:function(){var a=this._loadViewController();e(a,b.hitch(this,function(a){a&&h.safeMixin(this,a)}));return a},_createDataStore:function(){this.parent.loadedStores&&b.mixin(this.loadedStores,this.parent.loadedStores);if(this.stores)for(var a in this.stores)if("_"!==a.charAt(0)){var c=this.stores[a].type?this.stores[a].type:"dojo/store/Memory",d={};this.stores[a].params&&b.mixin(d,this.stores[a].params);
try{var l=f(c)}catch(e){throw Error(c+" must be listed in the dependencies");}d.data&&b.isString(d.data)&&(d.data=b.getObject(d.data));if(this.stores[a].observable){try{var g=f("dojo/store/Observable")}catch(s){throw Error("dojo/store/Observable must be listed in the dependencies");}this.stores[a].store=g(new l(d))}else this.stores[a].store=new l(d);this.loadedStores[a]=this.stores[a].store}},_setupModel:function(){if(this.loadedModels)this._startup();else{var a;try{a=p(this.models,this.parent,this.app)}catch(c){throw Error("Error creating models: "+
c.message);}e(a,b.hitch(this,function(a){a&&(this.loadedModels=b.isArray(a)?a[0]:a);this._startup()}),function(a){throw Error("Error creating models: "+a.message);})}},_startup:function(){this._initViewHidden();this._needsResize=!0;this._startLayout()},_initViewHidden:function(){n.set(this.domNode,"visibility","hidden")},_startLayout:function(){this.app.log("  \x3e in app/ViewBase _startLayout firing layout for name\x3d[",this.name,"], parent.name\x3d[",this.parent.name,"]");this.hasOwnProperty("constraint")||
(this.constraint=m.get(this.domNode,"data-app-constraint")||"center");q.register(this.constraint);this.app.emit("app-initLayout",{view:this,callback:b.hitch(this,function(){this.startup();this.app.log("  \x3e in app/ViewBase calling init() name\x3d[",this.name,"], parent.name\x3d[",this.parent.name,"]");this.init();this._started=!0;this._startDef&&this._startDef.resolve(this)})})},_loadViewController:function(){var a=new k,c;if(this.controller)c=this.controller.replace(/(\.js)$/,"");else return this.app.log("  \x3e in app/ViewBase _loadViewController no controller set for view name\x3d[",
this.name,"], parent.name\x3d[",this.parent.name,"]"),a.resolve(!0),a;var d;try{var b=c,e=b.indexOf("./");0<=e&&(b=c.substring(e+2));d=f.on?f.on("error",function(c){!a.isResolved()&&!a.isRejected()&&(c.info[0]&&0<=c.info[0].indexOf(b))&&(a.resolve(!1),d&&d.remove())}):null;0==c.indexOf("./")&&(c="app/"+c);f([c],function(b){a.resolve(b);d&&d.remove()})}catch(g){a.reject(g),d&&d.remove()}return a},init:function(){},beforeActivate:function(){},afterActivate:function(){},beforeDeactivate:function(){},
afterDeactivate:function(){},destroy:function(){}})});
//# sourceMappingURL=ViewBase.js.map