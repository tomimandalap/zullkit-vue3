<script setup>
import { onMounted, computed, watch } from 'vue'
import { useProductsStore } from '@/stores/products'
import { createToaster } from '@meforma/vue-toaster'

// components
import CardTop from '@/components/cardtopcategory.vue'
import Carditem from '@/components/carditem.vue'

// declarations
const productsStore = useProductsStore()
const toaster = createToaster({
  position: 'top-right',
})

const params = {
  q: '',
  limit: 4,
}

// computed
const data_category = computed(() => productsStore.data_category)
const data_product = computed(() => productsStore.data_product)
const alert_show = computed(() => productsStore.alert_show)
const alert_title = computed(() => productsStore.alert_title)
const alert_message = computed(() => productsStore.alert_message)

// watch
watch(alert_show, (val) => {
  if (val) {
    toaster.error(`[${alert_title.value}] <br/> ${alert_message.value}`)
  }
})

// methods
const load = async () => {
  await productsStore.getCategory(params)
  await productsStore.getProducts(params)
}

// mounted
onMounted(() => {
  load()
})
</script>

<template>
  <div class="relative overflow-hidden bg-white">
    <div class="mx-auto max-w-7xl">
      <div
        class="z-10 px-5 pb-8 bg-white xl:pl-20 lg:pl-16 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
      >
        <main
          class="mx-auto mt-10 max-w-7xl sm:mt-12 md:mt-16 lg:mt-20 xl:mt-36"
        >
          <div class="sm:text-center lg:text-left">
            <h1
              class="text-3xl font-bold leading-normal tracking-tight text-gray-900 sm:text-4xl md:text-5xl"
            >
              <span class="block lg:mb-2">Design Better &</span>
              <span class="block">Faster Than Before.</span>
            </h1>
            <p
              class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
            >
              Accelerate your work with our millions
              <span class="block lg:mb-1"></span>
              of ready-to-use design projects.
            </p>
            <div
              class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
            >
              <div class="rounded-full">
                <RouterLink
                  to="/"
                  class="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-full hover:bg-indigo-700 md:py-2 md:text-lg md:px-10 hover:shadow"
                >
                  Browse Now
                </RouterLink>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img
        data-aos="zoom-in"
        class="w-full lg:w-3/4 lg:mt-8"
        src="@/assets/img/hero-image.png"
        alt=""
      />
    </div>
  </div>

  <div class="container px-4 mx-auto my-16 md:px-12">
    <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">Top Categories</h2>
    <div v-if="data_category.length" class="flex flex-wrap -mx-1 lg:-mx-4">
      <div
        v-for="(list, i) in data_category"
        :key="i"
        class="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4"
      >
        <CardTop
          :id="list.id"
          :image="list.thumbnails"
          :title="list.name"
          :point="list.products_count"
        />
      </div>
    </div>
    <div
      v-else
      class="flex flex-col items-center justify-center -mx-1 lg:-mx-4"
    >
      <img src="@/assets/img/nodata.svg" alt="nodata.svg" width="200" />
      <h3 class="text-gray-400 my-5">- No result data -</h3>
    </div>
  </div>

  <div class="container px-4 mx-auto my-16 md:px-12">
    <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">New Items</h2>
    <div v-if="data_product.length" class="flex flex-wrap -mx-1 lg:-mx-4">
      <div
        v-for="(item, j) in data_product"
        :key="j"
        class="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
      >
        <Carditem
          :id="item.id"
          :thumbnails="item.thumbnails"
          :title="item.name"
          :subtitle="item.subtitle"
        />
      </div>
    </div>
    <div
      v-else
      class="flex flex-col items-center justify-center -mx-1 lg:-mx-4"
    >
      <img src="@/assets/img/nodata.svg" alt="nodata.svg" width="200" />
      <h3 class="text-gray-400 my-5">- No result data -</h3>
    </div>
  </div>
</template>
