<template>
  <xxb-layout class="demo-textarea">
  	<xxb-navbar class="top">
  		<div slot="left" @click="$router.go(-1)"><i class="iconfont icon-left"></i></div>
  		<div slot="center"><p>Textarea</p></div>
  	</xxb-navbar>
		<div style='padding-top:2.25rem;'>
			<xxb-textarea></xxb-textarea>
		</div>
	</xxb-layout>
</template>

<script>

export default {
  name: 'demo-textarea',

  data () {
    return {
     
    }
  }
}
</script>

<style scoped lang="less">
  
</style>