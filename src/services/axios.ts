import axios from "axios";
import config from '../config.json';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: config.rawg.apiKey
    }
})
