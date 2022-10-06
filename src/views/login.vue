<script setup>
import { ref } from 'vue'
const form = ref({
  email: '',
  password: '',
})
const handleSubmit = () => {
  console.log('THIS', form.value)
}
</script>
<template>
  <div>
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
      </div>
    </nav>

    <div data-aos="fade-up" class="relative overflow-hidden bg-white">
      <div class="mx-auto max-w-7xl">
        <div
          class="flex flex-col items-center w-full min-h-screen sm:pt-6 justify-center"
        >
          <div class="w-full sm:p-5 p-1 mx-auto sm:max-w-md">
            <h2 class="mb-20 sm:text-5xl text-4xl font-bold text-center">
              Welcome Back
            </h2>
            <form @submit.prevent="handleSubmit">
              <div class="mb-4">
                <label class="block mb-1" for="email">Email Address</label>
                <input
                  v-model="form.email"
                  placeholder="Type your email"
                  id="email"
                  type="text"
                  name="email"
                  class="block w-full py-3 mt-2 border border-gray-300 rounded-full shadow-sm px-7 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50 disabled:bg-gray-100"
                />
              </div>
              <div class="mb-4">
                <label class="block mb-1" for="password">Password</label>
                <input
                  v-model="form.password"
                  placeholder="Type your password"
                  id="password"
                  type="password"
                  name="password"
                  class="block w-full py-3 mt-2 border border-gray-300 rounded-full shadow-sm px-7 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50 disabled:bg-gray-100"
                />
              </div>
              <div class="mt-6">
                <button
                  type="submit"
                  class="inline-flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-full hover:bg-indigo-700 md:py-2 md:text-lg md:px-10 hover:shadow"
                >
                  Sign In
                </button>
                <RouterLink
                  to="/register"
                  class="inline-flex items-center justify-center w-full px-8 py-3 mt-2 text-base font-medium text-black bg-gray-200 border border-transparent rounded-full hover:bg-gray-300 md:py-2 md:text-lg md:px-10 hover:shadow"
                >
                  Create New Account
                </RouterLink>
              </div>
            </form>
          </div>
          <div class="w-full mx-auto mt-20 sm:max-w-2xl">
            <img
              src="@/assets/img/brand-logo.svg"
              alt=""
              class="w-full px-10 md:px-0"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
