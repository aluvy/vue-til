<template>
	<div id="App" class="wrap">
		<AppHeader></AppHeader>
		<div class="container" :class="{ wide: path==='/main' }">
			<transition name="pageChange" mode="out-in" appear>
				<router-view></router-view>
			</transition>
		</div>
		<AppFooter></AppFooter>
		<AppLoading></AppLoading>
	</div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader.vue';
import AppFooter from '@/components/common/AppFooter.vue';
import AppLoading from '@/components/common/AppLoading.vue';

export default {
	components: {
		AppHeader,
		AppFooter,
		AppLoading
	},
	computed: {
		path() {
			return this.$route.path;
		}
	},
	methods: {
		setVh() {
			document.documentElement.style.setProperty('--vh', `${window.innerHeight}px`);
		},
    startLoading() {
      this.loadingStatus = true;
    },
    endLoading() {

    }
	},
	created() {
		window.addEventListener('resize', this.setVh);
		this.setVh();
	},
  beforeDestroy() {
  },
	unmounted() {
		window.removeEventListener('resize', this.setVh);
	},
};
</script>

<style scoped>
.pageChange-enter-active,
.pageChange-leave-active { /*width: 100%;*/ animation: pageChange .2s; }
.pageChange-enter-active { /*animation-delay: .1s;*/ animation-fill-mode: backwards; }
.pageChange-leave-active { /*position: absolute;*/ animation-direction: reverse; }

@keyframes pageChange {
	0% { opacity: 0; }
	100% { opacity: 1; }
}
</style>
