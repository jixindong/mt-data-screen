<template>
	<dv-full-screen-container class="index">
		<div class="lf d-flex flex-column">
			<!-- 达人 -->
			<star />
			<!-- 商品分类 -->
			<product-classify />
			<!-- 补贴 -->
			<subsidy />
		</div>

		<div class="ct d-flex flex-column">
			<!-- 标题 -->
			<div class="titleBox">
				<dv-border-box-1><div class="title text-hue">魔推精选数据中心</div></dv-border-box-1>
			</div>
			<!-- 时间 -->
			<div class="dateBox">{{ dateString }}</div>
			<!-- 成交数量 -->
			<deal-num />
			<!-- 地图 -->
			<map-nation />
			<!-- 成交趋势 -->
			<deal-trend />
		</div>

		<div class="rt d-flex flex-column">
			<!-- 商品数量 -->
			<product-num />
			<!-- 商品排行 -->
			<product-rank />
			<!-- 带货 -->
			<sell />
		</div>
	</dv-full-screen-container>
</template>

<script>
export default {
	components: {
		// 成交
		DealNum: () => import('@/views/deal/DealNum'), // 成交数量
		DealTrend: () => import('@/views/deal/DealTrend'), // 成交趋势
		// 地图
		MapNation: () => import('@/views/map/MapNation'),
		// 商品
		ProductClassify: () => import('@/views/product/ProductClassify'), // 商品分类
		ProductNum: () => import('@/views/product/ProductNum'), // 商品数量
		ProductRank: () => import('@/views/product/ProductRank'), // 商品排行
		// 带货
		Sell: () => import('@/views/sell/Sell'),
		// 达人
		Star: () => import('@/views/star/Star'),
		// 补贴
		Subsidy: () => import('@/views/subsidy/Subsidy')
	},
	data() {
		return {
			timer: null,
			dateString: '',
			ws: ''
		};
	},
	methods: {
		// 设置当前时间
		handleCurrentDate() {
			this.timer = setInterval(() => {
				let date = new Date();
				let year = date.getFullYear();
				let month = (date.getMonth() + 1).toString().padStart(2, '0');
				let day = date.getDate();
				let hour = date
					.getHours()
					.toString()
					.padStart(2, '0');
				let minute = date
					.getMinutes()
					.toString()
					.padStart(2, '0');
				let second = date
					.getSeconds()
					.toString()
					.padStart(2, '0');
				this.dateString = `${year}-${month}-${day} ${hour}:${minute}:${second}`;
			}, 1000);
		},
		// websocket初始化
		webSocketInit() {
			const wsURL = 'ws://192.168.1.152:8080/ws/asset';
			this.ws = new WebSocket(wsURL);
			this.ws.onopen = this.websocketOnopen(); // websocket建立连接
			this.ws.onmessage = this.websocketOnmessage(); // websocket接收数据
			this.ws.onerror = this.websocketOnError(); // websocket连接失败
		},
		// websocket建立连接
		websocketOnopen() {
			let data = {};
			this.websocketSend(JSON.stringify(data)); // websocket发送数据
		},
		// websocket发送数据
		websocketSend(data) {
			this.ws.send(data);
		},
		// websocket接收数据
		websocketOnmessage(e) {
			const res = JSON.parse(e);
		},
		// websocket连接失败
		websocketOnError() {
			this.websocketOnopen(); // websocket建立连接
		},
		// websocket断开连接
		websocketClose() {
			this.ws.close();
		}
	},
	created() {
		this.handleCurrentDate(); // 设置当前时间
		this.webSocketInit(); // websocket初始化
	},
	destroyed() {
		this.websocketClose(); // websocket断开连接
	}
};
</script>

<style lang="scss" scoped>
.index {
	display: flex;
	color: #fff;
	font-size: 26px;
	font-weight: 300;
	background-color: #000;
	.lf {
		width: 600px;
	}
	.ct {
		width: 720px;
		.titleBox {
			padding: 5px;
			.title {
				padding: 30px 0;
				font-size: 40px;
				font-weight: 500;
				letter-spacing: 10px;
				text-align: center;
			}
		}
		.dateBox {
			margin: 2px 0;
			font-size: 18px;
			text-align: center;
		}
	}
	.rt {
		width: 600px;
	}
}
</style>
