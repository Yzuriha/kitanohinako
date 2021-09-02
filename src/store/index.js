import { createStore } from 'vuex'
import {GoogleSpreadsheet} from "google-spreadsheet";

export default createStore({
  state: {
    blogData: [{
      date: "asd",
      description: "asd",
      thumbnail: "asd",
      link: "asd",
      title: "fdf"
    }],
    test: "NO"
  },
  mutations: {
    SET_BLOG_DATA(state, data) {
      state.blogData = data
    }
  },
  actions: {

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
          thumbnail: el.Thumbnail,
          link: el.Link,
          title: el.Title
        })
      })

      commit("SET_BLOG_DATA", formattedData)

    }

  },
  modules: {
  }
})
