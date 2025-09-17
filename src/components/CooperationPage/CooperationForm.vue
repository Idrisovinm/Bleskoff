<script lang="ts" setup>
import FormInput from '@/components/CooperationPage/FormInput.vue'
import { storeToRefs } from 'pinia'
import { useFormStore } from '@/stores/formStore'
import { Icon } from '@iconify/vue'

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
    <!-- Заголовок формы -->
    <div class="text-center mb-8">
      <h1 class="text-2xl font-bold text-gray-800 mb-2">Заявка на сотрудничество</h1>
      <p class="text-gray-600">Заполните форму и мы свяжемся с вами в течение 24 часов</p>
    </div>

    <form
      @submit.prevent="handleSubmit"
      class="space-y-6 bg-white rounded-2xl p-8 border border-gray-200 shadow-lg"
    >
      <!-- Название компании -->
      <FormInput
        v-model="formStore.form.company"
        label="Название компании"
        placeholder="Введите название вашей компании"
        required
        :error="formStore.errors.company"
        icon="heroicons:building-office"
      />

      <!-- Контактное лицо -->
      <FormInput
        v-model="formStore.form.contact"
        label="Контактное лицо"
        placeholder="Введите ФИО контактного лица"
        required
        :error="formStore.errors.contact"
        icon="heroicons:user"
      />

      <!-- Телефон -->
      <FormInput
        v-model="formStore.form.phone"
        label="Телефон"
        type="tel"
        placeholder="+7 (___) ___-__-__"
        required
        :error="formStore.errors.phone"
        icon="heroicons:phone"
      />

      <!-- Email -->
      <FormInput
        v-model="formStore.form.email"
        label="Почта"
        type="email"
        placeholder="your@email.com"
        required
        :error="formStore.errors.email"
        icon="heroicons:envelope"
      />

      <!-- Дополнительная информация -->
      <div class="mb-4">
        <label class="block text-md font-medium text-gray-700 mb-2">
          Дополнительная информация
          <span class="text-gray-400 text-sm">(необязательно)</span>
        </label>
        <textarea
          v-model="formStore.form.message"
          placeholder="Расскажите о ваших услугах или задайте вопросы"
          rows="4"
          class="block w-full rounded-lg p-3 border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition duration-200 placeholder:text-gray-400 text-black resize-none"
        ></textarea>
      </div>

      <!-- Кнопка отправки -->
      <button
        type="submit"
        class="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center"
        :disabled="isSubmitting"
      >
        <Icon v-if="!isSubmitting" icon="heroicons:paper-airplane" class="w-5 h-5 mr-2" />
        <span>{{ isSubmitting ? 'Отправка...' : 'Отправить заявку' }}</span>
      </button>

      <!-- Примечание -->
      <p class="text-sm text-gray-500 text-center">
        Нажимая кнопку, вы соглашаетесь с
        <router-link to="/privacy-policy" class="text-blue-600 hover:text-blue-700 underline">
          политикой конфиденциальности
        </router-link>
      </p>
    </form>
  </div>
</template>
