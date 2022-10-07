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
  getters: {},
  actions: {
    fetchUser() {
      axios
        .get(`${import.meta.env.VITE_API_ENDPOINT}/user`)
        .then((res) => {
          console.log('RES', res)
          // const result = res.data.data.data
          // this.data_product = result
        })
        .catch((err) => {
          console.error(err)
          const code = Number(err.response?.status)

          if (code != 401) {
            this.alert_show = true
            this.alert_title = code
            this.alert_message = 'Oops, Fetch User went wrong!'
          }
        })
    },
    register(params) {
      return axios
        .post(`${import.meta.env.VITE_API_ENDPOINT}/register`, params)
        .then((res) => {
          console.log('RES', res)
          return true
        })
        .catch((err) => {
          console.error(err)
          const code = Number(err.response?.status)
          this.alert_show = true
          this.alert_title = code
          this.alert_message = 'Oops, Register went wrong!'
          return false
        })
    },
  },
})
