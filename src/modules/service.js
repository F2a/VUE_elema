// 接口配置
import request from '../common/request'

export function getNewsList() {
  return request.get(`appapi.php?a=getPortalList&catid=20&page=1`);
}
export function postNewsList(params) {
  return request.post(`appapi.php`, { params });
}
