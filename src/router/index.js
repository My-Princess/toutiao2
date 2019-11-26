import Vue from 'vue'
import VueRouter from 'vue-router'
// 登录
import Login from '../views/login.vue'
// 注册
import Register from '../views/register.vue'
// 个人中心
import Personal from '../views/personal.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: ''

  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/personal',
    name: 'Personal',
    component: Personal
  }
]
// mode: "history"
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router
