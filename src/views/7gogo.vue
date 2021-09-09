<template>
  <div class="nanagogo" ref="nanagogo">
    <base-section title="7gogo" additional-classes="text-center">
      <template v-slot:content>
        <observer v-if="activateObserver" @intersect="showMore" :timeout="500"></observer>
        <more-button @click="showMore"></more-button>
        <div class="gogo-card-container" ref="gogo-card-container">
          <div v-for="(data, index) in dataToShow.reverse()" class="gogo-card" :class="data.class" :ref="'gogo-card-' + index">
            <img :src="data.image" class="gogo-card_profile" alt="gogo-card_profile">
            <div class="gogo-card_text">
              {{data.message}}
            </div>
          </div>
        </div>
      </template>
    </base-section>
  </div>
</template>

<script>
import api from '@/api'
import BaseSection from "@/components/sections/base-section";
import MoreButton from "@/components/buttons/more-button";
import Observer from "@/components/sections/observer";
export default {
  name: "7gogo",
  components: {Observer, MoreButton, BaseSection},
  data() {
    return {
      nanagogoData: [],
      displayAmount: 0,
      activateObserver: true
    }
  },
  created() {
    console.log("created")
    api.get7gogoData().then(response => {
      response.data.forEach(el => {
        if(el.post.body.length === 2) {
          this.nanagogoData.push({
            message: el.post.body[1].text,
            class: 'gogo-card--kii',
            image: 'img/profile-pictures/7gogoKii.jpg'
          })
          this.nanagogoData.push({
            message: el.post.body[0].comment.comment.body,
            class: 'gogo-card--other',
            image: 'img/profile-pictures/7gogoOther.png'
          })
        } else {
          this.nanagogoData.push({
            message: el.post.body[0].text,
            class: 'gogo-card--kii',
            image: 'img/profile-pictures/7gogoKii.jpg'
          })
        }
      })
    })
  },
  mounted() {
    // setTimeout(() =>{
    //   console.log("activarte")
    //   this.activateObserver = true
    // }, 3000);
  },
  computed: {
    dataToShow() {
      return this.nanagogoData.slice(0, this.displayAmount)
    }
  },
  methods:{
    showMore() {
      let prevHeight = this.$refs["gogo-card-container"].offsetHeight
      console.log(prevHeight)
      this.displayAmount += 10
      this.$nextTick().then(() => {
        // DOM updated
        console.log(this.$refs["gogo-card-container"].offsetHeight)
        let newHeight = this.$refs["gogo-card-container"].offsetHeight
        window.scroll(0, newHeight - prevHeight)
        console.log("tick")
      })

    },
  },

}
</script>

<style scoped>

</style>