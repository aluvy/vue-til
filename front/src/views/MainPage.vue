<template>
  <div>
    <PageTit></PageTit>
    <div class="content">
      <template v-if="isLoading">
        <AppLoading></AppLoading>
      </template>
      <template v-else>
        <transition-group tag="ul" name="post">
          <PostItems v-for="post in posts" :key="post._id" :post="post" @refresh="refresh"></PostItems>
        </transition-group>
      </template>

      <router-link to="/add" class="btn-create" title="add">
        <ion-icon name="add-outline"></ion-icon>
      </router-link>
    </div>

  </div>
</template>

<script>
import PageTit from '@/components/common/PageTit.vue'
import PostItems from '@/components/posts/PostListItem.vue'
import AppLoading from '@/components/common/AppLoading.vue';
import { fetchPosts } from '@/api/posts.js'

export default {
  components: {
    PageTit,
    PostItems,
    AppLoading
  },
  data() {
    return {
      posts: [],
      isLoading: false,
    }
  },
  methods: {
    async fetchPosts() {
      try {
        this.isLoading = true;
        const res = await fetchPosts();
        this.isLoading = false;
        this.posts = res.data.posts;
      } catch (e) {
        console.log(e);
      }
    },
    refresh() {
      this.fetchPosts();
    }
  },
  created() {
    this.fetchPosts();
  }
}
</script>