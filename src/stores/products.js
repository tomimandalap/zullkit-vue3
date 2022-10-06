import { defineStore } from 'pinia'
import axios from 'axios'
export const useProductsStore = defineStore({
  id: 'products',
  state: () => ({
    data_category: [],
    category_detail: {},
    data_product: [],
    alert_show: false,
    alert_title: '',
    alert_message: '',
  }),
  getters: {
    name_item: (state) => state.category_detail.name,
    product_item: (state) => state.category_detail.products,
  },
  actions: {
    getCategory(params) {
      return axios
        .get(`${import.meta.env.VITE_API_ENDPOINT}/categories`, { params })
        .then((res) => {
          const result = res.data.data?.data

          if (result) this.data_category = result
          else this.category_detail = res.data.data

          return true
        })
        .catch((err) => {
          console.error(err)
          this.alert_show = true
          this.alert_title = err.response?.status
          this.alert_message = 'Oops, Categories went wrong!'
          return false
        })
    },
    getProducts(params) {
      return axios
        .get(`${import.meta.env.VITE_API_ENDPOINT}/products`, { params })
        .then((res) => {
          const result = res.data.data.data
          this.data_product = result
          return true
        })
        .catch((err) => {
          console.error(err)
          this.alert_show = true
          this.alert_title = err.response?.status
          this.alert_message = 'Oops, Products went wrong!'
          return false
        })
    },
  },
})
