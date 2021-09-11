<template>
  <div class="schedule">
    <base-section title="SCHEDULE" additional-classes="text-center" class="container--xs">
      <template v-slot:content>
        <schedule-card type="MISC" date="17.07.2022" content="Kitano Hinako Birthday"></schedule-card>
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