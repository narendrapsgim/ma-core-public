//>>built
define(["dojo/_base/kernel","dojo/_base/array","./_base"],function(f,g,d){d.ArrayList=function(e){var b=[];e&&(b=b.concat(e));this.count=b.length;this.add=function(a){b.push(a);this.count=b.length};this.addRange=function(a){if(a.getIterator)for(a=a.getIterator();!a.atEnd();)this.add(a.get());else for(var c=0;c<a.length;c++)b.push(a[c]);this.count=b.length};this.clear=function(){b.splice(0,b.length);this.count=0};this.clone=function(){return new d.ArrayList(b)};this.contains=function(a){for(var c=
0;c<b.length;c++)if(b[c]==a)return!0;return!1};this.forEach=function(a,c){f.forEach(b,a,c)};this.getIterator=function(){return new d.Iterator(b)};this.indexOf=function(a){for(var c=0;c<b.length;c++)if(b[c]==a)return c;return-1};this.insert=function(a,c){b.splice(a,0,c);this.count=b.length};this.item=function(a){return b[a]};this.remove=function(a){a=this.indexOf(a);0<=a&&b.splice(a,1);this.count=b.length};this.removeAt=function(a){b.splice(a,1);this.count=b.length};this.reverse=function(){b.reverse()};
this.sort=function(a){a?b.sort(a):b.sort()};this.setByIndex=function(a,c){b[a]=c;this.count=b.length};this.toArray=function(){return[].concat(b)};this.toString=function(a){return b.join(a||",")}};return d.ArrayList});
//# sourceMappingURL=ArrayList.js.map