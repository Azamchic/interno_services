import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/services',
      name: 'services',
      component: () => import('../views/Services.vue')
    },
    
    
  ]
})

export default router
