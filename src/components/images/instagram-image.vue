<template>
<!--  <base-image class="base-image&#45;&#45;long" :src="imageLink"></base-image>-->
  <img class="instagram-image" :src="imageLink">
</template>

<script>
import BaseImage from "@/components/images/base-image";
export default {
  name: "instagram-image",
  components: {BaseImage},
  props: {
    title: String,
    description: String,
    date: Date,
    source: String,
    imageLink: String
  },
  created() {
  }
}
</script>