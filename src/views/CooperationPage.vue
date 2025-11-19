<script setup lang="ts">
import CooperationForm from '@/components/CooperationPage/CooperationForm.vue'
import ContactModal from '@/components/ContactModal.vue'
import { Icon } from '@iconify/vue'
import { useContactStore } from '@/stores/contactStore'
import cooperationHero from '@/assets/photo-1556228453-efd6c1ff04f6.jpg'

const contactStore = useContactStore()

const scrollToForm = () => {
  if (window.location.pathname === '/cooperation') {
    // Если уже на странице cooperation
    const formElement = document.getElementById('form')
    formElement?.scrollIntoView({ behavior: 'smooth' })
  }
}

const openContactModal = () => {
  contactStore.openContactModal()
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
    <!-- Hero Section -->
    <div class="relative min-h-screen overflow-hidden">
      <!-- Background with overlay -->
      <img
        :src="cooperationHero"
        alt=""
        class="absolute inset-0 w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent"></div>

      <!-- Content -->
      <div class="relative z-10 flex items-center justify-center min-h-screen pt-32 lg:pt-40 pb-16">
        <div class="container mx-auto px-4">
          <div class="max-w-5xl mx-auto text-center text-white">
            <!-- Logo and Brand -->
            <div class="flex justify-center items-center mb-8">
              <div
                class="bg-primary text-primary-content p-4 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300"
              >
                <span class="text-4xl font-bold">Блеск<span class="text-white">OFF</span></span>
              </div>
            </div>

            <!-- Main Heading -->
            <h1
              class="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent"
            >
              Сотрудничество
            </h1>

            <p
              class="text-lg sm:text-xl md:text-2xl mb-12 text-blue-100 max-w-3xl mx-auto leading-relaxed"
            >
              Присоединяйтесь к нашей платформе и расширяйте свой бизнес
            </p>

            <!-- Feature Cards -->
            <div class="grid md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
              <div
                class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 group"
              >
                <div
                  class="flex items-center justify-center w-16 h-16 bg-blue-500 rounded-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                >
                  <Icon icon="heroicons:user-group-20-solid" class="w-8 h-8 text-white" />
                </div>
                <h3 class="text-xl sm:text-2xl font-bold mb-4">Новые клиенты</h3>
                <p class="text-blue-100 leading-relaxed">
                  Получите доступ к
                  <span class="text-yellow-300 font-semibold">тысячам потенциальных клиентов</span>
                  и увеличьте свою клиентскую базу в
                  <span class="text-yellow-300 font-semibold">несколько раз</span>.
                </p>
              </div>

              <div
                class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 group"
              >
                <div
                  class="flex items-center justify-center w-16 h-16 bg-green-500 rounded-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                >
                  <Icon icon="heroicons:chart-bar-20-solid" class="w-8 h-8 text-white" />
                </div>
                <h3 class="text-xl sm:text-2xl font-bold mb-4">Рост дохода</h3>
                <p class="text-blue-100 leading-relaxed">
                  Увеличьте свой доход с помощью
                  <span class="text-yellow-300 font-semibold">современной системы</span>
                  подбора заказов и
                  <span class="text-yellow-300 font-semibold">прозрачных условий</span>.
                </p>
              </div>
            </div>

            <!-- Benefits -->
            <div class="flex flex-wrap justify-center gap-4 mb-12">
              <div
                class="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 hover:bg-white/25 transition-all duration-300"
              >
                <span class="flex items-center text-white font-semibold">
                  <Icon
                    icon="heroicons:check-circle-20-solid"
                    class="w-5 h-5 mr-2 text-green-400"
                  />
                  Гибкие условия
                </span>
              </div>
              <div
                class="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 hover:bg-white/25 transition-all duration-300"
              >
                <span class="flex items-center text-white font-semibold">
                  <Icon icon="heroicons:megaphone-20-solid" class="w-5 h-5 mr-2 text-blue-400" />
                  Продвижение услуг
                </span>
              </div>
              <div
                class="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 hover:bg-white/25 transition-all duration-300"
              >
                <span class="flex items-center text-white font-semibold">
                  <Icon
                    icon="heroicons:arrow-trending-up-20-solid"
                    class="w-5 h-5 mr-2 text-yellow-400"
                  />
                  Быстрый старт
                </span>
              </div>
            </div>

            <!-- CTA Button -->
            <button
              @click="scrollToForm"
              class="btn btn-outline btn-lg rounded-full px-8 border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              <Icon icon="heroicons:user-plus-20-solid" class="w-6 h-6 mr-2" />
              Стать партнером
            </button>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon icon="heroicons:chevron-down-20-solid" class="w-8 h-8 text-white/70" />
      </div>
    </div>

    <!-- Main Content -->
    <div class="container mx-auto px-4 py-20">
      <!-- Intro Section -->
      <div class="text-center mb-20">
        <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
          <span class="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
            >БлескOFF</span
          >
          приглашает к сотрудничеству
        </h2>
        <p class="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Присоединяйтесь к нашей платформе и получайте доступ к тысячам потенциальных клиентов.
          Увеличивайте свой доход с помощью современной системы подбора заказов.
        </p>
      </div>

      <!-- Benefits Section -->
      <div
        class="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl shadow-2xl p-12 mb-20"
      >
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 text-center mb-16">
          Преимущества для партнеров
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <!-- Benefit 1 -->
          <div class="text-center group">
            <div
              class="w-24 h-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mb-8 mx-auto shadow-xl group-hover:scale-110 group-hover:shadow-blue-500/25 transition-all duration-300"
            >
              <Icon icon="heroicons:arrow-trending-up-20-solid" class="w-12 h-12 text-white" />
            </div>
            <h3 class="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
              Увеличение клиентской базы
            </h3>
            <p class="text-gray-600 leading-relaxed">
              Доступ к нашей аудитории потенциальных заказчиков и возможность значительно расширить
              свой бизнес
            </p>
          </div>

          <!-- Benefit 2 -->
          <div class="text-center group">
            <div
              class="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center mb-8 mx-auto shadow-xl group-hover:scale-110 group-hover:shadow-green-500/25 transition-all duration-300"
            >
              <Icon icon="heroicons:cog-6-tooth-20-solid" class="w-12 h-12 text-white" />
            </div>
            <h3 class="text-xl sm:text-2xl font-bold text-gray-800 mb-6">Гибкие условия</h3>
            <p class="text-gray-600 leading-relaxed">
              Выгодные тарифы, прозрачная система комиссий и индивидуальный подход к каждому
              партнеру
            </p>
          </div>

          <!-- Benefit 3 -->
          <div class="text-center group">
            <div
              class="w-24 h-24 bg-gradient-to-r from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mb-8 mx-auto shadow-xl group-hover:scale-110 group-hover:shadow-purple-500/25 transition-all duration-300"
            >
              <Icon icon="heroicons:megaphone-20-solid" class="w-12 h-12 text-white" />
            </div>
            <h3 class="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
              Поддержка и продвижение
            </h3>
            <p class="text-gray-600 leading-relaxed">
              Реклама ваших услуг на нашей платформе и полная маркетинговая поддержка
            </p>
          </div>
        </div>
      </div>

      <!-- How It Works Section -->
      <div class="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-12 mb-20">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 text-center mb-16">
          Как стать партнером?
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <!-- Step 1 -->
          <div class="text-center group">
            <div
              class="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto shadow-lg group-hover:scale-110 transition-all duration-300"
            >
              1
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-gray-800 mb-4">Заявка</h3>
            <p class="text-gray-600">Заполните форму заявки на нашем сайте</p>
          </div>

          <!-- Step 2 -->
          <div class="text-center group">
            <div
              class="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto shadow-lg group-hover:scale-110 transition-all duration-300"
            >
              2
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-gray-800 mb-4">Связь</h3>
            <p class="text-gray-600">Менеджер свяжется с вами в течение дня</p>
          </div>

          <!-- Step 3 -->
          <div class="text-center group">
            <div
              class="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto shadow-lg group-hover:scale-110 transition-all duration-300"
            >
              3
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-gray-800 mb-4">Договор</h3>
            <p class="text-gray-600">Подпишем выгодный договор сотрудничества</p>
          </div>

          <!-- Step 4 -->
          <div class="text-center group">
            <div
              class="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto shadow-lg group-hover:scale-110 transition-all duration-300"
            >
              4
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-gray-800 mb-4">Заказы</h3>
            <p class="text-gray-600">Начните получать заказы уже на следующий день</p>
          </div>
        </div>
      </div>

      <!-- Stats Section -->
      <div
        class="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl shadow-2xl p-12 mb-20"
      >
        <div class="stats stats-vertical lg:stats-horizontal w-full bg-transparent shadow-none">
          <div class="stat text-center">
            <div class="stat-figure text-blue-500 mb-4">
              <Icon icon="heroicons:building-office-20-solid" class="w-12 h-12" />
            </div>
            <div class="stat-title text-gray-600 text-lg">Компаний-партнеров</div>
            <div class="stat-value text-blue-600 text-5xl font-bold">150+</div>
            <div class="stat-desc text-gray-500 text-lg">Уже с нами</div>
          </div>

          <div class="stat text-center">
            <div class="stat-figure text-green-500 mb-4">
              <Icon icon="heroicons:users-20-solid" class="w-12 h-12" />
            </div>
            <div class="stat-title text-gray-600 text-lg">Клиентов в месяц</div>
            <div class="stat-value text-green-600 text-5xl font-bold">10K+</div>
            <div class="stat-desc text-gray-500 text-lg">Активная аудитория</div>
          </div>

          <div class="stat text-center">
            <div class="stat-figure text-purple-500 mb-4">
              <Icon icon="heroicons:arrow-trending-up-20-solid" class="w-12 h-12" />
            </div>
            <div class="stat-title text-gray-600 text-lg">Рост заказов</div>
            <div class="stat-value text-purple-600 text-5xl font-bold">40%</div>
            <div class="stat-desc text-gray-500 text-lg">За последний год</div>
          </div>
        </div>
      </div>

      <!-- Form Section -->
      <div
        class="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden"
      >
        <!-- Background decoration -->
        <div class="absolute inset-0 opacity-10">
          <div class="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
          <div
            class="absolute bottom-10 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl"
          ></div>
          <div
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-green-500 rounded-full blur-3xl"
          ></div>
        </div>

        <div class="container mx-auto px-4 relative z-10">
          <div class="text-center mb-16">
            <div
              class="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4"
            >
              <Icon icon="heroicons:document-text-20-solid" class="w-4 h-4 mr-2" />
              Заявка на партнерство
            </div>
            <h2
              class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent mb-6"
            >
              Готовы стать партнером?
            </h2>
            <p class="text-xl text-gray-600 max-w-2xl mx-auto">
              Заполните форму ниже, и мы свяжемся с вами в течение 24 часов
            </p>
          </div>

          <div id="form" class="mx-auto px-4 sm:px-6 lg:px-8">
            <div
              class="bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl p-4 sm:p-6 md:p-8 lg:p-12 hover:shadow-2xl sm:hover:shadow-3xl transition-all duration-500 relative"
            >
              <div
                class="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/10 rounded-2xl sm:rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-300"
              ></div>
              <div class="relative z-10">
                <CooperationForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Contact Modal -->
  <ContactModal />
</template>

<style scoped>
.stats {
  box-shadow: none;
  border: none;
}

.stat {
  border: none;
  background: transparent;
}

/* Дополнительные анимации */
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.group:hover .stat-figure {
  animation: float 2s ease-in-out infinite;
}
</style>
