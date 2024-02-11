<template>
  <div>
    <PageTit></PageTit>
    <div class="content">
      <SignupForm></SignupForm>
    </div>
  </div>
</template>

<script>
import PageTit from '@/components/common/PageTit.vue'
import SignupForm from '@/components/SignupForm.vue';

export default {
  components: {
    PageTit,
    SignupForm,
  }
}
</script>