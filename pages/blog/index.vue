<template>
  <div>
    <div id="blog" class="wrap">
      <Breadcrumbs :path="path" />
      <h1><span>БЛОГ</span></h1>
      <h3>Наши статьи<Tabs :tabs="tabs" :tabSelect="tab" @changeTab="changeTab" /></h3>
      <div id="feed">
        <Card v-for="article in sorted" :article="article" class="simple" :key="article.slug" />
      </div>
      <h3>Популярные статьи</h3>
      <div>
        <Card v-for="article in featured" :article="article" class="featured" :key="article.slug" />
      </div>
      <Share />
    </div>
  </div>
</div>
</template>

<script>
import Breadcrumbs from '~/components/blog/Breadcrumbs'
import Card from '~/components/blog/Card'
import Share from '~/components/blog/Share'
import Tabs from '~/components/cp/Tabs'
import '~/components/blog/style.less'
export default{
  auth: false,
  layout: 'landing',
  components: {
    Breadcrumbs,
    Card,
    Share,
    Tabs
  },
  head: {
    title: 'SmmTouch.ru - Накрутка лайков, подписчиков, просмотров в Инстаграм',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Накрутить лайки, подписчиков и просмотры в Инстаграме. Быстрая и недорогая накрутка с гарантией.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preload', as: 'font', href: '/fnt/smmicons.woff', crossorigin: 'crossorigin' },
      { rel: 'preload', as: 'font', href: '/fnt/Gilroy-Medium.woff', crossorigin: 'crossorigin' },
      { rel: 'preload', as: 'font', href: '/fnt/Gilroy-Bold.woff', crossorigin: 'crossorigin' },
      { rel: 'preload', as: 'font', href: '/fnt/Gilroy-ExtraBold.woff', crossorigin: 'crossorigin' },
      { rel: 'preload', as: 'script', href: 'https://yastatic.net/es5-shims/0.0.2/es5-shims.min.js'},
      { rel: 'preload', as: 'script', href: 'https://yastatic.net/share2/share.js'}
    ]
  },
  async asyncData ({ app, env, query, redirect}) {
    // if (query.slug) {
    //   redirect(302, `/blog/${ query.slug }`)
    //   return
    // }
    // let dataUrl = "http://smmtouch.konekon.ru";
    // let dataUrl = location.origin;
    // if ('http://localhost:3000' === location.origin) {
    //   dataUrl = 'http://smmtouch.test'
    // }
    let featured = await app.$axios.get(`${ location.origin }${ env.browserBaseURL }blog/featured.json`)
    let list = await app.$axios.get(`${ location.origin }${ env.browserBaseURL }blog/list.json`)
    // let articles = await app.$axios.get(`${ dataUrl }/views.php`, {
    //   transformRequest: [function (data, headers) {
    //     delete headers.common.Authorization
    //     return data
    //   }]
    // })
    for (var i = 0; i < list.data.length; i++) {
      list.data[i].date = app.$moment(list.data[i].date)
    }
    return {
      list: list.data,
      featured: featured.data
    }
  },
  data(){
    return{
      path: [
        {
          href: location.origin,
          name: 'Главная',
          out: true
        },
        {
          name: 'Блог'
        }
      ],
      tab: 'date',
      tabs: [
        { text: 'По дате', id: 'date' },
        { text: 'По просмотрам', id: 'views' }
      ]
    }
  },
  methods: {
    changeTab(id) {
      this.tab = id
    }
  },
  computed: {
    sorted(){
      switch (this.tab) {
        case 'views':
        return this.list.sort(function(a, b){ return b.views - a.views })
        break;
        default:
        return this.list.sort(function(a, b){ return a.date - b.date })
      }
    }
  },
  created() {
    var links = document.querySelector(".spy.active")
    if (links) {
      links.classList.remove("active")
    }
    document.querySelector("#blog-link").classList.add("active", "spy")
  },
  destroyed(){
    document.querySelector("#blog-link").classList.remove("active", "spy")
  }
}
</script>

<style scoped lang="less">

</style>
