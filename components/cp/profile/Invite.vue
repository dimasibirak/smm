<template>
  <div class="profile-invite">
    <div class="profile-invite__info">
      <div class="profile-invite__main">
        <h2 class="profile-invite__title">Приглашайте друзей по этой ссылке!</h2>
        <div class="profile-invite__link">
          <div class="profile-invite__link-block">{{refLink}}</div>
          <div class="profile-invite__link-copy" @click="copyCode">Скопировать ссылку</div>
        </div>
        <div class="profile-invite__features">
          <div class="profile-invite__features-block">
            <div class="profile-invite__features-icon">
              <simple-svg :filepath="'/img/cp/profile/invite/features1.svg'"/>
            </div>
            <p class="profile-invite__features-text">Каждый приглашенный пользователь получает скидку в личном кабинете</p>
          </div>
          <div class="profile-invite__features-block">
            <div class="profile-invite__features-icon">
              <simple-svg :filepath="'/img/cp/profile/invite/features2.svg'"/>
            </div>
            <p class="profile-invite__features-text">Вы зарабатываете каждый раз, когда пользователь заказывает услуги</p>
          </div>
        </div>
        <div class="profile-invite__img">
          <img class="img1" src="/img/cp/profile/invite/img.jpg" alt="Invite friends img">
          <img class="img2" src="/img/cp/profile/invite/Group 36.png" alt="Invite friends img">
        </div>
      </div>
      <div class="profile-invite__why">
        <h3 class="profile-invite__why-title">Зачем это делать?</h3>
        <p class="profile-invite__why-subtitle">Когда Вы приглашаете друзей на сайт, Вы помогаете развитию проекта, мы ценим Ваши старания и делимся прибылью и скидкой</p>
        <div class="profile-invite__why-list">
          <div class="profile-invite__why-item">
            <div class="profile-invite__why-icon">
              <simple-svg :filepath="'/img/cp/profile/invite/why1.svg'"/>
            </div>
            <div class="profile-invite__why-info">
              <span class="profile-invite__why-smalltitle">10%</span>
              <p class="profile-invite__why-text">От суммы расходов друга возвращаются Вам на баланс</p>
            </div>
          </div>
          <div class="profile-invite__why-item">
            <div class="profile-invite__why-icon">
              <simple-svg :filepath="'/img/cp/profile/invite/why2.svg'"/>
            </div>
            <div class="profile-invite__why-info">
              <span class="profile-invite__why-smalltitle">Статус</span>
              <p class="profile-invite__why-text">Приглашенный пользователь получает статус “Персональный”</p>
            </div>
          </div>
          <div class="profile-invite__why-item">
            <div class="profile-invite__why-icon">
              <simple-svg :filepath="'/img/cp/profile/invite/why3.svg'"/>
            </div>
            <div class="profile-invite__why-info">
              <span class="profile-invite__why-smalltitle">До 7%</span>
              <p class="profile-invite__why-text">Скидка для Вашего друга в рамках персонального статуса</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="profile-invite__referals">
      <h3 class="profile-invite__referals-title">Всего {{referals.length}} рефералов</h3>
      <div class="profile-invite__referals-list" v-if="referals.length > 0">
        <div class="profile-invite__referals-item" v-for="(referal, index) in referals" :key="index">
          <div class="profile-invite__referals-img">
            <img src="/img/cp/orders/avatar.png" :alt="referal.login">
          </div>
          <div class="profile-invite__referals-info">
            <a href="#" target="_blank"  class="profile-invite__referals-login">{{referal.login}}</a>
            <span class="profile-invite__referals-time">{{referal.time}}</span>
          </div>
          <div class="profile-invite__referals-profit">
            <span class="profile-invite__referals-subtitle">Начисление</span>
            <span class="profile-invite__referals-money">+{{referal.money}} рублей</span>
          </div>
        </div>
      </div>
      <p class="profile-invite__referals-no" v-else>Ещё ни один друг не зарегистрировался по Вашей ссылке</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileInvite',
  data: () => ({
    refLink: 'smmtouch.ru/ref209751',
    referals: [
      {login: 'ant_social', time: '24 мая 2019, 8:40', money: 0},
      {login: 'ant', time: '25 мая 2019, 8:40', money: 100},
      {login: 'social', time: '26 мая 2019, 8:40', money: 320}
    ]
  }),
  methods: {
    copyCode () {
      navigator.clipboard.writeText(this.refLink)
      .then(() => {
        alert('Copy')
      })
      .catch(err => {
        console.log('Something went wrong', err);
      });
    },
  }
}
</script>

<style lang="less">
.profile-invite{
  width: 88%;
  @media (max-width: 1600px) {
    width: 95%;
  }
  @media (max-width: 1440px) {
    width: 98%;
  }
  @media (max-width: 1440px) {
    width: 100%;
  }
}
.profile-invite__info {
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
}

.profile-invite__main {
  background: #fff;
  margin-right: 30px;
  width: 100%;
  max-width: 1000px;
  flex: auto;
  box-shadow: 0px 4px 15px rgba(151, 179, 225, 0.25);
  padding: 35px 40px 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  @media (max-width: 1440px) {
    padding: 29px 40px 0;
    max-width: 800px;
  }
  @media (max-width: 1024px) {
    max-width: 890px;
    padding: 25px 28px 0;
    margin-right: 0;
    margin-bottom: 25px;
  }
   @media (max-width: 550px) {
    padding: 20px 25px 0; 
  }
}

.profile-invite__title {
  font-size: 18px;
  color: #19233C;
  margin-bottom: 25px;
  font-weight: 400;
  @media (max-width: 1440px) {
    font-size: 16px;
  }
  @media (max-width: 550px) {
    margin: 20px auto;
    font-size: 15px;
  }
}

.profile-invite__link {
  display: flex;
  margin-bottom: 40px;
  @media (max-width: 550px) {
   flex-direction: column;
  }
}

.profile-invite__link-block {
  margin-right: 15px;
  width: 100%;
  max-width: 45%;
  background: #F5FAFF;
  border: 1px solid #C3D8EC;
  border-radius: 3px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #2691F4;
  @media (max-width: 1440px) {
    max-width: 50%;
  }
  @media (max-width: 1200px) {
    padding: 0 10px;
  }
  @media (max-width: 550px) {
    margin: 0;
    padding: 0 20px;
   height: 45px;
   max-width: 100%;
   margin-bottom: 20px;
  }
}

.profile-invite__link-copy {
  cursor: pointer;
  font-size: 14px;
  color: #fff;
  font-weight: bold;
  width: 212px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #2691F4;
  border-radius: 250px;
  margin-left: 25px;

  @media (max-width: 550px) {
    width: 100%;
    margin: 0 auto;
  }
}

.profile-invite__features {
  display: flex;
  align-items: center;
  margin-bottom: 60px;
  @media (max-width: 550px) {
    flex-direction: column;
  }
}

.profile-invite__features-block {
  display: flex;
  align-items: center;
   @media (max-width: 550px) {
    margin-bottom: 20px;
  }
  &+& {
    margin-left: 40px;
    @media (max-width: 550px) {
    margin-left: 0;
  }
  }
}

.profile-invite__features-icon {
  margin-right: 15px;
  .simple-svg-wrapper {
    width: 25px;
    height: 25px;
  }
}

.profile-invite__features-text {
  max-width: 320px;
  font-size: 14px;
  line-height: 19px;
  color: #42596F;
}

.profile-invite__img {
  margin: auto -40px 0;
  .img2{
    display: none;
    @media (max-width: 550px) {
    display: block;
    margin: 0 auto;
    }
  }
  .img1 {
    width: 100%;
    display: inline-block;
    vertical-align: bottom;
    @media (max-width: 550px) {
    display: none;
    }
  }
  
}

.profile-invite__why {
  width: 100%;
  max-width: 370px;
  flex: none;
  background: #FFFFFF;
  box-shadow: 0px 4px 15px rgba(151, 179, 225, 0.25);
  padding: 35px 40px 65px;
  @media (max-width: 1440px) {
    max-width: 350px;
  }
  @media (max-width: 1280px) {
    max-width: 300px;
    padding: 20px;
  }
 
  @media (max-width: 1024px) {
    max-width: 100%;
  }
}

.profile-invite__why-title {
  font-size: 18px;
  line-height: 24px;
  font-weight: 600;
  color: #19233C;
  margin-bottom: 25px;
  @media (max-width: 1440px) {
    font-size: 16px;
  }
}

.profile-invite__why-subtitle {
  font-size: 14px;
  line-height: 19px;
  color: #42596F;
  margin-bottom: 35px;
  @media (max-width: 1280px) {
    margin-bottom: 25px;
  }
}

.profile-invite__why-list{
  @media (max-width: 1024px) {
    display: flex;
  }
  @media (max-width: 550px) {
    display: block;
  }
}
.profile-invite__why-item {
  display: flex;
  &+& {
    margin-top: 40px;
    @media (max-width: 1280px) {
    margin-top: 25px;
  }
   @media (max-width: 1024px) {
    margin: 0;
    margin-left: 5%;
  }
  @media (max-width: 580px) {
    margin-left: 1%;
  }
  @media (max-width: 550px) {
    margin-top: 30px;
  }
  }
 
}

.profile-invite__why-icon {
  margin-right: 15px;
  margin-top: 10px;
  align-self: flex-start;
  .simple-svg-wrapper {
    width: 42px;
    height: 42px;
  }
}

.profile-invite__why-smalltitle {
  font-size: 24px;
  color: #19233C;
  margin-bottom: 10px;
  display: block;
  @media (max-width: 1440px) {
    font-size: 21px;
  }
}

.profile-invite__why-text {
  font-size: 14px;
  line-height: 19px;
  color: #42596F;
}

.profile-invite__referals {
  padding: 35px 40px;
  background: #FFFFFF;
  box-shadow: 0px 4px 15px rgba(151, 179, 225, 0.25);
  min-height: 200px;
  width: 100%;
  max-width: 1400px;
  @media (max-width: 1440px) {
    margin-bottom: 30px;
    max-width: 1180px;
  }
}

.profile-invite__referals-title {
  font-size: 18px;
  color: #19233C;
  font-weight: 600;
  margin-bottom: 30px;
  @media (max-width: 1440px) {
    font-size: 16px;
  }
}

.profile-invite__referals-item {
  display: flex;
  align-items: center;
   @media (max-width: 550px) {
    flex-wrap: wrap;
    
  }
  &+& {
    margin-top: 20px;
  }
}

.profile-invite__referals-img {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 10px;
  img {
    width: 100%;
  }
}

.profile-invite__referals-info {
  margin-right: auto;
}

.profile-invite__referals-login {
  color: #2691F4;
  display: block;
}

.profile-invite__referals-time {
  color: #829FBA;
  font-size: 13px;
}

.profile-invite__referals-profit {
  text-align: right;
   @media (max-width: 550px) {
    width: 100%;
   display: flex;
   justify-content: space-between;
   padding-top: 5px;
   margin-top: 10px;
   border-top: 1px solid rgba(151, 179, 225, 0.25);
  }
}

.profile-invite__referals-subtitle {
  font-size: 14px;
  color: #19233C;
  display: block;
}

.profile-invite__referals-money {
  color: #2691F4;
  font-size: 14px;
}


.profile-invite__referals-no {
  font-size: 16px;
  text-align: center;
  color: #42596F;
}
</style>
