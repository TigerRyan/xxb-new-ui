<template>
  <div class="xxb-switch">
    <input 
      type="checkbox" 
      class="xxb-switch-input"
      v-model="isChecked" 
      :disabled="disabled"
    >
    <i class="xxb-switch-ui"></i>
  </div>
</template>

<script>

export default {
  name: 'xxb-switch',

  data() {
    return {
      isChecked: this.value
    }
  },  

  props: {
    value: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    emitEventName: {
      type: String,
      default: 'getInputValue'
    }
  },

  watch: {
    value (val,oldVal) {
      this.isChecked = val
    },
    isChecked (val,oldVal) {
      this.$emit(this.emitEventName, val)
    }
  },

  methods: {
    
  }
}
</script>
<style lang="less">
.xxb-switch{
  display: inline-block;
  position: relative;
  width: 1.25rem;
  height: 100%;
  line-height: inherit;
  .xxb-switch-input{
    position: absolute;
    z-index: 1;
    width: 1.3rem;
    height: 100%;
    opacity: 0;
    padding: 0;
    left: 0;
    &:checked + .xxb-switch-ui{
      border-color: #6782f5;
      background-color: #6782f5;
      &::before{
        transform: scale(0);
      }
      &::after{
        transform: translateX(.45rem);
      }
    }
    &:disabled + .xxb-switch-ui{
      opacity: 0.3;
      background-color: #6782f5;
    }
  }
  .xxb-switch-ui{
    position: relative;
    display: inline-block;
    width: 1.15rem;
    height: .7rem;
    box-sizing: content-box;
    border: 1px solid #e4e4e4;
    border-radius: .35rem;
    background-color: #e4e4e4;
    margin: 0;
    padding: 0;
    &::before, &::after{
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: .35rem;
      background-color: #e4e4e4;
      transition: transform .4s cubic-bezier(.25, .1, .25, 1.28);
    }
    &::after{
      width:.7rem;
      background-color: #fff;
      box-shadow: 0 1px 3px rgba(0, 0, 0, .4)
    }
  }
}
</style>