<template>
  <header id="nav">
    <div class="wrap">
      <a id="logo" @click="$router.push('/')">
        <img class="light" src="/img/logo.png" alt="logo">
        <img class="dark" src="/img/logo-dark.png" alt="logo">
      </a>
      <div id="panel">
        <a id="close" class="si si-exit" @click.prevent="toggleMenu"></a>
        <div id="panel-start">
          <ul id="menu" v-scroll-spy-active="{ selector: '.spy' }" v-scroll-spy-link="{ selector: '.spy'}">
            <li><nuxt-link to="/" class="spy" @click.native="toggleMenu">ГЛАВНАЯ</nuxt-link></li>
            <li id="service-list" :class="{ open: services }">
              <nuxt-link :to="{ path: '/', hash: 'services' }" class="spy" v-if="currentDevice === 'desktop'" @click.native="toggleServices">СПИСОК УСЛУГ</nuxt-link>
              <a class="spy" v-else @click="toggleServices">СПИСОК УСЛУГ</a>
              <ul>
                <li><nuxt-link :to="{ path: '/', hash: 'service1' }" @click.native="toggleMenu">ПОДПИСЧИКИ</nuxt-link></li>
                <li><nuxt-link :to="{ path: '/', hash: `service${ currentDevice === 'desktop' ? '1' : '2' }` }" @click.native="toggleMenu">ЛАЙКИ</nuxt-link></li>
                <li><nuxt-link :to="{ path: '/', hash: `service${ currentDevice === 'desktop' ? '1' : '3' }` }" @click.native="toggleMenu">ПРОСМОТРЫ</nuxt-link></li>
                <li><nuxt-link :to="{ path: '/', hash: `service${ currentDevice === 'desktop' ? '2' : currentDevice === 'tablet' ? '2' : '4' }` }" @click.native="toggleMenu">АВТОЛАЙКИ</nuxt-link></li>
                <li><nuxt-link :to="{ path: '/', hash: `service${ currentDevice === 'desktop' ? '2' : currentDevice === 'tablet' ? '3' : '5' }` }" @click.native="toggleMenu">АВТОПРОСМОТРЫ</nuxt-link></li>
                <li><nuxt-link :to="{ path: '/', hash: `service${ currentDevice === 'desktop' ? '2' : currentDevice === 'tablet' ? '4' : '6' }` }" @click.native="toggleMenu">ПРОСМОТРЫ ИСТОРИЙ</nuxt-link></li>
              </ul>
            </li>
            <li><nuxt-link :to="{ path: '/', hash: 'features' }" class="spy" @click.native="toggleMenu">ПРЕИМУЩЕСТВА</nuxt-link></li>
            <li><nuxt-link :to="{ path: '/', hash: 'how' }" class="spy" @click.native="toggleMenu">КАК КУПИТЬ</nuxt-link></li>
            <li><nuxt-link :to="{ path: '/', hash: 'description' }" class="spy" @click.native="toggleMenu">НАКРУТКА</nuxt-link></li>
            <li><nuxt-link :to="{ path: '/', hash: 'reviews' }" class="spy" @click.native="toggleMenu">ОТЗЫВЫ</nuxt-link></li>
            <li><nuxt-link :to="{ path: '/', hash: 'faq' }" class="spy" @click.native="toggleMenu">FAQ</nuxt-link></li>
            <li><nuxt-link id="blog-link" to="/blog/" @click.native="toggleMenu">БЛОГ</nuxt-link></li>
            <li id="lang" :class="{ open: lang }">
              <a @click="toggleLang"><span>RU</span></a>
              <ul>
                <li><a>РУССКИЙ<img alt="lang_rus" src="/img/lang/ru.jpg"></a></li>
                <li><a>ENGLISH<img alt="lang_eng" src="/img/lang/en.jpg"></a></li>
              </ul>
            </li>
            <li><nuxt-link to="/login/" id="signin-btn" class="si si-a-signin" @click.native="toggleMenu"><span>ЛИЧНЫЙ КАБИНЕТ </span></nuxt-link></li>
          </ul>
          <hr>
          <p id="today">
            Займись продвижением и раскруткой своей страницы уже сегодня!<br>
            Мы привлекаем качественную аудиторию для Вашего Instagram-аккаунта,
            что сделает Вас популярным уже через несколько часов.<br>
            <a href="mailto:info@smmtouch.ru" id="mail" class="si si-envelope"> info@smmtouch.ru</a><br>
          </p>
        </div>
        <p id="copy">&copy; 2018 SMMTOUCH</p>
      </div>
      <a id="menu-btn" class="si si-menu" @click.prevent="toggleMenu"></a>
    </div>
  </header>
</template>

<script>
export default {
  data(){
    return{
      nav: null,
      menu: false,
      services: false,
      lang: false,
      currentDevice: 'desktop'
    }
  },
  methods: {
    toggleMenu(){
      if (this.currentDevice === 'desktop') {
        return true
      }
      document.body.classList.toggle("menu-open")
      this.menu = !this.menu
    },
    toggleServices(event){
      if (!this.menu) {
        return true;
      }
      this.services = !this.services
    },
    toggleLang(event){
      if (!this.menu) {
        return true;
      }
      this.lang = !this.lang
    },
    onScroll(){
      const el = document.scrollingElement || document.documentElement;
      if(el.scrollTop >= 150) {
        this.nav.classList.add("fixed")
      }
      else {
        this.nav.classList.remove("fixed")
      }
    },
    onResize(){
      const currentWidth = document.body.clientWidth
      if (currentWidth < 768) {
        this.currentDevice = "mobile"
      }
      else if (currentWidth < 992) {
        this.currentDevice = "tablet"
      }
      else {
        this.currentDevice = "desktop"
      }
      if (this.currentDevice === 'desktop') {
        document.body.classList.remove("menu-open")
        this.menu = false
        this.services = false
        this.lang = false
      }
    }
  },
  created() {
    window.addEventListener("scroll", this.onScroll)
    window.addEventListener("resize", this.onResize)
    this.$nextTick(function(){
      this.nav = document.getElementById("nav")
      this.onScroll()
      this.onResize()
    })
  },
  destroyed(){
    window.removeEventListener("scroll", this.onScroll)
    window.removeEventListener("resize", this.onResize)
  }
}
</script>

<style scoped lang="less">
@import "mixins.less";

#nav{
  position: fixed;
  z-index: 999;
  background: #fff;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  border-bottom: 1px solid #eee;
  .menu();
  .wrap{
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
#logo{
  height: 100%;
  display: block;
  padding: 10px 15px;
  padding: 15px;
  margin-left: -15px;
  img{
    height: 100%;
    width: auto;
  }
  .light{
    display: none;
  }
}
@media (max-width: 991px){
  #panel{
    display: flex;
    visibility: hidden;
    flex-flow: column;
    justify-content: space-between;
    position: absolute;
    top: 0;
    left: auto;
    right: 0;
    width: 0;
    background: #565656;
    height: 100vh;
    width: 300px;
    transform: translateX(300px);
    @media (min-width: 460px){
      width: 350px;
      transform: translateX(350px);
    }
    @media (min-width: 768px){
      width: 50vw;
      transform: translateX(50vw);
    }
    padding: 107px 40px 43px;
    overflow-y: auto;
    color: #fff;
    transition: visibility 0.5s ease 0s;
    .menu-open &{
      visibility: visible;
    }
    #close{
      position: absolute;
      top: 15px;
      right: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 60px;
      height: 60px;
      font-size: 24px;
    }
    #menu{
      font-size: 20px;
      line-height: 41px;
      margin-bottom: 32px;
      a{
        &.active{
          color:#009dff;
          font-weight: 800;
        }
        &:hover, &:focus{
          opacity: 0.6;
        }
      }
    }
    #service-list > ul{
      padding-left: 15px;
    }
    #lang > a{
      padding: 10px;
      border: 2px solid #fff;
      border-radius: 100%;
      font-size: 14px;
    }
    #lang > ul{
      text-align: right;
      line-height: 3;
    }
    #service-list, #lang{
      & > ul{
        height: 0;
        overflow: hidden;
      }
      &.open > ul{
        height: auto;
      }
    }
    hr{
      width: 100%;
      border: none;
      border-bottom: 1px solid #888;
      margin: 32px 0 30px;
    }
    #today{
      letter-spacing: 0px;
      font-weight: 500;
      font-size: 14px;
      line-height: 25px;
    }
    #mail{
      display: inline-block;
      margin: 20px 0;
      &:before{
        vertical-align: -2px;
      }
    }
    #copy{
      text-align: center;
      font-size: 12px;
    }
  }
}
#lang > ul img{
  vertical-align: -5px;
  margin-left: 15px;
}
#signin-btn:after{
  vertical-align: -1px;
}
#menu-btn{
  font-size: 30px;
  height: 100%;
  width: 52px;
  margin-right: -15px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 550ms;
  &:hover, &:focus{
    opacity: 0.6;
  }
  &:before{
    transition: transform 550ms;
  }
  .menu-open &:before{
    transform: rotateZ(-90deg);
  }
}
@media (min-width: 384px){
  max-width: 354px;
}
@media (min-width: 460px){
  max-width: 430px;
}
@media (min-width: 992px){
  #nav{
    height: 72px;
    background: rgba(0,156,255,0.7);
    transition: height 0.5s;
    border-bottom: none;
    &.fixed{
      height: 60px;
      background: #fff;
      border-bottom: 1px solid #eee;
      #logo img{
        .safari &{
          height: 23px;
          width: 70px;
        }
      }
    }
  }
  #logo{
    padding: 19px 15px;
    .dark{
      display: none;
    }
    .light{
      display: inline-block;
    }
    .fixed &{
      padding: 18.3px 15px;
      .dark{
        display: inline-block;
      }
      .light{
        display: none;
      }
    }
  }
  #panel{
    &, #panel-start, #menu, #menu > li, #menu > li > a{
      height: 100%;
    }
    #menu{
      display: flex;
      font-size: 12px;
      li{
        position: relative;
        &#service-list > ul > li{
          &:hover, &:focus{
            background: rgba(82, 82, 82, 0.32);
          }
        }
        &#service-list, &#lang{
          & > ul{
            flex-flow: column;
            position: absolute;
            white-space: nowrap;
            top: 100%;
            left: 0;
            background: rgba(0,156,255,0.7);
            .fixed &{
              background: #fff;
              border: 1px solid #eee;
              border-top: 0;
              margin-top: 1px;
            }
            .fixed & > li{
              &:hover, &:focus{
                background: rgba(175, 175, 175, 0.32);
              }
            }
          }
          &:hover > ul{
            display: flex;
          }
        }
        &#lang > ul{
          left: auto;
          right: 0;
          a{
            justify-content: flex-end;
          }
        }
        &#lang > a span{
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border: 2px solid #fff;
          border-radius: 34px;
          font-weight: 700;
          margin: -2px;
          .fixed &{
            border-color: #999;
          }
        }
        a{
          display: flex;
          align-items: center;
          padding: 15px 12px;
          color: #fff;
          .fixed &{
            color: #999;
            &.active, &:hover, &:focus{
              color: #33363a;
            }
          }
          &#signin-btn{
            font-size: 20px;
            margin-right: -15px;
          }
          &.active{
            font-weight: 800;
          }
          &:hover, &:focus{
            opacity: 0.6;
          }
        }
      }
    }
    #close, #service-list > ul, #lang > ul, #signin-btn span, hr, #today, #mail, #copy{
      display: none;
    }
  }
  #menu-btn{
    display: none;
  }
}
@media (min-width: 1200px){
  #nav{
    height: 80px;
  }
  #panel #menu li a{
    padding: 15px;
  }
}
</style>
