import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import Timer from '../views/Timer.vue'
import Break from '../views/Break.vue'
import Sessions from '../views/Sessions.vue'

const routes = [
  {
    path: '/Sessions',
    name: 'Sessions',
    component: Sessions

  },

  {
    path: '/Break',
    name: 'Break',
    component: Break
  },

  {
    path: '/Timer',
    name: 'Timer',
    component: Timer
  },

  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
