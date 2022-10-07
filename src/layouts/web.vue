<script setup>
import { onMounted, onUpdated, ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import mixins from '@/utils/menu'
import { useUserStore } from '@/stores/user'
import { createToaster } from '@meforma/vue-toaster'

// mixins
const { listMenu } = mixins.data()

// declarations
const route = useRoute()
const router = useRouter()
const namePath = ref('')
const userStore = useUserStore()
const toaster = createToaster({
  position: 'top-right',
})

// computed
const user = computed(() => userStore.user)
const isLoggedIn = computed(() => userStore.isLoggedIn)
const alert_show = computed(() => userStore.alert_show)
const alert_title = computed(() => userStore.alert_title)
const alert_message = computed(() => userStore.alert_message)

// watch
watch(alert_show, (val) => {
  if (val) {
    toaster.error(`[${alert_title.value}] <br/> ${alert_message.value}`)
  }
  userStore.$reset()
})

// methods
const load = async () => {
  const { path } = route
  namePath.value = path

  await userStore.fetchUser()
}

const handleLogout = () => {
  localStorage.removeItem('token_type')
  localStorage.removeItem('access_token')
  userStore.$reset()
  router.go(-1)
}

// updated
onUpdated(() => {
  const { path } = route
  namePath.value = path
})

// mounted
onMounted(() => {
  load()
})
</script>

<template>
  <div class="layout-web">
    <nav
      class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800"
    >
      <div
        class="container flex flex-wrap items-center justify-between mx-auto my-2"
      >
        <RouterLink to="/" class="flex items-center">
          <img
            src="@/assets/img/logo.svg"
            class="h-8 ml-3 sm:ml-0 sm:h-8"
            alt="Flowbite Logo"
          />
        </RouterLink>

        <div class="flex items-center md:order-2">
          <template v-if="!isLoggedIn">
            <RouterLink
              v-if="!user"
              to="/login"
              class="px-8 py-2 mr-2 md:text-base text-sm font-medium text-black bg-gray-200 border border-transparent rounded-full hover:bg-gray-300 md:py-2 md:text-sm md:px-8 hover:shadow"
            >
              Sign In
            </RouterLink>

            <RouterLink
              v-if="!user"
              to="/register"
              class="px-8 py-2 md:text-base text-sm font-medium text-white border border-transparent rounded-full bg-navy hover:bg-navy md:py-2 md:text-sm md:px-8 hover:shadow"
            >
              Sign Up
            </RouterLink>
          </template>

          <template v-else>
            <div class="mr-2 text-sm font-regular">Halo, {{ user.name }}</div>
            <button
              v-if="isLoggedIn"
              type="button"
              class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              @click="handleLogout"
            >
              <span class="sr-only">Open user menu</span>
              <img
                class="w-8 h-8 rounded-full"
                :src="user.profile_photo_url"
                alt="user photo"
              />
            </button>
          </template>

          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-default"
        >
          <ul
            class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-regular"
          >
            <li v-for="(item, i) in listMenu" :key="i">
              <RouterLink
                :to="item.path"
                :class="[
                  'block py-2 pl-3 pr-4 md:p-0',
                  { 'text-purple-700 font-bold': namePath == item.path },
                ]"
              >
                {{ item.name }}
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container mx-auto">
      <RouterView />
    </div>
  </div>
</template>
<style scoped>
div.layout-web {
  min-height: 100vh;
  max-width: 1904px;
  margin: 0 auto;
}
</style>
