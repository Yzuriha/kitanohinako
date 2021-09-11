<template>
  <div class="home">
    <main-header></main-header>
    <base-section v-if="scheduleData.length" title="SCHEDULE" additional-classes="headline--bottom-border">
      <template v-slot:content>
        <schedule-card v-for="schedule in scheduleData"
                       :type="schedule.type"
                       :date="schedule.date"
                       :content="schedule.content">
        </schedule-card>
        <more-button-link :route="'/schedule'"></more-button-link>
      </template>
    </base-section>
    <base-section title="PROFILE" additional-classes="headline--bottom-border">
      <template v-slot:content>
        <profile-card :full-content="false"></profile-card>
        <more-button-link :route="'/profile'"></more-button-link>
      </template>
    </base-section>
    <observer @intersect="displayGallery = true"></observer>
    <base-section title="GALLERY" additional-classes="headline--bottom-border">
      <template v-slot:content>
        <div v-show="loadingScreenFinished && displayGallery" class="gallery-image-container">
          <base-image v-for="(file, index) in getShuffledImageFilesLocation" :image-location="file.location" :style="{animationDelay: index * 150 + 'ms'}"></base-image>
<!--          <long-image image-location="long/1.jpg" style="animation-delay: calc(0* 300ms)"></long-image>-->
<!--          <square-image image-location="wide/1.png" style="animation-delay: calc(1 * 300ms)"></square-image>-->
<!--          <long-image image-location="long/2.jpg" style="animation-delay: calc(2 * 300ms)"></long-image>-->
<!--          <square-image image-location="wide/3.png" style="animation-delay: calc(3 * 300ms)"></square-image>-->
<!--          <square-image image-location="wide/4.png" style="animation-delay: calc(4 * 300ms)"></square-image>-->
<!--          <square-image image-location="wide/2.png" style="animation-delay: calc(5 * 300ms)"></square-image>-->
<!--          <long-image image-location="long/3.jpg" style="animation-delay: calc(6 * 300ms)"></long-image>-->
<!--          <square-image image-location="wide/5.png" style="animation-delay: calc(7 * 300ms)"></square-image>-->
        </div>
        <more-button-link :route="'/gallery'"></more-button-link>
      </template>
    </base-section>
    <base-section title="BLOG" additional-classes="headline--bottom-border">
      <template v-slot:content>
        <router-link to="/blog">
          <blog-card v-for="(blog, index) in getLimitedAmount"
                     :style="{animationDelay: index * 50 + 'ms'}"
                     :title="blog.title"
                     :date="blog.date"
                     :description="blog.description"
                     :image-url="blog.thumbnail">
          </blog-card>
        </router-link>
        <more-button-link :route="'/blog'"></more-button-link>
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
import {mapGetters, mapState} from "vuex";
import MoreButtonLink from "@/components/buttons/more-button-link";
import MainHeader from "@/components/sections/main-header";
import Observer from "@/components/sections/observer";
import BaseImage from "@/components/images/base-image";
export default {
  name: 'Home',
  components: {
    BaseImage,
    Observer,
    MainHeader,
    MoreButtonLink,
    BlogCard,
    SquareImage, LongImage, InstagramImage, ProfileCard, Profile, ScheduleCard, BaseSection, MainNav,
  },
  data() {
    return {
      displayGallery: false
    }
  },
  computed: {
    ...mapState({
      blogData: state => state.blogData,
      scheduleData: state => state.scheduleData,
      loadingScreenFinished: state => state.loadingScreenFinished,
    }),
    ...mapGetters(['getShuffledImageFilesLocation']),
    getLimitedAmount() {
      return this.blogData.slice(0, 5)
    },
    getImageAnimationDelay(index) {
      return {
        animationDelay: index * 100 + 'ms'
      }
      // return `animation-delay: calc(${index} * 100ms)`
    }
  }
}
</script>
