<template>
  <xxb-layout class="demo-switch">
  	<xxb-navbar class="top">
  		<div slot="left" @click="$router.go(-1)"><i class="iconfont icon-left"></i></div>
  		<div slot="center"><p>Switch</p></div>
  	</xxb-navbar>
		
		<xxb-cell-item>
      <i class="iconfont icon-youxi" slot="icon"></i>
      <span slot="left">页面只有一个switch时</span>
      <span slot="right">
      	<xxb-switch 
      		:value="switchValue"
      		@getInputValue="getInputValue" 
    		/>
      </span>
    </xxb-cell-item>

    <xxb-cell-item>
      <i class="iconfont icon-youxi" slot="icon"></i>
      <span slot="left">页面有多个switch时，需传emitEventName</span>
      <span slot="right">
      	<xxb-switch 
      		:value="switchValue2"
      		emitEventName="getInputValue1"
      		@getInputValue1="getInputValue1"   
    		/>
      </span>
    </xxb-cell-item>
	
	</xxb-layout>
</template>
<script>
export default {
  name: 'demo-switch',
  data () {
    return {
			switchValue: true,
			switchValue2: false,
    } 
	},
	
	methods: {
		getInputValue(val){
			this.$dialog.alert({mes: `开关1：${val ? '开启' : '关闭'}`});
		},

		getInputValue1(val){
			this.$dialog.alert({mes: `开关2：${val ? '开启' : '关闭'}`});
		}
	}
}
</script>

<style scoped lang="less">
.demo-switch{
	padding-top: 2.25rem;
}
</style>