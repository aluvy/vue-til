<template>
  <div>
    <PageTit></PageTit>
    <div class="content">
      <AddPostForm></AddPostForm>
    </div>
  </div>
</template>

<script>
import PageTit from '@/components/common/PageTit.vue';
import AddPostForm from '@/components/posts/AddPostForm.vue';

export default {
  components: {
    PageTit,
    AddPostForm,
  }
}
</script>