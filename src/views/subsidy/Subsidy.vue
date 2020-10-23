<template>
	<div class="subsidy">
		<dv-border-box-13>
			<div class="msg">
				<div class="text-center">今日补贴</div>
				<dv-charts class="chart" :option="subsidyData" />
			</div>
		</dv-border-box-13>
	</div>
</template>

<script>
export default {
	props: {
		subsidyData: {
			type: Object
		}
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
