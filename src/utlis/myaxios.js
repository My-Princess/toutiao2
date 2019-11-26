// axios的封装
import axios from 'axios'

// 配置axios的基准路径，这个路径会被自动接到路有前
axios.defaults.baseURL = 'http://127.0.0.1:3000'

export default axios
