<template>
  <img class="base-image entrance-animation cursor-pointer" :class="[getImageType]" :src="'img/' + imageLocation" :alt="altName" loading="lazy" @click="setActiveGalleryImage(altName)" v-bind="$attrs">
  <base-modal :show-modal="altName === activeGalleryImage" @closeModal="setActiveGalleryImage('')">
    <template v-slot:content>
      <div class="base-image-modal">
        <img class="base-image" :src="'img/' + imageLocation" :alt="altName" loading="lazy">
      </div>
    </template>
  </base-modal>
</template>

<script>
import {mapActions, mapState} from "vuex";
import BaseModal from "@/components/modals/base-modal";

export default {
  name: "base-image",
  components: {BaseModal},
  props: {
    title: String,
    imageLocation: String
  },
  computed: {
    ...mapState({
      activeGalleryImage: state => state.activeGalleryImage
    }),
    altName() {
      return `${this.$route.name}-${this.imageLocation.replaceAll('/', '-')}-image`
    },
    getImageType() {
      let type = this.imageLocation.split("/")[0]
      return type === "long" ? "base-image--long" : "base-image--square"
    }
  },
  methods: {
    ...mapActions(['setActiveGalleryImage'])
  }
}
</script>