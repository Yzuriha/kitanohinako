<template>
  <div class="works">
    <base-section title="WORKS" additional-classes="text-center">
      <template v-slot:content>

      </template>
    </base-section>
  </div>
</template>

<script>
import MainNav from "@/components/navigation/main-nav";
import BaseSection from "@/components/sections/base-section";
export default {
  name: "Works",
  components: {BaseSection, MainNav}
}
</script>