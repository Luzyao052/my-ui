
<script>
export default {
  name: 'MyHeadline',
  // 定义属性来收集用户的输入
  props: {
    level: {
      type: Number, // h1,h2,h3...
      default: 1,
      required: false
    },
    icon: {
      type: String, // 图标
      default: '', // 默认没有图标
      required: false
    },
    size: {
      type: String, // 大小
      default: 'medium', // 默认为medium
      required: false
    }
  },
  render (h) {
  //   <h2 class="ui header" :class="size">
  //   <i class="icon" :class="icon" v-if="icon"></i>
  //   <div class="content">
  //     <slot></slot>
  //     <div class="sub header"><slot name="sub"></slot></div>
  //   </div>
  // </h2>
    let icon = null
    let content = null
    if (this.icon) {
      icon = h('i', { class: 'icon ' + this.icon })
    }
    // console.log(this.$slots)
    // 是否有具名插槽
    if (this.$slots.sub) {
      // 是有副标题的
      // 创建副标题
      const subContent = h('div', { class: 'sub header' }, [this.$slots.sub])
      // 内容包含两个部分：默认插槽 + 具名插槽
      content = h('div', { class: 'content' }, [this.$slots.default, subContent])
    } else {
      content = h('div', { class: 'content' }, [this.$slots.default])
    }
    return h('h' + this.level, { class: 'ui ' + this.size + ' header' }, [icon, content])
  }
}
</script>

<style scoped lang='less'></style>
