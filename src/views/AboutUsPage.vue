<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <div
      class="hero min-h-screen bg-cover bg-center bg-no-repeat mt-16"
      style="
        background-image: url('https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80');
      "
    >
      <div class="hero-content text-center text-white relative z-10 py-15">
        <div class="max-w-4xl">
          <!-- Логотип и заголовок -->
          <div class="flex justify-center items-center mb-8">
            <div
              class="bg-primary text-primary-content p-4 rounded-2xl shadow-2xl transform rotate-3"
            >
              <span class="text-4xl font-bold"
                >Блеск<span class="text-primary-content">OFF</span></span
              >
            </div>
          </div>

          <h1 class="text-4xl md:text-5xl font-bold mb-8">О нашей компании</h1>

          <!-- Основной текст -->
          <div class="space-y-6 text-lg">
            <div class="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-primary">
              <p class="text-xl leading-relaxed text-gray-700">
                <span class="font-bold text-blue-600">БлескOFF</span> – это инновационная платформа,
                созданная для того, чтобы сделать выбор клининговых услуг
                <span class="text-blue-500 font-semibold">простым</span>,
                <span class="text-green-500 font-semibold">быстрым</span> и
                <span class="text-blue-600 font-semibold">надёжным</span>.
              </p>
            </div>

            <div class="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-primary">
              <p class="text-xl leading-relaxed text-gray-700">
                Мы объединяем
                <span class="text-blue-600 font-semibold">лучшие клининговые компании</span>
                в одном месте, чтобы вы могли найти
                <span class="text-green-500 font-semibold">идеальное решение</span>
                для своих нужд <span class="text-blue-500 font-semibold">без лишних хлопот</span>.
              </p>
            </div>
          </div>

          <!-- Дополнительные элементы -->
          <div class="flex flex-wrap justify-center gap-4 mt-8">
            <div class="badge badge-lg bg-blue-100 text-blue-700 border-blue-200 p-4">
              ✓ Гарантия качества
            </div>
            <div class="badge badge-lg bg-green-100 text-green-700 border-green-200 p-4">
              ⭐ 5-звездочный сервис
            </div>
            <div class="badge badge-lg bg-blue-100 text-blue-700 border-blue-200 p-4">
              🚀 Быстрый подбор
            </div>
          </div>

          <!-- Кнопка призыва к действию -->
          <div class="mt-10">
            <button
              @click="$router.push('/')"
              type="button"
              class="btn btn-primary btn-lg rounded-full px-8 animate-bounce bg-blue-500 border-blue-500"
            >
              <Icon icon="heroicons:arrow-right-20-solid" class="w-6 h-6 mr-2" />
              Найти услугу сейчас
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Statistics Section -->
    <div class="bg-white py-12">
      <div class="container mx-auto px-4">
        <div
          class="stats stats-vertical lg:stats-horizontal shadow-lg w-full bg-white border border-gray-200"
        >
          <div class="stat">
            <div class="stat-figure text-blue-500">
              <Icon icon="heroicons:building-office-20-solid" class="w-8 h-8" />
            </div>
            <div class="stat-title text-gray-600">Компаний в базе</div>
            <div class="stat-value text-blue-600">150+</div>
            <div class="stat-desc text-gray-500">Проверенные исполнители</div>
          </div>

          <div class="stat">
            <div class="stat-figure text-green-500">
              <Icon icon="heroicons:users-20-solid" class="w-8 h-8" />
            </div>
            <div class="stat-title text-gray-600">Довольных клиентов</div>
            <div class="stat-value text-green-600">500+</div>
            <div class="stat-desc text-gray-500">За этот год</div>
          </div>

          <div class="stat">
            <div class="stat-figure text-blue-500">
              <Icon icon="heroicons:clock-20-solid" class="w-8 h-8" />
            </div>
            <div class="stat-title text-gray-600">Среднее время подбора</div>
            <div class="stat-value text-blue-600">15мин</div>
            <div class="stat-desc text-gray-500">Вместо часов поисков</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Why Choose Us Section -->
    <div class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Почему выбирают нас?</h2>
          <div class="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Card 1 -->
          <div
            class="card bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div class="card-body items-center text-center">
              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Icon icon="heroicons:clock-20-solid" class="w-8 h-8 text-blue-600" />
              </div>
              <h3 class="card-title text-lg text-gray-800 mb-2">Экономия времени</h3>
              <p class="text-gray-600">Больше не нужно тратить часы на поиски в интернете</p>
            </div>
          </div>

          <!-- Card 2 -->
          <div
            class="card bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div class="card-body items-center text-center">
              <div
                class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4"
              >
                <Icon icon="heroicons:shield-check-20-solid" class="w-8 h-8 text-green-600" />
              </div>
              <h3 class="card-title text-lg text-gray-800 mb-2">Проверенные компании</h3>
              <p class="text-gray-600">Сотрудничаем только с топовыми исполнителями</p>
            </div>
          </div>

          <!-- Card 3 -->
          <div
            class="card bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div class="card-body items-center text-center">
              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Icon icon="heroicons:user-circle-20-solid" class="w-8 h-8 text-blue-600" />
              </div>
              <h3 class="card-title text-lg text-gray-800 mb-2">Персонализированная помощь</h3>
              <p class="text-gray-600">Поможем найти идеальное решение индивидуально</p>
            </div>
          </div>

          <!-- Card 4 -->
          <div
            class="card bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div class="card-body items-center text-center">
              <div
                class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4"
              >
                <Icon icon="heroicons:eye-20-solid" class="w-8 h-8 text-green-600" />
              </div>
              <h3 class="card-title text-lg text-gray-800 mb-2">Прозрачность</h3>
              <p class="text-gray-600">Честные отзывы и рейтинги для уверенного выбора</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mission Section -->
    <div class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Наша миссия</h2>
          <div class="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div class="flex flex-col lg:flex-row gap-12 items-center">
          <!-- Изображение -->
          <div class="lg:w-1/2">
            <div class="relative">
              <img
                src="/src/assets/gil-ribeiro-3hO8igCybds-unsplash.jpg"
                class="rounded-2xl shadow-lg w-full h-auto border border-gray-200"
                alt="Чистый и уютный интерьер"
              />
              <div
                class="absolute -bottom-4 -right-4 bg-blue-500 text-white p-4 rounded-2xl shadow-md"
              >
                <div class="text-xl font-bold">С 2012 года</div>
                <div class="text-sm">на рынке услуг</div>
              </div>
            </div>
          </div>

          <!-- Текст и статистика -->
          <div class="lg:w-1/2">
            <div class="bg-white p-8 rounded-2xl shadow-md border border-gray-200">
              <p class="text-xl leading-relaxed text-gray-700 mb-8">
                Мы стремимся сделать клининговые услуги
                <span class="text-blue-600 font-semibold">доступными</span> и
                <span class="text-green-600 font-semibold">удобными</span> для каждого, обеспечивая
                чистоту и комфорт в вашем доме или офисе.
              </p>

              <!-- Статистика -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div class="bg-blue-50 rounded-xl p-6 text-center border border-blue-100">
                  <div class="stat-figure text-blue-600 mb-2">
                    <Icon icon="heroicons:calendar-20-solid" class="w-6 h-6" />
                  </div>
                  <div class="text-2xl font-bold text-blue-600 mb-1">12+</div>
                  <div class="text-sm font-medium text-gray-700">Лет на рынке</div>
                  <div class="text-xs text-gray-500">Опыт и надежность</div>
                </div>

                <div class="bg-green-50 rounded-xl p-6 text-center border border-green-100">
                  <div class="stat-figure text-green-600 mb-2">
                    <Icon icon="heroicons:user-group-20-solid" class="w-6 h-6" />
                  </div>
                  <div class="text-2xl font-bold text-green-600 mb-1">500+</div>
                  <div class="text-sm font-medium text-gray-700">Довольных клиентов</div>
                  <div class="text-xs text-gray-500">За этот год</div>
                </div>
              </div>
            </div>

            <!-- Кнопка -->
            <div class="text-center mt-8">
              <button
                @click="$router.push('/cooperation')"
                type="button"
                class="btn btn-primary btn-lg rounded-full px-8 animate-pulse"
              >
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
                Узнать больше о нас
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Team Section -->
    <div class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <!-- Заголовок -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Наша команда</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            Профессионалы индустрии чистоты, объединившиеся чтобы сделать ваш выбор простым и
            надежным
          </p>
          <div class="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <!-- Команда -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Член команды 1 -->
          <div
            class="card bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <figure class="px-6 pt-6 relative">
              <div class="w-32 h-32 mx-auto">
                <img
                  src="/src/assets/priscilla-du-preez-BuDD1HGco-4-unsplash.jpg"
                  class="rounded-full object-cover w-full h-full group-hover:scale-110 transition-transform duration-300 border-4 border-white shadow-md"
                  alt="Алексей Иванов"
                />
              </div>
              <div class="absolute top-6 right-6 bg-blue-500 text-white p-2 rounded-full shadow-md">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
            </figure>
            <div class="card-body items-center text-center">
              <h3 class="card-title text-2xl text-gray-800 mb-2">Алексей Иванов</h3>
              <p class="text-blue-600 font-semibold mb-3">CEO & Основатель</p>
              <p class="text-gray-600 mb-4">
                Создатель платформы с 12-летним опытом в индустрии клининга
              </p>
              <div class="card-actions justify-center">
                <div class="flex gap-2">
                  <button
                    class="btn btn-circle btn-sm bg-blue-500 border-blue-500 text-white hover:bg-blue-600"
                  >
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                      />
                    </svg>
                  </button>
                  <button
                    class="btn btn-circle btn-sm bg-gray-600 border-gray-600 text-white hover:bg-gray-700"
                  >
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Член команды 2 -->
          <div
            class="card bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <figure class="px-6 pt-6 relative">
              <div class="w-32 h-32 mx-auto">
                <img
                  src="/src/assets/priscilla-du-preez-BuDD1HGco-4-unsplash.jpg"
                  class="rounded-full object-cover w-full h-full group-hover:scale-110 transition-transform duration-300 border-4 border-white shadow-md"
                  alt="Мария Петрова"
                />
              </div>
              <div
                class="absolute top-6 right-6 bg-green-500 text-white p-2 rounded-full shadow-md"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  ></path>
                </svg>
              </div>
            </figure>
            <div class="card-body items-center text-center">
              <h3 class="card-title text-2xl text-gray-800 mb-2">Мария Петрова</h3>
              <p class="text-blue-600 font-semibold mb-3">Операционный директор</p>
              <p class="text-gray-600 mb-4">Эксперт в управлении клининговыми проектами</p>
              <div class="card-actions justify-center">
                <div class="flex gap-2">
                  <button
                    class="btn btn-circle btn-sm bg-blue-500 border-blue-500 text-white hover:bg-blue-600"
                  >
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                      />
                    </svg>
                  </button>
                  <button
                    class="btn btn-circle btn-sm bg-gray-600 border-gray-600 text-white hover:bg-gray-700"
                  >
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Член команды 3 -->
          <div
            class="card bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <figure class="px-6 pt-6 relative">
              <div class="w-32 h-32 mx-auto">
                <img
                  src="/src/assets/priscilla-du-preez-BuDD1HGco-4-unsplash.jpg"
                  class="rounded-full object-cover w-full h-full group-hover:scale-110 transition-transform duration-300 border-4 border-white shadow-md"
                  alt="Дмитрий Сидоров"
                />
              </div>
              <div class="absolute top-6 right-6 bg-blue-500 text-white p-2 rounded-full shadow-md">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
              </div>
            </figure>
            <div class="card-body items-center text-center">
              <h3 class="card-title text-2xl text-gray-800 mb-2">Дмитрий Сидоров</h3>
              <p class="text-blue-600 font-semibold mb-3">Технический директор</p>
              <p class="text-gray-600 mb-4">
                Специалист по клиентскому сервису и удовлетворенности
              </p>
              <div class="card-actions justify-center">
                <div class="flex gap-2">
                  <button
                    class="btn btn-circle btn-sm bg-blue-500 border-blue-500 text-white hover:bg-blue-600"
                  >
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                      />
                    </svg>
                  </button>
                  <button
                    class="btn btn-circle btn-sm bg-gray-600 border-gray-600 text-white hover:bg-gray-700"
                  >
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="bg-blue-500 text-white py-16">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-4">Готовы начать?</h2>
        <p class="text-xl mb-8">Присоединяйтесь к тысячам довольных клиентов</p>
        <button
          @click="$router.push('/')"
          class="btn btn-white btn-lg rounded-full px-8 text-blue-600 hover:bg-gray-100"
        >
          <Icon icon="heroicons:arrow-right-20-solid" class="w-5 h-5 mr-2" />
          Найти услугу
        </button>
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
