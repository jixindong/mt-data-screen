<template>
	<dv-full-screen-container class="index">
		<div class="lf d-flex flex-column">
			<!-- 达人 -->
			<star/>
			<!-- 商品分类 -->
			<product-classify/>
			<!-- 补贴 -->
			<subsidy/>
		</div>
		
		<div class="ct d-flex flex-column">
			<!-- 成交数量 -->
			<deal-num/>
			<!-- 地图 -->
			<map-nation/>
			<!-- 成交趋势 -->
			<deal-trend/>
		</div>
		
		<div class="rt d-flex flex-column">
			<!-- 商品数量 -->
			<product-num/>
			<!-- 商品排行 -->
			<product-rank/>
			<!-- 带货 -->
			<sell/>
		</div>
	</dv-full-screen-container>
</template>

<script>
export default {
	components:{
		// 成交
		DealNum:() => import('@/views/deal/DealNum'),// 成交数量
		DealTrend:() => import('@/views/deal/DealTrend'),// 成交趋势
		// 地图
		MapNation:() => import('@/views/map/MapNation'),
		// 商品
		ProductClassify:() => import('@/views/product/ProductClassify'),// 商品分类
		ProductNum:() => import('@/views/product/ProductNum'),// 商品数量
		ProductRank:() => import('@/views/product/ProductRank'),// 商品排行
		// 带货
		Sell:() => import('@/views/sell/Sell'),
		// 达人
		Star:() => import('@/views/star/Star'),
		// 补贴
		Subsidy:() => import('@/views/subsidy/Subsidy')
	}
};
</script>

<style lang="scss" scoped>
.index{
	display: flex;
	color: #fff;
	font-size: 26px;
	font-weight: 300;
	background-color: #000;
	.lf{
		width: 600px;
	}
	.ct{
		width: 720px;
	}
	.rt{
		width: 600px;
	}
}
</style>