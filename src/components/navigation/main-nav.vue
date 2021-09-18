<template>
  <nav v-if="activeSite === 'Home'" class="nav-home" :class="{'navigation--bottom' : isBottomNav}" ref="nav-home">
    <router-navigation to="/schedule" title="SCHEDULE"></router-navigation>
    <router-navigation to="/profile" title="PROFILE"></router-navigation>
    <router-navigation to="/gallery" title="GALLERY"></router-navigation>
    <router-navigation to="/blog" title="BLOG"></router-navigation>
    <router-navigation to="/media" title="MEDIA"></router-navigation>
    <router-navigation to="/7gogo" title="7GOGO"></router-navigation>
    <router-navigation to="/works" title="WORKS"></router-navigation>
  </nav>

  <nav v-if="!navHomeActive || activeSite !== 'Home'" class="nav" :class="{'nav--background-transparent': isToggleActive}">
    <div class="nav-top">
      <router-link class="router-link nav-home-link" to="/">
        <div class="nav-home-link_title ja">北野 日奈子</div>
        <div class="nav-home-link_subtitle">U N O F F I C I A L &nbsp; S I T E</div>
      </router-link>
      <div class="nav-main">
        <router-navigation to="/schedule" title="SCHEDULE"></router-navigation>
        <router-navigation to="/profile" title="PROFILE"></router-navigation>
        <router-navigation to="/gallery" title="GALLERY"></router-navigation>
        <router-navigation to="/blog" title="BLOG"></router-navigation>
        <router-navigation to="/media" title="MEDIA"></router-navigation>
        <router-navigation to="/7gogo" title="7GOGO"></router-navigation>
        <router-navigation to="/works" title="WORKS"></router-navigation>
      </div>
      <div class="navigation-toggle" @click="toggle">
        <span class="navigation-toggle-bar-1" :class="{'toggled': isToggleActive}"></span>
        <span class="navigation-toggle-bar-2" :class="{'toggled': isToggleActive}"></span>
        <span class="navigation-toggle-bar-3" :class="{'toggled': isToggleActive}"></span>
      </div>
    </div>
    <nav class="nav-side" :class="{'navigation--bottom' : isBottomNav, 'navigation-side--active' : isToggleActive}">
      <router-navigation @click="toggle"  to="/schedule" title="SCHEDULE"></router-navigation>
      <router-navigation @click="toggle" to="/profile" title="PROFILE"></router-navigation>
      <router-navigation @click="toggle" to="/gallery" title="GALLERY"></router-navigation>
      <router-navigation @click="toggle" to="/blog" title="BLOG"></router-navigation>
      <router-navigation @click="toggle" to="/media" title="MEDIA"></router-navigation>
      <router-navigation @click="toggle" to="/7gogo" title="7GOGO"></router-navigation>
      <router-navigation @click="toggle" to="/works" title="WORKS"></router-navigation>
    </nav>
  </nav>


</template>

<script>
import MainHeader from "@/components/sections/main-header";
import {mapState} from "vuex";
import RouterNavigation from "@/components/navigation/router-navigation";
export default {
  name: "main-nav",
  components: {RouterNavigation, MainHeader},
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