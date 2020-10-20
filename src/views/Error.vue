<template>
	<div>
		<div class="error d-flex flex-column align-items-center">
			<img src="../assets/images/404-banner.gif" />
			<div class="tip">您访问的页面找不回来了！</div>
			<router-link to="/" class="back hover">回到首页</router-link>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.error {
		margin: 50px 0;
		user-select: none;

		.tip {
			margin: 10px 0 30px;
			color: #0094ff;
			font-size: 24px;
		}

		.back {
			color: #51c4d3;
			font-size: 30px;
			font-weight: 200;
		}
	}
</style>
