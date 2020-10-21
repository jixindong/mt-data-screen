<template>
	<div class="productClassify">
		<dv-border-box-13>
			<div class="msg">
				<div class="title">商品分类统计</div>
				<dv-capsule-chart class="chart" :config="productClassifyData" />
			</div>
		</dv-border-box-13>
	</div>
</template>

<script>
export default {
	props: {
		productClassifyData: {
			type: Object
		}
	}
};
</script>

<style lang="scss" scoped>
.productClassify {
	padding: 10px;
	.msg {
		padding: 10px 0;
		> .title {
			padding: 16px 0 8px;
			text-align: center;
		}
		.chart {
			height: 270px;
		}
	}
}
</style>
