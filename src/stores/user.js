import { defineStore } from 'pinia'
import axios from 'axios'
export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    user: false,
    alert_show: false,
    alert_title: '',
    alert_message: '',
  }),
  getters: {
    isLoggedIn: (state) => state.user !== false,
    getUser: (state) => state.user,
  },
  actions: {
    fetchUser() {
      axios
        .get(`/api/user`)
        .then((res) => {
          const result = res.data.data
          this.user = result
        })
        .catch((err) => {
          // console.error(err)
          const code = Number(err.response?.status)
          this.user = false

          if (code != 401) {
            this.alert_show = true
            this.alert_title = code
            this.alert_message = 'Oops, Fetch User went wrong!'
          }
        })
    },
    register(params) {
      return axios
        .post(`/api/register`, params)
        .then((res) => {
          localStorage.setItem('access_token', res.data.data.access_token)
          // localStorage.setItem('token_type', res.data.data.token_type)
          return true
        })
        .catch((err) => {
          // console.error(err)
          const code = Number(err.response?.status)
          this.alert_show = true
          this.alert_title = code
          this.alert_message = 'Oops, Register went wrong!'
          return false
        })
    },
    login(params) {
      return axios
        .post(`/api/login`, params)
        .then((res) => {
          localStorage.setItem('access_token', res.data.data.access_token)
          // localStorage.setItem('token_type', res.data.data.token_type)
          return true
        })
        .catch((err) => {
          // console.error(err)
          const code = Number(err.response?.status)
          this.alert_show = true
          this.alert_title = code
          this.alert_message = 'Oops, Login went wrong!'
          return false
        })
    },
  },
})
