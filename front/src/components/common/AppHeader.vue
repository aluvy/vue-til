<template>
  <header>
    <h1><router-link :to="logoLink">TIL</router-link></h1>

    <nav>
      <template v-if="isLogin">
        <div class="username"><strong>{{ $store.getters.getUsername }}</strong> is logged</div>
        <ul>
          <li><a href="javascript:;" @click="logout">logout</a></li>
        </ul>
      </template>
      <template v-else>
        <ul>
          <li><router-link to="/login">login</router-link></li>
          <li><router-link to="/signup">sign up</router-link></li>
        </ul>
      </template>
    </nav>

  </header>
</template>

<script>
import { deleteCookie } from '@/utils/cookies.js'

export default {
  computed: {
    isLogin() {
      return this.$store.getters.isLogin;
    },
    logoLink() {
      return this.$store.getters.isLogin ? '/main' : '/login';
    }
  },
  methods: {
    logout() {
      this.$store.commit('clearUserinfo');
      this.$store.commit('clearToken');
      deleteCookie('til_auth');
      deleteCookie('til_user');
      this.$router.push('/');
    }
  }
}
</script>