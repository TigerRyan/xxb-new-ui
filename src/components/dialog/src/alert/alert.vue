<template>
  <div class="xxb-alert-mask">
    <div class="xxb-alert-content">
      <p class="xxb-alert-text" v-html="mes"></p>
      <div class="xxb-alert-btn" @click="closeAlert()">确定</div>
    </div>
  </div>
</template>

<script type="text/babel">
export default {
  name: 'xxb-alert',
  props: {
    mes: String
  }
}
</script>

<style lang="less">
@import "../../../../styles/mixins";
.xxb-alert-mask{
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
.xxb-alert-content{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  background: rgba(40,40,40,.85);
  width: 85%;
  background-color: #fafafa;
  border-radius: 2px;
  font-size: .75rem;
  text-align: center;
  font-size: .7rem;
  color: #888;
  animation: zoomIn .15s ease forwards;
  p{
    margin-top: .5rem;
    width: 100%;
    padding: .5rem .5rem 0 .5rem;
    word-break: break-all;
    line-height: 1rem;
  }
}

.xxb-alert-btn{
  margin-top: .45rem;
  height: 2rem;
  line-height: 2rem;
  position: relative;
  color: #1494d2;
  &:after{
    .top-line(#dedede);
  }
}

@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale3d(.3, .3, .3);
  }
  100% {
    opacity: 1;
  }
}
</style>