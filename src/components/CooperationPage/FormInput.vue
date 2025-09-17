<script lang="ts" setup>
import type { FormInputProps, FormInputEmits } from '@/types/form'
import { Icon } from '@iconify/vue'

const props = defineProps<FormInputProps>()
const emit = defineEmits<FormInputEmits>()

const inputId = `input-${Math.random().toString(36).substr(2, 9)}`
</script>

<template>
  <div class="mb-6">
    <label v-if="label" :for="inputId" class="block text-sm font-medium text-gray-700 mb-2">
      {{ label }}
      <span v-if="required" class="text-red-500">*</span>
    </label>

    <div class="relative">
      <div v-if="icon" class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Icon :icon="icon" class="h-5 w-5 text-gray-400" />
      </div>

      <input
        :id="inputId"
        :type="type"
        :value="modelValue"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        :placeholder="placeholder"
        :class="[
          'block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition duration-200 placeholder:text-gray-400 text-black py-3',
          icon ? 'pl-10 pr-4' : 'px-4',
          error ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300',
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
