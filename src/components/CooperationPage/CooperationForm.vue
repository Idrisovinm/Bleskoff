<script lang="ts" setup>
import FormInput from '@/components/CooperationPage/FormInput.vue'
import SuccessModal from '@/components/SuccessModal.vue'
import { storeToRefs } from 'pinia'
import { useFormStore } from '@/stores/formStore'
import { Icon } from '@iconify/vue'
import { ref } from 'vue'
import type { ModalType } from '@/types/modal'

const formStore = useFormStore()
const { isSubmitting } = storeToRefs(formStore)

// Состояние модального окна
const showModal = ref(false)
const modalType = ref<ModalType>('success')
const modalTitle = ref('')
const modalMessage = ref('')

const handleSubmit = async () => {
  try {
    if (!formStore.validateForm()) {
      return
    }

    const result = await formStore.submitForm()

    // Показываем модальное окно успеха
    modalType.value = 'success'
    modalTitle.value = 'Заявка отправлена!'
    modalMessage.value =
      'Спасибо за ваш интерес к сотрудничеству! Мы свяжемся с вами в течение 24 часов для обсуждения деталей.'
    showModal.value = true
  } catch (error) {
    console.error('Ошибка при отправке формы:', error)

    // Показываем модальное окно ошибки
    modalType.value = 'error'
    modalTitle.value = 'Ошибка отправки'
    modalMessage.value =
      'Произошла ошибка при отправке заявки. Пожалуйста, попробуйте еще раз или свяжитесь с нами напрямую.'
    showModal.value = true
  }
}

const closeModal = () => {
  showModal.value = false
}
</script>

<template>
  <div class="mx-auto">
    <!-- Заголовок формы -->
    <div class="text-center mb-4 sm:mb-6 md:mb-8">
      <h1 class="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2 px-2">
        Заявка на сотрудничество
      </h1>
    </div>

    <form
      @submit.prevent="handleSubmit"
      class="space-y-4 sm:space-y-6 bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 border border-white/50 shadow-xl sm:shadow-2xl hover:shadow-2xl sm:hover:shadow-3xl transition-all duration-500 relative overflow-hidden"
    >
      <!-- Gradient overlay for form -->
      <div
        class="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-indigo-50/30 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-300"
      ></div>
      <div class="relative z-10">
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
        <div class="mb-4 sm:mb-6">
          <label class="block text-sm font-semibold text-gray-700 mb-2 sm:mb-3">
            Дополнительная информация
            <span class="text-gray-400 text-sm font-normal ml-1">(необязательно)</span>
          </label>
          <div class="relative group">
            <textarea
              v-model="formStore.form.message"
              placeholder="Расскажите о ваших услугах или задайте вопросы"
              rows="3"
              class="block w-full rounded-lg sm:rounded-xl border-2 border-gray-200 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl focus:shadow-2xl hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 hover:bg-white focus:bg-white transition-all duration-300 placeholder:text-gray-400 text-gray-800 p-3 sm:p-4 font-medium resize-none text-sm sm:text-base"
            ></textarea>
          </div>
        </div>

        <!-- Кнопка отправки -->
        <button
          type="submit"
          class="w-full cursor-pointer bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 hover:from-blue-700 hover:via-blue-800 hover:to-indigo-800 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg sm:rounded-xl shadow-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center group"
          :disabled="isSubmitting"
        >
          <Icon
            v-if="!isSubmitting"
            icon="heroicons:paper-airplane"
            class="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 group-hover:translate-x-1 transition-transform duration-300"
          />
          <Icon
            v-else
            icon="heroicons:arrow-path"
            class="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 animate-spin"
          />
          <span class="text-base sm:text-lg">{{
            isSubmitting ? 'Отправка...' : 'Отправить заявку'
          }}</span>
        </button>

        <!-- Примечание -->
        <p class="text-sm text-gray-500 text-center mt-2 p-4">
          Нажимая кнопку, вы соглашаетесь с
          <router-link to="/privacy-policy" class="text-blue-600 hover:text-blue-700 underline">
            политикой конфиденциальности
          </router-link>
        </p>
      </div>
    </form>

    <!-- Модальное окно -->
    <SuccessModal
      v-model:is-open="showModal"
      :type="modalType"
      :title="modalTitle"
      :message="modalMessage"
      @close="closeModal"
    />
  </div>
</template>
