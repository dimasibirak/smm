<template>
  <section>
    <div class="header">
      <h2>Наши преимущества</h2>
    </div>
    <div class="content wrap">
      <div id="real" class="item">
        <div class="illustration">
          <div id="real-circle"></div>
          <img id="real-1" class="part" :alt="text[0].h3" :title="text[0].h3" src="/img/real-1.svg">
          <img id="real-2" class="part" :alt="text[0].h3" :title="text[0].h3" src="/img/real-2.svg">
          <img id="real-3" class="part" :alt="text[0].h3" :title="text[0].h3" src="/img/real-4.svg">
        </div>
        <h3>{{ text[0].h3 }}</h3>
        <p>{{ text[0].p }}</p>
      </div>
      <div id="price" class="item">
        <div class="illustration">
          <img id="price-3" class="part" :alt="text[1].h3" :title="text[1].h3" src="/img/prices-1.svg">
          <img id="price-2" class="part" :alt="text[1].h3" :title="text[1].h3" src="/img/prices-3.svg">
          <img id="price-1" class="part" :alt="text[1].h3" :title="text[1].h3" src="/img/prices-2.svg">
        </div>
        <h3>{{ text[1].h3 }}</h3>
        <p>{{ text[1].p }}</p>
      </div>
      <div id="instant" class="item">
        <div class="illustration">
          <div id="instant-circle"></div>
          <img id="instant-1" class="part dot" :alt="text[2].h3" :title="text[2].h3" src="/img/instant-dot-1-2.svg">
          <img id="instant-2" class="part dot" :alt="text[2].h3" :title="text[2].h3" src="/img/instant-dot-2-2.svg">
          <img id="instant-notification" class="part rectangle" :alt="text[2].h3" :title="text[2].h3" src="/img/instant-notification-3.svg">
        </div>
        <h3>{{ text[2].h3 }}</h3>
        <p>{{ text[2].p }}</p>
      </div>
      <div id="delay" class="item">
        <div class="illustration">
          <img id="delay-2" class="part" :alt="text[3].h3" :title="text[3].h3" src="/img/delay-post.svg">
          <img id="delay-1" class="part" :alt="text[3].h3" :title="text[3].h3" src="/img/delay-dot-1.svg">
        </div>
        <h3>{{ text[3].h3 }}</h3>
        <p>{{ text[3].p }}</p>
      </div>
      <div id="support" class="item">
        <div class="illustration">
          <img id="support-3" class="part dot" :alt="text[4].h3" :title="text[4].h3" src="/img/support-page-2.svg">
          <img id="support-2" class="part dot" :alt="text[4].h3" :title="text[4].h3" src="/img/support-dot-2-3.svg">
          <img id="support-1" class="part dot" :alt="text[4].h3" :title="text[4].h3" src="/img/support-dot-3.svg">
        </div>
        <h3>{{ text[4].h3 }}</h3>
        <p>{{ text[4].p }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      text: [
        {
          h3: 'Высокое Качество',
          p: 'Аккаунты с аватарками и публикациями. Большая часть аккаунтов - живые люди.'
        },
        {
          h3: 'Низкие Цены',
          p: 'Вы можете начать использовать сервис всего за 5 рублей.'
        },
        {
          h3: 'Быстрый Запуск',
          p: 'Запуск лайков и просмотров происходит мгновенно. Подписчики запускаются в течение 5-300 минут.'
        },
        {
          h3: 'Улучшают Статистику',
          p: 'Вместе с просмотрами прибавляются показы и охват, что заметно улучшает статистику.'
        },
        {
          h3: 'Отличная Поддержка',
          p: 'Мы всегда на связи, чтобы помочь вам в решении любых задач.'
        }
      ],
    }
  },
}
</script>

<style scoped lang="less">
*{
  box-sizing: content-box;
}
section{
  font-family:Helvetica, Sans-serif;
  text-align:center;
}
.header{
  position:relative;
  text-align:center;
  width:auto;
  display:inline-block;
  margin-bottom:40px;
  h2{
    /* font-family:Nunito,Helvetica,Sans-serif; */
    font-weight:800;
    font-size:31px;
    z-index:2;
    position:relative;
  }
  &::after{
    content: "";
    display: block;
    height:15px;
    /* width:100%; */
    background:#4ab6f7;
    z-index:1;
    position:absolute;
    bottom:0;
    left:-10px;
    right: -10px;
    -webkit-transform:skew(-30deg);
    transform:skew(-30deg);
  }
}
.content{
  width:100%;
  max-width:1000px;
  margin:0 auto;
  padding-top:20px;
  #real{
    .part{
      border-radius:100px;
      width:auto;
      height:58px;
    }
    #real-1{
      top:70px;
      left:100px;
      border-radius:100px;
      width:140px;
      height:auto;
      z-index:2;
      background:#fff;
    }
    #real-2{
      top:0;
      left:15px;
      border-radius:100px;
      width:140px;
      z-index:2;
      height:auto;
      background:#fff;
    }
    #real-3{
      top:140px;
      left:15px;
      border-radius:100px;
      width:140px;
      z-index:2;
      height:auto;
      background:#fff;
    }
    #real-circle{
      width:200px;
      height:200px;
      margin:0 30px;
      border-radius:150px;
      background:#eef1ff;
      z-index:1;
    }
  }
  #instant{
    .part{
      width:auto;
    }
    #instant-1{
      top:140px;
      left:35px;
      z-index:2;
      background:#fff;
    }
    #instant-2{
      top:0;
      left:170px;
      z-index:2;
      background:#fff;
    }
    #instant-notification{
      top:72px;
      left:85px;
      z-index:2;
      background:#fff;
    }
    #instant-circle{
      width:200px;
      height:200px;
      margin:0 30px;
      border-radius:150px;
      background:#fbeeff;
      z-index:1;
    }
  }
  #delay{
    .part{
      border-radius:100px;
      width:auto;
      height:58px;
    }
    #delay-1{
      top:146px;
      left:24px;
      z-index:10;
    }
    #delay-2{
      top:12px;
      left:40px;
      width:185px;
      height:auto;
      border-radius:8px;
      background:#fff;
    }
  }
  #price{
    .part{
      border-radius:100px;
      width:auto;
      height:58px;
    }
    #price-1{
      top:71px;
      left:30px;
      height:58px;
      z-index:3;
    }
    #price-2{
      top:142px;
      left:45px;
      height:58px;
      z-index:3;
    }
    #price-3{
      top:0;
      left:15px;
      height:58px;
      z-index:3;
    }
  }
  #support{
    .part{
      border-radius:100px;
      width:auto;
      height:58px;
    }
    #support-1{
      top:40px;
      left:17px;
      z-index:10;
    }
    #support-2{
      top:145px;
      left:180px;
      z-index:10;
    }
    #support-3{
      top:12px;
      left:40px;
      width:185px;
      height:auto;
      border-radius:8px;
      background:#fff;
    }
  }
  .item{
    width:260px;
    padding:40px 0;
    margin-right:50px;
    margin-bottom:20px;
    display:inline-block;
    vertical-align:top;
    border-radius:6px;
    text-align:center;
    .illustration{
      width:260px;
      height:200px;
      position:relative;
      .dot{
        border-radius:100px;
        width:auto;
        height:58px;
      }
      .rectangle{
        border-radius:12px;
        width:auto;
        height:58px;
      }
      .part{
        position:absolute;
        -webkit-box-shadow:0 7px 14px 1px rgba(0,0,0,.15);
        box-shadow:0 7px 14px 1px rgba(0,0,0,.15);
      }
    }
    h3{
      /* font-family:Lato,Helvetica,Sans-serif; */
      font-size:23px;
      font-weight:800;
      line-height:120%;
      padding-top:20px;
      padding-bottom:15px;
      color:#636363;
      margin-bottom: 20px;
    }
    p{
      /* font-family:Lato,Helvetica,Sans-serif; */
      font-size:16px;
      /* font-weight:400; */
      line-height:130%;
      color:#777;
    }
    &:nth-child(3n),
    &:nth-child(5n){
      margin-right:0;
    }
  }
}
@media screen and (max-width:960px){
  .content{
    .item,
    .item:nth-child(3n){
      margin-right:60px;
    }
    .item:nth-child(2n){
      margin-right:0;
    }
  }
}
@media screen and (max-width:640px){
  .content{
    .item,
    .item:nth-child(3n){
      margin-right:45px;
    }
    .item:nth-child(2n){
      margin-right:0;
    }
  }
}
@media screen and (max-width:600px){
  .content{
    .item,
    .item:nth-child(2n),
    .item:nth-child(3n){
      margin-right:0;
    }
  }
}
@media (min-width: 768px){
  .header h2{
    font-size: 38px;
  }
}
/* @media (min-width: 1200px){
  .header h2{
    font-size: 40px;
  }
} */
</style>
