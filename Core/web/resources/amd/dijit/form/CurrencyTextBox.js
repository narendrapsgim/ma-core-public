//>>built
define(["dojo/currency","dojo/_base/declare","dojo/_base/lang","./NumberTextBox"],function(a,f,c,e){return f("dijit.form.CurrencyTextBox",e,{currency:"",baseClass:"dijitTextBox dijitCurrencyTextBox",_formatter:a.format,_parser:a.parse,_regExpGenerator:a.regexp,parse:function(b,a){var d=this.inherited(arguments);isNaN(d)&&/\d+/.test(b)&&(d=c.hitch(c.delegate(this,{_parser:e.prototype._parser}),"inherited")(arguments));return d},_setConstraintsAttr:function(b){!b.currency&&this.currency&&(b.currency=
this.currency);this.inherited(arguments,[a._mixInDefaults(c.mixin(b,{exponent:!1}))])}})});
//# sourceMappingURL=CurrencyTextBox.js.map