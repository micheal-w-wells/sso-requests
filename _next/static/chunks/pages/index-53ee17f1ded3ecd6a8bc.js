(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1170:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return W}});var r=t(5893),o=t(809),a=t.n(o),c=t(2447),u=t(7294),i=t(9008),s=t(9669),f=t.n(s),p=t(1752),l=(0,p.default)().publicRuntimeConfig.sso_url,d="".concat(l,"/.well-known/openid-configuration"),h={},v=function(){var e=(0,c.Z)(a().mark((function e(){var n,t,r,o,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f().get(d).then((function(e){return e.data}),(function(){return null}));case 2:n=e.sent,t=n.authorization_endpoint,r=n.token_endpoint,o=n.jwks_uri,c=n.userinfo_endpoint,Object.assign(h,{authorization_endpoint:t,token_endpoint:r,jwks_uri:o,userinfo_endpoint:c});case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=t(129),g=t.n(_),k=t(9227),w=function(e){if(!e)return null;var n=e.replace(/-/g,"+").replace(/_/g,"/"),t=atob(n),r=Array.from(t).reduce((function(e,n){var t=("00"+n.charCodeAt(0).toString(16)).slice(-2);return"".concat(e,"%").concat(t)}),""),o=decodeURIComponent(r);return JSON.parse(o)},x=function(e){if(!e)return null;var n=e.split("."),t=(0,k.Z)(n,3),r=(t[0],t[1]);t[2];return w(r)},b=function(e){if(!e)return null;var n=e.split("."),t=(0,k.Z)(n,3),r=t[0];t[1],t[2];return w(r)},m=function(){var e=new Uint32Array(28);crypto.getRandomValues(e);var n=[];return e.forEach((function(e){return n.push("0".concat(e.toString(16).substr(-2)))})),n.reduce((function(e,n){return"".concat(e).concat(n)}),"")},y=function(){var e=(0,c.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"SHA-256",t=new TextEncoder,r=t.encode(n),e.abrupt("return",crypto.subtle.digest("SHA-256",r));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),S=function(e){var n=new Uint8Array(e).reduce((function(e,n){return"".concat(e).concat(String.fromCharCode(n))}),"");return btoa(n).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")},j=(0,p.default)().publicRuntimeConfig,C=j.sso_client_id,Z=j.sso_authorization_scope,I=j.sso_authorization_response_type,R=j.sso_redirect_uri,E=j.sso_token_grant_type,N=function(){var e=(0,c.Z)(a().mark((function e(){var n,t,r,o,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=m(),sessionStorage.setItem("pkce_state",n),t=m(),sessionStorage.setItem("code_verifier",t),e.next=6,y(t);case 6:return r=e.sent,o=S(r),sessionStorage.setItem("code_challenge",o),c={client_id:C,response_type:I,redirect_uri:R,scope:Z,state:n,code_challenge_method:"S256",code_challenge:o},e.abrupt("return","".concat(h.authorization_endpoint,"?").concat(g().stringify(c,{encode:!1})));case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=(0,c.Z)(a().mark((function e(n){var t,r,o,c,u,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.code,r=n.state,sessionStorage.getItem("pkce_state")===r){e.next=4;break}return console.error("invalid state"),e.abrupt("return",null);case 4:return o=sessionStorage.getItem("code_verifier"),c={grant_type:E,client_id:C,redirect_uri:R,code:t,code_verifier:o},u="".concat(h.token_endpoint),i={url:u,method:"post",data:g().stringify(c)},e.abrupt("return",f()(i).then((function(e){return e.data}),console.error));case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),A=t(1166),J=(0,p.default)().publicRuntimeConfig.sso_client_id,z=function(){var e=(0,c.Z)(a().mark((function e(n){var t,r,o,c,u,i,s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(h.jwks_uri),e.next=3,f().get(t).then((function(e){return e.data}),console.error);case 3:if(r=e.sent,o=null===r||void 0===r?void 0:r.keys,c=b(n),void 0!==(u=o.find((function(e){return e.kid===c.kid})))){e.next=10;break}return console.error("public key not found in JWK jwks.json"),e.abrupt("return",!1);case 10:if(i=A.KZ.getKey(u),A.fs.jws.JWS.verifyJWT(n,i,{alg:["RS256"]})){e.next=15;break}return console.error("signature verification failed"),e.abrupt("return",!1);case 15:if(s=x(n),!(Date.now()>=1e3*s.exp)){e.next=19;break}return console.error("token expired"),e.abrupt("return",!1);case 19:if(0===s.aud.localeCompare(J)){e.next=23;break}return console.error("token was not issued for this audience"),e.abrupt("return",!1);case 23:return e.abrupt("return",s);case 24:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),U=(0,p.default)().publicRuntimeConfig.apiUrl,T=f().create({baseURL:"".concat(U,"/"),timeout:0,withCredentials:!0}),L="tokens";function H(){return K.apply(this,arguments)}function K(){return(K=(0,c.Z)(a().mark((function e(){var n,t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=JSON.parse(sessionStorage.getItem(L)||"")||{},t={headers:{Authorization:"Bearer ".concat(n.id_token)}},e.next=5,T.get("/api/info",t).then((function(e){return e.data}));case 5:return r=e.sent,e.abrupt("return",r);case 9:return e.prev=9,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}var P="tokens";function W(){var e=(0,u.useState)(null),n=e[0],t=e[1],o=(0,u.useState)(null),s=(o[0],o[1]);(0,u.useEffect)((function(){function e(){return(e=(0,c.Z)(a().mark((function e(){var n,r,o,c,u,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v();case 3:if(n=new URLSearchParams(window.location.search),r=n.get("code"),o=n.get("state")||"",!r){e.next=16;break}return e.next=9,O({code:r,state:o});case 9:return c=e.sent,e.next=12,z(c.id_token);case 12:e.sent&&(sessionStorage.setItem(P,JSON.stringify(c)),window.location.href="/"),e.next=26;break;case 16:return u=JSON.parse(sessionStorage.getItem(P)||""),e.next=19,z(u.id_token);case 19:if(!(i=e.sent)){e.next=24;break}return e.abrupt("return",t(i));case 24:sessionStorage.removeItem(P),f();case 26:e.next=31;break;case 28:e.prev=28,e.t0=e.catch(0),s(e.t0);case 31:case"end":return e.stop()}}),e,null,[[0,28]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var f=function(){var e=(0,c.Z)(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:n=e.sent,window.location.href=n;case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,c.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:sessionStorage.removeItem(P),window.location.reload();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,c.Z)(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H();case 2:n=e.sent,console.log(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:"SSO Requests"}),(0,r.jsx)("meta",{name:"description",content:"The request process workflow tool for the RedHat SSO Dev Exchange service"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)("main",{children:n?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("button",{type:"button",onClick:p,children:"Logout"}),(0,r.jsx)("button",{type:"button",onClick:l,children:"Info"})]}):(0,r.jsx)("button",{type:"button",onClick:f,children:"Login"})}),(0,r.jsx)("footer",{})]})}},5301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(1170)}])},4654:function(){}},function(e){e.O(0,[332,418,774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);