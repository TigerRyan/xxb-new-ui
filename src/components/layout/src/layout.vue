<template>
  <section class="xxb-flexview">
    <slot name="navbar"></slot>

    <section class="xxb-scrollview" ref="scrollView" id="scrollView">
      <slot></slot>
    </section>

    <slot name="tabbar"></slot>
  </section>
</template>

<script type="text/babel">
  export default {
    name: 'xxb-layout'
  }
</script>

<style lang="less">
@import "../../../styles/variables";

.xxb-flexview {
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: @max-width;
  min-width: @min-width;
}

.xxb-scrollview {
  width: 100%;
  height: 100vh;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  position: relative;
}

.ios .xxb-scrollview {
  margin-top: 1px;
}

.hairline .xxb-scrollview {
  margin-top: 0.5px;
}
</style>