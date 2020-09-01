import axios from 'axios'

export function request(config) {
  //1.创建axios实例
  const instance = axios.create({
    baseURL:'最新接口添加老师VX',
    timeout: 5000
  })

  //2.axios拦截器
  //2.1请求拦截
  instance.interceptors.request.use(config => {
    return config
  }, err => {})

  //2.2响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })

  //3.发送真正的网络请求
  return instance(config)  //返回一个promise 对象
}