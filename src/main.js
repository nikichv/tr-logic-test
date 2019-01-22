import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;

/**
 * Save user cart in localStorage
 * @param arr
 */
function saveCartInLocalStorage(arr) {
  return window.localStorage.setItem('cart', JSON.stringify(arr));
}

store.subscribe(() => {
  saveCartInLocalStorage(store.state.cart.items);
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
