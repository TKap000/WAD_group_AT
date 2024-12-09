import { createRouter, createWebHashHistory } from 'vue-router';
// import HomeView from '../views/HomeView.vue';
import MainPage from '../views/MainPage.vue';
import auth from "../auth";

const routes = [
    {
      path: '/', // Base path
      name: 'main',
      //component: () => import('../views/MainPage.vue'), // Load MainPage
      component: MainPage,
        beforeEnter: async(to, from, next) => {
            let authResult = await auth.authenticated();
            if (!authResult) {
                next('/login')
            } else {
                next();
            }
        }
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
    {
      path: "/contact",
      name: "contact",
      // route level code-splitting
      // this generates a separate chunk (contact.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
          import ( /* webpackChunkName: "about" */ "../views/ContactPage.vue"),
    },
  ];

const router = createRouter({
  history: createWebHashHistory(), // Use hash-based history for SPA navigation
  routes,
});

export default router;
