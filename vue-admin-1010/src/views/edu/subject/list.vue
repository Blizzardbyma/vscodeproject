<template>
  <div class="app-container">
    <el-input v-model="filterText" placeholder="Filter keyword" style="margin-bottom:30px;" />

    <el-tree
      ref="tree2"   
      :data="data2"
      :props="defaultProps"
      :filter-node-method="filterNode"
      class="filter-tree"
      default-expand-all
    />
  </div>
</template>
 <!--上面是element-ui-->
<script>
import subjectjs from '@/api/subject/subject.js' 

export default {

  data() {
    return {
      filterText: '',
      data2: [ ], //返回所有分类的数据
      defaultProps: {
        children: 'twoSubjects',//这里是一级分类，类中的二级分类的属性名
        label: 'title'  //这里是一级分类
      }
    }
  },
  watch: {
    filterText(val) {
      this.$refs.tree2.filter(val)
    }
  },
  created(){this.getListAll()},

  methods: {
    getListAll(){
        subjectjs.getList().then(response=>{
            this.data2=response.data.list
        })
    },
    filterNode(value, data) {
      if (!value) return true
      return data.title.toLowerCase().indexOf(value.toLowerCase()) !== -1
    }
  }
}
</script>

