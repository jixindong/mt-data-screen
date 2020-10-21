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
			<div class="titleBox">
				<dv-border-box-1><div class="title text-hue">魔推精选数据中心</div></dv-border-box-1>
			</div>
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
			const wsURL = 'ws://192.168.1.152:8080/ws/asset';
			this.ws = new WebSocket(wsURL);
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
				rightThree
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
			this.subsidyData = {
				xAxis: {
					name: '第一周',
					data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
				},
				yAxis: {
					name: '销售额',
					data: 'value'
				},
				series: [
					{
						data: leftThree,
						type: 'bar',
						gradient: {
							color: ['rgba(208, 223, 230, .6)', 'rgba(92, 179, 204, .1)'],
							local: false
						},
						barStyle: {
							stroke: '#67e0e3'
						}
					}
				]
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
			this.dealTrendData = {
				title: {
					text: '成交数额趋势图'
				},
				xAxis: {
					name: '第二周',
					data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
				},
				yAxis: {
					name: '销售额',
					data: 'value'
				},
				series: [
					{
						data: indexThree,
						type: 'line',
						lineArea: {
							show: true,
							gradient: ['rgba(55, 162, 218, 0.6)', 'rgba(55, 162, 218, 0)']
						}
					}
				]
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
				array[1] = e.productName;
				array[2] = `<img src="${e.img}">`;
				array[3] = e.time;
				sellList.push(array);
			});
			this.sellData = {
				header: ['达人id', '商品名称', '商品图片', '时间'],
				data: sellList,
				waitTime: 1500,
				columnWidth: [65, 240, 100],
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
