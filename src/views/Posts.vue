<template>
  <div class="home">
    <p>This is a post page</p>
    <post-list></post-list>
  </div>
</template>

<script>
  import PostList from '../components/post/PostList'

export default {
  components: {
    PostList
  },
  mounted() {
    this.$store.dispatch('fetchAll')
  }
};
</script>
