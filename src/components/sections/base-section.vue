<template>
  <section class="container">
    <observer :once="true" @intersect="showSection = true"></observer>

    <transition name="title-animation">
      <div v-show="showSection"  class="headline" :class="additionalClasses">
        <h2-bar class="headline_title" :title="title"></h2-bar>
      </div>
    </transition>
<!--    <div :style="{visibility: showSection ? 'visible' : 'hidden', animationDelay: isAnimationDelayed ? '500ms' : '0'}" class="headline" :class="additionalClasses">-->
<!--      <h2-bar class="headline_title" :title="title"></h2-bar>-->
<!--    </div>-->
    <slot name="content"></slot>
  </section>
</template>

<script>
import H2Bar from "@/components/bars/h2-bar";
import Observer from "@/components/sections/observer";
export default {
  name: "base-section",
  components: {Observer, H2Bar},
  props: {
    title: String,
    additionalClasses: String
  },
  data() {
    return {
      showSection: false
    }
  }
}
</script>
