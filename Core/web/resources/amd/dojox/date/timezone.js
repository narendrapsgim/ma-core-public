//>>built
define("dojo/_base/array dojo/_base/config dojo/_base/declare dojo/_base/kernel dojo/_base/lang dojo/date dojo/date/locale dojo/request dojo/request/handlers".split(" "),function(x,y,h,N,z,k,q,O,P){function E(a){a=a||{};l=z.mixin(l,a.zones||{});u=z.mixin(u,a.rules||{})}function v(a){w[a]=!0;O.get(require.toUrl((y.timezoneFileBasePath||"dojox/date/zoneinfo")+"/"+a),{handleAs:"olson_zoneinfo",sync:!0}).then(E,function(a){throw a;})}function F(a){throw Error('Timezone "'+a+'" is either incorrect, or not loaded in the timezone registry.');
}function A(a){var c=Q[a];if(!c&&(c=a.split("/")[0],c=R[c],!c)){var e=l[a];if("string"==typeof e)return A(e);if(w.backward)F(a);else return v("backward"),A(a)}return c}function B(a){a=a.match(/(\d+)(?::0*(\d*))?(?::0*(\d*))?([su])?$/);if(!a)return null;a[1]=parseInt(a[1],10);a[2]=a[2]?parseInt(a[2],10):0;a[3]=a[3]?parseInt(a[3],10):0;return a}function t(a,c,e,d,b,f,g){return Date.UTC(a,c,e,d,b,f)+6E4*(g||0)}function s(a){var c=B(a);if(null===c)return 0;c=(0===a.indexOf("-")?-1:1)*1E3*(60*(60*c[1]+
c[2])+c[3]);return-c/60/1E3}function G(a,c,e){var d=H[a[3].substr(0,3).toLowerCase()],b=a[4],f=B(a[5]);"u"==f[4]&&(e=0);if(isNaN(b)){if("last"==b.substr(0,4))return b=I[b.substr(4,3).toLowerCase()],a=new Date(t(c,d+1,1,f[1]-24,f[2],f[3],e)),e=k.add(a,"minute",-e).getUTCDay(),b=b>e?b-e-7:b-e,0!==b&&(a=k.add(a,"hour",24*b)),a;b=I[b.substr(0,3).toLowerCase()];if("undefined"!=b){if("\x3e\x3d"==a[4].substr(3,2))return a=new Date(t(c,d,parseInt(a[4].substr(5),10),f[1],f[2],f[3],e)),e=k.add(a,"minute",-e).getUTCDay(),
b=b<e?b-e+7:b-e,0!==b&&(a=k.add(a,"hour",24*b)),a;if("\x3c\x3d"==b.substr(3,2))return a=new Date(t(c,d,parseInt(a[4].substr(5),10),f[1],f[2],f[3],e)),e=k.add(a,"minute",-e).getUTCDay(),b=b>e?b-e-7:b-e,0!==b&&(a=k.add(a,"hour",24*b)),a}}else return a=new Date(t(c,d,parseInt(b,10),f[1],f[2],f[3],e));return null}function S(a,c){var e=[];x.forEach(u[a[1]]||[],function(d){for(var b=0;2>b;b++)switch(d[b]){case "min":d[b]=J;break;case "max":d[b]=C;break;case "only":break;default:if(d[b]=parseInt(d[b],10),
isNaN(d[b]))throw Error("Invalid year found on rule");}"string"==typeof d[6]&&(d[6]=s(d[6]));(d[0]<=c&&d[1]>=c||d[0]==c&&"only"==d[1])&&e.push({r:d,d:G(d,c,a[0])})});return e}function T(a,c){for(var e=D[a]=[],d=0;d<c.length;d++){var b=c[d],f=e[d]=[],g=null,n=null,h=[];"string"==typeof b[0]&&(b[0]=s(b[0]));0===d?f[0]=Date.UTC(J,0,1,0,0,0,0):(f[0]=e[d-1][1],g=c[d-1],n=e[d-1],h=n[2]);for(var p=(new Date(f[0])).getUTCFullYear(),l=b[3]?parseInt(b[3],10):C,r=[];p<=l;p++)r=r.concat(S(b,p));r.sort(function(a,
b){return k.compare(a.d,b.d)});var m,p=0;for(m;m=r[p];p++)l=0<p?r[p-1]:null,0>m.r[5].indexOf("u")&&0>m.r[5].indexOf("s")&&(0===p&&0<d?h.length?m.d=k.add(m.d,"minute",h[h.length-1].r[6]):0===k.compare(new Date(n[1]),m.d,"date")?m.d=new Date(n[1]):m.d=k.add(m.d,"minute",s(g[1])):0<p&&(m.d=k.add(m.d,"minute",l.r[6])));f[2]=r;if(b[3]){var n=parseInt(b[3],10),h=H[(b[4]||"Jan").substr(0,3).toLowerCase()],l=parseInt(b[5]||"1",10),g=B(b[6]||"0"),q=f[1]=t(n,h,l,g[1],g[2],g[3],"u"==g[4]?0:b[0]);isNaN(q)&&(q=
f[1]=G([0,0,0,b[4],b[5],b[6]||"0"],n,"u"==g[4]?0:b[0]).getTime());n=x.filter(r,function(a,b){var c=0<b?6E4*r[b-1].r[6]:0;return a.d.getTime()<q+c});"u"!=g[4]&&"s"!=g[4]&&(f[1]=n.length?f[1]+6E4*n[n.length-1].r[6]:f[1]+6E4*s(b[1]))}else f[1]=Date.UTC(C,11,31,23,59,59,999)}}function K(a,c){for(var e=c,d=l[e];"string"==typeof d;)e=d,d=l[e];if(!d){if(!w.backward)return v("backward",!0),K(a,c);F(e)}D[c]||T(c,d);for(var e=D[c],b=a.getTime(),f=0,g;g=e[f];f++)if(b>=g[0]&&b<g[1])return{zone:d[f],range:e[f],
idx:f};throw Error('No Zone found for "'+c+'" on '+a);}N.experimental("dojox.date.timezone");h="africa antarctica asia australasia backward etcetera europe northamerica pacificnew southamerica".split(" ");var J=1835,C=2038,w={},l={},D={},u={},L=y.timezoneLoadingScheme||"preloadAll";h=y.defaultZoneFile||("preloadAll"==L?h:"northamerica");P.register("olson_zoneinfo",function(a){a=a.text.split("\n");for(var c=[],e="",d=null,e=null,b={zones:{},rules:{}},f=0;f<a.length;f++)if(c=a[f],c.match(/^\s/)&&(c=
"Zone "+d+c),c=c.split("#")[0],3<c.length)switch(c=c.split(/\s+/),e=c.shift(),e){case "Zone":d=c.shift();c[0]&&(b.zones[d]||(b.zones[d]=[]),b.zones[d].push(c));break;case "Rule":e=c.shift();b.rules[e]||(b.rules[e]=[]);b.rules[e].push(c);break;case "Link":if(b.zones[c[1]])throw Error("Error with Link "+c[1]);b.zones[c[1]]=c[0]}return b});var H={jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11},I={sun:0,mon:1,tue:2,wed:3,thu:4,fri:5,sat:6},R={EST:"northamerica",MST:"northamerica",
HST:"northamerica",EST5EDT:"northamerica",CST6CDT:"northamerica",MST7MDT:"northamerica",PST8PDT:"northamerica",America:"northamerica",Pacific:"australasia",Atlantic:"europe",Africa:"africa",Indian:"africa",Antarctica:"antarctica",Asia:"asia",Australia:"australasia",Europe:"europe",WET:"europe",CET:"europe",MET:"europe",EET:"europe"},Q={"Pacific/Honolulu":"northamerica","Atlantic/Bermuda":"northamerica","Atlantic/Cape_Verde":"africa","Atlantic/St_Helena":"africa","Indian/Kerguelen":"antarctica","Indian/Chagos":"asia",
"Indian/Maldives":"asia","Indian/Christmas":"australasia","Indian/Cocos":"australasia","America/Danmarkshavn":"europe","America/Scoresbysund":"europe","America/Godthab":"europe","America/Thule":"europe","Asia/Yekaterinburg":"europe","Asia/Omsk":"europe","Asia/Novosibirsk":"europe","Asia/Krasnoyarsk":"europe","Asia/Irkutsk":"europe","Asia/Yakutsk":"europe","Asia/Vladivostok":"europe","Asia/Sakhalin":"europe","Asia/Magadan":"europe","Asia/Kamchatka":"europe","Asia/Anadyr":"europe","Africa/Ceuta":"europe",
"America/Argentina/Buenos_Aires":"southamerica","America/Argentina/Cordoba":"southamerica","America/Argentina/Tucuman":"southamerica","America/Argentina/La_Rioja":"southamerica","America/Argentina/San_Juan":"southamerica","America/Argentina/Jujuy":"southamerica","America/Argentina/Catamarca":"southamerica","America/Argentina/Mendoza":"southamerica","America/Argentina/Rio_Gallegos":"southamerica","America/Argentina/Ushuaia":"southamerica","America/Aruba":"southamerica","America/La_Paz":"southamerica",
"America/Noronha":"southamerica","America/Belem":"southamerica","America/Fortaleza":"southamerica","America/Recife":"southamerica","America/Araguaina":"southamerica","America/Maceio":"southamerica","America/Bahia":"southamerica","America/Sao_Paulo":"southamerica","America/Campo_Grande":"southamerica","America/Cuiaba":"southamerica","America/Porto_Velho":"southamerica","America/Boa_Vista":"southamerica","America/Manaus":"southamerica","America/Eirunepe":"southamerica","America/Rio_Branco":"southamerica",
"America/Santiago":"southamerica","Pacific/Easter":"southamerica","America/Bogota":"southamerica","America/Curacao":"southamerica","America/Guayaquil":"southamerica","Pacific/Galapagos":"southamerica","Atlantic/Stanley":"southamerica","America/Cayenne":"southamerica","America/Guyana":"southamerica","America/Asuncion":"southamerica","America/Lima":"southamerica","Atlantic/South_Georgia":"southamerica","America/Paramaribo":"southamerica","America/Port_of_Spain":"southamerica","America/Montevideo":"southamerica",
"America/Caracas":"southamerica"},M={US:"S",Chatham:"S",NZ:"S",NT_YK:"S",Edm:"S",Salv:"S",Canada:"S",StJohns:"S",TC:"S",Guat:"S",Mexico:"S",Haiti:"S",Barb:"S",Belize:"S",CR:"S",Moncton:"S",Swift:"S",Hond:"S",Thule:"S",NZAQ:"S",Zion:"S",ROK:"S",PRC:"S",Taiwan:"S",Ghana:"GMT",SL:"WAT",Chicago:"S",Detroit:"S",Vanc:"S",Denver:"S",Halifax:"S",Cuba:"S",Indianapolis:"S",Starke:"S",Marengo:"S",Pike:"S",Perry:"S",Vincennes:"S",Pulaski:"S",Louisville:"S",CA:"S",Nic:"S",Menominee:"S",Mont:"S",Bahamas:"S",NYC:"S",
Regina:"S",Resolute:"ES",DR:"S",Toronto:"S",Winn:"S"};z.setObject("dojox.date.timezone",{getTzInfo:function(a,c){if("lazyLoad"==L){var e=A(c);if(e)w[e]||v(e);else throw Error("Not a valid timezone ID.");}var d=K(a,c),e=d.zone[0],b;var f=-1;b=d.range[2]||[];for(var g=a.getTime(),h=0,k;k=b[h];h++)g>=k.d.getTime()&&(f=h);b=0<=f?b[f].r:null;e=b?e+b[6]:u[d.zone[1]]&&0<d.idx?e+s(l[c][d.idx-1][1]):e+s(d.zone[1]);g=d.zone;f=g[2];-1<f.indexOf("%s")?(b?(d=b[7],"-"==d&&(d="")):g[1]in M?d=M[g[1]]:0<d.idx?(d=
l[c][d.idx-1][2],d=0>d.indexOf("%s")?f.replace("%s","S")==d?"S":"":""):d="",d=f.replace("%s",d)):-1<f.indexOf("/")?(d=f.split("/"),d=b?d[0===b[6]?0:1]:d[0]):d=f;return{tzOffset:e,tzAbbr:d}},loadZoneData:function(a){E(a)},getAllZones:function(){var a=[],c;for(c in l)a.push(c);a.sort();return a}});"string"==typeof h&&h&&(h=[h]);h instanceof Array&&x.forEach(h,v);var U=q.format,V=q._getZone;q.format=function(a,c){c=c||{};c.timezone&&!c._tzInfo&&(c._tzInfo=dojox.date.timezone.getTzInfo(a,c.timezone));
if(c._tzInfo){var e=a.getTimezoneOffset()-c._tzInfo.tzOffset;a=new Date(a.getTime()+6E4*e)}return U.call(this,a,c)};q._getZone=function(a,c,e){return e._tzInfo?c?e._tzInfo.tzAbbr:e._tzInfo.tzOffset:V.call(this,a,c,e)};return dojox.date.timezone});
//# sourceMappingURL=timezone.js.map