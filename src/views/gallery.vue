<template>
  <div class="gallery">

<!--    <base-section title="GALLERY" additional-classes="headline&#45;&#45;center">-->
<!--      <template v-slot:content>-->
<!--        <div v-show="loadingScreenFinished" class="fake-masonry">-->
<!--          <base-image v-for="(file, index) in getLimitedAmountGallery"-->
<!--                      :image-location="file.location"-->
<!--                      class="item"-->
<!--                      :style="{animationDelay: ((index + 1) - 10 * delayMultiplierGallery) * 150 + 'ms'}">-->
<!--          </base-image>-->
<!--          <observer @intersect="showMoreGallery" :once="true"></observer>-->
<!--        </div>-->
<!--      </template>-->
<!--    </base-section>-->


        <base-section title="INSTAGRAM" additional-classes="headline--center">
          <template v-slot:content>
            <div v-show="loadingScreenFinished" class="gallery-image-container gallery-image-container--instagram">
              <instagram-image v-for="(image, index) in getLimitedAmountInstagram" :description="image.text"
                               :type="image.type"
                               :source="getImgLocation(image.filename)"
                               :id="image.filename.split('.')[0] + '-' + index"
                               :style="{animationDelay: ((index + 1) - 12 * delayMultiplierInstagram) * 150 + 'ms'}">
              </instagram-image>
              <observer @intersect="showMoreInstagram" :once="true"></observer>
            </div>
            <more-button v-if="displayAmountInstagram < instagramData.length" @click="showMoreInstagram"></more-button>
          </template>
        </base-section>

    <base-section title="GALLERY" additional-classes="headline--center">
      <template v-slot:content>
        <div v-show="loadingScreenFinished" class="gallery-image-container">
          <base-image v-for="(file, index) in getLimitedAmountGallery"
                      :image-location="file.location"
                      :style="{animationDelay: index * 150 + 'ms'}">
          </base-image>
          <observer @intersect="showMoreGallery" :once="true"></observer>
        </div>
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
      displayAmountInstagram: 0,
      displayAmountGallery: 0,
      delayMultiplierGallery: -1,
      delayMultiplierInstagram: -1
    }
  },
  created() {
    api.getInstagramData().then(response => {
      this.instagramData = response.data.reverse()
    })
  },
  methods: {
    getImgLocation(img) {
      return process.env.NODE_ENV === 'production' ? `./img/instagram/${img}`: `https://kitanohinako.xyz/img/instagram/${img}`
    },
    showMoreGallery() {
      this.displayAmountGallery += 10
      this.delayMultiplierGallery++
    },
    showMoreInstagram() {
      this.displayAmountInstagram += 12
      this.delayMultiplierInstagram++
    },
  },
  computed: {
    ...mapState({
      loadingScreenFinished: state => state.loadingScreenFinished
    }),
    ...mapGetters(['getShuffledImageFilesLocation']),
    getLimitedAmountGallery() {
      let all = this.getShuffledImageFilesLocation.length
      return this.getShuffledImageFilesLocation.slice(0, all)
    },
    getLimitedAmountInstagram() {
      return this.instagramData.slice(0, this.displayAmountInstagram)
    }
  }
}
</script>