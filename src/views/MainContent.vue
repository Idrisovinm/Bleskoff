<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import MainContent from '@/components/CardList.vue'

import { companyCard } from '@/cards'
import type { Company } from '../types/company'

const companies = ref<Company[]>([...companyCard])
</script>

<template>
  <section class="py-40">
    <div class="flex justify-center gap-4 mb-6">
      <h1
        class="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text relative pb-2 animate-fade-in-up"
        style="--animate-duration: 800ms"
      >
        Топ компаний
        <div
          class="absolute bottom-0 left-1/2 w-32 h-1 bg-gradient-to-r from-accent to-primary rounded-full transform -translate-x-1/2 animate-underline-grow"
        />
        <span class="inline-block align-middle">
          <Icon icon="heroicons:trophy-20-solid" class="w-8 h-8 mr-2 text-warning animate-bounce" />
        </span>
      </h1>
    </div>

    <MainContent :companies="companies" />
  </section>
</template>

<style scoped>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes underline-grow {
  from {
    width: 0;
    opacity: 0;
  }
  to {
    width: 128px;
    opacity: 1;
  }
}

.animate-fade-in-up {
  animation: fade-in-up var(--animate-duration) ease-out;
}

.animate-underline-grow {
  animation: underline-grow calc(var(--animate-duration) + 200ms) ease-out forwards;
}
</style>
