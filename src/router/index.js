import { createRouter, createWebHashHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import FormPage from '../views/FormPage.vue'
import FieldPage from '../views/FieldPage.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
      component: FieldPage
    },
  ]
})

export default router