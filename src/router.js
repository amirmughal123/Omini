import Vue from 'vue'
import VueRouter from 'vue-router'

// Imports
import { Dashboard } from '@/pages'
 
Vue.use(VueRouter)


const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    }
  ]
});

export default router;