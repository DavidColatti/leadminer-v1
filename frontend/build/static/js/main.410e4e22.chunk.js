(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{35:function(e,t,a){e.exports=a(64)},40:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(32),l=a.n(s),c=(a(40),a(3)),o=a.n(c),i=a(12),u=a(13),m=a(8),d=a(9),p=a(11),g=a(10),h=a(1);var f,b=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Not found"))},v=a(17),E=a(18),y=a(14),w=a(4),O=Object(w.a)(),L=a(33),j=a.n(L);f=window.location.origin;var N=j.a.create({withCredentials:!0,baseURL:f}),C={isLoggedIn:function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.get("/is-logged-in");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),signUp:function(){var e=Object(i.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.post("/signup",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),logIn:function(){var e=Object(i.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.post("/login",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),logOut:function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.get("/logout");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getLeadsFromMaster:function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.get("/master-leads");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},k=function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(m.a)(this,a);for(var s=arguments.length,l=new Array(s),c=0;c<s;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={loginToggle:!0,signUpToggle:!0},e.handleChange=function(t){e.setState(Object(v.a)({},t.target.name,t.target.value))},e.handleLoginSubmit=function(t){t.preventDefault();var a={email:e.state.email,password:e.state.password};C.logIn(a).then((function(t){console.log(t),e.props.setUser(Object(u.a)(Object(u.a)({},t.data.user),{},{masterLeads:t.data.masterLeads})),console.log("got the master leads"),e.setState({loginToggle:!e.state.loginToggle}),console.log(Object(E.a)(e)),O.push("/dashboard")})).catch((function(e){var t=e.response;return console.error(t)}))},e.displayLoginForm=function(){return r.a.createElement(n.Fragment,null,r.a.createElement("form",{className:"nav-form",action:"/dashboard",onSubmit:e.handleLoginSubmit},r.a.createElement("input",{name:"email",placeholder:"email",type:"email",onChange:e.handleChange}),r.a.createElement("input",{name:"password",placeholder:"password",type:"password",onChange:e.handleChange}),r.a.createElement("input",{type:"submit",value:"Log In"})))},e.handleSignUpSubmit=function(t){t.preventDefault(),C.signUp(e.state).then((function(t){e.props.setUser(Object(u.a)({},t.data.user)),e.setState({signUpToggle:!e.state.signUpToggle})})).catch((function(e){var t=e.response;return console.error(t.data)}))},e.displaySignUpForm=function(){return r.a.createElement(n.Fragment,null,r.a.createElement("form",{className:"nav-form",onSubmit:e.handleSignUpSubmit},r.a.createElement("input",{name:"email",type:"email",placeholder:"email",onChange:e.handleChange}),r.a.createElement("input",{name:"password",placeholder:"password",type:"password",onChange:e.handleChange}),r.a.createElement("input",{type:"submit",value:"Sign Up"})))},e.logOut=Object(i.a)(o.a.mark((function t(){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.logOut();case 2:a=t.sent,console.log("logout was called",a),e.props.setUser({email:null,createdAt:null,updatedAt:null,_id:null,masterLeads:null});case 5:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("span",{style:{color:"red"}},"temporary: ",(this.props.email,JSON.stringify(this.props))),this.props.email?r.a.createElement("nav",{className:"NavBar"},r.a.createElement("span",{className:"nav-emblem"},r.a.createElement("img",{className:"emblem-img",src:"https://cdn0.iconfinder.com/data/icons/mining-glyph/100/mining-29-512.png",alt:"emblem"})),r.a.createElement("span",{className:"nav-links"},r.a.createElement(y.a,{to:"/dashboard"},"Dashboard"),r.a.createElement(y.a,{to:"/pipeline"},"Pipeline"),r.a.createElement(y.a,{to:"/",onClick:this.logOut},"Sign Out"))):r.a.createElement("nav",{className:"NavBar"},r.a.createElement("span",{className:"nav-emblem"},r.a.createElement("img",{className:"emblem-img",src:"https://cdn0.iconfinder.com/data/icons/mining-glyph/100/mining-29-512.png",alt:"emblem"})),r.a.createElement("span",{className:"nav-links"},this.state.loginToggle?r.a.createElement(y.a,{onClick:function(){return e.setState({loginToggle:!e.state.loginToggle})},to:"/"},"Login"):this.displayLoginForm(),this.state.signUpToggle?r.a.createElement(y.a,{onClick:function(){return e.setState({signUpToggle:!e.state.signUpToggle})},to:"/"},"Sign Up"):this.displaySignUpForm())))}}]),a}(n.Component),S=function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"LandingPage"},r.a.createElement("div",{className:"landing-photo"},r.a.createElement("div",{className:"landing-logo"},r.a.createElement("strong",null,"LeadMiner")),r.a.createElement("div",{className:"features"},r.a.createElement("div",{className:"landing-feature"},r.a.createElement("h2",null,"Fresh Leads"),r.a.createElement("p",null,"Our software is created to mine small business information that is brand new, with little to no web-presence.")),r.a.createElement("div",{className:"landing-feature"},r.a.createElement("h2",null,"Close Deals"),r.a.createElement("p",null,"With having a consistent pipeline of new leads coming in, you'll find yourself generating more revenue and closing more deals!")),r.a.createElement("div",{className:"landing-feature"},r.a.createElement("h2",null,"Retain Clients"),r.a.createElement("p",null,"LeadMiner will let you become more organized with your workload and let you increase client retention by keeping notes and following up to client requests."))))))}}]),a}(n.Component),x=function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).addLeadToContactedArray=function(){var t=e.props.user.contactedLeads;t.includes(e.props.selectedLead)?console.log("this lead exists"):(t.push(e.props.selectedLead),console.log("i added ".concat(e.props.selectedLead.businessName," to my contacted leads array")))},e}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"CompanyDetail"},this.props.selectedLead?r.a.createElement("div",{className:"selected-company"},r.a.createElement("div",{className:"selected-content"},r.a.createElement("h3",null,this.props.selectedLead.businessName),r.a.createElement("a",{href:"tel:".concat(this.props.selectedLead.phoneNumber)},this.props.selectedLead.phoneNumber),r.a.createElement("h4",null,"".concat(this.props.selectedLead.city,", ").concat(this.props.selectedLead.state))),r.a.createElement("button",{className:"selected-button",onClick:this.addLeadToContactedArray},"+")):"NO LEAD SELECTED")}}]),a}(n.Component),U=function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(e=t.call.apply(t,[this].concat(s))).state={index:0},e.nextLead=function(){e.setState({index:e.state.index+1})},e.displayLead=function(){var t=e.props.user.masterLeads;return Array.from({length:3},(function(a,n){return r.a.createElement("div",{key:n,className:"lead-segment",onClick:function(){return e.setState({selectedLead:t[e.state.index+n]},(function(){return console.log(e.state)}))}},r.a.createElement("h3",null,t[e.state.index+n].businessName))}))},e}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Dashboard"},r.a.createElement("div",{className:"dashboard-content"},this.props.user.masterLeads?this.displayLead():"",r.a.createElement("div",{className:"dashboard-button"},r.a.createElement("img",{onClick:this.nextLead,alt:"right button",src:"https://i.ya-webdesign.com/images/white-arrow-transparent-png-1.png"}))),r.a.createElement(x,{selectedLead:this.state.selectedLead,user:this.props.user}))}}]),a}(n.Component),T=function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(e=t.call.apply(t,[this].concat(s))).displayContactedLeads=function(){return e.props.user.contactedLeads.map((function(e){return r.a.createElement("li",null,r.a.createElement("div",null,r.a.createElement("h4",null,e.businessName)))}))},e}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Pipeline"},r.a.createElement("h3",{className:"pipeline-title"},"MY PIPELINE INCLUDES THESE LEADS:"),r.a.createElement("ul",null,this.props.user.contactedLeads?this.displayContactedLeads():""))}}]),a}(n.Component),A=function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={},e.setUser=function(t){console.log("set user called",t),t._id?e.setState(Object(u.a)({},t)):O.push("/")},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(o.a.mark((function e(){var t=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:C.isLoggedIn().then((function(e){console.log(e.data),t.setUser(Object(u.a)(Object(u.a)({},e.data.user),{},{masterLeads:e.data.masterLeads})),console.log("got the master leads"),t.setState({loginToggle:!t.state.loginToggle})})).catch((function(e){var t=e.response;return console.error(t)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement(h.b,{history:O},r.a.createElement(k,{setUser:this.setUser,email:this.state.email}),r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(S,Object.assign({},t,{email:e.state.email}))}}),r.a.createElement(h.a,{exact:!0,path:"/dashboard",render:function(t){return r.a.createElement(U,Object.assign({},t,{user:e.state}))}}),r.a.createElement(h.a,{exact:!0,path:"/pipeline",render:function(t){return r.a.createElement(T,Object.assign({},t,{user:e.state}))}}),r.a.createElement(h.a,{component:b})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[35,1,2]]]);
//# sourceMappingURL=main.410e4e22.chunk.js.map