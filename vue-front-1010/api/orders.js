import request from '@/utils/request'

export default {
    //生成订单
  createOrders(courseId) {
    return request({
      url: '/order/tOrder/createOrder/'+courseId,
      method: 'post'
    })
  },
  //根据订单号id查询订单信息
  getOrdersInfo(id) {
    return request({
      url: '/order/tOrder/OrderByNo/'+id,
      method: 'get'
    })
  },
  //生成二维码的方法
  createNatvie(orderNo) {
    return request({
      url: '/order/tPayLog/createQrCode/'+orderNo,
      method: 'get'
    })
  },

  //查询订单状态的方法
  queryPayStatus(orderNo) {
    return request({
      url: '/order/tPayLog/queryPayStatus/'+orderNo,
      method: 'get'
    })
  }
}