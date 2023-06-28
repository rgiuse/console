(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[4902],{75578:function(e,t,n){"use strict";var i=n(1413),a=n(72791),r=n(80184);t.Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return function(n){return(0,r.jsx)(a.Suspense,{fallback:t,children:(0,r.jsx)(e,(0,i.Z)({},n))})}}},74902:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return R}});var i=n(29439),a=n(72791),r=n(40986),s=n(61889),l=n(81207),o=n(29945),c=n(56087),u=n(4942),d=n(28182),f=n(18384),x=n(13967),p=n(64554),m=n(95193),h=n(78290),b=n(80184),g=function(e){var t=e.isActive,n=e.isXsViewActive,i=e.title,a=e.onClick,r=e.children,s=i.toLowerCase();return(0,b.jsx)(p.Z,{className:(0,d.Z)((0,u.Z)({"plan-header":!0,active:t},"xs-active",n)),onClick:function(){a&&a(s)},sx:{display:"flex",alignItems:"flex-start",justifyContent:"center",flexFlow:"column",borderLeft:"1px solid #eaeaea",borderBottom:"0px !important","& .plan-header":{display:"flex",alignItems:"center",justifyContent:"center",flexFlow:"column"},"& .title-block":{display:"flex",alignItems:"center",flexFlow:"column",width:"100%","& .title-main":{display:"flex",alignItems:"center",justifyContent:"center",flex:1},"& .iconContainer":{"& .min-icon":{minWidth:140,width:"100%",maxHeight:55,height:"100%"}}},"& .open-source":{fontSize:"14px",display:"flex",marginBottom:"5px",alignItems:"center","& .min-icon":{marginRight:"8px",height:"12px",width:"12px"}},"& .cur-plan-text":{fontSize:"12px",textTransform:"uppercase"},"@media (max-width: 600px)":{cursor:"pointer","& .title-block":{"& .title":{fontSize:"14px",fontWeight:600}}},"&.active, &.active.xs-active":{color:"#ffffff",position:"relative","& .min-icon":{fill:"#ffffff"},"&:before":{content:"' '",position:"absolute",width:"100%",height:"18px",backgroundColor:"#2781B0",display:"block",top:-16},"& .iconContainer":{"& .min-icon":{marginTop:"-12px"}}},"&.active":{background:"#2781B0",color:"#ffffff"},"&.xs-active":{background:"#eaeaea"}},children:r})},v=function(e){return(0,b.jsx)(p.Z,{className:"feature-title",children:(0,b.jsx)(p.Z,{className:"feature-title-info",children:(0,b.jsxs)("div",{className:"xs-only",children:[e.featureLabel," "]})})})},j=function(e){return(0,b.jsx)(p.Z,{className:"feature-item",style:e.style,children:(0,b.jsxs)(p.Z,{className:"feature-item-info",children:[(0,b.jsx)("div",{className:"xs-only",children:(0,h.BK)(e.featureLabel||"")}),(0,b.jsxs)(p.Z,{className:"plan-feature",children:[(0,b.jsx)("div",{children:(0,h.BK)(e.label||"")}),(0,h.BK)(e.detail),(0,b.jsxs)("div",{className:"xs-only",children:[e.xsLabel," "]})]})]})})},Z=function(e){var t,n=e.licenseInfo,r=(0,x.Z)(),s=(0,m.Z)(r.breakpoints.down("sm")),l=n?null===n||void 0===n||null===(t=n.plan)||void 0===t?void 0:t.toLowerCase():"community",c=l===h.a6.COMMUNITY,u=l===h.a6.STANDARD,d=l===h.a6.ENTERPRISE,Z=h.eo.includes(l),y=(0,a.useState)(""),w=(0,i.Z)(y,2),N=w[0],S=w[1],k=N===h.a6.COMMUNITY,C=N===h.a6.STANDARD,L=N===h.a6.ENTERPRISE,I=function(e,t,n,i){var a="community"!==l?"https://subnet.min.io":e;return(0,b.jsx)(o.zxk,{id:"license-action-".concat(e),variant:n,style:{marginTop:"12px",width:"80%"},disabled:l!==h.a6.COMMUNITY&&l!==i,onClick:function(e){e.preventDefault(),window.open("".concat(a,"?ref=con"),"_blank")},label:t})},R=function(e){S(e)};(0,a.useEffect)((function(){S(s?l||"community":"")}),[s,l]);var E="?ref=con",T=h.Of;return(0,b.jsx)(a.Fragment,{children:(0,b.jsxs)(p.Z,{sx:{border:"1px solid #eaeaea",borderTop:"0px",marginBottom:"45px","&::-webkit-scrollbar":{width:"5px",height:"5px"},"&::-webkit-scrollbar-track":{background:"#F0F0F0",borderRadius:0,boxShadow:"inset 0px 0px 0px 0px #F0F0F0"},"&::-webkit-scrollbar-thumb":{background:"#777474",borderRadius:0},"&::-webkit-scrollbar-thumb:hover":{background:"#5A6375"}},children:[(0,b.jsx)(p.Z,{className:"title-blue-bar",sx:{height:"8px",borderBottom:"8px solid rgb(6 48 83)"}}),(0,b.jsxs)(p.Z,{className:Z?"paid-plans-only":"",sx:{display:"grid",margin:"0 1.5rem 0 1.5rem",gridTemplateColumns:{sm:"1fr 1fr 1fr 1fr",xs:"1fr 1fr 1fr"},"&.paid-plans-only":{display:"grid",gridTemplateColumns:"1fr 1fr 1fr"},"& .features-col":{flex:1,minWidth:"260px","@media (max-width: 600px)":{display:"none"}},"& .xs-only":{display:"none"},"& .button-box":{display:"flex",alignItems:"center",justifyContent:"center",padding:"5px 0px 25px 0px",borderLeft:"1px solid #eaeaea"},"& .plan-header":{height:"99px",borderBottom:"1px solid #eaeaea"},"& .feature-title":{height:"25px",paddingLeft:"26px",fontSize:"14px",background:"#E5E5E5","@media (max-width: 600px)":{"& .feature-title-info .xs-only":{display:"block"}}},"& .feature-name":{minHeight:"60px",padding:"5px",borderBottom:"1px solid #eaeaea",display:"flex",alignItems:"center",paddingLeft:"26px",fontSize:"14px"},"& .feature-item":{display:"flex",flexFlow:"column",alignItems:"center",justifyContent:"center",minHeight:"60px",padding:"0 15px 0 15px",borderBottom:"1px solid #eaeaea",borderLeft:" 1px solid #eaeaea",fontSize:"14px","& .link-text":{color:"#2781B0",cursor:"pointer",textDecoration:"underline"},"&.icon-yes":{width:"15px",height:"15px"}},"& .feature-item-info":{flex:1,display:"flex",flexFlow:"column",alignItems:"center",justifyContent:"space-around",textAlign:"center","@media (max-width: 600px)":{justifyContent:"space-evenly",width:"100%","& .xs-only":{display:"block"},"& .plan-feature":{textAlign:"center",paddingRight:"10px"}}},"& .plan-col":{minWidth:"260px",flex:1},"& .active-plan-col":{background:"#FDFDFD 0% 0% no-repeat padding-box",boxShadow:" 0px 3px 20px #00000038","& .plan-header":{backgroundColor:"#2781B0"},"& .feature-title":{background:"#F7F7F7"}}},children:[(0,b.jsx)(p.Z,{className:"features-col",children:T.map((function(e){var t=e.featureTitleRow;return e.isHeader?Z?(0,b.jsxs)(p.Z,{className:"plan-header",sx:{fontSize:"14px",paddingLeft:"26px",display:"flex",alignItems:"center",justifyContent:"flex-start",borderBottom:"0px !important","& .link-text":{color:"#2781B0",cursor:"pointer",textDecoration:"underline"},"& .min-icon":{marginRight:"10px",color:"#2781B0",fill:"#2781B0"}},children:[(0,b.jsx)(o.jR_,{}),(0,b.jsxs)("a",{href:"https://subnet.min.io/terms-and-conditions/".concat(l),rel:"noopener",className:"link-text",children:["View License agreement ",(0,b.jsx)("br",{}),"for the registered plan."]})]},"plan-header-".concat(e.desc)):(0,b.jsx)(p.Z,{className:"plan-header",sx:{fontSize:"14px",paddingLeft:"26px",display:"flex",alignItems:"center",justifyContent:"flex-start",borderBottom:"0px !important"},children:e.label},"plan-header-label-".concat(e.desc)):t?(0,b.jsx)(p.Z,{className:"feature-title",sx:{fontSize:"14px",fontWeight:600,textTransform:"uppercase"},children:(0,b.jsxs)("div",{children:[(0,h.BK)(e.desc)," "]})},"plan-descript-".concat(e.desc)):(0,b.jsx)(p.Z,{className:"feature-name",style:e.style,children:(0,b.jsxs)("div",{children:[(0,h.BK)(e.desc)," "]})},"plan-feature-name-".concat(e.desc))}))}),Z?null:(0,b.jsxs)(p.Z,{className:"plan-col ".concat(c?"active-plan-col":"non-active-plan-col"),children:[h.RY.map((function(e,t){var n=T[t].desc,i=e.featureTitleRow;return e.isHeader?(0,b.jsx)(g,{isActive:c,isXsViewActive:k,title:"community",onClick:s?R:null,children:(0,b.jsx)(p.Z,{className:"title-block",children:(0,b.jsx)(p.Z,{className:"title-main",children:(0,b.jsx)("div",{className:"iconContainer",children:(0,b.jsx)(o.H_l,{style:{width:117}})})})})},"community-header"):i?(0,b.jsx)(v,{featureLabel:n},"title-row-".concat(e.id)):(0,b.jsx)(j,{featureLabel:n,label:e.label,detail:e.detail,xsLabel:e.xsLabel,style:e.style},"pricing-feature-".concat(e.id))})),(0,b.jsx)(p.Z,{className:"button-box",children:I("https://slack.min.io".concat(E),"Join Slack","regular",h.a6.COMMUNITY)})]}),(0,b.jsxs)(p.Z,{className:"plan-col ".concat(u?"active-plan-col":"non-active-plan-col"),children:[h.zR.map((function(e,t){var n=T[t].desc,i=e.featureTitleRow;return e.isHeader?(0,b.jsx)(g,{isActive:u,isXsViewActive:C,title:"Standard",onClick:s?R:null,children:(0,b.jsx)(p.Z,{className:"title-block",children:(0,b.jsx)(p.Z,{className:"title-main",children:(0,b.jsx)("div",{className:"iconContainer",children:(0,b.jsx)(o.tKS,{})})})})},"standard-header"):i?(0,b.jsx)(v,{featureLabel:n},"feature-title-row-".concat(e.id)):(0,b.jsx)(j,{featureLabel:n,label:e.label,detail:e.detail,xsLabel:e.xsLabel,style:e.style},"feature-item-".concat(e.id))})),(0,b.jsx)(p.Z,{className:"button-box",children:I("https://min.io/signup".concat(E),h.eo.includes(l)?"Login to SUBNET":"Subscribe","callAction",h.a6.STANDARD)})]}),(0,b.jsxs)(p.Z,{className:"plan-col ".concat(d?"active-plan-col":"non-active-plan-col"),children:[h.u9.map((function(e,t){var n=T[t].desc,i=e.featureTitleRow,a=e.isHeader,r=e.yesIcon;return a?(0,b.jsx)(g,{isActive:d,isXsViewActive:L,title:"Enterprise",onClick:s?R:null,children:(0,b.jsx)(p.Z,{className:"title-block",children:(0,b.jsx)(p.Z,{className:"title-main",children:(0,b.jsx)("div",{className:"iconContainer",children:(0,b.jsx)(o.cSV,{})})})})},"enterprise-header"):i?(0,b.jsx)(v,{featureLabel:n},"feature-title-row2-".concat(e.id)):r?(0,b.jsx)(p.Z,{className:"feature-item",children:(0,b.jsxs)(p.Z,{className:"feature-item-info",children:[(0,b.jsx)("div",{className:"xs-only"}),(0,b.jsx)(p.Z,{className:"plan-feature",children:(0,b.jsx)(f.Z,{})})]})},"ent-feature-yes".concat(e.id)):(0,b.jsx)(j,{featureLabel:n,label:e.label,detail:e.detail,style:e.style},"pricing-feature-item-".concat(e.id))})),(0,b.jsx)(p.Z,{className:"button-box",children:I("https://min.io/signup".concat(E),h.eo.includes(l)?"Login to SUBNET":"Subscribe","callAction",h.a6.ENTERPRISE)})]})]})]})})},y=n(57689),w=n(74440),N=n(75578),S=n(47974),k=n(27559),C=n(87995),L=n(81551),I=(0,N.Z)(a.lazy((function(){return n.e(5223).then(n.bind(n,75223))}))),R=function(){var e=(0,y.s0)(),t=(0,a.useState)(!1),n=(0,i.Z)(t,2),u=n[0],d=n[1],f=(0,a.useState)(),x=(0,i.Z)(f,2),p=x[0],m=x[1],g=(0,a.useState)(0),v=(0,i.Z)(g,2),j=v[0],N=v[1],R=(0,a.useState)(!1),E=(0,i.Z)(R,2),T=E[0],A=E[1],M=(0,a.useState)(!0),B=(0,i.Z)(M,2),F=B[0],z=B[1];(0,a.useState)(!1);var D=(0,a.useState)(!1),P=(0,i.Z)(D,2),_=P[0],O=P[1],W=(0,a.useState)(!1),H=(0,i.Z)(W,2),U=H[0],V=H[1],K=(0,L.TL)();(0,a.useEffect)((function(){K((0,C.Sc)("license"))}),[]);var Y=p&&_,X=(0,h.Y0)();(0,a.useEffect)((function(){!Y&&!X&&!F&&!T&&V(!0)}),[Y,X,F,T]);var G=(0,a.useCallback)((function(){T||(A(!0),l.Z.invoke("GET","/api/v1/subnet/info").then((function(e){e&&("STANDARD"===e.plan?N(1):"ENTERPRISE"===e.plan?N(2):N(1),m(e)),O(!0),A(!1)})).catch((function(){O(!1),A(!1)})))}),[T]);return(0,a.useEffect)((function(){F&&(G(),z(!1))}),[G,F,z]),T?(0,b.jsx)(s.ZP,{item:!0,xs:12,children:(0,b.jsx)(r.Z,{})}):(0,b.jsxs)(a.Fragment,{children:[(0,b.jsx)(S.Z,{label:"MinIO License and Support plans",actions:(0,b.jsxs)(a.Fragment,{children:[!Y&&(0,b.jsx)(o.zxk,{id:"login-with-subnet",onClick:function(){return e(c.gA.REGISTER_SUPPORT)},style:{fontSize:"14px",display:"flex",alignItems:"center",textDecoration:"none"},icon:(0,b.jsx)(o.e0j,{}),variant:"callAction",children:"Register your cluster"}),(0,b.jsx)(k.Z,{})]})}),(0,b.jsxs)(o.Xgh,{children:[(0,b.jsx)(s.ZP,{item:!0,xs:12,children:Y&&(0,b.jsx)(w.Z,{email:null===p||void 0===p?void 0:p.email})}),(0,b.jsx)(Z,{activateProductModal:u,closeModalAndFetchLicenseInfo:function(){d(!1),G()},licenseInfo:p,currentPlanID:j,setActivateProductModal:d}),(0,b.jsx)(I,{isOpen:U,onClose:function(){V(!1)}})]})]})}},74440:function(e,t,n){"use strict";n(72791);var i=n(64554),a=n(29945),r=n(80184);t.Z=function(e){var t=e.email,n=void 0===t?"":t;return(0,r.jsxs)(i.Z,{sx:{height:"67px",color:"#ffffff",display:"flex",position:"relative",top:"-30px",left:"-32px",width:"calc(100% + 64px)",alignItems:"center",justifyContent:"space-between",backgroundColor:"#2781B0",padding:"0 25px 0 25px","& .registered-box, .reg-badge-box":{display:"flex",alignItems:"center",justifyContent:"flex-start"},"& .reg-badge-box":{marginLeft:"20px","& .min-icon":{fill:"#2781B0"}}},children:[(0,r.jsxs)(i.Z,{className:"registered-box",children:[(0,r.jsx)(i.Z,{sx:{fontSize:"16px",fontWeight:400},children:"Register status:"}),(0,r.jsxs)(i.Z,{className:"reg-badge-box",children:[(0,r.jsx)(a.SA,{}),(0,r.jsx)(i.Z,{sx:{fontWeight:600},children:"Registered"})]})]}),(0,r.jsxs)(i.Z,{className:"registered-acc-box",sx:{alignItems:"center",justifyContent:"flex-start",display:{sm:"flex",xs:"none"}},children:[(0,r.jsx)(i.Z,{sx:{fontSize:"16px",fontWeight:400},children:"Registered to:"}),(0,r.jsx)(i.Z,{sx:{marginLeft:"8px",fontWeight:600},children:n})]})]})}},18384:function(e,t,n){"use strict";var i=n(64836);t.Z=void 0;var a=i(n(45649)),r=n(80184),s=(0,a.default)((0,r.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckCircle");t.Z=s},45649:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i.createSvgIcon}});var i=n(28610)},95193:function(e,t,n){"use strict";var i;n.d(t,{Z:function(){return f}});var a=n(29439),r=n(72791),s=n(69120),l=n(33073),o=n(40162);function c(e,t,n,i,s){var l=r.useState((function(){return s&&n?n(e).matches:i?i(e).matches:t})),c=(0,a.Z)(l,2),u=c[0],d=c[1];return(0,o.Z)((function(){var t=!0;if(n){var i=n(e),a=function(){t&&d(i.matches)};return a(),i.addListener(a),function(){t=!1,i.removeListener(a)}}}),[e,n]),u}var u=(i||(i=n.t(r,2))).useSyncExternalStore;function d(e,t,n,i,s){var l=r.useCallback((function(){return t}),[t]),o=r.useMemo((function(){if(s&&n)return function(){return n(e).matches};if(null!==i){var t=i(e).matches;return function(){return t}}return l}),[l,e,i,s,n]),c=r.useMemo((function(){if(null===n)return[l,function(){return function(){}}];var t=n(e);return[function(){return t.matches},function(e){return t.addListener(e),function(){t.removeListener(e)}}]}),[l,n,e]),d=(0,a.Z)(c,2),f=d[0],x=d[1];return u(x,f,o)}function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(0,s.Z)(),i="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,a=(0,l.Z)({name:"MuiUseMediaQuery",props:t,theme:n}),r=a.defaultMatches,o=void 0!==r&&r,f=a.matchMedia,x=void 0===f?i?window.matchMedia:null:f,p=a.ssrMatchMedia,m=void 0===p?null:p,h=a.noSsr,b=void 0!==h&&h;var g="function"===typeof e?e(n):e;return g=g.replace(/^@media( ?)/m,""),(void 0!==u?d:c)(g,o,x,m,b)}},31260:function(e,t,n){"use strict";var i=n(78949);t.Z=i.Z},28610:function(e,t,n){"use strict";n.r(t),n.d(t,{capitalize:function(){return a.Z},createChainedFunction:function(){return r.Z},createSvgIcon:function(){return s.Z},debounce:function(){return l.Z},deprecatedPropType:function(){return o},isMuiElement:function(){return c.Z},ownerDocument:function(){return u.Z},ownerWindow:function(){return d.Z},requirePropFactory:function(){return f},setRef:function(){return x},unstable_ClassNameGenerator:function(){return Z},unstable_useEnhancedEffect:function(){return p.Z},unstable_useId:function(){return m.Z},unsupportedProp:function(){return h},useControlled:function(){return b.Z},useEventCallback:function(){return g.Z},useForkRef:function(){return v.Z},useIsFocusVisible:function(){return j.Z}});var i=n(55902),a=n(14036),r=n(31260),s=n(76189),l=n(83199);var o=function(e,t){return function(){return null}},c=n(19103),u=n(98301),d=n(17602);n(1413);var f=function(e,t){return function(){return null}},x=n(62971).Z,p=n(40162),m=n(67384);var h=function(e,t,n,i,a){return null},b=n(98278),g=n(89683),v=n(42071),j=n(23031),Z={configure:function(e){i.Z.configure(e)}}},19103:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var i=n(72791);var a=function(e,t){return i.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)}},78949:function(e,t,n){"use strict";function i(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce((function(e,t){return null==t?e:function(){for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];e.apply(this,i),t.apply(this,i)}}),(function(){}))}n.d(t,{Z:function(){return i}})},64836:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=4902.60586c70.chunk.js.map