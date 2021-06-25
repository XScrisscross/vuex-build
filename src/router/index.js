import Vue from 'vue'
import VueRouter from 'vue-router'
import BasicLayout from '@layout/BasicLayout'

Vue.use(VueRouter)

const files = require.context('./', true, /(^\.\/module)([a-zA-Z/]+)\.js$/)

const modules = files.keys().reduce((res, cur) => {
  const moduleKey = cur.match(/\.\/module-(\S*)\//)[1]
  const module = files(cur).default
  return { ...res, [moduleKey]: module }
}, {})

const routes = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    redirect: '/home',
    children: [],
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
]

const router = new VueRouter({
  routes,
})

router.beforeEach((to, from, next) => {
  next()
})

router.afterEach((to, from) => {})

export default router
