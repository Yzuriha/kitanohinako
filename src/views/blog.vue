<template>
  <div class="blog">
  <base-section title="BLOG" additional-classes="headline--center">
    <template v-slot:content>
      <input-text v-model="blogFilter" @deleteValue="blogFilter = ''"></input-text>
      <blog-card v-for="(blog, index) in getLimitedAmount"
                 :title="blog.title"
                 :date="blog.date"
                 :blog-id="'blog-' + index"
                 @blogCardClicked="showExtended('blog-' + index, index)"
                 :content="blog.descriptionRaw"
                 :description="blog.description"
                 :image-url="blog.thumbnail">
      </blog-card>
      <more-button @click="showMore"></more-button>
      <observer @intersect="showMore" timeout="0" :options="{rootMargin: '-100px'}"></observer>
    </template>
  </base-section>
  </div>
</template>

<script>
import MainNav from "@/components/navigation/main-nav";
import BaseSection from "@/components/sections/base-section";

import BlogCard from "@/components/cards/blog-card";
import {mapActions, mapState} from "vuex"
import MoreButton from "@/components/buttons/more-button";
import Observer from "@/components/sections/observer";
import InputText from "@/components/input/input-text";
export default {
  name: "Blog",
  components: {InputText, Observer, MoreButton, BlogCard, BaseSection, MainNav},
  data() {
    return {
      displayAmount: 0,
      blogFilter: ''
    }
  },
  created() {
    if(this.blogData.length <= 1) {
      this.accessSpreadSheet()
    }
  },
  mounted() {
    this.showMore()
  },
  methods:{
    ...mapActions(['setActiveBlog', 'removeActiveBlog', 'accessSpreadSheet']),
    showMore() {
      for(let i = 0; i < 5; i++) {
        setTimeout(() => {
          this.displayAmount += 1
        }, i * 150)
      }
    },
    showExtended(blog) {
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
      return this.filteredBlogs.slice(0, this.displayAmount)
    },
    filteredBlogs() {
      return this.blogData.filter(blog => {
        return blog.date.toLowerCase().includes(this.blogFilter)
      })
    }
  }
}
</script>