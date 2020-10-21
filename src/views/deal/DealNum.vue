<template>
	<div class="dealNum">
		<dv-border-box-13>
			<div class="msg">
				<div class="title">今日成交额</div>
				<dv-digital-flop :config="todayDealSellNum" />
				<div class="yesterday">
					<div>
						昨日成交额：
						<span>{{ yesterday.dealSellNum }}</span>
					</div>
					<div>
						昨日成交订单数：
						<span>{{ yesterday.dealOrderNum }}</span>
					</div>
				</div>
			</div>
		</dv-border-box-13>
	</div>
</template>

<script>
export default {
	data() {
		return {
			timer: null,
			todayDealSellNum: {
				number: [0],
				content: '{nt}元'
			},
			yesterday: {
				dealOrderNum: 166,
				dealSellNum: 6666
			}
		};
	},
	methods: {
		// 获取今日交易额
		fetchTodayDealSellNum() {
			let num = 0;
			let todayDealSellNum = {
				number: [0],
				content: '{nt}元'
			};

			this.timer = setInterval(() => {
				this.todayDealSellNum = { ...todayDealSellNum };
				num = num + 100;
				todayDealSellNum.number[0] = num;
			}, 2000);
		}
	},
	created() {
		this.fetchTodayDealSellNum(); // 获取今日交易额
	}
};
</script>

<style lang="scss" scoped>
.dealNum {
	padding: 6px;
	.msg {
		padding: 10px;
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
