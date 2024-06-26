import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
    // component: HomeView
  },
  {
    path: '/singlefilm',
    name: 'singlefilm',
    component: () => import('../views/SingleFilm.vue')
  }
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  // routes
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
