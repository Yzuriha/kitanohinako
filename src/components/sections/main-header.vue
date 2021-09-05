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

<style lang="less" scoped>
.main-header {
  width: 100%;
  height: 100vh;

  .main-header_gradient {
    //background: linear-gradient(0deg, rgb(255 255 255) 0%, rgba(255,255,255,0.01) 45%);
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#ffffff+0,ffffff+100&0+0,1+100 */
    background: -moz-linear-gradient(top,  rgba(255,255,255,0) 45%, rgba(255,255,255,1) 100%); /* FF3.6-15 */
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(255,255,255,0)), color-stop(100%,rgba(255,255,255,1))); /* Chrome4-9,Safari4-5 */
    background: -webkit-linear-gradient(top,  rgba(255,255,255,0) 45%,rgba(255,255,255,1) 100%); /* Chrome10-25,Safari5.1-6 */
    background: -o-linear-gradient(top,  rgba(255,255,255,0) 45%,rgba(255,255,255,1) 100%); /* Opera 11.10-11.50 */
    background: -ms-linear-gradient(top,  rgba(255,255,255,0) 45%,rgba(255,255,255,1) 100%); /* IE10 preview */
    background: linear-gradient(to bottom,  rgba(255,255,255,0) 45%,rgba(255,255,255,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */

    width: 100%;
    position: absolute;
    height: 100vh;
  }
  .main-header_image {
    width: 100%;
    height: 100vh;
    background-position-y: top;
    background-position-x: center;
    background-size: cover;
  }
}
</style>