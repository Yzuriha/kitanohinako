<template>
  <transition name="fade-loadingscreen">
  <loading-screen v-if="showLoadingScreen" @imgLoaded="onLoad"></loading-screen>
  </transition>
  <main-nav></main-nav>
  <router-view/>
  <main-footer></main-footer>
</template>

<script>
import MainNav from "@/components/navigation/main-nav";
import {mapActions} from "vuex";
import MainFooter from "@/components/sections/main-footer";
import LoadingScreen from "@/components/loading-screen";
export default {
  components: {LoadingScreen, MainFooter, MainNav},
  data() {
    return {
      showLoadingScreen: true
    }
  },
  created() {
    this.accessSpreadSheet()
    console.log("CREATEd", new Date().getTime())
  },
  mounted() {

  },
  methods: {
    ...mapActions(['accessSpreadSheet']),

    onLoad() {
      console.log("LOADED", new Date().getTime())
      setTimeout(() => {
        this.showLoadingScreen = false
      }, 4500)
    }
  }
}
</script>


<style lang="less">

@font-face {
  font-family: 'Morison';
  src: url(./assets/fonts/Morison-Display.woff2);
  font-weight: normal;
  font-style: normal;

}

@font-color: #4d4948;
@tablet: ~'(min-width: 481px)';
@laptop: ~'(min-width: 769px)';
@desktop: ~'(min-width: 1025px)';

body {
  margin: 0;
  font-family: 'Noto Sans JP', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: @font-color;
}

h1, h2 {
  font-family: 'Morison', sans-serif;
  font-weight: normal;
  margin-bottom: 10px;
}

h3, h4 {
  font-family: 'Spartan', sans-serif;
  font-weight: lighter;
  margin-bottom: 10px;
}

.router-link {
  text-decoration: none;
  color: @font-color;
}

/*******************/
/* SITE COMPONENTS */
/*******************/

.nanagogo, .blog, .gallery, .media, .profile, .schedule, .works {
  margin: 90px 15px 0 15px;
}

// SITE CONTAINER \\
.container {
  max-width: 940px;
  margin: 0 15px;
  padding: 30px 0;
  @media @desktop {
    margin: 0 auto;
  }
  .headline {
    margin-top: 40px;
    margin-bottom: 15px;
    &.headline--bottom-border {
      border-bottom: 1px solid @font-color;
    }
  }
}

// NAVIGATION \\
.nav-home {
  font-family: 'Morison', sans-serif;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  &.navigation--bottom {
    position: absolute;
    display: flex;
    width: 100%;
    top: calc(90vh - 40px);
  }
  .router-link {
    padding: 13px 15px;
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
        border-bottom: 2px solid black;
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
        display: initial;
      }
      .router-link {
        padding: 0 25px;
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
      padding: 13px 15px;
      line-height: 2;
      font-weight: 100;
    }
  }

}


// SCHEUDLE \\
.schedule-card {
  margin: 15px 0;
  display: grid;
  grid-template-columns: min-content min-content 1fr;
  grid-gap: 5px;
  .schedule-card_date {
    //grid-area: date;
    grid-row: ~"1/2";
    font-size: 0.8rem;
    padding: 0 10px;
  }
  .schedule-card_type {
    //grid-area: type;
    grid-row: ~"1/2";
    border: 1px solid @font-color;
    border-radius: 4px;
    padding: 0 10px;
    font-size: 0.8rem;
  }
  .schedule-card_content {
    //grid-area: content;
    grid-row-start: 2;
    grid-column: ~"1/4";
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



/*******************/
/* BASE COMPONENTS */
/*******************/

// IMAGE \\
.base-image {
  width: 100%;
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
  margin-top: 10px;
  .more-button_text {
    cursor: pointer;
    color: @font-color;
    font-family: 'Spartan',sans-serif;
    text-decoration: none;
    border-bottom: 1px solid;
  }
}


// VIDEO \\
.video-container {
  position: relative;
  width: 100%;
  &.video-container--iframe {
    height: 0;
    padding-bottom: 56.25%;
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
  overflow-x: hidden;
  overflow-y: auto;
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
  }
  .modal-container {
    margin: 0 auto;
    position: relative;
    top: 10%;
    max-width: 90%;
    max-height: 85vh;
    .instagram-modal {
      display: grid;
      grid-template-rows: max-content 1fr;
      height: 85vh;
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
        overflow: scroll;
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
    background: -moz-linear-gradient(top,  rgba(255,255,255,0) 45%, rgba(255,255,255,1) 100%); /* FF3.6-15 */
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(255,255,255,0)), color-stop(100%,rgba(255,255,255,1))); /* Chrome4-9,Safari4-5 */
    background: -webkit-linear-gradient(top,  rgba(255,255,255,0) 45%,rgba(255,255,255,1) 100%); /* Chrome10-25,Safari5.1-6 */
    background: -o-linear-gradient(top,  rgba(255,255,255,0) 45%,rgba(255,255,255,1) 100%); /* Opera 11.10-11.50 */
    background: -ms-linear-gradient(top,  rgba(255,255,255,0) 45%,rgba(255,255,255,1) 100%); /* IE10 preview */
    background: linear-gradient(to bottom,  rgba(255,255,255,0) 45%,rgba(255,255,255,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */

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
      width: 1em;
      height: 1em;
      padding: 10px;
    }
  }
  .main-footer_disclaimer {
    font-size: 0.7em;
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
  img {
    width: 70%;
    max-width: 500px;
    opacity: 0.85;
  }

  .sign, .texture {
    grid-area: a;
  }
}

.fade-loadingscreen-enter-active,
.fade-loadingscreen-leave-active {
  transition: opacity 0.5s ease;
}

.fade-loadingscreen-enter-from,
.fade-loadingscreen-leave-to {
  opacity: 0;
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
