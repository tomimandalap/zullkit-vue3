<script setup>
import { onMounted, computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useProductsStore } from '@/stores/products'

// declarations
const productsStore = useProductsStore()
const thumbnail = ref('')
const route = useRoute()
const id = ref(null)

// computed
const product_detail = computed(() => productsStore.product_detail)
const features = computed(() => productsStore.features?.split(','))
const is_figma = computed(() => productsStore.is_figma === 1)
const is_sketch = computed(() => productsStore.is_sketch === 1)

// methods
const load = async () => {
  const { params } = route
  id.value = Number(params?.id)

  await productsStore.getProducts({ id: id.value })
}

const changeImage = (image) => {
  thumbnail.value = image
}

// mounted
onMounted(() => {
  load()
})
</script>
<template>
  <div class="container p-2 mx-auto my-10 max-w-7xl">
    <div data-aos="fade-up" class="flex flex-row flex-wrap py-4">
      <main role="main" class="w-full px-4 pt-1 sm:w-2/3 md:w-2/3">
        <h1
          class="mb-2 text-3xl font-bold leading-normal tracking-tight text-gray-900 sm:text-4xl md:text-4xl"
        >
          {{ product_detail.name }}
        </h1>
        <p class="text-gray-500">{{ product_detail.subtitle }}</p>
        <section id="gallery">
          <img
            :src="product_detail.thumbnails"
            class="w-full mt-6 rounded-2xl"
          />
          <div class="grid grid-cols-4 gap-4 mt-4">
            <template v-for="(item, i) in product_detail.galleries" :key="i">
              <div
                :class="[
                  'overflow-hidden cursor-pointer rounded-2xl',
                  {
                    'ring-2 ring-indigo-500': thumbnail == item.url,
                  },
                ]"
                @click="changeImage(item.url)"
              >
                <img :src="item.url" class="w-full" />
              </div>
            </template>
          </div>
        </section>
        <section class="" id="orders">
          <h1 class="mt-8 mb-3 text-lg font-semibold">About</h1>
          <div class="text-gray-500">
            <p class="pb-4" v-html="product_detail.description"></p>
          </div>
        </section>
      </main>
      <aside class="w-full px-4 sm:w-1/3 md:w-1/3">
        <div class="sticky top-0 w-full pt-4 md:mt-24">
          <div class="p-6 border rounded-2xl">
            <div v-if="is_figma" class="mb-4">
              <div class="flex mb-2">
                <div>
                  <img src="@/assets/img/icon-figma.png" alt="" class="w-16" />
                </div>
                <div class="block mt-1 ml-4">
                  <h3 class="font-semibold text-md">Figma</h3>
                  <p class="text-gray-400 text-md">Project Included</p>
                </div>
              </div>
            </div>
            <div v-if="is_sketch" class="mb-4">
              <div class="flex mb-2">
                <div>
                  <img src="@/assets/img/icon-sketch.png" alt="" class="w-16" />
                </div>
                <div class="block mt-1 ml-4">
                  <h3 class="font-semibold text-md">Sketch</h3>
                  <p class="text-gray-400 text-md">Project Included</p>
                </div>
              </div>
            </div>
            <div v-if="features && features.length">
              <h1 class="mt-5 mb-3 font-semibold text-md">Great Features</h1>
              <ul class="mb-6 text-gray-500">
                <li class="mb-2" v-for="(feature, i) in features" :key="i">
                  {{ feature }}
                  <img
                    src="@/assets/img/icon-check.png"
                    class="float-right w-5 mt-1"
                    alt=""
                  />
                </li>
              </ul>
            </div>
            <!-- <a
              v-if="user.data.subscription.length > 0"
              :href="item.file"
              class="inline-flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-full hover:bg-indigo-700 md:py-2 md:text-md md:px-10 hover:shadow"
            >
              Download Now
            </a> -->
            <RouterLink
              to="/web/pricing"
              class="inline-flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-full hover:bg-indigo-700 md:py-2 md:text-md md:px-10 hover:shadow"
            >
              Subscribe
            </RouterLink>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>
