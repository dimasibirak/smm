<template>
  <section class="slider">
    <h2>ОТЗЫВЫ</h2>
    <a class="prev si si-angle-left" @click="slidePrev()"></a>
    <a class="next si si-angle-right" @click="slideNext()"></a>
    <slick :options="slickOptions" :key="`reviews-${currentDevice}`" class="wrap">
      <div v-for="(slide, key) in slides[currentDevice]" class="cards-wrap">
        <div v-for="card in slide" class="card">
          <div class="head">
            <p>
              <b>{{ card.name }}</b><br>
              {{ card.job }}
            </p>
            <img class="photo" :src="card.img" alt="">
          </div>
          <div class="body">
            {{ card.text }}
          </div>
          <div class="stars">
            <span class="si si-star" v-for="i in Array(5)"></span>
          </div>
        </div>
      </div>
    </slick>
  </section>
</template>

<script>
import Slick from "vue-slick"
import "slick-carousel/slick/slick.css"

export default {
  components: {
    Slick,
  },
  data () {
    const reviews = [
      {
        name: 'Екатерина',
        job: 'Студентка',
        img: '/img/reviews/Ekaterina.jpg',
        text: '«Благодаря вам, у меня куча лайков и подписчиков!) Мне завидуют все подружки, а я не раскрываю секрет;)) Спасибо Вам!»'
      },
      {
        name: 'Павел',
        job: 'Любящий отец',
        img: '/img/reviews/Pavel.jpg',
        text: '«Я очень рад! А дочка сейчас вернется, и она будет счастлива!!! Спасибо большое, буду пользоваться вашим сервисом.»'
      },
      {
        name: 'Алексей',
        job: 'Ген. директор',
        img: '/img/reviews/Alexey.jpg',
        text: '«Осторожно отношусь ко всем сервисам для раскрутки, т.к. был негативный опыт, однако, SmmTouch действительно безопасен. Сотрудничаем и дальше!»'
      },
      {
        name: 'Лилия',
        job: 'Фотограф',
        img: '/img/reviews/Lilya.jpg',
        text: '«Я так рада, что нашла вас 😊 Очень нравится ваш сервис! Очень удобный и качественный! Спасибо)»'
      },
      {
        name: 'Максим',
        job: 'Тревел-блогер',
        img: '/img/reviews/Maxim.jpg',
        text: '«Спасибо за сервис! Все интуитивно понятно, быстро и просто! Спасибо!»'
      },
      {
        name: 'Дарья',
        job: 'Салон Красоты',
        img: '/img/reviews/Darya.jpg',
        text: '«В бьюти сфере сегодня просто огромная конкуренция! Обратить на себя внимание клиентов невероятно сложно. Я очень рада, что нашла такой замечатльный сайт!»'
      }
    ]
    return {
      slides: {
        desktop: [
          [
            reviews[0],
            reviews[1],
            reviews[2]
          ],
          [
            reviews[3],
            reviews[4],
            reviews[5]
          ]
        ],
        tablet: [
          [
            reviews[0],
            reviews[1]
          ],
          [
            reviews[2],
            reviews[3]
          ],
          [
            reviews[4],
            reviews[5]
          ]
        ],
        mobile: [
          [
            reviews[0]
          ],
          [
            reviews[1]
          ],
          [
            reviews[2]
          ],
          [
            reviews[3]
          ],
          [
            reviews[4]
          ],
          [
            reviews[5]
          ]
        ]
      },
      currentDevice: 'desktop',
      slickOptions: {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 900,
        centerMode: true,
        centerPadding: '0px',
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              dots: true,
              arrows: false,
              infinite: true,
              speed: 900,
              centerMode: true,
              centerPadding: '0px',
            }
          },
          {
            breakpoint: 768,
            settings: {
              dots: true,
              arrows: false,
              infinite: true,
              speed: 900,
              centerMode: true,
              centerPadding: '0px',
            }
          }
        ]
      }
    }
  },
  methods:{
    slideNext() {
      this.$children[0].next()
    },
    slidePrev() {
      this.$children[0].prev()
    },
    onResize(){
      const currentWidth = document.body.clientWidth
      if (currentWidth < 768) {
        this.currentDevice = "mobile"
      }
      else if (currentWidth < 1200) {
        this.currentDevice = "tablet"
      }
      else {
        this.currentDevice = "desktop"
      }
    }
  },
  created() {
    window.addEventListener("resize", this.onResize)
    this.$nextTick(function(){
      this.onResize()
    })
  },
  destroyed(){
    window.removeEventListener("resize", this.onResize)
  }
}
</script>

<style scoped lang="less">
.slider{
  position: relative;
  display: flex;
  flex-flow: column;
  #top & .wrap{
    padding: 0;
  }
}
.next, .prev{
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 300;
  top: 52%;
  margin-top: -50px;
  max-width: 100px;
  width: 30px;
  height: 100px;
  color: #fff;
  font-size: 26px;
  transition: all 0.2s ease;
  &:hover{
    opacity: 0.5;
  }
}
.prev{
  left: 0;
}
.wrap .cards-wrap{
  display: none!important;
}
.wrap .slick-slide .cards-wrap, .wrap .cards-wrap:first-child{
  padding-bottom: 53px;
  display: flex!important;
  align-items: center;
  justify-content: center;
}
.slick-slider /deep/ .slick-dots{
  display: flex;
  justify-content: center;
  align-items: center;
  li {
    line-height: 0;
    button{
      line-height: 0;
      width: 8px;
      height: 8px;
      margin: 0 3px;
      background: #009dff;
      opacity: .5;
      border-radius: 50%;
      font-size: 0;
      border: 0;
      padding: 0;
      .back &{
        background: #fff;
      }
    }
    &.slick-active button{
      opacity: 1;
    }
  }
}
.card {
  border: 2px solid #e4f1fd;
  width: 290px;
  min-height: 340px;
  background-color: #fefefe;
  border-radius: 3px;
  position: relative;
  line-height: 25px;
  font-size: 17px;
  color: rgba(49,54,63,.8);
  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #E3F0FC;
    padding:20px 30px;
    font-size: 16px;
    b{
      font-size: 17px;
      font-weight: 800;
      color: #969aa1;
    }
    img.photo {
      width: 50px;
      height: auto;
      border-radius: 100%;
    }
  }
  .body {
    padding: 20px 30px 0;
    white-space: normal;
  }
  .stars{
    color: #40a2f5;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    line-height: 19px;
    padding: 20px 30px;
    letter-spacing: 4px;
  }
}
@media (max-width: 383px){
  .next{
    justify-content: flex-end;
  }
  .prev{
    justify-content: flex-start;
  }
}
@media (min-width: 768px){
  /* .slick-slide{
    padding-bottom: 53px;
  } */
  .card{
    width: 330px;
    &:first-child{
      margin-right: 30px;
    }
  }
}
@media (min-width: 1200px){
  .wrap .slick-slide .cards-wrap, .wrap .cards-wrap:first-child{
    padding-bottom: 68px;
  }
  .card{
    width: 350px;
    &:last-child{
      margin-left: 30px;
    }
  }
}
@media (min-width: 1300px){
  .next, .prev{
    width: 100px;
  }
}
</style>
