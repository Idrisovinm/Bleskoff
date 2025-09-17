<script lang="ts" setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import BurgerButton from './BurgerButton.vue'

const navigation = [
  { name: 'Топ компаний', path: '/' },
  { name: 'О нас', path: '/about-us' },
  { name: 'Сотрудничество', path: '/cooperation' },
  { name: 'Контакты', path: '/contacts' },
]

const isMenuOpen = ref(false)
const route = useRoute()

const isScrolled = ref(false)
const headerRef = ref<HTMLElement | null>(null)

const callPhone = () => {
  const phoneNumber = '+7 (903) 429-26-65'
  window.location.href = `tel:${phoneNumber}`
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 30
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

watch(
  () => route.path,
  () => {
    isMenuOpen.value = false
  },
)
</script>

<template>
  <header
    :class="{
      'py-8': !isScrolled,
      'py-4 shadow-lg': isScrolled,
    }"
    class="bg-gradient-to-r from-midnight-blue via-blue-300 to-blue-100 backdrop-blur-md shadow-md fixed w-full top-0 z-50 transition-all duration-300"
    itemscope
    itemtype="https://schema.org/Organization"
    role="banner"
    ref="headerRef"
    aria-label="Главная навигация"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center">
        <!-- Логотип -->
        <router-link
          to="/"
          class="flex items-center space-x-3 group"
          aria-label="BleskOFF - Главная страница"
        >
          <div
            class="w-4 h-4 bg-blue-500 rounded-full group-hover:scale-110 transition duration-300"
          ></div>
          <span
            class="text-2xl font-bold text-white group-hover:text-blue-500 active:text-blue-500 transition duration-300"
          >
            Блеск<span class="text-blue-500">OFF</span>
          </span>
        </router-link>

        <!-- Навигация -->
        <nav class="hidden md:flex items-center space-x-1">
          <router-link
            v-for="item in navigation"
            :key="item.name"
            :to="item.path"
            class="px-4 py-2 text-white hover:text-blue-600 font-medium rounded-lg hover:bg-gray-50/50 transition duration-200"
          >
            {{ item.name }}
          </router-link>
        </nav>

        <!-- Правая часть -->
        <button
          type="button"
          @click="callPhone"
          class="hidden md:block cursor-pointer bg-gradient-to-r from-blue-500 to-blue-600 text-white px-5 py-2.5 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition duration-200 shadow-md hover:shadow-lg"
        >
          Связаться с нами
        </button>

        <!-- Кнопка бургер-меню -->
        <BurgerButton :open="isMenuOpen" @toggle="isMenuOpen = !isMenuOpen" />
      </div>

      <!-- Мобильное меню -->
      <div
        class="md:hidden transition-all duration-500 ease-in-out overflow-hidden"
        :class="isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'"
      >
        <nav class="py-4 space-y-2 border-t border-gray-200/50">
          <router-link
            v-for="item in navigation"
            :key="item.name"
            :to="item.path"
            class="block px-4 py-3 text-white hover:text-blue-600 hover:bg-gray-50/50 active:bg-gray-50/50 rounded-lg transition duration-200 font-medium"
            @click="isMenuOpen = false"
          >
            {{ item.name }}
          </router-link>

          <div class="pt-4 border-t border-gray-200/50">
            <button
              type="button"
              @click="callPhone"
              class="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-3 rounded-lg font-medium transition duration-200 shadow-md hover:shadow-lg"
            >
              Связаться с нами
            </button>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>
