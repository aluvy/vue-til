<template>
  <li class="post-item">
    <div class="post-title">{{ post.title }}</div>
    <div class="post-cont">{{ post.contents }}</div>
    <div class="post-time">{{ post.createdAt | formatDate }}</div>
    <div class="post-func">
      <button type="button" @click="editPost(post._id)" title="edit">Edit</button>
      <button type="button" @click="deletePost(post._id)" title="delete">Delete</button>
    </div>
  </li>
</template>

<script>
import { deletePost } from '@/api/posts.js'
import { formatDate } from '@/utils/filters.js'

export default {
  props: {
    post: Object
  },
  filters: {
    formatDate(value) {
      // return new Date(value).toLocaleString();
      return formatDate(value);
    }
  },
  methods: {
    async deletePost(_id) {
      const isDelete = confirm('you want to delete it?');
      if( !isDelete ) return false;
      try {
        await deletePost(_id);
        this.$emit('refresh');
      } catch (e) {
        console.log(e);
      }
    },
    async editPost(_id) {
      this.$router.push(`/post/${_id}`);
    }
  }
}
</script>