<script lang="ts" setup>
import FormInput from '@/components/CooperationPage/FormInput.vue'
import { storeToRefs } from 'pinia'
import { useFormStore } from '@/stores/formStore'

const formStore = useFormStore()
const { isSubmitting } = storeToRefs(formStore)

const handleSubmit = async () => {
  try {
    if (!formStore.validateForm()) {
      return
    }
    await formStore.submitForm()
  } catch (error) {
    console.error('Ошибка при отправке формы:', error)
  }
}
</script>

<template>
  <div class="mx-auto">
    <h1 class="text-xl font-semibold text-blue-600 mb-4">Форма заявки</h1>

    <form @submit.prevent="handleSubmit" class="space-y-4">
      <!-- Название компании -->
      <FormInput
        v-model="formStore.form.company"
        label="Название компании"
        placeholder="Введите название компании"
        required
        :error="formStore.errors.company"
      />

      <!-- Контактное лицо -->
      <FormInput
        v-model="formStore.form.contact"
        label="Контактное лицо"
        placeholder="Введите ФИО контактного лица"
        required
        :error="formStore.errors.contact"
      />

      <!-- Телефон -->
      <FormInput
        v-model="formStore.form.phone"
        label="Телефон"
        type="tel"
        placeholder="+7 (___) ___-__-__"
        required
        :error="formStore.errors.phone"
      />

      <!-- Email -->
      <FormInput
        v-model="formStore.form.email"
        label="Почта"
        type="email"
        placeholder="your@email.com"
        required
        :error="formStore.errors.email"
      />

      <!-- Кнопка отправки -->
      <button
        type="submit"
        class="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200"
        :disabled="isSubmitting"
      >
        {{ isSubmitting ? 'Отправка...' : 'Отправить заявку' }}
      </button>
    </form>
  </div>
</template>
