<template>
  <div class="schedule">
    <base-section title="SCHEDULE" additional-classes="text-center">
      <template v-slot:content>
        <schedule-card type="MEDIA" date="20.01.2020" content="ASDDS"></schedule-card>
      </template>
    </base-section>
  </div></template>

<script>
import MainNav from "@/components/navigation/main-nav";
import BaseSection from "@/components/sections/base-section";
import ScheduleCard from "@/components/cards/schedule-card";
export default {
  name: "Schedule",
  components: {ScheduleCard, BaseSection, MainNav}
}
</script>

<style scoped>

</style>