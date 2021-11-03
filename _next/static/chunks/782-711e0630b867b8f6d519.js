(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[782],{61408:function(e,n,t){"use strict";t.d(n,{W2:function(){return j},Kk:function(){return g},MO:function(){return y},ZP:function(){return w}});var r=t(85893),i=t(809),o=t.n(i),a=t(92447),s=t(27261),c=t(67294),u=t(11163),d=t(29163),l=t(17625),p=t(51436),f=t(37509),h=t(41340),x=t(30454);function v(){var e=(0,s.Z)(["\n  height: 40px;\n  border-right: 2px solid #e3e3e3;\n"]);return v=function(){return e},e}function m(){var e=(0,s.Z)(["\n  cursor: ",";\n  ","\n  ",";\n"]);return m=function(){return e},e}function b(){var e=(0,s.Z)(["\n  height: 100%;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  padding-right: 15px;\n"]);return b=function(){return e},e}var j=d.default.div(b()),g=(0,d.default)(l.G)(m(),(function(e){return e.disabled?"not-allowed":"pointer"}),(function(e){return e.disabled?"color: #CACACA;":"color: #777777;&:hover { color: ".concat(e.activeColor||"#137ac8","; }")}),(function(e){return e.isUnread?"color: ".concat(x.Uo):""})),y=d.default.div(v());function w(e){var n=e.selectedRequest,t=e.request,i=e.setSelectedId,s=e.setActiveTab,d=e.archived,l=void 0!==d&&d,v=(0,c.useContext)(f.RequestsContext),m=v.state,b=v.dispatch,w=(0,u.useRouter)(),Z=m.editingRequest,k=!l&&!["pr","planned","submitted"].includes((null===t||void 0===t?void 0:t.status)||""),q=function(){var e=(0,a.Z)(o().mark((function e(n){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.id&&k){e.next=2;break}return e.abrupt("return");case 2:window.location.hash="delete-modal";case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),C=function(){var e=(0,a.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s("data-changes"),t.hasUnreadNotifications=!1;case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=!l&&["draft","applied"].includes(t.status||"");return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(j,{children:[(0,r.jsx)(g,{disabled:!O,icon:p.Xcf,role:"button","aria-label":"edit",onClick:function(e){"draft"!==t.status?(s("configuration-url"),e.stopPropagation(),(null===n||void 0===n?void 0:n.id)===t.id?b((0,h.Xx)(!Z)):(b((0,h.Xx)(!0)),i(t.id))):w.push("/request/".concat(t.id))},title:"Edit"}),(0,r.jsx)(y,{}),(0,r.jsx)(g,{icon:p.Mzg,role:"button","aria-label":"view-events",onClick:C,activeColor:x.Uo,title:"Events",isUnread:null===t||void 0===t?void 0:t.hasUnreadNotifications}),(0,r.jsx)(y,{}),(0,r.jsx)(g,{icon:p.$aW,role:"button","aria-label":"delete",onClick:q,disabled:!k,activeColor:x.Uo,title:"Delete"})]})})}},25367:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var r=t(85893),i=t(27261),o=(t(67294),t(29163)),a=t(6434);function s(){var e=(0,i.Z)(["\n  margin-top: 20px;\n  max-height: calc(100vh - 250px);\n  overflow: auto;\n"]);return s=function(){return e},e}var c=o.default.div(s());function u(e){var n=e.events;return(0,r.jsx)(c,{children:n&&0!==n.length?n.map((function(e){return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("strong",{children:"Event Code: "}),e.eventCode]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("strong",{children:"Created Time: "}),(n=e.createdAt,new Date(n).toLocaleString())]}),e.idirUserDisplayName&&(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{children:[(0,r.jsx)("strong",{children:"Created By: "}),e.idirUserDisplayName]})}),e.details&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{children:(0,r.jsx)("strong",{children:"Details"})}),"request-update-success"===e.eventCode?(0,r.jsxs)(r.Fragment,{children:[(0,a.Sx)(e.details.changes),(0,r.jsx)("strong",{children:"Comment: "}),(0,r.jsx)("p",{children:e.details.comment})]}):(0,r.jsx)("pre",{children:(0,r.jsx)("code",{children:JSON.stringify(e.details||{},void 0,2)})})]}),(0,r.jsx)("hr",{})]},e.id);var n})):(0,r.jsx)("div",{children:"No events found"})})}},41340:function(e,n,t){"use strict";t.d(n,{zp:function(){return r},Xx:function(){return i},nd:function(){return o},iW:function(){return a}});var r=function(e){return{type:"setRequests",payload:e}},i=function(e){return{type:"setEditingRequest",payload:e}},o=function(e){return{type:"updateRequest",payload:e}},a=function(e){return{type:"deleteRequest",payload:e}}},23451:function(e,n,t){"use strict";var r=t(27261);function i(){var e=(0,r.Z)(["\n  width: 100%;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  text-align: left;\n  border-collapse: separate;\n  border-spacing: 0 5px;\n\n  & thead {\n    font-size: 12px;\n    color: #777777;\n  }\n\n  & tbody {\n    font-size: 16px;\n\n    tr {\n      height: 60px;\n      background-color: #f8f8f8;\n      &:hover {\n        background-color: #fff7d5;\n      }\n      &.active {\n        background-color: #ffed9f;\n      }\n    }\n  }\n\n  th:first-child,\n  td:first-child {\n    padding-left: 1em;\n  }\n\n  & th,\n  & td {\n    border: none;\n  }\n"]);return i=function(){return e},e}var o=t(29163).default.table(i());n.Z=o},37509:function(e,n,t){"use strict";t.r(n),t.d(n,{RequestsContext:function(){return ln},default:function(){return pn}});var r=t(85893),i=t(809),o=t.n(i),a=t(39227),s=t(92447),c=t(27261),u=t(67294),d=t(11163),l=t(17625),p=t(51436),f=t(64735),h=t(56841),x=t(96486),v=t(29163),m=t(6645),b=t(23451),j=t(83024),g=t(30454),y={shared:{button:"\n      border-radius: 0.222em;\n      border-width: 0;\n      padding: 0.6em 1.1em;\n      text-align: center;\n      text-decoration: none;\n      font-weight: 700;\n      letter-spacing: 1px;\n      display: inline-block;\n      cursor: pointer;\n      box-shadow: 0px 0px 0px 2px transparent inset, 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;\n    "},size:{xsmall:{button:"\n        font-size: 0.7rem;\n      "},small:{button:"\n        font-size: 0.8rem;\n      "},medium:{button:"\n        font-size: ".concat(g.n5,";\n      ")},large:{button:"\n        font-size: 1.2rem;\n      "}},variant:{primary:{button:"\n        background-color: #D5EDFF;\n        box-shadow: 0px 0px 0px 2px #D5EDFF inset !important;\n        color: #3E3E3E;\n\n        &:hover {\n          text-decoration: underline;\n          background-color: #FFF7D5;\n          box-shadow: 0px 0px 0px 2px #FFF7D5 inset !important;\n          opacity: 0.80;\n        }\n\n        &:active {\n          opacity: 1;\n        }\n      "},grey:{button:"\n        background-color: #B2B2B2;\n        box-shadow: 0px 0px 0px 1px #707070 inset !important;\n        color: #F8F8F8;\n        min-width: 110px;\n\n        &:hover {\n          background-color: ".concat(g.TU,";\n          box-shadow: 0px 0px 0px 1px #707070 inset !important;\n        }\n      ")}}},w=(0,j.applyTheme)(y,{defaultProps:{variant:"primary",size:"medium"},breakProps:[],staticProps:["fullHeight","fullWidth"]}),Z=t(40602),k=t(61408),q=t(26265);function C(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function O(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?C(Object(t),!0).forEach((function(n){(0,q.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):C(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var R=function(e,n){switch(n.type){case"setRequests":return O(O({},e),{},{requests:n.payload});case"setEditingRequest":return O(O({},e),{},{editingRequest:n.payload});case"updateRequest":var t=e.requests,r=null===t||void 0===t?void 0:t.map((function(e){return e.id===n.payload.id?n.payload:e}));return O(O({},e),{},{requests:r});case"deleteRequest":var i=e.requests,o=null===i||void 0===i?void 0:i.filter((function(e){return e.id!==n.payload}));return O(O({},e),{},{requests:o});default:return e}},F=t(45624),P=t(31607),D=t(70513),S=function(){var e=(0,s.Z)(o().mark((function e(n,t){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.e.post("installation",{requestId:n,environment:t}).then((function(e){return e.data}));case 3:return r=e.sent,e.abrupt("return",[r,null]);case 7:return e.prev=7,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",[null,e.t0]);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,t){return e.apply(this,arguments)}}(),I=function(e){return JSON.stringify(e,void 0,2)},E=function(e){var n=document.createElement("textarea");n.value=e,document.body.appendChild(n),n.focus(),n.select();try{return document.execCommand("copy"),document.body.removeChild(n),!0}catch(t){return document.body.removeChild(n),!1}},U=function(e,n){var t=window.URL.createObjectURL(new Blob([e],{type:"application/json"})),r=document.createElement("a");r.href=t,r.setAttribute("download",n),document.body.appendChild(r),r.click(),document.body.removeChild(r)},z=t(6434),N=t(25879);function A(){var e=(0,c.Z)(["\n  height: var(--field-top-spacing);\n"]);return A=function(){return e},e}function G(){var e=(0,c.Z)(["\n  color: #3e3e3e;\n  font-size: 14px;\n  font-weight: 700;\n"]);return G=function(){return e},e}function B(){var e=(0,c.Z)(["\n  color: #000;\n  font-size: ",";\n  font-weight: bold;\n"]);return B=function(){return e},e}function T(){var e=(0,c.Z)(["\n  text-align: center;\n"]);return T=function(){return e},e}var K=v.default.div(T()),L=v.default.span(B(),g.n5),M=v.default.span(G()),X=v.default.div(A()),J=(0,N.l)((function(e){var n=e.selectedRequest,t=e.alert,i=(0,u.useState)(!1),c=i[0],d=i[1],h=function(){var e=(0,s.Z)(o().mark((function e(t){var r,i,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,S(n.id,t);case 3:return r=e.sent,i=(0,a.Z)(r,2),s=i[0],i[1],d(!1),e.abrupt("return",s);case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),x=function(){var e=(0,s.Z)(o().mark((function e(n){var r,i,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(n);case 2:r=e.sent,E(I(r)),i=r?"success":"danger",a=r?"Installation copied to clipboard":"Failed to download installation",t.show({variant:i,fadeOut:1e4,closable:!0,content:a});case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,s.Z)(o().mark((function e(t){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(t);case 2:r=e.sent,U(I(r),"".concat(n.projectName,"-installation-").concat(t,".json"));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return c?(0,r.jsxs)(K,{children:[(0,r.jsx)(X,{}),(0,r.jsx)(P.Z,{type:"Grid",color:"#000",height:45,width:45,visible:!0})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(X,{}),(0,r.jsx)(f.ZP,{cols:4,children:(0,z.Dy)(n).map((function(e){return(0,r.jsxs)(u.Fragment,{children:[(0,r.jsxs)(f.ZP.Row,{collapse:"992",gutter:[],align:"center",children:[(0,r.jsx)(f.ZP.Col,{span:1,children:(0,r.jsx)(L,{children:e.display})}),(0,r.jsxs)(f.ZP.Col,{span:3,children:[(0,r.jsx)(w,{size:"medium",variant:"grey",onClick:function(){return x(e.name)},children:"Copy"}),"\xa0",(0,r.jsx)(w,{size:"medium",variant:"grey",onClick:function(){return v(e.name)},children:"Download"}),"\xa0\xa0",(0,r.jsx)(l.G,{color:"green",icon:p.f8k,title:"Ready"}),"\xa0",(0,r.jsx)(M,{children:"Ready"})]})]}),(0,r.jsx)("br",{})]},e.name)}))})]})})),W=t(17849),_=t(28835);function Y(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function H(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Y(Object(t),!0).forEach((function(n){(0,q.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Y(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var V=t(94679),$=t(3083),Q=t(1993),ee=t(41340);function ne(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function te(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ne(Object(t),!0).forEach((function(n){(0,q.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ne(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function re(){var e=(0,c.Z)(["\n  color: #000;\n  font-size: 1.1rem;\n"]);return re=function(){return e},e}function ie(){var e=(0,c.Z)(["\n  height: var(--field-top-spacing);\n"]);return ie=function(){return e},e}var oe=v.default.div(ie()),ae=v.default.span(re()),se=(0,N.l)((function(e){var n=e.selectedRequest,t=e.alert,i=(0,d.useRouter)(),c=(0,u.useState)(n),l=c[0],p=c[1],f=(0,u.useState)(!1),h=f[0],x=f[1],v=(0,u.useContext)(ln),b=v.state,j=v.dispatch,g=b.editingRequest,y=function(e){var n={type:"object",properties:{devValidRedirectUris:H({type:"array",title:"Development",items:_.Fp,additionalItems:_.Fp,default:[""],addItemText:"Add another URI"},_.ID)}};return e.includes("test")&&(n.properties.testValidRedirectUris={type:"array",title:"Test",items:_.Fp,additionalItems:_.Fp,default:[""],addItemText:"Add another URI"}),e.includes("prod")&&(n.properties.prodValidRedirectUris={type:"array",title:"Production",items:_.Fp,additionalItems:_.Fp,default:[""],addItemText:"Add another URI"}),n}(null===n||void 0===n?void 0:n.environments),w=function(){var e=(0,s.Z)(o().mark((function e(r){var s,c,u,d,l;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=te(te({},r.formData),{},{id:n.id}),x(!0),p(s),e.next=5,(0,m.WN)(s,!0);case 5:c=e.sent,u=(0,a.Z)(c,2),d=u[0],(l=u[1])?(p(n),t.show({variant:"info",fadeOut:1e4,closable:!0,content:(0,z.nU)(l).message})):(j((0,ee.nd)(d)),p(d),i.push({pathname:"/my-requests",query:{id:n.id,mode:"edit"}}),j((0,ee.Xx)(!1))),x(!1);case 11:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,r.jsx)(r.Fragment,{children:g?(0,r.jsx)(W.Z,{schema:y,ArrayFieldTemplate:$.Z,formData:l,disabled:h,onSubmit:w,liveValidate:!0,validate:V.M,children:(0,r.jsx)(Q.Z,{formSubmission:!0,show:!0,loading:h||!1,text:{continue:"Submit",back:"Cancel"},handleBackClick:function(){j((0,ee.Xx)(!1))}})}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(oe,{}),(0,z.Dy)(n).map((function(e){var t=n[(0,z.qD)(e.name)]||[];return(0,r.jsxs)(u.Fragment,{children:[(0,r.jsx)(ae,{children:e.display}),(0,r.jsx)("ul",{children:t.length>0?t.map((function(e){return(0,r.jsx)("li",{className:"url",children:e},e)})):(0,r.jsx)("li",{children:"No valid redirect URIs"})}),(0,r.jsx)("br",{})]},e.name)}))]})})})),ce=function(e){switch(e){case"draft":return"In Draft";case"applied":return"Completed";default:return"Submitted"}},ue=t(51479);function de(){var e=(0,c.Z)(["\n  color: #777777;\n  font-size: ",";\n  font-weight: bold;\n  min-height: 30px;\n  border-bottom: 1px solid #707070;\n  margin-bottom: 5px;\n  overflow: wrap;\n"]);return de=function(){return e},e}var le=v.default.h3(de(),g.CA),pe=t(74150);function fe(){var e=(0,c.Z)(["\n  font-size: ",";\n  color: "," !important;\n"]);return fe=function(){return e},e}var he=v.default.p(fe(),g.KN,g.we),xe=t(11752);function ve(){var e=(0,c.Z)(["\n  list-style-type: none;\n  margin: 0;\n  position: relative;\n\n  & li {\n    border-bottom: 1px solid #d4d4d4;\n    & svg.svg-inline--fa {\n      position: absolute;\n      right: 0;\n    }\n\n    & div.icon {\n      position: absolute;\n      right: 0;\n      bottom: 5px;\n    }\n  }\n"]);return ve=function(){return e},e}var me=v.default.ul(ve());function be(){var e=(0,c.Z)(["\n  margin-bottom: 10px;\n"]);return be=function(){return e},e}function je(){var e=(0,c.Z)(["\n  color: ",";\n"]);return je=function(){return e},e}function ge(){var e=(0,c.Z)(["\n  margin-top: 20px;\n  border-bottom: none;\n"]);return ge=function(){return e},e}function ye(){var e=(0,c.Z)(["\n  color: ",";\n  padding-right: 5px;\n"]);return ye=function(){return e},e}var we=((0,xe.default)()||{}).publicRuntimeConfig,Ze=(void 0===we?{}:we).app_env,ke=(0,v.default)(l.G)(ye(),g.UH),qe=(0,v.default)(le)(ge()),Ce=v.default.a(je(),g.nc),Oe=(0,v.default)(ue.Z)(be()),Re=function(e){switch(e){case"submitted":return 0;case"pr":return 33;case"planned":return 66;default:return 100}};function Fe(e){var n=e.selectedRequest,t=n.status,i=n.prNumber,o=n.updatedAt,a=n.realm,s=function(e){switch(e){case"prFailed":case"planFailed":case"applyFailed":return!0;default:return!1}}(t),c=function(e){switch(e){case"submitted":return"Process request submitted...";case"pr":return"Pull request created...";case"planned":return"Terraform plan succeeded...";case"prFailed":case"planFailed":case"applyFailed":return"An error has occurred";default:return""}}(t),u=new Date(o||"").toLocaleString(),d=(0,z.Jx)(a),f=[(0,r.jsxs)("li",{children:["Process request submitted",(0,r.jsx)(l.G,{icon:p.f8k,color:"#00C45B"})]},"1")],h=function(e){switch(e){case"submitted":return 0;case"pr":return 1;case"prFailed":return 2;case"planned":return 3;case"planFailed":return 4;case"applied":return 5;case"applyFailed":return 6;default:return 0}}(t);if(h<1)f.push((0,r.jsxs)("li",{children:["Pull request created",(0,r.jsx)(l.G,{icon:p.LM3,color:"#B2B2B2",spin:!0})]},"2"));else if(2===h)f.push((0,r.jsxs)("li",{children:["Pull request creation failed",(0,r.jsx)(l.G,{icon:p.nYk,color:"#FF0000"})]},"2"));else{var x="production"===Ze?"https://github.com/bcgov/sso-terraform/pull/".concat(i):"https://github.com/bcgov/sso-terraform-dev/pull/".concat(i);f.push((0,r.jsxs)("li",{children:["Pull request created (",(0,r.jsx)(pe.ZP,{external:!0,href:x,children:"link"}),")",(0,r.jsx)(l.G,{icon:p.f8k,color:"#00C45B"})]},"2"))}return h<3?f.push((0,r.jsxs)("li",{children:["Terraform plan succeeded",(0,r.jsx)(l.G,{icon:p.LM3,color:"#B2B2B2",spin:!0})]},"3")):4===h?f.push((0,r.jsxs)("li",{children:["Terraform plan failed",(0,r.jsx)(l.G,{icon:p.nYk,color:"#FF0000"})]},"3")):f.push((0,r.jsxs)("li",{children:["Terraform plan succeeded",(0,r.jsx)(l.G,{icon:p.f8k,color:"#00C45B"})]},"3")),h<5?f.push((0,r.jsxs)("li",{children:["Request processed",(0,r.jsx)(l.G,{icon:p.LM3,color:"#B2B2B2",spin:!0})]},"4")):6===h?f.push((0,r.jsxs)("li",{children:["Request failed",(0,r.jsx)(l.G,{icon:p.nYk,color:"#FF0000"})]},"4")):f.push((0,r.jsxs)("li",{children:["Request processed",(0,r.jsx)(l.G,{icon:p.f8k,color:"#00C45B"})]},"4")),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(le,{children:[(0,r.jsx)(ke,{icon:p.sqG}),"We are working on your request ",d&&"for your BCeID integration"," - Expected processing time is 20 mins"]}),(0,r.jsx)(qe,{children:c}),(0,r.jsx)(Oe,{now:Re(t),animated:!0,variant:s?"danger":void 0}),(0,r.jsxs)(he,{children:["Last updated at ",u]}),(0,r.jsx)(me,{children:f}),(0,r.jsx)("br",{}),(0,r.jsxs)("p",{children:["If there is an error or the process takes longer than 20 mins then, please contact our SSO support team by"," ",(0,r.jsx)(Ce,{href:"https://chat.developer.gov.bc.ca/channel/sso",target:"_blank",title:"Rocket Chat",children:"Rocket.Chat"})," ","or"," ",(0,r.jsx)(Ce,{href:"mailto:bcgov.sso@gov.bc.ca",title:"Pathfinder SSO",target:"blank",children:"Email us"})," "]})]})}var Pe=t(87522),De=t(98224),Se=t(25367);function Ie(e){var n=e.requestId,t=(0,u.useState)(!1),i=t[0],c=t[1],d=(0,u.useState)(!1),l=d[0],p=d[1],f=(0,u.useState)([]),h=f[0],x=f[1],v=function(){var e=(0,s.Z)(o().mark((function e(){var t,r,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return");case 2:return c(!0),e.next=5,(0,Pe.v)({requestId:n,eventCode:"request-update-success",clearNotifications:!0});case 5:t=e.sent,r=(0,a.Z)(t,2),i=r[0],r[1]?p(!0):i&&x(i.rows),c(!1);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,u.useEffect)((function(){v()}),[n]),l?(0,r.jsx)(F.ZP,{variant:"warning",content:"Failed to load details."}):i?(0,r.jsx)(De.Z,{}):(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(Se.Z,{events:h})})}var Ee=t(42881);function Ue(){var e=(0,c.Z)(["\n  .nav-link {\n    color: "," !important;\n    height: 30px !important;\n    font-size: "," !important;\n    font-weight: 600 !important;\n    padding-top: 0; !important;\n    border-top: unset !important;\n    border-left: unset !important;\n    border-right: unset !important;\n  }\n  .nav-link.active {\n    background-color: unset !important;\n    border-bottom: 3px solid orange;\n  }\n"]);return Ue=function(){return e},e}var ze=(0,v.default)(Ee.Z)(Ue(),g.we,g.CA);function Ne(){var e=(0,c.Z)(["\n  padding-left: 1rem;\n  padding-right: 1rem;\n"]);return Ne=function(){return e},e}var Ae=v.default.div(Ne());var Ge=function(e){var n=e.selectedRequest,t=e.defaultTabKey,i=e.setActiveKey,o=e.activeKey,a=void 0===o?t:o;if((0,u.useContext)(ln).dispatch,!n)return null;var s=n.status,c=ce(s||"draft"),d=null;return"In Draft"===c?d=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("br",{}),(0,r.jsxs)(F.ZP,{variant:"info",children:[(0,r.jsx)("div",{children:(0,r.jsx)("strong",{children:"Your request has not been submitted."})}),(0,r.jsx)("div",{children:'To complete your request, click "Edit" button.'})]})]}):"Submitted"===c?d=(0,r.jsx)(Fe,{selectedRequest:n}):"Completed"===c&&(d=(0,r.jsxs)(ze,{activeKey:a,onSelect:function(e){return i(e)},children:[(0,r.jsx)(h.Z,{eventKey:"installation-json",title:"Installation JSON",children:(0,r.jsx)(Ae,{children:(0,r.jsx)(J,{selectedRequest:n})})}),(0,r.jsx)(h.Z,{eventKey:"configuration-url",title:"Redirect URIs",children:(0,r.jsx)(Ae,{children:(0,r.jsx)(se,{selectedRequest:n})})}),(0,r.jsx)(h.Z,{eventKey:"data-changes",title:"Data Changes",children:(0,r.jsx)(Ae,{children:(0,r.jsx)(Ie,{requestId:n.id})})})]})),d},Be=t(98806),Te=t(69696),Ke=t(4826),Le=t(82401);function Me(){var e=(0,c.Z)(["\n  margin-top: 20px;\n  border-bottom: none;\n"]);return Me=function(){return e},e}function Xe(){var e=(0,c.Z)(["\n  height: ",";\n  width: ",";\n  line-height: ",";\n  border-radius: ",";\n  margin: ",";\n  margin-left: 0;\n  border: 2px solid #b3b3b3;\n"]);return Xe=function(){return e},e}var Je="15px",We=v.default.div(Xe(),Je,Je,Je,Je,"0"),_e=(0,v.default)(le)(Me());function Ye(e){e.request;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(_e,{children:"Expected processing time for prod"}),(0,r.jsxs)(me,{children:[(0,r.jsxs)("li",{children:["Introduction email submitted",(0,r.jsx)(l.G,{icon:p.f8k,color:"#00C45B"})]}),(0,r.jsxs)("li",{children:["Please reach out to IDIM if you do not hear back within the next 2-3 business days (",(0,r.jsx)(pe.ZP,{href:"mailto:IDIM.Consulting@gov.bc.ca",children:"IDIM.Consulting@gov.bc.ca"}),")",(0,r.jsx)(l.G,{icon:p.FU$,color:"#b3b3b3"})]}),(0,r.jsxs)("li",{children:["Access to prod",(0,r.jsx)(We,{className:"icon"})]})]})]})}function He(){var e=(0,c.Z)(["\n  text-align: center;\n  min-width: 100px;\n"]);return He=function(){return e},e}function Ve(){var e=(0,c.Z)(["\n  color: #006fc4;\n  height: 60px;\n  padding-left: 20px;\n  padding-top: 16px;\n  padding-bottom: 22px;\n  weight: 700;\n  background-color: #f8f8f8;\n"]);return Ve=function(){return e},e}function $e(){var e=(0,c.Z)(["\n  color: #a12622;\n  height: 60px;\n  padding-left: 20px;\n  padding-top: 16px;\n  padding-bottom: 22px;\n  weight: 700;\n  background-color: #f2dede;\n"]);return $e=function(){return e},e}function Qe(){var e=(0,c.Z)(["\n  overflow: auto;\n"]);return Qe=function(){return e},e}function en(){var e=(0,c.Z)(["\n  padding-right: 10px;\n"]);return en=function(){return e},e}function nn(){var e=(0,c.Z)(["\n  padding-left: 1rem;\n  padding-right: 1rem;\n"]);return nn=function(){return e},e}function tn(){var e=(0,c.Z)(["\n  margin-top: 20px;\n  display: flex;\n  justify-content: flex-end;\n  & button {\n    min-width: 150px;\n    margin-right: 20px;\n    display: inline-block;\n  }\n"]);return tn=function(){return e},e}var rn=[{maxWidth:900,marginTop:0,marginLeft:10,marginRight:10,marginUnit:"px",horizontalAlign:"none"},{width:480,marginTop:0,marginLeft:2.5,marginRight:2.5,marginUnit:"rem",horizontalAlign:"none"}],on=v.default.div(tn()),an=(v.default.div(nn()),(0,v.default)(l.G)(en())),sn=v.default.div(Qe()),cn=v.default.div($e()),un=v.default.div(Ve()),dn=v.default.th(He()),ln=u.createContext({});var pn=function(e){e.currentUser;var n,t=(0,d.useRouter)(),i=(0,u.useState)(!1),c=i[0],v=i[1],j=(0,u.useState)(!1),g=j[0],y=j[1],q=(0,u.useState)(void 0),C=q[0],O=q[1],F=(0,u.useReducer)(R,{}),D=F[0],S=F[1],I=(0,u.useState)(!1),E=I[0],U=I[1],N=D.requests,A=void 0===N?[]:N,G=A.find((function(e){return e.id===Number(C)})),B=!["pr","planned","submitted"].includes((null===G||void 0===G?void 0:G.status)||""),T=(0,u.useState)(!1),K=T[0],L=T[1],M=(0,u.useState)(D.editingRequest?"configuration-url":"installation-json"),X=M[0],J=M[1],W=(G||{}).realm,_=(0,z.Jx)(W),Y=(0,u.useMemo)((function(){return{state:D,dispatch:S}}),[D,S]),H=function(){var e=(0,s.Z)(o().mark((function e(){var n,r,i,s,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.next=3,(0,m.XJ)("all");case 3:n=e.sent,r=(0,a.Z)(n,2),i=r[0],r[1]?y(!0):(s=i||[],S((0,ee.zp)(s)),(c=t.query.id)&&O(Number(c))),v(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=(0,s.Z)(o().mark((function e(){var n,t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(B){e.next=2;break}return e.abrupt("return");case 2:return U(!0),e.next=5,(0,m.Jl)(C);case 5:n=e.sent,t=(0,a.Z)(n,2),t[0],t[1],S((0,ee.iW)(C||null)),U(!1),H(),window.location.hash="#";case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,u.useEffect)((function(){H()}),[]),(0,u.useEffect)((function(){return function(e){return e.some((function(e){return["submitted","pr","prFailed","planned","planFailed","approved","applyFailed"].includes(e.status||"")}))}(D.requests||[])&&(clearInterval(n),n=setInterval((0,s.Z)(o().mark((function e(){var t,r,i,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,m.XJ)("all");case 2:t=e.sent,r=(0,a.Z)(t,2),i=r[0],r[1]?clearInterval(n):((s=i||[]).map((function(e,n){return e.id===C?D.requests[n]:e})),D.editingRequest||S((0,ee.zp)(s)));case 7:case"end":return e.stop()}}),e)}))),5e3)),function(){n&&clearInterval(n)}}),[D.requests,D.editingRequest]);var $=function(){var e=(0,s.Z)(o().mark((function e(n){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(C!==n.id){e.next=2;break}return e.abrupt("return");case 2:O(null===n||void 0===n?void 0:n.id),S((0,ee.Xx)(!1));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),Q=function(){var e=(0,s.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.push("/request");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(c)return(0,r.jsx)(De.Z,{});var ne=null;return ne=g?(0,r.jsxs)(cn,{children:[(0,r.jsx)(l.G,{icon:p.RLE,title:"Unavailable"}),"\xa0 The system is unavailable at this moment. please refresh the page."]}):0===A.length?(0,r.jsxs)(un,{children:[(0,r.jsx)(l.G,{icon:p.sqG,title:"Information"}),"\xa0 No requests submitted"]}):(0,r.jsxs)(b.Z,{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Request ID"}),(0,r.jsx)("th",{children:"Project Name"}),(0,r.jsx)("th",{children:"Status"}),(0,r.jsx)(dn,{children:"Actions"})]})}),(0,r.jsx)("tbody",{children:A.filter((function(e){return K===e.archived})).map((function(e){return(0,r.jsxs)("tr",{className:(null===G||void 0===G?void 0:G.id)===e.id?"active":"",onClick:function(){return $(e)},children:[(0,r.jsx)("td",{children:(0,x.padStart)(String(e.id),8,"0")}),(0,r.jsx)("td",{children:e.projectName}),(0,r.jsx)("td",{children:ce(e.status||"draft")}),(0,r.jsx)("td",{children:(0,r.jsx)(k.ZP,{request:e,selectedRequest:G,setSelectedId:O,setActiveTab:J,archived:e.archived})})]},e.id)}))})]}),(0,r.jsxs)(Z.Z,{rules:rn,children:[(0,r.jsx)(w,{size:"medium",onClick:Q,children:"+ Request Integration"}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsxs)(ln.Provider,{value:Y,children:[(0,r.jsx)(f.ZP,{cols:10,children:(0,r.jsxs)(f.ZP.Row,{collapse:"1100",gutter:[15,2],children:[(0,r.jsx)(f.ZP.Col,{span:6,children:(0,r.jsxs)(sn,{children:[(0,r.jsxs)(ze,{onSelect:function(e){return L("archived"===e)},children:[(0,r.jsx)(h.Z,{eventKey:"active",title:"My Dashboard"}),(0,r.jsx)(h.Z,{eventKey:"archived",title:"Archived"})]}),ne]})}),G&&(0,r.jsxs)(f.ZP.Col,{span:4,children:[(0,r.jsx)(Ge,{selectedRequest:G,defaultTabKey:X,setActiveKey:J,activeKey:X},G.id+G.status+D.editingRequest),_&&(0,r.jsx)(Ye,{request:G})]})]})}),(0,r.jsxs)(Be.Z,{id:"delete-modal",children:[(0,r.jsxs)(Te.ZP.Header,{children:[(0,r.jsx)(an,{icon:p.eHv,title:"Information",size:"2x",style:{paddingRight:"10px"}}),"Confirm Deletion"]}),(0,r.jsxs)(Te.ZP.Content,{children:["You are about to delete this integration request. This action cannot be undone.",(0,r.jsxs)(on,{children:[(0,r.jsx)(Le.Z,{variant:"secondary",onClick:function(){return window.location.hash="#"},children:"Cancel"}),(0,r.jsx)(Ke.ZP,{onClick:V,children:E?(0,r.jsx)(P.Z,{type:"Grid",color:"#FFF",height:18,width:50,visible:!0}):"Delete"})]})]})]})]})]})}},87522:function(e,n,t){"use strict";t.d(n,{v:function(){return s}});var r=t(809),i=t.n(r),o=t(92447),a=t(70513),s=function(){var e=(0,o.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.e.post("events",n).then((function(e){return e.data}));case 3:return t=e.sent,e.abrupt("return",[t,null]);case 7:return e.prev=7,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",[null,e.t0]);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}()}}]);