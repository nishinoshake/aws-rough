import 'babel-polyfill'
import Vue from 'vue'
import App from './components/App'
import router from './router'
import './assets/scss/index.scss'

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
