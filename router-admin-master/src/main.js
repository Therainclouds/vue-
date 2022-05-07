import Vue from 'vue'
import App from './App.vue'
import router from '@/components/router'
// 导入样式
import './assets/css/bootstrap.css'
import './index.css'
import * as echarts from 'echarts'
Vue.prototype.$echarts=echarts
Vue.use(echarts)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
