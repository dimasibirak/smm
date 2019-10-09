<template>
  <div>
    <div id="blog" class="wrap">
      <Breadcrumbs :path="path" />
      <div id="header">
        <div id="posted">
          <p class="day">{{ date.format('DD') }}</p>
          <p class="month">{{ date.format('LL').split(' ')[1] }}</p>
          <p class="year">{{ date.format('YYYY') }}</p>
        </div>
        <h1>{{ article.heading }}</h1>
        <span>Просмотры: {{ article.views }}</span>
      </div>
      <div id="image" :style="{ backgroundImage: `url('${ article.image ? article.image : defaultCover }')` }"></div>
      <div id="body" v-html="article.body"></div>
      <p v-if="article.tags && article.tags.length"><template v-for="tag in article.tags">#{{ tag }} </template></p>
      <template v-if="article.links && article.links.length">
        <h3>Смотрите также:</h3>
        <p v-for="link in article.links" id="tags">
          <nuxt-link :to="`/blog/${ link.slug }/`">{{ link.h3 }}</nuxt-link>
        </p>
      </template>
      <Share />
      <h3>Популярные статьи</h3>
      <div id="feed">
        <Card v-for="link in featured" :article="link" class="simple" :key="link.slug" />
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from '~/components/blog/Breadcrumbs'
import Card from '~/components/blog/Card'
import Share from '~/components/blog/Share'
import '~/components/blog/style.less'
export default{
  auth: false,
  layout: 'landing',
  components: {
    Breadcrumbs,
    Card,
    Share
  },
  async asyncData ({ app, env, params }) {
    let featured = await app.$axios.get(`${ location.origin }${ env.browserBaseURL }blog/featured.json`)
    let article = await app.$axios.get(`${ location.origin }${ env.browserBaseURL }blog/${ params.slug }.json`)
    return {
      featured: featured.data,
      article: article.data,
      date: app.$moment(article.data.date),
      path: [
        {
          href: location.origin,
          name: 'Главная',
          out: true
        },
        {
          href: '/blog/',
          name: 'Блог'
        },
        {
          name: article.data.heading
        }
      ]
    }
  },
  data(){
    return{
      defaultCover: '/img/blog/defaultCover.png'
    }
  }
}
</script>

<style scoped lang="less">
:-moz-placeholder,:-ms-input-placeholder,::-moz-placeholder,::-webkit-input-placeholder {
  color: #888;
}
#content /deep/ #blog{
  #header {
    margin-bottom: 28px;
    min-height: 78px;
    #posted {
      width: 68px;
      margin-left: 15px;
      float: right;
      height: auto;
      display: inline-block;
      vertical-align: top;
      text-align: center;
      border-top: 2px solid #4ab6f7;
      .day {
        font-size: 27px;
        font-weight: 800;
        color: #444;
        margin: 6px 0;
      }
      .month{
        margin-bottom: 9px;
      }
      .month, .year {
        font-size: 14px;
        text-transform: uppercase;
        color: #888;
      }
    }
    h1 {
      text-align: left;
      margin-bottom: 9px;
    }
    span {
      color: #888;
      font-size: 14px;
      display: block;
      text-transform: uppercase;
    }
  }
  #image {
    width: 100%;
    height: 290px;
    display: block;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin: 0 auto 30px;
    border-radius: 6px;
    -webkit-box-shadow: 0 7px 14px 1px rgba(0,0,0,.15);
    box-shadow: 0 7px 14px 1px rgba(0,0,0,.15);
  }
  #body {
    width: 100%;
    font-size: 16px;
    line-height: 1.2;
    margin-bottom: 30px;
    ul{
      list-style: disc;
      padding-left: 30px;
    }
    ol{
      list-style: decimal;
      padding-left: 30px;
    }
    a {
      color: #4ab6f7;
      text-decoration: underline;
      &:hover{
        text-decoration: none;
      }
    }
    h2 {
      font-weight: 800;
      font-size: 25px;
      line-height: 1;
    }
    img {
      margin: 15px auto;
      display: block;
      width: auto;
      border-radius: 6px;
      -webkit-box-shadow: 0 7px 14px 1px rgba(0,0,0,.15);
      box-shadow: 0 7px 14px 1px rgba(0,0,0,.15);
    }
  }
  #tags{
    font-size: 18px;
  }
  #feed{
    margin-bottom: 15px;
  }
  @media (min-width: 768px) {
    #header {
      min-height: 50px;
      #posted {
        width: 100px;
        margin-top: -8px;
        .day{
          margin-bottom: 8px;
        }
        .month, .year {
          margin-bottom: 0;
          display: inline-block;
        }
      }
    }
    #image {
      height: 340px;
    }
  }
  @media (min-width: 992px) {
    #image {
      height: 400px;
    }
  }
  @media (min-width: 1200px) {
    #image {
      height: 460px;
    }
  }
}
</style>
