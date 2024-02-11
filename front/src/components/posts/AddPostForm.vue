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
        <div class="btn-group">
          <button type="submit" class="btn" :disabled="!isTitleValid || !isContentsValid || !isContentsValidTooLong">Add Post!</button>
          <button type="button" class="btn secondery" @click="$router.push('/main')">cancel</button>
        </div>
      </div>
    </form>
    <p>{{ logMessage }}</p>
  </div>
</template>

<script>
import { addPost } from '@/api/posts.js';

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
      return this.contents.length < 200;
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