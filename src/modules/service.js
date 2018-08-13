// 接口配置
import request from '../common/request'

export async function getNewsList() {
  return request(`appapi.php?a=getPortalList&catid=20&page=1`, {
    method: 'get',
  });
}
export async function postNewsList() {
  return request(`appapi.php`, {
    method: 'post',
    data: {
      firstName: 'firstName',
      lastName: 'lastName'
    }
  });
}
