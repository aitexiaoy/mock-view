import Vue from 'vue'
import Antd from 'ant-design-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './components'
import 'ant-design-vue/dist/antd.css'

Vue.config.productionTip = false
Vue.use(Antd)

const appVue=new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')

window.appVue = appVue
