<template>
  <a :href="url" class="fbconnect">
    <img src="/img/sni-02.svg" alt="">Facebook
  </a>
</template>

<script>
export default {
  data() {
    return {
      url: '',
      config: process.env.data.fb
    }
  },
  methods: {
    async login(code){
      try {
        let res = await this.$axios.post('fb/token/', {code: code}, {})
        await this.$auth.loginWith('fb', {
          data: {
            fb_id: res.data.fb_data.id,
            fb_token: res.data.token.access_token
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
    let q = `https://www.facebook.com/v3.2/dialog/oauth?client_id=${this.config.app}`
    q += `&redirect_uri=${this.config.redirectURI}`
    q += `&state=${this.config.state}`
    this.url = q
    var code = this.$route.query.code
    var fb = this.$route.query.state
    if(code && fb) {
      await this.login(code)
    }
  }
}
</script>
