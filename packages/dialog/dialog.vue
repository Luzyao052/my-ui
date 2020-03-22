<template>
  <div class="ui dimmer modals page" :class="{active:isShow}">
    <div class="ui standard modal" :class="{active:isShow}" style="top: 60px;">
      <i class="close icon" @click="hClose"></i>
      <div class="header">头部</div>
      <div class="content">
        <div class="description">内容</div>
      </div>
      <div class="actions">
        <div class="ui black button">Nope</div>
        <div class="ui positive right labeled icon button">
          Yep, that's me
          <i class="checkmark icon"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyDialog',
  props: {
    value: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  data () {
    return {
      // 由于后期要修改显示/隐藏，我们不能直接在prop中修改，所以这里添加一个数据项 isSHow
      isShow: this.value
    }
  },
  watch: {
    value () {
      // console.log(this.value)
      // 更新子组件内部的状态
      this.isShow = this.value
    }
  },
  methods: {
    hClose () {
      this.isShow = false
      this.$emit('input', this.isShow)
    }
  }
}
</script>

<style scoped lang='less'></style>
