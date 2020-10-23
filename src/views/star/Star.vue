<template>
	<div class="star">
		<dv-border-box-13>
			<div class="msg">
				<div class="mb-3">
					签约达人数量：
					<span class="text-DS-Digital">{{ starData.starNum }}</span>
				</div>
				<div>
					签约达人粉丝总数：
					<span class="text-DS-Digital">{{ starData.starFansNum }}</span>
					<span class="unit">万</span>
				</div>
			</div>
		</dv-border-box-13>
	</div>
</template>

<script>
export default {
	props: {
		starData: {
			type: Object
		}
	}
};
</script>

<style lang="scss" scoped>
.star {
	padding: 10px;
	.msg {
		display: flex;
		flex-flow: column nowrap;
		padding: 30px;
		height: 15vh;
		span {
			color: #1fdaff;
			font-size: 32px;
		}
		.unit {
			margin-left: 4px;
			font-size: 24px;
		}
	}
}
</style>
