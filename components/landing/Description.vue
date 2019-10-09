<template>
  <section>
    <div class="header">
      <h2>{{ h2 }}</h2>
    </div>
    <div class="questions">
      <div class="question" v-for="question in questions">
        <div class="question-head">
          <h3>{{ question.h3 }}</h3>
        </div>
        <div class="question-body">
          <div v-html="question.body"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      h2: "Накрутка лайков в Инстаграм",
      questions: [
        {
          h3: 'Зачем это нужно?',
          body: 'Качественные лайки в Инстаграме стали отличным инструментом для развития профиля, они показывают, насколько интересен тот или иной пост, способны добавить страничке живую активность и увеличить количество подписчиков. Чем больше пост их собирает, тем популярнее становится и сам instagram-аккаунт.<br><br>Продвижение бизнеса таким способом поможет быть ближе к клиентам, способствует развитию бренда и достижению таких целей: регулярный рост продаж, увеличение трафика, конверсии, привлечение лояльной или новой аудитории, уменьшение бюджета на рекламу.'
        },
        {
          h3: 'Как это работает?',
          body: 'С SMMTOUCH купить лайки в Instagram очень просто,<br>для этого необходимо:<br><br>1) Выбрать необходимый пакет услуг;<br>2) Добавить свой Инстаграм-аккаунт;<br>3) Произвести оплату.<br><br>Через 1-15 мин. после оплаты можно увидеть результат. Если у вас есть сомнения, начните с минимального заказа в 5 рублей и проверьте, как это работает. Воспользуйтесь сервисом SMMTOUCH, и у вас навсегда отпадет вопрос: как накрутить лайки в Инстаграме быстро и дешево.'
        },
        {
          h3: 'Нужны лайки на будущие публикации?',
          body: 'Нет времени заходить и заказывать лайки вручную на новые фото?<br>Нет проблем! Мы также предлагаем <a href="/uslugi/avtolajki-v-instagram/" title="Автоматические лайки в Instagram">автолайки в Instagram.</a><br>С помощью данной услуги вы будете автоматически получать лайки на новые фото. Количество лайков и публикаций вы выбираете сами.',
        },
        {
          h3: '5 причин заказать лайки у нас:',
          body: '1) Удобный интерфейс, который позволяет заказать в два клика<br>2) Более 3 лет на рынке<br>3) Отличное соотношение цена/качество<br>4) Гарантия от бана и списаний<br>5) Быстрый запуск',
        },
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
.questions{
  width:100%;
  max-width:1000px;
  padding-top:60px;
  margin:0 auto;
  text-align:left;
  box-sizing: border-box;
  .question{
    width:calc(50% - 22px);
    margin-right:20px;
    margin-bottom:60px;
    display:inline-block;
    vertical-align:top;
    .question-head{
      padding:0 30px 20px 0;
      h3{
        width:100%;
        /* font-family:Nunito,Helvetica,Sans-serif; */
        font-size:24px;
        color:#636363;
        /* font-weight:400; */
        line-height:120%;
        display:inline-block;
        vertical-align:middle;
      }
    }
    .question-body div{
      padding:0 30px 0 0;
      /* font-family:Lato,Helvetica,Sans-serif; */
      font-size:14px;
      color:#999;
      line-height:150%;
      & /deep/ a{
        color:#3fb58b;
      }
      ul{
        font-size: 100%;
        list-style: disc;
        margin-left: 6%;
      }
      ol{
        font-size: 100%;
        list-style: none;
        margin-left: 3%;
        counter-reset: list;
        & > li {
          list-style: none;
          &:before {
            content: counter(list) ") ";
            counter-increment: list;
          }
        }
      }
    }
    &:nth-child(2n){
      margin-right:0;
      padding-left:20px;
      border-left:4px solid #4ab6f7;
      .question-head{
        padding:0 0 20px 30px;
      }
      .question-body div{
        padding:0 0 0 30px;
      }
    }
  }
}
@media screen and (max-width:799px){
  .questions{
    #top &{
      padding-left:2%;
      padding-right:2%;
    }
    .question{
      text-align:left;
      max-width: 600px;
      width: calc(100% - 24px);
      margin-right:0;
      padding-right:20px;
      border-left:4px solid #4ab6f7;
      .question-head{
        padding:0 0 20px 30px;
      }
      .question-body div{
        padding:0 15px 0 30px;
      }
      &:nth-child(2n){
        padding-left:0;
        padding-right:20px;
        .question-head{
          padding:0 0 20px 30px;
        }
        .question-body div{
          padding:0 0 0 30px;
        }
      }
    }
  }
}
@media screen and (max-width:599px){
  .header{
    margin-bottom:20px;
  }
  .questions .question .question-head{
    h3{
      color: #636363;
      font-size:18px;
      font-weight: 400;
      margin-bottom: 15px;
    }
    div{
      font-size:14px;
    }
  }
}
@media screen and (max-width:444px){
  .header::after{
    width: 200px;
    left: calc(50% - 100px);
  }
}
@media (min-width: 768px){
  .header h2{
    font-size: 38px;
  }
}
@media (min-width: 1200px){
  .header h2{
    font-size: 40px;
  }
}
</style>
