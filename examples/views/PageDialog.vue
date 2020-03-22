<template>
  <div class='container'>
    <button @click="isShow=!isShow">点击打开</button>
    <my-dialog v-model="isShow"></my-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShow: false
    }
  }
}
</script>

<style scoped lang='less'></style>
