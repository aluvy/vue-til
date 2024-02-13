<template>
  <div>
    <form @submit.prevent="submitForm" class="submit_area">
      <div class="form-area">

        <div class="form-group">
          <label class="label" for="username">id</label>
          <FormInput
            :option="{ type:'text', id:'username', placeholder: 'example@example.com' }"
            :value="username"
            @FormInputValue="username=$event.value">
          </FormInput>
          <div class="form-valid danger" v-if="!isUsernameValid && username !== ''">Please enter an email address</div>
        </div>

        <div class="form-group">
          <label class="label" for="password">password</label>
          <FormInput
            :option="{ type:'password', id:'password', placeholder: '' }"
            :value="password"
            @FormInputValue="password=$event.value">
          </FormInput>
        </div>

        <div class="form-group">
          <label class="label" for="nickname">nickname</label>
          <FormInput
            :option="{ type:'text', id:'nickname', placeholder: '' }"
            :value="nickname"
            @FormInputValue="nickname=$event.value">
          </FormInput>
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
import FormInput from '@/components/common/FormInput.vue'
import { registerUser } from '@/api/user.js';
import { validateEmail, validatePassword, validateNickname } from '@/utils/validation.js';

export default {
  components: {
    FormInput,
  },
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
