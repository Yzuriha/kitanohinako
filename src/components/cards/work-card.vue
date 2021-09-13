<template>
  <observer :once="true" @intersect="showCard = true"></observer>
  <transition name="work-card-animation">
  <div v-if="showCard" class="work-card">
    <div class="work-card_title">{{title}}</div>
    <div class="work-card_content">
      <div v-for="work in works" class="word-card_entry">
        <span><img class="bullet_point" src="img/icons/bullet_point.svg" width="13" height="13" alt="bullet-point"></span>
        <span class="entry-romaji">{{work.romaji}}「{{work.kanji}}」</span>
        <span class="entry-year">{{work.year}}</span>
      </div>
    </div>
  </div>
  </transition>
</template>

<script>
import Observer from "@/components/sections/observer";
export default {
  name: "work-card",
  components: {Observer},
  props: {
    title: String,
    works: Array,
    animationDelayNumber: Number
  },
  data() {
    return {
      showCard: false
    }
  }
}
</script>