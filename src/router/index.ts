import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/sign-up',
    children: [
      {
        path: '/sign-up',
        name: 'sign-up',
        component: () => import('@/views/sign-up/sign-up.vue'),
      },
      {
        path: '/sign-in',
        name: 'sign-in',
        component: () => import('@/views/sign-in/sign-in.vue'),
      },
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/home.vue'),
      },
      {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: () => import('@/views/not-found/not-found.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
