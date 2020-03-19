import 'semantic-ui-css/semantic.css'
import MyButton from './button/button.vue'

export default {
  install (Vue) {
    Vue.component('MyButton', MyButton)
  }
}
