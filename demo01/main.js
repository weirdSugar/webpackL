import Vue from 'vue'
import app from './main.vue'

const root = document.createElement('div')
document.body.appendChild(root)
new Vue({
  render: (h) => h(app)
}).$mount(root)