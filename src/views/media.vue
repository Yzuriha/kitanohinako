<template>
  <div class="media">
    <base-section title="MEDIA" additional-classes="text-center">
      <template v-slot:content>
        <div class="video-container">
          <iframe class="video" src="https://www.youtube.com/embed/GrA-y92MPiQ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
  components: {BaseSection, MainNav}
}
</script>

<style scoped>

</style>