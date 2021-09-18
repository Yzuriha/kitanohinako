<template>
  <transition appear name="standard-long-fade">
    <div class="more-button">
      <span class="more-button_text">view more</span>
    </div>
  </transition>
</template>

<script>
export default {
  name: "more-button",
  props: {
    route: String
  }
}
</script>