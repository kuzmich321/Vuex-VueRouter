import axios from '../../axios'

const state = {
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
}

const mutations = {
    SET_POSTS: (state, payload) => {
        state.posts = payload
    },

    // one post
    SET_POST: (state, payload) => {
        state.post = {...state.post, ...payload}
    },
    SET_ERRORS(state, payload) {
        state.errors = payload
    }
}

const actions = {
    async fetchAll({commit}) {
        await axios.get('/posts')
            .then(({data: {data}}) => {
                commit('SET_POSTS', data)
            })
    },
    async fetchOne({commit}, id) {
        await axios.get(`/posts/${id}`)
            .then(({data: {data}}) => {
                commit('SET_POST', data)
            })
    },
    async save({commit, state}) {

        const formData = new FormData()

        if (state.post.id) {
            formData.append('_method', 'PATCH');
        }

        formData.set('title', state.post.title)
        formData.set('description', state.post.description)
        formData.set('user_id', 1)

        const url = state.post.id ? `/posts/${state.post.id}` : '/posts'

        await axios.post(url, formData)
            .then(response => {
                console.log(response.status)
            })
            .catch(err => {
                commit('SET_ERRORS', err.response.data.errors)
            })
    },
    resetErrors({commit}) {
        commit('SET_ERRORS', {
            title: [],
            description: []
        });
    }
}

export default {
    state,
    mutations,
    actions
}
