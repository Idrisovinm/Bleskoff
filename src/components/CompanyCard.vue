<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import { computed, ref } from 'vue'
import type { Company } from '../types/company'

const props = defineProps<{
  company: Company
  calculatorData: {
    budgetFrom: number | null
    budgetTo: number | null
  }
}>()

const emit = defineEmits<{
  openPhoneModal: [phoneNumber: string, companyName: string]
}>()

// Состояние для отслеживания раскрытых услуг
const servicesExpanded = ref(false)

// Проверка есть ли заданный бюджет
const hasBudget = computed(() => {
  return props.calculatorData.budgetFrom !== null && props.calculatorData.budgetTo !== null
})

// Проверка соответствия бюджету
const isWithinBudget = computed(() => {
  if (!hasBudget.value) return true
  return (
    props.company.price >= props.calculatorData.budgetFrom! &&
    props.company.price <= props.calculatorData.budgetTo!
  )
})

// Статус бюджета
const budgetStatus = computed(() => {
  if (!hasBudget.value) return null
  if (props.company.price < props.calculatorData.budgetFrom!) return 'below'
  if (props.company.price > props.calculatorData.budgetTo!) return 'above'
  return 'within'
})

// Функция для переключения раскрытия услуг
const toggleServices = () => {
  servicesExpanded.value = !servicesExpanded.value
}

// Вычисляемые свойства для отображения услуг
const visibleServices = computed(() => {
  return servicesExpanded.value ? props.company.services : props.company.services.slice(0, 2)
})

const hiddenServicesCount = computed(() => {
  return Math.max(0, props.company.services.length - 2)
})

const handleOrder = () => {
  // Эмитируем событие для открытия модального окна на уровне выше
  emit('openPhoneModal', props.company.companyPhone, props.company.name)
}
</script>

<template>
  <div class="group">
    <!-- Avito-style horizontal card -->
    <div
      class="bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer hover:border-gray-300"
    >
      <div class="flex">
        <!-- Image Section -->
        <div class="relative w-48 flex-shrink-0 h-80 bg-gray-100 overflow-hidden">
          <img
            :src="company.image"
            :alt="company.name"
            class="w-full h-full object-cover object-center"
          />
          <!-- Rating badge -->
          <div class="absolute top-2 left-2">
            <div
              class="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-medium flex items-center"
            >
              <Icon icon="heroicons:star-20-solid" class="w-3 h-3 text-yellow-400 mr-1" />
              {{ company.rating }}
            </div>
          </div>
        </div>

        <!-- Content Section -->
        <div class="flex-1 p-4 flex flex-col justify-between">
          <!-- Top section with title and price -->
          <div>
            <!-- Price with budget indication -->
            <div class="flex items-center gap-2 mb-1">
              <div class="text-lg font-bold text-gray-900">
                от {{ company.price.toLocaleString() }} ₽
              </div>

              <!-- Budget status badge -->
              <div v-if="hasBudget && budgetStatus" class="flex items-center gap-1">
                <div
                  v-if="budgetStatus === 'within'"
                  class="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium flex items-center"
                >
                  <Icon icon="heroicons:check-circle-20-solid" class="w-3 h-3 mr-1" />
                  В бюджете
                </div>
                <div
                  v-else-if="budgetStatus === 'below'"
                  class="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium flex items-center"
                >
                  <Icon icon="heroicons:arrow-down-20-solid" class="w-3 h-3 mr-1" />
                  Ниже бюджета
                </div>
                <div
                  v-else-if="budgetStatus === 'above'"
                  class="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs font-medium flex items-center"
                >
                  <Icon icon="heroicons:arrow-up-20-solid" class="w-3 h-3 mr-1" />
                  Выше бюджета
                </div>
              </div>
            </div>

            <!-- Company Name -->
            <h3 class="text-base font-medium text-gray-900 mb-2 line-clamp-1">
              {{ company.name }}
            </h3>

            <!-- Description -->
            <p class="text-sm text-gray-600 mb-3 line-clamp-2">
              {{ company.description }}
            </p>

            <!-- Services -->
            <div class="flex flex-wrap gap-1 mb-3">
              <TransitionGroup name="service" tag="div" class="flex flex-wrap gap-1">
                <span
                  v-for="(service, index) in visibleServices"
                  :key="`service-${index}`"
                  class="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                >
                  {{ service }}
                </span>
              </TransitionGroup>
              <span
                v-if="hiddenServicesCount > 0"
                @click="toggleServices"
                class="inline-block bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded cursor-pointer hover:bg-gray-300 transition-colors"
              >
                {{ servicesExpanded ? 'Свернуть' : `+${hiddenServicesCount}` }}
              </span>
            </div>
          </div>

          <!-- Bottom section with button -->
          <div class="flex items-center justify-end">
            <!-- Order Button -->
            <button
              @click="handleOrder"
              class="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
            >
              Заказать
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Анимация для раскрытия/сворачивания услуг */
.service-enter-active,
.service-leave-active {
  transition: all 0.3s ease;
}

.service-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.service-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

.service-move {
  transition: transform 0.3s ease;
}
</style>

<style scoped>
.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
