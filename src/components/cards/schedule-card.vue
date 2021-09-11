<template>
  <div class="schedule-card">
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


</template>

<script>
export default {
  name: "schedule-card",
  props: {
    scheduleData: Object
  },
  data() {
    return {
      day: '',
      month: '',
      year: '',
      weekday: '',
      content: '',
      type: '',

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
