<template>
  <div>
    <form @submit.prevent="editPostSubmit" class="editPost_area">
      <div class="form-area">

        <div class="form-group">
          <label class="label" for="title">title</label>
          <FormInput
            :option="{ type:'text', id:'title', placeholder: '' }"
            :value="title"
            @FormInputValue="title=$event.value">
          </FormInput>
        </div>

        <div class="form-group">
          <label class="label" for="contents">contents</label>
          <FormTextarea
            :option="{ id:'contents', placeholder: '' }"
            :value="contents"
            @FormTextareaValue="contents=$event.value">
          </FormTextarea>
          <div class="form-valid danger" v-if="!isContentsValidTooLong">Text is Too Long. Contents length must be less than 200</div>
        </div>
        
      </div>
      <div class="btn-area">
        <div class="btn-group col">
          <button type="button" class="btn secondery" @click="$router.push('/main')">cancel</button>
          <button type="submit" class="btn" :disabled="!isTitleValid || !isContentsValid || !isContentsValidTooLong">Edit Post!</button>
        </div>
      </div>
    </form>
    <p>{{ logMessage }}</p>
  </div>
</template>

<script>
import FormInput from '@/components/common/FormInput.vue'
import FormTextarea from '@/components/common/FormTextarea.vue'
import { fetchPost, editPost } from '@/api/posts.js';

export default {
  components: {
    FormInput,
    FormTextarea
  },
  data() {
    return {
      title: '',
      contents: '',
      logMessage: '',
    }
  },
  computed: {
    isTitleValid() {
      return this.title.length;
    },
    isContentsValid() {
      return this.contents.length;
    },
    isContentsValidTooLong() {
      return this.contents.length < 200;
    }
  },
  methods: {
    async editPostSubmit() {
      try {
        const _id = this.$route.params.id;
        await editPost(_id, {
          title: this.title,
          contents: this.contents,
        });
        this.$router.push('/main');
      } catch (e) {
        // console.log(e);
        this.logMessage = e.response.data.message;
      }
    },
  },
  async created() {
    try {
      const _id = this.$route.params.id;
      const res = await fetchPost(_id);
      this.title = res.data.title;
      this.contents = res.data.contents;
    } catch (e) {
      console.log(e);
    }
  }
}
</script>

<style scoped>
.btn-area .btn.secondery { flex: 1 1 60%; }
</style>