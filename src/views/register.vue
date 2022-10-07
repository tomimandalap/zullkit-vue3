<script setup>
import { ref, computed, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { createToaster } from '@meforma/vue-toaster'
import useVuelidate from '@vuelidate/core'
import { required, email, minLength, helpers } from '@vuelidate/validators'

// declarations
const userStore = useUserStore()
const router = useRouter()
const loading = ref(false)
const toaster = createToaster({
  position: 'top-right',
})
const form = ref({
  name: '',
  email: '',
  password: '',
  title: 'Desaigner',
})

// computed
const alert_show = computed(() => userStore.alert_show)
const alert_title = computed(() => userStore.alert_title)
const alert_message = computed(() => userStore.alert_message)

// watch
watch(alert_show, (val) => {
  if (val) {
    toaster.error(`[${alert_title.value}] <br/> ${alert_message.value}`)
  }
})
// validationds vuelidate
const messageRequire = 'Field is required'
const messageEmail = 'Email invalid'
const messageMinLength = ($params) => {
  return `Minium input ${$params.min} digit`
}
const validations = computed(() => {
  return {
    name: {
      required: helpers.withMessage(messageRequire, required),
      minLength: helpers.withMessage(
        ({ $params }) => messageMinLength($params),
        minLength(4),
      ),
    },
    email: {
      required: helpers.withMessage(messageRequire, required),
      email: helpers.withMessage(messageEmail, email),
    },
    password: {
      required: helpers.withMessage(messageRequire, required),
      minLength: helpers.withMessage(
        ({ $params }) => messageMinLength($params),
        minLength(8),
      ),
    },
  }
})

const v$ = useVuelidate(validations, form)
// methods
const handleSubmit = async () => {
  v$.value.$validate()
  if (v$.value.$error) return

  loading.value = true
  const res = await userStore.register(form.value)

  if (res) {
    form.value.name = ''
    form.value.email = ''
    form.value.password = ''

    router.push('/login')
  }

  loading.value = false
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
      <div class="mx-auto">
        <div
          class="flex flex-col items-center w-full min-h-screen pt-6 justify-center"
        >
          <div class="w-full p-5 mx-auto md:max-w-4xl">
            <h2 class="mb-10 sm:text-5xl text-4xl font-bold text-center">
              <span class="block lg:mb-2">Join & Get Our</span>
              <span class="block">Pro Benefits</span>
            </h2>
          </div>
          <div class="w-full sm:p-5 p-1 mx-auto md:max-w-4xl">
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div class="mx-auto md:mx-0 md:block hidden">
                <div class="mb-12">
                  <div class="flex items-center mb-2">
                    <img
                      src="@/assets/img/icon-customizable.svg"
                      alt="icon-customizable"
                    />
                    <h3 class="inline-block ml-2 text-lg font-semibold">
                      Customizable
                    </h3>
                  </div>
                  <p class="mt-2 text-lg text-gray-500">
                    Accelerate your work with our millions
                    <br />
                    of ready-to-use design projects.
                  </p>
                </div>
                <div class="mb-12">
                  <div class="flex items-center mb-2">
                    <img
                      src="@/assets/img/icon-fortune.svg"
                      alt="icon-fortune"
                    />
                    <h3 class="inline-block ml-2 text-lg font-semibold">
                      500 Fortune
                    </h3>
                  </div>
                  <p class="mt-2 text-lg text-gray-500">
                    Accelerate your work with our millions
                    <br />
                    of ready-to-use design projects.
                  </p>
                </div>
                <div class="mb-12">
                  <div class="flex items-center mb-2">
                    <img src="@/assets/img/icon-book.svg" alt="icon-book" />
                    <h3 class="inline-block ml-2 text-lg font-semibold">
                      Documentation
                    </h3>
                  </div>
                  <p class="mt-2 text-lg text-gray-500">
                    Accelerate your work with our millions
                    <br />
                    of ready-to-use design projects.
                  </p>
                </div>
              </div>

              <div>
                <form @submit.prevent="handleSubmit">
                  <div class="mb-4">
                    <label class="block mb-1" for="name">Name</label>
                    <input
                      v-model="form.name"
                      placeholder="Type your full name"
                      id="name"
                      type="text"
                      name="name"
                      class="block w-full py-3 mt-2 border border-gray-300 rounded-full shadow-sm px-7 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50 disabled:bg-gray-100"
                    />
                    <span v-if="v$.name.$error" class="text-red-700 text-xs">
                      {{ v$.name.$errors[0].$message }}
                    </span>
                  </div>
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
                    <span v-if="v$.email.$error" class="text-red-700 text-xs">
                      {{ v$.email.$errors[0].$message }}
                    </span>
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
                    <span
                      v-if="v$.password.$error"
                      class="text-red-700 text-xs"
                    >
                      {{ v$.password.$errors[0].$message }}
                    </span>
                  </div>
                  <div class="mt-6">
                    <button
                      type="submit"
                      class="inline-flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-full hover:bg-indigo-700 md:py-2 md:text-lg md:px-10 hover:shadow"
                    >
                      {{ loading ? 'Loading...' : 'Continue Sign Up' }}
                    </button>
                    <RouterLink
                      to="/login"
                      class="inline-flex items-center justify-center w-full px-8 py-3 mt-2 text-base font-medium text-black bg-gray-200 border border-transparent rounded-full hover:bg-gray-300 md:py-2 md:text-lg md:px-10 hover:shadow"
                    >
                      Sign In
                    </RouterLink>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
