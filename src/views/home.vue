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
    <base-section title="GALLERY" additional-classes="headline--bottom-border">
      <template v-slot:content>
        <div class="gallery-image-container">
          <long-image image-location="long/1.jpg"></long-image>
          <square-image image-location="wide/1.png"></square-image>
          <long-image image-location="long/2.jpg"></long-image>
          <square-image image-location="wide/3.png"></square-image>
          <square-image image-location="wide/4.png"></square-image>
          <square-image image-location="wide/2.png"></square-image>
          <long-image image-location="long/3.jpg"></long-image>
          <square-image image-location="wide/5.png"></square-image>
        </div>
        <more-button-link :route="'/gallery'"></more-button-link>
      </template>
    </base-section>
    <base-section title="BLOG" additional-classes="headline--bottom-border">
      <template v-slot:content>
        <blog-card v-for="blog in getLimitedAmount"
                   :title="blog.title"
                   :date="blog.date"
                   :description="blog.description"
                   :image-url="blog.thumbnail">
        </blog-card>
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
import {mapState} from "vuex";
import MoreButtonLink from "@/components/buttons/more-button-link";
import MainHeader from "@/components/sections/main-header";
export default {
  name: 'Home',
  components: {
    MainHeader,
    MoreButtonLink,
    BlogCard,
    SquareImage, LongImage, InstagramImage, ProfileCard, Profile, ScheduleCard, BaseSection, MainNav,
  },
  computed: {
    ...mapState({
      blogData: state => state.blogData,
      scheduleData: state => state.scheduleData
    }),
    getLimitedAmount() {
      return this.blogData.slice(0, 5)
    }
  }
}
</script>
