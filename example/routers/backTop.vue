<template>
  <xxb-layout class="demo-backTop">
  	<xxb-navbar class="top" slot="navbar">
  		<div slot="left" @click="$router.go(-1)"><i class="iconfont icon-left"></i></div>
  		<div slot="center"><p>backTop</p></div>
  	</xxb-navbar>

		<ul>
      <li v-for="n in 30">
        <xxb-cell-item>
          <span slot="left">{{n<10?'0'+n:n}}、快让我回顶部！</span>
        </xxb-cell-item>
      </li>
    </ul>
		
		<xxb-backTop></xxb-backTop>
	</xxb-layout>
</template>
<script>
export default {
  name: 'demo-backTop',
  data () {
    return {
      
    } 
	},
	 methods: {
	
	 }
}
</script>

<style scoped lang="less">
.demo-backTop{
	padding-top: 2.25rem;
}
</style>