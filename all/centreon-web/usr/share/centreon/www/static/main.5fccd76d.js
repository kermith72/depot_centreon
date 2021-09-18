!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("name",[],t):"object"==typeof exports?exports.name=t():e.name=t()}(self,(function(){return(self.webpackChunkname=self.webpackChunkname||[]).push([[179],{66791:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(9669),s=n.n(r);const a=e=>s().create({baseURL:`./api/${e}`})},71308:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(67294),s=n(41120),a=n(81445);const o=(0,s.Z)((()=>({skeletonContainer:{height:"100vh",width:"100%"}}))),i=()=>{const e=o();return r.createElement("div",{className:e.skeletonContainer},r.createElement(a.Z,{displayHeaderAndNavigation:!0}))}},14056:(e,t,n)=>{"use strict";n.r(t);var r=n(67294),s=(n(25054),n(15001),n(96023),n(67763),n(27484)),a=n.n(s),o=n(29387),i=n.n(o),c=n(70178),l=n.n(c),d=n(56176),u=n.n(d),p=n(14494),f=n(22338),y=n(24088),m=n(12338),E=n(65253),h=n(86458),w=n(47412),v=n(68718),b=n(33837),O=n(11063),_=n(18371),g=n(12971),T=n(71308);a().extend(u()),a().extend(l()),a().extend(i());const A=r.lazy((()=>Promise.all([n.e(480),n.e(922),n.e(541)]).then(n.bind(n,1061)))),R=(0,g.Z)(),P=()=>{const{user:e,setUser:t}=(0,_.useUser)(),{downtime:n,setDowntime:s}=(0,_.useDowntime)(),{refreshInterval:a,setRefreshInterval:o}=(0,_.useRefreshInterval)(),{actionAcl:i,setActionAcl:c}=(0,_.useAcl)(),[l,d]=r.useState(!1),{sendRequest:u}=(0,b.Z)({request:O.Yu}),{sendRequest:g}=(0,b.Z)({request:O.Yu}),{sendRequest:P}=(0,b.Z)({request:O.Yu}),{sendRequest:j}=(0,b.Z)({request:O.Yu});return r.useEffect((()=>{Promise.all([u("./api/beta/configuration/users/current/parameters"),g("./api/beta/administration/parameters"),P("./api/internal.php?object=centreon_i18n&action=translation"),j("./api/beta/users/acl/actions")]).then((([e,n,r,a])=>{t({alias:e.alias,locale:e.locale||"en",name:e.name,timezone:e.timezone}),s({default_duration:parseInt(n.monitoring_default_downtime_duration,10)}),o(parseInt(n.monitoring_default_refresh_interval,10)),c(a),(({retrievedUser:e,retrievedTranslations:t})=>{var n;const r=null===(n=e.locale||navigator.language)||void 0===n?void 0:n.slice(0,2);w.Z.use(v.Db).init({fallbackLng:"en",keySeparator:!1,lng:r,nsSeparator:!1,resources:(0,f.Z)(y.Z,(0,m.Z)(((e,[t,n])=>(0,E.Z)([e,{[t]:{translation:n}}])),{}))(t)})})({retrievedTranslations:r,retrievedUser:e}),d(!0)})).catch((e=>{(0,h.Z)(["response","status"],401)(e)&&(window.location.href="index.php?disconnect=1")}))}),[]),l?r.createElement(_.Context.Provider,{value:Object.assign(Object.assign({},e),{acl:{actions:i},downtime:n,refreshInterval:a})},r.createElement(p.Provider,{store:R},r.createElement(r.Suspense,{fallback:r.createElement(T.Z,null)},r.createElement(A,null)))):r.createElement(T.Z,null)};!function(){var e,t,r,s;e=this,t=void 0,s=function*(){window.React=yield Promise.all([n.e(38),n.e(480),n.e(888)]).then(n.t.bind(n,67294,19)),window.ReactDOM=window.ReactDom=yield Promise.all([n.e(38),n.e(480),n.e(888)]).then(n.t.bind(n,73935,19)),window.PropTypes=window.PropTypes=yield Promise.all([n.e(38),n.e(480),n.e(888)]).then(n.t.bind(n,45697,23)),window.ReactRouterDOM=window.ReactRouterDom=yield Promise.all([n.e(38),n.e(480),n.e(888)]).then(n.bind(n,73727)),window.ReactRedux=yield Promise.all([n.e(38),n.e(480),n.e(888)]).then(n.bind(n,14494)),window.ReduxForm=yield Promise.all([n.e(38),n.e(480),n.e(888)]).then(n.bind(n,85344)),window.ReactI18Next=yield Promise.all([n.e(38),n.e(480),n.e(888)]).then(n.bind(n,343)),window.CentreonUiContext=yield Promise.all([n.e(38),n.e(480),n.e(888)]).then(n.bind(n,18371)),window.ReactDOM.render(React.createElement(P,null),document.getElementById("root"))},new((r=void 0)||(r=Promise))((function(n,a){function o(e){try{c(s.next(e))}catch(e){a(e)}}function i(e){try{c(s.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,i)}c((s=s.apply(e,t||[])).next())}))}()},68507:(e,t,n)=>{"use strict";n.d(t,{n6:()=>s,bU:()=>a});var r=n(66791);const s="FETCH_EXTERNAL_COMPONENTS_SUCCESS",a=()=>e=>{return t=void 0,n=void 0,a=function*(){e(o());try{const{data:t}=yield(0,r.Z)("internal.php?object=centreon_frontend_component&action=components").get();e(i(t))}catch(t){e(c(t))}},new((s=void 0)||(s=Promise))((function(e,r){function o(e){try{c(a.next(e))}catch(e){r(e)}}function i(e){try{c(a.throw(e))}catch(e){r(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof s?n:new s((function(e){e(n)}))).then(o,i)}c((a=a.apply(t,n||[])).next())}));var t,n,s,a},o=()=>({type:"FETCH_EXTERNAL_COMPONENTS_BEGIN"}),i=e=>({data:e,type:s}),c=e=>({error:e,type:"FETCH_EXTERNAL_COMPONENTS_FAILURE"})},14319:(e,t,n)=>{"use strict";n.d(t,{dA:()=>s,pk:()=>a});var r=n(66791);const s="FETCH_NAVIGATION_SUCCESS",a=()=>e=>{return t=void 0,n=void 0,a=function*(){e(o());try{const{data:t}=yield(0,r.Z)("internal.php?object=centreon_topology&action=navigationList").get();e(i(t.result))}catch(t){e(c(t))}},new((s=void 0)||(s=Promise))((function(e,r){function o(e){try{c(a.next(e))}catch(e){r(e)}}function i(e){try{c(a.throw(e))}catch(e){r(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof s?n:new s((function(e){e(n)}))).then(o,i)}c((a=a.apply(t,n||[])).next())}));var t,n,s,a},o=()=>({type:"FETCH_NAVIGATION_BEGIN"}),i=e=>({items:e,type:s}),c=e=>({error:e,type:"FETCH_NAVIGATION_FAILURE"})},93784:(e,t,n)=>{"use strict";n.d(t,{t:()=>r,b:()=>s});const r="@poller/SET_POLLER_WIZARD_DATA",s=e=>({pollerData:e,type:r})},97445:(e,t,n)=>{"use strict";n.d(t,{Y:()=>r,m:()=>s});const r="@header/SET_REFRESH_INTERVALS",s=e=>({intervals:e,type:r})},12971:(e,t,n)=>{"use strict";n.d(t,{Z:()=>z,m:()=>Y});var r=n(90879),s=n(10810),a=n(81375),o=n(53894),i=n(30797),c=n(90071),l=n(34857),d=n(9669),u=n.n(d);const p="@axios/SET_AXIOS_DATA",f="@axios/FILE_UPLOAD_PROGRESS";function*y(){yield(0,l.ib)("@axios/GET_DATA",A)}function*m(){yield(0,l.ib)("@axios/POST_DATA",A)}function*E(){yield(0,l.ib)("@axios/PUT_DATA",A)}function*h(){yield(0,l.ib)("@axios/DELETE_DATA",A)}function*w(){yield(0,l.ib)("@axios/UPLOAD_DATA",g)}function*v(){yield(0,l.ib)("@axios/RESET_UPLOAD_PROGRESS_DATA",b)}function*b(e){try{yield(0,l.gz)({data:{reset:!0},type:f}),e.resolve()}catch(t){e.reject(t)}}const O=e=>{let t;const n=(0,i.GG)((e=>(t=e,()=>{})));return[(({files:e,url:t},n)=>{const r=new FormData;for(const t of e)r.append("file[]",t);const s={headers:{"Content-Type":"multipart/form-data"},onUploadProgress:n,withCredentials:!0};return u().post(t,r,s)})(e,(n=>{const{total:r,loaded:s}=n,a=Math.round(100*s/r);t({[e.fileIndex]:a}),100===a&&t(i.uR)})),n]};function*_(e){for(;;){const t=yield(0,l.qn)(e);yield(0,l.gz)({data:t,type:f})}}function*g(e){try{let t={result:{errors:[],successed:[]},status:!1};const n=yield(0,l.$6)(e.files.map(((t,n)=>(0,l.RE)(T,Object.assign(Object.assign({},e),{fileIndex:n,files:[t]})))));for(const e of n)e.result.errors&&(t={result:Object.assign(Object.assign({},t.result),{errors:[...t.result.errors,...e.result.errors]}),status:!0}),e.result.successed&&(t={result:Object.assign(Object.assign({},t.result),{successed:[...t.result.successed,...e.result.successed]}),status:!0});e.resolve(t)}catch(t){e.reject(t)}}function*T(e){const[t,n]=yield(0,l.RE)(O,e);yield(0,l.rM)(_,n);try{const e=yield(0,l.RE)((()=>t));return yield e.data}catch(e){throw e}}function*A(e){try{if(!e.requestType)throw new Error("Request type is required!");{let t=null;t="DELETE"===e.requestType?e.data?{data:e.data}:null:e.data?e.data:null;const n=yield u()[e.requestType.toLowerCase()](e.url,t||null),r=yield n.data,{propKey:s}=e;s&&(yield(0,l.gz)({data:r,propKey:s,type:p})),r?e.resolve(r):e.reject("No data in response")}}catch(t){e.reject(t)}}const R=function*(){yield(0,l.$6)([(0,l.rM)(y),(0,l.rM)(m),(0,l.rM)(E),(0,l.rM)(h),(0,l.rM)(w),(0,l.rM)(v)])};var P=n(92363),j=n(30496),x=n(93784);const C={},D=(e=C,t)=>{switch(t.type){case x.t:return Object.assign(Object.assign({},e),t.pollerData);default:return e}};var S=n(14319);const I={fetched:!1,items:[]},N=(e=I,t)=>{switch(t.type){case S.dA:return Object.assign(Object.assign({},e),{fetched:!0,items:t.items});case"@@router/LOCATION_CHANGE":const n=document.createEvent("CustomEvent");return n.initCustomEvent("react.href.update",!1,!1,{href:window.location.href}),window.dispatchEvent(n),e;default:return e}};var U=n(97445);const Z=(e={},t)=>{switch(t.type){case U.Y:return Object.assign(Object.assign({},e),t.intervals);default:return e}};var L=n(68507);const M={fetched:!1,hooks:{},pages:{}},q=(e=M,t)=>{switch(t.type){case L.n6:return Object.assign(Object.assign({},e),{fetched:!0,hooks:t.data.hooks,pages:t.data.pages});default:return e}},k={label:"",toggled:!1,x:0,y:0},F=(e=k,t)=>{const{data:n}=t;switch(t.type){case"@tooltip/UPDATE_TOOLTIP":return Object.assign(Object.assign({},e),n);default:return e}},G={fileUploadProgress:{}},H=(e=G,t)=>{switch(t.type){case p:return Object.assign(Object.assign({},e),{[t.propKey]:t.data});case f:return t.data.reset?Object.assign(Object.assign({},e),{fileUploadProgress:{}}):Object.assign(Object.assign({},e),{fileUploadProgress:Object.assign(Object.assign({},e.fileUploadProgress),t.data)});default:return e}},X=(0,i.ZP)(),Y=(0,c.lX)({basename:document.baseURI.replace(window.location.origin,"")}),z=(e={})=>{const t=[(0,s.Z)(Y),o.Z,a.Yo,X],n=("object"==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):r.qC)((0,r.md)(...t)),i=(0,r.MT)((c=Y,(0,r.UY)({externalComponents:q,form:j.Z,intervals:Z,navigation:N,pollerForm:D,remoteData:H,router:(0,P.iz)(c),tooltip:F})),e,n);var c;return X.run(R),i}}},e=>{"use strict";var t=t=>e(e.s=t);return e.O(0,[736],(()=>(t(26981),t(14056)))),e.O()}])}));