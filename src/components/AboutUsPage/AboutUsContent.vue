<script setup lang="ts"></script>

<template>
  <!-- Заголовок -->
  <div class="bg-midnight-blue py-6 px-8">
    <h1 class="text-3xl font-bold text-white">О нас</h1>
  </div>

  <!-- Основной контент -->
  <div class="p-8 space-y-6">
    <!-- Вступление -->
    <div class="space-y-4">
      <p class="text-lg text-gray-700">
        <span class="logo text-black text-2xl">Блеск<span>OFF</span></span> – это инновационная
        платформа, созданная для того, чтобы сделать выбор клининговых услуг простым, быстрым и
        надежным.
      </p>
      <p class="text-gray-600">
        Мы объединяем лучшие клининговые компании в одном месте, чтобы вы могли найти идеальное
        решение для своих нужд без лишних хлопот.
      </p>
    </div>

    <!-- Преимущества -->
    <div class="bg-blue-50 p-6 rounded-lg">
      <h2 class="text-xl font-semibold text-blue-600 mb-4">Почему выбирают нас?</h2>
      <ul class="space-y-3">
        <li class="flex items-start">
          <svg
            class="h-5 w-5 text-green-500 mt-1 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
          <span class="text-gray-700"
            ><span class="font-medium">Экономия времени</span> – больше не нужно тратить часы на
            поиски в интернете.
          </span>
        </li>
        <li class="flex items-start">
          <svg
            class="h-5 w-5 text-green-500 mt-1 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
          <span class="text-gray-700"
            ><span class="font-medium">Проверенные компании</span> – мы сотрудничаем только с
            топовыми исполнителями.</span
          >
        </li>
        <li class="flex items-start">
          <svg
            class="h-5 w-5 text-green-500 mt-1 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
          <span class="text-gray-700"
            ><span class="font-medium">Персонализированная помощь</span> – если вы не нашли
            подходящий вариант, мы поможем вам индивидуально.</span
          >
        </li>
        <li class="flex items-start">
          <svg
            class="h-5 w-5 text-green-500 mt-1 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
          <span class="text-gray-700"
            ><span class="font-medium">Прозрачность</span> – честные отзывы и рейтинги для
            уверенного выбора.</span
          >
        </li>
      </ul>
    </div>

    <!-- Миссия -->
    <div class="space-y-2">
      <h2 class="text-xl font-semibold text-blue-600">Наша миссия</h2>
      <p class="text-gray-600">
        Мы стремимся сделать клининговые услуги доступными и удобными для каждого, обеспечивая
        чистоту и комфорт в вашем доме или офисе.
      </p>
    </div>

    <!-- Контакты -->
    <div class="border-t border-gray-200 pt-6">
      <h2 class="text-xl font-semibold text-blue-600 mb-4">Свяжитесь с нами</h2>
      <div class="space-y-3">
        <div class="flex items-center">
          <svg
            class="h-5 w-5 text-blue-500 mr-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            ></path>
          </svg>
          <span class="text-gray-700">bleskoff84@mail.ru</span>
        </div>
        <div class="flex items-center">
          <svg
            class="h-5 w-5 text-blue-500 mr-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            ></path>
          </svg>
          <span class="text-gray-700">+7 (903) 429-26-65</span>
        </div>
        <div class="flex items-center">
          <svg
            class="h-5 w-5 text-blue-500 mr-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
            ></path>
          </svg>
          <span class="text-gray-700">
            <a href="https://t.me/+79034292665" target="_blank" class="hover:underline">Telegram</a
            >,
            <a href="https://wa.me/79034292665" target="_blank" class="hover:underline">WhatsApp</a
            >,
            <a
              href="https://max.ru/u/f9LHodD0cOJRJX6l9Pim3S7F_nmsxfWUUceQxu0qH5qH1uQ3gecVvZFPed0"
              target="_blank"
              class="hover:underline"
              >Max</a
            >
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
