import axios from "axios";
import { createSearchQuery } from "../utils";

export const saApi = axios.create({
    baseURL: `https://sourcearena.ir/api`,
})


saApi.interceptors.request.use(config => {
    config.params = {
        token: process.env.NEXT_PUBLIC_SOURCEARENA_TOKEN,
        ...config.params,
    };
    return config;
});

export const saRequest = <T extends { [key: string]: any },>() => async (params: T) => {

    try {
        const { data } = await saApi.get(`${createSearchQuery(params)}`)

        return data

    } catch (error: any) {
        return Promise.reject(error)
    }

}