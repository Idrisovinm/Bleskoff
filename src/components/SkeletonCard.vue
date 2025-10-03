<script setup lang="ts"></script>

<template>
  <div class="group">
    <!-- Horizontal skeleton card matching CompanyCard structure -->
    <div
      class="bg-white border border-gray-200 rounded-xl transition-all duration-300 overflow-hidden relative"
    >
      <div class="flex">
        <!-- Image Section Skeleton -->
        <div class="relative w-48 flex-shrink-0 h-70">
          <div class="skeleton w-full h-full !bg-gray-200"></div>
          <!-- Rating badge skeleton -->
          <div class="absolute top-2 left-2">
            <div class="skeleton w-12 h-6 !bg-gray-100 rounded-md"></div>
          </div>
        </div>

        <!-- Content Section Skeleton -->
        <div class="flex-1 p-4 flex flex-col justify-between">
          <!-- Top section with price and title -->
          <div>
            <!-- Price with budget indication skeleton -->
            <div class="flex items-center gap-2 mb-1">
              <div class="skeleton h-6 w-24 !bg-gray-200"></div>
              <!-- Budget status badge skeleton -->
              <div class="skeleton h-6 w-20 !bg-gray-100 rounded-full"></div>
            </div>

            <!-- Company Name skeleton -->
            <div class="skeleton h-5 w-3/4 !bg-gray-200 mb-2"></div>

            <!-- Description skeleton -->
            <div class="space-y-1 mb-3">
              <div class="skeleton h-4 w-full !bg-gray-100"></div>
              <div class="skeleton h-4 w-5/6 !bg-gray-100"></div>
            </div>

            <!-- Services skeleton -->
            <div class="flex flex-wrap gap-1 mb-3">
              <div class="skeleton h-6 w-16 !bg-gray-100 rounded"></div>
              <div class="skeleton h-6 w-20 !bg-gray-100 rounded"></div>
              <div class="skeleton h-6 w-12 !bg-gray-100 rounded"></div>
            </div>
          </div>

          <!-- Bottom section with button skeleton -->
          <div class="flex items-center justify-end">
            <div class="skeleton h-8 w-20 !bg-blue-100 rounded-lg"></div>
          </div>
        </div>
      </div>

      <!-- Shimmer effect -->
      <div
        class="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-25 -translate-x-full animate-shimmer"
      ></div>
    </div>
  </div>
</template>

<style scoped>
@reference "tailwindcss";

.skeleton {
  @apply animate-pulse;
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.animate-shimmer {
  animation: shimmer 2s infinite;
}
</style>
