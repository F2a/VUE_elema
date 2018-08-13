/**
 * Created by Administrator on 2018/8/6.
 */
import axios from 'axios'
let axiosIns  = axios.create({
  baseURL: 'http://www.phonegap100.com/',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});
function err(info) {
  if (info === 'TypeError: Failed to fetch') {
    const result = { errmsg: '网络未连接，请检查网络设置' };
    console.log('网络未连接，请检查网络设置');
    return result;
  }
}
function parseJSON(response) {
  console.log(response);
  try {
    if (response.statusText === 'OK') {

    }
  } catch (error) {

  }
  return response;
}
export default function request(url, option){
  axiosIns({
    url,
    ...option
  })
  .then(parseJSON)
  .catch(err);
}

