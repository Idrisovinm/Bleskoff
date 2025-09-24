// Типы для модального окна
export interface ModalProps {
  isOpen: boolean
  title?: string
  message?: string
  type?: 'success' | 'error' | 'info'
}

export interface ModalEmits {
  (e: 'close'): void
  (e: 'update:isOpen', value: boolean): void
}

// Конфигурация модального окна
export interface ModalConfig {
  icon: string
  iconColor: string
  bgColor: string
  borderColor: string
}

// Типы модальных окон
export type ModalType = 'success' | 'error' | 'info'