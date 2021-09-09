<template>
  <div class="profile-card">
    <div class="profile-card_image">
      <base-image image-location="long/2.jpg"></base-image>
      <div class="profile-card_name">北野 日奈子 (きたの ひなこ)</div>
    </div>
    <div class="profile-card_content">
      <div class="profile-card_stats">
        <p>生年月日：1996年7月17日</p>
        <p>血液型：O型</p>
        <p>星座：かに座</p>
        <p>身長：158cm</p>
      </div>
<!--      <hr v-if="fullContent"  class="hr">-->
<!--      <div v-if="fullContent" class="profile-card_text">-->
<!--        Lorem ipsum dolor sit amet, consetetur sadipscing elitr.<br>-->
<!--        Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.-->
<!--      </div>-->
    </div>
  </div>
</template>

<script>
import BaseImage from "@/components/images/base-image";
export default {
  name: "profile-card",
  components: {BaseImage},
  props: {
    fullContent: {
      type: Boolean,
      default: true
    }
  }
}
</script>