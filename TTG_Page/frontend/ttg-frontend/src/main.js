import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import './assets/for-client/vendor/bootstrap/css/bootstrap.min.css';

import './assets/for-client/font/font1.css';
import './assets/for-client/font/font2.css';
import './assets/for-client/font/font3.css';
import './assets/for-client/font/font4.css';

import './assets/for-client/vendor/fontawesome-free/css/all.min.css';
import './assets/for-client/css/agency.min.css';
import './assets/for-admin/css/sb-admin-2.min.css';


import './assets/jquery-global';

import './assets/for-client/vendor/bootstrap/js/bootstrap.bundle';
import './assets/for-client/vendor/jquery-easing/jquery.easing';
import './assets/for-client/js/jqBootstrapValidation';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
