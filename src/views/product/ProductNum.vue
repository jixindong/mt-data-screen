<template>
	<div class="productNum">
		<dv-border-box-13>
			<div class="msg">
				<div>
					签约商家数：
					<span class="text-DS-Digital">{{ productNumData.merchantNum }}</span>
				</div>
				<div>
					商品数：
					<span class="text-DS-Digital">{{ productNumData.productNum }}</span>
				</div>
				<div>
					视频推广数：
					<span class="text-DS-Digital">{{ productNumData.videoNum }}</span>
				</div>
			</div>
		</dv-border-box-13>
	</div>
</template>

<script>
export default {
	props: {
		productNumData: {
			type: Object
		}
	}
};
</script>

<style lang="scss" scoped>
.productNum {
	padding: 10px;
	.msg {
		display: flex;
		flex-flow: column nowrap;
		padding: 30px;
		height: 162px;
		span {
			color: #1fdaff;
			font-size: 32px;
		}
	}
}
</style>
