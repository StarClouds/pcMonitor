import Vue from 'vue';
import Router from 'vue-router';

const NotFound = () => import('../views/404');
const Home = () => import('../views/Home');
const Tool = () => import('../views/Tool');

Vue.use(Router);

const routes = [
  {
    path: '/',
    redirect: '/tool',
    component: Home,
    children: [
      // {
      //   path: '/main-page-old',
      //   component: MainPage,
      // },
      {
        path: '/tool',
        component: Tool,
      },
    ],
  },
  {
    path: '/404',
    component: NotFound,
  },
  {
    path: '*',
    redirect: {
      path: '/404',
    },
  },
];

const router = new Router({
  routes,
});

export default router;
