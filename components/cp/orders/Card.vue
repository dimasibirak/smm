<template>
  <div class="cp-orders__card" @click="openCard" :class="{full: isFull}" >
    <div class="cp-orders__card-details">
      <div class="cp-orders__card-avatar">
        <img :src="info.img" alt="avatar">
      </div>
      <div class="cp-orders__card-header">
        <h3 class="cp-orders__card-title">{{info.service.title}}</h3>
        <a v-if="info.details" :href="info.details.link" target="_blank" class="cp-orders__card-name">{{info.instagram_login}}</a>
        <span class="cp-orders__card-text--mobile" v-if="checkMobile">{{statusInfo.text}}</span>
      </div>
    </div>
    <div class="cp-orders__card-info">
      <!-- добавить условие, чтобы показывать либо заказы тип "auto" или другие -->
      <div class="cp-orders__card-info-block" v-if="info.details && info.details.quantity">
        <span class="cp-orders__card-text cp-orders__card-text--uppercase">Выполнений</span>
        <span class="cp-orders__card-count">{{performed}}/{{info.details.quantity}}</span>
      </div>
      <template v-else>
        <div class="cp-orders__card-info-block">
          <span class="cp-orders__card-text">Лайков на новое фото</span>
          <span class="cp-orders__card-count">10</span>
        </div>
        <div class="cp-orders__card-info-block">
          <span class="cp-orders__card-text">Фотографий пролайкано</span>
          <span class="cp-orders__card-count">1/70</span>
        </div>
      </template>
    </div>
    <div class="cp-orders__card-status">
      <span class="cp-orders__card-text">{{statusInfo.text}}</span>
      <div class="cp-orders__card-icon">
        <simple-svg :filepath="`/img/cp/orders/${statusInfo.icon}.svg`" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: [ 'info' ],
  data: () => ({
    isFull: false
  }),
  computed: {
    performed() {
      if(!this.info.foreign_status) return 0
      return this.info.details.quantity - this.info.foreign_status.remains
    },
    checkMobile() {
      return !this.isFull && window.innerWidth <= 768
    },
    statusInfo() {
      switch(this.info.status) {
        case 'STATUS_CREATED':
        case 'STATUS_RUNNING':
          return {text: 'В процессе', icon: 'rotate'}
        case 'STATUS_COMPLETED':
          return {text: 'Выполнен', icon: 'ready'}
        case 'STATUS_PARTIAL_COMPLETED':
          return {text: 'Частично выполнен', icon: 'part'}
        case 'STATUS_PAUSED':
          return {text: 'Выполнен', icon: 'pause'}
        case 'STATUS_CANCELED':
          return {text: 'Отменен', icon: 'close'}
        default:
          return {text: 'Статус неясен', icon: 'rotate'}
      }
    },
  },
  methods: {
    openCard() {
      if(window.innerWidth > 768) return false
      this.isFull = !this.isFull
    }
  }
}
</script>

<style lang="less">
.cp-orders__card {
  display: inline-block;
  margin: 0 15px;
  width: 100%;
  max-width: 30%;
  background: #fff;
  padding: 25px 30px;
  margin-bottom: 35px;
  &:after {
    content: '';
    display: none;
    width: 7px;
    height: 7px;
    border: 2px solid transparent;
    border-top-color: #C3D8EC;
    border-right-color: #C3D8EC;
    position: absolute;
    right: 15px;
    top: 20px;
    transform: rotate(135deg);
  }
  @media (max-width: 1600px) {
    margin: 0 10px;
    padding: 20px;
    margin-bottom: 20px;
  }
  @media (max-width: 1200px) {
    min-width: 300px;
  }
  @media (max-width: 768px) {
    min-width: auto;
    display: block;
    margin: 0;
    max-width: 100%;
    margin-bottom: 0;
    position: relative;
    cursor: pointer;
    &+& {
      margin-top: 10px;
    }
    &:after {
      display: block;
    }
    &.full {
      &:after {
        transform: rotate(-45deg);
      }
      .cp-orders__card-details {
        margin-bottom: 25px;
      }
      .cp-orders__card-info {
        display: block;
      }
      .cp-orders__card-status {
        display: flex;
      }
    }
    .cp-orders__card-details {
      margin-bottom: 0;
    }
    .cp-orders__card-info,
    .cp-orders__card-status {
      display: none;
    }
  }
}

.cp-orders__card-details {
  text-align: center;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    text-align: left;
  }
}

.cp-orders__card-avatar {
  width: 84px;
  height: 84px;
  overflow: hidden;
  border-radius: 50%;
  margin: 0 auto 15px;
  img {
    max-width: 100%;
    min-height: 100%;
  }
  @media (max-width: 768px) {
    margin: 0;
    margin-right: 10px;
    width: 65px;
    height: 65px;
  }
}

.cp-orders__card-title {
  font-weight: 600;
  color: #19233C;
  margin-bottom: 5px;
  @media (max-width: 768px) {
    font-weight: normal;
    font-size: 16px;
  }
}

.cp-orders__card-name {
  color: #2691F4;
  font-size: 14px;
}

.cp-orders__card-info {
  padding: 18px 0;
  border-top: 1px solid #DCEDFD;
  border-bottom: 1px solid #DCEDFD;
  margin-bottom: 20px;
  .cp-orders__card-text {
    color: #829FBA;
  }
}

.cp-orders__card-info-block {
  display: flex;
  justify-content: space-between;
  align-items: center;
  & + & {
    margin-top: 15px;
  }
}

.cp-orders__card-text {
  color: #19233C;
  font-size: 14px;
  &--uppercase {
    text-transform: uppercase;
  }
  &--mobile {
    font-size: 15px;
    color: #829FBA;
    margin-top: 5px;
    display: block;
  }
}

.cp-orders__card-count {
  color: #19233C;
}

.cp-orders__card-status {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cp-orders__card-icon {
  .simple-svg-wrapper, svg {
    width: 23px;
    height: 23px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .simple-svg {
    &#orders-close {
      width: 16px;
      height: 16px;
    }
  }
}
</style>
