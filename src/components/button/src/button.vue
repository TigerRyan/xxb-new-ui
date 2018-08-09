<template>
  <button
    :disabled="disabled"
    :class="classes"
    :style="{backgroundColor: bgcolor, color: color}"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'xxb-btn',

  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      validator(value) {
        return ['primary', 'danger', 'warning', 'hollow', 'disabled'].indexOf(value) > -1;
      },
      default: 'primary'
    },
    size: {
      validator(value) {
        return ['small', 'large'].indexOf(value) > -1;
      },
      default: 'small'
    },
    bgcolor: {
      type: String
    },
    color: {
      type: String
    }
  },

  computed: {
    classes() {
      let size_class = this.size == 'large' ? 'xxb-btn-block' : 'xxb-btn';
      let bgcolor_class = 'xxb-btn-' + this.type;
      if (this.disabled) {
        bgcolor_class = 'xxb-btn-disabled';
      }

      if (this.bgcolor) {
        bgcolor_class = '';
      }
      return size_class + ' ' + bgcolor_class;
    }
  }
}
</script>

<style lang="less">
@import "../../../styles/variables";
@import "../../../styles/mixins";
.tap-color(@color, @opacity: .9) {
  background-color: @color;
  &:active {
    background-color: @color * @opacity;
  }
}

.xxb-button {
  padding: 0 @body-padding-vertical;
}

.xxb-btn-variant() {
  text-align: center;
  position: relative;
  border: none;
  pointer-events: auto;
}

.xxb-btn {
  .xxb-btn-variant();
  height: @btn-height;
  font-size: @btn-fontsize;
  display: inline-block;
  padding: 0 .5rem;
  box-sizing: content-box;
  border-radius: @btn-radius;
}

.xxb-btn-block {
  .xxb-btn-variant();
  width: 100%;
  display: block;
  font-size: @btn-block-fontsize;
  height: @btn-block-height;
  margin-top: @btn-block-margin-top;
  border-radius: @btn-block-radius;
}

.xxb-btn-primary {
  .tap-color(@btn-primary-bg);
  color: @btn-default-color;
}

.xxb-btn-danger {
  .tap-color(@btn-danger-bg);
  color: @btn-default-color;
}

.xxb-btn-warning {
  .tap-color(@btn-warning-bg);
  color: @btn-default-color;
}

.xxb-btn-disabled {
  .tap-color(@btn-disabled-bg);
  color: @btn-disabled-color;
  pointer-events: none;
}

.xxb-btn-hollow {
  .tap-color(@btn-hollow-bg, .97);
  color: @btn-hollow-color;
  border: 1px solid @btn-hollow-border-color;
}

.hairline .xxb-btn-hollow {
  border: .5px solid @btn-hollow-border-color * 0.95;
}
</style>