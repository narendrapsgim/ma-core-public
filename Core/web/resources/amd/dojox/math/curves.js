//>>built
define(["dojo","dojox"],function(n,g){n.getObject("math.curves",!0,g);n.mixin(g.math.curves,{Line:function(a,b){this.start=a;this.end=b;this.dimensions=a.length;for(var c=0;c<a.length;c++)a[c]=Number(a[c]);for(c=0;c<b.length;c++)b[c]=Number(b[c]);this.getValue=function(c){for(var d=Array(this.dimensions),e=0;e<this.dimensions;e++)d[e]=(this.end[e]-this.start[e])*c+this.start[e];return d};return this},Bezier:function(a){this.getValue=function(b){if(1<=b)return this.p[this.p.length-1];if(0>=b)return this.p[0];
for(var c=Array(this.p[0].length),a=0;d<this.p[0].length;a++)c[a]=0;for(var d=0;d<this.p[0].length;d++){for(var e=a=0,f=0;f<this.p.length;f++)a+=this.p[f][d]*this.p[this.p.length-1][0]*g.math.bernstein(b,this.p.length,f);for(f=0;f<this.p.length;f++)e+=this.p[this.p.length-1][0]*g.math.bernstein(b,this.p.length,f);c[d]=a/e}return c};this.p=a;return this},CatmullRom:function(a,b){this.getValue=function(c){var a=c*(this.p.length-1);c=Math.floor(a);var a=a-c,d=c-1;0>d&&(d=0);var e=c+1;e>=this.p.length&&
(e=this.p.length-1);var f=c+2;f>=this.p.length&&(f=this.p.length-1);for(var b=a*a,l=a*a*a,g=Array(this.p[0].length),h=0;h<this.p[0].length;h++)g[h]=(-this.c*this.p[d][h]+(2-this.c)*this.p[c][h]+(this.c-2)*this.p[e][h]+this.c*this.p[f][h])*l+(2*this.c*this.p[d][h]+(this.c-3)*this.p[c][h]+(3-2*this.c)*this.p[e][h]+-this.c*this.p[f][h])*b+(-this.c*this.p[d][h]+this.c*this.p[e][h])*a+this.p[c][h];return g};this.c=b?b:0.7;this.p=a;return this},Arc:function(a,b,c){b=g.math.midpoint(a,b);a=function(e,a){for(var c=
Array(e.length),b=0;b<e.length;b++)c[b]=e[b]+a[b];return c}(function(e){for(var a=Array(e.length),b=0;b<e.length;b++)a[b]=-e[b];return a}(b),a);var k=Math.sqrt(Math.pow(a[0],2)+Math.pow(a[1],2)),d=g.math.radiansToDegrees(Math.atan(a[1]/a[0])),d=0>a[0]?d-90:d+90;g.math.curves.CenteredArc.call(this,b,k,d,d+(c?-180:180))},CenteredArc:function(a,b,c,k){this.center=a;this.radius=b;this.start=c||0;this.end=k;this.getValue=function(a){var e=Array(2);a=g.math.degreesToRadians(this.start+(this.end-this.start)*
a);e[0]=this.center[0]+this.radius*Math.sin(a);e[1]=this.center[1]-this.radius*Math.cos(a);return e};return this},Circle:function(a,b){g.math.curves.CenteredArc.call(this,a,b,0,360);return this},Path:function(){function a(){for(var a=0,b=0;b<c.length;b++){var g=a+c[b]/d;k[b]=[a,g,g-a];a=g}}var b=[],c=[],k=[],d=0;this.add=function(e,f){b.push(e);c.push(f);d+=f;a()};this.remove=function(e){for(var f=0;f<b.length;f++)if(b[f]==e){b.splice(f,1);d-=c.splice(f,1)[0];break}a()};this.removeAll=function(){b=
[];c=[];d=0};this.getValue=function(a){for(var c=!1,d=0,l=0;l<k.length;l++){var m=k[l];if(a>=m[0]&&a<m[1]){d=b[l].getValue((a-m[0])/m[2]);c=!0;break}}c||(d=b[b.length-1].getValue(1));for(a=0;a<l;a++)d=g.math.points.translate(d,b[a].getValue(1));return d};return this}});return g.math.curves});
//# sourceMappingURL=curves.js.map