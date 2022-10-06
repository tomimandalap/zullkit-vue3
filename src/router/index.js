import { createRouter, createWebHistory } from 'vue-router'
import defaultLayout from '../layouts/default.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LayoutDefault',
      component: defaultLayout,
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('../views/index.vue'),
        },
        {
          path: '404',
          name: '404',
          component: () => import('../views/404.vue'),
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      beforeEnter: (to, from, next) => {
        next('/404')
      },
    },
  ],
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
  next()
  // const isAuth = !!JSON.parse(localStorage.getItem('auth'))
  // const isAdmin = to.path.includes('admin')
  // const isLogin = to.path.includes('login')

  // if (isAuth) {
  //   if (isLogin) {
  //     alert('Access diterima')
  //     next({ name: 'Admin' })
  //   } else next()
  // } else {
  //   if (isAdmin) {
  //     alert('Access ditolak, silahkan login terlebih dahulu')
  //     next({ name: 'Login' })
  //   } else next()
  // }
})

router.afterEach((to) => {
  document.title = `${to.name || 'Zullkit'} | Zullkit`
})

export default router
