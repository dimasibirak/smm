<template>
  <div class="cp-price-card">
    <div class="cp-price-card__header">
      <div class="cp-price-card__icon" v-if="info.info">i</div>
      <ul class="cp-price-card__hidden" ref="hideBlock" :style="styleHiddenBlock">
        <li v-for="i in info.info" :key="i">{{i}}</li>
      </ul>
      <div class="cp-price-card__img">
        <simple-svg :filepath="'https://smmtouch.dev.konekon.ru:8443'+info.img"/>
      </div>
      <h4 class="cp-price-card__title">{{info.title}}</h4>
      <span class="cp-price-card__time">{{info.startup}}</span>
    </div>
    <div class="cp-price-card__details">
      <div class="cp-price-card__block">
        <span class="cp-price-card__text">Скорость</span>
        <div class="cp-price-card__value">{{info.speed}}</div>
      </div>
      <div class="cp-price-card__block">
        <span class="cp-price-card__text">Минимальное кол-во</span>
        <div class="cp-price-card__value">{{info.min}} шт</div>
      </div>
      <div class="cp-price-card__block">
        <span class="cp-price-card__text">Максимальное кол-во</span>
        <div class="cp-price-card__value">{{info.max}} шт</div>
      </div>
      <div class="cp-price-card__block">
        <span class="cp-price-card__text">Цена за 100 шт</span>
        <div class="cp-price-card__value">{{info.price*100}} ₽</div>
      </div>
    </div>
    <div class="cp-price-card__actions">
      <nuxt-link
        :to="{path: `/cp/?service=${info.type}`}"
        class="cp-price-card__link"
      >Заказать услугу</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  props: ["info"],
  data: () => ({
    isMounted: false
  }),
  computed: {
    styleHiddenBlock() {
      if (!this.isMounted) return;
      return (
        window.innerWidth -
          this.$refs.hideBlock.getBoundingClientRect().left -
          this.$refs.hideBlock.offsetWidth <
          0 && { right: "30px", left: "unset" }
      );
    }
  },
  mounted() {
    this.isMounted = true;
  }
};
</script>

<style lang="less" scoped>
.cp-price-card {
  margin: 0 15px;
  background: #fff;
  box-shadow: 0px 4px 15px rgba(151, 179, 225, 0.25);
  display: inline-block;
  width: 100%;
  min-width: 320px;
  max-width: 20.5%;
  padding: 30px 30px 35px;
  border: 1px solid transparent;
  transition: all 0.2s;
  position: relative;
  margin-bottom: 35px;
  &:hover {
    border-color: #116fff;
    .cp-price-card__icon {
      opacity: 1;
      visibility: visible;
    }
  }
  @media (max-width: 1400px) {
    margin: 0 10px;
    padding: 20px;
    margin-bottom: 20px;
  }
  @media (max-width: 1200px) {
    min-width: 275px;
  }
  @media (max-width: 768px) {
    min-width: 335px;
    margin: 0 auto;
    display: block;
    & + & {
      margin-top: 20px;
    }
  }
  @media (max-width: 480px) {
    min-width: auto;
    width: 100%;
    max-width: 100%;
  }
}

.cp-price-card__header {
  text-align: center;
  margin-bottom: 20px;
}

.cp-price-card__icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: #116fff;
  box-shadow: 0px 7px 15px rgba(151, 179, 225, 0.2);
  border-radius: 50%;
  position: absolute;
  right: 10px;
  top: -20px;
  color: #fff;
  font-size: 24px;
  font-weight: 600;
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s;
  &:hover {
    & + .cp-price-card__hidden {
      opacity: 1;
      visibility: visible;
    }
  }
}

.cp-price-card__hidden {
  padding: 20px;
  background: #fff;
  box-shadow: 0px 4px 25px rgba(151, 179, 225, 0.25);
  position: absolute;
  top: 30px;
  left: calc(100% - 30px);
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s;
  z-index: 10;
  li {
    display: flex;
    align-items: center;
    white-space: nowrap;
    &:before {
      content: "";
      display: block;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: #116fff;
      margin-right: 8px;
    }
  }
  li + li {
    margin-top: 10px;
  }
}

.cp-price-card__img {
  .simple-svg-wrapper {
    width: 64px;
    height: 64px;
    margin: 0 auto 25px;
  }
}

.cp-price-card__title {
  font-weight: 600;
  color: #19233c;
  margin-bottom: 5px;
  min-height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cp-price-card__time {
  font-size: 14px;
  color: #2691f4;
}

.cp-price-card__details {
  margin-bottom: 20px;
  padding: 20px 0;
  border-top: 1px solid #dcedfd;
  border-bottom: 1px solid #dcedfd;
}

.cp-price-card__block {
  display: flex;
  align-items: center;
  justify-content: space-between;
  & + & {
    margin-top: 20px;
  }
}

.cp-price-card__text {
  font-size: 15px;
  color: #829fba;
}

.cp-price-card__value {
  color: #19233c;
}

.cp-price-card__link {
  background: #f5faff;
  border: 1px solid #dcedfd;
  box-sizing: border-box;
  border-radius: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  color: #2691f4;
  height: 50px;
}
</style>
