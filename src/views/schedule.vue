<template>
  <div class="schedule">
    <base-section title="SCHEDULE" additional-classes="headline--center" class="container--xs">
      <template v-slot:content>
        <schedule-card v-for="schedule in getRecentSchedule"
                       :schedule-data="schedule"
                       :type="schedule.type"
                       :date="`${schedule.day}.${schedule.month}.${schedule.year}`"
                       :content="schedule.content"></schedule-card>
      </template>
    </base-section>
  </div></template>

<script>
import MainNav from "@/components/navigation/main-nav";
import BaseSection from "@/components/sections/base-section";
import ScheduleCard from "@/components/cards/schedule-card";
import {mapGetters} from "vuex";
export default {
  name: "Schedule",
  components: {ScheduleCard, BaseSection, MainNav},
  computed: {
    ...mapGetters(['getRecentSchedule']),

  }
}
</script>

<style scoped>

</style>