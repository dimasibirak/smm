(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{319:function(t,e,n){"use strict";n.r(e);n(18);var r=n(1),a=n.n(r),o=(n(24),{auth:!1,components:{PopupMain:n(97).a},asyncData:function(t){return{code:t.params.code}},data:function(){return{subbed:!1}},methods:{toggleUrl:function(t){this.$router.replace(t)}},created:function(){var t=a()(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$axios.get("confirm/".concat(this.code),{});case 3:e=t.sent,console.log(e),this.subbed=!0,e.data.error&&this.$router.push("/404"),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0),this.$router.push("/404");case 13:case"end":return t.stop()}},t,this,[[0,9]])}));return function(){return t.apply(this,arguments)}}()}),s=n(2),c=Object(s.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("PopupMain",[n("div",{staticClass:"group h2"},[n("div"),t._v(" "),n("h2",[t._v("Подтверждение почты")])]),t._v(" "),t.subbed?[n("p",[t._v("Ваш адрес электронной почты успешно подтвержден.")]),t._v(" "),n("a",{staticClass:"nav-link",on:{click:function(e){e.preventDefault(),t.toggleUrl("/login/")}}},[t._v("Вход")])]:n("p",[t._v("Подождите, система проверяет код.")])],2)},[],!1,null,null,null);e.default=c.exports}}]);