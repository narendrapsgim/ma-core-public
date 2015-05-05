//>>built
define("dojo dijit dojox dijit/_base/manager dijit/_base/popup dijit/_Widget dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/Dialog dijit/MenuItem dijit/Menu dijit/form/Button dijit/form/ComboButton dijit/form/ComboBox dijit/form/_TextBoxMixin dijit/form/TextBox dijit/TooltipDialog dijit/_editor/_Plugin dojo/_base/connect dojo/_base/declare dojo/date/locale dojo/i18n dojo/string dojox/editor/plugins/Save dojo/i18n!dojox/editor/plugins/nls/AutoSave".split(" "),function(b,c,m,n,p,g,h,k,q,
r,s,t,u,v,w,x,y,z,A,B,C,D,E,l){b.experimental("dojox.editor.plugins.AutoSave");var f=b.declare("dojox.editor.plugins._AutoSaveSettingDialog",[g,h,k],{dialogTitle:"",dialogDescription:"",paramName:"",paramLabel:"",btnOk:"",btnCancel:"",widgetsInTemplate:!0,templateString:"\x3cspan id\x3d'${dialogId}' class\x3d'dijit dijitReset dijitInline' tabindex\x3d'-1'\x3e\x3cdiv dojoType\x3d'dijit.Dialog' title\x3d'${dialogTitle}' dojoAttachPoint\x3d'dialog' class\x3d'dijitEditorAutoSaveSettingDialog'\x3e\x3cdiv tabindex\x3d'-1'\x3e${dialogDescription}\x3c/div\x3e\x3cdiv tabindex\x3d'-1' class\x3d'dijitEditorAutoSaveSettingInputArea'\x3e${paramName}\x3c/div\x3e\x3cdiv class\x3d'dijitEditorAutoSaveSettingInputArea' tabindex\x3d'-1'\x3e\x3cinput class\x3d'textBox' dojoType\x3d'dijit.form.TextBox' id\x3d'${textBoxId}' required\x3d'false' intermediateChanges\x3d'true' selectOnClick\x3d'true' required\x3d'true' dojoAttachPoint\x3d'intBox' dojoAttachEvent\x3d'onKeyDown: _onKeyDown, onChange: _onChange'/\x3e\x3clabel class\x3d'dijitLeft dijitInline boxLabel' for\x3d'${textBoxId}' tabindex\x3d'-1'\x3e${paramLabel}\x3c/label\x3e\x3c/div\x3e\x3cdiv class\x3d'dijitEditorAutoSaveSettingButtonArea' tabindex\x3d'-1'\x3e\x3cbutton dojoType\x3d'dijit.form.Button' dojoAttachEvent\x3d'onClick: onOk'\x3e${btnOk}\x3c/button\x3e\x3cbutton dojoType\x3d'dijit.form.Button' dojoAttachEvent\x3d'onClick: onCancel'\x3e${btnCancel}\x3c/button\x3e\x3c/div\x3e\x3c/div\x3e\x3c/span\x3e",
postMixInProperties:function(){this.id=c.getUniqueId(this.declaredClass.replace(/\./g,"_"));this.dialogId=this.id+"_dialog";this.textBoxId=this.id+"_textBox"},show:function(){""==this._value?(this._value=0,this.intBox.set("value",0)):this.intBox.set("value",this._value);this.dialog.show();c.selectInputText(this.intBox.focusNode)},hide:function(){this.dialog.hide()},onOk:function(){this.dialog.hide()},onCancel:function(){this.dialog.hide()},_onKeyDown:function(a){if(a.keyCode==b.keys.ENTER)this.onOk()},
_onChange:function(a){this._isValidValue(a)?this._value=a:this.intBox.set("value",this._value)},_setValueAttr:function(a){this._isValidValue(a)&&(this._value=a)},_getValueAttr:function(){return this._value},_isValidValue:function(a){var b=/^\d{0,3}$/;a=String(a);return Boolean(a.match?a.match(b):"")}}),d=b.declare("dojox.editor.plugins.AutoSave",l,{url:"",logResults:!0,interval:0,_iconClassPrefix:"dijitEditorIconAutoSave",_MIN:6E4,_setIntervalAttr:function(a){this.interval=a},_getIntervalAttr:function(){return this._interval},
setEditor:function(a){this.editor=a;this._strings=b.i18n.getLocalization("dojox.editor.plugins","AutoSave");this._initButton();this._saveSettingDialog=new f({dialogTitle:this._strings.saveSettingdialogTitle,dialogDescription:this._strings.saveSettingdialogDescription,paramName:this._strings.saveSettingdialogParamName,paramLabel:this._strings.saveSettingdialogParamLabel,btnOk:this._strings.saveSettingdialogButtonOk,btnCancel:this._strings.saveSettingdialogButtonCancel});this.connect(this._saveSettingDialog,
"onOk","_onDialogOk");a=this._promDialog=new c.TooltipDialog;a.startup();a.set("content","")},_initButton:function(){var a=new c.Menu({style:"display: none"}),e=new c.MenuItem({iconClass:this._iconClassPrefix+"Default "+this._iconClassPrefix,label:this._strings.saveLabel}),d=this._menuItemAutoSave=new c.MenuItem({iconClass:this._iconClassPrefix+"Setting "+this._iconClassPrefix,label:this._strings.saveSettingLabelOn});a.addChild(e);a.addChild(d);this.button=new c.form.ComboButton({label:this._strings.saveLabel,
iconClass:this._iconClassPrefix+"Default "+this._iconClassPrefix,showLabel:!1,dropDown:a});this.connect(this.button,"onClick","_save");this.connect(e,"onClick","_save");this._menuItemAutoSaveClickHandler=b.connect(d,"onClick",this,"_showAutSaveSettingDialog")},_showAutSaveSettingDialog:function(){var a=this._saveSettingDialog;a.set("value",this.interval);a.show()},_onDialogOk:function(){var a=this.interval=this._saveSettingDialog.get("value")*this._MIN;0<a&&(this._setSaveInterval(a),b.disconnect(this._menuItemAutoSaveClickHandler),
this._menuItemAutoSave.set("label",this._strings.saveSettingLabelOff),this._menuItemAutoSaveClickHandler=b.connect(this._menuItemAutoSave,"onClick",this,"_onStopClick"),this.button.set("iconClass",this._iconClassPrefix+"Setting "+this._iconClassPrefix))},_onStopClick:function(){this._clearSaveInterval();b.disconnect(this._menuItemAutoSaveClickHandler);this._menuItemAutoSave.set("label",this._strings.saveSettingLabelOn);this._menuItemAutoSaveClickHandler=b.connect(this._menuItemAutoSave,"onClick",
this,"_showAutSaveSettingDialog");this.button.set("iconClass",this._iconClassPrefix+"Default "+this._iconClassPrefix)},_setSaveInterval:function(a){0>=a||(this._clearSaveInterval(),this._intervalHandler=setInterval(b.hitch(this,function(){!this._isWorking&&!this.get("disabled")&&(this._isWorking=!0,this._save())}),a))},_clearSaveInterval:function(){this._intervalHandler&&(clearInterval(this._intervalHandler),this._intervalHandler=null)},onSuccess:function(a,d){this.button.set("disabled",!1);this._promDialog.set("content",
b.string.substitute(this._strings.saveMessageSuccess,{"0":b.date.locale.format(new Date,{selector:"time"})}));c.popup.open({popup:this._promDialog,around:this.button.domNode});this._promDialogTimeout=setTimeout(b.hitch(this,function(){clearTimeout(this._promDialogTimeout);this._promDialogTimeout=null;c.popup.close(this._promDialog)}),3E3);this._isWorking=!1},onError:function(a,d){this.button.set("disabled",!1);this._promDialog.set("content",b.string.substitute(this._strings.saveMessageFail,{"0":b.date.locale.format(new Date,
{selector:"time"})}));c.popup.open({popup:this._promDialog,around:this.button.domNode});this._promDialogTimeout=setTimeout(b.hitch(this,function(){clearTimeout(this._promDialogTimeout);this._promDialogTimeout=null;c.popup.close(this._promDialog)}),3E3);this._isWorking=!1},destroy:function(){this.inherited(arguments);this._menuItemAutoSave=null;this._promDialogTimeout&&(clearTimeout(this._promDialogTimeout),this._promDialogTimeout=null,c.popup.close(this._promDialog));this._clearSaveInterval();this._saveSettingDialog&&
(this._saveSettingDialog.destroyRecursive(),this._destroyRecursive=null);this._menuItemAutoSaveClickHandler&&(b.disconnect(this._menuItemAutoSaveClickHandler),this._menuItemAutoSaveClickHandler=null)}});d._AutoSaveSettingDialog=f;b.subscribe(c._scopeName+".Editor.getPlugin",null,function(a){!a.plugin&&"autosave"==a.args.name.toLowerCase()&&(a.plugin=new d({url:"url"in a.args?a.args.url:"",logResults:"logResults"in a.args?a.args.logResults:!0,interval:"interval"in a.args?a.args.interval:5}))});return d});
//# sourceMappingURL=AutoSave.js.map