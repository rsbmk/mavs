(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[0],[,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(10),r=n.n(s),o=(n(21),n(2)),i="d7d7b9e740b86d1ad247cf85e2470fd8",l="c20a02eaa0de7e477a390cb3f0dacf26",u="https://gateway.marvel.com:443/v1/public/characters",j="https://hidden-garden-13957.herokuapp.com",d="".concat(j,"/api/characters/"),m="".concat(j,"/api/login"),h="".concat(j,"/api/users/"),b="".concat(j,"/api/comments/");function O(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.keyword,n=e.limit,a=void 0===n?50:n,c=e.page,s=void 0===c?0:c,r=t?"".concat(u,"?limit=").concat(a,"&offset=").concat(a*s,"&nameStartsWith=").concat(t,"&ts=1&apikey=").concat(i,"&hash=").concat(l):"".concat(u,"?limit=").concat(a,"&offset=").concat(a*s,"&ts=1&apikey=").concat(i,"&hash=").concat(l);return r}var f=n(0),x=Object(a.createContext)({});function p(e){var t=e.children,n=Object(a.useState)((function(){return JSON.parse(window.sessionStorage.getItem("user"))||{}})),c=Object(o.a)(n,2),s=c[0],r=c[1];return Object(f.jsx)(x.Provider,{value:{userContext:s,setUserContext:r},children:t})}var g=x;function v(){var e=Object(a.useContext)(w),t=e.likeContext,n=e.setLikeContext,c=Object(a.useContext)(g),s=c.userContext,r=c.setUserContext,i=Object(a.useState)(!1),l=Object(o.a)(i,2),u=l[0],j=l[1],h=Object(a.useState)({is:!1,message:""}),b=Object(o.a)(h,2),O=b[0],f=b[1],x=t||[],p=Object(a.useCallback)((function(e){(function(e){var t=e.username,n=e.password;return{userResponseAPI:fetch(m,{method:"POST",body:JSON.stringify({username:t,password:n}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}})({username:e.username,password:e.password}).userResponseAPI.then((function(e){sessionStorage.setItem("user",JSON.stringify(e)),r(e),j(!1),f({is:!1})})).catch((function(){f({is:!0,message:"the username or the passwords are wrong"})}))}),[]),v=Object(a.useCallback)((function(){r({}),window.sessionStorage.removeItem("user")}),[]),C=Object(a.useCallback)((function(e){(function(e){var t=e.idCharacter,n=e.jwt;return fetch(d,{method:"POST",body:JSON.stringify({idCharacter:t}),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))})({idCharacter:e.idCharacter,jwt:e.jwt}).then(n).catch((function(e){return console.error(e)}))}),[]),N=Object(a.useCallback)((function(e){(function(e){var t=e.idCharacter,n=e.jwt;return fetch(d,{method:"DELETE",body:JSON.stringify({idCharacter:t}),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))})({idCharacter:e.idCharacter,jwt:e.jwt}).then(n).catch((function(e){return console.error(e)}))}),[]);return{isLogged:Boolean(s.jwt),loadingLogin:u,userContext:s,likeList:x,error:O,login:p,logout:v,addLike:C,deleteLike:N,setLoadingLogin:j}}var C=Object(a.createContext)({});function N(e){var t=e.children,n=Object(a.useState)([]),c=Object(o.a)(n,2),s=c[0],r=c[1],i=v(),l=i.isLogged,u=i.userContext.jwt;return Object(a.useEffect)((function(){if(!l)return r([]);(function(e){var t=e.jwt;return fetch(d,{headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))})({jwt:u}).then(r)}),[l,u]),Object(f.jsx)(C.Provider,{value:{likeContext:s,setLikeContext:r},children:t})}var w=C,y=Object(a.createContext)({});function k(e){var t=e.children,n=Object(a.useState)([]),c=Object(o.a)(n,2),s=c[0],r=c[1];return Object(a.useEffect)((function(){fetch(b).then((function(e){return e.json()})).catch((function(e){return console.log(e)})).then((function(e){r(e)})).catch((function(e){return console.error(e)}))}),[]),Object(f.jsx)(y.Provider,{value:{commnetConetxt:s,setcommnetConetxt:r},children:t})}var S=y,L=c.a.createContext({});function M(e){var t=e.children,n=Object(a.useState)([]),c=Object(o.a)(n,2),s=c[0],r=c[1];return Object(f.jsx)(L.Provider,{value:{characterContext:s,setCharacterContext:r},children:t})}var D=L,P=n(4);n(23);function I(){var e=Object(P.c)(),t=Object(o.a)(e,2)[1],n=Object(a.useState)(""),c=Object(o.a)(n,2),s=c[0],r=c[1];return Object(f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s&&t("/search/".concat(s))},className:"form",children:[Object(f.jsx)("input",{onChange:function(e){r(e.target.value)},type:"text",value:s,placeholder:"Search your favorite Hero...",className:"inputSearch"}),Object(f.jsx)("button",{className:"btn",children:Object(f.jsx)("i",{className:"fas fa-search"})})]})}n(24);function T(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(a.useRef)(null);Object(a.useEffect)((function(){c("true"===localStorage.getItem("isDark")),"true"===localStorage.getItem("isDark")&&document.body.classList.add("isDarkMode")}),[]);return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("input",{onChange:function(){c(s.current.checked),document.body.classList.toggle("isDarkMode"),localStorage.setItem("isDark",s.current.checked)},checked:n,className:"checkbox",ref:s,id:"checkbox",type:"checkbox"}),Object(f.jsx)("label",{htmlFor:"checkbox",className:"switch"})]})}var U=c.a.memo(T);n(25);function E(){var e=v(),t=e.isLogged,n=e.userContext,c=e.logout,s=Object(a.useCallback)((function(){c()}),[]);return Object(f.jsxs)("div",{className:"modalBarMenu",children:[Object(f.jsx)("div",{className:"nameUser",children:Object(f.jsx)("span",{children:t?"Hola, ".concat(n.name):"Hi, login you!"})}),Object(f.jsxs)("div",{className:"BarMenuDarkMode",children:["Dark Mode",Object(f.jsx)(U,{})]}),Object(f.jsx)("div",{children:t?Object(f.jsxs)("button",{className:"logoutMenu",onClick:s,children:[Object(f.jsx)("i",{className:"fas fa-sign-out-alt"}),"Logout"]}):Object(f.jsxs)(P.a,{className:"loginMenu",to:"/mavs/login",children:[Object(f.jsx)("i",{className:"fas fa-sign-in-alt"}),"Login"]})})]})}function F(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],c=t[1],s={display:n?"block":"none"};return Object(f.jsxs)("div",{className:"wrapBarMenu",children:[Object(f.jsx)("i",{onClick:function(){c(!n)},className:"fas fa-bars"}),Object(f.jsx)("div",{style:s,children:Object(f.jsx)(E,{})})]})}n(26);function B(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{className:"header",children:[Object(f.jsx)(P.a,{to:"/mavs/",className:"title",children:"Mavs"}),Object(f.jsx)(I,{}),Object(f.jsx)(F,{})]}),Object(f.jsx)("div",{className:"atribution",children:Object(f.jsx)(P.a,{to:"http://marvel.com",children:"Data provided by Marvel. \xa9 2014 Marvel"})})]})}var J=c.a.memo(B);n(27);function A(){return Object(f.jsx)("div",{className:"spinner"})}n(11),n(12),n(28);var V=function(e){var t=e.title,n=e.info;return Object(f.jsxs)("div",{className:"wrapInfo",children:[Object(f.jsx)("h3",{className:"titleInfo",children:t}),n.map((function(e){return Object(f.jsx)("h4",{className:"infoName",children:e.name},e.name)}))]})},R=n(6);function z(e){var t=e.character;return Object(f.jsxs)("article",{className:"cardDetailCharacter",children:[Object(f.jsxs)(R.a,{children:[Object(f.jsx)("title",{children:"".concat(t.name," details")}),Object(f.jsx)("meta",{name:"description",content:"This page is the details of the search ".concat(t.name)})]}),Object(f.jsx)("div",{className:"wrpaImgDetail",children:Object(f.jsx)("img",{className:"imgDetailCharacter",src:"".concat(t.thumbnail.path,".").concat(t.thumbnail.extension)})}),Object(f.jsxs)("div",{className:"wrapInfoDetail",children:[Object(f.jsx)("h2",{className:"nameDetailCharacter",children:t.name}),Object(f.jsx)("h3",{className:"descriptionDetailCharacter",children:t.description||"No Description ..."}),Object(f.jsxs)("div",{className:"wrapInfoCharacter",children:[Object(f.jsx)(V,{title:"Comics",info:t.comics.items||"No Content..."}),Object(f.jsx)(V,{title:"Series",info:t.series.items||"No Content..."}),Object(f.jsx)(V,{title:"Stories",info:t.stories.items||"No Content..."}),Object(f.jsx)(V,{title:"Events",info:t.events.items||"No Content..."})]})]})]})}function H(e){var t=e.character;return t.map((function(e){var n=e.name,a=e.id,c=e.thumbnail,s=e.description,r=e.comics,o=e.series,i=e.stories,l=e.events;return Object(f.jsxs)("article",{className:"cardDetailCharacter",children:[Object(f.jsxs)(R.a,{children:[Object(f.jsx)("title",{children:"".concat(n," details")}),Object(f.jsx)("meta",{name:"description",content:"This page is the details of the search ".concat(t.name)})]}),Object(f.jsx)("div",{className:"wrpaImgDetail",children:Object(f.jsx)("img",{className:"imgDetailCharacter",src:"".concat(c.path,".").concat(c.extension)})}),Object(f.jsxs)("div",{className:"wrapInfoDetail",children:[Object(f.jsx)("h2",{className:"nameDetailCharacter",children:n}),Object(f.jsx)("h3",{className:"descriptionDetailCharacter",children:s||"No Description ..."}),Object(f.jsxs)("div",{className:"wrapInfoCharacter",children:[Object(f.jsx)(V,{title:"Comics",info:r.items}),Object(f.jsx)(V,{title:"Series",info:o.items}),Object(f.jsx)(V,{title:"Stories",info:i.items}),Object(f.jsx)(V,{title:"Events",info:l.items})]})]})]},a)}))}n(32);var q=n(5),_={username:"",password:""},G="update_password",W="update_username",Y=function(e,t){switch(t.type){case G:return Object(q.a)(Object(q.a)({},e),{},{password:t.payload});case W:return Object(q.a)(Object(q.a)({},e),{},{username:t.payload});default:return e}},K=function(){var e=v(),t=e.loadingLogin,n=e.isLogged,c=e.error,s=e.login,r=e.setLoadingLogin,i=Object(a.useReducer)(Y,_),l=Object(o.a)(i,2),u=l[0],j=l[1],d=u.username,m=u.password;return{username:d,password:m,isLogged:n,error:c,loadingLogin:t,handleUsername:function(e){j({type:W,payload:e.target.value})},hanldePassword:function(e){j({type:G,payload:e.target.value})},handleLogin:function(e){e.preventDefault(),r(!0),s({username:d,password:m}),j({type:G,payload:""}),j({type:W,payload:""})}}};n(13);function Q(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.closeModal,n=Object(P.c)(),c=Object(o.a)(n,2),s=c[0],r=c[1],i=K(),l=i.username,u=i.password,j=i.isLogged,d=i.error,m=i.loadingLogin,h=i.handleUsername,b=i.hanldePassword,O=i.handleLogin;return Object(a.useEffect)((function(){if(j&&"/mavs/login"===s)return r("/mavs/");j&&t()}),[j]),m?Object(f.jsx)(A,{}):Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("form",{className:"formLogin",onSubmit:O,children:[Object(f.jsx)("h1",{className:"titleLogin",children:"Login"}),d.is&&Object(f.jsx)("div",{children:d.message}),Object(f.jsxs)("div",{className:"wrapFormLogin",children:[Object(f.jsxs)("label",{className:"username",children:["Username",Object(f.jsxs)("div",{children:[Object(f.jsx)("i",{className:"fas fa-user"}),Object(f.jsx)("input",{type:"text",value:l,name:"Username",autoComplete:"username",className:"usernameInput",placeholder:"Type your username",onChange:h})]})]}),Object(f.jsxs)("label",{className:"password",children:["Password",Object(f.jsxs)("div",{children:[Object(f.jsx)("i",{className:"fas fa-lock"}),Object(f.jsx)("input",{type:"password",value:u,name:"Password",autoComplete:"password",className:"usernamePassword",placeholder:"Type your password",onChange:b})]})]}),Object(f.jsx)("button",{className:"btnLogin",children:"Login"})]}),Object(f.jsx)(P.a,{to:"/mavs/singup",className:"singUp",children:"SING UP"})]})})}n(33);function X(e){var t=e.children,n=e.closeModal;return Object(f.jsx)("div",{className:"modalLogin",children:Object(f.jsxs)("div",{className:"modal-content",children:[Object(f.jsx)("button",{className:"btn",onClick:n,children:Object(f.jsx)("i",{className:"fas fa-times"})}),t]})})}function Z(e){var t=e.children,n=e.closeModal;return r.a.createPortal(Object(f.jsx)(X,{closeModal:n,children:t}),document.getElementById("modal-root"))}function $(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],c=t[1];return{showModal:n,closeModal:Object(a.useCallback)((function(){c(!1)}),[c]),openModal:Object(a.useCallback)((function(){c(!0)}),[c])}}n(34);function ee(e){var t=e.idCharacter,n=v(),c=n.userContext,s=n.likeList,r=n.isLogged,o=n.addLike,i=n.deleteLike,l=$(),u=l.showModal,j=l.openModal,d=l.closeModal,m=c.jwt,h=Object(a.useCallback)(s.some((function(e){return e===t})),[s]),b=Object(a.useCallback)((function(){if(!r)return j();h?i({idCharacter:t,jwt:m}):o({idCharacter:t,jwt:m})}),[h,r]);return Object(f.jsxs)("div",{className:"wrapLikeButtons",children:[Object(f.jsx)("button",{"aria-label":"like",className:"likeButton",onClick:b,children:h?Object(f.jsx)("i",{className:"fas fa-heart"}):Object(f.jsx)("i",{className:"far fa-heart"})}),Object(f.jsx)("button",{className:"commentButton",children:Object(f.jsx)("i",{className:"far fa-comment"})}),u&&Object(f.jsx)(Z,{closeModal:d,children:Object(f.jsx)(Q,{closeModal:d})})]})}var te=function(){var e=Object(a.useContext)(S),t=e.commnetConetxt,n=e.setcommnetConetxt;return{commentList:t||[],addComment:function(e){(function(e){var t=e.comment,n=e.idCharacter,a=e.jwt;return fetch(b,{method:"POST",headers:{Authorization:"Bearer ".concat(a),"Content-Type":"application/json"},body:JSON.stringify({comment:t,idCharacter:n})}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.log(e)}))})({comment:e.comment,idCharacter:e.idCharacter,jwt:e.jwt}).then(n).catch((function(e){return console.log(e)}))},putComment:function(e){(function(e){var t=e.idComment,n=e.comment;return fetch(b,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({idComment:t,comment:n})}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))})({idComment:e.idComment,comment:e.comment}).then(n).catch((function(e){return console.error(e)}))},removeComment:function(e){(function(e){var t=e.idComment;return fetch(b,{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({idComment:t})}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))})({idComment:e.idComment}).then(n).catch((function(e){return console.log(e)}))}}};n(35);function ne(e){var t=e.idComment,n=e.commentValue,a=e.closeModal,c=te().removeComment;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h3",{className:"titleModalDeleteComment",children:"Are you sure you want to delete this comment?"}),Object(f.jsx)("p",{className:"contentDeleteComment",children:n}),Object(f.jsxs)("div",{className:"wrapButtonsDeleteComment",children:[Object(f.jsx)("button",{onClick:function(){c({idComment:t})},children:"Yes"}),Object(f.jsx)("button",{onClick:function(e){a()},children:"Cancel"})]})]})}function ae(e){var t=e.idComment,n=e.commentValue,a=$(),c=a.showModal,s=a.closeModal,r=a.openModal;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("button",{onClick:function(e){r()},children:Object(f.jsx)("i",{className:"far fa-trash-alt"})}),c&&Object(f.jsx)(Z,{closeModal:s,children:Object(f.jsx)(ne,{idComment:t,commentValue:n,closeModal:s})})]})}n(36);function ce(e){var t=e.idComment,n=e.commentValue,c=e.closeModal,s=Object(a.useState)(n),r=Object(o.a)(s,2),i=r[0],l=r[1],u=te().putComment;return Object(f.jsxs)("aside",{children:[Object(f.jsx)("h2",{className:"titleUpdateComment",children:"Edit comment"}),Object(f.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),!i)return alert("The comment is required");u({idComment:t,comment:i}),c()},className:"fromUpdateComment",children:[Object(f.jsx)("textarea",{value:i,rows:"4",required:!0,onChange:function(e){l(e.target.value)}}),Object(f.jsx)("button",{children:"Update"})]})]})}function se(e){var t=e.idComment,n=e.commentValue,a=$(),c=a.showModal,s=a.closeModal,r=a.openModal;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("button",{onClick:function(e){r()},children:Object(f.jsx)("i",{className:"far fa-edit"})}),c&&Object(f.jsx)(Z,{closeModal:s,children:Object(f.jsx)(ce,{closeModal:s,idComment:t,commentValue:n})})]})}n(37);function re(e){var t=e.idComment,n=e.commentValue;return Object(f.jsxs)("div",{className:"wrapIconsActions",children:[Object(f.jsx)(se,{idComment:t,commentValue:n}),Object(f.jsx)(ae,{idComment:t,commentValue:n})]})}function oe(e){var t=e.idCharacter,n=te().commentList,a=v().userContext;return Object(f.jsx)("section",{className:"commentContainer",children:n.map((function(e){return e.idCharacter!==t?null:Object(f.jsxs)("div",{className:"wrapCommentContent",children:[Object(f.jsxs)("div",{className:"commentUsername",children:[e.user.username,": "]}),Object(f.jsx)("p",{className:"commentConetent",children:e.comment}),a.username===e.user.username?Object(f.jsx)(re,{commentValue:e.comment,idComment:e.id}):null]},e.id+t)}))})}function ie(e){var t=e.idCharacter,n=Object(a.useState)(""),c=Object(o.a)(n,2),s=c[0],r=c[1],i=$(),l=i.showModal,u=i.closeModal,j=i.openModal,d=te().addComment,m=v(),h=m.isLogged,b=m.userContext.jwt,O=Object(a.useCallback)((function(e){r(e.target.value)}),[r]);return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("form",{className:"newComment",onSubmit:function(e){if(e.preventDefault(),!h)return j();s&&d({comment:s,idCharacter:t,jwt:b}),r("")},children:[Object(f.jsx)("input",{value:s,onChange:O,className:"inputComment",placeholder:"typing your comment ..."}),Object(f.jsx)("button",{className:"btn",children:Object(f.jsx)("i",{className:"fas fa-paper-plane"})})]}),l&&Object(f.jsx)(Z,{closeModal:u,children:Object(f.jsx)(Q,{closeModal:u})})]})}function le(e){var t=e.idCharacter;return Object(f.jsxs)("section",{className:"wrapComment",children:[Object(f.jsx)(ee,{idCharacter:t}),Object(f.jsx)(oe,{idCharacter:t}),Object(f.jsx)(ie,{idCharacter:t})]})}function ue(e){var t=e.character,n=t[0]?t[0].id:t.id;return Object(f.jsxs)(f.Fragment,{children:[t[0]?Object(f.jsx)(H,{character:t}):Object(f.jsx)(z,{character:t}),Object(f.jsx)(le,{idCharacter:n})]})}function je(e){var t=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).id;return"".concat(u,"/").concat(e,"?ts=1&apikey=").concat(i,"&hash=").concat(l)}({id:e.id});return fetch(t).then((function(e){return e.json()})).then(de)}function de(e){var t=e.data.results;return void 0===t?[]:t}function me(e){var t=function(e){var t=e.id,n=Object(a.useContext)(D).characterContext.find((function(e){return e.id===Number(t)})),c=Object(a.useState)(n),s=Object(o.a)(c,2),r=s[0],i=s[1],l=Object(a.useState)(!1),u=Object(o.a)(l,2),j=u[0],d=u[1],m=Object(a.useState)(!1),h=Object(o.a)(m,2),b=h[0],O=h[1];return Object(a.useEffect)((function(){r||(d(!0),je({id:t}).then((function(e){i(e),d(!1),O(!1)})).catch((function(){d(!1),O(!0)})))}),[t,r]),{character:r,loading:j,isError:b}}({id:e.params.id}),n=t.character,c=t.loading,s=t.isError;return n?s?Object(f.jsx)("h2",{children:"There was an error in obtaining the data"}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(J,{}),c?Object(f.jsx)(A,{}):Object(f.jsx)(ue,{character:n})]}):null}var he={name:"",username:"",password:"",user:""},be="updateName",Oe="updateUsername",fe="updatePassword",xe="updateUser",pe=function(e,t){switch(t.type){case be:return Object(q.a)(Object(q.a)({},e),{},{name:t.payload});case Oe:return Object(q.a)(Object(q.a)({},e),{},{username:t.payload});case fe:return Object(q.a)(Object(q.a)({},e),{},{password:t.payload});case xe:return Object(q.a)(Object(q.a)({},e),{},{user:t.payload});default:return e}},ge=function(){var e=Object(a.useReducer)(pe,he),t=Object(o.a)(e,2),n=t[0],c=t[1],s=n.name,r=n.username,i=n.password,l=n.user;return{handleSingUp:function(e){e.preventDefault(),function(e){var t=e.name,n=e.username,a=e.password;return{resAPILogin:fetch(h,{method:"POST",body:JSON.stringify({name:t,username:n,password:a}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}}({name:s,username:r,password:i}).resAPILogin.then((function(e){c({type:xe,payload:e})})).catch((function(e){return console.error(e)})),c({type:be,payload:""}),c({type:Oe,payload:""}),c({type:fe,payload:""})},handleUsername:function(e){c({type:Oe,payload:e.target.value})},hanldePassword:function(e){c({type:fe,payload:e.target.value})},hanldeName:function(e){c({type:be,payload:e.target.value})},name:s,user:l,username:r,password:i}};n(38);function ve(){var e=Object(P.c)(),t=Object(o.a)(e,2)[1],n=ge(),c=n.user,s=n.name,r=n.username,i=n.password,l=n.handleSingUp,u=n.hanldeName,j=n.handleUsername,d=n.hanldePassword;return Object(a.useEffect)((function(){c.name&&t("/mavs/login")}),[c]),Object(f.jsx)("div",{className:"wrapSingUp",children:Object(f.jsxs)("form",{className:"formLogin",onSubmit:l,children:[Object(f.jsx)("h1",{className:"titleLogin",children:"Sing Up"}),Object(f.jsxs)("div",{className:"wrapFormLogin",children:[Object(f.jsxs)("label",{className:"username",children:["Name",Object(f.jsxs)("div",{children:[Object(f.jsx)("i",{className:"fas fa-user"}),Object(f.jsx)("input",{type:"text",value:s,name:"name",className:"nameInput",placeholder:"Type your name",onChange:u})]})]}),Object(f.jsxs)("label",{className:"username",children:["Username",Object(f.jsxs)("div",{children:[Object(f.jsx)("i",{className:"fas fa-user"}),Object(f.jsx)("input",{type:"text",value:r,name:"Username",className:"usernameInput",placeholder:"Type your username",onChange:j})]})]}),Object(f.jsxs)("label",{className:"password",children:["Password",Object(f.jsxs)("div",{children:[Object(f.jsx)("i",{className:"fas fa-lock"}),Object(f.jsx)("input",{type:"password",value:i,name:"Password",className:"usernamePassword",placeholder:"Type your password",onChange:d})]})]}),Object(f.jsx)("button",{className:"btnLogin",children:"Sing Up"})]}),Object(f.jsx)(P.a,{to:"/mavs/login",className:"login",children:"Login"})]})})}function Ce(e){var t=e.path,n=e.extension,a=e.name,c=e.description,s=e.id;return Object(f.jsxs)("div",{className:"cardCharacter",children:[Object(f.jsxs)(P.a,{to:"/detail/".concat(s),className:"wrap-hero",children:[Object(f.jsx)("img",{loading:"lazy",className:"imgCharacter",src:"".concat(t,".").concat(n)}),Object(f.jsx)("h3",{className:"nameCharacter",children:a}),Object(f.jsx)("p",{className:"descriptionCharacter",children:c||"No description"})]}),Object(f.jsx)(ee,{idCharacter:s})]})}var Ne=c.a.memo(Ce);n(39);function we(e){var t=e.characterContext,n=e.loading;return Object(f.jsx)("div",{className:"heroList",children:n?Object(f.jsx)(A,{}):t.map((function(e){var t=e.id,n=e.name,a=e.thumbnail,c=e.description;return Object(f.jsx)(Ne,{id:t,description:c,name:n,path:a.path,extension:a.extension},t)}))})}var ye=c.a.memo(we);function ke(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.keyword,n=e.page,a=O({keyword:t,page:n}),c=fetch(a).then((function(e){return e.json()})).then(Se);return c}function Se(e){var t=e.data.results;return void 0===t?[]:t}var Le={loading:!1,page:0},Me="updateLoading",De="updatePage",Pe=function(e,t){switch(t.type){case Me:return Object(q.a)(Object(q.a)({},e),{},{loading:t.payload});case De:return Object(q.a)(Object(q.a)({},e),{},{page:t.payload});default:return e}};function Ie(e){var t=function(){var e=Object(a.useReducer)(Pe,Le),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(a.useContext)(D),r=s.characterContext,i=s.setCharacterContext;return{characterContext:r,loading:n.loading,page:n.page,setCharacterContext:i,setLoading:function(e){c({type:Me,payload:e})},setPage:function(e){c({type:De,payload:e})}}}(),n=t.loading,c=t.page,s=t.characterContext,r=t.setCharacterContext,i=t.setLoading,l=t.setPage;return Object(a.useEffect)((function(){i(!0),ke({keyword:e}).then((function(e){r(e),i(!1)}))}),[e]),Object(a.useEffect)((function(){0!==c&&ke({keyword:e,page:c}).then((function(e){r((function(t){return t.concat(e)}))}))}),[c,e]),{characterContext:s,loading:n,page:c,setPage:l}}function Te(e){var t=e.params.keyword,n=Ie(t),a=n.characterContext,c=n.loading;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(R.a,{children:[Object(f.jsx)("title",{children:"".concat(a.length," results of ").concat(t)}),Object(f.jsx)("meta",{name:"description",content:"This page is the results of the search"})]}),Object(f.jsx)(J,{}),Object(f.jsx)(ye,{loading:c,characterContext:a})]})}function Ue(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(R.a,{children:Object(f.jsx)("title",{children:"Mavs Login"})}),Object(f.jsx)("div",{className:"wrap-login",children:Object(f.jsx)(Q,{})})]})}var Ee=n(1),Fe=Ee.useEffect,Be=Ee.useRef,Je=Ee.useState,Ae=n(16),Ve=n.n(Ae);function Re(){var e=Ie(),t=e.characterContext,n=e.loading,c=e.page,s=e.setPage,r=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).once,t=void 0===e||e,n=Je(!1),a=Object(o.a)(n,2),c=a[0],s=a[1],r=Be(null);return Fe((function(){var e=new IntersectionObserver((function(e,n){e[0].isIntersecting?(s(!0),t&&n.disconnect()):!t&&s(!1)}),{rootMargin:"750px"});return e.observe(r.current),function(){return e.disconnect()}}),[t]),{elementNearScreen:r,isIntersection:c}}({once:!1}),i=r.elementNearScreen,l=r.isIntersection,u=Object(a.useCallback)(Ve()((function(){return s(c+1)}),1e3),[c]);return Object(a.useEffect)((function(){l&&u()}),[l]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(R.a,{children:[Object(f.jsx)("title",{children:"Mavs"}),Object(f.jsx)("meta",{name:"description",content:" This page is the Mavs home"})]}),Object(f.jsx)(J,{}),Object(f.jsx)(ye,{characterContext:t,loading:n}),Object(f.jsx)("div",{ref:i})]})}n(40);var ze=function(){return Object(f.jsxs)(p,{children:[Object(f.jsx)(P.b,{path:"/mavs/login",component:Ue}),Object(f.jsx)(P.b,{path:"/mavs/singup",component:ve}),Object(f.jsx)(M,{children:Object(f.jsx)(N,{children:Object(f.jsxs)(k,{children:[Object(f.jsx)(P.b,{path:"/mavs/",component:Re}),Object(f.jsx)(P.b,{path:"/search/:keyword",component:Te}),Object(f.jsx)(P.b,{path:"/detail/:id",component:me})]})})})]})},He=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(ze,{})}),document.getElementById("root")),He()}],[[41,1,2]]]);
//# sourceMappingURL=main.e85ecedf.chunk.js.map