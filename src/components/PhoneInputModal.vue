<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { Icon } from '@iconify/vue'
import { usePhoneStore } from '@/stores/phoneStore'
import type { PhoneInputModalProps, PhoneInputModalEmits } from '@/types/phone'

const props = defineProps<PhoneInputModalProps>()
const emit = defineEmits<PhoneInputModalEmits>()

const phoneStore = usePhoneStore()
const phoneNumber = ref('')
const isLoading = ref(false)
const errors = ref<string[]>([])

// Очистка формы при открытии модального окна
watch(
  () => props.isOpen,
  (newValue) => {
    if (newValue) {
      phoneNumber.value = ''
      errors.value = []
      isLoading.value = false
    }
  },
)

const handlePhoneInput = (event: Event) => {
  phoneStore.handlePhoneInput(event, phoneNumber, errors)
}

const handleSubmit = () => {
  const validationErrors = phoneStore.validatePhone(phoneNumber.value)

  if (validationErrors.length > 0) {
    errors.value = validationErrors
    return
  }

  isLoading.value = true
  emit('submit', phoneNumber.value)
}

const handleKeyDown = (event: KeyboardEvent) => {
  phoneStore.handleKeyDown(event, phoneNumber, errors)
}

const handleClose = () => {
  if (!isLoading.value) {
    emit('close')
  }
}

// Computed для проверки валидности формы
const isFormValid = computed(() => {
  return phoneNumber.value.trim() !== '' && errors.value.length === 0
})
</script>

<template>
  <!-- Backdrop -->
  <div
    v-if="isOpen"
    class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
    @click.self="handleClose"
  >
    <!-- Modal Container -->
    <div
      class="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-auto transform transition-all duration-300 scale-100"
      @click.stop
    >
      <!-- Header -->
      <div class="relative p-6 border-b border-gray-100">
        <button
          @click="handleClose"
          :disabled="isLoading"
          class="absolute cursor-pointer top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Icon icon="heroicons:x-mark" class="w-5 h-5 text-gray-500" />
        </button>

        <div class="flex items-center space-x-3">
          <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <Icon icon="heroicons:phone" class="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 class="text-lg sm:text-xl font-bold text-gray-900">Заказать звонок</h3>
            <p v-if="companyName" class="text-sm text-gray-600">{{ companyName }}</p>
          </div>
        </div>
      </div>

      <!-- Content -->
      <div class="p-6">
        <p class="text-gray-600 mb-6 leading-relaxed">
          {{
            companyName
              ? `Введите ваш номер телефона, и мы свяжем вас с представителем компании`
              : `Введите ваш номер телефона, и мы свяжемся с вами`
          }}
        </p>

        <!-- Phone Input -->
        <div class="space-y-4">
          <div>
            <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
              Номер телефона
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Icon icon="heroicons:phone" class="w-5 h-5 text-gray-400" />
              </div>
              <input
                id="phone"
                v-model="phoneNumber"
                @input="handlePhoneInput"
                @keydown="handleKeyDown"
                type="tel"
                placeholder="+7 (___) ___-__-__"
                :disabled="isLoading"
                class="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 disabled:bg-gray-50 disabled:cursor-not-allowed text-gray-900 placeholder-gray-400 font-medium"
                :class="{
                  'border-red-300 focus:ring-red-500 focus:border-red-500': errors.length > 0,
                }"
              />
            </div>

            <!-- Error Messages -->
            <div v-if="errors.length > 0" class="mt-2 space-y-1">
              <p
                v-for="error in errors"
                :key="error"
                class="text-sm text-red-600 flex items-center space-x-1"
              >
                <Icon icon="heroicons:exclamation-circle" class="w-4 h-4" />
                <span>{{ error }}</span>
              </p>
            </div>
          </div>
        </div>

        <!-- Info Block -->
        <div class="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
          <div class="flex items-start space-x-3">
            <Icon icon="heroicons:information-circle" class="w-5 h-5 text-blue-600 mt-0.5" />
            <div class="text-sm text-blue-800">
              <p class="font-medium mb-1">Как это работает:</p>
              <ol class="list-decimal list-inside space-y-1 text-blue-700">
                <li>Вы вводите свой номер телефона</li>
                <li>На ваш номер поступает звонок</li>
                <li>После ответа вас соединят с компанией</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="p-6 border-t border-gray-100 flex space-x-3">
        <button
          @click="handleClose"
          :disabled="isLoading"
          class="flex-1 cursor-pointer px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Отмена
        </button>
        <button
          @click="handleSubmit"
          :disabled="!isFormValid || isLoading"
          class="flex-1 cursor-pointer px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          <Icon v-if="isLoading" icon="heroicons:arrow-path" class="w-4 h-4 animate-spin" />
          <span>{{ isLoading ? 'Соединяем...' : 'Заказать звонок' }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Анимация появления модального окна */
.fixed {
  animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Стили для input */
input[type='tel']:focus {
  outline: none;
}

/* Анимация для кнопки загрузки */
.animate-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
