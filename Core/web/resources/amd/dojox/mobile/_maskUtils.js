//>>built
define(["dojo/_base/window","dojo/dom-style","./sniff"],function(r,t,p){p.add("mask-image-css",function(l,c,d){return"function"===typeof c.getCSSCanvasContext&&"undefined"!==typeof d.style.webkitMaskImage});p.add("mask-image",function(){return p("mask-image-css")||p("svg")});var s={};return{createRoundMask:function(l,c,d,b,m,g,e,a,f,k){b=c+g+b;var n=d+e+m;if(p("mask-image-css"))m=("DojoMobileMask"+c+d+g+e+a+f).replace(/\./g,"_"),s[m]||(s[m]=1,b=r.doc.getCSSCanvasContext("2d",m,b,n),b.beginPath(),
a==f?2==a&&5==g?(b.fillStyle="rgba(0,0,0,0.5)",b.fillRect(1,0,3,2),b.fillRect(0,1,5,1),b.fillRect(0,e-2,5,1),b.fillRect(1,e-1,3,2),b.fillStyle="rgb(0,0,0)",b.fillRect(0,2,5,e-4)):2==a&&5==e?(b.fillStyle="rgba(0,0,0,0.5)",b.fillRect(0,1,2,3),b.fillRect(1,0,1,5),b.fillRect(g-2,0,1,5),b.fillRect(g-1,1,2,3),b.fillStyle="rgb(0,0,0)",b.fillRect(2,0,g-4,5)):(b.fillStyle="#000000",b.moveTo(c+a,d),b.arcTo(c,d,c,d+a,a),b.lineTo(c,d+e-a),b.arcTo(c,d+e,c+a,d+e,a),b.lineTo(c+g-a,d+e),b.arcTo(c+g,d+e,c+g,d+a,a),
b.lineTo(c+g,d+a),b.arcTo(c+g,d,c+g-a,d,a)):(e=Math.PI,b.scale(1,f/a),b.moveTo(c+a,d),b.arc(c+a,d+a,a,1.5*e,0.5*e,!0),b.lineTo(c+g-a,d+2*a),b.arc(c+g-a,d+a,a,0.5*e,1.5*e,!0)),b.closePath(),b.fill()),l.style.webkitMaskImage="-webkit-canvas("+m+")";else if(p("svg")){l._svgMask&&l.removeChild(l._svgMask);for(var q=null,h=l.parentNode;h&&(!(q=t.getComputedStyle(h).backgroundColor)||"transparent"==q||q.match(/rgba\(.*,\s*0\s*\)/));h=h.parentNode);h=r.doc.createElementNS("http://www.w3.org/2000/svg","svg");
h.setAttribute("width",b);h.setAttribute("height",n);h.style.position="absolute";h.style.pointerEvents="none";h.style.opacity="1";h.style.zIndex="2147483647";n=r.doc.createElementNS("http://www.w3.org/2000/svg","path");k=k||0;a+=k;f+=k;c=" M"+(c+a-k)+","+(d-k)+" a"+a+","+f+" 0 0,0 "+-a+","+f+" v"+-f+" h"+a+" Z M"+(c-k)+","+(d+e-f+k)+" a"+a+","+f+" 0 0,0 "+a+","+f+" h"+-a+" v"+-f+" z M"+(c+g-a+k)+","+(d+e+k)+" a"+a+","+f+" 0 0,0 "+a+","+-f+" v"+f+" h"+-a+" z M"+(c+g+k)+","+(d+f-k)+" a"+a+","+f+" 0 0,0 "+
-a+","+-f+" h"+a+" v"+f+" z";0<d&&(c+=" M0,0 h"+b+" v"+d+" h"+-b+" z");0<m&&(c+=" M0,"+(d+e)+" h"+b+" v"+m+" h"+-b+" z");n.setAttribute("d",c);n.setAttribute("fill",q);n.setAttribute("stroke",q);n.style.opacity="1";h.appendChild(n);l._svgMask=h;l.appendChild(h)}}}});
//# sourceMappingURL=_maskUtils.js.map