import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home.vue'
import Login from '@/views/login.vue'
import editorPage from '@/views/editorPage.vue'







Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
  {
    path: '/',
    name: 'ljxc',
    redirect: '/Home'
  }, {
    path: '/Home',
    name: 'Home',
    component: Home,
    children: [{
      path: '/editorPage',
    name: 'editorPage',
    component: editorPage,
    }]
  }, 
  {
    path: '/Login',
    name: 'Login',
    component: Login
  }]
})
