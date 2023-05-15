import { AxiosRequestConfig } from 'axios'
import { makeRequest } from "./makeRequests"


const URL ='/posts'
export  const getPhotos= (config:AxiosRequestConfig)  => makeRequest({
    method: 'GET',
    url: URL,
    ...config
})