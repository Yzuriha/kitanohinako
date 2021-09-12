<template>
  <div v-if="type === 'image'" class="instagram-image-container">
    <img
         @click="setActiveInstagramPost(id)"
         :alt="title"
         loading="lazy"
         :id="id"
         v-bind="$attrs"
         class="base-image base-image--square cursor-pointer entrance-animation"
         :src="source">
  </div>
  <div v-else class="video-container cursor-pointer entrance-animation"
       :id="id"
       v-bind="$attrs"
       @click="setActiveInstagramPost(id)">
    <div class="play-button">▶</div>
    <div class="instagram-video-container">
      <video class="instagram-video" preload="metadata">
        <source :src="source + '#t=0.001'" type="video/mp4">
      </video>
    </div>
  </div>
  <base-modal :show-modal="id === activeInstagramPost" @closeModal="setActiveInstagramPost('')">
    <template v-slot:content>
      <div class="instagram-modal">
        <img v-if="type === 'image'"
             class="instagram-image"
             :alt="title"
             loading="lazy"
             :id="id"
             :src="source">
        <div v-else :id="id" class="instagram-video-container">
          <video class="instagram-video" autoplay muted loop>
            <source :src="source" type="video/mp4">
          </video>
        </div>
        <div class="instagram-modal_text">
          <p v-for="text in description">{{text}}</p>
        </div>
      </div>
    </template>
  </base-modal>
</template>

<script>
import BaseImage from "@/components/images/base-image";
import BaseModal from "@/components/modals/base-modal";
import {mapActions, mapState} from "vuex";
export default {
  name: "instagram-image",
  components: {BaseModal, BaseImage},
  props: {
    title: String,
    id: String,
    description: Array,
    date: Date,
    source: String,
    imageLink: String,
    type: String
  },
  created() {
  },
  computed: {
    ...mapState({
      activeInstagramPost: state => state.activeInstagramPost
    }),
  },
  methods: {
    ...mapActions(['setActiveInstagramPost']),

  }
}
</script>

<style lang="less">

.instagram-image-container {
  position: relative;
  &:after {
    content: "";
    display: block;
    padding-bottom: 100%

  }
  .base-image {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

}


</style>