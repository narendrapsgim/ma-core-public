//>>built
define(["../../_base/lang"],function(e){var b={};e.setObject("dojo.data.util.filter",b);b.patternToRegExp=function(b,e){for(var a="^",d=null,c=0;c<b.length;c++)switch(d=b.charAt(c),d){case "\\":a+=d;c++;a+=b.charAt(c);break;case "*":a+=".*";break;case "?":a+=".";break;case "$":case "^":case "/":case "+":case ".":case "|":case "(":case ")":case "{":case "}":case "[":case "]":a+="\\";default:a+=d}a+="$";return e?RegExp(a,"mi"):RegExp(a,"m")};return b});
//# sourceMappingURL=filter.js.map