import axios from 'axios'


const axiosIns  = axios.create({
  baseURL: 'http://www.phonegap100.com/',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});
// 添加请求拦截器
axiosIns.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  return config;
}, error => {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axiosIns.interceptors.response.use(response => {
  // 对响应数据做点什么
  const statusFlag = statusError(response.data.status);

  return response;
}, error => {
  // 对响应错误做点什么
  err(error);
  return Promise.reject(error);
});
function statusError(status) { //响应后台的状态错误
  let errorStatus = false
  switch (status) {
    case 404:
      errorStatus = 'tokenInvalid';
      break
  }
}
function err(info) {
  if (info === 'TypeError: Failed to fetch') {
    const result = { errmsg: '网络未连接，请检查网络设置' };
    console.log('网络未连接，请检查网络设置');
    return result;
  }
}


export default axiosIns
