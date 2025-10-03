<script setup lang="ts">
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import ContactModal from './components/ContactModal.vue'
import { useVoximplantStore } from './stores/voximplantStore'

import { useRoute } from 'vue-router'
const route = useRoute()

const voxStore = useVoximplantStore()
voxStore.initializeVoximplant().then((success) => {
  if (success) console.log('Voximplant инициализирован')
})
</script>

<template>
  <div>
    <Header v-if="!route.meta?.hideHeaderFooter" />

    <main class="bg-slate-200">
      <RouterView />
    </main>

    <Footer v-if="!route.meta?.hideHeaderFooter" />
    
    <!-- Глобальное модальное окно для выбора способа связи -->
    <ContactModal />
  </div>
</template>
