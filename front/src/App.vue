<template>
	<div id="App" class="wrap">
		<AppHeader></AppHeader>
		<div class="container">
			<transition name="pageChange">
				<router-view></router-view>
			</transition>
		</div>
	</div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader.vue';

export default {
	components: {
		AppHeader,
	},
	created() {
		console.log(this.$router);
		const setVh = () => {
			document.documentElement.style.setProperty('--vh', `${window.innerHeight}px`);
		};
		window.addEventListener('resize', setVh);
		setVh();
	}
};
</script>

<style scoped>
.pageChange-enter-active,
.pageChange-leave-active { width: 100%; animation: pageChange .2s; }
.pageChange-enter-active { animation-delay: .1s; animation-fill-mode: backwards; }
.pageChange-leave-active { position: absolute; animation-direction: reverse; }

@keyframes pageChange {
	0% { opacity: 0; }
	100% { opacity: 1; }
}
</style>
