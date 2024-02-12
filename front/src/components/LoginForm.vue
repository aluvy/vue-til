<template>
  <div>
    <form @submit.prevent="loginSubmit" class="login_area">
      <div class="form-area">

        <div class="form-group">
          <label class="label" for="username">username</label>
          <FormInput
            :option="{ type:'text', id:'username', placeholder: 'example@example.com' }"
            :value="username"
            @FormInputValue="username=$event.value">
          </FormInput>
        </div>

        <div class="form-group">
          <label class="label" for="password">password</label>
          <FormInput
            :option="{ type:'password', id:'password', placeholder: '' }"
            :value="password"
            @FormInputValue="password=$event.value">
          </FormInput>
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
import FormInput from '@/components/common/FormInput.vue'
import { validateEmail, validatePassword } from '@/utils/validation.js'

export default {
  components: {
    FormInput,
  },
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
        // console.log(e);
        this.logMessage = e.response.data;
      } finally {
        console.log('finally')
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