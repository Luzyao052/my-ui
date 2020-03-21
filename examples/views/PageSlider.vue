<template>
  <div class="PageSlider">
    <h1>轮播图</h1>
    <my-slider
      style="width:500px;height:700px;"
      :auto="2000"
      :curIdx="curIdx"
      :list="list"
      @click="hClick"
    ></my-slider>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      curIdx: 1,
      list: [
        { url: require('@/assets/imgs/1.jpg'), alt: '1.其实也就那样子' },
        { url: require('@/assets/imgs/2.jpg'), alt: '2.其实也没那么好看' },
        { url: require('@/assets/imgs/3.jpg'), alt: '3.其实真的一般般' },
        { url: require('@/assets/imgs/4.jpg'), alt: '4.其实称不上好看' },
        { url: require('@/assets/imgs/5.jpg'), alt: '5.其实是假的' }
      ]
    }
  },
  methods: {
    hClick (idx) {
      // console.log(idx)
      // 后续做什么，自行决定....
      // this.$router.push(/....)
    }
  }
}
</script>

<style scoped lang='less'></style>
