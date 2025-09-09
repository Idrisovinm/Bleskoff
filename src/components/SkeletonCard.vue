<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<template>
  <div class="card bg-base-100 shadow-xl transition-all duration-300 hover:shadow-2xl h-full">
    <figure class="skeleton h-48 rounded-t-xl"></figure>
    <div class="card-body p-6 space-y-4">
      <div class="skeleton h-6 w-3/4"></div>
      <div class="skeleton h-4"></div>
      <div class="skeleton h-4 w-5/6"></div>

      <div class="space-y-2 mt-4">
        <div class="skeleton h-4"></div>
        <div class="skeleton h-4 w-11/12"></div>
        <div class="skeleton h-4 w-10/12"></div>
      </div>

      <div class="flex items-center justify-between mt-4">
        <div class="skeleton h-9 w-24"></div>
        <div class="skeleton h-9 w-9"></div>
      </div>
    </div>

    <div
      class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-20 -translate-x-full animate-shimmer"
    ></div>
  </div>
</template>
