<template>
  <div>
    <PageTit></PageTit>
    <div class="content">
      <LoginForm></LoginForm>
    </div>
  </div>
</template>

<script>
import PageTit from '@/components/common/PageTit.vue'
import LoginForm from '@/components/LoginForm.vue';

export default {
  components: {
    PageTit,
    LoginForm,
  }
}
</script>