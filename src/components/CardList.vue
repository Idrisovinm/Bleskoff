<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import SkeletonCard from './SkeletonCard.vue'
import CompanyCard from './CompanyCard.vue'
import { companyCard } from '@/cards'
import { debounce } from 'lodash-es'
import { Icon } from '@iconify/vue'
import type { Company } from '@/types/company'

const skeletonCount = ref(6)
const isLoading = ref(true)
const searchQuery = ref('')

const selectedSort = ref<'asc' | 'desc' | null>(null)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
    console.log('Loading finished')
  }, 2000)
})

const debouncedSearch = debounce((value: string) => {
  // Удаляем пробелы в начале и конце
  const trimmedValue = value.trim()
  searchQuery.value = trimmedValue
  console.log('Search query:', trimmedValue)
}, 300)

const filteredCompanies = computed(() => {
  const searchLower = searchQuery.value.toLowerCase()
  const sortType = selectedSort.value

  let filtered = companyCard.filter((company: Company) => {
    return (
      company.name.toLowerCase().includes(searchLower) ||
      company.services.some((service) => service.toLowerCase().includes(searchLower))
    )
  })

  if (sortType) {
    filtered = [...filtered].sort((a, b) => {
      const result = sortType === 'asc' ? a.price - b.price : b.price - a.price
      return result
    })
  }

  return filtered
})

const handleSortClick = (sortType: 'asc' | 'desc' | null) => {
  selectedSort.value = sortType
}

const callPhone = () => {
  const phoneNumber = '+7 (903) 429-26-65'
  window.location.href = `tel:${phoneNumber}`
}
</script>

<template>
  <div class="container max-sm:px-2 mx-auto">
    <!-- Hero Section -->
    <div
      class="hero bg-gradient-to-r from-primary to-secondary py-16 text-primary-content rounded-2xl mb-8"
    >
      <div class="hero-content text-center">
        <div class="max-w-4xl">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">Топ компаний</h1>
          <p class="text-xl opacity-90 mb-8">
            Лучшие клининговые услуги от проверенных исполнителей
          </p>
          <span class="inline-block align-middle">
            <Icon
              icon="heroicons:trophy-20-solid"
              class="w-8 h-8 mr-2 text-warning animate-bounce"
            />
          </span>
        </div>
      </div>
    </div>

    <!-- Сортировка и поиск -->
    <div
      class="bg-base-100/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl mb-12 border border-base-300/50"
    >
      <div class="flex flex-col lg:flex-row gap-6 items-center justify-between">
        <!-- Поле поиска -->
        <div class="flex-1 w-full">
          <label
            class="input input-bordered border-none input-lg flex items-center gap-3 w-full bg-base-200/50"
          >
            <Icon icon="heroicons:magnifying-glass-20-solid" class="w-5 h-5 text-base-content/70" />
            <input
              :value="searchQuery"
              @input="debouncedSearch(($event.target as HTMLInputElement).value)"
              type="text"
              placeholder="Поиск по компаниям и услугам..."
              class="w-full placeholder-base-content/50 bg-transparent"
            />
          </label>
        </div>

        <!-- Сортировка -->
        <div class="flex flex-col sm:flex-row gap-4 items-center">
          <span class="text-base-content/70 font-medium">Сортировка:</span>
          <div class="join join-horizontal">
            <button
              @click="handleSortClick('asc')"
              :class="['btn join-item', selectedSort === 'asc' ? 'btn-primary' : 'btn-outline']"
            >
              <Icon icon="heroicons:arrow-up-20-solid" class="w-4 h-4 mr-2" />
              Дешевые
            </button>
            <button
              @click="handleSortClick('desc')"
              class="mr-4"
              :class="['btn join-item', selectedSort === 'desc' ? 'btn-primary' : 'btn-outline']"
            >
              <Icon icon="heroicons:arrow-down-20-solid" class="w-4 h-4 mr-2" />
              Дорогие
            </button>
            <button
              @click="handleSortClick(null)"
              :class="['btn ', selectedSort === null ? 'btn-secondary' : 'btn-outline']"
            >
              <Icon icon="heroicons:x-mark-20-solid" class="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <!-- Активные фильтры -->
      <div v-if="selectedSort || searchQuery" class="mt-6 pt-6 border-t border-base-300/50">
        <div class="flex flex-wrap gap-3 items-center">
          <span class="text-base-content/70 font-medium">Активные фильтры:</span>

          <div v-if="searchQuery" class="badge badge-primary badge-lg gap-2">
            Поиск: "{{ searchQuery }}"
            <button @click="searchQuery = ''" class="hover:text-error">
              <Icon icon="heroicons:x-mark-20-solid" class="w-3 h-3" />
            </button>
          </div>

          <div v-if="selectedSort === 'asc'" class="badge badge-secondary badge-lg gap-2">
            Сортировка: Дешевые
            <button @click="handleSortClick(null)" class="hover:text-error">
              <Icon icon="heroicons:x-mark-20-solid" class="w-3 h-3" />
            </button>
          </div>

          <div v-if="selectedSort === 'desc'" class="badge badge-secondary badge-lg gap-2">
            Сортировка: Дорогие
            <button @click="handleSortClick(null)" class="hover:text-error">
              <Icon icon="heroicons:x-mark-20-solid" class="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Результаты -->
    <div class="mb-8">
      <div class="flex items-center justify-between">
        <h2 class="text-2xl font-bold text-primary">
          Найдено компаний: <span class="text-secondary">{{ filteredCompanies.length }}</span>
        </h2>
      </div>
    </div>

    <!-- Карточки компаний -->
    <div class="grid grid-cols-1 gap-8">
      <template v-if="isLoading">
        <SkeletonCard
          v-for="n in skeletonCount"
          :key="`skeleton-${n}`"
          class="transition-opacity duration-300"
        />
      </template>

      <template v-else>
        <CompanyCard
          v-for="company in filteredCompanies"
          :key="company.id"
          :company="company"
          class="transition-all duration-300 ease-out hover:scale-[1.02]"
        />

        <!-- Сообщение если ничего не найдено -->
        <div
          v-if="filteredCompanies.length === 0"
          class="text-center py-16 bg-base-200 rounded-2xl"
        >
          <Icon
            icon="heroicons:magnifying-glass-20-solid"
            class="w-16 h-16 text-base-content/30 mx-auto mb-4"
          />
          <h3 class="text-xl font-semibold text-base-content/70 mb-2">Ничего не найдено</h3>
          <p class="text-base-content/50">Попробуйте изменить параметры поиска</p>
        </div>
      </template>
    </div>

    <!-- CTA Section -->
    <div class="bg-primary text-primary-content py-16 rounded-2xl mt-12">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-4">Не нашли подходящую компанию?</h2>
        <p class="text-xl mb-8 opacity-90">
          Мы поможем подобрать идеальный вариант именно для ваших нужд
        </p>
        <button @click="callPhone" class="btn btn-secondary btn-lg rounded-full px-8">
          <Icon icon="heroicons:chat-bubble-left-20-solid" class="w-5 h-5 mr-2" />
          Получить консультацию
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.join-horizontal > :not(:first-child):not(:last-child) {
  border-radius: 0;
}
.join-horizontal > :first-child:not(:last-child) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.join-horizontal > :last-child:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
</style>
