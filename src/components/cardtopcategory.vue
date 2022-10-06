<script setup>
import convert from '@/utils/convert'
const { digitAmount } = convert

defineProps({
  image: String,
  title: String,
  point: Number,
})
</script>
<template>
  <div class="overflow-hidden border border-gray-200 rounded-xl">
    <RouterLink to="/web/detail">
      <div class="m-4 overflow-hidden rounded-xl">
        <img
          alt="Placeholder"
          class="block w-full h-auto"
          :src="`src/assets/img/${image}`"
        />
      </div>
    </RouterLink>

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
