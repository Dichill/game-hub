import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'df74bdbd99964e94b51083927d4144d1'
    }
})