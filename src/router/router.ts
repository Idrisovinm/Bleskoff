import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/MainContent.vue'),
      meta: { title: 'Топ лучших компаний' },
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: () => import('../views/AboutUs.vue'),
      meta: { title: 'О нас' },
    },
    {
      path: '/cooperation-page',
      name: 'cooperation',
      component: () => import('../views/CooperationPage.vue'),
      meta: { title: 'Cотрудничество' },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFound.vue'),
      meta: { title: '404 - Страница не найдена', hideHeaderFooter: true },
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: () => import('../views/privacy/PrivacyPolicy.vue'),
      meta: { title: 'Политика конфиденциальности' },
    },
    {
      path: '/user-agreement',
      name: 'user-agreement',
      component: () => import('../views/privacy/UserAgreement.vue'),
      meta: { title: 'Пользовательское соглашение' },
    },
    {
      path: '/offer-agreement',
      name: 'offer-agreement',
      component: () => import('../views/privacy/OfferAgreement.vue'),
      meta: { title: 'Договор оферты' },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // Возвращает { top: 0 } для прокрутки в начало экрана
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

router.beforeEach((to, from, next) => {
  const baseTitle = 'BleskOFF | Выбери свою клининговую компанию'
  const pageTitle = (to.meta.title as string) || ''

  document.title = pageTitle ? `${pageTitle} - ${baseTitle}` : baseTitle
  next()
})

export default router
