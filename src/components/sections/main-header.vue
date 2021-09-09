<template>
  <div v-if="showHeader" class="main-header">
    <div class="main-header_gradient"></div>
    <div class="main-header_image main-header_image--1" :style="{backgroundImage: `url(${headerImages[4]})`}"></div>
  </div>
</template>

<script>
export default {
  name: "main-header",
  computed: {
    showHeader() {
      return this.$route.name === "Home"
    }
  },
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
      ]
    }
  }
}
</script>