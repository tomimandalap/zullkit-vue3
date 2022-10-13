import axios from 'axios'
// import { useUserStore } from '@/stores/user'
import router from '@/router'

const Axios = () => {
  // request
  axios.interceptors.request.use(
    (res) => {
      // const state = useUserStore().$state
      const access_token = localStorage.getItem('access_token')
      const urlUser = (res.url || '').includes('/user')
      const urlCheckout = (res.url || '').includes('/checkout')

      if (urlUser || urlCheckout) {
        // set access token to global access when url api/user & api/checkout
        if (access_token) res.headers.Authorization = `Bearer ${access_token}`
      }

      return res
    },
    (err) => {
      return Promise.reject(err)
    },
  )

  // response
  axios.interceptors.response.use(
    (res) => {
      return res
    },
    (err) => {
      const { status } = err.response
      if (Number(status) == 404) router.push('/404')

      return Promise.reject(err)
    },
  )
}

export default Axios
