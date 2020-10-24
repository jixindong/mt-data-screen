<template>
	<div class="dealTrend">
		<dv-border-box-13>
			<div class="msg">
				<div class="text-center">成交额趋势</div>
				<ve-line :data="dealTrendData" :extend="dealTrendExtend"></ve-line>
			</div>
		</dv-border-box-13>
	</div>
</template>

<script>
export default {
	props: {
		dealTrendData: {
			type: Object
		}
	},
	data() {
		return {
			dealTrendExtend: {
				grid: {
					top: 20,
					right: 20,
					bottom: 0,
					left: 20,
					height: 120
				},
				color: ['#0094ff'],
				textStyle: {
					color: '#fff'
				},
				legend: {
					show: false
				}
			}
		};
	}
};
</script>

<style lang="scss" scoped>
.dealTrend {
	padding: 10px;
	.msg {
		padding-top: 20px;
		height: 22vh;
	}
}
</style>
