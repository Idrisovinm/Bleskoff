<script setup lang="ts"></script>

<template>
  <div class="min-h-screen bg-base-100">
    <!-- Hero Section -->
    <!-- Hero Section - О нашей компании -->
    <div
      class="hero min-h-screen bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10 mt-16"
    >
      <div class="hero-content text-center">
        <div class="max-w-4xl">
          <!-- Логотип и заголовок -->
          <div class="flex justify-center items-center mb-8">
            <div
              class="bg-primary text-primary-content p-4 rounded-2xl shadow-2xl transform rotate-3"
            >
              <span class="text-4xl font-bold">Блеск<span class="text-secondary">OFF</span></span>
            </div>
          </div>

          <h1 class="text-5xl md:text-6xl font-bold text-primary mb-8">О нашей компании</h1>

          <!-- Основной текст -->
          <div class="space-y-6 text-lg">
            <div class="bg-base-100 p-6 rounded-2xl shadow-lg border-l-4 border-primary">
              <p class="text-xl leading-relaxed">
                <span class="font-bold text-primary">БлескOFF</span> – это инновационная платформа,
                созданная для того, чтобы сделать выбор клининговых услуг
                <span class="text-secondary font-semibold">простым</span>,
                <span class="text-accent font-semibold">быстрым</span> и
                <span class="text-primary font-semibold">надёжным</span>.
              </p>
            </div>

            <div class="bg-base-100 p-6 rounded-2xl shadow-lg border-l-4 border-secondary">
              <p class="text-xl leading-relaxed">
                Мы объединяем
                <span class="text-primary font-semibold">лучшие клининговые компании</span>
                в одном месте, чтобы вы могли найти
                <span class="text-secondary font-semibold">идеальное решение</span>
                для своих нужд <span class="text-accent font-semibold">без лишних хлопот</span>.
              </p>
            </div>
          </div>

          <!-- Дополнительные элементы -->
          <div class="flex flex-wrap justify-center gap-4 mt-8">
            <div class="badge badge-primary badge-lg p-4">✓ Гарантия качества</div>
            <div class="badge badge-secondary badge-lg p-4">⭐ 5-звездочный сервис</div>
            <div class="badge badge-accent badge-lg p-4">🚀 Быстрый подбор</div>
          </div>

          <!-- Кнопка призыва к действию -->
          <div class="mt-10">
            <button
              @click="$router.push('/')"
              type="button"
              class="btn btn-primary btn-lg rounded-full px-8 animate-bounce"
            >
              <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
              Найти услугу сейчас
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Дополнительный блок с статистикой -->
    <div class="bg-base-200 py-8">
      <div class="container mx-auto px-4">
        <div class="stats stats-vertical lg:stats-horizontal shadow w-full">
          <div class="stat">
            <div class="stat-figure text-primary">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
            <div class="stat-title">Компаний в базе</div>
            <div class="stat-value text-primary">150+</div>
            <div class="stat-desc">Проверенные исполнители</div>
          </div>

          <div class="stat">
            <div class="stat-figure text-secondary">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
            </div>
            <div class="stat-title">Довольных клиентов</div>
            <div class="stat-value text-secondary">500+</div>
            <div class="stat-desc">За этот год</div>
          </div>

          <div class="stat">
            <div class="stat-figure text-accent">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div class="stat-title">Среднее время подбора</div>
            <div class="stat-value text-accent">15мин</div>
            <div class="stat-desc">Вместо часов поисков</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Why Choose Us Section -->
    <div class="py-16 bg-base-200">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-primary mb-4">Почему выбирают нас?</h2>
          <div class="w-24 h-1 bg-secondary mx-auto"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Card 1 -->
          <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div class="card-body items-center text-center">
              <div
                class="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4"
              >
                <svg
                  class="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h3 class="card-title text-lg mb-2">Экономия времени</h3>
              <p class="text-base-content/70">Больше не нужно тратить часы на поиски в интернете</p>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div class="card-body items-center text-center">
              <div
                class="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-4"
              >
                <svg
                  class="w-8 h-8 text-secondary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  ></path>
                </svg>
              </div>
              <h3 class="card-title text-lg mb-2">Проверенные компании</h3>
              <p class="text-base-content/70">Сотрудничаем только с топовыми исполнителями</p>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div class="card-body items-center text-center">
              <div
                class="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-4"
              >
                <svg
                  class="w-8 h-8 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
              </div>
              <h3 class="card-title text-lg mb-2">Персонализированная помощь</h3>
              <p class="text-base-content/70">Поможем найти идеальное решение индивидуально</p>
            </div>
          </div>

          <!-- Card 4 -->
          <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div class="card-body items-center text-center">
              <div class="w-16 h-16 bg-info/20 rounded-full flex items-center justify-center mb-4">
                <svg
                  class="w-8 h-8 text-info"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  ></path>
                </svg>
              </div>
              <h3 class="card-title text-lg mb-2">Прозрачность</h3>
              <p class="text-base-content/70">Честные отзывы и рейтинги для уверенного выбора</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mission Section -->
    <div class="py-20 bg-gradient-to-br from-base-100 to-base-200">
      <div class="container mx-auto px-4">
        <!-- Заголовок -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-primary mb-4">Наша миссия</h2>
          <div class="w-24 h-1 bg-secondary mx-auto"></div>
        </div>

        <div class="flex flex-col lg:flex-row gap-12 items-center">
          <!-- Изображение -->
          <div class="lg:w-1/2">
            <div class="relative">
              <img
                src="/src/assets/gil-ribeiro-3hO8igCybds-unsplash.jpg"
                class="rounded-2xl shadow-2xl w-full h-auto"
                alt="Чистый и уютный интерьер"
              />
              <div
                class="absolute -bottom-6 -right-6 bg-primary text-primary-content p-6 rounded-2xl shadow-xl"
              >
                <div class="text-3xl font-bold">С 2012 года</div>
                <div class="text-sm">на рынке услуг</div>
              </div>
            </div>
          </div>

          <!-- Текст и статистика -->
          <div class="lg:w-1/2">
            <div class="bg-base-100 p-8 rounded-2xl shadow-lg border-l-4 border-secondary">
              <p class="text-xl md:text-2xl leading-relaxed text-base-content mb-8">
                Мы стремимся сделать клининговые услуги
                <span class="text-primary font-semibold">доступными</span> и
                <span class="text-secondary font-semibold">удобными</span> для каждого, обеспечивая
                чистоту и комфорт в вашем доме или офисе.
              </p>

              <!-- Статистика -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div class="stat bg-primary/10 rounded-2xl p-6 text-center">
                  <div class="stat-figure text-primary">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                  <div class="stat-value text-primary text-3xl md:text-4xl">12+</div>
                  <div class="stat-title text-base-content">Лет на рынке</div>
                  <div class="stat-desc text-base-content/70">Опыт и надежность</div>
                </div>

                <div class="stat bg-secondary/10 rounded-2xl p-6 text-center">
                  <div class="stat-figure text-secondary">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                  </div>
                  <div class="stat-value text-secondary text-3xl md:text-4xl">500+</div>
                  <div class="stat-title text-base-content">Довольных клиентов</div>
                  <div class="stat-desc text-base-content/70">За этот год</div>
                </div>
              </div>
            </div>

            <!-- Кнопка -->
            <div class="text-center mt-8">
              <button
                @click="$router.push('/cooperation-page')"
                type="button"
                class="btn btn-secondary btn-lg rounded-full px-8 animate-pulse"
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
    <div class="py-20 bg-gradient-to-br from-base-300 to-base-100">
      <div class="container mx-auto px-4">
        <!-- Заголовок -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-primary mb-4">Наша команда</h2>
          <p class="text-xl text-base-content/70 max-w-2xl mx-auto mb-6">
            Профессионалы индустрии чистоты, объединившиеся чтобы сделать ваш выбор простым и
            надежным
          </p>
          <div class="w-24 h-1 bg-secondary mx-auto"></div>
        </div>

        <!-- Команда -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Член команды 1 -->
          <div
            class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 group"
          >
            <figure class="px-6 pt-6 relative">
              <div class="w-32 h-32 mx-auto">
                <img
                  src="/src/assets/priscilla-du-preez-BuDD1HGco-4-unsplash.jpg"
                  class="rounded-full object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                  alt="Алексей Иванов"
                />
              </div>
              <div class="absolute top-6 right-6 bg-primary text-primary-content p-2 rounded-full">
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
              <h3 class="card-title text-2xl text-primary mb-2">Алексей Иванов</h3>
              <p class="text-secondary font-semibold mb-3">CEO & Основатель</p>
              <p class="text-base-content/70 mb-4">
                Создатель платформы с 12-летним опытом в индустрии клининга
              </p>
              <div class="card-actions justify-center">
                <div class="flex gap-2">
                  <button class="btn btn-circle btn-sm btn-primary">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                      />
                    </svg>
                  </button>
                  <button class="btn btn-circle btn-sm btn-secondary">
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
            class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 group"
          >
            <figure class="px-6 pt-6 relative">
              <div class="w-32 h-32 mx-auto">
                <img
                  src="/src/assets/priscilla-du-preez-BuDD1HGco-4-unsplash.jpg"
                  class="rounded-full object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                  alt="Алексей Иванов"
                />
              </div>
              <div
                class="absolute top-6 right-6 bg-secondary text-secondary-content p-2 rounded-full"
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
              <h3 class="card-title text-2xl text-primary mb-2">Алексей Иванов</h3>
              <p class="text-secondary font-semibold mb-3">CEO & Основатель</p>
              <p class="text-base-content/70 mb-4">
                Эксперт в области управления и развития бизнеса
              </p>
              <div class="card-actions justify-center">
                <div class="flex gap-2">
                  <button class="btn btn-circle btn-sm btn-primary">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                      />
                    </svg>
                  </button>
                  <button class="btn btn-circle btn-sm btn-secondary">
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
            class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 group"
          >
            <figure class="px-6 pt-6 relative">
              <div class="w-32 h-32 mx-auto">
                <img
                  src="/src/assets/priscilla-du-preez-BuDD1HGco-4-unsplash.jpg"
                  class="rounded-full object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                  alt="Алексей Иванов"
                />
              </div>
              <div class="absolute top-6 right-6 bg-accent text-accent-content p-2 rounded-full">
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
              <h3 class="card-title text-2xl text-primary mb-2">Алексей Иванов</h3>
              <p class="text-secondary font-semibold mb-3">CEO & Основатель</p>
              <p class="text-base-content/70 mb-4">
                Специалист по клиентскому сервису и удовлетворенности
              </p>
              <div class="card-actions justify-center">
                <div class="flex gap-2">
                  <button class="btn btn-circle btn-sm btn-primary">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                      />
                    </svg>
                  </button>
                  <button class="btn btn-circle btn-sm btn-secondary">
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

        <!-- Кнопка призыва к действию -->
        <!-- <div class="text-center mt-12">
          <button class="btn btn-primary btn-lg rounded-full px-8">
            Присоединиться к команде
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </button>
        </div> -->
      </div>
    </div>
  </div>
</template>
