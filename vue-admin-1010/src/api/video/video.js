import request from '@/utils/request'
export default {

    //添加小节
    addVideo(video) {
        return request({
            url: '/eduservice/video/add',
            method: 'post',
            data: video
          })
    },
    // 修改小节
    updateVideo(video) {
        return request({
            url: '/eduservice/video/updateVideo',
            method: 'post',
            data: video
            })
    },
    
    //删除小节
    deleteVideo(id) {
        return request({
            url: '/eduservice/video/'+id,
            method: 'delete'
          })
    },
    // 根据id查询小节 做编辑的数据回显
  getVideo(VideoId) {
    return request({
        url: '/eduservice/video/'+VideoId,
        method: 'get'
      })
},
     //删除视频
     deleteAliyunvod(id) {
        return request({
            url: '/eduvod/video/removeAlyVideo/'+id,
            method: 'delete'
          })
    }
}