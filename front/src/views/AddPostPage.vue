<template>
  <div>
    <PageTit></PageTit>
    <div class="cont_wrap">
      <AddPostForm></AddPostForm>
    </div>
  </div>
</template>

<script>
import PageTit from '@/components/common/PageTit.vue';
import AddPostForm from '@/components/AddPostForm.vue';

export default {
  components: {
    PageTit,
    AddPostForm,
  }
}
</script>