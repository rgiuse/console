"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[9635],{75578:function(e,n,t){var r=t(1413),i=t(72791),o=t(80184);n.Z=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return function(t){return(0,o.jsx)(i.Suspense,{fallback:n,children:(0,o.jsx)(e,(0,r.Z)({},t))})}}},47986:function(e,n,t){var r=t(4942),i=(t(72791),t(29945)),o=t(80184);n.Z=function(e){var n=e.iconComponent,t=e.entity;return(0,o.jsx)(i.rjZ,{container:!0,children:(0,o.jsx)(i.rjZ,{item:!0,xs:12,children:(0,o.jsx)(i.KfX,{title:"".concat(t," not available"),iconComponent:n,help:(0,o.jsxs)(i.xuv,{sx:(0,r.Z)({fontSize:"14px"},"@media (max-width: ".concat(i.Egj.sm,"px)"),{display:"flex",flexFlow:"column"}),children:[(0,o.jsx)("span",{children:"This feature is not available for a single-disk setup.\xa0"}),(0,o.jsxs)("span",{children:["Please deploy a server in"," ",(0,o.jsx)("a",{href:"https://min.io/docs/minio/linux/operations/install-deploy-manage/deploy-minio-multi-node-multi-drive.html?ref=con",target:"_blank",rel:"noopener",children:"Distributed Mode"})," ","to use this feature."]})]})})})})}},89635:function(e,n,t){t.r(n);var r=t(29439),i=t(72791),o=t(26181),s=t.n(o),l=t(78687),a=t(57689),c=t(29945),u=t(31776),d=t(82342),x=t(23814),j=t(56087),f=t(38442),m=t(34345),p=t(87995),h=t(44690),g=t(59114),y=t(75578),b=t(47986),v=t(27454),F=t(47974),T=t(99670),C=t(80184),I=(0,y.Z)(i.lazy((function(){return t.e(4414).then(t.bind(t,34414))})));n.default=function(){var e=(0,h.TL)(),n=(0,a.s0)(),t=(0,l.v9)(p.N5),o=(0,i.useState)([]),y=(0,r.Z)(o,2),O=y[0],Z=y[1],S=(0,i.useState)(""),k=(0,r.Z)(S,2),w=k[0],E=k[1],N=(0,i.useState)(!0),K=(0,r.Z)(N,2),M=K[0],_=K[1],A=(0,i.useState)(!1),D=(0,r.Z)(A,2),L=D[0],R=D[1],X=(0,i.useState)({type:"unsupported",status:!1}),z=(0,r.Z)(X,2),B=z[0],P=z[1],Y=(0,f.F)(j.C3,[j.Ft.ADMIN_SET_TIER]);(0,i.useEffect)((function(){if(M)if(t){u.h.admin.tiersList().then((function(e){Z(e.data.items||[]),_(!1)})).catch((function(n){e((0,p.Ih)((0,d.g)(n.error))),_(!1)}))}else _(!1)}),[M,e,t]);var W=O.filter((function(e){if(""===w)return!0;var n=s()(e,"".concat(e.type,".name"),""),t=s()(e,"type","");return n.indexOf(w)>=0||t.indexOf(w)>=0})),q=function(){n(j.gA.TIERS_ADD)};return(0,i.useEffect)((function(){e((0,p.Sc)("list-tiers-configuration"))}),[]),(0,C.jsxs)(i.Fragment,{children:[L&&(0,C.jsx)(I,{open:L,tierData:B,closeModalAndRefresh:function(){R(!1)}}),(0,C.jsx)(F.Z,{label:"Tiers",actions:(0,C.jsx)(T.Z,{})}),(0,C.jsx)(c.Xgh,{children:t?(0,C.jsxs)(i.Fragment,{children:[(0,C.jsxs)(c.rjZ,{item:!0,xs:12,sx:x.OR.actionsTray,children:[(0,C.jsx)(g.Z,{placeholder:"Filter",onChange:E,value:w,sx:{marginRight:"auto",maxWidth:380}}),(0,C.jsxs)(c.xuv,{sx:{display:"flex",flexWrap:"nowrap",gap:5},children:[(0,C.jsx)(c.zxk,{id:"refresh-list",icon:(0,C.jsx)(c.DuK,{}),label:"Refresh List",onClick:function(){_(!0)}}),(0,C.jsx)(v.Z,{tooltip:Y?"":"You require additional permissions in order to create a new Tier. Please ask your MinIO administrator to grant you "+j.Ft.ADMIN_SET_TIER+" permission in order to create a Tier.",children:(0,C.jsx)(f.s,{scopes:[j.Ft.ADMIN_SET_TIER],resource:j.C3,errorProps:{disabled:!0},children:(0,C.jsx)(c.zxk,{id:"add-tier",icon:(0,C.jsx)(c.dtP,{}),label:"Create Tier",onClick:q,variant:"callAction"})})})]})]}),M&&(0,C.jsx)(c.kod,{}),!M&&(0,C.jsxs)(i.Fragment,{children:[O.length>0&&(0,C.jsxs)(i.Fragment,{children:[(0,C.jsx)(c.rjZ,{item:!0,xs:12,children:(0,C.jsx)(f.s,{scopes:[j.Ft.ADMIN_LIST_TIERS],resource:j.C3,errorProps:{disabled:!0},children:(0,C.jsx)(c.wQF,{itemActions:[{type:"edit",onClick:function(e){P(e),R(!0)}}],columns:[{label:"Tier Name",elementKey:"type",renderFunction:function(e){var n=s()(e,"".concat(e.type,".name"),"");return null!==n?(0,C.jsx)("b",{children:n}):""},renderFullObject:!0},{label:"Status",elementKey:"status",renderFunction:function(e){return e?(0,C.jsxs)(c.rjZ,{container:!0,sx:{display:"flex",alignItems:"center",justifyItems:"start",color:"#4CCB92",fontSize:"8px",flexDirection:"column"},children:[(0,C.jsx)(c.Yp9,{style:{fill:"#4CCB92",width:14,height:14}}),"ONLINE"]}):(0,C.jsxs)(c.rjZ,{container:!0,sx:{display:"flex",flexDirection:"column",alignItems:"center",color:"#C83B51",fontSize:"8px"},children:[(0,C.jsx)(c.qwj,{style:{fill:"#C83B51",width:14,height:14}}),"OFFLINE"]})},width:50},{label:"Type",elementKey:"type",renderFunction:function(e){var n=(m.Bh.find((function(n){return n.serviceName===e}))||{}).logoXs;return e?(0,C.jsx)(c.xuv,{sx:{display:"flex",alignItems:"center","& .min-icon":{width:"18px",height:"22px"}},children:n}):""},width:50},{label:"Endpoint",elementKey:"type",renderFunction:function(e){var n=s()(e,"".concat(e.type,".endpoint"),"");return null!==n?n:""},renderFullObject:!0},{label:"Bucket",elementKey:"type",renderFunction:function(e){var n=s()(e,"".concat(e.type,".bucket"),"");return null!==n?n:""},renderFullObject:!0},{label:"Prefix",elementKey:"type",renderFunction:function(e){var n=s()(e,"".concat(e.type,".prefix"),"");return null!==n?n:""},renderFullObject:!0},{label:"Region",elementKey:"type",renderFunction:function(e){var n=s()(e,"".concat(e.type,".region"),"");return null!==n?n:""},renderFullObject:!0},{label:"Usage",elementKey:"type",renderFunction:function(e){var n=s()(e,"".concat(e.type,".usage"),"");return null!==n?n:""},renderFullObject:!0},{label:"Objects",elementKey:"type",renderFunction:function(e){var n=s()(e,"".concat(e.type,".objects"),"");return null!==n?n:""},renderFullObject:!0},{label:"Versions",elementKey:"type",renderFunction:function(e){var n=s()(e,"".concat(e.type,".versions"),"");return null!==n?n:""},renderFullObject:!0}],isLoading:M,records:W,entityName:"Tiers",idField:"service_name",customPaperHeight:"400px"})})}),(0,C.jsx)(c.rjZ,{item:!0,xs:12,sx:{marginTop:"15px"},children:(0,C.jsx)(c.KfX,{title:"Learn more about TIERS",iconComponent:(0,C.jsx)(c.y2Y,{}),help:(0,C.jsxs)(i.Fragment,{children:["Tiers are used by the MinIO Object Lifecycle Management which allows creating rules for time or date based automatic transition or expiry of objects. For object transition, MinIO automatically moves the object to a configured remote storage tier.",(0,C.jsx)("br",{}),(0,C.jsx)("br",{}),"You can learn more at our"," ",(0,C.jsx)("a",{href:"https://min.io/docs/minio/linux/administration/object-management/object-lifecycle-management.html?ref=con",target:"_blank",rel:"noopener",children:"documentation"}),"."]})})})]}),0===O.length&&(0,C.jsx)(c.KfX,{title:"Tiers",iconComponent:(0,C.jsx)(c.y2Y,{}),help:(0,C.jsxs)(i.Fragment,{children:["Tiers are used by the MinIO Object Lifecycle Management which allows creating rules for time or date based automatic transition or expiry of objects. For object transition, MinIO automatically moves the object to a configured remote storage tier.",(0,C.jsx)("br",{}),(0,C.jsx)("br",{}),Y?(0,C.jsxs)("div",{children:["To get started,"," ",(0,C.jsx)(c.vmT,{isLoading:!1,label:"",onClick:q,children:"Create Tier"}),"."]}):""]})})]})]}):(0,C.jsx)(b.Z,{entity:"Tiers",iconComponent:(0,C.jsx)(c.gXu,{})})})]})}},34345:function(e,n,t){t.d(n,{Bh:function(){return c},Pp:function(){return o},b2:function(){return l},f0:function(){return s},vB:function(){return a}});var r=t(29945),i=t(80184),o="minio",s="gcs",l="s3",a="azure",c=[{serviceName:o,targetTitle:"MinIO",logo:(0,i.jsx)(r.$E9,{}),logoXs:(0,i.jsx)(r.YEz,{})},{serviceName:s,targetTitle:"Google Cloud Storage",logo:(0,i.jsx)(r.UQG,{}),logoXs:(0,i.jsx)(r.Vwu,{})},{serviceName:l,targetTitle:"AWS S3",logo:(0,i.jsx)(r.feu,{}),logoXs:(0,i.jsx)(r.Xj3,{})},{serviceName:a,targetTitle:"Azure",logo:(0,i.jsx)(r.jze,{}),logoXs:(0,i.jsx)(r.nAe,{})}]}}]);
//# sourceMappingURL=9635.495d0211.chunk.js.map