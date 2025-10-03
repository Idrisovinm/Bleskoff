<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
    <!-- Hero Section -->
    <div class="relative min-h-screen overflow-hidden">
      <!-- Background with overlay -->
      <div
        class="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style="background-image: url('/src/assets/towfiqu-barbhuiya--9gPKrsbGmc-unsplash.jpg')"
      ></div>
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
              class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent"
            >
              О нашей компании
            </h1>

            <p class="text-xl md:text-2xl mb-12 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Революционная платформа для поиска клининговых услуг
            </p>

            <!-- Feature Cards -->
            <div class="grid md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
              <div
                class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300"
              >
                <div
                  class="flex items-center justify-center w-16 h-16 bg-blue-500 rounded-2xl mx-auto mb-4"
                >
                  <Icon icon="heroicons:sparkles-20-solid" class="w-8 h-8 text-white" />
                </div>
                <h3 class="text-2xl font-bold mb-4">Инновационный подход</h3>
                <p class="text-blue-100 leading-relaxed">
                  <span class="font-bold text-white">БлескOFF</span> – это инновационная платформа,
                  созданная для того, чтобы сделать выбор клининговых услуг
                  <span class="text-yellow-300 font-semibold">простым</span>,
                  <span class="text-yellow-300 font-semibold">быстрым</span> и
                  <span class="text-yellow-300 font-semibold">надёжным</span>.
                </p>
              </div>

              <div
                class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300"
              >
                <div
                  class="flex items-center justify-center w-16 h-16 bg-green-500 rounded-2xl mx-auto mb-4"
                >
                  <Icon icon="heroicons:building-office-2-20-solid" class="w-8 h-8 text-white" />
                </div>
                <h3 class="text-2xl font-bold mb-4">Лучшие партнеры</h3>
                <p class="text-blue-100 leading-relaxed">
                  Мы объединяем
                  <span class="text-yellow-300 font-semibold">лучшие клининговые компании</span>
                  в одном месте, чтобы вы могли найти
                  <span class="text-yellow-300 font-semibold">идеальное решение</span>
                  для своих нужд
                  <span class="text-yellow-300 font-semibold">без лишних хлопот</span>.
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
                  Гарантия качества
                </span>
              </div>
              <div
                class="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 hover:bg-white/25 transition-all duration-300"
              >
                <span class="flex items-center text-white font-semibold">
                  <Icon icon="heroicons:star-20-solid" class="w-5 h-5 mr-2 text-yellow-400" />
                  5-звездочный сервис
                </span>
              </div>
              <div
                class="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 hover:bg-white/25 transition-all duration-300"
              >
                <span class="flex items-center text-white font-semibold">
                  <Icon
                    icon="heroicons:rocket-launch-20-solid"
                    class="w-5 h-5 mr-2 text-blue-400"
                  />
                  Быстрый подбор
                </span>
              </div>
            </div>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                @click="$router.push('/')"
                class="btn btn-lg rounded-full px-8 bg-gradient-to-r from-blue-500 to-blue-600 border-blue-500 text-white hover:from-blue-600 hover:to-blue-700 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Icon icon="heroicons:magnifying-glass-20-solid" class="w-6 h-6 mr-2" />
                Найти услугу сейчас
              </button>
              <button
                @click="$router.push('/cooperation')"
                class="btn btn-outline btn-lg rounded-full px-8 border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                <Icon icon="heroicons:user-plus-20-solid" class="w-6 h-6 mr-2" />
                Стать партнером
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon icon="heroicons:chevron-down-20-solid" class="w-8 h-8 text-white/70" />
      </div>
    </div>

    <!-- Statistics Section -->
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
            <Icon icon="heroicons:chart-bar-20-solid" class="w-4 h-4 mr-2" />
            Наши достижения
          </div>
          <h2
            class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent mb-6"
          >
            Цифры, которые говорят сами за себя
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Мы гордимся результатами нашей работы и доверием клиентов
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <!-- Статистика 1 -->
          <div class="group relative">
            <div
              class="bg-white/80 backdrop-blur-sm border border-white/50 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-white/90"
            >
              <div
                class="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>
              <div class="relative z-10 text-center">
                <div
                  class="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                >
                  <Icon icon="heroicons:building-office-2-20-solid" class="w-8 h-8 text-white" />
                </div>
                <div
                  class="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-3"
                >
                  150+
                </div>
                <div class="text-xl font-semibold text-gray-800 mb-2">Компаний в базе</div>
                <div class="text-gray-600">Проверенные исполнители</div>
                <div
                  class="mt-4 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                ></div>
              </div>
            </div>
          </div>

          <!-- Статистика 2 -->
          <div class="group relative">
            <div
              class="bg-white/80 backdrop-blur-sm border border-white/50 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-white/90"
            >
              <div
                class="absolute inset-0 bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>
              <div class="relative z-10 text-center">
                <div
                  class="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                >
                  <Icon icon="heroicons:users-20-solid" class="w-8 h-8 text-white" />
                </div>
                <div
                  class="text-5xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent mb-3"
                >
                  500+
                </div>
                <div class="text-xl font-semibold text-gray-800 mb-2">Довольных клиентов</div>
                <div class="text-gray-600">За этот год</div>
                <div
                  class="mt-4 h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                ></div>
              </div>
            </div>
          </div>

          <!-- Статистика 3 -->
          <div class="group relative">
            <div
              class="bg-white/80 backdrop-blur-sm border border-white/50 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-white/90"
            >
              <div
                class="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>
              <div class="relative z-10 text-center">
                <div
                  class="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                >
                  <Icon icon="heroicons:clock-20-solid" class="w-8 h-8 text-white" />
                </div>
                <div
                  class="text-5xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent mb-3"
                >
                  15мин
                </div>
                <div class="text-xl font-semibold text-gray-800 mb-2">Среднее время подбора</div>
                <div class="text-gray-600">Вместо часов поисков</div>
                <div
                  class="mt-4 h-1 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Additional info -->
        <div class="text-center mt-16">
          <div
            class="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Icon icon="heroicons:trophy-20-solid" class="w-5 h-5 mr-2" />
            Лидер рынка клининговых услуг
          </div>
        </div>
      </div>
    </div>

    <!-- Why Choose Us Section -->
    <div
      class="py-20 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/50 relative overflow-hidden"
    >
      <!-- Background decoration -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div
          class="absolute bottom-20 right-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl"
        ></div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center mb-16">
          <div
            class="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4"
          >
            <Icon icon="heroicons:star-20-solid" class="w-4 h-4 mr-2" />
            Наши преимущества
          </div>
          <h2
            class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent mb-6"
          >
            Почему выбирают нас?
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы создали платформу, которая решает все проблемы поиска клининговых услуг
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <!-- Преимущество 1 -->
          <div class="group relative">
            <div
              class="bg-white/80 backdrop-blur-sm border border-white/50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2"
            >
              <div
                class="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>
              <div class="relative z-10">
                <div
                  class="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                >
                  <Icon icon="heroicons:clock-20-solid" class="w-10 h-10 text-white" />
                </div>
                <h3
                  class="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300"
                >
                  Экономия времени
                </h3>
                <p class="text-gray-600 leading-relaxed">
                  Не тратьте часы на поиск исполнителей. Мы подберём лучшие варианты за 15 минут.
                </p>
                <div
                  class="mt-6 flex items-center text-blue-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <span class="text-sm">Узнать больше</span>
                  <Icon
                    icon="heroicons:arrow-right-20-solid"
                    class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Преимущество 2 -->
          <div class="group relative">
            <div
              class="bg-white/80 backdrop-blur-sm border border-white/50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2"
            >
              <div
                class="absolute inset-0 bg-gradient-to-br from-green-500/5 to-green-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>
              <div class="relative z-10">
                <div
                  class="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-3xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                >
                  <Icon icon="heroicons:shield-check-20-solid" class="w-10 h-10 text-white" />
                </div>
                <h3
                  class="text-2xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors duration-300"
                >
                  Проверенные компании
                </h3>
                <p class="text-gray-600 leading-relaxed">
                  Все исполнители проходят тщательную проверку. Работаем только с надёжными
                  партнёрами.
                </p>
                <div
                  class="mt-6 flex items-center text-green-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <span class="text-sm">Узнать больше</span>
                  <Icon
                    icon="heroicons:arrow-right-20-solid"
                    class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Преимущество 3 -->
          <div class="group relative">
            <div
              class="bg-white/80 backdrop-blur-sm border border-white/50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2"
            >
              <div
                class="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-purple-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>
              <div class="relative z-10">
                <div
                  class="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-3xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                >
                  <Icon icon="heroicons:currency-dollar-20-solid" class="w-10 h-10 text-white" />
                </div>
                <h3
                  class="text-2xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors duration-300"
                >
                  Лучшие цены
                </h3>
                <p class="text-gray-600 leading-relaxed">
                  Сравнивайте предложения и выбирайте оптимальное соотношение цены и качества.
                </p>
                <div
                  class="mt-6 flex items-center text-purple-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <span class="text-sm">Узнать больше</span>
                  <Icon
                    icon="heroicons:arrow-right-20-solid"
                    class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Преимущество 4 -->
          <div class="group relative">
            <div
              class="bg-white/80 backdrop-blur-sm border border-white/50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2"
            >
              <div
                class="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>
              <div class="relative z-10">
                <div
                  class="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                >
                  <Icon icon="heroicons:user-20-solid" class="w-10 h-10 text-white" />
                </div>
                <h3
                  class="text-2xl font-bold text-gray-800 mb-4 group-hover:text-orange-600 transition-colors duration-300"
                >
                  Персональный подход
                </h3>
                <p class="text-gray-600 leading-relaxed">
                  Наши специалисты помогут подобрать услугу, учитывая все ваши требования.
                </p>
                <div
                  class="mt-6 flex items-center text-orange-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <span class="text-sm">Узнать больше</span>
                  <Icon
                    icon="heroicons:arrow-right-20-solid"
                    class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Преимущество 5 -->
          <div class="group relative">
            <div
              class="bg-white/80 backdrop-blur-sm border border-white/50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2"
            >
              <div
                class="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-teal-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>
              <div class="relative z-10">
                <div
                  class="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-teal-500 to-teal-600 rounded-3xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                >
                  <Icon icon="heroicons:eye-20-solid" class="w-10 h-10 text-white" />
                </div>
                <h3
                  class="text-2xl font-bold text-gray-800 mb-4 group-hover:text-teal-600 transition-colors duration-300"
                >
                  Полная прозрачность
                </h3>
                <p class="text-gray-600 leading-relaxed">
                  Честные отзывы, реальные рейтинги и полная информация о каждой компании.
                </p>
                <div
                  class="mt-6 flex items-center text-teal-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <span class="text-sm">Узнать больше</span>
                  <Icon
                    icon="heroicons:arrow-right-20-solid"
                    class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Преимущество 6 -->
          <div class="group relative">
            <div
              class="bg-white/80 backdrop-blur-sm border border-white/50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2"
            >
              <div
                class="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-pink-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>
              <div class="relative z-10">
                <div
                  class="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-pink-500 to-pink-600 rounded-3xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                >
                  <Icon icon="heroicons:heart-20-solid" class="w-10 h-10 text-white" />
                </div>
                <h3
                  class="text-2xl font-bold text-gray-800 mb-4 group-hover:text-pink-600 transition-colors duration-300"
                >
                  Забота о клиентах
                </h3>
                <p class="text-gray-600 leading-relaxed">
                  Поддержка на всех этапах: от выбора до завершения работ.
                </p>
                <div
                  class="mt-6 flex items-center text-pink-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <span class="text-sm">Узнать больше</span>
                  <Icon
                    icon="heroicons:arrow-right-20-solid"
                    class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom CTA -->
        <div class="text-center mt-16">
          <div
            class="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <Icon icon="heroicons:rocket-launch-20-solid" class="w-5 h-5 mr-2" />
            Попробуйте сами - это бесплатно!
          </div>
        </div>
      </div>
    </div>

    <!-- Mission Section -->
    <div
      class="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden"
    >
      <!-- Background decoration -->
      <div class="absolute inset-0 opacity-20">
        <div
          class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20"
        ></div>
        <div
          class="absolute top-20 right-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-30"
        ></div>
        <div
          class="absolute bottom-20 left-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl opacity-30"
        ></div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <!-- Image -->
          <div class="order-2 lg:order-1">
            <div class="relative group">
              <div
                class="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"
              ></div>
              <img
                src="/src/assets/gil-ribeiro-3hO8igCybds-unsplash.jpg"
                alt="Чистый и уютный интерьер"
                class="relative rounded-3xl shadow-2xl w-full h-96 object-cover border border-white/20 group-hover:scale-105 transition-transform duration-500"
              />
              <!-- Overlay badge -->
              <div
                class="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full"
              >
                <span class="flex items-center text-blue-600 font-semibold text-sm">
                  <Icon icon="heroicons:heart-20-solid" class="w-4 h-4 mr-2" />
                  Наша миссия
                </span>
              </div>
              <div
                class="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-2xl shadow-xl"
              >
                <div class="text-xl font-bold">С 2012 года</div>
                <div class="text-sm opacity-90">на рынке услуг</div>
              </div>
            </div>
          </div>

          <!-- Content -->
          <div class="order-1 lg:order-2 text-white">
            <div
              class="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-8"
            >
              <Icon icon="heroicons:rocket-launch-20-solid" class="w-4 h-4 mr-2" />
              Наша миссия
            </div>

            <h2 class="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Делаем клининг
              <span
                class="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              >
                доступным
              </span>
              для каждого
            </h2>

            <p class="text-xl text-blue-100 mb-10 leading-relaxed">
              Мы стремимся сделать клининговые услуги
              <span class="text-yellow-300 font-semibold">доступными</span> и
              <span class="text-yellow-300 font-semibold">удобными</span> для каждого, обеспечивая
              чистоту и комфорт в вашем доме или офисе.
            </p>

            <!-- Statistics -->
            <div class="grid grid-cols-2 gap-6 mb-10">
              <div
                class="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl hover:bg-white/15 transition-all duration-300 group"
              >
                <div
                  class="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300"
                >
                  <Icon icon="heroicons:calendar-20-solid" class="w-6 h-6 text-white" />
                </div>
                <div class="text-3xl font-bold text-white mb-2">12+</div>
                <div class="text-blue-200">лет на рынке</div>
                <div class="text-xs text-blue-300 mt-1">Опыт и надежность</div>
              </div>
              <div
                class="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl hover:bg-white/15 transition-all duration-300 group"
              >
                <div
                  class="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300"
                >
                  <Icon icon="heroicons:face-smile-20-solid" class="w-6 h-6 text-white" />
                </div>
                <div class="text-3xl font-bold text-white mb-2">500+</div>
                <div class="text-blue-200">довольных клиентов</div>
                <div class="text-xs text-blue-300 mt-1">За этот год</div>
              </div>
            </div>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4">
              <button
                @click="$router.push('/cooperation')"
                class="btn btn-lg rounded-full px-8 bg-gradient-to-r from-blue-500 to-blue-600 border-blue-500 text-white hover:from-blue-600 hover:to-blue-700 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Icon icon="heroicons:user-plus-20-solid" class="w-6 h-6 mr-2" />
                Стать партнёром
              </button>
              <button
                @click="$router.push('/')"
                class="btn btn-outline btn-lg rounded-full px-8 border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                <Icon icon="heroicons:magnifying-glass-20-solid" class="w-6 h-6 mr-2" />
                Найти услугу
              </button>
            </div>
          </div>
        </div>

        <!-- Bottom section with values -->
        <div class="mt-20 text-center">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div class="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl">
              <div
                class="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mx-auto mb-4"
              >
                <Icon icon="heroicons:shield-check-20-solid" class="w-8 h-8 text-white" />
              </div>
              <h3 class="text-xl font-bold text-white mb-2">Качество</h3>
              <p class="text-blue-200">Только проверенные исполнители</p>
            </div>
            <div class="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl">
              <div
                class="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl mx-auto mb-4"
              >
                <Icon icon="heroicons:bolt-20-solid" class="w-8 h-8 text-white" />
              </div>
              <h3 class="text-xl font-bold text-white mb-2">Скорость</h3>
              <p class="text-blue-200">Быстрый подбор за 15 минут</p>
            </div>
            <div class="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl">
              <div
                class="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl mx-auto mb-4"
              >
                <Icon icon="heroicons:heart-20-solid" class="w-8 h-8 text-white" />
              </div>
              <h3 class="text-xl font-bold text-white mb-2">Забота</h3>
              <p class="text-blue-200">Поддержка на каждом этапе</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-2px);
}

.badge {
  transition: all 0.2s ease;
}

.badge:hover {
  transform: translateY(-1px);
}
</style>
