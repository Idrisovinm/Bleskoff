// Типы для данных формы
export interface FormData {
  company: string
  contact: string
  phone: string
  email: string
  message: string
}

// Типы для ошибок формы
export interface FormErrors {
  company?: string
  contact?: string
  phone?: string
  email?: string
  message?: string
}

// Пропсы для компонента FormInput
export interface FormInputProps {
  modelValue: string
  label?: string
  placeholder?: string
  type?: string
  required?: boolean
  error?: string
  icon?: string // Добавляем свойство для иконки
  id?: string
}

export interface FormInputEmits {
  (e: 'update:modelValue', value: string): void
}
