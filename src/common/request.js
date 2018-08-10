/**
 * Created by Administrator on 2018/8/6.
 */
import axios from 'axios'

var api = 'http://www.phonegap100.com/';
function parseJSON(response) {
  console.log(response);
  try {
    if (response.statusText === 'OK') {

    }
  } catch (error) {
    //
  }
  // util.hideToast();
  // util.spinning = false;
  return response.json();
}
export default function request(url){
  axios.get(api + url)
    .then(parseJSON)
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
}

