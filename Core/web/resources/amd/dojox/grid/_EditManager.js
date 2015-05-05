//>>built
define("dojo/_base/lang dojo/_base/array dojo/_base/declare dojo/_base/connect dojo/_base/sniff ./util".split(" "),function(f,g,h,d,e,k){return h("dojox.grid._EditManager",null,{constructor:function(a){this.grid=a;this.connections=!e("ie")?[]:[d.connect(document.body,"onfocus",f.hitch(this,"_boomerangFocus"))];this.connections.push(d.connect(this.grid,"onBlur",this,"apply"));this.connections.push(d.connect(this.grid,"prerender",this,"_onPreRender"))},info:{},destroy:function(){g.forEach(this.connections,
d.disconnect)},cellFocus:function(a,b){this.grid.singleClickEdit||this.isEditRow(b)?this.setEditCell(a,b):this.apply();(this.isEditing()||a&&a.editable&&a.alwaysEditing)&&this._focusEditor(a,b)},rowClick:function(a){this.isEditing()&&!this.isEditRow(a.rowIndex)&&this.apply()},styleRow:function(a){a.index==this.info.rowIndex&&(a.customClasses+=" dojoxGridRowEditing")},dispatchEvent:function(a){var b=a.cell;return(b=b&&b.editable?b:0)&&b.dispatchEvent(a.dispatch,a)},isEditing:function(){return void 0!==
this.info.rowIndex},isEditCell:function(a,b){return this.info.rowIndex===a&&this.info.cell.index==b},isEditRow:function(a){return this.info.rowIndex===a},setEditCell:function(a,b){!this.isEditCell(b,a.index)&&(this.grid.canEdit&&this.grid.canEdit(a,b))&&this.start(a,b,this.isEditRow(b)||a.editable)},_focusEditor:function(a,b){k.fire(a,"focus",[b])},focusEditor:function(){this.isEditing()&&this._focusEditor(this.info.cell,this.info.rowIndex)},_boomerangWindow:500,_shouldCatchBoomerang:function(){return this._catchBoomerang>
(new Date).getTime()},_boomerangFocus:function(){this._shouldCatchBoomerang()&&(this.grid.focus.focusGrid(),this.focusEditor(),this._catchBoomerang=0)},_doCatchBoomerang:function(){e("ie")&&(this._catchBoomerang=(new Date).getTime()+this._boomerangWindow)},start:function(a,b,c){this._isValidInput()&&(this.grid.beginUpdate(),this.editorApply(),this.isEditing()&&!this.isEditRow(b)&&(this.applyRowEdit(),this.grid.updateRow(b)),c?(this.info={cell:a,rowIndex:b},this.grid.doStartEdit(a,b),this.grid.updateRow(b)):
this.info={},this.grid.endUpdate(),this.grid.focus.focusGrid(),this._focusEditor(a,b),this._doCatchBoomerang())},_editorDo:function(a){var b=this.info.cell;if(b&&b.editable)b[a](this.info.rowIndex)},editorApply:function(){this._editorDo("apply")},editorCancel:function(){this._editorDo("cancel")},applyCellEdit:function(a,b,c){this.grid.canEdit(b,c)&&this.grid.doApplyCellEdit(a,c,b.field)},applyRowEdit:function(){this.grid.doApplyEdit(this.info.rowIndex,this.info.cell.field)},apply:function(){this.isEditing()&&
this._isValidInput()&&(this.grid.beginUpdate(),this.editorApply(),this.applyRowEdit(),this.info={},this.grid.endUpdate(),this.grid.focus.focusGrid(),this._doCatchBoomerang())},cancel:function(){this.isEditing()&&(this.grid.beginUpdate(),this.editorCancel(),this.info={},this.grid.endUpdate(),this.grid.focus.focusGrid(),this._doCatchBoomerang())},save:function(a,b){var c=this.info.cell;this.isEditRow(a)&&((!b||c.view==b)&&c.editable)&&c.save(c,this.info.rowIndex)},restore:function(a,b){var c=this.info.cell;
this.isEditRow(b)&&(c.view==a&&c.editable)&&c.restore(this.info.rowIndex)},_isValidInput:function(){var a=(this.info.cell||{}).widget;if(!a||!a.isValid)return!0;a.focused=!0;return a.isValid(!0)},_onPreRender:function(){this.isEditing()&&(this.info.value=this.info.cell.getValue())}})});
//# sourceMappingURL=_EditManager.js.map