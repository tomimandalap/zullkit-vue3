import { defineStore } from 'pinia'
import axios from 'axios'
export const useCheckoutStore = defineStore({
  id: 'checkout',
  state: () => ({
    data: {},
    alert_show: false,
    alert_title: '',
    alert_message: '',
  }),
  getters: {
    payment_url: (state) => state.data.payment_url,
  },
  actions: {
    checkOut(price) {
      const data = {
        payment_total: price,
        payment_status: 'PENDING',
      }
      const headers = {
        Authorization:
          localStorage.getItem('token_type') +
          ' ' +
          localStorage.getItem('access_token'),
      }

      return axios
        .post(`/api-web/checkout`, data, {
          headers,
        })
        .then((res) => {
          const result = res.data.data
          this.data = result
          return true
        })
        .catch((err) => {
          console.error(err)
          this.alert_show = true
          this.alert_title = err.response?.status
          this.alert_message = 'Oops, Checkout went wrong!'
          return false
        })
    },
  },
})
