import axios from 'axios'

const baseURL = 'http://192.168.81.101:8080/api'


export const api = {
    call : () => {
        return axios.create({
            baseURL
        })
    }
}
