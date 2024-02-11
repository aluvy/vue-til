<template>
  <div>
    <form @submit.prevent="submitForm" class="submit_area">
      <div class="form-area">
        <div class="form-group">
          <div class="form-item">
            <label for="username">id</label>
            <input id="username" type="text" class="input" v-model="username">
          </div>
        </div>
        <div class="form-group">
          <div class="form-item">
            <label for="password">password</label>
            <input id="password" type="text" class="input" v-model="password">
          </div>
        </div>
        <div class="form-group">
          <div class="form-item">
            <label for="nickname">nickname</label>
            <input id="nickname" type="text" class="input" v-model="nickname">
          </div>
        </div>
      </div>
      <div class="btn-area">
        <button type="submit" class="btn" :disabled="!isUsernameValid || !isPasswordValid || !isNicknameValid">Sign up</button>
      </div>
    </form>
    <p>{{ logMessage }}</p>
  </div>
</template>

<script>
import { registerUser } from '@/api/user.js';
import { validateEmail, validatePassword, validateNickname } from '@/utils/validation.js';

export default {
  data() {
    return {
      username: '',
      password: '',
      nickname: '',
      logMessage: '',
    }
  },
  computed: {
    isUsernameValid() {
      return validateEmail(this.username);
    },
    isPasswordValid() {
      return validatePassword(this.password);
    },
    isNicknameValid() {
      return validateNickname(this.nickname);
    },
  },
  methods: {
    async submitForm() {
      const userData = {
        username: this.username,
        password: this.password,
        nickname: this.nickname,
      };
      const res = await registerUser(userData);

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