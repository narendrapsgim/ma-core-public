//>>built
define(["dijit","dojo","dojox","dojo/require!dojox/lang/functional/lambda"],function(l,d,k){d.provide("dojox.lang.functional.util");d.require("dojox.lang.functional.lambda");(function(){var h=k.lang.functional;d.mixin(h,{inlineLambda:function(b,f,g){b=h.rawLambda(b);g&&h.forEach(b.args,g);var d=(g="string"==typeof f)?b.args.length:Math.min(b.args.length,f.length),a=Array(4*d+4),e,c=1;for(e=0;e<d;++e)a[c++]=b.args[e],a[c++]="\x3d",a[c++]=g?f+"["+e+"]":f[e],a[c++]=",";a[0]="(";a[c++]="(";a[c++]=b.body;
a[c]="))";return a.join("")}})})()});
//# sourceMappingURL=util.js.map