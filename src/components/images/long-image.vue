<template>
  <base-image class="base-image--long" :image-location="imageLocation"></base-image>
</template>

<script>
import BaseImage from "@/components/images/base-image";
export default {
  name: "long-image",
  components: {BaseImage},
  props: {
    imageLocation: String
  }
}
</script>