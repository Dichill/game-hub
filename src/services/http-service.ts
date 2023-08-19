import { AxiosRequestConfig, CanceledError } from "axios";
import apiClient from "./api-client";


class HttpService {
    endpoint: string;
    requestConfig?: AxiosRequestConfig;

    constructor(endpoint: string, requestConfig?: AxiosRequestConfig) {
        this.endpoint = endpoint
        this.requestConfig = requestConfig
    }

    get<T>() {
        const controller = new AbortController();

        const requests = apiClient.get<T>(this.endpoint, {signal: controller.signal, ...this.requestConfig})
        return {requests, cancel: () => controller.abort(), CanceledError}
    }    
}

const create = (endpoint: string, requestConfig?: AxiosRequestConfig) => new HttpService(endpoint, requestConfig);

export default create;