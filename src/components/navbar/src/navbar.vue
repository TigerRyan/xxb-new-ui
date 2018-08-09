<template>
  <header class="xxb-navbar" :class="navClass" :style="{background: bgcolor, height: height, lineHeight: height}">
    <div class="xxb-navbar-left">
      <slot name="left"></slot>
    </div>

    <div class="xxb-navbar-center" :style="{color: color, fontSize: fontsize}">
      <slot name="center"></slot>
    </div>

    <div class="xxb-navbar-right">
      <slot name="right"></slot>
    </div>
  </header>
</template>

<script type="text/babel">
  export default {
    name: 'xxb-navbar',
    props: {
      title: String,
      fixed: {
        type: Boolean,
        default: true
      },
      bgcolor: {
        type: String,
        default: '#fff'
      },
      color: {
        type: String,
        default: '#333'
      },
      fontsize: {
        validator(value) {
          return /^(\.|\d+\.)?\d+(px|rem)$/.test(value);
        },
        default: '.75rem'
      },
      height: {
        validator(value) {
          return /^(\.|\d+\.)?\d+(px|rem)$/.test(value);
        },
        default: '2.25rem'
      }
    },

    computed: {
      navClass() {
        return this.fixed ? 'xxb-navbar-fixed' : '';
      }
    }
  }
</script>

<style lang="less">
@import "../../../styles/variables";
@import "../../../styles/mixins";
.xxb-navbar {
  height: @navbar-height;
  line-height: @navbar-height;
  position: relative;
  display: flex;
  jutify-content: space-between;
  &:after {
    .bottom-line(@navbar-border-color, 2);
  }
}

.xxb-navbar-left,.xxb-navbar-right{
  width: 2rem;
  text-align: center;
}

.xxb-navbar-center{
  flex: 1;
  text-align: center;
}

.xxb-navbar-fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: @base-zindex * 100;
}
</style>