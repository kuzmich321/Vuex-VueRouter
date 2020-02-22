<template>
    <div class="container">
        <post-form></post-form>
    </div>
</template>

<script>
    import PostForm from '../components/post/PostForm'
    import {mapState, mapActions, mapMutations} from 'vuex'

    export default {
        components: {
            PostForm
        },
        methods: {
            ...mapActions([
                'save',
                'resetErrors'
            ]),
            ...mapMutations([
                'SET_POST'
            ])
        },
        computed: {
            ...mapState({
                post: state => state.post.post,
                errors: state => state.post.posts
            }),
            title: {
                get() {
                    return this.post.title
                },
                set(value) {
                    this.SET_POST({title: value})
                }
            },
            description: {
                get() {
                    return this.post.description
                },
                set(value) {
                    this.SET_POST({description: value})
                }
            }
        }
    }
</script>
