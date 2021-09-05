<template>
  <main-nav></main-nav>
  <router-view/>
</template>

<script>
import MainNav from "@/components/navigation/main-nav";
import {mapActions} from "vuex";
export default {
  components: {MainNav},
  created() {
    this.accessSpreadSheet()

  },
  methods: {
    ...mapActions(['accessSpreadSheet']),
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

#app {
  font-family: 'Noto Sans JP', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //text-align: center;
  color: @font-color;
}

.router-link {
  text-decoration: none;
  color: @font-color;
}

.nanagogo, .blog, .gallery, .media, .profile, .schedule, .works {
  //margin-top: 90px;
  margin: 90px 15px 0 15px;
}

.nav-home {
  font-family: 'Morison', sans-serif;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  &.navigation--bottom {
    position: absolute;
    top: calc(90vh - 40px);
  }
  .router-link {
    padding: 13px 15px;
  }
}

.nav {
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


.container {
  max-width: 940px;
  margin: 0 15px;
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

.profile-card {
  display: grid;
  grid-gap: 10px;
  .profile-card_name {
    text-align: center;
  }
  .profile-card_image {
    //.base-image {
    //  width: 100%;
    //}
  }
}

.blog-card {
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-gap: 10px;
  margin: 10px 0;
  .blog-card_image {
    height: 100px;
    width: 100px;
    .base-image {
      height: 100%;
    }
  }
  .blog-card_content {
    height: 100px;
    //display: flex;
    //flex-direction: column;
  }
  .blog-card_date {
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
  }
  .blog-card_text {
    -webkit-line-clamp: 2;
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




.base-image {
  width: 100%;
  &.base-image--long {

  }
  &.base-image--square {
    aspect-ratio: 1;
    object-fit: cover;
  }
}


//.instagram-image {
//  width: 100%;
//
//  aspect-ratio: 1;
//  object-fit: cover;
//
//}

//.gogo-card--kii {
//  max-width: 350px;
//  background-color: rgba(135, 206, 250, 0.2);
//  border-radius: 0 10px 10px 10px;
//  padding: 15px;
//  margin:15px;
//}
//.gogo-card--other {
//  max-width: 350px;
//  background-color:lemonchiffon;
//  border-radius: 10px 0 10px 10px;
//  padding: 15px;
//  margin:15px;
//}
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

.more-button {
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  margin-top: 10px;
  .more-button_link {
    color: @font-color;
    font-family: 'Spartan',sans-serif;
    text-decoration: none;
    border-bottom: 1px solid;
    //padding: 5px;
    //text-decoration: none;
  }
}

.video-container {
  position: relative;
  width: 100%;
  //height: 0;
  //padding-bottom: 56.25%;
}
.video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.play-button {
  color: white;
  position: absolute;
  left: 5px;
  top: 5px;
  z-index: 1;
}
.instagram-video-container {
  position: absolute;
}
.instagram-video-container,
.instagram-video,
.instagram-image {
  width: 100%;
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

// HELPER CLASSES \\
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
