<template>
  <div class="more-button">
    <router-link class="more-button_link" :to="route">more</router-link>
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

<style scoped>

</style>