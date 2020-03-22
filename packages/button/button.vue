<template>
  <div class="container">
    <!-- <button class="ui button" :class="cClass"> -->
    <!-- 如果用户设置了icon属性，则显示图标 -->
    <!-- <i v-if="icon" class="icon" :class="icon"></i> -->
    <!-- <slot>我是一个按钮</slot> -->
    <!-- </button> -->

    <!-- slot:插槽。 -->
    <div class="ui button" :class="cClass" @click="hEmitClick">
      <template v-if="animated">
        <!-- $slots表示收集到的所有的插槽 -->
        <!-- hidden content 是在semantic-ui约定的类 -->
        <!-- visible content 是在semantic-ui约定的类 -->
        <div v-if="$slots.hidden" class="hidden content">
          <!-- 具名插槽 -->
          <slot name="hidden"></slot>
        </div>
        <div v-if="$slots.visible" class="visible content">
          <!-- 具名插槽 -->
          <slot name="visible"></slot>
        </div>
      </template>
      <template v-else>
        <!-- 不带动画效果的按钮 -->
        <!-- 如果用户设置了icon属性，则显示图标 -->
        <i v-if="icon" class="icon" :class="icon"></i>
        <slot>我是默认内容</slot>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyButton',
  props: {
    size: {
      type: String,
      default: 'medium',
      validator (val) {
        // 只要传入 size属性，就会
        // 进入到这个函数中，
        // 如返回true,则表示生效。
        // 如返回false，则表示不允许

        // 检验思路：
        // 如果传入的size是：mini,medium,huge,massive.... 就ok
        // 否则就返回false
        // console.log(val)
        return [
          'mini',
          'tiny',
          'small',
          'medium',
          'large',
          'big',
          'huge',
          'massive'
        ].includes(val)
      }
    },
    icon: {
      type: String,
      required: false
    },
    disabled: {
      type: Boolean,
      // 默认 不是 禁用状态
      default: false
    },
    loading: {
      type: Boolean,
      // 默认 不要启用loading状态
      default: false
    },
    animated: {
      type: String,
      default: ''
    }
  },
  computed: {
    cClass () {
      // 1. 用数组收集类名
      var classArr = [this.size]
      // 当前用户是否启用动画
      // 如果启用了动画，要添加两个类 : animated 动画的名字
      this.animated && classArr.push(`animated ${this.animated}`)
      // 收集收到的属性值，并分析一下
      // 返回class给按钮外层容器
      this.loading && classArr.push('loading')
      this.disabled && classArr.push('disabled')
      // if (this.loading) {
      //   // 如果是Loading状态，则要添加一个loading类
      //   classArr.push('loading')
      // }
      // if (this.disabled) {
      //   // 用户开启禁用
      //   // disabled 是semantic-ui中一个特殊的class类名。
      //   classArr.push('disabled')
      // }
      // console.log(classArr.join(' '))
      return classArr.join(' ')
    }
  },
  methods: {
    hEmitClick () {
      this.$emit('click')
    }
  }
}
</script>

<style scoped lang='less'></style>
