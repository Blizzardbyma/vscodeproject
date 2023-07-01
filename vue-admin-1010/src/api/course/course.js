import request from '@/utils/request'

export default {

  //1 添加课程信息
  addCourseInfo(courseInfo) {
    return request({
      url: '/eduservice/eduCourse/addCourse',
      method: 'post',
      data: courseInfo
    })
  },
  //2 查询所有讲师
  getListTeacher() {
    return request({
      url: '/eduservice/teacher/findAll',
      method: 'get'
    })
  },
  //根据课程id查询课程基本信息
  getCourseInfoId(id) {
    return request({
      url: '/eduservice/eduCourse/selectById/' + id,
      method: 'get'
    })
  },
  //修改课程信息
  updateCourseInfo(courseInfo) {
    return request({
      url: '/eduservice/eduCourse/updateCourseInfo',
      method: 'post',
      data: courseInfo
    })
  },
  //最终发布的课程信息 
  getPublihCourseInfo(id) {
    return request({
      url: '/eduservice/eduCourse/publishCourseInfo/' + id,
      method: 'get',
    })
  },
  //confirm最终发布的课程信息 
  publihCourse(id) {
    return request({
      url: '/eduservice/eduCourse/publishConfirm/' + id,
      method: 'post',
    })
  },
    //条件带分页查课程信息 
    getConditionPage(current,limit,courseQuery) {
      return request({
        url: `/eduservice/eduCourse/getConditionPage/${current}/${limit}` ,
        method: 'post',
        data: courseQuery
      })
    },
    //查课程信息 
    getListCourse() {
      return request({
        url: `/eduservice/eduCourse/getCourse` ,
        method: 'get',
      })
    },
    // 删除课程
    removeDataById(courseId) {
      return request({
        url: `/eduservice/eduCourse/deleteCourse/${courseId}`,
        method: 'delete',
      })
    },
    
}