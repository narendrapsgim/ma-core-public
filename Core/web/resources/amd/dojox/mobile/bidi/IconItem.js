//>>built
define(["dojo/_base/declare","./common"],function(c,b){return c(null,{_applyAttributes:function(){!this.textDir&&(this.getParent()&&this.getParent().get("textDir"))&&(this.textDir=this.getParent().get("textDir"));this.inherited(arguments)},_setLabelAttr:function(a){this.textDir&&(a=b.enforceTextDirWithUcc(a,this.textDir));this.inherited(arguments)},_setTextDirAttr:function(a){a&&this.textDir!==a&&(this.textDir=a,this.labelNode.innerHTML=b.removeUCCFromText(this.labelNode.innerHTML),this.labelNode.innerHTML=
b.enforceTextDirWithUcc(this.labelNode.innerHTML,this.textDir),this.paneWidget&&(this.paneWidget.labelNode.innerHTML=b.removeUCCFromText(this.paneWidget.labelNode.innerHTML),this.paneWidget.labelNode.innerHTML=b.enforceTextDirWithUcc(this.paneWidget.labelNode.innerHTML,this.textDir)))}})});
//# sourceMappingURL=IconItem.js.map