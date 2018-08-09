<template>
  <xxb-layout class="demo-popup">
  	<xxb-navbar class="top" slot="navbar">
  		<div slot="left" @click="$router.go(-1)"><i class="iconfont icon-left"></i></div>
  		<div slot="center"><p>Popup</p></div>
  	</xxb-navbar>
    
    <div>
      <xxb-btn size="large" type="primary" @click.native="show1 = true">中间弹出</xxb-btn>
      <xxb-btn size="large" type="danger" @click.native="show2 = true">下部弹出</xxb-btn>
      <xxb-btn size="large" type="warning" @click.native="show3 = true">左侧弹出</xxb-btn>
      <xxb-btn size="large" type="hollow" @click.native="show4 = true">右侧弹出</xxb-btn>
      <xxb-btn size="large" type="primary" @click.native="show5 = true">上侧弹出</xxb-btn>
    </div>
    
    <xxb-popup v-model="show1" position="center" width="90%">
      <p>爱学习，就上学训宝~</p>
      <p style="text-align: right;">
        <xxb-btn @click.native="show1 = false">Close Center Popup</xxb-btn>
      </p>
    </xxb-popup>

    <xxb-popup v-model="show5" position="top" height="30%">
      <xxb-btn type="warning" style="margin: 30px;" @click.native="show5 = false">Close top Popup</xxb-btn>
    </xxb-popup>

    <xxb-popup v-model="show2" position="bottom" height="60%">
      <xxb-btn type="warning" style="margin: 30px;" @click.native="show2 = false">Close Bottom Popup</xxb-btn>
    </xxb-popup>

    <xxb-popup v-model="show3" position="left" width="60%">
      <xxb-btn type="danger" style="margin: 30px;" @click.native="show3 = false">Close Left Popup</xxb-btn>
    </xxb-popup>

    <xxb-popup v-model="show4" position="right">
      <xxb-btn type="danger" style="margin: 30px;" @click.native="show4 = false">Close Right Popup</xxb-btn>
    </xxb-popup>
  	
	</xxb-layout>
</template>

<script>

export default {
  name: 'demo-popup',

  data () {
    return {
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false
    }
  }
}
</script>

<style scoped lang="less">
.demo-popup{
  padding: 2.25rem .65rem 0 .65rem;
}
</style>