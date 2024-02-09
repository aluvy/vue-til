<template>
  <div>
    <form @submit.prevent="submitForm">
      <div>
        <label for="username">id: </label>
        <input id="username" type="text" v-model="username">
      </div>
      <div>
        <label for="password">pw: </label>
        <input id="password" type="text" v-model="password">
      </div>
      <div>
        <label for="nickname">nickname: </label>
        <input id="nickname" type="text" v-model="nickname">
      </div>
      <button type="submit">join!</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      nickname: '',
    }
  },
  methods: {
    submitForm() {
      console.log('submit');
    }
  }
}
</script>

<style scoped>
form input[type="text"] { width: 100%; background: #eee; }
form button { width: 100%; background: tomato; color: #fff; }
</style>