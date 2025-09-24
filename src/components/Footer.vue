<script setup lang="ts"></script>

<template>
  <footer class="bg-midnight-blue p-12 w-full h-full flex justify-between gap-4 max-sm:flex-col">
    <div class="flex flex-col gap-4">
      <div>
        <div class="logo text-white text-2xl">Блеск<span>OFF</span></div>
        <p class="text-white">© 2025 БлескOFF. Все права защищены.</p>
      </div>
      <div class="flex flex-col gap-2 w-fit">
        <router-link to="/privacy-policy" class="text-gray-600 hover:text-sky-400 text-sm"
          >Политика конфиденциальности
        </router-link>
        <router-link to="/user-agreement" class="text-gray-600 hover:text-sky-400 text-sm"
          >Пользовательское соглашение
        </router-link>
        <router-link to="/offer-agreement" class="text-gray-600 hover:text-sky-400 text-sm"
          >Договор оферты
        </router-link>
      </div>
    </div>
    <div class="flex flex-col gap-4 w-1/2 max-sm:w-full">
      <h2 class="text-lg sm:text-xl text-white">О нас</h2>
      <p class="text-white">
        БлескOFF — это команда, которая экономит Ваше время и помогает в выборе. Наши партнеры это
        проверенные компании на рынке клининговых услуг.
      </p>
    </div>
    <div class="flex flex-col gap-4">
      <h2 class="text-lg sm:text-xl text-white">Контакты</h2>
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
        <a href="tel:+79267323331" class="text-white hover:underline focus:underline"
          >+7 (903) 429-26-65
        </a>
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
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          ></path>
        </svg>
        <p class="text-white">bleskoff84@mail.ru</p>
      </div>
      <div class="flex gap-4">
        <a href="https://wa.me/79034292665" target="_blank" rel="noopener noreferrer">
          <img src="@/assets/whats-app.svg" alt="whats-app" />
        </a>

        <a href="https://t.me/+79034292665" target="_blank" rel="noopener noreferrer">
          <img src="@/assets/telegram-icon.svg" alt="Telegram" />
        </a>

        <a
          href="https://max.ru/u/f9LHodD0cOJRJX6l9Pim3S7F_nmsxfWUUceQxu0qH5qH1uQ3gecVvZFPed0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="@/assets/max-icon.svg" alt="Max" />
        </a>
      </div>
    </div>
  </footer>
</template>

<style>
.logo span {
  color: #00bfff;
}
</style>
