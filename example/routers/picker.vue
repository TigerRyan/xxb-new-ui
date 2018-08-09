<template>
  <xxb-layout class="demo-cell">
  	<xxb-navbar class="top" slot="navbar">
  		<div slot="left" @click="$router.go(-1)"><i class="iconfont icon-left"></i></div>
  		<div slot="center">Picker</div>
  	</xxb-navbar>
    
    <div>
      <xxb-btn size="large" @click.native="openPicker">Defaulft</xxb-btn>
      <xxb-btn size="large" @click.native="openPicker2">有多个Picker</xxb-btn>
    </div>
    
  	<xxb-picker 
      :ready="pickerReady" 
      :data="pickerData1"
      @showPicker="showPicker" 
      @getPickerValue="getPickerValue"
    ></xxb-picker>

    <xxb-picker 
      title="选择课程"
      :ready="pickerReady2" 
      :data="pickerData2"
      :defaulftValue="defaulftValue2"
      emitEventName="showPicker2"
      emitGetValueEventName="getPickerValue2"
      @showPicker2="showPicker2" 
      @getPickerValue2="getPickerValue2"
    ></xxb-picker>

	</xxb-layout>
</template>

<script>

export default {
  name: 'demo-cell',

  data () {
    return {
      pickerReady: false,           // 是否开启Picker
      pickerReady2: false,           // 是否开启Picker
      pickerData1: [
        '金针菇',
        '韭菜',
        '黄瓜',
        '茄子',
        '羊肉串',
        '鸡爪',
        '烤鲫鱼',
        '烤馒头',
        '炒花甲',
        '花生米',
        '毛豆'
      ],
      defaulftValue1: '毛豆',

      pickerData2: [
        '语文',
        '数学',
        '英语',
        '化学',
        '生物',
        '科学',
        '物理',
        '心理'
      ],
      defaulftValue2: '心理'
    }
  },

  methods:{
    openPicker(){
      this.pickerReady = true
    },

    openPicker2(){
      this.pickerReady2 = true
    },
    
    // 监听
    showPicker(val){
      this.pickerReady = val
    },

    // 监听
    showPicker2(val){
      this.pickerReady2 = val
    },

    getPickerValue(val){
      if(val){
        this.pickerReady = false
        this.$dialog.alert({
          mes: `你选择了:${val}`
        })
      }
    },

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