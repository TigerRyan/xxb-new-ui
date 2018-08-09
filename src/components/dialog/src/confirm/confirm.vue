<template>
  <div class="xxb-confirm-mask">
    <div class="xxb-confirm">
      <div v-if="title" class="xxb-confirm-top">
        <span class="xxb-confirm-title">{{title}}</span>
        <i class="iconfont xxb-icon-close" @click="closeConfirm()"></i>
      </div>
      <p class="xxb-confirm-content" v-html="content"></p>

      <div v-if="typeof opts == 'function'" class="xxb-confirm-footer">
        <span class="xxb-confirm-btn" @click="closeConfirm()">否</span>
        <span class="xxb-confirm-btn" @click="closeConfirm(opts)">是</span>
      </div>

      <div v-else class="xxb-confirm-footer">
        <span 
          class="xxb-confirm-btn"
          v-for="(item,index) in opts"
          :key="index"
          @click="closeConfirm(item.callback)"
          :style="{color: item.color ? item.color : '#353535', width: 100/opts.length + '%' }"
        >{{item.text}}</span>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'xxb-confirm',
  props: {
    title: String,
    content: String,
    opts: {
      type: [Array, Function],
      default: () => {}
    }
  }
}
</script>

<style lang="less">
@import "../../../../styles/mixins";
.xxb-confirm-mask{
  position: fixed;
  z-index: 2000;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,.5);
}
.xxb-confirm{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  background: #fff;
  width: 81.33%;
  border-radius: .35rem;
  color: #333;
  animation: zoomIn .15s ease forwards;
}

@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale3d(.3, .3, .3);
  }
  50% {
    opacity: 1;
  }
}

.xxb-confirm-top{
  height: 2.8rem;
  line-height: 2.8rem;
  font-family: PingFang-SC-Medium;
  font-size: .85rem;
  font-weight: normal;
  color: #333;
  text-align: left;
  padding-left: 1.175rem;
  display: flex;
  justify-content: space-between;
  position: relative;
  &:after{
    .bottom-line(#dedede);
  }
  i{
    width: 2.95rem;
    font-size: .65rem;
    text-align: center;
  }
}

.xxb-confirm-content{
  padding: 1.25rem 1.175rem 1.05rem 1.175rem;
  font-size: .7rem;
  color: #666;
  line-height: .875rem;
  word-break: break-all;
}

.xxb-confirm-footer{
  position: relative;
  text-align: right;
  // &:after{
  //   .top-line(#dedede);
  // }
}
.xxb-confirm-btn{
  display: inline-block;
  text-align: center;
  width: 2.9rem;
  height: 2.125rem;
  line-height: 2.125rem;
  color: #999;
  font-family: PingFang-SC-Medium;
  font-size: .75rem;
}
.xxb-confirm-btn:last-child{
  color: #333;
  position: relative;
  // &:after{
  //   .left-line(#dedede);
  // }
}
</style>