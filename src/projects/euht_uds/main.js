import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import 'iview/dist/styles/iview.css';
import i18n from './locales';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
