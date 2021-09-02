<template>
  <section class="container">
    <div class="headline" :class="additionalClasses">
      <h2>{{title}}</h2>
    </div>
    <slot name="content"></slot>
  </section>
</template>

<script>
export default {
  name: "base-section",
  props: {
    title: String,
    additionalClasses: String
  }
}
</script>
