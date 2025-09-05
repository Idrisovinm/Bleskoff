<template>
  <div class="min-h-screen flex flex-col items-center justify-center p-4">
    <transition
      appear
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
    >
      <div class="text-center max-w-md">
        <h1 class="text-6xl font-bold text-blue-600 mb-4">404</h1>
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Страница не найдена</h2>
        <p class="text-gray-600 mb-8">
          Извините, запрашиваемая страница не существует или была перемещена.
        </p>
        <router-link
          to="/"
          class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-200"
        >
          Вернуться на главную
        </router-link>
      </div>
    </transition>
  </div>
</template>
