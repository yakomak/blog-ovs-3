import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
// import createNews from '@/components/createNews'
// import Nues from '@/components/Nues'
import NewsRoot from '@/components/NewsRoot'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component: Hello
    // },
    // {
    //   path: '/nues',
    //   name: 'Nues',
    //   component: Nues
    // },
    // {
    //   path: '/createnews',
    //   name: 'createNews',
    //   component: createNews
    // },
    // {
    //   path: '/hello',
    //   name: 'Hello',
    //   component: Hello
    // },
    {
      path: '/news',
      name: 'NewsRoot',
      component: NewsRoot
    }
  ]
})
