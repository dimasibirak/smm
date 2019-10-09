<template>
  <section>
    <h2>ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</h2>
    <div class="wrap">
      <div class="item" :class="{ active: eq(index) }" v-for="(q, index) in faqs">
        <label @click="onClick(index, $event)">{{ q.head }}</label>
        <div class="text" :style="{ height: q.height }">
          <div>
            <div v-for="t in q.text">{{ t }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      current: -1,
      faqs: [
        {
          head: 'Как заказать?',
          height: 0,
          text: [
            'Для заказа выберите услугу, введите ссылку и укажите количество. Вас перенаправит на сайт платежной системы, где нужно будет произвести оплату. После совершения оплаты Ваш заказ автоматически начнет выполняться.'
          ]
        },
        {
          head: 'Через какое время выполняются услуги?',
          height: 0,
          text: [
            'Лайки и просмотры начинают поступать в течение 1-15 мин после оплаты.',
            'Подписчики - в течение 5-300 минут после оплаты.'
          ]
        },
        {
          head: 'Мой профиль должен быть открытым?',
          height: 0,
          text: [
            'Да, ваш профиль обязательно должен быть открытым. Продвижение закрытых страниц невозможно.'
          ]
        },
        {
          head: 'Что такое автолайки и автопросмотры?',
          height: 0,
          text: [
            'Автолайки - это услуга, которая автоматически ставит определенное количество лайков на новые публикации. Лайки поступают через 5-10 минут после публикации фото.',
            'Автопросмотры, как догадались, это то же самое, что и автолайки, только для просмотров.'
          ]
        },
        {
          head: 'Я могу поменять логин после оформления заказа?',
          height: 0,
          text: [
            'Менять логин после оплаты категорически нельзя. Если такое происходит, мы теряем вашу страницу, и все усилия, потраченные на раскрутку, сгорают.'
          ]
        },
        {
          head: 'Какие гарантии?',
          height: 0,
          text: [
            'Мы добросовестно выполняем все заказы. Если сомневаетесь, начните с минимального заказа за 4 рубля – проверите нашу порядочность.'
          ]
        },
        {
          head: 'Это живые люди?',
          height: 0,
          text: [
            'Есть как живые, так и неживые. Смотря что закажете.'
          ]
        }
      ]
    }
  },
  methods: {
    onClick(i, e) {
      var height = e.srcElement.nextElementSibling.children[0].clientHeight + "px"
      if (this.current === -1) {
        this.current = i
        this.faqs[i].height = height
      }
      else {
        this.faqs[this.current].height = 0
        if (this.eq(i)) {
          this.current = -1
        }
        else {
          this.current = i
          this.faqs[i].height = height
        }
      }
    },
    eq(i) {
      return i === this.current
    }
  }
}
</script>

<style scoped lang="less">
.item{
  box-shadow: 0 0 80px rgba(0,0,0,.2);
  margin-bottom: 10px;
  &:last-child{
    margin-bottom:0;
  }
  label {
    display: block;
    cursor: pointer;
    padding: 12px 15px 12px 15px;
    border: 1px solid #d4d4d4;
    background-color: #fff;
    color: #009cff;
    font-size: 14px;
    letter-spacing: 1.35px;
    line-height: 25px;
    text-transform: uppercase;
    font-weight: 700;
    transition: all 0.3s ease;
    &:hover {
      color: #444;
      border-color: transparent;
      background-color: #f1f1f1;
    }
  }
  .text {
    height: 0;
    overflow: hidden;
    font-weight: 500;
    color: #333;
    font-size: 15px;
    letter-spacing: 0.12px;
    line-height: 25px;
    padding-left: 25px;
    padding-right: 25px;
    transition: all 0.5s linear;
    & > div > div{
      margin-top: 1em;
      &:first-child{
        margin-top: 0;
      }
    }
  }
  &.active{
    .text{
      padding-top: 25px;
      padding-bottom: 25px;
      transition-delay: 0.1s;
      box-sizing: content-box;
    }
    label{
      border-color: transparent;
      background-color: #009dff;
      color: #fff;
    }
  }
}
@media (min-width: 768px){
  .item label{
    padding: 20px 25px 15px 50px;
  }
}
</style>
