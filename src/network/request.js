import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://kumanxuan1.f3322.net:8881/cms',
  timeout: 5000
})

instance.interceptors.request.use(config => {
  return config
})
instance.interceptors.response.use(res => {
  return res.data
})

export default instance
