<template>
  <div class="blog-card">
    <div class="blog-card_image">
<!--      <square-image  image-location="profile.jpg"></square-image>-->
      <img class="base-image base-image--square" :src="imageUrl">
    </div>
    <div class="blog-card_content">
      <div class="profile-card_date">{{date}}</div>
      <div class="blog-card_title">{{ title }}</div>
      <div class="blog-card_text">{{description}}</div>
    </div>
  </div>
</template>

<script>
import BaseImage from "@/components/images/base-image";
import SquareImage from "@/components/images/square-image";
export default {
  name: "blog-card",
  components: {SquareImage, BaseImage},
  props: {
    date: String,
    description: String,
    imageUrl: String,
    source: String,
    title: String,
  }
}
</script>

<style scoped>

</style>