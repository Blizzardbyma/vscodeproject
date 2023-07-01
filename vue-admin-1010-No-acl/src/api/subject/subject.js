import request from '@/utils/request'

export default {

  getList() {
    return request({
      url: '/eduservice/subject/getAllSubject',
      method: 'get',
    })
  }
  
}