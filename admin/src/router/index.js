import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    children:[
      {
        path: '/',
        name: 'helloworld',
        component: () => import('../components/HelloWorld.vue')
      },
      {
        path: '/categories/create',
        name: 'category_create',
        component: () => import('../views/CategoryEdit.vue')
      },
      {
        path: '/categories/edit/:id',
        name: 'category_edit',
        component: () => import('../views/CategoryEdit.vue'),
        props:true
      },
      {
        path: '/categories/list',
        name: 'category_list',
        component: () => import('../views/CategoryList.vue')
      },
      // 物品
      {
        path: '/items/create',
        name: 'items_create',
        component: () => import('../views/ItemEdit.vue')
      },
      {
        path: '/items/edit/:id',
        name: 'items_edit',
        component: () => import('../views/ItemEdit.vue'),
        props:true
      },
      {
        path: '/items/list',
        name: 'items_list',
        component: () => import('../views/ItemList.vue')
      },
      // 英雄
      {
        path: '/heroes/create',
        name: 'heroes_create',
        component: () => import('../views/HeroEdit.vue')
      },
      {
        path: '/heroes/edit/:id',
        name: 'heroes_edit',
        component: () => import('../views/HeroEdit.vue'),
        props:true
      },
      {
        path: '/heroes/list',
        name: 'heroes_list',
        component: () => import('../views/HeroList.vue')
      },
      // 文章
      {
        path: '/articles/create',
        name: 'articles_create',
        component: () => import('../views/ArticleEdit.vue')
      },
      {
        path: '/articles/edit/:id',
        name: 'articles_edit',
        component: () => import('../views/ArticleEdit.vue'),
        props:true
      },
      {
        path: '/articles/list',
        name: 'articles_list',
        component: () => import('../views/ArticleList.vue')
      },
       // 广告位
       {
        path: '/ads/create',
        name: 'ads_create',
        component: () => import('../views/AdEdit.vue')
      },
      {
        path: '/ads/edit/:id',
        name: 'ads_edit',
        component: () => import('../views/AdEdit.vue'),
        props:true
      },
      {
        path: '/ads/list',
        name: 'ads_list',
        component: () => import('../views/AdList.vue')
      },
    ]
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import('../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
