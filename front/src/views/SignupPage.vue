<template>
  <div>
    <div class="pageTit"><h2>Sign Up</h2></div>
    <div class="cont_wrap">
      <SignupForm></SignupForm>
    </div>
  </div>
</template>

<script>
import SignupForm from '@/components/SignupForm.vue';

export default {
  components: {
    SignupForm,
  }
}
</script>