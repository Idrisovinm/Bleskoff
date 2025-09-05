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
        <span class="text-gray-600 text-sm">Договор оферты</span>
      </nav>

      <!-- Заголовок -->
      <div class="bg-white rounded-lg shadow-md p-6 mb-8 text-center">
        <h1 class="text-3xl my-element font-bold text-gray-900 mb-4">ДОГОВОР ПУБЛИЧНОЙ ОФЕРТЫ</h1>
        <p class="text-gray-600 text-lg">на оказание услуг по подбору клининговых компаний</p>
        <p class="text-gray-500 text-sm mt-2">Дата публикации: {{ dateStore.formattedDate }}</p>
      </div>

      <!-- Контент -->
      <div class="bg-white rounded-lg shadow-md p-6 space-y-8">
        <!-- Преамбула -->
        <section>
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">Статья 1. Общие положения</h2>
          <div class="space-y-4 text-gray-700">
            <p>
              1.1. Настоящий Договор является официальным предложением (публичной офертой)
              <strong>БлескOFF</strong> (далее — «Исполнитель») заключить договор на оказание услуг
              по подбору клининговых компаний на условиях, изложенных ниже.
            </p>
            <p>
              1.2. В соответствии с пунктом 2 статьи 437 Гражданского кодекса РФ, в случае принятия
              изложенных ниже условий и оплаты услуг, физическое или юридическое лицо, производящее
              акцепт этой оферты, становится Заказчиком.
            </p>
            <p>
              1.3. Акцептом оферты считается совершение Заказчиком действий, направленных на
              использование услуг Исполнителя, включая但不限于 оформление заявки, оплату услуг.
            </p>
          </div>
        </section>

        <!-- Предмет договора -->
        <section>
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">Статья 2. Предмет договора</h2>
          <div class="space-y-4 text-gray-700">
            <p>
              2.1. Исполнитель обязуется оказать Заказчику услуги по подбору клининговых компаний
              (далее — «Услуги»), а Заказчик обязуется оплатить эти Услуги.
            </p>
            <p>
              2.2. Конкретный перечень и объем Услуг определяются на основании заявки Заказчика и
              подтверждаются Исполнителем.
            </p>
          </div>
        </section>

        <!-- Порядок оказания услуг -->
        <section>
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">
            Статья 3. Порядок оказания услуг
          </h2>
          <div class="space-y-4 text-gray-700">
            <p>3.1. Для получения Услуг Заказчик:</p>
            <ul class="list-decimal list-inside space-y-2 pl-6">
              <li>Оставляет заявку на сайте Исполнителя</li>
              <li>Предоставляет необходимую информацию для подбора клининговой компании</li>
              <li>Оплачивает Услуги в соответствии с выбранным тарифом</li>
            </ul>
            <p>
              3.2. Исполнитель в течение 24 часов с момента получения заявки предоставляет Заказчику
              подборку подходящих клининговых компаний.
            </p>
          </div>
        </section>

        <!-- Стоимость и порядок оплаты -->
        <section>
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">
            Статья 4. Стоимость услуг и порядок оплаты
          </h2>
          <div class="space-y-4 text-gray-700">
            <p>
              4.1. Стоимость Услуг определяется согласно действующему прайс-листу, размещенному на
              сайте Исполнителя.
            </p>
            <p>4.2. Оплата Услуг производится путем 100% предоплаты.</p>
            <p>
              4.3. Оплата считается произведенной с момента поступления денежных средств на
              расчетный счет Исполнителя.
            </p>
          </div>
        </section>

        <!-- Права и обязанности сторон -->
        <section>
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">
            Статья 5. Права и обязанности сторон
          </h2>

          <div class="space-y-6">
            <!-- Обязанности Исполнителя -->
            <div>
              <h3 class="text-lg font-semibold text-gray-800 mb-3">5.1. Исполнитель обязуется:</h3>
              <ul class="list-disc list-inside space-y-2 pl-6">
                <li>Оказать Услуги в соответствии с условиями настоящего Договора</li>
                <li>Предоставить квалифицированные консультации по подбору клининговых компаний</li>
                <li>Обеспечить конфиденциальность информации, полученной от Заказчика</li>
              </ul>
            </div>

            <!-- Обязанности Заказчика -->
            <div>
              <h3 class="text-lg font-semibold text-gray-800 mb-3">5.2. Заказчик обязуется:</h3>
              <ul class="list-disc list-inside space-y-2 pl-6">
                <li>Предоставить достоверную информацию, необходимую для оказания Услуг</li>
                <li>Оплатить Услуги в порядке и сроки, предусмотренные Договором</li>
                <li>Соблюдать условия настоящего Договора</li>
              </ul>
            </div>

            <!-- Права Исполнителя -->
            <div>
              <h3 class="text-lg font-semibold text-gray-800 mb-3">5.3. Исполнитель вправе:</h3>
              <ul class="list-disc list-inside space-y-2 pl-6">
                <li>
                  Требовать от Заказчика предоставления информации, необходимой для оказания Услуг
                </li>
                <li>Приостановить оказание Услуг в случае неуплаты Заказчиком</li>
                <li>Вносить изменения в прайс-лист с уведомлением Заказчика</li>
              </ul>
            </div>
          </div>
        </section>

        <!-- Ответственность сторон -->
        <section>
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">
            Статья 6. Ответственность сторон
          </h2>
          <div class="space-y-4 text-gray-700">
            <p>
              6.1. За неисполнение или ненадлежащее исполнение обязательств по Договору Стороны
              несут ответственность в соответствии с действующим законодательством РФ.
            </p>
            <p>
              6.2. Исполнитель не несет ответственности за качество услуг, оказанных клининговыми
              компаниями, подобранными для Заказчика.
            </p>
            <p>
              6.3. Максимальная ответственность Исполнителя ограничивается суммой оплаты, полученной
              от Заказчика по настоящему Договору.
            </p>
          </div>
        </section>

        <!-- Конфиденциальность -->
        <section>
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">Статья 7. Конфиденциальность</h2>
          <div class="space-y-4 text-gray-700">
            <p>
              7.1. Стороны обязуются сохранять конфиденциальность информации, полученной в ходе
              исполнения настоящего Договора.
            </p>
            <p>
              7.2. Исполнитель обязуется не передавать персональные данные Заказчика третьим лицам,
              за исключением случаев, предусмотренных законодательством РФ.
            </p>
          </div>
        </section>

        <!-- Форс-мажор -->
        <section>
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">Статья 8. Форс-мажор</h2>
          <div class="space-y-4 text-gray-700">
            <p>
              8.1. Стороны освобождаются от ответственности за неисполнение обязательств по
              Договору, если это неисполнение вызвано обстоятельствами непреодолимой силы.
            </p>
          </div>
        </section>

        <!-- Срок действия и изменение договора -->
        <section>
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">
            Статья 9. Срок действия и изменение Договора
          </h2>
          <div class="space-y-4 text-gray-700">
            <p>
              9.1. Договор вступает в силу с момента акцепта оферты Заказчиком и действует до
              полного исполнения обязательств Сторонами.
            </p>
            <p>
              9.2. Исполнитель вправе в одностороннем порядке изменять условия Договора с
              уведомлением Заказчика путем публикации новой редакции на сайте.
            </p>
          </div>
        </section>

        <!-- Реквизиты -->
        <section>
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">
            Статья 10. Реквизиты и контактная информация
          </h2>
          <div class="space-y-4 text-gray-700">
            <div class="bg-gray-50 p-6 rounded-lg">
              <h3 class="text-lg font-semibold text-gray-800 mb-3">Исполнитель:</h3>
              <div class="space-y-2">
                <p><strong>Наименование:</strong> БлескOFF</p>
                <p><strong>Юридический адрес:</strong> [Ваш юридический адрес]</p>
                <p><strong>ИНН:</strong> [Ваш ИНН]</p>
                <p><strong>ОГРН:</strong> [Ваш ОГРН]</p>
                <p><strong>Расчетный счет:</strong> [Ваш р/с]</p>
                <p><strong>Банк:</strong> [Наименование банка]</p>
                <p><strong>БИК:</strong> [БИК банка]</p>
                <p><strong>Корреспондентский счет:</strong> [Корр. счет]</p>
                <p><strong>Телефон:</strong> +7 (903) 429-26-65</p>
                <p><strong>Email:</strong> blackoff84@mail.ru</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Подписи -->
        <section>
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">Статья 11. Подписи сторон</h2>
          <div class="space-y-4 text-gray-700">
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-gray-50 p-4 rounded-lg">
                <p class="font-semibold text-center mb-4">ИСПОЛНИТЕЛЬ</p>
                <p class="text-center">БлескOFF</p>
                <div class="mt-4 pt-4 border-t border-gray-200">
                  <p class="text-sm text-gray-500">М.П.</p>
                </div>
              </div>
              <div class="bg-gray-50 p-4 rounded-lg">
                <p class="font-semibold text-center mb-4">ЗАКАЗЧИК</p>
                <p class="text-center">[ФИО/Наименование]</p>
                <div class="mt-4 pt-4 border-t border-gray-200">
                  <p class="text-sm text-gray-500">Подпись __________</p>
                </div>
              </div>
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
/* Специфические стили для юридического документа */
.list-decimal {
  list-style-type: decimal;
}

.list-disc {
  list-style-type: disc;
}
</style>
