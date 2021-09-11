<template>
  <div class="more-button">
    <router-link class="more-button_text" :to="route">view more</router-link>
  </div>
</template>

<script>
export default {
  name: "more-button-link",
  props: {
    route: String
  }
}
</script>