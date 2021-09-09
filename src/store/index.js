import { createStore } from 'vuex'
import {GoogleSpreadsheet} from "google-spreadsheet";

export default createStore({
  state: {
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
    activeBlogs: []
  },
  mutations: {
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
    }
  },
  actions: {

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
      const doc = new GoogleSpreadsheet('1N8wXrd30_sfsKvRoVcoZcpqXDWtsdbyyaF2a-DyjmgM');
      await doc.useServiceAccountAuth(JSON.parse(process.env.VUE_APP_GHEET_KEY));
      await doc.loadInfo();
      const sheet = doc.sheetsByIndex[2];
      const  rows = await sheet.getRows()

      let formattedData = []
      rows.forEach(el => {
        formattedData.push({
          date: el.Date,
          description: el.Description.replaceAll(" ", ''),
          descriptionRaw: el.DescriptionRaw,
          thumbnail: el.Thumbnail,
          link: el.Link,
          title: el.Title
        })
      })
      // console.log(rows)
      commit("SET_BLOG_DATA", formattedData)

    }

  },
  modules: {
  }
})
