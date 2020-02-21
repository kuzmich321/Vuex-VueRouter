import Vue from "vue";
import Vuex from "vuex";
import axios from "@/axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        posts: [],
        post: {
            id: null,
            title: '',
            description: '',
            user_id: null
        },
        errors: {
            title: [],
            description: []
        }
    },
    mutations: {
        SET_POSTS: (state, payload) => {
            state.posts = payload;
        },

        // one post
        SET_POST: (state, payload) => {
            state.post = {...state.post, ...payload};
        },
        SET_ERRORS(state, payload) {
            state.errors = payload;
        }
    },
    actions: {
        async fetchAll({commit}) {
            await axios.get('/posts')
                .then(({data: {data}}) => {
                    commit('SET_POSTS', data);
                })
        },
        async fetchOne({commit}, id) {
            await axios.get(`/posts/${id}`)
                .then(({data: {data}}) => {
                    commit('SET_POST', data);
                })
        },
        async save({commit, state}) {

            const formData = new FormData();

            if(state.post.id) {
                formData.append('_method', 'PATCH');
            }

            formData.set('title', state.post.title);
            formData.set('description', state.post.description);
            formData.set('user_id', 1);

            const url = state.post.id ? `/posts/${state.post.id}` : '/posts';

            await axios.post(url, formData)
                .then(response => {
                    console.log(response.status);
                })
                .catch(err => {
                    commit('SET_ERRORS', err.response.data.errors);
                });
        },
        resetErrors({commit}) {
            commit('SET_ERRORS', {
                title: [],
                description: []
            });
        }
    }
});
