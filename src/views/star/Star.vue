<template>
	<div class="star">
		<dv-border-box-13>
			<div class="msg">
				<div class="mb-4">
					签约达人数量：
					<span>{{ starNum }}</span>
				</div>
				<div>
					签约达人粉丝总数：
					<span>{{ starFansNum }}</span>
				</div>
			</div>
		</dv-border-box-13>
	</div>
</template>

<script>
export default {
	data() {
		return {
			starNum: 366,
			starFansNum: 600
		};
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
		span {
			color: #1fdaff;
			font-size: 32px;
		}
	}
}
</style>
