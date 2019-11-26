import axios from '@/utlis/myaxios'

// 登录
export const login = (data) => {
  return axios({
    method: 'post',
    url: '/login',
    data
  })
}

// 注册
export const register = (data) => {
  return axios({
    method: 'post',
    url: '/register',
    data
  })
}
