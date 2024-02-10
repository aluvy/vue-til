<template>
  <div>
    <PageTit></PageTit>
    <div class="cont_wrap">
      <template v-if="isLoading">
        <AppLoading></AppLoading>
      </template>
      <template v-else>
        <transition-group tag="ul" name="post">
          <PostItems v-for="post in posts" :key="post._id" :post="post"></PostItems>
        </transition-group>
      </template>
    </div>
  </div>
</template>

<script>
import PageTit from '@/components/common/PageTit.vue'
import PostItems from '@/components/posts/PostListItem.vue'
import AppLoading from '@/components/common/AppLoading.vue';
import { fetchPosts } from '@/api/index.js'

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
        console.log(res);
        this.posts = res.data.posts;
      } catch (e) {
        console.log(e);
      }
    }
  },
  created() {
    this.fetchPosts();
  }
}
</script>