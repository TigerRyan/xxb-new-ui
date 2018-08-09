<template>
  <div 
    :class="['xxb-scroll-item', isMoveStatus ? 'touch-move-active' : '']"
    @touchstart='touchstart($event)'
    @touchmove="touchMove($event)" 
  >
    <div class="xxb-scroll-item-content">
      <slot name="content"></slot>
    </div>
    <div class="xxb-scroll-item-btn-contain">
      <span class="xxb-scroll-item-btn-edit" v-if="editHandle" @click="editHandleEmit">编辑</span>
      <span v-if="delHandle" @click="delHandleEmit">删除</span>
    </div>
    
  </div>
</template>

<script>

export default {
  name: 'xxb-scroll-item',

  data() {
    return {
      startX: null,
      startY: null,
    }
  },  

  props: {
    isMoveStatus: {
      type: Boolean,
      default: false
    },
    currentItem: {
      type: Object
    },
    editHandle:{
      type: Function
    },
    delHandle:{
      type: Function
    },
  },

  methods: {
    touchstart(e){
      this.startX = e.targetTouches[0].pageX;   // 按下的x抽距离
      this.startY = e.targetTouches[0].pageY;   // 按下的y抽距离
    },

    touchMove(e){
      let touchMoveX = e.targetTouches[0].pageX,   // 滑动变化坐标
        touchMoveY = e.targetTouches[0].pageY,   // 滑动变化坐标
        angle = this.angle({ X: this.startX, Y: this.startY }, { X: touchMoveX, Y: touchMoveY }); //获取滑动角度

      if(Math.abs(angle) > 30) return;
          //右滑
      if(touchMoveX > this.startX){
        this.$emit('update:isMoveStatus',false)
      }
      //左滑
      else{
        this.$emit('getCurrentItem',this.currentItem)
        this.$emit('update:isMoveStatus',true)
      } 
    },

    touchEnd(e){

    },

    /**
    * 计算滑动角度
    * @param {Object} start 起点坐标
    * @param {Object} end 终点坐标
    */
    angle(start, end) {
      var _X = end.X - start.X,
          _Y = end.Y - start.Y;
      //返回角度 /Math.atan()返回数字的反正切值
      return 360 * Math.atan(_Y / _X) / (2 * Math.PI);
    },

    editHandleEmit(){
      this.$emit('update:isMoveStatus',false)
      this.editHandle(this.currentItem)
    },

    delHandleEmit(){
      this.delHandle(this.currentItem)
      this.$emit('update:isMoveStatus',false)
    }
  }
}
</script>
<style lang="less">
@import "../../../styles/mixins";
.xxb-scroll-item{
  display: flex;
  position:relative;
  width:100%;
  box-sizing:border-box;
  justify-content: space-between;
  overflow: hidden;
  background: #fff;
}
.touch-move-active{
  .xxb-scroll-item-content,
  .xxb-scroll-item-btn-contain{
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}
.xxb-scroll-item-content{
  display: flex;
  width: 100%;
  margin-right:0;
  -webkit-transition: all 0.4s;
  transition: all 0.4s;
  -webkit-transform: translateX(90px);
  transform: translateX(90px);
  margin-left: -90px;
}

.xxb-scroll-item-btn-contain {
    background-color: #6782f5;
    width: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    -webkit-transform: translateX(90px);
    transform: translateX(90px);
    -webkit-transition: all 0.4s;
    transition: all 0.4s;
    span{
      width: 50%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      font-size: .65rem;
    }
    .xxb-scroll-item-btn-edit{
      &:after{
        .right-line(#fff);
        top: 20%;
        height: 60%;
      }
    }
}
</style>