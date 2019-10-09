<template>
  <div class="popup-wrap" :class="{ auth: isAuthPopup }" @click.self="close">
    <div class="popup">
      <a class="close si si-exit" @click="close"></a>
      <nuxt v-if="!$slots.default" />
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  created() {
    document.body.classList.add("poped")
  },
  destroyed() {
    document.body.classList.remove("poped")
  },
  methods: {
    close() {
      this.$router.back()
    }
  },
  computed: {
    isAuthPopup(){
      return this.$route.name !== 'index-order'
    }
  }
}
</script>


<style scoped lang="less">
div.popup-wrap{
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
}
div.popup{
  display: flex;
  position: relative;
  flex-flow: column;
  align-items: center;
  background: #fff;
  padding: 15px;
  border-radius: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
}
a.close{
  display: inline-flex;
  width: 44px;
  height: 44px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 900;
  position: absolute;
  top: 15px;
  right: 15px;
  @media (max-width: 320px){
    top: 30px;
  }
}
.auth{
  div.popup{
    background: #f5f8fc;
    & > div{
      width: 100%;
      &:last-child{
        margin-bottom: 0;
      }
    }
  }
  a.close{
    display: inline-flex;
    background: #fff;
    border-radius: 40px;
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: #009dff;
    font-weight: 900;
    box-shadow: rgba(0, 0, 0, 0.15) 0 4px 4px;
    position: absolute;
    top: 35px;
    right: 15px;
  }
  & /deep/ .group{
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: baseline;
    &.h2,
    &.sni-links{
      flex-flow: column;
      justify-content: center;
    }
    &.group-2 > *{
      width: 47.5%;
    }
    div{
      margin: 0 auto 7px;
      font-size: 15px;
      font-weight: 600;
      color: #7e8fa5;
    }
    h2{
      font-weight: 600;
      font-size: 25px;
      color: #456;
      text-align: right;
      margin: 0 auto 15px;
    }
  }
  & /deep/ .nav-links{
    & > *{
      padding: 10px;
      text-align: center;
      background-color: #aaa;
      color: #fff;
      border-radius: 3px;
      font-weight: 600;
      &:hover{
        background-color: #aaa;
      }
    }
  }
  & /deep/ .nav-link{
    display: flex;
    height: 50px;
    justify-content: center;
    align-items: center;
    border: 2px solid #0af;
    border-radius: 3px;
    color: #0af;
    width: 100%;
    font-weight: 600;
    &:hover,
    &::active{
      background-color: #0af;
      color: #fff;
    }
  }
  & /deep/ .sni-links{
    margin-bottom: 15px;
    & > *{
      width: 100%;
      padding: 16px 15px 17px;
      margin-bottom: 10px;
      background-color: transparent;
      color: #fff;
      font-weight: 700;
      border-radius: 3px;
      font-size: 18px;
    }
    & > :last-child{
      margin-bottom: 0;
    }
    & > .vkconnect {
      background-color: #6fa3e2;
    }
    & > .fbconnect {
      background-color: #3c5a99;
      img{
        padding: 0 7px;
      }
    }
  }
  & /deep/ input[type='submit']{
    cursor: pointer;
    background-color: #0c8;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    border: none;
    height: 50px;
  }
  & /deep/ .vkconnect,
  & /deep/ .fbconnect,
  & /deep/ input[type='submit']{
    &:hover{
      opacity: 0.8;
    }
    img{
      width: auto;
      height: 24px;
      vertical-align: -6px;
      margin-right: 10px;
    }
  }
  & /deep/ p{
    margin-bottom: 15px;
    color: #456;
  }
  & /deep/ form{
    padding: 0;
    margin: 16px 0 40px;
    width: 100%;
    & > :last-child{
      margin-bottom: 0;
    }
    :-moz-placeholder{
      color: #9bb0cb;
    }
    :-ms-input-placeholder{
      color: #9bb0cb;
    }
    ::-moz-placeholder{
      color: #9bb0cb;
    }
    ::-webkit-input-placeholder {
      color: #9bb0cb;
    }
    ::placeholder {
      color:#9bb0cb;
    }
    input{
      display: block;
      border-radius: 5px;
      border: 1px solid #dde9f5;
      padding: 8px;
      font-size: 16px;
      font-weight: 600;
      color: #333;
      width: 100%;
      height: 50px;
    }
    label{
      display: block;
      margin-bottom: 8px;
      position: relative;
      input{
        padding-left: 36px;
      }
      .input-icon{
        position: absolute;
        margin-top: -8px;
        top: 25px;
        left: 14px;
        &.pass{
          margin-top: -6px;
        }
      }
      span{
        display: none;
        background-color: #fb695e;
        border-radius: 3px;
        margin-top: 5px;
        font-size: 11px;
        font-weight: 600;
        color: #fff;
        padding: 3px 10px;
      }
      &.error{
        margin-bottom: 10px;
        input{
          border-color: #fb695e;
        }
        span{
          display: block;
        }
      }
    }
  }
  & /deep/ h6{
    font-size: 19px;
    margin: 0 auto 10px;
  }
  & /deep/ h6+p{
    font-size: 17px;
    text-align: center;
    margin: 0 auto 20px;
  }
  & /deep/ .sni-group{
    margin-top: 20px;
  }
}

/* @media (max-height: 644px){
  div.popup-wrap{
    overflow: auto;
  }
  .popup{
    min-height: 644px;
  }
} */
@media (min-width: 576px){
  div.popup{
    border-radius: 8px;
    width: 450px;
    height: auto;
    overflow: visible;
  }
}
@media (min-width: 992px){
  div.popup{
    border-radius: 8px;
    width: 450px;
    height: auto;
  }
  a.close{
    top:15px;
  }
  .auth{
    div.popup{
      border-radius: 15px;
      width: auto;
      height: auto;
      flex-flow: row-reverse;
      align-items: flex-start;
      & > div{
        width: 450px;
        &.sni-group{
          width: 320px;
        }
        &.auth-group{
          width: 633px;
        }
      }
    }
    a.close{
      top: -15px;
      right: -15px;
    }
    & /deep/ .sni-group{
      margin: -15px;
      margin-right: 0;
      padding: 37px 40px 40px;
      border-radius: 30px;
      background-color: rgb(245, 248, 252);
    }
    & /deep/ .auth-group{
      margin: -15px;
      margin-left: 0;
      border-radius: 0 30px 30px 0;
      padding: 37px 338px 40px 40px;
      background-image: url(/img/auth.png);
      background-color: #fff;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center right;
    }
    & /deep/ .group{
      align-items: flex-start;
      div{
        margin: 0 0 7px;
      }
      h2{
        margin: 0 0 15px;
      }
    }
    & /deep/ .nav-links{
      & > *{
        padding: 10px;
        text-align: center;
        background-color: #aaa;
        color: #fff;
        border-radius: 3px;
        font-weight: 600;
        &:hover{
          background-color: #aaa;
        }
      }
    }
    & /deep/ .nav-link{
      height: 40px;
      font-size: 14px;
    }
    & /deep/ .sni-links{
      & > *{
        padding: 8px 15px 8px;
        font-size: 15px;
      }
    }
    & /deep/ input[type='submit']{
      font-size: 15px;
      height: 40px;
    }
    & /deep/ .vkconnect,
    & /deep/ .fbconnect,
    & /deep/ input[type='submit']{
      img{
        width: auto;
        height: 24px;
        vertical-align: -6px;
        margin-right: 10px;
      }
    }
    & /deep/ p{
      margin-bottom: 15px;
      color: #456;
    }
    & /deep/ form{
      margin: 0 0 20px;
      input{
        font-size: 15px;
        height: 40px;
      }
      label{
        .input-icon{
          top: 20px;
        }
      }
    }
    & /deep/ h6{
      font-size: 15px;
      margin: 0 0 20px;
    }
    & /deep/ h6+p{
      font-size: 13.4px;
      text-align: left;
      margin: 0 0 10px;
    }
  }
}
</style>
