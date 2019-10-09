<template>
  <PopupMain>
    <div class="auth-group">
      <div class="group h2">
        <div>Создание аккаунта</div>
        <h2>Регистрация</h2>
      </div>
      <form @submit.prevent="onSubmit()">
        <label>
          <input type="email" v-model="email" placeholder="Email" required>
          <img class="input-icon" src="/img/login_min.svg" height="16px"/>
          <span>Неверный логин</span>
        </label>
        <label>
          <input type="password" v-model="password" placeholder="Пароль" required>
          <img class="input-icon" src="/img/pass_min.svg" width="16px"/>
          <span>Неверный логин</span>
        </label>
        <input type="submit" value="Создать аккаунт">
      </form>
      <div class="group h2">
        <h6>Уже есть аккаунт?</h6>
      </div>
      <div class="group group-2">
        <a @click.prevent="toggleUrl('/login/')" class="nav-link">Вход</a>
        <a @click.prevent="toggleUrl('/reset/')" class="nav-link">Забыли пароль?</a>
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
import PopupMain from "~/layouts/popupMain.vue"
import VKConnect from "~/components/auth/VKConnect"
import FBConnect from "~/components/auth/FBConnect"

export default {
  auth: false,
  components: { PopupMain, VKConnect, FBConnect },
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    toggleUrl(url){
      this.$router.replace(url)
    },
    onSubmit() {
      this.$axios.post('register/', {
        email: this.email,
        password: this.password,
        password_confirm: this.password
      }, {})
      .then(res => {
        this.$auth.setToken('local', 'Bearer ' + res.data.success.token)
        this.$router.replace("/cp/")
      })
      .catch(err => {
        console.log(err)
      })
    },
  }
}
</script>
