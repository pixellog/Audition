import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import Vuex from 'vuex';
Vue.use(Vuex);
import './assets/styles/styles.scss';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
// https://bootstrap-vue.js.org/docs/misc/settings
Vue.use(BootstrapVue, {
  BButton: { variant: 'primary' },
  BModal: {
    okTitle: '확인',
    cancelTitle: '취소',
    okVariant: 'danger',
    cancelVariant:'primary border-0',
    headerBgVariant:'dark',
    headerTextVariant:'white',
  },
  BToast: {
    toaster: 'b-toaster-top-center',
    autoHideDelay: 2000,
    variant: 'dark',
    toastClass: null,
    headerClass: 'd-none',
    bodyClass: 'text-center',
  },
});
Vue.use(BootstrapVueIcons);

Vue.config.productionTip = false;

import Routes from './routes';

const router = new VueRouter({
  mode: 'history',
  routes: Routes,
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
