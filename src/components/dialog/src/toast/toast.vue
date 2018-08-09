<template>
  <div class="xxb-toast-mask">
    <div class="xxb-toast-content">
      <i v-if="icon" class="iconfont xxb-toast-iconfont" :class="iconfont"></i>
      <p class="xxb-toast-text" v-html="mes"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'xxb-toast',
  props: {
    mes: String,
    icon: String,
    timeout: Number,
    callback: Function,
    show: Boolean
  },
  computed: {
    iconfont() {
      let iconfont = ''
      if (this.icon === 'success' || this.icon === 'error' || this.icon === 'warn') {
        iconfont = 'xxb-icon-' + this.icon
      }
      return iconfont;
    }
  }
}
</script>

<style lang="less">
.xxb-toast-mask{
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
.xxb-toast-content{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  background: rgba(40,40,40,.85);
  min-width: 6rem;
  min-height: 4rem;
  max-width: 81.33%;
  padding: .6rem .5rem .5rem .5rem;
  text-align: center;
  border-radius: 3px;
  color: #fff;
  font-size: .7rem;
  animation: zoomIn .15s ease forwards;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .iconfont{
    font-size: 2rem;
    display: block;
    margin-bottom: .5rem
  }
  p{
    width: 100%;
  }
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
</style>