//>>built
define(["dojo"],function(f){f.deprecated("dojox.embed.flashVars","Will be removed in 2.0","2.0");var e={serialize:function(g,b){var e=function(a){"string"==typeof a&&(a=a.replace(/;/g,"_sc_"),a=a.replace(/\./g,"_pr_"),a=a.replace(/\:/g,"_cl_"));return a},h=dojox.embed.flashVars.serialize,d="";if(f.isArray(b)){for(var c=0;c<b.length;c++)d+=h(g+"."+c,e(b[c]))+";";return d.replace(/;{2,}/g,";")}if(f.isObject(b)){for(c in b)d+=h(g+"."+c,e(b[c]))+";";return d.replace(/;{2,}/g,";")}return g+":"+b}};f.setObject("dojox.embed.flashVars",
e);return e});
//# sourceMappingURL=flashVars.js.map