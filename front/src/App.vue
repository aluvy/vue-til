<template>
	<div>
		<AppHeader></AppHeader>
		<transition name="pageChange">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader.vue';

export default {
	components: {
		AppHeader,
	}
};
</script>

<style scoped>
.pageChange-enter-active,
.pageChange-leave-active { animation: pageChange .2s; }
.pageChange-enter-active { animation-delay: .1s; animation-fill-mode: backwards; }
.pageChange-leave-active { position: absolute; animation-direction: reverse; }

@keyframes pageChange {
	0% { opacity: 0; }
	100% { opacity: 1; }
}
</style>
