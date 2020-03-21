<template>
  <div class="container">
    <div class="ui horizontal divider header">
      <!-- 如果传入了icon,就： -->
      <!-- 显示 i标签 -->
      <!-- 设置class -->
      <i v-if="icon" class="icon" :class="icon"></i>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyDivider',
  props: {
    icon: {
      type: String,
      default: '',
      required: false
    }
  }
}
</script>

<style scoped lang='less'></style>
