<template>
  <div class="work-card">
    <div class="work-card_title">{{title}}</div>
    <div class="work-card_content">
      <div v-for="work in works" class="word-card_entry">
        <span><img class="bullet_point" src="img/icons/bullet_point.svg" width="13" height="13" alt="bullet-point"></span>
        <span class="entry-romaji">{{work.romaji}}「{{work.kanji}}」</span>
        <span class="entry-year">{{work.year}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "work-card",
  props: {
    title: String,
    works: Array
  }
}
</script>