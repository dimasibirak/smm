<template>
  <article>
    <div class="thumbnail" :style="{ backgroundImage: `url('${ article.cover ? article.cover : defaultCover }')` }"></div>
    <div class="description">
      <h3>{{ article.heading }}</h3>
      <span v-if="article.date.format">Опубликовано: {{ article.date.format('YYYY-MM-DD HH:mm:ss') }}</span>
      <span v-else>Опубликовано: {{ article.date }}</span>
      <span>Просмотры: {{ article.views }}</span>
      <span v-if="article.tags && article.tags.length"><template v-for="tag in article.tags">#{{ tag }} </template></span>
      <p>{{ article.description }}</p>
    </div>
    <nuxt-link :to="`/blog/${ article.slug }/`">Читать далее</nuxt-link>
  </article>
</template>

<script>
export default {
  props: {
    article: Object
  },
  data(){
    return{
      defaultCover: "/img/blog/defaultCover.png"
    }
  }
}
</script>

<style scoped lang="less">
article {
  width: 100%;
  margin-top: 30px;
  border-radius: 6px;
  -webkit-box-shadow: 0 7px 14px 1px rgba(0,0,0,.15);
  box-shadow: 0 7px 14px 1px rgba(0,0,0,.15);
  position: relative;
  &:first-child {
    margin-top: 0;
  }
  .thumbnail {
    width: 100%;
    height: 240px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    background-size: cover;
    background-position: 50%;
  }
  .description {
    padding: 10px 15px 37px;
    color: #444;
    h3 {
      font-weight: 800;
      font-size: 24px;
      margin-bottom: 12px;
      line-height: 1.3;
    }
    span {
      font-size: 14px;
      text-transform: uppercase;
      line-height: 1.3;
      margin-bottom: 10px;
      color: #888;
      display: block;
    }
    p {
      font-size: 16px;
      line-height: 1.3;
    }
  }
  a {
    text-transform: uppercase;
    font-weight: 800;
    font-size: 18px;
    color: #4ab6f7;
    position: absolute;
    right: 15px;
    bottom: 12px;
  }
}
@media (min-width: 768px) {
  article {
    width: calc(50% - 15px);
    margin-left: 30px;
    &:nth-child(odd) {
      margin-left: 0;
    }
    &:nth-child(2) {
      margin-top: 0;
    }
    &.featured {
      width: 100%;
      margin-left: 0;
      font-size: 0;
      display: flex;
      margin-top: 30px;
      &:first-child {
        margin-top: 0;
      }
      .thumbnail {
        border-top-left-radius: 6px;
        border-top-right-radius: 0;
        border-bottom-left-radius: 6px;
        height: auto;
        width: 50%;
        flex-shrink: 0;
      }
    }
  }
}
@media (min-width: 1200px){
  article {
    width: calc(33.333% - 20px);
    &:nth-child(odd) {
      margin-left: 30px;
    }
    &:nth-child(3n+1) {
      margin-left: 0;
    }
    &:nth-child(3) {
      margin-top: 0;
    }
  }
}
</style>
