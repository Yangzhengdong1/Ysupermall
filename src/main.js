import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import VueLazyLoad from 'vue-lazyload'

import toast from './components/common/toast/index'

Vue.config.productionTip = false

//添加事件总线对象
Vue.prototype.$bus = new Vue()
//安装toast插件
Vue.use(toast)
//安装图片懒加载插件
Vue.use(VueLazyLoad, {
  loading: require('./assets/img/common/placeholder.png')
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
