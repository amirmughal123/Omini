import Vue from 'vue'
import VueRouter from 'vue-router'

// Layouts
import DefaultLayout from '@/layouts/DefaultLayout.vue'
// Imports
import { Home, Dashboard } from '@/pages'
 
Vue.use(VueRouter)


export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: DefaultLayout,
      children: [
        {
          path: '/',
          name: 'home',
          meta: {layout: 'default'},
          component: Home
        },
        {
          path: '/dashboard',
          name: 'dashboard',
          meta: {layout: 'default'},
          component: Dashboard
        }
      ]
    },
    
  ]
});
