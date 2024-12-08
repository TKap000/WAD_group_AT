import { createRouter, createWebHashHistory } from 'vue-router';
// import HomeView from '../views/HomeView.vue';
import MainPage from '../views/MainPage.vue';

const routes = [
    {
      path: '/', // Base path
      name: 'main',
      component: () => import('../views/MainPage.vue'), // Load MainPage
    },
    {
      path: '/main', // Additional route pointing to MainPage
      redirect: '/', // Redirect to the base path
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import(/* webpackChunkName: "signup" */ '../views/SignupPage.vue'), // Lazy-loaded Signup page
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ '../views/LoginPage.vue'),
    },
  ];

const router = createRouter({
  history: createWebHashHistory(), // Use hash-based history for SPA navigation
  routes,
});

export default router;
