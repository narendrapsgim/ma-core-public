//>>built
define(["dojo/_base/lang","dojo/_base/kernel","./lambda"],function(k,h,e){k.mixin(e,{filterRev:function(a,c,d){"string"==typeof a&&(a=a.split(""));d=d||h.global;c=e.lambda(c);for(var b=[],f,g=a.length-1;0<=g;--g)f=a[g],c.call(d,f,g,a)&&b.push(f);return b},forEachRev:function(a,c,d){"string"==typeof a&&(a=a.split(""));d=d||h.global;c=e.lambda(c);for(var b=a.length-1;0<=b;c.call(d,a[b],b,a),--b);},mapRev:function(a,c,d){"string"==typeof a&&(a=a.split(""));d=d||h.global;c=e.lambda(c);for(var b=a.length,
f=Array(b),b=b-1,g=0;0<=b;f[g++]=c.call(d,a[b],b,a),--b);return f},everyRev:function(a,c,d){"string"==typeof a&&(a=a.split(""));d=d||h.global;c=e.lambda(c);for(var b=a.length-1;0<=b;--b)if(!c.call(d,a[b],b,a))return!1;return!0},someRev:function(a,c,d){"string"==typeof a&&(a=a.split(""));d=d||h.global;c=e.lambda(c);for(var b=a.length-1;0<=b;--b)if(c.call(d,a[b],b,a))return!0;return!1}});return e});
//# sourceMappingURL=reversed.js.map