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
      <button type="submit">Sign up</button>
    </form>
    <p>{{ logMessage }}</p>
  </div>
</template>

<script>
import { registerUser } from '@/api/index.js';

export default {
  data() {
    return {
      username: '',
      password: '',
      nickname: '',
      logMessage: '',
    }
  },
  methods: {
    async submitForm() {
      console.log('submit');
      const userData = {
        username: this.username,
        password: this.password,
        nickname: this.nickname,
      };
      const res = await registerUser(userData);
      console.log(res.data.username);

      this.logMessage = `${res.data.username}님 가입되었습니다.`;
      this.initForm();
    },
    initForm() {
      this.username = '';
      this.password = '';
      this.nickname = '';
    }
  }
}
</script>

<style scoped>
form input[type="text"] { width: 100%; background: #eee; }
form button { width: 100%; background: tomato; color: #fff; }
</style>