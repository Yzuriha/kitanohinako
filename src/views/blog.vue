<template>
  <base-section title="Blog" additional-classes="text-center">
    <template v-slot:content>
      <blog-card v-for="blog in getLimitedAmount"
                 :title="blog.title"
                 :date="blog.date"
                 :description="blog.description"
                 :image-url="blog.thumbnail"
      ></blog-card>
      <div @click="showMore">more</div>
    </template>
  </base-section>
<!--  {{getLimitedAmount}}-->

</template>

<script>
import MainNav from "@/components/navigation/main-nav";
import BaseSection from "@/components/sections/base-section";

import BlogCard from "@/components/cards/blog-card";
import {mapState} from "vuex"
export default {
  name: "Blog",
  components: {BlogCard, BaseSection, MainNav},
  data() {
    return {
      displayAmount: 10
    }
  },
  methods:{
    showMore() {
      this.displayAmount += 5
    }
  },
  computed: {
    ...mapState({
      blogData: state => state.blogData
    }),
    getLimitedAmount() {
      return this.blogData.slice(0, this.displayAmount)
    }
  }
}
</script>