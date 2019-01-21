import Vue from 'vue';
import Router from 'vue-router';

const Catalog = () => import(/* webpackChunkName: "pages-catalog" */ './views/Catalog');
const Cart = () => import(/* webpackChunkName: "pages-basket" */ './views/Cart');

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'catalog',
      component: Catalog,
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
    },
  ],
});
