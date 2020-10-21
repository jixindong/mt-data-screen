<template>
	<div class="dealNum">
		<dv-border-box-13>
			<div class="msg">
				<div class="title">今日成交额</div>
				<dv-digital-flop :config="dealNumData.tDealSellNum" />
				<div class="yesterday">
					<div>
						昨日成交额：
						<span class="text-DS-Digital">{{ dealNumData.yDealSellNum }}</span>
					</div>
					<div>
						昨日成交订单数：
						<span class="text-DS-Digital">{{ dealNumData.yDealOrderNum }}</span>
					</div>
				</div>
			</div>
		</dv-border-box-13>
	</div>
</template>

<script>
export default {
	props: {
		dealNumData: {
			type: Object
		}
	}
};
</script>

<style lang="scss" scoped>
.dealNum {
	padding: 6px;
	.msg {
		padding: 10px;
		height: 160px;
		> .title {
			padding-top: 16px;
			text-align: center;
		}
		.dv-digital-flop {
			height: 60px;
		}
		.yesterday {
			display: flex;
			justify-content: space-around;
			font-size: 20px;
			span {
				color: #1fdaff;
				font-size: 26px;
			}
		}
	}
}
</style>
