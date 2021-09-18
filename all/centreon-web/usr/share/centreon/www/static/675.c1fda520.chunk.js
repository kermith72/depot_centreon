(self.webpackChunkname=self.webpackChunkname||[]).push([[675],{95477:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var a=r(22122),s=r(81253),n=r(67294),i=(r(45697),r(86010)),o=r(14670),c=r(93871),l=44,m=n.forwardRef((function(e,t){var r=e.classes,o=e.className,m=e.color,d=void 0===m?"primary":m,p=e.disableShrink,u=void 0!==p&&p,_=e.size,f=void 0===_?40:_,h=e.style,g=e.thickness,v=void 0===g?3.6:g,k=e.value,b=void 0===k?0:k,Z=e.variant,E=void 0===Z?"indeterminate":Z,y=(0,s.Z)(e,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),x={},C={},N={};if("determinate"===E||"static"===E){var D=2*Math.PI*((l-v)/2);x.strokeDasharray=D.toFixed(3),N["aria-valuenow"]=Math.round(b),x.strokeDashoffset="".concat(((100-b)/100*D).toFixed(3),"px"),C.transform="rotate(-90deg)"}return n.createElement("div",(0,a.Z)({className:(0,i.Z)(r.root,o,"inherit"!==d&&r["color".concat((0,c.Z)(d))],{determinate:r.determinate,indeterminate:r.indeterminate,static:r.static}[E]),style:(0,a.Z)({width:f,height:f},C,h),ref:t,role:"progressbar"},N,y),n.createElement("svg",{className:r.svg,viewBox:"".concat(22," ").concat(22," ").concat(l," ").concat(l)},n.createElement("circle",{className:(0,i.Z)(r.circle,u&&r.circleDisableShrink,{determinate:r.circleDeterminate,indeterminate:r.circleIndeterminate,static:r.circleStatic}[E]),style:x,cx:l,cy:l,r:(l-v)/2,fill:"none",strokeWidth:v})))}));const d=(0,o.Z)((function(e){return{root:{display:"inline-block"},static:{transition:e.transitions.create("transform")},indeterminate:{animation:"$circular-rotate 1.4s linear infinite"},determinate:{transition:e.transitions.create("transform")},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},svg:{display:"block"},circle:{stroke:"currentColor"},circleStatic:{transition:e.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},circleDeterminate:{transition:e.transitions.create("stroke-dashoffset")},"@keyframes circular-rotate":{"0%":{transformOrigin:"50% 50%"},"100%":{transform:"rotate(360deg)"}},"@keyframes circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}}),{name:"MuiCircularProgress",flip:!1})(m)},65333:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var a=r(67294),s=r(86010),n=r(41120),i=r(95477);const o=(0,n.Z)((()=>({alignCenter:{alignItems:"center",display:"grid",height:"100%",justifyContent:"center",width:"100%"}}))),c=({loading:e,children:t,loadingIndicatorSize:r,alignCenter:n=!0})=>{const c=o();return e?a.createElement("div",{className:(0,s.Z)({[c.alignCenter]:n})},a.createElement(i.Z,{size:r})):t}},75481:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var a=r(67294);const s=(0,r(41120).Z)((e=>({page:{backgroundColor:e.palette.common.white,padding:e.spacing(2,0)}}))),n=({children:e})=>{const t=s();return a.createElement("div",{className:t.page},e)}},91395:(e,t,r)=>{"use strict";r.d(t,{Z:()=>m});var a=r(67294),s=r(14494),n=r(94184),i=r.n(n),o=r(12971);const c={"progress-bar":"progress-bar__3ExoA","progress-bar-items":"progress-bar-items__19zW7","progress-bar-item":"progress-bar-item__1Bp7Q","progress-bar-link":"progress-bar-link__Db6pc",active:"active__1Rb7k",prev:"prev__9yZj4"};class l extends a.Component{constructor(){super(...arguments),this.goToPath=e=>{o.m.push(e)}}render(){const{links:e}=this.props;return a.createElement("div",{className:c["progress-bar"]},a.createElement("div",{className:c["progress-bar-wrapper"]},a.createElement("ul",{className:c["progress-bar-items"]},e?e.map((e=>a.createElement("li",{className:c["progress-bar-item"],key:e.path,onClick:this.goToPath.bind(this,e.path)},a.createElement("span",{className:i()(c["progress-bar-link"],{[c.active]:e.active},{[c.prev]:e.prevActive})},e.number)))):null)))}}const m=(0,s.connect)((()=>({})),{})(l)},8725:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var a=r(67294),s=r(94184),n=r.n(s),i=r(26793),o=r(65333),c=r(50455);const l=({formTitle:e,statusCreating:t,statusGenerating:r,error:s})=>{const{t:l}=(0,i.$)(),m=null===t||null===r,d=(!1===t||!1===r)&&s;return a.createElement("div",{className:n()(c.Z["form-wrapper"],c.Z.installation)},a.createElement("div",{className:c.Z["form-inner"]},a.createElement("div",{className:c.Z["form-heading"]},a.createElement("h2",{className:c.Z["form-title"]},e)),a.createElement("p",{className:c.Z["form-text"]},l("Creating Export Task"),a.createElement(o.Z,{alignCenter:!0,loading:m},a.createElement(a.Fragment,null,a.createElement("span",{className:n()(c.Z["form-status"],c.Z[t?"valid":"failed"])},null!=t?a.createElement("span",null,t?"[OK]":"[FAIL]"):"...")))),a.createElement("p",{className:c.Z["form-text"]},l("Generating Export Files"),a.createElement(o.Z,{alignCenter:!0,loading:m},a.createElement(a.Fragment,null,a.createElement("span",{className:n()(c.Z["form-status"],c.Z[r?"valid":"failed"])},null!=r?a.createElement("span",null,r?"[OK]":"[FAIL]"):"...")))),d&&a.createElement("span",{className:c.Z["form-error-message"]},s)))}},48675:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>m});var a=r(67294),s=r(91768),n=r(14494),i=r(8725),o=r(91395),c=r(75481);class l extends a.Component{constructor(){super(...arguments),this.state={generateStatus:null},this.links=[{active:!0,number:1,prevActive:!0},{active:!0,number:2,prevActive:!0},{active:!0,number:3,prevActive:!0},{active:!0,number:4}]}render(){const{links:e}=this,{pollerData:t,t:r}=this.props,{generateStatus:s}=this.state;return a.createElement(c.Z,null,a.createElement(o.Z,{links:e}),a.createElement(i.Z,{formTitle:`${r("Finalizing Setup")}:`,statusCreating:t.submitStatus,statusGenerating:s}))}}const m=(0,s.Z)()((0,n.connect)((({pollerForm:e})=>({pollerData:e})),{})(l))},50455:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});const a={"mb-2":"mb-2__3ziC8","list-unstyled":"list-unstyled__22dT_","half-opacity":"half-opacity__pVrav",hidden:"hidden__2MmTV","hidden-input":"hidden-input__17ABM",form:"form__2Eo40","form-wrapper":"form-wrapper__3Vj5F","invalid-feedback":"invalid-feedback__861fm",field__msg:"field__msg__2bkLY","css-1aya2g8":"css-1aya2g8__3Mj2-","css-2o5izw":"css-2o5izw__vgrW9",installation:"installation__2tyHH","form-text":"form-text__38UQT","form-status":"form-status__1Jizt",valid:"valid__TnZJh",failed:"failed__Pj07C","form-error-message":"form-error-message__3733_","form-group":"form-group__eh-xb","form-control":"form-control__1di15",select:"select__2p_Pd","form-heading":"form-heading__1HUPk","form-title":"form-title__3zm4r","form-item":"form-item__2fci6","form-buttons":"form-buttons__bCZYt",button:"button__OpHrr","custom-checkbox":"custom-checkbox__3HsKc","custom-radio":"custom-radio__3atRb","custom-control":"custom-control__10jfe","form-check-input":"form-check-input__3A16L","custom-control-input":"custom-control-input__lHvVk","custom-control-label":"custom-control-label__pOdWy","error-block":"error-block__1jL9V","css-10odw4q":"css-10odw4q__3s7Y1","css-1492t68":"css-1492t68__3OcCx","css-10nd86i":"css-10nd86i__3fhBC"}}}]);