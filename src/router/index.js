import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Users from "@/views/Users";
import Repos from "@/views/Repos";
import PageNotFound from "@/views/PageNotFound";
import SingleUser from "@/views/SingleUser";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/users',
    name: 'Users',
    component: Users
  },
  {
    path: '/users/:login',
    name: 'SingleUser',
    component: SingleUser,
    props: true
  },
  {
    path: '/repos',
    name: 'Repos',
    component: Repos
  },
  {
    path: '/:catchAll(.*)',
    name: 'PageNotFound',
    component: PageNotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
