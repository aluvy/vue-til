<template>
  <div>
    <PageTit></PageTit>
    <div class="content">
      <transition-group tag="ul" name="post">
        <PostItems v-for="post in posts" :key="post._id" :post="post" @refresh="refresh"></PostItems>
      </transition-group>

      <div class="logMessage" v-if="logMessage.length">
        <p>{{ logMessage }} ⛔</p>
      </div>

      <router-link to="/add" class="btn-create" title="add">
        <ion-icon name="add-outline"></ion-icon>
      </router-link>
    </div>

  </div>
</template>

<script>
import PageTit from '@/components/common/PageTit.vue'
import PostItems from '@/components/posts/PostListItem.vue'
import { fetchPosts } from '@/api/posts.js'

export default {
  components: {
    PageTit,
    PostItems,
  },
  data() {
    return {
      posts: [],
      logMessage: '',
    }
  },
  methods: {
    async fetchPosts() {
      try {
        this.$store.commit('setLoading', { loading: true });
        const res = await fetchPosts();
        this.posts = res.data.posts;
      } catch (e) {
        // console.log(e);
        this.logMessage = e.message;
      } finally {
        this.$store.commit('setLoading', { loading: false });
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
