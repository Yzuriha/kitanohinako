<template>
  <router-link class="router-link" :to="to">
    <span class="router-link_title">{{ title }}</span>
  </router-link>
</template>

<script>
export default {
  name: "router-navigation",
  props: {
    to: String,
    title: String
  }
}
</script>