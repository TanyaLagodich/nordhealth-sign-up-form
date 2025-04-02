import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/sign-up',
    children: [
      {
        path: '/sign-up',
        name: 'sign-up',
        component: () => import('@/views/SignUp.vue'),
      },
      {
        path: '/sign-in',
        name: 'sign-in',
        component: () => import('@/views/SignUp.vue'),
      },
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: () => import('@/views/NotFound.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
