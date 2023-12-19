import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import FormPage from '../views/FormPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: LoginPage
    },
    {
      path: '/forms',
      component: FormPage
    },
    {
      path: '/fields',
      component: FormPage
    },
  ]
})

export default router