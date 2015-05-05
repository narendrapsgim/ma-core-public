//>>built
define(["dojo/_base/declare","dojo/_base/kernel","dojo/_base/xhr","./model"],function(r,n,m,k){return r("dojox.atom.io.Connection",null,{constructor:function(a,b){this.sync=a;this.preventCache=b},preventCache:!1,alertsEnabled:!1,getFeed:function(a,b,e,f){this._getXmlDoc(a,"feed",new k.Feed,k._Constants.ATOM_NS,b,e,f)},getService:function(a,b,e,f){this._getXmlDoc(a,"service",new k.Service(a),k._Constants.APP_NS,b,e,f)},getEntry:function(a,b,e,f){this._getXmlDoc(a,"entry",new k.Entry,k._Constants.ATOM_NS,
b,e,f)},_getXmlDoc:function(a,b,e,f,c,d,h){h||(h=n.global);var q=this.alertsEnabled;a={url:a,handleAs:"xml",sync:this.sync,preventCache:this.preventCache,load:function(a,g){var d=null,l;if(a){if("undefined"!=typeof a.getElementsByTagNameNS)(l=a.getElementsByTagNameNS(f,b))&&0<l.length?d=l.item(0):a.lastChild&&(d=a.lastChild);else if("undefined"!=typeof a.getElementsByTagName)if((l=a.getElementsByTagName(b))&&0<l.length)for(var p=0;p<l.length;p++){if(l[p].namespaceURI==f){d=l[p];break}}else a.lastChild&&
(d=a.lastChild);else if(a.lastChild)d=a.lastChild;else{c.call(h,null,null,g);return}e.buildFromDom(d);if(c)c.call(h,e,a,g);else if(q)throw Error("The callback value does not exist.");}else c.call(h,null,null,g)}};this.user&&null!==this.user&&(a.user=this.user);this.password&&null!==this.password&&(a.password=this.password);a.error=d?function(a,b){d.call(h,a,b)}:function(){throw Error("The URL requested cannot be accessed");};m.get(a)},updateEntry:function(a,b,e,f,c,d){d||(d=n.global);a.updated=new Date;
var h=a.getEditHref();if(!h)throw Error("A URL has not been specified for editing this entry.");var q=this,k=this.alertsEnabled,g={url:h,handleAs:"text",contentType:"text/xml",sync:this.sync,preventCache:this.preventCache,load:function(c,e){var g=null;if(f)(g=e.xhr.getResponseHeader("Location"))||(g=h),q.getEntry(g,function(a,e,c){if(b)b.call(d,a,g,c);else if(k)throw Error("The callback value does not exist.");});else if(b)b.call(d,a,e.xhr.getResponseHeader("Location"),e);else if(k)throw Error("The callback value does not exist.");
return c}};this.user&&null!==this.user&&(g.user=this.user);this.password&&null!==this.password&&(g.password=this.password);g.error=e?function(a,b){e.call(d,a,b)}:function(){throw Error("The URL requested cannot be accessed");};c?(g.postData=a.toString(!0),g.headers={"X-Method-Override":"PUT"},m.post(g)):(g.putData=a.toString(!0),m.put(g))},addEntry:function(a,b,e,f,c,d){d||(d=n.global);a.published=new Date;a.updated=new Date;c=a.feedUrl;var h=this.alertsEnabled;!b&&c&&(b=c);if(b){var k=this;c={url:b,
handleAs:"text",contentType:"text/xml",sync:this.sync,preventCache:this.preventCache,postData:a.toString(!0),load:function(c,g){var f=g.xhr.getResponseHeader("Location");f||(f=b);if(g.retrieveEntry)k.getEntry(f,function(a,b,c){if(e)e.call(d,a,f,c);else if(h)throw Error("The callback value does not exist.");});else if(e)e.call(d,a,f,g);else if(h)throw Error("The callback value does not exist.");return c}};this.user&&null!==this.user&&(c.user=this.user);this.password&&null!==this.password&&(c.password=
this.password);c.error=f?function(a,b){f.call(d,a,b)}:function(){throw Error("The URL requested cannot be accessed");};m.post(c)}else if(h)throw Error("The request cannot be processed because the URL parameter is missing.");},deleteEntry:function(a,b,e,f,c){c||(c=n.global);var d=null,d="string"==typeof a?a:a.getEditHref();if(!d)throw b.call(c,!1,null),Error("The request cannot be processed because the URL parameter is missing.");a={url:d,handleAs:"text",sync:this.sync,preventCache:this.preventCache,
load:function(a,d){b.call(c,d);return a}};this.user&&null!==this.user&&(a.user=this.user);this.password&&null!==this.password&&(a.password=this.password);a.error=e?function(a,b){e.call(c,a,b)}:function(){throw Error("The URL requested cannot be accessed");};f?(a.headers={"X-Method-Override":"DELETE"},dhxr.post(a)):m.del(a)}})});
//# sourceMappingURL=Connection.js.map