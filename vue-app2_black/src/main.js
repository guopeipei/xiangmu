
import Vue from 'vue'
import Vueresource from 'vue-resource'
import VueRouter from 'vue-router'
import VueScroller from 'vue-scroller'
import app from './app'
import VueLazyload from 'vue-lazyload'

import router from './router'

Vue.use(VueScroller)
Vue.use(Vueresource)
Vue.use(VueLazyload,{
  loading:'../static/image/load.jpg'
})

new Vue({
  el:'#app',
  router,
  template: '<app/>',
  components: { app }

})


