<template>
  <div class="container">
    <p v-for="post in posts"> {{ post.title }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  computed: {
    posts() {
       return this.$store.state.posts;
    }
  }
};
</script>

<style scoped></style>
