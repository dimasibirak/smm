<template>
  <section>
    <div class="header">
      <h2>{{ h2 }}</h2>
      <p>{{ p }}</p>
    </div>
    <div class="steps">
      <div class="step">
        <span>Первое:</span>
        <p>Выберите пакет</p>
        <!-- <img class="icon" alt="Select Package" title="Выберите пакет" src="/img/step-1.svg"> -->
        <p class="si si-step-1"></p>
      </div><div class="step">
        <span>Второе:</span>
        <p>Заполните форму</p>
        <!-- <img class="icon" alt="Select Posts" title="Заполните форму" src="/img/step-2.svg"> -->
        <p class="si si-step-2"></p>
      </div><div class="step">
        <span>Третье:</span>
        <p>Произведите оплату</p>
        <!-- <img class="icon" alt="Checkout" title="Произведите оплату" src="/img/step-3.svg" style="width:75px"> -->
        <p class="si si-step-3"></p>
      </div>
    </div>
    <div class="expect">
      <h3>С нами вы получаете:</h3>
      <div class="list">
        <div class="item">
          <!-- <img class="icon" alt="Instant Delivery" title="Быстрый запуск" src="/img/3.svg"> -->
          <p class="si si-expect-3">Быстрый запуск</p>
        </div>
        <div class="item">
          <!-- <img class="icon" alt="Best Quality" title=" Высокое качество" src="/img/2.svg"> -->
          <p class="si si-expect-2">Высокое качество</p>
        </div>
        <div class="item">
          <!-- <img class="icon" alt="Persistent Support" title="Гарантию" src="/img/1.svg"> -->
          <p class="si si-expect-1">Гарантию</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      h2: "Как оформить заказ?",
      p: "Процесс покупки очень прост!"
    }
  },
}
</script>

<style scoped lang="less">
*{
  box-sizing: content-box;
}
#how{
  font-family:Helvetica, Sans-serif;
  /* background-color:#4ab6f7; */
  width:96%;
  padding:90px 2%;
  display:block;
}

.header{
  width:100%;
  text-align:center;
}
.header h2{
  /* font-family:Nunito,Helvetica,Sans-serif; */
  font-weight:800;
  font-size:46px;
  margin-bottom:30px;
  color:#fff;
}
.header p{
  display:block;
  max-width:620px;
  width:100%;
  margin:0 auto;
  /* font-family:Lato,Helvetica,Sans-serif; */
  font-size:16px;
  color:#fff;
  line-height:120%;
}
.header p strong{
  font-weight:600;
}

.steps{
  padding:40px 0;
  text-align:center;
  max-width:720px;
  margin:0 auto;
}
.steps .step:nth-child(3){
  margin-right:0;
}
.steps .step{
  width:140px;
  margin-right:30px;
  padding:40px;
  background:#fff;
  text-align:center;
  display:inline-block;
  vertical-align:middle;
  border-radius:6px;
  -webkit-box-shadow:0 7px 14px 1px rgba(0,0,0,.15);
  box-shadow:0 7px 14px 1px rgba(0,0,0,.15);
}
.steps .step span{
  /* font-family:Lato,Helvetica,Sans-serif; */
  font-size:24px;
  font-weight:800;
  color:#636363;
  line-height:120%;
  width:100%;
  display:block;
  padding-bottom:10px;
}
.steps .step p{
  /* font-family:Lato,Helvetica,Sans-serif; */
  font-size:14px;
  /* font-weight:400; */
  color:#636363;
  line-height:120%;
  width:100%;
  display:block;
  padding-bottom:25px;
  &.si{
    font-size: 62px;
    line-height: 1;
    padding: 0;
    color: #22d5da;
    &:before{
      vertical-align: -6px;
    }
  }
}
.steps .step .icon{
  width:60px;
  height:60px;
  display:inline-block;
}

.expect{
  max-width:720px;
  margin:0 auto;
  padding-top:30px;
  text-align:center;
}
.expect h3{
  width:100%;
  /* font-family:Lato,Helvetica,Sans-serif; */
  font-size:16px;
  color:#fff;
  line-height:120%;
  margin-bottom: 20px;
}
.expect .list{
  max-width:600px;
  padding-top:30px;
  margin:0 auto;
}
.expect .list .item{
  width:auto;
  padding-right:50px;
  display:inline-block;
  vertical-align:middle;
  text-align:left;
}
.expect .list .item .icon{
  width:30px;
  height:30px;
  padding-right:12px;
  display:inline-block;
  vertical-align:middle;
}
.expect .list .item p{
  /* font-family:Lato,Helvetica,Sans-serif; */
  font-size:16px;
  color:#fff;
  line-height:120%;
  display:inline-block;
  vertical-align:middle;
  &.si:before{
    font-size: 30px;
    vertical-align: -7px;
    padding-right: 12px;
  }
}
.expect .list .item:nth-child(3){
  padding-right:0;
}
@media screen and (max-width:780px){
  .steps .step{
    margin-bottom:30px;
  }
  .steps .step:nth-child(2){
    margin-right:0;
  }
  .steps .step:nth-child(3){
    margin-bottom:0;
    display:block;
    margin:0 auto;
  }
}
@media screen and (max-width:600px){
  .header h2{
    font-size:32px;
    margin-bottom:20px;
  }
  .steps .step{
    margin:0 auto;
    display:block;
    margin-bottom:30px;
  }
  .steps .step:nth-child(2){
    margin:0 auto;
    margin-bottom:30px;
  }
  .steps .step:nth-child(3){
    margin:0 auto;
  }
  .expect .list .item{
    width:180px;
    white-space: nowrap;
    padding:0 0 35px;
    margin:0 auto;
    display:block;
    text-align:left;
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
