import axios, { AxiosRequestConfig } from 'axios'

const API_ENDPOINT = 'http://localhost:3000'
export const makeRequest= (config:AxiosRequestConfig) =>{
    config.url = `${API_ENDPOINT}${config.url}`

    return axios(config)
}