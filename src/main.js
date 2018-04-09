import 'babel-polyfill'
import Vue from 'vue'
import VueAnalytics from 'vue-analytics'
import App from './components/App'
import router from './router'
import './assets/scss/index.scss'

Vue.use(VueAnalytics, {
  id: 'UA-53153991-13',
  router
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
