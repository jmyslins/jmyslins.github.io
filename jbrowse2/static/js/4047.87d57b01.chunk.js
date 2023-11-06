"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[4047],{70012:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(41867),i=t(47192),a=t(44050),s=t.n(a),o=t(93989),u=t(35421),c=t(80838),l=(0,i.ZL)()((function(e){return{fieldValue:{wordBreak:"break-word",maxHeight:300,fontSize:12,padding:e.spacing(.5),overflow:"auto"}}}));function d(e){var n=e.value,t=l().classes,i="".concat(n).match(/^https?:\/\//);return(0,c.jsx)("div",{className:t.fieldValue,children:r.isValidElement(n)?n:i?(0,c.jsx)(o.Z,{href:"".concat(n),children:"".concat(n)}):(0,c.jsx)(u.SanitizedHTML,{html:s()(n)?JSON.stringify(n):String(n)})})}},84140:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(68079),i=(t(41867),t(77573)),a=t(47192),s=t(80838),o=(0,a.ZL)()((function(e){return{fieldDescription:{"&:hover":{background:"dark"===e.palette.mode?"#e65100":"yellow"}},fieldName:{wordBreak:"break-all",minWidth:90,borderBottom:"1px solid #0003",fontSize:12,background:e.palette.action.disabledBackground,marginRight:e.spacing(1),padding:e.spacing(.5)}}}));function u(e){var n=e.description,t=e.name,a=e.width,u=e.prefix,c=void 0===u?[]:u,l=o(),d=l.classes,f=l.cx,x=[].concat((0,r.Z)(c),[t]).join(".");return n?(0,s.jsx)(i.Z,{title:n,placement:"left",children:(0,s.jsx)("div",{className:f(d.fieldDescription,d.fieldName),children:x})}):(0,s.jsx)("div",{className:d.fieldName,style:{width:a},children:x})}},47693:function(e,n,t){t.d(n,{Z:function(){return u}});t(41867);var r=t(47192),i=t(84140),a=t(70012),s=t(80838),o=(0,r.ZL)()({field:{display:"flex",flexWrap:"wrap"}});function u(e){var n=e.name,t=e.value,r=e.description,u=e.prefix,c=e.width,l=o().classes;return null!==t&&void 0!==t?(0,s.jsxs)("div",{className:l.field,children:[(0,s.jsx)(i.Z,{prefix:u,description:r,name:n,width:c}),(0,s.jsx)(a.Z,{value:t})]}):null}},44047:function(e,n,t){t.r(n),t.d(n,{Attributes:function(){return Y},BaseAttributes:function(){return se},BaseCard:function(){return te},BaseCoreDetails:function(){return ae},FeatureDetails:function(){return oe},default:function(){return ue}});var r=t(33028),i=t(96234),a=t(41867),s=t(97486),o=t(81108),u=t(89170),c=t(51590),l=t(3725),d=t(72176),f=t(47192),x=t(3762),v=t(95460),p=t(90872),m=t(35421),h=t(23801),Z=t(90552),j=t(68367),g=t(42844),b=t(80838),w=(0,a.lazy)((function(){return t.e(7972).then(t.bind(t,87972))})),S=(0,a.lazy)((function(){return t.e(2109).then(t.bind(t,62109))})),y=(0,f.ZL)()((function(e){return{formControl:{margin:0},container:{marginTop:e.spacing(4),marginBottom:e.spacing(4)}}}));function k(e){var n=e.model,t=e.feature,r=y().classes,s=(0,a.useState)(!1),o=(0,i.Z)(s,2),u=o[0],c=o[1],l=(0,a.useState)(!1),d=(0,i.Z)(l,2),f=d[0],x=d[1];return n?(0,b.jsxs)("div",{className:r.container,children:[(0,b.jsx)(h.Z,{variant:"contained",onClick:function(){return c(!u)},children:u?"Hide feature sequence":"Show feature sequence"}),(0,b.jsx)(Z.Z,{className:r.formControl,children:(0,b.jsx)(j.Z,{onClick:function(){return x(!0)},children:(0,b.jsx)(g.Z,{})})}),u?(0,b.jsx)(a.Suspense,{fallback:(0,b.jsx)(m.LoadingEllipses,{}),children:(0,b.jsx)(S,{model:n,feature:t},t.uniqueId)}):null,f?(0,b.jsx)(a.Suspense,{fallback:(0,b.jsx)("div",{}),children:(0,b.jsx)(w,{handleClose:function(){return x(!1)}})}):null]}):null}var L=t(47693),N=t(59740),_=t(68079),C=t(44050),D=t.n(C),O=t(1039);function E(e,n,t){return[(0,O.Cn)("".concat(e)||"".concat(n)),"".concat(t)].filter((function(e){return!!e})).join(" - ")}var T=t(41361),B=t(58753),F=t(71512),I=t(96614),M=t(83171),z=t(90375),U=t(84140),q=t(13577),H=["id"],P=(0,f.ZL)()((function(e){return{margin:{margin:e.spacing(1),width:"100%"},cell:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}}));function R(e){var n,t,s=e.value,o=e.prefix,u=e.name,l=P().classes,d=(0,q.x)(),f=d.ref,x=d.scrollLeft,v=(0,a.useState)(!1),h=(0,i.Z)(v,2),Z=h[0],j=h[1],g=Object.keys(s[0]).sort(),w=new Set(g),S=Object.entries(s).map((function(e){var n=(0,i.Z)(e,2),t=n[0],a=n[1],s=a.id,o=(0,N.Z)(a,H);return(0,r.Z)({id:t,identifier:s},o)})),y=(0,T.Z)(s);try{for(y.s();!(n=y.n()).done;)for(var k=n.value,L=0,C=Object.keys(k);L<C.length;L++){var D=C[L];w.add(D)}}catch(A){y.e(A)}finally{y.f()}w.has("id")?(w.delete("id"),t=["identifier"].concat((0,_.Z)(w))):t=(0,_.Z)(w);var O=(0,a.useState)(t.map((function(e){return(0,p.measureGridWidth)(S.map((function(n){return n[e]})))}))),E=(0,i.Z)(O,2),R=E[0],W=E[1];return w.size<g.length+5?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(U.Z,{prefix:o,name:u}),(0,b.jsx)(I.Z,{control:(0,b.jsx)(M.Z,{checked:Z,onChange:function(e){return j(e.target.checked)}}),label:(0,b.jsx)(c.Z,{variant:"body2",children:"Show options"})}),(0,b.jsxs)("div",{className:l.margin,ref:f,children:[(0,b.jsx)(z.Z,{widths:R,setWidths:W,scrollLeft:x}),(0,b.jsx)(B._$,{disableRowSelectionOnClick:!0,rows:S,rowCount:25,rowHeight:25,columnHeaderHeight:35,hideFooter:S.length<25,slots:{toolbar:Z?F.n:null},slotProps:{toolbar:{printOptions:{disableToolbarButton:!0}}},columns:t.map((function(e,n){return{field:e,renderCell:function(e){var n=e.value;return(0,b.jsx)("div",{className:l.cell,children:(0,b.jsx)(m.SanitizedHTML,{html:(0,p.getStr)(n)})})},width:R[n]}}))})]})]}):null}var W=t(70012),A=(0,f.ZL)()((function(e){return{field:{display:"flex",flexWrap:"wrap"},fieldSubvalue:{wordBreak:"break-word",maxHeight:300,padding:e.spacing(.5),border:"1px solid ".concat(e.palette.action.selected),boxSizing:"border-box",overflow:"auto"}}}));function J(e){var n=e.name,t=e.value,r=e.description,i=e.prefix,a=void 0===i?[]:i,s=A().classes;return 1===t.length?D()(t[0])?(0,b.jsx)(Y,{attributes:t[0],prefix:[].concat((0,_.Z)(a),[n])}):(0,b.jsxs)("div",{className:s.field,children:[(0,b.jsx)(U.Z,{prefix:a,description:r,name:n}),(0,b.jsx)(W.Z,{value:t[0]})]}):t.every((function(e){return D()(e)}))?(0,b.jsx)(b.Fragment,{children:t.map((function(e,t){return(0,b.jsx)(Y,{attributes:e,prefix:[].concat((0,_.Z)(a),[n+"-"+t])},JSON.stringify(e)+"-"+t)}))}):(0,b.jsxs)("div",{className:s.field,children:[(0,b.jsx)(U.Z,{prefix:a,description:r,name:n}),t.map((function(e,n){return(0,b.jsx)("div",{className:s.fieldSubvalue,children:(0,b.jsx)(W.Z,{value:e})},JSON.stringify(e)+"-"+n)}))]})}var V=(0,f.ZL)()({field:{display:"flex",flexWrap:"wrap"}});function G(e){var n,t=e.value,r=e.prefix,i=e.name,a=V().classes,s=t.uri,o=t.baseUri,u=void 0===o?"":o;try{n=new URL(s,u).href}catch(c){n=s}return(0,b.jsxs)("div",{className:a.field,children:[(0,b.jsx)(U.Z,{prefix:r,name:i}),(0,b.jsx)(W.Z,{value:n})]})}var K=["__jbrowsefmt"],$=["omitSingleLevel"],Q=170,X=["__jbrowsefmt","length","position","subfeatures","uniqueId","exonFrames","parentId","thickStart","thickEnd"];function Y(e){var n=e.attributes,t=e.omit,s=void 0===t?[]:t,o=e.omitSingleLevel,u=void 0===o?[]:o,c=e.descriptions,l=e.formatter,d=void 0===l?function(e){return e}:l,f=e.hideUris,x=e.prefix,v=void 0===x?[]:x,m=new Set([].concat((0,_.Z)(s),X,(0,_.Z)(u))),h=n.__jbrowsefmt,Z=(0,N.Z)(n,K),j=(0,r.Z)((0,r.Z)({},Z),h),g=function(e,n){return Math.ceil((0,p.max)(e.map((function(e){return(0,p.measureText)([].concat((0,_.Z)(n),[e[0]]).join("."),12)}))))+10}(Object.entries(j).filter((function(e){var n=(0,i.Z)(e,2),t=n[0];return void 0!==n[1]&&!m.has(t)})),v);return(0,b.jsx)(b.Fragment,{children:Object.entries(j).filter((function(e){var n=(0,i.Z)(e,2),t=n[0];return void 0!==n[1]&&!m.has(t)})).map((function(n){var t=(0,i.Z)(n,2),s=t[0],o=t[1],u=function(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.forEach((function(e){D()(t)&&(t=t[e])})),"string"===typeof t?t:D()(t)&&"string"===typeof(null===(n=t)||void 0===n?void 0:n.Description)?t.Description:void 0}([].concat((0,_.Z)(v),[s]),c);if(Array.isArray(o))return o.length>1&&o.every((function(e){return D()(e)}))?(0,b.jsx)(R,{name:s,prefix:v,value:o},s):(0,b.jsx)(J,{name:s,value:o,description:u,prefix:v},s);if(D()(o)){e.omitSingleLevel;var l=(0,N.Z)(e,$);return(0,p.isUriLocation)(o)?f?null:(0,b.jsx)(G,{name:s,prefix:v,value:o},s):(0,a.createElement)(Y,(0,r.Z)((0,r.Z)({},l),{},{key:s,attributes:o,descriptions:c,prefix:[].concat((0,_.Z)(v),[s])}))}return(0,b.jsx)(L.Z,{name:s,value:d(o,s),description:u,prefix:v,width:Math.min(g,Q)},s)}))})}var ee=["name","start","end","strand","refName","description","type"],ne=(0,f.ZL)()((function(e){var n;return{expansionPanelDetails:{display:"block",padding:e.spacing(1)},expandIcon:{color:(null===(n=e.palette.tertiary)||void 0===n?void 0:n.contrastText)||"#fff"}}}));function te(e){var n=e.children,t=e.title,r=e.defaultExpanded,s=void 0===r||r,d=ne().classes,f=(0,a.useState)(s),x=(0,i.Z)(f,2),p=x[0],m=x[1];return(0,b.jsxs)(o.Z,{expanded:p,onChange:function(){return m((function(e){return!e}))},TransitionProps:{unmountOnExit:!0,timeout:150},children:[(0,b.jsx)(u.Z,{expandIcon:(0,b.jsx)(v.Z,{className:d.expandIcon}),children:(0,b.jsxs)(c.Z,{variant:"button",children:[" ",t]})}),(0,b.jsx)(l.Z,{className:d.expansionPanelDetails,children:n})]})}function re(e){var n=e.feature,t=n.strand,r={"-1":"-",0:"",1:"+"},i=r[t]?"(".concat(r[t],")"):"",a=(0,p.assembleLocString)(n);return(0,b.jsx)(b.Fragment,{children:"".concat(a," ").concat(i)})}function ie(e){var n,t=e.feature,a=(0,r.Z)((0,r.Z)({},t),t.__jbrowsefmt),s=a.start,o=a.end,u=(0,r.Z)((0,r.Z)({},a),{},{length:(n=o-s,n.toLocaleString("en-US"))});return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(L.Z,{name:"Position",value:(0,b.jsx)(re,(0,r.Z)((0,r.Z)({},e),{},{feature:a}))}),Object.entries({description:"Description",name:"Name",length:"Length",type:"Type"}).map((function(e){var n=(0,i.Z)(e,2),t=n[0];return[n[1],u[t]]})).filter((function(e){return null!=(0,i.Z)(e,2)[1]})).map((function(e){var n=(0,i.Z)(e,2),t=n[0],r=n[1];return(0,b.jsx)(L.Z,{name:t,value:r},t)}))]})}var ae=function(e){return(0,b.jsx)(te,(0,r.Z)((0,r.Z)({},e),{},{title:"Primary data",children:(0,b.jsx)(ie,(0,r.Z)({},e))}))},se=function(e){var n=e.feature;return(0,b.jsx)(te,(0,r.Z)((0,r.Z)({},e),{},{title:"Attributes",children:(0,b.jsx)(Y,(0,r.Z)((0,r.Z)({},e),{},{attributes:n}))}))};function oe(e){var n=e.omit,t=void 0===n?[]:n,i=e.model,a=e.feature,o=e.depth,u=void 0===o?0:o,l=a.mate,f=a.name,x=void 0===f?"":f,v=a.id,h=void 0===v?"":v,Z=a.type,j=void 0===Z?"":Z,g=a.subfeatures,w=a.uniqueId,S=(0,p.getEnv)(i).pluginManager,y=(0,p.getSession)(i),L=S.evaluateExtensionPoint("Core-extraFeaturePanel",null,{session:y,feature:a,model:i});return(0,b.jsxs)(te,{title:E(x,h,j),children:[(0,b.jsx)(c.Z,{children:"Core details"}),(0,b.jsx)(ie,(0,r.Z)({},e)),l?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(d.Z,{}),(0,b.jsx)(c.Z,{children:"Mate details"}),(0,b.jsx)(ie,(0,r.Z)((0,r.Z)({},e),{},{feature:(0,r.Z)((0,r.Z)({},l),{},{uniqueId:w+"-mate"})}))]}):null,(0,b.jsx)(d.Z,{}),(0,b.jsx)(c.Z,{children:"Attributes"}),(0,b.jsx)(Y,(0,r.Z)((0,r.Z)({attributes:a},e),{},{omit:t,omitSingleLevel:ee})),(0,b.jsx)(s.SV,{FallbackComponent:function(e){return(0,b.jsx)(m.ErrorMessage,{error:e.error})},children:(0,b.jsx)(k,(0,r.Z)({},e))}),L?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(d.Z,{}),(0,b.jsx)(te,{title:L.name,children:(0,b.jsx)(L.Component,(0,r.Z)({},e))})]}):null,null!==g&&void 0!==g&&g.length?(0,b.jsx)(te,{title:"Subfeatures",defaultExpanded:u<1,children:g.map((function(e,n){return(0,b.jsx)(oe,{feature:(0,r.Z)((0,r.Z)({},e),{},{uniqueId:"".concat(w,"_").concat(n)}),model:i,depth:u+1},JSON.stringify(e))}))}):null]})}var ue=(0,x.observer)((function(e){var n=e.model,t=n.error,r=n.featureData;if(t)return(0,b.jsx)(m.ErrorMessage,{error:t});if(!r)return null;var i,a=JSON.parse(JSON.stringify(r,(function(e,n){return void 0===n?null:n})));return i=a,0===Object.keys(i).length?null:(0,b.jsx)(oe,{model:n,feature:a})}))},1039:function(e,n,t){t.d(n,{Cn:function(){return d},D8:function(){return o},Wx:function(){return u},ZK:function(){return c},mw:function(){return l},zo:function(){return a}});var r=t(68079),i=t(33028);function a(e,n){return e.map((function(e){return n.slice(e.start,e.end)})).join("")}function s(e){return"".concat(e.start,"-").concat(e.end)}function o(e){return e.filter((function(e,n,t){return!n||s(e)!==s(t[n-1])}))}function u(e,n){return e.map((function(e){return(0,i.Z)((0,i.Z)({},e),{},{start:n-e.end,end:n-e.start})})).sort((function(e,n){return e.start-n.start}))}function c(e,n){if(!e.length)return[];var t=e.at(0),a=e.at(-1),s=n.findIndex((function(e){return e.end>=t.start&&e.start<=t.start})),o=n.findIndex((function(e){return e.end>=a.end&&e.start<=a.end})),u=n[o],c=n[s],l=[].concat((0,r.Z)(n.slice(0,s)),[{start:c.start,end:t.start}]).map((function(e){return(0,i.Z)((0,i.Z)({},e),{},{type:"five_prime_UTR"})})),d=[{start:a.end,end:u.end}].concat((0,r.Z)(n.slice(o+1))).map((function(e){return(0,i.Z)((0,i.Z)({},e),{},{type:"three_prime_UTR"})}));return[].concat((0,r.Z)(l),(0,r.Z)(d))}function l(e,n){if(!e.length)return[];var t=e.at(0),a=e.at(-1),s=[{start:n.start,end:t.start}].map((function(e){return(0,i.Z)((0,i.Z)({},e),{},{type:"five_prime_UTR"})})),o=[{start:a.end,end:n.end}].map((function(e){return(0,i.Z)((0,i.Z)({},e),{},{type:"three_prime_UTR"})}));return[].concat((0,r.Z)(s),(0,r.Z)(o))}function d(e){return e.length>20?"".concat(e.slice(0,20),"..."):e}},90375:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(68079),i=t(96234),a=t(41867),s=t(47192),o=t(54560),u=t(80838),c=(0,s.ZL)()((function(e){return{resizeBar:{background:e.palette.action.disabledBackground,height:12,position:"relative",overflow:"hidden"},tick:{position:"absolute",height:"100%",pointerEvents:"none",background:e.palette.action.disabled,width:1},hiddenTick:{position:"absolute",height:"100%",width:5}}}));function l(e){var n=e.left,t=e.scrollLeft,r=e.idx,i=e.onDrag,s=e.onMouseDown,l=c().classes,d=(0,a.useCallback)((function(e,n){return i(e,n,r)}),[r,i]);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(o.Z,{onDrag:d,onMouseDown:s,vertical:!0,className:l.hiddenTick,style:{left:n-t-2.5}}),(0,u.jsx)("div",{style:{left:n-t},className:l.tick})]})}function d(e){for(var n=e.widths,t=e.setWidths,s=e.checkbox,o=e.scrollLeft,d=void 0===o?0:o,f=c().classes,x=[],v=(0,a.useState)(),p=(0,i.Z)(v,2),m=p[0],h=p[1],Z=s?52:0,j=0;j<n.length;j++){var g=n[j];x[j]=g+Z,Z+=g}return(0,u.jsx)("div",{className:f.resizeBar,children:x.map((function(e,i){return(0,u.jsx)(l,{onMouseDown:function(){h((0,r.Z)(n))},left:i===x.length-1?e-3:e,onDrag:function(e,i,a){var s=(0,r.Z)(n);s[a]=Math.max(m[a]-i,50),t(s)},idx:i,scrollLeft:d},i)}))})}},13577:function(e,n,t){t.d(n,{x:function(){return a}});var r=t(96234),i=t(41867);function a(){var e=(0,i.useRef)(null),n=(0,i.useState)(0),t=(0,r.Z)(n,2),a=t[0],s=t[1];return(0,i.useEffect)((function(){var n=setInterval((function(){var n,t=null===(n=e.current)||void 0===n?void 0:n.querySelector(".MuiDataGrid-virtualScroller");t&&s(t.scrollLeft)}),100);return function(){clearInterval(n)}}),[]),{ref:e,scrollLeft:a}}}}]);
//# sourceMappingURL=4047.87d57b01.chunk.js.map