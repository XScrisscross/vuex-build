export default [
  {
    path: '/viewA',
    component: () => import(/* webpackChunkName: "sectionA" */ '@/views/sectionB/ViewA.vue'),
    name: 'viewA',
    meta: {
      title: 'sectionA 视图A',
    },
  },
  {
    path: '/viewB',
    component: () => import(/* webpackChunkName: "sectionA" */ '@/views/sectionB/ViewB.vue'),
    name: 'viewB',
    meta: {
      title: 'sectionB 视图B',
    },
  },
]