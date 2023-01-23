import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'
import ProfileView from '../views/ProfileView.vue'
import LoginView from '../views/LoginView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/products',
    name: 'products',
    // component: () => import(/* webpackChunkName: "products" */ '../views/ProductsView.vue')
    component: ProductsView,
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
