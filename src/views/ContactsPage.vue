<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const goToForm = async () => {
  await router.push('/cooperation#form')

  // Ждем немного, чтобы страница успела загрузиться
  setTimeout(() => {
    const formElement = document.getElementById('form')
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' })
    }
  }, 100)
}
</script>

<template>
  <div class="min-h-screen bg-white">
    <div class="hero min-h-screen relative overflow-hidden">
      <!-- Background image -->
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Clean interior"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent"></div>
      </div>
      <div class="hero-content text-center text-white relative z-10 mt-15">
        <div class="max-w-4xl">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">Контакты</h1>
          <p class="text-2xl max-sm:text-xl mb-8">
            Свяжитесь с нами для получения качественных клининговых услуг
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <div class="badge bg-blue-100 text-blue-700 border-blue-200 badge-lg p-4">
              <Icon icon="heroicons:clock-20-solid" class="w-4 h-4 mr-2" />
              Работаем 24/7
            </div>
            <div class="badge bg-green-100 text-green-700 border-green-200 badge-lg p-4">
              <Icon icon="heroicons:phone-20-solid" class="w-4 h-4 mr-2" />
              Быстрая связь
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact Information -->
    <div class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <!-- Contact Card 1 -->
          <div
            class="card bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div class="card-body items-center text-center">
              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Icon icon="heroicons:phone-20-solid" class="w-8 h-8 text-blue-600" />
              </div>
              <h3 class="card-title text-xl text-gray-800 mb-2">Телефон</h3>
              <p class="text-gray-600 mb-4">Свяжитесь с нами по телефону</p>
              <div class="space-y-2">
                <a
                  href="tel:+78001234567"
                  class="text-blue-600 hover:text-blue-700 text-lg font-semibold"
                >
                  +7 (903) 429-26-65
                </a>
                <p class="text-sm text-gray-500">Бесплатный звонок по России</p>
              </div>
            </div>
          </div>

          <!-- Contact Card 2 -->
          <div
            class="card bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div class="card-body items-center text-center">
              <div
                class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4"
              >
                <Icon icon="heroicons:envelope-20-solid" class="w-8 h-8 text-green-600" />
              </div>
              <h3 class="card-title text-xl text-gray-800 mb-2">Почта</h3>
              <p class="text-gray-600 mb-4">Напишите нам на почту</p>
              <div class="space-y-2">
                <a
                  href="mailto:bleskoff84@mail.ru"
                  class="text-blue-600 hover:text-blue-700 text-lg font-semibold"
                >
                  bleskoff84@mail.ru
                </a>
                <p class="text-sm text-gray-500">Ответим в течение 24 часов</p>
              </div>
            </div>
          </div>

          <!-- Contact Card 3 -->
          <div
            class="card bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div class="card-body items-center text-center">
              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Icon icon="heroicons:map-pin-20-solid" class="w-8 h-8 text-blue-600" />
              </div>
              <h3 class="card-title text-xl text-gray-800 mb-2">Адрес</h3>
              <p class="text-gray-600 mb-4">Посетите наш офис</p>
              <div class="space-y-2">
                <p class="text-gray-700 font-semibold">г. Москва, ул. Мясницкая, 13с1</p>
                <p class="text-sm text-gray-500">Пн-Пт: 9:00-18:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Map Section -->
    <div class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-800 mb-4">Как нас найти</h2>
          <p class="text-xl text-gray-600">Мы находимся в удобном месте в центре города</p>
        </div>

        <div class="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
          <div class="aspect-video bg-gray-200 rounded-lg overflow-hidden">
            <!-- Яндекс.Карты -->
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A2369a358715c61c89781318ec5c4f5073d58d19f8807473b45598c9e2eb7f59c&amp;source=constructor"
              width="100%"
              height="100%"
              frameborder="0"
              class="rounded-lg"
            ></iframe>
          </div>

          <div class="mt-8">
            <div class="text-center">
              <Icon icon="heroicons:map-pin" class="w-8 h-8 text-blue-600 mb-2 mx-auto" />
              <h4 class="font-semibold text-gray-800 mb-1">Метро</h4>
              <p class="text-gray-600 text-sm">Станция "Лубянка" (10-15 мин пешком)</p>
            </div>
            <!-- <div class="text-center">
              <Icon icon="heroicons:truck-20-solid" class="w-8 h-8 text-green-600 mb-2 mx-auto" />
              <h4 class="font-semibold text-gray-800 mb-1">Парковка</h4>
              <p class="text-gray-600 text-sm">Бесплатная парковка для клиентов</p>
            </div>
            <div class="text-center">
              <Icon icon="heroicons:shield-check" class="w-8 h-8 text-blue-600 mb-2 mx-auto" />
              <h4 class="font-semibold text-gray-800 mb-1">Доступность</h4>
              <p class="text-gray-600 text-sm">Пандус и лифт для маломобильных</p>
            </div> -->
          </div>
        </div>
      </div>
    </div>

    <!-- FAQ Section -->
    <div class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-800 mb-4">Частые вопросы</h2>
          <p class="text-xl text-gray-600">Ответы на популярные вопросы о наших услугах</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            <h3 class="text-lg font-semibold text-gray-800 mb-2">Как быстро вы отвечаете?</h3>
            <p class="text-gray-600">
              Мы отвечаем на все запросы в течение 15 минут в рабочее время
            </p>
          </div>
          <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            <h3 class="text-lg font-semibold text-gray-800 mb-2">Работаете ли вы в выходные?</h3>
            <p class="text-gray-600">Да, мы работаем 7 дней в неделю, 24 часа в сутки</p>
          </div>
          <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            <h3 class="text-lg font-semibold text-gray-800 mb-2">Есть ли выезд на объект?</h3>
            <p class="text-gray-600">Да, наш специалист может приехать для оценки бесплатно</p>
          </div>
          <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            <h3 class="text-lg font-semibold text-gray-800 mb-2">Какие способы оплаты?</h3>
            <p class="text-gray-600">Наличные, банковская карта, безналичный расчет</p>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="bg-blue-500 text-white py-16">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-4">Готовы начать сотрудничество?</h2>
        <p class="text-xl mb-8 opacity-90">
          Свяжитесь с нами прямо сейчас и получите бесплатную консультацию
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+79034292665" class="btn btn-white btn-lg rounded-full px-8 text-blue-600">
            <Icon icon="heroicons:phone-20-solid" class="w-5 h-5 mr-2" />
            Позвонить
          </a>
          <button
            @click="goToForm"
            class="btn btn-outline btn-lg rounded-full px-8 border-white text-white hover:bg-white hover:text-blue-600"
          >
            <Icon icon="heroicons:chat-bubble-left-20-solid" class="w-5 h-5 mr-2" />
            Заполнить форму
          </button>
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

.btn {
  transition: all 0.2s ease;
}

.btn:hover {
  transform: translateY(-1px);
}
</style>
