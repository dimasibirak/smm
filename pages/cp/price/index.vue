<template>
  <div class="forms_page">
    <Tabs :tabs="tabs" :tabSelect="tabSelect" @changeTab="changeTab" />
    <div class="main_content_wrap" :class="{wide: wideFunctions()}">
      <Card v-for="service in servicesFilter" :key="service.id" :info="service"/>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Tabs from '@/components/cp/Tabs'
import Card from '@/components/cp/price/Card'

export default {
  layout: 'cp',
  components: {
		Tabs, Card
	},
	async asyncData ({ store }) {
		if (!store.state.services.result.g) await store.dispatch('services/apiServicesG')
		let services = store.getters['services/g']
		return {
			services
		}
	},
	data: () => ({
		tabSelect: 'instagram',
		tabs: [
			{ text: 'INSTAGRAM', id: 'instagram' },
			{ text: 'ВКОНТАКТЕ', id: 'vk' }
		]
	}),
	computed: {
		...mapGetters('cp_sidebar', [ 'isClosing' ]),
		servicesFilter() {
			return this.services[this.tabSelect]
		}
	},
  methods: {
    changeTab(id) {
			this.tabSelect = id
		},
		wideFunctions() {
			return this.isClosing && window.innerWidth > 1200
		}
  },
}
</script>

<style lang="less" scoped>

.forms_page {
	margin: 30px 71px auto 42px;
	@media (max-width: 768px) {
    margin: 20px;
	}
}
.main_content_wrap {
	margin: 0 -15px;
	@media (max-width: 1400px) {
		margin: 0 -10px;
	}
	&.wide {
		.cp-price-card {
			max-width: 18.2%;
		}
	}
}
</style>
