<template>
  <xxb-layout class="demo-cell">
    <xxb-navbar class="top" slot="navbar">
      <div slot="left" @click="$router.go(-1)"><i class="iconfont icon-left"></i></div>
      <div slot="center"><p>Cell</p></div>
    </xxb-navbar>
      
    <div>
      <xxb-cell-item>
        <i class="iconfont icon-wallet" slot="icon"></i>
        <span slot="left">封面图片</span>
        <span slot="right">
          已上传<i class="iconfont icon-right"></i>
        </span>
      </xxb-cell-item>

      <xxb-cell-item>
        <i class="iconfont icon-activity" slot="icon"></i>
        <span slot="left">学校名称</span>
        <input type="text" slot="right" placeholder="请输入学校名称">
      </xxb-cell-item>

      <xxb-cell-item>
        <i class="iconfont icon-wodehongbao" slot="icon"></i>
        <span slot="left">邀请有奖</span>
        <span slot="right"><i class="iconfont icon-right"></i></span>
      </xxb-cell-item>

      <xxb-cell-item>
        <i class="iconfont icon-jinlingyingcaiwangtubiao07" slot="icon"></i>
        <span slot="left">我的积分</span>
        <span slot="right"><i class="iconfont icon-right"></i></span>
      </xxb-cell-item>

      <xxb-cell-item>
        <i class="iconfont icon-kefu-pressed" slot="icon"></i>
        <span slot="left">成立时间</span>
        <span slot="right" @click="openPicker">{{date}}<i class="iconfont icon-right"></i></span>
      </xxb-cell-item>

      <xxb-cell-item>
        <i class="iconfont icon-youxi" slot="icon"></i>
        <span slot="left">智力游戏</span>
        <span slot="right"><i class="iconfont icon-right"></i></span>
      </xxb-cell-item>

      <xxb-cell-item>
        <span slot="left">关于我们</span>
        <span slot="right"><i class="iconfont icon-right"></i></span>
      </xxb-cell-item>

      <xxb-cell-item>
        <span slot="left">联系电话</span>
        <input type="number" slot="right" placeholder="请输入电话号码">
      </xxb-cell-item>
    </div>

    <xxb-date-picker 
      title="选择日期"
      :ready="pickerReady" 
      :defaulftValue="defaulftValue"
      @showPicker="showPicker" 
      @getPickerValue="getPickerValue"
    ></xxb-date-picker>
	</xxb-layout>
</template>

<script>

export default {
  name: 'demo-cell',

  data () {
    return {
      pickerReady: false,                 // 是否开启Picker
      defaulftValue: '2018年7月28日',
      date: ''
    }
  },

  methods: {
    openPicker(){
      this.pickerReady = true

      console.log('1111111')
    },

    // 监听 popup 关闭 or 开启
    showPicker(val){
      this.pickerReady = val
    },

    // 获取 datePicker 选中值
    getPickerValue(val){
      if(val){
        this.pickerReady = false
        this.date = val
      }
    },
  }
}
</script>

<style scoped lang="less">
.demo-cell{
  padding-top: 2.25rem;
}
</style>