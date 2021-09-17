<template>
  <observer :once="true" @intersect="showCard = true"></observer>
  <transition name="work-card-animation">
  <div v-if="showCard" class="schedule-card">
    <div class="schedule-card_left">
      <div class="schedule-card_date">{{day}}</div>
      <div class="schedule-card_weekday">{{weekday}}</div>
      <div class="schedule-card_month-year">{{month}}.{{year}}</div>
    </div>
    <div class="schedule-card_right">
      <div class="schedule-card_type">{{type}}</div>
      <div class="schedule-card_content">{{content}}</div>
    </div>
  </div>
  </transition>
</template>

<script>
import Observer from "@/components/sections/observer";
export default {
  name: "schedule-card",
  components: {Observer},
  props: {
    scheduleData: Object
  },
  inheritAttrs: false,
  data() {
    return {
      day: '',
      month: '',
      year: '',
      weekday: '',
      content: '',
      type: '',
      showCard: false
    }
  },
  created() {
    this.day = this.scheduleData.day
    this.month = this.scheduleData.month
    this.year = this.scheduleData.year
    this.weekday = this.scheduleData.weekday
    this.type = this.scheduleData.type
    this.content = this.scheduleData.content

  }
}
</script>
