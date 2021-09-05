<template>
  <div class="nanagogo" ref="nanagogo">
    <base-section title="7gogo" additional-classes="text-center">
      <template v-slot:content>
        <div @click="showMore">more</div>
        <div v-for="data in dataToShow.reverse()" class="gogo-card" :class="data.class">
          <img :src="data.image" class="gogo-card_profile" alt="gogo-card_profile">
          <div class="gogo-card_text">
            {{data.message}}
          </div>
        </div>
      </template>
    </base-section>
  </div>
  <!--  {{dataToShow}}-->

</template>

<script>
import api from '@/api'
import BaseSection from "@/components/sections/base-section";
export default {
  name: "7gogo",
  components: {BaseSection},
  data() {
    return {
      nanagogoData: [],
      displayAmount: 10,
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
  computed: {
    dataToShow() {
      return this.nanagogoData.slice(0, this.displayAmount)
    }
  },
  methods:{
    showMore() {
      this.displayAmount += 20
    },
  },

}
</script>

<style scoped>

</style>