<template>
  <form method="post" @submit.prevent="onSubmit" v-if="currentService">
    <h3 v-if="popup">ОФОРМИТЬ ЗАЯВКУ</h3>
    <section class="forms_wrap">
      <div class="form_item_wrap select_wrap">
        <label for="type_cheat" v-if="!popup"><p class="form_heading">Вид накрутки</p></label>
        <select id="type_cheat" class="select" v-model="currentService">
          <option v-for="service in services" :key="service.id" :value="service">{{ service.title }}</option>
        </select>
      </div>
      <div class="form_item_wrap select_wrap" v-if="currentService.type === 'SERVICE_INSTAGRAM_LIKES'">
        <label for="cost_cheat" v-if="!popup"><p class="form_heading">Тип накрутки:</p></label>
        <select id="cost_cheat" class="select" v-model="typeLikes">
          <option value="one">На один пост</option>
          <option value="last">На последние посты</option>
        </select>
      </div>
      <div class="form_item_wrap">
        <label for="user_login" v-if="!popup"><p class="form_heading">{{ currentUrlLabel }}</p></label>
        <input id="user_login" type="text" required v-model="url" :placeholder="popup ? `${currentUrlLabel}*` : ''">
      </div>
      <template v-if="isAutoInst">
        <div class="form_item_wrap">
          <label for="user_login" v-if="!popup"><p class="form_heading">От</p></label>
          <input id="quality_last" type="number" :min="currentService.min" :max="currentService.max" required v-model.number="minAutoLikes" @keyup="onKeyup" :placeholder="popup ? 'От*' : ''">
        </div>
        <div class="form_item_wrap">
          <label for="user_login" v-if="!popup"><p class="form_heading">До</p></label>
          <input id="quality_last" type="number" :min="+currentService.min + 50" :max="currentService.max" required v-model.number="maxAutoLikes" @keyup="onKeyup" :placeholder="popup ? 'До*' : ''">
        </div>
      </template>
      <div class="form_item_wrap" v-if="typeLikes === 'last' || isAutoInst">
        <label for="quality_last" v-if="!popup"><p class="form_heading">
          Количество
          <span v-if="isAutoInst">будущих</span>
          постов
        </p></label>
        <input id="quality_last" type="number" min="2" required v-model.number="lastQuality" @keyup="onKeyup" :placeholder="popup ? `Количество ${ isAutoInst ? 'будущих' : '' } постов*` : ''">
      </div>
      <div class="form_item_wrap" v-if="!isAutoInst">
        <label for="qty_cheating" v-if="!popup"><p class="form_heading">{{ currentQuantityLabel }}</p></label>
        <input id="qty_cheating" type="number" required :min="currentService.min" :max="currentService.max" v-model.number="quantity" @keyup="onKeyup" :placeholder="popup ? 'Количество*' : ''">
      </div>
    </section>
    <section class="info_wrap">
      <div class="sum_info" v-if="$auth.user">
        <div class="discount_info">
          <div>
            <span>
              <svg width="20" height="28" viewBox="0 0 20 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.1441 15.9251L16.1054 9.6924V6.81707L18.8326 1.97043L15.1339 0.12102L12.5641 1.40387L9.99805 0.120911L7.43229 1.40376L4.86653 0.120911L1.16564 1.97135L3.90812 6.81815V9.69174L0.862231 15.9125C-0.42035 18.532 -0.264448 21.5733 1.2792 24.048C2.82291 26.5226 5.48578 28 8.40247 28H11.5977C14.5115 28 17.1729 26.5248 18.7172 24.0539C20.2614 21.583 20.421 18.5442 19.1441 15.9251ZM14.4706 9.06372H5.54283V7.42029H14.4706V9.06372ZM4.86653 1.94863L7.43229 3.23148L9.99805 1.94863L12.5635 3.23137L15.1333 1.94852L16.566 2.66487L14.81 5.78553H5.20215L3.43584 2.66395L4.86653 1.94863ZM17.3309 23.1875C16.0874 25.1773 13.9441 26.3652 11.5977 26.3652H8.40247C6.05375 26.3652 3.90932 25.1755 2.66625 23.1827C1.42312 21.19 1.29762 18.7408 2.33041 16.6314L5.23533 10.6984H14.7771L17.6747 16.6416C18.703 18.7507 18.5745 21.1978 17.3309 23.1875Z" fill="#819EB9"/><path d="M11.6417 18.3454C11.2794 18.0709 11.0662 17.9603 10.66 17.7572L10.1093 17.4716C10.014 17.4194 9.89559 17.338 9.74596 17.2351L9.73239 17.2258C9.47448 17.0241 9.4238 16.8491 9.4238 16.6158C9.4238 16.2688 9.68765 15.9866 10.012 15.9866C10.3664 15.9866 10.6147 16.0869 10.9117 16.6159L11.0537 16.8691L12.2308 16.1066L12.1196 15.8879C11.8031 15.2651 11.3519 14.8634 10.7762 14.6909V13.7511H9.41165V14.6835C8.55667 14.9532 7.97714 15.7474 7.97714 16.6875C7.97714 17.3076 8.1755 17.7727 8.60468 18.1542C8.98198 18.4791 9.27967 18.6612 9.87434 18.9315C10.7694 19.3578 11.0715 19.6473 11.0715 20.079C11.0715 20.3532 10.9998 20.5806 10.8581 20.7548C10.6758 20.9676 10.4328 21.0667 10.094 21.0667C9.45252 21.0667 9.0951 20.6885 8.8191 19.7176L8.72145 19.3741L7.47266 20.1299L7.51151 20.3184C7.72697 21.3635 8.44523 22.1383 9.41165 22.3893V23.3125H10.7762V22.3816C11.2099 22.272 11.5848 22.0459 11.8925 21.7084C12.3076 21.2589 12.518 20.7037 12.518 20.0584L12.5178 20.0468C12.4853 19.2874 12.2228 18.7781 11.6417 18.3454Z" fill="#819EB9"/>
              </svg>
            </span>
            Скидка
          </div>
          <p class="discount_amount">{{ costs.economy }} <span>&#8381;</span></p>
        </div>
        <div class="balans_info">
          <div>
            <span>
              <svg width="20" height="28" viewBox="0 0 20 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.1441 15.9251L16.1054 9.6924V6.81707L18.8326 1.97043L15.1339 0.12102L12.5641 1.40387L9.99805 0.120911L7.43229 1.40376L4.86653 0.120911L1.16564 1.97135L3.90812 6.81815V9.69174L0.862231 15.9125C-0.42035 18.532 -0.264448 21.5733 1.2792 24.048C2.82291 26.5226 5.48578 28 8.40247 28H11.5977C14.5115 28 17.1729 26.5248 18.7172 24.0539C20.2614 21.583 20.421 18.5442 19.1441 15.9251ZM14.4706 9.06372H5.54283V7.42029H14.4706V9.06372ZM4.86653 1.94863L7.43229 3.23148L9.99805 1.94863L12.5635 3.23137L15.1333 1.94852L16.566 2.66487L14.81 5.78553H5.20215L3.43584 2.66395L4.86653 1.94863ZM17.3309 23.1875C16.0874 25.1773 13.9441 26.3652 11.5977 26.3652H8.40247C6.05375 26.3652 3.90932 25.1755 2.66625 23.1827C1.42312 21.19 1.29762 18.7408 2.33041 16.6314L5.23533 10.6984H14.7771L17.6747 16.6416C18.703 18.7507 18.5745 21.1978 17.3309 23.1875Z" fill="#819EB9"/><path d="M11.6417 18.3454C11.2794 18.0709 11.0662 17.9603 10.66 17.7572L10.1093 17.4716C10.014 17.4194 9.89559 17.338 9.74596 17.2351L9.73239 17.2258C9.47448 17.0241 9.4238 16.8491 9.4238 16.6158C9.4238 16.2688 9.68765 15.9866 10.012 15.9866C10.3664 15.9866 10.6147 16.0869 10.9117 16.6159L11.0537 16.8691L12.2308 16.1066L12.1196 15.8879C11.8031 15.2651 11.3519 14.8634 10.7762 14.6909V13.7511H9.41165V14.6835C8.55667 14.9532 7.97714 15.7474 7.97714 16.6875C7.97714 17.3076 8.1755 17.7727 8.60468 18.1542C8.98198 18.4791 9.27967 18.6612 9.87434 18.9315C10.7694 19.3578 11.0715 19.6473 11.0715 20.079C11.0715 20.3532 10.9998 20.5806 10.8581 20.7548C10.6758 20.9676 10.4328 21.0667 10.094 21.0667C9.45252 21.0667 9.0951 20.6885 8.8191 19.7176L8.72145 19.3741L7.47266 20.1299L7.51151 20.3184C7.72697 21.3635 8.44523 22.1383 9.41165 22.3893V23.3125H10.7762V22.3816C11.2099 22.272 11.5848 22.0459 11.8925 21.7084C12.3076 21.2589 12.518 20.7037 12.518 20.0584L12.5178 20.0468C12.4853 19.2874 12.2228 18.7781 11.6417 18.3454Z" fill="#819EB9"/>
              </svg>
            </span>
            Баланс
          </div>
          <p class="balans_amount">0 <span>&#8381;</span></p>
        </div>
      </div>
      <div class="total_info">
        <p class="total_pay">{{ popup ? 'СТОИМОСТЬ ЗАКАЗА' : 'К оплате' }}:</p>
        <p>{{ costs.cost.toFixed(2) }} &#8381;</p>
      </div>
      <hr v-if="popup" />
      <p id="confidential" v-if="popup">МЫ НЕ ПЕРЕДАЕМ ВАШУ ПЕРСОНАЛЬНУЮ ИНФОРМАЦИЮ ТРЕТЬИМ ЛИЦАМ.</p>
    </section>
    <div class="submit_btn_wrap">
      <a v-if="popup" class="main_btn" @click="onSubmit">ПЕРЕЙТИ К ОПЛАТЕ</a>
      <input v-else type="submit" class="main_btn" value="Запуск накрутки">
    </div>
  </form>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'NewOrder',
  props: [ 'services' ],
  data(){
    return {
      url: '',
      typeLikes: 'one',
      lastQuality: 2,
      minAutoLikes: 0,
      maxAutoLikes: 0,
      currentService: null,
      currentPrice: null,
      quantity: null,
    }
  },
  computed: {
    ...mapGetters('services', ['resultById']),
    costs() {
      return this.resultById('costs')[0]
    },
    popup() {
      return this.$route.name === 'index-order'
    },
    isAutoInst(){
      return this.currentService.type.includes('SERVICE_INSTAGRAM_AUTO')
    },
    currentUrlLabel() {
      return this.currentService.type === 'SERVICE_INSTAGRAM_LIKES' && this.typeLikes === 'one'
      || this.currentService.type === 'SERVICE_INSTAGRAM_VIEWS_VIDEO'
      || this.currentService.type === 'SERVICE_INSTAGRAM_VIEWS_IGTV'
      || this.currentService.type === 'SERVICE_INSTAGRAM_VIEWS_VIDEO_IMPRESSIONS'
      || this.currentService.type === 'SERVICE_INSTAGRAM_VIEWS_SHOW_IMPRESSIONS'
      ? 'Ссылка на пост'
      : 'Логин или ссылка на аккаунт'
    },
    currentQuantityLabel() {
      return this.currentService.type.includes('SERVICE_INSTAGRAM_LIKES')
      || this.currentService.type === 'SERVICE_INSTAGRAM_AUTO_LIKES'
      ? 'Количество лайков'
      : this.currentService.type.includes('SERVICE_INSTAGRAM_VIEWS')
      || this.currentService.type === 'SERVICE_INSTAGRAM_AUTO_VIEWS'
      ? 'Количество просмотров'
      : this.currentService.type === 'SERVICE_INSTAGRAM_AUTO_LIKES_VIEWS_IMPRESSIONS'
      ? 'Количество лайков или просмотров'
      : 'Количество подписчиков'
    }
  },
  watch: {
    typeLikes: function() {
      this.onKeyup()
    },
    currentService: function(val) {
      if (val.type.includes('SERVICE_INSTAGRAM_AUTO')) {
        this.minAutoLikes = val.min
        this.maxAutoLikes = val.min+50
      }
      this.typeLikes = 'one'
      this.onKeyup()
    }
  },
  methods: {
    async onKeyup() {
      await this.$store.dispatch('services/apiCosts', {
        type: this.currentService.type,
        n: this.typeLikes === 'last'
        ? this.quantity*this.lastQuality
        : this.isAutoInst
        ? ((this.minAutoLikes+this.maxAutoLikes)/2)*this.lastQuality
        : this.quantity
      })
    },
    onKeyupHardCore(){
      if (!this.quantity || this.quantity < this.currentService.min) {
        this.currentPrice = 0
      }
      else if (this.quantity < 1e3) {
        this.currentPrice = this.currentService.price * this.quantity
      }
      else if (this.quantity < 5e3) {
        this.currentPrice = this.currentService.price_1k * this.quantity
      }
      else if (this.quantity < 1e4) {
        this.currentPrice = this.currentService.price_5k * this.quantity
      }
      else if (this.quantity < 25e3) {
        this.currentPrice = this.currentService.price_10k * this.quantity
      }
      else if (this.quantity < 5e4) {
        this.currentPrice = this.currentService.price_25k * this.quantity
      }
      else if (this.quantity < 1e5) {
        this.currentPrice = this.currentService.price_50k * this.quantity
      }
      else {
        this.currentPrice = this.currentService.price_100k * this.quantity
      }
    },
    async onSubmit(){
      let details = this.typeLikes === 'one' && !this.isAutoInst
      ? [{ link: this.url, quantity: this.quantity }]
      : this.isAutoInst
      ? [{ username: this.url, min: this.minAutoLikes, max: this.maxAutoLikes, posts: this.lastQuality }]
      : await this.$axios.post('orders/spread', {
        instagram_login: this.url,
        posts: this.lastQuality
      }).then(response => {
        return response.data.success.posts.map(el => ({ link: el, quantity: this.quantity }))
      })
      this.$axios.post(`orders/service/${this.currentService.id}`, {
        details: JSON.stringify(details)
      }).then(response => {
        let uuidArray = []
        response.data.success.orders.map(el => uuidArray.push(el.uuid))
        this.$axios.post('orders/execute/uuid', {
          details: JSON.stringify(uuidArray)
        }).then(res => {
          this.url = ''
          this.currentService = this.services[0]
          this.quantity = 100
        })
      })
    }
  },
  mounted() {
    this.currentService = this.$route.query.service ? this.services.find(el => el.type === this.$route.query.service) : this.services[0]
    this.currentPrice = this.currentService.price*this.currentService.min
    try {
      this.$route.query.count = parseInt(this.$route.query.count)
      // console.log(this.$route.query.count)
    } catch (e) {
      // console.error('Incorrect count')
      this.$route.query.count = this.currentService.min
    }
    let count = parseInt(this.$route.query.count)
    this.quantity = this.popup && count && count >= this.currentService.min && count <= this.currentService.max ? count : this.currentService.min
  }
}
</script>

<style lang="less" scoped>

h3{
  font-size: 22px;
  margin-top: 15px;
  margin-bottom: 40px;
  line-height: 1;
  font-weight: 800;
  text-align: center;
  @media (max-width: 320px){
    font-size: 18px;
  }
}
.form_item_wrap {
  margin-top: 24px;
  label {
    display: block;
    color: #696F7D;
    font-size: 13px;
    line-height: 1.4;
    padding-bottom: 5px;
  }
  input, select {
    outline: none;
    border: 1px solid #D2D7DC;
    border-radius: 6px;
    height: 50px;
    width: 383px;
    padding-left: 10px;
    font-size: 17px;
    background-color: #fff;
    -webkit-appearance:none;
    -moz-appearance: none;
    appearance: none;
  }
  &.select_wrap{
    position: relative;
    &::after{
      content: '';
      position: absolute;
      right: 15px;
      top: 50%;
      margin-top: -2.5px;
      width: 0px;
      height: 0px;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 5px solid #969aa1;
    }
  }
}

.info_wrap {
  width: 380px;
  padding-top: 25px;
  padding-left: 15px;
  padding-right: 15px;
  .sum_info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 15px;
    border-bottom: 1px solid #E4EBF6;
    margin-bottom: 5px;
  }
  div, .sum_info div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.total_info {
  p {
    color: #2991F2;
    margin-top: 5px;
    line-height: 1.4;
    font-size: 19px;
  }
  & + hr{
    margin-bottom: 5px;
    margin-top: 5px;
    border: 0;
    border-top: 1px solid #009dff;
  }
}
#confidential{
  text-align: center;
  color: #999;
  font-size: 10px;
  line-height: 15px;
}
.discount_info div,
.balans_info div {
  color: #819EB9;
  padding-right: 5px;
}

.discount_info svg,
.balans_info svg {
  width: 20px;
  height: 20px;
  display:inline-flex;
  justify-content: center;
  align-items: center;
}


.submit_btn_wrap {
  display: flex;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  width: 384px;
}

form input.main_btn{
  border: none;
  outline: none;
  background-color: #2991F2;
  color: yellow;
  line-height: 0;
  height: 45px;
  width: 200px;
  cursor: pointer;
  font-size: 16px;
}
</style>
