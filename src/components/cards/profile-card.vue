<template>
  <div class="profile-card">
    <div class="profile-card_image">
      <base-image image-location="long/q.jpg"></base-image>
      <div class="profile-card_name">北野 日奈子 (きたの ひなこ)</div>
    </div>
    <div class="profile-card_content">
      <div class="profile-card_stats">
        <p>生年月日：1996年7月17日</p>
        <p>血液型：O型</p>
        <p>星座：かに座</p>
        <p>身長：158cm</p>
      </div>
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