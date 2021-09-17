<template>
  <div class="nanagogo" ref="nanagogo">
    <base-section title="7gogo" additional-classes="headline--center">
      <template v-slot:content>
        <observer @intersect="showMore" :timeout="500"></observer>
        <more-button @click="showMore"></more-button>
        <transition name="standard-long-fade">
          <div v-if="displayGogoCards" class="gogo-card-container" ref="gogo-card-container">
            <div v-for="(data, index) in dataToShow.reverse()" class="gogo-card" :class="data.class" :ref="'gogo-card-' + index">
              <img :src="data.image" class="gogo-card_profile" alt="gogo-card_profile">
              <div class="gogo-card_text">
                {{data.message}}
              </div>
            </div>
          </div>
        </transition>
      </template>
    </base-section>
  </div>
</template>

<script>
import BaseSection from "@/components/sections/base-section";
import MoreButton from "@/components/buttons/more-button";
import Observer from "@/components/sections/observer";
import {mapState} from "vuex";
export default {
  name: "7gogo",
  components: {Observer, MoreButton, BaseSection},
  data() {
    return {
      displayAmount: 0,
      displayGogoCards: false
    }
  },
  computed: {
    ...mapState({
      gogoData: state => state.gogoData
    }),
    dataToShow() {
      return this.gogoData.slice(0, this.displayAmount)
    }
  },
  methods:{
    showMore() {
      this.displayGogoCards = true
      this.$nextTick().then(() => {

        let prevHeight = this.$refs["gogo-card-container"].offsetHeight
        this.displayAmount += 10
        this.$nextTick().then(() => {
          let newHeight = this.$refs["gogo-card-container"].offsetHeight
          window.scroll(0, newHeight - prevHeight)
        })

      })


    },
  },

}
</script>