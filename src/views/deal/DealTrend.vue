<template>
	<div class="dealTrend">
		<dv-border-box-13><dv-charts class="chart" :option="dealTrendData" /></dv-border-box-13>
	</div>
</template>

<script>
export default {
	props: {
		dealTrendData: {
			type: Object
		}
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
