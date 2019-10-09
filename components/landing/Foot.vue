<template>
  <footer>
    <div class="wrap">
      <div class="desc">
        <h3>SMMTOUCH</h3>
        <p>
          Займись раскруткой своей страницы уже сегодня!<br />
          Мы привлекаем качественную аудиторию для Вашего Instagram-аккаунта,
          что сделает Вас популярным уже через несколько часов.
        </p>
      </div>
      <div class="menu-wrap">
        <h3>НАВИГАЦИЯ</h3>
        <ul class="menu">
          <li v-for="(link, key) in links">
            <nuxt-link :to="link.to" class="si si-alt-angle-right">
              {{ link.text }}
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="contacts">
        <h3>КОНТАКТЫ</h3>
        <p>
          <a href="mailto:info@smmtouch.ru" class="si si-envelope">
            info@smmtouch.ru
          </a>
        </p>
      </div>
    </div>
    <hr>
    <div class="wrap copy">
      <nuxt-link :to="{ href: '/', hash: 'top' }" class="logo">
        <img src="/img/logo.png" alt="logo" />
      </nuxt-link>
      <p>&copy; 2018 Все права защищены</p>
      <div class="sni">
        <a href="https://www.instagram.com/smmtouch/" target="_blank" class="si si-sni-i"></a>
        <a href="https://vk.com/smmtouch" target="_blank" class="si si-sni-v"></a>
        <a href="https://fb.com/" target="_blank" class="si si-sni-f"></a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data(){
    return{
      links: [
        {
          text: 'Главная',
          to: { href: '/', hash: 'home' }
        },
        {
          text: 'Список услуг',
          to: { href: '/', hash: 'services' }
        },
        {
          text: 'Преимущества',
          to: { href: '/', hash: 'features' }
        },
        {
          text: 'Как купить',
          to: { href: '/', hash: 'how' }
        },
        {
          text: 'Накрутка',
          to: { href: '/', hash: 'description' }
        },
        {
          text: 'Отзывы',
          to: { href: '/', hash: 'reviews' }
        },
        {
          text: 'FAQ',
          to: { href: '/', hash: 'faq' }
        },
        {
          text: 'Блог',
          to: '/blog/'
        },
        {
          text: 'Личный кабинет',
          to: '/login/'
        },
      ]
    }
  }
}
</script>

<style scoped lang='less'>
footer {
  background: #1f2225;
  color: #7a7d84;
  .wrap:first-child {
    padding-top: 90px;
    padding-bottom: 88px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    a {
      transition: all 0.2s ease;
      &:hover {
        color: #fff;
      }
    }
    h3{
      font-size: 15px;
      font-weight: 700;
      color: #fff;
      margin-bottom: 20px;
    }
    .desc, .menu-wrap, .contacts {
      width: 100%;
      margin-bottom: 30px;
    }
    p{
      font-size: 14px;
      font-weight: normal;
      font-family: "GothamPro", Helvetica, Arial, sans-serif;
      line-height: 25.2px;
    }
    .menu {
      text-align: left;
      line-height: 19px;
      li{
        font-size: 12px;
        margin-top: 6px;
        font-weight: 500;
        font-family: "GothamPro", Helvetica, Arial, sans-serif;
        text-transform: uppercase;
      }
    }
    .contacts {
      margin-bottom: 0;
      p a {
        &:before{
          vertical-align: -1px;
        }
      }
    }
  }
  hr{
    border: 0;
    border-top: 1px solid #333;
    margin: 0;
  }
  .copy {
    text-align: center;
    padding-top: 30px;
    padding-bottom: 28px;
    .logo {
      display: block;
      line-height: 0;
      img{
        width: auto;
        height: 29px;
      }
    }
    p{
      color: #fff;
      font-size: 14px;
      margin: 15px auto 15px;
    }
    .sni {
      display: flex;
      justify-content: center;
      align-items: center;
      a {
        border-radius: 100%;
        display: flex;
        background-color: #5d6066;
        color: #222;
        justify-content: center;
        align-items: center;
        width: 2em;
        height: 2em;
        font-size: 12px;
        transition: all 0.2s ease;
        margin-left: 14px;
        &:hover {
          background-color: #fff;
        }
        &:first-child{
          margin-left: 0;
        }
        &:before{
          margin-bottom: 1px
        }
      }
    }
  }
}
@media screen and (min-width: 768px){
  footer {
    .wrap:first-child {
      flex-wrap: nowrap;
      h3{
        font-size: 16px;
        margin-bottom: 9px;
      }
      .desc {
        width: 50%;
        margin-bottom: 0;
        p{
          text-align: justify;
          text-align-last: justify;
        }
      }
      p{
        line-height: 1.4;
      }
      .menu {
        text-align: left;
        line-height: normal;
        li{
          font-size: 12px;
          margin-top: 5px;
        }
      }
      .desc,.menu-wrap,.contacts{
        width: 33.33%;
      }
      .menu-wrap,.contacts{
        padding-left: 9.5%;
      }
    }
    .copy {
      padding-top: 30px;
      padding-bottom: 28px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .logo img {
        height: 33px;
      }
      p{
        margin: 0;
      }
      .sni {
        justify-content: flex-start;
        a {
          font-size: 15px;
          margin-left: 15px;
          &:before{
            margin-bottom: 2px
          }
        }
      }
    }
  }
}
@media screen and (min-width: 1200px){
  footer .wrap:first-child{
    padding-top: 90px;
    padding-bottom: 88px;
    h3{
      font-size: 15px;
      margin-bottom: 16px;
    }
    p{
      font-size: 14px;
      line-height: 1.8;
    }
    .menu li{
      margin-top: 0;
      font-size: 12px;
      line-height: 24px;

    }
  }
  footer .copy{
    p{
      font-size: 14px;
    }
    .sni a{
      font-size: 12px;
    }
  }
}
</style>
