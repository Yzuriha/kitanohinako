<template>
  <base-section title="Instagram" additional-classes="text-center">
    <template v-slot:content>

    </template>
  </base-section>

  <base-section title="Gallery" additional-classes="text-center">
    <template v-slot:content>
      <div class="gallery-image-container">
        <long-image image-location="long/1.jpg"></long-image>
        <square-image image-location="wide/1.png"></square-image>
        <long-image image-location="long/2.jpg"></long-image>
        <square-image image-location="wide/2.png"></square-image>
        <square-image image-location="wide/3.png"></square-image>
        <square-image image-location="wide/4.png"></square-image>
        <long-image image-location="long/3.jpg"></long-image>
        <square-image image-location="wide/5.png"></square-image>
      </div>
    </template>
  </base-section>
</template>

<script>
import MainNav from "@/components/navigation/main-nav";
import BaseSection from "@/components/sections/base-section";
import LongImage from "@/components/images/long-image";
import SquareImage from "@/components/images/square-image";
import api from "@/api";
import InstagramImage from "@/components/images/instagram-image";

export default {
  name: "Gallery",
  components: {InstagramImage, SquareImage, LongImage, BaseSection, MainNav},
  data() {
    return {
    }
  }
}
</script>