<template>
  <div class="main-header">
    <transition name="header-fade">
      <div class="main-header_image main-header_image--animation" :style="{backgroundImage: `url(${activeHeaderImage})`}" :key="activeHeaderImage"></div>
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
        './img/header/1.jpg',
        './img/header/2.jpg',
        './img/header/3.jpg',
        './img/header/4.jpg',
        './img/header/5.jpg',
        './img/header/6.jpg',
      ],
      activeHeaderImage: './img/header/1.jpg',
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
      this.activeHeaderImage = this.headerImages[this.imageCounter++]
      if(this.imageCounter === this.headerImages.length) {
        this.imageCounter = 0
      }
    },
    cancelAutoUpdate () {
      clearInterval(this.timer);
    }
  },
  unmounted() {
    this.cancelAutoUpdate();
  }
}
</script>
