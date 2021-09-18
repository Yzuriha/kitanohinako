<template>
  <transition name="fade-loadingscreen"
              @leave="setLoadingScreenFinished">
    <loading-screen v-if="showLoadingScreen" @imgLoaded="onLoad"></loading-screen>
  </transition>
  <main-nav></main-nav>

<!--  <router-view v-slot="{ Component }">-->
<!--    <transition name="page-fade" mode="out-in">-->
<!--      <component :is="Component" />-->
<!--    </transition>-->
<!--  </router-view>-->
  <router-view></router-view>

  <main-footer></main-footer>
</template>

<script>
import MainNav from "@/components/navigation/main-nav";
import {mapActions} from "vuex";
import MainFooter from "@/components/sections/main-footer";
import LoadingScreen from "@/components/loaders/loading-screen";
export default {
  components: {LoadingScreen, MainFooter, MainNav},
  data() {
    return {
      showLoadingScreen: true
    }
  },
  created() {
    this.getImageFiles()
    this.getSchedule()
    this.getGogoData()
  },
  methods: {
    ...mapActions(['getGogoData', 'setLoadingScreenFinished', 'getImageFiles', 'getSchedule']),

    onLoad() {
      setTimeout(() => {
        this.showLoadingScreen = false
      }, 4500)
    }
  }
}
</script>


<style lang="less">

.refresh-button {
  position: fixed;
  bottom: 10px;
  right: 10px;
  cursor: pointer;
}


@font-face {
  font-family: 'Morison';
  src: url(./assets/fonts/Morison-Display.woff2);
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Spartan';
  src: url(./assets/fonts/Spartan-Thin.ttf);
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Noto Sans JP';
  src: url(./assets/fonts/NotoSansJP-Thin.otf);
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Noto Serif JP';
  src: url(./assets/fonts/NotoSerifJP-ExtraLight.otf);
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}


.ja {
  font-family: 'Noto Serif JP', serif;
}

@font-color: #4d4948;
@font-color-light: #4d494885;
@primary-color:  rgba(135, 206, 250, 0.2);
@primary-color-light:  rgba(135, 206, 250, 0.15);
@primary-color-dark: rgba(135, 206, 250, 0.45);
@tablet: ~'(min-width: 481px)';
@laptop: ~'(min-width: 769px)';
@desktop: ~'(min-width: 1025px)';

body {
  margin: 0;
  font-family: 'Noto Sans JP', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: @font-color;
  overflow-y: scroll; /* Show vertical scrollbar */

}

a {
  text-decoration: none;
  color: inherit;
}

h1, .h1, h2, .h2 {
  font-family: 'Morison', sans-serif;
  font-weight: normal;
  margin-bottom: 10px;
}

h2, .h2 {
  font-size: 2rem;
  margin: 10px 0;
  display: inline-block;
}

::selection {
  background: @primary-color; /* WebKit/Blink Browsers */
}

.router-link {
  text-decoration: none;
  color: @font-color;
}



.main-header {
  display: grid;
  grid-template-areas: 'a';
  .main-header_image {
    grid-area: a;
  }
}



@media @desktop {
  .instagram-modal_text::-webkit-scrollbar,
  body::-webkit-scrollbar {
    width: 11px;
  }
  .instagram-modal_text,
  body {
    scrollbar-width: thin;
    scrollbar-color: @primary-color none;
  }
  .instagram-modal_text::-webkit-scrollbar-track,
  body::-webkit-scrollbar-track {
    background: none;
  }
  .instagram-modal_text::-webkit-scrollbar-thumb,
  body::-webkit-scrollbar-thumb {
    background-color: @primary-color-dark;
    border-radius: 6px;
  }
}



/*******************/
/* SITE COMPONENTS */
/*******************/

.nanagogo, .blog, .gallery, .media, .profile, .schedule, .works {
  //margin: 90px 15px 0 15px;
  margin-top: 90px;
  // 90px for margin-top; 50px for footer-height; 40px * 2 for footer-margins
  min-height: calc(100vh - 90px - 50px - 40px - 40px);
}

// SITE CONTAINER \\
.container {
  max-width: 940px;
  margin: 0 15px;
  padding: 30px 0;
  @media @desktop {
    margin: 0 auto;
  }
  &.container--xs{
    max-width: 769px;
  }
  .headline {
    margin-top: 40px;
    margin-bottom: 15px;
    animation: 1.5s slide-in ease;
    &.headline--left {
      .headline_title {
        padding-left: 6px;
        border-left: 3px solid @primary-color;
      }
    }
    &.headline--center {
      text-align: center;
      .headline_title {
        border-bottom: 3px solid @primary-color;

      }
    }
    &.headline--bottom-border {
      border-bottom: 1px solid @font-color-light;
    }
  }
}

// NAVIGATION \\
.nav-home {
  font-family: 'Morison', sans-serif;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  z-index: 999;
  &.navigation--bottom {
    position: absolute;
    display: flex;
    width: 100%;
    top: calc(90vh - 50px);
    @media @tablet {
      top: 90vh;
    }
  }
  .router-link {
    padding: 13px 15px 0;
    &:after {
      display:block;
      content: '';
      border-bottom: solid 3px @primary-color;
      transform: scaleX(0);
      transition: transform 250ms ease-in-out;
      margin: 10px auto 0;
    }
    &:hover:after {
      transform: scaleX(1);
    }
  }
}

.nav {
  font-family: 'Morison', sans-serif;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.9);
  transition: all 0.5s ease-in-out;
  z-index: 999;

  &.nav--background-transparent {
    background-color: transparent;
  }

  .nav-top {
    padding: 10px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .nav-home-link {
      font-family: 'Noto Sans JP', sans-serif;
      .nav-home-link_title {
        font-weight: bold;
        font-size: 2rem;
        line-height: 1.2;
      }
      .nav-home-link_subtitle {
        font-size: 0.7rem;
        letter-spacing: 0.1rem;
      }
    }
    .navigation-toggle {
      display: flex;
      flex-direction: column;
      height: 20px;
      justify-content: space-between;
      align-items: flex-end;
      transition: all 1s;
      z-index: 999;
      opacity: 1;
      cursor: pointer;
      @media @desktop {
        display: none;
      }
      .navigation-toggle-bar-1,
      .navigation-toggle-bar-2,
      .navigation-toggle-bar-3 {
        border-bottom: 2px solid @font-color;
        transition: 0.5s ease-in-out;
      }
      .navigation-toggle-bar-1 {
        width: 30px;
        &.toggled {
          transform-origin: right;
          transform: rotate(-45deg);
          width: 25px;
        }
      }
      .navigation-toggle-bar-2 {
        width: 20px;
        &.toggled {
          width: 0;
        }
      }
      .navigation-toggle-bar-3{
        width: 20px;
        &.toggled {
          transform-origin: right;
          transform: rotate(45deg);
          width: 25px;
        }
      }
    }
    .nav-main {
      display: none;
      @media @desktop {
        display: flex;
      }

      .router-link {
        padding: 0 20px;
        margin-top: 10px;
        &:after {
          display:block;
          content: '';
          border-bottom: solid 3px @primary-color;
          transform: scaleX(0);
          transition: transform 250ms ease-in-out;
          margin: 10px auto 0;
        }
        &:hover:after {
          transform: scaleX(1);
        }
        &.router-link-active.router-link-exact-active:after {
          transform: scaleX(1);
        }
      }
    }

  }

  .nav-side {
    font-family: 'Spartan', sans-serif;
    font-size: 1.5rem;
    background-color: rgba(255, 255, 255, 0.9);
    position: fixed;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 0.5s ease-in-out;
    opacity: 0;
    visibility: hidden;
    &.navigation-side--active {
      opacity: 1;
      visibility: visible;
    }
    .router-link {
      padding: 13px 15px 0;
      line-height: 2;
      font-weight: 100;
    }
  }

}


// SCHEUDLE \\
.schedule-card {
  display: grid;
  grid-template-columns: min-content 1fr;
  align-items: center;
  grid-gap: 25px;
  border-right: 3px solid @primary-color;
  margin: 15px 0;

  .schedule-card_left {
    display: grid;
    justify-content: center;
    align-items: center;
    justify-items: center;
    grid-gap: 5px;
    padding: 20px;
    background-color: @primary-color-light;
    .schedule-card_date {
      font-size: 2.5rem;
      line-height: 1;
    }
    .schedule-card_weekday {
      font-size: 1.5rem;
      line-height: 1;
    }
    .schedule-card_month-year {
      font-size: 0.8rem;
    }
  }
  .schedule-card_right {
    .schedule-card_type {
      border: 1px solid @font-color;
      display: inline-block;
      padding: 0 5px;
      font-size: 12px;
      margin: 10px 0;
      border-radius: 4px;
    }
  }
}


// PROFILE \\
.profile-card {
  display: grid;
  grid-gap: 10px;
  justify-items: center;
  @media @desktop {
    grid-template-columns: 1fr 1fr;
  }
  .profile-card_name {
    text-align: center;
  }
  .profile-card_image {
    width: 80%;
    max-width: 300px;
  }
  .profile-card_content{
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
  }
}


// BLOG \\
.blog-card {
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-gap: 10px;
  margin: 10px 0;
  //padding: 5px 0 10px 0;
  //border-bottom: 1px solid black;
  .blog-card_image {
    height: 100px;
    width: 100px;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    justify-items: center;
    .base-image {
      height: 100%;
    }
  }
  .blog-card_content {
    height: 100px;
  }
  .blog-card_date {
    &.blog-card_date--placeholder {
      width: 50%;
      height: 1em;
    }
  }
  .blog-card_title,
  .blog-card_text{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    word-break: break-all;
  }
  .blog-card_title {
    -webkit-line-clamp: 1;
    font-weight: bolder;
    &.blog-card_title--placeholder {
      width: 75%;
      height: 1em;
    }
  }
  .blog-card_text {
    -webkit-line-clamp: 2;
    &.blog-card_text--placeholder {
      width: 100%;
      height: 3em;
    }
  }
  .blog-card_date--placeholder,
  .blog-card_title--placeholder,
  .blog-card_text--placeholder {
    border-radius: 10px;
    background-color: rgba(0,0,0,0.05);
    margin: 3px 0;
  }
  .blog-card_hr {
    grid-column: ~"1/3";
    width: 75%;
    max-width: 500px;
    border: none;
    border-bottom: 1px solid @font-color-light;
  }
}


// GALLERY \\
.gallery-image-container {
  //line-height: 0;
  column-count: 2;
  column-gap: 5px;
  @media @tablet {
    column-count: 3;
  }
  @media @desktop {
    column-count: 4;
  }
  &.gallery-image-container--instagram {
    display: grid;
    /* grid-template-columns: 1fr 1fr 1fr 1fr; */
    grid-gap: 5px;
    grid-template-columns: 1fr 1fr;

    //grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    //grid-template-rows: repeat(auto-fill, minmax(200px, 1fr));
    @media @tablet {
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media @desktop {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
  .base-image {
    /* Just in case there are inline attributes */
    width: 100%;
    height: auto;
  }
}


.instagram-video-container,
.instagram-video,
.instagram-image {
  width: 100%;
}


// 7GOGO \\
.gogo-card {
  display: grid;
  grid-template-columns: min-content 1fr;
  .gogo-card_profile {
    width: 50px;
    border-radius: 50%;
  }
  .gogo-card_text {
    max-width: 350px;
    background-color: rgba(135, 206, 250, 0.2);
    border-radius: 0 10px 10px 10px;
    padding: 15px;
    margin:15px;
    word-break: break-all;
  }
  &.gogo-card--other {
    grid-template-columns: 1fr min-content;
    justify-items: end;
    .gogo-card_text {
      order: 1;
      background-color: lemonchiffon;
      border-radius: 10px 0 10px 10px;
    }
    .gogo-card_profile {
      order: 2;
    }
  }
}


// WORKS \\
.work-card {
  display: grid;
  grid-template-columns: 85px 1fr;
  grid-gap: 10px;
  margin: 20px 0;
  .work-card_title {
    border-right: 1px solid @primary-color-dark;
    font-family: 'Morison', sans-serif;
    font-weight: bold;
  }
  .word-card_entry {
    margin-bottom: 10px;
    display: grid;
    grid-template-columns: min-content 1fr;
    align-items: start;
    align-content: start;
    grid-gap: 5px;
    .bullet_point {
      opacity: 0.4;
      height: 100%;
    }
    .entry-romaji,
    .entry-kanji,
    .entry-year{
      grid-column-start: 2;
    }
  }
}



/*******************/
/* BASE COMPONENTS */
/*******************/

// IMAGE \\
.base-image {
  width: 100%;
  height: auto;
  transition: all 0.5s ease-in;
  overflow: hidden;
  &.base-image--long {

  }
  &.base-image--square {
    aspect-ratio: 1;
    object-fit: cover;
  }
}


// MORE BUTTON \\
.more-button {
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  margin-top: 30px;
  .more-button_text {
    transition: all 0.5s ease-in-out;
    cursor: pointer;
    color: @font-color;
    font-family: 'Spartan',sans-serif;
    text-decoration: none;
    border-bottom: 1px solid @font-color-light;
    &:hover {
      border-color: @primary-color;
    }
  }
}


// INPUT \\
.input_group {
  position: relative;
  padding-top: 15px;
  margin-bottom: 30px;
  .input_text-container {
    display: grid;
    grid-template-columns: 1fr min-content;
  }
  .input_delete,
  .input_field {
    font-family: "Noto Sans JP", sans-serif;
    width: 100%;
    border: 0;
    border-bottom: 1px solid @font-color-light;
    color: @font-color;
    outline: 0;
    font-size: 0.9rem;
    padding: 10px 0 7px 0;
    background: transparent;
    transition: all 0.35s ease;
    &::placeholder {
      color: transparent;
    }
    &:placeholder-shown ~ .input_label {
      font-size: 1rem;
      cursor: text;
      top: 20px;
    }
    &:focus {
      padding-bottom: 7px;
      border-color: @primary-color-dark;
      ~ .input_label {
        position: absolute;
        top: 0;
        display: block;
        transition: all 0.35s ease;
        font-size: 1rem;
        color: @font-color;
      }
     + .input_delete {
       border-color: @primary-color-dark;
     }
    }
  }

  .input_delete {
    transform: scaleX(1.5);
    //font-weight: bold;
  }
  .input_label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.35s;
    font-size: 1rem;
    user-select: none;
    color: @font-color;
  }
}


// VIDEO \\
.video-container {
  position: relative;
  width: 100%;
  &.video-container--iframe {
    height: 0;
    padding-bottom: 56.25%;
    margin-bottom: 30px;
  }
  .instagram-video-container {
    position: absolute;
  }
  .play-button {
    color: white;
    position: absolute;
    left: 5px;
    top: 5px;
    z-index: 1;
  }
  .video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}


// MODAL \\
.base-modal {
  //overflow-x: hidden;
  //overflow-y: auto;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: rgba(0,0,0,0.6);
  .close-button {
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 2em;
    color: white;
    cursor: pointer;
  }
  .modal-container {
    margin: 0 auto;
    position: relative;
    top: 10%;
    max-width: 90%;
    max-height: 85vh;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    .instagram-modal {
      display: grid;
      grid-template-rows: max-content 1fr;
      height: 85vh;
      max-width: 940px;
      @media @tablet {
        grid-template-columns: 65% 1fr;
        grid-template-rows: min-content;
        align-items: center;
        justify-items: center;
        justify-content: center;
        align-content: center;
      }
      .instagram-video-container {
        position: initial;
        + .instagram-modal_text {
          margin: -3px 0 0 0;
        }
      }
      .instagram-modal_text {
        background-color: white;
        padding: 10px 25px;
        font-family: 'Noto Sans JP',sans-serif;
        overflow-y: auto;
        @media @tablet {
          //overflow: scroll;
          height: 0;
          min-height: 100%;
          padding: 0 25px;
        }
      }
    }
    .base-image-modal {
      height: 85vh;
      max-width: 940px;
      display: flex;
      align-content: center;
      justify-content: center;
      align-items: center;
      .base-image {
        max-height: 85vh;
        object-fit: contain;
        max-width: 940px;
      }
    }
  }
}


// HEADER \\
.main-header {
  width: 100%;
  height: 100vh;

  .main-header_gradient {
    //background: linear-gradient(0deg, rgb(255 255 255) 0%, rgba(255,255,255,0.01) 45%);
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#ffffff+0,ffffff+100&0+0,1+100 */
    background: -moz-linear-gradient(top,  rgba(255,255,255,0) 55%, rgba(255,255,255,1) 100%); /* FF3.6-15 */
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(255,255,255,0)), color-stop(100%,rgba(255,255,255,1))); /* Chrome4-9,Safari4-5 */
    background: -webkit-linear-gradient(top,  rgba(255,255,255,0) 55%,rgba(255,255,255,1) 100%); /* Chrome10-25,Safari5.1-6 */
    background: -o-linear-gradient(top,  rgba(255,255,255,0) 55%,rgba(255,255,255,1) 100%); /* Opera 11.10-11.50 */
    background: -ms-linear-gradient(top,  rgba(255,255,255,0) 55%,rgba(255,255,255,1) 100%); /* IE10 preview */
    background: linear-gradient(to bottom,  rgba(255,255,255,0) 55%,rgba(255,255,255,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */

    width: 100%;
    position: absolute;
    height: 100vh;
  }
  .main-header_image {
    width: 100%;
    height: 100vh;
    background-position-y: top;
    background-position-x: center;
    background-size: cover;
  }
}

// FOOTER \\
.main-footer {
  margin: 40px;
  .main-footer_sns {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8em;
    .insta-follow-btn {
      width: 13px;
      height: 13px;
      padding: 10px;
    }
  }
  .main-footer_disclaimer {
    font-size: 12px;
    text-align: center;
  }
}

.hr {
  width: 100%;
}

// LOADING SCREEN \\
.loading-screen {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  background-color: white;
  z-index: 9999;
  display: grid;
  grid-template-areas: 'a';
  align-items: center;
  justify-items: center;
  align-content: center;
  justify-content: center;
  img {
    width: 70%;
    max-width: 500px;
    height: auto;
    opacity: 0.85;
  }

  .sign, .texture {
    grid-area: a;
  }
}


/**************/
/* ANIMATIONS */
/**************/
.fade-loadingscreen-enter-active,
.fade-loadingscreen-leave-active {
  transition: opacity 1s ease;
}

.fade-loadingscreen-enter-from,
.fade-loadingscreen-leave-to {
  opacity: 0;
}

// Card Entrace Animation
.entrance-animation {
  animation: cardEntrance 700ms 0s ease-out;
  animation-fill-mode: backwards;
}


@keyframes cardEntrance {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

// Standard Fade
.standard-fade-enter-active,
.standard-fade-leave-active {
  transition: opacity 0.25s ease;
}

.standard-fade-enter-from,
.standard-fade-leave-to {
  opacity: 0;
}

// Standard Long Fade
.standard-long-fade-enter-active,
.standard-long-fade-leave-active {
  transition: opacity 1.5s ease;
}

.standard-long-fade-enter-from,
.standard-long-fade-leave-to {
  opacity: 0;
}

// Header Fade
.header-fade-enter-active,
.header-fade-leave-active {
  transition: opacity 1s ease;
}

.header-fade-enter-from,
.header-fade-leave-to {
  opacity: 0;
}

// Title Slide In
.title-animation-enter-active {
  animation: slide-in 1.5s;
}
.title-animation-leave-active {
  animation: slide-in 1.5s;
}
@keyframes slide-in {
  0% {
    transform: translateX(-40px);
    opacity: 0;
  }
  100% {
    transform:  translateX(0px);
    opacity: 1;
  }
}

// Work Card Slide Down
.work-card-animation-enter-active {
  animation: slide-down 1.5s;
}
.work-card-animation-leave-active {
  animation: slide-down 1.5s;
}
@keyframes slide-down {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

/*********************/
/* HELPER COMPONENTS */
/*********************/
.text-center {
  text-align: center;
}

.visibility-hidden {
  visibility: hidden;
}

.cursor-pointer {
  cursor: pointer;
}

</style>
