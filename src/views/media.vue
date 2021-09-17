<template>
  <div class="media">
    <base-section title="MEDIA" additional-classes="headline--center">
      <template v-slot:content>
        <div class="video-container video-container--iframe">
          <transition name="standard-long-fade">
          <iframe @load="showIframeA = true" v-show="showIframeA" class="video" src="https://www.youtube.com/embed/GrA-y92MPiQ" title="乃木坂46 27th 北野日奈子 個人PV「ワタシがアイドルでいられる時間」予告編" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </transition>
        </div>
        <div class="video-container video-container--iframe">
          <transition name="standard-long-fade">
            <iframe @load="showIframeB = true" v-show="showIframeB" class="video" src="https://www.youtube.com/embed/TntPUYcte5Y" title="【B.L.T.】B.L.T.2021年8月号　乃木坂46北野日奈子 撮影メイキング動画" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </transition>
        </div>
        <div class="video-container video-container--iframe">
          <transition name="standard-long-fade">
            <iframe @load="showIframeC = true" v-show="showIframeC" class="video" src="https://www.youtube.com/embed/dJJO7Xf5M0w" title="【B.L.T.】blt graph.vol.61　北野日奈子" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </transition>
        </div>
      </template>
    </base-section>
  </div>
</template>

<script>
import MainNav from "@/components/navigation/main-nav";
import BaseSection from "@/components/sections/base-section";
export default {
  name: "Media",
  components: {BaseSection, MainNav},
  data() {
    return {
      showIframeA: false,
      showIframeB: false,
      showIframeC: false,
    }
  },
  methods: {
    // showMediaA() {
    //   this.showIframeA = true
    // },
    // showMediaB() {
    //   this.showIframeB = true
    // }
  }
}
</script>