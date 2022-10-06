import { defineStore } from 'pinia'
import axios from 'axios'
export const useProductsStore = defineStore({
  id: 'products',
  state: () => ({
    data_category: [],
    data_product: [],
    alert_show: false,
    alert_title: '',
    alert_message: '',
  }),
  getters: {},
  actions: {
    getCategory(params) {
      axios
        .get(`${import.meta.env.VITE_API_ENDPOINT}/categories`, { params })
        .then((res) => {
          const result = res.data.data.data
          this.data_category = result
        })
        .catch((err) => {
          console.log(err.response)
          this.alert_show = true
          this.alert_title = err.response?.status
          this.alert_message = 'Oops, Categories went wrong!'
        })
    },
    getProducts(params) {
      axios
        .get(`${import.meta.env.VITE_API_ENDPOINT}/products`, { params })
        .then((res) => {
          const result = res.data.data.data
          this.data_product = result
        })
        .catch((err) => {
          console.log(err.response)
          this.alert_show = true
          this.alert_title = err.response?.status
          this.alert_message = 'Oops, Products went wrong!'
        })
    },
  },
})
