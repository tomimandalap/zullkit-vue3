import { createRouter, createWebHistory } from 'vue-router'
import defaultLayout from '../layouts/default.vue'
import defaultWeb from '../layouts/web.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: defaultLayout,
      children: [
        {
          path: '',
          beforeEnter: (to, from, next) => {
            next('/web')
          },
        },
        {
          path: 'login',
          name: 'Login',
          component: () => import('../views/login.vue'),
          meta: { auth: false },
        },
        {
          path: 'register',
          name: 'Register',
          component: () => import('../views/register.vue'),
          meta: { auth: false },
        },
        {
          path: '404',
          name: '404',
          component: () => import('../views/404.vue'),
          meta: { auth: false },
        },
      ],
    },
    {
      path: '/web',
      component: defaultWeb,
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('../views/index.vue'),
          meta: { auth: false },
        },
        {
          path: 'categories',
          name: 'Categories',
          component: () => import('../views/categories/index.vue'),
          meta: { auth: true },
        },
        {
          path: 'categories/:id',
          name: 'Detail',
          component: () => import('../views/categories/detail.vue'),
          meta: { auth: true },
        },
        {
          path: 'pricing',
          name: 'Pricing',
          component: () => import('../views/pricing.vue'),
          meta: { auth: true },
        },
        {
          path: 'study-case',
          name: 'Study Case',
          component: () => import('../views/study-case.vue'),
          meta: { auth: true },
        },
        {
          path: 'product/:id',
          name: 'Product',
          component: () => import('../views/product/detail.vue'),
          meta: { auth: true },
        },
        {
          path: 'success',
          name: 'Success',
          component: () => import('../views/success.vue'),
          meta: { auth: true },
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

  const { auth } = to.meta
  const isWeb = to.path.includes('web')
  const isToken = localStorage.getItem('access_token')

  if (auth) {
    if (isToken) next()
    else next({ path: '/login' })
  } else if (!auth) {
    if (isToken && !isWeb) next({ path: '/web' })
    else next()
  } else {
    next()
  }
})

router.afterEach((to) => {
  document.title = `${to.name || 'Zullkit'} | Zullkit`
})

export default router
