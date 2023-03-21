import {
  createRouter,
  // createWebHistory,
  createWebHashHistory,
} from 'vue-router';

// const routerHistory = createWebHistory();
const routerHash = createWebHashHistory();

import HomePage from './pages/homePage';
import AboutPage from './pages/aboutPage';
import itemAlias from './pages/_itemAlias';
import notFound from './pages/notFound';

const routers = createRouter({
  history: routerHash,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage,
    },
    {
      path: '/:itemAlias', // Dynamic Route
      name: 'dynamic',
      component: itemAlias,
    },
    {
      path: '/notFound', // 404  Not Found
      name: '404',
      component: notFound,
    },
  ],
});

export default routers;
