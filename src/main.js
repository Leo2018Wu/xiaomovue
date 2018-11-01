import Vue from 'vue'
import App from './App'
import Element from "element-ui"
import 'element-ui/lib/theme-chalk/index.css';
import './style.css'
import store from './store.js'
import router from './router'
import './assets/style.css'
import Axios from "axios"
import lodash from 'lodash'
import clipbord from "vue-clipboard2"
Axios.defaults.baseURL='http://127.0.0.1:3000'
Vue.prototype.$axios = Axios;
Vue.config.productionTip = false
Vue.use(clipbord)
Vue.use(Element)
Vue.use(lodash)
// Vue.use(axios)
// Vue.use(Axios)
// Vue.prototype.$http = Axios

// const router = new Router({
//   routes:routes,
//   mode:'history' //默认时hash模式（#）
// })
new Vue({
  el: '#app',
  components: { App },
  router,
  store:store,
  template: '<App/>'
})
