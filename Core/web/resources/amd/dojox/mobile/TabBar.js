//>>built
define("dojo/_base/array dojo/_base/declare dojo/_base/window dojo/dom-class dojo/dom-construct dojo/dom-geometry dojo/dom-style dojo/dom-attr dijit/_Contained dijit/_Container dijit/_WidgetBase ./TabBarButton dojo/has dojo/has!dojo-bidi?dojox/mobile/bidi/TabBar".split(" "),function(g,n,p,e,q,m,f,r,s,t,u,w,k,v){f=n(k("dojo-bidi")?"dojox.mobile.NonBidiTabBar":"dojox.mobile.TabBar",[u,t,s],{iconBase:"",iconPos:"",barType:"tabBar",closable:!1,center:!0,syncWithViews:!1,tag:"ul",fill:"auto",selectOne:!0,
baseClass:"mblTabBar",_fixedButtonWidth:76,_fixedButtonMargin:17,_largeScreenWidth:500,buildRendering:function(){this.domNode=this.srcNodeRef||q.create(this.tag);r.set(this.domNode,"role","tablist");this.reset();this.inherited(arguments)},postCreate:function(){if(this.syncWithViews){var c=function(a,c,e,h,b,d){(c=g.filter(this.getChildren(),function(b){return b.moveTo==="#"+a.id||b.moveTo===a.id})[0])&&c.set("selected",!0)};this.subscribe("/dojox/mobile/afterTransitionIn",c);this.subscribe("/dojox/mobile/startView",
c)}},startup:function(){this._started||(this.inherited(arguments),this.resize())},reset:function(){var c=this._barType;if("object"===typeof this.barType){this._barType=this.barType["*"];for(var a in this.barType)if(e.contains(p.doc.documentElement,a)){this._barType=this.barType[a];break}}else this._barType=this.barType;c&&e.remove(this.domNode,this.baseClass+(c.charAt(0).toUpperCase()+c.substring(1)));e.add(this.domNode,this.baseClass+(this._barType.charAt(0).toUpperCase()+this._barType.substring(1)))},
resize:function(c){var a,l;l=c&&c.w?c.w:m.getMarginBox(this.domNode).w;var f=this._fixedButtonWidth,h=this._fixedButtonMargin,b=g.map(this.getChildren(),function(a){return a.domNode});e.toggle(this.domNode,"mblTabBarNoIcons",!g.some(this.getChildren(),function(a){return a.iconNode1}));e.toggle(this.domNode,"mblTabBarNoText",!g.some(this.getChildren(),function(a){return a.label}));var d=0;if("tabBar"==this._barType)if(this.containerNode.style.paddingLeft="",d=Math.floor((l-(f+2*h)*b.length)/2),"always"==
this.fill||"auto"==this.fill&&(l<this._largeScreenWidth||0>d)){e.add(this.domNode,"mblTabBarFill");for(a=0;a<b.length;a++)b[a].style.width=100/b.length+"%",b[a].style.margin="0"}else{for(a=0;a<b.length;a++)b[a].style.width=f+"px",b[a].style.margin="0 "+h+"px";0<b.length&&(k("dojo-bidi")&&!this.isLeftToRight()?(b[0].style.marginLeft="0px",b[0].style.marginRight=d+h+"px"):b[0].style.marginLeft=d+h+"px");this.containerNode.style.padding="0px"}else{for(a=0;a<b.length;a++)b[a].style.width=b[a].style.margin=
"";a=this.getParent();if("always"==this.fill){e.add(this.domNode,"mblTabBarFill");for(a=0;a<b.length;a++)b[a].style.width=100/b.length+"%","segmentedControl"!=this._barType&&"standardTab"!=this._barType&&(b[a].style.margin="0")}else{if(this.center&&(!a||!e.contains(a.domNode,"mblHeading"))){d=l;for(a=0;a<b.length;a++)d-=m.getMarginBox(b[a]).w;d=Math.floor(d/2)}k("dojo-bidi")&&!this.isLeftToRight()?(this.containerNode.style.paddingLeft="0px",this.containerNode.style.paddingRight=d?d+"px":""):this.containerNode.style.paddingLeft=
d?d+"px":""}}c&&c.w&&m.setMarginBox(this.domNode,c)},getSelectedTab:function(){return g.filter(this.getChildren(),function(c){return c.selected})[0]},onCloseButtonClick:function(c){return!0}});return k("dojo-bidi")?n("dojox.mobile.TabBar",[f,v]):f});
//# sourceMappingURL=TabBar.js.map