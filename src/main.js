import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'


import VueRouter from 'vue-router'
import Routes from './routes';

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  mode: 'history',
})
new Vue({
  render: h => h(App),
  router:router,
}).$mount('#app')
