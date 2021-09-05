<template>
  <img class="base-image" :src="'img/' + imageLocation" :alt="altName" loading="lazy">
</template>

<script>
export default {
  name: "base-image",
  props: {
    title: String,
    imageLocation: String
  },
  computed: {
    altName() {
      return `${this.$route.name}-${this.imageLocation.split('/').pop().split('.')[0]}-image`
    }
  }
}
</script>