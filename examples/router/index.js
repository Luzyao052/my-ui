import Vue from 'vue'
import VueRouter from 'vue-router'
import PageButton from '../views/PageButton.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'PageButton',
    component: PageButton
  },
  {
    path: '/pageSlider',
    name: 'PageSlider',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PageSlider.vue')
  },
  {
    path: '/pageDivider',
    name: 'PageDivider',
    component: () => import(/* webpackChunkName: "about" */ '../views/PageDivider.vue')
  },
  {
    path: '/pageHeadline',
    name: 'PageHeadline',
    component: () => import(/* webpackChunkName: "about" */ '../views/PageHeadline.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
