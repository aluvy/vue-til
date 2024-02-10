<template>
  <div>
    <header>
      <h1><router-link to="/">Til</router-link></h1>

      <nav>
        <template v-if="isLogin">
          <div class="username">{{ $store.getters.getUsername }}</div>
          <ul>
            <li><a href="javascript:;" @click="logoutUsesr">logout</a></li>
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
  </div>
</template>

<script>
export default {
  computed: {
    isLogin() {
      return this.$store.getters.isLogin;
    }
  },
  methods: {
    logoutUsesr() {
      this.$store.commit('clearUserinfo');
      this.$router.push('/');
    }
  }
}
</script>