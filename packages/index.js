import 'semantic-ui-css/semantic.css'
import MyButton from './button/button.vue'
import MyDivider from './divider/divider.vue'
import MySlider from './slider/slider.vue'

export default {
  install (Vue) {
    Vue.component('MyButton', MyButton)
    Vue.component('MyDivider', MyDivider)
    Vue.component('MySlider', MySlider)
  }
}
