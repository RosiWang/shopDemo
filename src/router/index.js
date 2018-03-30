import Vue from 'vue'
import Router from 'vue-router'
import navigationBar  from '@/components/NavigationBar'
import generalPage from '@/components/GeneralPage'
import detailPage from '@/components/DetailPage'
import temp_error from '@/components/error'

Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '/',
            name: 'shop',
            component: navigationBar,
            children:[
                {
                    path:"detail",
                    component:detailPage
                }
                   ]
        }
        ,
        {
            path:"/item/error",
            component:temp_error
        }
    ]

})
