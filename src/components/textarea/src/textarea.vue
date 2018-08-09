<template>
  <div class='xxb-textarea'>
      <textarea name="" id="textarea" 
      v-model="value" 
      type="text" 
      :maxlength='maxlength' 
      :placeholder='placeholder' 
      :required='required'
      :readonly="readonly"
      :disabled="disabled"
      :autofocus="autofocus"
      @keyup="wordStatic"
      @focus="focus"
      @blur ="blur"
      ></textarea>
      <div class='num'>{{maxlength-num}}</div>
      <!-- :cols="cols" 
      :rows="rows"  -->
      
  </div>
</template>

<script>
export default {
  name: 'xxb-textarea',
  props: {
    placeholder: {                         //占位符
			type: String,
			default: '请输入内容'
    },
    maxlength:{                           //可输入字符数
      type: Number,
			default: 300
    },
    required:{                            //是否必填
      type: Boolean,
			default: true
    },
    disabled:{                            //是否禁用
      type: Boolean,
			default: false
    },
    readonly:{                            //是否只读
      type: Boolean,
			default: false
    },
    autofocus:{                            //是否自动聚焦
      type: Boolean,
			default: false
    },
    /* cols:{
      type: Number,
			default:60
    }, */
   /*  rows:{
      type: Number,
			default: 2
    } */
  },
  data() {
    return {
      value:null,
      num:null,
    }
  }, 
  methods:{
    wordStatic(){
      if(this.value){
        this.num = this.value.length
      }
      
    },

    focus(){
      console.log(document.getElementById('textarea').clientHeight)
      document.getElementById('textarea').style.height = 80 +'px'
    }, 
    blur(){
      document.getElementById('textarea').style.height = 40 +'px'
      console.log(document.getElementById('textarea').clientHeight) 
    }
  } 
}
</script>

<style lang="less">
 .xxb-textarea{
   position: relative;
   width:100%;
   height:100%;
   padding:0 .5rem;
   textarea{
     width:100%;
     height:2rem;
     padding:.5rem;
     border:1px solid #999;
     border-radius: .5rem;
   }
   .num{
     position: absolute;
     bottom:.5rem;
     right:1rem;
     color:#999;
   }
 }
 
</style>