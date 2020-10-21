<template>
	<div class="dealTrend">
		<dv-border-box-13><dv-charts class="chart" :option="dealTrend" /></dv-border-box-13>
	</div>
</template>

<script>
export default {
	data() {
		return {
			dealTrend: {
				title: {
					text: '成交数额趋势图'
				},
				xAxis: {
					name: '第二周',
					data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
				},
				yAxis: {
					name: '销售额',
					data: 'value'
				},
				series: [
					{
						data: [1200, 2230, 1900, 2100, 3500, 4200, 3985],
						type: 'line',
						lineArea: {
							show: true,
							gradient: ['rgba(55, 162, 218, 0.6)', 'rgba(55, 162, 218, 0)']
						}
					}
				]
			}
		};
	}
};
</script>

<style lang="scss" scoped>
.dealTrend {
	padding: 10px;
	.chart {
		height: 180px;
	}
}
</style>
