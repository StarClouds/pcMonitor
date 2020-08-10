// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import NProgress from 'nprogress';
import vueSeamlessScroll from 'vue-seamless-scroll';
import moment from 'moment';
import App from './App';
import router from './router';
import store from './store';
import './api';
import 'nprogress/nprogress.css';
import interval from './assets/js/commonInstall';
import commonVue from './utils/commonVue';

Vue.use(ElementUI);
Vue.use(interval);
Vue.use(vueSeamlessScroll);
Vue.mixin(commonVue);
Vue.prototype.$moment = moment;

Vue.config.productionTip = false;

NProgress.configure({ showSpinner: false });

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
