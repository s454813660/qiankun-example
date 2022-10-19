import axios from 'axios'
import qs from 'qs'
let baseURL = 'https://api.apiopen.top/getJoke/'

let instance = axios.create({
  baseURL,
  timeout: 10000
});

instance.interceptors.request.use(config => {
  if(!config.params) config.params = { $temp$: new Date().getTime()}
  config.data = qs.stringify(config.data)
  return config;
});

instance.interceptors.response.use(res => {

  return res;
});


export function request(config) {
  return instance(config);
}


export function post(url, data) {
  return instance({
    url,
    method: 'post',
    data
  })
}

export function get(url, params) {
  return instance({
    url,
    method: 'get',
    params
  })
}
