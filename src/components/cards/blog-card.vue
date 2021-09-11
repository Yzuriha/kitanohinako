<template>
  <div v-show="loadingScreenFinished" class="blog-card entrance-animation" :id="blogId">
    <div class="blog-card_image cursor-pointer" @click="$emit('blogCardClicked')">
      <img class="base-image base-image--square" :src="imageUrl" :alt="blogId + '-image'">
    </div>
    <div class="blog-card_content cursor-pointer" @click="$emit('blogCardClicked')">
      <div class="blog-card_date" :class="{'blog-card_date--placeholder' : hasNoBlogData}">{{new Date(date).toLocaleDateString('de-DE', { year: '2-digit', month: '2-digit', day: '2-digit' })}}</div>
      <div class="blog-card_title" :class="{'blog-card_title--placeholder' : hasNoBlogData}">{{ title }}</div>
      <div class="blog-card_text" :class="{'blog-card_text--placeholder' : hasNoBlogData}">{{description}}</div>
    </div>
    <div v-if="activeBlogs.includes(blogId)" class="blog-card_extended" style="grid-column: 1/3" v-html="content"></div>
    <hr class="blog-card_hr"/>
  </div>
</template>

<script>
import BaseImage from "@/components/images/base-image";
import SquareImage from "@/components/images/square-image";
import {mapState} from "vuex";
export default {
  name: "blog-card",
  components: {SquareImage, BaseImage},
  emits: ['blogCardClicked'],
  props: {
    date: String,
    description: String,
    content: String,
    imageUrl: String,
    source: String,
    title: String,
    blogId: String,
  },
  computed: {
    ...mapState({
      blogData: state => state.blogData,
      activeBlogs: state => state.activeBlogs,
      loadingScreenFinished: state => state.loadingScreenFinished
    }),
    hasNoBlogData() {
      return this.blogData.length <= 1
    }
  }
}
</script>

<style scoped>

</style>