<script setup lang="ts">
import { ref, computed } from 'vue'
import CompanyCard from './CompanyCard.vue'
import { companyCard } from '@/cards'
import { debounce } from 'lodash-es'
import { Icon } from '@iconify/vue'
import type { Company } from '@/types/company'

const searchQuery = ref('')
const selectedSort = ref<'asc' | 'desc' | null>(null)

const debouncedSearch = debounce((value: string) => {
  searchQuery.value = value
}, 300)

const sortingOptions = [
  { value: 'asc', label: 'По возрастанию' },
  { value: 'desc', label: 'По убыванию' },
]

const filteredCompanies = computed(() => {
  let results = companyCard.filter((company: Company) => {
    const debouncedSearch =
      company.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      company.services.some((service: string) =>
        service.toLowerCase().includes(searchQuery.value.toLowerCase()),
      )
    return debouncedSearch
  })

  if (selectedSort.value) {
    results = [...results].sort((a: Company, b: Company) => {
      const priceA = Number(a.price)
      const priceB = Number(b.price)
      const diff = selectedSort.value === 'asc' ? priceA - priceB : priceB - priceA
      console.log('Sorting:', {
        nameA: a.name,
        nameB: b.name,
        priceA: a.price,
        priceB: b.price,
        diff,
        sortType: selectedSort.value,
      })
      return diff
    })
  }

  console.log('Sorted results:', results)
  return [...results]
})
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
            @input="debouncedSearch($event.target.value)"
            type="text"
            placeholder="Поиск по компаниям и услугам..."
            class="input input-bordered input-md w-full focus:outline-none"
          />
        </div>

        <!-- Сортировка -->
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost">
            <Icon icon="heroicons:arrows-up-down-20-solid" class="w-5 h-5 mr-2" />
            {{
              selectedSort
                ? sortingOptions.find(
                    (o: { value: string; label: string }) => o.value === selectedSort.value,
                  )?.label
                : 'Цены'
            }}
          </div>
          <ul class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
            <li v-for="option in sortingOptions" :key="option.value">
              <a @click="selectedSort = option.value">{{ option.label }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Список карточек -->
    <TransitionGroup name="card-list" tag="div" class="grid grid-cols-1 gap-10" :key="selectedSort">
      <CompanyCard
        v-for="company in filteredCompanies"
        :key="company.id"
        :company="company"
        class="card-list-item"
      />
    </TransitionGroup>
  </div>
</template>

<style scoped>
.dropdown-content {
  z-index: 50;
}
</style>
