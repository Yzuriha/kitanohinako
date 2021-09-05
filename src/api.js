import axios from 'axios'

const AXIOS = axios.create({
    timeout: 10000,
});

export default {
    getInstagramData() {
        return AXIOS.get('https://yzuriha.github.io/kitanohinako/assets/instagram.json');
    },
    get7gogoData() {
        return AXIOS.get("https://yzuriha.github.io/kitanohinako/assets/7gogo.json")
    }

}
