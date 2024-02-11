<template>
  <div>
    <form @submit.prevent="addPostSubmit" class="addPost_area">
      <div class="form-area">
        <div class="form-group">
          <div class="form-item">
            <label for="title">title</label>
            <input id="title" type="text" class="input" v-model="title">
          </div>
        </div>
        <div class="form-group">
          <div class="form-item">
            <label for="contents">contents</label>
            <textarea id="contents" class="textarea" v-model="contents"></textarea>
          </div>
          <div class="form-valid danger" v-if="!isContentsValidTooLong">Text is Too Long. Contents length must be less than 200</div>
        </div>
      </div>
      <div class="btn-area">
        <button type="submit" class="btn" :disabled="!isTitleValid || !isContentsValid">Add Post!</button>
      </div>
    </form>
    <p>{{ logMessage }}</p>
  </div>
</template>

<script>
import { addPost } from '@/api/index.js';

export default {
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
      return this.contents.length <= 200;
    }
  },
  methods: {
    async addPostSubmit() {
      try {
        const postData = {
          title: this.title,
          contents: this.contents,
        };
        const res = await addPost(postData);
        console.log(res);

        this.$router.push('/main');
      } catch (e) {
        console.log(e);
        this.logMessage = e.response.data.message;
      }
    },
  }
}
</script>

<style>

</style>