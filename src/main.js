import Vue from 'vue'
import App from './App.vue'
// import 'lib-flexible'
import VueMarquee from './packages/index'

Vue.use(VueMarquee);

new Vue({
  el: '#app',
  render: h => h(App)
})
