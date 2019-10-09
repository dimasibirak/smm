<template>
  <ol itemscope itemtype="http://schema.org/BreadcrumbList">
    <template v-for="(url, i) in path">
      <li v-if="url.href" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
        <a v-if="url.out" itemprop="item" :href="url.href">
          <span itemprop="name">{{ url.name }}</span>
        </a>
        <nuxt-link v-else itemprop="item" :to="url.href">
          <span itemprop="name">{{ url.name }}</span>
        </nuxt-link>

        &gt;&nbsp;
        <meta itemprop="position" :content="i" />
      </li>
      <li v-else>{{ url.name }}</li>
    </template>
  </ol>
</template>

<script>
export default {
  props: {
    path: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped lang="less">
ol{
  margin-bottom: 27px;
  white-space: nowrap;
  display: flex;
  li{
    text-overflow: ellipsis;
    overflow: hidden;
    flex-shrink: 0;
    &:last-child{
      flex-shrink: 1;
    }
  }
  a{
    text-decoration: underline;
    color: #4ab6f7;
    &:hover{
      text-decoration: none;
    }
  }
}
</style>
