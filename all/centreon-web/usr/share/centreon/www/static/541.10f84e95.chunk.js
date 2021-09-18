(self.webpackChunkname=self.webpackChunkname||[]).push([[541],{1061:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Pe});var a=n(67294),r=n(14494),s=n(92363),o=n(7206),i=n(17563),l=n(87623),c=n(14670),u=n(89392),m=n(94184),d=n.n(m),h=n(62728),p=n(97445),g=n(66791),b=n(99349),f=n(45697),_=n.n(f),w=n(91768),E=n(5977),v=n(21936),Z=n(92189);const k=(e,t)=>e&&0!==e.length&&e[t]?e[t].warning?"orange":e[t].critical?"red":"green":"green";class y extends a.Component{constructor(){super(...arguments),this.pollerService=(0,g.Z)("internal.php?object=centreon_topcounter&action=pollersListIssues"),this.refreshInterval=null,this.state={data:null,intervalApplied:!1,toggled:!1},this.getData=()=>{this.pollerService.get().then((({data:e})=>{this.setState({data:e})})).catch((e=>{e.response&&401===e.response.status&&this.setState({data:null})}))},this.UNSAFE_componentWillReceiveProps=e=>{const{refreshTime:t}=e,{intervalApplied:n}=this.state;t&&!n&&(this.getData(),this.refreshInterval=setInterval((()=>{this.getData()}),t),this.setState({intervalApplied:!0}))},this.toggle=()=>{const{toggled:e}=this.state;this.setState({toggled:!e})},this.closeSubmenu=()=>{this.setState({toggled:!1}),this.props.history.push("/main.php?p=60901")},this.handleClick=e=>{this.poller&&!this.poller.contains(e.target)&&this.setState({toggled:!1})}}componentDidMount(){window.addEventListener("mousedown",this.handleClick,!1)}componentWillUnmount(){window.removeEventListener("mousedown",this.handleClick,!1),clearInterval(this.refreshInterval)}render(){const{data:e,toggled:t}=this.state;if(!e)return a.createElement(Z.Z,null);const{allowedPages:n,t:r}=this.props,s=n.includes("60901"),o=(e=>t=>{const n=k(t,"database"),r=k(t,"latency");return a.createElement(a.Fragment,null,a.createElement("span",{className:d()(b.Z["wrap-left-icon"],b.Z.round,b.Z[n])},a.createElement("span",{className:d()(b.Z.iconmoon,b.Z["icon-database"]),title:e("green"===n?"OK: all database poller updates are active":"Some database poller updates are not active; check your configuration")})),a.createElement("span",{className:d()(b.Z["wrap-left-icon"],b.Z.round,b.Z[r])},a.createElement("span",{className:d()(b.Z.iconmoon,b.Z["icon-clock"]),title:e("green"===r?"OK: no latency detected on your platform":"Latency detected, check configuration for better optimization")})))})(r)(e.issues);return a.createElement("div",{className:d()(b.Z["wrap-left-pollers"],{[b.Z["submenu-active"]]:t}),ref:e=>this.poller=e},o,a.createElement("div",null,a.createElement("span",{className:d()(b.Z["wrap-left-icon"],b.Z.pollers),onClick:this.toggle},a.createElement("span",{className:d()(b.Z.iconmoon,b.Z["icon-poller"])}),a.createElement("span",{className:b.Z["wrap-left-icon__name"]},r("Pollers"))),a.createElement("span",{className:b.Z["toggle-submenu-arrow"],onClick:this.toggle},this.props.children)),a.createElement("div",{className:d()(b.Z.submenu,b.Z.pollers)},a.createElement("div",{className:b.Z["submenu-content"]},a.createElement("ul",{className:d()(b.Z["submenu-items"],b.Z["list-unstyled"])},a.createElement("li",{className:b.Z["submenu-item"]},a.createElement("span",{className:b.Z["submenu-item-link"]},r("All pollers"),a.createElement("span",{className:b.Z["submenu-count"]},e.total?e.total:"..."))),e.issues?Object.entries(e.issues).map((([e,t])=>{let n="";return"database"===e?n=r("Database updates not active"):"stability"===e?n=r("Pollers not running"):"latency"===e&&(n=r("Latency detected")),a.createElement("li",{className:b.Z["submenu-top-item"],key:e},a.createElement("span",{className:b.Z["submenu-top-item-link"]},n,a.createElement("span",{className:b.Z["submenu-top-count"]},t.total?t.total:"...")),Object.entries(t).map((([e,t])=>t.poller?t.poller.map((t=>{let n="red";return"warning"===e&&(n="orange"),a.createElement("span",{className:b.Z["submenu-top-item-link"],key:t.name,style:{padding:"0px 16px 17px"}},a.createElement("span",{className:d()(b.Z["dot-colored"],b.Z[n])},t.name))})):null)))})):null,s&&a.createElement("button",{className:d()(b.Z.btn,b.Z["btn-big"],b.Z["btn-green"],b.Z["submenu-top-button"]),onClick:this.closeSubmenu},r("Configure pollers")))),a.createElement("div",{className:b.Z["submenu-padding"]})))}}const C=(0,E.EN)((0,w.Z)()((0,r.connect)((e=>({allowedPages:(0,v.j)(e),refreshTime:!!e.intervals&&1e3*parseInt(e.intervals.AjaxTimeReloadStatistic)})),{})(y)));y.propTypes={allowedPages:_().arrayOf(_().string).isRequired,refreshTime:_().oneOfType([_().number,_().bool]).isRequired};var N=n(73727),T=n(41120),S=n(22318),I=n(2302);const x=(0,T.Z)((e=>({dateTime:{color:e.palette.common.white}}))),A=()=>{const e=x(),t=a.useRef(),[n,r]=a.useState({date:"",time:""}),{format:s,toTime:o}=(0,I.ZP)(),i=()=>{const e=new Date,t=s({date:e,formatString:"LL"}),n=o(e);r({date:t,time:n})};a.useEffect((()=>(i(),t.current=window.setInterval(i,3e4),()=>{clearInterval(t.current)})),[]);const{date:l,time:c}=n;return a.createElement("div",{className:e.dateTime},a.createElement(S.Z,{variant:"body2"},l),a.createElement(S.Z,{variant:"body1"},c))};class R extends a.Component{constructor(){super(...arguments),this.userService=(0,g.Z)("internal.php?object=centreon_topcounter&action=user"),this.refreshTimeout=null,this.state={copied:!1,data:null,toggled:!1},this.getData=()=>{this.userService.get().then((({data:e})=>{this.setState({data:e},this.refreshData)})).catch((e=>{e.response&&401===e.response.status&&this.setState({data:null})}))},this.refreshData=()=>{clearTimeout(this.refreshTimeout),this.refreshTimeout=setTimeout((()=>{this.getData()}),6e4)},this.toggle=()=>{const{toggled:e}=this.state;this.setState({toggled:!e})},this.onCopy=()=>{this.autologinNode.select(),window.document.execCommand("copy"),this.setState({copied:!0})},this.handleClick=e=>{this.profile&&!this.profile.contains(e.target)&&this.setState({toggled:!1})}}componentDidMount(){window.addEventListener("mousedown",this.handleClick,!1),this.getData()}componentWillUnmount(){window.removeEventListener("mousedown",this.handleClick,!1),clearTimeout(this.refreshTimeout)}render(){const{data:e,toggled:t,copied:n}=this.state;if(!e)return a.createElement(Z.Z,{width:21});const{allowedPages:r,t:s}=this.props,o=r.includes("50104"),{fullname:i,username:l,autologinkey:c}=e,u=`${window.location.href+(window.location.search?"&":"?")}autologin=1&useralias=${l}&token=${c}`;return a.createElement("div",{className:d()(b.Z["wrap-right-user"],{[b.Z["submenu-active"]]:t})},a.createElement(A,null),a.createElement("div",{ref:e=>this.profile=e},a.createElement("span",{className:d()(b.Z.iconmoon,b.Z["icon-user"]),onClick:this.toggle}),a.createElement("div",{className:d()(b.Z.submenu,b.Z.profile)},a.createElement("div",{className:b.Z["submenu-inner"]},a.createElement("ul",{className:d()(b.Z["submenu-items"],b.Z["list-unstyled"])},a.createElement("li",{className:b.Z["submenu-item"]},a.createElement("span",{className:b.Z["submenu-item-link"]},a.createElement("span",{className:b.Z["submenu-user-name"]},i),a.createElement("span",{className:b.Z["submenu-user-type"]},s("as"),` ${l}`),o&&a.createElement(N.Link,{className:b.Z["submenu-user-edit"],to:"/main.php?p=50104&o=c",onClick:this.toggle},s("Edit profile")))),c&&a.createElement("div",{className:b.Z["submenu-content"]},a.createElement("button",{className:b.Z["submenu-user-button"],onClick:this.onCopy},s("Copy autologin link"),a.createElement("span",{className:d()(b.Z["btn-logout-icon"],b.Z[n?"icon-copied":"icon-copy"])})),a.createElement("textarea",{className:b.Z["hidden-input"],id:"autologin-input",ref:e=>this.autologinNode=e,value:u}))),a.createElement("div",{className:b.Z["submenu-content"]},a.createElement("a",{className:b.Z.logoutLink,href:"index.php?disconnect=1"},a.createElement("button",{className:d()(b.Z.btn,b.Z["btn-small"],b.Z.logout)},s("Logout"))))))))}}const L=(0,w.Z)()((0,r.connect)((e=>({allowedPages:(0,v.j)(e)})),{})(R));var D=n(19501),O=n(92077),j=n.n(O),P=n(67715),U=n(571),W=n(77701),$=n(8782),F=n(7313),M=n(85266);const q={name:"resource_types",value:[{id:"host",name:"Host"}]},H={name:"resource_types",value:[{id:"service",name:"Service"}]},z=e=>({name:"statuses",value:[e]}),G=z({id:"DOWN",name:"Down"}),J=z({id:"UNREACHABLE",name:"Unreachable"}),V=z({id:"UP",name:"Up"}),B=z({id:"PENDING",name:"Pending"}),K=z({id:"CRITICAL",name:"Critical"}),Y=z({id:"WARNING",name:"Warning"}),Q=z({id:"UNKNOWN",name:"Unknown"}),X=z({id:"OK",name:"Ok"}),ee={name:"states",value:[{id:"unhandled_problems",name:"Unhandled"}]},te=({resourceTypeCriterias:e,statusCriterias:t,stateCriterias:n})=>{const a={criterias:[e,t,n,{name:"search",value:""}]};return`/monitoring/resources?filter=${JSON.stringify(a)}&fromTopCounter=true`},ne=({statusCriterias:e={name:"statuses",value:[]},stateCriterias:t={name:"states",value:[]}}={})=>te({resourceTypeCriterias:q,stateCriterias:t,statusCriterias:e}),ae=({statusCriterias:e={name:"statuses",value:[]},stateCriterias:t={name:"states",value:[]}}={})=>te({resourceTypeCriterias:H,stateCriterias:t,statusCriterias:e}),re=D.Rx().required().integer(),se=D.Ry().shape({down:D.Ry().shape({total:re,unhandled:re}),ok:re,pending:re,refreshTime:re,total:re,unreachable:D.Ry().shape({total:re,unhandled:re})});class oe extends a.Component{constructor(){super(...arguments),this.hostsService=(0,g.Z)("internal.php?object=centreon_topcounter&action=hosts_status"),this.refreshInterval=null,this.state={data:null,intervalApplied:!1,toggled:!1},this.getData=()=>{this.hostsService.get().then((({data:e})=>{se.validate(e).then((()=>{this.setState({data:e})}))})).catch((e=>{e.response&&401===e.response.status&&this.setState({data:null})}))},this.UNSAFE_componentWillReceiveProps=e=>{const{refreshTime:t}=e,{intervalApplied:n}=this.state;t&&!n&&(this.getData(),this.refreshInterval=setInterval((()=>{this.getData()}),t),this.setState({intervalApplied:!0}))},this.toggle=()=>{const{toggled:e}=this.state;this.setState({toggled:!e})},this.handleClick=e=>{this.host&&!this.host.contains(e.target)&&this.setState({toggled:!1})}}componentDidMount(){window.addEventListener("mousedown",this.handleClick,!1)}componentWillUnmount(){window.removeEventListener("mousedown",this.handleClick,!1),clearInterval(this.refreshInterval)}render(){const{data:e,toggled:t}=this.state,{t:n}=this.props;return e?a.createElement("div",{className:`${b.Z.wrapper} wrap-right-hosts`,ref:e=>this.host=e},a.createElement(P.Z,{active:t,submenuType:"top"},a.createElement(U.Z,{iconName:n("Hosts"),iconType:"hosts",onClick:this.toggle},e.pending>0&&a.createElement("span",{className:b.Z["custom-icon"]})),a.createElement(N.Link,{className:d()(b.Z.link,b.Z["wrap-middle-icon"]),to:ne({stateCriterias:ee,statusCriterias:G})},a.createElement(W.Z,{iconColor:"red",iconNumber:a.createElement("span",{id:"count-host-down"},j()(e.down.unhandled).format("0a")),iconType:e.down.unhandled>0?"colored":"bordered"})),a.createElement(N.Link,{className:d()(b.Z.link,b.Z["wrap-middle-icon"]),to:ne({stateCriterias:ee,statusCriterias:J})},a.createElement(W.Z,{iconColor:"gray-dark",iconNumber:a.createElement("span",{id:"count-host-unreachable"},j()(e.unreachable.unhandled).format("0a")),iconType:e.unreachable.unhandled>0?"colored":"bordered"})),a.createElement(N.Link,{className:d()(b.Z.link,b.Z["wrap-middle-icon"]),to:ne({statusCriterias:V})},a.createElement(W.Z,{iconColor:"green",iconNumber:a.createElement("span",{id:"count-host-up"},j()(e.ok).format("0a")),iconType:e.ok>0?"colored":"bordered"})),a.createElement($.Z,{iconType:"arrow",ref:this.setWrapperRef,rotate:t,onClick:this.toggle}),a.createElement("div",{className:d()(b.Z["submenu-toggle"],{[b.Z["submenu-toggle-active"]]:t})},a.createElement(F.Z,null,a.createElement(N.Link,{className:b.Z.link,to:ne(),onClick:this.toggle},a.createElement(M.Z,{submenuCount:j()(e.total).format(),submenuTitle:n("All")})),a.createElement(N.Link,{className:b.Z.link,to:ne({stateCriterias:ee,statusCriterias:G}),onClick:this.toggle},a.createElement(M.Z,{dotColored:"red",submenuCount:`${j()(e.down.unhandled).format("0a")}/${j()(e.down.total).format("0a")}`,submenuTitle:n("Down")})),a.createElement(N.Link,{className:b.Z.link,to:ne({stateCriterias:ee,statusCriterias:J}),onClick:this.toggle},a.createElement(M.Z,{dotColored:"gray",submenuCount:`${j()(e.unreachable.unhandled).format("0a")}/${j()(e.unreachable.total).format("0a")}`,submenuTitle:n("Unreachable")})),a.createElement(N.Link,{className:b.Z.link,to:ne({statusCriterias:V}),onClick:this.toggle},a.createElement(M.Z,{dotColored:"green",submenuCount:j()(e.ok).format(),submenuTitle:n("Up")})),a.createElement(N.Link,{className:b.Z.link,to:ne({statusCriterias:B}),onClick:this.toggle},a.createElement(M.Z,{dotColored:"blue",submenuCount:j()(e.pending).format(),submenuTitle:n("Pending")})))))):a.createElement(Z.Z,{width:27})}}const ie=(0,w.Z)()((0,r.connect)((({intervals:e})=>({refreshTime:!!e&&1e3*parseInt(e.AjaxTimeReloadMonitoring)})),{})(oe));oe.propTypes={refreshTime:_().oneOfType([_().number,_().bool]).isRequired};const le=D.Rx().required().integer(),ce=D.Ry().shape({critical:D.Ry().shape({total:le,unhandled:le}),ok:le,pending:le,refreshTime:le,total:le,unknown:D.Ry().shape({total:le,unhandled:le}),warning:D.Ry().shape({total:le,unhandled:le})});class ue extends a.Component{constructor(){super(...arguments),this.servicesStatusService=(0,g.Z)("internal.php?object=centreon_topcounter&action=servicesStatus"),this.refreshInterval=null,this.state={data:null,intervalApplied:!1,toggled:!1},this.getData=()=>{this.servicesStatusService.get().then((({data:e})=>{ce.validate(e).then((()=>{this.setState({data:e})}))})).catch((e=>{e.response&&401===e.response.status&&this.setState({data:null})}))},this.UNSAFE_componentWillReceiveProps=e=>{const{refreshTime:t}=e,{intervalApplied:n}=this.state;t&&!n&&(this.getData(),this.refreshInterval=setInterval((()=>{this.getData()}),t),this.setState({intervalApplied:!0}))},this.toggle=()=>{const{toggled:e}=this.state;this.setState({toggled:!e})},this.handleClick=e=>{this.service&&!this.service.contains(e.target)&&this.setState({toggled:!1})}}componentDidMount(){window.addEventListener("mousedown",this.handleClick,!1)}componentWillUnmount(){window.removeEventListener("mousedown",this.handleClick,!1),clearInterval(this.refreshInterval)}render(){const{data:e,toggled:t}=this.state,{t:n}=this.props;return e?a.createElement("div",{className:`${b.Z.wrapper} wrap-right-services`,ref:e=>this.service=e},a.createElement(P.Z,{active:t,submenuType:"top"},a.createElement(U.Z,{iconName:n("Services"),iconType:"services",onClick:this.toggle},e.pending>0&&a.createElement("span",{className:b.Z["custom-icon"]})),a.createElement(N.Link,{className:d()(b.Z.link,b.Z["wrap-middle-icon"]),to:ae({stateCriterias:ee,statusCriterias:K})},a.createElement(W.Z,{iconColor:"red",iconNumber:a.createElement("span",{id:"count-svc-critical"},j()(e.critical.unhandled).format("0a")),iconType:e.critical.unhandled>0?"colored":"bordered"})),a.createElement(N.Link,{className:d()(b.Z.link,b.Z["wrap-middle-icon"]),to:ae({stateCriterias:ee,statusCriterias:Y})},a.createElement(W.Z,{iconColor:"orange",iconNumber:a.createElement("span",{id:"count-svc-warning"},j()(e.warning.unhandled).format("0a")),iconType:e.warning.unhandled>0?"colored":"bordered"})),a.createElement(N.Link,{className:d()(b.Z.link,b.Z["wrap-middle-icon"]),to:ae({stateCriterias:ee,statusCriterias:Q})},a.createElement(W.Z,{iconColor:"gray-light",iconNumber:a.createElement("span",{id:"count-svc-unknown"},j()(e.unknown.unhandled).format("0a")),iconType:e.unknown.unhandled>0?"colored":"bordered"})),a.createElement(N.Link,{className:d()(b.Z.link,b.Z["wrap-middle-icon"]),to:ae({statusCriterias:X})},a.createElement(W.Z,{iconColor:"green",iconNumber:a.createElement("span",{id:"count-svc-ok"},j()(e.ok).format("0a")),iconType:e.ok>0?"colored":"bordered"})),a.createElement($.Z,{iconType:"arrow",ref:this.setWrapperRef,rotate:t,onClick:this.toggle}),a.createElement("div",{className:d()(b.Z["submenu-toggle"],{[b.Z["submenu-toggle-active"]]:t})},a.createElement(F.Z,null,a.createElement(N.Link,{className:b.Z.link,to:ae(),onClick:this.toggle},a.createElement(M.Z,{submenuCount:j()(e.total).format(),submenuTitle:n("All")})),a.createElement(N.Link,{className:b.Z.link,to:ae({stateCriterias:ee,statusCriterias:K}),onClick:this.toggle},a.createElement(M.Z,{dotColored:"red",submenuCount:`${j()(e.critical.unhandled).format()}/${j()(e.critical.total).format()}`,submenuTitle:n("Critical")})),a.createElement(N.Link,{className:b.Z.link,to:ae({stateCriterias:ee,statusCriterias:Y}),onClick:this.toggle},a.createElement(M.Z,{dotColored:"orange",submenuCount:`${j()(e.warning.unhandled).format()}/${j()(e.warning.total).format()}`,submenuTitle:n("Warning")})),a.createElement(N.Link,{className:b.Z.link,to:ae({stateCriterias:ee,statusCriterias:Q}),onClick:this.toggle},a.createElement(M.Z,{dotColored:"gray",submenuCount:`${j()(e.unknown.unhandled).format()}/${j()(e.unknown.total).format()}`,submenuTitle:n("Unknown")})),a.createElement(N.Link,{className:b.Z.link,to:ae({statusCriterias:X}),onClick:this.toggle},a.createElement(M.Z,{dotColored:"green",submenuCount:j()(e.ok).format(),submenuTitle:n("Ok")})),a.createElement(N.Link,{className:b.Z.link,to:ae({statusCriterias:B}),onClick:this.toggle},a.createElement(M.Z,{dotColored:"blue",submenuCount:j()(e.pending).format(),submenuTitle:n("Pending")})))))):a.createElement(Z.Z,{width:33})}}const me=(0,w.Z)()((0,r.connect)((({intervals:e})=>({refreshTime:!!e&&1e3*parseInt(e.AjaxTimeReloadMonitoring)})),{})(ue));ue.propTypes={refreshTime:_().oneOfType([_().number,_().bool]).isRequired};class de extends a.Component{constructor(){super(...arguments),this.refreshIntervalsApi=(0,g.Z)("internal.php?object=centreon_topcounter&action=refreshIntervals"),this.getRefreshIntervals=()=>{const{setRefreshIntervals:e}=this.props;this.refreshIntervalsApi.get().then((({data:t})=>{e(t)})).catch((e=>{console.log(e)}))},this.componentDidMount=()=>{this.getRefreshIntervals()}}render(){return a.createElement("header",{className:b.Z.header},a.createElement("div",{className:b.Z["header-icons"]},a.createElement("div",{className:d()(b.Z.wrap,b.Z["wrap-left"])},a.createElement(C,null)),a.createElement("div",{className:d()(b.Z.wrap,b.Z["wrap-right"])},a.createElement(h.Z,{path:"/header/topCounter"}),a.createElement(ie,null),a.createElement(me,null),a.createElement(L,null))))}}const he={setRefreshIntervals:p.m},pe=(0,r.connect)((()=>({})),he)(de);var ge=n(12971),be=n(69945),fe=n(22222);const _e=(e,t)=>{if(!1===t.show)return e;for(const n of["groups","children"])if(t[n])return[...e,Object.assign(Object.assign({},t),{[n]:t[n].reduce(_e,[])})];return[...e,t]},we=(e,t)=>t.children?[...e,Object.assign(Object.assign({},t),{children:t.children.reduce(we,[])})]:t.groups?[...e,Object.assign(Object.assign({},t),{groups:t.groups.filter(Ee)})]:[...e,t],Ee=e=>{if(e.children)for(const t of e.children)if(!0===t.show)return!0;return!1},ve=(0,fe.P1)((e=>e.navigation.items),(e=>e.reduce(_e,[]).reduce(we,[]))),Ze=(e,t)=>{for(const n of["groups","children"])t[n]&&(e=t[n].reduce(Ze,e));return!0===t.is_react&&(e[t.url]=t.page),e},ke=(0,fe.P1)((e=>e.navigation.items),(e=>e.reduce(Ze,{})));var ye=n(14319);class Ce extends a.Component{constructor(){super(...arguments),this.componentDidMount=()=>{const{fetchNavigationData:e}=this.props;e()}}render(){const{navigationData:e,reactRoutes:t}=this.props;return a.createElement(be.Z,{navigationData:e,reactRoutes:t})}}const Ne=(0,r.connect)((e=>({navigationData:ve(e),reactRoutes:ke(e)})),(e=>({fetchNavigationData:()=>{e((0,ye.pk)())},updateTooltip:()=>{e(updateTooltip())}})))(Ce);var Te=n(26793);const Se=(0,r.connect)((({tooltip:e})=>({label:e.label,toggled:e.toggled,x:e.x,y:e.y})),null)((({x:e,y:t,label:n,toggled:r})=>{const{t:s}=(0,Te.$)();return a.createElement("div",{className:d()("tooltip__2Hwxu",{hidden__fsQzr:!r}),style:{left:e,top:t}},s(n))})),Ie={"mb-2":"mb-2__1Fyfq","list-unstyled":"list-unstyled__VMbn_","half-opacity":"half-opacity__3tzoU",hidden:"hidden__1bjIN","hidden-input":"hidden-input__1Aqc1",footer:"footer__Vtfi7","footer-wrap":"footer-wrap__dquu0","footer-list-item":"footer-list-item__3Et0o",sidebar:"sidebar__2rq5o",active:"active__-ge68",content:"content__2uMhQ","full-screen":"full-screen__1VWnA"};class xe extends a.Component{render(){return a.createElement("footer",{className:Ie.footer},a.createElement("div",{className:Ie["footer-wrap"]},a.createElement("div",{className:Ie["footer-wrap-left"]}),a.createElement("div",{className:Ie["footer-wrap-middle"]},a.createElement("ul",{className:d()(Ie["list-unstyled"],Ie["footer-list"])},a.createElement("li",{className:Ie["footer-list-item"]},a.createElement("a",{href:"https://documentation.centreon.com/",rel:"noopener noreferrer",target:"_blank"},"Documentation")),a.createElement("li",{className:Ie["footer-list-item"]},a.createElement("a",{href:"https://support.centreon.com",rel:"noopener noreferrer",target:"_blank"},"Support")),a.createElement("li",{className:Ie["footer-list-item"]},a.createElement("a",{href:"https://www.centreon.com",rel:"noopener noreferrer",target:"_blank"},"Centreon")),a.createElement("li",{className:Ie["footer-list-item"]},a.createElement("a",{href:"https://github.com/centreon/centreon.git",rel:"noopener noreferrer",target:"_blank"},"Github Project")),a.createElement("li",{className:Ie["footer-list-item"]},a.createElement("a",{href:"https://centreon.github.io",rel:"noopener noreferrer",target:"_blank"},"Slack")),a.createElement("li",{className:Ie["footer-list-item"]},a.createElement("a",{href:"https://github.com/centreon/centreon/security/policy",rel:"noopener noreferrer",target:"_blank"},"Security Issue")))),a.createElement("div",{className:Ie["footer-wrap-right"]},a.createElement("span",null,"Copyright © 2005 - 2021"))))}}const Ae=xe;var Re=n(68507),Le=n(71308);const De=a.lazy((()=>n.e(625).then(n.bind(n,41625)))),Oe=(0,l.Z)({content:{display:"flex",flexDirection:"column",height:" 100vh",overflow:"hidden",position:"relative",transition:"all 0.3s",width:"100%"},fullScreenWrapper:{flexGrow:1,height:"100%",overflow:"hidden",width:"100%"},mainContent:{backgroundcolor:"white",height:"100%",width:"100%"},wrapper:{alignItems:"stretch",display:"flex",height:"100%",overflow:"hidden"}});class je extends a.Component{constructor(){super(...arguments),this.state={isFullscreenEnabled:!1},this.keepAliveTimeout=null,this.getMinArgument=()=>{const{search:e}=ge.m.location;return"1"===i.parse(e).min},this.goFull=()=>{window.fullscreenSearch=window.location.search,window.fullscreenHash=window.location.hash,setTimeout((()=>{this.setState({isFullscreenEnabled:!0})}),200)},this.removeFullscreenParams=()=>{"/main.php"===ge.m.location.pathname&&ge.m.push({hash:window.fullscreenHash,pathname:"/main.php",search:window.fullscreenSearch}),window.fullscreenSearch=null,window.fullscreenHash=null},this.keepAlive=()=>{this.keepAliveTimeout=setTimeout((()=>{(0,g.Z)("internal.php?object=centreon_keepalive&action=keepAlive").get().then((()=>this.keepAlive())).catch((e=>{e.response&&401===e.response.status?window.location.href="index.php?disconnect=1":this.keepAlive()}))}),15e3)}}componentDidMount(){this.props.fetchExternalComponents(),this.keepAlive()}render(){const e=this.getMinArgument(),{classes:t}=this.props;return a.createElement(a.Suspense,{fallback:a.createElement(Le.Z,null)},a.createElement(s.xI,{history:ge.m},a.createElement(u.Z,null,a.createElement("div",{className:t.wrapper},!e&&a.createElement(Ne,null),a.createElement(Se,null),a.createElement("div",{className:t.content,id:"content"},!e&&a.createElement(pe,null),a.createElement("div",{className:t.fullScreenWrapper,id:"fullscreen-wrapper"},a.createElement(o.Z,{enabled:this.state.isFullscreenEnabled,onChange:e=>{this.setState({isFullscreenEnabled:e})},onClose:this.removeFullscreenParams},a.createElement("div",{className:t.mainContent},a.createElement(De,null)))),!e&&a.createElement(Ae,null)),a.createElement("span",{className:Ie["full-screen"],onClick:this.goFull})))))}}const Pe=(0,r.connect)(null,(e=>({fetchExternalComponents:()=>{e((0,Re.bU)())}})))((0,c.Z)(Oe)(je))},62728:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var a=n(67294),r=n(14494),s=n(5977),o=n(29278),i=n(86851),l=n(66791),c=n(92189);const u=e=>{var{history:t,hooks:n,path:r}=e,s=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}(e,["history","hooks","path"]);const o=t.createHref({hash:"",pathname:"/",search:""});return a.createElement(a.Fragment,null,Object.entries(n).filter((([e])=>e.includes(r))).map((([,e])=>{const t=a.lazy((()=>(0,i.y)(o,e)));return a.createElement(a.Suspense,{fallback:a.createElement(c.Z,{width:29}),key:r},a.createElement(t,Object.assign({centreonAxios:l.Z},s)))})))},m=a.memo((e=>a.createElement(u,Object.assign({},e))),(({hooks:e},{hooks:t})=>(0,o.Z)(e,t))),d=(0,r.connect)((({externalComponents:e})=>({hooks:e.hooks})))((0,s.EN)(m))},92189:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var a=n(67294),r=n(41120),s=n(59693),o=n(8920),i=n(58365);const l=(0,r.Z)((e=>({skeleton:{backgroundColor:(0,s.Fq)(e.palette.grey[50],.4),margin:e.spacing(.5,2,1,2)}}))),c=({width:e=15})=>{const t=(0,o.Z)(),n=l();return a.createElement(i.Z,{animation:"wave",className:n.skeleton,height:t.spacing(5),width:t.spacing(e)})}},86851:(e,t,n)=>{"use strict";n.d(t,{y:()=>i}),n(11707),n(90285),n(10362);var a=n(62795),r=function(e,t,n,a){return new(n||(n=Promise))((function(r,s){function o(e){try{l(a.next(e))}catch(e){s(e)}}function i(e){try{l(a.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,i)}l((a=a.apply(e,t||[])).next())}))};const s=({basename:e,file:t})=>new Promise(((n,a)=>r(void 0,void 0,void 0,(function*(){try{const a=`$centreonExternalModule$${t.replace(/(^\.?\/)|(\.js)/g,"").replace(/\//g,"$")}`;if("object"!=typeof window[a]){const n=yield window.System.import(e+t);window[a]=n}n(window[a])}catch(e){a(e)}})))),o=({basename:e,files:t})=>{const n=t.map((t=>s({basename:e,file:t})));return Promise.all(n)},i=(e,t)=>new Promise(((n,i)=>r(void 0,void 0,void 0,(function*(){const{js:{commons:r,chunks:i,bundle:l},css:c}=t;if(!l)return console.error(new Error("dynamic import should contains js parameter.")),null;try{c&&c.length>0&&(yield a.fetch({address:e+c})),yield o({basename:e,files:r}),yield o({basename:e,files:i});const t=yield s({basename:e,file:l});return n(t)}catch(e){console.error(e)}}))))},10362:(e,t,n)=>{"use strict";!function(e){const t=e.System.constructor.prototype,n=-1!==navigator.userAgent.indexOf("Trident");let a,r,s;const o=t.import;t.import=function(t,i){return function(){a=r=void 0;for(const t in e)!e.hasOwnProperty(t)||!isNaN(t)&&t<e.length||n&&e[t]&&e[t].parent===window||(a?r||(r=t):a=t,s=t)}(),o.call(this,t,i)};const i=[[],function(){return{}}],{getRegister:l}=t;t.getRegister=function(){const t=l.call(this);if(t)return t;const o=function(){let t,o=0;for(const s in e)if(!(!e.hasOwnProperty(s)||!isNaN(s)&&s<e.length||n&&e[s]&&e[s].parent===window)){if(0===o&&s!==a||1===o&&s!==r)return s;o++,t=s}if(t!==s)return t}();if(!o)return i;let c;try{c=e[o]}catch(e){return i}return[[],function(e){return{execute(){e({__useDefault:!0,default:c})}}}]}}("undefined"!=typeof self?self:n.g)},21936:(e,t,n)=>{"use strict";n.d(t,{j:()=>s});var a=n(22222);const r=(e,t)=>{for(const n of["groups","children"])t[n]&&(e=t[n].reduce(r,e));return!0===t.is_react?e.push(t.url):t.page&&e.push(t.page),e},s=(0,a.P1)((e=>e.navigation.items),(e=>e.reduce(r,[])))},99349:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a={"mb-2":"mb-2__3Tabe","list-unstyled":"list-unstyled__34fJ_","half-opacity":"half-opacity__r-vlT",hidden:"hidden__3SzR_","hidden-input":"hidden-input__3BS3J","icon-home":"icon-home__I88ew","icon-monitoring":"icon-monitoring__ITliu","icon-reporting":"icon-reporting__1IcG2","icon-configuration":"icon-configuration__1G6eQ","icon-administration":"icon-administration__tmzRJ","icon-poller":"icon-poller__t0pHr","icon-link":"icon-link__8Lql2","icon-clock":"icon-clock__20jzY","icon-database":"icon-database__3anTh","icon-hosts":"icon-hosts__g1i5w","icon-services":"icon-services__2Oki7","icon-user":"icon-user__3oc1a","icon-copy":"icon-copy__Ex0_4","icon-copied":"icon-copied__2l-wJ",iconmoon:"iconmoon__wU4ll",btn:"btn__1AJcx","btn-green":"btn-green__1VdtW","btn-red":"btn-red__3DYqt",logout:"logout__2lAEL",header:"header__3vGR5","header-icons":"header-icons__3iYRU","wrap-left-icon":"wrap-left-icon__3__ET",pollers:"pollers__26j__","wrap-left-icon__name":"wrap-left-icon__name__3iNyk",round:"round__3UJnD",red:"red__1BOIZ",orange:"orange__13c3m",green:"green__2YtM2","wrap-left-pollers":"wrap-left-pollers__1IcFD","submenu-active":"submenu-active__39j4_",submenu:"submenu__3cUmZ","wrap-middle-icon":"wrap-middle-icon__1N2m5","round-big":"round-big__2Ao9N",number:"number__C8WuG","red-bordered":"red-bordered__1iq0i","gray-dark":"gray-dark__2VbVu","gray-dark-bordered":"gray-dark-bordered__uTp7n","green-bordered":"green-bordered__3YqaP","orange-bordered":"orange-bordered__2jRcr","gray-light":"gray-light__3XLWR","gray-light-bordered":"gray-light-bordered__19Mde",blue:"blue__2mbVh","blue-bordered":"blue-bordered__1y4OV","wrap-right":"wrap-right__3XD36","wrap-right-hosts":"wrap-right-hosts__Nx5Mv","wrap-right-services":"wrap-right-services__19LIJ","wrap-right-user":"wrap-right-user__3l1VI","custom-icon":"custom-icon__3gAaF","wrap-right-icon":"wrap-right-icon__1zG4i",hosts:"hosts__nbCpb","wrap-right-icon__name":"wrap-right-icon__name__1tkgS","wrap-right-date":"wrap-right-date__39I7H","wrap-right-time":"wrap-right-time__3x80W","wrap-right-timestamp":"wrap-right-timestamp__3oWmb",wrap:"wrap__3PAnQ","submenu-top-button":"submenu-top-button__2MDqN","submenu-item-link":"submenu-item-link__2TkEk","submenu-count":"submenu-count__3dia3",profile:"profile__3tMDO","submenu-user-type":"submenu-user-type__d2HI9","submenu-user-edit":"submenu-user-edit__1PT7U","submenu-user-button":"submenu-user-button__2N-6H","btn-logout-icon":"btn-logout-icon__2wKZ0","submenu-bookmark-link":"submenu-bookmark-link__3yKOP","submenu-user-name":"submenu-user-name__15Evz","submenu-top-item":"submenu-top-item__1rZMl","errors-running":"errors-running__3QehB","submenu-top-item-link":"submenu-top-item-link__N3GF-","submenu-top-count":"submenu-top-count__AdoBv","toggle-submenu-arrow":"toggle-submenu-arrow__283Ft","dot-colored":"dot-colored__1wZJY",gray:"gray__36MXw",FullScreen:"FullScreen__3O3pE",wrapper:"wrapper__RsPho","submenu-toggle":"submenu-toggle__3RfSA","submenu-toggle-active":"submenu-toggle-active__1XbfZ",link:"link__2W9xh","submenu-content":"submenu-content__4RyBH","submenu-padding":"submenu-padding__sTw3q",logoutLink:"logoutLink__27e_b"}}}]);