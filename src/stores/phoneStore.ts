import { defineStore } from 'pinia'
import { nextTick } from 'vue'
import type {
  PhoneRef,
  ErrorsRef,
  PhoneValidationResult,
  FormattedPhoneNumber,
  CleanPhoneNumber,
} from '@/types/phone'
import { PHONE_CONSTANTS, PHONE_VALIDATION_MESSAGES } from '@/types/phone'

export const usePhoneStore = defineStore('phone', () => {
  // Валидация номера телефона
  const validatePhone = (phone: string): PhoneValidationResult => {
    const validationErrors: string[] = []

    if (!phone.trim() || phone === PHONE_CONSTANTS.DISPLAY_PREFIX) {
      validationErrors.push(PHONE_VALIDATION_MESSAGES.REQUIRED)
      return validationErrors
    }

    // Убираем все символы кроме цифр
    const cleanPhone = phone.replace(PHONE_CONSTANTS.DIGITS_ONLY_REGEX, '')

    // Проверяем, что номер начинается с 7 и имеет правильную длину
    if (!cleanPhone.startsWith(PHONE_CONSTANTS.RUSSIA_COUNTRY_CODE)) {
      validationErrors.push(PHONE_VALIDATION_MESSAGES.INVALID_COUNTRY_CODE)
      return validationErrors
    }

    if (cleanPhone.length !== PHONE_CONSTANTS.FULL_PHONE_LENGTH) {
      validationErrors.push(PHONE_VALIDATION_MESSAGES.INVALID_LENGTH)
      return validationErrors
    }

    // Проверяем, что после +7 идут 10 цифр
    const phoneDigits = cleanPhone.slice(1) // убираем первую 7
    if (phoneDigits.length !== PHONE_CONSTANTS.PHONE_WITHOUT_COUNTRY_CODE_LENGTH) {
      validationErrors.push(PHONE_VALIDATION_MESSAGES.INCOMPLETE)
      return validationErrors
    }

    // Дополнительная валидация для предотвращения ошибки 1003
    // Проверяем корректность кода оператора (первые 3 цифры после +7)
    const operatorCode = phoneDigits.slice(0, 3)
    
    // Список некорректных кодов операторов
    const invalidCodes = ['000', '111', '222', '333', '444', '555', '666', '777', '888', '999']
    
    if (invalidCodes.includes(operatorCode)) {
      validationErrors.push('Некорректный код оператора')
      return validationErrors
    }

    // Проверяем, что номер не состоит из одинаковых цифр
    const uniqueDigits = new Set(phoneDigits)
    if (uniqueDigits.size === 1) {
      validationErrors.push('Номер не может состоять из одинаковых цифр')
      return validationErrors
    }

    // Проверяем базовые коды мобильных операторов России
    const mobileOperatorCodes = [
      '900', '901', '902', '903', '904', '905', '906', '908', '909', // МТС
      '910', '911', '912', '913', '914', '915', '916', '917', '918', '919', // МТС
      '920', '921', '922', '923', '924', '925', '926', '927', '928', '929', // МегаФон
      '930', '931', '932', '933', '934', '936', '937', '938', '939', // МегаФон
      '950', '951', '952', '953', '954', '955', '956', '958', '960', // Билайн
      '961', '962', '963', '964', '965', '966', '967', '968', '969', // Билайн
      '970', '971', '977', '978', '980', '981', '982', '983', '984', '985', // Билайн
      '987', '988', '989', '991', '992', '993', '994', '995', '996', '997', '999' // Другие
    ]

    if (!mobileOperatorCodes.includes(operatorCode)) {
      validationErrors.push('Введите корректный номер мобильного телефона')
      return validationErrors
    }

    return validationErrors
  }

  // Форматирование номера телефона с маской +7 (___) ___-__-__
  const formatPhoneNumber = (value: string): FormattedPhoneNumber => {
    // Если передана пустая строка или только пробелы, возвращаем пустую строку
    if (!value || !value.trim()) {
      return ''
    }

    // Убираем все символы кроме цифр
    let cleaned = value.replace(PHONE_CONSTANTS.DIGITS_ONLY_REGEX, '')

    // Если после очистки ничего не осталось, возвращаем пустую строку
    if (cleaned.length === 0) {
      return ''
    }

    // Если номер начинается с 8, заменяем на 7
    if (cleaned.startsWith(PHONE_CONSTANTS.ALTERNATIVE_COUNTRY_CODE)) {
      cleaned = PHONE_CONSTANTS.RUSSIA_COUNTRY_CODE + cleaned.slice(1)
    }

    // Если номер не начинается с 7, добавляем 7
    if (!cleaned.startsWith(PHONE_CONSTANTS.RUSSIA_COUNTRY_CODE)) {
      cleaned = PHONE_CONSTANTS.RUSSIA_COUNTRY_CODE + cleaned
    }

    // Ограничиваем длину до 11 цифр (7 + 10 цифр номера)
    if (cleaned.length > PHONE_CONSTANTS.FULL_PHONE_LENGTH) {
      cleaned = cleaned.slice(0, PHONE_CONSTANTS.FULL_PHONE_LENGTH)
    }

    // Если только одна цифра 7, не показываем +7, чтобы placeholder был виден
    if (cleaned === PHONE_CONSTANTS.RUSSIA_COUNTRY_CODE) {
      return ''
    }

    // Применяем маску +7 (___) ___-__-__
    let formatted = PHONE_CONSTANTS.DISPLAY_PREFIX

    if (cleaned.length > 1) {
      const digits = cleaned.slice(1) // убираем первую 7

      if (digits.length > 0) {
        formatted += ' ('
        formatted += digits.slice(0, 3)

        if (digits.length >= 3) {
          formatted += ') '
          formatted += digits.slice(3, 6)

          if (digits.length >= 6) {
            formatted += '-'
            formatted += digits.slice(6, 8)

            if (digits.length >= 8) {
              formatted += '-'
              formatted += digits.slice(8, 10)
            }
          }
        }
      }
    }

    return formatted
  }

  // Обработка ввода телефона
  const handlePhoneInput = (event: Event, phoneNumber: PhoneRef, errors?: ErrorsRef) => {
    const target = event.target as HTMLInputElement
    const cursorPosition = target.selectionStart || 0
    const oldValue = phoneNumber.value
    const newValue = target.value

    // Если пользователь удаляет символы
    if (newValue.length < oldValue.length) {
      // Получаем только цифры из старого и нового значения
      const oldDigits = oldValue.replace(/\D/g, '')
      const newDigits = newValue.replace(/\D/g, '')

      // Если удалили все цифры, очищаем поле
      if (newDigits.length === 0 || newDigits === PHONE_CONSTANTS.RUSSIA_COUNTRY_CODE) {
        phoneNumber.value = ''
        return
      }

      // Если количество цифр уменьшилось, форматируем оставшиеся цифры
      if (newDigits.length < oldDigits.length) {
        const formatted = formatPhoneNumber(newDigits)
        phoneNumber.value = formatted
      } else {
        // Если количество цифр не изменилось, но общая длина уменьшилась,
        // значит удалили символ форматирования - удаляем последнюю цифру
        const reducedDigits = newDigits.slice(0, -1)
        if (reducedDigits.length === 0 || reducedDigits === PHONE_CONSTANTS.RUSSIA_COUNTRY_CODE) {
          phoneNumber.value = ''
        } else {
          const formatted = formatPhoneNumber(reducedDigits)
          phoneNumber.value = formatted
        }
      }
    } else {
      // Обычное форматирование при добавлении символов
      const formatted = formatPhoneNumber(newValue)
      phoneNumber.value = formatted
    }

    // Очищаем ошибки при вводе
    if (errors && errors.value.length > 0) {
      errors.value = []
    }
  }

  // Обработка клавиш Delete/Backspace
  const handleKeyDown = (event: KeyboardEvent, phoneNumber: PhoneRef, errors?: ErrorsRef) => {
    const target = event.target as HTMLInputElement
    const cursorPosition = target.selectionStart || 0
    const currentValue = phoneNumber.value

    // Обрабатываем только Backspace и Delete
    if (event.key === 'Backspace' || event.key === 'Delete') {
      // Если поле пустое, ничего не делаем
      if (!currentValue) return

      // Определяем символ для удаления
      const charAtCursor =
        event.key === 'Backspace' ? currentValue[cursorPosition - 1] : currentValue[cursorPosition]

      // Если это символ форматирования (скобки, дефис, пробел) или курсор на нем
      if (charAtCursor && /[\s\-\(\)]/.test(charAtCursor)) {
        event.preventDefault()

        // Получаем все цифры из текущего значения
        const digits = currentValue.replace(/\D/g, '')

        // Определяем, сколько цифр нужно удалить в зависимости от позиции курсора
        let digitsToRemove = 1

        // Если курсор находится в начале номера после +7, удаляем все
        if (cursorPosition <= 3) {
          phoneNumber.value = ''
          return
        }

        // Удаляем нужное количество цифр
        const newDigits = digits.slice(0, -digitsToRemove)

        // Если цифр не осталось или только "7", очищаем поле
        if (newDigits.length === 0 || newDigits === PHONE_CONSTANTS.RUSSIA_COUNTRY_CODE) {
          phoneNumber.value = ''
        } else {
          // Форматируем оставшиеся цифры
          const formatted = formatPhoneNumber(newDigits)
          phoneNumber.value = formatted

          // Устанавливаем курсор в правильную позицию после форматирования
          nextTick(() => {
            const newCursorPos = Math.min(cursorPosition - 1, formatted.length)
            target.setSelectionRange(newCursorPos, newCursorPos)
          })
        }

        // Очищаем ошибки
        if (errors && errors.value.length > 0) {
          errors.value = []
        }
      }
    }
  }

  // Получение чистого номера (только цифры)
  const getCleanPhoneNumber = (formattedPhone: FormattedPhoneNumber): CleanPhoneNumber => {
    return formattedPhone.replace(PHONE_CONSTANTS.DIGITS_ONLY_REGEX, '')
  }

  // Проверка, является ли номер полным
  const isPhoneComplete = (phone: string): boolean => {
    const cleanPhone = getCleanPhoneNumber(phone)
    return (
      cleanPhone.length === PHONE_CONSTANTS.FULL_PHONE_LENGTH &&
      cleanPhone.startsWith(PHONE_CONSTANTS.RUSSIA_COUNTRY_CODE)
    )
  }

  return {
    validatePhone,
    formatPhoneNumber,
    handlePhoneInput,
    handleKeyDown,
    getCleanPhoneNumber,
    isPhoneComplete,
  }
})
