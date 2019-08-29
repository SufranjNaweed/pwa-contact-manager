(window["webpackJsonppwa-contact-manager"]=window["webpackJsonppwa-contact-manager"]||[]).push([[0],{38:function(e,t,a){e.exports=a(74)},43:function(e,t,a){},44:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(32),o=a.n(i),r=(a(43),a(14)),l=a(6);a(44);var s=function(){return c.a.createElement("header",{className:"App-header"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(r.b,{to:"/"},"Home")),c.a.createElement("li",null,c.a.createElement(r.b,{to:"/about"},"About"))))},u=a(15),m=a(7),d=a(8),p=a(10),h=a(9),v=a(11),f=a(35),b=a.n(f),E=a(19),g=a.n(E),w=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={contact:a.props.contact},a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state.contact;return c.a.createElement("div",{className:"contact-item"},c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{src:e.thumbnailUrl,alt:"avatar"})),c.a.createElement("div",{className:"content",onClick:this.props.clickItem.bind(this,e.id)},c.a.createElement("p",{className:"text-center"},e.name),c.a.createElement("p",{className:""},e.username),c.a.createElement("a",{href:e.email},e.email),c.a.createElement("a",{href:e.website},e.website),c.a.createElement("a",{href:e.phone},e.phone)),c.a.createElement("div",{className:"deleteButton",onClick:this.props.deleteContact.bind(this,e.id)},c.a.createElement("svg",{width:"30px","aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"user-times",role:"img",viewBox:"0 0 640 512"},c.a.createElement("path",{d:"M589.6 240l45.6-45.6c6.3-6.3 6.3-16.5 0-22.8l-22.8-22.8c-6.3-6.3-16.5-6.3-22.8 0L544 194.4l-45.6-45.6c-6.3-6.3-16.5-6.3-22.8 0l-22.8 22.8c-6.3 6.3-6.3 16.5 0 22.8l45.6 45.6-45.6 45.6c-6.3 6.3-6.3 16.5 0 22.8l22.8 22.8c6.3 6.3 16.5 6.3 22.8 0l45.6-45.6 45.6 45.6c6.3 6.3 16.5 6.3 22.8 0l22.8-22.8c6.3-6.3 6.3-16.5 0-22.8L589.6 240zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"}))))}}]),t}(n.Component),y=a(36),C=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).state={name:"",username:"",email:"",website:"",phone:""},a.updateStateForm=function(e){var t=e.target.id,n=e.target.value;a.setState(Object(y.a)({},t,n))},a.onSubmit=function(e){e.preventDefault();var t={name:a.state.name,username:a.state.username,email:a.state.email,website:a.state.website,phone:a.state.phone};a.setState({name:"",username:"",email:"",website:"",phone:""}),a.props.addContact(t)},a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"form-container"},c.a.createElement("form",{action:"",className:"AddNewContact",onSubmit:this.onSubmit},c.a.createElement("input",{id:"name",type:"text",name:"name",placeholder:"Name",value:this.state.name,onChange:this.updateStateForm}),c.a.createElement("input",{id:"username",type:"text",name:"username",placeholder:"Username",value:this.state.username,onChange:this.updateStateForm}),c.a.createElement("input",{id:"website",type:"text",name:"website",placeholder:"Website",value:this.state.website,onChange:this.updateStateForm}),c.a.createElement("input",{id:"phone",type:"text",name:"phone",placeholder:"phone",value:this.state.phone,onChange:this.updateStateForm}),c.a.createElement("input",{id:"email",type:"text",name:"email",placeholder:"Email",value:this.state.email,onChange:this.updateStateForm}),c.a.createElement("input",{type:"submit",value:"New Contact",className:"btn"})))}}]),t}(n.Component),j=a(37),k=a.n(j),O=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).state={contacts:[]},a.deleteContact=function(e){a.setState({contacts:Object(u.a)(a.state.contacts.filter(function(t){return t.id!==e}))})},a.addContact=function(e){var t=g.a.url(e.email,{s:"150",r:"pg",d:"mm"});e.id=b.a.v4(),e.url=t,e.thumbnailUrl=t,a.setState({contacts:[].concat(Object(u.a)(a.state.contacts),[e])})},a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;k.a.get("https://jsonplaceholder.typicode.com/users").then(function(t){e.setState({contacts:t.data});var a=Object(u.a)(e.state.contacts.map(function(e){var t=g.a.url(e.email,{s:"150",r:"g",d:"mm",protocol:"https"});return e.url=t,e.thumbnailUrl=t,e}));e.setState({contacts:a})})}},{key:"clickItem",value:function(e){console.log(e)}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(C,{addContact:this.addContact}),this.state.contacts.map(function(t){return c.a.createElement(w,{contact:t,key:t.id,clickItem:e.clickItem,deleteContact:e.deleteContact})}))}}]),t}(n.Component);function N(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{id:"about",className:"container"},c.a.createElement("h2",null,"About"),c.a.createElement("p",{id:"presentation"},"This is a student projet made with React JS and it's a Progressive Web App oriented.",c.a.createElement("br",null),"Therefore you can install this web app on your mobile phone (Android or Iphone)"),c.a.createElement("h2",null,"How to install ?"),c.a.createElement("div",{className:"content-install-instruction"},c.a.createElement("h3",null,"ANDROID"),c.a.createElement("p",null,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt in doloremque voluptates ipsa recusandae enim accusamus voluptatibus fugiat itaque commodi! Libero, hic enim! Exercitationem consequuntur dignissimos odio impedit enim harum, placeat libero suscipit, porro voluptate odit architecto, pariatur maxime ratione?")),c.a.createElement("div",{className:"content-install-instruction"},c.a.createElement("h3",null,"IOS"),c.a.createElement("p",null,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt in doloremque voluptates ipsa recusandae enim accusamus voluptatibus fugiat itaque commodi! Libero, hic enim! Exercitationem consequuntur dignissimos odio impedit enim harum, placeat libero suscipit, porro voluptate odit architecto, pariatur maxime ratione?"))))}var S=function(){return c.a.createElement(r.a,null,c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"Contact Manager"),c.a.createElement(s,null),c.a.createElement(l.a,{exact:!0,path:"/",render:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"container"},c.a.createElement(O,null)))}}),c.a.createElement(l.a,{exact:!0,path:"/about",component:N})))},x=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function A(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(c.a.createElement(S,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/pwa-contact-manager",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/pwa-contact-manager","/service-worker.js");x?(!function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):A(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):A(t,e)})}}()}},[[38,1,2]]]);
//# sourceMappingURL=main.ecf74b83.chunk.js.map