<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import MainContent from '@/components/CardList.vue'

import { companyCard } from '@/cards'
import type { Company } from '../types/company'

const companies = ref<Company[]>([...companyCard])
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <div class="hero bg-cover bg-center bg-no-repeat relative overflow-hidden">
      <!-- Overlay -->
      <div class="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent"></div>

      <div class="hero-content pt-32 text-center text-white relative z-10">
        <div class="max-w-4xl">
          <!-- Логотип и заголовок -->
          <div class="flex justify-center items-center mb-8">
            <div
              class="bg-primary text-primary-content p-4 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300"
            >
              <span class="text-4xl font-bold">Блеск<span class="text-white">OFF</span></span>
            </div>
          </div>

          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Клининг маркет
          </h1>
          <p class="text-lg sm:text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
            Самый большой выбор клининговых компаний
          </p>

          <!-- Преимущества -->
          <div class="flex flex-wrap justify-center gap-4 mb-8">
            <div class="badge badge-lg bg-white/20 text-white border-white/30 p-4 backdrop-blur-sm">
              <Icon icon="heroicons:trophy-20-solid" class="w-4 h-4 mr-2 text-yellow-300" />
              Лучшие компании
            </div>
            <div class="badge badge-lg bg-white/20 text-white border-white/30 p-4 backdrop-blur-sm">
              <Icon icon="heroicons:star-20-solid" class="w-4 h-4 mr-2 text-yellow-300" />
              Проверенное качество
            </div>
            <div class="badge badge-lg bg-white/20 text-white border-white/30 p-4 backdrop-blur-sm">
              <Icon icon="heroicons:clock-20-solid" class="w-4 h-4 mr-2 text-green-300" />
              Быстрый подбор
            </div>
          </div>

          <!-- Кнопка призыва к действию -->
          <div class="mt-10">
            <button
              onclick="document.getElementById('companies-section').scrollIntoView({behavior: 'smooth'})"
              class="btn btn-primary btn-lg rounded-full px-8 bg-white text-blue-600 border-white hover:bg-blue-50 hover:border-blue-50 shadow-xl"
            >
              <Icon icon="heroicons:arrow-down-20-solid" class="w-6 h-6 mr-2" />
              Посмотреть компании
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Statistics Section -->

    <!-- Companies Section -->
    <section id="companies-section" class="py-16 bg-gray-50">
      <MainContent :companies="companies" />
    </section>
  </div>
</template>

<style scoped></style>
