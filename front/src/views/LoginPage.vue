<template>
  <div>
    <div class="pageTit"><h2>Login</h2></div>
    <div class="cont_wrap">
      <LoginForm></LoginForm>
    </div>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';
export default {
  components: {
    LoginForm,
  }
}
</script>