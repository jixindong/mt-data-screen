<template>
	<ve-map :data="mapData" />
</template>

<script>
export default {
	data() {
		return {
			mapData: {
				columns: ['位置', '商家'],
				rows: [{ 位置: '吉林', 商家: 123 }, { 位置: '北京', 商家: 1223 }, { 位置: '上海', 商家: 2123 }, { 位置: '浙江', 商家: 4123 }]
			}
		};
	}
};
</script>
