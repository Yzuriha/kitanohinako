<template>
  <div class="schedule-card">
    <div class="schedule-card_left">
      <div class="schedule-card_type">{{type}}</div>
      <div class="schedule-card_date">{{date}}</div>
    </div>
    <div class="schedule-card_right">
      <div class="schedule-card_content">{{content}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "schedule-card",
  props: {
    type: String,
    date: String,
    content: String
  },
  data() {
    return {
      day: '',
      month: '',
      year: '',
      weekday: '',
    }
  },
  created() {
    let newDate = Date.parse(this.date)
    console.log(newDate)
  }
}
</script>