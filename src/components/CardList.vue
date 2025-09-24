<script setup lang="ts">
import { ref, computed, onMounted, watch, defineAsyncComponent } from 'vue'
import SkeletonCard from './SkeletonCard.vue'
import CompanyCard from './CompanyCard.vue'
import { companyCard } from '@/cards'
import { debounce } from 'lodash-es'
import { Icon } from '@iconify/vue'
import type { Company } from '@/types/company'
import { useVoximplantStore } from '@/stores/voximplantStore'
import { useContactStore } from '@/stores/contactStore'

// Асинхронный импорт модальных окон
const PhoneInputModal = defineAsyncComponent(() => import('./PhoneInputModal.vue'))
const SuccessModal = defineAsyncComponent(() => import('./SuccessModal.vue'))
const ContactModal = defineAsyncComponent(() => import('./ContactModal.vue'))

const voxStore = useVoximplantStore()
const contactStore = useContactStore()
const skeletonCount = ref(6)
const isLoading = ref(true)
const searchQuery = ref('')

const selectedSort = ref<'asc' | 'desc' | null>(null)

// Состояние для PhoneInputModal
const showPhoneModal = ref(false)
const currentCompanyPhone = ref('')
const currentCompanyName = ref('')

// Состояние для SuccessModal
const showSuccessModal = ref(false)
const successModalType = ref<'success' | 'error'>('success')
const successModalTitle = ref('')
const successModalMessage = ref('')

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
    console.log('Loading finished')
  }, 2000)
})

const debouncedSearch = debounce((value: string) => {
  // Удаляем пробелы в начале и конце
  const trimmedValue = value.trim()
  searchQuery.value = trimmedValue
  console.log('Search query:', trimmedValue)
}, 300)

const filteredCompanies = computed(() => {
  const searchLower = searchQuery.value.toLowerCase()
  const sortType = selectedSort.value

  let filtered = companyCard.filter((company: Company) => {
    return (
      company.name.toLowerCase().includes(searchLower) ||
      company.services.some((service) => service.toLowerCase().includes(searchLower))
    )
  })

  if (sortType) {
    filtered = [...filtered].sort((a, b) => {
      const result = sortType === 'asc' ? a.price - b.price : b.price - a.price
      return result
    })
  }

  return filtered
})

const handleSortClick = (sortType: 'asc' | 'desc' | null) => {
  selectedSort.value = sortType
}

const callPhone = () => {
  const phoneNumber = '+7 (903) 429-26-65'
  window.location.href = `tel:${phoneNumber}`
}

const openContactModal = () => {
  contactStore.openContactModal()
}

const closeContactModal = () => {
  contactStore.closeContactModal()
}

// Обработка события открытия модального окна от CompanyCard
const handleOpenPhoneModal = (companyPhone: string, companyName: string) => {
  console.log('handleOpenPhoneModal - received companyName:', companyName)
  console.log('handleOpenPhoneModal - received companyPhone:', companyPhone)
  
  currentCompanyPhone.value = companyPhone
  currentCompanyName.value = companyName
  showPhoneModal.value = true
  
  console.log('handleOpenPhoneModal - set currentCompanyName:', currentCompanyName.value)
}

// Обработка закрытия модального окна
const handleClosePhoneModal = () => {
  showPhoneModal.value = false
  currentCompanyPhone.value = ''
  currentCompanyName.value = ''
}

// Обработка отправки номера телефона
const handlePhoneSubmit = async (phoneNumber: string) => {
  // Сохраняем название компании перед закрытием модального окна
  const companyName = currentCompanyName.value
  const companyPhone = currentCompanyPhone.value
  
  console.log('handlePhoneSubmit - companyName:', companyName)
  console.log('handlePhoneSubmit - companyPhone:', companyPhone)
  
  // Закрываем модальное окно
  handleClosePhoneModal()

  // Выполняем звонок с введенным номером
  const success = await voxStore.makeCall(
    companyPhone,
    companyName,
    phoneNumber,
  )

  // Показываем результат
  if (success) {
    handleShowResult(
      'success',
      'Звонок инициирован!',
      `Звонок на ваш номер ${phoneNumber} будет выполнен в течение нескольких секунд. После ответа вас соединят с компанией "${companyName}".`,
    )
  } else {
    handleShowResult(
      'error',
      'Ошибка при инициации звонка',
      voxStore.error ||
        'Не удалось инициировать звонок. Проверьте правильность номера и попробуйте позже.',
    )
  }
}

// Обработка показа результата заказа
const handleShowResult = (type: 'success' | 'error', title: string, message: string) => {
  successModalType.value = type
  successModalTitle.value = title
  successModalMessage.value = message
  showSuccessModal.value = true
}
</script>

<template>
  <div class="container max-sm:px-3 px-4 mx-auto">
    <!-- Заголовок секции -->
    <div class="text-center mb-8 sm:mb-12">
      <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 px-2">
        Выберите лучшую компанию
      </h2>
      <p class="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
        Используйте фильтры и поиск, чтобы найти идеального исполнителя для ваших задач
      </p>
    </div>

    <!-- Поиск и сортировка -->
    <div
      class="card bg-gradient-to-br from-white via-white to-blue-50/30 shadow-lg border border-gray-100/50 mb-6 sm:mb-8 rounded-2xl backdrop-blur-sm"
    >
      <div class="card-body p-4 sm:p-6">
        <!-- Поле поиска -->
        <div class="relative mb-4 sm:mb-6">
          <div class="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none z-10">
            <svg
              class="w-4 h-4 sm:w-5 sm:h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
          <input
            :value="searchQuery"
            @input="debouncedSearch(($event.target as HTMLInputElement).value)"
            type="text"
            placeholder="Поиск компаний и услуг..."
            class="input input-bordered w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 bg-white border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 rounded-xl placeholder:text-gray-400 text-gray-800 text-sm sm:text-base"
          />
        </div>

        <!-- Кнопки сортировки -->
        <div class="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-4 sm:mb-6">
          <div class="flex gap-2 w-full sm:w-auto">
            <button
              @click="handleSortClick('asc')"
              :class="[
                'btn btn-sm sm:btn-md px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-md flex-1 sm:flex-none text-xs sm:text-sm',
                selectedSort === 'asc'
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0 shadow-lg shadow-blue-200'
                  : 'bg-white text-blue-600 border border-blue-200 hover:bg-blue-50 hover:border-blue-300 hover:shadow-lg',
              ]"
            >
              <svg class="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 11l5-5m0 0l5 5m-5-5v12"
                />
              </svg>
              Дешевые
            </button>
            <button
              @click="handleSortClick('desc')"
              :class="[
                'btn btn-sm sm:btn-md px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-md flex-1 sm:flex-none text-xs sm:text-sm',
                selectedSort === 'desc'
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white border-0 shadow-lg shadow-blue-200'
                  : 'bg-white text-blue-600 border border-blue-200 hover:bg-blue-50 hover:border-blue-300 hover:shadow-lg',
              ]"
            >
              <svg class="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 13l-5 5m0 0l-5-5m5 5V6"
                />
              </svg>
              Дорогие
            </button>
          </div>
        </div>

        <!-- Активные фильтры -->
        <div v-if="searchQuery || selectedSort" class="space-y-3 sm:space-y-4">
          <div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
            <h4 class="font-medium text-gray-600 text-sm sm:text-base">Активные фильтры:</h4>
            <button
              @click="((searchQuery = ''), handleSortClick(null))"
              class="btn btn-sm bg-gradient-to-r from-red-50 to-red-100 border border-red-200 text-red-600 hover:from-red-100 hover:to-red-200 hover:border-red-300 hover:text-red-700 hover:scale-105 transition-all duration-200 rounded-xl shadow-md font-medium w-full sm:w-auto"
            >
              <svg class="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
              Сбросить все
            </button>
          </div>

          <div class="flex flex-wrap gap-2">
            <div
              v-if="searchQuery"
              class="badge bg-blue-50 text-blue-700 border-blue-200 px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm"
            >
              Поиск: "{{ searchQuery }}"
              <button @click="searchQuery = ''" class="ml-1 sm:ml-2 hover:text-red-600">
                <Icon icon="heroicons:x-mark-20-solid" class="w-3 h-3" />
              </button>
            </div>

            <div
              v-if="selectedSort === 'asc'"
              class="badge bg-blue-50 text-blue-700 border-blue-200 px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm"
            >
              Дешевые
              <button @click="handleSortClick(null)" class="ml-1 sm:ml-2 hover:text-red-600">
                <Icon icon="heroicons:x-mark-20-solid" class="w-3 h-3" />
              </button>
            </div>

            <div
              v-if="selectedSort === 'desc'"
              class="badge bg-blue-50 text-blue-700 border-blue-200 px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm"
            >
              Дорогие
              <button @click="handleSortClick(null)" class="ml-1 sm:ml-2 hover:text-red-600">
                <Icon icon="heroicons:x-mark-20-solid" class="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Результаты -->
    <div class="mb-6 sm:mb-8">
      <div class="flex items-center justify-between">
        <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 sm:p-6 rounded-2xl shadow-lg border border-blue-100 backdrop-blur-sm w-full">
          <div class="flex items-center space-x-2 sm:space-x-3">
            <div class="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-pulse"></div>
            <h3 class="text-lg sm:text-xl font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
              Найдено компаний: 
              <span class="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-extrabold text-xl sm:text-2xl ml-1 sm:ml-2">
                {{ filteredCompanies.length }}
              </span>
            </h3>
          </div>
        </div>
      </div>
    </div>

    <!-- Карточки компаний -->
    <div class="grid grid-cols-1 gap-6 sm:gap-8">
      <template v-if="isLoading">
        <SkeletonCard
          v-for="n in skeletonCount"
          :key="`skeleton-${n}`"
          class="transition-opacity duration-300"
        />
      </template>

      <template v-else>
        <CompanyCard
          v-for="company in filteredCompanies"
          :key="company.id"
          :company="company"
          class="transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-2xl"
          @openPhoneModal="handleOpenPhoneModal"
        />

        <!-- Сообщение если ничего не найдено -->
        <div
          v-if="filteredCompanies.length === 0"
          class="text-center py-20 bg-white rounded-3xl shadow-xl border border-gray-200"
        >
          <div
            class="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <Icon icon="heroicons:magnifying-glass-20-solid" class="w-12 h-12 text-gray-400" />
          </div>
          <h3 class="text-xl sm:text-2xl font-bold text-gray-700 mb-3">Ничего не найдено</h3>
          <p class="text-gray-500 text-lg mb-6">Попробуйте изменить параметры поиска или фильтры</p>
          <button
            @click="((searchQuery = ''), handleSortClick(null))"
            class="btn btn-primary bg-blue-500 border-blue-500 hover:bg-blue-600 text-white rounded-full px-6"
          >
            <Icon icon="heroicons:arrow-path-20-solid" class="w-4 h-4 mr-2" />
            Сбросить фильтры
          </button>
        </div>
      </template>
    </div>

    <!-- CTA Section -->
    <div
      class="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 sm:py-16 lg:py-20 rounded-2xl sm:rounded-3xl mt-12 sm:mt-16 shadow-2xl"
    >
      <div class="container mx-auto px-4 sm:px-6 text-center">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
            Не нашли подходящую компанию?
          </h2>
          <p class="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 opacity-90 leading-relaxed px-2">
            Мы поможем подобрать идеальный вариант именно для ваших нужд. Наши эксперты
            проконсультируют вас бесплатно!
          </p>
          <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <button
              @click="callPhone"
              class="btn btn-md sm:btn-lg rounded-full px-6 sm:px-8 bg-white text-blue-600 border-white hover:bg-blue-50 hover:border-blue-50 shadow-xl w-full sm:w-auto"
            >
              <Icon icon="heroicons:phone-20-solid" class="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Позвонить сейчас
            </button>
            <button
              @click="openContactModal"
              class="btn btn-outline btn-md sm:btn-lg rounded-full px-6 sm:px-8 border-white text-white hover:bg-white hover:text-blue-600 w-full sm:w-auto"
            >
              <Icon icon="heroicons:chat-bubble-left-20-solid" class="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Получить консультацию
            </button>
          </div>
          <p class="text-xs sm:text-sm opacity-75 mt-3 sm:mt-4">
            <Icon icon="heroicons:clock-20-solid" class="w-3 h-3 sm:w-4 sm:h-4 inline mr-1" />
            Работаем 24/7 • Звонок бесплатный
          </p>
        </div>
      </div>
    </div>

    <!-- Модальное окно для ввода номера телефона -->
    <PhoneInputModal
      :isOpen="showPhoneModal"
      :companyName="currentCompanyName"
      @close="handleClosePhoneModal"
      @submit="handlePhoneSubmit"
    />

    <!-- Модальное окно для результата заказа -->
    <SuccessModal
      :isOpen="showSuccessModal"
      :type="successModalType"
      :title="successModalTitle"
      :message="successModalMessage"
      @close="showSuccessModal = false"
    />

    <!-- Модальное окно для выбора способа связи -->
    <ContactModal />
  </div>
</template>

<style scoped>
.join-horizontal > :not(:first-child):not(:last-child) {
  border-radius: 0;
}
.join-horizontal > :first-child:not(:last-child) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.join-horizontal > :last-child:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
</style>
