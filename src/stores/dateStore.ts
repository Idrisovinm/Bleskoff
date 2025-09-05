import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useDateStore = defineStore('date', () => {
  // Реактивная дата (можно обновлять при необходимости)
  const currentDate = ref(new Date())

  // Форматированная дата
  const formattedDate = computed(() => {
    return currentDate.value.toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  })

  // Форматированная дата и время
  const formattedDateTime = computed(() => {
    return currentDate.value.toLocaleString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  })

  // Дата в формате для SEO (YYYY-MM-DD)
  const isoDate = computed(() => {
    return currentDate.value.toISOString().split('T')[0]
  })

  // Обновление даты (если нужно)
  const updateDate = (newDate: Date = new Date()) => {
    currentDate.value = newDate
  }

  return {
    currentDate,
    formattedDate,
    formattedDateTime,
    isoDate,
    updateDate,
  }
})
