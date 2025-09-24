<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'

const router = useRouter()
const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})

const goToForm = async () => {
  await router.push('/cooperation#form')

  setTimeout(() => {
    const formElement = document.getElementById('form')
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' })
    }
  }, 100)
}

const contactMethods = [
  {
    icon: 'heroicons:phone-20-solid',
    title: 'Телефон',
    description: 'Свяжитесь с нами по телефону',
    value: '+7 (903) 429-26-65',
    link: 'tel:+79034292665',
    subtitle: 'Бесплатный звонок по России',
    gradient: 'from-blue-500 to-purple-600',
    bgGradient: 'from-blue-50 to-purple-50',
  },
  {
    icon: 'heroicons:envelope-20-solid',
    title: 'Почта',
    description: 'Напишите нам на почту',
    value: 'bleskoff84@mail.ru',
    link: 'mailto:bleskoff84@mail.ru',
    subtitle: 'Ответим в течение 24 часов',
    gradient: 'from-green-500 to-teal-600',
    bgGradient: 'from-green-50 to-teal-50',
  },
  {
    icon: 'heroicons:map-pin-20-solid',
    title: 'Адрес',
    description: 'Посетите наш офис',
    value: 'г. Москва, ул. Мясницкая, 13с1',
    link: '#map',
    subtitle: 'Пн-Пт: 9:00-18:00',
    gradient: 'from-orange-500 to-red-600',
    bgGradient: 'from-orange-50 to-red-50',
  },
]

const faqItems = [
  {
    question: 'Как быстро вы отвечаете?',
    answer: 'Мы отвечаем на все запросы в течение 15 минут в рабочее время',
  },
  {
    question: 'Работаете ли вы в выходные?',
    answer: 'Да, мы работаем 7 дней в неделю, 24 часа в сутки',
  },
  {
    question: 'Есть ли выезд на объект?',
    answer: 'Да, наш специалист может приехать для оценки бесплатно',
  },
  {
    question: 'Какие способы оплаты?',
    answer: 'Наличные, банковская карта, безналичный расчет',
  },
]
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
    <!-- Hero Section -->
    <div class="hero min-h-screen relative overflow-hidden">
      <!-- Background image with overlay -->
      <div
        class="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style="
          background-image: url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80');
        "
      ></div>
      <div class="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent"></div>

      <div class="hero-content text-center text-white relative z-10 px-4 pt-32 lg:pt-40">
        <div class="max-w-4xl" :class="{ 'animate-fade-in-up': isVisible }">
          <!-- Logo and Brand -->
          <!-- <div class="flex justify-center items-center mb-8">
            <div class="relative">
              <div
                class="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <img src="/src/assets/logo.png" alt="БлескOFF" class="h-12 w-auto" />
              </div>
              <div
                class="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full"
              >
                #1
              </div>
            </div>
          </div> -->

          <h1
            class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent"
          >
            Наши контакты
          </h1>

          <p
            class="text-lg sm:text-xl md:text-2xl mb-12 text-blue-100 max-w-3xl mx-auto leading-relaxed"
          >
            Мы всегда готовы помочь вам найти лучшие клининговые услуги. Свяжитесь с нами любым
            удобным способом!
          </p>

          <!-- Feature badges -->
          <div class="flex flex-wrap justify-center gap-4 mb-12">
            <div
              class="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 hover:bg-white/25 transition-all duration-300"
            >
              <span class="flex items-center text-white font-semibold">
                <Icon icon="heroicons:check-circle-20-solid" class="w-5 h-5 mr-2 text-green-400" />
                Быстрый ответ
              </span>
            </div>
            <div
              class="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 hover:bg-white/25 transition-all duration-300"
            >
              <span class="flex items-center text-white font-semibold">
                <Icon icon="heroicons:star-20-solid" class="w-5 h-5 mr-2 text-yellow-400" />
                Профессиональная поддержка
              </span>
            </div>
            <div
              class="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 hover:bg-white/25 transition-all duration-300"
            >
              <span class="flex items-center text-white font-semibold">
                <Icon icon="heroicons:rocket-launch-20-solid" class="w-5 h-5 mr-2 text-blue-400" />
                Доступны 24/7
              </span>
            </div>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a
              href="tel:+79034292665"
              class="btn btn-lg bg-white text-blue-600 border-0 rounded-2xl px-8 py-4 font-bold text-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 group"
            >
              <Icon
                icon="heroicons:phone-20-solid"
                class="w-6 h-6 mr-3 group-hover:animate-pulse"
              />
              Позвонить сейчас
            </a>

            <button
              @click="goToForm"
              class="btn btn-lg bg-transparent border-2 border-white text-white rounded-2xl px-8 py-4 font-bold text-lg hover:bg-white hover:text-blue-600 hover:scale-105 transition-all duration-300 group"
            >
              <Icon
                icon="heroicons:chat-bubble-left-20-solid"
                class="w-6 h-6 mr-3 group-hover:animate-bounce"
              />
              Написать нам
            </button>
          </div>

          <!-- Quick stats -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="text-3xl font-bold text-white mb-2">24/7</div>
              <div class="text-blue-200">Поддержка клиентов</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-white mb-2">< 1 час</div>
              <div class="text-blue-200">Время ответа</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-white mb-2">100%</div>
              <div class="text-blue-200">Гарантия качества</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact Information -->
    <div class="py-20 relative">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <div
            class="inline-flex items-center gap-2 bg-blue-100 text-blue-700 rounded-full px-6 py-3 mb-6"
          >
            <Icon icon="heroicons:chat-bubble-left-right" class="w-5 h-5" />
            <span class="text-sm font-medium">Способы связи</span>
          </div>
          <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Свяжитесь с нами
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Выберите удобный способ связи. Мы всегда готовы ответить на ваши вопросы
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div
            v-for="(contact, index) in contactMethods"
            :key="index"
            class="card bg-white/80 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 group"
            :style="{ animationDelay: `${index * 200}ms` }"
          >
            <div class="card-body items-center text-center p-8">
              <!-- Gradient Icon Background -->
              <div
                class="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden group-hover:scale-110 transition-transform duration-300"
                :class="`bg-gradient-to-br ${contact.bgGradient}`"
              >
                <div
                  class="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  :class="contact.gradient"
                ></div>
                <Icon
                  :icon="contact.icon"
                  class="w-10 h-10 relative z-10 transition-colors duration-300"
                  :class="
                    index === 0
                      ? 'text-blue-600 group-hover:text-white'
                      : index === 1
                        ? 'text-green-600 group-hover:text-white'
                        : 'text-orange-600 group-hover:text-white'
                  "
                />
              </div>

              <h3
                class="card-title text-xl sm:text-2xl text-gray-800 mb-3 group-hover:text-gray-900"
              >
                {{ contact.title }}
              </h3>

              <p class="text-gray-600 mb-6 text-base">
                {{ contact.description }}
              </p>

              <div class="space-y-3 w-full">
                <a
                  :href="contact.link"
                  class="btn btn-primary btn-lg w-full rounded-xl text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
                  :class="`bg-gradient-to-r ${contact.gradient} border-0 hover:shadow-xl`"
                >
                  {{ contact.value }}
                </a>
                <p class="text-sm text-gray-500 font-medium">
                  {{ contact.subtitle }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Map Section -->
    <div id="map" class="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 relative">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <div
            class="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 rounded-full px-6 py-3 mb-6"
          >
            <Icon icon="heroicons:map-pin" class="w-5 h-5" />
            <span class="text-sm font-medium">Наше местоположение</span>
          </div>
          <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Как нас найти
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Мы находимся в удобном месте в центре Москвы с отличной транспортной доступностью
          </p>
        </div>

        <div class="max-w-5xl mx-auto">
          <div class="card bg-white/90 backdrop-blur-sm shadow-2xl border-0 overflow-hidden">
            <div class="card-body p-0">
              <div
                class="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden"
              >
                <!-- Яндекс.Карты -->
                <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A2369a358715c61c89781318ec5c4f5073d58d19f8807473b45598c9e2eb7f59c&amp;source=constructor"
                  width="100%"
                  height="100%"
                  frameborder="0"
                  class="rounded-t-2xl"
                ></iframe>
              </div>

              <div class="p-8">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div class="text-center group">
                    <div
                      class="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300"
                    >
                      <Icon icon="heroicons:map-pin" class="w-8 h-8 text-white" />
                    </div>
                    <h4 class="font-bold text-gray-800 mb-2 text-lg">Адрес</h4>
                    <p class="text-gray-600">г. Москва, ул. Мясницкая, 13с1</p>
                  </div>

                  <div class="text-center group">
                    <div
                      class="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300"
                    >
                      <Icon icon="heroicons:building-office-2" class="w-8 h-8 text-white" />
                    </div>
                    <h4 class="font-bold text-gray-800 mb-2 text-lg">Метро</h4>
                    <p class="text-gray-600">Станция "Лубянка"<br />(10-15 мин пешком)</p>
                  </div>

                  <div class="text-center group">
                    <div
                      class="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300"
                    >
                      <Icon icon="heroicons:clock" class="w-8 h-8 text-white" />
                    </div>
                    <h4 class="font-bold text-gray-800 mb-2 text-lg">Режим работы</h4>
                    <p class="text-gray-600">Пн-Пт: 9:00-18:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- FAQ Section -->
    <div class="py-20 relative">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <div
            class="inline-flex items-center gap-2 bg-purple-100 text-purple-700 rounded-full px-6 py-3 mb-6"
          >
            <Icon icon="heroicons:question-mark-circle" class="w-5 h-5" />
            <span class="text-sm font-medium">Популярные вопросы</span>
          </div>
          <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Частые вопросы
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Ответы на популярные вопросы о наших услугах и условиях работы
          </p>
        </div>

        <div class="max-w-4xl mx-auto">
          <div class="join join-vertical w-full space-y-4">
            <div
              v-for="(faq, index) in faqItems"
              :key="index"
              class="collapse collapse-plus bg-white/80 backdrop-blur-sm shadow-xl border-0 rounded-2xl"
            >
              <input type="radio" name="faq-accordion" :checked="index === 0" />
              <div class="collapse-title text-xl font-bold text-gray-800 pr-8">
                <div class="flex items-center gap-4">
                  <div
                    class="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0"
                  >
                    <span class="text-white font-bold text-sm">{{ index + 1 }}</span>
                  </div>
                  {{ faq.question }}
                </div>
              </div>
              <div class="collapse-content">
                <div class="pt-4 pl-14">
                  <p class="text-gray-600 text-lg leading-relaxed">
                    {{ faq.answer }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="relative py-20 overflow-hidden">
      <!-- Background with gradient -->
      <div class="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800">
        <div class="absolute inset-0 bg-black/20"></div>
      </div>

      <!-- Floating elements -->
      <div
        class="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-bounce-slow"
      ></div>
      <div
        class="absolute bottom-10 right-10 w-24 h-24 bg-blue-300/20 rounded-full animate-pulse"
      ></div>
      <div
        class="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-300/20 rounded-full animate-ping"
      ></div>

      <div class="container mx-auto px-4 text-center relative z-10">
        <div class="max-w-4xl mx-auto">
          <div
            class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20"
          >
            <Icon icon="heroicons:rocket-launch" class="w-5 h-5 text-yellow-300" />
            <span class="text-sm font-medium text-white">Начните прямо сейчас</span>
          </div>

          <h2
            class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-white"
          >
            Готовы начать
            <span
              class="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent"
            >
              сотрудничество?
            </span>
          </h2>

          <p
            class="text-lg sm:text-xl md:text-2xl mb-12 text-blue-100 max-w-3xl mx-auto leading-relaxed"
          >
            Свяжитесь с нами прямо сейчас и получите бесплатную консультацию. Мы поможем решить
            любые задачи по клинингу!
          </p>

          <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="tel:+79034292665"
              class="btn btn-lg bg-white text-blue-600 border-0 rounded-2xl px-8 py-4 font-bold text-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 group"
            >
              <Icon
                icon="heroicons:phone-20-solid"
                class="w-6 h-6 mr-3 group-hover:animate-pulse"
              />
              Позвонить сейчас
            </a>

            <button
              @click="goToForm"
              class="btn btn-lg bg-transparent border-2 border-white text-white rounded-2xl px-8 py-4 font-bold text-lg hover:bg-white hover:text-blue-600 hover:scale-105 transition-all duration-300 group"
            >
              <Icon
                icon="heroicons:chat-bubble-left-20-solid"
                class="w-6 h-6 mr-3 group-hover:animate-bounce"
              />
              Заполнить форму
            </button>
          </div>

          <div class="mt-12 flex flex-wrap justify-center gap-8 text-white/80">
            <div class="flex items-center gap-2">
              <Icon icon="heroicons:check-circle" class="w-5 h-5 text-green-300" />
              <span>Бесплатная консультация</span>
            </div>
            <div class="flex items-center gap-2">
              <Icon icon="heroicons:check-circle" class="w-5 h-5 text-green-300" />
              <span>Быстрый ответ</span>
            </div>
            <div class="flex items-center gap-2">
              <Icon icon="heroicons:check-circle" class="w-5 h-5 text-green-300" />
              <span>Профессиональный подход</span>
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

.btn {
  transition: all 0.2s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.fade-in-up {
  animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.stagger-1 {
  animation-delay: 0.1s;
}
.stagger-2 {
  animation-delay: 0.2s;
}
.stagger-3 {
  animation-delay: 0.3s;
}
.stagger-4 {
  animation-delay: 0.4s;
}

/* Дополнительные анимации */
@keyframes bounce-slow {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.animate-bounce-slow {
  animation: bounce-slow 3s ease-in-out infinite;
}

/* Градиентная анимация */
@keyframes gradient-shift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient-shift 4s ease infinite;
}

/* Плавное появление */
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out;
}
</style>
