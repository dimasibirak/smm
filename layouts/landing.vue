<template>
  <div id="top" :class="{ 'safari': safari }">
    <Head />
    <nuxt id="content" />
    <!-- <img src="/img/previews/landing-mobile-popup.jpg" style="
    position: absolute;
    width: 100%;
    z-index: 1000;
    top: 0;
    left: 0;
    right: 0;
    opacity: 0.5;
    display: none;
    "> -->
    <Foot />
    <div id="cover"></div>
  </div>
</template>

<script>
import Head from "~/components/landing/Head"
import Foot from "~/components/landing/Foot"
export default{
  components: {
    Head,
    Foot
  },
  head: {
    title: "SmmTouch.ru - Накрутка лайков, подписчиков, просмотров в Инстаграм",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
      { hid: 'description', name: 'description', content: "Накрутить лайки, подписчиков и просмотры в Инстаграме. Быстрая и недорогая накрутка с гарантией." }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preload', as: 'font', href: '/fnt/smmicons.woff', crossorigin: "crossorigin" },
      { rel: 'preload', as: 'font', href: '/fnt/GothamProRegular.woff', crossorigin: "crossorigin" },
      { rel: 'preload', as: 'font', href: '/fnt/GothamProBold.woff', crossorigin: "crossorigin" },
      { rel: 'preload', as: 'font', href: '/fnt/GothamProMedium.woff', crossorigin: "crossorigin" },
      { rel: 'preload', as: 'font', href: '/fnt/Gilroy-Medium.woff', crossorigin: "crossorigin" },
      { rel: 'preload', as: 'font', href: '/fnt/Gilroy-Bold.woff', crossorigin: "crossorigin" },
      { rel: 'preload', as: 'font', href: '/fnt/Gilroy-ExtraBold.woff', crossorigin: "crossorigin" }
    ]
  },
  data(){
    return{
      safari: /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
    }
  }
}
</script>

<style scoped lang="less">
@import "../components/landing/mixins.less";
@font-face{
  font-family: 'Gilroy';
  font-display: swap;
  src: url('/fnt/Gilroy-ExtraBold.eot');
  src: local('Gilroy ExtraBold'), local('Gilroy-ExtraBold'),
  url('/fnt/Gilroy-ExtraBold.eot?#iefix') format('embedded-opentype'),
  url('/fnt/Gilroy-ExtraBold.woff') format('woff'),
  url('/fnt/Gilroy-ExtraBold.ttf') format('truetype');
  font-weight: 800;
  font-style: normal;
}
@font-face{
  font-family: 'Gilroy';
  font-display: swap;
  src: url('/fnt/Gilroy-Heavy.eot');
  src: local('Gilroy Heavy'), local('Gilroy-Heavy'),
  url('/fnt/Gilroy-Heavy.eot?#iefix') format('embedded-opentype'),
  url('/fnt/Gilroy-Heavy.woff') format('woff'),
  url('/fnt/Gilroy-Heavy.ttf') format('truetype');
  font-weight: 900;
  font-style: normal;
}
@font-face{
  font-family: 'Gilroy';
  font-display: swap;
  src: url('/fnt/Gilroy-LightItalic.eot');
  src: local('Gilroy Light Italic'), local('Gilroy-LightItalic'),
  url('/fnt/Gilroy-LightItalic.eot?#iefix') format('embedded-opentype'),
  url('/fnt/Gilroy-LightItalic.woff') format('woff'),
  url('/fnt/Gilroy-LightItalic.ttf') format('truetype');
  font-weight: 300;
  font-style: italic;
}
@font-face{
  font-family: 'Gilroy';
  font-display: swap;
  src: url('/fnt/Gilroy-ThinItalic.eot');
  src: local('Gilroy Thin Italic'), local('Gilroy-ThinItalic'),
  url('/fnt/Gilroy-ThinItalic.eot?#iefix') format('embedded-opentype'),
  url('/fnt/Gilroy-ThinItalic.woff') format('woff'),
  url('/fnt/Gilroy-ThinItalic.ttf') format('truetype');
  font-weight: 100;
  font-style: italic;
}
@font-face{
  font-family: 'Gilroy';
  font-display: swap;
  src: url('/fnt/Gilroy-BlackItalic.eot');
  src: local('Gilroy Black Italic'), local('Gilroy-BlackItalic'),
  url('/fnt/Gilroy-BlackItalic.eot?#iefix') format('embedded-opentype'),
  url('/fnt/Gilroy-BlackItalic.woff') format('woff'),
  url('/fnt/Gilroy-BlackItalic.ttf') format('truetype');
  font-weight: 900;
  font-style: italic;
}
@font-face{
  font-family: 'Gilroy';
  font-display: swap;
  src: url('/fnt/Gilroy-BoldItalic.eot');
  src: local('Gilroy Bold Italic'), local('Gilroy-BoldItalic'),
  url('/fnt/Gilroy-BoldItalic.eot?#iefix') format('embedded-opentype'),
  url('/fnt/Gilroy-BoldItalic.woff') format('woff'),
  url('/fnt/Gilroy-BoldItalic.ttf') format('truetype');
  font-weight: bold;
  font-style: italic;
}
@font-face{
  font-family: 'Gilroy';
  font-display: swap;
  src: url('/fnt/Gilroy-SemiBold.eot');
  src: local('Gilroy SemiBold'), local('Gilroy-SemiBold'),
  url('/fnt/Gilroy-SemiBold.eot?#iefix') format('embedded-opentype'),
  url('/fnt/Gilroy-SemiBold.woff') format('woff'),
  url('/fnt/Gilroy-SemiBold.ttf') format('truetype');
  font-weight: 600;
  font-style: normal;
}
@font-face{
  font-family: 'Gilroy';
  font-display: swap;
  src: url('/fnt/Gilroy-UltraLightItalic.eot');
  src: local('Gilroy UltraLight Italic'), local('Gilroy-UltraLightItalic'),
  url('/fnt/Gilroy-UltraLightItalic.eot?#iefix') format('embedded-opentype'),
  url('/fnt/Gilroy-UltraLightItalic.woff') format('woff'),
  url('/fnt/Gilroy-UltraLightItalic.ttf') format('truetype');
  font-weight: 200;
  font-style: italic;
}
@font-face{
  font-family: 'Gilroy';
  font-display: swap;
  src: url('/fnt/Gilroy-SemiBoldItalic.eot');
  src: local('Gilroy SemiBold Italic'), local('Gilroy-SemiBoldItalic'),
  url('/fnt/Gilroy-SemiBoldItalic.eot?#iefix') format('embedded-opentype'),
  url('/fnt/Gilroy-SemiBoldItalic.woff') format('woff'),
  url('/fnt/Gilroy-SemiBoldItalic.ttf') format('truetype');
  font-weight: 600;
  font-style: italic;
}
@font-face{
  font-family: 'Gilroy';
  font-display: swap;
  src: url('/fnt/Gilroy-Light.eot');
  src: local('Gilroy Light'), local('Gilroy-Light'),
  url('/fnt/Gilroy-Light.eot?#iefix') format('embedded-opentype'),
  url('/fnt/Gilroy-Light.woff') format('woff'),
  url('/fnt/Gilroy-Light.ttf') format('truetype');
  font-weight: 300;
  font-style: normal;
}
@font-face{
  font-family: 'Gilroy';
  font-display: swap;
  src: url('/fnt/Gilroy-MediumItalic.eot');
  src: local('Gilroy Medium Italic'), local('Gilroy-MediumItalic'),
  url('/fnt/Gilroy-MediumItalic.eot?#iefix') format('embedded-opentype'),
  url('/fnt/Gilroy-MediumItalic.woff') format('woff'),
  url('/fnt/Gilroy-MediumItalic.ttf') format('truetype');
  font-weight: 500;
  font-style: italic;
}
@font-face{
  font-family: 'Gilroy';
  font-display: swap;
  src: url('/fnt/Gilroy-ExtraBoldItalic.eot');
  src: local('Gilroy ExtraBold Italic'), local('Gilroy-ExtraBoldItalic'),
  url('/fnt/Gilroy-ExtraBoldItalic.eot?#iefix') format('embedded-opentype'),
  url('/fnt/Gilroy-ExtraBoldItalic.woff') format('woff'),
  url('/fnt/Gilroy-ExtraBoldItalic.ttf') format('truetype');
  font-weight: 800;
  font-style: italic;
}
@font-face{
  font-family: 'Gilroy';
  font-display: swap;
  src: url('/fnt/Gilroy-Regular.eot');
  src: local('Gilroy Regular'), local('Gilroy-Regular'),
  url('/fnt/Gilroy-Regular.eot?#iefix') format('embedded-opentype'),
  url('/fnt/Gilroy-Regular.woff') format('woff'),
  url('/fnt/Gilroy-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
@font-face{
  font-family: 'Gilroy';
  font-display: swap;
  src: url('/fnt/Gilroy-HeavyItalic.eot');
  src: local('Gilroy Heavy Italic'), local('Gilroy-HeavyItalic'),
  url('/fnt/Gilroy-HeavyItalic.eot?#iefix') format('embedded-opentype'),
  url('/fnt/Gilroy-HeavyItalic.woff') format('woff'),
  url('/fnt/Gilroy-HeavyItalic.ttf') format('truetype');
  font-weight: 900;
  font-style: italic;
}
@font-face{
  font-family: 'Gilroy';
  font-display: swap;
  src: url('/fnt/Gilroy-Medium.eot');
  src: local('Gilroy Medium'), local('Gilroy-Medium'),
  url('/fnt/Gilroy-Medium.eot?#iefix') format('embedded-opentype'),
  url('/fnt/Gilroy-Medium.woff') format('woff'),
  url('/fnt/Gilroy-Medium.ttf') format('truetype');
  font-weight: 500;
  font-style: normal;
}
@font-face{
  font-family: 'Gilroy';
  font-display: swap;
  src: url('/fnt/Gilroy-RegularItalic.eot');
  src: local('Gilroy Regular Italic'), local('Gilroy-RegularItalic'),
  url('/fnt/Gilroy-RegularItalic.eot?#iefix') format('embedded-opentype'),
  url('/fnt/Gilroy-RegularItalic.woff') format('woff'),
  url('/fnt/Gilroy-RegularItalic.ttf') format('truetype');
  font-weight: normal;
  font-style: italic;
}
@font-face{
  font-family: 'Gilroy';
  font-display: swap;
  src: url('/fnt/Gilroy-UltraLight.eot');
  src: local('Gilroy UltraLight'), local('Gilroy-UltraLight'),
  url('/fnt/Gilroy-UltraLight.eot?#iefix') format('embedded-opentype'),
  url('/fnt/Gilroy-UltraLight.woff') format('woff'),
  url('/fnt/Gilroy-UltraLight.ttf') format('truetype');
  font-weight: 200;
  font-style: normal;
}
@font-face{
  font-family: 'Gilroy';
  font-display: swap;
  src: url('/fnt/Gilroy-Bold.eot');
  src: local('Gilroy Bold'), local('Gilroy-Bold'),
  url('/fnt/Gilroy-Bold.eot?#iefix') format('embedded-opentype'),
  url('/fnt/Gilroy-Bold.woff') format('woff'),
  url('/fnt/Gilroy-Bold.ttf') format('truetype');
  font-weight: bold;
  font-style: normal;
}
@font-face{
  font-family: 'Gilroy';
  font-display: swap;
  src: url('/fnt/Gilroy-Thin.eot');
  src: local('Gilroy Thin'), local('Gilroy-Thin'),
  url('/fnt/Gilroy-Thin.eot?#iefix') format('embedded-opentype'),
  url('/fnt/Gilroy-Thin.woff') format('woff'),
  url('/fnt/Gilroy-Thin.ttf') format('truetype');
  font-weight: 100;
  font-style: normal;
}
@font-face{
  font-family: 'Gilroy';
  font-display: swap;
  src: url('/fnt/Gilroy-Black.eot');
  src: local('Gilroy Black'), local('Gilroy-Black'),
  url('/fnt/Gilroy-Black.eot?#iefix') format('embedded-opentype'),
  url('/fnt/Gilroy-Black.woff') format('woff'),
  url('/fnt/Gilroy-Black.ttf') format('truetype');
  font-weight: 900;
  font-style: normal;
}
@font-face{
  font-family: "SMMIcons";
  font-display: swap;
  src: url("/fnt/smmicons.eot");
  src:
  url("/fnt/smmicons.eot?#iefix") format("embedded-opentype"),
  url("/fnt/smmicons.woff") format("woff"),
  url("/fnt/smmicons.ttf") format("truetype");
  font-style: normal;
  font-weight: normal;
}
@font-face {
  font-family: "GothamPro";
  font-display: swap;
  src: url("/fnt/GothamProRegular.eot");
  src: url("/fnt/GothamProRegular.eot?#iefix")format("embedded-opentype"),
  url("/fnt/GothamProRegular.woff") format("woff"),
  url("/fnt/GothamProRegular.ttf") format("truetype");
  font-style: normal;
  font-weight: normal;
}
@font-face {
  font-family: "GothamPro";
  font-display: swap;
  src: url("/fnt/GothamProMedium.eot");
  src: url("/fnt/GothamProMedium.eot?#iefix")format("embedded-opentype"),
  url("/fnt/GothamProMedium.woff") format("woff"),
  url("/fnt/GothamProMedium.ttf") format("truetype");
  font-style: normal;
  font-weight: 500;
}
@font-face {
  font-family: "GothamPro";
  font-display: swap;
  src: url("/fnt/GothamProBold.eot");
  src: url("/fnt/GothamProBold.eot?#iefix")format("embedded-opentype"),
  url("/fnt/GothamProBold.woff") format("woff"),
  url("/fnt/GothamProBold.ttf") format("truetype");
  font-style: normal;
  font-weight: 700;
}

#top{
  line-height: 1;
  font-weight: 500;
  font-family: "Gilroy", Helvetica, Arial, sans-serif;
  color: #444;
  overflow-x: hidden;
  min-width: 320px;
  & /deep/ .back{
    background-color: #4ab6f7;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    &.back-1{
      background-color: #fff;
      background-image: url(/img/back-1.webp);
    }
    &.back-2{
      background-image: url(/img/back-2.webp)!important;
    }
    &.back-3{
      background-image: url(/img/back-3.webp)!important;
    }
    &.back-4{
      background-image: url(/img/back-4.webp)!important;
    }
    &.back-5{
      background-image: url(/img/back-5.webp)!important;
    }
    @media (min-width: 576px){
      &.back-1{
        background-image: url(/img/back-tablet-1.webp);
      }
      &.back-2{
        background-image: url(/img/back-tablet-2.webp)!important;
      }
      &.back-3{
        background-image: url(/img/back-tablet-3.webp)!important;
      }
      &.back-4{
        background-image: url(/img/back-tablet-4.webp)!important;
      }
      &.back-5{
        background-image: url(/img/back-tablet-5.webp)!important;
      }
    }
    @media (min-width: 992px){
      &.back-1{
        background-image: url(/img/back-desktop-1.webp);
      }
      &.back-2{
        background-image: url(/img/back-desktop-2.webp)!important;
      }
      &.back-3{
        background-image: url(/img/back-desktop-3.webp)!important;
      }
      &.back-4{
        background-image: url(/img/back-desktop-4.webp)!important;
      }
      &.back-5{
        background-image: url(/img/back-desktop-5.webp)!important;
      }
    }
  }
  &.safari /deep/ .back{
    &.back-1{
      background-image: url(/img/back-1.jpg)!important;
    }
    &.back-2{
      background-image: url(/img/back-2.jpg)!important;
    }
    &.back-3{
      background-image: url(/img/back-3.jpg)!important;
    }
    &.back-4{
      background-image: url(/img/back-4.jpg)!important;
    }
    &.back-5{
      background-image: url(/img/back-5.jpg)!important;
    }
    @media (min-width: 576px){
      &.back-1{
        background-image: url(/img/back-tablet-1.jpg)!important;
      }
      &.back-2{
        background-image: url(/img/back-tablet-2.jpg)!important;
      }
      &.back-3{
        background-image: url(/img/back-tablet-3.jpg)!important;
      }
      &.back-4{
        background-image: url(/img/back-tablet-4.jpg)!important;
      }
      &.back-5{
        background-image: url(/img/back-tablet-5.jpg)!important;
      }
    }
    @media (min-width: 992px){
      &.back-1{
        background-image: url(/img/back-desktop-1.jpg)!important;
      }
      &.back-2{
        background-image: url(/img/back-desktop-2.jpg)!important;
      }
      &.back-3{
        background-image: url(/img/back-desktop-3.jpg)!important;
      }
      &.back-4{
        background-image: url(/img/back-desktop-4.jpg)!important;
      }
      &.back-5{
        background-image: url(/img/back-desktop-5.jpg)!important;
      }
    }
  }
  /* & /deep/ a{
    text-decoration: none;
    cursor: pointer;
  } */
  & /deep/ .si{
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &:before,&:after{
      font-family: SMMIcons;
      font-weight: normal;
    }
    &.si-usd:before {
      content: "\e000";
    }
    &.si-rub:before {
      content: "\e001";
    }
    &.si-logo:before {
      content: "\e002";
    }
    &.si-angle-left:before {
      content: "\e003";
    }
    &.si-angle-right:before {
      content: "\e004";
    }
    &.si-exit:before {
      content: "\e005";
    }
    &.si-menu:before {
      content: "\e006";
    }
    &.si-sni-f:before {
      content: "\e007";
    }
    &.si-sni-i:before {
      content: "\e008";
    }
    &.si-sni-v:before {
      content: "\e009";
    }
    &.si-envelope:before {
      content: "\e00a";
    }
    &.si-star:before {
      content: "\e00b";
    }
    &.si-ok:before {
      content: "\e00c";
    }
    &.si-cart:before {
      content: "\e00d";
    }
    &.si-signin:before {
      content: "\e00e";
    }
    &.si-sort-down:before {
      content: "\e00f";
    }
    &.si-double-angle-down:before {
      content: "\e010";
    }
    &.si-alt-angle-right:before {
      content: "\e011";
    }
    &.si-step-1:before {
      content: "\e012";
    }
    &.si-step-2:before {
      content: "\e013";
    }
    &.si-step-3:before {
      content: "\e014";
    }
    &.si-expect-1:before {
      content: "\e015";
    }
    &.si-expect-2:before {
      content: "\e016";
    }
    &.si-expect-3:before {
      content: "\e017";
    }
    &.si-a-usd:after {
      content: "\e000";
    }
    &.si-a-rub:after {
      content: "\e001";
    }
    &.si-a-logo:after {
      content: "\e002";
    }
    &.si-a-angle-left:after {
      content: "\e003";
    }
    &.si-a-angle-right:after {
      content: "\e004";
    }
    &.si-a-exit:after {
      content: "\e005";
    }
    &.si-a-menu:after {
      content: "\e006";
    }
    &.si-a-sni-f:after {
      content: "\e007";
    }
    &.si-a-sni-i:after {
      content: "\e008";
    }
    &.si-a-sni-v:after {
      content: "\e009";
    }
    &.si-a-envelope:after {
      content: "\e00a";
    }
    &.si-a-star:after {
      content: "\e00b";
    }
    &.si-a-ok:after {
      content: "\e00c";
    }
    &.si-a-cart:after {
      content: "\e00d";
    }
    &.si-a-signin:after {
      content: "\e00e";
    }
    &.si-a-sort-down:after {
      content: "\e00f";
    }
    &.si-a-double-angle-down:after {
      content: "\e010";
    }
    &.si-a-alt-angle-right:after {
      content: "\e011";
    }
  }
  & /deep/ .wrap{
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;
    max-width: 320px;
    box-sizing: border-box;
    @media (min-width: 384px){
      max-width: 354px;
    }
    @media (min-width: 460px){
      max-width: 430px;
    }
    @media (min-width: 576px){
      max-width: 540px;
    }
    @media (min-width: 768px){
      max-width: 720px;
    }
    @media (min-width: 992px){
      max-width: 960px;
    }
    @media (min-width: 1200px){
      max-width: 1140px;
    }
  }
  & /deep/ ::selection{
    background: #333;
    color: #fff;
  }
  & /deep/ .btn{
    display: inline-block;
    white-space: nowrap;
    text-align: center;
    padding: 11px 35px;
    border-radius: 100px;
    color: #009dff;
    border: 2px solid #009dff;
    background-color: #fff;
    transition: all 0.2s ease;
    font-size: 14px;
    font-weight: 800;
    &:hover{
      background-color: #009dff;
      color: #fff;
    }
    &.si:before{
      font-size: 20px;
      margin-right: 15px;
    }
    &.blue, .blue &{
      color: #fff;
      background-color: #009dff;
      box-shadow: 0 0 40px rgba(0,156,255,0.7);
      &:hover{
        color: #009dff;
        background-color: #fff;
        box-shadow: none;
      }
    }
  }
  #cover{
    visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    transition: opacity 0.5s ease 0s, visibility 0.5s ease 0s;
    opacity: 0;
    .menu-open &{
      opacity: 0.8;
      visibility: visible;
    }
  }
  & /deep/ #content {
    padding-top: 50px;
      @media (min-width: 576px){
        padding-top: 60px;
      }
      @media (min-width: 768px){
        padding-top: 64px;
      }
      @media (min-width: 992px){
        padding-top: 72px;
      }
      @media (min-width: 1200px){
        padding-top: 80px;
      }
    .menu();
    & > section, & > #services > section{
      padding-top: 90px;
      padding-bottom: 90px;
      &#services{
        padding-top: 0;
        padding-bottom: 0;
      }
      &.back{
        color: #fff;
      }
      & > h2{
        text-align: center;
        font-weight: 800;
        font-size: 18px;
        margin-bottom: 45px;
      }
      @media (min-width: 768px){
        & > h2{
          font-size: 22px;
        }
      }
      @media (min-width: 1200px){
        & > h2{
          font-size: 23px;
          margin-bottom: 90px;
        }
      }
    }
  }
  footer{
    .menu()
  }
}
</style>
