<template>
  <PopupMain>
    <div class="auth-group">
      <div class="group h2">
        <div>Вход через</div>
        <h2>Логин и пароль</h2>
      </div>
      <form @submit.prevent="onSubmit()">
        <label :class="{ error: formError }">
          <input type="email" v-model="email" placeholder="Email" required>
          <img class="input-icon" src="/img/login_min.svg" height="16px"/>
          <span>НЕВЕРНЫЙ ЛОГИН ИЛИ ПАРОЛЬ</span>
        </label>
        <label :class="{ error: formError }">
          <input type="password" v-model="password" placeholder="Пароль" required>
          <img class="input-icon pass" src="/img/pass_min.svg" width="16px"/>
          <!-- <span>Обязательное поле</span> -->
        </label>
        <div class="group group-2">
          <input type="submit" value="Войти">
          <a @click.prevent="toggleUrl('/reset/')" class="nav-link">Забыли пароль?</a>
        </div>
      </form>
      <div class="group h2">
        <h6>Еще не зарегистрированы?</h6>
        <p>Рекомендуем создать логин и пароль, чтобы всегда иметь доступ к SmmTouch.</p>
        <a @click.prevent="toggleUrl('/signup/')" class="nav-link">Регистрация</a>
      </div>
    </div>
    <div class="sni-group">
      <div class="group h2">
        <div>Вход через</div>
        <h2>Социальные сети</h2>
      </div>
      <div class="group sni-links">
        <VKConnect />
        <FBConnect />
      </div>
    </div>
  </PopupMain>
</template>

<script>
import PopupMain from "~/layouts/popupMain"
import VKConnect from "~/components/auth/VKConnect"
import FBConnect from "~/components/auth/FBConnect"

export default {
  auth: false,
  components: { PopupMain, VKConnect, FBConnect },
  data() {
    return {
      email: '',
      password: '',
      formError: ''
    }
  },
  methods: {
    toggleUrl(url){
      this.$router.replace(url)
    },
    async onSubmit() {
      try {
        let res = await this.$auth.loginWith("email", {
          data: {
            email: this.email,
            password: this.password
          }
        })
        this.$store.dispatch('profile/apiProfileInfo').then(() => {
          this.$router.replace("/cp/")
        })
      }
      catch (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)
          if (error.response.data.error) {
            this.formError = error.response.data.error
          }
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request)
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message)
        }
        console.log(error.config)
      }
    }
  }
}
</script>
