<template>
  <div class="loading-screen">
    <img class="sign" :src="'img/final.svg?' + getTimestamp" @load="$emit('imgLoaded')">
    <img class="texture" :src="'img/textureOld.png'">
  </div>
</template>

<script>
export default {
  name: "loading-screen",
  emits: ['imgLoaded'],
  computed: {
    getTimestamp() {
      return Date.now()
    }
  }
}
</script>

<style scoped>

</style>