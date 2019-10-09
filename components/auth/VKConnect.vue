<template>
  <a :href="url" class="vkconnect">
    <img src="/img/sni-03.svg" alt="">ВКонтакте
  </a>
</template>

<script>
export default {
  data() {
    return {
      url: '',
      config: process.env.data.vk
    }
  },
  methods: {
    async login(code){
      try {
        let res = await this.$axios.post('vk/token/', {code: code}, {})
        await this.$auth.loginWith('vk', {
          data: {
            vk_id: res.data.user_id,
            vk_token: res.data.access_token
          }
        })
        this.$router.replace("/cp/")
      }
      catch (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)
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
      }
    }
  },
  async mounted() {
    let q = `https://oauth.vk.com/authorize?client_id=${this.config.app}`
    q += `&display=${this.config.display}&redirect_uri=${this.config.redirectUri}&scope=friends`
    q += `&response_type=${this.config.responseType}&v=${this.config.v}`
    this.url = q
    var code = this.$route.query.code
    var fb = this.$route.query.state
    if(code && !fb) {
      await this.login(code)
    }
  }
}
</script>
