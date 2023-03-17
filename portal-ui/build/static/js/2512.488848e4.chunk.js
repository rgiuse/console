"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[2512,3819],{32512:function(e,t,n){n.r(t),n.d(t,{default:function(){return A}});var a=n(93433),i=n(29439),o=n(1413),r=n(72791),c=n(78687),l=n(75952),s=n(11135),d=n(25787),u=n(61889),h=n(23814),p=n(38442),m=n(56087),x=n(81207),f=n(92983),v=n(60680),Z=n(75578),g=n(56028),b=n(21435),j=n(17420),S=n(64163),k=n(81159),C=n(87995),y=n(81551),N=n(80184),w=(0,d.Z)((function(e){return(0,s.Z)((0,o.Z)((0,o.Z)((0,o.Z)((0,o.Z)((0,o.Z)({},h.bK),h.QV),h.DF),h.ID),{},{modalFormScrollable:(0,o.Z)((0,o.Z)({},h.ID.modalFormScrollable),{},{paddingRight:10})}))}))((function(e){var t=e.closeModalAndRefresh,n=e.open,a=e.classes,o=e.bucketName,c=e.ruleID,s=(0,y.TL)(),d=(0,r.useState)(!0),h=(0,i.Z)(d,2),p=h[0],m=h[1],f=(0,r.useState)(!1),v=(0,i.Z)(f,2),Z=v[0],w=v[1],R=(0,r.useState)("1"),P=(0,i.Z)(R,2),F=P[0],I=P[1],T=(0,r.useState)(""),A=(0,i.Z)(T,2),O=A[0],E=A[1],z=(0,r.useState)(""),_=(0,i.Z)(z,2),D=_[0],M=_[1],L=(0,r.useState)(!1),B=(0,i.Z)(L,2),U=B[0],G=B[1],K=(0,r.useState)(!1),H=(0,i.Z)(K,2),W=H[0],q=H[1],V=(0,r.useState)(""),Y=(0,i.Z)(V,2),X=Y[0],$=Y[1],Q=(0,r.useState)(""),J=(0,i.Z)(Q,2),ee=J[0],te=J[1],ne=(0,r.useState)(""),ae=(0,i.Z)(ne,2),ie=ae[0],oe=ae[1],re=(0,r.useState)(!1),ce=(0,i.Z)(re,2),le=ce[0],se=ce[1],de=(0,r.useState)(!1),ue=(0,i.Z)(de,2),he=ue[0],pe=ue[1],me=(0,r.useState)(!1),xe=(0,i.Z)(me,2),fe=xe[0],ve=xe[1];return(0,r.useEffect)((function(){p&&x.Z.invoke("GET","/api/v1/buckets/".concat(o,"/replication/").concat(c)).then((function(e){I(e.priority.toString());var t=e.prefix||"",n=e.tags||"";M(t),$(n),te(n),E(e.destination.bucket),G(e.delete_marker_replication),oe(e.storageClass||""),se(!!e.existingObjects),pe(!!e.deletes_replication),ve("Enabled"===e.status),q(!!e.metadata_replication),m(!1)})).catch((function(e){s((0,C.zb)(e)),m(!1)}))}),[p,s,o,c]),(0,r.useEffect)((function(){if(Z){var e={arn:O,ruleState:fe,prefix:D,tags:ee,replicateDeleteMarkers:U,replicateDeletes:he,replicateExistingObjects:le,replicateMetadata:W,priority:parseInt(F),storageClass:ie};x.Z.invoke("PUT","/api/v1/buckets/".concat(o,"/replication/").concat(c),e).then((function(){w(!1),t(!0)})).catch((function(e){s((0,C.zb)(e)),w(!1)}))}}),[Z,o,c,O,D,ee,U,F,he,le,fe,W,ie,t,s]),(0,N.jsx)(g.Z,{modalOpen:n,onClose:function(){t(!1)},title:"Edit Bucket Replication",titleIcon:(0,N.jsx)(l.xRg,{}),children:(0,N.jsx)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),w(!0)},children:(0,N.jsxs)(u.ZP,{container:!0,children:[(0,N.jsxs)(u.ZP,{item:!0,xs:12,className:a.modalFormScrollable,children:[(0,N.jsx)(u.ZP,{item:!0,xs:12,className:a.formFieldRow,children:(0,N.jsx)(k.Z,{checked:fe,id:"ruleState",name:"ruleState",label:"Rule State",onChange:function(e){ve(e.target.checked)},value:fe})}),(0,N.jsx)(u.ZP,{item:!0,xs:12,className:a.formFieldRow,children:(0,N.jsx)(S.Z,{label:"Destination",content:O})}),(0,N.jsx)(u.ZP,{item:!0,xs:12,className:a.formFieldRow,children:(0,N.jsx)(b.Z,{id:"priority",name:"priority",onChange:function(e){e.target.validity.valid&&I(e.target.value)},label:"Priority",value:F,pattern:"[0-9]*"})}),(0,N.jsx)(u.ZP,{item:!0,xs:12,className:"".concat(a.spacerTop," ").concat(a.formFieldRow),children:(0,N.jsx)(b.Z,{id:"storageClass",name:"storageClass",onChange:function(e){oe(e.target.value)},placeholder:"STANDARD_IA,REDUCED_REDUNDANCY etc",label:"Storage Class",value:ie})}),(0,N.jsx)(u.ZP,{item:!0,xs:12,children:(0,N.jsxs)("fieldset",{className:a.fieldGroup,children:[(0,N.jsx)("legend",{className:a.descriptionText,children:"Object Filters"}),(0,N.jsx)(u.ZP,{item:!0,xs:12,className:a.formFieldRow,children:(0,N.jsx)(b.Z,{id:"prefix",name:"prefix",onChange:function(e){M(e.target.value)},placeholder:"prefix",label:"Prefix",value:D})}),(0,N.jsx)(u.ZP,{item:!0,xs:12,className:a.formFieldRow,children:(0,N.jsx)(j.Z,{name:"tags",label:"Tags",elements:X,onChange:function(e){te(e)},keyPlaceholder:"Tag Key",valuePlaceholder:"Tag Value",withBorder:!0})})]})}),(0,N.jsx)(u.ZP,{item:!0,xs:12,children:(0,N.jsxs)("fieldset",{className:a.fieldGroup,children:[(0,N.jsx)("legend",{className:a.descriptionText,children:"Replication Options"}),(0,N.jsx)(u.ZP,{item:!0,xs:12,className:a.formFieldRow,children:(0,N.jsx)(k.Z,{checked:le,id:"repExisting",name:"repExisting",label:"Existing Objects",onChange:function(e){se(e.target.checked)},value:le,description:"Replicate existing objects"})}),(0,N.jsx)(k.Z,{checked:W,id:"metadatataSync",name:"metadatataSync",label:"Metadata Sync",onChange:function(e){q(e.target.checked)},value:W,description:"Metadata Sync"}),(0,N.jsx)(u.ZP,{item:!0,xs:12,className:a.formFieldRow,children:(0,N.jsx)(k.Z,{checked:U,id:"deleteMarker",name:"deleteMarker",label:"Delete Marker",onChange:function(e){G(e.target.checked)},value:U,description:"Replicate soft deletes"})}),(0,N.jsx)(u.ZP,{item:!0,xs:12,className:a.formFieldRow,children:(0,N.jsx)(k.Z,{checked:he,id:"repDelete",name:"repDelete",label:"Deletes",onChange:function(e){pe(e.target.checked)},value:he,description:"Replicate versioned deletes"})})]})})]}),(0,N.jsxs)(u.ZP,{item:!0,xs:12,className:a.modalButtonBar,children:[(0,N.jsx)(l.zxk,{id:"cancel-edit-replication",type:"button",variant:"regular",disabled:p||Z,onClick:function(){t(!1)},label:"Cancel"}),(0,N.jsx)(l.zxk,{id:"save-replication",type:"submit",variant:"callAction",disabled:p||Z,label:"Save"})]})]})})})})),R=n(9859),P=n(57689),F=n(27454),I=(0,Z.Z)(r.lazy((function(){return n.e(889).then(n.bind(n,20889))}))),T=(0,Z.Z)(r.lazy((function(){return n.e(9088).then(n.bind(n,69088))}))),A=(0,d.Z)((function(e){return(0,s.Z)((0,o.Z)((0,o.Z)((0,o.Z)({},h.qg),h.OR),{},{twHeight:{minHeight:400}}))}))((function(e){var t=e.classes,n=(0,y.TL)(),o=(0,P.UO)(),s=(0,c.v9)(R.HQ),d=(0,r.useState)(!0),h=(0,i.Z)(d,2),Z=h[0],g=h[1],b=(0,r.useState)([]),j=(0,i.Z)(b,2),S=j[0],k=j[1],A=(0,r.useState)(!1),O=(0,i.Z)(A,2),E=O[0],z=O[1],_=(0,r.useState)(!1),D=(0,i.Z)(_,2),M=D[0],L=D[1],B=(0,r.useState)(!1),U=(0,i.Z)(B,2),G=U[0],K=U[1],H=(0,r.useState)(""),W=(0,i.Z)(H,2),q=W[0],V=W[1],Y=(0,r.useState)([]),X=(0,i.Z)(Y,2),$=X[0],Q=X[1],J=(0,r.useState)(!1),ee=(0,i.Z)(J,2),te=ee[0],ne=ee[1],ae=o.bucketName||"",ie=(0,p.F)(ae,[m.Ft.S3_GET_REPLICATION_CONFIGURATION,m.Ft.S3_GET_ACTIONS]);(0,r.useEffect)((function(){s&&g(!0)}),[s,g]),(0,r.useEffect)((function(){Z&&(ie?x.Z.invoke("GET","/api/v1/buckets/".concat(ae,"/replication")).then((function(e){var t=e.rules?e.rules:[];t.sort((function(e,t){return e.priority-t.priority})),k(t),g(!1)})).catch((function(e){n((0,C.Ih)(e)),g(!1)})):g(!1))}),[Z,n,ae,ie]);var oe=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];L(e)},re=[{type:"delete",onClick:function(e){V(e.id),ne(!1),z(!0)}},{type:"view",onClick:function(e){V(e.id),K(!0)},disableButtonFunction:!(0,p.F)(ae,[m.Ft.S3_PUT_REPLICATION_CONFIGURATION,m.Ft.S3_PUT_ACTIONS],!0)}];return(0,N.jsxs)(r.Fragment,{children:[M&&(0,N.jsx)(I,{closeModalAndRefresh:function(){oe(!1),g(!0)},open:M,bucketName:ae,setReplicationRules:S}),E&&(0,N.jsx)(T,{deleteOpen:E,selectedBucket:ae,closeDeleteModalAndRefresh:function(e){z(!1),e&&g(!0)},ruleToDelete:q,rulesToDelete:$,remainingRules:S.length,allSelected:$.length===S.length,deleteSelectedRules:te}),G&&(0,N.jsx)(w,{closeModalAndRefresh:function(e){K(!1),e&&g(!0)},open:G,bucketName:ae,ruleID:q}),(0,N.jsxs)(u.ZP,{container:!0,children:[(0,N.jsxs)(u.ZP,{item:!0,xs:12,className:t.actionsTray,children:[(0,N.jsx)(v.Z,{children:"Replication"}),(0,N.jsxs)("div",{style:{display:"flex"},children:[(0,N.jsx)(p.s,{scopes:[m.Ft.S3_PUT_REPLICATION_CONFIGURATION,m.Ft.S3_PUT_ACTIONS],resource:ae,matchAll:!0,errorProps:{disabled:!0},children:(0,N.jsx)(F.Z,{tooltip:"Remove Selected Replication Rules",children:(0,N.jsx)(l.zxk,{id:"remove-bucket-replication-rule",onClick:function(){V("selectedRules"),ne(!0),z(!0)},label:"Remove Selected Rules",icon:(0,N.jsx)(l.XHJ,{}),color:"secondary",disabled:0===$.length,variant:"secondary"})})}),(0,N.jsx)(p.s,{scopes:[m.Ft.S3_PUT_REPLICATION_CONFIGURATION,m.Ft.S3_PUT_ACTIONS],resource:ae,matchAll:!0,errorProps:{disabled:!0},children:(0,N.jsx)(F.Z,{tooltip:"Add Replication Rule",children:(0,N.jsx)(l.zxk,{id:"add-bucket-replication-rule",onClick:function(){oe(!0)},label:"Add Replication Rule",icon:(0,N.jsx)(l.dtP,{}),variant:"callAction"})})})]})]}),(0,N.jsx)(u.ZP,{item:!0,xs:12,children:(0,N.jsx)(p.s,{scopes:[m.Ft.S3_GET_REPLICATION_CONFIGURATION,m.Ft.S3_GET_ACTIONS],resource:ae,errorProps:{disabled:!0},children:(0,N.jsx)(f.Z,{itemActions:re,columns:[{label:"Priority",elementKey:"priority",width:55,contentTextAlign:"center"},{label:"Destination",elementKey:"destination",renderFunction:function(e){return(0,N.jsx)(r.Fragment,{children:e.bucket.replace("arn:aws:s3:::","")})}},{label:"Prefix",elementKey:"prefix",width:200},{label:"Tags",elementKey:"tags",renderFunction:function(e){return(0,N.jsx)(r.Fragment,{children:e&&""!==e.tags?"Yes":"No"})},width:60},{label:"Status",elementKey:"status",width:100}],isLoading:Z,records:S,entityName:"Replication Rules",idField:"id",customPaperHeight:t.twHeight,textSelectable:!0,selectedItems:$,onSelect:function(e){return function(e){var t=e.target,n=t.value,i=t.checked,o=(0,a.Z)($);return i?o.push(n):o=o.filter((function(e){return e!==n})),Q(o),o}(e)},onSelectAll:function(){$.length!==S.length?Q(S.map((function(e){return e.id}))):Q([])}})})}),(0,N.jsxs)(u.ZP,{item:!0,xs:12,children:[(0,N.jsx)("br",{}),(0,N.jsx)(l.KfX,{title:"Replication",iconComponent:(0,N.jsx)(l.wNb,{}),help:(0,N.jsxs)(r.Fragment,{children:["MinIO supports server-side and client-side replication of objects between source and destination buckets.",(0,N.jsx)("br",{}),(0,N.jsx)("br",{}),"You can learn more at our"," ",(0,N.jsx)("a",{href:"https://min.io/docs/minio/linux/administration/bucket-replication.html?ref=con",target:"_blank",rel:"noopener",children:"documentation"}),"."]})})]})]})]})}))},81159:function(e,t,n){var a=n(4942),i=n(1413),o=n(72791),r=n(11135),c=n(25787),l=n(9955),s=n(30829),d=n(20068),u=n(20890),h=n(61889),p=n(23814),m=n(75952),x=n(28182),f=n(80184),v=(0,c.Z)((function(e){return{root:{width:50,height:24,padding:0,margin:0},switchBase:{padding:1,"&$checked":{transform:"translateX(24px)",color:e.palette.common.white,"& + $track":{backgroundColor:"#4CCB92",boxShadow:"inset 0px 1px 4px rgba(0,0,0,0.1)",opacity:1,border:"none"}},"&$focusVisible $thumb":{color:"#4CCB92",border:"6px solid #fff"}},thumb:{width:22,height:22,backgroundColor:"#FAFAFA",border:"2px solid #FFFFFF",marginLeft:1},track:{borderRadius:12,backgroundColor:"#E2E2E2",boxShadow:"inset 0px 1px 4px rgba(0,0,0,0.1)",opacity:1,transition:e.transitions.create(["background-color","border"])},checked:{},focusVisible:{},switchContainer:{display:"flex",alignItems:"center",justifyContent:"flex-end"}}}))(l.Z);t.Z=(0,c.Z)((function(e){return(0,r.Z)((0,i.Z)((0,i.Z)({indicatorLabelOn:{fontWeight:"bold",color:"#081C42 !important"},indicatorLabel:{fontSize:12,color:"#E2E2E2",margin:"0 8px 0 10px"},fieldDescription:{marginTop:4,color:"#999999"},tooltip:{fontSize:16}},p.OR),p.YI))}))((function(e){var t=e.label,n=void 0===t?"":t,r=e.onChange,c=e.value,l=e.id,p=e.name,Z=e.checked,g=void 0!==Z&&Z,b=e.disabled,j=void 0!==b&&b,S=e.switchOnly,k=void 0!==S&&S,C=e.tooltip,y=void 0===C?"":C,N=e.description,w=void 0===N?"":N,R=e.classes,P=e.indicatorLabels,F=e.extraInputProps,I=void 0===F?{}:F,T=(0,f.jsxs)(o.Fragment,{children:[!k&&(0,f.jsx)("span",{className:(0,x.Z)(R.indicatorLabel,(0,a.Z)({},R.indicatorLabelOn,!g)),children:P&&P.length>1?P[1]:"OFF"}),(0,f.jsx)(v,{checked:g,onChange:r,color:"primary",name:p,inputProps:(0,i.Z)({"aria-label":"primary checkbox"},I),disabled:j,disableRipple:!0,disableFocusRipple:!0,disableTouchRipple:!0,value:c,id:l}),!k&&(0,f.jsx)("span",{className:(0,x.Z)(R.indicatorLabel,(0,a.Z)({},R.indicatorLabelOn,g)),children:P?P[0]:"ON"})]});return k?T:(0,f.jsx)("div",{children:(0,f.jsxs)(h.ZP,{container:!0,alignItems:"center",children:[(0,f.jsx)(h.ZP,{item:!0,xs:12,sm:8,md:8,children:""!==n&&(0,f.jsxs)(s.Z,{htmlFor:l,className:R.inputLabel,children:[(0,f.jsx)("span",{children:n}),""!==y&&(0,f.jsx)("div",{className:R.tooltipContainer,children:(0,f.jsx)(d.Z,{title:y,placement:"top-start",children:(0,f.jsx)("div",{className:R.tooltip,children:(0,f.jsx)(m.byK,{})})})})]})}),(0,f.jsx)(h.ZP,{item:!0,xs:12,sm:""!==n?4:12,md:""!==n?4:12,textAlign:"right",justifyContent:"end",className:R.switchContainer,children:T}),""!==w&&(0,f.jsx)(h.ZP,{item:!0,xs:12,textAlign:"left",children:(0,f.jsx)(u.Z,{component:"p",className:R.fieldDescription,children:w})})]})})}))},21435:function(e,t,n){var a=n(29439),i=n(1413),o=n(72791),r=n(27391),c=n(61889),l=n(30829),s=n(20068),d=n(13400),u=n(20165),h=n(3579),p=n(11135),m=n(72455),x=n(25787),f=n(23814),v=n(75952),Z=n(28182),g=n(80184),b=(0,m.Z)((function(e){return(0,p.Z)((0,i.Z)({},f.gM))}));function j(e){var t=b();return(0,g.jsx)(r.Z,(0,i.Z)({InputProps:{classes:t}},e))}t.Z=(0,x.Z)((function(e){return(0,p.Z)((0,i.Z)((0,i.Z)((0,i.Z)({},f.YI),f.Hr),{},{textBoxContainer:{flexGrow:1,position:"relative"},overlayAction:{position:"absolute",right:5,top:6,"& svg":{maxWidth:15,maxHeight:15},"&.withLabel":{top:5}}}))}))((function(e){var t=e.label,n=e.onChange,r=e.value,p=e.id,m=e.name,x=e.type,f=void 0===x?"text":x,b=e.autoComplete,S=void 0===b?"off":b,k=e.disabled,C=void 0!==k&&k,y=e.multiline,N=void 0!==y&&y,w=e.tooltip,R=void 0===w?"":w,P=e.index,F=void 0===P?0:P,I=e.error,T=void 0===I?"":I,A=e.required,O=void 0!==A&&A,E=e.placeholder,z=void 0===E?"":E,_=e.min,D=e.max,M=e.overlayId,L=e.overlayIcon,B=void 0===L?null:L,U=e.overlayObject,G=void 0===U?null:U,K=e.extraInputProps,H=void 0===K?{}:K,W=e.overlayAction,q=e.noLabelMinWidth,V=void 0!==q&&q,Y=e.pattern,X=void 0===Y?"":Y,$=e.autoFocus,Q=void 0!==$&&$,J=e.classes,ee=e.className,te=void 0===ee?"":ee,ne=e.onKeyPress,ae=e.onFocus,ie=e.onPaste,oe=(0,i.Z)({"data-index":F},H),re=(0,o.useState)(!1),ce=(0,a.Z)(re,2),le=ce[0],se=ce[1];"number"===f&&_&&(oe.min=_),"number"===f&&D&&(oe.max=D),""!==X&&(oe.pattern=X);var de=B,ue=f;return"password"===f&&null===B&&(de=le?(0,g.jsx)(u.Z,{}):(0,g.jsx)(h.Z,{}),ue=le?"text":"password"),(0,g.jsx)(o.Fragment,{children:(0,g.jsxs)(c.ZP,{container:!0,className:(0,Z.Z)(""!==te?te:"",""!==T?J.errorInField:J.inputBoxContainer),children:[""!==t&&(0,g.jsxs)(l.Z,{htmlFor:p,className:V?J.noMinWidthLabel:J.inputLabel,children:[(0,g.jsxs)("span",{children:[t,O?"*":""]}),""!==R&&(0,g.jsx)("div",{className:J.tooltipContainer,children:(0,g.jsx)(s.Z,{title:R,placement:"top-start",children:(0,g.jsx)("div",{className:J.tooltip,children:(0,g.jsx)(v.byK,{})})})})]}),(0,g.jsxs)("div",{className:J.textBoxContainer,children:[(0,g.jsx)(j,{id:p,name:m,fullWidth:!0,value:r,autoFocus:Q,disabled:C,onChange:n,type:ue,multiline:N,autoComplete:S,inputProps:oe,error:""!==T,helperText:T,placeholder:z,className:J.inputRebase,onKeyPress:ne,onFocus:ae,onPaste:ie}),de&&(0,g.jsx)("div",{className:"".concat(J.overlayAction," ").concat(""!==t?"withLabel":""),children:(0,g.jsx)(d.Z,{onClick:W?function(){W()}:function(){return se(!le)},id:M,size:"small",disableFocusRipple:!1,disableRipple:!1,disableTouchRipple:!1,children:de})}),G&&(0,g.jsx)("div",{className:"".concat(J.overlayAction," ").concat(""!==t?"withLabel":""),children:G})]})]})})}))},64163:function(e,t,n){var a=n(1413),i=n(72791),o=n(61889),r=n(11135),c=n(25787),l=n(23814),s=n(80184);t.Z=(0,c.Z)((function(e){return(0,r.Z)((0,a.Z)({},l.xx))}))((function(e){var t=e.classes,n=e.label,a=void 0===n?"":n,r=e.content,c=e.multiLine,l=void 0!==c&&c,d=e.actionButton;return(0,s.jsx)(i.Fragment,{children:(0,s.jsxs)(o.ZP,{className:t.prefinedContainer,children:[""!==a&&(0,s.jsx)(o.ZP,{item:!0,xs:12,className:t.predefinedTitle,children:a}),(0,s.jsxs)(o.ZP,{item:!0,xs:12,className:"".concat(t.predefinedList," ").concat(d?t.includesActionButton:""),children:[(0,s.jsx)(o.ZP,{item:!0,xs:12,className:l?t.innerContentMultiline:t.innerContent,children:r}),d&&(0,s.jsx)("div",{className:t.overlayShareOption,children:d})]})]})})}))},17420:function(e,t,n){var a=n(93433),i=n(29439),o=n(1413),r=n(72791),c=n(26181),l=n.n(c),s=n(48573),d=n.n(s),u=n(11135),h=n(25787),p=n(61889),m=n(77961),x=n(30829),f=n(20068),v=n(23814),Z=n(21435),g=n(75952),b=n(80184);t.Z=(0,h.Z)((function(e){return(0,u.Z)((0,o.Z)((0,o.Z)((0,o.Z)({},v.YI),v.Hr),{},{inputWithBorder:{border:"1px solid #EAEAEA",padding:15,height:150,overflowY:"auto",position:"relative",marginTop:15},lineInputBoxes:{display:"flex",marginBottom:10},queryDiv:{alignSelf:"center",margin:"0 4px",fontWeight:600}}))}))((function(e){var t=e.elements,n=e.name,o=e.label,c=e.tooltip,s=void 0===c?"":c,u=e.keyPlaceholder,h=void 0===u?"":u,v=e.valuePlaceholder,j=void 0===v?"":v,S=e.onChange,k=e.withBorder,C=void 0!==k&&k,y=e.classes,N=(0,r.useState)([""]),w=(0,i.Z)(N,2),R=w[0],P=w[1],F=(0,r.useState)([""]),I=(0,i.Z)(F,2),T=I[0],A=I[1],O=(0,r.createRef)();(0,r.useEffect)((function(){if(1===R.length&&""===R[0]&&1===T.length&&""===T[0]&&t&&""!==t){var e=t.split("&"),n=[],a=[];e.forEach((function(e){var t=e.split("=");2===t.length&&(n.push(t[0]),a.push(t[1]))})),n.push(""),a.push(""),P(n),A(a)}}),[R,T,t]),(0,r.useEffect)((function(){var e=O.current;e&&R.length>1&&e.scrollIntoView(!1)}),[R]);var E=(0,r.useRef)(!0);(0,r.useLayoutEffect)((function(){E.current?E.current=!1:D()}),[R,T]);var z=function(e){e.persist();var t=(0,a.Z)(R),n=l()(e.target,"dataset.index","0");t[parseInt(n)]=e.target.value,P(t)},_=function(e){e.persist();var t=(0,a.Z)(T),n=l()(e.target,"dataset.index","0");t[parseInt(n)]=e.target.value,A(t)},D=d()((function(){var e="";R.forEach((function(t,n){if(R[n]&&T[n]){var a="".concat(t,"=").concat(T[n]);0!==n&&(a="&".concat(a)),e="".concat(e).concat(a)}})),S(e)}),500),M=T.map((function(e,t){return(0,b.jsxs)(p.ZP,{item:!0,xs:12,className:y.lineInputBoxes,children:[(0,b.jsx)(Z.Z,{id:"".concat(n,"-key-").concat(t.toString()),label:"",name:"".concat(n,"-").concat(t.toString()),value:R[t],onChange:z,index:t,placeholder:h}),(0,b.jsx)("span",{className:y.queryDiv,children:":"}),(0,b.jsx)(Z.Z,{id:"".concat(n,"-value-").concat(t.toString()),label:"",name:"".concat(n,"-").concat(t.toString()),value:T[t],onChange:_,index:t,placeholder:j,overlayIcon:t===T.length-1?(0,b.jsx)(g.dtP,{}):null,overlayAction:function(){!function(){if(""!==R[R.length-1].trim()&&""!==T[T.length-1].trim()){var e=(0,a.Z)(R),t=(0,a.Z)(T);e.push(""),t.push(""),P(e),A(t)}}()}})]},"query-pair-".concat(n,"-").concat(t.toString()))}));return(0,b.jsx)(r.Fragment,{children:(0,b.jsxs)(p.ZP,{item:!0,xs:12,className:y.fieldContainer,children:[(0,b.jsxs)(x.Z,{className:y.inputLabel,children:[(0,b.jsx)("span",{children:o}),""!==s&&(0,b.jsx)("div",{className:y.tooltipContainer,children:(0,b.jsx)(f.Z,{title:s,placement:"top-start",children:(0,b.jsx)(m.Z,{className:y.tooltip})})})]}),(0,b.jsxs)(p.ZP,{item:!0,xs:12,className:"".concat(C?y.inputWithBorder:""),children:[M,(0,b.jsx)("div",{ref:O})]})]})})}))},60680:function(e,t,n){n(72791);var a=n(11135),i=n(25787),o=n(80184);t.Z=(0,i.Z)((function(e){return(0,a.Z)({root:{padding:0,margin:0,fontSize:".9rem"}})}))((function(e){var t=e.classes,n=e.children;return(0,o.jsx)("h1",{className:t.root,children:n})}))},77961:function(e,t,n){var a=n(64836);t.Z=void 0;var i=a(n(45649)),o=n(80184),r=(0,i.default)((0,o.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"}),"Help");t.Z=r},3579:function(e,t,n){var a=n(64836);t.Z=void 0;var i=a(n(45649)),o=n(80184),r=(0,i.default)((0,o.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"RemoveRedEye");t.Z=r},20165:function(e,t,n){var a=n(64836);t.Z=void 0;var i=a(n(45649)),o=n(80184),r=(0,i.default)((0,o.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff");t.Z=r},9955:function(e,t,n){n.d(t,{Z:function(){return C}});var a=n(4942),i=n(63366),o=n(87462),r=n(72791),c=n(28182),l=n(94419),s=n(12065),d=n(14036),u=n(97278),h=n(93736),p=n(47630),m=n(75878),x=n(21217);function f(e){return(0,x.Z)("MuiSwitch",e)}var v=(0,m.Z)("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),Z=n(80184),g=["className","color","edge","size","sx"],b=(0,p.ZP)("span",{name:"MuiSwitch",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.edge&&t["edge".concat((0,d.Z)(n.edge))],t["size".concat((0,d.Z)(n.size))]]}})((function(e){var t,n=e.ownerState;return(0,o.Z)({display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},"start"===n.edge&&{marginLeft:-8},"end"===n.edge&&{marginRight:-8},"small"===n.size&&(t={width:40,height:24,padding:7},(0,a.Z)(t,"& .".concat(v.thumb),{width:16,height:16}),(0,a.Z)(t,"& .".concat(v.switchBase),(0,a.Z)({padding:4},"&.".concat(v.checked),{transform:"translateX(16px)"})),t))})),j=(0,p.ZP)(u.Z,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:function(e,t){var n=e.ownerState;return[t.switchBase,(0,a.Z)({},"& .".concat(v.input),t.input),"default"!==n.color&&t["color".concat((0,d.Z)(n.color))]]}})((function(e){var t,n=e.theme;return t={position:"absolute",top:0,left:0,zIndex:1,color:n.vars?n.vars.palette.Switch.defaultColor:"".concat("light"===n.palette.mode?n.palette.common.white:n.palette.grey[300]),transition:n.transitions.create(["left","transform"],{duration:n.transitions.duration.shortest})},(0,a.Z)(t,"&.".concat(v.checked),{transform:"translateX(20px)"}),(0,a.Z)(t,"&.".concat(v.disabled),{color:n.vars?n.vars.palette.Switch.defaultDisabledColor:"".concat("light"===n.palette.mode?n.palette.grey[100]:n.palette.grey[600])}),(0,a.Z)(t,"&.".concat(v.checked," + .").concat(v.track),{opacity:.5}),(0,a.Z)(t,"&.".concat(v.disabled," + .").concat(v.track),{opacity:n.vars?n.vars.opacity.switchTrackDisabled:"".concat("light"===n.palette.mode?.12:.2)}),(0,a.Z)(t,"& .".concat(v.input),{left:"-100%",width:"300%"}),t}),(function(e){var t,n=e.theme,i=e.ownerState;return(0,o.Z)({"&:hover":{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.action.activeChannel," / ").concat(n.vars.palette.action.hoverOpacity,")"):(0,s.Fq)(n.palette.action.active,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==i.color&&(t={},(0,a.Z)(t,"&.".concat(v.checked),(0,a.Z)({color:(n.vars||n).palette[i.color].main,"&:hover":{backgroundColor:n.vars?"rgba(".concat(n.vars.palette[i.color].mainChannel," / ").concat(n.vars.palette.action.hoverOpacity,")"):(0,s.Fq)(n.palette[i.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(v.disabled),{color:n.vars?n.vars.palette.Switch["".concat(i.color,"DisabledColor")]:"".concat("light"===n.palette.mode?(0,s.$n)(n.palette[i.color].main,.62):(0,s._j)(n.palette[i.color].main,.55))})),(0,a.Z)(t,"&.".concat(v.checked," + .").concat(v.track),{backgroundColor:(n.vars||n).palette[i.color].main}),t))})),S=(0,p.ZP)("span",{name:"MuiSwitch",slot:"Track",overridesResolver:function(e,t){return t.track}})((function(e){var t=e.theme;return{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:t.vars?t.vars.palette.common.onBackground:"".concat("light"===t.palette.mode?t.palette.common.black:t.palette.common.white),opacity:t.vars?t.vars.opacity.switchTrack:"".concat("light"===t.palette.mode?.38:.3)}})),k=(0,p.ZP)("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:function(e,t){return t.thumb}})((function(e){var t=e.theme;return{boxShadow:(t.vars||t).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"}})),C=r.forwardRef((function(e,t){var n=(0,h.Z)({props:e,name:"MuiSwitch"}),a=n.className,r=n.color,s=void 0===r?"primary":r,u=n.edge,p=void 0!==u&&u,m=n.size,x=void 0===m?"medium":m,v=n.sx,C=(0,i.Z)(n,g),y=(0,o.Z)({},n,{color:s,edge:p,size:x}),N=function(e){var t=e.classes,n=e.edge,a=e.size,i=e.color,r=e.checked,c=e.disabled,s={root:["root",n&&"edge".concat((0,d.Z)(n)),"size".concat((0,d.Z)(a))],switchBase:["switchBase","color".concat((0,d.Z)(i)),r&&"checked",c&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},u=(0,l.Z)(s,f,t);return(0,o.Z)({},t,u)}(y),w=(0,Z.jsx)(k,{className:N.thumb,ownerState:y});return(0,Z.jsxs)(b,{className:(0,c.Z)(N.root,a),sx:v,ownerState:y,children:[(0,Z.jsx)(j,(0,o.Z)({type:"checkbox",icon:w,checkedIcon:w,ref:t,ownerState:y},C,{classes:(0,o.Z)({},N,{root:N.switchBase})})),(0,Z.jsx)(S,{className:N.track,ownerState:y})]})}))}}]);
//# sourceMappingURL=2512.488848e4.chunk.js.map