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
      <xxb-picker-item :listData="data" v-model="value"></xxb-picker-item>
    </div>
  </xxb-popup>
</template>

<script type="text/babel">
import {Popup} from '../../../popup'
import {PickerItem} from '../picker_item'

export default {
  name: 'xxb-picker',

  components: {
    'xxb-popup': Popup,
    'xxb-picker-item':PickerItem
  },

  data() {
    return {
      value: this.defaulftValue
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
    emitEventName: {
      type: String,
      default: 'showPicker'
    },
    emitGetValueEventName: {
      type: String,
      default: 'getPickerValue'
    },
    data: {
      type: Array,
      default: []
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

  },

  methods:{
    // 监听子组件popup点击蒙层关闭弹框事件，并通知父组件关闭picker
    input(val){
      this.$emit(this.emitEventName,val)
    },
    
    // 通知父组件关闭picker
    close(){
      this.$emit(this.emitEventName,false)
    },

    confirm(){
      this.$emit(this.emitGetValueEventName,this.value)
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
  padding: 0 1.5rem;
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