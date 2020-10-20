<template>
	<div class="productNum">
		<dv-border-box-13>
			<div class="msg">
				<div>
					签约商家数：
					<span>{{ merchantNum }}</span>
				</div>
				<div>
					商品数：
					<span>{{ productNum }}</span>
				</div>
				<div>
					视频推广数：
					<span>{{ videoNum }}</span>
				</div>
			</div>
		</dv-border-box-13>
	</div>
</template>

<script>
export default {
	data() {
		return {
			merchantNum: 151,
			productNum: 351,
			videoNum: 246
		};
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
		span {
			color: #1fdaff;
			font-size: 32px;
		}
	}
}
</style>
