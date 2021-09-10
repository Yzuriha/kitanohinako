<template>
  <div class="gallery">
    <base-section title="GALLERY" additional-classes="text-center">
      <template v-slot:content>
        <div class="gallery-image-container">
          <long-image image-location="long/1.jpg"></long-image>
          <square-image image-location="wide/1.png"></square-image>
          <long-image image-location="long/2.jpg"></long-image>
          <square-image image-location="wide/2.png"></square-image>
          <square-image image-location="wide/3.png"></square-image>
          <square-image image-location="wide/4.png"></square-image>
          <long-image image-location="long/3.jpg"></long-image>
          <square-image image-location="wide/5.png"></square-image>
        </div>
      </template>
    </base-section>

    <base-section title="INSTAGRAM" additional-classes="text-center">
      <template v-slot:content>
        <div class="gallery-image-container gallery-image-container--instagram">
          <instagram-image v-for="(image, index) in getLimitedAmount" :description="image.text"
                           :type="image.type"
                           :source="getImgLocation(image.filename)"
                           :id="image.filename.split('.')[0] + '-' + index">
          </instagram-image>
        </div>
        <more-button v-if="displayAmount < instagramData.length" @click="showMore"></more-button>
      </template>
    </base-section>
  </div>
</template>

<script>
import MainNav from "@/components/navigation/main-nav";
import BaseSection from "@/components/sections/base-section";
import LongImage from "@/components/images/long-image";
import SquareImage from "@/components/images/square-image";
import api from "@/api";
import InstagramImage from "@/components/images/instagram-image";
import BaseImage from "@/components/images/base-image";
import BaseModal from "@/components/modals/base-modal";
import MoreButton from "@/components/buttons/more-button";

export default {
  name: "Gallery",
  components: {MoreButton, BaseModal, BaseImage, InstagramImage, SquareImage, LongImage, BaseSection, MainNav},
  data() {
    return {
      instagramData: [],
      displayAmount: 12,
    }
  },
  created() {
    api.getInstagramData().then(response => {
      this.instagramData = response.data.reverse()
    })
  },
  methods: {
    getImgLocation(img) {
      return process.env.NODE_ENV === 'production' ? `./img/instagram/${img}`: `https://yzuriha.github.io/kitanohinako/img/instagram/${img}`
    },
    showMore() {
      this.displayAmount += 12
    },
  },
  computed: {
    getLimitedAmount() {
      return this.instagramData.slice(0, this.displayAmount)
    }
  }
}
</script>