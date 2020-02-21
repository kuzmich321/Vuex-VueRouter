import axiosHttp from 'axios'

const axios = axiosHttp.create({
    baseURL: process.env.VUE_APP_API_URL,
});

export default axios
