(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{269:function(t,e,r){"use strict";r(24),r(18);var n=r(1),s=r.n(n),o={data:function(){return{url:"",config:{app:"6960090",redirectUri:"https://smmtouch.dev.konekon.ru/login",display:"page",responseType:"code",v:"5.92"}}},methods:{login:function(){var t=s()(regeneratorRuntime.mark(function t(e){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$axios.post("vk/token/",{code:e},{});case 3:return r=t.sent,t.next=6,this.$auth.loginWith("vk",{data:{vk_id:r.data.user_id,vk_token:r.data.access_token}});case 6:this.$router.replace("/cp/"),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),t.t0.response?(console.log(t.t0.response.data),console.log(t.t0.response.status),console.log(t.t0.response.headers)):t.t0.request?console.log(t.t0.request):console.log("Error",t.t0.message),console.log(t.t0.config);case 13:case"end":return t.stop()}},t,this,[[0,9]])}));return function(e){return t.apply(this,arguments)}}()},mounted:function(){var t=s()(regeneratorRuntime.mark(function t(){var e,r,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e="https://oauth.vk.com/authorize?client_id=".concat(this.config.app),e+="&display=".concat(this.config.display,"&redirect_uri=").concat(this.config.redirectUri,"&scope=friends"),e+="&response_type=".concat(this.config.responseType,"&v=").concat(this.config.v),this.url=e,r=this.$route.query.code,n=this.$route.query.state,!r||n){t.next=9;break}return t.next=9,this.login(r);case 9:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},a=r(2),i=Object(a.a)(o,function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"vkconnect",attrs:{href:this.url}},[e("img",{attrs:{src:"/img/sni-03.svg",alt:""}}),this._v("ВКонтакте\n")])},[],!1,null,null,null);e.a=i.exports},270:function(t,e,r){"use strict";r(24),r(18);var n=r(1),s=r.n(n),o={data:function(){return{url:"",config:{app:"2020906244882717",redirectURI:"https://smmtouch.dev.konekon.ru/login",state:"fb"}}},methods:{login:function(){var t=s()(regeneratorRuntime.mark(function t(e){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$axios.post("fb/token/",{code:e},{});case 3:return r=t.sent,t.next=6,this.$auth.loginWith("fb",{data:{fb_id:r.data.fb_data.id,fb_token:r.data.token.access_token}});case 6:this.$router.replace("/cp/"),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),t.t0.response?(console.log(t.t0.response.data),console.log(t.t0.response.status),console.log(t.t0.response.headers)):t.t0.request?console.log(t.t0.request):console.log("Error",t.t0.message),console.log(t.t0.config);case 13:case"end":return t.stop()}},t,this,[[0,9]])}));return function(e){return t.apply(this,arguments)}}()},mounted:function(){var t=s()(regeneratorRuntime.mark(function t(){var e,r,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e="https://www.facebook.com/v3.2/dialog/oauth?client_id=".concat(this.config.app),e+="&redirect_uri=".concat(this.config.redirectURI),e+="&state=".concat(this.config.state),this.url=e,r=this.$route.query.code,n=this.$route.query.state,!r||!n){t.next=9;break}return t.next=9,this.login(r);case 9:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},a=r(2),i=Object(a.a)(o,function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"fbconnect",attrs:{href:this.url}},[e("img",{attrs:{src:"/img/sni-02.svg",alt:""}}),this._v("Facebook\n")])},[],!1,null,null,null);e.a=i.exports},322:function(t,e,r){"use strict";r.r(e);r(18);var n=r(1),s=r.n(n),o=(r(24),r(97)),a=r(269),i=r(270),c={auth:!1,components:{PopupMain:o.a,VKConnect:a.a,FBConnect:i.a},data:function(){return{email:"",password:"",formError:""}},methods:{toggleUrl:function(t){this.$router.replace(t)},onSubmit:function(){var t=s()(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$auth.loginWith("email",{data:{email:this.email,password:this.password}});case 3:t.sent,this.$store.dispatch("profile/apiProfileInfo").then(function(){e.$router.replace("/cp/")}),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),t.t0.response?(console.log(t.t0.response.data),console.log(t.t0.response.status),console.log(t.t0.response.headers),t.t0.response.data.error&&(this.formError=t.t0.response.data.error)):t.t0.request?console.log(t.t0.request):console.log("Error",t.t0.message),console.log(t.t0.config);case 11:case"end":return t.stop()}},t,this,[[0,7]])}));return function(){return t.apply(this,arguments)}}()}},u=r(2),l=Object(u.a)(c,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("PopupMain",[r("div",{staticClass:"auth-group"},[r("div",{staticClass:"group h2"},[r("div",[t._v("Вход через")]),t._v(" "),r("h2",[t._v("Логин и пароль")])]),t._v(" "),r("form",{on:{submit:function(e){e.preventDefault(),t.onSubmit()}}},[r("label",{class:{error:t.formError}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",placeholder:"Email",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),r("img",{staticClass:"input-icon",attrs:{src:"/img/login_min.svg",height:"16px"}}),t._v(" "),r("span",[t._v("НЕВЕРНЫЙ ЛОГИН ИЛИ ПАРОЛЬ")])]),t._v(" "),r("label",{class:{error:t.formError}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"Пароль",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),r("img",{staticClass:"input-icon pass",attrs:{src:"/img/pass_min.svg",width:"16px"}})]),t._v(" "),r("div",{staticClass:"group group-2"},[r("input",{attrs:{type:"submit",value:"Войти"}}),t._v(" "),r("a",{staticClass:"nav-link",on:{click:function(e){e.preventDefault(),t.toggleUrl("/reset/")}}},[t._v("Забыли пароль?")])])]),t._v(" "),r("div",{staticClass:"group h2"},[r("h6",[t._v("Еще не зарегистрированы?")]),t._v(" "),r("p",[t._v("Рекомендуем создать логин и пароль, чтобы всегда иметь доступ к SmmTouch.")]),t._v(" "),r("a",{staticClass:"nav-link",on:{click:function(e){e.preventDefault(),t.toggleUrl("/signup/")}}},[t._v("Регистрация")])])]),t._v(" "),r("div",{staticClass:"sni-group"},[r("div",{staticClass:"group h2"},[r("div",[t._v("Вход через")]),t._v(" "),r("h2",[t._v("Социальные сети")])]),t._v(" "),r("div",{staticClass:"group sni-links"},[r("VKConnect"),t._v(" "),r("FBConnect")],1)])])},[],!1,null,null,null);e.default=l.exports}}]);