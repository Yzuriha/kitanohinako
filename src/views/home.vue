<template>
  <div class="home">
    <main-header></main-header>

    <base-section v-if="getRecentSchedule.length" title="SCHEDULE" additional-classes="headline--bottom-border headline--left">
      <template v-slot:content>
        <schedule-card v-for="schedule in getRecentSchedule"
                       :type="schedule.type"
                       :schedule-data="schedule"
                       :date="`${schedule.day}.${schedule.month}.${schedule.year}`"
                       :content="schedule.content">
        </schedule-card>
        <more-button-link v-if="getRecentSchedule.length > 5" :route="'/schedule'"></more-button-link>
      </template>
    </base-section>

    <base-section title="PROFILE" additional-classes="headline--bottom-border headline--left">
      <template v-slot:content>
        <profile-card :full-content="false"></profile-card>
      </template>
    </base-section>

    <observer @intersect="displayGallery = true"></observer>
    <base-section title="GALLERY" additional-classes="headline--bottom-border headline--left">
      <template v-slot:content>
        <div v-show="loadingScreenFinished && displayGallery" class="gallery-image-container">
          <base-image v-for="(file, index) in getShuffledImageFilesLocation.slice(0, 9)" :image-location="file.location" :style="{animationDelay: index * 100 + 'ms'}"></base-image>
        </div>
        <more-button-link :route="'/gallery'"></more-button-link>
      </template>
    </base-section>

    <observer @intersect="triggerBlogAction" :once="true"></observer>
    <base-section title="BLOG" additional-classes="headline--bottom-border headline--left">
      <template v-slot:content>
        <transition name="work-card-animation">
        <router-link v-if="displayBlogs" to="/blog">
          <blog-card v-for="(blog, index) in getLimitedAmount"
                     :style="{animationDelay: index * 50 + 'ms'}"
                     :title="blog.title"
                     :is-last-item="index === getLimitedAmount.length - 1"
                     :date="blog.date"
                     :description="blog.description"
                     :image-url="blog.thumbnail">
          </blog-card>
        </router-link>
        </transition>
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
import {mapActions, mapGetters, mapState} from "vuex";
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
      displayGallery: false,
      displayBlogs: false
    }
  },
  computed: {
    ...mapState({
      blogData: state => state.blogData,
      loadingScreenFinished: state => state.loadingScreenFinished,
    }),
    ...mapGetters(['getShuffledImageFilesLocation', 'getRecentSchedule']),
    getLimitedAmount() {
      return this.blogData.slice(0, 5)
    },
  },
  methods: {
    ...mapActions(['accessSpreadSheet']),
    triggerBlogAction() {
      this.accessSpreadSheet()
      this.displayBlogs = true
    }
  }
}
</script>
