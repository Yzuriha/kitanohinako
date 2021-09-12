<template>
  <div class="loading-screen">
    <img class="sign" :src="'img/final.svg' + getTimestamp" @load="$emit('imgLoaded')" width="500" height="500" alt="loading-screen-image">
    <img class="texture" :src="'img/textureOld.png'" width="500" height="500" alt="loading-screen-texture">
  </div>
</template>

<script>
export default {
  name: "loading-screen",
  emits: ['imgLoaded'],
  computed: {
    getTimestamp() {
      return navigator.onLine ? '?' + Date.now() : ''
    }
  }
}
</script>