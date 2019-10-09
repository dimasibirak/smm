<template>
	<div class="forms_page">
		<Tabs :tabs="tabs" :tabSelect="tabSelect" @changeTab="changeTab" />
		<div class="main_content_wrap">
			<div class="cp-orders" :class="{wide: wideFunctions()}">
				<div class="cp-orders__cards">
					<Card v-for="order in ordersFilter" :key="order.id" :info="order"/>
				</div>
				<div class="cp-orders__sidebar">
					<nuxt-link class="cp-orders__sidebar-link" to="/cp/">Создать задание 
						<simple-svg :filepath="'/img/cp/orders/link.svg'" />
					</nuxt-link>
					<ul class="cp-orders__sidebar-filter">
						<li class="cp-orders__sidebar-category" :class="{active: cat.id === category}" v-for="cat in categories" :key="cat.id" @click="filterCategory(cat.id)">
							{{cat.text}}
						</li>
					</ul>
					<a href="#" class="cp-orders__sidebar-autoservices" v-if="tabSelect === 'auto'">Как работают автоуслуги?</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import {mapGetters} from 'vuex'
import Card from '@/components/cp/orders/Card'
import Tabs from '@/components/cp/Tabs'

export default {
	layout: 'cp',
	components: {
		Card, Tabs
	},
	async asyncData ({ app }) {
		let orders = await app.$axios.get(`users/${app.$auth.user.id}/orders/g`)
		
		return {
			orders: orders.data
		}
	},
	data: () => ({
		category: 'all',
		categories: [
			{ text: 'Все заказы', id: 'all' },
			{ text: 'Активные', id: 'active' },
			{ text: 'Остановленные', id: 'pause' },
			{ text: 'Завершенные', id: 'stop' },
		],
		tabSelect: 'instagram',
		tabs: [
			{ text: 'INSTAGRAM', id: 'instagram' },
			{ text: 'ВКОНТАКТЕ', id: 'vk' },
			{ text: 'АВТО', id: 'auto' },
		]
	}),
	computed: {
		...mapGetters('cp_sidebar', [ 'isClosing' ]),
		ordersFilter() {
			let arr = this.orders[this.tabSelect].filter(el => {
				switch(this.category) {
					case 'active': 
						return el.status === 'STATUS_CREATED' || el.status === 'STATUS_RUNNING'
						break;
					case 'pause': 
						return el.status === 'STATUS_CANCELED' || el.status === 'STATUS_PAUSED'
						break;
					case 'stop': 
						return el.status === 'STATUS_PARTIAL_COMPLETED' || el.status === 'STATUS_COMPLETED'
						break;
					default:
						return true
				}
			})
			return arr
		}
	},
	methods: {
		filterCategory(id) {
			this.category = id
		},
		changeTab(id) {
			this.tabSelect = id
			this.category = 'all'
		},
		wideFunctions() {
			return this.isClosing && window.innerWidth > 1200
		}
	}
}
</script>

<style scoped lang="less">
@import 'cp-orders';

.forms_page {
	margin: 30px 71px auto 42px;
	@media (max-width: 1400px) {
		margin-right: 40px;
	}
  @media (max-width: 1200px) {
    margin: 20px 20px auto;
  }
}

.main_content_wrap {
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
}
</style>
