<template>
    <div class="container">
        <post-form></post-form>
    </div>
</template>

<script>
    import PostForm from '../components/post/PostForm'

    export default {
        components: {
            PostForm
        },
        mounted() {
            this.$store.dispatch('fetchOne', this.$route.params.id);
        }
    }
</script>
