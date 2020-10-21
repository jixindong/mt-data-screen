<template>
	<div class="productRank">
		<dv-border-box-13>
			<div class="msg">
				<div class="title">商品排行</div>
				<table class="productTb">
					<thead>
						<tr>
							<th>排名</th>
							<th>商品名称</th>
							<th>销量</th>
							<th>商品图片</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(item, index) in productRankData" :key="index">
							<td>{{ index + 1 }}</td>
							<td>{{ item.name }}</td>
							<td>{{ item.sales }}</td>
							<td><img :src="item.img" /></td>
						</tr>
					</tbody>
				</table>
			</div>
		</dv-border-box-13>
	</div>
</template>

<script>
export default {
	props: {
		productRankData: {
			type: Array
		}
	}
};
</script>

<style lang="scss" scoped>
.productRank {
	padding: 10px;
	.msg {
		padding: 10px 7px 7px;
		> .title {
			margin: 20px 0;
			text-align: center;
		}
		.productTb {
			width: 100%;
			font-size: 16px;
			text-align: center;
			overflow: hidden;
			border-collapse: collapse;
			border-bottom-left-radius: 19px;
			thead {
				background-color: rgb(0, 186, 255);
				th {
					padding: 4px 0;
					font-weight: 500;
				}
			}
			tbody tr {
				&:nth-child(odd) {
					background-color: rgb(10, 39, 50);
				}
				&:nth-child(even) {
					background-color: rgb(0, 59, 81);
				}
				td {
					padding: 4px 0;
					img {
						height: 24px;
					}
				}
			}
		}
	}
}
</style>
