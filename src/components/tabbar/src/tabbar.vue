<template>
  <footer
    class="xxb-tabbar tabbbar-top-line-color"
    :class="classes"
    :style="styles"
  >
    <slot></slot>
  </footer>
</template>

<script>
export default {
  name: 'xxb-tabbar',

  props: {
    fixed: Boolean,
    activeColor: {
      type: String,
      default: '#09BB07'
    },
    bgcolor: {
      type: String,
      default: '#fff'
    },
    color: {
      type: String,
      default: '#979797'
    },
    fontsize: {
      validator(value) {
        return /^(\.|\d+\.)?\d+(px|rem)$/.test(value);
      },
      default: '0.6rem'
    }
  },

  computed: {
    classes() {
      return this.fixed ? 'xxb-tabbar-fixed' : '';
    },
    styles() {
      return {
        color: this.activeColor,
        backgroundColor: this.bgcolor,
        fontSize: this.fontsize
      }
    }
  }
}
</script>

<style lang="less">
@import "../../../styles/variables";
@import "../../../styles/mixins";

.xxb-tabbar {
  width: 100%;
  // position: relative;
  z-index: @base-zindex * 100;
  display: flex;
  align-items: center;
  padding: .16rem 0 .275rem;
  background-color: @tabbar-bg;
  &:after {
    .top-line(@tabbar-border-color);
  }
}

.xxb-tabbar-fixed {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 49;
}

.xxb-tabbar-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.xxb-tabbar-active {
  color: inherit;
  .tabbar-icon {
    color: inherit;
  }
}

.xxb-tabbar-badge {
  position: absolute;
  top: -.02rem;
  left: 100%;
  z-index: 999;
  margin-left: -.15rem;
}

.xxb-tabbar-dot {
  display: block;
  width: 10px;
  height: 10px;
  background-color: #EF4F4F;
  border-radius: 50%;
  position: absolute;
  top: .02rem;
  left: 100%;
  z-index: 999;
  margin-left: -.11rem;
}

.xxb-tabbar-icon {
  height: 2rem;
  display: flex;
  align-items: center;
  position: relative;
  img {
    height: 70%;
  }
}

.xxb-tabbar-txt {
  display: inline-block;
  font-size: inherit;
}
</style>