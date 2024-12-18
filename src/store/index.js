import { createStore } from 'vuex'
import {GoogleSpreadsheet} from "google-spreadsheet";
import api from "@/api";

export default createStore({
  state: {
    loadingScreenFinished: false,
    blogData: [{
      date: "",
      description: "",
      thumbnail: "img/placeholder.svg",
      link: "",
      title: ""
    }],
    test: "NO",
    activeSite: "",
    activeInstagramPost: "",
    scheduleData: [],
    activeBlogs: [],
    gogoData: [],
    activeGalleryImage: '',
    imageFilesLocation: [],
  },
  mutations: {
    SET_LOADING_SCREEN_FINISHED(state) {
      state.loadingScreenFinished = true
    },
    SET_BLOG_DATA(state, data) {
      state.blogData = data.reverse()
    },
    SET_ACTIVE_SITE(state, site) {
      state.activeSite = site
    },
    SET_ACTIVE_INSTAGRAM_POST(state, post) {
      state.activeInstagramPost = post
    },
    SET_ACTIVE_BLOGS(state, blog) {
      state.activeBlogs.push(blog)
    },
    REMOVE_ACTIVE_BLOGS(state, blog) {
      let blogIndex = state.activeBlogs.findIndex(el => el === blog)
      state.activeBlogs.splice(blogIndex, 1)
    },
    SET_GOGO_DATA(state, data) {
      state.gogoData = data
    },
    SET_ACTIVE_GALLERY_IMAGE(state, image) {
      state.activeGalleryImage = image
    },
    SET_IMAGE_FILES_LOCATION(state, location) {
      state.imageFilesLocation = shuffle(location)
    },
    SET_SCHEDULE_DATA(state, data) {
      state.scheduleData = data
    }
  },
  actions: {
    setLoadingScreenFinished({commit}) {
      commit("SET_LOADING_SCREEN_FINISHED")
    },
    setActiveSite({commit}, site) {
      commit("SET_ACTIVE_SITE", site)
    },
    setActiveInstagramPost({commit}, post) {
      commit("SET_ACTIVE_INSTAGRAM_POST", post)
    },
    setActiveBlog({commit}, blog) {
      commit("SET_ACTIVE_BLOGS", blog)
    },
    removeActiveBlog({commit}, blog) {
      commit("REMOVE_ACTIVE_BLOGS", blog)
    },
    async accessSpreadSheet({commit}) {

      if(!navigator.onLine) {
        console.log("Load BlogData from Storage")
        let data = JSON.parse(localStorage.getItem('storageBlogData'))
        commit("SET_BLOG_DATA", data)
      }

      const publicKey = { "type": "service_account", "project_id": "buoyant-operand-275521", "private_key_id": "294e2e71e4344988795a26715208d2dc93069ae2", "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQClQvnnNrJY1M5c\nbtIygpTffEWHguAEBLLXbv42/42AM+bBHcixysPGfC06bkg1geOkxI+TaF0KR1/T\nL8xokmhu0RoTS7fT8q/s7uNJlNPsHv7B2wmkHbht1TU5je6DKu90IYRJMwLN6EWR\nChaG9fHAjUTdnQNv/J+jzgZ2vwWf0R3nyaZKt3BeCCEAthmw6Fu/p0ggJ/r3TSe6\n7HpXexQiWIYduTG4edjcet8ML9PA+i1FtZst6hlSdsU3VNrMx5sXOJBh6VkYeIY3\nYkIsfbimzvfEeF5kQEWULP2BQGMZtNmlkKqZ9y9DNJG/7AMwsSrGHPxXn++TAy/F\n7Iv7R+CFAgMBAAECggEAAXZOvLd0q37dK98vzTzvhpdUYXxhxqyoommme85rWOjc\npUpsq09bx7vzMH2noOWQdzWP/vdg6gWIo6yGwUluUsYB1jgzclTG2VtMYoBxFuPi\npXduez0SE9Kw67HwRskl9jU9CjgWfG4401gvVoFYOA0SlhKyDuxsGH3AUTj5Gplc\n5gLqgICDqnWrzJDpHwIgbu9BXn1LwsBohsK4vUQj9KEczq5KRz7V9LxbO2IZa1Np\nqbJQh7ZcmkZ+y7OJWib+2TEnUPiDWK6JidfxcldByFqvXk8+2XguwuN/AKkFeb76\n3WQI1q8oMMvUcjLfAbjVHxN+XiE1RxmFYENhkb9ffwKBgQDaypKWqC9ZBcsLaBkq\nsjnGpjYlP8QacYKrbQzNCIkk9+MWBHYAfvBRlhqjSUzSt4/2IqkhFoBfygtvmZtc\n0cnIbsD/6IHj3cl0Iq8yirpTIBX+iKSRZEccLZhMWNjX9KTLDoZ2lowi/IbHR+3X\nxP1kZCVmEorBoBFSRdlmSCdwNwKBgQDBXedv2IkMGQcuEZET0qSG8bJYVn5ndJI3\ny9Bx7mHCFjFmeg5zSazoOj5mHRoh43Iq36fJeiMqWcwRBbMj50O6St3qoj7F3YD7\nsLTYnNEaM0rLBm2rRuT4qAfmSlD3fXUKFbkV5PTHkab83IQmTWIErOYZRObvj4wu\nr38rYeo/IwKBgAknbJatFr4MxgAGLPdiWZR8I8vPLS9GDIeLmnuBnetUC8ZCDYXb\nycZAF4E5ceNnFrjfnl/qBxj65RuYO63YgS7Ho3+RhM2529HmGZptv3n237S0lt4W\nafs91R9soDX44GQ2iV2w0tAr7J+t3L+oWEm4/u+UWwXa4p6kmYH0BuJlAoGAE9PN\nJ2rMorDuS4sBlUbEGBIwd15nF7ScSZxcg1IuM/iSmC9ry+aCFE3kmBPj2hW4Xy0P\nx1j+whjzE8vB0qykBTYoCycXyLItx6EW6h8qUcVwpeDC3g0m7VhNdw+nvbjfh2ky\n0UvozY3h0YvLASJuKoyQC4dFJstRVHgqUgh4PIECgYEA0Brdf2fN8+nuKRlxdlfO\nYWkwUvy7SXpCp8/ui5bv2LXSBfNJ2FaVCIvXvAaTUj5/P7fNTzA0sCfF+YrE1ZCJ\nkOZcAyfuZSpdYqnD0JpOCa5f/PLdgHSVOOqJNQuLsuhW+f9A/BQW9jp6gSI8bfrc\neDOMf2HqXvmIeCkjNRJN7kY=\n-----END PRIVATE KEY-----\n", "client_email": "sheets@buoyant-operand-275521.iam.gserviceaccount.com", "client_id": "113196399805428590932", "auth_uri": "https://accounts.google.com/o/oauth2/auth", "token_uri": "https://oauth2.googleapis.com/token", "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs", "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/sheets%40buoyant-operand-275521.iam.gserviceaccount.com" }
      const doc = new GoogleSpreadsheet('1N8wXrd30_sfsKvRoVcoZcpqXDWtsdbyyaF2a-DyjmgM');
      await doc.useServiceAccountAuth(publicKey);
      await doc.loadInfo();
      const sheet = doc.sheetsByTitle['Blog'];
      const rows = await sheet.getRows()

      let formattedData = []
      rows.forEach(el => {
        formattedData.push({
          date:   new Date(el.Date).toLocaleDateString('de-DE', { year: '2-digit', month: '2-digit', day: '2-digit' }),
          description: el.Description.replaceAll(" ", ''),
          descriptionRaw: el.DescriptionRaw,
          thumbnail: el.Thumbnail,
          link: el.Link,
          title: el.Title
        })
      })

      commit("SET_BLOG_DATA", formattedData)
      localStorage.setItem('storageBlogData', JSON.stringify(formattedData.slice(0, 10).reverse()))

    },
    getGogoData({commit}) {

      if(!navigator.onLine) {
        let data = JSON.parse(localStorage.getItem('storageGogoData'))
        commit("SET_GOGO_DATA", data)
      }

      let gogoData = []
      api.get7gogoData().then(response => {
        response.data.forEach(el => {
          if(el.post.body.length === 2) {
            gogoData.push({
              message: el.post.body[1].text,
              class: 'gogo-card--kii',
              image: 'img/profile-pictures/7gogoKii.jpg'
            })
            gogoData.push({
              message: el.post.body[0].comment.comment.body,
              class: 'gogo-card--other',
              image: 'img/profile-pictures/7gogoOther.jpg'
            })
          } else {
            gogoData.push({
              message: el.post.body[0].text,
              class: 'gogo-card--kii',
              image: 'img/profile-pictures/7gogoKii.jpg'
            })
          }
        })
      })

      commit("SET_GOGO_DATA", gogoData)
      localStorage.setItem('storageGogoData', JSON.stringify(gogoData))
    },
    setActiveGalleryImage({commit}, image) {
      commit("SET_ACTIVE_GALLERY_IMAGE", image)
    },
    getImageFiles({commit}) {
      api.getImageFiles().then(response => {
        let longImage = response.data.long.map(el => { return {location: 'long/' + el, type: 'long'}})
        let wideImage = response.data.wide.map(el => { return {location: 'wide/' + el, type: 'wide'}})
        commit("SET_IMAGE_FILES_LOCATION", longImage.concat(wideImage))
        // console.log(wideImage)
      })
    },
    getSchedule({commit}) {

      if(!navigator.onLine) {
        let data = JSON.parse(localStorage.getItem('storageScheduleData'))
        commit("SET_SCHEDULE_DATA", data)
      }

      api.getSchedule().then(response => {
        let schedule = response.data.map(el => {
          let [day, month, year] = el['Date'].split('.')
          let jsDate = new Date(year, month - 1, day)
          let weekday = jsDate.toLocaleDateString("en-GB", { weekday: 'short' });
          let isoDate = new Date().toISOString(year, month, day)
          return {
            day: day,
            month: month,
            year: year,
            weekday: weekday,
            type: el['Type'],
            content: el['Description'],
            isoDate: isoDate
          }
        })
        let sorted = schedule.sort((a, b) => Date.parse(b.isoDate) - Date.parse(a.isoDate))
        commit("SET_SCHEDULE_DATA",sorted)
        localStorage.setItem('storageScheduleData', JSON.stringify(sorted))
      })
    }

  },
  getters: {
    getShuffledImageFilesLocation: state => shuffle(state.imageFilesLocation),
    getRecentSchedule: state => state.scheduleData.filter(el => {
      let elementDate = new Date(el.year, el.month - 1, el.day).setHours(0, 0, 0, 0)
      let today = new Date().setHours(0, 0, 0, 0);
      return elementDate > today - 1
    })
  },
  modules: {
  }
})

/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
  let j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}
