import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/sign-up',
    children: [
      {
        path: '/sign-up',
        name: 'sign-up',
        component: () => import('@/views/sign-up.vue'),
      },
      {
        path: '/sign-in',
        name: 'sign-in',
        component: () => import('@/views/sign-up.vue'),
      },
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home.vue'),
      },
      {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: () => import('@/views/not-found.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
