<script setup>
import { onMounted, computed, watch, ref } from 'vue'
import { useProductsStore } from '@/stores/products'
import { createToaster } from '@meforma/vue-toaster'
import { useRoute } from 'vue-router'

// components
import Carditem from '@/components/carditem.vue'

// declaratons
const route = useRoute()
const id = ref(null)
const productsStore = useProductsStore()
const toaster = createToaster({
  position: 'top-right',
})

const params = {
  id: null,
  show_product: 1,
}

// computed
const name_item = computed(() => productsStore.name_item)
const product_item = computed(() => productsStore.product_item)
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
  await productsStore.getCategory({ ...params, id: id.value })
}

// mounted
onMounted(() => {
  const { params: valParams } = route
  id.value = Number(valParams?.id)

  load()
})
</script>

<template>
  <div class="container px-4 mx-auto my-16 md:px-12">
    <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">{{ name_item }}</h2>
    <div
      v-if="product_item && product_item.length"
      class="flex flex-wrap -mx-1 lg:-mx-4"
    >
      <div
        v-for="(item, j) in product_item"
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
