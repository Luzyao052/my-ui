<template>
  <div class="slider" @mouseenter="hMouseEnter" @mouseleave="hMouseLeave">
    <div class="slider-content">
      <transition-group name="fade">
        <div
          class="slider-item"
          v-show="index===currentIndex"
          v-for="(item,index) in list"
          :key="item.url"
          @click="hClick"
        >
          <img :src="item.url" :alt="item.alt" />
        </div>
      </transition-group>
    </div>
    <!-- 左右按钮 -->
    <span class="btn btn_left" @click="hPrev"></span>
    <span class="btn btn_right" @click="hNext"></span>
    <!-- 标题区域 -->
    <div class="txt">标题</div>
    <!-- 指示条 -->
    <ol class="indirector">
      <li
        @mouseenter="hDirectorEnter(index)"
        :class="{current:index===currentIndex}"
        v-for="(item,index) in list"
        :key="index"
      ></li>

      <!-- <li class="current"></li> -->
    </ol>
  </div>
</template>

<script>
export default {
  name: 'MySlider',
  props: {
    // 自动播放的毫秒数
    auto: {
      type: Number,
      default: 0,
      required: false // 是否必须
    },
    // 当前开始播放是哪一张图
    curIdx: {
      type: Number,
      default: 0,
      required: false
    },
    // 轮播列表
    list: {
      type: Array,
      required: true
    }
  },
  created () {
    this.move()
  },
  data () {
    return {
      currentIndex: this.curIdx
    }
  },
  methods: {
    // 把事件发送给父组件
    hClick () {
      this.$emit('click', this.currentIndex)
    },
    // 小圈圈鼠标划入
    hDirectorEnter (index) {
      this.currentIndex = index
    },
    move () {
      if (this.auto) {
        // 每隔this.auto毫秒，就去执行一次：播放下一张
        // 记录定时器编号
        this.timer = setInterval(() => {
          this.hNext()
        }, this.auto)
      }
    },
    // 鼠标离开
    hMouseLeave () {
      this.move()
    },
    // 鼠标进入
    hMouseEnter () {
      clearInterval(this.timer)
    },
    // 点击右侧按钮
    hNext () {
      this.currentIndex++
      if (this.currentIndex === this.list.length) {
        this.currentIndex = 0
      }
    },
    // 点击左侧按钮
    hPrev () {
      this.currentIndex--
      if (this.currentIndex === -1) {
        this.currentIndex = this.list.length - 1
      }
    }
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: all 1s;
}
.fade-enter, .fade-leave-to
/* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
  /* transform: translateX(60px); */
}
.slider .slider-content,
.slider img {
  width: 100%;
  height: 100%;
}
.slider {
  margin: 0 auto;
  border: 1px solid #ccc;
  position: relative;
}
.slider .slider-content {
  overflow: hidden;
  position: relative;
}
.slider .slider-content .slider-item {
  position: absolute;
  top: 0;
  left: 0;
}
.slider img {
  width: 100%;
}
.slider .btn,
.slider .txt,
.slider .indirector {
  position: absolute;
}
.slider .btn {
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0);
  top: 50%;
  transform: translateY(-50%);
  transition: background-color 0.2s;
}
.slider .btn:hover {
  background-color: rgba(255, 255, 255, 1);
}

.slider .btn:before,
.slider .btn:after {
  content: "";
  height: 3px;
  width: 25px;
  background-color: #fff;
  position: absolute;
  left: 15px;
  top: 23px;
  transform: rotateZ(60deg);
  transform-origin: 0px center;
  transition: all 0.2s;
}
.slider .btn:after {
  transform: rotateZ(-60deg);
}
.slider .btn:hover:before {
  transform: rotateZ(45deg);
  background-color: red;
}
.slider .btn:hover:after {
  transform: rotateZ(-45deg);
  background-color: red;
}

.slider .btn.btn_right:before,
.slider .btn.btn_right:after {
  transform-origin: right center;
}

.slider .btn.btn_left {
  left: 20px;
}
.slider .btn.btn_right {
  right: 20px;
}

.slider .txt {
  text-indent: 1em;
  line-height: 40px;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: left;
  bottom: 0;
  left: 0;
  width: 100%;
  color: #fff;
}
.slider .indirector {
  bottom: 10px;
  right: 1em;
}
.slider .indirector li {
  display: inline-block;
  margin: 0 5px;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: #fff;
}
.slider .indirector li {
  transition: transform 0.2s;
}
.slider .indirector .current {
  background-color: #369;
  transform: scale(1.2);
}
</style>
