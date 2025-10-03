<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { Icon } from '@iconify/vue'

const emit = defineEmits<{
  calculatorChange: [
    data: {
      budgetFrom: number | null
      budgetTo: number | null
    },
  ]
}>()

const area = ref(50)
const serviceType = ref('cleaning')
const complexity = ref('standard')
const urgency = ref('normal')
const budgetFrom = ref<number | null>(null)
const budgetTo = ref<number | null>(null)

const serviceTypes = [
  { value: 'cleaning', label: 'Уборка', basePrice: 45 },
  { value: 'repair', label: 'Ремонт', basePrice: 800 },
  { value: 'design', label: 'Дизайн', basePrice: 1200 },
  { value: 'construction', label: 'Строительство', basePrice: 2000 },
]

const complexityOptions = [
  { value: 'simple', label: 'Простая', multiplier: 1.0 },
  { value: 'standard', label: 'Стандартная', multiplier: 1.5 },
  { value: 'complex', label: 'Сложная', multiplier: 2.0 },
  { value: 'premium', label: 'Премиум', multiplier: 3.0 },
]

const urgencyOptions = [
  { value: 'normal', label: 'Обычная', multiplier: 1.0 },
  { value: 'urgent', label: 'Срочная', multiplier: 1.3 },
  { value: 'express', label: 'Экспресс', multiplier: 1.6 },
]

const selectedService = computed(() => serviceTypes.find((s) => s.value === serviceType.value))

const selectedComplexity = computed(() =>
  complexityOptions.find((c) => c.value === complexity.value),
)

const selectedUrgency = computed(() => urgencyOptions.find((u) => u.value === urgency.value))

const totalPrice = computed(() => {
  if (!selectedService.value || !selectedComplexity.value || !selectedUrgency.value) return 0

  const basePrice = selectedService.value.basePrice
  const complexityMultiplier = selectedComplexity.value.multiplier
  const urgencyMultiplier = selectedUrgency.value.multiplier

  return Math.round(area.value * basePrice * complexityMultiplier * urgencyMultiplier)
})

const pricePerSquareMeter = computed(() => {
  if (!selectedService.value || !selectedComplexity.value || !selectedUrgency.value) return 0

  const basePrice = selectedService.value.basePrice
  const complexityMultiplier = selectedComplexity.value.multiplier
  const urgencyMultiplier = selectedUrgency.value.multiplier

  return Math.round(basePrice * complexityMultiplier * urgencyMultiplier)
})

const hasBudget = computed(() => {
  return budgetFrom.value !== null || budgetTo.value !== null
})

const formattedBudget = computed(() => {
  if (!hasBudget.value) return 'Не указан'
  
  const from = budgetFrom.value?.toLocaleString() || '0'
  const to = budgetTo.value?.toLocaleString() || '∞'
  
  return `${from} - ${to} ₽`
})

const resetCalculator = () => {
  area.value = 50
  serviceType.value = 'cleaning'
  complexity.value = 'standard'
  urgency.value = 'normal'
  budgetFrom.value = null
  budgetTo.value = null
  
  // Принудительно вызываем обновление фильтрации
  emit('calculatorChange', {
    budgetFrom: null,
    budgetTo: null,
  })
}

// Отслеживаем изменения бюджета и передаем данные в родительский компонент
watch(
  [budgetFrom, budgetTo],
  () => {
    // Нормализуем значения: NaN, undefined, пустые строки и 0 становятся null
    const normalizedBudgetFrom = budgetFrom.value && !isNaN(budgetFrom.value) && budgetFrom.value > 0 ? budgetFrom.value : null
    const normalizedBudgetTo = budgetTo.value && !isNaN(budgetTo.value) && budgetTo.value > 0 ? budgetTo.value : null
    
    emit('calculatorChange', {
      budgetFrom: normalizedBudgetFrom,
      budgetTo: normalizedBudgetTo,
    })
  },
  { immediate: true },
)
</script>

<template>
  <div class="sticky top-4">
    <div
      class="bg-gradient-to-br from-white via-white to-blue-50/30 shadow-xl border border-gray-100/50 rounded-2xl backdrop-blur-sm overflow-hidden"
    >
      <!-- Header -->
      <div class="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 text-white">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <Icon icon="heroicons:calculator-20-solid" class="w-6 h-6" />
            <h3 class="text-sm font-bold">Калькулятор стоимости</h3>
          </div>
          <button
            @click="resetCalculator"
            class="p-2 hover:bg-white/20 rounded-lg transition-colors duration-200"
            title="Сбросить"
          >
            <Icon icon="heroicons:arrow-path-20-solid" class="w-5 h-5" />
          </button>
        </div>
      </div>

      <!-- Calculator Body -->
      <div class="p-6 space-y-6">
        <!-- Area Input -->
        <div class="space-y-3">
          <label class="block text-sm font-semibold text-gray-700"> Площадь помещения (м²) </label>
          <div class="relative">
            <input
              v-model.number="area"
              type="range"
              min="10"
              max="500"
              step="5"
              class="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <div class="flex justify-between text-xs text-gray-500 mt-1">
              <span>10 м²</span>
              <span class="font-semibold text-blue-600">{{ area }} м²</span>
              <span>500 м²</span>
            </div>
          </div>
        </div>

        <!-- Бюджет -->
        <div class="space-y-3">
          <label class="block text-sm font-semibold text-gray-700"> Ваш бюджет (₽) </label>
          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block text-xs text-gray-500 mb-1">От</label>
              <input
                v-model.number="budgetFrom"
                type="number"
                min="0"
                step="1000"
                placeholder="5 000"
                class="w-full px-3 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-black text-sm"
              />
            </div>
            <div>
              <label class="block text-xs text-gray-500 mb-1">До</label>
              <input
                v-model.number="budgetTo"
                type="number"
                min="0"
                step="1000"
                placeholder="150 000"
                class="w-full px-3 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-black text-sm"
              />
            </div>
          </div>
          <div class="text-xs text-gray-500 text-center">
            Укажите желаемый диапазон стоимости работ
          </div>
        </div>

        <!-- Service Type -->
        <div class="space-y-3">
          <label class="block text-sm font-semibold text-gray-700">
            <Icon icon="heroicons:wrench-screwdriver-20-solid" class="w-4 h-4 inline mr-2" />
            Тип услуги
          </label>
          <div class="grid grid-cols-2 gap-2">
            <button
              v-for="service in serviceTypes"
              :key="service.value"
              @click="serviceType = service.value"
              :class="[
                'p-3 rounded-xl border-2 transition-all duration-200 text-sm font-medium',
                serviceType === service.value
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-gray-300 text-gray-600',
              ]"
            >
              {{ service.label }}
            </button>
          </div>
        </div>

        <!-- Complexity -->
        <div class="space-y-3">
          <label class="block text-sm font-semibold text-gray-700">
            <Icon icon="heroicons:cog-6-tooth-20-solid" class="w-4 h-4 inline mr-2" />
            Сложность работ
          </label>
          <select
            v-model="complexity"
            class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-black"
          >
            <option v-for="option in complexityOptions" :key="option.value" :value="option.value">
              {{ option.label }}
            </option>
          </select>
        </div>

        <!-- Urgency -->
        <div class="space-y-3">
          <label class="block text-sm font-semibold text-gray-700">
            <Icon icon="heroicons:clock-20-solid" class="w-4 h-4 inline mr-2" />
            Срочность
          </label>
          <div class="space-y-2">
            <label
              v-for="option in urgencyOptions"
              :key="option.value"
              class="flex items-center space-x-3 p-3 rounded-xl border border-gray-200 hover:bg-gray-50 cursor-pointer transition-colors duration-200"
            >
              <input
                v-model="urgency"
                :value="option.value"
                type="radio"
                class="w-4 h-4 text-blue-600 focus:ring-blue-500"
              />
              <span class="text-sm font-medium text-gray-700">{{ option.label }}</span>
              <span class="ml-auto text-xs text-gray-500">
                {{
                  option.multiplier === 1 ? '' : `+${Math.round((option.multiplier - 1) * 100)}%`
                }}
              </span>
            </label>
          </div>
        </div>

        <!-- Ваш бюджет -->
        <div
          v-if="hasBudget"
          class="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-6 border border-blue-100"
        >
          <div class="space-y-3">
            <div class="text-sm text-gray-600 font-semibold">Ваш бюджет</div>
            <div class="text-2xl font-bold text-blue-600">
              {{ formattedBudget }}
            </div>
            <div class="text-sm text-gray-500">
              Площадь: {{ area }} м² • {{ selectedService?.label }}
            </div>
          </div>
        </div>

        <!-- Расчетная стоимость -->
        <div
          class="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 border border-green-100"
        >
          <div class="space-y-3">
            <div class="text-sm text-gray-600 font-semibold">Расчетная стоимость</div>
            <div class="text-lg font-bold text-green-600">{{ totalPrice.toLocaleString() }} ₽</div>
            <div class="text-sm text-gray-500">
              {{ pricePerSquareMeter.toLocaleString() }} ₽/м² • {{ selectedService?.label }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.slider::-webkit-slider-thumb {
  appearance: none;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: #3b82f6;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.slider::-moz-range-thumb {
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: #3b82f6;
  cursor: pointer;
  border: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
</style>
