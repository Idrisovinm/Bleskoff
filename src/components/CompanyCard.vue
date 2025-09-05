<script lang="ts" setup>
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import type { Company } from '../types/company'
import { useVoximplantStore } from '@/stores/voximplantStore'

const props = defineProps<{
  company: Company
}>()

const voxStore = useVoximplantStore()

const handleOrder = async () => {
  const success = await voxStore.makeCall(props.company.companyPhone, props.company.name)

  if (!success && !voxStore.error) {
    alert('Не удалось инициировать звонок')
  }
}

const wordCount = computed(() => {
  // Удаляем лишние пробелы и считаем слова
  return props.company.name.trim() === '' ? 0 : props.company.name.trim().split(/\s+/).length
})
</script>

<template>
  <div
    class="card shadow-2xl hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2"
  >
    <figure class="relative h-48 overflow-hidden bg-white">
      <img class="w-full h-full object-cover" :src="company.image" />

      <div
        class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4"
      >
        <h2 class="text-2xl font-bold text-white">{{ company.name }}</h2>
      </div>
    </figure>

    <div class="card-body p-6 max-sm:p-4 bg-white">
      <div class="flex items-center justify-between mb-4">
        <div class="badge badge-lg border-none bg-blue-100 text-blue-700">
          ⭐ {{ company.rating }}/5
        </div>
        <div class="text-primary font-bold text-xl">от {{ company.price }} ₽/м²</div>
      </div>

      <p class="text-gray-600 mb-4 text-lg leading-relaxed">{{ company.description }}</p>

      <div class="collapse collapse-arrow bg-slate-100 transition-all duration-300 ease-in-out">
        <input type="checkbox" class="peer" />
        <div class="collapse-title text-lg font-medium flex items-center text-slate-700">
          <Icon icon="heroicons:list-bullet-20-solid" class="w-5 h-5 mr-2" />
          Услуги
        </div>
        <div class="collapse-content">
          <ul class="space-y-2">
            <li
              v-for="(service, index) in company.services"
              :key="index"
              class="flex justify-between text-lg items-center p-2 bg-white rounded-lg"
            >
              <span class="text-gray-700">{{ service }}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="divider my-4"></div>

      <div class="flex items-center justify-between">
        <a :href="`tel:${company.companyPhone}`" class="btn btn-ghost btn-sm text-primary">
          <Icon icon="heroicons:phone-20-solid" class="w-4 h-4 mr-1" />
          {{ company.companyPhone }}
        </a>
        <button class="btn btn-primary gap-2 max-sm:" @click="handleOrder">
          <Icon icon="heroicons:shopping-cart-20-solid" class="w-4 h-4" />
          Заказать уборку
        </button>
      </div>
    </div>
  </div>
</template>
