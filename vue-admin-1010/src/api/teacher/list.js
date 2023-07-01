import request from '@/utils/request'

export default {

  getList(current,limit,teacherQuery) {
    return request({
      url: `/eduservice/teacher/pageTeacherCondition/${current}/${limit}`,
      method: 'post',
      data: teacherQuery
    })
  },
  removeDataById(id) {
    return request({
      url: `/eduservice/teacher/delete/${id}`,
      method: 'delete',
    })
  },
  //添加讲师
  saveData(teacher) {
    return request({
      url: '/eduservice/teacher/addTeacher',
      method: 'post',
      data: teacher
    })
  },
  //根据id获取讲师
  getTeacher(id) {
    return request({
      url: `/eduservice/teacher/selectById/${id}`,
      method: 'get',
    })
  },
   //修改讲师
   updateById(id,teacher) {
    return request({
      url: `/eduservice/teacher/updateById/${id}`,
      method: 'put',
      data: teacher
    })
  },
  
}
