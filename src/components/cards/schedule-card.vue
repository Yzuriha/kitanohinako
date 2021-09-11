<template>
  <div class="schedule-card">
    <div class="schedule-card_type">{{type}}</div>
    <div class="schedule-card_date">{{date}}</div>
    <div class="schedule-card_content">{{content}}</div>
  </div>
</template>

<script>
export default {
  name: "schedule-card",
  props: {
    type: String,
    date: String,
    content: String
  }
}
</script>