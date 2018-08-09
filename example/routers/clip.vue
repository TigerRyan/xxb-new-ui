<template>
  <xxb-layout class="demo-clip">
    <xxb-navbar class="top" slot="navbar">
      <div slot="left" @click="$router.go(-1)"><i class="iconfont icon-left"></i></div>
      <div slot="center">Clip</div>
    </xxb-navbar>

    <div class="demo-clip-content">
      <div class="title">原图</div>
      <xxb-clip
        src="http://cdn.duitang.com/uploads/item/201410/06/20141006233355_AC5hU.jpeg"
      ></xxb-clip>

      <div class="title">横向居中，纵向上/中/下</div>
      <xxb-clip
        src="http://cdn.duitang.com/uploads/item/201410/06/20141006233355_AC5hU.jpeg"
        positionX="center"
        positionY="top"
        width="32%"
        height="100px"
      ></xxb-clip>
      <xxb-clip
        src="http://cdn.duitang.com/uploads/item/201410/06/20141006233355_AC5hU.jpeg"
        positionX="center"
        positionY="center"
        width="32%"
        height="100px"
      ></xxb-clip>
      <xxb-clip
        src="http://cdn.duitang.com/uploads/item/201410/06/20141006233355_AC5hU.jpeg"
        positionX="center"
        positionY="bottom"
        width="32%"
        height="100px"
      ></xxb-clip>

      <div class="title">纵向居中，横向左/中/右</div>
      <xxb-clip
        src="http://cdn.duitang.com/uploads/item/201410/06/20141006233355_AC5hU.jpeg"
        positionX="left"
        positionY="center"
        width="32%"
        height="100px"
      ></xxb-clip>
      <xxb-clip
        src="http://cdn.duitang.com/uploads/item/201410/06/20141006233355_AC5hU.jpeg"
        positionX="center"
        positionY="center"
        width="32%"
        height="100px"
      ></xxb-clip>
      <xxb-clip
        src="http://cdn.duitang.com/uploads/item/201410/06/20141006233355_AC5hU.jpeg"
        positionX="right"
        positionY="center"
        width="32%"
        height="100px"
      ></xxb-clip>
      <div class="title">scale: cover</div>
      <xxb-clip
        src="http://cdn.duitang.com/uploads/item/201410/06/20141006233355_AC5hU.jpeg"
        scale="cover"
        width="200px"
        height="200px"
      ></xxb-clip>
      <div class="title">scale: contain</div>
      <xxb-clip
        class="xxb-clip-contain"
        src="http://cdn.duitang.com/uploads/item/201410/06/20141006233355_AC5hU.jpeg"
        scale="contain"
        width="200px"
        height="200px"
      ></xxb-clip>
    </div>
  </xxb-layout>
</template>

<style scoped lang="less">
.title {
    padding: 0.875rem 0.6rem 0.25rem;
    font-size: 0.75rem;
    text-align: left;
    color: #888;
    background-color: #F5F5F5;
}
.xxb-clip-contain {
    border: 1px dashed #ff9800;
}
.demo-clip {
  padding-top: 2.25rem;
}
.demo-clip-content{
  padding: 0 .65rem;
}
</style>