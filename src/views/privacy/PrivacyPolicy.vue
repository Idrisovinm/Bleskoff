<script lang="ts" setup>
import { useDateStore } from '@/stores/dateStore'

const dateStore = useDateStore()
</script>

<template>
  <div class="min-h-screen bg-gray-50 py-35">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Хлебные крошки -->
      <nav class="mb-8">
        <router-link to="/" class="text-blue-600 hover:text-blue-800 text-sm">
          Главная
        </router-link>
        <span class="mx-2 text-gray-400">/</span>
        <span class="text-gray-600 text-sm">Политика конфиденциальности</span>
      </nav>

      <!-- Заголовок -->
      <div class="bg-white rounded-lg shadow-md p-6 mb-8 text-center">
        <h1 class="text-3xl my-element font-bold text-gray-900 mb-4">
          ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ
        </h1>
        <p class="text-gray-600 text-lg">Последнее обновление: {{ dateStore.formattedDate }}</p>
      </div>

      <!-- Контент -->
      <div class="bg-white rounded-lg shadow-md p-6 space-y-8">
        <!-- Раздел 1 -->
        <section>
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">1. Общие положения</h2>
          <div class="space-y-4 text-gray-700">
            <p>
              Настоящая Политика конфиденциальности персональных данных (далее — Политика
              конфиденциальности) действует в отношении всей информации, которую сайт
              <strong>БлескOFF</strong> может получить о Пользователе во время использования сайта.
            </p>
          </div>
        </section>

        <!-- Раздел 2 -->
        <section>
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">
            2. Персональная информация Пользователей
          </h2>
          <div class="space-y-4 text-gray-700">
            <p>Мы можем собирать следующие типы персональной информации:</p>
            <ul class="list-disc list-inside space-y-2 pl-4">
              <li>ФИО и контактные данные (телефон, email)</li>
              <li>Информация о компании</li>
              <li>Данные о заказах и предпочтениях</li>
              <li>Технические данные (IP-адрес, тип браузера)</li>
            </ul>
          </div>
        </section>

        <!-- Раздел 3 -->
        <section>
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">
            3. Цели сбора персональной информации
          </h2>
          <div class="space-y-4 text-gray-700">
            <ul class="list-disc list-inside space-y-2 pl-4">
              <li>Обработка заявок и предоставление услуг</li>
              <li>Связь с Пользователем</li>
              <li>Улучшение качества наших услуг</li>
              <li>Информирование о новых услугах и акциях</li>
            </ul>
          </div>
        </section>

        <!-- Раздел 4 -->
        <section>
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">
            4. Обработка персональных данных
          </h2>
          <div class="space-y-4 text-gray-700">
            <p>Обработка персональных данных осуществляется на основе принципов:</p>
            <ul class="list-disc list-inside space-y-2 pl-4">
              <li>Законности и справедливости</li>
              <li>Ограничения обработки достижением конкретных целей</li>
              <li>Недопустимости обработки избыточных данных</li>
              <li>Обеспечения точности и актуальности данных</li>
            </ul>
          </div>
        </section>

        <!-- Раздел 5 -->
        <section>
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">
            5. Защита персональной информации
          </h2>
          <div class="space-y-4 text-gray-700">
            <p>
              Мы принимаем необходимые организационные и технические меры для защиты персональной
              информации Пользователя от неправомерного или случайного доступа, уничтожения,
              изменения, блокирования, копирования, распространения, а также от иных неправомерных
              действий третьих лиц.
            </p>
          </div>
        </section>

        <!-- Раздел 6 -->
        <section>
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">6. Передача персональных данных</h2>
          <div class="space-y-4 text-gray-700">
            <p>Мы не передаем персональные данные третьим лицам, за исключением:</p>
            <ul class="list-disc list-inside space-y-2 pl-4">
              <li>Случаев, предусмотренных законодательством РФ</li>
              <li>Партнеров, участвующих в оказании услуг</li>
              <li>С согласия Пользователя</li>
            </ul>
          </div>
        </section>

        <!-- Раздел 7 -->
        <section>
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">
            7. Изменение Политики конфиденциальности
          </h2>
          <div class="space-y-4 text-gray-700">
            <p>
              Мы имеем право вносить изменения в настоящую Политику конфиденциальности. При
              изменении актуальная версия всегда доступна на этой странице.
            </p>
          </div>
        </section>

        <!-- Раздел 8 -->
        <section>
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">8. Контактная информация</h2>
          <div class="space-y-4 text-gray-700">
            <p>По всем вопросам обращайтесь:</p>
            <div class="bg-gray-50 p-4 rounded-lg">
              <p><strong>Email:</strong> blackoff84@mail.ru</p>
              <p><strong>Телефон:</strong> +7 (903) 429-26-65</p>
              <p><strong>Адрес:</strong> [Ваш юридический адрес]</p>
            </div>
          </div>
        </section>
      </div>

      <!-- Кнопка возврата -->
      <div class="mt-8 text-center">
        <router-link
          to="/"
          class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-200"
        >
          ← Вернуться на главную
        </router-link>
      </div>
    </div>
  </div>
</template>
