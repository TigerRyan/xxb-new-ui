<template>
  <xxb-popup v-model="show" @input="input" position="bottom" height="40%">
    <!-- 头部按钮区域 -->
    <div class="xxb-picker-top">
      <span class="xxb-picker-top-btn" @click="close">取消</span>
      <p class="xxb-picker-top-title">{{title}}</p>
      <span class="xxb-picker-top-btn" @click="confirm">确定</span>
    </div>

    <!-- 选择区域 -->
    <div class="xxb-picker-wheel-contain">
      <xxb-picker-item :listData="yearList" v-model="year"></xxb-picker-item>
      <xxb-picker-item :listData="monthList" v-model="month"></xxb-picker-item>
      <xxb-picker-item :listData="dayList" v-model="day"></xxb-picker-item>
    </div>
  </xxb-popup>
</template>

<script type="text/babel">
import {Popup} from '../../../popup'
import {PickerItem} from '../picker_item'

export default {
  name: 'xxb-date-picker',

  components: {
    'xxb-popup': Popup,
    'xxb-picker-item':PickerItem
  },

  data() {
    return {
      yearList: [],
      monthList: [],
      year: '',
      month: '',
      day: '',
    }
  },

  props:{
    ready: {
      type: Boolean,
      default: false
    },
    defaulftValue: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    emitClosePopupEventName: {
      type: String,
      default: 'showPicker'
    },
    emitGetValueEventName: {
      type: String,
      default: 'getPickerValue'
    }
  },

  computed:{
    show: {  
      get: function () {
        return this.ready
      },
      set: function () {
        return this.ready
      }
    },
    
    dayList(){
      let num = null, 
        arr = [],
        arr1 = [],
        arr2 = ['1月','3月','5月','7月','8月','10月','12月']

      for(var i=1;i<=30;i++){
        arr.push(i + '日')
      }

      if(this.month === '2月'){
        arr1 = arr.slice(0,arr.length-2)
        if(Number(this.day.slice(0,this.day.length-1)) >= 28){
          this.day = '28日'
        }
      }else if(arr2.indexOf(this.month) >= 0){
        arr.push(i + '日')
        arr1 = arr 
      }else{
        arr1 = arr
        if(Number(this.day.slice(0,this.day.length-1)) >= 30){
          this.day = '30日'
        }
      }

      return arr1
    },
  },

  created(){
    let date = new Date()
    let currentYear = date.getFullYear()

    this.year = this.defaulftValue 
      ? this.defaulftValue.split('年')[0] + '年'
      : date.getFullYear() + '年'

    this.month = this.defaulftValue ? this.defaulftValue.split('月')[0].slice(this.defaulftValue.split('月')[0].indexOf('年')+1,this.defaulftValue.split('月')[0].length) + '月' : date.getMonth() + 1 + '月'
    this.day = this.defaulftValue ? this.defaulftValue.split('月')[1]: date.getDate() + '日'
    
    for(var i=currentYear-10;i<=currentYear+10 ;i++){
      this.yearList.push( i + '年')
    }

    for(var i=1;i<=12;i++){
      this.monthList.push(i + '月')
    }
  },

  methods:{
    // 监听子组件popup点击蒙层关闭弹框事件，并通知父组件关闭picker
    input(val){
      this.$emit(this.emitClosePopupEventName,val)
    },
    
    // 通知父组件关闭picker
    close(){
      this.input(false)
    },

    confirm(){
      this.$emit(this.emitGetValueEventName,this.year + this.month + this.day)
    }
  }
}
</script>

<style lang="less">
@import "../../../../styles/mixins";
.xxb-picker-top{
  display: flex;
  justify-content: space-between;
  height: 2rem;
  line-height: 2rem;
  font-size: .75rem;
  position: relative;
  &:after{
    .bottom-line(#dedede);
  }
}
.xxb-picker-top-btn{
  width: 4.25rem;
  text-align: center;
  &:first-child{
    color: #999;
  }
  &:last-child{
    color: #1494d2;
  }
}
.xxb-picker-top-title{
  flex: 1;
  text-align: center;
  color: #333;
  font-weight: 500;
}

.xxb-picker-wheel-contain{
  height: 10rem;
  // overflow: hidden;
  // position: relative;
  line-height: 1.8;
  display: flex;
}
</style>