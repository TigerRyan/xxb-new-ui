<template>
  <xxb-layout class="demo-jsBridge">
  	<xxb-navbar class="top" slot="navbar">
  		<div slot="left" @click="$router.go(-1)"><i class="iconfont icon-left"></i></div>
  		<div slot="center"><p>JsBridge</p></div>
  	</xxb-navbar>

    <div class="jsBridge-content">
      <p>浏览器内核：{{browser}}</p>
      <xxb-btn type="primary" @click.native="getBrowser">获取浏览器内核</xxb-btn>
    </div>
  	
	</xxb-layout>
</template>

<script>
// import XXB from '../../dist/xxb-js-api'

export default {
  name: 'demo-jsBridge',

  data () {
    return {
      browser: ''
    }
  },

  created(){
    
  },

  methods:{
    getBrowser(){
      let xxb = new XXB({appid: '123456', secret: 'aaaa'});
      this.browser = xxb.getBrowser()
    }
  }
}
</script>

<style scoped lang="less">
.demo-jsBridge{
  padding-top: 2.25rem;
  .jsBridge-content{
    text-align: center;
    p{
      margin: 1rem 0;
    }
  }
}
</style>