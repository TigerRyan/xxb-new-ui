<template>
  <xxb-layout class="demo-navbar">
  	<xxb-navbar class="top" slot="navbar">
  		<div slot="left" @click="$router.go(-1)"><i class="iconfont icon-left"></i></div>
  		<div slot="center"><p>Navbar</p></div>
  	</xxb-navbar>

  	<ul>
  		<li v-for="n in 30">
        <xxb-cell-item>
          <i class="iconfont icon-activity" slot="icon"></i>
          <span slot="left">看扶摇，赢大奖</span>
          <span slot="right"><i class="iconfont icon-right"></i></span>
      </xxb-cell-item>
      </li>
  	</ul>

    <xxb-tabbar slot="tabbar" class="tabbar">
      <xxb-btn size="large" type="primary">看够了，该敲代码啦！</xxb-btn>
    </xxb-tabbar>
	</xxb-layout>
</template>

<script>

export default {
  name: 'demo-navbar',

  data () {
    return {

    }
  }
}
</script>

<style scoped lang="less">
.demo-navbar{
  // padding-top: 2.25rem;
}
.tabbar{
  padding: .15rem .65rem;
}
</style>