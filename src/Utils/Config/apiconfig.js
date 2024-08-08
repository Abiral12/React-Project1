import axios from "axios";
import { environmentConfig } from "./environmentConfig";
import { getItem } from "./storageConfig";

export const axiosInstance = axios.create({
  baseURL: environmentConfig.baseurl
})

axiosInstance.defaults.headers.post['Content-Type'] = 'application/json'

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = environmentConfig.apitoken
    
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)