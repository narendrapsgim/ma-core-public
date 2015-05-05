//>>built
define("dojo/_base/array dojo/_base/declare dojo/_base/lang dojo/date dojo/date/locale dojo/date/stamp".split(" "),function(c,d,g,l,f,k){var h={format:function(a){return f.format(a,{datePattern:this.pattern,selector:"date"})}},m=g.mixin({initLabels:function(){this.labels=[];if(this.labelFrom!==this.labelTo){var a=new Date(this.labelFrom,0,1),b,e;b=this.labelFrom;for(e=0;b<=this.labelTo;b++,e++)a.setFullYear(b),this.labels.push(this.format(a))}}},h),n=g.mixin({initLabels:function(){this.labels=[];
for(var a=new Date(2E3,0,16),b=0;12>b;b++)a.setMonth(b),this.labels.push(this.format(a))}},h),p=g.mixin({initLabels:function(){this.labels=[];for(var a=new Date(2E3,0,1),b=1;31>=b;b++)a.setDate(b),this.labels.push(this.format(a))}},h);return d("dojox.mobile._DatePickerMixin",null,{yearPattern:"yyyy",monthPattern:"MMM",dayPattern:"d",initSlots:function(){var a=this.slotClasses,b=this.slotProps;a[0]=d(a[0],m);a[1]=d(a[1],n);a[2]=d(a[2],p);b[0].pattern=this.yearPattern;b[1].pattern=this.monthPattern;
b[2].pattern=this.dayPattern;this.reorderSlots()},reorderSlots:function(){if(!this.slotOrder.length){var a=f._parseInfo().bundle["dateFormat-short"].toLowerCase().split(/[^ymd]+/,3);this.slotOrder=c.map(a,function(a){return{y:0,m:1,d:2}[a.charAt(0)]})}},reset:function(){var a=new Date,b=c.map(this.slots,function(b){return b.format(a)});this.set("colors",b);this._disableEndDaysOfMonth();this.value?(this.set("value",this.value),this.value=null):this.values?(this.set("values",this.values),this.values=
null):this.set("values",b)},_onYearSet:function(){var a=this.slots[0],b=a.get("value");a._previousValue&&b==a._previousValue||(this._disableEndDaysOfMonth(),a._previousValue=b,a._set("value",b),this.onYearSet())},onYearSet:function(){},_onMonthSet:function(){var a=this.slots[1],b=a.get("value");a._previousValue&&b==a._previousValue||(this._disableEndDaysOfMonth(),a._previousValue=b,a._set("value",b),this.onMonthSet())},onMonthSet:function(){},_onDaySet:function(){var a=this.slots[2],b=a.get("value");
!(a._previousValue&&b==a._previousValue)&&!this._disableEndDaysOfMonth()&&(a._previousValue=b,a._set("value",b),this.onDaySet())},onDaySet:function(){},_disableEndDaysOfMonth:function(){var a=this.slots[0].pattern+"/"+this.slots[1].pattern,b=this.get("values"),a=f.parse(b[0]+"/"+b[1],{datePattern:a,selector:"date"}),a=l.getDaysInMonth(a),e=!1;a<b[2]&&(e=!0,this.slots[2]._spinToValue(a,!1));this.disableValues(a);return e},_getDateAttr:function(){var a=this.get("values"),b=this.slots;return f.parse(a[0]+
"/"+a[1]+"/"+a[2],{datePattern:b[0].pattern+"/"+b[1].pattern+"/"+b[2].pattern,selector:"date"})},_setValuesAttr:function(a){c.forEach(this.getSlots(),function(b,e){var c=a[e];if("number"==typeof c){var d=[1970,1,1];d.splice(e,1,c-0);c=b.format(new Date(d[0],d[1]-1,d[2]))}b.set("value",c)})},_setValueAttr:function(a){var b=k.fromISOString(a);this.set("values",c.map(this.slots,function(a){return a.format(b)}))},_getValueAttr:function(){return k.toISOString(this.get("date"),{selector:"date"})}})});
//# sourceMappingURL=_DatePickerMixin.js.map