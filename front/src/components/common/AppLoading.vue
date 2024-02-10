<template>
  <div class="spinner-container">
    <div class="spinner"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.spinner-container { display: flex; align-items: center; justify-content: center; height: 24rem; }
.spinner { width: 5rem; height: 5rem; border-radius: 50%; border: 5px solid #e0e0e0; border-bottom: 5px solid var(--color-point); animation: spin 1s linear infinite; }

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>