import axios from 'axios'

const AXIOS = axios.create({
    timeout: 10000,
});

export default {
    getInstagramData() {
        return AXIOS.get("https://kitanohinako.xyz/assets/instagram.json");
    },
    get7gogoData() {
        return AXIOS.get("https://kitanohinako.xyz/assets/7gogo.json")
    },
    getImageFiles() {
        return AXIOS.get("https://kitanohinako.xyz/assets/imageFiles.json")
    },
    getSchedule() {
        return AXIOS.get("https://kitanohinako.xyz/assets/schedule.json")
    }
}
