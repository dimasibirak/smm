<template>
  <PopupMain>
    <new-order :services="services" id="order"/>
  </PopupMain>
</template>

<script>
import {mapGetters} from 'vuex'
import NewOrder from '@/components/cp/NewOrder'
import PopupMain from "~/layouts/popupMain"

export default {
  auth: false,
  components: {
    PopupMain,
    NewOrder
  },
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
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="less">
#order{
  width: 100%;
  padding: 20px 20px 5px;
}
#order /deep/ .form_item_wrap {
  margin-top: 0;
  margin-bottom: 20px;
  &:first-child{
    display: none;
    position: absolute;
    left: 100%;
    right: -100%;
  }
  label {
    display: none;
    color: #696F7D;
    font-size: 13px;
    line-height: 1.4;
    padding-bottom: 5px;
  }
  input, select {
    font-family: Helvetica, Arial, sans-serif;
    outline: none;
    border: 1px solid #D2D7DC;
    border-radius: 0px;
    height: 46px;
    width: 100%;
    padding-left: 30px;
    padding-right: 30px;
    font-size: 14px;
    color: #009dff;
    letter-spacing: 1px;
    &:focus{
      border-color: #3fb58b;
    }
    @media (min-width: 992px) {
      font-size: 14px;
    }
  }
  select{
    color: #666;
  }
}
#order /deep/ .info_wrap {
	width: 100%;
  padding-top: 0;
	padding-left: 10px;
	padding-right: 10px;
	.sum_info {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-bottom: 15px;
		border-bottom: 1px solid #E4EBF6;
		margin-bottom: 5px;
	}
	div, .sum_info div {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
}
#order /deep/ .total_info {
	p {
    font-size: 14px;
    font-weight: 800;
		margin-top: 5px;
		line-height: 1;
    color: #009dff;
	}
  .total_pay{
    color: #333;
  }
}
#order /deep/ .discount_info div,
#order /deep/ .balans_info div {
	color: #819EB9;
	padding-right: 5px;
}
#order /deep/ .discount_info svg,
#order /deep/ .balans_info svg {
	width: 20px;
	height: 20px;
	display:inline-flex;
	justify-content: center;
	align-items: center;
}
#order /deep/ .submit_btn_wrap {
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 30px;
	width: 100%;
}
#order /deep/ .main_btn{
	border: 2px solid transparent;
  border-radius: 48px;
	outline: none;
	background-color: #009dff;
  color: #fff;
	height: 48px;
	width: auto;
	cursor: pointer;
  line-height: 0;
  font-size: 13px;
  font-weight: 800;
  padding: 0 25px;
  padding-top: 22px;
  transition-property: background,border-color,color,opacity;
  transition-duration: .3s;
  box-shadow: 0 0 40px rgba(0,156,255,.7);
  &:hover{
    background-color: transparent;
    border-color: #009dff;
    color: #009dff;
  }
}

</style>
