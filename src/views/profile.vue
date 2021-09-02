<template>
  <base-section title="Profile" additional-classes="text-center">
    <template v-slot:content>
      <profile-card></profile-card>
    </template>
  </base-section>
</template>

<script>
import MainNav from "@/components/navigation/main-nav";
import ProfileCard from "@/components/cards/profile-card";
import BaseSection from "@/components/sections/base-section";
export default {
  name: "Profile",
  components: {BaseSection, ProfileCard, MainNav}
}
</script>

<style scoped>

</style>