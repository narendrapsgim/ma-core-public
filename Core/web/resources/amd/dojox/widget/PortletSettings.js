//>>built
define("dojo/_base/declare dojo/_base/lang dojo/dom-style dojo/dom-class dojo/fx dijit/_Container dijit/layout/ContentPane".split(" "),function(e,f,b,c,d,g,h){return e("dojox.widget.PortletSettings",[g,h],{portletIconClass:"dojoxPortletSettingsIcon",portletIconHoverClass:"dojoxPortletSettingsIconHover",postCreate:function(){b.set(this.domNode,"display","none");c.add(this.domNode,"dojoxPortletSettingsContainer");c.remove(this.domNode,"dijitContentPane")},_setPortletAttr:function(a){this.portlet=a},
toggle:function(){var a=this.domNode;"none"==b.get(a,"display")?(b.set(a,{display:"block",height:"1px",width:"auto"}),d.wipeIn({node:a}).play()):d.wipeOut({node:a,onEnd:f.hitch(this,function(){b.set(a,{display:"none",height:"",width:""})})}).play()}})});
//# sourceMappingURL=PortletSettings.js.map