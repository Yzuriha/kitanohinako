<template>
  <main-nav></main-nav>
  <router-view/>
</template>

<script>
import MainNav from "@/components/navigation/main-nav";
import {mapActions} from "vuex";
import api from '@/api'
export default {
  components: {MainNav},
  created() {
    this.accessSpreadSheet()
    // console.log(api.getFilesInRepo())
    console.log(api.get7gogoData())


  },
  methods: {
    ...mapActions(['accessSpreadSheet']),
  }
}
</script>


<style lang="less">

@font-color: #4d4948;
@tablet: ~'(min-width: 481px)';
@laptop: ~'(min-width: 769px)';
@desktop: ~'(min-width: 1025px)';

body {
  margin: 0;
}

h1, h2, h3, h4 {
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

.nav-home {
  font-family: 'Spartan', sans-serif;
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
  margin: 15px;
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
  }
  .blog-card_title {
    -webkit-line-clamp: 1;
    font-weight: bolder;
  }
  .blog-card_text {
    -webkit-line-clamp: 2;
  }
}

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

// HELPER CLASSES \\
.text-center {
  text-align: center;
}

.visibility-hidden {
  visibility: hidden;
}

</style>
