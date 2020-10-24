<template>
	<dv-full-screen-container class="index">
		<div class="lf d-flex flex-column">
			<!-- 达人 -->
			<star :starData="starData" />
			<!-- 商品分类 -->
			<product-classify :productClassifyData="productClassifyData" />
			<!-- 补贴 -->
			<subsidy :subsidyData="subsidyData" />
		</div>

		<div class="ct d-flex flex-column">
			<!-- 标题 -->
			<div class="titleBox"><div class="title">魔推精选数据中心</div></div>
			<!-- 时间 -->
			<div class="dateBox">{{ dateString }}</div>
			<!-- 成交数量 -->
			<deal-num :dealNumData="dealNumData" />
			<!-- 地图 -->
			<map-nation :mapNationData="mapNationData" />
			<!-- 成交趋势 -->
			<deal-trend :dealTrendData="dealTrendData" />
		</div>

		<div class="rt d-flex flex-column">
			<!-- 商品数量 -->
			<product-num :productNumData="productNumData" />
			<!-- 商品排行 -->
			<product-rank :productRankData="productRankData" />
			<!-- 带货 -->
			<sell :sellData="sellData" />
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
			// 时间定时器
			timer: null,
			// 时间
			dateString: '',
			// websocket
			wsURL: 'ws://47.105.121.90:8002/ws/asset',
			ws: null,
			// 达人数据
			starData: {},
			// 商品分类数据
			productClassifyData: {},
			// 补贴数据
			subsidyData: {},
			// 成交数量数据
			dealNumData: {},
			// 地图数据
			mapNationData: {},
			// 成交趋势数据
			dealTrendData: {},
			// 商品数量数据
			productNumData: {},
			// 商品排行数据
			productRankData: [],
			// 带货数据
			sellData: {}
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
			this.ws = new WebSocket(this.wsURL);
			this.ws.onmessage = this.websocketOnmessage; // websocket接收数据
			this.ws.onerror = this.websocketOnError; // websocket连接失败
		},
		// websocket接收数据
		websocketOnmessage(res) {
			const data = JSON.parse(res.data);
			this.handleData(data); // 设置数据
		},
		// websocket连接失败
		websocketOnError() {
			this.websocketOnopen(); // websocket建立连接
		},
		// websocket断开连接
		websocketClose() {
			this.ws.close();
		},
		// 设置数据
		handleData(data) {
			const {
				starNum,
				starFansNum,
				leftTwo,
				leftThree,
				dealOrderNum,
				dealSellNum,
				todayDealSellNum,
				indexTwo,
				indexThree,
				merchantNum,
				productNum,
				videoNum,
				rightTwo,
				rightThree,
				hzb
			} = data;

			// 达人数据
			this.starData = {
				starNum,
				starFansNum
			};
			// 商品分类数据
			this.productClassifyData = {
				data: leftTwo,
				colors: ['#0094ff', '#1fdaff', '#3399cc', '#32c5e9', '#96bfff'],
				unit: '个',
				showValue: true
			};
			// 补贴数据
			let subsidyDataRows = [];
			for (let i = 0; i < 7; i++) {
				subsidyDataRows[i] = {
					日期: hzb[i],
					数额: leftThree[i]
				};
			}
			this.subsidyData = {
				columns: ['日期', '数额'],
				rows: subsidyDataRows
			};
			// 成交数量数据
			this.dealNumData = {
				yDealOrderNum: dealOrderNum,
				yDealSellNum: dealSellNum,
				tDealSellNum: {
					number: [todayDealSellNum],
					content: '{nt}元'
				}
			};
			// 地图数据
			this.mapNationData = {
				columns: ['位置', '商家'],
				rows: indexTwo
			};
			// 成交趋势数据
			let dealTrendDataRows = [];
			for (let i = 0; i < 7; i++) {
				dealTrendDataRows[i] = {
					日期: hzb[i],
					数额: indexThree[i]
				};
			}
			this.dealTrendData = {
				columns: ['日期', '数额'],
				rows: dealTrendDataRows
			};
			// 商品数量数据
			this.productNumData = {
				merchantNum,
				productNum,
				videoNum
			};
			// 商品排行数据
			this.productRankData = rightTwo;
			// 带货数据
			let sellList = [];
			rightThree.forEach(e => {
				let array = [];
				array[0] = e.did;
				array[1] = `<div class="d-flex align-items-center"><img class="mr-2" src="${e.img}"><span>${e.productName}</span></div>`;
				array[2] = e.time;
				sellList.push(array);
			});
			this.sellData = {
				header: ['达人id', '商品', '时间'],
				data: sellList,
				headerBGC: 'rgba(0,186,255,.67)',
				oddRowBGC: 'rgba(255,255,255,.2)',
				evenRowBGC: 'rgba(255,255,255,.1)',
				waitTime: 1500,
				align: ['center', 'center', 'center', 'center'],
				carousel: 'page'
			};
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
	background-image: url(../assets/images/background-image-1.jpg);
	background-repeat: no-repeat;
	background-size: cover;
	.lf {
		width: 30%;
	}
	.ct {
		width: 40%;
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
		width: 30%;
	}
}
</style>
