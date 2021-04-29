import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Team from '../views/Team.vue'
import Product from '../views/Product.vue'
import Detail from '../views/Detail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/team',
    name: 'Team',
    component: Team
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
  path: '/detail',
  name: 'Detail',
  component: Detail
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
