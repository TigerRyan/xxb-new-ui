<template>
  <div class="xxb-slider" >	
			<div class="carousel-wrap" id="carousel" :style="{height:height+'rem'}">
				<!-- 轮播图列表 -->
				<transition-group tag="ul" class='slide-ul' :name="directionName">
					<li v-for="(list,index) in slideList" 
					:key="index" 
					v-show="index===currentIndex" 
					@touchstart='touchstart($event)'
					@touchmove="touchMove($event)"
					@touchend="touchEnd($event)">
						<a :href="list.clickUrl" >
							<img :src="list.image">
						</a>
					</li>
				</transition-group>
				<!-- 轮播图位置指示 -->
				<div :class="direction=='horizontal'?'Hcarousel-items':'Vcarousel-items'" v-show="showDots">
					<slot name='sliderDots'>
						<span v-for="(item,index) in slideList.length"  :key='index' :class="{'active':index===currentIndex}" ></span>
					</slot>
				</div>
			</div>
  </div>
</template>
<script>
export default {
  name: 'xxb-slider',
  props: {
		height: {										//轮播盒子的高度
			type: Number,
			default: 10
		},
		showDots: {                 //点是否显示
			type: Boolean,
			default: true
		},
		interval: {                 //时间间隔
			type: Number,
			default: 2000
		},
		isAutoPlay: {                //是否自动播放
			type: Boolean,
			default: true
		},
		isLoop:{                    //是否循环播放
			type: Boolean,
			default: true
		},
		initialIndex:{               //初始时显示第几张
			type: Number,
			default: 0
		},
		slideList:{                 //轮播数据
			type: Array,
			default:([])=>{}
		},
		direction:{                //播放的方向  vertical,horizontal
			type: String,
			default: 'horizontal'    //默认水平
		}
	},
  data () {
    return {
			currentIndex:null,      	//当前index
			timer: null,              //定时器
			endtouchMoveX:null,       //x轴方向滑动距离
			endtouchMoveY:null,       //Y轴方向滑动距离
			directionName:null,       //四种滑动方向
    }
	},
	created() {
		//初始滑动方向
		if(this.direction=='horizontal'){
			this.directionName = 'Lhorizontal'
		}else{
				this.directionName = 'Uvertical'
		}
		this.currentIndex = this.initialIndex
		//在DOM加载完成后，下个tick中开始轮播
		if(this.isAutoPlay){
			this.$nextTick(() => {
        this.timer = setInterval(() => {
            this.autoPlay()
        }, this.interval)
    	})
		} 
	},
	mounted() {},
  methods: {
		//滑动
		touchstart(e){
			//手滑时 停掉自动轮播定时器
			clearInterval(this.timer)
      this.startX = e.targetTouches[0].pageX;   // 按下的x抽距离
			this.startY = e.targetTouches[0].pageY;   // 按下的y抽距离
		},
		touchMove(e){
      let touchMoveX = e.targetTouches[0].pageX,   // 滑动变化坐标
          touchMoveY = e.targetTouches[0].pageY;  // 滑动变化坐标
					this.endtouchMoveX = this.startX-touchMoveX
					this.endtouchMoveY = this.startY-touchMoveY
		},
		touchEnd(e){
				if(this.endtouchMoveX>80){ // 左滑
					this.directionName = 'Lhorizontal'
					this.currentIndex+=1
					if(this.currentIndex > this.slideList.length - 1){
						 this.currentIndex = 0
					}
				}else if(this.endtouchMoveX<-80){ //右滑
					this.directionName = 'Rhorizontal'
					this.currentIndex-=1
					if(	this.currentIndex<0){
						this.currentIndex = this.slideList.length-1
					}
				}

				if(this.endtouchMoveY>80){ //上滑
						this.directionName = 'Uvertical'
						this.currentIndex+=1
					if(this.currentIndex > this.slideList.length - 1){
						 this.currentIndex = 0
					}
				}else if(this.endtouchMoveY<-80){ // 下滑
					this.directionName = 'Dvertical'
					this.currentIndex-=1
					if(	this.currentIndex<0){
						this.currentIndex = this.slideList.length-1
					}
				}
				//停止手滑interval毫秒后  恢复自动轮播
				this.timer = setInterval(() => {
          this.autoPlay()
        }, this.interval)
					console.log('currentIndex___'+this.currentIndex)
		},
		//播放
		autoPlay() {
				this.currentIndex++
				if (this.currentIndex > this.slideList.length - 1) {
					if(this.isLoop){
						this.currentIndex = 0
					}else{
						this.currentIndex =this.slideList.length - 1
						clearInterval(this.timer)
						this.timer = null
					}
				}	
			//	console.log('autoPlay------',	this.currentIndex)
		},
		//当前播放的index，传给父组件
		passIndex(){
			this.$emit('getIindex',this.currentIndex)
		//	console.log('this.currentIndex',this.currentIndex)
		}
	},
	watch:{
		//监听currentIndex变化时
		currentIndex(val, oldVal){
			this.passIndex()
		}
	}
}
</script>

<style lang="less">
  .xxb-slider{
		.carousel-wrap {
			position: relative;
			// height: 16rem;
			width: 100%;
			overflow: hidden;
			background-color: #fff;
		}
		.slide-ul {
			width: 100%;
			height: 100%;
			li {
				position: absolute;
				width: 100%;
				height: 100%;
				img {
					width: 100%;
					height: 100%;
				}
			}
		}
		//水平方向指示点的样式
	.Hcarousel-items {
			position: absolute;
			z-index: 10;
			bottom: .5rem;
			width: 100%;
			margin: 0 auto;
			text-align: center;
			span {
				display: inline-block;
				height: .5rem;
				width: .5rem;
				border-radius:50%;
				margin: 0 .2rem;
				background-color: #b2b2b2;
				cursor: pointer;
			}
			.active {
					background-color: #3658f0;
			}
		}
		//垂直方向指示点的样式
	.Vcarousel-items {
		position: absolute;
		z-index: 10;
		top:50%;
		transform: translateY(-50%);
		right: -1rem;
		width: 2rem;
		span {
			display: block;
			height: .5rem;
			width: .5rem;
			border-radius: 50%;
			margin: .2rem 0;
			background-color: #b2b2b2;
			cursor: pointer;
		}
		.active {
				background-color: #3658f0;
			}
		}
		// 水平左方向滑动动画
		.Lhorizontal-enter-to {
			transition: all 1s ease;
			transform: translateX(0);
		}

		.Lhorizontal-leave-active {
			transition: all 1s ease;
			transform: translateX(-100%)
		}

		.Lhorizontal-enter {
			transform: translateX(100%)
		}

		.Lhorizontal-leave {
			transform: translateX(0)
		}
		// 水平右方向滑动动画
		.Rhorizontal-enter-to {
			transition: all 1s ease;
			transform: translateX(0);
		}

		.Rhorizontal-leave-active {
			transition: all 1s ease;
			transform: translateX(100%)
		}

		.Rhorizontal-enter {
			transform: translateX(-100%)
		}

		.Rhorizontal-leave {
			transform: translateX(0)
		}
		// 垂直上方向滑动动画
		.Uvertical-enter-to {
			transition: all 1s ease;
			transform: translateY(0);
		}
		.Uvertical-leave-active {
			transition: all 1s ease;
			transform: translateY(-100%)
		}
		.Uvertical-enter {
			transform: translateY(100%)
		}
		.Uvertical-leave {
			transform: translateY(0)
		}
		// 垂直下方向滑动动画
		.Dvertical-enter-to {
			transition: all 1s ease;
			transform: translateY(0);
		}
		.Dvertical-leave-active {
			transition: all 1s ease;
			transform: translateY(100%)
		}
		.Dvertical-enter {
			transform: translateY(-100%)
		}
		.Dvertical-leave {
			transform: translateY(0)
		}
  }
</style>