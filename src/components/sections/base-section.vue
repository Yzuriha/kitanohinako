<template>
  <section class="container">
    <div class="headline" :class="additionalClasses">
      <h2-bar class="headline_title" :title="title"></h2-bar>
    </div>
    <slot name="content"></slot>
  </section>
</template>

<script>
import H2Bar from "@/components/bars/h2-bar";
export default {
  name: "base-section",
  components: {H2Bar},
  props: {
    title: String,
    additionalClasses: String
  }
}
</script>
