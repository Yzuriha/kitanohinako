<template>
  <observer :once="true" @intersect="displayInfo = true"></observer>

  <div class="profile-card">
    <div class="profile-card_image">
      <base-image image-location="long/q.jpg"></base-image>
      <div class="profile-card_name"><ja-font>北野 日奈子 (きたの ひなこ)</ja-font></div>
    </div>
    <div class="profile-card_content">
      <transition name="standard-long-fade">

      <div v-if="displayInfo" class="profile-card_stats">
        <p>Birthday <ja-font>(生年月日)</ja-font>：17.07.1996</p>
        <p>Blood Type <ja-font>(血液型)</ja-font>：O</p>
        <p>Horoscope <ja-font>(星座)</ja-font>：Cancer <ja-font>(かに座)</ja-font></p>
        <p>Height <ja-font>(身長)</ja-font>：158cm</p>
      </div>
      </transition>
    </div>
  </div>
</template>

<script>
import BaseImage from "@/components/images/base-image";
import Observer from "@/components/sections/observer";
import JaFont from "@/components/fonts/ja-font";
export default {
  name: "profile-card",
  components: {JaFont, Observer, BaseImage},
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