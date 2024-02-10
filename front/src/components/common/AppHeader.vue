<template>
  <div>
    <header>
      <h1><router-link to="/">Til</router-link></h1>
      <nav>
        <div class="username">{{ $store.getters.getUsername }}</div>
        <ul>
          <li><router-link to="/login">login</router-link></li>
          <li><router-link to="/signup">sign up</router-link></li>
        </ul>
      </nav>
		</header>
  </div>
</template>

<script>
export default {
}
</script>