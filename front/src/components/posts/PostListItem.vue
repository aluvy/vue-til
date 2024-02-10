<template>
  <li class="post-item">
    <div class="post-title">{{ post.title }}</div>
    <div class="post-cont">{{ post.contents }}</div>
    <div class="post-time">{{ post.createdAt }}</div>
  </li>
</template>

<script>
export default {
  props: {
    post: Object
  }
}
</script>