<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import MainContent from '@/components/CardList.vue'

import { companyCard } from '@/cards'
import type { Company } from '../types/company'

const companies = ref<Company[]>([...companyCard])
</script>

<template>
  <section class="py-30 bg-slate-100">
    <MainContent :companies="companies" />
  </section>
</template>

<style scoped></style>
