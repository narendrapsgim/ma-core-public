//>>built
define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/xhr"],function(b,c,d){return b("dojox.mobile.dh.UrlDataSource",null,{text:"",_url:"",constructor:function(a){this._url=a},getData:function(){var a=d.get({url:this._url,handleAs:"text"});a.addCallback(c.hitch(this,function(a,b){this.text=a}));a.addErrback(function(a){});return a}})});
//# sourceMappingURL=UrlDataSource.js.map