(()=>{"use strict";var e,n={782:(e,n,t)=>{t(483);var l=t(370),o=t.n(l),s=new URL(t(650),t.b),c=new URL(t(239),t.b),i=new URL(t(466),t.b),a=new URL(t(81),t.b),r=new URL(t(607),t.b),d=new URL(t(308),t.b),p=new URL(t(863),t.b),u=new URL(t(878),t.b),f=new URL(t(708),t.b),y=new URL(t(786),t.b),m=new URL(t(883),t.b),b=new URL(t(296),t.b),_=new URL(t(854),t.b),g=new URL(t(484),t.b),v=new URL(t(776),t.b),L=new URL(t(388),t.b),h=new URL(t(351),t.b),w=new URL(t(917),t.b),x=new URL(t(791),t.b),E=new URL(t(732),t.b),S=o()(s),k=o()(c),R=o()(i),q=o()(a),U=o()(r),O=o()(d),C=o()(p),P=o()(u),A=o()(f),B=o()(y),F=o()(m),j=o()(b),I=o()(_),V=o()(g),W=o()(v);o()(L),o()(h),o()(w),o()(x),o()(E);var T=t(6),Z=document.querySelector(".open"),M=document.querySelector(".close"),z=document.querySelectorAll(".slider__oneSlider"),D=document.querySelector(".wrapper"),G=document.querySelectorAll(".slider__oneSlider:nth-child(n+7)"),H=document.querySelectorAll(".slider__oneSlider:nth-child(n+9"),J=document.querySelectorAll(".slider__singleTechSlider:nth-child(n+4)"),K=document.querySelector(".slider__tech .open"),N=document.querySelector(".slider__tech .close"),Q=document.querySelector(".menu__open"),X=document.querySelector(".menu__close"),Y=document.querySelector(".menu"),$=document.querySelector(".main__buttonRead span"),ee=document.querySelector(".send_mesage"),ne=document.querySelectorAll(".menu__oneIcon");document.addEventListener("DOMContentLoaded",(function(){window.screen.width<768&&(se(),ce(),ie())}));var te,le,oe,se=function(){new T.ZP(".slider__wrapper",{slidesPerView:"auto",modules:[T.tl],pagination:{el:".slider__dots",clickable:!0}})},ce=function(){new T.ZP(".slider__tech",{slidesPerView:"auto",modules:[T.tl],pagination:{el:".slider__tech_dots",clickable:!0}})},ie=function(){new T.ZP(".price__slider",{slidesPerView:"auto",modules:[T.tl],pagination:{el:".price__dots",clickable:!0}})};Z.addEventListener("click",(function(){window.screen.width<1440&&G.forEach((function(e){e.style.display="flex"})),H.forEach((function(e){e.style.display="flex"})),z.forEach((function(e,n){Z.style.display="none",M.style.display="flex"}))})),M.addEventListener("click",(function(){window.screen.width<1120?G.forEach((function(e){e.style.display="none"})):H.forEach((function(e){e.style.display="none"})),M.style.display="none",Z.style.display="flex"})),window.addEventListener("resize",(te=function(){document.body.clientWidth>=768&&document.body.clientWidth<1440&&(Z.style.display="flex",M.style.display="none",K.style.display="flex",N.style.display="none",J.forEach((function(e){e.style.display="none"})),G.forEach((function(e){e.style.display="none"}))),document.body.clientWidth<768&&(se(),ce(),ie(),G.forEach((function(e){e.style.display="flex"})),Z.style.display="none",M.style.display="none",K.style.display="none",N.style.display="none"),document.body.clientWidth>1440&&(Z.style.display="flex",M.style.display="none",K.style.display="flex",N.style.display="none",J.forEach((function(e){e.style.display="flex"})),G.forEach((function(e){e.style.display="flex"})),H.forEach((function(e){e.style.display="none"})))},le=200,function(){var e=this,n=arguments;clearTimeout(oe),oe=setTimeout((function(){return te.apply(e,n)}),le)})),Q.addEventListener("click",(function(){Y.classList.add("menu__open"),D.classList.add("body_close")})),X.addEventListener("click",(function(){Y.classList.remove("menu__open"),D.classList.remove("body_close")})),document.addEventListener("click",(function(e){e.target.closest(".menu")||e.target.closest(".menu__open")||!e.target.closest(".wrapper")||(Y.classList.remove("menu__open"),D.classList.remove("body_close"),Y.classList.remove("menu_blur")),e.target.closest(".modalFeedBack")||e.target.closest(".menu__oneIcon")||!e.target.closest(".wrapper")||(ae.classList.remove("modalFeedBack__active"),Y.classList.remove("menu_blur")),e.target.closest(".modalCall")||e.target.closest(".menu__oneIcon")||!e.target.closest(".wrapper")||(de.classList.remove("modalCall__active"),Y.classList.remove("menu_blur"))})),K.addEventListener("click",(function(){J.forEach((function(e){e.style.display="flex"})),K.style.display="none",N.style.display="flex"})),N.addEventListener("click",(function(){J.forEach((function(e){e.style.display="none"})),K.style.display="flex",N.style.display="none"})),$.addEventListener("click",(function(){var e=document.querySelector(".main__laptop"),n=document.querySelector(".main__pc");e.style.display="flex",n.style.display="flex","Читать далее"===$.textContent?$.textContent="Скрыть":(e.style.display="none",n.style.display="none",$.textContent="Читать далее")})),ne.forEach((function(e){e.addEventListener("click",(function(){Y.classList.remove("menu__open"),D.classList.remove("body_close"),Y.classList.remove("menu_blur")}))}));var ae=document.querySelector(".modalFeedBack"),re=document.querySelectorAll(".modal_close"),de=document.querySelector(".modalCall"),pe=document.querySelector(".order_call");ee.addEventListener("click",(function(){ae.classList.add("modalFeedBack__active"),D.classList.add("body_close"),Y.classList.add("menu_blur")})),re.forEach((function(e){e.addEventListener("click",(function(){ae.classList.remove("modalFeedBack__active"),de.classList.remove("modalCall__active"),D.classList.remove("body_close"),Y.classList.remove("menu_blur")}))})),pe.addEventListener("click",(function(){de.classList.add("modalCall__active"),D.classList.add("body_close"),Y.classList.add("menu_blur")}))},388:(e,n,t)=>{e.exports=t.p+"img/ViewSonic.1cabed6789e7c6dc5599.png"},791:(e,n,t)=>{e.exports=t.p+"img/acer.bdc6c05c5b91e3a03af7.png"},776:(e,n,t)=>{e.exports=t.p+"img/apple.6f6667b667e949b757b2.png"},854:(e,n,t)=>{e.exports=t.p+"img/arrowRight.8046bf30741e56f2bb52.png"},863:(e,n,t)=>{e.exports=t.p+"img/arrowRight.06f587b4e098f1b3460e.svg"},351:(e,n,t)=>{e.exports=t.p+"img/bosh.bb1a60ee2209b762c747.png"},878:(e,n,t)=>{e.exports=t.p+"img/burger.954cb53e280b65bea91c.png"},81:(e,n,t)=>{e.exports=t.p+"img/call.95885b8d613c3a752f27.png"},917:(e,n,t)=>{e.exports=t.p+"img/hp.0fa7b73adac2be0d41ab.png"},296:(e,n,t)=>{e.exports=t.p+"img/lenovo.4e49e7a5baa8429f1185.png"},239:(e,n,t)=>{e.exports=t.p+"img/logo.4366f1f32b75ab8f5bcc.png"},607:(e,n,t)=>{e.exports=t.p+"img/message.f242c98623490725f3c0.png"},786:(e,n,t)=>{e.exports=t.p+"img/new1.3ef80baa76afa776117c.png"},308:(e,n,t)=>{e.exports=t.p+"img/profile.23481ed2908db638ffff.png"},883:(e,n,t)=>{e.exports=t.p+"img/read.d96fca682c1d715e39f0.png"},708:(e,n,t)=>{e.exports=t.p+"img/repair.283efa969ed0595ef07e.png"},466:(e,n,t)=>{e.exports=t.p+"img/search.f63fb16b0eaa45a24c3e.png"},732:(e,n,t)=>{e.exports=t.p+"img/sony.44a92ce5d9c37d351d32.png"},484:(e,n,t)=>{e.exports=t.p+"img/sumsung.d1fafe06cd8c20c19127.png"},650:(e,n,t)=>{e.exports=t.p+"img/x.4827b896089633bc37fa.png"}},t={};function l(e){var o=t[e];if(void 0!==o)return o.exports;var s=t[e]={exports:{}};return n[e].call(s.exports,s,s.exports,l),s.exports}l.m=n,e=[],l.O=(n,t,o,s)=>{if(!t){var c=1/0;for(d=0;d<e.length;d++){for(var[t,o,s]=e[d],i=!0,a=0;a<t.length;a++)(!1&s||c>=s)&&Object.keys(l.O).every((e=>l.O[e](t[a])))?t.splice(a--,1):(i=!1,s<c&&(c=s));if(i){e.splice(d--,1);var r=o();void 0!==r&&(n=r)}}return n}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[t,o,s]},l.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return l.d(n,{a:n}),n},l.d=(e,n)=>{for(var t in n)l.o(n,t)&&!l.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},l.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),l.p="",(()=>{l.b=document.baseURI||self.location.href;var e={179:0};l.O.j=n=>0===e[n];var n=(n,t)=>{var o,s,[c,i,a]=t,r=0;if(c.some((n=>0!==e[n]))){for(o in i)l.o(i,o)&&(l.m[o]=i[o]);if(a)var d=a(l)}for(n&&n(t);r<c.length;r++)s=c[r],l.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return l.O(d)},t=self.webpackChunk=self.webpackChunk||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})();var o=l.O(void 0,[489],(()=>l(782)));o=l.O(o)})();