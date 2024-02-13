<template>
  <div class="loading-container" v-if="$store.getters.isLoading">
    <div class="loading"></div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.loading-container { position: fixed; left: 0; top: 0; right: 0; bottom: 0; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0, 0.4); }
.loading { width: 5rem; height: 5rem; border-radius: 50%; border: 5px solid #fff; border-bottom: 5px solid var(--color-point); animation: spin 1s linear infinite; }

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
