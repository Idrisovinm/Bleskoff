<script lang="ts" setup>
import { ref, computed } from 'vue'
import { Icon } from '@iconify/vue'
import type { Company } from '../types/company'
import { useVoximplantStore } from '@/stores/voximplantStore'

const props = defineProps<{
  company: Company
}>()

const isServicesExpanded = ref(false)
const voxStore = useVoximplantStore()

const toggleServices = () => {
  isServicesExpanded.value = !isServicesExpanded.value
}

const handleOrder = async () => {
  const success = await voxStore.makeCall(props.company.companyPhone, props.company.name)
  if (!success && !voxStore.error) {
    alert('Не удалось инициировать звонок')
  }
}

// Функция для определения классов в зависимости от длины текста
const getServiceBadgeClass = (service: string) => {
  const baseClasses =
    'badge bg-blue-50 text-blue-700 border-blue-200 badge-sm break-words transition-all duration-200'

  if (service.length > 50) {
    return `${baseClasses} min-w-full text-left justify-start`
  } else if (service.length > 30) {
    return `${baseClasses} min-w-[180px]`
  } else if (service.length > 20) {
    return `${baseClasses} min-w-[140px]`
  }

  return baseClasses
}
</script>

<template>
  <div
    class="card bg-white shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100 rounded-xl"
  >
    <!-- Image with Badge -->
    <figure class="relative h-48 overflow-hidden rounded-t-xl">
      <img
        :src="company.image"
        :alt="company.name"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <!-- Gradient overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      <div class="absolute top-4 left-4">
        <div class="badge bg-blue-500 border-none text-white shadow-md px-3 py-2">
          ⭐ {{ company.rating }}/5
        </div>
      </div>
      <div class="absolute top-4 right-4">
        <div class="badge bg-green-500 border-none text-white shadow-md px-3 py-2">
          от {{ company.price }} ₽/м²
        </div>
      </div>
    </figure>

    <!-- Card Content -->
    <div class="card-body p-5">
      <!-- Company Name -->
      <h2 class="card-title text-xl font-semibold text-gray-800 mb-3 break-words">
        {{ company.name }}
      </h2>

      <!-- Description -->
      <p class="text-gray-600 mb-4 text-sm leading-relaxed break-words">
        {{ company.description }}
      </p>

      <!-- Services Preview -->
      <div class="mb-4">
        <div class="flex flex-wrap gap-2">
          <span
            v-for="(service, index) in company.services.slice(0, 3)"
            :key="index"
            :class="getServiceBadgeClass(service)"
            :title="service.length > 50 ? service : undefined"
          >
            {{ service }}
          </span>
          <span
            @click="toggleServices"
            v-if="company.services.length > 3"
            class="badge bg-gray-100 text-gray-600 border-gray-200 badge-sm cursor-pointer"
          >
            +{{ company.services.length - 3 }}
          </span>
        </div>
      </div>

      <!-- Services Accordion -->
      <div class="collapse collapse-arrow bg-gray-50 rounded-lg mb-4">
        <input type="checkbox" v-model="isServicesExpanded" />
        <div class="collapse-title font-medium text-blue-600 flex items-center text-sm">
          <Icon icon="heroicons:list-bullet-20-solid" class="w-4 h-4 mr-2 flex-shrink-0" />
          Все услуги
        </div>
        <div class="collapse-content">
          <ul class="space-y-2">
            <li
              v-for="(service, index) in company.services"
              :key="index"
              class="flex items-start p-2 bg-white rounded-lg border-l-4 border-blue-200 transition-all duration-200 hover:border-blue-400"
            >
              <Icon
                icon="heroicons:check-badge-20-solid"
                class="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0"
              />
              <span class="text-gray-700 text-sm break-words">{{ service }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Contact Actions -->
      <div class="card-actions justify-between items-center flex-col sm:flex-row gap-3">
        <a
          :href="`tel:${company.companyPhone}`"
          class="btn btn-ghost btn-sm text-blue-600 hover:bg-blue-50 w-full sm:w-auto justify-center sm:justify-start"
        >
          <Icon icon="heroicons:phone-20-solid" class="w-4 h-4 mr-1" />
          {{ company.companyPhone }}
        </a>
        <button
          class="btn bg-blue-500 hover:bg-blue-600 border-none text-white gap-2 w-full sm:w-auto shadow-md"
          @click="handleOrder"
        >
          <Icon icon="heroicons:shopping-cart-20-solid" class="w-4 h-4" />
          Заказать
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.break-words {
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
}

/* Стили для адаптивных бейджей */
.badge {
  display: inline-flex;
  align-items: center;
  white-space: normal;
  height: auto;
  min-height: 1.5rem;
  padding: 0.25rem 0.5rem;
  line-height: 1.2;
}

@media (max-width: 640px) {
  .card-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .btn {
    width: 100%;
    justify-content: center;
  }

  .badge {
    min-width: 100% !important;
    text-align: left;
    justify-content: flex-start;
  }
}
</style>
