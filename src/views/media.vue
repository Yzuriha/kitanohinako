<template>
  <div class="media">
    <base-section title="MEDIA" additional-classes="headline--center">
      <template v-slot:content>
        <div class="video-container video-container--iframe">
          <transition name="standard-long-fade">
          <iframe @load="showMedia" v-show="showIframe" class="video" src="https://www.youtube.com/embed/GrA-y92MPiQ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </transition>
        </div>
      </template>
    </base-section>
  </div>
</template>

<script>
import MainNav from "@/components/navigation/main-nav";
import BaseSection from "@/components/sections/base-section";
export default {
  name: "Media",
  components: {BaseSection, MainNav},
  data() {
    return {
      showIframe: false
    }
  },
  methods: {
    showMedia() {
      this.showIframe = true
    }
  }
}
</script>