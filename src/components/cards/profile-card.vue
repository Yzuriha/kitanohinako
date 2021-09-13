<template>
  <observer :once="true" @intersect="displayInfo = true"></observer>

  <div class="profile-card">
    <div class="profile-card_image">
      <base-image image-location="long/q.jpg"></base-image>
      <div class="profile-card_name">北野 日奈子 (きたの ひなこ)</div>
    </div>
    <div class="profile-card_content">
      <transition name="standard-long-fade">

      <div v-if="displayInfo" class="profile-card_stats">
        <p>Birthday (生年月日)：17.07.1996</p>
        <p>Blood Type (血液型)：O</p>
        <p>Horoscope (星座)：Cancer (かに座)</p>
        <p>Height (身長)：158cm</p>
      </div>
      </transition>
    </div>
  </div>
</template>

<script>
import BaseImage from "@/components/images/base-image";
import Observer from "@/components/sections/observer";
export default {
  name: "profile-card",
  components: {Observer, BaseImage},
  props: {
    fullContent: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      displayInfo: false
    }
  }
}
</script>