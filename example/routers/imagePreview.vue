<template>
  <xxb-layout class="demo-image-preview">
    <xxb-navbar class="top" slot="navbar">
      <div slot="left" @click="$router.go(-1)"><i class="iconfont icon-left"></i></div>
      <div slot="center">ImagePreview</div>
    </xxb-navbar>
    <p class="demo-p" @click="image" >fsdf</p>
    <xxb-image-preview :imgList='imgList' :currentIndex='currentIndex' :imagePreview.sync='imagePreview'>

    </xxb-image-preview>
  </xxb-layout>
</template>
<script>
export default {
  name:'demo-image-preview',
  data(){
    return{
         imgList:['http://oz8dzc9la.bkt.clouddn.com/1.jpg','http://oz8dzc9la.bkt.clouddn.com/1_01.png','http://oz8dzc9la.bkt.clouddn.com/3.jpg'],
         currentIndex: 2,
         imagePreview: false
    }
  },
  methods:{
      image(){
          this.imagePreview=true
      }
  }
}
</script>

<style scoped lang="less">
    .demo-image-preview{
        .demo-p{
          margin-top: 2.25rem;
          font-size: 0.9rem;
        }
    }

</style>
