// stores/formStore.ts
import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import axios from 'axios'
import type { FormData, FormErrors } from '@/types/form'
import { usePhoneStore } from '@/stores/phoneStore'

export const useFormStore = defineStore('form', () => {
  // Состояние формы
  const form = reactive<FormData>({
    company: '',
    contact: '',
    phone: '',
    email: '',
    message: '',
  })

  const errors = reactive<FormErrors>({})
  const isSubmitting = ref(false)

  // Действия
  const submitForm = async () => {
    isSubmitting.value = true
    try {
      const f = axios.create({ baseURL: 'http://localhost:3001' })
      console.log(form)
      const response = await f.post('/submit-form', form)

      // Очищаем форму после успешной отправки
      form.company = ''
      form.contact = ''
      form.phone = ''
      form.email = ''
      form.message = ''

      return response.data
    } catch (error: any) {
      console.error('Ошибка:', error)
      // Пробрасываем ошибку для обработки в компоненте
      throw error
    } finally {
      isSubmitting.value = false
    }
  }

  // Валидация формы
  const validateForm = (): boolean => {
    const phoneStore = usePhoneStore()
    let isValid = true
    errors.company = ''
    errors.contact = ''
    errors.phone = ''
    errors.email = ''

    if (!form.company.trim()) {
      errors.company = 'Введите название компании'
      isValid = false
    }

    if (!form.contact.trim()) {
      errors.contact = 'Введите контактное лицо'
      isValid = false
    }

    // Используем валидацию из phoneStore
    const phoneValidationErrors = phoneStore.validatePhone(form.phone)
    if (phoneValidationErrors.length > 0) {
      errors.phone = phoneValidationErrors[0] // Показываем первую ошибку
      isValid = false
    }

    if (!form.email.trim()) {
      errors.email = 'Введите email'
      isValid = false
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      errors.email = 'Введите корректный email'
      isValid = false
    }

    return isValid
  }

  return {
    form,
    errors,
    isSubmitting,
    submitForm,
    validateForm,
  }
})
