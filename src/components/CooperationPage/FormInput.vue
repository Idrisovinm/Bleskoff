<script lang="ts" setup>
import type { FormInputProps, FormInputEmits } from '@/types/form'

const props = defineProps<FormInputProps>()
const emit = defineEmits<FormInputEmits>()
</script>

<template>
  <div class="mb-4">
    <label v-if="label" :for="id" class="block text-md font-medium text-gray-700 mb-1">
      {{ label }}
      <span v-if="required" class="text-red-500">*</span>
    </label>

    <input
      :placeholder="placeholder"
      :id="id"
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      class="block w-full rounded-md p-3 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition duration-200 placeholder:text-gray-400 text-black"
      :class="{ 'border-red-300': error }"
      v-bind="$attrs"
    />

    <p v-if="error" class="mt-1 text-sm text-red-600">
      {{ error }}
    </p>
  </div>
</template>
