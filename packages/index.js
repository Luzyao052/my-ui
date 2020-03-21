import 'semantic-ui-css/semantic.css'
import MyButton from './button/button.vue'
import MyDivider from './divider/divider.vue'

export default {
  install (Vue) {
    Vue.component('MyButton', MyButton)
    Vue.component('MyDivider', MyDivider)
  }
}
