<template>
  <div class="pageTit">
    <h2>{{ this.$store.getters.getPagetit }}</h2>
  </div>
</template>

<script>
export default {
  methods: {
    setPagetit() {
			this.$store.commit('setPagetit', { pageTit: this.$route.meta.title });
		}
  },
  updated() {
    console.log('updated');
    this.setPagetit();
  },
  created() {
    this.setPagetit();
  }
}
</script>