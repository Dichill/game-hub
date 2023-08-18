import { CanceledError } from "axios";
import apiClient from "./api-client";


class HttpService {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint
    }

    get<T>() {
        const controller = new AbortController();

        const requests = apiClient.get<T>(this.endpoint, {signal: controller.signal})
        return {requests, cancel: () => controller.abort(), CanceledError}
    }    
}

const create = (endpoint: string) => new HttpService(endpoint);

export default create;