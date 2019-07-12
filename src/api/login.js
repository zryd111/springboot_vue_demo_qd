import HttpRequest from '@/utils/request'

export const UserQryByNameAndEmailAction = (parameter) => {
  return HttpRequest.request({
    url: 'userLogin/',
    method: 'post',
    params: parameter
  })
}

