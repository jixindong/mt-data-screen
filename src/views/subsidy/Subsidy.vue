<template>
	<div class="subsidy">
		<dv-border-box-13>
			<div class="msg">
				<div class="text-center">商家补贴(万元)</div>
				<ve-histogram :data="subsidyData" :extend="subsidyExtend"></ve-histogram>
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
	},
	data() {
		return {
			subsidyExtend: {
				grid: {
					top: 20,
					right: 20,
					bottom: 20,
					left: 20,
					height: 280
				},
				color: ['#0094ff'],
				textStyle: {
					color: '#fff'
				},
				itemStyle: {
					opacity: 0.7
				},
				barMaxWidth: 30,
				legend: {
					show: false
				}
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
		height: 380px;
	}
}
</style>
