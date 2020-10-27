import { createWebHistory, createRouter } from "vue-router";
import First from '../components/user/First.vue';
import Main from '../components/Main.vue';
import Registration from '../components/register/Registration.vue';
import Auth from '../components/auth/Auth.vue';

const routes = [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/first',
      name: 'first',
      meta: {
        requiresAuth: true
      },
      component: First
    },
    {
      path: '/auth',
      name: 'auth',
      component: Auth
    },
    {
        path: '/reg',
        name: 'reg',
        component: Registration
    }
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });


  router.beforeEach((from, to, next) => {
    const authenticatedUser = null;
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    if (requiresAuth && ! authenticatedUser) next('login')
    else next();
  })
  
  export default router;