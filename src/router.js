import Vue from 'vue'
import VueRouter from 'vue-router'

// Layouts
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import ProfileLayout from '@/layouts/ProfileLayout.vue';
// Imports
import { Home, Dashboard, Project, Profile, Recruitment } from '@/pages'
import { Portfolio, Community } from '@/components/Profile'
 
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
          path: '/ominios',
          name: 'dashboard',
          meta: { layout: 'default' },
          component: Dashboard
        },
        {
          path: '/my-projects',
          name: 'projects',
          meta: { layout: 'default' },
          component: Project
        },
        {
          path: '/recruitment',
          name: 'recruitment',
          meta: { layout: 'default' },
          component: Recruitment
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
        },
        {
          path: '/portfolio',
          name: 'portfolio',
          meta: { layout: 'default' },
          component: Portfolio
        },
        {
          path: '/community',
          name: 'community',
          meta: { layout: 'default' },
          component: Community
        }
      ]
    }
  ]
});
