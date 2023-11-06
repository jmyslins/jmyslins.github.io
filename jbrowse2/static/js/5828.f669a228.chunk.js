"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[5828],{55828:function(e,t,i){i.r(t),i.d(t,{doAfterAttach:function(){return v}});var a=i(41361),n=i(33028),o=i(31625),r=i(90872),f=i(56726),s=i(45627),l=i(85815),d=i(46997);function v(e){(0,o.addDisposer)(e,(0,l.autorun)((function(){var t,i,a=(0,r.getContainingView)(e);if(a.initialized){var n=null===(t=e.mainCanvas)||void 0===t?void 0:t.getContext("2d"),o=null===(i=e.cigarClickMapCanvas)||void 0===i?void 0:i.getContext("2d");if(n&&o){var f=a.middleComparativeHeight,s=a.width;n.clearRect(0,0,s,f),o.clearRect(0,0,s,f),(0,d.Bf)(e,n,o)}}}))),(0,o.addDisposer)(e,(0,l.autorun)((function(){(0,r.getContainingView)(e).initialized&&(0,d.z8)(e)}))),(0,o.addDisposer)(e,(0,l.reaction)((function(){var t=(0,r.getContainingView)(e);return{bpPerPx:t.views.map((function(e){return e.bpPerPx})),displayedRegions:JSON.stringify(t.views.map((function(e){return e.displayedRegions}))),features:e.features,initialized:t.initialized}}),(function(t){if(t.initialized){var i,l=(0,r.getSession)(e).assemblyManager,d=(0,r.getContainingView)(e).views.map((function(e){return(0,n.Z)((0,n.Z)({},(0,o.getSnapshot)(e)),{},{width:e.width,staticBlocks:e.staticBlocks,interRegionPaddingWidth:e.interRegionPaddingWidth,minimumBlockWidth:e.minimumBlockWidth})})),v=[],u=e.features||[],c=(0,a.Z)(u);try{for(c.s();!(i=c.n()).done;){var h=i.value,g=h.get("mate"),m=h.get("start"),b=h.get("end"),p=g.start,w=g.end;if(-1===h.get("strand")){var C=[m,b];b=C[0],m=C[1]}var M=null===l||void 0===l?void 0:l.get(h.get("assemblyName")),P=null===l||void 0===l?void 0:l.get(g.assemblyName),x=h.get("refName"),y=g.refName,T=(null===M||void 0===M?void 0:M.getCanonicalRefName(x))||x,k=(null===P||void 0===P?void 0:P.getCanonicalRefName(y))||y,R=d[0],S=d[1],N=(0,f.R)({self:R,refName:T,coord:m}),z=(0,f.R)({self:R,refName:T,coord:b}),I=(0,f.R)({self:S,refName:k,coord:p}),W=(0,f.R)({self:S,refName:k,coord:w});if(void 0!==N&&void 0!==z&&void 0!==I&&void 0!==W){var B=h.get("CIGAR");v.push({p11:N,p12:z,p21:I,p22:W,f:h,cigar:s.tr.parseCigar(B)})}}}catch(V){c.e(V)}finally{c.f()}e.setFeatPositions(v)}}),{fireImmediately:!0}))}},46997:function(e,t,i){i.d(t,{EU:function(){return f},z8:function(){return h},Bf:function(){return c},zv:function(){return u}});var a=i(41361),n=i(90872);function o(e){var t=e.feature,i=e.ctx,a=e.offsets,o=e.cb,f=e.height,s=e.drawCurves,l=e.oobLimit,d=e.viewWidth,v=e.hideTiny,u=t.p11,c=t.p12,h=t.p21,g=t.p22,m=u.offsetPx-a[0],b=c.offsetPx-a[0],p=h.offsetPx-a[1],w=g.offsetPx-a[1],C=Math.abs(b-m),M=Math.abs(w-p),P=f,x=(P-0)/2,y=Math.min(p,w),T=Math.max(p,w);(0,n.doesIntersect2)(y,T,-l,d+l)&&(C<=1&&M<=1?v||(i.beginPath(),i.moveTo(m,0),s?i.bezierCurveTo(m,x,p,x,p,P):i.lineTo(p,P),i.stroke()):(r(i,m,b,0,w,p,P,x,s),o(i)))}function r(e,t,i,a,n,o,r,f,s){s?function(e,t,i,a,n,o,r,f){var s=Math.abs(t-i),l=Math.abs(t-i);if(s<5&&l<5&&i<t&&Math.abs(t-n)>100){var d=t;t=i,i=d}e.beginPath(),e.moveTo(t,a),e.lineTo(i,a),e.bezierCurveTo(i,f,n,f,n,r),e.lineTo(o,r),e.bezierCurveTo(o,f,t,f,t,a),e.closePath(),e.fill()}(e,t,i,a,n,o,r,f):function(e,t,i,a,n,o,r){e.beginPath(),e.moveTo(t,a),e.lineTo(i,a),e.lineTo(n,r),e.lineTo(o,r),e.closePath(),e.fill()}(e,t,i,a,n,o,r)}var f=16581375;function s(e){var t=Math.floor(e/65025)%255,i=Math.floor(e/255)%255,a=e%255;return"rgb(".concat(t,",").concat(i,",").concat(a,")")}var l={I:"#ff03",N:"#0a03",D:"#00f3",X:"brown",M:"#f003","=":"#f003"},d=3,v=1600;function u(e,t,i,a){return Math.floor((255*e*255+255*t+i-1)/a)}function c(e,t,i){var u,c=(0,n.getContainingView)(e),h=c.drawCurves,g=c.drawCIGAR,m=c.middleComparativeHeight,b=c.width,p=c.views.map((function(e){return e.bpPerPx}));i&&(i.imageSmoothingEnabled=!1),t.beginPath();var w=e.featPositions,C=c.views.map((function(e){return e.offsetPx})),M=Math.floor(f/w.length);t.fillStyle=l.M,t.strokeStyle=l.M;var P,x=(0,a.Z)(w);try{for(x.s();!(P=x.n()).done;){var y=P.value,T=y.p11,k=y.p12,R=y.p21,S=y.p22,N=T.offsetPx-C[0],z=k.offsetPx-C[0],I=R.offsetPx-C[1],W=S.offsetPx-C[1],B=Math.abs(z-N),V=Math.abs(W-I),D=m,Z=(D-0)/2;B<=d&&V<=d&&I<b+v&&I>-v&&(t.moveTo(N,0),h?t.bezierCurveTo(N,Z,I,Z,I,D):t.lineTo(I,D))}}catch(xe){x.e(xe)}finally{x.f()}t.stroke(),t.fillStyle=l.M,t.strokeStyle=l.M;var A,L=(0,a.Z)(w);try{for(L.s();!(A=L.n()).done;){var _=A.value,E=_.p11,H=_.p12,j=_.p21,G=_.p22,X=_.f,F=_.cigar,J=E.offsetPx-C[0],O=H.offsetPx-C[0],U=j.offsetPx-C[1],q=G.offsetPx-C[1],K=Math.abs(O-J),Q=Math.abs(q-U),Y=Math.min(U,q),$=Math.max(U,q),ee=m,te=(ee-0)/2;if(!(K<=d&&Q<=d)&&(0,n.doesIntersect2)(Y,$,-v,c.width+v)){var ie=X.get("strand"),ae=-1===ie?O:J,ne=ae<(-1===ie?J:O)?1:-1,oe=(U<q?1:-1)*ie,re=ae,fe=-1===ie?q:U;if(null!==F&&void 0!==F&&F.length&&g)for(var se=!1,le=0,de=0,ve=Math.floor(f/F.length),ue=0;ue<F.length;ue+=2){var ce=ue*ve+1,he=+F[ue],ge=F[ue+1];se||(le=re,de=fe);var me=he/p[0],be=he/p[1];if("M"===ge||"="===ge||"X"===ge?(re+=me*ne,fe+=be*oe):"D"===ge||"N"===ge?re+=me*ne:"I"===ge&&(fe+=be*oe),!(Math.max(le,de,re,fe)<0||Math.min(le,de,re,fe)>b)){var pe=ue<F.length-2;Math.abs(re-le)<=1&&Math.abs(fe-de)<=1&&pe?se=!0:(se=!1,t.fillStyle=l[se&&me>1||be>1?ge:"M"],r(t,le,re,0,fe,de,ee,te,h),i&&(i.fillStyle=s(ce),r(i,le,re,0,fe,de,ee,te,h)))}}else r(t,J,O,0,q,U,ee,te,h)}}}catch(xe){L.e(xe)}finally{L.f()}var we=null===(u=e.clickMapCanvas)||void 0===u?void 0:u.getContext("2d");if(we){we.imageSmoothingEnabled=!1,we.clearRect(0,0,b,m);for(var Ce=0;Ce<w.length;Ce++){var Me=w[Ce],Pe=Ce*M+1;we.fillStyle=s(Pe),o({cb:function(e){return e.fill()},feature:Me,ctx:we,drawCurves:h,offsets:C,oobLimit:v,viewWidth:c.width,hideTiny:!0,height:m})}}}function h(e){var t,i=e.clickId,a=e.mouseoverId,r=(0,n.getContainingView)(e),f=r.drawCurves,s=r.middleComparativeHeight,l=r.width,d=null===(t=e.mouseoverCanvas)||void 0===t?void 0:t.getContext("2d"),u=r.views.map((function(e){return e.offsetPx}));if(d){d.resetTransform(),d.scale(1,1),d.clearRect(0,0,l,s);var c=e.featMap[a||""];c&&(d.fillStyle="rgb(0,0,0,0.1)",o({cb:function(e){return e.fill()},feature:c,ctx:d,oobLimit:v,viewWidth:r.width,drawCurves:f,offsets:u,height:s}));var h=e.featMap[i||""];h&&(d.strokeStyle="rgb(0, 0, 0, 0.9)",o({cb:function(e){return e.stroke()},feature:h,ctx:d,oobLimit:v,viewWidth:r.width,drawCurves:f,offsets:u,height:s}))}}}}]);
//# sourceMappingURL=5828.f669a228.chunk.js.map