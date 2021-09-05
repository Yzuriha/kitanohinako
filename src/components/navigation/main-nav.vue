<template>
  <main-header></main-header>
  <nav v-if="activeSite === 'Home'" class="nav-home" :class="{'navigation--bottom' : isBottomNav}" ref="nav-home">
    <router-link class="router-link" to="/schedule">Schedule</router-link>
    <router-link class="router-link" to="/profile">Profile</router-link>
    <router-link class="router-link" to="/gallery">Gallery</router-link>
    <router-link class="router-link" to="/blog">Blog</router-link>
    <!--    <router-link class="router-link" to="/">Home</router-link>-->
    <router-link class="router-link" to="/media">Media</router-link>
    <router-link class="router-link" to="/7gogo#bottom">7gogo</router-link>
    <router-link class="router-link" to="/works">Works</router-link>
  </nav>

  <nav v-if="!navHomeActive || activeSite !== 'Home'" class="nav" :class="{'nav--background-transparent': isToggleActive}">
    <div class="nav-top">
      <router-link class="router-link nav-home-link" to="/">
        <div class="nav-home-link_title">北野 日奈子</div>
        <div class="nav-home-link_subtitle">U N O F F I C I A L &nbsp; S I T E</div>
      </router-link>
      <div class="navigation-toggle" @click="toggle">
        <span class="navigation-toggle-bar-1" :class="{'toggled': isToggleActive}"></span>
        <span class="navigation-toggle-bar-2" :class="{'toggled': isToggleActive}"></span>
        <span class="navigation-toggle-bar-3" :class="{'toggled': isToggleActive}"></span>
      </div>
    </div>
    <nav class="nav-side" :class="{'navigation--bottom' : isBottomNav, 'navigation-side--active' : isToggleActive}">
      <router-link @click="toggle" class="router-link" to="/schedule">Schedule</router-link>
      <router-link @click="toggle" class="router-link" to="/profile">Profile</router-link>
      <router-link @click="toggle" class="router-link" to="/gallery">Gallery</router-link>
      <router-link @click="toggle" class="router-link" to="/blog">Blog</router-link>
      <router-link @click="toggle" class="router-link" to="/media">Media</router-link>
      <router-link @click="toggle" class="router-link" to="/7gogo#bottom">7gogo</router-link>
      <router-link @click="toggle" class="router-link" to="/works">Works</router-link>
    </nav>
  </nav>


</template>

<script>
import MainHeader from "@/components/sections/main-header";
import {mapState} from "vuex";
export default {
  name: "main-nav",
  components: {MainHeader},
  data() {
    return {
      isToggleActive: false,
      navHomeActive: true
    }
  },
  computed: {
    ...mapState({
      activeSite: state => state.activeSite
    }),
    isBottomNav() {
      return this.$route.name === "Home"
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    toggle() {
      this.isToggleActive = !this.isToggleActive
    },
    handleScroll () {
      if(this.$refs["nav-home"]) {
        this.navHomeActive = this.$refs["nav-home"].getBoundingClientRect().top > 0
      }
    }
  }
}
</script>