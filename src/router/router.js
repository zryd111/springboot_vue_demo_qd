import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login.vue'
import User from '@/views/User.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/user',
      name: 'User',
      component: User
    }
  ]
})
