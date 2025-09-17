<script setup lang="ts">
import CooperationForm from '@/components/CooperationPage/CooperationForm.vue'
import { Icon } from '@iconify/vue'
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <div
      class="hero min-h-screen bg-cover bg-center bg-no-repeat"
      style="
        background-image: url('https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80');
      "
    >
      <div class="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent"></div>
      <div class="hero-content text-center text-white mt-15">
        <div class="max-w-4xl">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">Сотрудничество</h1>
          <p class="text-2xl max-sm:text-xl mb-8">
            Присоединяйтесь к нашей платформе и расширяйте свой бизнес
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <div class="badge bg-blue-100 text-blue-700 border-blue-200 badge-lg p-4">
              <Icon icon="heroicons:user-group" class="w-4 h-4 mr-2" />
              Новые клиенты
            </div>
            <div class="badge bg-green-100 text-green-700 border-green-200 badge-lg p-4">
              <Icon icon="heroicons:chart-bar" class="w-4 h-4 mr-2" />
              Рост дохода
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="container mx-auto px-4 py-12">
      <!-- Intro Section -->
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold text-gray-800 mb-6">
          <span class="text-blue-600">БлескOFF</span> приглашает к сотрудничеству
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Присоединяйтесь к нашей платформе и получайте доступ к тысячам потенциальных клиентов.
          Увеличивайте свой доход с помощью современной системы подбора заказов.
        </p>
      </div>

      <!-- Benefits Section -->
      <div class="bg-white border border-gray-200 rounded-2xl shadow-lg p-8 mb-16">
        <h2 class="text-3xl font-bold text-gray-800 text-center mb-12">
          Преимущества для партнеров
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Benefit 1 -->
          <div class="text-center">
            <div
              class="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto"
            >
              <Icon icon="heroicons:arrow-trending-up" class="w-10 h-10 text-blue-600" />
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-4">Увеличение клиентской базы</h3>
            <p class="text-gray-600">Доступ к нашей аудитории потенциальных заказчиков</p>
          </div>

          <!-- Benefit 2 -->
          <div class="text-center">
            <div
              class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto"
            >
              <Icon icon="heroicons:cog-6-tooth" class="w-10 h-10 text-green-600" />
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-4">Гибкие условия</h3>
            <p class="text-gray-600">Выгодные тарифы и прозрачная система комиссий</p>
          </div>

          <!-- Benefit 3 -->
          <div class="text-center">
            <div
              class="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto"
            >
              <Icon icon="heroicons:megaphone" class="w-10 h-10 text-blue-600" />
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-4">Поддержка и продвижение</h3>
            <p class="text-gray-600">Реклама ваших услуг на нашей платформе</p>
          </div>
        </div>
      </div>

      <!-- How It Works Section -->
      <div class="bg-gray-50 rounded-2xl p-8 mb-16">
        <h2 class="text-3xl font-bold text-gray-800 text-center mb-12">Как стать партнером?</h2>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <!-- Step 1 -->
          <div class="text-center">
            <div
              class="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto"
            >
              1
            </div>
            <h3 class="font-semibold text-gray-800 mb-2">Заявка</h3>
            <p class="text-gray-600 text-sm">Заполните форму заявки</p>
          </div>

          <!-- Step 2 -->
          <div class="text-center">
            <div
              class="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto"
            >
              2
            </div>
            <h3 class="font-semibold text-gray-800 mb-2">Связь</h3>
            <p class="text-gray-600 text-sm">Менеджер свяжется с вами</p>
          </div>

          <!-- Step 3 -->
          <div class="text-center">
            <div
              class="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto"
            >
              3
            </div>
            <h3 class="font-semibold text-gray-800 mb-2">Договор</h3>
            <p class="text-gray-600 text-sm">Подпишем договор</p>
          </div>

          <!-- Step 4 -->
          <div class="text-center">
            <div
              class="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto"
            >
              4
            </div>
            <h3 class="font-semibold text-gray-800 mb-2">Заказы</h3>
            <p class="text-gray-600 text-sm">Начните получать заказы</p>
          </div>
        </div>
      </div>

      <!-- Stats Section -->
      <div class="bg-white border border-gray-200 rounded-2xl shadow-lg p-8 mb-16">
        <div class="stats stats-vertical lg:stats-horizontal w-full bg-transparent">
          <div class="stat">
            <div class="stat-figure text-blue-500">
              <Icon icon="heroicons:building-office" class="w-8 h-8" />
            </div>
            <div class="stat-title text-gray-600">Компаний-партнеров</div>
            <div class="stat-value text-blue-600">150+</div>
            <div class="stat-desc text-gray-500">Уже с нами</div>
          </div>

          <div class="stat">
            <div class="stat-figure text-green-500">
              <Icon icon="heroicons:users" class="w-8 h-8" />
            </div>
            <div class="stat-title text-gray-600">Клиентов в месяц</div>
            <div class="stat-value text-green-600">10K+</div>
            <div class="stat-desc text-gray-500">Активная аудитория</div>
          </div>

          <div class="stat">
            <div class="stat-figure text-blue-500">
              <Icon icon="heroicons:arrow-trending-up" class="w-8 h-8" />
            </div>
            <div class="stat-title text-gray-600">Рост заказов</div>
            <div class="stat-value text-blue-600">40%</div>
            <div class="stat-desc text-gray-500">За последний год</div>
          </div>
        </div>
      </div>

      <!-- Form Section -->
      <div id="form" class="bg-white border border-gray-200 rounded-2xl shadow-lg p-8">
        <h2 class="text-3xl font-bold text-gray-800 text-center mb-8">Станьте нашим партнером</h2>
        <p class="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Заполните форму ниже и наш менеджер свяжется с вами для обсуждения условий сотрудничества
        </p>

        <CooperationForm />
      </div>
    </div>

    <!-- CTA Section -->
    <div class="bg-blue-500 text-white py-16">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-4">Остались вопросы?</h2>
        <p class="text-xl mb-8">Свяжитесь с нами напрямую для консультации</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+78001234567"
            class="btn bg-white text-blue-600 hover:bg-gray-100 btn-lg rounded-full px-8"
          >
            <Icon icon="heroicons:phone" class="w-5 h-5 mr-2" />
            +7 (903) 429-26-65
          </a>
          <a
            href="mailto:partners@bleskoff.ru"
            class="btn btn-outline border-white text-white hover:bg-white hover:text-blue-600 btn-lg rounded-full px-8"
          >
            <Icon icon="heroicons:envelope" class="w-5 h-5 mr-2" />
            bleskoff84@mail.ru
          </a>
        </div>
      </div>
    </div>
  </div>
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
</style>
