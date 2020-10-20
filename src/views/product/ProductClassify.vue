<template>
	<div class="productClassify">
		<dv-border-box-13>
			<div class="msg">
				<div class="title">商品分类统计</div>
				<dv-capsule-chart class="chart" :config="productClassify" />
			</div>
		</dv-border-box-13>
	</div>
</template>

<script>
export default {
	data() {
		return {
			productClassify: {
				data: [
					{
						name: '美食',
						value: 167
					},
					{
						name: '化妆品',
						value: 123
					},
					{
						name: '女装',
						value: 98
					},
					{
						name: '男装',
						value: 75
					},
					{
						name: '家居用品',
						value: 66
					}
				],
				colors: ['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
				unit: '个',
				showValue: true
			}
		};
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
