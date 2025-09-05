<script lang="ts" setup>
import { useDateStore } from '@/stores/dateStore'

const dateStore = useDateStore()
</script>

<template>
  <div class="min-h-screen py-35 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Хлебные крошки -->
      <nav class="mb-8">
        <router-link to="/" class="text-blue-600 hover:text-blue-800 text-sm">
          Главная
        </router-link>
        <span class="mx-2 text-gray-400">/</span>
        <span class="text-gray-600 text-sm">Пользовательское соглашение</span>
      </nav>

      <!-- Заголовок -->
      <div class="bg-white rounded-lg shadow-md p-6 mb-8 text-center">
        <h1 class="text-3xl my-element font-bold text-gray-900 mb-4">
          ПОЛЬЗОВАТЕЛЬСКОЕ СОГЛАШЕНИЕ
        </h1>
        <p class="text-gray-600 text-lg">Дата вступления в силу: {{ dateStore.formattedDate }}</p>
      </div>

      <!-- Контент -->
      <div class="bg-white rounded-lg shadow-md p-6 space-y-8">
        <!-- Преамбула -->
        <section>
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">1. Общие положения</h2>
          <div class="space-y-4 text-gray-700">
            <p>
              Настоящее Пользовательское соглашение (далее — «Соглашение») регулирует отношения
              между <strong>БлескOFF</strong> (далее — «Сервис») и Пользователем (далее — «Вы»)
              regarding использования сервиса по подбору клининговых услуг.
            </p>
            <p>
              Используя Сервис, Вы соглашаетесь с условиями настоящего Соглашения. Если Вы не
              согласны с этими условиями, пожалуйста, не используйте Сервис.
            </p>
          </div>
        </section>

        <!-- Термины -->
        <section>
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">2. Определения терминов</h2>
          <div class="space-y-4 text-gray-700">
            <dl class="space-y-3">
              <div class="flex my-element_2">
                <dt class="font-medium text-gray-800 w-48 flex-shrink-0">Сервис:</dt>
                <dd class="text-gray-700">Платформа БлескOFF для подбора клининговых услуг</dd>
              </div>
              <div class="flex my-element_2">
                <dt class="font-medium text-gray-800 w-48 flex-shrink-0">Пользователь:</dt>
                <dd class="text-gray-700">Физическое или юридическое лицо, использующее Сервис</dd>
              </div>
              <div class="flex my-element_2">
                <dt class="font-medium text-gray-800 w-48 flex-shrink-0">Партнер:</dt>
                <dd class="text-gray-700">
                  Клининговая компания, предоставляющая услуги через Сервис
                </dd>
              </div>
              <div class="flex my-element_2">
                <dt class="font-medium text-gray-800 w-48 flex-shrink-0">Заявка:</dt>
                <dd class="text-gray-700">Запрос Пользователя на подбор клининговых услуг</dd>
              </div>
            </dl>
          </div>
        </section>

        <!-- Регистрация -->
        <section>
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">3. Регистрация и учетная запись</h2>
          <div class="space-y-4 text-gray-700">
            <ul class="list-disc list-inside space-y-2 pl-4">
              <li>Для использования некоторых функций Сервиса требуется регистрация</li>
              <li>Вы обязаны предоставлять точную и полную информацию при регистрации</li>
              <li>Вы несете ответственность за сохранность своих учетных данных</li>
              <li>Сервис вправе отказать в регистрации без объяснения причин</li>
            </ul>
          </div>
        </section>

        <!-- Условия использования -->
        <section>
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">
            4. Условия использования Сервиса
          </h2>
          <div class="space-y-4 text-gray-700">
            <p><strong>Вы обязуетесь:</strong></p>
            <ul class="list-disc list-inside space-y-2 pl-4">
              <li>Использовать Сервис только в законных целях</li>
              <li>Не размещать ложную или вводящую в заблуждение информацию</li>
              <li>Не нарушать права интеллектуальной собственности</li>
              <li>Не пытаться взломать или нарушить работу Сервиса</li>
              <li>Не использовать Сервис для рассылки спама</li>
            </ul>
          </div>
        </section>

        <!-- Порядок оказания услуг -->
        <section>
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">5. Порядок оказания услуг</h2>
          <div class="space-y-4 text-gray-700">
            <ul class="list-disc list-inside space-y-2 pl-4">
              <li>Сервис выступает посредником между Пользователем и Партнерами</li>
              <li>
                Окончательные условия оказания услуг согласовываются непосредственно с Партнером
              </li>
              <li>Сервис не несет ответственности за качество услуг, оказанных Партнерами</li>
              <li>Все споры по качеству услуг решаются непосредственно с Партнером</li>
            </ul>
          </div>
        </section>

        <!-- Интеллектуальная собственность -->
        <section>
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">
            6. Интеллектуальная собственность
          </h2>
          <div class="space-y-4 text-gray-700">
            <p>
              Все материалы Сервиса, включая дизайн, текст, графику, логотипы и иные элементы,
              являются интеллектуальной собственностью <strong>БлескOFF</strong> и защищены
              законодательством об интеллектуальной собственности.
            </p>
          </div>
        </section>

        <!-- Ограничение ответственности -->
        <section>
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">7. Ограничение ответственности</h2>
          <div class="space-y-4 text-gray-700">
            <ul class="list-disc list-inside space-y-2 pl-4">
              <li>Сервис предоставляется «как есть» без гарантий любого рода</li>
              <li>Мы не гарантируем бесперебойную работу Сервиса</li>
              <li>
                Мы не несем ответственности за убытки, возникшие в результате использования Сервиса
              </li>
              <li>Ответственность Сервиса ограничена суммой стоимости оказанных услуг</li>
            </ul>
          </div>
        </section>

        <!-- Изменение условий -->
        <section>
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">8. Изменение условий Соглашения</h2>
          <div class="space-y-4 text-gray-700">
            <p>
              Мы оставляем за собой право изменять условия настоящего Соглашения в любое время.
              Изменения вступают в силу с момента их публикации на Сайте. Продолжение использования
              Сервиса после внесения изменений означает Ваше согласие с новыми условиями.
            </p>
          </div>
        </section>

        <!-- Прекращение действия -->
        <section>
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">9. Прекращение действия</h2>
          <div class="space-y-4 text-gray-700">
            <p>
              Мы вправе приостановить или прекратить Ваш доступ к Сервису в случае нарушения условий
              настоящего Соглашения без предварительного уведомления.
            </p>
          </div>
        </section>

        <!-- Применимое право -->
        <section>
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">10. Применимое право</h2>
          <div class="space-y-4 text-gray-700">
            <p>
              Настоящее Соглашение регулируется и толкуется в соответствии с законодательством
              Российской Федерации. Все споры подлежат разрешению в судах по месту нахождения
              <strong>БлескOFF</strong>.
            </p>
          </div>
        </section>

        <!-- Контакты -->
        <section>
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">11. Контактная информация</h2>
          <div class="space-y-4 text-gray-700">
            <div class="bg-gray-50 p-4 rounded-lg">
              <p><strong>Наименование:</strong> БлескOFF</p>
              <p><strong>Email:</strong> blackoff84@mail.ru</p>
              <p><strong>Телефон:</strong> +7 (903) 429-26-65</p>
              <p><strong>Адрес для корреспонденции:</strong> [Юридический адрес]</p>
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

<style scoped>
/* Стили для улучшения читаемости */
dt {
  font-weight: 500;
  color: #374151;
}

dd {
  color: #6b7280;
}
</style>
