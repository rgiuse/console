"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[8350],{9505:function(e,n,t){var a=t(29439),l=t(72791),r=t(81207);n.Z=function(e,n){var t=(0,l.useState)(!1),i=(0,a.Z)(t,2),o=i[0],s=i[1];return[o,function(t,a,l){s(!0),r.Z.invoke(t,a,l).then((function(n){s(!1),e(n)})).catch((function(e){s(!1),n(e)}))}]}},16502:function(e,n,t){t(72791);var a=t(11135),l=t(25787),r=t(80184);n.Z=(0,l.Z)((function(e){return(0,a.Z)({headerContainer:{backgroundColor:"#e78794",borderRadius:3,marginBottom:20,padding:1,paddingBottom:15},labelHeadline:{color:"#000000",fontSize:14,marginLeft:20},labelText:{color:"#000000",fontSize:14,marginLeft:20,marginRight:40}})}))((function(e){var n=e.classes,t=e.label,a=e.title;return(0,r.jsxs)("div",{className:n.headerContainer,children:[(0,r.jsx)("h4",{className:n.labelHeadline,children:a}),(0,r.jsx)("div",{className:n.labelText,children:t})]})}))},78350:function(e,n,t){t.r(n);var a=t(29439),l=t(72791),r=t(51691),i=t(60364),o=t(42649),s=t(21435),c=t(61889),u=t(9505),d=t(2148),m=t(93656),f=t(16502),h=t(37516),p=t(80184),x=(0,i.$j)(null,{setErrorSnackMessage:o.Ih});n.default=x((function(e){var n=e.deleteOpen,t=e.selectedTenant,i=e.closeDeleteModalAndRefresh,o=e.setErrorSnackMessage,x=(0,l.useState)(""),b=(0,a.Z)(x,2),v=b[0],Z=b[1],g=(0,l.useState)(!1),j=(0,a.Z)(g,2),C=j[0],k=j[1],T=(0,u.Z)((function(){return i(!0)}),(function(e){return o(e)})),D=(0,a.Z)(T,2),S=D[0],E=D[1];return(0,p.jsx)(d.Z,{title:"Delete Tenant",confirmText:"Delete",isOpen:n,titleIcon:(0,p.jsx)(m.Nv,{}),isLoading:S,onConfirm:function(){v===t.name?E("DELETE","/api/v1/namespaces/".concat(t.namespace,"/tenants/").concat(t.name),{delete_pvcs:C}):o({errorMessage:"Tenant name is incorrect",detailedError:""})},onClose:function(){return i(!1)},confirmButtonProps:{disabled:v!==t.name||S},confirmationContent:(0,p.jsxs)(r.Z,{children:[C&&(0,p.jsx)(c.ZP,{item:!0,xs:12,children:(0,p.jsx)(f.Z,{title:"WARNING",label:"Delete Volumes: Data will be permanently deleted. Please proceed with caution."})}),"To continue please type ",(0,p.jsx)("b",{children:t.name})," in the box.",(0,p.jsxs)(c.ZP,{item:!0,xs:12,children:[(0,p.jsx)(s.Z,{id:"retype-tenant",name:"retype-tenant",onChange:function(e){Z(e.target.value)},label:"",value:v}),(0,p.jsx)("br",{}),(0,p.jsx)(h.Z,{checked:C,id:"delete-volumes",label:"Delete Volumes",name:"delete-volumes",onChange:function(){k(!C)},value:C})]})]})})}))}}]);
//# sourceMappingURL=8350.feed1db5.chunk.js.map