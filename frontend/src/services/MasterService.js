import axios from "axios";
import { BASE_URL } from '../config/constant';

class MasterService {
    async get(url, params) {
        try {
            const response = await axios.get(BASE_URL + url)
            return response
        } catch (error) {
            return error
        }
    }

    async post(url, data) {
        try {
            const response = await axios.post(BASE_URL + url, data)
            return response
        } catch (error) {
            return error
        }
    }
}

export default new MasterService()