import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import MainPage from '../views/MainPage.vue';

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView, // Home page component
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'), // Lazy-loaded About page
  // },
  {
    path: '/main',
    name: 'main',
    component: MainPage, // Main Page component
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import(/* webpackChunkName: "signup" */ '../views/SignupPage.vue'), // Lazy-loaded Signup page
  },
];

const router = createRouter({
  history: createWebHashHistory(), // Use hash-based history for SPA navigation
  routes,
});

export default router;
