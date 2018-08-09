<template>
  <xxb-layout class="demo-scroll-item">
    <xxb-navbar class="top" slot="navbar">
      <div slot="left" @click="$router.go(-1)"><i class="iconfont icon-left"></i></div>
      <div slot="center"><p>ScrollItem</p></div>
    </xxb-navbar>
      
    <div>
      <xxb-scroll-item 
        v-for="(ele,i) in list" 
        :key="i" 
        :currentItem="ele" 
        :isMoveStatus.sync="ele.isMoveStatus"
        :delHandle="delHandle"
        :editHandle="editHandle"
        @getCurrentItem="getCurrentItem"
      >
        <xxb-cell-item slot="content">
          <i class="iconfont icon-wodehongbao" slot="icon"></i>
          <span slot="left">封面图片</span>
          <span slot="right">
            已上传<i class="iconfont icon-right"></i>
          </span>
        </xxb-cell-item>
      </xxb-scroll-item>
    </div>

  </xxb-layout>
</template>

<script>

export default {
  name: 'demo-scroll-item',

  data () {
    return {
      list: []
    }
  },

  created(){
    // 模拟接口请求， 手动添加 status 字段
    setTimeout(()=>{
      let arr = [
        {id: 1},{id: 2},{id: 3},{id: 4},{id: 5},
      ]
      if(arr && arr.length){
        arr.forEach((ele,i)=>{
          let obj = ele
          obj.isMoveStatus = false
          this.list.push(obj)
        })
      }
    },0)
  },

  methods: {
    getCurrentItem(val){
      this.list.forEach((item,index)=>{
        if(item == val){
          item.isMoveStatus = true
        }else{
          item.isMoveStatus = false
        }
      })
    },

    delHandle(item){
      this.$dialog.alert({mes: `删除的id是${item.id}`});
    },

    editHandle(item){
      this.$dialog.alert({mes: `编辑的id是${item.id}`});
    },
  }
}
</script>

<style scoped lang="less">
.demo-scroll-item{
  padding-top: 2.25rem;
}
</style>