import Vue from 'vue'
import Router from 'vue-router'


import shouye from '../components/shouye/shouye.vue'
import product from '../components/product/product.vue'
import xianguang from '../components/xianguang/xianguang.vue'
import shopcart from '../components/shopcart/shopcart.vue'
import mylife from '../components/mylife/mylife.vue'
import center from '../components/center/center.vue'
import newproduce from '../components/newproduce/newproduce.vue'
import register from '../components/register/register.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  linkSelectedClass: 'selected',
  routes: [
    {
      path: '/',
      redirect: '/shouye'
    },
    {
      path: '/',
      redirect: '/shouye:id'
    },
    {
      path: '/shouye',
      component: shouye,

    },
    {
      path: '/product',
      component: product
    },
    {
      path: '/xianguang',
      component: xianguang
    },
    {
      path: '/shopcart',
      component: shopcart
    },
    {
      path: '/center',
      component: center
    },
    {
      path: '/newproduce',
      component: newproduce
    },
    {
      path: '/newproduce/:id',
      component: newproduce
    },
    {
      path: '/mylife',
      component: mylife
    },
    {
      path: '/register',
      component: register
    },

  ]
})
