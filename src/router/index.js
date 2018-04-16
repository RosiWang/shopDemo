import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import navigationBar  from '@/components/NavigationBar'
import generalPage from '@/components/GeneralPage'
import detailPage from '@/components/DetailPage'
import temp_error from '@/components/error'

Vue.use(Router);
Vue.use(VueResource);
export default new Router({
    routes: [
        {
            path: '/item/:list/:listNum/',
            name: 'shop',
            component: navigationBar,
            children:[
                {
                    path:"con",
                    name:"comName",
                    component:generalPage
                }
            ]
        },
        {
            path:"/item/detail",
            name:"detailName",
            component:detailPage
        }
        ,
        {
            path:"/item/error",
            component:temp_error
        }
    ]

})
