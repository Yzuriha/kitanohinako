import axios from 'axios'

const { GoogleSpreadsheet } = require('google-spreadsheet');
// const creds = require('@/client_secret.json');


const AXIOS = axios.create({
    timeout: 10000,
});

export default {
    getInstagramJSON() {
        return AXIOS.get('https://yzuriha.github.io/kitanohinako/instagram.json');
    },
    getFilesInRepo() {
        return AXIOS.get("https://api.github.com/repos/yzuriha/kitanohinako/contents/public",
            {headers: {
                Authorization: `token ${process.env.VUE_APP_GITHUB_TOKEN}`,
                "Content-Type": "application/json"
            }}
        )
    },
    get7gogoData() {
        return AXIOS.get("https://yzuriha.github.io/kitanohinako/instagram.json")
    }

}
