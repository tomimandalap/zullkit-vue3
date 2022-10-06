<script setup>
import { onMounted, onUpdated, ref } from 'vue'
import { useRoute } from 'vue-router'
import mixins from '@/utils/menu'
const route = useRoute()
const namePath = ref('')
const { listMenu } = mixins.data()
onUpdated(() => {
  const { path } = route
  namePath.value = path
})
onMounted(() => {
  const { path } = route
  namePath.value = path
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
        <div class="md:order-2">
          <RouterLink
            to="/login"
            class="px-8 py-2 mt-2 mr-2 md:text-base text-sm font-medium text-black bg-gray-200 border border-transparent rounded-full hover:bg-gray-300 md:py-2 md:text-sm md:px-8 hover:shadow"
          >
            Sign In
          </RouterLink>

          <RouterLink
            to="/register"
            class="px-8 py-2 md:text-base text-sm font-medium text-white border border-transparent rounded-full bg-navy hover:bg-navy md:py-2 md:text-sm md:px-8 hover:shadow"
          >
            Sign Up
          </RouterLink>
        </div>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="mobile-menu-2"
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
