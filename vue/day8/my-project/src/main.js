import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './stores/index'
import 'weui'
import './styles/styles.css'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
