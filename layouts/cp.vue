<template>
	<div class="page_wrap">
		<LeftMenu />
		<section class="main_section">
			<Menu />
			<section class="main_content">
				<nuxt />
			</section>
		</section>
	</div>
</template>

<script>
import Menu from "~/components/cp/Menu";
import LeftMenu from "~/components/cp/LeftMenu";
export default {
	components: {Menu, LeftMenu}
}
</script>

<style scoped>
@font-face {
	font-family: 'Segoe UI';
	src: url('/fnt/SegoeUI-Light.eot');
	src: local('Segoe UI Light'), local('SegoeUI-Light'),
		url('/fnt/SegoeUI-Light.eot?#iefix') format('embedded-opentype'),
		url('/fnt/SegoeUI-Light.woff') format('woff'),
		url('/fnt/SegoeUI-Light.ttf') format('truetype');
	font-weight: 300;
	font-style: normal;
}
@font-face {
	font-family: 'Segoe UI';
	src: url('/fnt/SegoeUI-BoldItalic.eot');
	src: local('Segoe UI Bold Italic'), local('SegoeUI-BoldItalic'),
		url('/fnt/SegoeUI-BoldItalic.eot?#iefix') format('embedded-opentype'),
		url('/fnt/SegoeUI-BoldItalic.woff') format('woff'),
		url('/fnt/SegoeUI-BoldItalic.ttf') format('truetype');
	font-weight: bold;
	font-style: italic;
}
@font-face {
	font-family: 'Segoe UI';
	src: url('/fnt/SegoeUI-SemiBold.eot');
	src: local('Segoe UI Semibold'), local('SegoeUI-SemiBold'),
		url('/fnt/SegoeUI-SemiBold.eot?#iefix') format('embedded-opentype'),
		url('/fnt/SegoeUI-SemiBold.woff') format('woff'),
		url('/fnt/SegoeUI-SemiBold.ttf') format('truetype');
	font-weight: 600;
	font-style: normal;
}
@font-face {
	font-family: 'Segoe UI';
	src: url('/fnt/SegoeUI.eot');
	src: local('Segoe UI'), local('SegoeUI'),
		url('/fnt/SegoeUI.eot?#iefix') format('embedded-opentype'),
		url('/fnt/SegoeUI.woff') format('woff'),
		url('/fnt/SegoeUI.ttf') format('truetype');
	font-weight: normal;
	font-style: normal;
}
@font-face {
	font-family: 'Segoe UI';
	src: url('/fnt/SegoeUI-Bold.eot');
	src: local('Segoe UI Bold'), local('SegoeUI-Bold'),
		url('/fnt/SegoeUI-Bold.eot?#iefix') format('embedded-opentype'),
		url('/fnt/SegoeUI-Bold.woff') format('woff'),
		url('/fnt/SegoeUI-Bold.ttf') format('truetype');
	font-weight: bold;
	font-style: normal;
}
@font-face {
	font-family: 'Segoe UI';
	src: url('/fnt/SegoeUI-Italic.eot');
	src: local('Segoe UI Italic'), local('SegoeUI-Italic'),
		url('/fnt/SegoeUI-Italic.eot?#iefix') format('embedded-opentype'),
		url('/fnt/SegoeUI-Italic.woff') format('woff'),
		url('/fnt/SegoeUI-Italic.ttf') format('truetype');
	font-weight: normal;
	font-style: italic;
}
.page_wrap {
	font-family: 'Segoe UI', 'Helvetica', Arial, sans-serif;
	display: flex;
	align-items: stretch;
  height: 100%;
}

@media (max-width: 768px) {
	.page_wrap {
		overflow-x: hidden;
		background-color: #F3F7FE;
	}
	.main_content {
		padding-top: 60px;
	}
}

.page_wrap >>> .main_btn {
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 100px;
	background-color: #fff;
	color: #2991F2;
	line-height: 0;
}
.main_content {
	background-color: #F3F7FE;
}
.main_section {
  width: 100%;
	background-color: #F3F7FE;
}
</style>
