//>>built
define("dojo/_base/array dojo/_base/declare ./_StoreMixin ./ListItem dojo/has dojo/has!dojo-bidi?dojox/mobile/bidi/_StoreListMixin".split(" "),function(d,f,c,g,e,h){c=f(e("dojo-bidi")?"dojox.mobile._NonBidiStoreListMixin":"dojox.mobile._StoreListMixin",c,{append:!1,itemMap:null,itemRenderer:g,buildRendering:function(){this.inherited(arguments);if(this.store){var a=this.store;this.store=null;this.setStore(a,this.query,this.queryOptions)}},createListItem:function(a){return new this.itemRenderer(this._createItemProperties(a))},
_createItemProperties:function(a){var b={};a.label||(b.label=a[this.labelProperty]);e("dojo-bidi")&&"undefined"==typeof b.dir&&(b.dir=this.isLeftToRight()?"ltr":"rtl");for(var c in a)b[this.itemMap&&this.itemMap[c]||c]=a[c];return b},_setDirAttr:function(a){return a},generateList:function(a){this.append||d.forEach(this.getChildren(),function(a){a.destroyRecursive()});d.forEach(a,function(a,c){this.addChild(this.createListItem(a));a[this.childrenProperty]&&d.forEach(a[this.childrenProperty],function(a,
b){this.addChild(this.createListItem(a))},this)},this)},onComplete:function(a){this.generateList(a)},onError:function(){},onAdd:function(a,b){this.addChild(this.createListItem(a),b)},onUpdate:function(a,b){this.getChildren()[b].set(this._createItemProperties(a))},onDelete:function(a,b){this.getChildren()[b].destroyRecursive()}});return e("dojo-bidi")?f("dojox.mobile._StoreListMixin",[c,h]):c});
//# sourceMappingURL=_StoreListMixin.js.map