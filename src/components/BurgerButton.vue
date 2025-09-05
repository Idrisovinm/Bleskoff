<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps<{
  open: boolean
}>()

const emit = defineEmits<{
  (e: 'toggle'): void
}>()
</script>

<template>
  <button
    class="md:hidden p-2 transition duration-200"
    :class="open ? 'text-blue-400' : 'text-midnight-blue hover:text-blue-400'"
    @click="emit('toggle')"
  >
    <span class="relative block w-6 h-6">
      <!-- Верхняя линия -->
      <span
        class="absolute left-0 top-1 w-6 h-0.5 bg-current rounded transition-all duration-300 ease-in-out origin-center"
        :class="open ? 'rotate-45 translate-y-2' : ''"
      ></span>
      <!-- Средняя линия -->
      <span
        class="absolute left-0 top-3 w-6 h-0.5 bg-current rounded transition-all duration-300 ease-in-out origin-center"
        :class="open ? 'opacity-0' : ''"
      ></span>
      <!-- Нижняя линия -->
      <span
        class="absolute left-0 top-5 w-6 h-0.5 bg-current rounded transition-all duration-300 ease-in-out origin-center"
        :class="open ? '-rotate-45 -translate-y-2' : ''"
      ></span>
    </span>
  </button>
</template>
