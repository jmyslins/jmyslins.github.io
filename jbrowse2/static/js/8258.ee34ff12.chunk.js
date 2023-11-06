"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[8258],{78258:function(e,t,r){r.r(t),r.d(t,{default:function(){return k},featureData:function(){return b}});var n=r(41361),a=r(68079),u=r(32723),s=r(34795),i=r(9249),c=r(87371),o=r(45754),f=r(13820),l=r(33028),p=r(56798),h=r(59062),d=r(16979),v=r(90872),Z=r(65904),m=r(31238);function w(e){return 31===e[0]&&139===e[1]&&8===e[2]}function b(e,t,r,n){var a=e.split("\t"),u=a[r?3:0],s=+a[r?4:1],i=+a[r?5:2],c=+a[r?0:3],o=+a[r?1:4],f=+a[r?2:5],p=a[6],h=+a[7],d=g(a[8]),Z=g(a[9]),m=a.slice(9),w=n?Object.fromEntries(n.slice(9).map((function(e,t){return[e,m[t]]}))):m;return new v.SimpleFeature((0,l.Z)((0,l.Z)({start:s,end:i,refName:u,strand:d,name:p},w),{},{score:h,uniqueId:t,mate:{refName:c,start:o,end:f,strand:Z}}))}function g(e){return"+"===e?1:"-"===e?-1:"."===e?0:void 0}var k=function(e){(0,o.Z)(r,e);var t=(0,f.Z)(r);function r(){var e;(0,i.Z)(this,r);for(var n=arguments.length,a=new Array(n),u=0;u<n;u++)a[u]=arguments[u];return(e=t.call.apply(t,[this].concat(a))).bedpeFeatures=void 0,e.intervalTrees={},e}return(0,c.Z)(r,[{key:"loadDataP",value:function(){var e=(0,s.Z)((0,u.Z)().mark((function e(){var t,r,n,a,s,i,c,o,f,l,p,d,v,Z,b,g,k,y=arguments;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=y.length>0&&void 0!==y[0]?y[0]:{},r=this.pluginManager,n=this.getConf("bedpeLocation"),e.next=5,(0,h.openLocation)(n,r).readFile(t);case 5:if(!w(a=e.sent)){e.next=12;break}return e.next=9,(0,m.unzip)(a);case 9:e.t0=e.sent,e.next=13;break;case 12:e.t0=a;case 13:if(!((s=e.t0).length>536870888)){e.next=16;break}throw new Error("Data exceeds maximum string length (512MB)");case 16:for(i=new TextDecoder("utf8",{fatal:!0}).decode(s),c=i.split(/\n|\r\n|\r/).filter((function(e){return!!e})),o=[],f=0;f<c.length&&c[f].startsWith("#");f++)o.push(c[f]);for(l=o.join("\n"),p={},d={};f<c.length;f++)v=c[f],Z=v.split("\t"),b=Z[0],g=Z[3],p[b]||(p[b]=[]),d[g]||(d[g]=[]),p[b].push(v),d[g].push(v);return k=this.getConf("columnNames"),e.abrupt("return",{header:l,feats1:p,feats2:d,columnNames:k});case 27:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"loadData",value:function(){var e=(0,s.Z)((0,u.Z)().mark((function e(){var t,r=this,n=arguments;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:{},this.bedpeFeatures||(this.bedpeFeatures=this.loadDataP(t).catch((function(e){throw r.bedpeFeatures=void 0,e}))),e.abrupt("return",this.bedpeFeatures);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getRefNames",value:function(){var e=(0,s.Z)((0,u.Z)().mark((function e(){var t,r,n,s,i=arguments;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:{},e.next=3,this.loadData(t);case 3:return r=e.sent,n=r.feats1,s=r.feats2,e.abrupt("return",(0,a.Z)(new Set([].concat((0,a.Z)(Object.keys(n)),(0,a.Z)(Object.keys(s))))));case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getHeader",value:function(){var e=(0,s.Z)((0,u.Z)().mark((function e(){var t,r,n,a=arguments;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:{},e.next=3,this.loadData(t);case 3:return r=e.sent,n=r.header,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getNames",value:function(){var e=(0,s.Z)((0,u.Z)().mark((function e(){var t,r,n,a,s;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loadData();case 2:if(t=e.sent,r=t.header,!(n=t.columnNames).length){e.next=7;break}return e.abrupt("return",n);case 7:return a=r.split(/\n|\r\n|\r/).filter((function(e){return!!e})),s=a.at(-1),e.abrupt("return",null!==s&&void 0!==s&&s.includes("\t")?s.slice(1).split("\t").map((function(e){return e.trim()})):void 0);case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"loadFeatureTreeP",value:function(){var e=(0,s.Z)((0,u.Z)().mark((function e(t){var r,a,s,i,c,o,f,l,p,h,d,v,m,w,g,k=this;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loadData();case 2:return r=e.sent,a=r.feats1,s=r.feats2,i=a[t],c=s[t],e.next=9,this.getNames();case 9:if(o=e.sent,f=new Z.ZP,l=null===i||void 0===i?void 0:i.map((function(e,r){return b(e,"".concat(k.id,"-").concat(t,"-").concat(r),!1,o)})),p=null===c||void 0===c?void 0:c.map((function(e,r){return b(e,"".concat(k.id,"-").concat(t,"-").concat(r),!0,o)})),l){h=(0,n.Z)(l);try{for(h.s();!(d=h.n()).done;)v=d.value,f.insert([v.get("start"),v.get("end")],v)}catch(u){h.e(u)}finally{h.f()}}if(p){m=(0,n.Z)(p);try{for(m.s();!(w=m.n()).done;)g=w.value,f.insert([g.get("start"),g.get("end")],g)}catch(u){m.e(u)}finally{m.f()}}return e.abrupt("return",f);case 16:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"loadFeatureTree",value:function(){var e=(0,s.Z)((0,u.Z)().mark((function e(t){var r=this;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.intervalTrees[t]||(this.intervalTrees[t]=this.loadFeatureTreeP(t).catch((function(e){throw r.intervalTrees[t]=void 0,e}))),e.abrupt("return",this.intervalTrees[t]);case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getFeatures",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,d.ObservableCreate)(function(){var r=(0,s.Z)((0,u.Z)().mark((function r(n){var a,s,i,c;return(0,u.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=e.start,s=e.end,i=e.refName,r.next=3,t.loadFeatureTree(i);case 3:null===(c=r.sent)||void 0===c||c.search([a,s]).forEach((function(e){return n.next(e)})),n.complete();case 6:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),r.signal)}},{key:"freeResources",value:function(){}}]),r}(p.BaseFeatureDataAdapter);k.capabilities=["getFeatures","getRefNames"]}}]);
//# sourceMappingURL=8258.ee34ff12.chunk.js.map