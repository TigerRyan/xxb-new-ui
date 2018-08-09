
<template>
  <xxb-layout class="demo-button">
    <xxb-navbar class="top" slot="navbar">
      <div slot="left" @click="$router.go(-1)"><i class="iconfont icon-left"></i></div>
      <div slot="center"><p>Button</p></div>
    </xxb-navbar>
    <div>
      <div class="title">small</div>
      <xxb-btn type="primary">primary</xxb-btn>
      <xxb-btn type="danger">danger</xxb-btn>
      <xxb-btn type="warning">warning</xxb-btn>
      <xxb-btn type="disabled">disabled</xxb-btn>
      <xxb-btn type="hollow">hollow</xxb-btn>

      <div class="title">large</div>
      <xxb-btn size="large" type="primary">primary</xxb-btn>
      <xxb-btn size="large" type="danger">danger</xxb-btn>
      <xxb-btn size="large" type="warning">warning</xxb-btn>
      <xxb-btn size="large" type="disabled" disabled>disabled</xxb-btn>
      <xxb-btn size="large" type="hollow">hollow</xxb-btn>
      <xxb-btn size="large" bgcolor="#04be02" color="#FFF">自定义颜色、背景</xxb-btn>
    </div>
	</xxb-layout>
</template>

<script>

export default {
  name: 'demo-button',

  data () {
    return {

    }
  }
}
</script>

<style scoped lang="less">
.demo-button{
  padding: 2.25rem .65rem 0 .65rem;
}
.title {
  padding: 0.875rem 0.6rem 0.25rem;
  font-size: 0.75rem;
  text-align: left;
  color: #888;
  background-color: #F5F5F5;
}
.xxb-btn-block:nth-of-type(6) {
  margin: 0
}
</style>
