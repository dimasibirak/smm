<template>
	<div class="forms_page">
		<div class="forms_page_tabs">
			<a class="active">INSTAGRAM</a>
			<a class="">ВКОНТАКТЕ</a>
		</div>
		<div class="main_content_wrap">
			<section class="left_section">
				<new-order :services="services"/>
			</section>
			<section class="right_section">
				<div class="table_wrap">
					<div class="table_header">
						<h3>Подписчики</h3>
						<p>С ГАРАНТИЕЙ - 30 РУБ</p>
					</div>
					<div class="table_content">
						<div class="table_tr">
							<div class="table_td">Запуск:</div>
							<div class="table_td">Мгновенно</div>
						</div>
						<div class="table_tr">
							<div class="table_td">Скорость накрутки:</div>
							<div class="table_td">10000-20000 в сутки</div>
						</div>
						<div class="table_tr">
							<div class="table_td">Минимальный заказ:</div>
							<div class="table_td">100</div>
						</div>
						<div class="table_tr">
							<div class="table_td">Максимальный заказ:</div>
							<div class="table_td">40000</div>
						</div>
						<div class="table_tr">
							<div class="table_td">Требования к аккаунту:</div>
							<div class="table_td">Должен быть открытым и иметь аватарку</div>
						</div>
					</div>
					<div class="table_footer">
						<h4>Детали:</h4>
						<div>
							<p>С аватарками-публикациями.</p>
							<p>Боты и офферы.</p>
							<p>
								В случае уменьшения заказанного количества подписчики
								автоматически восстанавливаются в течении 1-3 дней.
							</p>
							<p>Автовосстановление действует в течении 30 дней.</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
import {mapGetters} from 'vuex'
import NewOrder from '@/components/cp/NewOrder'

export default {
	layout: 'cp',
	async asyncData ({ store }) {
		if (!store.state.services.result.all) await store.dispatch('services/apiServices')
		let services = store.getters['services/resultById']('all')
		if (!store.state.services.result.costs) await store.dispatch('services/apiCosts', {
			type: services[0].type,
			n: services[0].min
		})
		return {
			services
		}
	},
	components: {
		NewOrder
	}
}
</script>

<style lang="scss" scoped>
.forms_page {
  margin: 35px 40px auto 40px;
  @media (max-width: 1024px) {
    margin: 18px 71px auto 23px;
  }
}
.main_content_wrap {
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	margin-top: 30px;
}

.left_section {
	background-color: #fff;
	width: 100%;
	box-shadow: 0 0 25px 1px rgba(0, 0, 0, 0.06);
	padding: 50px;
}

.left_section	form {
	width: 100%;
	max-width: 400px;
}

.right_section {
	min-width: 470px;
	width: 470px;
	margin-left: 40px;
	padding-bottom: 30px;
	background-color: #fff;
	box-shadow: 0 0 25px 1px rgba(0, 0, 0, 0.06);
}

.forms_page_tabs {
	border-bottom: 1px solid #DCE6F6;
	display: inline-block;
	width: 220px;
}

.forms_page_tabs a{
	font-size: 14px;
	color: #819EB9;
	padding-bottom: 15px;
	display: inline-block;
	margin: auto 4px auto 16px;
	margin-bottom: -1px;
	position: relative;
	line-height: 1.2;
	transition: all 0.2s ease;
}

.forms_page_tabs a:after{
	content: '';
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	border-radius: 50px 50px 0px 0px;
	width: 100%;
	height: 3px;
	background-color: #2991F2;
	opacity: 0;
	transition: all 0.2s ease;
}

.forms_page_tabs a.active:after {
	opacity: 1;
	color: #000;
}

.forms_page_tabs a.active {
	color: #000;
	
}

.table_wrap {

}

.table_header{
	padding: 35px 35px 30px 35px;
}

.table_header h3{
	outline: 1px solid green;
	font-size: 21px;
	line-height: 1.1;
}

.table_header p {
	color: #819EB9;
	font-size: 13px;
	margin-top: 15px;
	line-height: 1.2;
}


.table_tr {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: 15px 35px 15px 35px;
}

.table_td {
	font-size: 15px;
	line-height: 1.2;
}

.table_td:first-child {
	font-size: 15px;
}

.table_tr:nth-child(odd) {
	background-color: #F5F9FE;
}










#test_img {display: block}
#test_img.active {display: none}
</style>
