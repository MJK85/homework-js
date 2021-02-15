import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import PageNotFound from "@/views/PageNotFound";
import SingleUser from "@/views/SingleUser";
import SingleRepo from "@/views/SingleRepo";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/users/:login',
    name: 'SingleUser',
    component: SingleUser,
    props: true
  },
  {
    path: '/repos/:id',
    name: 'SingleRepo',
    component: SingleRepo,
    props: true
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
