//>>built
require({cache:{"url:dojox/widget/Calendar/CalendarMonth.html":'\x3cdiv class\x3d"dojoxCalendarMonthLabels" style\x3d"left: 0px;"  \n\tdojoAttachPoint\x3d"monthContainer" dojoAttachEvent\x3d"onclick: onClick"\x3e\n    \x3ctable cellspacing\x3d"0" cellpadding\x3d"0" border\x3d"0" style\x3d"margin: auto;"\x3e\n        \x3ctbody\x3e\n            \x3ctr class\x3d"dojoxCalendarMonthGroupTemplate"\x3e\n                \x3ctd class\x3d"dojoxCalendarMonthTemplate"\x3e\n                    \x3cdiv class\x3d"dojoxCalendarMonthLabel"\x3e\x3c/div\x3e\n                \x3c/td\x3e\n             \x3c/tr\x3e\n        \x3c/tbody\x3e\n    \x3c/table\x3e\n\x3c/div\x3e\n'}});
define("dojo/_base/declare ./_CalendarView dijit/_TemplatedMixin ./_CalendarMonthYearView dojo/dom-class dojo/_base/event dojo/text!./Calendar/CalendarMonth.html".split(" "),function(d,e,f,c,g,h,k){return d("dojox.widget._CalendarMonthView",[e,f],{templateString:k,datePart:"year",headerClass:"dojoxCalendarMonthHeader",displayedYear:"",postCreate:function(){this.cloneClass(".dojoxCalendarMonthTemplate",3);this.cloneClass(".dojoxCalendarMonthGroupTemplate",2);this._populateMonths();this.addFx(".dojoxCalendarMonthLabel",
this.domNode)},_setValueAttr:function(a){a=this.header.innerHTML=a.getFullYear();this.set("displayedYear",a);this._populateMonths()},_getMonthNames:c.prototype._getMonthNames,_populateMonths:c.prototype._populateMonths,onClick:function(a){if(g.contains(a.target,"dojoxCalendarMonthLabel")){a=a.target.parentNode;a=a.cellIndex+4*a.parentNode.rowIndex;var b=this.get("value");b.setMonth(a);b.setMonth(a);b.setYear(this.displayedYear);this.onValueSelected(b,a)}else h.stop(a)}})});
//# sourceMappingURL=_CalendarMonthView.js.map