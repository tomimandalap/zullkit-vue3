<script setup>
import convert from '@/utils/convert'
import { useRouter } from 'vue-router'
const { digitAmount } = convert
const router = useRouter()

defineProps({
  id: Number,
  image: String,
  title: String,
  point: Number,
})

const redirect = (id) => {
  const { push } = router
  push(`/web/categories/${id}`)
}
</script>
<template>
  <div
    data-aos="zoom-in"
    class="overflow-hidden border border-gray-200 rounded-xl"
  >
    <div class="m-4 overflow-hidden rounded-xl">
      <img
        alt="Placeholder"
        :class="['block w-full h-auto', { 'cursor-pointer': point > 0 }]"
        :src="`${image}`"
        @click="point > 0 ? redirect(id) : null"
      />
    </div>

    <header class="px-4 mb-4 leading-tight">
      <h1 class="text-lg">
        <a
          class="font-semibold text-black no-underline hover:underline"
          href="#"
        >
          {{ title }}
        </a>
      </h1>
      <span class="block text-sm font-light text-gray-500 no-underline">
        {{ digitAmount(point) }} items
      </span>
    </header>
  </div>
</template>
