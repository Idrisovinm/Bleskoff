// stores/formStore.ts
import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import axios from 'axios'
import type { FormData, FormErrors } from '@/types/form'

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
  const isSubmitted = ref(false)

  // Действия
  const submitForm = async () => {
    isSubmitting.value = true
    try {
      const f = axios.create({ baseURL: 'http://localhost:9020' })
      console.log(form)
      const response = await f.post('/submit-form', form)

      alert('Форма успешно отправлена! Мы свяжемся с вами в ближайшее время.')

      form.company = ''
      form.contact = ''
      form.phone = ''
      form.email = ''
      form.message = ''
      return response.data
    } catch (error: any) {
      console.error('Ошибка:', error)
      alert(
        error?.response?.status
          ? `Ошибка: ${error?.response?.status}`
          : 'Ошибка при отправке формы',
      )
    } finally {
      isSubmitting.value = false
      isSubmitted.value = true
    }
  }

  // Валидация формы
  const validateForm = (): boolean => {
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

    if (!form.phone.trim()) {
      errors.phone = 'Введите телефон'
      isValid = false
    } else if (!/^\+?[0-9\s\-\(\)]{10,}$/.test(form.phone)) {
      errors.phone = 'Введите корректный телефон'
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

  // Геттеры (опционально)
  const isValid = () => validateForm()

  return {
    form,
    errors,
    isSubmitting,
    isSubmitted,
    submitForm,
    validateForm,
    isValid,
  }
})
