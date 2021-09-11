<template>
  <div class="profile">
    <base-section title="PROFILE" additional-classes="headline--center">
      <template v-slot:content>
        <profile-card></profile-card>
      </template>
    </base-section>
  </div>
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