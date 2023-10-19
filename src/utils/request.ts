import axios, { type AxiosError } from 'axios'
import { createUniAppAxiosAdapter } from '@uni-helper/axios-adapter'

axios.defaults.adapter = createUniAppAxiosAdapter()
const baseURL = import.meta.env.VITE_API_BASE_URL || ''

export const instance = axios.create({
  baseURL, // url = base url + request url
  timeout: 30 * 1000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Cache-Control': 'no-cache',
    // query工具本地调试只要不是这些ip-都不能访问
    // 'client-ip': '211.103.189.121',
  },
})

// 异常拦截处理器
const errorHandler = (error: AxiosError) => {
  if (error.response) {
    const data = error.response.data
    if (error.response.status === 403) {
      // 访问受限
    } else if (error.response.status === 401) {
      // 重新登录
    } else {
      // ElMessage.error(data.message)
    }
    return Promise.reject(data)
  }
  return Promise.reject(error)
}

// 配置所有request
instance.interceptors.request.use((config: any) => {
  return config
}, errorHandler)

// 配置所有response
instance.interceptors.response.use(async (response) => {
  return response
}, errorHandler)

export default instance
