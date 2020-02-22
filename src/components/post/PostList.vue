<template>
  <div class="container">
    <p :key="post.id" v-for="post in posts"> {{ post.title }}</p>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState({
        posts: state => state.post.posts
  })
  }
};
</script>
