// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout.vue'
import VRouter from 'vue-router'
import indexPage from './pages/index'
Vue.use(VRouter)

let router = new VRouter({
  mode:'history',
  routes:[
    {
      path:'/',
      component:indexPage
    }
  ]
})
/* let router = new Router({
  mode:'history',
  routes:[
    {
      path: '/apple',
      component: Apple ,
      children:[
        {
          path:'red',
          component:RedApple
        }
      ]
    },
    {
      path: '/banana',
      component: Banana
  }
  ]
}) */

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})
