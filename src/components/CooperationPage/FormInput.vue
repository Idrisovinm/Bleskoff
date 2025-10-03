<script lang="ts" setup>
import type { FormInputProps, FormInputEmits } from '@/types/form'
import { Icon } from '@iconify/vue'
import { usePhoneStore } from '@/stores/phoneStore'
import { ref, nextTick } from 'vue'

const props = defineProps<FormInputProps>()
const emit = defineEmits<FormInputEmits>()

const phoneStore = usePhoneStore()
const inputRef = ref<HTMLInputElement>()
const inputId = `input-${Math.random().toString(36).substr(2, 9)}`

// Обработчик ввода с применением маски для телефонных полей
const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  let value = target.value

  // Применяем маску только для телефонных полей
  if (props.type === 'tel' || props.placeholder?.toLowerCase().includes('телефон')) {
    value = phoneStore.formatPhoneNumber(value)

    // Обновляем значение в поле ввода
    nextTick(() => {
      if (inputRef.value) {
        inputRef.value.value = value
      }
    })
  }

  emit('update:modelValue', value)
}

// Обработчик клавиш для телефонных полей
const handleKeyDown = (event: KeyboardEvent) => {
  // Применяем обработку клавиш только для телефонных полей
  if (props.type === 'tel' || props.placeholder?.toLowerCase().includes('телефон')) {
    // Создаем ref-объект для совместимости с phoneStore
    const phoneRef = ref(props.modelValue || '')

    // Вызываем обработчик из phoneStore
    phoneStore.handleKeyDown(event, phoneRef)

    // Если значение изменилось, обновляем его
    if (phoneRef.value !== props.modelValue) {
      emit('update:modelValue', phoneRef.value)

      // Обновляем значение в поле ввода
      nextTick(() => {
        if (inputRef.value) {
          inputRef.value.value = phoneRef.value
        }
      })
    }
  }
}
</script>

<template>
  <div class="mb-4 sm:mb-6">
    <label
      v-if="label"
      :for="inputId"
      class="block text-sm font-semibold text-gray-700 mb-2 sm:mb-3"
    >
      {{ label }}
      <span v-if="required" class="text-red-500 ml-1">*</span>
    </label>

    <div class="relative group">
      <div
        v-if="icon"
        class="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none z-10"
      >
        <Icon
          :icon="icon"
          class="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-300"
        />
      </div>

      <input
        ref="inputRef"
        :id="inputId"
        :type="type"
        :value="modelValue"
        @input="handleInput"
        @keydown="handleKeyDown"
        :placeholder="placeholder"
        :class="[
          'block w-full rounded-lg sm:rounded-xl border-2 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl focus:shadow-2xl transition-all duration-300 placeholder:text-gray-400 text-gray-800 py-3 sm:py-4 font-medium text-sm sm:text-base',
          icon ? 'pl-10 sm:pl-12 pr-3 sm:pr-4' : 'px-3 sm:px-4',
          error
            ? 'border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-500/20 bg-red-50/50'
            : 'border-gray-200 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 hover:bg-white focus:bg-white',
        ]"
        v-bind="$attrs"
      />
    </div>

    <p v-if="error" class="mt-2 text-sm text-red-600 flex items-center">
      <Icon icon="heroicons:exclamation-circle" class="w-4 h-4 mr-1" />
      {{ error }}
    </p>
  </div>
</template>
