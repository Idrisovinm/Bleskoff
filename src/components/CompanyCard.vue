<script lang="ts" setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import type { Company } from '../types/company'
import { useVoximplantStore } from '@/stores/voximplantStore'

const props = defineProps<{
  company: Company
}>()

const emit = defineEmits<{
  openPhoneModal: [phoneNumber: string, companyName: string]
}>()

const isServicesExpanded = ref(false)
const voxStore = useVoximplantStore()

const toggleServices = () => {
  isServicesExpanded.value = !isServicesExpanded.value
}

const handleOrder = () => {
  // Эмитируем событие для открытия модального окна на уровне выше
  emit('openPhoneModal', props.company.companyPhone, props.company.name)
}

// Функция для определения классов в зависимости от длины текста
const getServiceBadgeClass = (service: string) => {
  const baseClasses =
    'badge bg-blue-50 text-blue-700 border-blue-200 badge-sm break-words transition-[transform,box-shadow] duration-200'

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
  <div class="group">
    <div
      class="card bg-gradient-to-br from-white via-white to-blue-50/30 shadow-lg hover:shadow-2xl transition-[box-shadow,transform] duration-500 group border border-gray-100/50 rounded-2xl backdrop-blur-sm hover:-translate-y-1 hover:scale-[1.01] transform-gpu will-change-transform overflow-hidden"
      style="transform-style: preserve-3d; backface-visibility: hidden"
    >
      <!-- Image with Badge -->
      <figure class="relative h-40 sm:h-48 md:h-52 overflow-hidden rounded-t-2xl">
        <img
          :src="company.image"
          :alt="company.name"
          class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <!-- Enhanced gradient overlay -->
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent group-hover:from-black/50 transition-[background] duration-500"
        ></div>

        <!-- Animated rating badge -->
        <div
          class="absolute top-2 sm:top-4 left-2 sm:left-4 transform group-hover:scale-110 transition-transform duration-300"
        >
          <div
            class="badge bg-gradient-to-r from-amber-400 to-orange-500 border-none text-white shadow-lg px-2 sm:px-3 py-1 sm:py-2 font-semibold backdrop-blur-sm text-xs sm:text-sm"
          >
            <Icon icon="heroicons:star-20-solid" class="w-3 h-3 sm:w-4 sm:h-4 mr-1 animate-pulse" />
            {{ company.rating }}/5
          </div>
        </div>

        <!-- Animated price badge -->
        <div
          class="absolute top-2 sm:top-4 right-2 sm:right-4 transform group-hover:scale-110 transition-transform duration-300"
        >
          <div
            class="badge bg-gradient-to-r from-blue-500 to-indigo-600 border-none text-white shadow-lg px-2 sm:px-3 py-1 sm:py-2 font-semibold backdrop-blur-sm text-xs sm:text-sm"
          >
            <Icon icon="heroicons:banknotes-20-solid" class="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
            от {{ company.price }} ₽/м²
          </div>
        </div>
      </figure>

      <!-- Card Content -->
      <div class="card-body p-4 sm:p-6 space-y-3 sm:space-y-4">
        <!-- Company Name with gradient -->
        <h2
          class="card-title text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2 sm:mb-3 break-words leading-tight"
        >
          {{ company.name }}
        </h2>

        <!-- Description with better typography -->
        <p
          class="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed break-words line-clamp-3 group-hover:text-gray-700 transition-colors duration-300"
        >
          {{ company.description }}
        </p>

        <!-- Enhanced Services Preview -->
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

        <!-- Enhanced Services Accordion with Smooth Animation -->
        <div
          class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl mb-3 sm:mb-4 border border-blue-100/50 hover:border-blue-200 transition-[border-color] duration-300 overflow-hidden"
        >
          <div
            @click="isServicesExpanded = !isServicesExpanded"
            class="p-3 sm:p-4 font-semibold text-blue-700 flex items-center text-xs sm:text-sm hover:text-blue-800 transition-colors duration-300 cursor-pointer select-none"
          >
            <Icon
              icon="heroicons:list-bullet-20-solid"
              class="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0"
            />
            Все услуги
            <div class="ml-auto badge badge-sm bg-blue-200 text-blue-800 border-none mr-2 text-xs">
              {{ company.services.length }}
            </div>
            <Icon
              icon="heroicons:chevron-down-20-solid"
              class="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ease-in-out"
              :class="{ 'rotate-180': isServicesExpanded }"
            />
          </div>
          <div
            class="transition-all duration-500 ease-in-out overflow-hidden"
            :class="isServicesExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'"
          >
            <div class="px-3 sm:px-4 pb-3 sm:pb-4">
              <ul class="space-y-2 sm:space-y-3">
                <li
                  v-for="(service, index) in company.services"
                  :key="index"
                  class="flex items-start p-2 sm:p-3 bg-white rounded-xl border-l-4 border-blue-200 transition-[border-color,box-shadow,transform,opacity] duration-300 hover:border-blue-400 hover:shadow-md transform hover:translate-x-1"
                  :style="{
                    transitionDelay: isServicesExpanded ? `${index * 50}ms` : '0ms',
                    transform: isServicesExpanded ? 'translateY(0)' : 'translateY(-10px)',
                    opacity: isServicesExpanded ? '1' : '0',
                  }"
                >
                  <Icon
                    icon="heroicons:check-badge-20-solid"
                    class="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 mr-2 sm:mr-3 mt-0.5 flex-shrink-0"
                  />
                  <span
                    class="text-gray-700 text-xs sm:text-sm break-words leading-relaxed"
                    >{{ service }}</span
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Order Button at the bottom -->
        <div class="card-actions justify-end mt-4 sm:mt-6">
          <button
            @click="handleOrder"
            class="btn bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white border-none shadow-lg hover:shadow-xl transform hover:scale-105 transition-[all] duration-300 ease-out px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold rounded-xl w-full sm:w-auto min-h-[44px] active:scale-95"
          >
            <Icon icon="heroicons:phone-20-solid" class="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Заказать
          </button>
        </div>
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
  min-height: 1.25rem;
  padding: 0.25rem 0.5rem;
  line-height: 1.2;
  word-break: break-word;
}

/* Улучшенные стили для мобильных устройств */
@media (max-width: 640px) {
  .card-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .btn {
    width: 100%;
    justify-content: center;
    min-height: 2.5rem;
  }

  .badge {
    min-width: auto !important;
    text-align: left;
    justify-content: flex-start;
    font-size: 0.75rem;
    max-width: 100%;
    overflow-wrap: break-word;
    word-wrap: break-word;
    hyphens: auto;
  }

  /* Улучшенная адаптивность для очень маленьких экранов */
  .card-body {
    padding: 1rem;
  }
  а .card-title {
    font-size: 1rem;
    line-height: 1.25;
  }

  /* Оптимизация для сенсорных устройств */
  .btn {
    min-height: 44px; /* Минимальный размер для удобного нажатия */
  }

  /* Улучшения для списка услуг */
  .space-y-2 > * + * {
    margin-top: 0.5rem;
  }

  .space-y-3 > * + * {
    margin-top: 0.75rem;
  }
}

@media (max-width: 480px) {
  .badge {
    font-size: 0.7rem;
    padding: 0.2rem 0.4rem;
    line-height: 1.3;
  }

  .card-body {
    padding: 0.75rem;
    gap: 0.5rem;
  }

  .card-title {
    font-size: 0.9rem;
  }

  /* Дополнительные улучшения для очень маленьких экранов */
  .text-xs {
    font-size: 0.65rem;
  }

  .text-sm {
    font-size: 0.75rem;
  }
}
</style>
