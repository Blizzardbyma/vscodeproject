import request from '@/utils/request'

export default {
    //根据手机号发验证码
  sendCode(mail) {
    return request({
      url: `/edumsm/msm/sent/${mail}`,
      method: 'get'
    })
  },

  //注册的方法
  registerMember(formItem) {
    return request({
      url: `/ucenter/member/register`,
      method: 'post',
      data: formItem
    })
  }

}