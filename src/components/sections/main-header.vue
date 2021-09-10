<template>
  <div class="main-header">
    <transition name="header-fade">
      <div class="main-header_image main-header_image--animation" :style="{backgroundImage: `url(${activeHeaderImage})`}" :key="activeHeaderImage" @load="test"></div>
    </transition>
    <div class="main-header_gradient"></div>
  </div>
</template>

<script>
export default {
  name: "main-header",
  data() {
    return {
      headerImages: [
        './img/header/1.png',
        './img/header/2.png',
        './img/header/3.png',
        './img/header/4.png',
        './img/header/5.png',
        './img/header/6.png',
        './img/header/7.png',
      ],
      activeHeaderImage: './img/header/1.png',
      timer: '',
      imageCounter: 0
    }
  },
  created () {
    this.timer = setInterval(() => {
      this.changeImage()
    }, 5555);
  },
  methods: {
    changeImage () {
      console.log(this.imageCounter)
      this.activeHeaderImage = this.headerImages[this.imageCounter++]
      if(this.imageCounter === this.headerImages.length) {
        this.imageCounter = 0
      }
    },
    test() {
      console.log("ÖLOAD")
      },
    cancelAutoUpdate () {
      clearInterval(this.timer);
    }
  },
  unmounted() {
    console.log("unmounted")
    this.cancelAutoUpdate();
  }
}
</script>
