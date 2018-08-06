/**
 * Created by Administrator on 2018/8/3.
 */
var storage = {
  setStorage(key, value){
    localStorage.setItem(key, JSON.stringify(value));
  },
  getStorage(key){
    return JSON.parse(localStorage.getItem(key));;
  },
}
export default storage;
