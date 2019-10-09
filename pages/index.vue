<template>
  <div v-scroll-spy>
    <Banner id="banner" class="back back-1"/>
    <Carousels id="services" :services="services"/>
    <Features id="features"/>
    <How id="how" class="back"/>
    <Description id="description"/>
    <Reviews id="reviews" class="back back-5"/>
    <Accordion id="faq"/>
    <nuxt-child />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Banner from "~/components/landing/Banner"
import Carousels from "~/components/landing/Carousels"
import Features from "~/components/landing/Features"
import How from "~/components/landing/How"
import Description from "~/components/landing/Description"
import Reviews from "~/components/landing/Reviews"
import Accordion from "~/components/landing/Accordion"
export default{
  auth: false,
  layout: "landing",
  components: {
    Banner,
    Carousels,
    Features,
    How,
    Description,
    Reviews,
    Accordion
  },
  async asyncData ({ store }) {
    if (!store.state.services.result.all) await store.dispatch('services/apiServices')
    let services = store.getters['services/resultById']('all')
    if (!store.state.services.result.costs) await store.dispatch('services/apiCosts', {
      type: services[0].type,
      n: services[0].min
    })
    return {
      services: services
    }
  },
  data(){
    return{
      index: 1,
      type: "common"
    }
  }
}
</script>

<style scoped lang="less">

#top > #content{
  padding-top: 0;
}
</style>
