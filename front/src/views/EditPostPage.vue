<template>
  <div>
    <PageTit></PageTit>
    <div class="content">
      <EditPostForm></EditPostForm>
    </div>
  </div>
</template>

<script>
import PageTit from '@/components/common/PageTit.vue';
import EditPostForm from '@/components/posts/EditPostForm.vue';

export default {
  components: {
    PageTit,
    EditPostForm,
  }
}
</script>