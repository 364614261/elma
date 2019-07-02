// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// vuex
import Vuex from 'vuex'
Vue.use(Vuex)
//swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)
//ajax
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
//UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// vant
import '@vant/touch-emulator';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  //注入路由
  router,
  // 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
  store,
  components: { App },
  template: '<App/>'
})
