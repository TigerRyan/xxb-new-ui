<template>
  <xxb-layout class="demo-slider">
  	<xxb-navbar class="top">
  		<div slot="left" @click="$router.go(-1)"><i class="iconfont icon-left"></i></div>
  		<div slot="center"><p>slider</p></div>
  	</xxb-navbar>
		
		<xxb-slider 
			:showDots='true' 
			:interval='3000' 
			:isAutoPlay='true' 
			:initialIndex=1 
			:slideList='list' 
			@getIindex='getIindex'  
			:height='10'
		 	
		>
		<!-- direction='vertical'     垂直方向 -->
			<div slot='sliderDots' class='carousel-items'>
				<span v-for="(item,index) in list.length"  :key='index' :class="{'active':index===listIndex}" ></span>
			</div>
		</xxb-slider>
	</xxb-layout>
</template>
<script>
export default {
  name: 'demo-slider',
  data () {
    return {
			listIndex:null,
      list: [
					{
							"clickUrl": "#",	
							"image": "https://wx1.sinaimg.cn/mw690/7316721cgy1fs4rxvnf1tj218w0u0nbm.jpg"
					},
					{
							"clickUrl": "#",	
							"image": "http://img2.imgtn.bdimg.com/it/u=4068982404,2070377298&fm=27&gp=0.jpg"
					},
					{
							"clickUrl": "#",
							"image": "https://wx1.sinaimg.cn/mw690/7316721cgy1frus41hs7vj20u016f7jr.jpg"
					},
					{
							"clickUrl": "#",
							"image": "https://wx2.sinaimg.cn/mw690/7316721cgy1fs8tm3fmqgj21kw1kw7wh.jpg"
					}
			],
    } 
	},
	 methods: {
		 //接收子组件传过来的currentIndex值
		 getIindex(e){
			 this.listIndex = e
		 }
	 }
}
</script>

<style scoped lang="less">
  .demo-slider{
		padding-top: 2.25rem;
		.carousel-items {
			span {
				width: 1rem;
				height: .2rem;
				border-radius:2px;
				background-color: #b2b2b2;
			}
			.active {
					background-color: #e2a315;
			}
		}
  }
</style>