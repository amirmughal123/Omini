import Vue from 'vue'
import VueRouter from 'vue-router'

// Layouts
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import ProfileLayout from '@/layouts/ProfileLayout.vue';
// Imports
import { Home, Dashboard, Team, Project, Profile } from '@/pages'
 
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
          meta: { layout: 'default' },
          component: Home
        },
        {
          path: '/dashboard',
          name: 'dashboard',
          meta: { layout: 'default' },
          component: Dashboard
        },
        {
          path: '/team',
          name: 'team',
          meta: { layout: 'default' },
          component: Team
        },
        {
          path: '/my-projects',
          name: 'projects',
          meta: { layout: 'default' },
          component: Project
        }
      ]
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileLayout,
      children: [
        {
          path: '/profile',
          name: 'overview',
          meta: { layout: 'default' },
          component: Profile
        }
      ]
    }
  ]
});
