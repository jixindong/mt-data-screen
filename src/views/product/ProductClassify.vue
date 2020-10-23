<template>
	<div class="productClassify">
		<dv-border-box-13>
			<div class="msg">
				<div class="title">分类统计</div>
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
		padding: 10px;
		> .title {
			padding: 16px 0 8px;
			text-align: center;
		}
		.chart {
			height: 27vh;
		}
	}
}
</style>
