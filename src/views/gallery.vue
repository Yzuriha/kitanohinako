<template>
  <div class="gallery">
    <base-section title="GALLERY" additional-classes="headline--center">
      <template v-slot:content>
        <div v-show="loadingScreenFinished" class="gallery-image-container">
          <base-image v-for="(file, index) in getShuffledImageFilesLocation" :image-location="file.location" :style="{animationDelay: index * 100 + 'ms'}"></base-image>
        </div>
      </template>
    </base-section>

    <base-section title="INSTAGRAM" additional-classes="headline--center">
      <template v-slot:content>
        <observer @intersect="showMore" :once="true"></observer>
        <div v-show="loadingScreenFinished" class="gallery-image-container gallery-image-container--instagram">
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
import {mapGetters, mapState} from "vuex";
import Observer from "@/components/sections/observer";

export default {
  name: "Gallery",
  components: {Observer, MoreButton, BaseModal, BaseImage, InstagramImage, SquareImage, LongImage, BaseSection, MainNav},
  data() {
    return {
      instagramData: [],
      displayAmount: 0,
    }
  },
  created() {
    api.getInstagramData().then(response => {
      this.instagramData = response.data.reverse()
    })
    this.showMore()
  },
  methods: {
    getImgLocation(img) {
      return process.env.NODE_ENV === 'production' ? `./img/instagram/${img}`: `https://yzuriha.github.io/kitanohinako/img/instagram/${img}`
    },
    showMore() {
      for(let i = 0; i < 12; i++) {
        setTimeout(() => {
          this.displayAmount += 1
        }, i * 100)
      }
    },
  },
  computed: {
    ...mapState({
      loadingScreenFinished: state => state.loadingScreenFinished,
      // imageFilesLocation: state => state.imageFilesLocation
    }),
    ...mapGetters(['getShuffledImageFilesLocation']),
    getLimitedAmount() {
      return this.instagramData.slice(0, this.displayAmount)
    }
  }
}
</script>