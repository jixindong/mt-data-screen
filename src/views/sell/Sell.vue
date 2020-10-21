<template>
	<div class="sell">
		<dv-border-box-8>
			<div class="msg">
				<div class="title">实时带货数据</div>
				<dv-scroll-board :config="sellData" ref="scrollBoard" />
			</div>
		</dv-border-box-8>
	</div>
</template>

<script>
export default {
	props: {
		sellData: {
			type: Object
		}
	}
};
</script>

<style lang="scss" scoped>
.sell {
	padding: 10px;
	.msg {
		padding: 10px 4px;
		height: 388px;
		> .title {
			margin: 20px 0;
			text-align: center;
		}
		.dv-scroll-board {
			height: 300px;
			::v-deep img {
				height: 24px;
			}
		}
	}
}
</style>
