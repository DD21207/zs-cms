// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import {
  post,
  fetch,
  patch,
  put
} from './api/ajax'
import store from './store/store'

import axios from 'axios'
import 'babel-polyfill'
import $ from 'jquery'
import Es6Promise from 'es6-promise'
import '../static/js/kindeditor/themes/default/default.css'
import '../static/js/kindeditor/kindeditor-all-min.js'
import '../static/js/kindEditor/lang/zh_CN.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);




//兼容低版本浏览器 promise
Es6Promise.polyfill();

//Vuex状态管理
Vue.use(Vuex)



Vue.config.productionTip = false




// vux点击事件优化
const FastClick = require('fastclick');
FastClick.attach(document.body);

//$http引用axios做ajax请求
Vue.prototype.$http = axios
Vue.prototype.$post = post;
Vue.prototype.$fetch = fetch;
Vue.prototype.$patch = patch;
Vue.prototype.$put = put;



/* eslint-disable no-new */
window.vm = new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
