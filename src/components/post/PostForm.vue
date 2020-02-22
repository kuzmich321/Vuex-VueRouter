<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <form @submit.prevent="save">
                    <div class="form-group">
                        <label for="title">Title:</label>
                        <input class="form-control"
                               id="title"
                               v-model="title"
                               aria-describedby="textHelp"
                               required/>
                        <small id="titleHelp" class="form-text text-danger" v-if="errors.title">
                            {{ errors.title.join() }}
                        </small>
                    </div>
                    <div class="form-group">
                        <label for="description">Body</label>
                        <textarea class="form-control"
                                  id="description"
                                  v-model="description"
                                  rows="3"
                                  required/>
                        <small id="descriptionHelp" class="form-text text-danger" v-if="errors.description">
                            {{ errors.description.join() }}
                        </small>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                <div class="result">
                    <div class="card">
                        <div class="card-body">
                            <p>{{ post }}</p>
                            <p v-for="error in errors" :style="'color: red'">{{ error.join() }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState, mapActions, mapMutations} from 'vuex';

    export default {
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
                errors: state => state.post.errors
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
        },
    };
</script>
