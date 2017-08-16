// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import Apple from './components/apple.vue'
import Banana from './components/banana.vue'
Vue.use(Router)


let router = new Router({
  mode:'history',
  routes:[
    { path: '/apple/:color', component: Apple },
    { path: '/banana', component: Banana }
  ]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
