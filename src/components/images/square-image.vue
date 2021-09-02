<template>
  <base-image class="base-image--square" :image-location="imageLocation"></base-image>
</template>

<script>
import BaseImage from "@/components/images/base-image";
export default {
  name: "square-image",
  components: {BaseImage},
  props: {
    imageLocation: String
  }
}
</script>

<style scoped>

</style>