<template>
    <div class="container">
        <post-update-form></post-update-form>
    </div>
</template>

<script>
    import PostUpdateForm from "../components/post/PostUpdateForm";

    export default {
        components: {
            PostUpdateForm
        },
        mounted() {
            this.$store.dispatch('fetchOne', this.$route.params.id);
        }
    }
</script>

<style scoped>

</style>
