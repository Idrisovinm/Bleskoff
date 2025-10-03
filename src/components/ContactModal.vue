<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useContactStore } from '@/stores/contactStore'

const contactStore = useContactStore()
</script>

<template>
  <!-- Modal Overlay -->
  <div
    v-if="contactStore.isContactModalOpen"
    class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    @click.self="contactStore.closeContactModal"
  >
    <!-- Modal Container -->
    <div
      class="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-auto transform transition-all duration-300 scale-100"
      @click.stop
    >
      <!-- Header -->
      <div class="relative p-6 border-b border-gray-100">
        <button
          @click="contactStore.closeContactModal"
          class="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
        >
          <Icon icon="heroicons:x-mark" class="w-5 h-5 text-gray-500" />
        </button>

        <div class="flex items-center space-x-3">
          <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <Icon icon="heroicons:chat-bubble-left-right" class="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 class="text-xl font-bold text-gray-900">Выберите способ связи</h3>
            <p class="text-sm text-gray-600">Мы ответим в течение 5 минут</p>
          </div>
        </div>
      </div>

      <!-- Content -->
      <div class="p-6">
        <div class="space-y-4">
          <div
            v-for="method in contactStore.contactMethods"
            :key="method.name"
            @click="contactStore.handleContactClick(method.link)"
            class="group cursor-pointer p-4 rounded-xl border-2 border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-lg hover:scale-105"
            :class="method.bgGradient"
          >
            <div class="flex items-center space-x-4">
              <div 
                class="w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-300"
                :class="`bg-gradient-to-r ${method.gradient} ${method.hoverGradient}`"
              >
                <Icon :icon="method.icon" class="w-6 h-6" />
              </div>
              <div class="flex-1">
                <h4 class="font-semibold text-gray-900 group-hover:text-gray-800 transition-colors">
                  {{ method.name }}
                </h4>
                <p class="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
                  {{ method.description }}
                </p>
              </div>
              <Icon 
                icon="heroicons:arrow-top-right-on-square" 
                class="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" 
              />
            </div>
          </div>
        </div>

        <!-- Info Block -->
        <div class="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
          <div class="flex items-start space-x-3">
            <Icon icon="heroicons:information-circle" class="w-5 h-5 text-blue-600 mt-0.5" />
            <div class="text-sm text-blue-800">
              <p class="font-medium mb-1">Преимущества обращения:</p>
              <ul class="list-disc list-inside space-y-1 text-blue-700">
                <li>Бесплатная консультация</li>
                <li>Быстрый ответ специалиста</li>
                <li>Индивидуальный подход</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="p-6 border-t border-gray-100 text-center">
        <p class="text-sm text-gray-500">
          <Icon icon="heroicons:clock" class="w-4 h-4 inline mr-1" />
          Работаем 24/7 • Ответим в любое время
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Анимация появления модального окна */
.fixed {
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

/* Анимация появления модального контейнера */
.bg-white {
  animation: modalSlideIn 0.3s ease-out;
}

@keyframes modalSlideIn {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(-20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
</style>