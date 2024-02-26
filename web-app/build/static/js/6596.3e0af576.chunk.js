"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[6596],{36596:(e,t,n)=>{n.r(t),n.d(t,{default:()=>I});var a=n(69060),s=n(51560),i=n(66152),l=n(61628),c=n(3992),r=n(21124),o=n(95705),d=n(66156),u=n(19536),h=n(87816),x=n(3428),g=n(61180),m=n(78256),p=n(48504),j=n(25300),b=n(84612),v=n(86116),k=n(7172),y=n(58564),f=n.n(y),S=n(4836),C=n(14632),_=n(82496);const E=e=>{var t;let{open:n,closeModalAndRefresh:s,buckets:l}=e;const c=(0,d.Ab)(),[r,u]=(0,a.useState)(!1),[h,x]=(0,a.useState)(!0),[p,j]=(0,a.useState)([]),[b,v]=(0,a.useState)(""),[k,y]=(0,a.useState)(""),[E,T]=(0,a.useState)(""),[B,w]=(0,a.useState)(""),[N,R]=(0,a.useState)(!1),[q,L]=(0,a.useState)("0"),[K,A]=(0,a.useState)("0"),[I,M]=(0,a.useState)("expiry"),[F,U]=(0,a.useState)("0"),[W,O]=(0,a.useState)("0"),[D,P]=(0,a.useState)(!1),[z,G]=(0,a.useState)(null);(0,a.useEffect)((()=>{h&&g.m.admin.tiersList().then((e=>{const t=f()(e.data,"items",[]);if(null!==t&&t.length>=1){const e=t.map((e=>{const t=e.type,n=f()(e,"".concat(t,".name"),"");return{label:n,value:n}}));j(e),e.length>0&&T(e[0].value)}x(!1)})).catch((e=>{x(!1),c((0,o.op)((0,m.K)(e.error)))}))}),[h,c]),(0,a.useEffect)((()=>{let e=!0;"expiry"!==I&&""===E&&(e=!1),P(e)}),[I,F,W,E]);const V=e=>{let{errString:t}=e;switch(t){case"":return(0,_.jsx)(i.kvh,{sx:{paddingTop:5,color:"#42C91A"},children:(0,_.jsx)(i.GSo,{})});case"n/a":return null;default:if(t)return(0,_.jsx)(i.kvh,{sx:{paddingTop:5,color:"#C72C48"},children:(0,_.jsx)(i.o5h,{tooltip:t,placement:"top",children:(0,_.jsx)(i.m9S,{})})})}return null};return(0,_.jsx)(S.c,{modalOpen:n,onClose:()=>{s(!1)},title:"Set Lifecycle to multiple buckets",children:(0,_.jsx)(i.CWP,{loadingStep:r||h,wizardSteps:[{label:"Lifecycle Configuration",componentRender:(0,_.jsx)(a.Fragment,{children:(0,_.jsxs)(i.yE_,{withBorders:!1,containerPadding:!1,children:[(0,_.jsx)(i.yeN,{item:!0,xs:12,children:(0,_.jsx)(i.E$k,{label:"Local Buckets to replicate",sx:{maxWidth:"440px",width:"100%"},children:l.join(", ")})}),(0,_.jsx)("h4",{children:"Remote Endpoint Configuration"}),(0,_.jsxs)("fieldset",{className:"inputItem",children:[(0,_.jsx)("legend",{children:"Lifecycle Configuration"}),(0,_.jsx)(i.ew2,{currentValue:I,id:"quota_type",name:"quota_type",label:"ILM Rule",onChange:e=>{M(e.target.value)},selectorOptions:[{value:"expiry",label:"Expiry"},{value:"transition",label:"Transition"}]}),"expiry"===I?(0,_.jsxs)(a.Fragment,{children:[(0,_.jsx)(i.q22,{type:"number",id:"expiry_days",name:"expiry_days",onChange:e=>{U(e.target.value)},label:"Expiry Days",value:F,min:"0"}),(0,_.jsx)(i.q22,{type:"number",id:"noncurrentversion_expiration_days",name:"noncurrentversion_expiration_days",onChange:e=>{L(e.target.value)},label:"Non-current Expiration Days",value:q,min:"0"})]}):(0,_.jsxs)(a.Fragment,{children:[(0,_.jsx)(i.q22,{type:"number",id:"transition_days",name:"transition_days",onChange:e=>{O(e.target.value)},label:"Transition Days",value:W,min:"0"}),(0,_.jsx)(i.q22,{type:"number",id:"noncurrentversion_transition_days",name:"noncurrentversion_transition_days",onChange:e=>{A(e.target.value)},label:"Non-current Transition Days",value:K,min:"0"}),(0,_.jsx)(i.q22,{id:"noncurrentversion_t_SC",name:"noncurrentversion_t_SC",onChange:e=>{w(e.target.value)},placeholder:"Set Non-current Version Transition Storage Class",label:"Non-current Version Transition Storage Class",value:B}),(0,_.jsx)(i.M1e,{label:"Storage Class",id:"storage_class",name:"storage_class",value:E,onChange:e=>{T(e)},options:p})]})]}),(0,_.jsxs)("fieldset",{className:"inputItem",children:[(0,_.jsx)("legend",{children:"File Configuration"}),(0,_.jsx)(i.q22,{id:"prefix",name:"prefix",onChange:e=>{v(e.target.value)},label:"Prefix",value:b}),(0,_.jsx)(C.c,{name:"tags",label:"Tags",elements:k,onChange:e=>{y(e)},keyPlaceholder:"Tag Key",valuePlaceholder:"Tag Value",withBorder:!0}),(0,_.jsx)(i.Wkk,{value:"expired_delete_marker",id:"expired_delete_marker",name:"expired_delete_marker",checked:N,onChange:e=>{R(e.target.checked)},label:"Expired Object Delete Marker"})]})]})}),buttons:[{type:"custom",label:"Create Rules",enabled:!h&&!r&&D,action:e=>{let t={};if("expiry"===I){t={...{expiry_days:parseInt(F)},noncurrentversion_expiration_days:parseInt(q)}}else{t={...{transition_days:parseInt(W)},noncurrentversion_transition_days:parseInt(K),noncurrentversion_transition_storage_class:B,storage_class:E}}const n={buckets:l,type:I,prefix:b,tags:k,expired_object_delete_marker:N,...t};g.m.buckets.addMultiBucketLifecycle(n).then((t=>{u(!1),G(t.data),e("++")})).catch((e=>{u(!1),c((0,o.op)((0,m.K)(e.error)))}))}}]},{label:"Results",componentRender:(0,_.jsxs)(a.Fragment,{children:[(0,_.jsx)("h3",{children:"Multi Bucket lifecycle Assignments Results"}),(0,_.jsx)(i.yeN,{container:!0,children:(0,_.jsxs)(i.yeN,{item:!0,xs:12,children:[(0,_.jsx)("h4",{children:"Buckets Results"}),null===z||void 0===z||null===(t=z.results)||void 0===t?void 0:t.map((e=>(0,_.jsxs)(i.kvh,{sx:{display:"grid",gridTemplateColumns:"45px auto",alignItems:"center",justifyContent:"stretch"},children:[V({errString:e.error||""}),(0,_.jsx)("span",{children:e.bucketName})]})))]})})]}),buttons:[{type:"custom",label:"Done",enabled:!r,action:()=>s(!0)}]}],forModal:!0})})};var T=n(36768),B=n(67659),w=n(40012),N=n(61060),R=n(34204);const q=B.cp.div((e=>{let{theme:t}=e;return{border:"".concat(f()(t,"borderColor","#eaeaea")," 1px solid"),borderRadius:3,padding:15,cursor:"pointer","&.disabled":{backgroundColor:f()(t,"signalColors.danger","red")},"&:hover":{backgroundColor:f()(t,"boxBackground","#FBFAFA")},"& .bucketTitle":{display:"flex",alignItems:"center",justifyContent:"flex-start",gap:10,"& h1":{padding:0,margin:0,marginBottom:5,fontSize:22,color:f()(t,"screenTitle.iconColor","#07193E"),["@media (max-width: ".concat(i.WQo.md,"px)")]:{marginBottom:0}}},"& .bucketDetails":{display:"flex",gap:40,"& span":{fontSize:14},["@media (max-width: ".concat(i.WQo.md,"px)")]:{flexFlow:"column-reverse",gap:5}},"& .bucketMetrics":{display:"flex",alignItems:"center",marginTop:20,gap:25,borderTop:"".concat(f()(t,"borderColor","#E2E2E2")," 1px solid"),paddingTop:20,"& svg.bucketIcon":{color:f()(t,"screenTitle.iconColor","#07193E"),fill:f()(t,"screenTitle.iconColor","#07193E")},"& .metric":{"& .min-icon":{color:f()(t,"fontColor","#000"),width:13,marginRight:5}},"& .metricLabel":{fontSize:14,fontWeight:"bold",color:f()(t,"fontColor","#000")},"& .metricText":{fontSize:24,fontWeight:"bold"},"& .unit":{fontSize:12,fontWeight:"normal"},["@media (max-width: ".concat(i.WQo.md,"px)")]:{marginTop:8,paddingTop:8}}}})),L=e=>{var t,n;let{bucket:l,onSelect:o,selected:d,bulkSelect:u}=e;const h=(0,s.i6)(),[x,g]=(0,a.useState)(!1),m=(0,N.U7)("".concat(l.size)||"0"),p=m.split(" ")[0],j=m.split(" ")[1],b=f()(l,"details.quota.quota","0"),v=(0,N.UH)(b,!0,!1),k=(0,c.i)(l.name,r.M1[r.m0.BUCKET_ADMIN])&&!1;return(0,_.jsxs)(q,{onClick:()=>{!x&&h("/buckets/".concat(l.name,"/admin"))},id:"manageBucket-".concat(l.name),className:"bucket-item ".concat(k?"disabled":""),children:[(0,_.jsxs)(i.kvh,{className:"bucketTitle",children:[u&&(0,_.jsx)(i.kvh,{onClick:e=>{e.stopPropagation()},children:(0,_.jsx)(i.ywS,{checked:d,id:"select-".concat(l.name),label:"",name:"select-".concat(l.name),onChange:e=>{o(e)},value:l.name})}),(0,_.jsxs)("h1",{children:[l.name," ",k]})]}),(0,_.jsxs)(i.kvh,{className:"bucketDetails",children:[(0,_.jsxs)("span",{id:"created-".concat(l.name),children:[(0,_.jsx)("strong",{children:"Created:"})," ",l.creation_date?new Date(l.creation_date).toString():"n/a"]}),(0,_.jsxs)("span",{id:"access-".concat(l.name),children:[(0,_.jsx)("strong",{children:"Access:"})," ",(e=>{var t,n,a,s,i,l;return null===(t=e.rw_access)||void 0===t||!t.read||null!==(n=e.rw_access)&&void 0!==n&&n.write?null!==(a=e.rw_access)&&void 0!==a&&a.read||null===(s=e.rw_access)||void 0===s||!s.write?null!==(i=e.rw_access)&&void 0!==i&&i.read&&null!==(l=e.rw_access)&&void 0!==l&&l.write?"R/W":"":"W":"R"})(l)]})]}),(0,_.jsxs)(i.kvh,{className:"bucketMetrics",children:[(0,_.jsx)(w.cH,{to:"/buckets/".concat(l.name,"/admin"),children:(0,_.jsx)(i.Gme,{className:"bucketIcon",style:{height:48,width:48}})}),(0,_.jsxs)(i.yeN,{item:!0,className:"metric",onMouseEnter:()=>{var e;return(null===(e=l.details)||void 0===e?void 0:e.versioning)&&g(!0)},onMouseLeave:()=>{var e;return(null===(e=l.details)||void 0===e?void 0:e.versioning)&&g(!1)},children:[(null===(t=l.details)||void 0===t?void 0:t.versioning)&&(0,_.jsxs)(i.M5Y,{content:R.A,placement:"top",children:[(0,_.jsx)(i.ot9,{})," "]}),!(null!==(n=l.details)&&void 0!==n&&n.versioning)&&(0,_.jsx)(i.ot9,{}),(0,_.jsx)("span",{className:"metricLabel",children:"Usage"}),(0,_.jsxs)("div",{className:"metricText",children:[p,(0,_.jsx)("span",{className:"unit",children:j}),"0"!==b&&(0,_.jsxs)(a.Fragment,{children:[" ","/ ",v.total,(0,_.jsx)("span",{className:"unit",children:v.unit})]})]})]}),(0,_.jsxs)(i.yeN,{item:!0,className:"metric",children:[(0,_.jsx)(i.SIH,{}),(0,_.jsx)("span",{className:"metricLabel",children:"Objects"}),(0,_.jsx)("div",{className:"metricText",children:l.objects?(0,N.qK)(l.objects):0})]})]})]})};var K=n(77152);const A=e=>{let{open:t,closeModalAndRefresh:n,buckets:s}=e;const l=(0,d.Ab)(),[c,r]=(0,a.useState)([]),[u,h]=(0,a.useState)(!1),[x,p]=(0,a.useState)(!1),[j,b]=(0,a.useState)(""),[v,k]=(0,a.useState)(""),[y,C]=(0,a.useState)(""),[E,T]=(0,a.useState)(""),[B,w]=(0,a.useState)(!0),[R,q]=(0,a.useState)("async"),[L,A]=(0,a.useState)("100"),[I,M]=(0,a.useState)("Gi"),[F,U]=(0,a.useState)("60"),[W,O]=(0,a.useState)([]),[D,P]=(0,a.useState)([]),[z,G]=(0,a.useState)([]),V=D.map((e=>({label:e,value:e})));(0,a.useEffect)((()=>{if(0===W.length){const e=[],t=[];s.forEach((n=>{e.push(n),t.push("")})),O(t),r(e)}}),[s,W.length]);const H=e=>{let{errString:t}=e;switch(t){case"":return(0,_.jsx)(i.kvh,{sx:{color:"#42C91A"},children:(0,_.jsx)(i.GSo,{})});case"n/a":return null;default:if(t)return(0,_.jsx)(i.kvh,{sx:{color:"#C72C48"},children:(0,_.jsx)(i.o5h,{tooltip:t,placement:"top",children:(0,_.jsx)(i.m9S,{})})})}return null},Q=(e,t)=>{const n=[...W];n[e]=t,O(n)},Y=e=>{let t=[...c],n=[...W];null===e||void 0===e||e.forEach((e=>{const a=f()(e,"errorString","");if(!a||""===a){const a=t.indexOf(e.originBucket||"");t.splice(a,1),n.splice(a,1)}})),r(t),O(n)};return(0,_.jsx)(S.c,{modalOpen:t,onClose:()=>{n(!1)},title:"Set Multiple Bucket Replication",children:(0,_.jsx)(i.CWP,{loadingStep:u||x,wizardSteps:[{label:"Remote Configuration",componentRender:(0,_.jsx)(a.Fragment,{children:(0,_.jsxs)(i.yE_,{containerPadding:!1,withBorders:!1,children:[(0,_.jsx)(i.E$k,{label:"Local Buckets to replicate",sx:{maxWidth:"440px",width:"100%"},children:c.join(", ")}),(0,_.jsx)("h4",{children:"Remote Endpoint Configuration"}),(0,_.jsxs)("span",{style:{fontSize:14},children:["Please avoid the use of root credentials for this feature",(0,_.jsx)("br",{}),(0,_.jsx)("br",{})]}),(0,_.jsx)(i.q22,{id:"accessKey",name:"accessKey",onChange:e=>{b(e.target.value)},label:"Access Key",value:j}),(0,_.jsx)(i.q22,{id:"secretKey",name:"secretKey",onChange:e=>{k(e.target.value)},label:"Secret Key",value:v}),(0,_.jsx)(i.q22,{id:"targetURL",name:"targetURL",onChange:e=>{C(e.target.value)},placeholder:"play.min.io:9000",label:"Target URL",value:y}),(0,_.jsx)(i.Wkk,{checked:B,id:"useTLS",name:"useTLS",label:"Use TLS",onChange:e=>{w(e.target.checked)},value:"yes"}),(0,_.jsx)(i.q22,{id:"region",name:"region",onChange:e=>{T(e.target.value)},label:"Region",value:E}),(0,_.jsx)(i.M1e,{id:"replication_mode",name:"replication_mode",onChange:e=>{q(e)},label:"Replication Mode",value:R,options:[{label:"Asynchronous",value:"async"},{label:"Synchronous",value:"sync"}]}),"async"===R&&(0,_.jsx)(i.q22,{type:"number",id:"bandwidth_scalar",name:"bandwidth_scalar",onChange:e=>{e.target.validity.valid&&A(e.target.value)},label:"Bandwidth",value:L,min:"0",pattern:"[0-9]*",overlayObject:(0,_.jsx)(K.c,{id:"quota_unit",onUnitChange:e=>{M(e)},unitSelected:I,unitsList:(0,N.SS)(["Ki"]),disabled:!1})}),(0,_.jsx)(i.q22,{id:"healthCheck",name:"healthCheck",onChange:e=>{U(e.target.value)},label:"Health Check Duration",value:F})]})}),buttons:[{type:"custom",label:"Next",enabled:!x,action:e=>{const t={accessKey:j,secretKey:v,targetURL:y,useTLS:B};p(!0),g.m.listExternalBuckets.listExternalBuckets(t).then((t=>{const n=f()(t.data,"buckets",[]);if(n&&n.length>0){const e=n.map((e=>e.name));P(e)}e("++"),p(!1)})).catch((e=>{p(!1),l((0,o.op)((0,m.K)(e.error)))}))}}]},{label:"Bucket Assignments",componentRender:(0,_.jsxs)(a.Fragment,{children:[(0,_.jsx)("h3",{children:"Remote Bucket Assignments"}),(0,_.jsx)("span",{style:{fontSize:14},children:"Please select / type the desired remote bucket were you want the local data to be replicated."}),(0,_.jsx)(i.kvh,{sx:{display:"grid",gridTemplateColumns:"auto auto 45px",alignItems:"center",justifyContent:"stretch","& .hide":{opacity:0,transitionDuration:"0.3s"}},children:c.map(((e,t)=>{const n=(e=>{if(z&&z.length>0){const t=z.find((t=>t.originBucket===e));if(t){return f()(t,"errorString","")||""}}return"n/a"})(e);return(0,_.jsxs)(a.Fragment,{children:[(0,_.jsx)("div",{className:""===n?"hide":"",children:e}),(0,_.jsx)("div",{className:""===n?"hide":"",children:(s=t,D.length>0?(0,_.jsx)(a.Fragment,{children:(0,_.jsx)(i.M1e,{label:"",id:"assign-bucket-".concat(s),name:"assign-bucket-".concat(s),value:W[s],onChange:e=>{Q(s,e)},options:V,disabled:u})}):(0,_.jsx)(a.Fragment,{children:(0,_.jsx)(i.q22,{id:"assign-bucket-".concat(s),name:"assign-bucket-".concat(s),label:"",onChange:e=>{Q(s,e.target.value)},value:W[s],disabled:u})}))}),(0,_.jsx)("div",{className:""===n?"hide":"",children:z&&z.length>0&&(0,_.jsx)(H,{errString:n})})]},"buckets-assignation-".concat(t.toString(),"-").concat(e));var s}))})]}),buttons:[{type:"back",label:"Back",enabled:!0},{type:"next",label:"Create",enabled:!u,action:()=>{h(!0);const e=c.map(((e,t)=>({originBucket:e,destinationBucket:W[t]}))),t="".concat(B?"https://":"http://").concat(y),a=parseInt(F),s={accessKey:j,secretKey:v,targetURL:t,region:E,bucketsRelation:e,syncMode:R,bandwidth:"async"===R?parseInt((0,N.qg)(L,I,!0)):0,healthCheckPeriod:a};g.m.bucketsReplication.setMultiBucketReplication(s).then((e=>{h(!1);const t=e.data.replicationState;G(t);const a=null===t||void 0===t?void 0:t.filter((e=>e.errorString&&""!==e.errorString));0===(null===a||void 0===a?void 0:a.length)?n(!0):setTimeout((()=>{Y(t)}),500)})).catch((e=>{h(!1),l((0,o.op)((0,m.K)(e.error)))}))}}]}],forModal:!0})})},I=()=>{const e=(0,d.Ab)(),t=(0,s.i6)(),[n,y]=(0,a.useState)([]),[f,S]=(0,a.useState)(!0),[C,B]=(0,a.useState)(""),[w,N]=(0,a.useState)([]),[R,q]=(0,a.useState)(!1),[K,I]=(0,a.useState)(!1),[M,F]=(0,a.useState)(!1),[U,W]=(0,a.useState)(!1),O=(0,u.w1)(h.qS),D=!(null===O||void 0===O||!O.includes("object-browser-only"));(0,a.useEffect)((()=>{e((0,o.i8)("ob_bucket_list"))}),[e]),(0,a.useEffect)((()=>{if(f){(()=>{S(!0),g.m.buckets.listBuckets().then((t=>{t.data?(S(!1),y(t.data.buckets||[])):t.error&&(S(!1),e((0,o.aW)((0,m.K)(t.error))))}))})()}}),[f,e]);const P=n.filter((e=>""===C||e.name.indexOf(C)>=0)),z=n.length>0,G=e=>{const t=e.target,n=t.value,a=t.checked;let s=[...w];return a?s.push(n):s=s.filter((e=>e!==n)),N(s),s};(0,a.useEffect)((()=>{var e=!1;w.forEach((t=>{(0,T.c)(t,r.M1[r.m0.BUCKET_LIFECYCLE],!0)?F(!0):e=!0})),F(!e)}),[w]);const V=(0,T.c)("*",[r.Oi.S3_CREATE_BUCKET]),H=(0,T.c)("*",[r.Oi.S3_LIST_BUCKET,r.Oi.S3_ALL_LIST_BUCKET]);return(0,_.jsxs)(a.Fragment,{children:[R&&(0,_.jsx)(A,{open:R,buckets:w,closeModalAndRefresh:e=>{q(!1),e&&N([])}}),K&&(0,_.jsx)(E,{buckets:w,closeModalAndRefresh:e=>{I(!1),e&&N([])},open:K}),!D&&(0,_.jsx)(x.c,{label:"Buckets",actions:(0,_.jsx)(p.c,{})}),(0,_.jsxs)(i._al,{children:[(0,_.jsxs)(i.yeN,{item:!0,xs:12,sx:l.GR.actionsTray,children:[D&&(0,_.jsx)(i.yeN,{item:!0,xs:!0,children:(0,_.jsx)(j.c,{marginRight:15,marginTop:10})}),z&&(0,_.jsx)(v.c,{onChange:B,placeholder:"Search Buckets",value:C,sx:{minWidth:380,["@media (max-width: ".concat(i.WQo.md,"px)")]:{minWidth:220}}}),(0,_.jsxs)(i.yeN,{item:!0,xs:12,sx:{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:5},children:[!D&&(0,_.jsxs)(a.Fragment,{children:[(0,_.jsx)(b.c,{tooltip:z?U?"Unselect Buckets":"Select Multiple Buckets":"",children:(0,_.jsx)(i.qaq,{id:"multiple-bucket-seection",onClick:()=>{W(!U),N([])},icon:(0,_.jsx)(i.imr,{}),variant:U?"callAction":"regular",disabled:!z})}),U&&(0,_.jsx)(b.c,{tooltip:z?w.length===P.length?"Unselect All Buckets":"Select All Buckets":"",children:(0,_.jsx)(i.qaq,{id:"select-all-buckets",onClick:()=>{if(w.length===P.length)return void N([]);const e=P.map((e=>e.name));N(e)},icon:(0,_.jsx)(i.srF,{}),variant:"regular"})}),(0,_.jsx)(b.c,{tooltip:z?M?0===w.length?U?"Please select at least one bucket on which to configure Lifecycle":"Use the Select Multiple Buckets button to choose buckets on which to configure Lifecycle":"Set Lifecycle":(0,r.q4)(r.M1[r.m0.BUCKET_LIFECYCLE],"configure lifecycle for the selected buckets"):"",children:(0,_.jsx)(i.qaq,{id:"set-lifecycle",onClick:()=>{I(!0)},icon:(0,_.jsx)(i.KOK,{}),variant:"regular",disabled:0===w.length||!M})}),(0,_.jsx)(b.c,{tooltip:z?0===w.length?U?"Please select at least one bucket on which to configure Replication":"Use the Select Multiple Buckets button to choose buckets on which to configure Replication":"Set Replication":"",children:(0,_.jsx)(i.qaq,{id:"set-replication",onClick:()=>{q(!0)},icon:(0,_.jsx)(i.Mx0,{}),variant:"regular",disabled:0===w.length})})]}),(0,_.jsx)(b.c,{tooltip:"Refresh",children:(0,_.jsx)(i.qaq,{id:"refresh-buckets",onClick:()=>{S(!0)},icon:(0,_.jsx)(i.W5k,{}),variant:"regular"})}),!D&&(0,_.jsx)(b.c,{tooltip:V?"":(0,r.q4)([r.Oi.S3_CREATE_BUCKET],"create a bucket"),children:(0,_.jsx)(i.qaq,{id:"create-bucket",onClick:()=>{t(r.Ks.ADD_BUCKETS)},icon:(0,_.jsx)(i.EgV,{}),variant:"callAction",disabled:!V,label:"Create Bucket"})})]})]}),f&&(0,_.jsx)(i.cHM,{}),!f&&(0,_.jsxs)(i.yeN,{item:!0,xs:12,sx:{marginTop:25,height:"calc(100vh - 211px)","&.isEmbedded":{height:"calc(100vh - 128px)"}},className:D?"isEmbedded":"",children:[0!==P.length&&(0,_.jsx)(k.c,{rowRenderFunction:e=>{const t=P[e]||null;return t?(0,_.jsx)(L,{bucket:t,onSelect:G,selected:w.includes(t.name),bulkSelect:U}):null},totalItems:P.length}),0===P.length&&""!==C&&(0,_.jsx)(i.yeN,{container:!0,children:(0,_.jsx)(i.yeN,{item:!0,xs:8,children:(0,_.jsx)(i.g1k,{iconComponent:(0,_.jsx)(i.Gme,{}),title:"No Results",help:(0,_.jsx)(a.Fragment,{children:"No buckets match the filtering condition"})})})}),!z&&(0,_.jsx)(i.yeN,{container:!0,children:(0,_.jsx)(i.yeN,{item:!0,xs:8,children:(0,_.jsx)(i.g1k,{iconComponent:(0,_.jsx)(i.Gme,{}),title:"Buckets",help:(0,_.jsxs)(a.Fragment,{children:["MinIO uses buckets to organize objects. A bucket is similar to a folder or directory in a filesystem, where each bucket can hold an arbitrary number of objects.",(0,_.jsx)("br",{}),H?"":(0,_.jsxs)(a.Fragment,{children:[(0,_.jsx)("br",{}),(0,r.q4)([r.Oi.S3_LIST_BUCKET,r.Oi.S3_ALL_LIST_BUCKET],"view the buckets on this server"),(0,_.jsx)("br",{})]}),(0,_.jsxs)(c.K,{scopes:[r.Oi.S3_CREATE_BUCKET],resource:r.Gc,children:[(0,_.jsx)("br",{}),"To get started,\xa0",(0,_.jsx)(i.GYA,{onClick:()=>{t(r.Ks.ADD_BUCKETS)},children:"Create a Bucket."})]})]})})})})]})]})]})}},77152:(e,t,n)=>{n.d(t,{c:()=>d});var a=n(69060),s=n(66152),i=n(67659),l=n(58564),c=n.n(l),r=n(82496);const o=i.cp.button((e=>{let{theme:t}=e;return{border:"1px solid ".concat(c()(t,"borderColor","#E2E2E2")),borderRadius:3,color:c()(t,"secondaryText","#5B5C5C"),backgroundColor:c()(t,"boxBackground","#FBFAFA"),fontSize:12}})),d=e=>{let{id:t,unitSelected:n,unitsList:i,disabled:l=!1,onUnitChange:c}=e;const[d,u]=a.useState(null),h=Boolean(d),x=e=>{u(null),""!==e&&c&&c(e)};return(0,r.jsxs)(a.Fragment,{children:[(0,r.jsx)(o,{id:"".concat(t,"-button"),"aria-controls":"".concat(t,"-menu"),"aria-haspopup":"true","aria-expanded":h?"true":void 0,onClick:e=>{u(e.currentTarget)},disabled:l,type:"button",children:n}),(0,r.jsx)(s.KQH,{id:"upload-main-menu",options:i,selectedOption:"",onSelect:e=>x(e),hideTriggerAction:()=>{x("")},open:h,anchorEl:d,anchorOrigin:"end"})]})}},14632:(e,t,n)=>{n.d(t,{c:()=>d});var a=n(69060),s=n(58564),i=n.n(s),l=n(24888),c=n.n(l),r=n(66152),o=n(82496);const d=e=>{let{elements:t,name:n,label:s,tooltip:l="",keyPlaceholder:d="",valuePlaceholder:u="",onChange:h,withBorder:x=!1}=e;const[g,m]=(0,a.useState)([""]),[p,j]=(0,a.useState)([""]),b=(0,a.createRef)();(0,a.useEffect)((()=>{if(1===g.length&&""===g[0]&&1===p.length&&""===p[0]&&t&&""!==t){const e=t.split("&");let n=[],a=[];e.forEach((e=>{const t=e.split("=");2===t.length&&(n.push(t[0]),a.push(t[1]))})),n.push(""),a.push(""),m(n),j(a)}}),[g,p,t]),(0,a.useEffect)((()=>{const e=b.current;e&&g.length>1&&e.scrollIntoView(!1)}),[g]);const v=(0,a.useRef)(!0);(0,a.useLayoutEffect)((()=>{v.current?v.current=!1:f()}),[g,p]);const k=e=>{e.persist();let t=[...g];const n=i()(e.target,"dataset.index","0");t[parseInt(n)]=e.target.value,m(t)},y=e=>{e.persist();let t=[...p];const n=i()(e.target,"dataset.index","0");t[parseInt(n)]=e.target.value,j(t)},f=c()((()=>{let e="";g.forEach(((t,n)=>{if(g[n]&&p[n]){let a="".concat(t,"=").concat(p[n]);0!==n&&(a="&".concat(a)),e="".concat(e).concat(a)}})),h(e)}),500),S=p.map(((e,t)=>(0,o.jsxs)(r.yeN,{item:!0,xs:12,className:"lineInputBoxes inputItem",children:[(0,o.jsx)(r.q22,{id:"".concat(n,"-key-").concat(t.toString()),label:"",name:"".concat(n,"-").concat(t.toString()),value:g[t],onChange:k,index:t,placeholder:d}),(0,o.jsx)("span",{className:"queryDiv",children:":"}),(0,o.jsx)(r.q22,{id:"".concat(n,"-value-").concat(t.toString()),label:"",name:"".concat(n,"-").concat(t.toString()),value:p[t],onChange:y,index:t,placeholder:u,overlayIcon:t===p.length-1?(0,o.jsx)(r.EgV,{}):null,overlayAction:()=>{(()=>{if(""!==g[g.length-1].trim()&&""!==p[p.length-1].trim()){const e=[...g],t=[...p];e.push(""),t.push(""),m(e),j(t)}})()}})]},"query-pair-".concat(n,"-").concat(t.toString()))));return(0,o.jsx)(a.Fragment,{children:(0,o.jsxs)(r.yeN,{item:!0,xs:12,sx:{"& .lineInputBoxes":{display:"flex"},"& .queryDiv":{alignSelf:"center",margin:"-15px 4px 0",fontWeight:600}},className:"inputItem",children:[(0,o.jsxs)(r.mWW,{children:[s,""!==l&&(0,o.jsx)(r.kvh,{sx:{marginLeft:5,display:"flex",alignItems:"center","& .min-icon":{width:13}},children:(0,o.jsx)(r.o5h,{tooltip:l,placement:"top",children:(0,o.jsx)(r.OKz,{style:{width:13,height:13}})})})]}),(0,o.jsxs)(r.kvh,{withBorders:x,sx:{padding:15,height:150,overflowY:"auto",position:"relative",marginTop:15},children:[S,(0,o.jsx)("div",{ref:b})]})]})})}}}]);
//# sourceMappingURL=6596.3e0af576.chunk.js.map