<template>
  <PopupMain>
    <div class="reset-group">
      <div class="group h2">
        <div>Забыли пароль?</div>
        <h2>Сброс пароля</h2>
      </div>
      <p v-if="subbed">На указанную почту отправленны дальнейшие инструкции.</p>
      <template v-else>
        <p>Введите почту Вашего аккаунта.</p>
        <form @submit.prevent="onSubmit()">
          <label :class="{ error: emailError }">
            <input type="email" v-model="email" placeholder="Email" required>
            <img class="input-icon" src="/img/login_min.svg" height="16px"/>
            <span>Неверный логин</span>
          </label>
          <input type="submit" value="Восстановить">
        </form>
      </template>
      <!-- <div class="group group-2">
        <a @click.prevent="toggleUrl('/login/')" class="nav-link">Вход</a>
        <a @click.prevent="toggleUrl('/signup/')" class="nav-link">Регистрация</a>
      </div> -->
    </div>
  </PopupMain>
</template>

<script>
import PopupMain from "~/layouts/popupMain"
export default {
  auth: false,
  components: { PopupMain },
  data() {
    return {
      email: '',
      emailError: '',
      subbed: false
    }
  },
  methods: {
    toggleUrl(url){
      this.$router.replace(url)
    },
    onSubmit() {
      this.$axios.post('reset/', {
        email: this.email,
      }, {})
      .then(res => {
        console.log(res)
        this.subbed = true
      })
      .catch(error => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)
          if (error.response.data.error) {
            this.emailError = error.response.data.error
          }
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request)
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message)
        }
        console.log(error.config)
      })
    }
  }
}
</script>
