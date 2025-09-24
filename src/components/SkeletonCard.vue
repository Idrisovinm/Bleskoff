<script setup lang="ts">
</script>

<template>
  <div class="card bg-gray-50 shadow-xl transition-all duration-300 hover:shadow-2xl h-full">
    <figure class="skeleton h-48 rounded-t-xl !bg-gray-100"></figure>
    <div class="card-body p-6 space-y-4">
      <div class="skeleton h-6 w-3/4 !bg-gray-100"></div>
      <div class="skeleton h-4 !bg-gray-50"></div>
      <div class="skeleton h-4 w-5/6 !bg-gray-50"></div>

      <div class="space-y-2 mt-4">
        <div class="skeleton h-4 !bg-gray-50"></div>
        <div class="skeleton h-4 w-11/12 !bg-gray-50"></div>
        <div class="skeleton h-4 w-10/12 !bg-gray-50"></div>
      </div>

      <div class="flex items-center justify-between mt-4">
        <div class="skeleton h-9 w-24 !bg-blue-50"></div>
        <div class="skeleton h-9 w-9 !bg-blue-50"></div>
      </div>
    </div>

    <div
      class="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-25 -translate-x-full animate-shimmer"
    ></div>
  </div>
</template>
