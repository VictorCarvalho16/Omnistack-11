import axios from 'axios'

const api  = axios.create({
    baseURL: 'http://192.168.200.150:3333'
})

export default api