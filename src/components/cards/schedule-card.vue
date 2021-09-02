<template>
  <div class="schedule-card">
    <div class="schedule-card_type">{{type}}MEDIA</div>
    <div class="schedule-card_date">{{date}}2021.08.29</div>
    <div class="schedule-card_content">{{content}}【TV】9月2日(木)20時～フジテレビ系『千鳥のクセがスゴいネタGP2時間SP』出演</div>
  </div>
</template>

<script>
export default {
  name: "schedule-card",
  props: {
    type: String,
    date: Date,
    content: String
  }
}
</script>