//>>built
define(["../has","./config","require","module"],function(g,d,f,a){var e;g=function(){return this}();var c={},k={},b={config:d,global:g,dijit:c,dojox:k},c={dojo:["dojo",b],dijit:["dijit",c],dojox:["dojox",k]};a=f.map&&f.map[a.id.match(/[^\/]+/)[0]];for(e in a)c[e]?c[e][0]=a[e]:c[e]=[a[e],{}];for(e in c)a=c[e],a[1]._scopeName=a[0],d.noGlobals||(g[a[0]]=a[1]);b.scopeMap=c;b.baseUrl=b.config.baseUrl=f.baseUrl;b.isAsync=!0;b.locale=d.locale;d="$Rev: f4fef70 $".match(/[0-9a-f]{7,}/);b.version={major:1,
minor:10,patch:4,flag:"",revision:d?d[0]:NaN,toString:function(){var a=b.version;return a.major+"."+a.minor+"."+a.patch+a.flag+" ("+a.revision+")"}};Function("d","d.eval \x3d function(){return d.global.eval ? d.global.eval(arguments[0]) : eval(arguments[0]);}")(b);b.exit=function(){};"undefined"!=typeof console||(console={});f="assert count debug dir dirxml error group groupEnd info profile profileEnd time timeEnd trace warn log".split(" ");var h;for(d=0;h=f[d++];)console[h]||function(){var a=h+"";
console[a]="log"in console?function(){var b=Array.prototype.slice.call(arguments);b.unshift(a+":");console.log(b.join(" "))}:function(){};console[a]._fake=!0}();b.deprecated=b.experimental=function(){};b._hasResource={};return b});
//# sourceMappingURL=kernel.js.map