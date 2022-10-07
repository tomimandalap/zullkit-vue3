<script setup>
import { onMounted, computed, watch } from 'vue'
import { useProductsStore } from '@/stores/products'
import { createToaster } from '@meforma/vue-toaster'

// components
import CardTop from '@/components/cardtopcategory.vue'

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
const alert_show = computed(() => productsStore.alert_show)
const alert_title = computed(() => productsStore.alert_title)
const alert_message = computed(() => productsStore.alert_message)

// watch
watch(alert_show, (val) => {
  if (val) {
    toaster.error(`[${alert_title.value}] <br/> ${alert_message.value}`)
  }
  productsStore.$reset()
})

// methods
const load = async () => {
  await productsStore.getCategory(params)
}

// mounted
onMounted(() => {
  load()
})
</script>

<template>
  <div data-aos="fade-up" class="container px-4 mx-auto my-16 md:px-12">
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
</template>
