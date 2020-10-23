<template>
	<div class="productRank">
		<dv-border-box-13>
			<div class="msg">
				<div class="title">商品排行</div>
				<table class="productTb">
					<thead>
						<tr>
							<th>排名</th>
							<th class="w-50">商品</th>
							<th>销量</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(item, index) in productRankData" :key="index">
							<td>{{ index + 1 }}</td>
							<td class="d-flex align-items-center">
								<img :src="item.img" class="mr-2" />
								<span>{{ item.name }}</span>
							</td>
							<td>{{ item.sales }}</td>
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
			min-height: 220px;
			font-size: 16px;
			text-align: center;
			overflow: hidden;
			border-collapse: collapse;
			border-bottom-left-radius: 19px;
			thead {
				background-color: rgba(0, 186, 255, 0.67);
				th {
					padding: 4px 0;
					font-weight: 500;
				}
			}
			tbody tr {
				border-bottom: 1px solid rgba(255, 255, 255, 0.2);
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
