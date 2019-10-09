<template>
<div class = "forms_page">
	<div class = "forms_page_tabs">
		<a class = "active">INSTAGRAM</a>
		<a class = "">ВКОНТАКТЕ</a>
	</div>
	<div class = "wide">
		<section class = "left_section">
			<form method = "post">
				<section class = "forms_wrap">
					<div class = "form_item_wrap">
						<label for = "type_cheat"><p class = "form_heading">Вид накрутки</p></label>
						<select id = "type_cheat" class = "select">
							<option>Подписчики</option>
							<option>Не указано</option>
							<option>Лайки</option>
							<option>Просмотры</option>
							<option>Автолайки/Просмотры</option>
						</select>
					</div>
					<div class = "form_item_wrap">
						<label for = "cost_cheat"><p class = "form_heading">Тип накрутки (Стоимость за 100 шт):</p></label>
						<select id = "cost_cheat" class = "select">
							<option>С гарантией - 30 руб</option>
							<option>Без гарантии - 15 руб</option>
							<option> С молоком - 400 руб</option>
							<option>Без молока - 300 руб</option>
						</select>
					</div>
					<div class = "form_item_wrap">
						<label for = "user_login"><p class = "form_heading">Логин или ссылка на аккаунт</p></label>
						<input id = "user_login" type = "">
					</div>
					<div class = "form_item_wrap">
						<label for = "qty_cheating"><p class = "form_heading">Колличество</p></label>
						<input id = "qty_cheating" type = "">
					</div>
				</section>
				<section class = "info_wrap">
					<div class = "sum_info">
						<div class = "discount_info">
							<div><span>
								<svg width="20" height="28" viewBox="0 0 20 28" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M19.1441 15.9251L16.1054 9.6924V6.81707L18.8326 1.97043L15.1339 0.12102L12.5641 1.40387L9.99805 0.120911L7.43229 1.40376L4.86653 0.120911L1.16564 1.97135L3.90812 6.81815V9.69174L0.862231 15.9125C-0.42035 18.532 -0.264448 21.5733 1.2792 24.048C2.82291 26.5226 5.48578 28 8.40247 28H11.5977C14.5115 28 17.1729 26.5248 18.7172 24.0539C20.2614 21.583 20.421 18.5442 19.1441 15.9251ZM14.4706 9.06372H5.54283V7.42029H14.4706V9.06372ZM4.86653 1.94863L7.43229 3.23148L9.99805 1.94863L12.5635 3.23137L15.1333 1.94852L16.566 2.66487L14.81 5.78553H5.20215L3.43584 2.66395L4.86653 1.94863ZM17.3309 23.1875C16.0874 25.1773 13.9441 26.3652 11.5977 26.3652H8.40247C6.05375 26.3652 3.90932 25.1755 2.66625 23.1827C1.42312 21.19 1.29762 18.7408 2.33041 16.6314L5.23533 10.6984H14.7771L17.6747 16.6416C18.703 18.7507 18.5745 21.1978 17.3309 23.1875Z" fill="#819EB9"/><path d="M11.6417 18.3454C11.2794 18.0709 11.0662 17.9603 10.66 17.7572L10.1093 17.4716C10.014 17.4194 9.89559 17.338 9.74596 17.2351L9.73239 17.2258C9.47448 17.0241 9.4238 16.8491 9.4238 16.6158C9.4238 16.2688 9.68765 15.9866 10.012 15.9866C10.3664 15.9866 10.6147 16.0869 10.9117 16.6159L11.0537 16.8691L12.2308 16.1066L12.1196 15.8879C11.8031 15.2651 11.3519 14.8634 10.7762 14.6909V13.7511H9.41165V14.6835C8.55667 14.9532 7.97714 15.7474 7.97714 16.6875C7.97714 17.3076 8.1755 17.7727 8.60468 18.1542C8.98198 18.4791 9.27967 18.6612 9.87434 18.9315C10.7694 19.3578 11.0715 19.6473 11.0715 20.079C11.0715 20.3532 10.9998 20.5806 10.8581 20.7548C10.6758 20.9676 10.4328 21.0667 10.094 21.0667C9.45252 21.0667 9.0951 20.6885 8.8191 19.7176L8.72145 19.3741L7.47266 20.1299L7.51151 20.3184C7.72697 21.3635 8.44523 22.1383 9.41165 22.3893V23.3125H10.7762V22.3816C11.2099 22.272 11.5848 22.0459 11.8925 21.7084C12.3076 21.2589 12.518 20.7037 12.518 20.0584L12.5178 20.0468C12.4853 19.2874 12.2228 18.7781 11.6417 18.3454Z" fill="#819EB9"/>
								</svg>
							</span> Скидка </div>
							<p class = "discount_amount">0 <span>&#8381;</span></p>
						</div>
						<div class = "balans_info">
							<div><span>
								<svg width="20" height="28" viewBox="0 0 20 28" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M19.1441 15.9251L16.1054 9.6924V6.81707L18.8326 1.97043L15.1339 0.12102L12.5641 1.40387L9.99805 0.120911L7.43229 1.40376L4.86653 0.120911L1.16564 1.97135L3.90812 6.81815V9.69174L0.862231 15.9125C-0.42035 18.532 -0.264448 21.5733 1.2792 24.048C2.82291 26.5226 5.48578 28 8.40247 28H11.5977C14.5115 28 17.1729 26.5248 18.7172 24.0539C20.2614 21.583 20.421 18.5442 19.1441 15.9251ZM14.4706 9.06372H5.54283V7.42029H14.4706V9.06372ZM4.86653 1.94863L7.43229 3.23148L9.99805 1.94863L12.5635 3.23137L15.1333 1.94852L16.566 2.66487L14.81 5.78553H5.20215L3.43584 2.66395L4.86653 1.94863ZM17.3309 23.1875C16.0874 25.1773 13.9441 26.3652 11.5977 26.3652H8.40247C6.05375 26.3652 3.90932 25.1755 2.66625 23.1827C1.42312 21.19 1.29762 18.7408 2.33041 16.6314L5.23533 10.6984H14.7771L17.6747 16.6416C18.703 18.7507 18.5745 21.1978 17.3309 23.1875Z" fill="#819EB9"/><path d="M11.6417 18.3454C11.2794 18.0709 11.0662 17.9603 10.66 17.7572L10.1093 17.4716C10.014 17.4194 9.89559 17.338 9.74596 17.2351L9.73239 17.2258C9.47448 17.0241 9.4238 16.8491 9.4238 16.6158C9.4238 16.2688 9.68765 15.9866 10.012 15.9866C10.3664 15.9866 10.6147 16.0869 10.9117 16.6159L11.0537 16.8691L12.2308 16.1066L12.1196 15.8879C11.8031 15.2651 11.3519 14.8634 10.7762 14.6909V13.7511H9.41165V14.6835C8.55667 14.9532 7.97714 15.7474 7.97714 16.6875C7.97714 17.3076 8.1755 17.7727 8.60468 18.1542C8.98198 18.4791 9.27967 18.6612 9.87434 18.9315C10.7694 19.3578 11.0715 19.6473 11.0715 20.079C11.0715 20.3532 10.9998 20.5806 10.8581 20.7548C10.6758 20.9676 10.4328 21.0667 10.094 21.0667C9.45252 21.0667 9.0951 20.6885 8.8191 19.7176L8.72145 19.3741L7.47266 20.1299L7.51151 20.3184C7.72697 21.3635 8.44523 22.1383 9.41165 22.3893V23.3125H10.7762V22.3816C11.2099 22.272 11.5848 22.0459 11.8925 21.7084C12.3076 21.2589 12.518 20.7037 12.518 20.0584L12.5178 20.0468C12.4853 19.2874 12.2228 18.7781 11.6417 18.3454Z" fill="#819EB9"/>
								</svg>
							</span> Баланс </div>
							<p class = "balans_amount">0 <span>&#8381;</span></p>
						</div>
					</div>
					<div class = "total_info">
						<p class = "total_pay">К оплате:</p><p>300 Р</p>
					</div>
				</section>
				<div class = "submit_btn_wrap">
					<input type = "submit" class = "main_btn" value = "Запуск накрутки">
				</div>
			</form>
		</section>
		<section class = "right_section">
			<div class = "table_wrap">
				<div class = "table_header">
					<h3>Подписчики</h3>
					<p>С ГАРАНТИЕЙ - 30 РУБ</p>
				</div>
				<div class = "table_content">
					<div class = "table_tr">
						<div class = "table_td">Запуск:</div>
						<div class = "table_td">Мгновенно</div>
					</div>
					<div class = "table_tr">
						<div class = "table_td">Скорость накрутки:</div>
						<div class = "table_td">10000-20000 в сутки</div>
					</div>
					<div class = "table_tr">
						<div class = "table_td">Минимальный заказ:</div>
						<div class = "table_td">100</div>
					</div>
					<div class = "table_tr">
						<div class = "table_td">Максимальный заказ:</div>
						<div class = "table_td">40000</div>
					</div>
					<div class = "table_tr">
						<div class = "table_td">Требования к аккаунту:</div>
						<div class = "table_td">Должен быть открытым и иметь аватарку</div>
					</div>
				</div>
				<div class = "table_footer">
					<h4>Детали:</h4>
					<div>
						<p>С аватарками-публикациями.</p>
						<p>Боты и офферы.</p>
						<p>В случае уменьшения заказанного количества подписчики
						автоматически восстанавливаются в течении 1-3 дней.</p>
						<p>Автовосстановление действует в течении 30 дней.</p>
					</div>
				</div>
			</div>
		</section>
	</div>

	<!-- test -->
	<img id = "test_img" src = "/img/formsScreen.png" style = "
		position: fixed;
		z-index: 1000;
		top: 0;
		left: 0;
		right: 0;
		opacity: 0.5;
	">
	<!-- end test -->


</div>

</template>

<script>
export default {
  layout: 'cabinet'
}

!(function() {
    function runOnKeys(func) {
        var codes = [].slice.call(arguments, 1);

        var pressed = {};

        document.onkeydown = function(e) {
            e = e || window.event;

            pressed[e.keyCode] = true;

            for (var i = 0; i < codes.length; i++) {
                if (!pressed[codes[i]]) {
                    return;
                }
            }

            pressed = {};

            func();

        }
        ;

        document.onkeyup = function(e) {
            e = e || window.event;

            delete pressed[e.keyCode];
        }
        ;

    }

    runOnKeys(function() {
        var testImg = document.getElementById('test_img');
        testImg.classList.toggle('active');
    }, "Q".charCodeAt(0), "W".charCodeAt(0));
}
)();
</script>

<style scoped>
.forms_page {
	margin: 35px 40px auto 40px;
}
.wide{
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	margin-top: 30px;
}

.left_section {
	background-color: #fff;
	width: 100%;
	box-shadow: 0 0 25px 1px rgba(0, 0, 0, 0.06);
	padding-bottom: 50px;
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

form {
	margin-top: 45px;
	margin-left: 50px;
	width: 400px;
}

.form_item_wrap:first-child  {

}

.form_item_wrap  {
	margin-top: 24px;
}

.form_item_wrap label {
	display: block;
	color: #696F7D;
	font-size: 13px;
	line-height: 1.4;
	padding-bottom: 5px;
}

.form_item_wrap input, .form_item_wrap select {
	outline: none;
	border: 1px solid #D2D7DC;
	border-radius: 6px;
	height: 50px;
	width: 383px;
	padding-left: 10px;
	font-size: 17px;
}

.info_wrap {
	width: 380px;
	padding-top: 25px;
	padding-left: 15px;
	padding-right: 15px;
}

.info_wrap .sum_info{
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-bottom: 15px;
	border-bottom: 1px solid #E4EBF6;
	margin-bottom: 5px;
}

.info_wrap div, .sum_info div{
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.total_info p{
	color: #2991F2;
	margin-top: 5px;
	line-height: 1.4;
	font-size: 19px;
}

.discount_info div, .balans_info div {
	color: #819EB9;
	padding-right: 5px;
}

.discount_info svg, .balans_info svg {
	width: 20px;
	height: 20px;
	display:inline-flex;
	justify-content: center;
	align-items: center;
}


.submit_btn_wrap {
	display: flex;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 40px;
	width: 384px;
}

form input.main_btn{
	border: none;
	outline: none;
	background-color: #2991F2;
	color: yellow;
	line-height: 0;
	height: 45px;
	width: 200px;
	cursor: pointer;
	font-size: 16px;
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










#test_img {display: block}#test_img.active {display: none}
</style>
