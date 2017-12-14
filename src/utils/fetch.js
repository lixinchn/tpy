import axios from 'axios'
import {Message} from 'element-ui'

// 创建axios实例
// axios.defaults.withCredentials = true;
const service = axios.create({
  // baseURL: process.env.BASE_API, // api的base_url
  baseURL: 'http://typany.com/api/',
  timeout: 15000,                  // 请求超时时间
  // withCredentials: true,
})

// request拦截器
service.interceptors.request.use(config => {
  if (config.method.toLowerCase() === 'post') {
    // config.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
    // config.headers['Content-Type'] = 'multipart/form-data'
    // config.headers['Access-Control-Allow-Origin'] = 'http://10.129.20.82:8080'
  }
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  // response => response,
  response => {
    return response
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000,
    })
    return Promise.reject(error)
  }
)

export default service
