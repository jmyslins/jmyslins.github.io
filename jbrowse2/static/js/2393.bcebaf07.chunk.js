"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[2393],{82393:function(e,t,n){n.r(t),n.d(t,{default:function(){return d},isGzip:function(){return b}});var r=n(32723),a=n(96234),u=n(34795),i=n(9249),c=n(87371),s=n(45754),o=n(13820),f=n(31238),p=n(90872),l=n(59062);function b(e){return 31===e[0]&&139===e[1]&&8===e[2]}var d=function(e){(0,s.Z)(n,e);var t=(0,o.Z)(n);function n(){return(0,i.Z)(this,n),t.apply(this,arguments)}return(0,c.Z)(n,[{key:"getData",value:function(){var e=(0,u.Z)((0,r.Z)().mark((function e(){var t,n,u,i,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.pluginManager,""!==(n=this.getConf("cytobandLocation")).uri&&"/path/to/cytoband.txt.gz"!==n.uri){e.next=4;break}return e.abrupt("return",[]);case 4:return e.next=6,(0,l.openLocation)(n,t).readFile();case 6:if(!b(u=e.sent)){e.next=13;break}return e.next=10,(0,f.unzip)(u);case 10:e.t0=e.sent,e.next=14;break;case 13:e.t0=u;case 14:return i=e.t0,c=new TextDecoder("utf8",{fatal:!0}).decode(i),e.abrupt("return",c.split(/\n|\r\n|\r/).filter((function(e){return!!e.trim()})).map((function(e,t){var n=e.split("\t"),r=(0,a.Z)(n,5),u=r[0],i=r[1],c=r[2],s=r[3],o=r[4];return new p.SimpleFeature({uniqueId:"".concat(t),refName:u,start:+i,end:+c,name:s,type:o})})));case 17:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"freeResources",value:function(){}}]),n}(n(56798).BaseAdapter)}}]);
//# sourceMappingURL=2393.bcebaf07.chunk.js.map