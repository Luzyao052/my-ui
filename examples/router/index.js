import Vue from 'vue'
import VueRouter from 'vue-router'
import PageButton from '../views/PageButton.vue'
import PageDivider from '../views/PageDivider.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'PageButton',
    component: PageButton
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/pagedivider',
    name: 'PageDivider',
    component: PageDivider
  }
]

const router = new VueRouter({
  routes
})

export default router
