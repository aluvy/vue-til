<template>
  <div>
    <form @submit.prevent="loginSubmit" class="login_area">
      <div class="form-area">
        <div class="form-group">
          <div class="form-item">
            <label for="username">id</label>
            <input id="username" type="text" class="input" v-model="username">
            <ion-icon name="close-circle-sharp"></ion-icon>
          </div>
        </div>
        <div class="form-group">
          <div class="form-item">
            <label for="password">password</label>
            <input id="password" type="text" class="input" v-model="password">  
          </div>
        </div>
      </div>
      <div class="btn-area">
        <button type="submit" class="btn" :disabled="!isUsernameValid || !isPasswordValid">Login</button>
      </div>
    </form>
    <p>{{ logMessage }}</p>
  </div>
</template>

<script>
import { validateEmail, validatePassword } from '@/utils/validation.js'

export default {
  data() {
    return {
      username: '',
      password: '',
      logMessage: '',
    }
  },
  computed: {
    isUsernameValid() {
      return validateEmail(this.username);
    },
    isPasswordValid() {
      return validatePassword(this.password);
    }
  },
  methods: {
    async loginSubmit() {
      try {
        const userData = {
          username: this.username,
          password: this.password
        }
        await this.$store.dispatch('LOGIN', { userData: userData });
        // const res = await loginUser(userData);
        
        // this.$store.commit('setUserinfo', { user: res.data.user });
        // this.$store.commit('setToken', { token: res.data.token });
        // saveAuthToCookie(res.data.token);
        // saveUserToCookie(res.data.user.username);

        // 메인페이지로 이동
        this.$router.push('/main');

      } catch (e) {
        console.log(e);
        this.logMessage = e.response.data;
      } finally {
        this.initForm();
      }

    },
    initForm() {
      this.username = '';
      this.password = '';
    }
  }
}
</script>