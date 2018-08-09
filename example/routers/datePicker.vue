<template>
  <xxb-layout class="demo-cell">
  	<xxb-navbar class="top" slot="navbar">
  		<div slot="left" @click="$router.go(-1)"><i class="iconfont icon-left"></i></div>
  		<div slot="center">DatePicker</div>
  	</xxb-navbar>
    
    <div>
      <xxb-btn size="large" @click.native="pickerReady = true">Defaulft</xxb-btn>    
      <xxb-btn size="large" @click.native="pickerReady2 = true">有多个日期选择</xxb-btn>  
    </div>
      
    <xxb-date-picker 
      title="选择日期"
      :ready="pickerReady" 
      :defaulftValue="defaulftValue"
      @showPicker="showPicker" 
      @getPickerValue="getPickerValue"
    ></xxb-date-picker>

    <xxb-date-picker 
      title="选择日期(有多个日期选择)"
      :ready="pickerReady2" 
      :defaulftValue="defaulftValue2"
      emitClosePopupEventName="showPicker2"
      emitGetValueEventName="getPickerValue2"
      @showPicker2="showPicker2" 
      @getPickerValue2="getPickerValue2"
    ></xxb-date-picker>

	</xxb-layout>
</template>

<script>

export default {
  name: 'demo-deta-picker',

  data () {
    return {
      pickerReady: false,             // 是否开启Picker
      pickerReady2: false,             // 是否开启Picker
      defaulftValue: '2018年9月28日',
      defaulftValue2: '2018年7月28日',
    }
  },

  methods:{
    // 监听 popup 关闭 or 开启
    showPicker(val){
      this.pickerReady = val
    },

    // 获取 datePicker 选中值
    getPickerValue(val){
      if(val){
        this.pickerReady = false
        this.$dialog.alert({
          mes: `你选择了:${val}`
        })
      }
    },

    // 监听 popup 关闭 or 开启
    showPicker2(val){
      this.pickerReady2 = val
    },

    // 获取 datePicker 选中值
    getPickerValue2(val){
      if(val){
        this.pickerReady2 = false
        this.$dialog.alert({
          mes: `你选择了:${val}`
        })
      }
    }
  }
}
</script>

<style scoped lang="less">
.demo-cell{
  padding: 2.25rem .65rem 0 .65rem;
}
</style>