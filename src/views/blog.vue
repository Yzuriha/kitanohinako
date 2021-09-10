<template>
  <div class="blog">
  <base-section title="BLOG" additional-classes="text-center">
    <template v-slot:content>
      <blog-card v-for="(blog, index) in getLimitedAmount"
                 :title="blog.title"
                 :date="blog.date"
                 :blog-id="'blog-' + index"
                 @click="showExtended('blog-' + index, index)"
                 :content="blog.descriptionRaw"
                 :description="blog.description"
                 :image-url="blog.thumbnail">
      </blog-card>
      <more-button @click="showMore"></more-button>
      <observer @intersect="showMore"></observer>
    </template>
  </base-section>
  </div>
<!--  {{getLimitedAmount}}-->

</template>

<script>
import MainNav from "@/components/navigation/main-nav";
import BaseSection from "@/components/sections/base-section";

import BlogCard from "@/components/cards/blog-card";
import {mapActions, mapState} from "vuex"
import MoreButton from "@/components/buttons/more-button";
import Observer from "@/components/sections/observer";
export default {
  name: "Blog",
  components: {Observer, MoreButton, BlogCard, BaseSection, MainNav},
  data() {
    return {
      displayAmount: 10
    }
  },
  methods:{
    ...mapActions(['setActiveBlog', 'removeActiveBlog']),
    showMore() {
      this.displayAmount += 5
    },
    showExtended(blog, index) {
      if(this.activeBlogs.includes(blog)) {
        this.removeActiveBlog(blog)
      } else {
        this.setActiveBlog(blog)
      }
    }
  },
  computed: {
    ...mapState({
      blogData: state => state.blogData,
      activeBlogs: state => state.activeBlogs
    }),
    getLimitedAmount() {
      return this.blogData.slice(0, this.displayAmount)
    }
  }
}
</script>