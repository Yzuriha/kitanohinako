<template>
  <div v-show="loadingScreenFinished" class="blog-card entrance-animation" :id="blogId">
    <div class="blog-card_image cursor-pointer" @click="$emit('blogCardClicked')">
      <img v-if="imageUrl" class="base-image base-image--square" :src="imageUrl" :alt="blogId + '-image'">
      <img v-else class="base-image base-image--square" src="img/placeholder.svg" :alt="blogId + '-image'">
    </div>
    <div class="blog-card_content cursor-pointer" @click="$emit('blogCardClicked')">
      <div class="blog-card_date" :class="{'blog-card_date--placeholder' : hasNoBlogData}">{{createDate}}</div>
      <div class="blog-card_title ja" :class="{'blog-card_title--placeholder' : hasNoBlogData}">{{ title }}</div>
      <div class="blog-card_text ja" :class="{'blog-card_text--placeholder' : hasNoBlogData}">{{description}}</div>
    </div>
    <transition-collapse>
      <div v-if="activeBlogs.includes(blogId)" class="blog-card_extended ja" style="grid-column: 1/3" v-html="content"></div>
    </transition-collapse>
  </div>
</template>

<script>
import BaseImage from "@/components/images/base-image";
import SquareImage from "@/components/images/square-image";
import {mapState} from "vuex";
import TransitionCollapse from "@/components/sections/transition-collapse";
export default {
  name: "blog-card",
  components: {TransitionCollapse, SquareImage, BaseImage},
  emits: ['blogCardClicked'],
  props: {
    date: String,
    description: String,
    content: String,
    imageUrl: String,
    source: String,
    title: String,
    blogId: String,
    isLastItem: Boolean
  },
  computed: {
    ...mapState({
      blogData: state => state.blogData,
      activeBlogs: state => state.activeBlogs,
      loadingScreenFinished: state => state.loadingScreenFinished
    }),
    hasNoBlogData() {
      return this.blogData.length <= 1
    },
    createDate() {
      if(this.date) {
        return new Date(this.date).toLocaleDateString('de-DE', { year: '2-digit', month: '2-digit', day: '2-digit' })
      }
    }
  }
}
</script>

<style lang="less">

.blog-card_date--placeholder,
.blog-card_title--placeholder,
.blog-card_text--placeholder {
  animation: dash 1.5s ease-in-out infinite;
}

.blog-card_title--placeholder {
  animation-delay: 0.5s;
}

.blog-card_text--placeholder {
  animation-delay: 1s;
}
@keyframes dash {
  0% {
    background-color: rgba(0,0,0,0.05);
  }
  50% {
    background-color: rgba(135, 206, 250, 0.2);
  }
  100% {
    background-color: rgba(0,0,0,0.05);
  }
}


</style>