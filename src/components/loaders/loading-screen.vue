<template>
  <div class="loading-screen">
    <img class="sign" :src="'img/final.svg?' + getTimestamp" @load="$emit('imgLoaded')" width="500" height="500">
    <img class="texture" :src="'img/textureOld.png'" width="500" height="500">
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