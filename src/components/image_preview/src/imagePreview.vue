<template>
	<div class="xxb-image-preview">
      <div class="xxb-alert-mask" v-if="imagePreview" v-on:click.self="aa">
          <div class="image" :class="guanbi?'shrink':'magnify'">
              <transition-group class="image-list" tag="div" :name="isSlide?'rightSlide':'LeftSlide'">
                  <ul
                    v-for="(item,index) in imgList"
                    :key="index"
                    v-show="index===currentIndexs"
                    class="img-content" >
                      <li class="img-content-li">
                          <img class="look-img"
                            @touchstart='touchstart($event)'
                            @touchmove="touchMove($event)"
                            @touchend="touchEnd($event)"
                            :src="item"/>
                            {{index}}
                      </li>
                  </ul>
              </transition-group>
          </div>
      </div>
	</div>
</template>

<script>
export default {
	name: 'xxb-image-preview',

	data () {
		return {
        currentIndexs: this.currentIndex,
        startX: 0,
        startY: 0,
        moveDistance:null,
        guanbi: false,
        beingSynthesis: null,
        isSlide:true
		}
	},

	props: {
      imgList:{
          type: Array,
          default: []
      },
      currentIndex:{                                              // 点击的下标
          type: Number,
          default: 0
      },
      imagePreview:{
          type: Boolean,
          default: false
      }
  },
  created(){
  },
	methods: {
      touchstart(e){
          this.startX = e.targetTouches[0].pageX;      // 按下的x抽距离
      },
      touchMove(e){
          let touchMoveX = e.targetTouches[0].pageX;   // 滑动变化坐标
          this.moveDistance = this.startX-touchMoveX;
      },
      touchEnd(e){
        console.log(this.moveDistance,this.currentIndexs)
          if(this.moveDistance > 50 ){
              this.isSlide=true;
              this.currentIndexs += 1;
              if(this.currentIndexs >= this.imgList.length-1){
                this.currentIndexs = 0;
              }
          }else if(this.moveDistance < -50){
              this.isSlide=false;
              this.currentIndexs -= 1;
              if(	this.currentIndexs < 0){
                this.currentIndexs = this.imgList.length-1
              }
              console.log(this.moveDistance,this.currentIndexs,'55')
          }

      },
      aa(){
        this.guanbi=true
        this.beingSynthesis=setTimeout(()=>{
          this.$emit('update:imagePreview',false)
          this.guanbi=false
          this.beingSynthesis=null
        },300)

      }
	}
}
</script>

<style lang="less">
  .xxb-image-preview{
      width: 100%;
      height: 100vh;
      .image-preview{
        display: none;
      }
      .image{
          width: 80%;
          height: 20rem;
          background: #fff;
          position: relative;
      }
      .image-list{
          width: 100%;
          height: 100%;
          position: relative;
          overflow: hidden;
      }
      .img-content {
        position: absolute;
        width: 100%;
        height: 100%;
      }
      .img-content-li{
          width: 80%;
          height: 20rem;
          text-align: center;
          display:table-cell;
          vertical-align: middle;
      }
      .look-img {
        max-height:100%;
        max-width:100%;
      }
      // 左滑

      .LeftSlide-enter-to {
        transition: all 0.5s ease;
        transform: translateX(0);
      }

      .LeftSlide-leave-active {
        transition: all 0.5s ease;
        transform: translateX(100%)
      }

      .LeftSlide-enter {
        transform: translateX(-100%)
      }

      .LeftSlide-leave {
        transform: translateX(0)
      }
       // 右滑动动画
      .rightSlide-enter-to {
        transition: all 0.5s ease;
        transform: translateX(0);
      }

      .rightSlide-leave-active {
        transition: all 0.5s ease;
        transform: translateX(-100%)
      }

      .rightSlide-enter {
        transform: translateX(100%)
      }

      .rightSlide-leave {
        transform: translateX(0)
      }
      .switchover{
        position: absolute;
        width: 100%;
        bottom: -2rem;
        text-align: center;
        height: 2rem;
        line-height: 2rem;
        z-index: 999;
      }
      .iconfont{
        font-size: .9rem;
        color: #fff;
      }
      .icon-left{
        margin-right: 2rem
      }
      .magnify{
        opacity: 0;
        animation: magnify .3s ease forwards;
      }
      .shrink{
        opacity: 0;
        animation: shrink .3s ease forwards;
      }
  }
  @keyframes magnify {
    from {
      opacity: 0;
      transform:scale(0);
    }
    to {
      opacity: 1;
      transform:scale(1);
    }
  }
  @keyframes shrink {
    from {
      opacity: 1;
      transform:scale(1);
    }
    to {
      opacity: 0;
      transform:scale(0);
    }
  }
      // .levelSlide-enter-active, .levelSlide-leave-active {
      //     transition: opacity .5s;
      //   }
      // .levelSlide-enter, .levelSlide-leave-to /* .fade-leave-active below version 2.1.8 */ {
      //   opacity: 0;
      // }

</style>
