import Vue from 'vue'

import 'normalize.css/normalize.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App.vue'
import router from './router'

// icon
import '@/icons'

Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
