<template>
  <PopupMain>
    <div class="group h2">
      <div></div>
      <h2>Подтверждение почты</h2>
    </div>
    <template v-if="subbed">
      <p>Ваш адрес электронной почты успешно подтвержден.</p>
      <a @click.prevent="toggleUrl('/login/')" class="nav-link">Вход</a>
    </template>
    <p v-else>Подождите, система проверяет код.</p>
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
      subbed: false
    }
  },
  methods: {
    toggleUrl(url){
      this.$router.replace(url)
    }
  },
  async created() {
    try {
      let res = await this.$axios.get(`confirm/${this.code}`, {})
      console.log(res)
      this.subbed = true
      if (res.data.error) {
        this.$router.push("/404")
      }
    }
    catch (err) {
      console.log(err)
      this.$router.push("/404")
    }
  }
}
</script>
