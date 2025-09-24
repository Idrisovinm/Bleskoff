import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useContactStore = defineStore('contact', () => {
  // Состояние модального окна
  const isContactModalOpen = ref(false)

  // Методы связи
  const contactMethods = [
    {
      name: 'Позвонить',
      icon: 'heroicons:phone',
      description: 'Прямой звонок специалисту',
      link: 'tel:+79034292665',
      gradient: 'from-emerald-500 to-emerald-600',
      bgGradient: 'from-emerald-50 to-emerald-100',
      hoverGradient: 'hover:from-emerald-600 hover:to-emerald-700',
    },
    {
      name: 'WhatsApp',
      icon: 'logos:whatsapp-icon',
      description: 'Быстрое общение в мессенджере',
      link: 'https://wa.me/79034292665',
      gradient: 'from-green-500 to-green-600',
      bgGradient: 'from-green-50 to-green-100',
      hoverGradient: 'hover:from-green-600 hover:to-green-700',
    },
    {
      name: 'Telegram',
      icon: 'logos:telegram',
      description: 'Удобное общение в Telegram',
      link: 'https://t.me/+79034292665',
      gradient: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100',
      hoverGradient: 'hover:from-blue-600 hover:to-blue-700',
    },
    {
      name: 'Max',
      icon: 'heroicons:user-circle-20-solid',
      description: 'Персональная консультация',
      link: 'https://max.ru/u/f9LHodD0cOJRJX6l9Pim3S7F_nmsxfWUUceQxu0qH5qH1uQ3gecVvZFPed0',
      gradient: 'from-purple-500 to-purple-600',
      bgGradient: 'from-purple-50 to-purple-100',
      hoverGradient: 'hover:from-purple-600 hover:to-purple-700',
    },
  ]

  // Actions
  const openContactModal = () => {
    isContactModalOpen.value = true
  }

  const closeContactModal = () => {
    isContactModalOpen.value = false
  }

  const handleContactClick = (link: string) => {
    if (link.startsWith('tel:')) {
      // Для звонков используем прямую ссылку
      window.location.href = link
    } else {
      // Для остальных способов связи открываем в новой вкладке
      window.open(link, '_blank')
    }
    // Закрываем модальное окно после выбора
    closeContactModal()
  }

  return {
    // State
    isContactModalOpen,
    contactMethods,

    // Actions
    openContactModal,
    closeContactModal,
    handleContactClick,
  }
})
