<template>
  <div class="home">
    <base-section title="Schedule" additional-classes="headline--bottom-border">
      <template v-slot:content>
        <schedule-card></schedule-card>
        <schedule-card></schedule-card>
        <router-link to="/schedule">more</router-link>
      </template>
    </base-section>
    <base-section title="Profile" additional-classes="headline--bottom-border">
      <template v-slot:content>
        <profile-card :full-content="false"></profile-card>
        <router-link to="/profile">more</router-link>
      </template>
    </base-section>
    <base-section title="Gallery" additional-classes="headline--bottom-border">
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
        <router-link to="/gallery">more</router-link>
      </template>
    </base-section>
    <base-section title="Blog" additional-classes="headline--bottom-border">
      <template v-slot:content>
        <!--        <blog-card></blog-card>-->
        <!--        <blog-card></blog-card>-->
        <!--        <blog-card></blog-card>-->
        <router-link to="/blog">more</router-link>
      </template>
    </base-section>
  </div>
</template>

<script>


import MainNav from "@/components/navigation/main-nav";
import BaseSection from "@/components/sections/base-section";
import ScheduleCard from "@/components/cards/schedule-card";
import Profile from "@/views/profile";
import ProfileCard from "@/components/cards/profile-card";
import InstagramImage from "@/components/images/instagram-image";
import LongImage from "@/components/images/long-image";
import SquareImage from "@/components/images/square-image";
import BlogCard from "@/components/cards/blog-card";
export default {
  name: 'Home',
  components: {
    BlogCard,
    SquareImage, LongImage, InstagramImage, ProfileCard, Profile, ScheduleCard, BaseSection, MainNav,
  }
}
</script>

<style scoped>
.home {
  width: 100%;
}

</style>
