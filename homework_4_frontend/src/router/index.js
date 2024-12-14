import { createRouter, createWebHashHistory } from 'vue-router';
// import HomeView from '../views/HomeView.vue';
import MainPage from '../views/MainPage.vue';
import auth from "../auth";
import AllPosts from "../views/AllPosts.vue";
import APost from "../views/APost.vue";
import AddPost from "../views/AddPost.vue";
import ContactPage
 from '../views/ContactPage.vue';
const routes = [
    {
      path: '/api/Allposts', // Base path
      name: 'allposts',
      //component: () => import('../views/MainPage.vue'), // Load MainPage
      component: AllPosts,
        beforeEnter: async(to, from, next) => {
            let authResult = await auth.authenticated();
            if (!authResult) {
                next('/login')
            } else {
                next();
            }
        }
    },
    // {
    //   path: '/main', // Additional route pointing to MainPage
    //   redirect: '/', // Redirect to the base path
    // },
    {
        path: '/signup', // Signup Page
        name: 'signup',
        component: () => import(/* webpackChunkName: "signup" */ '../views/SignupPage.vue'), // Lazy-loaded Signup page
    },
    {
        path: '/login', // Login Page
        name: 'login',
        component: () => import(/* webpackChunkName: "login" */ '../views/LoginPage.vue'),
    },
    {
        path: '/contact', // Public Contact Page
        name: 'contact',
        component: () => import('../views/ContactPage.vue'), // Load ContactPage
    },
    {
        path: '/api/apost/:id', // View a single post
        name: 'apost',
        component: APost,
    },
    {
        path: '/api/addpost', // Add a new post
        name: 'addpost',
        component: AddPost,
    },
    {
        path: '/:pathMatch(.*)*', // Catch-All Route
        redirect: '/api/Allposts', // Redirect to Home
    },
    
  ];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL), // Use hash-based history for SPA navigation
  routes,
});

export default router;
