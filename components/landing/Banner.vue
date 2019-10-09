<template>
  <section>
    <div class="wrap">
      <div class="left">
        <h1>БЫТЬ ПОПУЛЯРНЫМ В INSTAGRAM - ЛЕГКО!</h1>
        <p>Станьте популярным и выведите свой аккаунт на новый уровень всего в несколько кликов!</p>
        <nuxt-link :to="{ path: '/', hash: 'services' }" class="btn blue si si-cart">СДЕЛАТЬ ЗАКАЗ</nuxt-link>
        <nuxt-link :to="{ path: '/', hash: 'services' }" class="si si-double-angle-down"></nuxt-link>
      </div>
      <label class="right" @click="togglePopup()"><img src="/img/video.png" alt="open video"></label>
    </div>
    <div id="popup" v-if="popup">
      <label @click="togglePopup()">&times;</label>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/qSr0Vlah9xU?controls=0&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      popup: false,
    }
  },
  methods: {
    togglePopup() {
      this.popup = !this.popup
    }
  }
}
</script>

<style scoped lang="less">
#top #content > section{
  padding-top: 0;
  padding-bottom: 0;
}
.wrap{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-height: 420px;
}
.left{
  width: 100%;
  h1 {
    color: #009dff;
    font-weight: 800;
    font-size: 27px;
  }
  p {
    line-height: 1.5;
    font-size: 18px;
    font-weight: normal;
    font-family: "GothamPro", Helvetica, Arial, sans-serif;
    margin: 10px 0 15px;
    color: #33363a;
  }
  #top & a.btn.si{
    width: 220px;
    padding: 12px 34px 14px;
    font-size: 15px;
    &:before{
      vertical-align: -3px;
    }
  }
  .si-double-angle-down {
    float: right;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    left: 50%;
    bottom: 90px;
    background-color: #3f3f3f;
    transition: all 0.2s ease;
    &:hover {
      color: #009dff;
    }
  }
}
.si-abs(){
  position: absolute;
  margin-left: -25px;
  @media (min-width: 768px){
    bottom: 30px;
  }
  @media (min-width: 1200px){
    bottom: 140px;
  }
}
.right{
  display: none;
}
#popup{
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  label{
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    font-size: 50px;
    font-weight: bolder;
    line-height: 28px;
    height: 28px;
    padding: 10px;
    margin: 10px;
    box-sizing: content-box;
    color: #888;
    &:hover, &:focus{
      color: #ddd;
    }
    &:active{
      color: #444;
    }
  }
  iframe{
    width: 65%;
    max-width: 1110px;
    height: 36.25vw;
  }
}
@media (max-width: 320px){
  #top #content > section{
    padding-top: 64px;
    background-origin: content-box;
  }
  .wrap{
    margin-top: -64px;
  }
  .left{
    position: relative;
    top: -50px;
    h1{
      font-size: 20px;
    }
    p{
      margin: 20px 0 30px!important;
      font-size: 15px;
      line-height: 1.4;
    }
    #top & a.btn.si{
      width: 200px;
      padding: 13px 20px 12px;
      font-size: 12px;
      &:before{
        font-size: 15px;
        vertical-align: -3px;
      }
    }
    .si-double-angle-down{
      bottom: -120px;
      .si-abs();
    }
  }
}
@media (max-width: 383px){
  @media (min-height: 568px){
    .left .si-double-angle-down {
      .si-abs();
    }
  }
  @media (min-height: 560px){
    .left p{
      margin: 30px 0 35px;
    }
  }
}
@media (min-width: 384px) and (min-height: 500px){
  .left{
    h1{
      font-size: 30px;
    }
  }
}
@media (max-width: 459px){
  @media (min-height: 550px){
    .left .si-double-angle-down {
      .si-abs();
    }
  }
  @media (min-height: 530px){
    .left p{
      margin: 30px 0 35px;
    }
  }
}
@media (min-width: 460px) and (min-height: 550px){
  .left{
    h1{
      font-size: 38px;
    }
    p{
      font-size: 18px;
    }
  }
}
@media (max-width: 575px){
  @media (min-height: 530px){
    .left .si-double-angle-down {
      .si-abs();
    }
  }
  @media (min-height: 568px){
    .left p{
      margin: 30px 0 35px;
    }
  }
}
@media (min-width: 576px) and (max-width: 767px) and (min-height: 540px){
  .left{
    h1{
      font-size: 48px;
    }
    P{
      font-size: 20px;
    }
  }
}
@media (max-width: 767px){
  @media (min-height: 560px){
    .left .si-double-angle-down {
      .si-abs();
    }
  }
  @media (min-height: 600px){
    .left p{
      margin: 30px 0 35px;
    }
  }
}
@media (min-width: 768px){
  .wrap{
    min-height: 360px;
    padding-top: 64px;
    padding-bottom: 64px;
  }
  .left{
    width: 60%;
    .si-double-angle-down {
      .si-abs();
    }
    @media (min-height: 500px){
      h1{
        font-size: 39px;
      }
      p{
        font-size: 20px;
      }
    }
    @media (min-height: 550px){
      p{
        margin: 30px 0 35px;
      }
    }
  }
  .right{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    cursor: pointer;
    width: 40%;
    height: 100%;
    &:hover{
      opacity: 0.6;
    }
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
}
@media (min-width: 992px){
  .wrap{
    padding-top: 72px;
    padding-bottom: 72px;
  }
  .left, .right{
    width: 50%;
  }
  .left .si-double-angle-down{
    bottom: 60px;
  }
}
@media (min-width: 1200px){
  .wrap{
    padding-top: 80px;
    padding-bottom: 80px;
  }
  .left{
    @media (min-height: 600px){
      h1{
        font-size: 50px;
      }
    }
  }
}
</style>
