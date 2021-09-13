<template>
  <section class="container">
    <observer :once="true" @intersect="showSection = true"></observer>

<!--    <transition name="title-animation">-->
<!--      <div v-show="showSection"  class="headline" :class="additionalClasses">-->
<!--        <h2-bar class="headline_title" :title="title"></h2-bar>-->
<!--      </div>      -->
      <div :style="{visibility: showSection ? 'visible' : 'hidden'}" class="headline" :class="additionalClasses">
        <h2-bar class="headline_title" :title="title"></h2-bar>
      </div>
<!--    </transition>-->

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
