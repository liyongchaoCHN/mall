import instance from './request.js'

//获取用户信息
export const userinfo = () => instance.get('/products/recommend')
