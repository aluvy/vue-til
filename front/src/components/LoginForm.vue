<template>
  <div>
    <form @submit.prevent="loginSubmit">
      <div>
        <label for="username">id: </label>
        <input id="username" type="text" v-model="username">
      </div>
      <div>
        <label for="password">pw: </label>
        <input id="password" type="text" v-model="password">
      </div>
      <button type="submit">Login</button>
    </form>
    <p>{{ logMessage }}</p>
  </div>
</template>

<script>
import { loginUser } from '@/api/index.js';

export default {
  data() {
    return {
      username: '',
      password: '',
      logMessage: '',
    }
  },
  methods: {
    async loginSubmit() {
      const userData = {
        username: this.username,
        password: this.password
      }
      const res = await loginUser(userData);
      console.log(res);
      this.logMessage = `${res.data.user.username}님 로그인 되었습니다.`;
      this.initForm();
    },
    initForm() {
      this.username = '';
      this.password = '';
    }
  }
}
</script>

<style scoped>
form input[type="text"],
form input[type="password"] { width: 100%; background: #eee; }
form button { width: 100%; background: tomato; color: #fff; }
</style>