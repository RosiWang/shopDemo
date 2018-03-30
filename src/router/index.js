import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/NavigationBar'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello Rosi',
      component: HelloWorld
    }
  ]
})
