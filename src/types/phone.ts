// Типы для работы с телефонными номерами

// Интерфейс для пропсов модального окна ввода телефона
export interface PhoneInputModalProps {
  isOpen: boolean
  companyName?: string
}

// Интерфейс для событий модального окна ввода телефона
export interface PhoneInputModalEmits {
  close: []
  submit: [phoneNumber: string]
}

// Тип для реактивной ссылки на строку (для phoneNumber)
export interface PhoneRef {
  value: string
}

// Тип для реактивной ссылки на массив ошибок
export interface ErrorsRef {
  value: string[]
}

// Тип для результата валидации телефонного номера
export type PhoneValidationResult = string[]

// Тип для форматированного телефонного номера
export type FormattedPhoneNumber = string

// Тип для чистого телефонного номера (только цифры)
export type CleanPhoneNumber = string

// Константы для валидации телефонных номеров
export const PHONE_CONSTANTS = {
  // Длина полного номера с кодом страны (7 + 10 цифр)
  FULL_PHONE_LENGTH: 11,
  // Длина номера без кода страны
  PHONE_WITHOUT_COUNTRY_CODE_LENGTH: 10,
  // Код страны России
  RUSSIA_COUNTRY_CODE: '7',
  // Альтернативный код (8 вместо 7)
  ALTERNATIVE_COUNTRY_CODE: '8',
  // Префикс для отображения
  DISPLAY_PREFIX: '+7',
  // Регулярное выражение для извлечения только цифр
  DIGITS_ONLY_REGEX: /\D/g,
} as const

// Сообщения об ошибках валидации
export const PHONE_VALIDATION_MESSAGES = {
  REQUIRED: 'Номер телефона обязателен для заполнения',
  INVALID_COUNTRY_CODE: 'Номер должен начинаться с +7',
  INVALID_LENGTH: 'Номер телефона должен содержать 11 цифр',
  INCOMPLETE: 'Неполный номер телефона',
} as const
