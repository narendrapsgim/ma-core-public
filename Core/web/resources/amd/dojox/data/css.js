//>>built
define(["dojo/_base/lang","dojo/_base/array"],function(h,e){var f=h.getObject("dojox.data.css",!0);f.rules={};f.rules.forEach=function(c,d,b){b&&e.forEach(b,function(a){e.forEach(a[a.cssRules?"cssRules":"rules"],function(g){if(!g.type||3!==g.type){var b="";a&&a.href&&(b=a.href);c.call(d?d:this,g,a,b)}})})};f.findStyleSheets=function(c){var d=[];e.forEach(c,function(b){(b=f.findStyleSheet(b))&&e.forEach(b,function(a){-1===e.indexOf(d,a)&&d.push(a)})});return d};f.findStyleSheet=function(c){var d=[];
"."===c.charAt(0)&&(c=c.substring(1));var b=function(a){return a.href&&a.href.match(c)?(d.push(a),!0):a.imports?e.some(a.imports,function(a){return b(a)}):e.some(a[a.cssRules?"cssRules":"rules"],function(a){return a.type&&3===a.type&&b(a.styleSheet)?!0:!1})};e.some(document.styleSheets,b);return d};f.determineContext=function(c){var d=[];c=c&&0<c.length?f.findStyleSheets(c):document.styleSheets;var b=function(a){d.push(a);a.imports&&e.forEach(a.imports,function(a){b(a)});e.forEach(a[a.cssRules?"cssRules":
"rules"],function(a){a.type&&3===a.type&&b(a.styleSheet)})};e.forEach(c,b);return d};return f});
//# sourceMappingURL=css.js.map