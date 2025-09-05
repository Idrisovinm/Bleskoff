// Типы для данных формы
export interface FormData {
  company: string
  contact: string
  phone: string
  email: string
}

// Типы для ошибок формы
export interface FormErrors {
  company?: string
  contact?: string
  phone?: string
  email?: string
}

// Пропсы для компонента FormInput
export interface FormInputProps {
  modelValue: string | number
  id?: string
  label?: string
  type?: 'text' | 'email' | 'password' | 'tel' | 'number' | 'date'
  error?: string
  required?: boolean
  placeholder?: string
}

// События для компонента FormInput
export interface FormInputEmits {
  (e: 'update:modelValue', value: string | number): void
}
