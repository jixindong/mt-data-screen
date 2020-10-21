<template>
	<ve-map :data="mapNationData" />
</template>

<script>
export default {
	props: {
		mapNationData: {
			type: Object
		}
	}
};
</script>
