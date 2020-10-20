<template>
	<div class="subsidy">
		<dv-border-box-13>
			<div class="msg">
				<div class="text-center">补贴</div>
				<dv-charts class="chart" :option="subsidy" />
			</div>
		</dv-border-box-13>
	</div>
</template>

<script>
export default {
	data() {
		return {
			subsidy: {
				xAxis: {
					name: '第一周',
					data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
				},
				yAxis: {
					name: '销售额',
					data: 'value'
				},
				series: [
					{
						data: [2339, 1899, 2118, 1790, 3265, 4465, 3996],
						type: 'bar',
						gradient: {
							color: ['rgba(208, 223, 230, .6)', 'rgba(92, 179, 204, .1)'],
							local: false
						},
						barStyle: {
							stroke: '#67e0e3'
						}
					}
				]
			}
		};
	}
};
</script>

<style lang="scss" scoped>
.subsidy {
	padding: 10px;
	.msg {
		padding-top: 20px;
		.chart {
			height: 320px;
		}
	}
}
</style>
