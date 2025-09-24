<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref, watch, computed } from 'vue'
import type { ModalProps, ModalEmits, ModalConfig } from '@/types/modal'

const props = withDefaults(defineProps<ModalProps>(), {
  title: 'Успешно!',
  message: 'Ваша заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.',
  type: 'success',
})

const emit = defineEmits<ModalEmits>()

const modalRef = ref<HTMLDialogElement>()

// Следим за изменением isOpen и управляем модальным окном
watch(
  () => props.isOpen,
  (newValue) => {
    if (newValue) {
      modalRef.value?.showModal()
    } else {
      modalRef.value?.close()
    }
  },
)

const closeModal = () => {
  emit('update:isOpen', false)
  emit('close')
}

// Закрытие по клику на backdrop
const handleBackdropClick = (event: MouseEvent) => {
  if (event.target === modalRef.value) {
    closeModal()
  }
}

// Получаем иконку и цвета в зависимости от типа
const config = computed((): ModalConfig => {
  switch (props.type) {
    case 'success':
      return {
        icon: 'heroicons:check-circle',
        iconColor: 'text-blue-600',
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-100',
      }
    case 'error':
      return {
        icon: 'heroicons:x-mark',
        iconColor: 'text-red-500',
        bgColor: 'bg-red-50',
        borderColor: 'border-red-200',
      }
    case 'info':
      return {
        icon: 'heroicons:information-circle',
        iconColor: 'text-blue-500',
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-100',
      }
    default:
      return {
        icon: 'heroicons:check-circle',
        iconColor: 'text-blue-600',
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-100',
      }
  }
})
</script>

<template>
  <dialog ref="modalRef" class="modal modal-bottom sm:modal-middle" @click="handleBackdropClick">
    <div class="modal-box relative max-w-md mx-auto">
      <!-- Кнопка закрытия -->
      <button
        @click="closeModal"
        class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 hover:bg-blue-100 hover:text-blue-700 text-gray-500"
      >
        <Icon icon="heroicons:x-mark" class="w-4 h-4" />
      </button>

      <!-- Иконка с анимацией -->
      <div class="flex justify-center mb-6">
        <div
          :class="[
            'w-20 h-20 rounded-full flex items-center justify-center border-2 animate-bounce',
            config.bgColor,
            config.borderColor,
          ]"
        >
          <Icon :icon="config.icon" :class="['w-10 h-10', config.iconColor]" />
        </div>
      </div>

      <!-- Заголовок -->
      <h3 class="font-bold text-xl sm:text-2xl text-center tex mb-4">
        {{ title }}
      </h3>

      <!-- Сообщение -->
      <p class="text-white text-center mb-8 leading-relaxed">
        {{ message }}
      </p>

      <!-- Кнопки действий -->
      <div class="modal-action justify-center">
        <button @click="closeModal" class="btn btn-primary btn-wide rounded-full">
          <Icon icon="heroicons:hand-thumb-up" class="w-5 h-5 mr-2" />
          Понятно
        </button>
      </div>

      <!-- Декоративные элементы -->
      <div
        class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-2xl"
      ></div>
    </div>

    <!-- Backdrop с анимацией -->
    <form method="dialog" class="modal-backdrop bg-black/50">
      <button @click="closeModal">close</button>
    </form>
  </dialog>
</template>

<style scoped>
/* Дополнительные анимации */
.modal-box {
  animation: modalSlideIn 0.3s ease-out;
}

@keyframes modalSlideIn {
  from {
    opacity: 0;
    transform: translateY(-20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Анимация для иконки */
.animate-bounce {
  animation: bounce 1s infinite;
}

@keyframes bounce {
  0%,
  20%,
  53%,
  80%,
  100% {
    transform: translate3d(0, 0, 0);
  }
  40%,
  43% {
    transform: translate3d(0, -8px, 0);
  }
  70% {
    transform: translate3d(0, -4px, 0);
  }
  90% {
    transform: translate3d(0, -2px, 0);
  }
}

/* Плавное появление backdrop */
.modal-backdrop {
  animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
