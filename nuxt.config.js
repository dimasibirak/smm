const pkg = require('./package')
const data = require('./data')

module.exports = {
  // mode: 'universal',
  mode: 'spa',
  env: {
    data: data.default,
    browserBaseURL: "/data/"
  },
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preload', as: 'font', href: '/fnt/smmicons.woff', crossorigin: "crossorigin" },
      { rel: 'preload', as: 'font', href: '/fnt/GothamProRegular.woff', crossorigin: "crossorigin" },
      { rel: 'preload', as: 'font', href: '/fnt/GothamProBold.woff', crossorigin: "crossorigin" },
      { rel: 'preload', as: 'font', href: '/fnt/GothamProMedium.woff', crossorigin: "crossorigin" },
      { rel: 'preload', as: 'font', href: '/fnt/Gilroy-Medium.woff', crossorigin: "crossorigin" },
      { rel: 'preload', as: 'font', href: '/fnt/Gilroy-Bold.woff', crossorigin: "crossorigin" },
      { rel: 'preload', as: 'font', href: '/fnt/Gilroy-ExtraBold.woff', crossorigin: "crossorigin" }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#2bf' },
  loadingIndicator: {
    name: '~/views/loading/smm-circle.html',
    color: '#2bf'
  },
  router: {
    middleware: 'auth',
    linkActiveClass: 'link-active',
    linkExactActiveClass: 'link-exact-active',
    scrollBehavior: async (to, from, savedPosition) => {
      if (savedPosition) {
        // savedPosition is only available for popstate navigations.
        return savedPosition
      }
      else {
        const position = {}
        // scroll to anchor by returning the selector
        const findEl = async (hash, x) => {
          return document.querySelector(hash) ||
          new Promise((resolve, reject) => {
            if (x > 50) {
              return resolve()
            }
            setTimeout(() => { resolve(findEl(hash, ++x || 1)) }, 100)
          })
        }
        if (to.hash) {
          let el = await findEl(to.hash)
          if ('scrollBehavior' in document.documentElement.style) {
            return window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
          } else {
            return window.scrollTo(0, el.offsetTop)
          }
          // position.selector = to.hash
          //
          // (document.querySelector(to.hash)) {
          //   return position
          // }
          //
          // // if the returned position is falsy or an empty object,
          // // will retain current scroll position.
          // return false
        }

        // return new Promise(resolve => {
        //   // check if any matched route config has meta that requires scrolling to top
        //   if (to.matched.some(m => m.meta.scrollToTop)) {
        //     // coords will be used if no selector is provided,
        //     // or if the selector didn't match any element.
        //     position.x = 0
        //     position.y = 0
        //   }
        //
        //   // wait for the out transition to complete (if necessary)
        //   console.log(this)
        //   this.app.$root.$once('triggerScroll', () => {
        //     // if the resolved position is falsy or an empty object,
        //     // will retain current scroll position.
        //     resolve(position)
        //   })
        // })
        return false;
      }
    }
  },
  /*
  ** Global CSS
  */
  css: [
    "~/static/style.css"
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vue2-scrollspy', ssr: false },
    '~plugins/vue-simple-svg'
  ],
  messages: {
    loading: 'Идёт загрузка...',
    error_404: 'This page could not be found',
    server_error: 'Server error',
    nuxtjs: 'Nuxt.js',
    back_to_home: 'Back to the home page',
    server_error_details:
    'An error occurred in the application and your page could not be served. If you are the application owner, check your logs for details.',
    client_error: 'Error',
    client_error_details:
    'An error occurred while rendering the page. Check developer tools console for details.'
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    ['@nuxtjs/moment', { locales: ['es-us', 'ru'], defaultLocale: 'ru' }]
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    // baseURL: process.env.BASE_URL || 'https://smmtouch.dev.konekon.ru:8443/api/' //'http://127.0.0.1:8000/api/'
    baseURL: data.default.baseURL
  },

  auth: {
    // Options
    redirect: {
      login: '/',
      logout: '/',
      callback: '/',
      home: '/cp/'
    },
    strategies: {
      email: {
        _scheme: 'local',
        endpoints: {
          login: { url: 'login/email/', method: 'post', propertyName: 'token' },
          logout: { url: 'logout/', method: 'post' },
          user: { url: 'user/', method: 'get', propertyName: 'success' }
        }
      },
      vk: {
        _scheme: 'local',
        endpoints: {
          login: { url: 'login/vk/', method: 'post', propertyName: 'token' },
          logout: { url: 'logout/', method: 'post' },
          user: { url: 'user/', method: 'get', propertyName: 'success' }
        }
      },
      fb: {
        _scheme: 'local',
        endpoints: {
          login: { url: 'login/fb/', method: 'post', propertyName: 'token' },
          logout: { url: 'logout/', method: 'post' },
          user: { url: 'user/', method: 'get', propertyName: 'success' }
        }
      }
    }
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  }
}
