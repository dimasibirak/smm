<template>
  <PopupMain>
    <div class="group h2">
      <div>Сброс пароля</div>
      <h2>Новый пароль</h2>
    </div>
    <template v-if="subbed">
      <p>Ваш пароль успешно обновлен.</p>
      <a @click.prevent="toggleUrl('/login/')" class="nav-link">Вход</a>
    </template>
    <template v-else>
      <p>Введите Ваш новый пароль.</p>
      <form @submit.prevent="onSubmit()">
        <label>
          <input type="password" v-model="password" placeholder="Пароль" required>
          <span>Неверный логин</span>
        </label>
        <input type="submit" value="Сохранить">
      </form>
    </template>
  </PopupMain>
</template>

<script>
import PopupMain from "~/layouts/popupMain"
export default {
  auth: false,
  components: { PopupMain },
  asyncData ({ params }) {
    return {
      code: params.code
    }
  },
  data() {
    return {
      password: '',
      subbed: false
    }
  },
  methods: {
    toggleUrl(url){
      this.$router.replace(url)
    },
    onSubmit() {
      this.$axios.post('setPassword/', {
        reset_code: this.code,
        password: this.password,
        password_confirm: this.password
      }, {})
      .then(res => {
        console.log(res)
        this.subbed = true
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
