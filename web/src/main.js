import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/iconfont/iconfont.css'

import './assets/scss/style.scss'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// import style
// import 'swiper/css/swiper.css'
// import 'swiper/dist/css/swiper.css'
// If you use Swiper 6.0.0 or higher  
//  这里的 swiper 版本是 swiper@6.1.2  ，vue-awesome-swiper@4.1.1
import 'swiper/swiper-bundle.css'

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

import Card from './components/Card.vue'
Vue.component('m-card', Card)

import ListCard from './components/ListCard.vue'
Vue.component('m-list-card', ListCard)


import axios from 'axios'
 
const http = axios.create({
  baseURL: process.env.VUE_APP_API_URL || '/web/api',
  // baseURL: 'http://localhost:3002/web/api',
  timeout: 5000
})

Vue.prototype.$http = http



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
