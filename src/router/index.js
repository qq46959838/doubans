import Vue from 'vue'
import Router from 'vue-router'
import PagesView from '@/views/PagesView'
import HomeView from '@/views/HomeView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/pages',
      component: PagesView,
      children: [
        {
          path: '',
          redirect: 'home'
        },
        {
          path: 'home',
          name: 'HomeView',
          component: HomeView
        }
      ]
    }
  ]
})
