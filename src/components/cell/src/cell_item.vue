<template>
  <div class="xxb-cell">
    <div class="xxb-cell-left">
      <span class="xxb-cell-left-icon">
        <slot name="icon"></slot>
      </span>
      <slot name="left"></slot>
    </div>

    <div class="xxb-cell-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'xxb-cell-item'
  }
</script>

<style lang="less">
@import "../../../styles/variables";
@import "../../../styles/mixins";
.xxb-cell{
  display: flex;
  justify-content: space-between;
  padding: 0 .6rem 0 .65rem;
  width: 100%;
  box-sizing: border-box;
  height: 2.25rem;
  line-height: 2.25rem;
  background: #fff;
  position: relative;
  font-size: .75rem;
  color: #333;
  &:after{
    .bottom-line(#eee);
  }
  input{
    padding: 0 1rem 0 .65rem;
    width: 100%;
    height: 100%;
    line-height: 100%;
    outline: none;
    border: none;
    text-align: right;
  }
}

.xxb-cell-left-icon{
  color: #8a8a8a;
  .iconfont{
    font-size: 1.1rem;
    vertical-align: -4%;
    margin-right: .2rem;
  }
}

.xxb-cell-right{
  color: #999;
  flex: 1;
  text-align: right;
  span{
    display: inline-block;
    width: 100%;
  }
  i{
    margin-left: .15rem;
  }
}
</style>