<template>
	<ve-map :data="mapNationData" :settings="mapNationSettings" :extend="mapNationExtend" />
</template>

<script>
export default {
	props: {
		mapNationData: {
			type: Object
		}
	},
	data() {
		return {
			mapNationSettings: {
				roam: true,
				mapGrid: {
					top: 10,
					right: 30,
					bottom: 10,
					left: 30
				},
				itemStyle: {
					normal: {
						borderColor: '#0094ff'
					},
					emphasis: {
						areaColor: '#e69dfe'
					}
				}
			},
			mapNationExtend: {
				legend: {
					show: false
				}
			}
		};
	}
};
</script>
