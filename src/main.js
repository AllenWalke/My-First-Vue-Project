// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout.vue'
import VRouter from 'vue-router'
import indexPage from './pages/index'
import DetailPage from './pages/detail.vue'
import VueResource from 'vue-resource'
import DetailAnaPage from './pages/detail/analysis'
import DetailCouPage from './pages/detail/count'
import DetailForPage from './pages/detail/forecast'
import DetailPubPage from './pages/detail/publish'
Vue.use(VRouter)
Vue.use(VueResource)

let router = new VRouter({
  mode:'history',
  routes:[
    {
      path:'/',
      component:indexPage
    },
    {
      path:'/detail',
      component:DetailPage,
      redirect:'/detail/analysis',
      children:[
        {
          path:'analysis',
          component:DetailAnaPage
        }, {
          path:'count',
          component:DetailCouPage
        }, {
          path:'forecast',
          component:DetailForPage
        }, {
          path:'publish',
          component:DetailPubPage
        }
      ]
    }
  ]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})
