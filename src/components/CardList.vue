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

const dropdownRef = ref<HTMLDetailsElement | null>(null)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
    console.log('Loading finished')
  }, 2000)
})

// Добавим watch для отслеживания изменений
watch(selectedSort, (newValue) => {
  console.log('Selected sort changed:', newValue)
})

const debouncedSearch = debounce(
  (value: string) => {
    searchQuery.value = value
    console.log('Search query:', value)
  },
  300,
  { leading: true, trailing: true, maxWait: 500 },
)

const filteredCompanies = computed(() => {
  const searchLower = searchQuery.value.toLowerCase()
  const sortType = selectedSort.value

  console.log('Computing filtered companies...')
  console.log('Search query:', searchQuery.value)
  console.log('Sort type:', sortType)

  let filtered = companyCard.filter((company: Company) => {
    return (
      company.name.toLowerCase().includes(searchLower) ||
      company.services.some((service) => service.toLowerCase().includes(searchLower))
    )
  })

  if (sortType) {
    console.log(
      'Before sorting:',
      filtered.map((c) => c.price),
    )
    filtered = [...filtered].sort((a, b) => {
      const result = sortType === 'asc' ? a.price - b.price : b.price - a.price
      console.log(`Sorting: ${a.price} vs ${b.price} = ${result}`)
      return result
    })
    console.log(
      'After sorting:',
      filtered.map((c) => c.price),
    )
  }

  return filtered
})

const handleSortClick = (sortType: 'asc' | 'desc' | null) => {
  selectedSort.value = sortType
  // Закрываем dropdown
  if (dropdownRef.value) {
    dropdownRef.value.removeAttribute('open')
  }
}
</script>

<template>
  <div class="container max-sm:px-2 mx-auto">
    <!-- Фильтры и поиск -->
    <div class="bg-base-100 p-6 rounded-box shadow-lg mb-8">
      <div class="flex flex-wrap gap-4 items-center">
        <!-- Поле поиска -->
        <div class="form-control flex-1">
          <input
            :value="searchQuery"
            @input="debouncedSearch(($event.target as HTMLInputElement).value)"
            type="text"
            placeholder="Поиск по компаниям и услугам..."
            class="input input-bordered input-md w-full focus:outline-none"
          />
        </div>

        <!-- Сортировка - УПРОЩЕННАЯ ВЕРСИЯ -->
        <!-- Альтернатива: нативный details/summary -->
        <details ref="dropdownRef" class="dropdown">
          <summary class="btn btn-ghost cursor-pointer">
            <Icon icon="heroicons:arrows-up-down-20-solid" class="w-5 h-5 mr-2" />
            Цены
            <span v-if="selectedSort" class="ml-2">
              <Icon
                v-if="selectedSort === 'asc'"
                icon="heroicons:arrow-up-20-solid"
                class="w-4 h-4 text-primary"
              />
              <Icon v-else icon="heroicons:arrow-down-20-solid" class="w-4 h-4 text-primary" />
            </span>
          </summary>
          <ul class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52 mt-1 z-50">
            <li>
              <a @click="handleSortClick('asc')">
                По возрастанию
                <span v-if="selectedSort === 'asc'" class="text-primary">✓</span>
              </a>
            </li>
            <li>
              <a @click="handleSortClick('desc')">
                По убыванию
                <span v-if="selectedSort === 'desc'" class="text-primary">✓</span>
              </a>
            </li>
            <li>
              <a @click="handleSortClick(null)">
                Сбросить
                <span v-if="selectedSort === null" class="text-primary">✓</span>
              </a>
            </li>
          </ul>
        </details>
      </div>
    </div>

    <!-- Временное отключение анимации -->
    <div class="grid grid-cols-1 gap-10">
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
          class="transition-all duration-300 ease-out"
        />
      </template>
    </div>
  </div>
</template>

<style scoped>
.dropdown-content {
  z-index: 50;
}
</style>
