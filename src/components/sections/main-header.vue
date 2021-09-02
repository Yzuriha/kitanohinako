<template>
  <div v-if="showHeader" class="main-header">
    <div class="main-header_gradient"></div>
    <div class="main-header_image main-header_image--2"></div>
  </div>
</template>

<script>
export default {
  name: "main-header",
  computed: {
    showHeader() {
      return this.$route.name === "Home"
    }
  }
}
</script>

<style lang="less" scoped>
.main-header {
  width: 100%;
  height: 100vh;

  .main-header_gradient {
    background: linear-gradient(0deg, rgb(255 255 255) 0%, rgba(255,0,255,0) 45%);
    width: 100%;
    position: absolute;
    height: 100%;
  }
  .main-header_image {
    width: 100%;
    height: 100%;
    background-position-y: top;
    background-position-x: center;
    background-size: cover;
    &.main-header_image--1 {
      background-image: url('/img/header/1.png');
    }
    &.main-header_image--2 {
      background-image: url('/img/header/2.png');
    }
    &.main-header_image--3 {
      background-image: url('/img/header/3.png');
    }
    &.main-header_image--4 {
      background-image: url('/img/header/4.png');
    }
    &.main-header_image--5 {
      background-image: url('/img/header/5.png');
    }
    &.main-header_image--6 {
      background-image: url('/img/header/6.png');
    }
    &.main-header_image--7 {
      background-image: url('/img/header/7.png');
    }
  }
}
</style>